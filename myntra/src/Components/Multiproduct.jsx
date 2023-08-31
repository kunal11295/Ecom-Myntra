import React from 'react'

function Multiproduct() {
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
              <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
               <input type="search" placeholder="Search for Product"/>
            </div>
            <div>
              <div id="Switch">
                <i class="fa-regular fa-user"></i>
                <p>Profile</p>
              </div>
              <div>
                <i class="fa-regular fa-heart"></i>
                <p>wishlist</p>
              </div>
              <div>
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Bags</p>
              </div>
              <div id="logout">
                <button>Logout</button>
              </div>
            </div>
          </div>
        <div id="home">   
        <p>Home</p>/<p>Clothing</p>/<p><b>Men Tshirts</b></p>
        </div>
        <div id="tshrits">
            <span><b>Men T-shrits</b> - 79860 items</span>
        </div>
        <div id="items">
            <div><b>Filter</b></div>
            <div>Bundles</div>
            <div>Country of origin</div>
            <div>Size</div>
    
        </div>
        <div id="filter">
            <div id="shrits">
                <div id="cat">
                    
                    <h3>CATEGORIES</h3>
                    <form/>
                    <input type="checkbox" id="ts"/>
                    <label for="ts">T-shrits</label><br/>
                    <input type="checkbox" id="ls"/>
                    <label for="ls">Lounge Tshirts</label><br/>
                    <form/>
                </div>
                <hr/>
                <div id="brand">
                    <h3>BRAND</h3>
                    <form/>
                    <input type="checkbox" id="roadster"/>
                    <label for="roadster">Roadster (3809)</label><br/>
                    <input type="checkbox" id="us"/>
                    <label for="us">U.S Polo Assn.(157)</label><br/>
                    <input type="checkbox" id="th"/>
                    <label for="th">Tommy Hilfiger(1427)</label><br/>
                    <input type="checkbox" id="hrx"/>
                    <label for="hrx">HRX by Hrithik Roshan(1395)</label><br/>
                    <input type="checkbox" id="max"/>
                    <label for="max">max(1317)</label><br/>
                    <input type="checkbox" id="jj"/>
                    <label for="jj">Jack & Jones(1288)</label><br/>
                    <input type="checkbox" id="wrong"/>
                    <label for="wrong">WROGN(1234)</label><br/>
                    <input type="checkbox" id="puma"/>
                    <label for="puma">Puma(1178)</label>
                    <form/>
                  
                </div>
                <hr/>
                <div id="price">
                    <h3>PRICE</h3>
                    <form/>
                    <input type="checkbox" id="low"/>
                    <label for="low">Rs. 149 to Rs. 3812(79711)</label><br/>
                    <input type="checkbox" id="avg"/>
                    <label for="avg">Rs. 3812 to Rs. 7475(672)</label><br/>
                    <input type="checkbox" id="medium"/>
                    <label for="medium">Rs. 7475 to Rs. 11138(40)</label><br/>
                    <input type="checkbox" id="high"/>
                    <label for="high">Rs. 11138 to Rs. 14801(1)</label><br/>
                    <form/>
           
                </div>
                <hr/>
                <div id="Color">
                    <h3>COLOR</h3>
                    <form/>
                        <input type="checkbox" id="black"/>
                        <span class="dot" style="background-color: black;"></span>
                        <label for="black">Black</label><br/>
                        <input type="checkbox"/>
                        <span class="dot" style="background-color: blue;"></span>
                        <label>Blue</label><br/>
                        <input type="checkbox"/>
                        <span class="dot" style="background-color: white"></span>
                        <label>White</label><br/>
                        <input type="checkbox"/>
                        <span class="dot" style="background-color: blueviolet"></span>
                        <label>Blueviolet</label><br/>
                        <input type="checkbox"/>
                        <span class="dot" style="background-color: green;"></span>
                        <label>Green</label><br/>
                        <input type="checkbox"/>
                        <span class="dot" style="background-color: red;"></span>
                        <label>Red</label><br/>
                        <input type="checkbox"/>
                        <span class="dot" style="background-color: grey;"></span>
                        <label>Grey</label><br/>
                        <p style="color: red; font-size: 11px; margin-left: 20px;">+39 more</p>
                       
                    <form/>
                </div>
                <hr style="margin-top: 10px;"/>
                <div id="dis">
                    <h3>Discount Range</h3>
                    <form/>
                    <input type="radio"/>
                    <label>10% and above</label><br/>
                    <input type="radio"/>
                    <label>20% and above</label><br/>
                    <input type="radio"/>
                    <label>30% and above</label><br/>
                    <input type="radio"/>
                    <label>40% and above</label><br/>
                    <input type="radio"/>
                    <label>50% and above</label><br/>
                    <input type="radio"/>
                    <label>60% and above</label><br/>
                    <input type="radio"/>
                    <label>70% and above</label><br/>
                    <form/>
                </div>
                <hr/>
            </div>
            <div id="tshirts"></div>
             <div id="men">
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700871/2020/1/22/f932ae44-0fb8-4b92-b7bc-f1756253294b1579692118186-HRX-by-Hrithik-Roshan-Men-Teal-Blue-Printed-T-shirt-90515796-1.jpg"/>
                    <h3>HRX by Hrithik Roshan</h3>
                    <p>printed pure cotton Tshirts</p>
                    <p>Rs.279</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg"/>
                    <h3>Huetrap</h3>
                    <p> TYpography printed Tshirts</p>
                    <p>Rs.296</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1996777/2022/11/22/336445a8-fa32-4396-914a-2629b49465d31669112704759RoadsterMenBlackCottonPureCottonT-shirt1.jpg"/>
                    <h3>Roadster</h3>
                    <p>Men Cotton Pure Cotton Tshirts</p>
                    <p>Rs.274</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8923841/2019/6/3/736b9f2c-3a49-41a9-828c-1e0218b62e431559550212164-Minions-by-Kook-N-Keech-Men-Purple-Printed-Round-Neck-T-shir-1.jpg"/>
                    <h3>Minions by Kock and Keech</h3>
                    <p>Printed Round Neck Pure Cotton</p>
                    <p>Rs.549</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1700944/2019/6/8/488007ef-c65e-4a2f-a92b-65b6846894861559989274078-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shirt--1.jpg"/>
                     <h3>HRX by Hrithik Roshan</h3>
                    <p>printed pure cotton Tshirts</p>
                    <p>Rs.279</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/22124130/2023/2/25/ffe3433f-3535-4df8-aaca-051c1e1cae901677317824534TechnosportMenTealHighNeckAntimicrobialAppliqueTrainingorGym1.jpg"/>
                    <h3>Technosport</h3>
                    <p>Antimicrobial Tshirts</p>
                    <p>Rs.419</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16407468/2021/12/28/fce7ca1e-01ec-4c12-a90f-c7b75abda0e01640669480687-Difference-of-Opinion-Men-Tshirts-4021640669480120-1.jpg"/>
                    <h3>Difference of opinion</h3>
                    <p>Men Solid oversize cotton</p>
                    <p>Rs.532</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1824340/2017/8/3/11501764560457-Roadster-Men-Grey-Melange-Solid-Round-Neck-T-shirt-3291501764560241-1.jpg"/>
                    <h3>Roadster</h3>
                    <p>Longline TShirts with Raw Edge</p>
                    <p>Rs.351</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10565566/2020/2/4/98edd42d-583b-44ff-9d90-4e67e5a3522f1580809674758-HRX-by-Hrithik-Roshan-Men-Black-Solid-Running-T-shirt-163158-1.jpg"/>
                    <h3>Roadster</h3>
                    <p>Longline TShirts with Raw Edge</p>
                    <p>Rs.351</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18762052/2022/7/6/a334b56e-07a2-4af5-b351-33dff73d919f1657078729492-Louis-Philippe-Sport-Men-Tshirts-2151657078728961-1.jpg"/>
                    <h3>Difference of opinion</h3>
                    <p>Men Solid oversize cotton</p>
                    <p>Rs.532</p>
                </div>
                <div>
                     <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/10/3/09814e9d-8388-4857-8f41-a03c9d9698701570086314065-1.jpg"/>
                    <h3>Technosport</h3>
                    <p>Antimicrobial Tshirts</p>
                    <p>Rs.419</p>
                </div>
                <div>
                     <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16996688/2023/3/13/9855c486-4231-4852-9289-85fe5405b2fd1678691791557-Roadster-Men-Green--White-Striped-Polo-Collar-Pure-Cotton-T--1.jpg"/>
                    <h3>HRX by Hrithik Roshan</h3>
                    <p>printed pure cotton Tshirts</p>
                    <p>Rs.279</p>
                </div>
                <div>
                     <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10106341/2019/9/5/e5bd4bb5-b746-44b1-92fd-1b20906c60031567656798859-HRX-by-Hrithik-Roshan-Men-Tshirts-5601567656797772-1.jpg"/>
                    <h3>Minions by Kock and Keech</h3>
                    <p>Printed Round Neck Pure Cotton</p>
                    <p>Rs.549</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/21474618/2023/2/6/3fc0ad84-eb64-49db-8810-8b0085bc3d9f1675661229788-Louis-Philippe-Sport-Men-Tshirts-2481675661229099-1.jpg"/>
                     <h3>Roadster</h3>
                    <p>Men Cotton Pure Cotton Tshirts</p>
                    <p>Rs.274</p>
                </div>
                <div>
                     <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14047672/2021/5/17/c1fd89a5-6364-4d0b-bde4-fcc0b7ddd1571621252467672-Louis-Philippe-Men-Navy-Blue-Solid-Polo-Collar-T-shirt-71816-1.jpg"/>
                    <h3>Huetrap</h3>
                    <p> TYpography printed Tshirts</p>
                    <p>Rs.296</p>
                </div>
                <div>
                     <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2275365/2022/11/22/a3af8a2f-a385-4cb7-bf7b-e34e0925fe0d1669105782439-Roadster-Men-White--Pure-Cotton-T-shirt-7301669105781913-1.jpg"/>
                    <h3>HRX by Hrithik Roshan</h3>
                    <p>printed pure cotton Tshirts</p>
                    <p>Rs.279</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7231694/2022/4/18/e798f0d4-2edc-467c-975e-b43241c975bd1650284898252HRXbyHrithikRoshanMenFluorescentGreenRunningT-shirtWithRagla1.jpg"/>
                    <h3>HRX by Hrithik Roshan</h3>
                    <p>printed pure cotton Tshirts</p>
                    <p>Rs.279</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/20355854/2022/10/21/a4193b5b-ff1e-4461-adb4-dcf05bf7b5e61666345317570-DILLINGER-Men-Tshirts-6131666345317060-1.jpg"/>
                    <h3>Huetrap</h3>
                    <p> TYpography printed Tshirts</p>
                    <p>Rs.296</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12120718/2020/11/26/791313ec-caf6-43a3-810e-72903930e6fa1606378250746-Roadster-Men-Tshirts-3621606378248461-1.jpg"/>
                    <h3>Roadster</h3>
                    <p>Men Cotton Pure Cotton Tshirts</p>
                    <p>Rs.274</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9376057/2019/6/12/40949524-1f0b-48f5-a68a-cee0661b30d81560344436422-HERENOW-Men-Tshirts-9361560344434861-1.jpg"/>
                    <h3>Minions by Kock and Keech</h3>
                    <p>Printed Round Neck Pure Cotton</p>
                    <p>Rs.549</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11487324/2020/6/17/8de1ef31-028f-436e-9872-58f48a7b3e591592395686927-Nautica-Men-Tshirts-801592395684741-1.jpg"/>
                    <h3>HRX by Hrithik Roshan</h3>
                    <p>printed pure cotton Tshirts</p>
                    <p>Rs.279</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2314400/2022/2/28/94412956-cdc5-46e6-ae24-ddf43753bb861646042819162-HRX-by-Hrithik-Roshan-Men-Navy-Advanced-Rapid-Dry-T-shirt-42-1.jpg"/>                    <h3>Technosport</h3>
                    <p>Antimicrobial Tshirts</p>
                    <p>Rs.419</p></div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16130416/2023/2/27/25a9941c-5a5c-40f3-b5bb-15c857f49c0c1677490891817-Indian-Terrain-Men-Tshirts-6061677490891237-1.jpg"/>
                    <h3>Difference of opinion</h3>
                    <p>Men Solid oversize cotton</p>
                    <p>Rs.532</p>
                </div>
                <div>
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13622286/2021/2/18/f58cb66f-5e6e-48a5-8395-c695410628811613644559259-Roadster-Men-Green-Colourblocked-Round-Neck-T-shirt-18316136-1.jpg"/>
                    <h3>Roadster</h3>
                    <p>Men Cotton Pure Cotton Tshirts</p>
                    <p>Rs.274</p>
                </div>
            </div> 
            </div>
            <div id="end">
                    <div id="online">
                    <div>
                        <h4>Online Shopping</h4>
                        <p>Men</p>
                        <p>Women</p>
                        <p>Kids</p>
                        <p>Home&living</p>
                        <p>Beauty</p>
                        <p>Gift card</p>
                        <p>Myntra Inside</p>
                    </div>
                    <div id="Links">
                        <h4>Useful Links</h4>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Sites map</p>
                        <p>Corporate information</p>
                        <p>Whitehat</p>
                    </div>    
                    </div>
                    <div id="policy">
                        <h4>Customer policies</h4>
                        <p>Contact Us</p>
                        <p>FAQ</p>
                        <p>T&C</p>
                        <p>Terms of Use</p>
                        <p>Track order</p>
                        <p>Shipping</p>
                        <p>Cancellation</p>
                        <p>Return</p>
                    </div>
                    <div id="pp">
                        <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>
                        <div id="kk">
                            <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"/>
                            <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"/>
                        </div>
                        <div id="touch">
                            <h4>KEEP IN TOUCH</h4>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                    <div id="image">
                        <div id="og">
                            <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"/>
                            <p>100% ORIGINAL gurantee for all products at Myntra.com</p>
                        </div>
                        <div id="return">
                            <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"/>
                            <p>Return within 30 days</p>
                        </div>
                    </div>   
            </div> 
            </div>
    </div>
  )
}

export default Multiproduct
