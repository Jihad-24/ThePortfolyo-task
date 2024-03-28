import { useEffect, useState } from "react";
import useUserData from "../../Hook/useUserData";

const Services = () => {
  const userData = useUserData();
  const [pageNumber, setPageNumber] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const numberOfPages = Math.ceil(
    (userData?.services?.length || 0) / cardsPerPage
  );

  const updatePageNumber = (newPageNumber) => {
    if (newPageNumber > 0 && newPageNumber <= numberOfPages) {
      setPageNumber(newPageNumber);
    }
  };

  const indexOfLastCard = pageNumber * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = userData?.services?.slice(
    indexOfFirstCard,
    indexOfLastCard
  );

  return (
    <section className="services" id="services">
      <h1 className="heading" data-aos="fade-up">
        <span>Services</span>
      </h1>
      <div className="box-container">
        {currentCards?.map((service) => (
          <div key={service?._id} className="box" data-aos="zoom-in">
            {/* Regular content */}
            <div className="regular-content">
              <img src={service?.image?.url} alt={service?.name} />
              <h3>{service?.name}</h3>
              <p>You can hire me for {service?.name}</p>
            </div>
            {/* Hover content */}
            <div className="hover-content box flex flex-col px-10 items-center justify-center space-y-6">
              <h1 className="text-4xl font-extrabold">{service?.name}</h1>
              <p>{service?.desc}</p>
              <p className="font-extrabold">{service?.charge}</p>
            </div>
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
    </section>
  );
};

export default Services;
