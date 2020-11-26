import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewIcon from "@material-ui/icons/RateReview";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div classname="sidebar">
      <h4>I am the side bar</h4>
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
        <IconButton variant="outlined" classname="sidebar__inputButton">
          <RateReviewIcon />
        </IconButton>
      </div>
      <div className="sidebar__chats"></div>
    </div>
  );
};

export default Sidebar;
