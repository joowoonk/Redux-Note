import { TOGGLE_DARK_MODE } from "../actions/theme";

const initialState = {
  darkMode: false
};

// assigning initial state can be done in the parameters,
// so if "state" is empty at first, it will use the initial state
export function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        darkMode: !state.darkMode
      };
    default:
      return state;
  }
}
