/** @format */

import styled from "@emotion/styled";
import { Form, Field, ErrorMessage } from "formik";

export const FormContainer = styled(Form)`
  display: inline-block;
  padding: 30px;
  border: 1px solid black;
  margin: 30px;
  width: 600px;
  font-size: 20px;
`;

export const Header = styled.h1`
  margin-left: 30px;
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;

export const FieldContainer = styled.div`
  display: flex;
  // justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  font-size: 20px;
  padding: 5px;
  margin-right: 15px;
`;

export const Label = styled.label`
  display: flex;
  width: 200px;
  align-items: center;
`;
