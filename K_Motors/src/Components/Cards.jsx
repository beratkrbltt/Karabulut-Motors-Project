import React from 'react';
import Card from './Card';
import '../css/Card.css';

const Cards = () => {
    const cards = [
        {
            id: 1,
            image: '/media/merso.jpg',
            title: 'Mercedes S 350 Long',
            description: 'Performance: 0-100 km/h in 6.8 sec',
            specifications: [
                { label: 'Model', value: 'S 350 BlueTEC 4Matic' },
                { label: 'Year', value: 2014 },
                { label: 'Fuel', value: 'Diesel' },
                { label: 'Transmission', value: 'Automatic' },
                { label: 'Km', value: '180,000 km' },
                { label: 'Body Type', value: 'Sedan' },
                { label: 'Engine Power', value: '258 hp' },
                { label: 'Engine Volume', value: '2987 cc' },
                { label: 'Drive Type', value: '4WD (Permanent)' }
            ],
            price: '4.900.000 TL',
            link: '#'
        },

        {
            id: 2,
            image: '/media/520.jpg',
            title: 'Bmw 520D',
            description: 'Performance: 0-100 km/h in 8.7 sec',
            specifications: [
                { label: 'Model', value: '520d Premium' },
                { label: 'Year', value: 2008 },
                { label: 'Fuel', value: 'Diesel' },
                { label: 'Transmission', value: 'Automatic' },
                { label: 'Km', value: '349,000 km' },
                { label: 'Body Type', value: 'Sedan' },
                { label: 'Engine Power', value: '177 hp' },
                { label: 'Engine Volume', value: '1995 cc' },
                { label: 'Drive Type', value: '(RWD)' }
            ],
            price: '980,000 TL',
            link: '#',
        },
        {
            id: 3,
            image: '/media/a4.jpg',
            title: 'Audi A4',
            description: 'Performance: 0-100 km/h in 7.7 sec',
            specifications: [
                { label: 'Model', value: 'A4 Sedan 40 TDI Advanced' },
                { label: 'Year', value: 2019 },
                { label: 'Fuel', value: 'Diesel' },
                { label: 'Transmission', value: 'Automatic' },
                { label: 'Km', value: '135,400 km' },
                { label: 'Body Type', value: 'Sedan' },
                { label: 'Engine Power', value: '190 hp' },
                { label: 'Engine Volume', value: '1968 cc' },
                { label: 'Drive Type', value: '(FWD)' }
            ],
            price: '1.799.000 TL',
            link: '#',
        },
        {
            id: 4,
            image: '/media/cc.jpg',
            title: 'Volkswagen CC',
            description: 'Performance: 0-100 km/h in 8.1 sec',
            specifications: [
                { label: 'Model', value: 'Exclusive' },
                { label: 'Year', value: 2016 },
                { label: 'Fuel', value: 'Diesel' },
                { label: 'Transmission', value: 'Automatic' },
                { label: 'Km', value: '180,000 km' },
                { label: 'Body Type', value: 'Coupe 4-Door' },
                { label: 'Engine Power', value: '184 hp' },
                { label: 'Engine Volume', value: '1968 cc' },
                { label: 'Drive Type', value: '(FWD)' }
            ],
            price: ' 1.470.000 TL',
            link: '#'
        },
        {
            id: 5,
            image: '/media/350z.jpg',
            title: 'Nissan 350z',
            description: 'Performance: 0-100 km/h in 5.9 sec',
            specifications: [
                { label: 'Model', value: '350Z' },
                { label: 'Year', value: 2004 },
                { label: 'Fuel', value: 'Gasoline' },
                { label: 'Transmission', value: 'Manual' },
                { label: 'Body Type', value: 'Coupe' },
                { label: 'Km', value: '150,000 km' },
                { label: 'Engine Power', value: '280 hp' },
                { label: 'Engine Volume', value: '3498 cc' },
                { label: 'Drive Type', value: '(RWD)' }
            ],
            price: ' 3.350.000 TL',
            link: '#'
        },
        {
            id: 6,
            image: '/media/porsche.jpg',
            title: 'Porsche Cayenne',
            description: 'Performance: 0-100 km/h in 7.6 sec',
            specifications: [
                { label: 'Model', value: '3.0D' },
                { label: 'Year', value: 2012 },
                { label: 'Fuel', value: 'Diesel' },
                { label: 'Transmission', value: 'Automatic' },
                { label: 'Body Type', value: 'SUV' },
                { label: 'Km', value: '235,000 km' },
                { label: 'Engine Power', value: '245 hp' },
                { label: 'Engine Volume', value: '2967 cc' },
                { label: 'Drive Type', value: '4x4' }
            ],
            price: ' 2,755,000 TL',
            link: '#'
        },
        {
            id: 7,
            image: '/media/tesla.jpg',
            title: 'Tesla Long Range',
            description: 'Performance: 0-100 km/h in 5.0 sec',
            specifications: [
                { label: 'Model', value: 'Long Range' },
                { label: 'Year', value: 2023 },
                { label: 'Fuel', value: 'Electric' },
                { label: 'Transmission', value: 'Automatic' },
                { label: 'Km', value: '20,000 km' },
                { label: 'Body Type', value: 'Hatchback 5-Door' },
                { label: 'Engine Power', value: '372 hp' },
                { label: 'Drive Type', value: '4WD (Permanent)' }
            ],
            price: '2.190.000 TL',
            link: '#'
        },
        {
            id: 8,
            image: '/media/land.jpg',
            title: 'Range Rover Vogue',
            description: 'Performance: 0-100 km/h in 6.9 sec',
            specifications: [
                { label: 'Model', value: 'Vogue' },
                { label: 'Year', value: 2015 },
                { label: 'Fuel', value: 'Diesel' },
                { label: 'Transmission', value: 'Automatic' },
                { label: 'Km', value: '198,000 km' },
                { label: 'Body Type', value: 'SUV' },
                { label: 'Engine Power', value: '340 hp' },
                { label: 'Engine Volume', value: '2993 cc' },
                { label: 'Drive Type', value: '4x4' }
            ],
            price: ' 6.250.000 TL',
            link: '#'
        }
    ];
    return (
        <div className="container_index">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    id={card.id}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    specifications={card.specifications}
                    price={card.price}
                    link={card.link}
                />

            ))}
        </div>
    );
};

export default Cards;
