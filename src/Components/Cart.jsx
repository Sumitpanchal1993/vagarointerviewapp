import React, { useEffect, useState } from "react";
import Bill from "./Bill";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart({ cartData }) {
  const [totalMRP, setTotalMRP] = useState(0);

  useEffect(() => {
    let totalMRP = 0;
    cartData.map((item) => {
      let itemmrp = parseFloat(item.price);
      return (totalMRP += itemmrp);
    }, []);

    setTotalMRP(totalMRP);
  }, [cartData]);

  return (
    <>
      <h1>Cart</h1>
      <div className="cartBase">
        <div className="boughtItems">    
          {cartData.map((item, index) => {
            return <CartItem key = {index} item={item} />;
          })}
        </div>
        <div className="bill">
                <Bill totalMRP={totalMRP} count ={cartData.length}/>         
        </div>
      </div>
    </>
  );
}

export default Cart;
