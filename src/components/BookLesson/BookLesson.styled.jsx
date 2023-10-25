import styled from "@emotion/styled";

export const TeacherInfo = styled.div`
  display: flex;
  gap: 14px;
  margin: 20px 0 40px;
`;

export const TeacherAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const Teacher = styled.p`
  color: var(--subtitle-text-color);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;

export const TeachersName = styled.h3`
  color: var(--text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 21px;
`;
