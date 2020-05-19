import React from 'react'
import About from './About'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class AboutContainer extends React.Component {
    render() {
        return <About aboutInfo={this.props.aboutInfo}/>
    }
}
let mapStateToProps = (state) => {
    return{
        aboutInfo: state.aboutPage.aboutInfo
    }
}
export default compose(
    connect( mapStateToProps, {}),withAuthRedirect)(AboutContainer);