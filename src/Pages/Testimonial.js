import React from 'react'
import './Testimonial.css'

function Testimonial() {
  return (
    <>
    <div className="testimonial">
        <div className="container">
        <h1>What Our Customer Says</h1>
            <div className="row">
               <div className="col-md-12">
               <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
               <div className="carousel-indicators">
                    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
               </div>
               <div className="carousel-inner">
                   <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single">
                          <div className="image">
                            <img src="https://images.unsplash.com/photo-1592493552901-9f0ef0d6f702?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={100} height={100} alt="" />
                          </div>
                          <div className="image-text">
                           <h2>Devolina</h2>
                           <p>⭐️⭐️⭐️⭐️</p>
                           <p>"Best coffee in town! The aroma of freshly brewed coffee hits you the moment you walk in. Their baristas are true artists, and every cup is a masterpiece.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single">
                          <div className="image">
                            <img src="https://plus.unsplash.com/premium_photo-1670884522719-d7f4bcdfcbeb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={100} height={100} alt="" />
                          </div>
                          <div className="image-text">
                           <h2>Priya Jha</h2>
                           <p>⭐️⭐️⭐️⭐️</p>
                           <p>A hidden gem! This coffee shop not only has a fantastic selection of drinks but also a mouth-watering array of pastries.</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single">
                          <div className="image">
                            <img src="https://images.unsplash.com/photo-1679673988162-018d0400240e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={100} height={100} alt="" />
                          </div>
                          <div className="image-text">
                           <h2>Hellan</h2>
                           <p>⭐️⭐️⭐️⭐️</p>
                           <p>"Perfect spot to unwind. The music is just the right volume, the seating is comfortable, and there's always a good mix of people.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>

                   <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single">
                          <div className="image">
                            <img src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={100} height={100} alt="" />
                          </div>
                          <div className="image-text">
                           <h2>David</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Tenetur qui sapiente voluptatum consectetur hic id praesentium, harum dicta eligendi, iste cupiditate reprehenderit.
                             Porro veritatis obcaecati sequi necessitatibus quidem nemo ratione?</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single">
                          <div className="image">
                            <img src="https://images.unsplash.com/photo-1622020920816-cd528763211a?q=80&w=1908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={100} height={100} alt="" />
                          </div>
                          <div className="image-text">
                           <h2>John</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Tenetur qui sapiente voluptatum consectetur hic id praesentium, harum dicta eligendi, iste cupiditate reprehenderit.
                             Porro veritatis obcaecati sequi necessitatibus quidem nemo ratione?</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single">
                          <div className="image">
                            <img src="https://images.unsplash.com/photo-1709863990963-30e6d4e9cacc?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={100} height={100} alt="" />
                          </div>
                          <div className="image-text">
                           <h2>Sandy</h2>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Tenetur qui sapiente voluptatum consectetur hic id praesentium, harum dicta eligendi, iste cupiditate reprehenderit.
                             Porro veritatis obcaecati sequi necessitatibus quidem nemo ratione?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                   </div>
               </div>
               <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
                 <span className="visually-hidden">Next</span>
               </button>
               </div>
              </div>
            </div> 
        </div>
    </div>
    </>
  );
}

export default Testimonial;