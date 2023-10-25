import styled from "@emotion/styled";

export const ListItem = styled.li`
  display: flex;
  gap: 48px;
  padding: 24px 24px;
  border-radius: 24px;
  background-color: var(--modal-window-color);
  &:not(:last-child) {
    margin-bottom: 32px;
  }
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

export const AvatarThumb = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  padding: 10px;
  border-radius: 50%;
  border: 3px solid var(--first-theme-bg-color);
  background: #fff;
`;

export const MainAvatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SpanStyled = styled.span`
  color: var(--subtitle-text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const InfoItem = styled.li`
  &:not(:last-child) {
    padding-right: 16px;
    border-right: 1px solid var(--item-divider-color);
  }
`;

export const LessonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InfoName = styled.span`
  color: var(--text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const PriceSpan = styled.span`
  color: var(--accent-text-color);
`;

export const TitleName = styled.h2`
  margin: 8px 0 32px;
  color: var(--text-color);
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;

export const DetailsItem = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const DetailsName = styled.span`
  color: var(--subtitle-text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const DetailsDescr = styled.p`
  color: var(--text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const LoadMoreStyled = styled.button`
  margin: 16px 0 32px;
  padding: 0;
  color: var(--text-color);
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  border: none;
`;

export const Summary = styled.p`
  color: var(--text-color);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const FeedbackList = styled.ul`
  margin: 32px 0;
`;

export const FeedbackItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const AvatarInfo = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const StudentAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const NameStyled = styled.h3`
  color: var(--subtitle-text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const RateInfo = styled.span`
  color: var(--text-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
`;

export const FeedbackStyled = styled.p`
  color: var(--text-color);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const LevelList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const LevelItem = styled.li`
  padding: 8px 12px;
  border-radius: 35px;
  border: 1px solid var(--item-divider-color);

  color: var(--text-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;

  &:first-child {
    background-color: var(--first-theme-accent-color);
    border-color: transparent;
  }
`;

export const BookBtn = styled.button`
  padding: 16px 48px;
  margin-top: 32px;
  border-radius: 12px;
  background-color: var(--first-theme-accent-color);
  border-color: transparent;

  color: var(--text-color);
  font-size: 18px;
  font-weight: 700;
  line-height: 1.55;
`;
