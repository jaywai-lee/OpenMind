import { useEffect, useState } from 'react';
import ListHeader from '../components/ListHeader';
import ListTitleDropDown from '../components/ListTitleDropDown';
import UserCardGrid from '../components/UserCardGrid';
import UserCard from '../components/common/User/UserCard';
import { getSubjectList } from '../api/subjects';
import Pagination from '../components/common/Page/Pagenation';

function ListPage() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('latest');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(window.innerWidth < 843 ? 6 : 8);

  const [count, setCount] = useState(0);

  const offset = (currentPage - 1) * pageSize;

  useEffect(() => {
    if (count > 0) {
      const totalPages = Math.ceil(count / pageSize);
      if (currentPage > totalPages) {
        setCurrentPage(totalPages);
      }
    }
  }, [pageSize, count, currentPage]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getSubjectList({
          offset,
          limit: pageSize,
        });

        setItems(response.results);
        setCount(response.count);
      } catch (error) {}
    }

    loadData();
  }, [currentPage, pageSize]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 843px)');

    const handleChange = (e) => {
      setPageSize(e.matches ? 6 : 8);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const sortedItems = [...items].sort((a, b) => {
    if (order === 'name') {
      return a.name.localeCompare(b.name);
    }
    return new Date(b.latest) - new Date(a.latest);
  });

  return (
    <>
      <ListHeader />
      <ListTitleDropDown onSelect={setOrder} />

      <UserCardGrid>
        {sortedItems.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </UserCardGrid>

      <Pagination
        currentPage={currentPage}
        totalListCount={count}
        pageLimit={pageSize}
        onChangepage={setCurrentPage}
      />
    </>
  );
}

export default ListPage;
