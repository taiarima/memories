import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="text-white text-xl flex justify-between bg-customGray font-title overflow-clip">
      <ul className="flex space-x-12 ml-40">
        <Link className="" to="/">
          <li className="">Micro Memories</li>
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
      <ul className="bg-slate-600 flex space-x-4 mr-12">
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
