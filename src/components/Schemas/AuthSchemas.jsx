import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Email error",
      excludeEmptyString: true,
    }),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(/^[a-zA-Z0-9]+$/, {
      message: "Password error",
      excludeEmptyString: true,
    }),
});

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Email error",
      excludeEmptyString: true,
    }),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required")
    .matches(/^[a-zA-Z0-9]+$/, {
      message:
        "Password must contain Latin letters and numbers, without spaces in different case, from 8 to 64 characters",
      excludeEmptyString: true,
    }),
});
