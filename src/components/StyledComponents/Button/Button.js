import styled from "styled-components";

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #3f3f3f;
  border: none;
  color: #959595;
  height: 36px;
  width: 36px;
  text-align: center;
  text-decoration: none;
  display: block;
  font-size: 24px;
  border-radius: 50%;
  cursor: pointer;
  transform: scale(1);
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
    color: #fff;
  }
`;
