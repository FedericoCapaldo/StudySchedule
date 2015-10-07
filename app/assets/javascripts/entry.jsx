import React from "react";
import DemoComponent from "./components/demo-component";
require("../stylesheets/application.scss");

window.onload = function() {
  React.render(
    <DemoComponent />,
    document.getElementById("container")
  );
};
