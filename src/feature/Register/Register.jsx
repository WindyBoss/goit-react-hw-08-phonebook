/** @format */

import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import authOperations from "redux/auth/authOperations";

// This is the register form - page, which use asyncThunk to register user

import {
  FormContainer,
  FieldContainer,
  Input,
  Error,
  Label,
  Header,
} from "./Register.styled";
import { useDispatch } from "react-redux";

let schema = yup.object().shape({
  name: yup.string().min(5, "Too Short!").required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(8, "Too Short!").required("Required"),
});

const Register = () => {
  const dispatch = useDispatch();

  function handleSubmit(values, { resetForm }) {
    dispatch(authOperations.register(values));
    resetForm();
  }

  return (
    <div>
      <Header>User Registration</Header>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <FieldContainer>
            <Label htmlFor="name">User Name</Label>
            <Input type="text" name="name" placeholder="Add User Name" />
            <Error component="p" name="name" />
          </FieldContainer>
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
            <PersonAddIcon fontSize="large" />
            <p>Add User</p>
          </Button>
        </FormContainer>
      </Formik>
    </div>
  );
};
export default Register;
