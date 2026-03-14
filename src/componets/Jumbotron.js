import React from 'react'

export default function Jumbotron() {
    return (
        <div className="jumbotron text-center" style={{ backgroundColor: '#fbffc4', color: '#212529' }}>
        <img src="/shoppingimage.jpg" alt="Jumbotron Image" className="img-fluid mb-2" style={{ maxHeight: '100px' }} />
        <h1 className="display-4">Welcome to Our Products Page!</h1>
        <p className="lead">Explore our amazing range of products designed just for you.</p>
        <hr className="my-4" />
        <p>Check out the latest additions to our collection below.</p>
    </div>
      );
}
