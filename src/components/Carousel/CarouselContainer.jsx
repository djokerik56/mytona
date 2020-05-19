import React from 'react'
import CarouselBox from './CarouselBox'
import { connect } from 'react-redux'

class CarouselContainer extends React.Component {
    render() {
        return <CarouselBox carousel={this.props.carousel} />
    }
}

const mapSateToProps = (state) => {
    return{
        carousel: state.carousel.carouselHome
    }
}

export default connect(mapSateToProps,{})(CarouselContainer)
