import React, { Component } from "react";
import "./App.css";
import Welcome from "./Components/Welcome";
import Authors from "./Components/Authors/Authors";
import Books from "./Components/Books/Books";
import Bar from "./Components/Navbar";

const getUrl = "http://localhost:4000/book";

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    data: {},
    listBooks: false,
    listAuthors: false,
    showBook: false,
    showAuthor: false,
    addBook: false,
    postBook: false,
    editBook: false,
    deleteBook: false
  };

  componentDidMount() {
    fetch(getUrl)
      .then(res => res.json())
      .then(
        data => {
          this.setState({
            isLoaded: true,
            data: data
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  bListClick = () => {
    this.setState({
      listBooks: true
    });
  };

  aListClick = () => {
    this.setState({
      listAuthors: true
    });
  };

  render() {
    let ndata = {};
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      ndata = data.result;
      console.log(ndata);

      let wPage = (
        <Welcome
          bListClicked={this.bListClick}
          aListClicked={this.aListClick}
        />
      );

      let bList = null;
      let aList = null;

      if (this.state.listBooks) {
        bList = <Books bPop={this.state.listBooks} ndata={ndata} />;
        wPage = null;
      }
      if (this.state.listAuthors) {
        aList = <Authors aPop={this.state.listAuthors} ndata={ndata} />;
        wPage = null;
      }

      return (
        <div className="App">
          <Bar />
          {wPage}
          {bList}
          {aList}
        </div>
      );
    }
  }
}

export default App;
