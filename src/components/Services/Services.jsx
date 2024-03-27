import useUserData from "../../Hook/useUserData";

const Services = () => {
  const userData = useUserData();
  console.log(userData?.services);
  const filteredServices = userData?.services?.filter(
    (service) => service?.enabled === true
  );

//   console.log(filteredServices);

  return (
    <section className="services" id="services">
      <h1 className="heading" data-aos="fade-up">
        <span>Services</span>
      </h1>
      <div className="box-container">
        {filteredServices?.map((service) => (
          <div key={service?._id} className="box bouce-tech" data-aos="zoom-in">
            <img src={service?.image?.url} alt={service?.name} />
            <h3>{service?.name}</h3>
            <p>You can hire me for {service?.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
