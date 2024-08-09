import React, { useState } from "react";
import "../styles/ProductComparison.css";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";

const ProductComparison = () => {
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);

  const products = [
    {
      id: 1,
      imageUrl: image1,
      price: 300,
    },
    {
      id: 2,
      imageUrl: image2,
      price: 100,
    },
  ];

  const handleChoose = (id) => {
    const selectedProduct = products.find((product) => product.id === id);
    const otherProduct = products.find((product) => product.id !== id);

    const isSelectedCorrect = selectedProduct.price > otherProduct.price;
    setSelected(id);
    setIsCorrect(isSelectedCorrect);

    if (isSelectedCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <div className="product-comparison">
      <div className="product-comparison__container">
        {products.map((product) => (
          <div key={product.id} className="product-comparison__product">
            <img
              src={product.imageUrl}
              alt={`Product ${product.id}`}
              className="product-comparison__image"
            />
            <button
              className="product-comparison__button"
              onClick={() => handleChoose(product.id)}
            >
              Choose
            </button>
          </div>
        ))}
      </div>
      {selected !== null && (
        <div className="product-comparison__result">
          {isCorrect ? "Correct!" : "Incorrect!"}
        </div>
      )}
      <div className="product-comparison__score">Score: {score}</div>
    </div>
  );
};

export default ProductComparison;
