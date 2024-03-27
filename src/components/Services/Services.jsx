const Services = () => {
  return (
    <section className="services" id="services">
      <h1 className="heading" data-aos="fade-up">
        <span>Services</span>
      </h1>
      <div className="box-container">
        <div className="box" data-aos="zoom-in">
          <img src="Image/Front-end.jpeg" alt />
          <h3>Front-end development</h3>
          <p>You can hire me for front-end development</p>
        </div>
        <div className="box" data-aos="zoom-in">
          <img src="Image/backend.png" />
          <h3>Back-End development</h3>
          <p>You can hire me for back-end development</p>
        </div>
        <div className="box" data-aos="zoom-in">
          <img src="Image/MERN.png" alt />
          <h3>MERN Stack development</h3>
          <p>You can hire me for full-stack development</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
