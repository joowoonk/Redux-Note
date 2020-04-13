import React, { useState } from "react";
import { initialState, reducer } from "../reducers/title";

import { connect } from "react-redux" // in order to allow us to connect react component to redux

const Title = (props) => {
  const [newTitle, setNewTitle] = useState();
//   const [state, dispatch] = useReducer(reducer, initialState); since you props.dispatch and others (state.title and state.editing) you don't need this. 

  const handleChanges = e => {
    setNewTitle(e.target.value);
  };

  const handleEdit = e => {
    e.preventDefault();
    props.dispatch({ type: "TOGGLE_EDITING" });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewTitle("");
    props.dispatch({ type: "UPDATE_TITLE", payload: newTitle || props.title });
    props.dispatch({ type: "TOGGLE_EDITING" });
  };

  return (
    <div>
      {props.editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="newTitle"
            placeholder={props.title}
            value={newTitle}
            onChange={handleChanges}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

function mapStateToProps(state ) {// state can be store too. depends on what you want to name it.
    return{
        title: state.title,
        editing: state.editing
    }
}

export default connect(mapStateToProps)(Title);
