import React from "react";

const displayName = "Day";
const propTypes = {
  name: React.PropTypes.string.isRequired
};

const defaultProps = {};

export default class Day extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="panel panel-primary">
        <div class="panel-heading">
          <h3 class="panel-title">{this.props.name}</h3>
        </div>
        <div class="panel-body">
          Panel content
        </div>
      </div>
    );
  }
}

MyComponent.displayName = displayName;
MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;
