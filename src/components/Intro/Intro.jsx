import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkdin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import mayssa from '../../img/mayssa.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Salut! c'est </span>
                    <span>BEN JOUD Mayssa</span>
                    <span>Je suis une étudiante diplômée en licence en 
                        science informatique spécialité Génie logiciel 
                        et système d'information à l'ISIM de Monastir
                        et encore je continue le cycle d'ingénieur à l'ESPRIT</span>
                </div>
                <div className="i-icons">
                    <a href="https://github.com/mayssabj"><img src={Github} alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/ben-joud-mayssa-89b22722b/"><img src={Linkdin} alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/mayssa_ben_joud/?hl=fr"><img src={Instagram} alt="Instagram" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="Vector1" />
                <img src={Vector2} alt="Vector2" />
                <img src={mayssa} alt="Mayssa" />
                <img src={glassesimoji} alt="Glasses Emoji" />
                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={Crown} text1='Web' text2='Developer'/>
                </div>
                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image={thumbup} text1='Cloud' text2='Computing'/>
                </div>
                <div className="blur" style={{backgroundColor: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
            </div>
        </div>
    );
}

export default Intro;
