import React from "react";
import Navbar from "./navbar.js";
//Class Header now contains a Class Navbar to make a Header for the web and include the nav on it.
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterThemes = this.handleFilterThemes.bind(this);
  }
  handleFilterThemes(artTheme) {
    this.props.handleSetTheme(artTheme);
  }

  render() {
    let filteredThemes = [
      "general",
      "sports",
      "science",
      "health",
      "technology",
    ];

    return (
      <header>
        <h1>Chataca</h1>
        <nav>
          {filteredThemes.map((theme) => (
            <Navbar
              handleFilterThemes={this.handleFilterThemes}
              themes={theme}
            />
          ))}
        </nav>
        <p>Topic: {this.props.theme}</p>
      </header>
    );
  }
}
