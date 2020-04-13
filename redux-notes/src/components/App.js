import React from "react";
import { connect } from "react-redux";
import DarkMode from "./DarkMode";
import Title from "./Title";

function App(props) {
  return (
    <div className={`app ${props.darkMode ? "dark" : ""}`}>
      <DarkMode />
      <Title />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    darkMode: state.theme.darkMode
  };
}

// notice how "mapDispatchToProps" is optional.
// since we're not calling action creators here, we don't need it.
export default connect(mapStateToProps)(App);
