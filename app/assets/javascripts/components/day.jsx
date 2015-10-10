import React from "react";

const displayName = "Day";
const propTypes = {
  name: React.PropTypes.string.isRequired,
  isBig: React.PropTypes.bool.isRequired,
  containerName: React.PropTypes.string
};

const defaultProps = {
};

export default class DayComponent extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.isBig){
      this.state = {
        containerName: "day-box container4 panel panel-primary"
      };
    }
    else {
      this.state = {
        containerName: "day-box container3 panel panel-primary"
      };
    }
  }

  render() {
    return (
      <div className={this.state.containerName}>
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
