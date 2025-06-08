import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, MapPin, Mail, ExternalLink, Users, Target, Award, Heart } from 'lucide-react';
import './App.css';
import EventsCarousel from "./EventsCarousel";

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [flippedCard, setFlippedCard] = useState(null);

  // Mock data
  const events = [
    {
      id: 1,
      name: "Medical Device Workshop",
      date: "June 15, 2025",
      venue: "Engineering Building Room 203",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Industry Professional Panel",
      date: "June 22, 2025",
      venue: "Student Union Auditorium",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Biotech Company Tour",
      date: "July 5, 2025",
      venue: "Medtronic Headquarters",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      name: "Research Symposium",
      date: "July 18, 2025",
      venue: "Campus Conference Center",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    }
  ];

  const boardMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "President",
      major: "Biomedical Engineering",
      year: "Senior",
      activity: "Research Assistant at BME Lab",
      why: "I joined BMES to connect with like-minded peers and advance healthcare technology.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Vice President",
      major: "Bioengineering",
      year: "Junior",
      activity: "Intern at Boston Scientific",
      why: "BMES provides amazing networking opportunities and professional development.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Secretary",
      major: "Biomedical Engineering",
      year: "Sophomore",
      activity: "Volunteer at Children's Hospital",
      why: "I love how BMES combines my passion for engineering with helping others.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "David Park",
      position: "Treasurer",
      major: "Mechanical Engineering",
      year: "Junior",
      activity: "Co-op at Medtronic",
      why: "BMES opened doors to incredible internship and career opportunities.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const galleryImages = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
      description: "Students working on medical device prototypes during our annual design competition"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      description: "Professional networking event with industry leaders from top biotech companies"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      description: "Members visiting cutting-edge research facilities and learning about latest innovations"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      description: "Workshop on 3D bioprinting and tissue engineering applications"
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'events', 'board', 'gallery', 'involvement'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="navbar">
        <ul>
          <li><button className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home')}>🏠 Home</button></li>
          <li><button className={activeSection === 'events' ? 'active' : ''} onClick={() => scrollToSection('events')}>📅 Events</button></li>
          <li><button className={activeSection === 'board' ? 'active' : ''} onClick={() => scrollToSection('board')}>👥 Board</button></li>
          <li><button className={activeSection === 'gallery' ? 'active' : ''} onClick={() => scrollToSection('gallery')}>📸 Gallery</button></li>
          <li><button className={activeSection === 'involvement' ? 'active' : ''} onClick={() => scrollToSection('involvement')}>🚀 Get Involved</button></li>
          <li><button className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>💡 About Us</button></li>
        </ul>
      </nav>

      {/* Stylish Landing Section */}
      <section
        id="home"
        className="landing-section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          borderRadius: "2.5rem",
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
          boxShadow: "0 8px 32px #1976d244",
          background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
          position: "relative",
          overflow: "hidden",
          animation: "fadeIn 1.2s"
        }}
      >
        <div style={{
          position: "absolute",
          top: "-60px",
          right: "-60px",
          width: "180px",
          height: "180px",
          background: "radial-gradient(circle, #42a5f5 0%, transparent 70%)",
          opacity: 0.18,
          zIndex: 0,
          borderRadius: "50%"
        }} />
        <div style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "500px",
          textAlign: "center",
          padding: "2.5rem 1rem"
        }}>
          <div style={{
            fontSize: "3.5rem",
            marginBottom: "1rem",
            filter: "drop-shadow(0 2px 12px #155fa088)"
          }}>
            🧬
          </div>
          <h1 style={{
            fontSize: "2.8rem",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "1px",
            marginBottom: "0.7rem",
            textShadow: "0 2px 16px #155fa088"
          }}>
             CSULB BMES
          </h1>
          <p style={{
            color: "#e3f0fa",
            fontSize: "1.25rem",
            marginBottom: "2.2rem",
            fontWeight: 500,
            lineHeight: 1.5
          }}>
            California State University Long Beach's Biomedical Engineering Society<br />
            <span style={{ fontSize: "1.1rem", color: "#d0e6fa" }}>Empowering Future Innovators </span>
          </p>
          <button
            onClick={() => scrollToSection('events')}
            style={{
              background: "#fff",
              color: "#1976d2",
              border: "none",
              borderRadius: "2rem",
              padding: "1rem 2.5rem",
              fontWeight: 600,
              fontSize: "1.1rem",
              boxShadow: "0 2px 12px #155fa033",
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s, transform 0.2s",
              outline: "none"
            }}
            onMouseOver={e => { e.currentTarget.style.background = "#e3f0fa"; e.currentTarget.style.color = "#155fa0"; e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#1976d2"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            <span role="img" aria-label="calendar">📅</span> See Upcoming Events
          </button>
        </div>
      </section>

      {/* Upcoming Events Section - Carousel */}
      <section id="events" className="section">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">📅 Upcoming Events</h2>
    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
    <p className="text-gray-600 mt-4 mb-2">Join us for our latest events and workshops!</p>
  </div>
  <EventsCarousel events={events} />
</section>

      {/* Current Board Section */}
      <section id="board" className="section">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">👥 Our Current Board</h2>
    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
    <p className="text-gray-600 mt-4 mb-2">Tap a card to learn more about each officer!</p>
  </div>
  <div className="board-cards">
    {boardMembers.map((member) => (
      <div key={member.id} className="profile-card" tabIndex={0} aria-label={`Board member: ${member.name}`}>
        <div
          className="profile-card-inner"
          onClick={() => setFlippedCard(flippedCard === member.id ? null : member.id)}
          onKeyPress={e => (e.key === 'Enter' || e.key === ' ') && setFlippedCard(flippedCard === member.id ? null : member.id)}
          style={{
            transform: flippedCard === member.id ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front */}
          <div className="profile-card-front">
            <img src={member.image} alt={member.name} />
            <h4 className="mb-1">{member.name}</h4>
            <p className="text-blue-700 font-semibold mb-1">👔 {member.position}</p>
            <p className="text-gray-700 text-sm mb-1">🎓 {member.major}</p>
            <p className="text-gray-500 text-sm">📅 {member.year}</p>
          </div>
          {/* Back */}
          <div className="profile-card-back">
            <h4 className="mb-2">{member.name}</h4>
            <div className="mb-2">
              <span className="font-semibold">Current:</span>
              <br />
              <span>{member.activity}</span>
            </div>
            <div>
              <span className="font-semibold">Why BMES?</span>
              <br />
              <span className="italic">"{member.why}"</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* Gallery Section */}
      <section id="gallery" className="section">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">📸 Gallery</h2>
    <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
    <p className="text-gray-600 mt-4 mb-2">A glimpse into our vibrant BMES community!</p>
  </div>
  <div className="gallery-images">
    {galleryImages.map((item) => (
      <div key={item.id} className="gallery-item" tabIndex={0} aria-label={item.description}>
        <img src={item.image} alt="Gallery" />
        <p className="text-gray-700 mt-2">{item.description}</p>
      </div>
    ))}
  </div>
</section>

      {/* Get Involved Section */}
      <section id="involvement" className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Get Involved</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Ready to join a community of passionate biomedical engineers? Become a member and start your journey toward making a difference in healthcare technology.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-semibold mb-2">Join Our Community</h3>
              <p className="opacity-80">Connect with like-minded students and professionals</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-semibold mb-2">Advance Your Career</h3>
              <p className="opacity-80">Access internships, mentorship, and job opportunities</p>
            </div>
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
              <p className="opacity-80">Contribute to projects that improve human health</p>
            </div>
          </div>

          <a
            href="https://www.bmes.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            <span>Become a Member</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            💡 About Us
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">National Organization Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              🌟 The Biomedical Engineering Society (BMES) is the world's largest biomedical engineering society, dedicated to promoting the increase of biomedical engineering knowledge and its utilization for the benefit of humanity.
            </p>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">How We Achieve Our Goals</h4>
            <ul className="space-y-3 text-gray-600 mb-6">
              <li>🤝 Fostering collaboration between engineering, medicine, and life sciences</li>
              <li>🌐 Providing professional development and networking opportunities</li>
              <li>🔬 Supporting research and innovation in biomedical technology</li>
              <li>🧭 Promoting ethical standards and best practices in the field</li>
            </ul>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">What We Offer</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our chapter provides hands-on workshops, industry connections, research opportunities, and a supportive community for students interested in biomedical engineering. We bridge the gap between academic learning and real-world applications.
            </p>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Student Success Stories</h4>
            <p className="text-gray-600 leading-relaxed">
              BMES members have gone on to secure prestigious internships at leading medical device companies, pursue graduate research at top universities, and launch innovative startups that are changing healthcare. Our network and resources have been instrumental in shaping successful careers in biomedical engineering.
            </p>
          </div>
          <div className="space-y-6">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop"
              alt="Biomedical Engineering Lab"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
              alt="Medical Technology"
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold">BMES</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="mailto:contact@bmes.org" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Biomedical Engineering Society. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;