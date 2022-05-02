import React from "react";

const User = (props) => {
  return (
    <span className="user">
      <span className="name">{props.user.name}</span>
      <span className="handle">{props.user.handle}</span>
    </span>
  );
};

//alternative method of passing in two props
// const User = (props) => {
//   return (
//     <span className="user">
//       <span className="name">{props.name}</span>
//       <span className="handle">{props.handle}</span>
//     </span>
//   );
// };

export default User;
