import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-image-container">
              <img src="/sessions.png" alt="SESSIONS" className="logo-image" />
            </div>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className="nav-link">Home</a>
            <a href="#music" className="nav-link">Music</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#live" className="nav-link">Live</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          <div className="nav-toggle" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-logo">
            <img src="/sessions.png" alt="SESSIONS" className="hero-logo-image" />
          </div>
          <p className="hero-subtitle">Musician • Producer • Artist</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Listen Now</button>
            <button className="btn btn-secondary">Latest Release</button>
          </div>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Music Section */}
      <section id="music" className="music-section">
        <div className="container">
          <h2 className="section-title">Latest Music</h2>
          <div className="music-grid">
            <div className="music-card">
              <div className="music-image">
                <div className="play-button">▶</div>
                <div className="music-logo-overlay">
                  <img src="/sessions_small.png" alt="SESSIONS" className="music-logo" />
                </div>
              </div>
              <h3>Latest Single</h3>
              <p>Released 2024</p>
            </div>
            <div className="music-card">
              <div className="music-image">
                <div className="play-button">▶</div>
                <div className="music-logo-overlay">
                  <img src="/sessions_small.png" alt="SESSIONS" className="music-logo" />
                </div>
              </div>
              <h3>Album Title</h3>
              <p>Released 2023</p>
            </div>
            <div className="music-card">
              <div className="music-image">
                <div className="play-button">▶</div>
                <div className="music-logo-overlay">
                  <img src="/sessions_small.png" alt="SESSIONS" className="music-logo" />
                </div>
              </div>
              <h3>Featured Track</h3>
              <p>Released 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About</h2>
              <p>
                Residing in Atlanta, Georgia, Bailey Van Wormer, better known under his artist name Sessions, 
                crafts chill electronic music designed to ease the mind and move the soul. Blending soothing 
                melodies with ambient textures, his sound draws deep inspiration from the relaxed melodic dance 
                scenes of Berlin and Amsterdam.
              </p>
              <p>
                Now 22, Bailey began producing music at just 12 years old. By 16, he signed his debut track 
                "Falling" to the German label Future House Cloud. Since then, he has toured the U.S. as an 
                electronic DJ, with performances in San Francisco, New York, Washington D.C., Boston, and many 
                more. With his new project Sessions, he is setting his sights on the European dance scene, 
                building a sonic bridge between laid-back energy and emotional depth.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <img src="/sessions_small.png" alt="SESSIONS" className="about-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Section */}
      <section id="live" className="live-section">
        <div className="container">
          <h2 className="section-title">Live</h2>
          <div className="live-grid">
            <div className="live-card">
              <div className="live-date">
                <span className="date-day">15</span>
                <span className="date-month">DEC</span>
              </div>
              <div className="live-info">
                <h3>Atlanta, GA</h3>
                <p className="venue">Terminal West</p>
                <p className="time">Doors: 8:00 PM</p>
                <button className="btn btn-secondary">Get Tickets</button>
              </div>
            </div>
            <div className="live-card">
              <div className="live-date">
                <span className="date-day">22</span>
                <span className="date-month">DEC</span>
              </div>
              <div className="live-info">
                <h3>Nashville, TN</h3>
                <p className="venue">The Basement East</p>
                <p className="time">Doors: 9:00 PM</p>
                <button className="btn btn-secondary">Get Tickets</button>
              </div>
            </div>
            <div className="live-card">
              <div className="live-date">
                <span className="date-day">05</span>
                <span className="date-month">JAN</span>
              </div>
              <div className="live-info">
                <h3>Charlotte, NC</h3>
                <p className="venue">The Underground</p>
                <p className="time">Doors: 8:30 PM</p>
                <button className="btn btn-secondary">Get Tickets</button>
              </div>
            </div>
            <div className="live-card">
              <div className="live-date">
                <span className="date-day">12</span>
                <span className="date-month">JAN</span>
              </div>
              <div className="live-info">
                <h3>Raleigh, NC</h3>
                <p className="venue">Lincoln Theatre</p>
                <p className="time">Doors: 8:00 PM</p>
                <button className="btn btn-secondary">Get Tickets</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Connect</h3>
              <p>Email: contact@sessions.com</p>
              <p>Instagram: @sessions</p>
              <p>Twitter: @sessions</p>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Name" className="form-input" />
              <input type="email" placeholder="Email" className="form-input" />
              <textarea placeholder="Message" className="form-textarea"></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <img src="/sessions_small.png" alt="SESSIONS" className="footer-logo" />
            <p>&copy; 2024 SESSIONS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
