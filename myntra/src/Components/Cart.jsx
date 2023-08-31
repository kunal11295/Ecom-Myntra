import React from 'react'

function Cart() {
  return (
    <div>
      <div id="main">
        <div id="navbar">
            <div>
                <img src="images_1_-removebg-preview.png"/>
            </div>
            <div>
                <ul>
                    <li>BAGS</li>
                    <li>------</li>
                    <li>ADDRESS</li>
                    <li>------</li>
                    <li>PAYMENT </li>
                </ul>
            </div>
            <div>
                <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"/>
                <p>100%</p>
                <p>SECURE</p>
            </div>
        </div>
        <div id="cart">
            <div id="item">
                <div>
                    <h4>check delivery item & services</h4>
                    <h6>ENTER PIN CODE</h6>
                </div>
                <div>
                    <h4>Avaliable Offers</h4>
                      <p>Get up to Rs 500 Cashbac k on CRED pay UPI(Android Devices Only) on a Minimum spend of RS 1000. TCA</p> 
                    <span>Show More</span>    
                </div>
                <div>
                    <img src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp"/>
                    <p>Yay! No convenience fee on this order</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span>1/1 ITEMS SELECTED</span>
                    <p>Remove</p>
                    <p>Watchlist</p>
                </div>
                <div>
                    <div>
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12288656/2020/10/28/80f4443e-dc4e-47ef-999e-b6a613b1e9921603861869160-Roadster-Men-Jackets-3811603861867068-1.jpg"/>
                    </div>
                    <div>
                        <h4>Roadster</h4>
                        <p>Men Blue Washed Denim Jacket</p>
                        <p>Sold by:Truenet Commerce</p>
                        <select>
                            <option>Size:M</option>
                        </select>
                        <select>
                            <option>Qty:1</option>
                        </select>
                        <p>1609 30% OFF</p>
                        <i className="fa-solid fa-arrow-rotate-left"></i>
                        <span>14 days return avaliable</span>

                    </div>
                </div>
                <div>
                    <div>
                        <i className="fa-regular fa-bookmark"></i>
                    </div>
                    <div>
                        <p>Add More From Wish</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-greater-than"></i>
                    </div>

                </div>
            </div>
            <div id="order">
                <div id="kk">
                <div id="offer">
                    <div>
                        <p>OFFERS & COUPONS</p>
                    </div>
                </div>
                    
                    <div id="image">
                        <div>
                            <img src="https://constant.myntassets.com/checkout/assets/img/additional-offer.webp"/>
                     
                        </div>
                        <div>
                            <p>1 offer on your Bags</p>
                        </div> 
                    </div>
                    <div id="kb">
                        <div>
                            <p>Apply Coupons</p>
                        </div>
                        <span>Apply</span>
                    </div>
                    </div>

                <div id=" total">
                <div id="gift">
                    <h5>GIFTING & PERSONALIZATION</h5>
                </div>
                    <div id="buy">
                        <div>
                        <img src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"/>
                        </div>
                        <div>
                            <h5>Buying For Loved One</h5>
                            <p>gift wrap and personalised message on card</p>
                            <p>Only for Rs 25</p>
                            <h6>ADD GIFT WRAP</h6>
                        </div>
                    </div>
                </div>
                <div id="price">
                    <h5>Price Detail (1)Item </h5>
                    <div id ="total">
                    <div id="left">
                        <div>
                            <p>Total Mrp</p>
                        </div>
                        <div>
                            <p>Discount on MRP</p>
                        </div>
                        <div>
                            <p>Coupon Discount</p>
                        </div>
                        <div>
                            <p>Convenience Fee</p>
                        </div>
                       
                    </div>
                    <div id="Right">
                        <div>
                            <p>2299</p>
                        </div>
                        <div>
                            <p>-1150</p>
                        </div>
                        <div>
                            <p>Apply Coupon</p>
                        </div>
                        <div>
                            <p>Free</p>
                        </div>
                </div>

            </div>
                </div>
                <div>
                    <div>
                        <p>Total Amount</p>
                        <p>1149</p>
                    </div>
                   
                    <div>
                        <button>Place the order</button>
                    </div>
                    
                    

                </div>
            </div>
        </div> 
    </div>

    </div>
  )
}

export default Cart
