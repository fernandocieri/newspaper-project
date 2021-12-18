import React from "react";
import ReactDOM from "react-dom";
import "./newspaper-explorer.css";
import axios from 'axios';
class FullNewsArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { news:this.props.newsData, category:this.props.category };
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

class NewsArticlePreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.newsData, articleTheme: this.props.articleTheme };
    this.sendID = this.sendID.bind(this);
  }

  //onClick sendID will update the state of Main, chaging the value of articleIsOpen to its opossite, and giving idNumber to showedArtID as a value;
  sendID() {
    this.props.handlePageChanges(this.state.identifier);
  }

  render() {    
    return (
      <article onClick={this.sendID} className="article-preview">
        <div className="artTitle">{this.props.newsData.title}</div>        
        <img src={this.props.newsData.urlToImage} alt="Image not found"/>
        <p>{this.props.newsData.description}</p>
        <button>leer más --</button>
        <div className="artextrainfo">
        - {this.props.newsData.author} - {this.props.newsData.publishedAt}
        </div>
      </article>
    );
  }
}
class Main extends React.Component {
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
    this.handleSetTheme = this.handleSetTheme.bind(this)
  }

  async componentDidMount() {
    let category = this.state.category
    const resp = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e1c41041380c4911ad71f2375242b73d`);
    let apiNews = []
    for (let i = 0; i < resp.data.articles.length; i++) {
      
      if (resp.data.articles[i].author === null || resp.data.articles[i].author === '') {
        resp.data.articles[i].author = 'anonymous author';
      }
      if(resp.data.articles[i].content !== null){
        apiNews.push({...resp.data.articles[i], identifier:i})
      }
      
    }
    this.setState(()=> ({news: apiNews, category: category}))    
  } 

  handlePageChanges(id) {
    this.setState((state) => ({
      articleIsOpen: !state.articleIsOpen,
      showedArtID: id
    }));
  }

  async handleSetTheme(theme) {    
    let category = "general";
    this.setState((state) => ({ articleTheme: theme }));
    if (this.state.articleIsOpen === true) { this.setState((state) => ({ articleIsOpen: false })) };
    if(theme !=="general"){
      category = theme  
    }    
    const resp =  await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e1c41041380c4911ad71f2375242b73d`);
    let apiNews = []
    for (let i = 0; i < resp.data.articles.length; i++) {
      if (resp.data.articles[i].author === null || resp.data.articles[i].author === '') {
        resp.data.articles[i].author = 'anonymous author';
      }
      if(resp.data.articles[i].content !== null){
        apiNews.push({...resp.data.articles[i], identifier:i})
      }     
    }   
    this.setState(()=> ({news: apiNews}))    
    }    

  render() {    
    const filteredExplorePage = (
      <section className="filtered-explore">
        {this.state.news.map((article) => (
          <NewsArticlePreview
            newsData={article}
            articleTheme = {this.state.articleTheme}
            handlePageChanges={this.handlePageChanges}
            key={article.identifier} /*key={mockedNews.indexOf(article)}*/
          />
        ))}
      </section>
    );


    const clickedArticleSearch = this.state.news.filter((article) => { return article.identifier === this.state.showedArtID });
    const articlePage = (
      <FullNewsArticle
        handlePageChanges={this.handlePageChanges}
        newsData={clickedArticleSearch[0]}
      />
      
    );
    //When the user clicks on a theme or the 'volver' button, the value of articleTheme will change;
    /*when {articleIsOpen == true} filteredExplorePage will hide and articlePage will display, 
    getting the info needed to render by filtering all news using showedArtID;*/         
    let currentRender = this.state.articleIsOpen ? articlePage : filteredExplorePage;      
    return (
      <>
        <Header handleSetTheme={this.handleSetTheme} theme={this.state.articleTheme} />
        {currentRender}
      </>
    );
  }
}
//Class Header now contains a Class Navbar to make a Header for the web and include the nav on it.
class Header extends React.Component {
  constructor(props) {
    super(props);    
    this.handleFilterThemes = this.handleFilterThemes.bind(this)
  }
  handleFilterThemes(artTheme) {
    this.props.handleSetTheme(artTheme);
  }

  render() {    
    let filteredThemes = ['general',"sports","science","health","technology"];    

    return (
      <header>
        <h1>Chataca</h1>
        <nav>
          {filteredThemes.map(theme => <Navbar handleFilterThemes={this.handleFilterThemes} themes={theme} />)}
        </nav>
        <p>TEMA: {this.props.theme}</p>
      </header>
    )
  }
}
class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: this.props.themes };
    this.sendTheme = this.sendTheme.bind(this);
  }
  sendTheme() {
    this.props.handleFilterThemes(this.state.theme);
  }

  render() {    
    return (
      <>
        <button onClick={this.sendTheme}>{this.state.theme}</button>
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
