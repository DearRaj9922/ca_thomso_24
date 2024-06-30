import styles from "./Landing2.module.css";
import cloud from "./Assets/cloud.svg"
import scooter from "./Assets/scooter.svg"
export default function Landing2() {
  return (
    <div>
      <div className="first">
      <p className="text">What is Campus
        Ambassador Program?</p>
        <img src={cloud} alt="cloud" className="cloud1"/>
        <img src={cloud} alt="cloud" className="cloud2"/>
        <img src={cloud} alt="cloud" className="cloud3"/>
        <img src={cloud} alt="cloud" className="cloud4"/>
        <img src={scooter} alt="scooter" className="scooter" />
      </div>

    </div>
  );
}
