import { useEffect, useState } from 'react';
import ListHeader from '../components/ListHeader';
import ListTitle from '../components/ListTitle';
import DropDown from '../components/DropDown';
import UserCardGrid from '../components/UserCardGrid';
import UserCard from '../components/common/User/UserCard';
import { getSubjectList } from '../api/subjects';
import Pagination from '../components/Pagination';

function ListPage() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('createdAt');
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 8;
  const [count, setCount] = useState(0);

  const offset = (currentPage - 1) * pageSize;
  const totalPages = Math.ceil(count / pageSize);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

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
      <ListTitle />
      <DropDown onSelect={setOrder} />

      <UserCardGrid>
        {sortedItems.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </UserCardGrid>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default ListPage;
