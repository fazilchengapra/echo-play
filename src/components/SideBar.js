import { Avatar, Box } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ThumbUpOffAltOutlinedIcon from "@mui/icons-material/ThumbUpOffAltOutlined";
import { useSelector } from "react-redux";

const main = [
  { label: "Home", component: <HomeIcon /> },
  { label: "Shorts", component: <VideocamIcon /> },
  { label: "Subscriptions", component: <SubscriptionsIcon /> },
];

const you = [
  { label: "History", component: <HistoryIcon /> },
  { label: "Playlists", component: <PlaylistPlayIcon /> },
  { label: "Your videos", component: <SmartDisplayOutlinedIcon /> },
  { label: "Your courses", component: <SchoolOutlinedIcon /> },
  { label: "Watch later", component: <AccessTimeOutlinedIcon /> },
  { label: "Liked videos", component: <ThumbUpOffAltOutlinedIcon /> },
];

const subscription = [
  {
    label: "Channel Name",
    src: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    label: "Channel Name",
    src: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    label: "Channel Name",
    src: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
  },
  {
    label: "Channel Name",
    src: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
  },
];
const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    if(!isMenuOpen) return null
  return (
    <Box
      component={"div"}
      className="px-4 flex flex-col gap-3 h-screen overflow-y-auto !pb-14"
    >
      {main.map((item, index) => (
        <div
          key={index}
          className="mb-3 flex h-9 items-center w-full px-3 gap-5 rounded-lg hover:bg-gray-200 cursor-pointer"
        >
          {item.component}
          {item.label}
        </div>
      ))}
      <div className="border-b border-gray-300 w-full"></div>
      <div className="mt-3">
        <div className="mb-3 flex h-9 items-center w-full px-3 gap-2 rounded-lg hover:bg-gray-200 cursor-pointer">
          <p className="text-lg font-semibold">You</p>
          <KeyboardArrowRightIcon />
        </div>
        {you.map((item, index) => (
          <div
            key={index + main.length}
            className="mb-3 flex h-9 items-center w-full px-3 gap-5 rounded-lg hover:bg-gray-200 cursor-pointer"
          >
            {item.component}
            {item.label}
          </div>
        ))}
      </div>
      <div className="border-b border-gray-300 w-full"></div>
      <div className="mt-3">
        <div className="mb-3 flex h-9 items-center w-full px-3">
          <p className="text-md font-semibold">Subscriptions</p>
        </div>
        {subscription.map((item, index) => (
          <div
            key={index + subscription.length}
            className="text-gray-800 mb-3 flex h-9 items-center w-full px-3 gap-5 rounded-lg hover:bg-gray-200 cursor-pointer"
          >
            <Avatar sx={{ width: 24, height: 24 }} src={item.src} />
            {item.label}
          </div>
        ))}
      </div>
    </Box>
  );
};

export default SideBar;
