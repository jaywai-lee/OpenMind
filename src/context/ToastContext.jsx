import { createContext, useContext, useState, useCallback } from 'react';
import { Toast } from '../components/common/Toast/Toast';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback((message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 3000);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <Toast toasts={toasts} />
    </ToastContext.Provider>
  );
};
/**
 * 공통-Toast (공통-토스트 커스텀 훅)
 * const { toast } = useToast(); 로 커스텀 훅 으로 불러와서
 * toast('텍스트'); 로 호출
 */
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast는 ToastProvider 안에서 사용해야 합니다.');
  }
  return context;
};
