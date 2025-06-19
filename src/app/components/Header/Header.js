'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Helper function to determine if a link is active
  const isActive = (href) => {
    // Special case for home page
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Senthilkumar K
        </Link>

        <button 
          className={styles.menuButton} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <Link 
            href="/pages/About" 
            className={`${styles.link} ${isActive('/pages/About') ? styles.active : ''}`} 
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            href="/pages/Services" 
            className={`${styles.link} ${isActive('/pages/Services') ? styles.active : ''}`} 
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link 
            href="/pages/YoutubePage" 
            className={`${styles.link} ${isActive('/pages/YoutubePage') ? styles.active : ''}`} 
            onClick={closeMenu}
          >
            Youtube
          </Link>
          <Link 
            href="/pages/Blog" 
            className={`${styles.link} ${isActive('/pages/Blog') ? styles.active : ''}`} 
            onClick={closeMenu}
          >
            Blog
          </Link>
          <Link 
            href="/pages/ProjectsPage" 
            className={`${styles.link} ${isActive('/pages/ProjectsPage') ? styles.active : ''}`} 
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link 
            href="/pages/Contact" 
            className={`${styles.link} ${isActive('/pages/Contact') ? styles.active : ''}`} 
            onClick={closeMenu}
          >
            Contact
          </Link>
        </nav>

        {isMenuOpen && (
          <div 
            className={styles.overlay} 
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </div>
    </header>
  );
}