import React from "react";
//This class will render the article once it's has been opened.
//It contains a button called "volver" to go back to display all the articles preview.
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
        <img src={this.state.news.urlToImage} />
        <div className="artextrainfo">
          {this.state.news.author} - {this.state.news.publishedAt}
        </div>
        <p>{this.state.news.content}</p>
      </article>
    );
  }
}
