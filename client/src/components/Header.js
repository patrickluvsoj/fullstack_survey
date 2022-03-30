import React, { Component } from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    
    renderContent() {
        console.log(this.props.auth)
        switch (this.props.auth) {
            case null:
                return 'logging in'
            case false:
                return (
                    <li><a href='/auth/google'>Google Login</a></li>
                )
            default:
                return (
                    <li><a href='/api/logout'> Logout</a></li>
                )
        }
    }
    
    
    render () {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link 
                        to={this.props.auth ? 'surveys' : '/'}
                    >
                        Servyay
                    </Link>
                    <ul className='right'>
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

// destructuring state to { auth }
function mapStateToProps( {auth} ) {
    // returning { auth: auth } but simplifying it
    // return { auth: state.auth }
    return { auth }
}

export default connect(mapStateToProps)(Header);