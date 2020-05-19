import React from 'react'
import News from './News'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { pageClick, newsFilter } from '../../../redux/news-reducer'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'

class NewsContainer extends React.Component {

    render() {
        return <News
            newsInform={this.props.newsInform}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            pageClick = {this.props.pageClick}
            newsDefault = {this.props.newsDefault}
            newsCategory = {this.props.newsCategory}
            newsFilter = {this.props.newsFilter}
            updateCategory = {this.props.updateCategory}
            activeCategory = {this.props.activeCategory}
        />
    }
}
let mapStateToProps = (state) => {
    return{
        newsInform: state.newsPage.newsInform,
        pageSize: state.newsPage.pageSize,
        currentPage: state.newsPage.currentPage,
        newsCategory: state.newsPage.newsCategory,
        updateCategory: state.newsPage.updateCategory,
        activeCategory: state.newsPage.activeCategory
    }
}

export default compose(connect(mapStateToProps, {
    pageClick,
    newsFilter
}), withAuthRedirect)(NewsContainer)
