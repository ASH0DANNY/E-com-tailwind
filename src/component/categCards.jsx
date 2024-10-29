import React from "react";

const CategCards = ({ key, item }) => {
  const categories = [
    {
      name: "Electronics",
      imageUrl:
        "	https://i.pinimg.com/736x/0a/48/55/0a48556cc1b291f006391b624175f719.jpg",
    },
    {
      name: "Fashion",
      imageUrl:
        "	https://thumbs.dreamstime.com/b/fashion-summer-wom…-accessories-flat-lay-top-view-91902924.jpg?w=768",
    },
    {
      name: "Home",
      imageUrl:
        "	https://www.designersmk.com/wp-content/uploads/2023/08/home-accessories-4-1024x577.jpg",
    },
    {
      name: "Beauty",
      imageUrl:
        "https://img.freepik.com/premium-photo/collection-m…ncluding-tube-makeup-tube-makeup_931866-25980.jpg",
    },
    {
      name: "Sports",
      imageUrl:
        "https://thumbs.dreamstime.com/b/assorted-sports-equipment-white-11938043.jpg?w=768",
    },
    {
      name: "Toys",
      imageUrl:
        "https://t4.ftcdn.net/jpg/03/24/42/21/360_F_324422176_Lgn7NTeFyNaUKIDu0Ppls1u8zb8wsKS4.webp",
    },
    {
      name: "Books",
      imageUrl:
        "https://c7.alamy.com/comp/2BJ02XN/stack-of-books-and-stationery-isolated-on-white-2BJ02XN.jpg",
    },
  ];
  return (
    <>
      <div className="flex justify-center items-center space-x-4">
        {categories.map((category, index) => (
          <>
            <div
              key={index}
              className="flex flex-col items-center justify-center w-[180px] h-[180px] bg-gray-200 hover:bg-gray-300 transition duration-200"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-[70%] h-[70%] rounded-full object-cover"
              />
              <span className="mt-1 text-center text-lg font-semibold">
                {category.name}
              </span>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default CategCards;
