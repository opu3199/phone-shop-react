
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const Navbar = () => {
    return (
       <nav className=" lg:flex space-y-5 justify-between lg:mx-20 p-5 shadow-md my-10 mx-5">
        <Logo></Logo>
        <ul className="flex gap-10">
            <li>
        <NavLink
  to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-300 p-2" : ""
  }
>
  Home
</NavLink>
</li>
<li>
<NavLink
  to="/favourites"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-300 p-2" : ""
  }
>
  Favourites
</NavLink>
</li>
<li>
<NavLink
  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-300 p-2" : ""
  }
>
  Login
</NavLink> 
</li>
        </ul>
       </nav>
    );
};

export default Navbar;