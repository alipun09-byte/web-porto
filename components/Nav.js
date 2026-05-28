'use client';

import { useState } from 'react';
import { navLinks } from '../data/portfolio';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="container">
        <a href="#top" className="nav-logo">
          alip<span>.</span>design
        </a>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta">
          Let's Talk
        </a>

        <button
          className={`nav-toggle ${isOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
