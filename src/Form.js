import React, { Component } from 'react';
import './css/App.css';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';

class Form extends Component {
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
				alert("aaaaaaaaaaaaa");
			}.bind(this)
		});
	}

	sendForm(event) {
		// const data = new FormData(event.target);
		// const snacks = data.getAll('snack');

		event.preventDefault();
		// $.ajax({
		// 	url: "http://localhost:8181/snack/order/value?snacks=" + snacks + "&quantities=" + quantities,
		// 	datatype: 'json',
		// 	success: function(response) {
		// 		this.setState({result:response});
		// 		this.handleOpenModal();
		// 	}.bind(this)
		// });
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
			            <select name="name" id="name" type="text">
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
			            <input id="score"/>
			        </div>
			        <div className="pure-control-group">
			            <label htmlFor="description">Descrição</label>
			            <textarea id="description" name="description" rows="10" cols="30"/>
			        </div>
			        <div className="pure-controls">
			            <button type="submit" className="pure-button pure-button-primary right-margin">Adicionar</button>
			        </div>
			    </fieldset>
			</form>
		</div>
	  );
	}
	
}

export default Form;
