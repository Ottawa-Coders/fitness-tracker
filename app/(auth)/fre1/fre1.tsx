import React from "react";

export default function Page() {
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
                <div className="form-floating is-invalid">
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="firstName"
                    placeholder="First Name"
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
                <div className="form-floating is-invalid">
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="lastName"
                    placeholder="Last Name"
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
              <input type="date" className="form-control" id="dobInput" />
              <label htmlFor="dobInput">Date of Birth</label>
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="aboutText"
              ></textarea>
              <label htmlFor="aboutText">Tell us more about yourself</label>
            </div>
          </div>

          <button className="btn btn-primary">Finish</button>
        </div>
      </div>
    </div>
  );
}
