import React from "react";
import CategCards from "./categCards";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const products = [
    {
      key: 1,
      image:
        "https://www.cnet.com/a/img/resize/8f2558a2e865fe95080553212c33011e32cc2b09/hub/2024/01/30/00871e2f-cbf8-4140-a37f-04bd5fdc1c46/openai-orangepurple-logo.jpg?auto=webp&fit=crop&height=675&width=1200",
      title: "Sample Product1",
      description: "This is a sample product1 description.",
      price: "2399",
    },
    {
      key: 2,
      image:
        "https://www.cnet.com/a/img/resize/8f2558a2e865fe95080553212c33011e32cc2b09/hub/2024/01/30/00871e2f-cbf8-4140-a37f-04bd5fdc1c46/openai-orangepurple-logo.jpg?auto=webp&fit=crop&height=675&width=1200",
      title: "Sample Product2",
      description: "This is a sample product2 description.",
      price: "399",
    },
    {
      key: 3,
      image:
        "https://www.cnet.com/a/img/resize/8f2558a2e865fe95080553212c33011e32cc2b09/hub/2024/01/30/00871e2f-cbf8-4140-a37f-04bd5fdc1c46/openai-orangepurple-logo.jpg?auto=webp&fit=crop&height=675&width=1200",
      title: "Sample Product3",
      description: "This is a sample product3 description.",
      price: "4599",
    },
    {
      key: 4,
      image:
        "https://www.cnet.com/a/img/resize/8f2558a2e865fe95080553212c33011e32cc2b09/hub/2024/01/30/00871e2f-cbf8-4140-a37f-04bd5fdc1c46/openai-orangepurple-logo.jpg?auto=webp&fit=crop&height=675&width=1200",
      title: "Sample Product4",
      description: "This is a sample product4 description.",
      price: "999",
    },
    {
      key: 5,
      image:
        "https://www.cnet.com/a/img/resize/8f2558a2e865fe95080553212c33011e32cc2b09/hub/2024/01/30/00871e2f-cbf8-4140-a37f-04bd5fdc1c46/openai-orangepurple-logo.jpg?auto=webp&fit=crop&height=675&width=1200",
      title: "Sample Product5",
      description: "This is a sample product5 description.",
      price: "599",
    },
  ];
  // const categoryListItem = ["Jeans", "Shoes", "Toys", "Jackets", "Accessories"];
  return (
    <>
      <div className="block w-full bg-gray-300">
        <div className="block w-full h-[380px] bg-black mb-[10px]"></div>
        <div className="w-full p-3 flex mt-5 mb-10 ml-auto mr-auto rounded-lg align-middle min-h-60 overflow-hidden">
          <CategCards />;
        </div>

        <div className="flex flex-wrap h-auto w-[98%] px-6 py-10 items-center bg-white overflow-hidden gap-10  ml-auto mr-auto mt-10 mb-10 rounded-lg">
          <p className="w-full text-center mb-5">Container 2</p>
          {products.map((product) => {
            return (
              <Link to="/product/details">
                <ProductCard product={product} />
              </Link>
            );
          })}
        </div>
        <div className="flex-wrap h-[400px] w-4/5 p-3 bg-white ml-auto mr-auto mt-10 mb-10 rounded-lg">
          <span className="text-xs">Container 3</span>
          <label>
            <input
              type="radio"
              className="forced-colors:appearance-auto appearance-none"
            />
            <p className="forced-colors:block hidden">Cyan</p>
            <div class="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-200">
              1
            </div>
            <div class="forced-colors:hidden h-6 w-6 rounded-full bg-cyan-500">
              2
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
