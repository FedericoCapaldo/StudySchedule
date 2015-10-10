import React from "react";

const displayName = "Weekbar";
const propTypes = {};
const defaultProps = {};

export default class WeekbarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="weekbar"> 
        <div className="left-side">
          <i className="fa fa-2x fa-arrow-left"></i>
        </div>
        <div className="center">
          <div>Week 19.10.2015 - 26.10.2015</div>
        </div>
        <div className="right-side">
          <i className="fa fa-2x fa-arrow-right"></i>
        </div>
      </div>
    );
  }
}

WeekbarComponent.displayName = displayName;
WeekbarComponent.propTypes = propTypes;
WeekbarComponent.defaultProps = defaultProps;
