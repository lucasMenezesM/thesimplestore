import { CiShoppingCart } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";

import ProductModal from "../modals/ProductModal";

import "./Style.css";
export default function ProductCard({ product, className = "" }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`product-card ${className}`}>
      <img src={product.image} alt={`${product.title}`} />
      <div className="product-info">
        <h5>{product.title}</h5>
        <p className="product-price">Price: ${product.price}</p>
      </div>
      <div className="pruduct-buttons">
        <button className="buy-btn">
          <Link className="link" to={`/product/${product.id}`}>
            Buy{" "}
            <span>
              <CiShoppingCart size={20} />
            </span>
          </Link>
        </button>
        <button
          className="details-btn"
          onClick={() => setIsModalOpen((curr) => !curr)}
        >
          Show Details{" "}
          <span>
            <TbListDetails size={20} />
          </span>
        </button>
        {isModalOpen && (
          <ProductModal product={product} onToggle={setIsModalOpen} />
        )}
      </div>
    </div>
  );
}
