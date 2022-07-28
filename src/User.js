import React from 'react';
import {withRouter} from 'react-router-dom';

function User(props){
	return(
		<div className="bg-dark" style={{color:"#FFFDFA"}}>
			<p><b>User Id : {props.match.params.id}</b></p>
			<p><b>Name : {props.match.params.name}</b></p>
			<p><b>UserName : {props.match.params.username}</b></p>
			<p><b>Email : {props.match.params.email}</b></p>
			<p><b>Address : {props.match.params.address}</b></p>
			<p><b>Phone : {props.match.params.phone}</b></p>
			<p><b>Website : {props.match.params.website}</b></p>
			<p><b>Company : {props.match.params.company}</b></p>
		</div>
		);
};

export default withRouter(User);