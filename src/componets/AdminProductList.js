import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8087/api/products/getAll')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products', error));
  }, []);

  const handleDelete = (id) => {

    if (window.confirm("Are you sure you want to delete this product?")) {

      axios.delete(`http://localhost:8087/api/products/delete/${id}`)
        .then(() => {
          setProducts(products.filter(product => product.id !== id));
        })
        .catch(error => console.error('Error deleting product:', error));

    }
  };

  return (
    <div className="container mt-4">

      <table className="table table-striped table-bordered">

        <thead className="table-dark">
          <tr>
            <th>Product Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {products.map(product => (

            <tr key={product.id}>

              <td>{product.id}</td>

              <td>{product.name}</td>

              <td>₹{product.price}</td>

              <td>{product.category?.name}</td>

              <td>

                <Link
                  to={`/edit/${product.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(product.id)}
                  className="btn btn-danger btn-sm"
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
}