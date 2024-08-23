import React, {useEffect} from 'react';
import {Card} from './Card';
import './NewFeed.css';
import StrangerThingsImage from '../Assets/Frame 2 16.webp';
import Navbar from '../Navbar/Navbar';
import ProfileDetail from "../ProfileDetails/ProfileDetails.js";

import Footer from '../Footer/Footer';
import ReferralList from '../Profile/CaPaymentList.jsx';
import ProfileDetails from '../ProfileDetails/ProfileDetails.js';
import axios from "axios";

const NewFeed = () => {

    // useEffect(() => {
    //     (async () => {
    //         // console.log("meow")
    //
    //         axios.get("http://127.0.0.1:8000/apiV1/get_all_posts?ca_id=2")
    //             .then((response) => {
    //
    //                 console.log("data", response.data);
    //             })
    //     })()
    //
    //
    // }, [])

    return (
        <div className="new-feed-container">
            <Navbar/>
            <div className="parent">
                <div className="child1">
                    <Card
                        Img={StrangerThingsImage}
                        AltImg="StrangerThings"
                        Heading="QUIZARDRY : Stranger Things"
                        Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque morbi venenatis, turpis commodo pellentesque est massa luctus. Curabitur sapien, nam massa nisi sit id."
                        Points="40"
                        ShareCount="06"
                    />
                    <Card
                        Img={StrangerThingsImage}
                        AltImg="StrangerThings"
                        Heading="QUIZARDRY : Stranger Things"
                        Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque morbi venenatis, turpis commodo pellentesque est massa luctus. Curabitur sapien, nam massa nisi sit id."
                        Points="40"
                        ShareCount="06"
                    />
                    <Card
                        Img={StrangerThingsImage}
                        AltImg="StrangerThings"
                        Heading="QUIZARDRY : Stranger Things"
                        Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque morbi venenatis, turpis commodo pellentesque est massa luctus. Curabitur sapien, nam massa nisi sit id."
                        Points="40"
                        ShareCount="06"
                    />
                </div>
                <div className="profile-details">
                    <ProfileDetail/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default NewFeed;
