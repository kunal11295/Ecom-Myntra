import React from 'react'

function Singleproduct() {
  return (
    <div>
      <div id="main">
        <div id="navbar">
            <div>
              <img src="images_1_-removebg-preview.png"/>
            </div>
            <div>
              <p>MEN</p>
              <p>WOMEN</p>
              <p>KIDS</p>
              <p>HOME&LIVING</p>
              <p>BEAUTY</p>
              <p>STUDIO</p>
            </div>
            <div>
              <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
               <input type="search" placeholder="Search for Product"/>
            </div>
            <div>
              <div>
                <i className="fa-regular fa-user"></i>
                <p>Profile</p>
              </div>
              <div>
                <i className="fa-regular fa-heart"></i>
                <p>wishlist</p>
              </div>
              <div>
                <i className="fa-solid fa-bag-shopping"></i>
                <p>Bags</p>
              </div>
            </div>
          </div>
          <div className="title">
            <div>
                <ul>
                    <li>Home</li>
                    <li>/</li>
                    <li>Clothing</li>
                    <li>/</li>
                    <li>Men Clothing</li>
                    <li>/</li>
                    <li>Tshirts</li>
                    <li>/</li>
                    <li><b>Minions By Kook N Keech Tshirts</b></li>
                    <li></li>
                    <li><b>More By Minions By Kook N Keech</b></li>
                </ul>
            </div>
          </div>
          <div className="products">
            <div className="left">
                <div>
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/736b9f2c-3a49-41a9-828c-1e0218b62e431559550212164-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-1.jpg"/>
                </div>
                <div>
                <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/a21db48e-5fa4-4bd6-8a52-203745f247611559550212145-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-2.jpg"/>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/7d2bb3b5-b6a9-4cac-ab1f-814071ac32f11559550212123-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-3.jpg"/>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/c8e2c851-ad44-4623-9df0-b03995554c431559550212101-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-4.jpg"/>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/8923841/2019/6/3/361af51e-4174-419c-aebc-3bb80120d8f31559550212090-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-5.jpg"/>
                </div>
            </div>
            <div className="right">
                    <div className="input">
                        <h1>Minions by Kook N Keech</h1>
                    </div>
                    <div className="title-one">
                        <h1>Men Purple Boxy Fit Printed Round Neck Pure Cotton<br/>Oversized T-shirt</h1>
                    </div>
                    <div className="rating">
                        <p>4.3<i className="fa-solid fa-star" style="color: #14943b;"></i></p>
                        <p>|</p>
                        <p>3.7k Ratings</p>
                    </div>
                  <hr style="width: 90%; margin: auto;"/>
                    <div className="price">
                        <h2>₹626</h2>
                        <p>MRP ₹1099</p>
                        <span>(43% OFF)</span>
                    </div>
                    <div className="inclusive">
                      <p>inclusive of all taxes</p>
                    </div>
                    <div className="size">
                      <h3>SELECT SIZE</h3>
                      <h5>SIZE CHART</h5>
                        <svg width="15" height="15" fill="none" stroke="#f934c4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </div>
                    <div className="bag">
                     <div className="add-bag">
                      <i className="fa-solid fa-bag-shopping fa-xl"></i>
                      <button onclick="addcart()">Add to Bag</button>
                     </div>
                     <div className="wish">
                     </div>
                    </div>
                </div>
            </div>
            <div id="singlepage"></div>
          </div>
    </div>
  )
}

export default Singleproduct
