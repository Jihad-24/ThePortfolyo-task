import { useEffect } from "react";
import "./App.css";
import SideNav from "./components/SideNav/SideNav";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/Skills/Skills";
import TimeLine from "./components/TimeLine/TimeLine";
import About from "./components/About/About";

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
        <SideNav />
       <Hero/>
        <section  className="about" id="about">
       <About/>
        <Skills/>
        <TimeLine/>
        </section>
       <Services/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
