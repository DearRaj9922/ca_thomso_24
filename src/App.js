import "./App.css";
import Hand from "../src/images/HAND.png";
import Lotus from "../src/images/LOTUS TEMPLE.png";
import HinduTemple from "../src/images/Hindu-Temple.png";
import Temple1 from "../src/images/191-1919062_temple-png.png";
import Temple2 from "../src/images/252-2523829_hindu-temple-png.png";
import Temple3 from "../src/images/Hindu-Temple-PNG-Image.png";
import Tree3 from "../src/images/tree 3.png";
import Tree4 from "../src/images/tree 4.png";
import Vector9 from "../src/images/Vector 9.svg";
import Vector10 from "../src/images/Vector 10.svg";
import Vector11 from "../src/images/Vector 11.svg";
import Vector12 from "../src/images/Vector 12.svg";
import EllipsePink from "../src/images/Ellipse 131.svg";
import Bird1 from "../src/images/purepng.com-gull-birdbirdsflyanimals-6315229364462xrbq 1.png";
import Bird2 from "../src/images/purepng.com-gull-birdbirdsflyanimals-6315229364462xrbq 2.png";
function App() {
  return (
    <div className="page">
      <h1>WHAT ARE YOU WAITING FOR?</h1>
      <div className="white-ellipse1"></div>
      <div className="white-ellipse2"></div>
      <img className="Vector-9-mobile" src={Vector9}></img>
      <img className="Vector-10-mobile" src={Vector10}></img>
      <div className="bottom">
        <div className="btn">
          <button>Register Now!</button>
        </div>
        <img className="hand" src={Hand} alt="hand" />
        <img className="lotus-temple" src={Lotus} alt="lotus-temple" />
        <img className="hindu-temple" src={HinduTemple} alt="hindu-temple" />
        <img className="Temple1" src={Temple1} alt="Temple1" />
        <img className="Temple2" src={Temple2} alt="Temple2" />
        <img className="Temple3" src={Temple3} alt="Temple3" />
        <img className="Tree3" src={Tree3} alt="Tree3" />
        <img className="Tree4" src={Tree4} alt="Tree4" />
        <img className="Vector9" src={Vector9} alt="Vector9" />
        <img className="Vector10" src={Vector10} alt="Vector10" />
        <img className="Vector11" src={Vector11} alt="Vector11" />
        <img className="Vector12" src={Vector12} alt="Vector12" />
        <img className="EllipsePink1" src={EllipsePink} alt="ellipse" />
        <img className="EllipsePink2" src={EllipsePink} alt="ellipse" />
        <img className="Bird1" src={Bird1} alt="Bird1" />
        <img className="Bird2" src={Bird2} alt="Bird2" />
      </div>
    </div>
  );
}

export default App;
