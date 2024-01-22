import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Style.css";
import { useGetByCategory } from "../../hooks/useGetByCategory";
import CategoryItems from "../Home/Components/CategoryItems";
import ProductList from "../../components/ProductList/ProductList";
import Button from "../../components/Button/Button";
import { findAllInRenderedTree } from "react-dom/test-utils";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [similarProducts, setSimilarProducts] = useState([]);
  const [isLoadingSimilar, setIsLoadingSimilar] = useState(true);

  useEffect(
    function () {
      async function getProduct() {
        try {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await res.json();
          setProduct(data);
        } catch (err) {
          setError(err.message);
          console.log(err.message);
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
      getProduct();
    },
    [id, error]
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${product.category}`
        );
        const data = await res.json();
        const finalResult = data.filter((curr) => curr.id !== product.id);
        setSimilarProducts(finalResult);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoadingSimilar(false);
      }
    }

    fetchData();
  }, [product]);

  console.log(similarProducts);

  return (
    <div className="product-details-container">
      <div className="product-box">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          <>
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              {/* <TextLimiter limit={30}>{product.description}</TextLimiter> */}
              <p>{product.description}</p>

              <div className="buttons-product-box">
                <Button>Buy this product</Button>
                <Button>Buy this product</Button>
                <Button>Buy this product</Button>
              </div>
            </div>
          </>
        )}
      </div>
      {isLoadingSimilar ? (
        <h2>Loading Products...</h2>
      ) : (
        <CategoryItems title={"Similar Products"}>
          <ProductList products={similarProducts} />
        </CategoryItems>
      )}
    </div>
  );
}
