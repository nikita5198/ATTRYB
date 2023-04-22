import React, { useState } from "react";

const DealerCarDetailsPage = () => {
  const [cars, setCars] = useState([
    {
      id: 1,
      image: "car1.jpg",
      title: "2015 Honda City VX MT",
      description: [
        "1.5L i-VTEC engine",
        "7-inch infotainment display",
        "Automatic climate control",
        "Reverse camera",
        "Cruise control",
      ],
      price: 500000,
      color: "Silver",
      mileage: 20000,
    },
    {
      id: 2,
      image: "car2.jpg",
      title: "2018 Maruti Suzuki Vitara Brezza",
      description: [
        "1.3L DDiS 200 diesel engine",
        "Touchscreen infotainment system",
        "Automatic climate control",
        "Reverse parking camera",
        "Keyless entry",
      ],
      price: 800000,
      color: "White",
      mileage: 5000,
    },
    {
      id: 3,
      image: "car3.jpg",
      title: "2020 Kia Seltos HTK Plus",
      description: [
        "1.5L CRDi diesel engine",
        "8-inch infotainment display",
        "Automatic climate control",
        "Reverse parking camera",
        "Smart key with push button start",
      ],
      price: 1200000,
      color: "Red",
      mileage: 1000,
    },
  ]);

  const handleDeleteCars = () => {
    setCars([]);
  };

  const handleDeleteCar = (id) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  return (
    <div>
      <h1>Dealer Car Details</h1>
      <button onClick={handleDeleteCars}>Delete All Cars</button>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <img src={car.image} alt={car.title} />
            <h2>{car.title}</h2>
            <ul>
              {car.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
            <p>Price: {car.price}</p>
            <p>Color: {car.color}</p>
            <p>Mileage: {car.mileage}</p>
            <button onClick={() => handleDeleteCar(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DealerCarDetailsPage;