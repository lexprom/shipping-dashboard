import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.5;
`;

export const Icon = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;

  & div {
    position: absolute;
    background: #fff;
    opacity: 1;
    border-radius: 50%;
    animation: loading 1.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  & div:nth-child(2) {
    animation-delay: -0.7s;
  }

  @keyframes loading {
    0% {
      top: 28px;
      left: 28px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: -1px;
      left: -1px;
      width: 58px;
      height: 58px;
      opacity: 0;
    }
  }
`;
