import InputField from "../../shared/components/InputField/InputField";
import Button from "../../shared/components/Button/Button";
import { Formik, Form } from "formik";
import { LoginSchema } from "../Schemas/AuthSchemas";
import { Container, PasswordWrapper } from "./LoginForm.styled";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onEyeClick = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        onClose();
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, values }) => (
        <Form>
          <Container>
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

            <Button>Log In</Button>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
