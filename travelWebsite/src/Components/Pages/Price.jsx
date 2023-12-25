import React, { Component } from "react";
import "../Styles/Price.css";

class Price extends Component {
  render() {
    return (
      <div id="price">
        <div className="price-container">
          <h1>Prices</h1>
          <div className="price-intro">
           <div className="price-intro1">
           At our core, we understand the value of your hard-earned money. That's why our primary goal isn't just to offer products or services at a lower cost; it's to ensure that you receive unparalleled value for every penny spent. We firmly believe that affordability shouldn't compromise the quality of service.
           </div>
           <div className="price-intro2">
            We promise to you is simple yet profound. We provide affordable prices without compromising on quality, and we deliver efficient services that prioritize your time and satisfaction. We invite you to experience this commitment firsthand and join us on a journey where cost-effectiveness meets exceptional service.


           </div>
          </div>
          <h3>Vehicles</h3>
          <div className="Vehicles">
            <div className="suv">
              <img
                src="https://imgd.aeplcdn.com/664x374/n/cw/ec/40432/scorpio-n-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80"
                alt=""
              ></img>
              <h3>Suv</h3>
              <p>From 200-2000</p>
            </div>
            <div className="jeep">
              <img
                src="https://imgd.aeplcdn.com/664x374/n/cw/ec/54437/wrangler-exterior-right-front-three-quarter-52.jpeg?isig=0&q=80"
                alt=""
              ></img>
              <h3>Jeep</h3>
              <p>From 150-2000</p>
            </div>
            <div className="cab">
              <img
                src="https://5.imimg.com/data5/SELLER/Default/2021/1/FR/ZB/RJ/61679842/tour-h1-png.png"
                alt=""
              ></img>
              <h3>Cab</h3>
              <p>From 100-1000</p>
            </div>
            <div className="bike">
              <img
                src="https://classifiedsonline.com.np/public/images/listings/20210910-1631266539-282-1-auto.jpg"
                alt=""
              ></img>
              <h3>Bike</h3>
              <p>From 50-500</p>
            </div>
          </div>
          <h3>Hotels</h3>
          <div className="hotel">
            <div className="luxary">
            <img src="https://english.onlinekhabar.com/wp-content/uploads/2017/09/hyatt-regency-kathmandu.jpeg" alt=""></img>
            <h3>Luxary</h3>
              <p>From 2000-2500</p>
            </div>
            <div className="motel">
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/97/e2/ae/hotel-exterior.jpg?w=1200&h=-1&s=1" alt=""></img>
              <h3>Motel</h3>
              <p>From 1500-2500</p>
            </div>
            <div className="resort">
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/2b/ef/24/bar-peepal-resort.jpg?w=1200&h=-1&s=1" alt=""></img>
              <h3>Resort</h3>
              <p>From 1200-2000</p>
            </div>
            <div className="suits">
              <img src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/c5/99/d2bb5b5bc3575b5a4bd577f8b01dae2335f4808a5ce77c89d4103d2a6dc8.jpeg" alt=""></img>
              <h3>Suits</h3>
              <p>From 1000-2000</p>
            </div>
            <div className="inns">
              <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/202276174.jpg?k=949646b93ead0c2df6bd6f5aba6a99b33d2de513ee9c0a1397803c1010926b73&o="alt=""></img>
              <h3>Inns</h3>
              <p>From 1000-1800</p>
            </div>
            <div className="homestay">
              <img src="https://nepalihotels.com/wp-content/uploads/2017/11/homestay-nepal.jpg" alt=""></img>
              <h3>Home Stay</h3>
              <p>From 600-1500</p>
            </div>
            <div className="budgethotel">
              <img src="https://fairdinkumtraveller.com/wp-content/uploads/2019/03/1.png" alt=""></img>
              <h3>Budget hotel</h3>
              <p>From 500-1000</p>
            </div>
          </div>
          <h3>Events</h3>
          <div className="event">
            <div className="bunji">
              <img src="https://www.thelastresort.com.np/wp-content/uploads/2019/11/Bungy-jump.jpg" alt=""></img>
              <h3>Bunji</h3>
              <p>From 70-600</p>
            </div>
            <div className="safari">
              <img src="https://www.greatnepaltreks.com/wp-content/uploads/2019/11/Chitwan-Jungle-Safari-Package.jpg" alt=""></img>
              <h3>Safari</h3>
              <p>From 110-900</p>
            </div>
            <div className="swing">
              <img src="https://www.vivaanadventure.com/wp-content/uploads/2020/03/Bungee-Jump-Kushma-.jpg" alt=""></img>
              <h3>Swing</h3>
              <p>From 100-600</p>
            </div>
            <div className="trek"> 
            <img src="https://www.sevensummittreks.com/uploads/original/1653287230_ebc-c5hp0XiZDKvr6pLMNSUCPm0ibYD9kQnZDoIR3DU8.jpg" alt=""></img>
            <h3>Trek</h3>
              <p>From 1000-2500</p>
              </div>
              <div className="rafting">
                <img src="https://www.alpineadventureclub.com/assets/images/tours/rafting-nepal.jpg" alt=""></img>
                <h3>Rafting</h3>
              <p>From 600-800</p>
              </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Price;
