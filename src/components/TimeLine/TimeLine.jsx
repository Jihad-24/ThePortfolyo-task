import "../../App.css";
import useUserData from "../../Hook/useUserData";
const TimeLine = () => {
  const userData = useUserData();
//   console.log(userData?.timeline);
  const filteredTimeline = userData?.timeline?.filter(
    (timeline) => timeline?.forEducation === true && timeline?.enabled === true
  );

//   console.log(filteredTimeline);
  function convertDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="edu-exp" id="timeline">
      <h1 className="heading" data-aos="fade-up">
        <span>education &amp; experience</span>
      </h1>
      <div className="row">
        <div className="box-container">
          <h3 className="title" data-aos="fade-right">
            education &amp; experience
          </h3>
          {filteredTimeline?.map((timeline) => (
            <div key={timeline?._id} className="box" data-aos="fade-right">
              <span>
                {convertDate(timeline?.startDate)} -{" "}
                {convertDate(timeline?.endDate)}
              </span>
              <h3>{timeline?.jobTitle}</h3>
              <p>Company: {timeline?.company_name}</p>
              <p>{timeline?.summary}</p>

              <ul className="list-disc pl-8">
                {timeline?.bulletPoints?.map((point, index) => (
                  <li className="text-lg" key={index}>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
