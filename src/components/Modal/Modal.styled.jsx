import styled from "@emotion/styled";

export const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-color: var(--modal-backdrop-background-color);
  z-index: 100;
`;

export const ModalWindowStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 566px;
  padding: 64px;
  transform: translate(-50%, -50%);
  border-radius: 30px;
  background-color: var(--modal-window-color);
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  box-shadow: 0px 4px 16px 0px var(--modal-window-shadow);

  @media screen and (max-height: 500px) and (orientation: landscape) {
    position: sticky;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;

export const CloseBtnStyled = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: background-color 250ms ease-in;
  border-radius: 50%;
  background-color: transparent;

  &:hover,
  :focus {
    background-color: var(--secondary-button-color);
  }
`;

export const IconStyled = styled.svg`
  stroke: var(--modal-close-icon-color);
`;
