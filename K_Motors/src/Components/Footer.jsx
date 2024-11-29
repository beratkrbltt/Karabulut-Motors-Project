import React, { useRef } from 'react';
import '../css/Footer.css';

function Footer() {
    const phoneInputRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneNumber = phoneInputRef.current.value;
        localStorage.setItem('phoneNumber', phoneNumber);
        alert('Number saved successfully!');
        phoneInputRef.current.value = '';
    };
    return (
        <footer>
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Contact</h3>
                    <p>Email: example@example.com</p>
                    <p>Phone: +90 123 456 7890</p>
                </div>
                <div className="social-media">
                    <h3>Social Media</h3>
                    <ol>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                    </ol>
                </div>
                <div className="subscribe">
                    <h3>Request a Call</h3>
                    <form className='form' onSubmit={handleSubmit}>
                        <input
                            type="tel"
                            placeholder="Please Enter Your Number:"
                            ref={phoneInputRef}
                            required
                        />
                        <button className='add' type="submit">Send</button>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
