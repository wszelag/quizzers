import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { userLogin } from "../../redux/actions";
import axiosInstance from "../../config/axios";
import { Link } from "react-router-dom";

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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          type="email"
          ref={register({ required: true })}
          placeholder="joedoe@gmail.com"
        />
        <input
          name="password"
          type="password"
          ref={register({ required: true, minLength: 6 })}
          placeholder="******"
        />
        <input type="submit" />
      </form>
      {/* DISPLAY ERRORS */}
      <div>
        {errors.email && <span>Please, enter an email</span>}
        {errors.password && (
          <span>Password should contain at least 6 characters</span>
        )}
        {errorMessage && <span>{errorMessage}</span>}
      </div>

      <span>
        Don't have an account?<Link to="/register">Sign up</Link>
      </span>
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
