import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchCompanies } from '../../actions/company_actions';
import { toArray } from '../../reducers/selectors';
import CompanyIndex from './company_index';

const msp = (state) => ({
    companies: toArray(state.entities.companies)
})

const mdp = dispatch => ({
    searchCompanies: (keyword) => dispatch(searchCompanies(keyword))
})

export default withRouter(connect(msp, mdp)(CompanyIndex))