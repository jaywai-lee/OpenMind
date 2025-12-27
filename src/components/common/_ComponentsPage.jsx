import { useState } from 'react';
import styles from './_ComponentsPage.module.css';
import Badge from './Badge/Badge';
import Button from './Button/Button';
import FloatingButton from './Button/FloatingButton';
import Modal from './modal/QuestionModal';
import ConfirmModal from './modal/ConfirmModal';
import ArrowRightLineDisabled from '../../assets/icons/arrow-right-line-disabled.svg?react';
import MoreDropDown from './Dropdown/MoreDropDown';

function _ComponentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const handleConfirm = () => {
    console.log('확인 눌렀음');
  };
  return (
    <div className={styles.container}>
      <Badge status="done" /> {/* 답변완료 뱃지 표시 */}
      <Badge status="waiting" /> {/* 미답변 뱃지 표시 */}
      <div>
        <Button theme="dark" isDisabled={false}>
          aaaaa
        </Button>
        <Button theme="white" isDisabled={false}>
          aaaaa
        </Button>
        <Button theme="dark" size="small" isDisabled={false}>
          aaaaa
        </Button>
        <Button theme="white" size="small" isDisabled={false}>
          aaaaa
        </Button>
        <Button theme="white" size="small" hasArrow={false} isDisabled={false}>
          aaaaa
        </Button>
        <ArrowRightLineDisabled width={50} height={50} fill="#c7bbb5" />
        <ArrowRightLineDisabled width={50} height={50} fill="#542f1a" />
        <ArrowRightLineDisabled width={50} height={50} fill="red" />
        <div className={styles.floatingBig}>
          <FloatingButton>질문 작성하기</FloatingButton>
        </div>
        <div className={styles.floatingSmall}>
          <FloatingButton size="small">삭제하기</FloatingButton>
        </div>
        <div className={styles.floatingSmall}>
          <FloatingButton size="small" onClick={() => setIsModalOpen(true)}>
            모달열기
          </FloatingButton>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <div className={styles.floatingSmall}>
          <FloatingButton
            size="small"
            onClick={() => setIsConfirmModalOpen(true)}
          >
            확인취소
          </FloatingButton>
        </div>
        <ConfirmModal
          isOpen={isConfirmModalOpen}
          message="글을 삭제하시겠습니까?"
          subMessage="삭제하시면 다시 복구시킬 수 없습니다"
          onClose={() => setIsConfirmModalOpen(false)}
          onConfirm={handleConfirm}
        />
        <MoreDropDown
          onEdit={() => console.log('수정')}
          onDelete={() => console.log('삭제')}
          onReject={() => console.log('거절')}
        >
          <div>...</div>
        </MoreDropDown>
      </div>
    </div>
  );
}
export default _ComponentPage;
