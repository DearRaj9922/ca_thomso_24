import React, { useState,useEffect } from "react";
import './CaPaymentList.css'
import {fetchReferrals, fetchUser, logout} from "../User/UserActions";
import {connect} from "react-redux";
import axios from "axios";
const CaPaymentList = (props) =>{
    const[loading, setLoading] = useState(false)
    const [reffdata, setReffdata] = useState([])
    useEffect(()=>{
        (async()=>{
            await axios.get(`https://api2.thomso.in/apiV1/get_all_referral?ca_id=${localStorage.getItem('id')}`).then((res)=>{
                setReffdata(res.data)
                console.log(res.data)
            });
            setLoading(true)
        })()
    },[])

    if(!loading){
        return(<></>)
    }
    else{
         return(
                <div className='lauda'>
                    <div className='ca-payment-list-container'>
                        <div className="ref-heading">Referrals</div>
                        <div className='ca-payment-list-header'>
                            <ul>
                                <li className='ca-payment-list-header-sr'>Sr. No.</li>
                                <li className='ca-payment-list-header-name'>Name</li>
                                <li className='ca-payment-list-header-id'>Id</li>
                                <li className='ca-payment-list-header-contact'>Contact</li>
                                <li className='ca-payment-list-header-status'>Fee Status</li>
                            </ul>
                        </div>
                        <div className='ca-payment-list-content'>
                            {reffdata.map((item, index) => {
                                if(index == 0){
                                    return (<ul className='ca-payment-list-content-first ca-payment-list-content-not-last'>
                                        <li className='ca-payment-list-content-sr'>{index + 1}</li>
                                        <li className='ca-payment-list-content-name'>{item.name}</li>
                                        <li className='ca-payment-list-content-id'>{item.id}</li>
                                        <li className='ca-payment-list-content-contact'>{item.contact}</li>
                                        {item.payment?(<li className={"ca-payment-list-content-status-green"}>Paid</li>):(<li className={"ca-payment-list-content-status-red"}>Unpaid</li>)}

                                    </ul>)
                                }
                                if(index === reffdata.length - 1) {
                                    return (<ul className='ca-payment-list-content-last'>
                                        <li className='ca-payment-list-content-sr'>{index + 1}</li>
                                        <li className='ca-payment-list-content-name'>{item.name}</li>
                                        <li className='ca-payment-list-content-id'>{item.id}</li>
                                        <li className='ca-payment-list-content-contact'>{item.contact}</li>
                                        {item.payment?(<li className={"ca-payment-list-content-status-green"}>Paid</li>):(<li className={"ca-payment-list-content-status-red"}>Unpaid</li>)}
                                    </ul>)
                                }
                                return (<ul className='ca-payment-list-content-not-last'>
                                    <li className='ca-payment-list-content-sr'>{index + 1}</li>
                                    <li className='ca-payment-list-content-name'>{item.name}</li>
                                    <li className='ca-payment-list-content-id'>{item.id}</li>
                                    <li className='ca-payment-list-content-contact'>{item.contact}</li>
                                    {item.payment?(<li className={"ca-payment-list-content-status-green"}>Paid</li>):(<li className={"ca-payment-list-content-status-red"}>Unpaid</li>)}
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

export default connect(mapStateToProps, mapDispatchToProps)(CaPaymentList);