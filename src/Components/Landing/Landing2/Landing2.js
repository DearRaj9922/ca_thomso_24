import bg from "../assets/background2.svg"
import cloud from "../assets/cloud.svg"
import styles from "./page.module.css"
import scooter from "../assets/scooter.svg"
export default function Page(){
    return <div className={styles.wrap}>
        <img src={bg} alt="bg" className={styles.bgi}/>
        <p className={styles.text}>What is Campus
        Ambassador Program?</p>
        <img src={cloud} alt="cloud" className={styles.cloud1}/>
        <img src={cloud} alt="cloud" className={styles.cloud2}/>
        <img src={cloud} alt="cloud" className={styles.cloud3}/>
        <img src={cloud} alt="cloud" className={styles.cloud4}/>
        <img src={scooter} alt="scooter" className={styles.scooter} />
    </div>
}
