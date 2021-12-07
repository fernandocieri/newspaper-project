import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HeadersContainer} from './components/HeadersContainer';
import {news} from './components/News'


const html = <HeadersContainer news = {this.props.news}/>;
{console.log(html)}
ReactDOM.render(
  html,
  document.getElementById('root')
);


