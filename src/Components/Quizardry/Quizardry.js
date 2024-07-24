import React from 'react';
import './Quizardry.css'
import quizimg from '../Assets/quizardry.svg'
function Quizardry(props) {
    return (
        <div className="quizardrycard">
            <div><img className="quizimg" src={quizimg} alt="quizimg"/></div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Quizardry;