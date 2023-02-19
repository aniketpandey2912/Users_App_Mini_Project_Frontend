import React, { useState } from "react";
import { baseUrl, prodUrl } from "./utilities";

const initState = {
  username: "",
  email: "",
  DOB: "",
  Role: "",
  location: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
  const [form, setForm] = useState(initState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(form);
  };

  const handleFormValidation = () => {
    if (
      form.username === "" ||
      form.email === "" ||
      form.DOB === "" ||
      form.Role === "" ||
      form.location === "" ||
      form.password === "" ||
      form.confirm_password === ""
    ) {
      setError("All fields are mandatory");
      return true;
    }

    if (form.password.length < 4) {
      setError("Password length can't be less than 4 characters");
      return true;
    }
    if (form.password !== form.confirm_password) {
      setError("Password & confirm passwords are not matching");
      return true;
    }

    return false;
  };

  const handleRegister = async (userInfo) => {
    let errorFound = handleFormValidation();
    if (errorFound) return;
    setLoading(true);
    fetch(baseUrl + "/users/register", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setForm(initState);
        if (res.msg === "Registration successful") {
          alert("Registered successfully!");
          window.location.href = prodUrl + "login";
        } else {
          alert("Something went wrong, try again");
        }
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };

  return (
    <div style={{ height: "89vh" }}>
      <h1>SignUp</h1>
      <fieldset>
        <legend>User Details</legend>
        {error !== false ? <p style={errorStyle}>{error}</p> : null}
        <form onSubmit={(e) => handleSubmit(e)} style={formStyle}>
          <div>
            <input
              style={inputStyle}
              type="text"
              placeholder="username"
              onChange={(e) => handleChange(e)}
              value={form.username}
              name="username"
            />
          </div>
          <div>
            <input
              style={inputStyle}
              type="email"
              placeholder="email"
              onChange={(e) => handleChange(e)}
              value={form.email}
              name="email"
            />
          </div>
          <div>
            <input
              style={inputStyle}
              type="date"
              placeholder="DOB"
              onChange={(e) => handleChange(e)}
              value={form.DOB}
              name="DOB"
            />
          </div>
          <div>
            <select
              style={inputStyle}
              name="Role"
              onChange={(e) => handleChange(e)}
            >
              <option value="">Select your role</option>
              <option value="Explorer">Explorer</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
          <div>
            <input
              style={inputStyle}
              type="text"
              placeholder="location"
              onChange={(e) => handleChange(e)}
              value={form.location}
              name="location"
            />
          </div>
          <div>
            <input
              style={inputStyle}
              type="text"
              placeholder="password"
              onChange={(e) => handleChange(e)}
              value={form.password}
              name="password"
            />
          </div>
          <div>
            <input
              style={inputStyle}
              type="text"
              placeholder="confirm password"
              onChange={(e) => handleChange(e)}
              value={form.confirm_password}
              name="confirm_password"
            />
          </div>
          <div>
            <button disabled={loading} style={inputStyle} type="submit">
              Submit
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default SignUp;

const inputStyle = {
  width: "100%",
  fontSize: "16px",
  padding: "2px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "auto",
  rowGap: "10px",
};

const errorStyle = {
  color: "red",
};
