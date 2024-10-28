import React, { useState } from "react";
import pic1 from "../images/Laptop1.jpeg";
import pic2 from "../images/Laptop2.jpeg";
import pic3 from "../images/Laptop3.jpeg";

const ProductDetails = () => {
  const product = {
    name: "Sample Product_1",
    price: 79.99,
    discountPrice: 99.99,
    rating: 4.5,
    images: [pic1, pic2, pic3],
    description:
      "These stylish sneakers are perfect for casual outings and everyday wear.",
    specifications: {
      varient: "4-256 Gb, 8-512 GB and 16-1TB",
      size: "Available in sizes 14 and 15.6 inc",
      color: "Black, White, Blue",
      material: "Plastic",
    },
    relatedProducts: [
      { id: 1, name: "Classic Runner", price: 69.99 },
      { id: 2, name: "Casual Loafer", price: 59.99 },
      { id: 3, name: "Sporty Sandal", price: 39.99 },
    ],
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % product.images.length);
  };

  const prevImage = () => {
    setActiveIndex(
      (prevIndex) =>
        (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col md:flex-row">
        {/* Image Gallery */}
        <div className="flex-none w-full md:w-1/2 relative">
          <img
            src={product.images[activeIndex]}
            alt={product.name}
            className="w-full h-[500px] rounded-lg shadow-lg transition-transform duration-300"
          />
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
          >
            &#9664;
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2"
          >
            &#9654;
          </button>
          <div className="mt-4 flex space-x-2">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                className={`w-1/4 h-auto rounded-lg cursor-pointer border-2 ${
                  activeIndex === index
                    ? "border-blue-500"
                    : "border-transparent"
                }`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 mt-4 md:mt-0 md:ml-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">
              {"★".repeat(Math.floor(product.rating))}
            </span>
            <span className="text-gray-500 ml-2">({product.rating})</span>
          </div>
          <div className="mt-2">
            <span className="text-xl font-bold">${product.price}</span>
            {product.discountPrice && (
              <span className="text-gray-500 line-through ml-2">
                ${product.discountPrice}
              </span>
            )}
          </div>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Add to Cart
          </button>
          <h2 className="mt-6 text-lg font-semibold">Description</h2>
          <p className="mt-2 text-gray-700">{product.description}</p>
          <h3 className="mt-4 font-semibold">Specifications</h3>
          <ul className="mt-2 text-gray-700">
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key}>{`${
                key.charAt(0).toUpperCase() + key.slice(1)
              }: ${value}`}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20 w-[98%] rounded-lg p-3">
        <h2 className="mt-8 text-lg font-semibold">You May Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {product.relatedProducts.map((related) => (
            <div key={related.id} className="border rounded-lg p-4">
              <h3 className="text-lg font-semibold">{related.name}</h3>
              <p className="text-xl font-bold">${related.price}</p>
              <button className="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
