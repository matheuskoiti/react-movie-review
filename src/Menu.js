import React, { Component } from 'react';
import './css/App.css';
import './css/pure-min.css';
import './css/side-menu.css';

class Menu extends Component {
	render() {
	  return (
		<div id="menu">
	        <div className="pure-menu">
	            <a className="pure-menu-heading" href="#">MENU</a>

	            <ul className="pure-menu-list">
	            	<li className="pure-menu-item"><a href="/" className="pure-menu-link">Home</a></li>
	            </ul>
	        </div>
		</div>
	  );
	}
	
}

export default Menu;
