import React, { useEffect, useState } from "react";
import "./feed.css";
import img from "./quizardry.png";
import copy from "./copy.png";
import { message } from "antd";
import axios from "axios";
import { connect } from "react-redux";
import { fetchFeeds } from "../User/UserActions";

const FeedData = ({ fetchFeed, feeds }) => {
  const [user, setUser] = useState();
  const [seeMore, setSeeMore] = useState(false);

  const copyItem = (link) => {
    navigator.clipboard.writeText(link);
    message.success("Link copied to clipboard");
  };
  // const getData =()=>{
  //   axios.get("https://api.thomso.in/apiV1/get_all_posts?ca_id=199")
  //   .then((response)=>{
  //       setUser(response.data);
  //     console.log("data",response.data);
  //   })
  // }
  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div className="feedContainer">
      <div className="feed">Feeds</div>
      {feeds &&
        feeds.map((user) => {
          return (
            <div className="event_box">
              <div className="pLeft">
                {" "}
                <a href={user.permalink} target="_blank">
                  <img
                    src={img}
                      // user.media_type == "VIDEO"
                      //   ? user.thumbnail_url
                      //   : user.media_url
                    
                    alt=""
                  />
                </a>
              </div>
              <div className="pRight">
                <div className="phead">
                  {user?.title ?? "Thomso'24- A Mystical Sierra"}
                </div>
                <p
                  className="hideDesc"
                  onClick={() => {
                    setSeeMore(!seeMore);
                  }}
                >
                  {user.caption.substr(0, 250) + "......"}
                </p>

                <div className="note">
                  Note : <span>05 points per share</span>
                </div>
                <div className="pBottom">
                  <div>
                    <div
                      className="copy"
                      onClick={() => copyItem(user.sharable_link)}
                    >
                      <img src={copy} alt="" />{" "}
                      <span style={{ fontSize: "16px", padding: "6px" }}>
                        Copy link
                      </span>
                    </div>
                    <p>{user.analytics.views} times shared</p>
                  </div>
                  <div className="points">
                    {" "}
                    <span style={{ fontSize: "24px" }}>
                      {user.analytics.total_points}
                    </span>{" "}
                    <span>points</span> <span>earned</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  let feeds = state.user.feeds;

  return {
    feeds,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: (params) => dispatch(fetchFeeds(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedData);
