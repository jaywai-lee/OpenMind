import DropDown from '../components/common/DropDown/DropDown';
import ListHeader from '../components/ListHeader';
import ListTitle from '../components/ListTitle';
import UserCard from '../components/UserCard';

function ListPage() {
  return (
    <>
      <ListHeader />
      <ListTitle />
      <DropDown />
      <UserCard />
    </>
  );
}

export default ListPage;
