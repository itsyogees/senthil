"use client";
import {
  FaYoutube,
  FaUsers,
  FaVideo,
  FaClock,
  FaArrowRight,
  FaPlay,
  FaEye,
  FaThumbsUp,
  FaCalendarAlt,
} from "react-icons/fa";
import styles from "./YoutubePage.module.scss";

export default function page() {
  const playlists = [
    {
      title: "Final Year Projects",
      embedId: "PLRNBgzSj3e-YMVC-Ua2By-Sa4uFcHqdoI",
      description: "Step-by-step tutorials for final year engineering projects with complete source code and documentation."
    },
    {
      title: "Web & Mobile Development",
      embedId: "PLRNBgzSj3e-aKcroTXakashIvxwntK9t1",
      description: "Modern web and mobile app development tutorials using React, Node.js, Flutter and more."
    },
    {
      title: "Cloud Basics",
      embedId: "PLRNBgzSj3e-b7qE1L868O4yiQU5vWQrcF",
      description: "Learn cloud computing fundamentals with AWS, Azure and Google Cloud platform tutorials."
    },
    {
      title: "Career Growth",
      embedId: "PLRNBgzSj3e-b64gCccgo-Bi7d-K1drRiB",
      description: "Tips and strategies for career advancement in the tech industry."
    },
    {
      title: "Interview Preparation",
      embedId: "PLRNBgzSj3e-awcAXsYOHrTdgEt4cj1wj9",
      description: "Common technical interview questions and how to answer them effectively."
    },
    {
      title: "Programming Basics",
      embedId: "PLRNBgzSj3e-aHQkO1dwxdPLEPd-vi5LZH",
      description: "Fundamental programming concepts explained in simple terms with practical examples."
    },
    {
      title: "DevOps Essentials",
      embedId: "PLRNBgzSj3e-a7yQupawpKdkTXcVT03-5T",
      description: "Introduction to DevOps tools and practices including CI/CD pipelines and containerization."
    },
    {
      title: "Data Science Fundamentals",
      embedId: "PLRNBgzSj3e-aUsWDSWAgEpgbs3Kzbca7G",
      description: "Beginner-friendly data science tutorials covering Python, ML algorithms and data visualization."
    },
    {
      title: "Tech Career Guidance",
      embedId: "PLRNBgzSj3e-ZrqznOVAVcaqVcNQ_bZBqa",
      description: "Advice for starting and growing your career in technology fields."
    }, 
  ];

  const featuredVideos = [
    {
      title: "Complete Web Development Tutorial",
      videoId: "PvtIvH3WFXo",
      description: "Master full-stack web development with modern technologies. Learn HTML, CSS, JavaScript, and backend development from scratch.",
      duration: "9:45",
      views: "18.2K",
      likes: "1.2K"
    },
    {
      title: "React.js Project Development",
      videoId: "8C6JOLs3DXg",
      description: "Build real-world React applications with hooks, components, and state management. Complete project walkthrough included.",
      duration: "8:32",
      views: "15.8K",
      likes: "987"
    },
    {
      title: "Node.js Backend Development",
      videoId: "6k5e5cXH_L0",
      description: "Create powerful backend APIs using Node.js and Express. Covers database integration and authentication.",
      duration: "9:18",
      views: "12.5K",
      likes: "756"
    },
    {
      title: "Mobile App Development Guide",
      videoId: "JcddwbJ-iGU",
      description: "Learn to build cross-platform mobile apps with modern frameworks. Step-by-step tutorial for beginners.",
      duration: "8:15",
      views: "14.7K",
      likes: "892"
    },
    {
      title: "Cloud Computing Fundamentals",
      videoId: "gl3vjDdYhJU",
      description: "Introduction to cloud services, deployment strategies, and scalable application architecture.",
      duration: "7:42",
      views: "11.3K",
      likes: "634"
    },
    {
      title: "Database Design & Management",
      videoId: "3bSPWYTHNTM",
      description: "Master database concepts, SQL queries, and database optimization techniques for better performance.",
      duration: "9:08",
      views: "13.1K",
      likes: "823"
    },
    {
      title: "Python Programming Essentials",
      videoId: "40kJovY1-L8",
      description: "Complete Python tutorial covering data structures, algorithms, and real-world programming applications.",
      duration: "8:54",
      views: "16.4K",
      likes: "1.1K"
    },
    {
      title: "DevOps & Deployment Strategies",
      videoId: "7NBEp3OKFPw",
      description: "Learn modern DevOps practices, CI/CD pipelines, containerization, and automated deployment workflows.",
      duration: "9:22",
      views: "9.8K",
      likes: "542"
    }
  ];
  const upcomingVideos = [
    {
      title: "AI for Beginners - Getting Started",
      description: "Introduction to artificial intelligence concepts with practical Python examples for absolute beginners.",
      releaseDate: "June 28, 2023",
      topics: ["AI Basics", "Python Implementation", "Simple Projects"]
    },
    {
      title: "Advanced React Patterns",
      description: "Learn advanced React patterns and techniques to build more maintainable and performant applications.",
      releaseDate: "July 5, 2023",
      topics: ["Compound Components", "Render Props", "Performance Optimization"]
    },
    {
      title: "Microservices Architecture",
      description: "Complete guide to designing and implementing microservices with Docker and Kubernetes.",
      releaseDate: "July 12, 2023",
      topics: ["Service Design", "Containerization", "Orchestration"]
    },
    {
      title: "TypeScript Masterclass",
      description: "From basics to advanced TypeScript features for modern web development.",
      releaseDate: "July 19, 2023",
      topics: ["Type System", "Generics", "Decorators"]
    },
    {
      title: "Blockchain Fundamentals",
      description: "Understanding blockchain technology and building a simple cryptocurrency from scratch.",
      releaseDate: "July 26, 2023",
      topics: ["Blockchain Theory", "Smart Contracts", "DApps"]
    },
    {
      title: "DevOps CI/CD Pipelines",
      description: "Setting up complete CI/CD pipelines with GitHub Actions and AWS.",
      releaseDate: "August 2, 2023",
      topics: ["Automated Testing", "Deployment Strategies", "Infrastructure as Code"]
    }
  ];


  return (
    <div className={styles.youtube}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.channelInfo}>
            <FaYoutube className={styles.youtubeLogo} />
            <h1>SVJ Tech Tamil by SenthilKumar K</h1>
            <div className={styles.stats}>
              <span>
                <FaUsers /> 8,600+ Subscribers
              </span>
              <span>
                <FaVideo /> 205+ Videos
              </span>
              <span>
                <FaClock /> All under 10 minutes
              </span>
            </div>
            <a
              href="https://www.youtube.com/@svjtechtamil3134"
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Channel <FaArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className={styles.videosSection}>
        <div className={styles.container}>
          <h2>Featured Videos</h2>
          <div className={styles.videosGrid}>
            {featuredVideos.map((video, index) => (
              <div key={index} className={styles.videoCard}>
                <div className={styles.videoThumbnail}>
                  <div className={styles.videoWrapper}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className={styles.videoDuration}>
                    <FaClock /> {video.duration}
                  </div>
                </div>
                <div className={styles.videoContent}>
                  <h3>{video.title}</h3>
                  <p className={styles.videoDescription}>{video.description}</p>
                  {/* <div className={styles.videoStats}>
                    <span>
                      <FaEye /> {video.views} views
                    </span>
                    <span>
                      <FaThumbsUp /> {video.likes} likes
                    </span>
                    <span>
                      <FaPlay /> Watch Now
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Playlists Section */}
      <section className={styles.playlistsSection}>
        <div className={styles.container}>
          <h2>Featured Playlists</h2>
          <div className={styles.playlistsGrid}>
            {playlists.map((playlist, index) => (
              <div key={index} className={styles.playlistCard}>
                <h3>{playlist.title}</h3>
               
                <div className={styles.videoWrapper}>
                  <iframe
                    src={`https://www.youtube.com/embed/videoseries?list=${playlist.embedId}`}
                    title={`${playlist.title} Playlist`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <p className={styles.playlistDescription}>{playlist.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`${styles.upcomingSection} ${styles.sectionDark}`}>
        <div className={styles.container}>
          <h2>Upcoming Videos</h2>
          <p className={styles.sectionSubtitle}>Here's what we're working on next</p>
          <div className={styles.upcomingGrid}>
            {upcomingVideos.map((video, index) => (
              <div key={index} className={styles.upcomingCard}>
                <div className={styles.upcomingContent}>
                  <h3>{video.title}</h3>
                  <p className={styles.upcomingDescription}>{video.description}</p>
                  <div className={styles.upcomingMeta}>
                    <span>
                      <FaCalendarAlt /> {video.releaseDate}
                    </span>
                  </div>
                  <div className={styles.topics}>
                    {video.topics.map((topic, i) => (
                      <span key={i} className={styles.topicPill}>{topic}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}