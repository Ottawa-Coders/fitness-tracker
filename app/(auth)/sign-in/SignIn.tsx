import React from "react";

const SignIn = () => {
  return (
    <div className="overflowHiddenContainer">
      <div className="inputContainer">
        <h1 className="mx-auto text-white">Sign In Page</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="usernameInput" className="form-label  text-white">
              Username
            </label>
            <input type="text" className="form-control" id="usernameInput" />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label text-white">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
