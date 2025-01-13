import "./home.css";
// import video from '../../assets/video.mp4';
import { TypeAnimation } from 'react-type-animation';
import HomeData from '../components/HomeData'; // Correct import
// import About from "./About";

const Home = () => {
  return (
    <section id="home">
      <div className="container home__container">
        <div className="left__container">
          <p className="intro_p">Hello I'm</p>
          <h2>Atoma <span>Felix</span></h2>
          <div className="animated_text">
            <p>I am </p>
            <TypeAnimation
              sequence={[
                // Type animation for multiple roles
                ' a French & English Translator',
                1000,
                ' a Web Developer',
                1000,
                ' a Freelancer',
                1000,
                ' a French as Second Language Instructor',
                1000,
                ' an English as Second Language Instructor',
                1000,
              ]}
              speed={40}
              style={{ fontSize: '3em', fontFamily: "Righteous", fontWeight: "600" }}
              repeat={Infinity}
            />
          </div>
          <p className="home-text">
            A dedicated professional with a strong foundation in modern web technologies, 
            specializing in creating dynamic, responsive, and user-friendly web applications. 
            I am passionate about delivering high-quality solutions as a French & English translator, 
            and as a language instructor, teaching French and English as second languages.
            Let's build something great together.
          </p>
          <div className="btn__container">
            <button className="btn"><a href="#contact">Hire Me</a></button>
            <button className="btn btn__white"><a href="#contact">Let's Collaborate</a></button>
          </div>
        </div>
        <div className="home__right-profile">
          {/* <video src={video} loop={Infinity} autoPlay={true} width="100%" controls={false} /> */}
        </div>
        <div className="home__socials">
          {HomeData.map(item => (
            <a href={item.link} key={item.id}>{item.icon}</a>
          ))}
        </div>
      </div>
      {/* <About/> */}
    </section>
  );
}

export default Home;
