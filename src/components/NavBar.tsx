import { Link } from "react-router-dom";

function NavBar() {
  return (
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
  );
}

export default NavBar;
