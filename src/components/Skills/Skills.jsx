import useUserData from "../../Hook/useUserData";

const Skills = () => {
  const userData = useUserData();
  //   console.log(userData?.skills);
  const filteredSkills = userData?.skills?.filter(
    (skill) => skill?.enabled === true
  );
//   console.log(filteredSkills);
  return (
    <div className="skills" id="skills">
      <h1 className="heading" data-aos="fade-up">
        <span>Skills</span>
      </h1>
      <div className="progress">
        {filteredSkills?.map((skill) => (
          <div key={skill?._id} className="bar bouce-tech" data-aos="fade-right">
            <h3>
            <img src={skill?.image?.url} alt={skill?.name} />
              <span>{skill?.name}</span>
              <span>{skill?.percentage}%</span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
