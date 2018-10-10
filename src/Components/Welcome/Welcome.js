import React from "react";

const Welcome = props => {
  return (
    <div className="w">
      <div className="container">
        <div className="row text-center">
          <div className="col mx-auto">
            <img
              src="https://media.giphy.com/media/5qG0opWiDczrGF3pNE/giphy.gif"
              alt="logo"
            />
          </div>
        </div>
        <div className="row text-center">
          <div className="col mx-auto">
            <button onClick={props.bListClicked} className="b btn-lg m-5">
              Books
            </button>
            <button onClick={props.aListClicked} className="b btn-lg m-5">
              Authors
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
