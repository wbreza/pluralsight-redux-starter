import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

export const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            {" | "}
            <Link to="/courses" activeClassName="active">Courses</Link>
        </nav>
    );
};