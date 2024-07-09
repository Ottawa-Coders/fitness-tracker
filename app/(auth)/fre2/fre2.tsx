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
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                />
                <label htmlFor="firstName">First Name</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <div className="form-floating">
              <textarea
                className="form-control !h-[100px]"
                placeholder="Leave a comment here"
                id="aboutText"
              ></textarea>
              <label htmlFor="aboutText" className="">
                Your Inspiration
              </label>
            </div>
          </div>

          <button className="btn btn-primary">Continue</button>
        </div>
      </div>
    </div>
  );
}
