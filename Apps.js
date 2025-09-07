import React from 'react';
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));
const name = <span>[ramwired........]</span>;
//react element inside a react element
const heading = (
  <div>
    <h1 className="heading">Hello world from JSX 🚀</h1>
    {name}
  </div>
);
//Functional component
const ReactMode = () => (
  <h2>React Mode: <span>ON✨</span></h2>
);
//react element & component inside a react component
const HeadingComponent = () => (
  <div>
    {heading}
    <h2>Crafting UI magic, one component at a time🔥</h2>
    <ReactMode />
  </div>
);
root.render(<HeadingComponent/>);