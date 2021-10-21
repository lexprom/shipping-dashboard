import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import useOnClickOutside from "src/hooks/useOnClickOutside";
import {
  Container,
  Dropdown,
  Input,
  Option,
  ResultsContainer,
} from "./SelectSearch.styles";

interface SelectOption {
  name: string;
}

interface SelectSearchProps {
  options?: SelectOption[];
  defaultValue?: unknown;
  onChange: (option: any) => void;
}

const SelectSearch = ({
  options,
  defaultValue,
  onChange,
}: SelectSearchProps) => {
  const resultsRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState<SelectOption[]>([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    if (options?.length && defaultValue) {
      setResults(options);
      setInputValue((defaultValue as SelectOption).name);
    }
  }, [options, defaultValue]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);

    if (!value && options) {
      setResults(options);
      return;
    }

    const filteredList = results.filter(option =>
      option.name.toLowerCase().includes(value.toLowerCase()),
    );

    setResults(filteredList);
  };

  const showDropdown = () => {
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  const handleClickOutside = () => {
    hideDropdown();
  };

  const onOptionClick = (option: SelectOption) => {
    setInputValue(option.name);
    onChange(option);
    hideDropdown();
  };

  useOnClickOutside(resultsRef, handleClickOutside);

  return (
    <Container>
      <Input
        value={inputValue}
        type="text"
        placeholder="Type to search ports"
        onChange={onInputChange}
        onFocus={showDropdown}
      />
      {dropdownVisible && (
        <Dropdown>
          <ResultsContainer ref={resultsRef}>
            {results.map(option => (
              <Option key={option.name} onClick={() => onOptionClick(option)}>
                {option.name}
              </Option>
            ))}
          </ResultsContainer>
        </Dropdown>
      )}
    </Container>
  );
};

export default SelectSearch;
