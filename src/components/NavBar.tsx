import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";
import { userSelector } from "../slices/user";
import { useSelector } from "react-redux";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { logOut } from "../slices/user";

export default function NavBar() {
  const screenBigEnough = useMediaQuery("(min-width: 1135px)");
  const user = useSelector(userSelector);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function logOutFunction() {
    dispatch(logOut());
    navigate("/");
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (!(e.target as Element).closest(".navbar-dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("click", closeDropdown);

    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  return screenBigEnough ? (
    <nav className="flex justify-between overflow-clip bg-customGray font-title text-xl text-white">
      <ul className="ml-40 flex space-x-12">
        {user.loggedIn ? (
          <Link className="" to="/memories">
            <li>My Memories</li>
          </Link>
        ) : (
          <Link className="" to="/">
            <li className="">Nano Journal</li>
          </Link>
        )}

        <Link className="" to="/about">
          <li>About</li>
        </Link>
        <Link className="" to="/contact">
          <li>Contact</li>
        </Link>

        {!user.loggedIn && (
          <Link className="" to="/demo">
            <li>Demo</li>
          </Link>
        )}
      </ul>
      {user.loggedIn ? (
        <Button onClick={logOutFunction}>Log out</Button>
      ) : (
        <ul className="mr-12 flex space-x-4 bg-slate-600">
          <Link className="" to="/signup">
            <li className="">Sign up</li>
          </Link>
          <Link className="" to="/login">
            <li>Log in</li>
          </Link>
        </ul>
      )}
    </nav>
  ) : (
    <nav className="relative flex items-center justify-between bg-customGray font-title text-white">
      <Link to="/">
        <div className="ml-20 p-4 text-xl">Nano Journal</div>
      </Link>
      <button
        onClick={toggleDropdown}
        className="navbar-dropdown rounded-md p-4 text-xl text-white"
      >
        ☰
      </button>
      {isDropdownOpen && (
        <ul className="navbar-dropdown absolute right-0 top-full z-30 flex w-48 flex-col border-2 border-r-customTeal border-t-customYellow bg-customGray text-white">
          {user.loggedIn && (
            <Link className="" to="/memories">
              <li>My Memories</li>
            </Link>
          )}
          <Link to="/about" onClick={toggleDropdown}>
            <li>About</li>
          </Link>
          <Link to="/contact" onClick={toggleDropdown}>
            <li>Contact</li>
          </Link>

          {user.loggedIn ? (
            <li className="cursor-pointer" onClick={logOutFunction}>
              Log Out
            </li>
          ) : (
            <>
              <Link to="/demo" onClick={toggleDropdown}>
                <li>Demo</li>
              </Link>
              <Link className="" to="/signup">
                <li className="">Sign up</li>
              </Link>
              <Link className="" to="/login">
                <li>Log in</li>
              </Link>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}
