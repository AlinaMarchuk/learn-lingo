import Button from "../../shared/components/Button/Button";
import InputField from "../../shared/components/InputField/InputField";
import { BookSchema } from "../Schemas/AuthSchemas";
import {
  TeacherInfo,
  TeacherAvatar,
  Teacher,
  TeachersName,
  FormStyled,
  RadioBtn,
} from "./BookLesson.styled";
import { Formik } from "formik";

const BookLesson = ({ avatar, name, surname }) => {
  const handleSubmit = async ({ name, email, password }, { resetForm }) => {
    console.log("hello").catch((error) => {
      console.log(error);
    });

    resetForm();
  };

  return (
    <>
      <TeacherInfo>
        <TeacherAvatar src={avatar} alt="teacher" />
        <div>
          <Teacher>Your teacher</Teacher>
          <TeachersName>{`${name} ${surname}`}</TeachersName>
        </div>
      </TeacherInfo>
      <h2>What is your main reason for learning English?</h2>
      <Formik
        initialValues={{ name: "", email: "", phone: "" }}
        validationSchema={BookSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values }) => (
          <FormStyled>
            <label>
              <RadioBtn
                type="radio"
                name="reason"
                value="Career and business"
                checked
              />
              Career and business
            </label>
            <label>
              <RadioBtn type="radio" name="reason" value="Lesson for kids" />
              Lesson for kids
            </label>
            <label>
              <RadioBtn type="radio" name="reason" value="Living abroad" />
              Living abroad
            </label>
            <label>
              <RadioBtn
                type="radio"
                name="reason"
                value="Exams and coursework"
              />
              Exams and coursework
            </label>
            <label>
              <RadioBtn
                type="radio"
                name="reason"
                value="Culture, travel or hobby"
              />
              Culture, travel or hobby
            </label>
            <InputField
              placeholder="Full Name"
              name="name"
              type="text"
              onChange={handleChange("name")}
              value={values.name || ""}
            />
            <InputField
              placeholder="Email"
              name="email"
              type="email"
              onChange={handleChange("email")}
              value={values.email || ""}
            />
            <InputField
              placeholder="Phone number"
              name="phone"
              type="phone"
              onChange={handleChange("phone")}
              value={values.phone || ""}
            />
            <Button>Book</Button>
          </FormStyled>
        )}
      </Formik>
    </>
  );
};

export default BookLesson;
