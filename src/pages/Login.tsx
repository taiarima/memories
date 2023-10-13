import React from "react";
import Button from "../components/Button";
import validateLogin from "../lib/validateLogin";
import { LOGIN_STATUS } from "./../lib/validateLogin";

export default function Login() {
  return (
    <form className="mx-auto my-24 flex w-fit flex-col space-y-8 rounded-xl border-4 border-customYellow bg-customTeal p-8 font-title">
      <h1 className="text-center text-4xl text-white">Nano Journal</h1>
      <div className="mx-auto flex flex-col space-y-4 text-xl">
        <span className="flex flex-row items-center space-x-2">
          <label className="flex-1">Username: </label>
          <input className="flex-1 rounded p-2" type="text" />
        </span>
        <span className="flex flex-row items-center space-x-2">
          <label className="flex-1">Password: </label>
          <input className="flex-1 rounded p-2" type="password" />
        </span>
      </div>
      <div className="p-4 text-center">
        <Button onClick={() => "nothing"}>Log in</Button>
      </div>
    </form>
  );
}
