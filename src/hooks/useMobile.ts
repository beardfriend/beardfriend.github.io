import { useLayoutEffect, useState } from 'react';

const useMobileCheck = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    const changeEvent = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', changeEvent);
    return () => {
      window.removeEventListener('resize', changeEvent);
    };
  }, []);

  return { isMobile };
};

export default useMobileCheck;
