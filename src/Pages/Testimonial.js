import React from 'react';
import './Testimonial.css';

function Testimonial() {
  return (
    <>
      <div className="testimonial">
        <div className="container">
          <h1>What Our Customers Say</h1>
          <div className="carousel-container">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="testimonial-row">
                    <TestimonialCard
                      name="Devolina"
                      image="https://images.unsplash.com/photo-1592493552901-9f0ef0d6f702?q=80&w=415&auto=format&fit=crop"
                      rating="⭐️⭐️⭐️⭐️"
                      text="Best coffee in town! The aroma of freshly brewed coffee hits you the moment you walk in. Their baristas are true artists."
                    />
                    <TestimonialCard
                      name="Priya Jha"
                      image="https://plus.unsplash.com/premium_photo-1670884522719-d7f4bcdfcbeb?q=80&w=1887&auto=format&fit=crop"
                      rating="⭐️⭐️⭐️⭐️"
                      text="A hidden gem! This coffee shop not only has a fantastic selection of drinks but also a mouth-watering array of pastries."
                    />
                    <TestimonialCard
                      name="Hellan"
                      image="https://images.unsplash.com/photo-1679673988162-018d0400240e?q=80&w=2070&auto=format&fit=crop"
                      rating="⭐️⭐️⭐️⭐️"
                      text="Perfect spot to unwind. The music is just the right volume, the seating is comfortable, and there’s always a good mix of people."
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="testimonial-row">
                    <TestimonialCard
                      name="David"
                      image="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop"
                      rating="⭐️⭐️⭐️⭐️"
                      text="Great ambiance! The coffee is superb, and the staff are always friendly. I love spending time here."
                    />
                    <TestimonialCard
                      name="John"
                      image="https://images.unsplash.com/photo-1622020920816-cd528763211a?q=80&w=1908&auto=format&fit=crop"
                      rating="⭐️⭐️⭐️⭐️⭐️"
                      text="This place has a charm of its own. The decor, the food, and the people make it a must-visit for any coffee lover."
                    />
                    <TestimonialCard
                      name="Sandy"
                      image="https://images.unsplash.com/photo-1709863990963-30e6d4e9cacc?q=80&w=2075&auto=format&fit=crop"
                      rating="⭐️⭐️⭐️⭐️⭐️"
                      text="The best coffee shop experience I’ve ever had. It’s like a little piece of heaven in the city!"
                    />
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TestimonialCard({ name, image, rating, text }) {
  return (
    <div className="single">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="image-text">
        <h2>{name}</h2>
        <p>{rating}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Testimonial;




