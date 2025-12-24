import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import styles from './ConfirmModal.module.css';
import { useEffect, useState } from 'react';
import Close from '../../../assets/icons/close.svg?react';
import Bang from '../../../assets/icons/bang.svg?react';
// import Bang from '../../../assets/icons/bang2.svg?react';

/**
 * 질문하기 모달창
 * // 전송 버튼 클릭 -> 전송버튼 비활성화 -> 로딩
 * // API 성공 -> 모달 자동 닫기
 * // 화면 상단이나 하단에 "질문이 등록되었습니다!"라는 토스트(Toast) 알림 ( Toast 추후개발 )
 * isOpen: true / false (Boolean) 부모에서 열기/닫기 여부,
 * message: '텍스트' (string) 문구
 * subMessage: '서브텍스트' (string) 문구
 * onConfirm: (function) 확인을 눌렀을때 부모에서 onConfirm 함수실행
 * onClose: (function) 부모에서 닫기 함수,
 * @props { isOpen, subject, onClose, onRefresh }
 * @returns 확인/취소 모달 (jsx)
 */
function QuestionModal({ isOpen, message, subMessage, onConfirm, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  if (!isOpen) return null;

  return createPortal(
    isOpen && (
      <div className={styles.confirmModalBackDropContainer} onClick={onClose}>
        <div
          className={styles.confirmModalContainer}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.confirmHeadGroup}>
            <button
              type="button"
              onClick={onClose}
              style={{
                cursor: 'pointer',
              }}
            >
              <Close
                width={28}
                height={28}
                fill="#000000"
                className={styles.confirmClose}
              />
            </button>
          </div>
          <div className={styles.bangGroup}>
            <Bang width={50} height={50} fill="red" />
          </div>

          <h3 className={styles.confirmContent}>
            <p>{message}</p>
          </h3>
          <h4>{subMessage}</h4>

          <div className={styles.confirmButtonGroup}>
            <Button
              type="button"
              theme="white"
              hasArrow={false}
              onClick={onClose}
            >
              취소
            </Button>
            <Button type="button" theme="dark" onClick={handleConfirm}>
              확인
            </Button>
          </div>
        </div>
      </div>
    ),
    document.body,
  );
}

export default QuestionModal;
