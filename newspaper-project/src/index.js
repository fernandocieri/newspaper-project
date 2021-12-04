import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function HelloWorld(){
  return <h1>Hello World</h1>;
}

const html = <HelloWorld />
ReactDOM.render(
  html,
  document.getElementById('root')
);


