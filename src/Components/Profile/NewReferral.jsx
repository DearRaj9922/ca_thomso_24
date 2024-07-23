import react from "react";
import './PositionCard.css'
import './NewReferral.css'
const NewReferralContainer = () =>{
    const code = '167SHJ'
    return(
        <div className='bada-lauda'>
            <div className='new-referral-container'>
                <div className='new-referral-image-container'>
                    <img src='new-referral.svg'></img>
                </div>
                <div className='new-referral-box'>
                    <div className='new-referral-text'>
                        Referral Code
                    </div>
                    <div className='new-referral-code-box'>
                        <div className='new-referral-code'>
                            {code}
                        </div>
                        <div className='new-referral-copy'>
                            <img src='new-referral-copy.svg'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewReferralContainer;

