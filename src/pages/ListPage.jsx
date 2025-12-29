import { useEffect, useState } from 'react';
import ListHeader from '../components/ListHeader';
import ListTitleDropDown from '../components/ListTitleDropDown';
import UserCardGrid from '../components/UserCardGrid';
import UserCard from '../components/common/User/UserCard';
import { getSubjectList } from '../api/subjects';
import Pagination from '../components/common/Page/Pagenation';

function ListPage() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('createdAt');
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);

  const pageSize = 8;
  const offset = (currentPage - 1) * pageSize;

  useEffect(() => {
    async function loadData() {
      try {
        // ⭐ offset / limit 적용
        const response = await getSubjectList({
          offset,
          limit: pageSize,
        });

        setItems(response.results);
        setCount(response.count);
      } catch (error) {
        console.error(error);
      }
    }

    loadData();
  }, [offset]);

  const sortedItems = [...items].sort((a, b) => {
    if (order === 'name') {
      return a.name.localeCompare(b.name);
    }
    return new Date(b.createdAt) - new Date(a.createdAt);
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
