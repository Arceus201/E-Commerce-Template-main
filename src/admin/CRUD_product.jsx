import React, { useState } from "react";
import "./admincss/admin.css";
import { Link } from "react-router-dom";

const CRUD_productView = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", category: "TV", image: "https://via.placeholder.com/100", quantity: 10, price: 100 },
        { id: 2, name: "Product 2", category: "TV", image: "https://via.placeholder.com/100", quantity: 20, price: 200 },
        { id: 3, name: "Product 3", category: "TV", image: "https://via.placeholder.com/100", quantity: 30, price: 300 }
    ]);
    const [formValues, setFormValues] = useState({
        id: "",
        name: "",
        category: "",
        image: "",
        quantity: "",
        price: ""
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
            category: formValues.category,
            image: formValues.image,
            quantity: formValues.quantity,
            price: formValues.price
        };
        setProducts([...products, newProduct]);
        setFormValues({
            id: "",
            name: "",
            category: "",
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
            category: "",
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
                // data-bs-toggle="modal"
                // data-bs-target="#productModal"
                >
                    Add New
                </button>
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>

                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.name} />
                            </td>

                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
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