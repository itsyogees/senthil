"use client";
import {
  FaCloud,
  FaMobileAlt,
  FaCodeBranch,
  FaRobot,
  FaChalkboardTeacher,
  FaArrowRight,
} from "react-icons/fa";
import styles from "./Services.module.scss";

export default function page() {
  const services = [
    {
      title: "Technical Consulting",
      description: "Architecture & Strategy (Cloud, Mobile, Microservices). Available for advisory, review, or fractional CTO roles.",
      icon: <FaCloud />,
      cta: "Get consultation",
      link: "/consulting",
      highlights: [
        "Architecture & Strategy (Cloud, Mobile, Microservices)",
        "Cloud Optimization (Azure, AWS)",
        "DevOps & CI/CD Planning",
        "App Modernization & MVP Development",
        "AI Integration with GenAI"
      ]
    },
    {
      title: "Technical Training & Mentorship",
      description: "Live sessions, recorded modules, and real-world examples for students, devs, and teams.",
      icon: <FaChalkboardTeacher />,
      cta: "View programs",
      link: "/training",
      highlights: [
        "Final Year Project Coaching",
        "Developer Bootcamps",
        "Mobile & Cloud Architecture Training",
        "DevOps Fundamentals",
        "Server-Driven UI + Personalization"
      ]
    },
    {
      title: "Code Review Service",
      description: "Expert analysis and improvement suggestions for your existing codebase.",
      icon: <FaCodeBranch />,
      cta: "Get review",
      link: "/code-review",
      highlights: [
        "Architecture Assessment",
        "Performance Optimization",
        "Security Audit",
        "Best Practices Implementation"
      ]
    },
    {
      title: "AI Solutions",
      description: "Custom AI integration and development services for modern applications.",
      icon: <FaRobot />,
      cta: "Explore AI",
      link: "/ai-solutions",
      highlights: [
        "GenAI Integration",
        "Custom AI Models",
        "AI Strategy Consulting",
        "Machine Learning Solutions"
      ]
    }
  ];

  return (
    <div className={styles.services}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>My Services</h1>
          <p className={styles.subtitle}>
            Professional consulting and training services for modern technology solutions
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesGrid}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {services.map((service, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.cardIcon}>{service.icon}</div>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
                
                <ul className={styles.highlights}>
                  {service.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <a href={service.link} className={styles.button}>
                  {service.cta} <FaArrowRight className={styles.arrowIcon} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>Ready to enhance your technical capabilities?</h2>
          <p className={styles.ctaText}>
            Contact me to discuss how I can help your team or organization with consulting or training services.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}