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
        className={`absolute w-4/5 lg:w-1/2 p-6 text-center bg-white drop-shadow-2xl rounded-lg ${
          openModal
            ? "translate-y-0 opacity-1 duration-300"
            : "translate-y-20 opacity-0 duration-150"
        }`}
      >
        <div className="space-y-3 flex flex-col justify-center items-center">
          <img src={project?.image?.url} alt={project?.title} />
          <h2>{project?.title}</h2>
          <h6 className="font-medium text-center text-slate-700">
            {project?.description}
          </h6>
          <div className="flex gap-3">
            TechStack:{" "}
            {project?.techStack?.map((tec) => (
              <h3 key={tec}>{tec}</h3>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              target="_blank"
              href={project?.liveurl}
              className="text-[#16BAC5] hover:text-white hover:bg-green-600 px-6 py-2 border border-[#16BAC5] rounded-full"
            >
              Live
            </a>
            <a
              target="_blank"
              href={project?.githuburl}
              className="text-[#16BAC5] hover:text-white hover:bg-green-600 px-6 py-2 border border-[#16BAC5] rounded-full"
            >
              GitHub
            </a>
          </div>
          <button
            onClick={() => setOpenModal(null)}
            className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
