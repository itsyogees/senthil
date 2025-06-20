// app/mentorship/page.js
"use client";
import { FaChalkboardTeacher, FaCode, FaUserTie, FaGraduationCap, FaCalendarAlt, FaClock, FaUser, FaEnvelope, FaComment, FaPlay } from "react-icons/fa";
import { useState } from 'react';
import styles from './Mentorship.module.scss';

export default function MentorshipPage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topics: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const offerings = [
    {
      title: "Career Growth Session",
      duration: "30 or 60 min",
      icon: <FaUserTie className={styles.offeringIcon} />,
      description: "Resume review, interview prep, and career path strategy"
    },
    {
      title: "Architecture Review",
      duration: "60 min",
      icon: <FaCode className={styles.offeringIcon} />,
      description: "Deep dive into your system design with actionable feedback"
    },
    {
      title: "Project Guidance",
      duration: "3 sessions",
      icon: <FaChalkboardTeacher className={styles.offeringIcon} />,
      description: "Ongoing support for your development project"
    },
    {
      title: "Final Year Project",
      duration: "45 min",
      icon: <FaGraduationCap className={styles.offeringIcon} />,
      description: "Specialized help for academic projects and research"
    }
  ];

  const testimonials = [
    {
      quote: "Senthil's mentorship helped me land my dream job at a FAANG company. His technical and career advice was invaluable.",
      author: "Priya K.",
      role: "Senior Software Engineer"
    },
    {
      quote: "The architecture review session completely transformed how I approach system design. Worth every minute!",
      author: "Rahul M.",
      role: "Tech Lead"
    },
    {
      quote: "As a student, the final year project guidance helped me achieve distinction and multiple job offers.",
      author: "Arjun P.",
      role: "Junior Developer"
    },
    {
      quote: "The career growth session gave me clarity on my 5-year plan and the exact steps to get there.",
      author: "Neha S.",
      role: "Engineering Manager"
    }
  ];

  const faqs = [
    {
      question: "How should I prepare for my session?",
      answer: "Please prepare specific questions and share any relevant materials (code, designs, resume) at least 24 hours before our session."
    },
    {
      question: "What if I need to reschedule?",
      answer: "You can reschedule up to 24 hours before your session by contacting us at mentorship@senthil.com."
    },
    {
      question: "Do you offer ongoing mentorship?",
      answer: "Yes, we offer monthly mentorship packages with weekly check-ins and priority support."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Cancellations within 24 hours of the session will be charged 50% of the session fee."
    }
  ];

  // Mock available dates and times
  const availableDates = [
    { 
      date: new Date(Date.now() + 86400000 * 2), // 2 days from now
      times: ["10:00 AM", "02:00 PM", "04:30 PM"] 
    },
    { 
      date: new Date(Date.now() + 86400000 * 3), // 3 days from now
      times: ["09:00 AM", "11:30 AM", "03:00 PM"] 
    },
    { 
      date: new Date(Date.now() + 86400000 * 5), // 5 days from now
      times: ["01:00 PM", "04:00 PM", "05:30 PM"] 
    }
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Booking submitted:', {
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    setIsSubmitted(true);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <section className={styles.confirmation}>
          <h1>Booking Confirmed!</h1>
          <div className={styles.confirmationCard}>
            <h2>Your Session Details</h2>
            <p><FaCalendarAlt /> {formatDate(selectedDate)} at {selectedTime}</p>
            <p><FaUser /> {formData.name}</p>
            <p><FaEnvelope /> {formData.email}</p>
            <p><FaComment /> Topics: {formData.topics}</p>
            <p className={styles.confirmationNote}>
              You'll receive a confirmation email with meeting details shortly.
              Please contact us at <strong>mentorship@senthil.com</strong> if you have any questions.
            </p>
            <button 
              className={styles.backButton}
              onClick={() => {
                setIsSubmitted(false);
                setSelectedDate(null);
                setSelectedTime(null);
                setFormData({ name: '', email: '', topics: '' });
              }}
            >
              Book Another Session
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>1:1 Mentorship with Senthil</h1>
        <p>Get personalized guidance for your tech career, projects, or architecture challenges</p>
        <div className={styles.videoPlaceholder}>
          <div className={styles.playButton}>
            <FaPlay />
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className={styles.offerings}>
        <h2>Mentorship Options</h2>
        <div className={styles.cards}>
          {offerings.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconContainer}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p className={styles.duration}>{item.duration}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className={styles.booking}>
        <h2>Book Your Session</h2>
        <div className={styles.calendar}>
          <h3><FaCalendarAlt /> Available Dates</h3>
          <div className={styles.datePicker}>
            {availableDates.map((day, index) => (
              <button
                key={index}
                className={`${styles.dateButton} ${selectedDate && selectedDate.getTime() === day.date.getTime() ? styles.selected : ''}`}
                onClick={() => {
                  setSelectedDate(day.date);
                  setSelectedTime(null);
                }}
              >
                {formatDate(day.date)}
              </button>
            ))}
          </div>

          {selectedDate && (
            <>
              <h3><FaClock /> Available Times</h3>
              <div className={styles.timeSlots}>
                {availableDates.find(d => d.date.getTime() === selectedDate.getTime())?.times.map((time, index) => (
                  <button
                    key={index}
                    className={`${styles.timeButton} ${selectedTime === time ? styles.selected : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </>
          )}

          {selectedTime && (
            <form onSubmit={handleBookingSubmit} className={styles.bookingForm}>
              <div className={styles.formGroup}>
                <label htmlFor="name"><FaUser /> Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email"><FaEnvelope /> Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="topics"><FaComment /> Topics to Discuss</label>
                <textarea 
                  id="topics" 
                  rows={3} 
                  value={formData.topics}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <button type="submit" className={styles.submitButton}>
                Confirm Booking
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <h2>What Mentees Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonial}>
              <blockquote className={styles.quote}>
                "{testimonial.quote}"
              </blockquote>
              <div className={styles.author}>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          {faqs.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>{item.question}</h3>
              <p className={styles.faqAnswer}>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}