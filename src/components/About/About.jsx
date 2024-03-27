const About = () => {
  return (
    <section>
      <h1 className="heading" data-aos="fade-up">
        <span>biography</span>
      </h1>
      <div className="biography">
        <p data-aos="fade-up">
          Hi, My name is Jihad Hasan i am a full stack developer developer from
          bangladesh. The stack I work on in web development is MERN Stack.
        </p>
        <div className="bio">
          <h3 data-aos="zoom-in">
            <span>Name : </span>JIhad Hasan
          </h3>
          <h3 data-aos="zoom-in">
            <span>Email : </span> mdjihat0021@gmail.com
          </h3>
          <h3 data-aos="zoom-in">
            <span>Address : </span> Dhaka Bangladesh
          </h3>
          <h3 data-aos="zoom-in">
            <span>Phone : </span>+880 164-520-2421
          </h3>
          <h3 data-aos="zoom-in">
            <span>Age : </span>21 Years old
          </h3>
          {/* <h3 data-aos="zoom-in"><span>Experience : </span>1+ Years</h3> */}
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
