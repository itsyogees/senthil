"use client";
import { useState } from "react";
import { FaCode, FaMobile, FaShoppingCart, FaMicrochip, FaRobot, FaTimes } from "react-icons/fa";
import styles from "./Projects.module.scss";
import Image from "next/image";

export default function page() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AI Code Generator",
      description: "OpenAI-powered tool that converts Figma designs to production-ready React code",
      fullDescription: "This innovative AI-powered tool revolutionizes the design-to-code workflow by automatically converting Figma designs into production-ready React components. Using advanced computer vision and natural language processing, it analyzes design elements, layouts, and interactions to generate clean, maintainable code. The tool supports responsive design patterns, component composition, and follows React best practices. It integrates seamlessly with popular development workflows and can generate TypeScript, styled-components, and Tailwind CSS code variants.",
      icon: <FaCode className={styles.icon} />,
      tags: ["AI", "OpenAI", "React", "Figma"],
      image: "/images/WinForms.jpg",
      technologies: ["React", "OpenAI API", "Computer Vision", "TypeScript", "Node.js"],
      features: ["Automatic component generation", "Responsive design support", "Multiple CSS frameworks", "TypeScript support", "Live preview"]
    },
    {
      title: "Ground Booking App",
      description: "Flutter application for booking sports grounds with real-time availability",
      fullDescription: "A comprehensive mobile application built with Flutter that simplifies sports ground booking for players and facility managers. The app features real-time availability checking, secure payment processing, and automated booking confirmations. Users can browse nearby grounds, view facilities, check availability, and make instant bookings. Ground owners can manage their facilities, set pricing, and track bookings through an intuitive dashboard. The app includes push notifications, user reviews, and a robust admin panel.",
      icon: <FaMobile className={styles.icon} />,
      tags: ["Flutter", "Firebase", "Dart"],
      image: "/images/WinForms.jpg",
      technologies: ["Flutter", "Dart", "Firebase", "Stripe API", "Google Maps API"],
      features: ["Real-time availability", "Secure payments", "Push notifications", "Location-based search", "User reviews"]
    },
    {
      title: "Multi-Tenant E-Commerce Platform",
      description: "Scalable e-commerce solution supporting multiple stores with custom domains",
      fullDescription: "A sophisticated multi-tenant e-commerce platform that enables multiple businesses to operate their online stores from a single codebase while maintaining complete isolation and customization. Each tenant gets their own subdomain or custom domain, unique branding, product catalog, and customer base. The platform includes advanced features like inventory management, order processing, payment gateway integration, analytics dashboard, and SEO optimization. Built with microservices architecture for maximum scalability and performance.",
      icon: <FaShoppingCart className={styles.icon} />,
      tags: ["Node.js", "React", "MongoDB", "AWS"],
      image: "/images/WinForms.jpg",
      technologies: ["Node.js", "React", "MongoDB", "AWS", "Redis", "Elasticsearch"],
      features: ["Multi-tenant architecture", "Custom domains", "Payment processing", "Inventory management", "Analytics dashboard"]
    },
    {
      title: "IoT Fish Feeder App",
      description: "Android app controlling ESP32-based automated fish feeding system",
      fullDescription: "An innovative IoT solution combining mobile app development with embedded systems to create an automated fish feeding system. The Android app communicates with ESP32 microcontrollers to schedule feeding times, monitor food levels, and track fish activity. Features include remote feeding control, automated scheduling, food level monitoring, water temperature tracking, and feeding history logs. The system uses WiFi connectivity and cloud synchronization to ensure reliable operation even when users are away.",
      icon: <FaMicrochip className={styles.icon} />,
      tags: ["Android", "Kotlin", "ESP32", "IoT"],
      image: "/images/WinForms.jpg",
      technologies: ["Android", "Kotlin", "ESP32", "Arduino IDE", "Firebase", "MQTT"],
      features: ["Remote feeding control", "Automated scheduling", "Food level monitoring", "Temperature tracking", "Cloud synchronization"]
    },
    {
      title: "AI Interview Bot",
      description: "Voice-enabled interview assistant with NLP analysis of candidate responses",
      fullDescription: "An advanced AI-powered interview assistant that conducts preliminary candidate screenings using natural language processing and voice recognition technologies. The system asks relevant questions based on job requirements, analyzes candidate responses for technical competency and soft skills, and provides detailed evaluation reports. Features include voice-to-text conversion, sentiment analysis, keyword extraction, and automated scoring. The bot can adapt its questioning based on candidate responses and provides valuable insights to hiring managers.",
      icon: <FaRobot className={styles.icon} />,
      tags: ["Python", "NLP", "Voice Recognition", "AI"],
      image: "/images/WinForms.jpg",
      technologies: ["Python", "TensorFlow", "Speech-to-Text API", "NLTK", "Flask", "PostgreSQL"],
      features: ["Voice recognition", "NLP analysis", "Automated scoring", "Sentiment analysis", "Detailed reports"]
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={styles.projects}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>MY PROJECTS</h1>
          <p className={styles.subtitle}>
            Real-world solutions combining cutting-edge technologies with practical applications
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsGrid}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={styles.projectCard}
                onClick={() => openModal(project)}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={styles.image}
                  />
                  <div className={styles.iconContainer}>
                    {project.icon}
                  </div>
                </div>
                <div className={styles.content}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalIconContainer}>
                {selectedProject.icon}
              </div>
              <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
              <button className={styles.closeButton} onClick={closeModal}>
                <FaTimes />
              </button>
            </div>
            
            <div className={styles.modalContent}>
              <div className={styles.modalImageContainer}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className={styles.modalImage}
                />
              </div>
              
              <div className={styles.modalBody}>
                <div className={styles.description}>
                  <h3>Description</h3>
                  <p>{selectedProject.fullDescription}</p>
                </div>
                
                <div className={styles.technologies}>
                  <h3>Technologies Used</h3>
                  <div className={styles.techGrid}>
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.features}>
                  <h3>Key Features</h3>
                  <ul className={styles.featureList}>
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}