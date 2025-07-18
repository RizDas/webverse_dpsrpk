import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaClock, FaUsers, FaLocationDot } from "react-icons/fa6";
import "./Tours.css";

const Tours = () => {
  const tourPlans = [
    {
      id: 1,
      title: "Beginner's Night Sky Adventure",
      image: "/images/tours/beginner-tour.jpg",
      description:
        "Perfect for first-time stargazers. Learn basic constellations and use beginner-friendly telescopes.",
      duration: "2 hours",
      groupSize: "5-10 people",
      location: "Observatory Garden",
      price: "₹1,500",
      rating: 4.8,
    },
    {
      id: 2,
      title: "Deep Space Explorer",
      image: "/images/tours/deep-space.jpg",
      description:
        "Advanced telescope viewing of nebulae, galaxies, and star clusters with expert astronomers.",
      duration: "3 hours",
      groupSize: "3-6 people",
      location: "Dark Sky Site",
      price: "₹2,500",
      rating: 4.9,
    },
    {
      id: 3,
      title: "Planetary Watch",
      image: "/images/tours/planetary.jpg",
      description:
        "Focus on observing planets in our solar system with high-power telescopes.",
      duration: "2.5 hours",
      groupSize: "4-8 people",
      location: "Hilltop Observatory",
      price: "₹2,000",
      rating: 4.7,
    },
  ];

  return (
    <div className="tours-container">
      <div className="content-wrapper">
        <h1 className="tours-title">Stargazing Tours</h1>
        <div className="tours-grid">
          {tourPlans.map((tour) => (
            <motion.div
              key={tour.id}
              whileHover={{ scale: 1.03 }}
              className="tour-card"
            >
              <img src={tour.image} alt={tour.title} className="tour-image" />
              <div className="tour-content">
                <h2 className="tour-title">{tour.title}</h2>
                <p className="tour-description">{tour.description}</p>
                <div className="tour-details">
                  <div className="detail-item">
                    <FaClock />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="detail-item">
                    <FaUsers />
                    <span>{tour.groupSize}</span>
                  </div>
                  <div className="detail-item">
                    <FaLocationDot />
                    <span>{tour.location}</span>
                  </div>
                  <div className="detail-item rating">
                    <FaStar />
                    <span>{tour.rating}/5.0</span>
                  </div>
                </div>
                <div className="tour-footer">
                  <span className="price">{tour.price}</span>
                  <button className="book-button">Book Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tours;
