import { useState } from 'react';
import styles from './_ComponentsPage.module.css';
import Badge from './Badge/Badge';
import Button from './Button/Button';
import FloatingButton from './Button/FloatingButton';
import Modal from './modal/QuestionModal';
import ArrowRightLineDisabled from '../../assets/icons/arrow-right-line-disabled.svg?react';

function _ComponentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      </div>
    </div>
  );
}
export default _ComponentPage;
