import styles from './ListHeader.module.css';
import logo from '../assets/icons/logo.svg';

function ListHeader() {
  return (
    <div className={styles.group}>
      <a href="/">
        <img className={styles.logo} src={logo} alt="logo" />
      </a>
      <a href="/">
        <button className={styles.button}>답변하러 가기</button>
      </a>
    </div>
  );
}

export default ListHeader;
