import styled from "@emotion/styled";

export const MobMenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0px;
  height: 100%;
  width: 70%;
  display: block;
  padding: 10px 10px;
  background-color: white;
  background-color: ${(p) => p.theme.colors.accent};
`;

export const MobileMenuBtn = styled.button`
  margin-top: 10px;
  margin-left: 10px;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const CloseBtn = styled.button`
  padding: 5px;
  background-color: transparent;
  border: none;
`;

export const MobMenuTitle = styled.h3`
  color: ${(p) => p.theme.colors.white};
`;
