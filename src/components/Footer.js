import * as React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';


const Footer = () => {
return(
    <div className="Footer">
      <div className='flexWrapper' style={{ justifyContent: 'space-evenly', alignItems:"center",background:"black" }}>
        <p className="NavBarText" >@ Paw Pals 2021</p>
        <p className="NavBarText">Paw Pals is soon to be a Registered Trademark of _______ LLC, All rights reserved.</p>
      
      </div>
    </div>
)}

export default Footer;