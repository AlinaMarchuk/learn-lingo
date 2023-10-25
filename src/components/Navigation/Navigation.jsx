import { NavBox, NavLinkStyled } from "./Navigation.styled";
import { auth } from "../../firebase/config";

const Navigation = () => {
  return (
    <NavBox>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/teachers">Teachers</NavLinkStyled>
      {auth.currentUser && (
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
      )}
    </NavBox>
  );
};

export default Navigation;
