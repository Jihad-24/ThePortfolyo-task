/* eslint-disable react/no-unescaped-entities */
import useUserData from "../../Hook/useUserData";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Services = () => {
  const userData = useUserData();
  // console.log(userData?.services);
  const filteredServices = userData?.services?.filter(
    (service) => service?.enabled === true
  );
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  // console.log(filteredServices);

  return (
    <section className="services" id="services">
      <h1 className="heading" data-aos="fade-up">
        <span>Services</span>
      </h1>
      <div className="direction pb-5 flex items-center justify-center gap-10">
        <p className="text-2xl lg:text-3xl font-medium text-green-600 ">Left</p>
        <i className="fas fa-arrow-left" />
        <p className="text-2xl lg:text-3xl font-medium text-green-700">
          {" "}
          Scrool{" "}
        </p>
        <i className="fas fa-arrow-right" />
        <p className="text-2xl lg:text-3xl font-medium text-green-600">
          {" "}
          Right
        </p>
      </div>
      <div className="box-container">
        <div ref={sliderRef} className="keen-slider">
          {filteredServices?.map((service) => (
            <div key={service?._id} className="box keen-slider__slide">
              <div className="regular-content">
                <img src={service?.image?.url} alt={service?.name} />
                <h3>{service?.name}</h3>
                <p>You can hire me for {service?.name}</p>
              </div>
              <div className="hover-content box flex flex-col px-10 items-center justify-center space-y-6">
                <h1 className="text-4xl font-extrabold">{service?.name}</h1>
                <p>{service?.desc}</p>
                <p className="font-extrabold"> {service?.charge}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
