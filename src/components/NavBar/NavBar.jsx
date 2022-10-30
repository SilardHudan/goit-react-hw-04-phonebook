import { Button, Wrapper, Title } from './NavBar.styled';
import { RiUserSearchLine, RiUserAddLine } from 'react-icons/ri';

const NavBar = ({ toggle, isOpenFilter, isOpenForm }) => {
  return (
    <Wrapper>
      <Title>PHONEBOOK</Title>
      <Button
        onClick={() => toggle('form')}
        isOpen={isOpenForm}
        title="Add contact"
        type="button"
      >
        <RiUserAddLine />
      </Button>
      <Button
        onClick={() => toggle('filter')}
        isOpen={isOpenFilter}
        title="Search"
        type="button"
      >
        <RiUserSearchLine />
      </Button>
    </Wrapper>
  );
};

export default NavBar;
