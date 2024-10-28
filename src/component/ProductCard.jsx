import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="w-[280px] h-[400px] bg-green-50 rounded-lg overflow-hidden shadow-lg hover:bg-slate-300 hover:shadow-xl hover:scale-105 ease-in cursor-pointer"> 
      <img
        className="w-full h-40 object-cover"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-sm">{product.description}</p>
        <p className="text-lg font-semibold mt-2">₹{product.price}</p>
      </div>
      <div className="px-6 pt-2 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 h-[38px] w-[95px] text-xs text-white font-bold py-2 px-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
