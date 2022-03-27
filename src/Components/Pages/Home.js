import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    axios.get("http://localhost:3100/users").then((data) => {
      let result = data;
      console.log(result.data);
      setUsers(result.data.reverse());
    });
  };

  function deleteUser(id) {
    axios.delete(`http://localhost:3100/users/${id}`).then(() => {
      loadUsers();
      console.log("User Deleted");
    });
  }

  return (
    <div className="home pt-5">
      <div className="bg-dark mb-5 p-3 text-center">
        <Link to="adduser">
          <button className="btn btn-info w-25 fs-4">Add User</button>
        </Link>
      </div>
      <table className="table bg-light border shadow w-75 mx-auto text-center table-hover">
        <thead className="bg-dark text-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index + user.name}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    to={`/viewuser/${user.id}`}
                    className="btn btn-primary mx-1"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edituser/${user.id}`}
                    className="btn btn-warning mx-1"
                  >
                    Edit
                  </Link>
                  <span
                    className="btn btn-danger mx-1"
                    onClick={() => deleteUser(`${user.id}`)}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
