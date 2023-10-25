import {
  TeacherInfo,
  TeacherAvatar,
  Teacher,
  TeachersName,
  FormStyled,
} from "./BookLesson.styled";

const BookLesson = () => {
  return (
    <>
      <TeacherInfo>
        <TeacherAvatar src="" alt="teacher" />
        <div>
          <Teacher>Your teacher</Teacher>
          <TeachersName>Name</TeachersName>
        </div>
      </TeacherInfo>
      <h2>What is your main reason for learning English?</h2>
      <FormStyled>
        <label>
          <input
            type="radio"
            name="reason"
            value="Career and business"
            checked
          />
          Career and business
        </label>
        <label>
          <input type="radio" name="reason" value="Lesson for kids" />
          Lesson for kids
        </label>
        <label>
          <input type="radio" name="reason" value="Living abroad" />
          Living abroad
        </label>
        <label>
          <input type="radio" name="reason" value="Exams and coursework" />
          Exams and coursework
        </label>
        <label>
          <input type="radio" name="reason" value="Culture, travel or hobby" />
          Culture, travel or hobby
        </label>
      </FormStyled>
    </>
  );
};

export default BookLesson;
