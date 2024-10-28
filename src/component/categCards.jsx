import React from "react";

const CategCards = ({ key, item }) => {
  const categories = [
    { name: "Electronics", imageUrl: "path_to_image_1" },
    { name: "Fashion", imageUrl: "path_to_image_2" },
    { name: "Home", imageUrl: "path_to_image_3" },
    { name: "Beauty", imageUrl: "path_to_image_4" },
    { name: "Sports", imageUrl: "path_to_image_5" },
    { name: "Toys", imageUrl: "path_to_image_6" },
    { name: "Books", imageUrl: "path_to_image_7" },
  ];
  return (
    <>
      <div className="flex justify-center items-center space-x-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-[180px] h-[180px] rounded-full bg-gray-200 hover:bg-gray-300 transition duration-200"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-1/2 h-1/2 rounded-full object-cover"
            />
            <span className="mt-2 text-center text-lg font-semibold">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CategCards;
