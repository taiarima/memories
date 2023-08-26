import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-slate-600 text-white text-xl flex justify-between">
      <ul className="flex space-x-12 ml-40">
        <li className="">
          <Link className="" to="/">
            Micro Memories
          </Link>
        </li>
        <li>
          <Link className="" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="" to="/demo">
            Demo
          </Link>
        </li>
      </ul>
      <ul className="bg-slate-500 flex space-x-4 mr-12">
        <li>
          <Link className="" to="/signup">
            Sign up
          </Link>
        </li>
        <li>
          <Link className="" to="/login">
            Log in
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
