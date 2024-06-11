import React from 'react'
import './Competance.css'

import competance from "../../img/competance.png"




const Competance = () => {
    return ( 
        <div className="Competances">
            <div className="mesCompetances">
            <spane>Mes Competances </spane>
                 
            </div>
            
            <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            <div className="c-right"> <img src={competance} alt="" /></div>
          
            

        </div>
  
        
       )
}
export default Competance 