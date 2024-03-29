/* eslint-disable react/prop-types */

const Modal = ({ setOpenModal, project, openModal }) => {
  return (
    <div
      onClick={() => setOpenModal(null)}
      className={`fixed flex justify-center items-center z-[100] ${
        openModal ? "visible opacity-1" : "invisible opacity-0"
      } inset-0 backdrop-blur-sm bg-black/20 duration-100`}
    >
      <div
        onClick={(e_) => e_.stopPropagation()}
        className={`absolute w-4/5 lg:w-1/3 h-3.5/5 p-6 text-center bg-white drop-shadow-2xl rounded-lg ${
          openModal
            ? "translate-y-0 opacity-1 duration-300"
            : "translate-y-20 opacity-0 duration-150"
        }`}
      >
        <div className="space-y-3 flex flex-col justify-center items-center">
          <img className="" src={project?.image?.url} alt={project?.title} />
          <h2 className="text-2xl font-medium">{project?.title}</h2>
          <h6 className="font-normal text-center text-lg text-slate-700">
            {project?.description}
          </h6>
          <div className="flex flex-wrap items-center justify-center text-center gap-3 text-2xl">
            TechStack:{" "}
            {project?.techStack?.map((tec) => (
              <h3 className="text-2xl" key={tec}>
                {tec},
              </h3>
            ))}
          </div>
          <div className="flex gap-3 justify-evenly w-full">
            <a
              target="_blank"
              href={project?.liveurl}
              className="text-[#16BAC5] hover:text-white hover:bg-green-600 px-8 py-4 w-full border border-[#16BAC5] rounded-full text-xl"
            >
              Live
            </a>
            <a
              target="_blank"
              href={project?.githuburl}
              className="text-[#16BAC5] hover:text-white hover:bg-green-600 px-8 py-4 w-full border border-[#16BAC5] rounded-full text-xl"
            >
              GitHub
            </a>
          </div>
          <button
            onClick={() => setOpenModal(null)}
            className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-8 py-4 w-full border border-[#c51636] rounded-full text-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
