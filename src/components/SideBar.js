import { Avatar, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useSelector } from "react-redux";
import { main, you, subscription } from "../constants/sidebarData";

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    if(!isMenuOpen) return null
  return (
    <Box
      component={"div"}
      className="px-4 flex flex-col gap-3 h-screen overflow-y-auto"
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
