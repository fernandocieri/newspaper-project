import React from "react";
export default class FullNewsArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news: this.props.newsData, category: this.props.category };
    this.prevPage = this.prevPage.bind(this);
  }

  prevPage() {
    this.props.handlePageChanges(undefined);
  }

  render() {
    return (
      <article id="fullArticle">
        <button onClick={this.prevPage}>-- volver</button>
        <h2>{this.state.news.title}</h2>
        <img src={this.state.news.urlToImage} alt="not found"/>
        <div className="artextrainfo">
          {this.state.news.author} - {this.state.news.publishedAt}
        </div>
        <p>{this.state.news.content}</p>
      </article>
    );
  }
}
