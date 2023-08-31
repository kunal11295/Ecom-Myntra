import React from 'react'

function Addproduct() {
  return (
     <div>
        <h1>Product Detail</h1>
        <form onsubmit="addproduct(event)"/>
        <label>Product Name</label><br/>
        <input type="text" id="pname"/><br/>
        <label>Product Price</label><br/>
        <input type="text" id="pprice"/><br/>
        <label>Product Image url </label><br/>
        <input type="text" id="pimage"/><br/>
        <input type="submit"/><br/>  
    <form/>
    </div>
  )
}

export default Addproduct
