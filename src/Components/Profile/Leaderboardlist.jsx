import React, { useState,useEffect } from "react";
import './Leaderboardlist.css'
import {fetchReferrals, fetchUser, logout} from "../User/UserActions";
import {connect} from "react-redux";
import axios from "axios";
const Leaderboardlist = (props) =>{
    const [loader, setLoader] = useState(false)
    const [leaderpeeps,setLeaderpeeps] = useState([])
    useEffect(()=>{
        (async()=>{
            await axios.get('https://api2.thomso.in/apiV1/ca_leaderboard').then((res)=>{
                setLeaderpeeps(res.data)
                // console.log(res.data)
            })
            setLoader(true)
        })()
    },[])
    const data = [
        {
            "Sr. no.": 1,
            "name": "Alex Brown",
            "id": 615695,
            "college": "9867896337",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 2,
            "name": "Michael Taylor",
            "id": 674096,
            "college": "7303410362",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 3,
            "name": "John Brown",
            "id": 115625,
            "college": "7969369663",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 4,
            "name": "Alex Taylor",
            "id": 383548,
            "college": "7387825457",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 5,
            "name": "John Anderson",
            "id": 973519,
            "college": "9143273451",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 6,
            "name": "John Brown",
            "id": 979783,
            "college": "9471208189",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 7,
            "name": "Chris White",
            "id": 219285,
            "college": "9583935364",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 8,
            "name": "Katie Smith",
            "id": 334948,
            "college": "8579771292",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 9,
            "name": "Alex Smith",
            "id": 938896,
            "college": "9542077703",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 10,
            "name": "David Taylor",
            "id": 150727,
            "college": "7063270643",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 11,
            "name": "David Johnson",
            "id": 740923,
            "college": "8237528589",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 12,
            "name": "Emily Anderson",
            "id": 507259,
            "college": "9799602220",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 13,
            "name": "Laura Smith",
            "id": 136387,
            "college": "7706305358",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 14,
            "name": "Sarah Harris",
            "id": 214333,
            "college": "7924441371",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 15,
            "name": "Chris Brown",
            "id": 539727,
            "college": "8507108156",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 16,
            "name": "Jane Brown",
            "id": 361775,
            "college": "7353369066",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 17,
            "name": "Katie Harris",
            "id": 127107,
            "college": "9637398502",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 18,
            "name": "Alex Taylor",
            "id": 132701,
            "college": "9062538696",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 19,
            "name": "Sarah Johnson",
            "id": 614233,
            "college": "7397490212",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 20,
            "name": "Chris Martin",
            "id": 153319,
            "college": "9794537192",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 21,
            "name": "Katie Anderson",
            "id": 898574,
            "college": "8250560174",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 22,
            "name": "David Smith",
            "id": 745965,
            "college": "9743252578",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 23,
            "name": "Michael Thomas",
            "id": 187055,
            "college": "9600489874",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 24,
            "name": "Laura Anderson",
            "id": 874012,
            "college": "9429189972",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 25,
            "name": "Katie Brown",
            "id": 837554,
            "college": "8361689621",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 26,
            "name": "Alex Harris",
            "id": 149134,
            "college": "8612671062",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 27,
            "name": "Chris Taylor",
            "id": 960981,
            "college": "9311650915",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 28,
            "name": "Sarah Anderson",
            "id": 726489,
            "college": "8450646687",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 29,
            "name": "Michael Martin",
            "id": 122158,
            "college": "7411183385",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 30,
            "name": "Chris Johnson",
            "id": 830569,
            "college": "9644107360",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 31,
            "name": "Sarah Thomas",
            "id": 349425,
            "college": "7944727215",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 32,
            "name": "Laura Brown",
            "id": 302912,
            "college": "8149304815",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 33,
            "name": "John White",
            "id": 140854,
            "college": "9050489710",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 34,
            "name": "Chris Smith",
            "id": 591797,
            "college": "9984192064",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 35,
            "name": "John Jackson",
            "id": 212266,
            "college": "8701188968",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 36,
            "name": "Laura Taylor",
            "id": 115553,
            "college": "7577528861",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 37,
            "name": "Katie Jackson",
            "id": 360132,
            "college": "7920727780",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 38,
            "name": "John Anderson",
            "id": 571561,
            "college": "8668855594",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 39,
            "name": "Katie Martin",
            "id": 377997,
            "college": "7856908270",
            "feeStatus": "Paid"
        }
        ]
    if(!loader){
        return (<></>)
    }
    else{
        return(
                <div className='lauda'>
                    <div className='leader-list-container'>
                        <div className="ref-heading">Referrals</div>
                        <div className='leader-list-header'>
                            <ul>
                                <li className='leader-list-header-sr'>Sr. No.</li>
                                <li className='leader-list-header-name'>Name</li>
                                <li className='leader-list-header-college'>College Name</li>
                                <li className='leader-list-header-score'>Score</li>
                            </ul>
                        </div>
                        <div className='leader-list-content'>
                            {leaderpeeps.map((item, index) => {
                                if(index == 0){
                                    return (<ul className='leader-list-content-first leader-list-content-not-last'>
                                        <li className='leader-list-content-sr'>{index + 1}</li>
                                        <li className='leader-list-content-name'>{item.name}</li>
                                        <li className='leader-list-content-college'>{item.college}</li>
                                        <li className='leader-list-content-college'>{item.total_score}</li>
                                    </ul>)
                                }
                                if(index === data.length - 1) {
                                    return (<ul className='leader-list-content-last'>
                                        <li className='leader-list-content-sr'>{index + 1}</li>
                                        <li className='leader-list-content-name'>{item.name}</li>
                                        <li className='leader-list-content-college'>{item.college}</li>
                                        <li className='leader-list-content-college'>{item.total_score}</li>
                                    </ul>)
                                }
                                return (<ul className='leader-list-content-not-last'>
                                    <li className='leader-list-content-sr'>{index + 1}</li>
                                    <li className='leader-list-content-name'>{item.name}</li>
                                    <li className='leader-list-content-college'>{item.college}</li>
                                    <li className='leader-list-content-college'>{item.total_score}</li>
                                </ul>)
                            })}
                        </div>
                    </div>
                </div>

            )
    }

}
const mapStateToProps = (state) => {
    let userDetails = state.user.user;
    let loading = state.user.loading;
    let referrals = state.user.referrals;

    return {
        userDetails,
        loading,
        referrals
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: (params) => dispatch(fetchUser(params)),
        logouts: (params) => dispatch(logout(params)),
        fetchReferral: (params)=>dispatch(fetchReferrals(params))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboardlist);