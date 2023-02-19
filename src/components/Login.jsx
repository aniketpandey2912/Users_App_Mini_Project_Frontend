import React, { useState } from "react";
import { baseUrl, prodUrl } from "./utilities";

const initState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(form);
  };

  const handleFormValidation = () => {
    if (form.email === "" || form.password === "") {
      setError("All fields are mandatory");
      return true;
    }

    if (form.password.length < 4) {
      setError("Password length can't be less than 4 characters");
      return true;
    }

    return false;
  };

  const handleLogin = async (userInfo) => {
    let errorFound = handleFormValidation();
    if (errorFound) return;
    setLoading(true);
    fetch(baseUrl + "/users/login", {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (res.token && res.displayName) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("displayName", res.displayName);
          setForm(initState);
          alert("login sucessfully!");
          window.location.href = prodUrl;
        } else {
          alert("Wrong Credentials!");
        }
      })
      .catch((err) => {
        setLoading(false);
        alert(err);
      });
  };

  return (
    <div style={{ height: "89vh" }}>
      <h1>Please login and continue...</h1>
      <fieldset>
        <legend>Enter Credentials</legend>
        {error !== false ? <p style={errorStyle}>{error}</p> : null}
        <form onSubmit={(e) => handleSubmit(e)} style={formStyle}>
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
              type="password"
              placeholder="password"
              onChange={(e) => handleChange(e)}
              value={form.password}
              name="password"
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

export default Login;

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
