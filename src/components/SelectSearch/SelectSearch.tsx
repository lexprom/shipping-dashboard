import React, { ChangeEvent, useState } from "react";
import {
  Container,
  Dropdown,
  Option,
  ResultsContainer,
} from "./SelectSearch.styles";

interface SelectOption {
  name: string;
}

interface SelectSearchProps {
  options: SelectOption[];
}

const SelectSearch = ({ options }: SelectSearchProps) => {
  const [results, setResults] = useState<SelectOption[]>(options);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const filteredList = results.filter(option => option.name.includes(value));

    setResults(filteredList);
  };

  const showDropdown = () => {
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Type to search ports"
        onChange={onChange}
        onFocus={showDropdown}
        onBlur={hideDropdown}
      />
      {dropdownVisible && (
        <Dropdown>
          <ResultsContainer>
            {results.map(({ name }) => (
              <Option key={name}>{name}</Option>
            ))}
          </ResultsContainer>
        </Dropdown>
      )}
    </Container>
  );
};

export default SelectSearch;
