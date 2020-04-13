import React from "react";
import { connect } from "react-redux";
import { toggleDarkMode } from "../actions/theme";

function DarkMode(props) {
  return (
    <label>
      <input type="checkbox" value={props.enabled} onChange={props.toggle} />
      <span>Lights Out</span>
    </label>
  );
}

function mapStateToProps(state) {
  return {
    // notice how we can name the key whatever we want
    enabled: state.theme.darkMode
  };
}

const mapDispatchToProps = {
  // can also name the key anything here
  toggle: toggleDarkMode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DarkMode);
