import useUserData from "../../Hook/useUserData";

const Hero = () => {
  const userData = useUserData();
  console.log(userData?.about);
  const setData = userData?.about;
  //   console.log(setData?.alternateAvatars[0]?.url);
  return (
    <section className="home" id="home">
      <div className="image">
        <img
          src={
            setData?.avatar?.url
              ? setData?.avatar?.url
              : setData?.alternateAvatars[0]?.url ? setData?.alternateAvatars[0]?.url : 'https://i.ibb.co/YZk5TJG/user.jpg'
          }
          alt
          data-aos="fade-right"
        />
      </div>
      <div className="content">
        <h3 data-aos="fade-up">Hi, I am {setData?.name}</h3>
        <span style={{ color: "white" }} data-aos="fade-up">
          {setData?.title}
        </span>
        <p data-aos="fade-up">{setData?.subTitle}</p>
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

export default Hero;
