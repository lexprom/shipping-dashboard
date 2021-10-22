import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #ffff;
  border-radius: 8px;
  padding: 32px;
`;

export const PortSelectors = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`;

export const DestinationIcon = styled.img`
  margin: 0 10px;
  height: 30px;
  width: 30px;
`;

export const ErrorMessage = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2px;
  text-align: center;
`;
