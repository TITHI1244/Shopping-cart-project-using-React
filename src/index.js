import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css"; 

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
