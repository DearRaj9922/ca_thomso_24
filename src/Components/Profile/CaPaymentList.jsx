import React, { useState,useEffect } from "react";
import './CaPaymentList.css'
const CaPaymentList = () =>{
    const data = [
        {
            "Sr. no.": 1,
            "name": "Alex Brown",
            "id": 615695,
            "contact": "9867896337",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 2,
            "name": "Michael Taylor",
            "id": 674096,
            "contact": "7303410362",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 3,
            "name": "John Brown",
            "id": 115625,
            "contact": "7969369663",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 4,
            "name": "Alex Taylor",
            "id": 383548,
            "contact": "7387825457",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 5,
            "name": "John Anderson",
            "id": 973519,
            "contact": "9143273451",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 6,
            "name": "John Brown",
            "id": 979783,
            "contact": "9471208189",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 7,
            "name": "Chris White",
            "id": 219285,
            "contact": "9583935364",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 8,
            "name": "Katie Smith",
            "id": 334948,
            "contact": "8579771292",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 9,
            "name": "Alex Smith",
            "id": 938896,
            "contact": "9542077703",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 10,
            "name": "David Taylor",
            "id": 150727,
            "contact": "7063270643",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 11,
            "name": "David Johnson",
            "id": 740923,
            "contact": "8237528589",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 12,
            "name": "Emily Anderson",
            "id": 507259,
            "contact": "9799602220",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 13,
            "name": "Laura Smith",
            "id": 136387,
            "contact": "7706305358",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 14,
            "name": "Sarah Harris",
            "id": 214333,
            "contact": "7924441371",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 15,
            "name": "Chris Brown",
            "id": 539727,
            "contact": "8507108156",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 16,
            "name": "Jane Brown",
            "id": 361775,
            "contact": "7353369066",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 17,
            "name": "Katie Harris",
            "id": 127107,
            "contact": "9637398502",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 18,
            "name": "Alex Taylor",
            "id": 132701,
            "contact": "9062538696",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 19,
            "name": "Sarah Johnson",
            "id": 614233,
            "contact": "7397490212",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 20,
            "name": "Chris Martin",
            "id": 153319,
            "contact": "9794537192",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 21,
            "name": "Katie Anderson",
            "id": 898574,
            "contact": "8250560174",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 22,
            "name": "David Smith",
            "id": 745965,
            "contact": "9743252578",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 23,
            "name": "Michael Thomas",
            "id": 187055,
            "contact": "9600489874",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 24,
            "name": "Laura Anderson",
            "id": 874012,
            "contact": "9429189972",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 25,
            "name": "Katie Brown",
            "id": 837554,
            "contact": "8361689621",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 26,
            "name": "Alex Harris",
            "id": 149134,
            "contact": "8612671062",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 27,
            "name": "Chris Taylor",
            "id": 960981,
            "contact": "9311650915",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 28,
            "name": "Sarah Anderson",
            "id": 726489,
            "contact": "8450646687",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 29,
            "name": "Michael Martin",
            "id": 122158,
            "contact": "7411183385",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 30,
            "name": "Chris Johnson",
            "id": 830569,
            "contact": "9644107360",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 31,
            "name": "Sarah Thomas",
            "id": 349425,
            "contact": "7944727215",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 32,
            "name": "Laura Brown",
            "id": 302912,
            "contact": "8149304815",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 33,
            "name": "John White",
            "id": 140854,
            "contact": "9050489710",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 34,
            "name": "Chris Smith",
            "id": 591797,
            "contact": "9984192064",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 35,
            "name": "John Jackson",
            "id": 212266,
            "contact": "8701188968",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 36,
            "name": "Laura Taylor",
            "id": 115553,
            "contact": "7577528861",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 37,
            "name": "Katie Jackson",
            "id": 360132,
            "contact": "7920727780",
            "feeStatus": "Unpaid"
        },
        {
            "Sr. no.": 38,
            "name": "John Anderson",
            "id": 571561,
            "contact": "8668855594",
            "feeStatus": "Paid"
        },
        {
            "Sr. no.": 39,
            "name": "Katie Martin",
            "id": 377997,
            "contact": "7856908270",
            "feeStatus": "Paid"
        }
        ]
            return(
                <div className='lauda'>
                    <div className='ca-payment-list-container'>
                        <div className="ref-heading">Referrals0</div>
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
                            {data.map((item, index) => {
                                if(index == 0){
                                    return (<ul className='ca-payment-list-content-first ca-payment-list-content-not-last'>
                                        <li className='ca-payment-list-content-sr'>{index + 1}</li>
                                        <li className='ca-payment-list-content-name'>{item.name}</li>
                                        <li className='ca-payment-list-content-id'>{item.id}</li>
                                        <li className='ca-payment-list-content-contact'>{item.contact}</li>
                                        <li className={item.feeStatus==='Paid'?"ca-payment-list-content-status-green":"ca-payment-list-content-status-red"}>{item.feeStatus}</li>
                                    </ul>)
                                }
                                if(index === data.length - 1) {
                                    return (<ul className='ca-payment-list-content-last'>
                                        <li className='ca-payment-list-content-sr'>{index + 1}</li>
                                        <li className='ca-payment-list-content-name'>{item.name}</li>
                                        <li className='ca-payment-list-content-id'>{item.id}</li>
                                        <li className='ca-payment-list-content-contact'>{item.contact}</li>
                                        <li className={item.feeStatus==='Paid'?"ca-payment-list-content-status-green":"ca-payment-list-content-status-red"}>{item.feeStatus}</li>
                                    </ul>)
                                }
                                return (<ul className='ca-payment-list-content-not-last'>
                                    <li className='ca-payment-list-content-sr'>{index + 1}</li>
                                    <li className='ca-payment-list-content-name'>{item.name}</li>
                                    <li className='ca-payment-list-content-id'>{item.id}</li>
                                    <li className='ca-payment-list-content-contact'>{item.contact}</li>
                                    <li className={item.feeStatus==='Paid'?"ca-payment-list-content-status-green":"ca-payment-list-content-status-red"}>{item.feeStatus}</li>
                                </ul>)
                            })}
                        </div>
                    </div>
                </div>

            )
}
export default CaPaymentList;