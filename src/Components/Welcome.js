import React from "react";

const Welcome = props => {
  return (
    <div className="App">
      <div className="row text-center mt-5">
        <div className="col mx-auto">
          <img
            className="img-fluid mt-5"
            src="https://media.giphy.com/media/5qG0opWiDczrGF3pNE/giphy.gif"
            alt="logo"
          />
        </div>
      </div>
      <div className="row text-center">
        <div className="col mx-auto">
          <button onClick={props.bListClicked} className="wb btn-lg m-5">
            Books
          </button>
          <button onClick={props.aListClicked} className="wb btn-lg m-5">
            Authors
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
