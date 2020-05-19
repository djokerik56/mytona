let initialState = {
    carouselHome: [
        {
            image:{
                src:'https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'ForestImg'
            },
            text:{
                title: 'ForestImg',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio quisquam nobis molestias officia, ducimus esse itaque quibusdam libero atque inventore suscipit nesciunt dignissimos optio, aliquam fugiat, ea id earum.'
            }
        },
        {
            image:{
                src:'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'NatureImg'
            },
            text:{
                title: 'NatureImg',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio quisquam nobis molestias officia, ducimus esse itaque quibusdam libero atque inventore suscipit nesciunt dignissimos optio, aliquam fugiat, ea id earum.'
            }
        },
        {
            image:{
                src:'https://images.pexels.com/photos/292442/pexels-photo-292442.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                alt: 'RockyImg'
            },
            text:{
                title: 'RockyImg',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae odio quisquam nobis molestias officia, ducimus esse itaque quibusdam libero atque inventore suscipit nesciunt dignissimos optio, aliquam fugiat, ea id earum.'
            }
        }
    
    ]
}

const carouselReducer = (state = initialState, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default carouselReducer
