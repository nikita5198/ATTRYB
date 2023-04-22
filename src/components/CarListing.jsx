import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const CarListing = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("/api/cars").then((res) => setCars(res.data));
  }, []);

  const deleteCar = (id) => {
    axios.delete(`/api/cars/${id}`).then(() => {
      setCars(cars.filter((car) => car.id !== id));
    });
  };

  return (
    <div>
      <h1>My Cars</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
            <th>Color</th>
            <th>Mileage</th>
            <th>Power</th>
            <th>Max Speed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.price}</td>
              <td>{car.color}</td>
              <td>{car.mileage}</td>
              <td>{car.power}</td>
              <td>{car.max_speed}</td>
              <td>
                <Link to={`/cars/edit/${car.id}`}>
                  <Button variant="primary" className="mr-2">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => deleteCar(car.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CarListing;


