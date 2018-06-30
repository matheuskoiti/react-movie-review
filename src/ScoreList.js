import React, { Component } from 'react';
import './css/App.css';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';

class ScoreList extends Component {
	constructor() {
		super();

    	this.state = {movies : [], result: ""};
    	this.sendForm = this.sendForm.bind(this);
	}

	componentWillMount() {
		$.ajax({
			url: "http://localhost:8080/movie/all",
			datatype: 'json',
			success: function(response){
				this.setState({movies:response});
			}.bind(this),
		});
	}

	sendForm(event) {
		const data = new FormData(event.target);
		const movie = data.getAll('movie');

		event.preventDefault();
		$.ajax({
			url: "http://localhost:8080/review/average-score/movie/" + movie,
		 	datatype: 'json',
		 	success: function(response) {
		 		this.setState({result:response});
		 	}.bind(this)
		});
	}

	render() {
	  return (
		<div id="App-form">
	      	<div className="App-title-form">
	      		Visualizar Nota Média 
	      	</div>
			<form className="pure-form pure-form-aligned" onSubmit={this.sendForm}>
			    <fieldset>
			        <div className="pure-control-group">
			        	<label htmlFor="name">Filme</label>
			            <select name="movie" id="movie" type="text">
			            {
		                	this.state.movies.map(function(movie){
			                  	return (
			                    	<option value={movie.id}>{movie.name}</option>
			                    );
		                	})
		                }
			            </select>

			        </div>
			        <div className="pure-controls right-margin">
			            <button type="submit" className="pure-button pure-button-primary right-margin">Visualizar</button>
			        </div>
			    </fieldset>
			</form>

			<div className="result-container">
		      	<div className="result">
					Confira a nota média do filme:
				</div>
				<table className="pure-table pure-table-horizontal">
				    <thead>
				        <tr>
				            <th>Nota média</th>
				        </tr>
				    </thead>

				    <tbody>
		    			{
					        <tr>
					            <td>{this.state.result}</td>
					        </tr>	                    	
		                }
				    </tbody>
				</table>
			</div>

		</div>
	  );
	}
	
}


export default ScoreList;
