import { useState, useContext } from "react";
import { Menu, CrossIcon } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import GlobalContext from "../../context/GlobalContext";
import { useSelector } from 'react-redux'

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const userLogged = localStorage.getItem('token')


  return (
    <nav className={`${isOpen ? "navbar_expand" : "navbar_normal"} navbar`}>
      <div className="flexbox">

        {!isOpen ? (<h2 className="nav-title">Robotix Club</h2>) : ""}
        <div className={`${isOpen ? "display-nav" : "displayno"} navbar`}>
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          {/* <Link to="/events">EVENT</Link>
              <Link to="/project">PROJECT</Link>
              <Link to="/teams">TEAM</Link> */}
          {!userLogged && (
            <>
              <Link to="/log-in">LOGIN</Link>
              <Link to="/sign-up">SIGN UP</Link>
            </>
          )}
          <Link to="/post">BLOG</Link>
        </div></div>

      {isOpen ? (
        <CrossIcon
          onClick={() => setOpen(false)}
          className="menu_icons cross_icon"
        />
      ) : (
        <Menu onClick={() => setOpen(true)} className="menu_icons" />
      )}
    </nav>
  );
}