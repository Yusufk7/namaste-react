import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{},"Hello World form React!");
        const root = ReactDOM.createRoot(document.getElementById("root"));

        const parent = React.createElement("div",{id: "parent"},[React.createElement("div",{id : "child"},[React.createElement("h1",{id : "h1"},"I am an H1 tag"),React.createElement("h2",{id: "h2"},"I am an H2 tag")]),React.createElement("div",{id : "child"},[React.createElement("h1",{id : "h1"},"I am an H1 tag"),React.createElement("h2",{id: "h2"},"I am an H2 tag")])]);

        root.render(parent);