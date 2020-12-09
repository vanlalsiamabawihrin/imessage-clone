import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewIcon from "@material-ui/icons/RateReview";
import { useDispatch, useSelector } from "react-redux";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { selectUser } from "./features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user.photo} className="sidebar__avatar" />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
        <IconButton variant="outlined" classname="sidebar__inputButton">
          <RateReviewIcon />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div> 
    </div>
  );
};

export default Sidebar;
