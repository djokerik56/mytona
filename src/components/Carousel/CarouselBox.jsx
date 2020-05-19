import React from 'react'
import { Carousel } from 'react-bootstrap'

const CarouselBox = (props) => {
    let postCarousel = props.carousel.map((card, i) => {
        return (
            <Carousel.Item key={i}>
            <img
                className='d-block w-100'
                src={card.image.src}
                alt={card.image.alt}
            />
            <Carousel.Caption>
                <h3>{card.text.title}</h3>
                <p>{card.text.text}</p>
            </Carousel.Caption>
        </Carousel.Item>
        )
    })
    return (
            <Carousel className='carousel'>
                {postCarousel}
            </Carousel>
    )
}

export default CarouselBox
