import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import "./App.css";

const EventsCarousel = ({ events }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstChild?.offsetWidth || 320;
      scrollRef.current.scrollBy({
        left: direction === "right" ? cardWidth + 24 : -(cardWidth + 24),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="events-carousel-wrapper">
      <button
        className="carousel-arrow left"
        aria-label="Scroll left"
        onClick={() => scroll("left")}
      >
        <ChevronLeft size={28} />
      </button>
      <div className="events-carousel" ref={scrollRef}>
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img
              src={event.image}
              alt={event.name}
              className="event-card-img"
            />
            <div className="event-card-content">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">🎓 {event.name}</h3>
              <div className="event-card-details">
                <div className="event-detail">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date}</span>
                </div>
                <div className="event-detail">
                  <MapPin className="w-4 h-4" />
                  <span>{event.venue}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-arrow right"
        aria-label="Scroll right"
        onClick={() => scroll("right")}
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default EventsCarousel;