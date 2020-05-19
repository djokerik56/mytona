import React from 'react'
import { Container, Row, Col, Media, ListGroup, Card, Pagination } from 'react-bootstrap'

const News = (props) => {

    //pagination
    let pageClickPagination = (e) => {
        let clickId = Number(e.target.id)
        props.pageClick(clickId)
    }

    let totalUsersCount = props.newsInform.length
    let pagesCount = Math.ceil(totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const indexOfLastNews = props.currentPage * props.pageSize;
    const indexOfFirstNews = indexOfLastNews - props.pageSize;
    const currentNews = props.newsInform.slice(indexOfFirstNews, indexOfLastNews);

    // news post
    let postNewsInform = currentNews.map((post, i) => {
        return (
            <Media className='m-3' key={i}>
                <img
                    src={post.image.src}
                    alt={post.image.alt}
                />
                <Media.Body>
                    <h5>{post.title}</h5>
                    <p>{post.text}</p>
                </Media.Body>
            </Media>
        )
    })

    //list category
    let newsWidget = props.newsCategory.filter( cat => cat.name === props.activeCategory)
    let activeWidget = newsWidget.map((block, i) =>{
        return (
            <Card.Body key={i}>
                <Card.Title>
                    {block.widget.title}
                </Card.Title>
                <Card.Text>
                    {block.widget.text}
                </Card.Text>
            </Card.Body >
        )
    })

    //widget
    let newsCategory = props.newsCategory.map((cat, i) => {
        return (
            <ListGroup.Item className={props.activeCategory === cat.name && 'active'} key={i} onClick={() => props.newsFilter(cat.name)}>{cat.name}</ListGroup.Item>
        )
    })

    //jsx
    return (
        <Container>
            <h3 className='text-center mt-3'>Category {props.activeCategory}</h3>
            <Row>
                <Col md='9'>
                    {postNewsInform}
                </Col>
                <Col md='3'>
                    <h5 className='text-center mt-5'>Category</h5>
                    <Card>
                        <ListGroup variant='flush'>
                            {newsCategory}
                        </ListGroup>
                    </Card>
                    <Card className='mt-3' bg='light'>
                        {activeWidget}
                    </Card>
                </Col>
            </Row>
            <Pagination>
                {pages.map((page, i) => {
                    return (
                        <Pagination.Item
                            key={i}
                            id={page}
                            onClick={pageClickPagination}
                            active={props.currentPage === page ? 'active' : ""}>
                            {page}
                        </Pagination.Item>
                    )
                })}
            </Pagination>
        </Container>
    )
}

export default News
