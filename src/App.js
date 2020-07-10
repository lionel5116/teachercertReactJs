import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter,Route } from 'react-router-dom'
import NavbarMain from './components/NavbarMain/NavbarMain';

//import {Provider} from 'react-redux';
//import {store} from './store/store';

import Login from './container/login/login';
import HcadData from './components/hcadrecordlist/hcadrecordlist';
import axiosExample from './components/axiosExample';
import postDataAxios from './components/PostDataAxios';
import FetchDataPureFunction from './components/FetchDataPureFunction';
import PureLogin from './components/PureLogin';
import Teacher from './components/teacher/teacher';
import LoginDetails from './components/logindetails/logindetails';
import BootstrapTableExample from './components/bootstrapTableExample';


//I placed the REDUX store/providor information in the index.js file according to the DOCS



function App() {
  return (
    <div>
      <BrowserRouter>
       <div>
           <NavbarMain />
           <Route exact path='/' component={Login} />
           <Route exact path='/LoginDetails' component={LoginDetails} />
           <Route exact path='/AxiosExample' component={axiosExample} />
           <Route exact path='/HcadDataList' component={HcadData} />
           <Route exact path='/postDataAxios' component={postDataAxios} />
           <Route exact path='/FetchDataPureFunction' component={FetchDataPureFunction} />
           <Route exact path='/PureLogin' component={PureLogin} />
           <Route exact path='/Teacher' component={Teacher} />
           <Route exact path='/BootstrapTableExample' component={BootstrapTableExample} />
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
