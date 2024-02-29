/* eslint-disable react/prop-types */
// import React from "react";
// function User(props){
//   return (
//     <>
//       <h1>User Component</h1>
//       <h2>{props.data.name}</h2>
//       <h2>{props.data.age}</h2>
//     </>
//   );
// };
// export default User;
  

                //    or


function User(props){
    const {data}=props;
  return (
    <>
      <h1>User Component</h1>
      <h2>{data.name}</h2>
      <h2>{data.age}</h2>
    </>
  );
};
export default User;
  // here const {data}=props; this line helps to store the data in the props.
  // and it will not necessarily to call the  props.data.name instead of this we can call the data.name