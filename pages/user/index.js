import React from "react";
import axios from "axios";
const apiUrl = "http://localhost:3000/api/user";

const userList=await axios.post(apiUrl, user)


const User = ({userList}) => {

  return (
    <div>
      <ul>
        {userList.map((user) => {
          <li key={user._id}>{user.email}</li>;
        })}
      </ul>
    </div>
  );
};

export default User;
