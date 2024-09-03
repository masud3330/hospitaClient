
import "./OrderForm.css"
const OrderForm = () => {
    return (
        <div>
            <div className="form-container">
                
                <div>
                <label htmlFor="">Select Stock you want</label> <br />
                <input className="quantity" type="number"  placeholder="Select quqntity"/>

                </div>
                
                <textarea className="text-area" name="text here" id=""></textarea>
            </div>
            <button className="button">INVEST</button>
        </div>
    );
};

export default OrderForm;