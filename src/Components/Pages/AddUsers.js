import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";

const AddUser = (props) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  function add(e) {
    e.preventDefault();
    axios.post("http://localhost:3100/users", user).then(() => {
      // eslint-disable-next-line no-restricted-globals
      navigate("/");
    });
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const { name, userName, email, phone, website } = user;
  console.log(user);
  return (
    <div className="add-user">
      <form
        className="card w-75 mx-auto position-absolute shadow top-50 start-50 translate-middle p-5"
        onSubmit={(e) => add(e)}
      >
        <h1 className="text-center mb-4 "> Add User </h1>
        <div className="form-group">
          <input
            typeof="text"
            placeholder="Enter Your Name"
            className="form-control w-75 mx-auto mb-3"
            name="name"
            value={name}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            typeof="text"
            placeholder="Enter Your UserName"
            className="form-control w-75 mx-auto mb-3"
            name="username"
            value={userName}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            typeof="text"
            placeholder="Enter Your E-mail Address"
            className="form-control w-75 mx-auto mb-3"
            name="email"
            value={email}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            typeof="text"
            placeholder="Enter Your Phone No"
            className="form-control w-75 mx-auto mb-3"
            name="phone"
            value={phone}
            onChange={handleChange}
          ></input>
        </div>
        <div className="form-group">
          <input
            typeof="text"
            placeholder="Enter Your Website Name"
            className="form-control w-75 mx-auto mb-3"
            value={website}
            name="website"
            onChange={handleChange}
          ></input>
        </div>
        <button
          typeof="submit"
          className="btn btn-primary w-25 mx-auto d-block"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
