import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { userLogin } from "../../redux/actions";
import axiosInstance from "../../config/axios";
import { Link } from "react-router-dom";
import { FullScreenWrapper } from "../../style/FullScreenWrapper";
import {
  FormContainer,
  Title,
  Footer,
  Label,
  SubmitButton,
  FieldName,
  Input,
  Errors,
  Error,
  StyledLink
} from ".././../style/Form.css";
import { registrationFormFieldsData } from "./data";

const Registration = ({ userLogin }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = async ({ name, email, password, confirmPassword }) => {
    setErrorMessage(null);
    if (password !== confirmPassword) {
      return setErrorMessage("Passwords are different");
    }
    await axiosInstance
      .post("users/register", { name, email, password })
      .then((res) => {
        const login = res.data.user;
        userLogin(login);
        reset();
      })
      .catch((err) => {
        const { msg } = err.response.data.errors[0];
        setErrorMessage(msg);
      });
  };

  const fields = registrationFormFieldsData.map((field) => {
    const { title, name, type, placeholder, options, id } = field;
    return (
      <Label key={id}>
        <FieldName>{title}</FieldName>
        <Input
          name={name}
          type={type}
          placeholder={placeholder}
          ref={register(options)}
        />
      </Label>
    );
  });

  return (
    <>
      <FullScreenWrapper>
        <FormContainer onSubmit={handleSubmit(onSubmit)} size="340px">
          <Title>Sign up</Title>
          {fields}
          <SubmitButton type="submit" />
        </FormContainer>
        {/* DISPLAY ERRORS */}
        <Errors>
          {errors.name && <Error>Name should contain 1-10 characters</Error>}
          {errors.email && <Error>Please, enter an email</Error>}
          {errors.password && (
            <Error>Password should contain at least 6 characters</Error>
          )}
          {errors.confirmPassword && (
            <Error>Please, confirm your password</Error>
          )}
          {errorMessage && <span>{errorMessage}</span>}
        </Errors>

        <StyledLink>
          Already have an account?<Link to="/">Sign in</Link>
        </StyledLink>

        <Footer>footer</Footer>
      </FullScreenWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  userLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
