import React from "react";

const displayName = "Day";
const propTypes = {
  name: React.PropTypes.string.isRequired,
  isBig: React.PropTypes.bool.isRequired,
  containerName: React.PropTypes.string,
  activity1: React.PropTypes.string,
  hour1: React.PropTypes.number,
  activity2: React.PropTypes.string,
  hour2: React.PropTypes.number,
  activity3: React.PropTypes.string,
  hour3: React.PropTypes.number,
  activity4: React.PropTypes.string,
  hour4: React.PropTypes.number,
};

const defaultProps = {
  activity3: " ",
  activity4: " ",

}

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
          <p> {this.props.activity1} - {this.props.hour1} minutes </p>
          <p> {this.props.activity2} - {this.props.hour2} minutes </p>
          <p> {this.props.activity3} - {this.props.hour3} minutes </p>
        </div>
      </div>
    );
  }
}

DayComponent.displayName = displayName;
DayComponent.propTypes = propTypes;
DayComponent.defaultProps = defaultProps;
