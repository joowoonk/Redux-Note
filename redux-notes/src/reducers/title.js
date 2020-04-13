export const initialState = {
    title: "The Reducer Pattern",
    editing: false
  };
  
  export function reducer(state = initialState, action) {
    switch (action.type) {
      case "TOGGLE_EDITING":
        return {
          ...state,
          editing: !state.editing
        };
      case "UPDATE_TITLE":
        return {
          ...state,
          title: action.payload
        };
      default:
        return state;
    }
  }
  