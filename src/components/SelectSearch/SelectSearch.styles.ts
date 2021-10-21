import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  box-shadow: 0px 5px 8px 0px rgb(34 60 80 / 0.2);
  border-radius: 4px;
`;

export const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const ResultsContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Option = styled.li`
  padding: 0.75rem 1rem;
  cursor: pointer;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 2rem;
  padding: 0.75rem;
  border: 2px solid transparent;
  border-radius: 4px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2px;

  &:focus {
    border-color: #587ef5;
    outline: 0;
  }
`;
