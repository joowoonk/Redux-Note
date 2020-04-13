import {TOGGLE_EDITING, UPDATE_TITLE} from "../actions/title"

export const initialState = {
    title: "The Reducer Pattern",
    editing: false
  };
  
  export function reducer(state = initialState, action) {
    switch (action.type) {
    //   case "TOGGLE_EDITING": //react wont tell you the mispelling error. So refer back to actions/title.js how it's done to make it notify you with an spelling erorr.
      case TOGGLE_EDITING:
        return {
          ...state,
          editing: !state.editing
        };
      case UPDATE_TITLE:
        return {
          ...state,
          title: action.payload
        };
      default:
        return state;
    }
  }
  