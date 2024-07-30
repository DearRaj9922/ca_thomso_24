import React, { useState, useEffect } from "react";
import "./CollegeDetailes.css";
import axios from "axios";
import Select from "react-select";
import Creatable from "react-select/creatable";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import colleges from "./college";
// import Nav from "../../web/NewNavbar/Nav";
// import MobNavbar from "../../mobile/Navbar/MobNavbar";
// import logbg1 from "../../../assets/WELCOME_BACK.svg";
// import logbg2 from "../../../assets/Campus_Ambassador.svg";
import welcomebckbg from "../../Assets/Registrationbg.webp";

import cawelcome from "../../Assets/registrationbg-mobile.webp";
import { message } from "antd";


const states = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Ladakh",
  "Kathmandu",
].map((state) => ({
  value: state,
  label: state,
}));
const year_choice = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "passout",
].map((state) => ({
  value: state,
  label: state,
}));

const CollegeDetails = ({name,email,gender,contact,password}) => {
  
  let navigate = useNavigate();
  const [errorMail, setErrorMail] = useState(false)
  const [loaded, setLoaded]= useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [active, setActive] = useState(false);
  const [mes,setMes] =useState(false);


  const [user, setUser] = useState({
    state: "",
    district: "",
    college: "",
    degree: "",
    year: "",
  });
  const userresponse = {
    state: user.state,
    district: user.district,
    college: user.college,
    degree: user.degree,
    year: user.year,
    name:name,
    email:email,
    gender:gender,
    contact:contact,
    password:password,
    
  };
  const clearInput = () => {
    setUser({
      state: "",
      district: "",
      college: "",
      degree: "",
      year: "",
    });
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  
  
  const formSubmit = async (e) => {
    e.preventDefault();
    
    setLoading({ loading: true });
    
    try {
      
     let status;
     let data;
      await axios.post("https://api2.thomso.in/apiV1/registerca", userresponse).then(response => {data = response.data; status = response.status});
      //  await axios.post("https://api2.thomso.in/apiV1/registerca", userresponse).then(response => {data = response.data; status = response.status});
      
      console.log(userresponse);

          if (status === 201) {
            localStorage.setItem("user_id", data.user_id);
            setLoading(false);
            navigate("/verifyemail");
            // setActive(false)
          // }else if(status === 400){
          //   message.warning("Please verify your registered email.");
          //   navigate("/verifyemail")
          // }else{
          //   message.warning("System is not responding");
          }
          // console.log(data);
          setLoading(false);
          
        } catch (err) {

          console.log("status ", err?.response.status)
         
          const { data } = err?.response;
          console.log("register Error:", data);
          var errorData = "";
          if (data?.error == "user_not_verified") {
            console.log(data);
            
            setErrorMail(true)
            errorData =  `Please verify your registered email. <a href=/verifyemail>Click Here.`;
          }
          else if (err?.response.status === 500){
            let status;
            let data;
             await axios.post("https://api2.thomso.in/apiV1/registerca", userresponse).then(response => {data = response.data; status = response.status});
             //  await axios.post("https://api2.thomso.in/apiV1/registerca", userresponse).then(response => {data = response.data; status = response.status});
             
             console.log(userresponse);
       
                 
                   localStorage.setItem("user_id", data.user_id);
                   setLoading(false);
                   navigate("/verifyemail");
            
          }
          
           else {
            // setMes(true);
            // window.location.reload(false);
            // message.warning("Email does not exist.Please enter correct email");
            for (var key in data) {
              errorData += data[key];
            }
          }
          setErrorMsg(errorData);
          setError(true);
          setLoading(false);
        }
  };
  const sendmail= async () => {
    try {
      console.log("dhuaihdi")
      const response = await axios.post('https://api2.thomso.in/apiV1/sendrealmail',{name:userresponse.name,email:userresponse.email,password:userresponse.password});
      console.log(response)
      setLoaded(true);
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const handleChange1 = (state) => {
    setUser({ ...user, state: state?.value });
  };

  const handleChange2 = (college) => {
    setUser({ ...user, college: college?.value });
  };

  // const handleChange4 = (year) => {
  //   setUser({ ...user, year: year?.value });
  // };
  useEffect(() => {
    if(user.state  && user.district && user.college && user.degree && user.year ){
      setActive(true)
    }else{
      setActive(false);
    }
  }, [user])
  

  return (
    <>
      {/* <Nav /> */}
      <img src={welcomebckbg} className="collegeRegBack" alt="" />
      <div className="college-detailes">
        
        <img src={cawelcome} alt="" id="wel3" />
        <div id="log_bg1">
          {/* <img src={logbg1} id="wel_log_back" alt="" />
          <img src={logbg2} id="campus_ambd" /> */}

          <div className="college">
            <div className="college-steps">
              <div className="college-step1">
                <div className="college-step1-number">
                  <div className="college-step1-number-content">1</div>
                </div>
                <div className="college-step1-description">
                  <div className="college-step1-description-content-para1">
                    Step 1/2
                  </div>
                  <div className="college-step1-description-content-para2">
                    Personal Details
                  </div>
                </div>
              </div>
              <div className="college-step2">
                <div className="college-step2-number">
                  <div className="college-step2-number-content">2</div>
                </div>
                <div className="college-step2-description">
                  <div className="college-step2-description-content-para1">
                    Step 2/2
                  </div>
                  <div className="college-step2-description-content-para2">
                    College Details
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={(e) => formSubmit(e)}>
              <div className="college-inputs">
                <div className="college-input1">
                  <div>
                    {/* <select defaultValue={""} className="input-field select-field" id="rgs-state-uks">
                <option value="" disabled hidden>
                  State *
                </option>
                <option className="select-option" value="Gender 1">
                  Uttar Pradesh
                </option>
                <option className="select-option" value="Gender 2">
                  Delhi
                </option>
                <option className="select-option" value="Gender 3">
                  Gujrat
                </option>
              </select> */}
                    <Select
                    // style={{width:"240px"}}
                      className="select-option-2 state"
                      placeholder="Select State"
                      value={user.selectedOption}
                      onChange={handleChange1}
                      required
                      // styles={customStyles}
                      options={states}
                    />
                  </div>
                  <div>
                    {/* <select defaultValue={""} className="input-field select-field" id="rgs-district-uks">
                <option value="" disabled hidden>
                  District *
                </option>
                <option className="select-option" value="Gender 1">
                  Lucknow
                </option>
                <option className="select-option" value="Gender 2">
                  Gorakhpur
                </option>
                <option className="select-option" value="Gender 3">
                  Kanpur
                </option>
              </select> */}
                    <input
                      className="select-option-2 input-field"
                      type="text"
                      placeholder="District*"
                      name="district"
                      value={user.district}
                      required
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                </div>
                <div className="college-input2">
                  <div id="reg-college-1">
                    {/* <select defaultValue={""} className="input-field select-field" id="reg-college-2">
                <option value=""  disabled hidden>
                  College Name *
                </option>
                <option className="select-option" value="Gender 1">
                  IIT K
                </option>
                <option className="select-option" value="Gender 2">
                  IIT D
                </option>
                <option className="select-option" value="Gender 3">
                  IIT M
                </option>
              </select> */}
                    <Creatable
                      className="select-option-2 select-college"
                      required
                      // value={this.state.college}
                      value={user.selectedOption}
                      placeholder="Enter the College*"
                      onChange={handleChange2}
                      options={colleges}
                    />
                  </div>
                </div>
                <div className="college-input3">
                  <div>
                    {/* <input
                className="input-field"
                type=""
                placeholder="Branch *"
              /> */}
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Degree*"
                      name="degree"
                      value={user.degree}
                      required
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>
                  <div>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Year *"
                      name="year"
                      value={user.year}
                      required
                      onChange={onInputChange}
                    />
                  </div>
                </div>
              </div>


              {error && (
                  <div
                      className="text-danger"
                      style={{ margin:"0 0 30px 0" }}
                      dangerouslySetInnerHTML={{ __html: errorMsg }}
                  ></div>
              )}
   
              <div className="college-buttons">
                <button type="submit" className="college-button-submit" disabled={!active} style={active == true ? {background: "#ff00c6"} : {background: "#959595"}}>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : (
                    "Submit"
                  )}
                </button>
                <button className="college-button-clear" onClick={clearInput} >
                  Clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> 
    </>
  );
};

export default CollegeDetails;
