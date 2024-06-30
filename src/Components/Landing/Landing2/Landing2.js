import styles from "./Landing2.module.css";
import cloud from "./Assets/cloud.svg"
import scooter from "./Assets/scooter.svg"
export default function Landing2() {
  return (
    <div>
      <div className={styles.first}>
      <p className={styles.text}>What is Campus
        Ambassador Program?</p>
        <img src={cloud} alt="cloud" className={styles.cloud1}/>
        <img src={cloud} alt="cloud" className={styles.cloud2}/>
        <img src={cloud} alt="cloud" className={styles.cloud3}/>
        <img src={cloud} alt="cloud" className={styles.cloud4}/>
        <img src={scooter} alt="scooter" className={styles.scooter} />
      </div>

    </div>
  );
}
