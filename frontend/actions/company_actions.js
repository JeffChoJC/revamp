import * as ApiUtil from '../util/company_api_util';

export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";
export const RECEIVE_COMPANY = "RECEIVE_COMPANY";
export const RECEIVE_COMPANY_ERRORS = 'RECEIVE_COMPANY_ERRORS';

// COMPANIES
const receiveCompanies = ({ companies }) => ({
    type: RECEIVE_COMPANIES,
    companies
})

const receiveCompany = ({ company, reviews, authors, reservations, favorites }) => ({
    type: RECEIVE_COMPANY,
    company,
    reviews,
    authors,
    reservations,
    favorites
})

export const fetchCompany = id => dispatch => (
    ApiUtil.fetchCompany(id).then(
        company => dispatch(receiveCompany(company))
    )
)

export const searchCompanies = keyword => dispatch => (
    ApiUtil.searchCompanies(keyword).then(companies => dispatch(receiveCompanies(companies)))
)

// ERRORS
const receiveCompaniesErrors = errors => {
    return ({
        type: RECEIVE_COMPANY_ERRORS,
        errors
    });
};