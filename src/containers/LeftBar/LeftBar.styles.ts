import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 255px;
  background: #363740;
`;

export const AppTitle = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 24px;
  letter-spacing: 0.4px;
  color: #a4a6b3;
  opacity: 0.7;
  padding: 41px 43px 43px 43px;
`;

export const Options = styled.div``;

export const TradeLaneOption = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  background: rgba(159, 162, 180, 0.08);
  border-left: 3px solid #dde2ff;
  cursor: pointer;

  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #dde2ff;
`;

export const TradeLaneLogo = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 20px;
  margin-left: 40px;
`;
