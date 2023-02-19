import React from "react";

const About = () => {
  return (
    <div
      style={{
        border: "2px solid black",
        height: "auto",
        textAlign: "center",
      }}
    >
      <h1>About</h1>
      <p>It is a full-stack website.</p>
      <div style={boxParent}>
        <div style={boxStyle}>
          <p>
            <b>Tech-stack Used</b>
          </p>
          <p>
            <b>Frontend :</b> React, Javascript.
          </p>
          <p>
            <b>Backend : </b> Node.js, Javascript.
          </p>
        </div>

        <div style={boxStyle}>
          <p>
            <b>External Packges Used</b>
          </p>
          <p>
            <b>Frontend : </b> react-router-dom.
          </p>
          <p>
            <b>Backend : </b> nodemon, express, mongoose, dotenv, jsonwebtoken,
            bcrypt, cors.
          </p>
        </div>
        <div style={boxStyle}>
          <p>
            <b>Deployments</b>
          </p>
          <p>
            <b>Frontend : </b> vercel.
          </p>
          <p>
            <b>Backend : </b> cyclic.
          </p>
        </div>

        <div style={boxStyle}>
          <p>
            <b>Database</b>
          </p>

          <p>
            <b>Backend : </b> mongoDB atlas.
          </p>
        </div>
        <div style={boxStyle}>
          <p>
            <b>Features</b>
          </p>
          <p>
            There can be 2 types of user <b>Explorer & Admin</b>.
          </p>
          <p>
            A user can <b>Rigister / Signup</b>.
          </p>
          <p>
            A user can <b>Login</b> if already registered.
          </p>
          <p>
            A user (only admin) can <b>Update</b> user details.
          </p>
          <p>
            A user (only admin) can <b>Delete</b> any user from website.
          </p>
        </div>
        <div style={boxStyle}>
          <p>
            <b>Responsive</b>
          </p>

          <p>No</p>
        </div>
      </div>
    </div>
  );
};

export default About;

const boxParent = {
  width: "70%",
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  justifyContent: "center",
  columnGap: "20px",
  rowGap: "30px",
  padding: "15px",
};

const boxStyle = {
  backgroundColor: "lavender",
  padding: "10px",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: "10px",
};
