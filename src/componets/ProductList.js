import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

export default function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8087/api/products/getAll')
      .then((response) => {
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching products', error));
  }, []);

  return (
    <>
      <Navbar />

      <div className="container mt-5 pt-5">
        <div className="row">

          {products.map(product => (

            <div key={product.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">

              <div className="card shadow-sm border-light rounded">

                <div className="card-body">

                  <h5 className="card-title">{product.name}</h5>

                  <p className="card-text">
                    {product.description}
                  </p>

                  <p className="card-text">
                    <strong>Price:</strong> ₹{product.price}
                  </p>

                  <p className="card-text">
                    <strong>Category:</strong> {product.category?.name}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>
      </div>

    </>
  );
}