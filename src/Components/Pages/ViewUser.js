import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ViewUser.css";

function ViewUser() {
  const { id } = useParams();
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

  return (
    <div className="view">
      <div className="w-75 p-5 mx-auto shadow fs-4 fw-bold card top-50 start-50 translate-middle position-absolute info-card border-dark">
        <div className="container ">
          <div className="row">
            <div className="col-6">
              <div className="container-fluid">
                <div className="row justify-content-around">
                  <div className="col-4">name</div>{" "}
                  <div className="col-1">: </div>
                </div>
                <div className="row justify-content-around">
                  <div className="col-4">userName</div>{" "}
                  <div className="col-1">: </div>
                </div>
                <div className="row justify-content-around">
                  <div className="col-4">Email ID</div>{" "}
                  <div className="col-1">: </div>
                </div>
                <div className="row justify-content-around">
                  <div className="col-4">Mobile no</div>{" "}
                  <div className="col-1">: </div>
                </div>
                <div className="row justify-content-around">
                  <div className="col-4">Website</div>{" "}
                  <div className="col-1">: </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              {user.name} <br />
              {user.username} <br />
              {user.email} <br />
              {user.phone} <br />
              {user.website} <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewUser;
