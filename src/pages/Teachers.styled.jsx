import styled from "@emotion/styled";

export const TeacherSection = styled.section`
  height: 100vh;
  padding: 96px 0;
  background-color: var(--hero-bg-color);
`;

export const TeacherContainer = styled.div`
  padding: 0 30px;
  margin: 0 auto;
  @media screen and (min-width: 375px) {
  }
  @media screen and (min-width: 768px) {
    padding: 0 50px;
  }
  @media screen and (min-width: 1120px) {
    padding: 0 100px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 128px;
  }
`;

export const ButtonStyled = styled.button`
  display: block;
  margin: 64px auto 0;
  width: 183px;
  height: 60px;
  background-color: var(--button-bg-color);
  border-radius: 12px;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 700;
  border: 1px solid transparent;
  transition: all var(--transition-duration-and-fun);

  &:hover,
  :focus {
    background-color: var(--first-theme-accent-color);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;
