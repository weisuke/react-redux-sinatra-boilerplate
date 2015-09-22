import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux';

import "./style.scss"

export default React.createClass({
    render() {
        let {location} = this.props
        return (
            <div className="base-layout">
                <div className="header">
                    <nav>
                        <ul className="nav nav-pills pull-right">
                            <li role="presentation" className={ location.pathname == "/dashboard" ? "active" : "" }>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li role="presentation" className={ location.pathname == "/builds" ? "active" : "" }>
                                <Link to="/builds">Builds</Link>
                            </li>
                            <li role="presentation">
                                <a href="/admin">Admin</a>
                            </li>
                        </ul>
                    </nav>
                    <h3 className="text-muted">Dashboard</h3>
                </div>
                <div className="base-content">
                    {this.props.children}
                </div>
                <div className="footer">
                    <p>This is content that will reside in the footer</p>
                </div>
            </div>
        )
    }
});
