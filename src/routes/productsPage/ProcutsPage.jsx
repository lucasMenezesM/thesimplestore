import { useGetProducts } from "../../hooks/useGetProducts";
import ProductCard from "../../components/ProductCard/ProductCard";
import BannerPNG from "../../components/BannerPNG/BannerPNG";

import "./ProductsPage.css";
export default function ProductsPage() {
  const [products, isLoading] = useGetProducts();
  return (
    <div className="products-page">
      <BannerPNG
        title={"Explore Our Diverse Range of Products"}
        description={
          "Welcome to the heart of Simple Store – our Products page, where style meets functionality. Discover a carefully curated selection that caters to your unique tastes and desires. From fashion-forward clothing to cutting-edge gadgets and delightful home essentials, our collection is designed to elevate your lifestyle."
        }
        imgUrl={"/assets/products-banner.png"}
      />

      <div className="products-display-section">
        <h2>Have a look in our products:</h2>

        {isLoading ? (
          <h3>Loading Products...</h3>
        ) : (
          <div className="display-products">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className="productCard-productPage"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
