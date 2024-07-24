import react from 'react';

const PositionCard = (props) => {
    const cardDetails = {
        name:"Dhruv Pankaj",
        photo:"profile_pic.svg",
        institute:"Indian Institute of Technology Roorkee",
        score:333,
        referrals:20,
        position:1
    }
    return(
        <div className='chhota-lauda'>
            <div className={cardDetails.position===1?"position-card-container-1":(cardDetails.position===2?'position-card-container-2':"position-card-container-3")}>
                <div className='position-card-top'>
                    <div className='position-card-photo'>
                        <img src={cardDetails.photo}></img>
                    </div>
                    <div className='position-card-name-insti'>
                        <div className='position-card-name'>{cardDetails.name}</div>
                        <div className='position-card-insti'>{cardDetails.institute}</div>
                    </div>
                </div>
                <div className='position-card-middle'>
                    <div className='position-card-score'>
                        <div className='position-card-score-value'>{cardDetails.score}</div>
                        <div className='position-card-score-text'>Score</div>
                    </div>
                    <div className='position-card-referral'>
                        <div className='position-card-referral-value'>{cardDetails.referrals}</div>
                        <div className='position-card-referral-text'>Referrals</div>
                    </div>
                </div>
                <div className='position-card-bottom'>
                    <img src={cardDetails.position===1?"1st.svg":(cardDetails.position===2?'2nd.svg':"3rd.svg")}></img>
                </div>
            </div>
        </div>
    )
}
export default PositionCard;