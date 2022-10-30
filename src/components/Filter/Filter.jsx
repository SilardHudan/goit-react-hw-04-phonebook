import PropTypes from 'prop-types';
import { FilterWrapper, Input, Title } from './Filter.styled';

const Filter = ({ onSearch, value }) => {
  return (
    <FilterWrapper>
      <Title>Filter</Title>

      <Input onChange={onSearch} value={value} type="text" name="filter" />
    </FilterWrapper>
  );
};

export default Filter;

Filter.propTypes = {
  onSearch: PropTypes.func,
  value: PropTypes.string,
};
