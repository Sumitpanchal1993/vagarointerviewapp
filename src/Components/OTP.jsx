import React, { useState } from "react";

function OTP({ otpLength = 6 }) {
  const init_Length =new Array(otpLength).fill();
  const [otpChar, setOtpChar] = useState(init_Length);
  // console.log(init_Length);
  const fieldSwitch = document.querySelectorAll('.OTPContainer input')
  Array.from(fieldSwitch)

  const handleKeyInput = (e, index) => {
    console.log(index)
    setOtpChar([e.key]);
    console.log(otpChar)
    console.log(e.key);    
  };

  return (
    <div className="OTPContainer">
      {otpChar.map((item, index) => {
        return (
          <input
            type="text"
            key={index}
            value={item}
            onKeyDown={(e) => {
              handleKeyInput(e, index);
            }}
          />
        );
      })}
      <button id="demo" onClick={()=>{console.log('Clicked')}}>Submit</button>
    </div>
  );
}

export default OTP;
