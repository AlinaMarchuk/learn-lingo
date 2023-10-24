import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { ref, onValue } from "firebase/database";
import Teacher from "../components/Teacher/Teacher";

const Teachers = () => {
  //const [isLoaded, setIsLoaded] = useState (false)
  const [teachers, setTeachers] = useState([]);

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
            ></Teacher>
          )
        );

  console.log(teachers);
  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
};

export default Teachers;
