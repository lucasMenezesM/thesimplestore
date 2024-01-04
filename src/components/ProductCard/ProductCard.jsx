import "./Style.css";
import ProductModel from "../modals/ProductModel";
import { CiShoppingCart } from "react-icons/ci";
import { TbListDetails } from "react-icons/tb";

import { Link } from "react-router-dom";
import { useState } from "react";
export default function ProductCard({ product, className = "" }) {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className={`product-card ${className}`}>
      {showModel && <ProductModel product={product} />}

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
          onClick={() => setShowModel((curr) => !curr)}
        >
          Show Details{" "}
          <span>
            <TbListDetails size={20} />
          </span>
        </button>
      </div>
    </div>
  );
}
