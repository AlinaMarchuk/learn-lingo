//import { Link } from "react-router-dom";
import {
  ListItem,
  MainAvatar,
  InfoBox,
  SpanStyled,
  InfoList,
  InfoItem,
  InfoName,
  PriceSpan,
  TitleName,
  DetailsItem,
  DetailsName,
  DetailsDescr,
  LoadMoreStyled,
  Summary,
  FeedbackList,
  AvatarInfo,
  NameStyled,
  RateInfo,
  FeedbackStyled,
  LevelList,
  LevelItem,
} from "./Teacher.styled";

const Teacher = ({
  name,
  surname,
  avatar_url,
  conditions,
  experience,
  languages,
  lesson_info,
  lessons_done,
  price_per_hour,
  rating,
  reviews,
}) => {
  return (
    <ListItem>
      <MainAvatar src="" alt="teacher" />
      <div>
        <InfoBox>
          <SpanStyled>Languages</SpanStyled>
          <InfoList>
            <InfoItem>
              <span>svg</span>
              <InfoName>Lessons online</InfoName>
            </InfoItem>
            <InfoItem>
              <InfoName>
                Lessons done:<span>&nbsp;{lessons_done}</span>
              </InfoName>
            </InfoItem>
            <InfoItem>
              <InfoName>
                Rating:<span>&nbsp;{rating}</span>
              </InfoName>
            </InfoItem>
            <InfoItem>
              <InfoName>
                Price / 1 hour:<PriceSpan>&nbsp;{price_per_hour}</PriceSpan>
              </InfoName>
            </InfoItem>
          </InfoList>
          {/* <svg>
            <use>svg</use>
          </svg> */}
          <span>svg</span>
        </InfoBox>
        <TitleName>{`${name} ${surname}`}</TitleName>
        <ul>
          <DetailsItem>
            <DetailsName>Speaks:</DetailsName>
            <DetailsDescr>
              &nbsp;
              {languages.map((el, i, arr) => (
                <span key={i}>
                  {el}
                  {i < arr.length - 1 && ", "}
                </span>
              ))}
            </DetailsDescr>
          </DetailsItem>
          <DetailsItem>
            <DetailsName>Lesson Info:</DetailsName>
            <DetailsDescr>&nbsp;{lesson_info}</DetailsDescr>
          </DetailsItem>
          <DetailsItem>
            <DetailsName>Conditions:</DetailsName>
            <DetailsDescr>
              &nbsp;
              {conditions.map((condition, i, arr) => (
                <span key={i}>
                  {condition}
                  {i < arr.length - 1 && " "}
                </span>
              ))}
            </DetailsDescr>
          </DetailsItem>
        </ul>
        <LoadMoreStyled type="button">Read more</LoadMoreStyled>
        <Summary>{experience}</Summary>
        <FeedbackList>
          <li>
            <AvatarInfo>
              <img src="" alt="teacher" />
              <div>
                <NameStyled>{name}</NameStyled>
                <RateInfo>{rating}</RateInfo>
              </div>
            </AvatarInfo>
            <FeedbackStyled>
              Jane's lessons were very helpful. I made good progress.
            </FeedbackStyled>
          </li>
        </FeedbackList>
        <LevelList>
          <LevelItem>#A1 Beginner</LevelItem>
          <LevelItem>#A2 Elementary</LevelItem>
          <LevelItem>#B1 Intermediate</LevelItem>
          <LevelItem>#B2 Upper-Intermediate</LevelItem>
        </LevelList>
      </div>
    </ListItem>
  );
};

export default Teacher;
