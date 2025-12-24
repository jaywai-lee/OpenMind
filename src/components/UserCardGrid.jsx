import styles from './UserCardGrid.module.css';


function UserCardGrid({ children }) {
  return <div className={styles.cardGrid}>{children}</div>;
  
export default UserCardGrid;
