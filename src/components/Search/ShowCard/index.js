import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./ShowCard.css";

const ShowCard = props => {
  const { name, summary, image, id } = props.element;
  let original;
  image !== null
    ? (original = image.original)
    : (original = null);

  return (
    <div className="show-card">
      <Link to={`/shows/${id}`} className="showCard__link">
        {name}
      </Link>
      <div className="show-card__poster">
        <img
          src={original}
          alt=""
          className="show-card__image"
        />
      </div>
      <div
        className="show-card__content"
        dangerouslySetInnerHTML={{ __html: summary }}
      />
    </div>
  );
};

export default withRouter(ShowCard);
