"use client";

import React, { useState, useEffect } from "react";

export default function Page() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    dobInput: "",
    aboutText: "",
  });

  const [invalidValues, setInvalidValues] = useState({
    isFirstNameInvalid: false,
    isLastNameInvalid: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (
      invalidValues.isFirstNameInvalid == true &&
      name == "firstName" &&
      value != ""
    ) {
      setInvalidValues((prevValues) => ({
        ...prevValues,
        isFirstNameInvalid: false,
      }));
    }

    if (
      invalidValues.isLastNameInvalid == true &&
      name == "lastName" &&
      value != ""
    ) {
      setInvalidValues((prevValues) => ({
        ...prevValues,
        isLastNameInvalid: false,
      }));
    }

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value, // Update the specific text input field's value
    }));
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value, // Update the specific text area field's value
    }));
  };

  const nextPage = () => {
    const firstNameInvalid = formValues.firstName === "";
    const lastNameInvalid = formValues.lastName === "";

    setInvalidValues((prevValues) => ({
      ...prevValues,
      isFirstNameInvalid: firstNameInvalid,
      isLastNameInvalid: lastNameInvalid,
    }));

    console.log(formValues);
  };

  return (
    <div className="overflowHiddenContainer">
      <div className="inputContainer">
        <div className="mx-auto text-white text-[25px] mb-3 font-bold">
          Additional Info
        </div>
        <div>
          <div className="row g-2 mb-3">
            <div className="col-md">
              <div className="input-group has-validation">
                <i className="input-group-text bi bi-person"></i>
                <div
                  className={`form-floating ${
                    invalidValues.isFirstNameInvalid ? "is-invalid" : ""
                  }`}
                  id="firstNameInvalidDiv"
                >
                  <input
                    type="text"
                    value={formValues.firstName}
                    className={`form-control ${
                      invalidValues.isFirstNameInvalid ? "is-invalid" : ""
                    }`}
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>
                <div className="invalid-feedback">
                  Please insert your first name.
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="input-group has-validation">
                <div
                  className={`form-floating ${
                    invalidValues.isLastNameInvalid ? "is-invalid" : ""
                  }`}
                >
                  <input
                    type="text"
                    className={`form-control ${
                      invalidValues.isLastNameInvalid ? "is-invalid" : ""
                    }`}
                    id="lastName"
                    value={formValues.lastName}
                    placeholder="Last Name"
                    name="lastName"
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>
                <div className="invalid-feedback">
                  Please insert your last name.
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <input
                type="date"
                className="form-control"
                id="dobInput"
                name="dobInput"
                value={formValues.dobInput}
                onChange={handleInputChange}
              />
              <label htmlFor="dobInput">Date of Birth</label>
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <textarea
                className="form-control !h-[100px]"
                id="aboutText"
                name="aboutText"
                value={formValues.aboutText}
                onChange={handleTextChange}
              ></textarea>
              <label htmlFor="aboutText">Tell us more about yourself</label>
            </div>
            <div
              id="aboutTextBlock"
              className="form-text text-[#949494] text-[12px]"
            >
              Please tell us more about yourself, this will be public for others
              to see and learn more about you!
            </div>
          </div>

          <button className="btn btn-primary" onClick={nextPage}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
