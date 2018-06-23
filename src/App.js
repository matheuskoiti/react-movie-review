import React, { Component } from 'react';
import './css/App.css';
import './css/pure-min.css';
import './css/side-menu.css';
import Form from './Form';
import Menu from './Menu';
import List from './List';
import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
    	<div id="App">
    		<Menu />

    		<div className="form">
    			<Switch>
					<Route path='/form' component={Form}/>
					<Route path='/history' component={List}/>
				</Switch>
    		</div>
    	</div>	
    );
  }
}

export default App;
