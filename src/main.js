import React from 'react';
import ReactDom from 'react-dom';
import Login from './login/login.jsx'
var Controller = React.createClass({
	getInitialState: function() {
		return {
			isLogin: false
		}
	},
	checkLogin: function() {
		if (!this.state.isLogin) {
			return <Login onCheckLogin={this.changeLoginState} />
		} else {
			return (<div>aaaa</div>)
		}
	},
	changeLoginState: function(isLogin) {
		this.setState({
			isLogin: isLogin
		});
	},
	render: function() {
		return this.checkLogin();
	}
})

ReactDom.render(<Controller />, document.getElementById('app'))