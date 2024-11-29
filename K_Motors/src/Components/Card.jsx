import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Card.css';


const Card = ({ id, image, title, description, price, specifications }) => {


    return (
        <div className="card">
            <div className="card-inner">
                {/* Ön Yüz */}
                <div className="card-front">
                    <img src={image} alt={title} className="card-image" />
                    <h3>{title}</h3>
                    <p className='description'>{description}</p>
                    <p className="price">{price}</p>
                </div>

                {/* Arka Yüz */}
                <div className="card-back">
                    <h3>Vehicle Specifications</h3>
                    {specifications && (
                        <ul>
                            {specifications.map((spec, idx) => (
                                <li key={idx}>
                                    <strong>{spec.label}:</strong> {spec.value}
                                </li>
                            ))}
                        </ul>
                    )}
                    <Link className='button' to={`/book-appointment/${id}`} state={{ title, image }}>
                        Book Appointment
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
