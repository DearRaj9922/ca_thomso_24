import axios from "axios";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const PostSharing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const post_id = searchParams.get("post_id");
  const ca_id = searchParams.get("ca_id");
  const link = searchParams.get("link");

  useEffect(() => {
    // console.log("meowefsdinf")
    let is_opened = localStorage.getItem("is_opened");
    if (is_opened) {
      is_opened = JSON.parse(is_opened);
      if (is_opened?.includes(post_id)) {
        window.location.href = link;
      } else {
        let new_is_opened = is_opened;
        new_is_opened.push(post_id);
        localStorage.setItem("is_opened", JSON.stringify(new_is_opened));
        send_post_share(post_id, ca_id, link);
      }
    } else if (!is_opened) {
      let new_is_opened = [];
      new_is_opened.push(post_id);
      localStorage.setItem("is_opened", JSON.stringify(new_is_opened));
      send_post_share(post_id, ca_id, link);
    }
  }, [post_id, ca_id, link]);
  const send_post_share = (post_id, ca_id, link) => {
    const data = {
      post: post_id,
      ca: ca_id,
    };
    axios
      .post("https://api2.thomso.in/apiV1/ca_post_view", data)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          window.location.href = link;
        } else {
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return <div></div>;
};

export default PostSharing;
