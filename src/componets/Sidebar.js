import React from 'react'
import { Link } from 'react-router-dom';
import './sidebar.css'
export default function Sidebar() {

    return (
        <div className="sidebar">
        <h2 className="text-center text-white mt-5">Dashboard</h2>
      
    
        <Link to="/addproduct">Add Product</Link>
        </div>  
        );
}
