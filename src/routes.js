import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Accueil from './components/Home Page/homePage'

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div className='routes-container'>
            <Route exact path='/' component={Accueil}/>
            {/* <Route exact path='/menu' component={Menu}/>
            <Route exact path='/apropos' component={APropos}/> */}
        </div> );
    }
}
 
export default Routes;