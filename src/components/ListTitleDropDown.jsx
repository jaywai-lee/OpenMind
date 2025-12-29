import { useState } from 'react';
import styles from './ListTitleDropDown.module.css';
import DropDownMenu from './common/Dropdown/DropDownMenu';

function ListTitleDropDown({ onSelect }) {
  return (
    <div className={styles.group}>
      <h1 className={styles.title}>누구에게 질문할까요?</h1>

      <DropDownMenu onChangeSort={onSelect} />
    </div>
  );
}

export default ListTitleDropDown;
