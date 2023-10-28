import { useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import Teacher from "../components/Teacher/Teacher";
import { TeacherContainer, TeacherSection } from "./Teachers.styled";

const Favorites = () => {
  const [teachers, setTeachers] = useState([]);
  const [arrFavs, setArrFavs] = useState([]);
  const [user, setUser] = useState(null);

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
          // ...
        });
        setTeachers([...fullArr]);
      },
      {
        onlyOnce: true,
      }
    );
  }, []);

  const filteredList = teachers.filter((teacher) => {
    if (arrFavs.includes(teacher.name + " " + teacher.surname)) {
      return teacher;
    }
  });

  const result =
    filteredList.length === 0
      ? "There are no favorite teachers"
      : filteredList.map(
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
          ) => {
            return (
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
                favorites={true}
              ></Teacher>
            );
          }
        );

  return (
    <TeacherSection>
      <TeacherContainer>
        <ul>{result}</ul>
      </TeacherContainer>
    </TeacherSection>
  );
};

export default Favorites;
