import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Avatar, Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import RestoreIcon from "@mui/icons-material/Search";
import { resultCache, removeLast, movetoTop} from "../utils/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [query, setQuery] = useState([]);
  const [onSelect, setOnselect] = useState(false);
  const cache = useSelector((store) => store.search);

  const fetchQuery = async () => {
    const data = await fetch(
      `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${value}`
    );
    const json = await data.json();
    setQuery(json[1]);
    if(Object.keys(cache).length >= 100) dispatch(removeLast())
    
    dispatch(resultCache({[value]: json[1]}))
  };

  useEffect(() => {
    const time = setTimeout(() => {
      if (cache[value]) {
        setQuery(cache[value]);
        dispatch(movetoTop(value))
      } else {
        fetchQuery();
      }
    }, 200);
    return () => clearTimeout(time);
  }, [value]);

  return (
    <div className="p-0 m-0 !w-full z-10">
      <AppBar position="static" sx={{ boxShadow: 0 }}>
        <Toolbar className="bg-white text-black pb-2">
          <Typography
            sx={{ flexGrow: 1 }}
            component={"div"}
            className="flex gap-3 text-lg items-center"
          >
            <IconButton
              onClick={() => dispatch(toggleMenu())}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <YouTubeIcon className="text-red-500" fontSize="large" />
            YouTube
          </Typography>
          <Typography
            component="div"
            className="flex items-center justify-center"
            sx={{ flexGrow: 10 }}
          >
            <input
              type="text"
              value={value}
              className="border rounded-l-full w-[50%] h-9 outline-none p-4 text-sm text-gray-700 focus:border-blue-400"
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setOnselect(true)}
              onBlur={() => setOnselect(false)}
            />
            <div className="border rounded-r-full h-9 px-2 bg-gray-50 hover:bg-gray-100">
              <IconButton size="small">
                <SearchIcon />
              </IconButton>
            </div>
          </Typography>
          <Typography className="flex gap-5" component={"div"}>
            <div className="text-gray-800 flex h-9 items-center w-fit px-3 gap-1 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
              <AddIcon />
              Create
            </div>
            <IconButton>
              <Badge badgeContent={9} color="error">
                <NotificationsOutlinedIcon
                  className="text-gray-900"
                  fontSize="30"
                />
              </Badge>
            </IconButton>
            <Avatar sx={{ width: 34, height: 34, bgcolor: "deepskyblue" }}>
              F
            </Avatar>
          </Typography>
        </Toolbar>
      </AppBar>
      {query.length > 0 && onSelect && (
        <div className="ml-[33%] fixed z-10 w-[33%] bg-white border rounded-md text-start py-2">
          {query?.map((e) => (
            <p
              key={e}
              className="text-gray-800 py-1 px-5 hover:bg-gray-50 cursor-pointer"
            >
              <RestoreIcon className="mr-4" />
              {e}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
