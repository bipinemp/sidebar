import "./styles.css";
import {
  AiFillApple,
  AiFillSetting,
  AiOutlineCloseCircle
} from "react-icons/ai";
import { IoHomeOutline, IoHelpOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";
import { VscSignOut } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function App() {
  const [click, setClick] = useState(false);

  const handleCLick = () => {
    setClick(!click);
  };

  return (
    <div className="App">
      <nav
        className="sidebar"
        style={{
          width: click ? "250px" : "65px"
        }}
      >
        <ul className="links">
          <li className="logo">
            <AiFillApple fontSize="30px" />
          </li>
          <li>
            <IoHomeOutline fontSize="26px" />
            <p>Home</p>
          </li>
          <li>
            <FaRegUser fontSize="23px" />
            <p>Conatacts</p>
          </li>
          <li>
            <FiMessageCircle fontSize="25px" />
            <p>Messages</p>
          </li>
          <li>
            <IoHelpOutline fontSize="30px" />
            <p>Help</p>
          </li>
          <li>
            <AiFillSetting fontSize="27px" />
            <p>Settings</p>
          </li>
          <li>
            <BiLockAlt fontSize="26px" />
            <p>Security</p>
          </li>
          <li>
            <VscSignOut fontSize="27px" />
            <p>Sign Out</p>
          </li>
          <li className="hamburger" onClick={handleCLick}>
            {click ? (
              <AiOutlineCloseCircle fontSize="30px" />
            ) : (
              <GiHamburgerMenu fontSize="30px" />
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
