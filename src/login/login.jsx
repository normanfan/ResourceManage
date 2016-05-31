import React from 'react';
var loginData = {
	username: "aaa",
	password: "aaa"
}
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Login';
		this.state = {
			isError: false
		}
	}
	handleSubmit(event) {
		event.preventDefault();
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		var isError = true;
		if (username === loginData.username && password === loginData.password) {
			isError = false;
		} else {
			isError = true;
		}
		this.setState({
			isError: isError
		})
		this.props.onCheckLogin(isError);
	}
	createError() {
		if (this.state.isError) {
			return <div>is error</div>
		}
	}
	render() {
		return <form onSubmit={this.handleSubmit.bind(this)}>
				<h1>login</h1>
				<input type='text' placeholder="please enter username" ref='username'/>
				<input type='password' placeholder="please enter password" ref='password'/>
				{this.createError()}
				<input type='submit' value="submit" />
		</form>;
	}
}

export default Login;