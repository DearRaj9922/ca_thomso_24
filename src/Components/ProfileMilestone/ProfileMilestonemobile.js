import React from 'react';
import './ProfileMilestonemobile.css';
import ProfileImg from '../Assets/ProfileImg.svg';
import copy from '../Assets/copy.svg';
import edit from '../Assets/EditOutlined.svg'

const ProfileMilestonemobile = () => {
  return (
    <div className='container'>
        <div className='ref-card'>
      <header className='profile-header'>
        <div className='profileimg'>
          <img src={ProfileImg} className='profileimg' alt='Profile' />
        </div>
        <div className='nameandref-code'>
          <div>
            <h1 className='name'>Dhruv Bhatia</h1>
          </div>
          <div className='ref-code'>
            <h2 className='code'>Referral code</h2>
            <ul className='purple'>
              <li>167ZSJH</li>
              <li className='copy'><button><img src={copy} alt='Copy' /></button></li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        <div className='rank'>
          <div className='ranking'>
            <h2 className="number rsr" id='ranking'>11th</h2>
            <div className="underline"></div>
            <h2 className='rsr'>Ranking</h2>
          </div>
          <div className='score'>
            <h2 className="number rsr" id='score'>312</h2>
            <div className="underline"></div>
            <h2 className='rsr'>Score</h2>
          </div>
          <div className='referrals'>
            <h2 className="number rsr" id='referrals'>15</h2>
            <div className="underline"></div>
            <h2 className='rsr'>Referrals</h2>
          </div>
        </div>
        <div className='education'>
          <p className='heading'><u>Education Details</u></p>
          <table>
            <tbody>
              <tr>
                <td className='left'>College</td>
                <td className='right'>Indian Institute of Technology Roorkee</td>
              </tr>
              <tr>
                <td className='left'>Degree and Year</td>
                <td className='right'>B.Arch 3rd</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='contact'>
          <p className='heading'><u>Contact Info.</u></p>
          <table>
            <tbody>
              <tr>
                <td className='left'>Email id</td>
                <td className='right'>aafafavfaeawe@gmail.com</td>
              </tr>
              <tr>
                <td className='left'>Phone no.</td>
                <td className='right'><div className='phone-box'>+91 9876XXXXXX</div></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='buttons'>
          <button className='save-button'>Save</button>
          <button className='edit-button'><img className="edit" src={edit}></img></button>
        </div>
      </main>
    </div>
    </div>
    
  );
}

export default ProfileMilestonemobile;
