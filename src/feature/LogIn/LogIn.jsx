/** @format */

import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/authOperations";

import {
  FormContainer,
  FieldContainer,
  Input,
  Error,
  Label,
  Header,
} from "./LogIn.styled";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(8, "Too Short!").required("Required"),
});

const LogIn = () => {
  const dispatch = useDispatch();

  function handleSubmit(values, { resetForm }) {
    dispatch(authOperations.logIn(values));
    resetForm();
  }

  return (
    <div>
      <Header>Log in</Header>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <FieldContainer>
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" placeholder="Add Email" />
            <Error component="p" name="email" />
          </FieldContainer>
          <FieldContainer>
            <Label htmlFor="password">Password</Label>
            <Input type="text" name="password" placeholder="Add Password" />
            <Error component="p" name="password" />
          </FieldContainer>
          <Button
            type="submit"
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              minWidth: "200px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Log In
          </Button>
        </FormContainer>
      </Formik>
    </div>
  );
};
export default LogIn;
