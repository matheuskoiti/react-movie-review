import React, { Component } from 'react';
import './css/App.css';
import './css/pure-min.css';
import './css/side-menu.css';
import Form from './Form';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
    	<div id="App">
    		<Menu />
			<section className="container">
				<div className="left-half">
					<article>
						<Form />
					</article>
				</div>
				<div className="right-half">
					<article>
					</article>
				</div>
			</section>
    	</div>	
    );
  }
}

export default App;
