import React, { Component, PropTypes } from "react";
import Loader from 'react-loader';

import './style.scss'

class SearchPanel extends Component {

    handleSearch(e) {
        e.preventDefault();
        this.props.onChange({q: this.refs.searchInput.value})
    }

    componentDidMount() {
        var query = this.props.query;
        query && this.props.onSubmit(query);
    }

    componentWillReceiveProps(nextProps) {
        var newQuery = nextProps.query;
        newQuery !== this.props.query && this.props.onSubmit(newQuery)
    }

    render(){
        var resultContent, { results, error, query, loaded } = this.props;
        if (error) {
            resultContent = (
                <div className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span>
                    {error}
                </div>
            )
        } else if (results) {
            if (results.length > 0) {
                resultContent = (
                    <div className="result">
                        <div className="repo-list">
                            <ul>
                                {results.map((result) => {
                                    return <li key={result.id}>{result.content}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                )
            } else {
                resultContent = <h1>No results match your query.</h1>
            }
        }
        return (
            <div className="search-panel">
                <div className="row">
                    <form className="col-md-11" onSubmit={this.handleSearch.bind(this)}>
                        <div className="input-group">
                            <input className="form-control input-lg" type="text" ref="searchInput" placeholder="Type 'list' or 'single'..." defaultValue={query}/>
                                <span className="input-group-btn">
                                    <button className="btn btn-primary btn-lg" onClick={this.handleSearch.bind(this)} type="button">Search</button>
                                </span>
                        </div>
                    </form>
                </div>
                <div className='search-results'>
                    <Loader loaded={loaded} top='50%'>
                        {resultContent}
                    </Loader>
                </div>
            </div>
        )
    }
}

SearchPanel.propTypes = {
    query: PropTypes.string,
    error: PropTypes.string,
    searchResults : PropTypes.array,
    loaded : PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchPanel