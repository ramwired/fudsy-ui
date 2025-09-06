import React from 'react';
import ReactDOM from 'react-dom/client'

/* const root = document.getElementById("root");
const heading = document.createElement("h1");
heading.innerHTML = "Hello world from JS";
root.append(heading); */

// const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!!!");

/*<div id="parent">
    <div id="Div1">
       <h1 class="heading1"></h1>
       <h2 class="heading2"></h2>
    </div>
    <div id="Div2">
       <h1 class="heading1"></h1>
       <h2 class="heading2"></h2>
    </div>
</div> */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "Div1" }, [
    React.createElement("h1", { className: "heading1" }, "Title 1"),
    React.createElement("h2", { className: "heading2" }, "Description 1"),
  ]),
  React.createElement("div", { id: "Div2" }, [
    React.createElement("h1", { className: "heading1" }, "Title 2"),
    React.createElement("h2", { className: "heading2" }, "Description 2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
