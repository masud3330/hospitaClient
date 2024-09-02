
import "./OrderForm.css"
const OrderForm = () => {
    return (
        <div>
            <div className="form-container">
                
                <div>
                <label htmlFor="">Select quqntity</label> <br />
                <input type="number"  placeholder="Select quqntity"/>

                </div>
                
                <textarea className="text-area" name="text here" id=""></textarea>
            </div>
            <button className="button">INVEST</button>
        </div>
    );
};

export default OrderForm;