import React from "react";

const Book = props => {
  let imageUrl = `${props.image}`;
  return (
    <div className="col mx-auto m-2">
      <div className="t card">
        <img className="card-img-top" src={imageUrl} alt="book cover" />
        <div class="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <img src="" />
          <img src="" />
          <img src="" />
          <img src="" />
          <img src="" />
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span>By:</span>
            {props.last}, {props.first}
          </li>
          <li className="list-group-item">
            <span>Genre:</span>
            {props.genre}
          </li>
          <li className="list-group-item">
            <span>Book Id:</span>
            {props.id}
          </li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  )
}

export default Book;
