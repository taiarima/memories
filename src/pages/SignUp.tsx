import React, { useState } from "react";
import Button from "../components/Button";
import createUser from "../lib/createUser";
import { LOGIN_STATUS } from "../lib/validateLogin";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");
  const [wiggle, setWiggle] = useState(false);

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isChecked) {
      setError(
        "You must agree to the conditions above before creating an account.",
      );
      setWiggle(true);
      setTimeout(() => setWiggle(false), 500);
      return;
    }

    const result = createUser(username, password);

    switch (result.status) {
      case LOGIN_STATUS.SUCCESS:
        setError("");
        
      case LOGIN_STATUS.INVALID_USER:
        setError(
          "An account has already been registered with this username. Please choose another username or sign in with existing account.",
        );
        setTimeout(() => setError(""), 500);
        return;
      case LOGIN_STATUS.INVALID_PASSWORD:
        setError("Your password must contain at least 8 characters.");
        setTimeout(() => setError(""), 500);
        return;
      default:
        setError(
          "The application has encountered an error. Please refresh the page and try again.",
        );
        return;
    }
  }

  return (
    <form className="mx-auto my-24 flex w-fit flex-col space-y-8 rounded-xl border-4 border-customYellow bg-customTeal p-8 font-title">
      <h1 className="text-center text-4xl text-white">Sign up</h1>
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

      <div
        className={`${
          wiggle && "animatecss animatecss-headShake"
        } p-4 text-center`}
      >
        <Button onClick={handleRegister}>Register</Button>
      </div>
    </form>
  );
}
