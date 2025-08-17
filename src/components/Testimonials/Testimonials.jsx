import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Student",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Foodie has made my late-night cravings so easy to handle. Quick delivery and amazing food choices!"
    },
    {
      name: "Ananya Gupta",
      role: "Working Professional",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "The app is super intuitive and the real-time tracking is a lifesaver. I use it almost every day."
    },
    {
      name: "Arjun Mehta",
      role: "Entrepreneur",
      img: "https://randomuser.me/api/portraits/men/51.jpg",
      review:
        "I’ve tried multiple apps but Foodie stands out. Smooth UX, great restaurants, and quick support."
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <img src={t.img} alt={t.name} className="testimonial-img" />
            <p className="testimonial-review">“{t.review}”</p>
            <h3 className="testimonial-name">{t.name}</h3>
            <span className="testimonial-role">{t.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
