import { FaCode } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { TbBuildingWarehouse } from "react-icons/tb";
import { SiCyberdefenders } from "react-icons/si";
import { TbMapPin2 } from "react-icons/tb";
import { MdSavings } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa6";
import './Experiences.css'




const Experience = () => {
  return (
    <section id="experience">
      <h5>Experience</h5>
      <h2>My <span>Experience</span></h2>
      <div className="container achievements__container">
        <div className="achievements__box">
          <div className="achievements-icon">
            <FaLaptopCode />
          </div>
          <div className="achieve-content">
            <h5>Backend Developer- Corextreme | Checcka App</h5>
            <p>
              Nodejs | Express Js | MongoDB | SupaBase
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            <FaCode />
          </div>
          <div className="achieve-content">
            <h5>Full Stack Web Developer - Mest | Generation Ghana</h5>
            <p>
              HTML | CSS | JavaScript | React | Tailwind | Nodejs | Express | MongoDB
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            <SiCyberdefenders />
          </div>
          <div className="achieve-content">
            <h5>
              Cyber Security Essentials - Educa8te Africa</h5>
            <p>

              Network   |   Linux   |  Python |   Active Directory <br />
              CyberSecurity Fundamentals and Introduction to LinkedIn
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            <TbBuildingWarehouse />
          </div>
          <div className="achieve-content">
            <h5>
              Ware House Manager-Opay Ghana</h5>
            <p>
              Developed an inventory management system using excel to retrieve about 1,567 stolen items.
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            <TbMapPin2 />
          </div>
          <div className="achieve-content">
            <h5>Retail Mapping Supervisor- MDC Africa| Guinesse Ghana</h5>
            <p>
              Coached team members through new or difficult workflows and
              Supervise team of 12 in gathering data, mapping and locating outlets accurately
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            <MdSavings />
          </div>
          <div className="achieve-content">
            <h5>GROW Project Supervisor - Pronet North</h5>
            <p>
              Trained and mentored 585 women in rural communities on savings and financial resilience.
              Increased financial status of women by 45% through the VSLA principles, record-keeping, and
              financial management.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
