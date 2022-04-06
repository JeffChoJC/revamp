import React from 'react';
import CompanyIndexItem from './company_index_item';
import SearchContainer from '../search/search_container';


class CompanyIndex extends React.Component {
    search() {
        const keyString = this.props.location.search.slice(9);
        const keywords = keyString.split("%20");
        const datetime = this.props.location.hash.split("#");
        const date = datetime[1].split("%20").join(" ");
        const time = datetime[2];
        const keyword = { keyword: keywords.join(" "), date: date, time: time }
        
        this.props.searchCompanies(keyword);
    }

    componentDidMount() {
        this.search();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            this.search();
        }
    }

    render() {
        if (!this.props.companies) return null;
        const datetime = this.props.location.hash.split("#");
        
        const companies = this.props.companies.map(company => {
            return (
                <CompanyIndexItem
                    key={ company.id } 
                    company={ company }
                    time={ datetime[2] }
                />
            )
        })

        return (
            <>
            <SearchContainer />
            <div className="table-results"></div>
            <div className="company-index-container">
                <div className="company-index-wrapper">
                    <ul className="companies">
                        <p className="num-tables">{`${this.props.companies.length} COMPANIES AVAILABLE`}</p>
                        { companies }
                    </ul>
                </div>
            </div>
            </>
        )
    }
}

export default CompanyIndex;