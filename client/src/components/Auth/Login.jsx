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
import { loginFormFieldsData } from "./data";

const Login = ({ userLogin }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = async ({ email, password }) => {
    setErrorMessage(null);
    await axiosInstance
      .post("users/login", { email, password })
      .then((res) => {
        const { user } = res.data;
        userLogin(user);
        reset();
      })
      .catch((err) => {
        const { msg } = err.response.data.errors[0];
        setErrorMessage(msg);
      });
  };

  const fields = loginFormFieldsData.map((field) => {
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
        <FormContainer onSubmit={handleSubmit(onSubmit)} size="240px">
          <Title>Sign in</Title>
          {fields}
          <SubmitButton type="submit" />
        </FormContainer>
        {/* DISPLAY ERRORS */}
        <Errors>
          {errors.email && <Error>Please, enter an email</Error>}
          {errors.password && (
            <Error>Password should contain at least 6 characters</Error>
          )}
          {errorMessage && <Error>{errorMessage}</Error>}
        </Errors>

        <StyledLink>
          Don't have an account?<Link to="/register">Sign up</Link>
        </StyledLink>
        <Footer>footer</Footer>
      </FullScreenWrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  };
};

const mapDispatchToProps = {
  userLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
