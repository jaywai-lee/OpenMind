import { createPortal } from 'react-dom';
import Button from '../Button/Button';
import styles from './QuestionModal.module.css';
import { useEffect, useState } from 'react';
import { createQuestion } from '../../../api/questions';
import Messages from '../../../assets/icons/messages.svg?react';
import Close from '../../../assets/icons/close.svg?react';

/**
 * 질문하기 모달창
 * // 전송 버튼 클릭 -> 전송버튼 비활성화 -> 로딩
 * // API 성공 -> 모달 자동 닫기
 * // 화면 상단이나 하단에 "질문이 등록되었습니다!"라는 토스트(Toast) 알림 ( Toast 추후개발 )
 * isOpen: true / false (Boolean) 부모에서 열기/닫기 여부,
 * subject: {subject} (object) 개별피드의 subject 정보,
 * onClose: (function) 부모에서 닫기 함수,
 * onRefresh: (function) 부모에서 get 함수실행 - 데이터 새로고침
 * @props { isOpen, subject, onClose, onRefresh }
 * @returns 모달 폼 (jsx)
 */
function QuestionModal({ isOpen, subject, onClose, onRefresh }) {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) setInputValue('');
  }, [isOpen]);

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

  const { id, name, imageSource } = subject || {};
  // console.log('modal subject::::', id, name, imageSource);

  if (!isOpen) return null;

  const handleChange = (e) => setInputValue(e.target.value);
  const isDisabled = inputValue.length === 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const questionData = {
      content: inputValue.trim(),
      subjectId: id,
    };

    try {
      const success = await createQuestion(id, questionData);
      if (success) {
        if (onRefresh) onRefresh();
        setInputValue('');
        onClose();
      }
    } catch (error) {
      console.error('전송 에러 발생:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return createPortal(
    isOpen && (
      <div className={styles.modalBackDropContainer} onClick={onClose}>
        <form
          className={styles.modalContainer}
          onClick={(e) => e.stopPropagation()}
          onSubmit={handleSubmit}
        >
          <div>
            <div className={styles.headGroup}>
              <div className={styles.headTextGroup}>
                <Messages
                  width={28}
                  height={28}
                  fill="#000000"
                  className={styles.message}
                />
                <h3>질문을 작성하세요</h3>
              </div>
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
                  className={styles.close}
                />
              </button>
            </div>
            <span className={styles.receiveNameGroup}>
              To.
              <img className={styles.userProfileImage} src={imageSource} />
              <span className={styles.receiveName}>{name}</span>
            </span>
            <textarea
              value={inputValue}
              onChange={handleChange}
              placeholder="질문을 입력해주세요"
            ></textarea>
            <Button type="submit" theme="dark" isDisabled={isDisabled}>
              질문 보내기
              {isLoading && <span className={styles.loadSpinner}></span>}
            </Button>
          </div>
        </form>
      </div>
    ),
    document.body,
  );
}

export default QuestionModal;
