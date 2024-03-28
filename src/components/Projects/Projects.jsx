import { useState } from "react";
import useUserData from "../../Hook/useUserData";
import Modal from "./Modal";

const Projects = () => {
  const [openModal, setOpenModal] = useState(null);
  const userData = useUserData();
  const [searchQuery, setSearchQuery] = useState("");

  let filteredProjects = userData?.projects?.filter(
    (project) => project?.enabled === true
  );

  if (searchQuery) {
    const searchTerms = searchQuery.toLowerCase().split(" " || ",");
    const techStackFilteredProjects = filteredProjects.filter((project) =>
      searchTerms.every((term) =>
        project?.techStack?.some((stack) => stack.toLowerCase().includes(term))
      )
    );

    const sequenceFilteredProjects = filteredProjects.filter((project) => {
      if (!isNaN(searchQuery)) {
        return project?.sequence === parseInt(searchQuery);
      } else {
        const sequenceNumbers = searchQuery
          .split(" " || ",")
          .map((num) => parseInt(num.trim()))
          .filter((num) => !isNaN(num));
        return sequenceNumbers.includes(project?.sequence);
      }
    });

    filteredProjects = [
      ...techStackFilteredProjects,
      ...sequenceFilteredProjects,
    ];
  }

  console.log(filteredProjects);
  return (
    <section className="portfolio" id="portfolio">
      <h3 className="heading" data-aos="fade-up">
        <span>portfolio</span>
      </h3>
      <div className="pb-5">
        <input
          className="search"
          data-aos="zoom-in"
          type="text"
          placeholder="Search by tech stack or sequence"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="box-container">
        {filteredProjects?.map((project) => (
          <div
            key={project?._id}
            className="box portfolio_box"
            data-aos="zoom-in"
          >
            <img src={project?.image?.url} alt={project?.title} />
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
