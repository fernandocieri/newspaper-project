import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HeadersContainer} from './components/HeadersContainer';
import {news} from './components/News'


console.log(news);
const html = <HeadersContainer news = {news}/>;
console.log(html)
ReactDOM.render(
  html,
  document.getElementById('root')
);


