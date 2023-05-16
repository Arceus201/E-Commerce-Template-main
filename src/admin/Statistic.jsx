import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "./admincss/statistic.css";
// import "./admincss/custom-datepicker.css"
const initialFormValues = {
    fromDate: null,
    toDate: null,
};

const initialData = [{ id: 1, image: "https://via.placeholder.com/150", name: "Product 1", quantity: 5, price: 10, }, { id: 2, image: "https://via.placeholder.com/150", name: "Product 2", quantity: 10, price: 20, }, { id: 3, image: "https://via.placeholder.com/150", name: "Product 3", quantity: 15, price: 30, },];

const StatisticView = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [data, setData] = useState(initialData);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleDateChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleViewClick = () => {
        // Filter data based on date range
        const filteredData = initialData.filter((item) => {
            if (formValues.fromDate && formValues.toDate) {
                const fromDate = new Date(formValues.fromDate);
                const toDate = new Date(formValues.toDate);
                const itemDate = new Date(item.date);
                return itemDate >= fromDate && itemDate <= toDate;
            } else {
                return true;
            }
        });

        // Set filtered data to state
        setData(filteredData);
    };

    // Calculate total
    const total = data.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue.price * currentValue.quantity,
        0
    );

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '10px' }}>
                    <label htmlFor="fromDate">From Date</label>
                    <DatePicker
                        id="fromDate"
                        name="fromDate"
                        selected={formValues.fromDate}
                        onChange={(value) => handleDateChange("fromDate", value)}
                        dateFormat="dd/MM/yyyy"

                        isClearable
                    />
                </div>
                <div style={{ marginRight: '10px' }}>
                    <label htmlFor="toDate">To Date</label>
                    <DatePicker
                        id="toDate"
                        name="toDate"
                        selected={formValues.toDate}
                        onChange={(value) => handleDateChange("toDate", value)}
                        dateFormat="dd/MM/yyyy"

                        isClearable
                    />
                </div>
                <button style={{ padding: '5px 10px', fontSize: '16px' }} type="button" onClick={handleViewClick}>
                    View
                </button>
            </div>


            <table>
                <thead>
                    <tr>
                        <th>Id Product</th>
                        <th>Image</th>
                        <th>Name Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>
                                <img src={item.image} alt={item.name} />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity * item.price}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="5" className="text-end fw-bold">Total:</td>
                        <td>
                            {data.reduce((total, item) => total + item.quantity * item.price, 0)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default StatisticView
