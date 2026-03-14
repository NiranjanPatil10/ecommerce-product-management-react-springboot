import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './addproduct.css';

export default function AddProduct() {

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: { id: '' }
  });

  const [categories, setCategories] = useState([]);

  
  useEffect(() => {
    axios.get('http://localhost:8087/api/category/all')
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "category") {
      setProduct({
        ...product,
        category: { id: value }
      });
    } else {
      setProduct({
        ...product,
        [name]: name === "price" ? Number(value) : value
      });
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8087/api/products/add', product)
      .then((response) => {
        console.log("Product added:", response.data);

        alert("Product Added Successfully");

        setProduct({
          name: '',
          description: '',
          price: '',
          category: { id: '' }
        });

      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />

      <div className="myDiv mt-5 pt-5">
        <h2>Add Product</h2>

        <form onSubmit={handleSubmit}>

          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Description:</label>
            <input
              type="text"
              name="description"
              value={product.description}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Price:</label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>Category:</label>
            <select
              name="category"
              value={product.category.id}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>

              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}

            </select>
          </div>

          <button type="submit">Add Product</button>

        </form>

      </div>
    </>
  );
}