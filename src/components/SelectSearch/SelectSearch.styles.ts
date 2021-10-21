import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
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
