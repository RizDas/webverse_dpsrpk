import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaClock, FaUsers, FaLocationDot } from "react-icons/fa6";
import "./Tours.css";

const Tours = () => {
  const tourPlans = [
    {
      id: 1,
      title: "Beginner's Night Sky Adventure",
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

  const horizontalTourPlans = [
    {
      id: 4,
      title: "Meteor Shower Special",
      image: "/images/tours/meteor-shower.jpg",
      description:
        "Experience the magic of meteor showers with expert guidance and specialized equipment.",
      duration: "4 hours",
      groupSize: "6-12 people",
      location: "Remote Dark Site",
      price: "₹3,000",
      rating: 4.9,
      bestSeller: true,
    },
    {
      id: 5,
      title: "Astrophotography Workshop",
      image: "/images/tours/astrophotography.jpg",
      description:
        "Learn to capture stunning night sky photographs with professional equipment.",
      duration: "3 hours",
      groupSize: "4-6 people",
      location: "Photography Studio & Field",
      price: "₹4,000",
      rating: 4.8,
    },
    {
      id: 6,
      title: "Full Moon Experience",
      image: "/images/tours/full-moon.jpg",
      description:
        "Detailed observation of lunar features during full moon phases.",
      duration: "2 hours",
      groupSize: "5-8 people",
      location: "Lunar Observatory",
      price: "₹1,800",
      rating: 4.6,
      bestSeller: true,
    },
    {
      id: 7,
      title: "Kids Astronomy Adventure",
      image: "/images/tours/kids-astronomy.jpg",
      description:
        "Fun and educational stargazing experience designed for young astronomers.",
      duration: "1.5 hours",
      groupSize: "6-10 kids",
      location: "Education Center",
      price: "₹1,200",
      rating: 4.7,
    },
    {
      id: 8,
      title: "Solar Observation",
      image: "/images/tours/solar.jpg",
      description:
        "Safe solar viewing with specialized equipment during daytime.",
      duration: "2 hours",
      groupSize: "4-8 people",
      location: "Solar Observatory",
      price: "₹1,600",
      rating: 4.5,
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
        <div className="horizontal-tours">
          {horizontalTourPlans.map((tour, index) => (
            <motion.div
              key={tour.id}
              whileHover={{ scale: 1.02 }}
              className={`horizontal-card ${
                index % 2 === 0 ? "left-aligned" : "right-aligned"
              }`}
            >
              {tour.bestSeller && (
                <div className="best-seller-tag">Best Seller</div>
              )}
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
