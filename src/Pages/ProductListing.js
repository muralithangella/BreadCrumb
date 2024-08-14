import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((data) => data.json())
      .then((val) => setProducts(val.products));
  }, []);

  return (
    <div>
      <h1>ProductListing Page</h1>
      <div className="product-grid">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListing;
