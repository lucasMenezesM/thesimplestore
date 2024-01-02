import "./Style.css";
import { useGetByCategory } from "../../hooks/useGetByCategory";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList({ products }) {
  // const [products, isLoading] = useGetByCategory(category);
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
