import React from "react";

const CategPage = ({category}) => {
  return (
    <>
      <div className="bg-gray-300">{category}
        <div className="min-h-[70vh] w-4/5 p-3 bg-white ml-auto mr-auto mt-10 mb-10 rounded-lg">
          Category Block
        </div>
      </div>
    </>
  );
};

export default CategPage;
