import React, { useState } from "react";
import Button from "../../../atoms/button/Button";
import Input from "../../../atoms/input/Input";

const url = "http://localhost:5000/Account";

const RegisterForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      login,
      password,
    });

    console.log({ body });

    try {
      const response = await fetch(url, {
        body,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log({ response });
    } catch (err) {
      console.error(err);
    }
  };

  const loginInputOnChangeHandler = (e) => {
    setLogin(e.target.value);
  };

  const passwordInputOnChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input value={login} onChange={loginInputOnChangeHandler} label="Login" />
      <Input
        value={password}
        onChange={passwordInputOnChangeHandler}
        label="Password"
      />
      <Button type="submit" text="Submit" />
    </form>
  );
};

export default RegisterForm;
