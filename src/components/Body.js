
import React from "react";
import SideBar from "./SideBar";
import MainContent from "./MainContainer";

const Body = () => {
  return (
    <div className="grid grid-flow-col ">
      <div className="col-span-1">
        <SideBar />
      </div>
      <div className="col-span-11">
        <MainContent />
      </div>
    </div>
  );
};

export default Body;
