import { StyledInputField } from "./InputField.styled";
import { ErrorMessage } from "formik";

export default function InputField({
  placeholder,
  id,
  name,
  type,
  value,
  onChange,
}) {
  return (
    <>
      <StyledInputField
        placeholder={placeholder}
        id={id}
        name={name}
        type={type}
        value={value || ""}
        onChange={onChange}
      ></StyledInputField>
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div style={{ color: "red", marginTop: 10 }}>{msg}</div>
        )}
      />
    </>
  );
}
