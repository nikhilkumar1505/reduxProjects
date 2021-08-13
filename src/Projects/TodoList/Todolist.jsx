import React from "react";
import { useState } from "react";
import { AddItem, DeleteItem,removeList } from "../../Redux/Action/TodoActions";
import { useDispatch, useSelector } from "react-redux";
import "./Todolist.scss";

const Todolist = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const list=useSelector(state=>state.TodoReducer.list)

  console.log(value);
  return (
    <>
      <div className="parent_div">
        <div className="main_div">
          <h1>Todo-List</h1>
          <div className="text-field">
            <input
              type="text"
              placeholder="Enter The Event"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="add-btn"
              onClick={() => (dispatch(AddItem(value)), setValue(""))}
            >
              +
            </button>
          </div>
          <div className="showlist">
            {list.map((item) => (
              <div className="eachItem">
                <button
                  className="delete-btn"
                  onClick={() => dispatch(DeleteItem(item.id))}
                >
                  -
                </button>
                <p>{item.data}</p>
              </div>
            ))}
          </div>
          {list.length!==0 && (
            <button
              className="remove_btn"
              onClick={() => dispatch(removeList())}
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Todolist;
