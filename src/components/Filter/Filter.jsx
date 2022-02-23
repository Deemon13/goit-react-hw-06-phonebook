import PropTypes from 'prop-types';

import { Input, FilterLabel } from './Filter.styled';

export const Filter = ({ value, id, onChangeFilter }) => {
  return (
    <>
      <FilterLabel htmlFor={id}>Find contacts by name</FilterLabel>
      <Input type="text" value={value} id={id} onChange={onChangeFilter} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
