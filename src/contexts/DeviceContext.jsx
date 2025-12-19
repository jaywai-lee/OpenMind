import { createContext, useContext, useMemo } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const DeviceContext = createContext();

export function DeviceProvider({ children }) {
  const device = useMediaQuery();

  const deviceValue = useMemo(() => {
    return { device };
  }, [device]);

  return (
    <DeviceContext.Provider value={deviceValue}>
      {children}
    </DeviceContext.Provider>
  );
}

/**
 * 미디어쿼리 디바이스값 출력 (값 타입 설명)
 * 창사이즈에 따라 디바이스가 바뀌는 시점에 한번만 출력 (최적화 완료)
 * const { device } = useDevice(); 형식으로 사용해야함. (object 리턴값 주의)
 * @returns device: 'mobile' | 'tablet' | 'desktop' (object 리턴값 주의)
 */
export const useDevice = () => useContext(DeviceContext);
