import React from "react";

const displayName = "Day";
const propTypes = {
  name: React.PropTypes.string.isRequired
};

const defaultProps = {};

export default class DayComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="day-box container4 panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.name}</h3>
        </div>
        <div className="panel-body">
          Panel content
        </div>
      </div>
    );
  }
}

DayComponent.displayName = displayName;
DayComponent.propTypes = propTypes;
DayComponent.defaultProps = defaultProps;
