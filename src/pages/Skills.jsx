
import { FaCode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { GiSkills } from "react-icons/gi";


const Skills = () => {
  return (
    <section id='skills'>
      <h5>Skills Set</h5>
      <h2>My <span>Skills</span></h2>
      <div className="container achievements__container">
        <div className="achievements__box">
          <div className="achievements-icon">
            <FaCode />
          </div>
          <div className="achieve-content">
            <h5>Programming Languages</h5>
            <p>
              Javascript | VB.Net | Database: MOngoDB | MySQL
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            <FaReact />
          </div>
          <div className="achieve-content">
            <h5>
              Frameworks and Technologies</h5>
            <p>
              React JS | React Native | Node JS | Express Js | HTML | CSS | WordPress
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            <MdBusinessCenter />
          </div>
          <div className="achieve-content">
            <h5>Entrepreneurial Skills</h5>
            <p>
              Business Development   |   Marketing   |   Coaching   | Consultation
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            <MdBusinessCenter />
          </div>
          <div className="achieve-content">
            <h5>Other Technical Skills</h5>
            <p>
              UI / UX   |   Graphic Designs   |   Teaching
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            <GiSkills />
          </div>
          <div className="achieve-content">
            <h5>
              Soft Skills</h5>
            <p>

              Soft Skills
              Leadership   |   Communication   |   Problem-solving   |   Team Collaboration
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
