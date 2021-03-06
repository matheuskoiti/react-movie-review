import React, { Component } from 'react';
import './css/App.css';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';

class List extends Component {
	constructor() {
		super();
    	this.state = {reviews : [], result: ""};
	}

	componentWillMount() {
		$.ajax({
			url: "http://localhost:8080/review/all",
			datatype: 'json',
			success: function(response){
				this.setState({reviews:response});
			}.bind(this),
		});
	}

	render() {
	  return (
	  	<div id="list-container">
		  	<div className="App-title">
		    	Histórico de avaliações
		    </div>
			<table className="list pure-table pure-table-horizontal">
			    <thead>
			        <tr>
			            <th>Imagem do filme</th>
			            <th>Nome do filme</th>
			            <th>Nota</th>
			            <th>Comentário</th>
			        </tr>
			    </thead>

			    <tbody>
	    			{
	                	this.state.reviews.map(function(review){
		                  	return (
						        <tr>
									<td>
										<img src={review.movie.imageUrl}  border="0"/>
									</td> 
						            <td>{review.movie.name}</td>
						            <td>{review.score}</td>
						            <td>{review.description}</td>
						        </tr>	                    	
		                    );
	                	})
	                }
			    </tbody>
			</table>
	  	</div>
	  );
	}
	
}


export default List;
