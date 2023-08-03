import { Link } from "react-router-dom";
import { React, useState } from "react";
import { IoMdCart } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import TextField from "@mui/material/TextField";
import List from "../components/List";
import Container from 'react-bootstrap/Container';
import ProfileImage from "../avatar.png";
import { useUserAuth } from "../context/UserAuthContext";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { AiFillHome } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { FaBookReader } from "react-icons/fa";
import {
  RiUserSettingsFill,
  RiMessage2Fill,
  RiInformationFill,
} from "react-icons/ri";

export default function Navbar1() {

  const { user } = useUserAuth();

  const Linkss = [
    {
      title: "Home",
      icon: <AiFillHome />,
      path: "/",
    },
    {
      title: "All Courses",
      icon: <ImBooks />,
      path: "/courses",
    },
    {
      title: "My Learning",
      icon: <FaBookReader />,
      path: "/learning",
    },
    {
      title: "My Cart",
      icon: <IoMdCart />,
      path: "/cart",
    },
    {
      title: "Account Settings",
      icon: <RiUserSettingsFill />,
      path: "/settings",
    },
    {
      title: "Contact Us",
      icon: <RiMessage2Fill />,
      path: "/contact",
    },
    {
      title: "About Us",
      icon: <RiInformationFill />,
      path: "/about",
    },
  ];


  const Links = [
    { title: "Teach", path: "/teacher" },
    { title: <IoMdCart />, path: "/cart" }
  ];

  
  const [notification, setNotification] = useState(false);

  const showNotification = () => setNotification(!notification);

  
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  function display(){

  }


  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="nav-logo">Stud-e</h1>
      </Link>
      
      {/* <ul className="nav-link">
        {Links.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path}>{item.title}</Link>
            </li>
            
          );

        })}

      </ul> */}

     


  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
   

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
                    <NavDropdown  title="Account" id="basic-nav-dropdown">
          <div className="user-image">
          {/* <img src="/images/avatar.png" alt="user profile" /> */}
          <img src={(user && user.photoURL) || ProfileImage} />
        </div>
        
        {Linkss.map((item, index) => {
          return (
            <Link to={item.path} key={index} className="sidebar-link">
              <li>
                {item.icon}
                {item.title}
              </li>
            </Link>
          );
        })}
            
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>




    </div>
  );
}





