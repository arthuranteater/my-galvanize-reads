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

  bListClick = event => {
    event.preventDefault()
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

    console.log("render");

    console.log(this.state.data)

    const { error, isLoaded, data } = this.state;

    let narray = []

    let errormess = null;

    if (error) {
      errormess = `Error: ${error.message}`;
    } else if (!isLoaded) {
      errormess = "Loading...";
    } else {
      narray = data.result
    }

    let wPage = (
      <Welcome bListClicked={this.bListClick} aListClicked={this.aListClick} />
    );

    let bList = null

    if (this.state.listBooks) {
      bList = (
        <div className="row text-center mt-5">
          <Books narray={narray} />
        </div>
      )
      console.log(narray[1].Title)
      wPage = null
    }

    let aList = null;

    if (this.state.listAuthors) {
      aList = (
        <div>
          <Authors narray={narray} />
        </div>
      )
      wPage = null
    }

    return (
      <div className="App">
        {errormess}
        <Bar />
        {wPage}
        <div className="container mt-2">{bList}</div>
        {aList}
      </div>
    );
  }
}

export default App;
