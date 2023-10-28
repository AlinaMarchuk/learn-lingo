import { LoginBtn, RegisterBtn, SignOutBtn } from "./AuthNav.styled";
import { auth } from "../../firebase/config";
import { signOut } from "firebase/auth";

const AuthNav = ({ user, setUser, onClickLogin, onClickRegistr }) => {
  const onSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {user ? (
        <SignOutBtn onClick={onSignOut}>SignOut</SignOutBtn>
      ) : (
        <>
          {" "}
          <LoginBtn onClick={onClickLogin}>Log in</LoginBtn>
          <RegisterBtn onClick={onClickRegistr}>Registration</RegisterBtn>
        </>
      )}
    </div>
  );
};

export default AuthNav;
