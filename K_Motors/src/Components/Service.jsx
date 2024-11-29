import React, { useState } from 'react';
import '../css/Service.css';

function Service() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [countryCode, setCountryCode] = useState('+90');
    const handleSubmit = (e) => {
        e.preventDefault();
        const userDetails = {
            name,
            email,
            phone: `${countryCode} ${phone}`,
            service,
        };

        const storedServices = JSON.parse(localStorage.getItem('services')) || [];
        storedServices.push(userDetails);
        localStorage.setItem('services', JSON.stringify(storedServices));

        alert('Hizmet talebiniz başarıyla gönderildi!');
        setName('');
        setEmail('');
        setPhone('');
        setService('');
        setCountryCode('+1');
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if (/^[0-9]*$/.test(value) && value.length <= 10) {
            setPhone(value);
        }
    };

    return (
        <div className="service-container">
            <h1 className="service-header">Service Request</h1>
            <img className="service-image" src="/media/service.jpg" alt="Service" />
            <form className="service-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number:</label>
                    <div className="phone-input-group">
                        <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                        >
                            <option value="+1">+1 (USA)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+49">+49 (Germany)</option>
                            <option value="+33">+33 (France)</option>
                            <option value="+90">+90 (Turkey)</option>
                        </select>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            pattern="[0-9]{10}"
                            placeholder="Phone number"
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="service">Enter your vehicle model and the service you request:</label>
                    <textarea
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                        rows="4"
                    />
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
}

export default Service;
