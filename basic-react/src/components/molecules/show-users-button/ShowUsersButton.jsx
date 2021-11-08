import React from "react";
import Button from "../../atoms/button/Button";

const url = "http://localhost:5000/Account";

const ShowUsersButton = ({ setUserList }) => {
  const clickHandler = async (e) => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => setUserList(data));
  };

  return <Button text="Show all users" onClick={clickHandler} />;
};

export default ShowUsersButton;
