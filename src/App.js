import React, { Component } from "react";
import "./App.css";
import Welcome from "./Components/Welcome/Welcome";
import Authors from "./Components/Authors/Authors";
import Books from "./Components/Books/Books";

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
    let list = {};
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      list = data.result;
      console.log(list);
      return (
        <div>
          <nav class="navbar fixed-top navbar-light bg-light">
            <a class="navbar-brand" href="#">
              Fixed top
            </a>
          </nav>
          <Welcome
            bListClicked={this.bListClick}
            aListClicked={this.aListClick}
          />
          <Books bPop={this.state.listBooks} bList={list} />
          <Authors aPop={this.state.listAuthors} aList={list} />
        </div>
      );
    }
  }
}

export default App;
