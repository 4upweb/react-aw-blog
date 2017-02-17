import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <nav className="navbar navbar-default">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">{this.props.title}</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
