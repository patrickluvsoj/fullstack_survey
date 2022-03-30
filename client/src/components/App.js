// rendering layer especially for react router
import React, { useEffect, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {

    // useEffect( () => {
    //     console.log(actions.fetchUser)
    //     actions.fetchUser()
    // }, [])
    
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    {/* BrowserRouter only accepts at most one child! */}
                    <div>
                        {/* react router tries to match anything that contains path */}
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
};

// passing actions make it so that you can call actions as props
export default connect(null, actions)(App);