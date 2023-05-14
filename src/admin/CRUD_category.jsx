import { useState } from 'react';
import "./admincss/crud_category.css";
const CRUD_categoryView = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() !== '') {
            setCategories([...categories, { id: categories.length + 1, name }]);
            setName('');
        }
    };

    const handleDelete = (id) => {
        const filteredCategories = categories.filter((category) => category.id !== id);
        setCategories(filteredCategories);
    };

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleUpdate = () => {
        const updatedCategories = categories.map((category) =>
            category.id === selectedCategory.id ? { ...category, name } : category
        );
        setCategories(updatedCategories);
        setSelectedCategory(null);
        setName('');
    };

    const handleEdit = (category) => {
        setSelectedCategory(category);
        setName(category.name);
    };

    return (
        <div className='formcategory'>
            <h4>CRUD Category </h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">

                    <div className="input-group">
                        <input
                            type="text"
                            className="category-input"
                            id="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <button className="btn btn-primary" type="submit">
                            Add
                        </button>
                    </div>
                </div>
            </form>

            <table className="table-custom table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>
                                <button className="btn btn-warning" onClick={() => handleEdit(category)}>
                                    Edit
                                </button>
                                <button className="btn btn-danger" onClick={() => handleDelete(category.id)}>
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

export default CRUD_categoryView;

