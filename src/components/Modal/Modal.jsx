import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
//import sprite from '../../images/sprite.svg';
import {
  BackdropStyled,
  ModalWindowStyled,
  CloseBtnStyled,
} from "./Modal.styled";

const Modal = ({ children, onClose }) => {
  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  const onCloseBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation();
      onClose();
    }
  };

  function onCloseEscape(e) {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", onCloseEscape);
    return () => {
      window.removeEventListener("keydown", onCloseEscape);
    };
  });

  return (
    <BackdropStyled onClick={onCloseBackdrop}>
      <ModalWindowStyled>
        <CloseBtnStyled onClick={handleClose}>
          <AiOutlineClose size={32} />
        </CloseBtnStyled>
        {children}
      </ModalWindowStyled>
    </BackdropStyled>
  );
};

export default Modal;
