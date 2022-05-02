import React from "react";

import Actions from "./Actions";
import Message from "./Message";
import TimeStamp from "./Timestamp";
import ProfileImage from "./ProfileImage";
import User from "./User";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage imgUrl={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          {/* <User name={props.tweet.user.name} handle={props.tweet.user.handle} /> */}
          <User user={props.tweet.user} />
          <TimeStamp timestamp={props.tweet.timestamp} />
        </div>
        <Message content={props.tweet.message} />
        <Actions />
      </div>
      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
