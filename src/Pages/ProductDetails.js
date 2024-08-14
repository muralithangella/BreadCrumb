import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((data) => data.json())
      .then((value) => setProduct(value));
  }, [id]);
  return (
    <div>
      <h1>ProductDetails Page</h1>
      {product ? (
        <div>
          <img src={product.thumbnail} alt="Product" />
          <h3>{product.title}</h3>
          <h3>$ {product.price}</h3>
          <p>{product.description}</p>
        </div>
      ) : (
        // this is not the right way to do loading, create a separate state for this
        // This is temporary solution for breadcrumbs tutorial
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
