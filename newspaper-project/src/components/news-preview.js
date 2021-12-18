import React from "react";
export default class NewsArticlePreview extends React.Component {
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
