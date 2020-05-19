import React from 'react'
import { Container, CardDeck, Card, Button } from 'react-bootstrap'
import CarouselContainer from '../../Carousel/CarouselContainer'

let Home = (props) => {
    let homeCardElements = props.homeCard.map((card, i) => {
        return (
            <Card key={i} className='card-home'>
                <Card.Img variant='top' src={card.image.src} alt={card.image.alt} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <Button variant='primary'>Link</Button>
                </Card.Body>
            </Card>
        )
    })
    return (
        <div className='home'>
            <>
                <CarouselContainer />
                <Container>
                    <h2 className='text-center m-4'>Info</h2>
                    <CardDeck className='m-2'>
                        {homeCardElements}
                    </CardDeck>
                </Container>
            </>
        </div>
    )
}

export default Home