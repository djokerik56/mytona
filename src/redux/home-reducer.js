let initialState = {
    homeCard: [
        {
            title: 'Card1',
            image: {
                src: 'https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Team1'
            },
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius amet doloribus maxime nemo iure laudantium dolores laboriosam aperiam aliquid ullam exercitationem voluptate, quam doloremque necessitatibus vel architecto sequi similique in!'
        },
        {
            title: 'Card2',
            image: {
                src: 'https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Team2'
            },
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius amet doloribus maxime nemo iure laudantium dolores laboriosam aperiam aliquid ullam exercitationem voluptate, quam doloremque necessitatibus vel architecto sequi similique in!'
        },
        {
            title: 'Card3',
            image: {
                src: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Team3'
            },
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius amet doloribus maxime nemo iure laudantium dolores laboriosam aperiam aliquid ullam exercitationem voluptate, quam doloremque necessitatibus vel architecto sequi similique in!'
        },
        {
            title: 'Card4',
            image:{
                src: 'https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Team4'
            },
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius amet doloribus maxime nemo iure laudantium dolores laboriosam aperiam aliquid ullam exercitationem voluptate, quam doloremque necessitatibus vel architecto sequi similique in!'
        },
        {
            title: 'Card5',
            image:{
                src: 'https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Team5'
            },
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius amet doloribus maxime nemo iure laudantium dolores laboriosam aperiam aliquid ullam exercitationem voluptate, quam doloremque necessitatibus vel architecto sequi similique in!'
        }
    ]
}
const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default homeReducer;