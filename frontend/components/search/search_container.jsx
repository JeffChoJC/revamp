import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Search from "./search";

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors.restaurant
})

export default withRouter(connect(mapStateToProps)(Search));