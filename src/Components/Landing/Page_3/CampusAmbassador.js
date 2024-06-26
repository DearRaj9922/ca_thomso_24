import React from 'react';
import './CampusAmbassador.css';
import backgroundImage from './page_3.png'; 
import charminar from './4 minar@3x@3x.png'; 
import temple from './temple@3x.png'; 
import scooterGirl from './scooter girl.png';
import vector1 from './Vector 1.svg';
import vector3 from './Vector 3.svg';
import bikeSmoke from './bike smoke 1.svg';
import line2 from './Line 2.svg';
import line3 from './Line 3.svg';
import line4 from './Line 4.svg';
import line5 from './Line 5.svg';
import line6 from './Line 6.svg';
import line7 from './Line 7.svg';
import line8 from './Line 8.svg';

const CampusAmbassador = () => {
    return (
        <div className="campus-ambassador-container">
            <img src={backgroundImage} alt="Background" className="background-image" />
            <div className="content">
                <h1>What is Campus Ambassador Program?</h1>
                <p>
                    As part of the student campus ambassador program, THOMSO offers students the chance to
                    represent and promote the organization at their colleges and universities. Their
                    responsibilities comprise developing our presence and promoting THOMSO events among students
                    and educators by serving as a link between their colleges and us.
                </p>
                <div className="images">
                    <img src={charminar} alt="Charminar" className="image-charminar" />
                    <img src={temple} alt="Temple" className="image-temple" />
                    <img src={scooterGirl} alt="Scooter Girl" className="image-scooter" />
                </div>
                <img src={vector1} alt="Vector 1" className="vector1" />
                <img src={vector3} alt="Vector 3" className="vector3" />
                <img src={bikeSmoke} alt="Bike Smoke" className="bike-smoke" />
                <img src={line2} alt="Line 2" className="line2" />
                <img src={line3} alt="Line 3" className="line3" />
                <img src={line4} alt="Line 4" className="line4" />
                <img src={line5} alt="Line 5" className="line5" />
                <img src={line6} alt="Line 6" className="line6" />
                <img src={line7} alt="Line 7" className="line7" />
                <img src={line8} alt="Line 8" className="line8" />
            </div>
        </div>
    );
}

export default CampusAmbassador;
