let initialState = {
    aboutInfo: [
        {
            link: 'Tab 1',
            image: {
                src: 'https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Team1'
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non doloremque nihil? Quis quos similique sit voluptas, quod cupiditate expedita? Sapiente laudantium officia placeat, suscipit ea ullam repudiandae quis. Blanditiis.Sint voluptatem eveniet laudantium temporibus eligendi minus aperiam perspiciatis cum ex alias similique, id, cumque repellendus nam officia ducimus quas sequi dolore rerum cupiditate magnam error. Vel explicabo quisquam modi?',
            eventKey: 'first'

        },
        {
            link: 'Tab 2',
            image: {
                src: 'https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Team2'
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non doloremque nihil? Quis quos similique sit voluptas, quod cupiditate expedita? Sapiente laudantium officia placeat, suscipit ea ullam repudiandae quis. Blanditiis.Sint voluptatem eveniet laudantium temporibus eligendi minus aperiam perspiciatis cum ex alias similique, id, cumque repellendus nam officia ducimus quas sequi dolore rerum cupiditate magnam error. Vel explicabo quisquam modi?',
            eventKey: 'second'

        },
        {
            link: 'Tab 3',
            image: {
                src: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Team3'
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non doloremque nihil? Quis quos similique sit voluptas, quod cupiditate expedita? Sapiente laudantium officia placeat, suscipit ea ullam repudiandae quis. Blanditiis.Sint voluptatem eveniet laudantium temporibus eligendi minus aperiam perspiciatis cum ex alias similique, id, cumque repellendus nam officia ducimus quas sequi dolore rerum cupiditate magnam error. Vel explicabo quisquam modi?',
            eventKey: 'third'

        },
        {
            link: 'Tab 4',
            image: {
                src: 'https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Team4'
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non doloremque nihil? Quis quos similique sit voluptas, quod cupiditate expedita? Sapiente laudantium officia placeat, suscipit ea ullam repudiandae quis. Blanditiis.Sint voluptatem eveniet laudantium temporibus eligendi minus aperiam perspiciatis cum ex alias similique, id, cumque repellendus nam officia ducimus quas sequi dolore rerum cupiditate magnam error. Vel explicabo quisquam modi?',
            eventKey: 'four'

        },
        {
            link: 'Tab 5',
            image: {
                src: 'https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'Team5'
            },
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti non doloremque nihil? Quis quos similique sit voluptas, quod cupiditate expedita? Sapiente laudantium officia placeat, suscipit ea ullam repudiandae quis. Blanditiis.Sint voluptatem eveniet laudantium temporibus eligendi minus aperiam perspiciatis cum ex alias similique, id, cumque repellendus nam officia ducimus quas sequi dolore rerum cupiditate magnam error. Vel explicabo quisquam modi?',
            eventKey: 'five'

        },
    ]
}
const aboutReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default aboutReducer;