import "../../App.css";
const TimeLine = () => {
  return (
    <div className="edu-exp" id="timeline">
      <h1 className="heading" data-aos="fade-up">
        <span>education &amp; experience</span>
      </h1>
      <div className="row">
        <div className="box-container">
          <h3 className="title" data-aos="fade-right">
            Education
          </h3>
          <div className="box" data-aos="fade-right">
            <span>2022-2026</span>
            <h3>BBA (Bachelor of Business Administration)</h3>
            <p>National University</p>
            <p>Currently i am studing at national univarsity in BBA</p>
          </div>
          <div className="box" data-aos="fade-right">
            <span>2019-2021</span>
            <h3>HCS</h3>
            <p>Metropoliton Colage, Dhaka</p>
            <p>Completed my HSC from Metropoliton Colage, Dhaka</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
