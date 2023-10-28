import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";

import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";

const Layout = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrModal, setShowRegistrModal] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (credentials) => {
      if (credentials) {
        setUser(credentials);
      } else {
        setUser(null);
      }
    });
  });

  const onClickLogin = () => {
    setShowLoginModal(true);
  };
  const onClickRegistr = () => {
    setShowRegistrModal(true);
  };
  const onClose = () => {
    setShowLoginModal(false);
    setShowRegistrModal(false);
  };

  return (
    <>
      <Header
        user={user}
        setUser={setUser}
        onClickLogin={onClickLogin}
        onClickRegistr={onClickRegistr}
      />
      {showLoginModal && (
        <Modal onClose={onClose}>
          <LoginForm onClose={onClose} />
        </Modal>
      )}
      {showRegistrModal && (
        <Modal onClose={onClose}>
          <RegisterForm onClose={onClose} />
        </Modal>
      )}
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </>
  );
};

export default Layout;
