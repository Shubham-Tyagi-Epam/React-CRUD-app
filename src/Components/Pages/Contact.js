import React from "react";
import pic from "./../../assets/contactUs.jpg";
import "./contactUs.css";

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-7">
            <img src={pic} alt="pic" className="img-fluid" />
          </div>
          <div className="col-5">
            <div className="text-end">
              <h1 className="display-1 pe-5"> Contact US </h1>
              <h5>
                Aute id sit cillum voluptate fugiat officia sint do veniam.
                Commodo consectetur ea ad sunt reprehenderit reprehenderit
                irure. Mollit nostrud do laboris voluptate enim culpa sit ex
                mollit in laboris. Qui id culpa dolore id non velit cupidatat
                consequat eiusmod.
              </h5>
            </div>
            <div className="row">
              <button className="btn btn-outline-primary w-25 fs-4 mx-auto ">
                {" "}
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
