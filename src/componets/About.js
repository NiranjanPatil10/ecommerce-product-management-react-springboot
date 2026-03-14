import React from 'react'
import Navbar from './Navbar';

export default function About() {
    return (
        <>
            <Navbar />
            <div className="about-section text-center" style={{ backgroundColor: '#f8f9fa', padding: '50px 20px' }}>
                <h1 className="display-4">About Us</h1>
                <p className="lead">We are passionate about providing high-quality products and services to our customers.</p>
            </div>

            <div className="container my-5">
                <h2 className="text-center mb-4">Our Mission</h2>
                <p className="text-center">Our mission is to create products that improve the lives of our customers.
                     We focus on innovation, quality, and customer satisfaction in everything we do.</p>
            </div>

            <div className="container my-5" style={{ backgroundColor: '#e9ecef', padding: '30px', borderRadius: '8px' }}>
                <h2 className="text-center mb-4">Our Story</h2>
                <p className="text-center">Founded in 2020, BrandName started as a small startup with a big vision. Over the 
                    years, we have grown into a recognized name in the industry, delivering products that stand out for their 
                    quality and reliability.</p>
            </div>

            <div className="container my-5">
                <h2 className="text-center mb-4">Meet the Team</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/team1.jpg" className="card-img-top" alt="Team Member 1" />
                            <div className="card-body">
                                <h5 className="card-title">John Doe</h5>
                                <p className="card-text">Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/team2.jpg" className="card-img-top" alt="Team Member 2" />
                            <div className="card-body">
                                <h5 className="card-title">Jane Smith</h5>
                                <p className="card-text">Chief Marketing Officer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src="/team3.jpg" className="card-img-top" alt="Team Member 3" />
                            <div className="card-body">
                                <h5 className="card-title">Emily Johnson</h5>
                                <p className="card-text">Product Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="text-center bg-secondary text-white py-3">
                <p>&copy; 2024 BrandName. All Rights Reserved.</p>
            </footer>
        </>
    );

}
