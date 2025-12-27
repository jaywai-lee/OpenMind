import styles from './Pagenation.module.css';
/**
 * pagenation 컴포넌트
 * currentPage: (number) 현재페이지 번호
 * totalListCount: (number) 총리스트 갯수 (페이지 갯수 아님)
 * pageLimit: (number) 페이지당 리스트 갯수 (반응형 일때 리스트갯수 8개 -> 6개로)
 * onChangepage: (function) 페이지 클릭시 호출 함수
 * @props { urrentPage, totalListCount, pageLimit, onChangepage }
 * @returns
 */
function Pagenation({ currentPage, totalListCount, pageLimit, onChangepage }) {
  if (!totalListCount || totalListCount === 0) return null;

  const totalPages = Math.ceil(totalListCount / pageLimit);
  if (totalPages <= 1) return null;

  const pagesPerGroup = 5;

  const currentGroupIndex = Math.floor((currentPage - 1) / pagesPerGroup);
  const startPage = currentGroupIndex * pagesPerGroup + 1;
  const endPage = Math.min(totalPages, startPage + pagesPerGroup - 1);

  const visiblePageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  if (visiblePageNumbers.length === 0) return null;

  const handlePageChange = (e, pageNumber) => {
    e.preventDefault();
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onChangepage(pageNumber);
    }
  };

  return (
    <>
      <nav className={styles.pagenationContainer}>
        <button
          onClick={(e) => handlePageChange(e, currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.pageButtons}
        >
          &lt;
        </button>

        {visiblePageNumbers.map((number) => (
          <button
            key={number}
            onClick={(e) => handlePageChange(e, number)}
            className={`${styles.pageButtons} ${currentPage === number ? `${styles.active}` : ''}`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={(e) => handlePageChange(e, currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.pageButtons}
        >
          &gt;
        </button>
      </nav>
    </>
  );
}
export default Pagenation;
