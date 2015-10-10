import React from "react";

const displayName = "Header";
const propTypes = {};
const defaultProps = {};

export default class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" type="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">STUDY SCHEDULE |</a>
          </div>

          <i className="fa fa-2x fa-graduation-cap logo_image"></i>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/">Home</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

HeaderComponent.displayName = displayName;
HeaderComponent.propTypes = propTypes;
HeaderComponent.defaultProps = defaultProps;
