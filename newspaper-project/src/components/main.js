import React from "react";
import NewsArticlePreview from "./news-preview.js";
import FullNewsArticle from "./full-news.js";
import Header from "./header"
import axios from 'axios';
//It includes or the components of the proyect and work with them to render the news and make calls to api.
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
  //Get the call to the news from the api and sets them on the state, excluding them if the article's content or article's description are null
  //Also if author is null or empty, will be set to unknow.
  async componentDidMount() {
    let category = this.state.category;
    const resp = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=750d667ad37c46b9b500c7479ad881bc`
    );
    let apiNews = [];
    for (let i = 0; i < resp.data.articles.length; i++) {
      if (
        resp.data.articles[i].author === null ||
        resp.data.articles[i].author === ""
      ) {
        resp.data.articles[i].author = "unknown";
      }
      if ((resp.data.articles[i].content !== null) && (resp.data.articles[i].description !== "")) {
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

  //this funtion will recall to the api to get again the news, but it will pass from params the actual category "theme" and it will be set on the call to get
  //news by topics.
  //If the author is null or empty, will be set to unknown.
  //If the article's content or article's description are not empty, then will be pushed to the apiNews variable wich later will be set on the state news
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
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=750d667ad37c46b9b500c7479ad881bc`
    );
    let apiNews = [];
    for (let i = 0; i < resp.data.articles.length; i++) {
      if (
        resp.data.articles[i].author === null ||
        resp.data.articles[i].author === ""
      ) {
        resp.data.articles[i].author = "unknown";
      }
      if ((resp.data.articles[i].content !== null) && (resp.data.articles[i].description !== "")) {
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
            key={article.identifier}
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
