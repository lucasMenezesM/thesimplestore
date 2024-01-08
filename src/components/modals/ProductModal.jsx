import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";

import "./Style.css";

export default function ProductModal({ product, onToggle }) {
  return (
    <div className="modal-background">
      <div className="modal">
        <h2>{product.title}</h2>
        <div className="modal-details">
          <p>
            Price: ${product.price} | Category: {product.category}
          </p>
          <p>{product.description}</p>
        </div>
        <div className="modal-btns">
          <Button
            className="modal-btn"
            bgColor="red"
            onClick={() => onToggle(false)}
          >
            Close
          </Button>
          <Button bgColor="green" className="modal-btn">
            <Link className="link" to={`/product/${product.id}`}>
              Buy{" "}
              <span>
                <CiShoppingCart size={20} />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
