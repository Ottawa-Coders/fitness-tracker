"use client";

import React, { useState } from "react";
import { setItem, userStorageKey } from "@/pages/utils/localStorage";

export default function SignUp() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value, // Update the specific input field's value
    });
  };

  const submitUser = async (e: any) => {
    e.preventDefault();

    try {
      console.log(formValues);

      const body = {
        username: formValues.username,
        password: formValues.password,
      };

      const response = await fetch("/api/user/routes", {
        method: "POST",
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User added successfully:", data.message);
        console.log("User added successfully:", data.id);
        setItem(userStorageKey, data.id.toString());
      } else {
        const errorData = await response.json();
        console.error("Error adding user:", errorData.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="overflowHiddenContainer">
      <div className="inputContainer">
        <h1 className="mx-auto text-white">Sign Up Page</h1>
        <div>
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label  text-white">
              Create a Username
            </label>
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              value={formValues.username}
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label text-white">
              Create a Password
            </label>
            <div className="flex flex-row">
              <input
                type="password"
                className="form-control"
                value={formValues.password}
                name="password"
                id="passwordInput"
                onChange={handleChange}
              />
              <i className="bi bi-eye-slash text-white" id="togglePassword"></i>
            </div>

            <div id="passwordHelpBlock" className="form-text text-[#ABABAB]">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="confirmPasswordInput"
              className="form-label text-white"
            >
              Confirm Password
            </label>
            <div className="flex flex-row">
              <input
                type="password"
                value={formValues.confirmPassword}
                name="confirmPassword"
                className="form-control"
                id="confirmPasswordInput"
                onChange={handleChange}
              />
              <i className="bi bi-eye-slash text-white" id="togglePassword"></i>
            </div>
          </div>
          <button className="btn btn-primary" onClick={submitUser}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
