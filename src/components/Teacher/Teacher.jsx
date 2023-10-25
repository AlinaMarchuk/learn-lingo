import {
  ListItem,
  AvatarThumb,
  MainAvatar,
  InfoBox,
  SpanStyled,
  InfoList,
  InfoItem,
  LessonWrapper,
  InfoName,
  PriceSpan,
  TitleName,
  DetailsItem,
  DetailsName,
  DetailsDescr,
  LoadMoreStyled,
  Summary,
  FeedbackList,
  FeedbackItem,
  AvatarInfo,
  StudentAvatar,
  NameStyled,
  RateInfo,
  FeedbackStyled,
  LevelList,
  LevelItem,
  BookBtn,
} from "./Teacher.styled";

import emptyAvatar from "../../images/images.png";
import { FaRegHeart } from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";

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
  levels,
  onClickLesson,
}) => {
  const [moreInfo, setMoreInfo] = useState(false);

  const handleMoreInfo = () => {
    setMoreInfo(!moreInfo);
  };
  return (
    <ListItem>
      <AvatarThumb>
        <MainAvatar src={avatar_url} alt="teacher" />
      </AvatarThumb>
      <div>
        <InfoBox>
          <SpanStyled>Languages</SpanStyled>
          <InfoList>
            <InfoItem>
              <LessonWrapper>
                <BiBookOpen size={16} />
                <InfoName>Lessons online</InfoName>
              </LessonWrapper>
            </InfoItem>
            <InfoItem>
              <InfoName>
                Lessons done:<span>&nbsp;{lessons_done}</span>
              </InfoName>
            </InfoItem>
            <InfoItem>
              <LessonWrapper>
                <AiFillStar size={20} color="#FFC531" />
                <InfoName>
                  Rating:<span>&nbsp;{rating}</span>
                </InfoName>
              </LessonWrapper>
            </InfoItem>
            <InfoItem>
              <InfoName>
                Price / 1 hour:<PriceSpan>&nbsp;{price_per_hour}</PriceSpan>
              </InfoName>
            </InfoItem>
          </InfoList>
          <FaRegHeart size={26} />
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
        <LoadMoreStyled type="button" onClick={handleMoreInfo}>
          {moreInfo ? "Less info" : "Read more"}
        </LoadMoreStyled>
        {moreInfo && (
          <>
            <Summary>{experience}</Summary>
            <FeedbackList>
              {reviews.map((review, i) => (
                <FeedbackItem key={i}>
                  <AvatarInfo>
                    <StudentAvatar src={emptyAvatar} alt="student" />
                    <div>
                      <NameStyled>{review.reviewer_name}</NameStyled>
                      <RateInfo>{review.reviewer_rating}</RateInfo>
                    </div>
                  </AvatarInfo>
                  <FeedbackStyled>{review.comment}</FeedbackStyled>
                </FeedbackItem>
              ))}
            </FeedbackList>
          </>
        )}
        <LevelList>
          {levels.map((level, i) => (
            <LevelItem key={i}>{level}</LevelItem>
          ))}
        </LevelList>
        {moreInfo && (
          <BookBtn type="button" onClick={onClickLesson}>
            Book trial lesson
          </BookBtn>
        )}
      </div>
    </ListItem>
  );
};

export default Teacher;
