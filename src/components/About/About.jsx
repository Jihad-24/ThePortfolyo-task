import useUserData from "../../Hook/useUserData";

const About = () => {
  const userData = useUserData();
  //   console.log(userData?.about);
  const setData = userData?.about;

  return (
    <section>
      <h1 className="heading" data-aos="fade-up">
        <span>biography</span>
      </h1>
      <div className="biography">
        <p data-aos="fade-up">{setData?.description}</p>
        <div className="bio ">
          <h3 data-aos="zoom-in" className="bouce-tech">
            <span>Name : </span>
            {setData?.name}
          </h3>
          <h3 data-aos="zoom-in" className="bouce-tech">
            <span>Email : </span> {setData?.contactEmail}
          </h3>
          <h3 data-aos="zoom-in" className="bouce-tech">
            <span>Address : </span> {setData?.address}
          </h3>
          <h3 data-aos="zoom-in" className="bouce-tech">
            <span>Phone : </span>
            {setData?.phoneNumber}
          </h3>
          <h3 data-aos="zoom-in" className="bouce-tech">
            <span>Age : </span>25 Years old
          </h3>
          <h3 data-aos="zoom-in" className="bouce-tech">
            <span>Experience : </span>
            {setData?.exp_year} Years
          </h3>
        </div>
        <div className="resume">
          <a className="btn" data-aos="fade-up">
            See Resume
          </a>
          <a className="btn" data-aos="fade-up">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
