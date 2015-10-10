import React from "react";

const displayName = "welcomePanel";
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
			<div className="jumbotron">
			  <h1>Hello, { this.props.name } </h1>
			  <div className="jumbotron__sub">
          <p>{this.props.message}</p>
  			  <p><a className="btn btn-primary btn-lg">Take me to your leader</a></p>
        </div>
>>>>>>> 5ab3416d103ed44c873cb260bb81dae659557a64
			</div>
		);
	}
}

WelcomePanel.displayName = displayName;
WelcomePanel.propTypes = propTypes;
WelcomePanel.defaultProps = defaultProps;
