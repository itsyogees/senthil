"use client";
import Link from "next/link";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Logo and Description Section */}
          <div className={styles.logoSection}>
            <Link href="/" className={styles.logo}>
              Senthilkumar K
            </Link>
            <p className={styles.tagline}>
              Building digital experiences that inspire and engage
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <HiOutlineLocationMarker className={styles.contactIcon} />
                <span>Chennai, Tamil Nadu</span>
              </div>
              <div className={styles.contactItem}>
                <HiOutlinePhone className={styles.contactIcon} />
                <span>+91 99620 49488</span>
              </div>
              <div className={styles.contactItem}>
                <FaEnvelope className={styles.contactIcon} />
                <span>hello@senthilkumar.dev</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className={styles.links}>
            <h3 className={styles.linksTitle}>Quick Links</h3>
            <div className={styles.linksList}>
              <Link href="/pages/About" className={styles.link}>
                About Me
              </Link>
              <Link href="/pages/Services" className={styles.link}>
                Services
              </Link>
              <Link href="/pages/Portfolio" className={styles.link}>
                Portfolio
              </Link>
              <Link href="/pages/Blog" className={styles.link}>
                Blog
              </Link>
              <Link href="/pages/Contact" className={styles.link}>
                Contact
              </Link>
            </div>
          </div>

          {/* Services Section */}
          <div className={styles.services}>
            <h3 className={styles.servicesTitle}>Services</h3>
            <div className={styles.servicesList}>
              <span className={styles.serviceItem}>Architecture & Strategy (Cloud, Mobile, Microservices)</span>
              <span className={styles.serviceItem}>Cloud Optimization (Azure, AWS)</span>
              <span className={styles.serviceItem}>DevOps & CI/CD Planning</span>
              <span className={styles.serviceItem}>App Modernization & MVP Development</span>
              <span className={styles.serviceItem}>AI Integration with GenAI</span>
            </div>
          </div>

          {/* Social Media Section */}
          <div className={styles.social}>
            <h3 className={styles.socialTitle}>Connect With Me</h3>
            <div className={styles.socialLinks}>
              <Link 
                href="https://twitter.com/yourusername" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Twitter"
              >
                <FaTwitter className={styles.socialIcon} />
                <span>Twitter</span>
              </Link>
              <Link 
                href="https://linkedin.com/in/yourusername" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
              >
                <FaLinkedinIn className={styles.socialIcon} />
                <span>LinkedIn</span>
              </Link>
              <Link 
                href="https://github.com/yourusername" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub Profile"
              >
                <FaGithub className={styles.socialIcon} />
                <span>GitHub</span>
              </Link>
              <Link 
                href="https://instagram.com/yourusername" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow on Instagram"
              >
                <FaInstagram className={styles.socialIcon} />
                <span>Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Senthilkumar K. All rights reserved.
          </div>
          <div className={styles.additionalLinks}>
            <Link href="/privacy" className={styles.additionalLink}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={styles.additionalLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}