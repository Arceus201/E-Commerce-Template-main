import React, { useState } from "react";
import "./admincss/cu_product.css";
import { Link } from "react-router-dom";

const categories = ["Category 1", "Category 2", "Category 3"];

const CU_productView = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [category, setCategory] = useState(categories[0]);
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Handle form submission
        console.log("Submitted");
    };

    const handleCancel = () => {
        // TODO: Handle cancel button click
        console.log("Cancelled");
    };

    return (
        <div className="container">

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    {image ? (
                        <img src={image} alt="Product" className="img-fluid mt-3" />
                    ) : (
                        <img
                            src="https://via.placeholder.com/300x200"
                            alt="Default"
                            className="img-fluid mt-3"
                        />
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                        className="form-control"
                        id="category"
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        {categories.map((category) => (
                            <option key={category}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        value={price}
                        onChange={handlePriceChange}
                    />
                </div>
                <div className="form-group">
                    <Link to={'/admin/crud-product'}>
                        <button type="submit" className="submit-button">
                            Update
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
};
export default CU_productView;
