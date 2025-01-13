import './About.css';
import profile from '../assets/Image1.jpg';
import myPDF from '../assets/Felix_Atoma_Resume (3).pdf'; // Ensure file exists

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__img">
          <img src={profile} alt="Profile of Felix Atoma" />
        </div>
        <div className="about__content">
          <h2>About <span>Me</span></h2>
          <h4>Web Developer, Translator, and Instructor</h4>
          <p>
            Passionate about technology with a growth mindset to persevere in the technology field, I have honed my skills in building functional websites using the latest industry tools. 
            In addition to being a web developer, I am also a French and English translator with expertise in providing high-quality language services. 
            As a dedicated instructor, I teach French as a second language and English as a second language, helping learners achieve their linguistic goals.
          </p>
          <a href={myPDF} download className="btn read-more__btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;
