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
import { FaRegHeart, FaTrash } from "react-icons/fa";
import { BiBookOpen } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import { auth } from "../../firebase/config";
import { addFavoriteTeacher } from "../../firebase/operations";
import Modal from "../Modal/Modal";
import ModalTitle from "../../shared/components/ModalTitle/ModalTitle";
import BookLesson from "../BookLesson/BookLesson";

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
  liked,
  favorites = false,
}) => {
  const [moreInfo, setMoreInfo] = useState(false);
  const [fav, setFav] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalLesson, setShowModalLesson] = useState(false);

  const onClickLesson = () => {
    setShowModalLesson(true);
  };

  const onClose = () => {
    setShowModalLesson(false);
  };

  const handleMoreInfo = () => {
    setMoreInfo(!moreInfo);
  };

  const onOpenModal = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const handleLike = () => {
    if (auth.currentUser) {
      addFavoriteTeacher(auth.currentUser.uid, name, surname);
      setFav(!fav);
    } else onOpenModal();
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
          {favorites ? (
            <FaTrash size={26} onClick={handleLike} />
          ) : (
            <FaRegHeart
              size={26}
              color={liked ? "red" : "black"}
              onClick={handleLike}
            />
          )}
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
      {showModal && (
        <Modal onClose={onCloseModal}>
          <p>This functionality is available only to authorized users</p>
        </Modal>
      )}
      {showModalLesson && (
        <Modal onClose={onClose}>
          <ModalTitle
            title={"Book trial lesson"}
            subtitle={
              "Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."
            }
          ></ModalTitle>
          <BookLesson avatar={avatar_url} name={name} surname={surname} />
        </Modal>
      )}
    </ListItem>
  );
};

export default Teacher;
