import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import validateLogin from "../lib/validateLogin";
import { LOGIN_STATUS } from "../constants/loginStatus";
import SuccessMessage from "../components/SuccessMessage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../slices/user";

export default function Login() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const [wiggle, setWiggle] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function triggerWiggle() {
    setWiggle(true);
    setTimeout(() => setWiggle(false), 500);
  }

  useEffect(() => {
    if (!error) return;
    triggerWiggle();
  }, [error]);

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const result = validateLogin(username, password);

    switch (result.status) {
      case LOGIN_STATUS.INVALID_PASSWORD:
        setError("You have entered an invalid password.");
        break;
      case LOGIN_STATUS.INVALID_USER:
        setError("The username you have entered does not exist.");
        break;
      case LOGIN_STATUS.SUCCESS:
        setError("");
        setShowSuccess(true);
        dispatch(logIn({ username: username }));
        setTimeout(() => navigate("/memories"), 2000);
        break;
      default:
        setError(
          "The application has run into an unknown error. Refresh the page and try again.",
        );
    }
    if (error) {
      triggerWiggle();
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
        <div
          className={`${
            wiggle && "animatecss animatecss-headShake"
          } p-4 text-center`}
        >
          <Button onClick={handleLogin}>Log in</Button>
        </div>
      </form>
    </>
  );
}
