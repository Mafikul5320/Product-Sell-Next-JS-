import React from 'react'

export default function ProductDetails({ params }) {
    const id = params.id;
    const data = [
        {
            "id": 1,
            "name": "Wireless Headphones",
            "price": 59.99,
            "image": "https://picsum.photos/seed/headphones/400/300"
        },
        {
            "id": 2,
            "name": "Smartwatch Pro",
            "price": 129.99,
            "image": "https://picsum.photos/seed/smartwatch/400/300"
        },
        {
            "id": 3,
            "name": "Gaming Mouse",
            "price": 39.99,
            "image": "https://picsum.photos/seed/mouse/400/300"
        },
        {
            "id": 4,
            "name": "Mechanical Keyboard",
            "price": 89.99,
            "image": "https://picsum.photos/seed/keyboard/400/300"
        },
        {
            "id": 5,
            "name": "4K Monitor",
            "price": 299.99,
            "image": "https://picsum.photos/seed/monitor/400/300"
        },
        {
            "id": 6,
            "name": "Bluetooth Speaker",
            "price": 45.50,
            "image": "https://picsum.photos/seed/speaker/400/300"
        },
        {
            "id": 7,
            "name": "DSLR Camera",
            "price": 499.00,
            "image": "https://picsum.photos/seed/camera/400/300"
        },
        {
            "id": 8,
            "name": "Smartphone X",
            "price": 699.99,
            "image": "https://picsum.photos/seed/smartphone/400/300"
        },
        {
            "id": 9,
            "name": "Tablet Air",
            "price": 399.99,
            "image": "https://picsum.photos/seed/tablet/400/300"
        },
        {
            "id": 10,
            "name": "Wireless Charger",
            "price": 25.99,
            "image": "https://picsum.photos/seed/charger/400/300"
        }
    ]
    const SingleData = data.find(d => d.id == id);
    console.log(SingleData)
    return (
        <div className='w-10/13 mx-auto'>
                <img className='h-30 w-30' src={SingleData.image} />
                <h1>{SingleData.name}</h1>
                <h1>{SingleData.price}</h1>
        </div>
    )
}
