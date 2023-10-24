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
`;

export const MainAvatar = styled.img`
  flex-shrink: 0;
`;

export const InfoBox = styled.div`
  display: flex;
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
  margin: 0 64px 0 192px;
`;

export const InfoItem = styled.li`
  &:not(:last-child) {
    padding-right: 16px;
    border-right: 1px solid var(--item-divider-color);
  }
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

export const AvatarInfo = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
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
`;

export const LevelItem = styled.li`
  padding: 8px 12px;
  border-radius: 35px;
  border: 1px solid var(--item-divider-color);

  color: var(--text-color);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
`;
