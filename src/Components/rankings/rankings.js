import React from 'react';
import './rankings.css';

import profileBackgroundDesktop from '../Assets/profilebackground.webp';
import profileBackgroundMobile from '../Assets/profilemobbg.webp';
import avatarImage from '../Assets/avatar1.webp';

// Background images for desktop
import desktopBackground1 from '../Assets/Group 48132-2.webp';
import desktopBackground2 from '../Assets/Group 48132.webp';
import desktopBackground3 from '../Assets/Group 48132-1.webp';

// Background images for mobile
import mobileBackground1 from '../Assets/Rectangle 4251.webp';
import mobileBackground2 from '../Assets/Rectangle 4249.webp';
import mobileBackground3 from '../Assets/Rectangle 4250.webp';

const ScoreBox = ({ rank, score, referrals, name, institute, avatar, background }) => {
    return (
        <div className="score-box" style={{ backgroundImage: `url(${background})` }}>
            <div className="avatar">
                <img src={avatar} alt="Avatar" />
            </div>
            <div className="info">
                <h2>{name}</h2>
                <p>{institute}</p>
            </div>
            <div className="stats">
                <div>
                    <h3>{score}</h3>
                    <p>Score</p>
                </div>
                <div>
                    <h3>{referrals}</h3>
                    <p>Referrals</p>
                </div>
            </div>
            <div className="position">
                <h1>{rank}</h1>
            </div>
        </div>
    );
};

const Rankings = () => {
    const isMobile = window.innerWidth <= 768;
    const backgrounds = isMobile 
        ? [mobileBackground1, mobileBackground2, mobileBackground3]
        : [desktopBackground1, desktopBackground2, desktopBackground3];

    return (
        <div className="background">
            <div className="score-container">
                <ScoreBox 
                    rank="1st" 
                    score="312" 
                    referrals="15" 
                    name="Dhruv Bhatia" 
                    institute="Indian Institute of Technology Roorkee" 
                    avatar={avatarImage} 
                    background={backgrounds[0]}
                />
                <ScoreBox 
                    rank="2nd" 
                    score="280" 
                    referrals="10" 
                    name="Dhruv" 
                    institute="IIT ROORKEE" 
                    avatar={avatarImage} 
                    background={backgrounds[1]}
                />
                <ScoreBox 
                    rank="3rd" 
                    score="260" 
                    referrals="8" 
                    name="Dhruv" 
                    institute="Indian Institute of Technology Roorkee" 
                    avatar={avatarImage} 
                    background={backgrounds[2]}
                />
            </div>
        </div>
    );
};

export default Rankings;
