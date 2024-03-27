import { useEffect } from "react";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";

function App() {
  useEffect(() => {
    const menu = document.querySelector("#menu-btn");
    const header = document.querySelector(".header");

    const handleMenuClick = () => {
      menu.classList.toggle("fa-times");
      header.classList.toggle("active");
      document.body.classList.toggle("active");
    };

    const handleScroll = () => {
      if (window.innerWidth < 991) {
        menu.classList.remove("fa-times");
        header.classList.remove("active");
        document.body.classList.remove("active");
      }
      document.querySelectorAll("section").forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
          document.querySelectorAll(".header .navbar a").forEach((links) => {
            links.classList.remove("active");
            document
              .querySelector(".header .navbar a[href*=" + id + "]")
              .classList.add("active");
          });
        }
      });
    };

    menu.onclick = handleMenuClick;
    window.onscroll = handleScroll;

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        {/* header section starts here */}
        <SideNav />
        {/* header section ends here */}
        {/* hero section starts */}
        <section className="home" id="home">
          <div className="image">
            <img src="Image/IMP.png" alt data-aos="fade-right" />
          </div>
          <div className="content">
            <h3 data-aos="fade-up">Hi, I am Jihad Hasan</h3>
            <span style={{ color: "white" }} data-aos="fade-up">
              Full-Stack web Developer
            </span>
            <p data-aos="fade-up">
              The stack I work on in web development is MERN Stack. You can hire
              me as fron-end developer, back-end developer or full-stack
              developer
            </p>
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
        {/* hero section ends */}
        {/* about section starts here */}
        <section className="about" id="about">
          <h1 className="heading" data-aos="fade-up">
            <span>biography</span>
          </h1>
          <div className="biography">
            <p data-aos="fade-up">
              Hi, My name is Jihad Hasan i am a full stack developer developer
              from bangladesh. The stack I work on in web development is MERN
              Stack.
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
          <div className="skills">
            <h1 className="heading" data-aos="fade-up">
              <span>Skills</span>
            </h1>
            <div className="progress">
              <div className="bar" data-aos="fade-left">
                <h3>
                  <span>HTML</span>
                  <span>100%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-right">
                <h3>
                  <span>CSS</span>
                  <span>100%</span>
                </h3>
              </div>
              {/* <div class="bar" data-aos="fade-left">
                   <h3><span>Bootstrap</span><span>100%</span></h3>
              </div> */}
              <div className="bar" data-aos="fade-right">
                <h3>
                  <span>Tailwind</span>
                  <span>100%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-left">
                <h3>
                  <span>JavaScript</span>
                  <span>80%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-right">
                <h3>
                  <span>ES6</span>
                  <span>80%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-left">
                <h3>
                  <span>JSON</span>
                  <span>80%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-right">
                <h3>
                  <span>Express</span>
                  <span>100%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-left">
                <h3>
                  <span>Node.js</span>
                  <span>80%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-right">
                <h3>
                  <span>MongoDB</span>
                  <span>80%</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="edu-exp">
            <h1 className="heading" data-aos="fade-up">
              <span>education &amp; experience</span>
            </h1>
            <div className="row">
              <div className="box-container">
                <h3 className="title" data-aos="fade-right">
                  Education
                </h3>
                <div className="box" data-aos="fade-right">
                  <span>2022-2026</span>
                  <h3>BBA (Bachelor of Business Administration)</h3>
                  <p>National University</p>
                  <p>Currently i am studing at national univarsity in BBA</p>
                </div>
                <div className="box" data-aos="fade-right">
                  <span>2019-2021</span>
                  <h3>HCS</h3>
                  <p>Metropoliton Colage, Dhaka</p>
                  <p>Completed my HSC from Metropoliton Colage, Dhaka</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about section ends here */}
        {/* services section starts here */}
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
        {/* services section end here */}
        {/* Projects section srarts here */}
        <section className="portfolio" id="portfolio">
          <h3 className="heading" data-aos="fade-up">
            <span>portfolio</span>
          </h3>
          <div className="box-container">
            <div className="box portfolio_box" data-aos="zoom-in">
              <img src="Image/Doctors-portal.png" alt />
              <h3>Fitness Tracker</h3>
              <div className="web_details">
                <a
                  href="https://fitness-tracker-jihad.netlify.app/"
                  className="btn_side"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Jihad-24/fitness-tracker"
                  className="btn_side"
                >
                  Clint
                </a>
                <a
                  href="https://github.com/Jihad-24/fitness-tracker-server"
                  className="btn_side"
                >
                  Server
                </a>
              </div>
            </div>
            <div className="box portfolio_box" data-aos="zoom-in">
              <img src="Image/capturra.png" alt />
              <h3>Job Hub</h3>
              <div className="web_details">
                <a href="https://job-hub-mine.netlify.app" className="btn_side">
                  Live
                </a>
                <a
                  href="https://github.com/Jihad-24/job-hub-client"
                  className="btn_side"
                >
                  Clint
                </a>
                <a
                  href="https://github.com/Jihad-24/job-hub-server"
                  className="btn_side"
                >
                  Server
                </a>
              </div>
            </div>
            <div className="box portfolio_box" data-aos="zoom-in">
              <img src="Image/genius.png" alt />
              <h3>Digital Dynamo</h3>
              <div className="web_details">
                <a
                  href="https://digital-dynamo-jihad.netlify.app/"
                  className="btn_side"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Jihad-24/digital-dynamo-client"
                  className="btn_side"
                >
                  Clint
                </a>
                <a
                  href="https://github.com/Jihad-24/digital-dynamo-server"
                  className="btn_side"
                >
                  Server
                </a>
              </div>
            </div>
            <div className="box portfolio_box" data-aos="zoom-in">
              <img src="Image/swap.png" alt />
              <h3>Learning Point</h3>
              <div className="web_details">
                <a
                  href="https://learning-point-j.netlify.app/"
                  className="btn_side"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Jihad-24/learning-point"
                  className="btn_side"
                >
                  Clint
                </a>
                <a
                  href="https://github.com/Jihad-24/learning-point"
                  className="btn_side"
                >
                  Server
                </a>
              </div>
            </div>
            <div className="box portfolio_box" data-aos="zoom-in">
              <img src="Image/code-corner.png" alt />
              <h3>Code Corner</h3>
              <div className="web_details">
                <a
                  href="https://course-registration-react.netlify.app/"
                  className="btn_side"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Jihad-24/my-course-registration"
                  className="btn_side"
                >
                  Clint
                </a>
                <a
                  href="https://github.com/Jihad-24/my-course-registration"
                  className="btn_side"
                >
                  Server
                </a>
              </div>
            </div>
            <div className="box portfolio_box" data-aos="zoom-in">
              <img src="Image/dragon-news.png" alt />
              <h3>Dragon News</h3>
              <div className="web_details">
                <a
                  href="https://react-dragon-news-auth.netlify.app/"
                  className="btn_side"
                >
                  Live
                </a>
                <a
                  href="https://github.com/Jihad-24/react-dragon-news-auth"
                  className="btn_side"
                >
                  Clint
                </a>
                <a
                  href="https://github.com/Jihad-24/react-dragon-news-auth"
                  className="btn_side"
                >
                  Server
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* projects section ends here */}
        {/* contact section start here */}
        <section className="contact" id="contact">
          <h1 className="heading" data-aos="fade-up">
            {" "}
            <span>contact me</span>{" "}
          </h1>
          <form id="contact-form" action method="post">
            <div className="flex">
              <input
                data-aos="fade-right"
                type="text"
                id="name"
                name="name"
                placeholder="enter your name"
                className="box"
                required
              />
              <input
                data-aos="fade-left"
                type="email"
                id="email"
                name="email"
                placeholder="enter your email"
                className="box"
                required
              />
            </div>
            <input
              data-aos="fade-up"
              type="number"
              min={0}
              id="number"
              name="number"
              placeholder="enter your number"
              className="box"
              required
            />
            <textarea
              data-aos="fade-up"
              id="message"
              name="message"
              className="box"
              required
              placeholder="enter your message"
              cols={30}
              rows={10}
              defaultValue={""}
            />
            <input
              type="submit"
              data-aos="zoom-in"
              defaultValue="send message"
              name="send"
              className="btn"
            />
          </form>
          <div className="box-container">
            <div className="box" data-aos="zoom-in">
              <i className="fas fa-phone" />
              <h3>phone</h3>
              <p>+880 164-520-2421</p>
            </div>
            <div className="box" data-aos="zoom-in">
              <i className="fas fa-envelope" />
              <h3>email</h3>
              <p>mdjihat0021@gmail.com</p>
            </div>
            <div className="box" data-aos="zoom-in">
              <i className="fas fa-map-marker-alt" />
              <h3>address</h3>
              <p>narayanganj-1411, Bangladesh</p>
            </div>
          </div>
        </section>
        {/* contect section ends here */}
        {/* footer section start here */}
        <div className="credit">
          {" "}
          © copyright @{/*?php echo date('Y'); ?*/} by <span>Jihad Hasan</span>
        </div>
        {/* footer section ends here */}
      </div>
    </>
  );
}

export default App;
