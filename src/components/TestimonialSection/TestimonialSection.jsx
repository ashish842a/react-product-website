import React from 'react';

import Person1Img from "../../images/person-1.png"

const testimonials = [
  {
    id: 1,
    content: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
    author: "Maria Jones",
    position: "CEO, Co-Founder, XYZ Inc.",
    image: Person1Img,
  },
  // Add more testimonials as needed
];

function TestimonialSection() {
  return (
    <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title">Testimonials</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonial-slider-wrap text-center">

              <div id="testimonial-nav">
                <span className="prev" data-controls="prev"><span className="fa fa-chevron-left"></span></span>
                <span className="next" data-controls="next"><span className="fa fa-chevron-right"></span></span>
              </div>

              <div className="testimonial-slider">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">

                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>&ldquo;{testimonial.content}&rdquo;</p>
                          </blockquote>

                          <div className="author-info">
                            <div className="author-pic">
                              <img src={`${testimonial.image}`} alt={testimonial.author} className="img-fluid" />
                            </div>
                            <h3 className="font-weight-bold">{testimonial.author}</h3>
                            <span className="position d-block mb-3">{testimonial.position}</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
  );
}

export default TestimonialSection;
