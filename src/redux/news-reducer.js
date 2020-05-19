const CURRENT_PAGE = 'CURRENT_PAGE'
const FILTER_NEWS = 'FILTER_NEWS'
const UPDATE_PAGE = 'UPDATE_PAGE'
const ACTIVE_CATEGORY = 'ACTIVE_CATEGORY'

let initialState = {
    newsInform: [
        {
            title: 'React',
            image: {
                src: 'https://cdn.worldvectorlogo.com/logos/react.svg',
                alt: 'React'
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat optio voluptatum molestiae assumenda adipisci vitae facilis beatae pariatur, laborum accusantium eveniet fuga dolorem, aut qui nam corrupti quia explicabo.Necessitatibus libero asperiores sint laboriosam sed nemo, nam modi cumque consequuntur, quia dolorem corporis vel labore dignissimos magni ipsam similique praesentium. Similique officia magnam quaerat fuga! Iure explicabo facilis sapiente?',
            category: 'React'
        },
        {
            title: 'Redux',
            image: {
                src: 'https://cdn.worldvectorlogo.com/logos/redux.svg',
                alt: 'Redux'
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat optio voluptatum molestiae assumenda adipisci vitae facilis beatae pariatur, laborum accusantium eveniet fuga dolorem, aut qui nam corrupti quia explicabo.Necessitatibus libero asperiores sint laboriosam sed nemo, nam modi cumque consequuntur, quia dolorem corporis vel labore dignissimos magni ipsam similique praesentium. Similique officia magnam quaerat fuga! Iure explicabo facilis sapiente?',
            category: 'Redux'
        },
        {
            title: 'JavaScript',
            image: {
                src: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
                alt: 'JavaScript'
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat optio voluptatum molestiae assumenda adipisci vitae facilis beatae pariatur, laborum accusantium eveniet fuga dolorem, aut qui nam corrupti quia explicabo.Necessitatibus libero asperiores sint laboriosam sed nemo, nam modi cumque consequuntur, quia dolorem corporis vel labore dignissimos magni ipsam similique praesentium. Similique officia magnam quaerat fuga! Iure explicabo facilis sapiente?',
            category: 'JavaScript'
        },
        {
            title: 'Node.js',
            image: {
                src: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
                alt: 'Node.js'
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque fugiat optio voluptatum molestiae assumenda adipisci vitae facilis beatae pariatur, laborum accusantium eveniet fuga dolorem, aut qui nam corrupti quia explicabo.Necessitatibus libero asperiores sint laboriosam sed nemo, nam modi cumque consequuntur, quia dolorem corporis vel labore dignissimos magni ipsam similique praesentium. Similique officia magnam quaerat fuga! Iure explicabo facilis sapiente?',
            category: 'Node.js'
        }
    ],
    newsCategory: [
        {
            name: 'All',
            widget: {
                title: 'All widget',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, id. Eius incidunt optio exercitationem fuga blanditiis qui maiores molestias iure voluptatum excepturi quam, fugit similique quasi. Eligendi eius eveniet voluptate.'
            }
        },
        {
            name: 'React',
            widget: {
                title: 'React widget',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, id. Eius incidunt optio exercitationem fuga blanditiis qui maiores molestias iure voluptatum excepturi quam, fugit similique quasi. Eligendi eius eveniet voluptate.'
            }
        },
        {
            name: 'Redux',
            widget: {
                title: 'Redux widget',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, id. Eius incidunt optio exercitationem fuga blanditiis qui maiores molestias iure voluptatum excepturi quam, fugit similique quasi. Eligendi eius eveniet voluptate.'
            }
        },
        {
            name: 'JavaScript',
            widget: {
                title: 'JavaScript widget',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, id. Eius incidunt optio exercitationem fuga blanditiis qui maiores molestias iure voluptatum excepturi quam, fugit similique quasi. Eligendi eius eveniet voluptate.'
            }
        },
        {
            name: 'Node.js',
            widget: {
                title: 'Node.js widget',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, id. Eius incidunt optio exercitationem fuga blanditiis qui maiores molestias iure voluptatum excepturi quam, fugit similique quasi. Eligendi eius eveniet voluptate.'
            }
        },
    ],
    pageSize: 2,
    currentPage: 1,
    activeCategory: 'All'
}

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case UPDATE_PAGE:
            return {
                ...state,
                newsInform: [...action.newState]
            }
        case FILTER_NEWS:
            return {
                ...state,
                newsInform: [...action.updateNews]
            }
        case ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: action.updateCategory
            }
        default: return state;
    }
}

export const pageClick = (page) => {
    return {
        type: CURRENT_PAGE,
        page: page
    }
}

export const updateNewsCreator = (updateNews) => {
    return {
        type: FILTER_NEWS,
        updateNews: updateNews
    }
}

export const updateCategoryCreator = (updateCategory) => {
    return {
        type: ACTIVE_CATEGORY,
        updateCategory: updateCategory
    }
}



export const newsFilter = (item = 'All') => {
    return (dispatch) => {
        if (item === 'All') {
            dispatch(updateNewsCreator(initialState.newsInform))
            dispatch(updateCategoryCreator(item))
        } else if (item !== 'All') {
            let newPosts = initialState.newsInform.filter(news => news.category === item)
            dispatch(updateNewsCreator(newPosts))
            dispatch(updateCategoryCreator(item))
        }
    }
}

export default newsReducer;

