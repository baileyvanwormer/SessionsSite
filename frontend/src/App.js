import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
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
            <a href="#press" className="nav-link">Press</a>
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
          <p className="hero-subtitle">Producer • Artist • Musician</p>
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
                <img src="/images/7.jpg" alt="Berlin (To You) Artwork" className="music-album-art" />
              </div>
              <h3>Berlin (To You)</h3>
              <p>Anjunadeep</p>
            </div>
            <div className="music-card">
              <div className="music-image">
                <div className="play-button">▶</div>
                <div className="music-logo-overlay">
                  <img src="/sessions_small.png" alt="SESSIONS" className="music-logo" />
                </div>
                <img src="/images/5.PNG" alt="Album Artwork" className="music-album-art" />
              </div>
              <h3>Do It To Myself</h3>
              <p>Spinnin' Deep</p>
            </div>
            <div className="music-card">
              <div className="music-image">
                <div className="play-button">▶</div>
                <div className="music-logo-overlay">
                  <img src="/sessions_small.png" alt="SESSIONS" className="music-logo" />
                </div>
                <img src="/images/6.jpg" alt="Translucent Artwork" className="music-album-art" />
              </div>
              <h3>Translucent</h3>
              <p>Aero Records</p>
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
                <img src="/images/1.JPEG" alt="Sessions Artist Photo" className="about-photo" />
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

      {/* Press Section */}
      <section id="press" className="press-section">
        <div className="container">
          <h2 className="section-title">Press</h2>
          <div className="press-grid">
            <div className="press-card">
              <div className="press-logo">
                <img src="/sessions_small.png" alt="Publication" className="press-logo-img" />
              </div>
              <div className="press-content">
                <h3>"Sessions Brings Berlin Vibes to Atlanta"</h3>
                <p className="press-source">Electronic Music Monthly</p>
                <p className="press-excerpt">
                  "Bailey Van Wormer's new project Sessions delivers exactly what the U.S. electronic scene 
                  has been missing - the laid-back energy of Berlin's melodic house scene with a distinctly 
                  American soul."
                </p>
                <a href="#" className="press-link">Read Full Article →</a>
              </div>
            </div>
            <div className="press-card">
              <div className="press-logo">
                <img src="/sessions_small.png" alt="Publication" className="press-logo-img" />
              </div>
              <div className="press-content">
                <h3>"From Future House Cloud to Sessions: A Producer's Evolution"</h3>
                <p className="press-source">DJ Times</p>
                <p className="press-excerpt">
                  "At just 22, Sessions has already proven his ability to craft tracks that resonate with 
                  international audiences, bridging the gap between American and European electronic music cultures."
                </p>
                <a href="#" className="press-link">Read Full Article →</a>
              </div>
            </div>
            <div className="press-card">
              <div className="press-logo">
                <img src="/sessions_small.png" alt="Publication" className="press-logo-img" />
              </div>
              <div className="press-content">
                <h3>"Sessions: The New Face of Chill Electronic"</h3>
                <p className="press-source">Atlanta Music Scene</p>
                <p className="press-excerpt">
                  "Local producer Bailey Van Wormer's Sessions project is setting the standard for ambient 
                  electronic music that moves both the mind and the dance floor."
                </p>
                <a href="#" className="press-link">Read Full Article →</a>
              </div>
            </div>
            <div className="press-card">
              <div className="press-logo">
                <img src="/sessions_small.png" alt="Publication" className="press-logo-img" />
              </div>
              <div className="press-content">
                <h3>"Interview: Sessions on European Dance Scene Ambitions"</h3>
                <p className="press-source">Electronic Dance Music Weekly</p>
                <p className="press-excerpt">
                  "In an exclusive interview, Sessions discusses his journey from teenage producer to touring 
                  DJ and his plans to conquer the European dance scene."
                </p>
                <a href="#" className="press-link">Read Full Article →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Banner */}
      <section className="booking-banner">
        <div className="container">
          <div className="booking-content">
            <div className="booking-text">
              <h2>Get in touch</h2>
              <p>For bookings, press, or collaborations</p>
            </div>
            <button className="btn btn-primary booking-btn" onClick={openBookingModal}>
              Contact
            </button>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="modal-overlay" onClick={closeBookingModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeBookingModal}>×</button>
            <h2 className="modal-title">Booking Request</h2>
            <form className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" className="form-input" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" className="form-input" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="venue">Venue/Event Name</label>
                  <input type="text" id="venue" name="venue" className="form-input" required />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Event Date</label>
                  <input type="date" id="date" name="date" className="form-input" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="location">Location (City, State)</label>
                <input type="text" id="location" name="location" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="details">Event Details</label>
                <textarea id="details" name="details" className="form-textarea" placeholder="Tell us about your event, expected attendance, genre, etc." rows="4"></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="budget">Budget Range</label>
                <select id="budget" name="budget" className="form-input">
                  <option value="">Select budget range</option>
                  <option value="under-1000">Under $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-plus">$5,000+</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Send Booking Request</button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <img src="/sessions_small.png" alt="SESSIONS" className="footer-logo" />
            <p>&copy; 2025 SESSIONS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
