import React from 'react'
import './contact.css';
import Navbar from './Navbar';

export default function Contact() {
    return (
        <>
        <Navbar  />

        <div className="mt-5 pt-5" style={{border:'2px solid black',width:'50%',margin:'auto',padding:'20px'}}>
                <h3>Our Contact Information</h3>
                <div class="contact-info" >
                    <p><strong>Phone:</strong> +020-71173883</p>
                    <p><strong>Email:</strong> support@sevenmentor.com</p>
                    <p><strong>Address:</strong> Kunal Plaza Chinchwad ,Pune City, MH</p>
                </div>

                <h4>Follow Us</h4>
                <div class="d-flex">
                    <a href="https://www.facebook.com/sevenmentor/" class="btn btn-primary me-2">Facebook</a>
                    <a href="https://x.com/SevenMentor/" class="btn btn-info me-2">Twitter</a>
                    <a href="https://www.instagram.com/sevenmentor/?hl=en" class="btn btn-danger">Instagram</a>
                </div>
            </div>
     
 
            <div className="container my-5">
    <h3 className="text-center">Find Us</h3>
    <div className="row justify-content-center">
        <div className="col-md-10">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3407.207658801102!2d73.79105615711923!3d18.640046031386948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSevenmentor%20Kunal%20Plaza!5e0!3m2!1sen!2sin!4v1732359388578!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0, width: '100%' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
</div>

   

   
    <div class="footer">
        <p>&copy; 2024 BrandName. All Rights Reserved.</p>
    </div>
        </>
    )
}
