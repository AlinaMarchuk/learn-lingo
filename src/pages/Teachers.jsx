import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { ref, onValue } from "firebase/database";
import Teacher from "../components/Teacher/Teacher";
import {
  TeacherSection,
  TeacherContainer,
  ButtonStyled,
} from "./Teachers.styled";
import { onAuthStateChanged } from "firebase/auth";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [arrFavs, setArrFavs] = useState([]);
  const [user, setUser] = useState(null);
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [page, setPage] = useState(1);

  const teachersRef = ref(db, "/teachers");

  useEffect(() => {
    onAuthStateChanged(auth, (credentials) => {
      if (credentials) {
        setUser(credentials);
      } else {
        setUser(null);
      }
    });
  });

  useEffect(() => {
    if (user) {
      const userRef = ref(db, "users/" + user.uid);
      onValue(userRef, (snapshot) => {
        setArrFavs([...snapshot.val().favorites]);
      });
    }
  }, [user]);

  useEffect(() => {
    const fullArr = [];
    onValue(
      teachersRef,
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          fullArr.push(childSnapshot.val());
        });
        setTeachers([...fullArr]);
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  useEffect(() => {
    if (page >= Math.ceil(teachers.length / 4) && teachers.length !== 0) {
      setShowMoreBtn(false);
    }
  }, [page, user]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const list =
    teachers.length === 0
      ? "Nothing"
      : teachers
          .slice(0, page * 4)
          .map(
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
                liked={arrFavs.includes(name + " " + surname)}
              ></Teacher>
            )
          );

  return (
    <>
      <TeacherSection>
        <TeacherContainer>
          <ul>{list}</ul>
          {showMoreBtn && (
            <ButtonStyled onClick={handleLoadMore}>Load More</ButtonStyled>
          )}
        </TeacherContainer>
      </TeacherSection>
    </>
  );
};

export default Teachers;
