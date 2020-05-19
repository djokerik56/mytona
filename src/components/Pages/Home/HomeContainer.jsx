import React from 'react';
import Home from './Home';
import { connect } from 'react-redux';

class HomeContainer extends React.Component {
    render() {
        return <Home homeCard={this.props.homeCard} />
    }
}

let mapStateToProps = (state) =>{
    return{
        homeCard: state.homePage.homeCard,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {})(HomeContainer);