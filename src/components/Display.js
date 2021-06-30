import React, { useState, useEffect } from "react";
import { interval } from "rxjs";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../actions/index";
import Status from "./Status";
import "./Display.css";
const observable$ = interval(1000);

function Display(props) {
  const [lis, setLis] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const subscription = observable$.subscribe((x) => setLis(x));
    return () => subscription.unsubscribe();
  }, []);
  return (
    <div>
      {props.time - lis >= 0 && props.data.status === "active" ? (
        <div className="the-two">
          <h5>{props.time - lis}s remaining..</h5>
          <button
            type="button"
            class="btn btn-secondary cancel"
            onClick={() => {
              dispatch(deleteTodo(props.data.data));
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <Status status={props.data.status} data={props.data.data} />
      )}
    </div>
  );
}

export default Display;
