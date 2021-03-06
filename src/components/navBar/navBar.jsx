import React, { PureComponent } from 'react';

class NavBar extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <i className="navbar-logo fas fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count habit-count" data-testid="total-count">{this.props.totalCount}</span>
            </nav>
        );
    }
}

export default NavBar;