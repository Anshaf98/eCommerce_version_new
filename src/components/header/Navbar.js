import React from "react";
import "./Navbar.css";
import SearchOutlined from "@mui/icons-material/Search";
import { Avatar, Badge } from "@mui/material";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <header>
      <nav>
        {/* left */}
        <div className="left">
          <div className="navlogo">
            <h2>
              MHD | <span> Mohamed</span>
            </h2>
          </div>

          <div className="nav_searchbaar">
            <input type="text" />

            <div className="search_icon">
              <SearchOutlined id="search" />
            </div>
          </div>
        </div>

        {/* right */}
        <div className="right">
          <div className="nav_btn">
            <a href="">SignIn</a>
          </div>

          <div className="cart_btn">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartOutlined id="icon" />
            </Badge>
            <p>Cart</p>
          </div>

          <Avatar className="avtar" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
