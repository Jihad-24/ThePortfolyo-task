import { useMemo, useState } from "react";
import useUserData from "../../Hook/useUserData";
import Modal from "./Modal";

const Projects = () => {
  const [openModal, setOpenModal] = useState(null);
  const userData = useUserData();
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedTech, setSelectedTech] = useState(null);

  const AllTechStack = userData?.projects?.filter(
    (project) => project?.enabled === true
  );

  const filteredProjects = useMemo(() => {
    return userData?.projects?.filter(
      (project) =>
        project?.enabled === true &&
        (!selectedTech || project?.techStack?.includes(selectedTech))
    );
  }, [userData, selectedTech]);

  const displayedProjects = filteredProjects?.slice(0, displayCount);

  const handleTechClick = (tech) => {
    if (tech !== selectedTech) {
      setSelectedTech(tech === "All" ? null : tech);
    }
  };

  console.log("filteredProjects", filteredProjects);
  return (
    <section className="portfolio" id="portfolio">
      <h3 className="heading" data-aos="fade-up">
        <span>portfolio</span>
      </h3>
      <div className="text-xl md:text-2xl flex flex-wrap justify-center items-center mb-10 font-medium">
        {Array.from(
          new Set([
            "All",
            ...(AllTechStack
              ? AllTechStack.flatMap((project) => project?.techStack)
              : []),
          ])
        )
          .filter((tech, index, self) => self.indexOf(tech) === index)
          .slice(0, 5)
          .concat(
            Array.from(
              new Set([
                "All",
                ...(AllTechStack
                  ? AllTechStack.flatMap((project) => project?.techStack)
                  : []),
              ])
            )
              .filter((tech, index, self) => self.indexOf(tech) === index)
              .slice(8)
          )
          .map((tech, index) => (
            <div
              key={index}
              className={`mr-5 mb-5 cursor-pointer ${
                selectedTech === tech ||
                (selectedTech === "All" && tech === "All")
                  ? "text-green-500 border-b-2 border-green-500"
                  : ""
              }`}
              onClick={() => handleTechClick(tech)}
            >
              {tech}
            </div>
          ))}
      </div>

      <div className="box-container">
        {displayedProjects?.map((project) => (
          <div
            key={project?._id}
            className="box portfolio_box"
            data-aos="zoom-in"
          >
            <img src={project?.image?.url} alt={project?.title} />
            <div className="flex gap-3 text-center justify-center">
              {project?.techStack?.map((tec) => (
                <h4 className="text-2xl mt-3" key={tec}>
                  {tec},
                </h4>
              ))}
            </div>
            <h3>{project?.title}</h3>
            <div className="web_details">
              <a href={project?.liveurl} className="btn_side" target="_blank">
                Live
              </a>
              <a href={project?.githuburl} className="btn_side" target="_blank">
                Client
              </a>
              <button
                onClick={() => setOpenModal(project?._id)}
                className="btn_side"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      {filteredProjects?.length > displayCount && (
        <div className="effectbtn flex justify-center items-center text-center mt-10 rounded-full">
          <button
            className="relative h-20 w-40 origin-bottom transform rounded-full border-2 border-gray-700 text-2xl text-green-700 overflow-hidden "
            onClick={() => setDisplayCount(displayCount + 6)}
          >
            Show More
            <span className="absolute inset-0 bg-green-400 origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100 text-center flex justify-center items-center">
              Show More
            </span>
          </button>
        </div>
      )}
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          openModal={openModal}
          project={filteredProjects.find(
            (project) => project._id === openModal
          )}
        />
      )}
    </section>
  );
};

export default Projects;

// const [searchQuery, setSearchQuery] = useState("");
// if (searchQuery) {
//   const searchTerms = searchQuery.toLowerCase().split(" ");
//   const techStackFilteredProjects = filteredProjects.filter((project) =>
//     searchTerms.every((term) =>
//       project?.techStack?.some((stack) => stack.toLowerCase().includes(term))
//     )
//   );

//   const sequenceFilteredProjects = filteredProjects.filter((project) => {
//     if (!isNaN(searchQuery)) {
//       return project?.sequence === parseInt(searchQuery);
//     } else {
//       const sequenceNumbers = searchQuery
//         .split(" ")
//         .map((num) => parseInt(num.trim()))
//         .filter((num) => !isNaN(num));
//       return sequenceNumbers.includes(project?.sequence);
//     }
//   });

//   filteredProjects = [
//     ...techStackFilteredProjects,
//     ...sequenceFilteredProjects,
//   ];
// }

{
  /* <div className="pb-5">
        <input
          className="search"
          data-aos="zoom-in"
          type="text"
          placeholder="Search by techStack or sequence number"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div> */
}
