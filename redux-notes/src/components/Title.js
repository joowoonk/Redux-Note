import React, { useState } from "react";
import { initialState, reducer } from "../reducers/title";

import { connect } from "react-redux" // since you connect the react with redux, you can import connect and add mapStateToProps to bring all the global states to this componetn. Refer to mapStateToProps to see how it's done.

import {toggleEditing, updateTitle} from '../actions/title' // refer to mapDispatchToProps


const Title = (props) => {
  const [newTitle, setNewTitle] = useState();
//   const [state, dispatch] = useReducer(reducer, initialState); since you props.dispatch and others (state.title and state.editing) you don't need this. 

  const handleChanges = e => {
    setNewTitle(e.target.value);
  };

  const handleEdit = e => {
    e.preventDefault();
    // props.dispatch({ type: "TOGGLE_EDITING" });
    props.toggleEditing();
  };

  const handleSubmit = e => {
    e.preventDefault();
    setNewTitle("");
    // props.dispatch({ type: "UPDATE_TITLE", payload: });
    props.updateTitle(newTitle || props.title );

    // props.dispatch({ type: "TOGGLE_EDITING" });
    props.toggleEditing();
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
    } //title and eidting as proverty are  banana words.
}


// function mapDispatchToProps(dispatch){
//     return{
//         updateTitle: (title) => dispatch(updateTitle(title)),
//         toggleEditing: () => dispatch(toggleEditing)
//     } //updateTitle and toggleEditing as proverty are banana words.
// } look down below the code, more conside and works fine. 

const mapDispatchToProps = { // even if you dont say dispatch they will just do dispatch for you. 
    //updateTitle: updateTitle if the key/value are the same.
    updateTitle,

    toggleEditing
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);
