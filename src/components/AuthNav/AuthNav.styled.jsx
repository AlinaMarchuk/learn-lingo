import styled from "@emotion/styled";

export const LoginBtn = styled.button`
  margin: 0 16px 0 8px;
  padding: 14px 39px;

  border: 1px solid transparent;
  background-color: transparent;
  color: var(--text-color);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  border-radius: 12px;
  transition: all var(--transition-duration-and-fun);

  &:hover,
  :focus {
    border: 1px solid var(--text-color);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const RegisterBtn = styled.button`
  padding: 14px 39px;

  color: var(--modal-window-color);
  background-color: var(--text-color);
  border: 1px solid transparent;
  border-radius: 12px;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  transition: all var(--transition-duration-and-fun);

  &:hover,
  :focus {
    color: var(--text-color);
    background-color: transparent;
    border: 1px solid var(--text-color);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

export const SignOutBtn = styled.button`
  padding: 14px 39px;

  color: var(--modal-window-color);
  background-color: var(--text-color);
  border: 1px solid transparent;
  border-radius: 12px;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  transition: all var(--transition-duration-and-fun);

  &:hover,
  :focus {
    color: var(--text-color);
    background-color: transparent;
    border: 1px solid var(--text-color);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
