import { useEffect, useState } from "react";
import { useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FiMinimize, FiMaximize } from "react-icons/fi";
import { MdPictureInPictureAlt } from "react-icons/md";
import { IoVolumeLow, IoVolumeMedium, IoVolumeMute } from "react-icons/io5";

const VideoPlayer = ({ videoPath }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [duration, setDuration] = useState({ current: "00:00", full: "00:00" });
  const [volumeLevel, setVolumeLevel] = useState({ level: 0, type: "muted" });

  const videoRef = useRef();
  const videoContainerRef = useRef();
  const timeLineRef = useRef();
  let isDragging = false;

  const formatTime = (time) => {
    const leadingZero = Intl.NumberFormat(undefined, {
      minimumIntegerDigits: 2,
    });

    const seconds = leadingZero.format(Math.floor(time % 60));
    const minutes = leadingZero.format(Math.floor(time / 60) % 60);
    const hours = leadingZero.format(Math.floor(time / 3600));

    let duration;

    if (hours === "00") {
      duration = `${minutes}:${seconds}`;
    } else {
      duration = `${hours}:${minutes}:${seconds}`;
    }

    return duration;
  };

  document.addEventListener("mouseup", (e) => {
    if (isDragging) {
      onDragging(e);
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      onTimelineUpdate(e);
    }
  });

  const onDragging = (e) => {
    const rect = timeLineRef.current.getBoundingClientRect();
    const percentage =
      Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;
    timeLineRef.current.style.setProperty("--progress-position", percentage);

    const isLeftMouseClicked = (e.buttons & 1) === 1;

    console.log(e.buttons);

    if (isLeftMouseClicked) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.currentTime = percentage * videoRef.current.duration;
      videoRef.current.play();
      setIsPlaying(true);
    }

    isDragging = isLeftMouseClicked;
  };

  const onTimelineUpdate = (e) => {
    if (!isDragging) {
      return;
    }

    e.preventDefault();
    const rect = timeLineRef.current.getBoundingClientRect();
    const percentage =
      Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;
    timeLineRef.current.style.setProperty("--progress-position", percentage);
    videoRef.current.currentTime = percentage * videoRef.current.duration;
  };

  const onTimeUpdate = () => {
    const percentage = videoRef.current.currentTime / videoRef.current.duration;
    timeLineRef.current.style.setProperty("--progress-position", percentage);

    setDuration({
      ...duration,
      current: formatTime(videoRef.current.currentTime),
    });
  };

  const onVideoLoad = () => {
    const full = videoRef.current.duration;

    let duration = formatTime(full);

    videoRef.current.volume = 0;
    setDuration({ current: "00:00", full: duration });
  };

  const onPlay = () => {
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();
    setIsPlaying(!videoRef.current.paused);
  };

  const onMiniPlayer = () => {
    if (isMiniPlayer) {
      document.exitPictureInPicture();
      setIsMiniPlayer(false);
      return;
    }

    videoRef.current.requestPictureInPicture();
  };

  useEffect(() => {
    window.scrollTo({ top: scrollY, behavior: "auto" });
  }, [isFullScreen]);

  const onFullScreen = () => {
    if (document.fullscreenElement !== null) {
      document.exitFullscreen();
      setIsFullScreen(false);
      return;
    }
    setIsFullScreen(true);
    setScrollY(window.scrollY);
    videoContainerRef.current.requestFullscreen();
  };

  const onVolumeChange = (level) => {
    let type;

    if (level >= 0.5) {
      type = "medium";
    } else if (level < 0.5 && level > 0) {
      type = "low";
    } else {
      type = "muted";
    }

    setVolumeLevel({ level: level, type: type });
    videoRef.current.volume = level;
  };

  return (
    <div
      className={`video ${!isPlaying ? "video--paused" : ""} ${
        !isFullScreen ? "video--fullscreen" : ""
      }`}
      ref={videoContainerRef}
    >
      <div className="video__navigation">
        <div
          className={`video__timeline-container`}
          ref={timeLineRef}
          onMouseMove={onTimelineUpdate}
          onMouseDown={onDragging}
        >
          <div className="video__timeline"></div>
          <div className="video__thumb"></div>
        </div>
        <div className="video__controls">
          <div className="video__controls--left">
            <button className="video__play-button" onClick={onPlay}>
              {isPlaying ? (
                <FaPause size={"1.3em"} />
              ) : (
                <FaPlay size={"1.3em"} />
              )}
            </button>
            <div className="video__volume">
              <button onClick={() => onVolumeChange(0)}>
                {volumeLevel.type === "medium" ? (
                  <IoVolumeMedium size={"1.3em"} />
                ) : volumeLevel.type === "low" ? (
                  <IoVolumeLow size={"1.3em"} />
                ) : (
                  <IoVolumeMute size={"1.3em"} />
                )}
              </button>
              <input
                className="video__slider"
                type="range"
                min="0"
                max="1"
                step="any"
                onChange={(e) => onVolumeChange(e.target.valueAsNumber)}
                value={volumeLevel.level}
              />
            </div>
            <div className="video__duration">
              <span>{duration.current} /</span>
              <span> {duration.full}</span>
            </div>
          </div>
          <div className="video__controls--right">
            {/* <button onClick={onMiniPlayer}>
              {<MdPictureInPictureAlt size={"1.3em"} />}
            </button> */}
            <button onClick={onFullScreen}>
              {isFullScreen ? (
                <FiMinimize size={"1.3em"} />
              ) : (
                <FiMaximize size={"1.3em"} />
              )}
            </button>
          </div>
        </div>
      </div>
      <video
        src={videoPath}
        className="video__player"
        ref={videoRef}
        onClick={onPlay}
        onLoadedMetadata={onVideoLoad}
        onTimeUpdate={onTimeUpdate}
      ></video>
    </div>
  );
};

export default VideoPlayer;
