import React from "react";
import "./CartItem.css";

function CartItem({item}) {
  return (
    <>

    <div className="cartItemBase">
      <div className="prdImage">
        <img src={item.images[0]} alt="" />
      </div>

      <div className="prdDetail">
        {/* <p>Detail of the Product like companty Brand etc</p> */}
        <p>Seller Detail</p>
        {/* <div className="selection">          
          <span>
            <label htmlFor="qty">Quantity</label>
            <select name="qty" id="">
              <option value="">10</option>
              <option value="">20</option>
              <option value="">30</option>
              <option value="">40</option>
            </select>
          </span>
      
        </div> */}
        <div className="itemPrice">
          <span>
            <strong>{item.price}</strong>
          </span>
        
       
        </div>
        
        <div><button className="mybtn">Remove</button></div>
      </div>
    </div>
    </>
  );
}

export default CartItem;
