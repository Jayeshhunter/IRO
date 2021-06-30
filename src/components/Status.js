import React from "react";

// import { useDispatch } from "react-redux";
// import { updateTodo } from "../actions/index";

function Status(props) {
  //   const dispatch = useDispatch();
  //   if (props.status === "active") {
  //   dispatch(updateTodo(props.data));

  return (
    <>
      {props.status === "active" ? (
        <div className="the-two">
          <h5>failed</h5>
        </div>
      ) : (
        <div className="the-two">
          <h5>{props.status}</h5>
        </div>
      )}
    </>
  );
}

export default Status;
