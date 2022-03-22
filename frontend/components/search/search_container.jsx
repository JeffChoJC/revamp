import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Search from "./search";

const mapStateToProps = ({ errors }) => ({
    errors: errors.company
})

export default withRouter(connect(mapStateToProps)(Search));