import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setFetchData(data.products));
  }, []);

  const handleAddToCart = (itemObj) => {
    let newCartDetail = {
      images: itemObj.images,
      title: itemObj.title,
      price: itemObj.price,
    };
    setCartData([...cartData, newCartDetail]);
  };

  const searchFunction = (str) => {
    let filtered = fetchData.filter((item) => {return(((item.title).toLowerCase()).includes(str))});
    
      setFetchData(filtered);

  };

  return (
    <>
      <Router>
        <Navbar searchFunction={searchFunction} />
        {/* <h1>Go to All Products and Add to Cart</h1> */}
        <Routes>
          <Route
            path="/allproducts"
            element={
              <AllProducts
                fetchData={fetchData}
                handleAddToCart={handleAddToCart}
              />
            }
          ></Route>
          <Route path="/cart" element={<Cart cartData={cartData} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
