import styles from './Pagination.module.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const MAX_PAGE_COUNT = 5;

  const startPage =
    Math.floor((currentPage - 1) / MAX_PAGE_COUNT) * MAX_PAGE_COUNT + 1;

  const endPage = Math.min(startPage + MAX_PAGE_COUNT - 1, totalPages);

  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <nav className={styles.pagination}>
      <button
        className={styles.arrow}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`${styles.page} ${
            page === currentPage ? styles.active : ''
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className={styles.arrow}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </nav>
  );
}

export default Pagination;
