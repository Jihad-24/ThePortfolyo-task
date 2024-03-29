import { useCallback, useEffect, useState } from "react";
import useUserData from "../../Hook/useUserData";

const Testimonial = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const userData = useUserData();
  //   console.log(userData?.testimonials);
  const filteredTestimonial = userData?.testimonials?.filter(
    (service) => service?.enabled === true
  );
  // console.log(filteredTestimonial);

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? filteredTestimonial?.length - 2 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === filteredTestimonial?.length - 2
          ? 0
          : currentSlider + 1
      ),
    [filteredTestimonial, setCurrentSlider]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider, nextSlider]);

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <section id="testimonials">
      <h3 className="heading" data-aos="fade-up">
        <span>Testimonials</span>
      </h3>

      <div className="max-w-full min-w-[300px] md:min-w-[350px]  mx-auto min-h-[250px] md:min-h-[350px] flex flex-row items-center justify-center text-center overflow-hidden gap-5 lg:gap-10 md:px-16">
        <div className="relative overflow-hidden">
          <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
            {/* arrow left */}
            <button
              onClick={prevSlider}
              className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="w-4 h-4 md:w-6 md:h-6 icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
              >
                {" "}
                <g strokeWidth="0"></g>{" "}
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>{" "}
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="black"
                    d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                  ></path>
                </g>
              </svg>
            </button>
            {/* arrow right */}
            <button
              onClick={nextSlider}
              className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
            >
              <svg
                viewBox="0 0 1024 1024"
                className="w-4 h-4 md:w-6 md:h-6 icon"
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                transform="rotate(180)"
              >
                {" "}
                <g strokeWidth="0"></g>{" "}
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>{" "}
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill="black"
                    d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex"
            style={{
              transform: `translateX(-${
                currentSlider * (isSmallScreen ? 100 : 50)
              }%)`,
            }}
          >
            {/* sliders */}
            {filteredTestimonial?.map((each, idx) => (
              <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
                <div className="min-h-[250px] md:min-h-[350px] p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)] md:space-y-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-10 h-10 text-slate-800 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed mb-6  text-2xl text-gray-500">
                    {each?.review}
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      className="w-20 h-20 rounded-full flex-shrink-0 object-cover object-center"
                      src={each?.image?.url}
                      alt="carousel ui"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className=" text-xl md:text-2xl font-medium text-gray-900">
                        {each.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {each?.position}
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
