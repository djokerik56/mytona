import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import AboutContainer from './components/Pages/About/AboutContainer'
import HomeContainer from './components/Pages/Home/HomeContainer';
import NewsContainer from './components/Pages/News/NewsContainer';
import LoginContainer from './components/Login/LoginContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <main className="content">
        <Switch>
          <Route exact path='/' render={()=><HomeContainer/>} />
          <Route path='/about' render={()=><AboutContainer/>} />
          <Route path='/news' render={()=><NewsContainer/>} />
          <Route path='/login' render={()=><LoginContainer/>} />
        </Switch>
      </main>
    </div>
  )
}

export default App