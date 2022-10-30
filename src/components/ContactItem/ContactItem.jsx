import PropTypes from 'prop-types';
import { Contact, IconUser, Item, Button } from './ContactItem.styled';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useContext, memo } from 'react';
import deleteContactContext from '../deleteContactContext';

const ContactItem = ({ id, name, number }) => {
  const deleteHandler = useContext(deleteContactContext);
  return (
    <Item>
      <Contact>
        <IconUser />
        {name} : {number}
      </Contact>
      <Button onClick={() => deleteHandler(id)} title="Delete" type="button">
        <RiDeleteBinLine />
      </Button>
    </Item>
  );
};

export default memo(ContactItem);

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  deleteHandler: PropTypes.func,
};
