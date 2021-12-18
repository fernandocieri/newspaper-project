import React from "react";
import NewsArticlePreview from "./news-preview.js";
import FullNewsArticle from "./full-news.js";
import Header from "./header"
import axios from 'axios';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      category: "general",
      articleIsOpen: false,
      showedArtID: undefined,
      articleTheme: "general",
    };
    this.handlePageChanges = this.handlePageChanges.bind(this);
    this.handleSetTheme = this.handleSetTheme.bind(this);
  }

  async componentDidMount() {
    let category = this.state.category;
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e1c41041380c4911ad71f2375242b73d`
    );
    let apiNews = [];
    for (let i = 0; i < resp.data.articles.length; i++) {
      if (
        resp.data.articles[i].author === null ||
        resp.data.articles[i].author === ""
      ) {
        resp.data.articles[i].author = "anonymous author";
      }
      if (resp.data.articles[i].content !== null) {
        apiNews.push({ ...resp.data.articles[i], identifier: i });
      }
    }
    this.setState(() => ({ news: apiNews, category: category }));
  }

  handlePageChanges(id) {
    this.setState((state) => ({
      articleIsOpen: !state.articleIsOpen,
      showedArtID: id,
    }));
  }

  async handleSetTheme(theme) {
    let category = "general";
    this.setState((state) => ({ articleTheme: theme }));
    if (this.state.articleIsOpen === true) {
      this.setState((state) => ({ articleIsOpen: false }));
    }
    if (theme !== "general") {
      category = theme;
    }
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e1c41041380c4911ad71f2375242b73d`
    );
    let apiNews = [];
    for (let i = 0; i < resp.data.articles.length; i++) {
      if (
        resp.data.articles[i].author === null ||
        resp.data.articles[i].author === ""
      ) {
        resp.data.articles[i].author = "anonymous author";
      }
      if (resp.data.articles[i].content !== null) {
        apiNews.push({ ...resp.data.articles[i], identifier: i });
      }
    }
    this.setState(() => ({ news: apiNews }));
  }

  render() {
    const filteredExplorePage = (
      <section className="filtered-explore">
        {this.state.news.map((article) => (
          <NewsArticlePreview
            newsData={article}
            articleTheme={this.state.articleTheme}
            handlePageChanges={this.handlePageChanges}
            key={article.identifier} /*key={mockedNews.indexOf(article)}*/
          />
        ))}
      </section>
    );

    const clickedArticleSearch = this.state.news.filter((article) => {
      return article.identifier === this.state.showedArtID;
    });
    const articlePage = (
      <FullNewsArticle
        handlePageChanges={this.handlePageChanges}
        newsData={clickedArticleSearch[0]}
      />
    );
    //When the user clicks on a theme or the 'volver' button, the value of articleTheme will change;
    /*when {articleIsOpen == true} filteredExplorePage will hide and articlePage will display, 
      getting the info needed to render by filtering all news using showedArtID;*/
    let currentRender = this.state.articleIsOpen
      ? articlePage
      : filteredExplorePage;
    return (
      <>
        <Header
          handleSetTheme={this.handleSetTheme}
          theme={this.state.articleTheme}
        />
        {currentRender}
      </>
    );
  }
}
