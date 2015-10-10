import React from "react";

const displayName = "Day";
const propTypes = {
	message: React.PropTypes.string.isRequired,
	name: React.PropTypes.string.isRequired
};

const defaultProps = {
	name: "Andrei",
	message: "You gotta study more :("
};

export default class WelcomePanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div class="jumbotron">
			  <h1>Hello, { this.props.name } </h1>
			  <p>{this.props.message}</p>
			  <p><a class="btn btn-primary btn-lg">Learn more</a></p>
			</div>
		);
	}
}