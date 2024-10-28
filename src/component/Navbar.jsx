import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="fixed z-40 flex bg-green-100 content-center justify-between text-green-900 text-lg min-w-full h-[60px] p-1">
        <div className="w-3/5 min-h-full">
        <a href="/">
          <h2 className="font-bold text-xl">LOGO</h2>
        </a>
        </div>
        <div className=" flex float-end w-2/5 min-h-full justify-self-center text-green-900 mx-auto">
          <a
            href="/"
            className="mr-2 justify-center align-middle text-center h-full p-2 text-green-900 rounded-sm hover:bg-green-300"
          >
            Home
          </a>
          <a
            href="#"
            className="mr-2 justify-self-center text-center h-full p-2 text-green-900 rounded-sm hover:bg-green-300"
          >
            About
          </a>
          <a
            href="#"
            className="mr-2 justify-items-center text-center h-full p-2 text-green-900 rounded-sm hover:bg-green-300"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
