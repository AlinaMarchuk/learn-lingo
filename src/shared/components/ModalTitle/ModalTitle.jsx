import { TitleStyled, SubtitleStyled } from "./ModalTitle.styled";

const ModalTitle = ({ title, subtitle }) => {
  return (
    <>
      <TitleStyled>{title}</TitleStyled>
      <SubtitleStyled>{subtitle}</SubtitleStyled>
    </>
  );
};

export default ModalTitle;
