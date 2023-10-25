import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { ref, onValue } from "firebase/database";
import Teacher from "../components/Teacher/Teacher";
import { TeacherSection, TeacherContainer } from "./Teachers.styled";
import Modal from "../components/Modal/Modal";
import ModalTitle from "../shared/components/ModalTitle/ModalTitle";
import BookLesson from "../components/BookLesson/BookLesson";

const Teachers = () => {
  //const [isLoaded, setIsLoaded] = useState (false)
  const [teachers, setTeachers] = useState([]);
  const [showModalLesson, setShowModalLesson] = useState(false);

  const onClickLesson = () => {
    setShowModalLesson(true);
  };

  const onClose = () => {
    setShowModalLesson(false);
  };

  useEffect(() => {
    const teachersRef = ref(db, `/teachers`);
    const arr = [];
    onValue(
      teachersRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          //  console.log(childSnapshot.key);
          // console.log(childSnapshot.val());
          arr.push(childSnapshot.val());

          // ...
        });
        setTeachers([...teachers, ...arr]);
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  const list =
    teachers.length === 0
      ? "Nothing"
      : teachers.map(
          (
            {
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
            },
            i
          ) => (
            <Teacher
              key={i}
              name={name}
              surname={surname}
              avatar_url={avatar_url}
              conditions={conditions}
              experience={experience}
              languages={languages}
              lesson_info={lesson_info}
              lessons_done={lessons_done}
              price_per_hour={price_per_hour}
              rating={rating}
              reviews={reviews}
              levels={levels}
              onClickLesson={onClickLesson}
            ></Teacher>
          )
        );

  console.log(teachers);

  return (
    <TeacherSection>
      <TeacherContainer>
        <ul>{list}</ul>
        {showModalLesson && (
          <Modal onClose={onClose}>
            <ModalTitle
              title={"Book trial lesson"}
              subtitle={
                "Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."
              }
            ></ModalTitle>
            <BookLesson />
          </Modal>
        )}
      </TeacherContainer>
    </TeacherSection>
  );
};

export default Teachers;
