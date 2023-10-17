import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

export default function NavBar() {
  const screenBigEnough = useMediaQuery("(min-width: 1135px)");

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return screenBigEnough ? (
    <nav className="flex justify-between overflow-clip bg-customGray font-title text-xl text-white">
      <ul className="ml-40 flex space-x-12">
        <Link className="" to="/">
          <li className="">Nano Journal</li>
        </Link>
        <Link className="" to="/about">
          <li>About</li>
        </Link>
        <Link className="" to="/contact">
          <li>Contact</li>
        </Link>
        <Link className="" to="/demo">
          <li>Demo</li>
        </Link>
      </ul>
      <ul className="mr-12 flex space-x-4 bg-slate-600">
        <Link className="" to="/signup">
          <li className="">Sign up</li>
        </Link>
        <Link className="" to="/login">
          <li>Log in</li>
        </Link>
      </ul>
    </nav>
  ) : (
    <nav className="relative flex items-center justify-between bg-customGray font-title text-white">
      <Link to="/">
        <div className="ml-20 p-4 text-xl">Nano Journal</div>
      </Link>
      <button
        onClick={toggleDropdown}
        className="rounded-md p-4 text-xl text-white"
      >
        ☰
      </button>
      {isDropdownOpen && (
        <ul className="absolute right-0 top-full z-30 flex w-48 flex-col bg-customGray text-white">
          <Link to="/about" onClick={toggleDropdown}>
            <li>About</li>
          </Link>
          <Link to="/contact" onClick={toggleDropdown}>
            <li>Contact</li>
          </Link>
          <Link to="/demo" onClick={toggleDropdown}>
            <li>Demo</li>
          </Link>
        </ul>
      )}
    </nav>
  );
}
