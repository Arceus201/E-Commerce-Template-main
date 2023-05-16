import React, { useState, useEffect } from "react";
import "./admincss/admin.css";
import { Link } from "react-router-dom";
import axios from "axios";
import numeral from 'numeral';
import Search from "../components/Search";

const CRUD_productView = () => {
    const [products, setProducts] = useState([]);
    const [formValues, setFormValues] = useState({
        id: "",
        name: "",
        // category: "",
        image: "",
        quantity: "",
        price: ""
    });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("http://localhost:8080/api/products/all");
            setProducts(result.data);
        };
        fetchData();
    });


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            id: Date.now(),
            name: formValues.name,
            // category: formValues.category,
            image: formValues.image,
            quantity: formValues.quantity,
            price: formValues.price
        };
        setProducts([...products, newProduct]);
        setFormValues({
            id: "",
            name: "",
            // category: "",
            image: "",
            quantity: "",
            price: ""
        });
    };

    const handleDeleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const handleUpdateProduct = (id) => {
        const updatedProducts = products.map((product) =>
            product.id === id ? { ...product, ...formValues } : product
        );
        setProducts(updatedProducts);
        setFormValues({
            id: "",
            name: "",
            // category: "",
            image: "",
            quantity: "",
            price: ""
        });
    };

    const handleEditProduct = (product) => {
        setFormValues({ ...product });
    };

    return (
        <div className="container">
            <h1>Product List</h1>
            <Link to={'/admin/cu-product'}>
                <button
                    type="button"
                    className="btn btn-primary mb-3"
                >
                    Add New
                </button>
            </Link>
            <div style={{ justifyContent: "center", width: "80%" }} >
                <Search></Search>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>

                        <th>Name</th>
                        {/* <th>Category</th> */}
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.name} style={{ width: '200px', height: '150px' }} />
                            </td>

                            <td>{product.name}</td>
                            {/* <td>{product.category_id}</td> */}
                            <td>{product.quantity}</td>
                            <td>{numeral(product.price).format('0,0')}</td>
                            <td>
                                <Link to={'/admin/cu-product'}>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        // data-bs-toggle="modal"
                                        // data-bs-target="#productModal"
                                        onClick={() => handleEditProduct(product)}
                                    >
                                        Edit
                                    </button>{" "}
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteProduct(product.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
export default CRUD_productView;