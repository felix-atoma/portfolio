import "./achievements.css"
import { TbBulbFilled } from "react-icons/tb";
import { IoRocket } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import { VscGraphLine } from "react-icons/vsc";

const Achievements = () => {
  return (
    <section id="achievement">
      <h5>Achievements</h5>
      <h2>Recent <span>Achievements</span></h2>
      <div className="container achievements__container">
        <div className="achievements__box">
          <div className="achievements-icon">
            <TbBulbFilled />
          </div>
          <div className="achieve-content">
            <h5>Innovative Solutions</h5>
            <p>
              Pioneered the founding of Tinkcode Africa, a coding hub that empowers youth with programming and basic computer skills in the rural areas.This project aims to bridging the tech gap in rural areas and empowering them for future opportunities.
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            <IoRocket />
          </div>
          <div className="achieve-content">
            <h5>Innovative Solutions</h5>
            <p>
              Developed a digital agency website to provide solutions for clients seeking for digital solutions . Services includes web design, graphic designs, SEO Optimizations...
            </p>
          </div>
        </div>
        <div className="achievements__box">
          <div className="achievements-icon">
            <RiTeamFill />
          </div>
          <div className="achieve-content">
            <h5>Team Leadership and Mentorship</h5>
            <p>
              Successfully led and mentored cross-functional teams and individuals fostering a collaborative environment that resulted in efficient project delivery.
            </p>
          </div>
        </div>
        {/* <div className="achievements__box">
          <div className="achievements-icon">
            < VscGraphLine />
          </div>
          <div className="achieve-content">
            <h5>Business Growth</h5>
            <p>
              As an entrepreneur, I grew Connect Solutions Ghana from a startup to a force in the software development industry in Ghana.
            </p>
          </div>
        </div> */}
      </div>
    </section >
  )
}

export default Achievements
