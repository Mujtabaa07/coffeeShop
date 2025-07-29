import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <div className="reviews-content">
          <div className="text-center">
            <p className="reviews-subtitle">
              2,157 people have said how good MsCafe is...
            </p>
            <h2 className="reviews-heading">Our happy clients say about us</h2>
          </div>
          <div className="reviews-link-container">
            <a
              href="/testimonial"
              title="Check all reviews"
              className="reviews-link"
            >
              Check all 2,157 reviews
            </a>
          </div>

          <div className="reviews-grid-container">
            <div className="reviews-grid-background"></div>

            <div className="reviews-grid">
              <div className="group review-card">
                <div className="review-card-overlay"></div>
                <div className="review-card-content">
                  <div className="review-stars">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="review-star-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="review-text">
                    <p>
                      “The coffee here is amazing! The atmosphere is cozy, and
                      the staff is incredibly friendly. I come here every
                      morning to start my day right.”
                    </p>
                  </blockquote>

                  <div className="review-author">
                    <img
                      className="review-author-image"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png"
                      alt=""
                    />
                    <div className="review-author-details">
                      <p className="review-author-name">Emily Carter</p>
                      <p className="review-author-role">Coffee Enthusiast</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group review-card">
                <div className="review-card-overlay"></div>
                <div className="review-card-content">
                  <div className="review-stars">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="review-star-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="review-text">
                    <p>
                      “The best latte I’ve ever had! The baristas are true
                      artists, and the pastries are fresh and delicious. Highly
                      recommend!”
                    </p>
                  </blockquote>

                  <div className="review-author">
                    <img
                      className="review-author-image"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png"
                      alt=""
                    />
                    <div className="review-author-details">
                      <p className="review-author-name">Michael Brown</p>
                      <p className="review-author-role">DigFood Blogger</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group review-card">
                <div className="review-card-overlay"></div>
                <div className="review-card-content">
                  <div className="review-stars">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        className="review-star-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="review-text">
                    <p>
                      “This cafe is my happy place! The coffee is rich and
                      flavorful, and the ambiance is perfect for relaxing or
                      working.”
                    </p>
                  </blockquote>

                  <div className="review-author">
                    <img
                      className="review-author-image"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png"
                      alt=""
                    />
                    <div className="review-author-details">
                      <p className="review-author-name">Sarah Johnson</p>
                      <p className="review-author-role">Freelance Writer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
