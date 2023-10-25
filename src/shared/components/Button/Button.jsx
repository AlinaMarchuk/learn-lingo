import { ButtonStyled } from "./Button.styled";

const Button = ({ onClick, children }) => {
  return (
    <ButtonStyled onClick={onClick} type="submit">
      {children}
    </ButtonStyled>
  );
};

export default Button;
