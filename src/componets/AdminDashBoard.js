import React from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import AdminProductList from './AdminProductList';
import './dashboard.css';
export default function AdminDashBoard() {
    return (
        <div className="flex">
          <Navbar />
          <Sidebar />
          <div className=" content flex-1 p-6">
            <h1 className="text-3xl font-bold mb-4">Product Management</h1>
            <AdminProductList />
          </div>
        </div>
      );
}
