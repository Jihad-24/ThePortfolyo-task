
const Skills = () => {
    return (
        <div className="skills" id="skills">
            <h1 className="heading" data-aos="fade-up">
              <span>Skills</span>
            </h1>
            <div className="progress">
              <div className="bar" data-aos="fade-left">
                <h3>
                  <span>HTML</span>
                  <span>100%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-right">
                <h3>
                  <span>CSS</span>
                  <span>100%</span>
                </h3>
              </div>
              {/* <div class="bar" data-aos="fade-left">
                   <h3><span>Bootstrap</span><span>100%</span></h3>
              </div> */}
              <div className="bar" data-aos="fade-right">
                <h3>
                  <span>Tailwind</span>
                  <span>100%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-left">
                <h3>
                  <span>JavaScript</span>
                  <span>80%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-right">
                <h3>
                  <span>ES6</span>
                  <span>80%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-left">
                <h3>
                  <span>JSON</span>
                  <span>80%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-right">
                <h3>
                  <span>Express</span>
                  <span>100%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-left">
                <h3>
                  <span>Node.js</span>
                  <span>80%</span>
                </h3>
              </div>
              <div className="bar" data-aos="fade-right">
                <h3>
                  <span>MongoDB</span>
                  <span>80%</span>
                </h3>
              </div>
            </div>
          </div>
    );
};

export default Skills;