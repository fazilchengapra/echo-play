import React from "react";
import { Button, ButtonGroup } from "@mui/material";


const ButtonList = () => {


  const buttons = [
    "All", "Javascript", "Python", "Movies", "News", "Football", "Cricket",
    
  ];

  return (
    <div className="relative flex items-center  max-w-screen-xl gap-3 mx-auto px-2">
      <div className="flex overflow-x-hidden scroll-smooth p-1 mx-auto">
        <ButtonGroup variant="contained" sx={{ gap: 1, boxShadow: 0, border: "none" }}>
          {buttons.map((label) => (
            <Button key={label} className="!capitalize !text-md !rounded-md !bg-gray-300 !border-none !text-black">
              {label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ButtonList;
