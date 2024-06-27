import React from 'react';
import './CampusAmbassador.css';
import tree1 from './tree 1.webp';
import tree2 from './tree 2.webp';
import mathura from './mathura@3x 1.webp';
import kolkata1 from './kolkata@3x 1.webp';
import kolkata2 from './kolkata@3x 2.webp';
import bird1 from './purepng.com-gull-birdbirdsflyanimals-6315229364462xrbq 1.webp';
import bird2 from './purepng.com-gull-birdbirdsflyanimals-6315229364462xrbq 2 (1).webp';
import vector19 from './Vector 19.svg';
import vector18 from './Vector 18.svg';
import vector17 from './Vector 17.svg';
import vector16 from './Vector 16.svg';
import vector15 from './Vector 15.svg';
import vector11 from './Vector 11.svg';
import frame25 from './Frame 25.svg';
import ellipse15 from './Ellipse 15.svg';
import ellipse16 from './Ellipse 16.svg';
import ellipse17 from './Ellipse 17.svg';
import ellipse128 from './Ellipse 128.webp';
import ellipse129 from './Ellipse 129.webp';
import wall1 from './wall 1@3x 2.webp';
import wall2 from './wall 1@3x 3.webp';



const CampusAmbassador = () => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const textElements = textRef.current.children;
//     let delay = 0;

//     for (const element of textElements) {
//       element.style.animation = `slideIn 1s ease ${delay}s forwards`;
//       delay += 0.5;
//     }
//   }, []);

  const handleZoom = (event) => {
    event.target.style.transform = 'scale(1.1)';
    event.target.style.transition = 'transform 0.3s ease';
  };

  return (
    <div className="campus-ambassador-container">
      <h1>Campus Ambassador Page</h1>
     {/* Add this line to check rendering */}
      {/* <div className="background">
        <img src={require('./wall 1@3x 3.webp').default} alt="Background 1" className="background-image" />
        <img src={require('./wall 1@3x 2.webp').default} alt="Background 2" className="background-image" />
      </div> */}
      {/* <div className="content">
        <div className="text" ref={textRef}>
          <div>
            <h2>CERTIFICATES</h2>
            <p>Certificate to add in your Resume. You can use this experience to build a portfolio.</p>
          </div>
          <div>
            <h2>LEADERSHIP QUALITIES</h2>
            <p>Campus Ambassador at our fest gets the chance to represent their college in our fest.</p>
          </div>
          <div>
            <h2>FREE ENTRY</h2>
            <p>Free entry for the Campus Ambassador on 30+ participation.</p>
          </div>
          <div>
            <h2>INTERNSHIP OPPORTUNITY</h2>
            <p>You can use this experience to grab internship opportunities from our sponsors.</p>
          </div>
          <div>
            <h2>WORKSHOPS</h2>
            <p>Free entry to the workshops conducted by our partners.</p>
          </div>
        </div> */}
        <div className="images">
            <img src={tree1} alt="tree1" onClick={handleZoom} />
            <img src={tree2} alt="tree2" onClick={handleZoom}/>
            <img src={mathura} alt="mathura" onClick={handleZoom}/>
            <img src={kolkata1} alt="kolkata1" onClick={handleZoom}/>
            <img src={kolkata2} alt="kolkata2" onClick={handleZoom}/>
            <img src={bird1} alt="bird1" onClick={handleZoom}/>
            <img src={bird2} alt="bird2" onClick={handleZoom}/>
            <img src={vector11} alt="vector11" onClick={handleZoom}/>
            <img src={vector15} alt="vector15" onClick={handleZoom}/>
            <img src={vector16} alt="vector16" onClick={handleZoom}/>
            <img src={vector17} alt="vector17" onClick={handleZoom}/>
            <img src={vector18} alt="vector18" onClick={handleZoom}/>
            <img src={vector19} alt="vector19" onClick={handleZoom}/>
            <img src={frame25} alt="frame25" onClick={handleZoom}/>
            <img src={ellipse128} alt='ellipse128' onClick={handleZoom}/>
            <img src={ellipse129} alt="ellipse129" onClick={handleZoom}/>
            <img src={ellipse15} alt="ellipse15" onClick={handleZoom}/>
            <img src={ellipse16} alt="ellipse16" onClick={handleZoom}/>
            <img src={ellipse17} alt="ellipse17" onClick={handleZoom}/>
            <img src={wall1} alt="wall1" onClick={handleZoom}/>
            <img src={wall2} alt="wall2" onClick={handleZoom}/>

          {/* <img src={require('./mathura@3x 1.webp').default} alt="Mathura" onClick={handleZoom} />
          <img src={require('./kolkata@3x 2.webp').default} alt="Kolkata 2" onClick={handleZoom} />
          <img src={require('./kolkata@3x 1.webp').default} alt="Kolkata 1" onClick={handleZoom} />
          <img src={require('./tree 1.webp').default} alt="Tree 1" onClick={handleZoom} />
          <img src={require('./tree 2.webp').default} alt="Tree 2" onClick={handleZoom} />
          <img src={require('./purepng.com-gull-birdbirdsflyanimals-6315229364462xrbq 2 (1).webp').default} alt="Bird 2" onClick={handleZoom} />
          <img src={require('./purepng.com-gull-birdbirdsflyanimals-6315229364462xrbq 1.webp').default} alt="Bird 1" onClick={handleZoom} />
          <img src={require('./Vector 19.svg').default} alt="Vector 19" onClick={handleZoom} />
          <img src={require('./Vector 18.svg').default} alt="Vector 18" onClick={handleZoom} />
          <img src={require('./Vector 17.svg').default} alt="Vector 17" onClick={handleZoom} />
          <img src={require('./Vector 16.svg').default} alt="Vector 16" onClick={handleZoom} />
          <img src={require('./Vector 15.svg').default} alt="Vector 15" onClick={handleZoom} />
          <img src={require('./Vector 11.svg').default} alt="Vector 11" onClick={handleZoom} />
          <img src={require('./Frame 25.svg').default} alt="Frame 25" onClick={handleZoom} />
          <img src={require('./Ellipse 17.svg').default} alt="Ellipse 17" onClick={handleZoom} />
          <img src={require('./Ellipse 16.svg').default} alt="Ellipse 16" onClick={handleZoom} />
          <img src={require('./Ellipse 15.svg').default} alt="Ellipse 15" onClick={handleZoom} /> */}
        </div>
      {/* </div> */}
    </div>
  );
};

export default CampusAmbassador;
