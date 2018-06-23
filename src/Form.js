import React, { Component } from 'react';
import './css/App.css';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';

class Form extends Component {
	constructor() {
		super();

    	this.state = {movie: "", movies : [], result: []};
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
		const score = data.getAll('score');
		const description = data.getAll('description');
		const movie = data.getAll('movie');

		event.preventDefault();

		$.ajax({
			url: "http://localhost:8080/review/add?score=" + score + "&description=" + description + "&movieId=" + movie,
		 	datatype: 'json',
		 	success: function(response) {
		 		this.setState({result:response});
		 		this.setState({movie:response.movie.name});
		 	}.bind(this)
		});
	}

	render() {
	  return (
		<div id="App-form">
	      	<div className="App-title">
	      		Adicionar avaliação
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
			        <div className="pure-control-group">
			            <label htmlFor="score">Nota</label>
			            <input type="number" min="1" max="10" step="0.1" id="score" name="score"/>
			        </div>
			        <div className="pure-control-group">
			            <label htmlFor="description">Cometário</label>
			            <textarea id="description" name="description" rows="10" cols="30"/>
			        </div>
			        <div className="pure-controls right-margin">
			            <button type="submit" className="pure-button pure-button-primary right-margin">Adicionar</button>
			        </div>
			    </fieldset>
			</form>
	      	<div className="result">
				Seus comentários:
			</div>
			<table className="pure-table pure-table-horizontal">
			    <thead>
			        <tr>
			            <th>Nome do filme</th>
			            <th>Nota</th>
			            <th>Comentário</th>
			        </tr>
			    </thead>

			    <tbody>
	    			{
				        <tr>
				            <td>{this.state.movie}</td>
				            <td>{this.state.result.score}</td>
				            <td>{this.state.result.description}</td>
				        </tr>	                    	
	                }
			    </tbody>
			</table>
		</div>
	  );
	}
}

export default Form;
