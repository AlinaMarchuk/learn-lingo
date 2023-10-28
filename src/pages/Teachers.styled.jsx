import styled from "@emotion/styled";

export const TeacherSection = styled.section`
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
  border: none;
`;
