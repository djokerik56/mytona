import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import {logout} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {
    render() {
        return <Header userName={this.props.userName} isAuth={this.props.isAuth} {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        userName: state.auth.login
    }
}

export default connect(mapStateToProps, {
    logout
})(HeaderContainer)
