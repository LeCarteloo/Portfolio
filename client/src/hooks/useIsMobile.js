import { useEffect, useState } from 'react';

const useIsMobile = (breakpoint) => {
  const [isMobile, setIsMobile] = useState(false);

  const updateSize = () => {
    setIsMobile(window.innerWidth < breakpoint);
  };

  useEffect(() => {
    setIsMobile(window.innerWidth < breakpoint);

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
