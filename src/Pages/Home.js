import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((data) => data.json())
      .then((val) => {
        setTrendingProducts(val.products.slice(0, 6));
      });
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <span>Trending Products 🔥</span>
      <div className="product-grid">
        {trendingProducts.map((product) => {
          return (
            <>
              <div key={product.id} className="product-card">
                <Link to={`/products/${product.id}`}>
                  <img src={product.thumbnail} alt={product.title} />
                  <h3>{product.title}</h3>
                </Link>
              </div>
            </>
          );
        })}
      </div>
      <Link to="/product-listing">
        {" "}
        <button type="button" style={{ width: "100%", padding: 10 }}>
          View More Products
        </button>
      </Link>
    </div>
  );
};

export default Home;
