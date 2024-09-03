
import "./Banner.css"
const Banner = () => {
    return (
        <div className= "bannerContainer">
            <div className="banner">
           </div>

           <div className="mainContainer">

            <div>
                <h4 className="dayLeft">30 Days Left</h4>
                
                <p><span className="author">Author Mr. Kashem</span> <br /> Medical services update...</p>
              
            </div>

           <div className="container">
            <div>
            <h4 className="raised">$89k <br />Raised</h4>
            </div>
          <div className="circleContainer">
          <div>
          
           <p className="text"> <span className="circle">112</span>  Available Stock</p>
            </div>
            <div>
           
           <p> <span className="circle">$53</span>Stock Price</p>
            </div>
            <div>
           
           <p> <span className="circle">15</span>Stock Offer</p>
            </div>
          </div>
            

           </div>

           </div>

        </div>
    );
};

export default Banner;