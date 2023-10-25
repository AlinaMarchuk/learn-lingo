import InputField from "../../shared/components/InputField/InputField";
import Button from "../../shared/components/Button/Button";
import { Formik, Field, Form } from "formik";
import { RegisterSchema } from "../Schemas/AuthSchemas";
import { Container, PasswordWrapper } from "./RegisterForm.styled";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addUserDb } from "../../firebase/operations";

const RegisterForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onEyeClick = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async ({ name, email, password }, { resetForm }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log("registerCred:", userCredentials);
        addUserDb(userCredentials.user.uid, email, name);
        onClose();
      })
      .catch((error) => {
        console.log(error);
      });

    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form>
          <Container>
            <InputField
              placeholder="Name"
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
            <PasswordWrapper>
              <InputField
                placeholder="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={handleChange("password")}
                value={values.password || ""}
              />
              {showPassword ? (
                <AiOutlineEyeInvisible
                  size={20}
                  onClick={onEyeClick}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 18,
                  }}
                />
              ) : (
                <AiOutlineEye
                  size={20}
                  onClick={onEyeClick}
                  style={{
                    position: "absolute",
                    right: 10,
                    top: 18,
                  }}
                />
              )}
            </PasswordWrapper>

            <Button>Sign Up</Button>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
