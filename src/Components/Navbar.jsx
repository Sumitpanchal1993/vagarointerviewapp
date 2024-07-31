import React, { useRef, useState }  from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import Logo from '../assets/react.svg'

function Navbar({searchFunction}) {
  const [searchString, setSearchString] = useState('')
  // const searchString =useRef()

  // const onSearchBtn = ()=>{
  //   let string = searchString.current.value  
  //   searchFunction(string)
  // }



  return (
    <>
      <nav>
        <div className="logo">
        <Link to= '/'>
          <img src={Logo} alt="" />
        </Link>
        </div>

        <div className="search">
          <input type="text"  value={searchString} onChange={(e)=>{
            setSearchString(e.target.value)
            searchFunction(e.target.value)}}/>
          {/* <button onClick={()=>{onSearchBtn()}}>Search</button> */}
        </div>

        <div className="options">
          <Link to='/allproducts'>
            <span>All Products</span>
          </Link>
          <Link to='/cart'>
            <span>Cart</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
