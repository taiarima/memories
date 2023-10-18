import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import createUser from "../lib/createUser";
import { LOGIN_STATUS } from "../constants/loginStatus";
import { useNavigate } from "react-router-dom";
import SuccessMessage from "../components/SuccessMessage";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [wiggle, setWiggle] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // make useEffect for wiggle

  useEffect(() => {
    if (!error) return;

    setWiggle(true);
    setTimeout(() => setWiggle(false), 500);
  }, [error]);
  let navigate = useNavigate();

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isChecked) {
      setError(
        "You must agree to the conditions above before creating an account.",
      );
      // setWiggle(true);
      // setTimeout(() => setWiggle(false), 500);
      return;
    }

    const result = createUser(username, password);

    switch (result.status) {
      case LOGIN_STATUS.SUCCESS:
        setError("");
        setShowSuccess(true);
        setTimeout(() => navigate("/memories"), 2000);
        return;
      case LOGIN_STATUS.INVALID_PASSWORD:
        setError("Your password must contain at least 8 characters.");
        return;

      case LOGIN_STATUS.INVALID_USER:
        if (result.username.length < 8) {
          setError("You must choose a username at least 8 characters long.");
        } else {
          setError(
            "An account has already been registered with this username. Please choose another username or sign in with existing account.",
          );
        }
        return;
      default:
        setError(
          "The application has encountered an error. Please refresh the page and try again.",
        );
        return;
    }
  }

  return (
    <>
      {showSuccess && <SuccessMessage message="Account Successfully Created" />}
      <form className="mx-auto my-24 flex w-fit flex-col space-y-8 rounded-xl border-4 border-customYellow bg-customTeal p-8 font-title">
        <h1 className="text-center text-4xl text-customGray">Sign up</h1>
        <p className="my-4 max-w-lg text-center">
          ❗DISCLAIMER: This is a demo application. Data will only be stored in
          local storage. Do NOT enter any sensitive information.
        </p>
        <div className="mx-auto flex flex-col space-y-4 text-xl">
          <span className="flex flex-row items-center space-x-2">
            <label className="flex-1">Create username: </label>
            <input
              className="flex-1 rounded p-2"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </span>
          <span className="flex flex-row items-center space-x-2">
            <label className="flex-1">Create password: </label>
            <input
              className="flex-1 rounded p-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
        </div>

        <label className="flex items-center space-x-4">
          <input
            type="checkbox"
            onChange={() => setIsChecked(!isChecked)}
            checked={isChecked}
          />
          <span className="ml-2 max-w-lg">
            By clicking here, I acknowledge that this is a demo application and
            all data will only be stored on my local machine.
          </span>
        </label>
        {error && (
          <p className="max-w-lg text-center text-red-600">*{error}*</p>
        )}

        <div
          className={`${
            wiggle && "animatecss animatecss-headShake"
          } p-4 text-center`}
        >
          <Button onClick={handleRegister}>Register</Button>
        </div>
      </form>
    </>
  );
}
