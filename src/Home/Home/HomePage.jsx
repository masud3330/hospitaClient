
import Banner from "../Banner/Banner";

import OrderForm from "../Form/OrderForm";

import "./HomePage.css"
const HomePage = () => {
    return (
        <div>
            <div className="header"></div>
            <div className="home-container">
            
            <div>
           
            <Banner></Banner>
            </div>
            <OrderForm></OrderForm>
            
        </div>
        </div>
    );
};

export default HomePage;