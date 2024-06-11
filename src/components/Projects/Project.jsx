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
            <spane> Mes super </spane>
            <spane>projets </spane>
            <spane> Pour plus d'information
                 <br/> telecharger mon CV</spane>
                 <a href={Resume} download><button className="button s-button">Telecharger CV</button></a>
                 <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>
            

            

            <div className="cards">

           <div style={{left:'13rem'}}>
            <a href="https://github.com/mayssabj/template.git">
            <Card emoji = {HeartEmoji} 
            heading = {"Projet Fin d'Etude (PFE) "} 
            detail = {"Développement d'une application web et mobile (HTML , CSS , CORDOVA)"}
            />
            </a>
           </div>


           <div style={{top:"3rem", left:'-1rem'}}>
            <a href="https://github.com/mayssabj/desktopApp.git">
            <Card emoji = {Glasses} 
            heading = {"Projet Intégré "} 
            detail = {"Développement d’une application Desktop (javafx,apimovie)"}
            />
            </a>
           </div>
           <div style={{top:"19rem", right:'-10rem'}}>
            <a href="https://github.com/mayssabj/project_pathe_home.git">
            <Card emoji = {Humble} 
            heading = {"Small App Movie "} 
            detail = {"Développement d’une application De movie (react,Movie Database API)"}
            />
            </a>
           </div>
           <div style={{ bottom:'36rem' ,left:'27rem'}}>
           
            <Card emoji = {Humble} 
            heading = {"Small Mobile App "} 
            detail = {"Développement d’une application Mobile avec flutterFlow"}
            />
           </div>

           <div style={{top:"12rem", left:'27rem'}}>
           <Card emoji = {Glasses} 
            heading = {"Stage d'été "} 
            detail = {"Développement d'un site web E-Commerce (Laravel7,laragon)"}
            />
           </div>
           <div style={{top:"3rem", left:'41rem'}}>
            <a href="https://github.com/wassim-triki/pidev-web.git">
            <Card emoji = {HeartEmoji} 
            heading = {"Projet Intégré "} 
            detail = {"Développement d’une application web (Symfony,mysql)"}
            />
            </a>
           </div>
           <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
           

            </div>

        </div>
        
       )
}
export default Project 