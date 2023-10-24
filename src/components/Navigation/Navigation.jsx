import { NavBox, NavLinkStyled } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavBox>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/teachers">Teachers</NavLinkStyled>
    </NavBox>
  );
};

export default Navigation;
