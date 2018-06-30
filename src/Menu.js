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
	            	<li className="pure-menu-item"><a href="/form" className="pure-menu-link">Avaliar</a></li>
	            	<li className="pure-menu-item"><a href="/history" className="pure-menu-link">Histórico</a></li>
	            	<li className="pure-menu-item"><a href="/average" className="pure-menu-link">Médias</a></li>
	            </ul>
	        </div>
		</div>
	  );
	}
	
}

export default Menu;
