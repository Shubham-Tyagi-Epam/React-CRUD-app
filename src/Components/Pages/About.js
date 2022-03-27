import React from "react";
import "./About.css";
import aboutUsSvg from "./../../assets/aboutUs.svg";
import pic1 from "./../../assets/img1.webp";
import pic2 from "./../../assets/img2.png";
import pic3 from "./../../assets/img3.jfif";
import pic4 from "./../../assets/img4.jpg";

const About = () => {
  return (
    <>
      <div
        className="about-us-intro"
        style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
      >
        <div
          className="card about-us-card mx-auto my-5 text-white p-5"
          style={{ width: "85%" }}
        >
          <div className="row justify-content-around">
            <div className="col-md-4 d-flex flex-column justify-content-center">
              <div className="">
                <img
                  src={aboutUsSvg}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
            </div>
            <div className="col-md-8 text-dark">
              <div
                className="card-body p-5 rounded aboutUsCard fw-bold"
                style={{
                  backgroundImage:
                    "linearGradient(315deg, #3f0d12 0%, #a71d31 74%)",
                  boxShadow: "rgb(77, 67, 67) 0px 3px 8px",
                }}
              >
                <h1 className="card-title display-1">About us </h1>
                <p className="card-text">
                  We as an organization Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Unde ipsa consequatur ex veniam quidem omnis
                  commodi at ad quisquam ratione repellendus, quod nobis quam
                  magni doloribus cumque est sint dolorum!.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
                <p className="" style={{ fontSize: "16px" }}>
                  {" "}
                  Our Organisation is Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Qui explicabo iste at rerum animi ipsa
                  voluptatibus voluptate! Rerum officia sunt pariatur
                  accusantium molestias est tempora possimus quod numquam, earum
                  aperiam. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Nulla magni minima odit est. Reiciendis, ratione nulla
                  incidunt eius, ullam dignissimos velit, sapiente ad tempore
                  architecto unde a illum officia eaque? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Qui explicabo iste at rerum
                  animi ipsa voluptatibus voluptate! Rerum officia sunt pariatur
                  accusantium molestias est tempora possimus quod numquam, earum
                  aperiam. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Nulla magni minima odit est. Reiciendis, ratione nulla
                  incidunt eius, ullam dignissimos velit, sapiente ad tempore
                  architecto unde a illum officia eaque? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Qui explicabo iste at rerum
                  animi ipsa voluptatibus voluptate! Rerum officia sunt pariatur
                  accusantium molestias est tempora possimus quod numquam, earum
                  aperiam. Lorem ipsum, dolor sit amet consectetur adipisicing
                  elit. Nulla magni minima odit est. Reiciendis, ratione nulla
                  incidunt eius, ullam dignissimos velit, sapiente ad tempore
                  architecto unde a illum officia eaque?Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 bg-our-team">
        <h1 className="display-1 text-center mb-5">Our Team</h1>
        <div className="d-flex flex-row justify-content-around flex-wrap align-content-around m-5">
          <img
            className="team-individual-image  rounded-circle p-2"
            src={pic1}
            alt="pic1"
          />
          <img
            className="team-individual-image rounded-circle p-2"
            src={pic2}
            alt="pic1"
          />
          <img
            className="team-individual-image rounded-circle p-2"
            src={pic3}
            alt="pic1"
          />
          <img
            className="team-individual-image rounded-circle p-2"
            src={pic4}
            alt="pic4"
          />
          <img
            className="team-individual-image rounded-circle p-2"
            src={pic4}
            alt="pic2"
          />
          <img
            className="team-individual-image rounded-circle p-2"
            src={pic1}
            alt="pic1"
          />
          <img
            className="team-individual-image  rounded-circle p-2"
            src={pic2}
            alt="pic1"
          />

          <img
            className="team-individual-image rounded-circle p-2"
            src={pic3}
            alt="pic1"
          />
        </div>
      </div>
    </>
  );
};

export default About;
