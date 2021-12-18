import React from "react";
export default class Navbar extends React.Component {
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
