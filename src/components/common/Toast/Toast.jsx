import { createPortal } from 'react-dom';
import styles from './Toast.module.css';

export const Toast = ({ toasts }) => {
  return createPortal(
    <div className={styles.toastContainer}>
      {toasts.map((toast) => (
        <div key={toast.id} className={styles.toast}>
          {toast.message}
        </div>
      ))}
    </div>,
    document.body,
  );
};
