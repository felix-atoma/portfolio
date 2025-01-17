import './Portfolio.css'

import immo from '../assets/immo.png'
import farm from '../assets/farm.png'
import grocery from '../assets/grocery.png'
import dopel from '../assets/dopel.jpg'
import nashma from '../assets/nashma.png'
import espc from '../assets/espc.png'
import { FaLink } from "react-icons/fa6";


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>Latest <span>Projects</span></h2>

      <div className="portfolio-content">
        <div className="row">
          <img src={dopel} alt="" />
          <div className="layer">
            <h2>
              A web app to create a  portfolio. A collaborated project by Team DOPEL still in progress
            </h2>
            <div className="link">
              <a href="https://dopel.netlify.app/"><FaLink /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={immo} alt="" />
          <div className="layer">
            <h2>
            Frontend team member on ImmoAsk, simplifying accommodation searches in Togo
            </h2>
            <div className="link">
              <a href="https://www.immoask.com/tg"><FaLink /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={farm} alt="" />
          <div className="layer">
            <h2>
            Frontend partner for FarmConnect Ghana, bridging farmers and customers for fresh, direct farm produce 
            </h2>
            <div className="link">
              <a href="https://farmconnectgh.netlify.app/"><FaLink /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={grocery} alt="" />
          <div className="layer">
            <h2>
            Redefining grocery shopping—an app that makes buying essentials seamless and effortless
            </h2>
            <div className="link">
              <a href="https://nashama.netlify.app/"><FaLink /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={nashma} alt="" />
          <div className="layer">
            <h2>
            Crafted Nashma Agribusiness website—empowering growth and innovation in agriculture with a dynamic online presence
            </h2>
            <div className="link">
              <a href="https://nashma-agribusness.netlify.app/"><FaLink /></a>
            </div>
          </div>
        </div>
        <div className="row">
          <img src={espc} alt="" />
          <div className="layer">
            <h2>
            Built Ecole St. Pierre Claver's website with online enrollment and teaching features.
            </h2>
            <div className="link">
              <a href="https://ecolestpierre.org/"><FaLink /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
