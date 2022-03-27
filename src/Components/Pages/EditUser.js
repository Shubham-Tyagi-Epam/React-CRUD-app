import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditUser.css";

function EditUser() {
  const { id } = useParams();
  let navigate = useNavigate();
  let userUrl = `http://localhost:3100/users/${id}`;
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loadUser() {
    axios.get(userUrl).then((response) => {
      setUser({
        name: response.data.name,
        username: response.data.username,
        email: response.data.email,
        phone: response.data.phone,
        website: response.data.website,
      });
      console.log(response);
    });
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function edit(e) {
    e.preventDefault();
    axios.put(`http://localhost:3100/users/${id}`, user).then(() => {
      // eslint-disable-next-line no-restricted-globals
      navigate("/");
    });
  }

  const { name, username, email, phone, website } = user;
  return (
    <div className="edit pt-5">
      <form
        className="card w-75 p-5 bg-dark text-light mx-auto shadow"
        onSubmit={(e) => edit(e)}
      >
        <h1 className="text-center mb-4 ">Edit User </h1>
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
            value={username}
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
          Edit User
        </button>
      </form>
    </div>
  );
}

export default EditUser;
