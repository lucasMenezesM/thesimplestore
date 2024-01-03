import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Style.css";
import { useGetByCategory } from "../../hooks/useGetByCategory";
import CategorySection from "../Home/CategorySection/CategorySection";
import ProductList from "../../components/ProductList/ProductList";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [similarProducts, setSimilarProducts] = useState([]);

  const [otherProducts, isLoadingOtherProducts] = useGetByCategory(
    product.category
  );

  // const testproducts = otherProducts.filter((item) => item.id !== product.id);

  useEffect(
    function () {
      async function getProduct() {
        try {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await res.json();
          setProduct(data);
        } catch (err) {
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      getProduct();
    },
    [id]
  );

  useEffect(
    function () {
      setSimilarProducts(
        otherProducts.filter((item) => item.id !== product.id)
      );
    },
    [product, otherProducts, id, isLoading]
  );

  console.log(similarProducts);

  return (
    <div className="product-details-container">
      <div className="product-box">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              {/* <TextLimiter limit={30}>{product.description}</TextLimiter> */}
              <p>{product.description}</p>

              <div className="buttons-product-box">
                <button>Buy this product</button>
                <button>Buy this product</button>
                <button>Buy this product</button>
              </div>
            </div>
          </>
        )}
      </div>

      <CategorySection title={"Similar Products"}>
        <ProductList products={similarProducts} />
      </CategorySection>
    </div>
  );
}
