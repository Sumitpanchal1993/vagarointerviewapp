import React from "react";
import "./Bill.css";



function Bill({totalMRP, count}) {

  const platformFees = 15
  const shippingFees = 15
  const discountpercent = 10
  const discount = (totalMRP*discountpercent/100).toFixed(2)
  let total = eval (totalMRP-(totalMRP*discountpercent/100)+ platformFees + shippingFees)
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
          <span>₹{totalMRP.toFixed(2)}</span>
        </div>
        <div className="amount">
          <span>Discount on MRP</span>
          <span>₹{discount}</span>
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
          <span>₹{total.toFixed(2)}</span>
        </div>
       
        <div>
          <button className="mybtn">Place Order</button>
        </div>
      </div>
    </>
  );
}

export default Bill;
