import bg from "../assets/background2.svg";
import cloud from "../assets/cloud.svg";
import styles from "./page2.module.css";
import scooter from "../assets/scooter.svg";
export default function Page2() {
  return (
    <div className={styles.wrap}>
      <img src={bg} alt="bg" className={styles.bgi} />
      <p className={styles.text}>What is Campus Ambassador Program?</p>
      <p className={styles.desc}>
        As part of the student campus ambassador program, THOMSO offers students
        the chance to represent and promote the organization at their colleges
        and universities. Their responsibilities comprise developing our
        presence and promoting THOMSO events among students and educators by
        serving as a link between their colleges and us.
      </p>
      <img src={cloud} alt="cloud" className={styles.cloud1} />
      <img src={cloud} alt="cloud" className={styles.cloud2} />
      <img src={cloud} alt="cloud" className={styles.cloud3} />
      <img src={cloud} alt="cloud" className={styles.cloud4} />
      <img src={scooter} alt="scooter" className={styles.scooter} />
    </div>
  );
}
