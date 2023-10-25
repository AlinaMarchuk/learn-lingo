import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";

import { HeaderSection, HeaderContainer } from "./Header.styled";

const Header = ({ user, setUser, onClickLogin, onClickRegistr }) => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <Logo />
        <Navigation />
        <AuthNav
          user={user}
          setUser={setUser}
          onClickLogin={onClickLogin}
          onClickRegistr={onClickRegistr}
        />
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
