import React from "react";
import { useState } from "react/cjs/react.development";
import RegisterForm from "../molecules/forms/register-form/RegisterForm";
import ShowUsersButton from "../molecules/show-users-button/ShowUsersButton";
import UserList from "../molecules/user-list/UserList";

const Register = () => {
  const [userList, setUserList] = useState([]);

  return (
    <>
      <RegisterForm />
      <ShowUsersButton setUserList={setUserList} />
      <UserList userList={userList} />
    </>
  );
};

export default Register;
