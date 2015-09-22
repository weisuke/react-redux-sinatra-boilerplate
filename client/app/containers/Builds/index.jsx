import React from "react";
import { Link } from "react-router";

export default React.createClass({
    render: function() {
        return <div>
            <h2>Builds</h2>
            <p>This is the build page.</p>
            <p>You can switch to <Link to="/main/dashboard">dashboard</Link>.</p>
        </div>;
    }
});