import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../actions/index";
import "./todo.css";
import Display from "./Display";

const Todo = () => {
  const [val, setVal] = useState("");
  const [mod, setMod] = useState(0);

  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-child">
        <div className="child-div">
          <h3>CloudWork</h3>

          <hr class="new4" />
          <h5>Workloads</h5>
          <div className="list">
            <div className="showItems">
              {list.map((ele, index) => {
                return (
                  <div className="eachItem">
                    <div className="coms">
                      <h4>{ele.data}</h4>
                      <h5>Complexity {ele.mod / 60}</h5>
                    </div>
                    <Display time={ele.mod} data={ele} />
                  </div>
                );
              })}
            </div>
            <div className="addItems">
              <h3>Create a workload</h3>
              <label for="customRange2" class="form-label">
                Complexity: {mod}
              </label>
              <input
                type="range"
                class="form-range"
                min="1"
                max="10"
                id="customRange2"
                onChange={(e) => {
                  setMod(e.target.value);
                  setVal("Workload #");
                }}
                value={mod}
              />

              <button
                type="button"
                onClick={() => {
                  dispatch(addTodo(val, mod), setVal(""), setMod(null));
                }}
                class="btn btn-primary create"
              >
                Create WorkLoad
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
