
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import OrderForm from "../Form/OrderForm";

import "./HomePage.css"
const HomePage = () => {
    return (
        <div className="home-container">
            <div>
            <Navbar></Navbar>
            <Banner></Banner>
            </div>
            <OrderForm></OrderForm>
            
        </div>
    );
};

export default HomePage;