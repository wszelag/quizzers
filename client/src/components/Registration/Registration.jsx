import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Registration = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = async ({ name, email, password, confirmPassword }) => {
    setErrorMessage(null);
    if (password !== confirmPassword) {
      return setErrorMessage("Passwords are different");
    }

    axios
      .post("http://localhost:8000/users", { name, email, password })
      .then((res) => {
        console.log(res);
        reset();
      })
      .catch((err) => {
        err && setErrorMessage("user already exist");
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
        {/* DISPLAY ERRORS */}
        {errors.name && <span>Name should contain 1-10 characters</span>}
        {errors.email && <span>Please, enter an email</span>}
        {errors.password && (
          <span>Password should contain at least 6 characters</span>
        )}
        {errors.confirmPassword && <span>Please, confirm your password</span>}
        {errorMessage && <span>{errorMessage}</span>}
        <input type="submit" />
      </form>
    </>
  );
};

export default Registration;
