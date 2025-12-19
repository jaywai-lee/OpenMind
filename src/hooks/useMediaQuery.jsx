import { useEffect, useState } from 'react';

/**
 * @returns // 'mobile' | 'tablet' | 'desktop'
 */
function useMediaQuery() {
  const [deviceType, setDeviceType] = useState('mobile');
  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 375px)');
    const tabletQuery = window.matchMedia(
      '(min-width: 376px) and (max-width: 768px)',
    );

    const updateDevice = () => {
      if (mobileQuery.matches) setDeviceType('mobile');
      else if (tabletQuery.matches) setDeviceType('tablet');
      else setDeviceType('desktop');
    };

    mobileQuery.addEventListener('change', updateDevice);
    tabletQuery.addEventListener('change', updateDevice);

    return () => {
      mobileQuery.removeEventListener('change', updateDevice);
      tabletQuery.removeEventListener('change', updateDevice);
    };
  }, []);
  return deviceType;
}

export default useMediaQuery;
