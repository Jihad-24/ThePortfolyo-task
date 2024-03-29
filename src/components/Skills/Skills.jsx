import { useEffect, useState } from "react";
import useUserData from "../../Hook/useUserData";

const Skills = () => {
  const userData = useUserData();
  const [pageNumber, setPageNumber] = useState(5);
  const [cardsPerPage, setCardsPerPage] = useState(10);
  //   console.log(userData?.skills);
  const filteredSkills = userData?.skills?.filter(
    (skill) => skill?.enabled === true
  );
  // console.log(filteredSkills);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCardsPerPage(10);
      } else {
        setCardsPerPage(5);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const numberOfPages = Math.ceil((filteredSkills?.length || 0) / cardsPerPage);

  const updatePageNumber = (newPageNumber) => {
    if (newPageNumber > 0 && newPageNumber <= numberOfPages) {
      setPageNumber(newPageNumber);
    }
  };

  const indexOfLastCard = pageNumber * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredSkills?.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <div className="skills flex flex-col" id="skills">
      <h1 className="heading" data-aos="fade-up">
        <span>Skills</span>
      </h1>
      <div className="progress">
        {currentCards?.map((skill) => (
          <div key={skill?._id} className="bar " data-aos="fade-right">
            <h3 className="bouce-tech">
              <img src={skill?.image?.url} alt={skill?.name} />
              <span>{skill?.name}</span>
              <span>{skill?.percentage}%</span>
            </h3>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex select-none justify-center items-center gap-3 mt-10">
        {/* left arrow */}
        <div
          onClick={() => updatePageNumber(pageNumber - 1)}
          className={`hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-white px-1 py-1 rounded-full ${
            pageNumber === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <svg
            className="w-12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 7L10 12L15 17"
              stroke="#0284C7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center gap-2 bg-white p-2 shadow-lg rounded-full">
          {[...Array(numberOfPages).keys()].map((item) => (
            <div
              onClick={() => setPageNumber(item + 1)}
              className={`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-5 ${
                pageNumber === item + 1 ? "bg-sky-500 text-white" : "bg-white"
              } border-sky-300 font-semibold text-gray-700 py-5 rounded-full`}
              key={item}
            >
              {item + 1}
            </div>
          ))}
        </div>
        {/* right arrow */}
        <div
          onClick={() => updatePageNumber(pageNumber + 1)}
          className={`hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-white px-1 py-1 rounded-full ${
            pageNumber === numberOfPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <svg
            className="w-12"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 7L15 12L10 17"
              stroke="#0284C7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Skills;
