import { useEffect, useState } from 'react';
import ListHeader from '../components/ListHeader';
import ListTitle from '../components/ListTitle';
import DropDown from '../components/DropDown';
import UserCardGrid from '../components/UserCardGrid';
import UserCard from '../components/UserCard';
import { getSubjectList } from '../api/subjects';

function ListPage() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState('createdAt');

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getSubjectList();
        setItems(response.results);
      } catch (error) {
        console.error(error);
      }
    }
    loadData();
  }, []);

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
    </>
  );
}

export default ListPage;
