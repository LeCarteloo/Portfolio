import { useState } from "react";
import { useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FiMinimize, FiMaximize } from "react-icons/fi";
import { MdPictureInPictureAlt } from "react-icons/md";
import { IoVolumeLow, IoVolumeMedium, IoVolumeMute } from "react-icons/io5";

const VideoPlayer = () => {
  const videoRef = useRef();
  const videoContainerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMiniPlayer, setIsMiniPlayer] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  //   muted, med hih
  const [volumeLevel, setVolumeLevel] = useState({ level: 1, type: "medium" });

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

  const onFullScreen = () => {
    if (document.fullscreenElement !== null) {
      document.exitFullscreen();
      setIsFullScreen(false);
      return;
    }
    setIsFullScreen(true);
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

    console.log(level >= 0.5);

    setVolumeLevel({ level: level, type: type });
    videoRef.current.volume = level;
  };

  return (
    <div
      className={`video ${!isPlaying ? "video--paused" : ""}`}
      ref={videoContainerRef}
    >
      <div className="video__navigation">
        <div className="video__timeline"></div>
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
                  <IoVolumeMedium size={"1.3rem"} />
                ) : volumeLevel.type === "low" ? (
                  <IoVolumeLow size={"1.3rem"} />
                ) : (
                  <IoVolumeMute size={"1.3rem"} />
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
          </div>
          <div className="video__controls--right">
            <button onClick={onMiniPlayer}>
              {<MdPictureInPictureAlt size={"1.3em"} />}
            </button>
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
        src="/video.mp4"
        className="video__player"
        ref={videoRef}
        onClick={onPlay}
      ></video>
    </div>
  );
};

export default VideoPlayer;
