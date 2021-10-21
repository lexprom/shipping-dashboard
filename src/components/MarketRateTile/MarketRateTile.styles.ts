import styled from "styled-components";

export const Container = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ isSelected }) => (isSelected ? "#3751FF" : "#DFE0EB")};
  border-radius: 8px;
  padding: 24px 32px;
  cursor: pointer;
  height: 80px;
`;

export const Title = styled.div<{ isSelected: boolean }>`
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.4px;
  color: ${({ isSelected }) => (isSelected ? "#3751FF" : "#9fa2b4")};
`;
