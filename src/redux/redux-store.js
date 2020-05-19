import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk";
import homeReducer from './home-reducer';
import aboutReducer from './about-reducer';
import newsReducer from './news-reducer';
import authReducer from "./auth-reducer";
import carouselReducer from "./carousel-reducer";

let reducers = combineReducers({
    homePage: homeReducer,
    aboutPage: aboutReducer,
    newsPage: newsReducer,
    auth: authReducer,
    carousel: carouselReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store=store;
export default store;