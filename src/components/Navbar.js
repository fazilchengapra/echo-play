import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from "@mui/icons-material/Search";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Avatar, Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React from "react";

const Navbar = () => {
  return (
    <div className="p-0 m-0">
      <AppBar position="static" sx={{ boxShadow: 0}} className="">
        <Toolbar className="bg-white text-black pb-2">
          <Typography
            sx={{ flexGrow: 1 }}
            component={"div"}
            className="flex gap-3 text-lg items-center"
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <YouTubeIcon className="text-red-500" fontSize="large" />
            Youtube
          </Typography>
          <Typography
            component="div"
            className="flex items-center justify-center"
            sx={{ flexGrow: 10 }}
          >
            <input
              type="text"
              className="border rounded-l-full w-[50%] h-9 outline-none p-4 text-sm text-gray-700 focus:border-blue-400"
            />
            <div className="border rounded-r-full h-9 px-2 bg-gray-50 hover:bg-gray-100 ">
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
            </div>
          </Typography>
          <Typography className="flex gap-5" component={"div"}>
            <div className="text-gray-800 flex border h-9 items-center w-fit px-3 gap-1 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer">
              <AddIcon />
              Create
            </div>
            <IconButton>
              <Badge badgeContent={9} color="error">
                <NotificationsOutlinedIcon className="text-gray-900" fontSize="30" />
              </Badge>
            </IconButton>
            <Avatar sx={{ width: 34, height: 34, bgcolor: "deepskyblue" }}>
              F
            </Avatar>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
