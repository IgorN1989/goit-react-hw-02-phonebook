import { FilterContainer } from './Filter.styled';

export const Filter = ({ filter, onChangeFilter }) => (
  <FilterContainer>
    <label htmlFor="filter">
      Find contact by name
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="Search"
        onChange={e => {
          onChangeFilter(e.target.value);
        }}
      ></input>
    </label>
  </FilterContainer>
);
