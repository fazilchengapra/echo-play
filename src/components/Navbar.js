import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { hover } from "@testing-library/user-event/dist/hover";
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Badge } from "@mui/material";

const Navbar = () => {
  return (
    <Box>
      <AppBar sx={{ boxShadow: 0 }} className="border-b-2">
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
            <input type="text"  className="border rounded-l-full w-[50%] h-9 outline-none p-4 text-sm text-gray-700 focus:border-blue-400"  />
            <div className="border rounded-r-full h-9 px-2 bg-gray-50 hover:bg-gray-100 ">
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
            </div>
          </Typography>
          <Typography className="flex gap-5" component={"div"} >
            <div className="flex border h-9 items-center w-fit px-3 gap-1 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer" >
            <AddIcon/>
                Create
            </div>
            <IconButton>
                <Badge badgeContent={9} color="error">
                    <NotificationsIcon className="text-black" fontSize="30"/>
                </Badge>
            </IconButton>
            <Avatar sx={{width:34, height:34, bgcolor:'deepskyblue'}}>F</Avatar>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
