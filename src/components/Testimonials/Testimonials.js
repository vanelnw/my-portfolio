import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../Client";
import "./Testimonials.scss";
import quote from "../../assets/quote.png";
import { EffectCoverflow, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "swiper/css/scrollbar";

import Loader from "../Loadings/Loader";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const query = '*[_type == "testimonials"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
  }, []);

  return (
    <div id="testimonials" className="section testi">
      <div className="app__wrapper app__flex ">
        <h2 className="section-title-01">Testimonials</h2>
        <h2 className="section-title-02">Testimonials</h2>

        <h2 className="head-text">
          Clients always get Exceptional Work from me...
        </h2>
        {testimonials.length ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
            }}
            loop={true}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {testimonials?.map((testimonial, i) => (
              <SwiperSlide key={i}>
                <div className="testimonialBox">
                  <img src={quote} alt="quote" className="quote" />
                  <div className="content">
                    <p>{testimonial.feedback}</p>
                    <div className="details">
                      <div className="imgBox">
                        <img
                          src={urlFor(testimonial.imageUrl)}
                          alt={testimonial.name}
                        />
                      </div>
                      <h3>
                        {testimonial.name}
                        <br></br>
                        <span>{testimonial.company}</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Testimonials;
