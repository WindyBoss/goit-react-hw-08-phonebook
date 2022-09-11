/** @format */

import PersonIcon from "@mui/icons-material/Person";
import PropTypes from "prop-types";
import { TextField, Button, styled } from "@mui/material";

import {
  InfoContainer,
  Info,
  ContactProfileContainer,
} from "./ContactProfile.styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUpdateContactMutation } from "service/apiService";
import toast from "react-hot-toast";
import SendIcon from "@mui/icons-material/Send";

require("yup-phone");

const ContactProfile = ({ contact }) => {
  const [changingMode, setChangingMode] = useState(false);
  const handleChange = () => {
    setChangingMode((prevState) => !prevState);
  };

  return (
    <ContactProfileContainer>
      {changingMode ? (
        <ChangeForm contact={contact} onClick={handleChange} />
      ) : (
        <>
          <Button
            type="button"
            onClick={handleChange}
            endIcon={<PersonIcon />}
            variant="contained"
            sx={{ marginBottom: "20px" }}
          >
            Update Contact
          </Button>
          <InfoContainer>
            <p>
              Name: <Info>{contact.name}</Info>
            </p>
            <p>
              Phone: <Info>{contact.number}</Info>
            </p>
          </InfoContainer>
        </>
      )}
    </ContactProfileContainer>
  );
};

export default ContactProfile;

const schema = yup
  .object({
    name: yup.string().max(20).min(3).required(),
    number: yup.string().phone().required(),
  })
  .required();

function ChangeForm({ contact, onClick }) {
  const [updateContact] = useUpdateContactMutation();

  const onSubmit = (data) => {
    const newContact = {
      id: contact.id,
      number: data.number,
      name: data.name,
    };
    updateContact(newContact);
    toast.success("The contact was successfully updated");
    onClick();
    reset();
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <ValidationTextField
          {...register("name", { value: contact.name })}
          label={errors.number ? "Text Valid Name" : "Text Name"}
        />
        <p>{errors.name?.message}</p>
      </div>
      <div>
        <ValidationTextField
          type="number"
          {...register("number", { value: contact.number })}
          label={errors.number ? "Text Valid Number" : "Text Number"}
          color="primary"
        />
        <p>{errors.number?.message}</p>
      </div>
      <Button
        variant="contained"
        size="large"
        endIcon={<SendIcon />}
        type="submit"
      >
        Update Contact
      </Button>
    </form>
  );
}

const ValidationTextField = styled(TextField)(() => {
  return {
    "& input:valid + fieldset": {
      borderColor: "green",
      color: "green",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      color: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      borderColor: "blue",
      color: "blue",
    },
  };
});

ContactProfile.propTypes = {
  contact: PropTypes.object.isRequired,
};
