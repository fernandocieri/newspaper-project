import React from "react";
import Navbar from "./navbar.js";
//Class Header contains a Class Navbar to make a Header for the web and include the nav on it.
//this component pass props to Navbar, to get the topic on each of the buttons from navbar.
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterThemes = this.handleFilterThemes.bind(this);
  }
  //this function pass props to lift the state on the Main component, it will pass the theme to the handleSetTheme on Main component.
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
              key={filteredThemes.indexOf(theme) +100}
            />
          ))}
        </nav>
        <p>Topic: {this.props.theme}</p>
      </header>
    );
  }
}
