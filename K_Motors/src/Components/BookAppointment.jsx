import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams, useLocation } from 'react-router-dom';
import '../css/Appointment.css';

const BookAppointment = () => {
    const { id } = useParams();
    const location = useLocation();
    const { title, image } = location.state || {};
    const [selectedDate, setSelectedDate] = useState(null);
    const [timeSlots, setTimeSlots] = useState([
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    ]);
    const [bookedSlots, setBookedSlots] = useState([]);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+90'); // Varsayılan ülke kodu

    // LocalStorage'dan rezervasyonları yükleme
    useEffect(() => {
        const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || {};
        setBookedSlots(storedAppointments[id] || []);
    }, [id]);

    // Telefon numarası doğrulama
    const handlePhoneChange = (e) => {
        const input = e.target.value;
        const cleanedInput = input.replace(/[^0-9]/g, ''); // Sadece rakamları al
        if (cleanedInput.length <= 11) {
            setPhoneNumber(cleanedInput);
        }
    };

    const handleAppointment = (time) => {
        if (!selectedDate) {
            alert("Lütfen önce bir tarih seçin!");
            return;
        }

        if (!name || !phoneNumber) {
            alert("Lütfen adınızı ve telefon numaranızı girin!");
            return;
        }

        const formattedDate = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD formatı
        const newAppointment = `${formattedDate} ${time}`;

        if (bookedSlots.includes(newAppointment)) {
            alert("Bu saat zaten dolu!");
            return;
        }

        // Randevuyu kaydetme
        const updatedSlots = [...bookedSlots, newAppointment];
        setBookedSlots(updatedSlots);

        // LocalStorage'da randevuları kaydetme
        const storedAppointments = JSON.parse(localStorage.getItem('appointments')) || {};
        storedAppointments[id] = {
            slots: updatedSlots,
            name,
            phoneNumber,
            countryCode
        };
        localStorage.setItem('appointments', JSON.stringify(storedAppointments));

        // Kutucukları boşaltma
        setName('');
        setPhoneNumber('');
        setCountryCode('+90');
        setSelectedDate(null);

        alert("Randevu başarıyla kaydedildi!");
    };


    return (
        <div className="book-appointment-container">
            <h1 className="book-appointment-header">Book Appointment</h1>

            <img className='book-appointment-img' src={image} alt={title} />
            <h2 className="book-appointment-header">{title}</h2>

            <div className="book-appointment-section">
                <div className="book-appointment-info">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="book-appointment-input"
                        required
                    />

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
                            value={phoneNumber}
                            onChange={handlePhoneChange}
                            placeholder="Phone number"
                            required
                        />
                    </div>

                    <h3>Choose a Date:</h3>
                    <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        minDate={new Date()} // Geçmiş tarihleri devre dışı bırak
                        className="book-appointment-date-picker"
                    />

                    <h3>Available Time Slots:</h3>
                    <div className="book-appointment-time-slots">
                        {timeSlots.map((time) => (
                            <button
                                key={time}
                                className={`book-appointment-time-slot ${bookedSlots.includes(`${selectedDate?.toISOString().split('T')[0]} ${time}`) ? 'booked' : ''}`}
                                onClick={() => handleAppointment(time)}
                                disabled={bookedSlots.includes(`${selectedDate?.toISOString().split('T')[0]} ${time}`)}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;
