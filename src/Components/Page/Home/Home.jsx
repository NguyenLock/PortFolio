import React from "react";
import { Link } from 'react-router-dom';
import './Home.scss';

function Home() {
    return (
       <section id="home" className="home">
        <div className="content">
            <h3>Hi, Everyone!</h3>
            <h1> I'm <span>John Marston(Nguyen Tan Loc)</span></h1>
            <h3>FrontEnd Developer</h3><br/>
            <p>Newbie FrontEnd Developer with 1 Year Experience<br/>
            Practice to create a website and improve my frontend Skills.
            </p>
        </div>
        <div className="image-container">
            <img src="../assest/img/deptrai.jpg" alt="deptraidien"></img>
        </div>

       </section>
    )
}
export default Home;