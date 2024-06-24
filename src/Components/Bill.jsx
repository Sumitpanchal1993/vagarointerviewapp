import React from "react";
import "./Bill.css";



function Bill({totalMRP, count}) {

  const platformFees = 100
  const shippingFees = 100
  const discount = 10
  let total = totalMRP-(totalMRP*discount/100)+ platformFees + shippingFees
  return (
    <>
      <div className="billBase">
        <div>
          <h3>Price Detail</h3>
        </div>
        <div>
          <span>Total Items</span>
          <span>({count} items)</span>
        </div>
        <hr />
        <div className="amount">
          <span>Total MRP</span>
          <span>₹{totalMRP}</span>
        </div>
        <div className="amount">
          <span>Discount on MRP</span>
          <span>₹{(totalMRP*discount/100)}</span>
        </div>
        
        <div className="amount">
          <span>Platform Fees</span>
          <span>₹{platformFees}</span>
        </div>
        <div className="amount">
          <span>Shipping Fees</span>
          <span>₹{shippingFees}</span>
        </div>
        <hr />
        <div className="amount">
          <span>Total Amount to Pay</span>
          <span>₹{total}</span>
        </div>
       
        <div>
          <button className="mybtn">Place Order</button>
        </div>
      </div>
    </>
  );
}

export default Bill;
