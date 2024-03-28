import useUserData from "../../Hook/useUserData";

const Services = () => {
  const userData = useUserData();
  // console.log(userData?.services);
  const filteredServices = userData?.services?.filter(
    (service) => service?.enabled === true
  );

  console.log(filteredServices);

  return (
    <section className="services" id="services">
      <h1 className="heading" data-aos="fade-up">
        <span>Services</span>
      </h1>
      <div className="box-container">
        {filteredServices?.map((service) => (
          <div key={service?._id} className="box" data-aos="zoom-in">
            {/* Regular content */}
            <div className="regular-content">
              <img src={service?.image?.url} alt={service?.name} />
              <h3>{service?.name}</h3>
              <p>You can hire me for {service?.name}</p>
            </div>
            {/* Hover content */}
            <div className="hover-content box flex flex-col px-10 items-center justify-center space-y-6">
              <h1 className="text-4xl font-extrabold">{service?.name}</h1>
              <p>{service?.desc}</p>
              <p className="font-extrabold"> {service?.charge}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
