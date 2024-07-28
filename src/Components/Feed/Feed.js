import React, { useState } from "react";
import "../NewProfile/newprofile.css";
import img1 from "./image/Group1.png";
import img2 from "./image/Group2.png";
import logo1 from "./image/image 13037 (Traced).png";
import logo2 from "./image/Vector (1).png";
import logo3 from "./image/Vector (2).png";
import { connect } from "react-redux";
import { fetchUser, logout } from "../User/UserActions";
import CustomModal from "../CustomModal/CustomModal";
import { message } from "antd";
import FeedData from "./FeedData";
import LeftBar from "../Profile/LeftBar";
import RightBar from "../registration/Leaderboard/LeaderRightbar";
import MobDisplay from "../MobileComponents/MobDisplay";
import MobHeader from "../MobileComponents/MobHeader";

const Feed = (props) => {
  //   const [user, setUser] = useState([]);
  // const {id} = useParams();
  const [logoutModal, setLogoutModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [openClg, setOpenClg] = useState(false);
  const { userDetails: user, loading } = props;

  const openCollege = () => {
    setOpen(!open);
  };
  const openaddress = () => {
    setOpenClg(!openClg);
  };

  //   useEffect(() => {
  //     loadUsers();
  //   }, []);

  //   const loadUsers = async () => {
  //     const res = await axios.get(`/apiV1/registerca/${id}`, user);
  //     setUser(res.data);
  //   };

  const getCode = () => {
    navigator.clipboard.writeText(user.thomso_id);
    message.success("Code copied to clipboard");
  };
  const getParams = () => {
    return {
      id: 1,
      modalHeight: "166px",
      modalWidth: "366px",
      overflowY: "hidden",
      // logout: props.logouts,
    };
  };

  return (
    <>
      <div className="PAcontainer">
        <div className="mob-header-hai">
          <MobHeader />
        </div>
        <div
          className="fpage"
          style={
            logoutModal
              ? {
                  filter: 'blur("3px")',
                  webkitFilter: " blur(3px)",
                }
              : null
          }
        >
          <div className="LeaderboardLeft">
            <LeftBar />
          </div>

          <FeedData />
          <div className="LeaderboardLight">
            <RightBar />
          </div>
        </div>

        {logoutModal && (
          <CustomModal
            id={1}
            onCloseModal={setLogoutModal}
            params={getParams()}
          />
        )}
      </div>
      {/* <MobDisplay /> */}
    </>
  );
};

const mapStateToProps = (state) => {
  let userDetails = state.user.user;
  let loading = state.user.loading;

  return {
    userDetails,
    loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (params) => dispatch(fetchUser(params)),
    logouts: (params) => dispatch(logout(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
