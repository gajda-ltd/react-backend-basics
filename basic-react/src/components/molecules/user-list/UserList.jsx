import React from "react";

const UserList = ({ userList }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((user) => (
          <tr key={user}>
            <td>{user}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
