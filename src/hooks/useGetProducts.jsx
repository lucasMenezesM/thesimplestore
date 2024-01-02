import { useEffect, useState } from "react";

export function useGetProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    setIsLoading(true);

    async function getProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        console.log(data);
      } catch (err) {
        console.log("failed to fetch date :" + err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();
  }, []);

  return { products, isLoading };
}
