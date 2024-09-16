import React, {useEffect, useState} from 'react';
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
    const [feed, setFeed] = useState([])
    const [loader, setloader] = useState(false)
    useEffect(() => {
        (async () => {
            // console.log("meow")

            await axios.get(`https://api2.thomso.in/apiV1/get_all_posts?ca_id=${localStorage.getItem('id')}`)
                .then((response) => {
                    setFeed(response.data)
                    console.log("data", response.data);
                })
            setloader(true)
        })()



    }, [])
    if(!loader){
        return(<></>)
    }
    else{
        return (
            <div className="new-feed-container">
                <Navbar/>
                <div className="parent">
                    <div className="child1">
                        {feed.map((item,index)=>{
                            return(<Card Perma={item.permalink} Img={item.thumbnail_url?item.thumbnail_url:item.media_url} Content={item.caption.substr(0, 250) + "......"} Heading={"Thomso'24- A Crossroad Of Cultures"} Points={5} ShareCount={item.analytics.views} Pointstotal={item.analytics.total_points} Copylink={item.sharable_link}></Card>)
                            // return(<></>)
                        })}
                        {/*<Card*/}
                        {/*    Img={StrangerThingsImage}*/}
                        {/*    AltImg="StrangerThings"*/}
                        {/*    Heading="QUIZARDRY : Stranger Things"*/}
                        {/*    Content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque morbi venenatis, turpis commodo pellentesque est massa luctus. Curabitur sapien, nam massa nisi sit id."*/}
                        {/*    Points="40"*/}
                        {/*    ShareCount="06"*/}
                        {/*/>*/}

                    </div>
                    <div className="profile-detailsnew">
                        <ProfileDetail/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }


};

export default NewFeed;
