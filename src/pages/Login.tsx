import React, { useState } from "react";
import Button from "../components/Button";
import validateLogin from "../lib/validateLogin";
import { LOGIN_STATUS } from "../constants/loginStatus";
import SuccessMessage from "../components/SuccessMessage";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    if (password.length < 8) {
      setError("You must enter a valid password.");
      return;
    } else if (username.length < 8) {
      setError("You must enter a valid username.");
      return;
    }

    const result = validateLogin(username, password);

    switch (result.status) {
      case LOGIN_STATUS.INVALID_PASSWORD:
        setError("You have entered an invalid password.");
        return;
      case LOGIN_STATUS.INVALID_USER:
        setError("The username you have entered does not exist.");
      case LOGIN_STATUS.SUCCESS:
        setError("");
        setShowSuccess(true);
        setTimeout(() => navigate("/memories"), 2000);
        return;
      default:
        setError(
          "The application has run into an unknown error. Refresh the page and try again.",
        );
    }
  }

  return (
    <>
      {showSuccess && <SuccessMessage message="Login Successful" />}
      <form className="mx-auto my-24 flex w-fit flex-col space-y-8 rounded-xl border-4 border-customYellow bg-customTeal p-8 font-title">
        <h1 className="text-center text-4xl text-customGray">Nano Journal</h1>
        <div className="mx-auto flex flex-col space-y-4 text-xl">
          <span className="flex flex-row items-center space-x-2">
            <label className="flex-1">Username: </label>
            <input
              className="flex-1 rounded p-2"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
          </span>
          <span className="flex flex-row items-center space-x-2">
            <label className="flex-1">Password: </label>
            <input
              className="flex-1 rounded p-2"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
        </div>
        {error && (
          <p className="max-w-lg text-center text-red-600">*{error}*</p>
        )}
        <div className="p-4 text-center">
          <Button onClick={handleLogin}>Log in</Button>
        </div>
      </form>
    </>
  );
}
