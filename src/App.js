import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Route } from 'react-router-dom'
import NavbarMain from './components/NavbarMain/NavbarMain';

import {Provider} from 'react-redux';
import {store} from './store/store';

import login from './container/login/login';
import teacher from './components/teacher/teacher';

function App() {
  return (
    <div>
      <BrowserRouter>
       <div>
         <Provider store = {store}>
           <NavbarMain />
           <Route exact path='/' component={login} />
           <Route exact path='/Teacher' component={teacher} />
         </Provider>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
