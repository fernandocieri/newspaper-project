import React from 'react';
import ReactDOM from 'react-dom';

const mockedNews = [{
  artTitle: 'El último reto de la NASA: hay una región sobre el Ártico que frena las naves e interfiere con las señales y no sabemos por qué',
  artTheme: 'space',
  artDescription: 'La misión CREX-2, que la NASA acaba de poner en marcha, se marca un objetivo ambicioso: aclarar qué ocurre en en una misteriosa área situada sobre el Polo Norte en la que las señales sufren alteraciones y las naves espaciales se ralentizan.',
  author: 'Carlos Prego',
  comments: 15,
  publishedTime: 14
}]


class NewsArticlePreview extends React.Component {
  constructor(props) {
    super(props)
    this.state = { ...this.props.newsData };
  }
  render() {
    return (
      <article>
        <div className='artTitle'>{this.state.artTitle}</div>
        <div className='artTheme'>{this.state.artTheme}</div>
        <p>{this.state.artDescription}</p>
        <div className='artextrainfo'>{this.state.comments} - {this.state.author} - {this.state.publishedTime} horas</div>
      </article>
    )
  }
}

class Explore extends React.Component {
  constructor(props) {
    super(props)
    this.state = { news:[...mockedNews] };
  }
  render() {
    return (
      <section className='explore'>
        {this.state.news.map(article => <NewsArticlePreview newsData={article} key={mockedNews.indexOf(article)} />)}
      </section>
    )
  }
}

/*class NewsArticle extends React.Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

class NewsArticle extends React.Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}*/

ReactDOM.render(<Explore />, document.getElementById('root'));
