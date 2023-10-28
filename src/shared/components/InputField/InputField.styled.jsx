import styled from "@emotion/styled";
import { Field } from "formik";

export const StyledInputField = styled(Field)`
  width: 100%;
  height: 54px;
  padding: 0 18px;
  border: 1px solid var(--input-border-color);
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--input-text-color);
  outline: none;
  transition: border 250ms ease-in;

  &::placeholder {
    color: var(--input-placeholder-color);
  }
  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: 1px solid var(--input-border-hover-color) !important;
    background-color: transparent !important;
  }
`;
