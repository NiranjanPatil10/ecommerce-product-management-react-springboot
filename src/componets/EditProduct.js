import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditProduct() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: { id: '' }
  });

  const [categories, setCategories] = useState([]);

  // Load categories
  useEffect(() => {
    axios.get('http://localhost:8087/api/category/all')
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

  // Load product by id
  useEffect(() => {
    axios.get(`http://localhost:8087/api/products/get/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  // Handle change
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

  // Submit update
  const handleSubmit = (e) => {

    e.preventDefault();

    axios.put(`http://localhost:8087/api/products/update/${id}`, product)
      .then(() => {

        alert("Product Updated Successfully");

        navigate('/admin-dashboard');

      })
      .catch((error) => {
        console.log(error);
      });

  };

  return (
    <div>

      <Navbar />

      <div className="myDiv mt-5 pt-5">

        <h2>Edit Product</h2>

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
              value={product.category?.id || ""}
              onChange={handleChange}
              required
            >

              <option value="">Select Category</option>

              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}

            </select>

          </div>

          <button type="submit">Update Product</button>

        </form>

      </div>

    </div>
  );
}