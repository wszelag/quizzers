import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../config/axios";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async ({ email, password }) => {
    setErrorMessage(null);

    await axiosInstance
      .post("http://localhost:8000/users/login", { email, password })
      .then((res) => {
        console.log("response:", res);
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
        {/* DISPLAY ERRORS */}
        {errors.email && <span>Please, enter an email</span>}
        {errors.password && (
          <span>Password should contain at least 6 characters</span>
        )}
        {errorMessage && <span>{errorMessage}</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default Login;
