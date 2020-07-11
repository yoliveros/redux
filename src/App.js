import React, { Component } from 'react'
import { connect } from "react-redux"
import * as duck from "./reducers"
import UserForm from './Components/userForm'
import './App.css'
import { bindActionCreators } from 'redux'

class App extends Component {
	handleSubmit = payload => {
		console.log(payload)
	}

	render() {
		return (
			<div className="App">
				<UserForm onSubmit={this.handleSubmit} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		valor: state
	}
}

const mapDispatchToProps = dispatch => bindActionCreators(duck, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
