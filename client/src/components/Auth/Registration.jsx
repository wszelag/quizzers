import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { userLogin } from "../../redux/actions";
import axiosInstance from "../../config/axios";
import { Link } from "react-router-dom";

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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="Joe Doe"
          ref={register({ required: true, maxLength: 10 })}
        />
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
        <input
          name="confirmPassword"
          type="password"
          ref={register({ required: true })}
          placeholder="******"
        />
        <input type="submit" />
        {/* DISPLAY ERRORS */}
        <div>
          {errors.name && <span>Name should contain 1-10 characters</span>}
          {errors.email && <span>Please, enter an email</span>}
          {errors.password && (
            <span>Password should contain at least 6 characters</span>
          )}
          {errors.confirmPassword && <span>Please, confirm your password</span>}
          {errorMessage && <span>{errorMessage}</span>}
        </div>

        <span>
          Already have an account?<Link to="/">Sign in</Link>
        </span>
      </form>
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
