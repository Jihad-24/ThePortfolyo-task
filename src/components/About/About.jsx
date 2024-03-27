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
        <div className="bio">
          <h3 data-aos="zoom-in">
            <span>Name : </span>
            {setData?.name}
          </h3>
          <h3 data-aos="zoom-in">
            <span>Email : </span> {setData?.contactEmail}
          </h3>
          <h3 data-aos="zoom-in">
            <span>Address : </span> {setData?.address}
          </h3>
          <h3 data-aos="zoom-in">
            <span>Phone : </span>
            {setData?.phoneNumber}
          </h3>
          <h3 data-aos="zoom-in">
            <span>Age : </span>25 Years old
          </h3>
          <h3 data-aos="zoom-in"><span>Experience : </span>{setData?.exp_year} Years</h3>
        </div>
        <div className="resume">
          <a
            // href="Resume.pdf"
            // target="_blank"
            // rel="noopener noreferrer"
            className="btn"
            data-aos="fade-up"
          >
            See Resume
          </a>
          <a
            // href="Resume.pdf"
            // target="_blank"
            // rel="noopener noreferrer"
            className="btn"
            data-aos="fade-up"
            // download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
