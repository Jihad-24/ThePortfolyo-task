/* eslint-disable react/no-unescaped-entities */
import "animate.css";
import { Typewriter } from "react-simple-typewriter";
import useUserData from "../../Hook/useUserData";

const Hero = () => {
  const userData = useUserData();
  //   console.log(userData?.about);
  const setData = userData?.about;
  //   console.log(setData?.alternateAvatars[0]?.url);

  const title = setData?.title;
  const words = title ? title.split(" ") : [];
  const midpoint = Math.ceil(words.length / 2);
  const firstHalf = words.slice(0, midpoint);
  const lastHalf = words.slice(midpoint);

  const jobColors = {
    [firstHalf[0]]: "#4c8df5",
    [lastHalf[0]]: "#6ab04c",
  };
  const job = [`${title} />`];

  return (
    <div
      id="home"
      className=" flex flex-col lg:flex-row max-w-[1200px] mx-auto py-20 lg:py-44 text-white"
    >
      <div className="lg:w-[65%] lg:order-1 order-2 px-10 flex flex-col">
        <div className="lg:text-[48px]  banner-text sm:text-[35px] text-[28px] font-bold mb-8">
          <h2 className="text-white">
            {"<"} Hi 👋, <br /> My name is <br />
            <span className="super-text font-bold my-element ">
              {setData?.name}
            </span>
            <p className=" text-white ">
              I'm{" "}
              <span className="font-bold tech-dev ">
                <Typewriter
                  words={job}
                  loop={20}
                  cursor
                  cursorColor={jobColors[job]}
                />
              </span>
            </p>
          </h2>
        </div>
        <div className="fronted ">
          <a
            href="#"
            className="btn-resume bg-blue-600 mt-6 border-blue-500 border-2 hover:bg-[#232D3F] rounded-[24px]  text-white font-bold lg:py-6 py-4 lg:px-10 px-6 text-xl md:text-2xl  lg:text-3xl focus:outline-none focus:shadow-outline inline-block none"
            style={{ textDecoration: "none" }}
          >
            {"<"} Download Resume {"/>"}
          </a>
        </div>
      </div>

      <div className="lg:w-[35%] rounded-fulll lg:order-2 order-1    lg:flex justify-center mx-auto items-center relative">
        <img
          className=" rounded-full shadow-xl max-w-[250px]  lg:w-3/6 banner-img "
          src={
            setData?.avatar?.url
              ? setData?.avatar?.url
              : setData?.alternateAvatars[0]?.url
              ? setData?.alternateAvatars[0]?.url
              : "https://i.ibb.co/YZk5TJG/user.jpg"
          }
          alt=""
        />
      </div>
    </div>
  );
  //   <section className="home" id="home">
  //     <div className="image ">
  //       <img
  //         src={
  //           setData?.avatar?.url
  //             ? setData?.avatar?.url
  //             : setData?.alternateAvatars[0]?.url
  //             ? setData?.alternateAvatars[0]?.url
  //             : "https://i.ibb.co/YZk5TJG/user.jpg"
  //         }
  //         alt
  //         data-aos="fade-right"
  //       />
  //     </div>
  //     <div className="content">
  //     <h2>
  //        {'<'} Hi 👋, <br /> My name is <br />
  //         <span className="super-text font-bold my-element ">Mohammad Arif</span>
  //         <p className="  ">
  //           I'm{' '}
  //           <span className="font-bold tech-dev ">
  //               <Typewriter words={job} loop={20} cursor cursorColor={jobColors[job]} />
  //             </span>
  //         </p>

  //       </h2>
  //       <h3 data-aos="fade-up" className="bouce-techall">
  //         Hi, I am {setData?.name}
  //       </h3>
  //       <span className="bouce-tech text-white" data-aos="fade-up">
  //         {setData?.title}
  //       </span>
  //       <p data-aos="fade-up" className="bouce-tech">
  //         {setData?.subTitle}
  //       </p>
  //       <div className="resume">
  //         <a className="btn" data-aos="fade-up">
  //           See Resume
  //         </a>
  //         <a className="btn" data-aos="fade-up">
  //           Download Resume
  //         </a>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default Hero;
