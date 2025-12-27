import { useState } from 'react';
import styles from './_ComponentsPage.module.css';
import Badge from './Badge/Badge';
import Button from './Button/Button';
import FloatingButton from './Button/FloatingButton';
import Modal from './modal/QuestionModal';
import ConfirmModal from './modal/ConfirmModal';
import ArrowRightLineDisabled from '../../assets/icons/arrow-right-line-disabled.svg?react';
import MoreDropDown from './Dropdown/MoreDropDown';
import Reaction from './Reaction/Reaction';
import storage from '../../utils/storage';
import useReactionStorage from '../../hooks/useReactionStorage';

function _ComponentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const user = {
    id: 12345,
    name: '오오',
    imageSource: 'ss.svg',
    questionCount: 2,
  };

  const subject = {
    id: 12637, // 냥냥
  };

  const question = {
    id: 1234,
    like: 11,
    dislike: 0,
  };

  const { id, like, dislike } = question;
  const userId = storage.get('userId', null);
  const { enabled, getMyReaction, setReaction } = useReactionStorage(
    userId,
    subject.id,
  );

  const myReaction = getMyReaction(id);
  const isReactionDisabled = !enabled || Boolean(myReaction);

  const handleOnReact = (type) => {
    // onReact(id, type);
    // setReaction(id, type);
    console.log('handleReact:::::', type);
  };

  const handleConfirm = () => {
    console.log('확인 눌렀음');
  };
  return (
    <div className={styles.container}>
      <Badge status="done" />
      <Badge status="waiting" />
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
        <MoreDropDown
          onEdit={() => console.log('수정')}
          onDelete={() => console.log('삭제')}
          onReject={() => console.log('거절')}
        >
          <div>...</div>
        </MoreDropDown>
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
        <div className={styles.reaction}></div>
        <Reaction
          question={question}
          isReactionDisabled={isReactionDisabled}
          activeMyReactionType={myReaction}
          onReact={handleOnReact}
        ></Reaction>
      </div>
    </div>
  );
}
export default _ComponentPage;
