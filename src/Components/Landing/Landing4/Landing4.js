import React from "react"
import "./Landing4.css"
import { useNavigate, Link } from "react-router-dom"
import landingbgdesk4 from "../../Assets/Page-6.webp"
import landingbgmon4 from "../../Assets/land4-mobile.webp"
import textimg from "../../Assets/WHAT ARE YOU WAITING FOR_.webp"
import textimgmob from "../../Assets/WHAT ARE YOU WAITING FOR_.svg"
import cloud4 from "../../Assets/cloud4.webp"
import hand from "../../Assets/hand.svg"
import Navbar from "../Hero Section/Navbar"

function Landing4() {
	const navigate = useNavigate()
	return (
		<div className='relative'>
			<Navbar />
			<img src={landingbgdesk4} className='bg_img_4' alt='land-bg-4' />
			<img src={landingbgmon4} className='bg-mob-4' alt='land-bg-mob-4' />
			<div className='landing4'>
				<div className='text-div'>
					<img src={textimg} className='head-text' alt='text-i' />
				</div>
				<div className='reg-button-div'>
					<button
						onClick={() => navigate("/registration")}
						className='reg-button'
					>
						Register Now!
					</button>
				</div>
				{/* <div className="clouds">
      <img src={cloud4} className="cloud4-1" alt="cloud-4-1"/>
      <img src={cloud4} className="cloud4-2" alt="cloud-4-2"/>
      <img src={cloud4} className="cloud4-3" alt="cloud-4-3"/>
      <img src={cloud4} className="cloud4-4" alt="cloud-4-4"/>
      </div> */}
				<img src={hand} alt='hand' className='hand' />
			</div>
			<div className='landing4mobile'>
				<div className='clouds'>
					<img src={cloud4} className='cloud4-1 ' alt='cloud-4-1' />
					<img src={cloud4} className='cloud4-2' alt='cloud-4-2' />
				</div>

				<div className='text-div'>
					<img src={textimgmob} className='head-text-mob' alt='text-i-mob' />
				</div>
				<div className='reg-button-div'>
					<button
						onClick={() => navigate("/registration")}
						className='reg-button'
					>
						Register Now!
					</button>
				</div>
			</div>
		</div>
	)
}

export default Landing4
