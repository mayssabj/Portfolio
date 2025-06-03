import React from 'react'
import './Project.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from "./resume.pdf"

const Project = () => {
  return (
    <div className="projects">
      <div className="mesprojets">
        <span>My awesome</span>
        <span>projects</span>
        <span>
          For more details,
          <br /> download my resume
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>

      <div className="cards">

        {/* Project 1: DevOps */}
        <div style={{ left: '13rem' }}>
       
           <Card
  emoji={HeartEmoji}
  heading={"Integrated DevOps Project"}
  detail={
    <>
      Private cloud with OpenStack + web app (Angular/Spring, MySQL) + deployment with Kubernetes.
      <br />
      <a href="https://github.com/Rayen123dev/Espr-eats_BackEnd" target="_blank" rel="noopener noreferrer">Backend</a> |{" "}
      <a href="https://github.com/Rayen123dev/Espr-eats_FrontEnd" target="_blank" rel="noopener noreferrer">Frontend</a>
    </>
  }
/>

         
        </div>

        {/* Project 2 */}
        <div style={{ top: "3rem", left: '-1rem' }}>
          <a href="https://github.com/mayssabj/template.git">
            <Card
              emoji={HeartEmoji}
              heading={"Graduation Project (PFE)"}
              detail={"Web and mobile app (HTML, CSS, Cordova)"}
            />
          </a>
        </div>

        {/* Project 3 */}
        <div style={{ top: "17rem", right: '-13rem' }}>
          <a href="https://github.com/mayssabj/desktopApp.git">
            <Card
              emoji={Glasses}
              heading={"Integrated Project"}
              detail={"Desktop app (JavaFX, Movie API)"}
            />
          </a>
        </div>

        {/* Project 4 */}
        <div style={{ bottom: '36rem', left: '27rem' }}>
          <a href="https://github.com/mayssabj/project_pathe_home.git">
            <Card
              emoji={Humble}
              heading={"Small Movie App"}
              detail={"Movie app (React, Movie Database API)"}
            />
          </a>
        </div>

        {/* Project 5 */}
        <div style={{ top: "11rem", left: '27rem' }}>
          <Card
            emoji={Humble}
            heading={"Mobile App"}
            detail={"Mobile app with FlutterFlow"}
          />
        </div>

        {/* Project 6 */}
        <div style={{ top: "3rem", left: '41rem' }}>
          <Card
            emoji={Glasses}
            heading={"Summer Internship"}
            detail={"E-Commerce website (Laravel 7, Laragon)"}
          />
        </div>

        {/* Project 7 */}
        <div style={{ top: "20rem", left: '-2rem' }}>
          <a href="https://github.com/wassim-triki/pidev-web.git">
            <Card
              emoji={HeartEmoji}
              heading={"Web Project"}
              detail={"Web app (Symfony, MySQL)"}
            />
          </a>
        </div>
         <div style={{ top: "20rem", left: '41rem' }}>
          <a href="https://github.com/TunNetCom/TunNetCom-SilkRoadErp">
            <Card
              emoji={Glasses}
              heading={"BI Project"}
              detail={"ERP app (.NET,Blazer,SQL Server)"}
            />
          </a>
        </div>

        {/* Decorative blur */}
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>

      </div>
    </div>
  )
}

export default Project
