import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StoreIcon from "@mui/icons-material/Store";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import "./Nav.css";

const Nav = () => {
  return (
    <div className=" new_nav">
      <div className="nav_data">
        {/* left */}
        <div className="left_data">
          <p>All</p>
          <p>Mobile</p>
          <p>Best seller</p>
          <p>Fashion</p>
          <p>Customer Services</p>
          <p>Electronices</p>
          <p>Prime</p>
          <p>Today's Deal</p>
          <p>Pay</p>
        </div>

        {/* right */}
        <div className="right_data">
          <div className=" icons">
            <PlayCircleIcon />
            <StoreIcon />
            <SportsEsportsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
