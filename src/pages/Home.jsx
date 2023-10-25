import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Modal from "../components/Modal/Modal";
import LoginForm from "../components/LoginForm/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase/config";
import { onValue, ref } from "firebase/database";
import { addUserDb, checkUser } from "../firebase/operations";
import ModalTitle from "../shared/components/ModalTitle/ModalTitle";

const Home = () => {
  const [user, setUser] = useState(null);

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegistrModal, setShowRegistrModal] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (credentials) => {
      if (credentials) {
        console.log("credentials:", credentials);
        setUser(credentials);
        const { uid, email, displayName } = credentials;
        console.log(uid, email, displayName);
        //console.log(checkUser(uid));
        // if(checkUser(uid)){
        //   console.log("This user already in the base");
        // }
        // else{
        //   addUserDb(uid, email, displayName)
        // }
      } else {
        console.log("sign out");
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
    <div>
      <Header
        user={user}
        setUser={setUser}
        onClickLogin={onClickLogin}
        onClickRegistr={onClickRegistr}
      />
      <Hero />
      {showLoginModal && (
        <Modal onClose={onClose}>
          <ModalTitle
            title={"Log In"}
            subtitle={
              "Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
            }
          ></ModalTitle>
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
          ></ModalTitle>
          <RegisterForm onClose={onClose} />
        </Modal>
      )}
    </div>
  );
};

export default Home;
