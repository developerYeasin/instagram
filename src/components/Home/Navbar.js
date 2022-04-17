import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddPost from "./Navicons/AddPost";
import ExploreIcon from "./Navicons/ExploreIcon";
import HomeIcon from "./Navicons/HomeIcon";
import InboxIcon from "./Navicons/InboxIcon";
import NotificationIcon from "./Navicons/NotificationIcon";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <NavContainer>
      <Container>
        <NavBrand>
          <Link to="/">
            <img src="./img/nav-logo.png" alt="" />
          </Link>
        </NavBrand>
        <Search>
          {!show && (
            <svg
              aria-label="Search"
              color="#8e8e8e"
              fill="#8e8e8e"
              height="16"
              role="img"
              viewBox="0 0 24 24"
              width="16"
            >
              <path
                d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
              <line
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                x1="16.511"
                x2="22"
                y1="16.511"
                y2="22"
              ></line>
            </svg>
          )}
          <input
            type="text"
            placeholder="search"
            onClick={() => setShow(!show)}
            onBlur={() => setShow(!show)}
          />
          {show && <span onClick={() => setShow(!show)}></span>}
        </Search>
        <NavMenu>
          <li>
            <Link to="/">
              <HomeIcon />
            </Link>
          </li>
          <li>
            <Link to="/">
              <InboxIcon />
            </Link>
          </li>
          <li>
            <Link to="/">
              <AddPost />
            </Link>
          </li>
          <li>
            <Link to="/">
              <ExploreIcon />
            </Link>
          </li>
          <li>
            <Link to="/">
              <NotificationIcon />
            </Link>
          </li>
          <li>
            <img src="./img/user-img.jpg" alt="" />
          </li>
        </NavMenu>
      </Container>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  width: 100%;
  background: #fff;
  padding: 8px 0;
  box-shadow: 0 0 1px 0 #111111a3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
const Container = styled.div`
  width: 100%;
  max-width: 975px;
  padding: 0 20px;
  height: 48px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavBrand = styled.div`
  width: 35%;
`;
const Search = styled.div`
  background: #efefef;
  padding: 6px 13px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  width: 26%;
  img {
  }
  input {
    background: transparent;
    border: none;
    margin-left: 4px;
    font-size: 16px;
    padding: 2px;
    text-transform: capitalize;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  span {
    background-image: url("./img/icons.png");
    height: 17px;
    width: 22px;
    background-repeat: no-repeat;
    background-position: 77% 87%;
    text-indent: 100%;
    overflow: hidden;
    cursor: pointer;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: inline-block;
    margin: 0 10px;
    a {
      text-decoration: none;
      color: auto;
    }
    img {
      height: 24px;
      width: 24px;
      border-radius: 50%;
    }
  }
`;

export default Navbar;
