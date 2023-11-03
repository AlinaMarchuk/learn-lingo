import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "../Header/Header";

import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";
import RegisterForm from "../RegisterForm/RegisterForm";
import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import ModalTitle from "../../shared/components/ModalTitle/ModalTitle";

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
    <div
      style={{
        overflow: showLoginModal || showRegistrModal ? "hidden" : "auto",
        position: showLoginModal || showRegistrModal ? "fixed" : "static",
      }}
    >
      <Header
        user={user}
        setUser={setUser}
        onClickLogin={onClickLogin}
        onClickRegistr={onClickRegistr}
      />
      {showLoginModal && (
        <Modal onClose={onClose}>
          <ModalTitle
            title={"Log In"}
            subtitle={
              "Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
            }
          />
          <LoginForm onClose={onClose} />
        </Modal>
      )}
      {showRegistrModal && (
        <Modal onClose={onClose}>
          <ModalTitle
            title={"Registration"}
            subtitle={
              "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
            }
          />
          <RegisterForm onClose={onClose} />
        </Modal>
      )}
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
    </div>
  );
};

export default Layout;
