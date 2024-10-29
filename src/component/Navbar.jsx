import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import WidgetsIcon from "@mui/icons-material/Widgets";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-40 flex bg-green-100 content-center justify-between text-green-900 shadow-lg text-lg min-w-full h-[60px] p-1">
        {/*For floating in middle with rounded edges <div className="fixed left-[40px] top-2 z-40 flex rounded-xl bg-green-100 content-center justify-between text-green-900 shadow-lg text-lg w-[94%] h-[60px] p-1"> */}
        <div className="w-3/5 min-h-full">
          <a href="/">
            <h2 className="font-bold text-xl">LOGO</h2>
          </a>
        </div>
        <div className="flex float-end w-2/5 min-h-full justify-center items-center text-green-900 mx-auto">
          <a
            href="/"
            className="mr-2 justify-center align-middle text-center h-full p-2 text-orange-500 rounded-sm hover:bg-green-200"
          >
            <HomeIcon sx={{ fontSize: 30 }} />
          </a>
          <a
            href="#"
            className="mr-2 justify-self-center text-center h-full p-2 text-orange-500 rounded-sm hover:bg-green-200"
          >
            <WidgetsIcon />
          </a>
          <a
            href="#"
            className="mr-2 justify-items-center text-center h-full p-2 text-orange-500 rounded-sm hover:bg-green-200"
          >
            <LocalMallIcon />
          </a>
          <a
            href="#"
            className="mr-2 justify-items-center text-center h-full p-2 text-orange-500 rounded-sm hover:bg-green-200"
          >
            <PersonIcon sx={{ fontSize: 30 }} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
