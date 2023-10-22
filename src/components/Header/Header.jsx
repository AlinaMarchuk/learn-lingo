import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";

import { HeaderSection, HeaderContainer } from "./Header.styled";

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <Logo />
        <Navigation />
        <AuthNav />
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
