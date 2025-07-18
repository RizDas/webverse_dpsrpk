import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const teamMembers = [
    {
      name: "Rishabh Das",
      role: "Wireframe Developer",
      image: "/images/team/astronomer1.jpg",
      description:
        "PhD in Astrophysics with 15 years of experience in stellar observation.",
    },
    {
      name: "Naitik Chattaraj",
      role: "Frontend developer",
      image: "/images/team/educator1.jpg",
      description:
        "Specializes in making astronomy accessible to beginners of all ages.",
    },
    {
      name: "Soumili Dey",
      role: "Backend Developer",
      image: "/images/team/tech1.jpg",
      description: "Expert in telescope operations and astronomical equipment.",
    },
  ];

  return (
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="about-header"
      >
        <h1>About Us</h1>
        <p className="mission-statement">
          Bringing the wonders of the universe closer to Earth through
          educational stargazing experiences.
        </p>
      </motion.div>

      <div className="about-content">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="our-story"
        >
          <h2>Our Story</h2>
          <p>
            Founded in 2025, our observatory has been dedicated to making
            astronomy accessible to everyone. We believe that every person
            should have the opportunity to experience the magic of stargazing
            and understand their place in the cosmos.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="team-section"
        >
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.2 }}
                className="team-member"
              >
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="description">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="values-section"
        >
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Education</h3>
              <p>Making astronomy education accessible to all</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Using cutting-edge technology for stellar observations</p>
            </div>
            <div className="value-item">
              <h3>Community</h3>
              <p>Building a community of astronomy enthusiasts</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
