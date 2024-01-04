import "./Style.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList({ products, className = "" }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} className={className} />
      ))}
    </div>
  );
}
