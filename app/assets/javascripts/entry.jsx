import React from "react";
import DemoComponent from "./components/demo-component";
import Day from "./components/day";

require("../stylesheets/application.scss");
require("../stylesheets/_variables.scss");
window.onload = function() {
  React.render(
    <DemoComponent />,
    document.getElementById("container")
  );
};
