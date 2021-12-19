import React from "react";
//This component is a Navbar with diferents topics for the news.
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: this.props.themes };
    this.sendTheme = this.sendTheme.bind(this);
  }
  //this function will lift the state, passing the theme to the handleFilterThemes function 
  sendTheme() {
    this.props.handleFilterThemes(this.state.theme);
  }
  //Diferents buttons with diferent topics to choose to render news will be rendered.
  //Every button send the value by the function sendTheme.
  render() {
    return (
      <>
        <button onClick={this.sendTheme}>{this.state.theme}</button>
      </>
    );
  }
}
