import { useState, useEffect } from "react";

export function useGetByCategory(category) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchData() {
        try {
          const res = await fetch(
            `https://fakestoreapi.com/products/category/${category}`
          );
          const data = await res.json();
          setProducts(data);
        } catch (err) {
          setError(err.message);
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      fetchData();
    },
    [category]
  );

  return [products, isLoading, error];
}
