import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "./Person";

import { getShow } from "../../reducers/index";
import { SHOWS_REQUEST } from "../../actions/shows";

import "./ShowPage.css";

class ShowPage extends Component {
  componentDidMount() {
    const { SHOWS_REQUEST, match } = this.props;
    const id = match.url.split("/").pop();
    SHOWS_REQUEST(id);
  }

  render() {
    const {
      isFetching,
      show: { name, summary, image, _embedded: { cast } }
    } = this.props.data;
    let original;
    image !== null ? (original = image.original) : (original = null);

    return (
      <div>
        {isFetching ? (
          <div> Подождите , идет загрузка </div>
        ) : (
          <div className="show-page">
            <header className="show-page__header">
              <h2 className="show-page__header_title">
                {name}
              </h2>
              <div className="show-page__poster">
                <img
                  src={original}
                  alt=""
                  className="show-page__img"
                />
              </div>
            </header>
            <div
              className="show-page__poster"
              dangerouslySetInnerHTML={{ __html: summary }}
            />
            <ul className="actors">
              {cast.map((element, index) => (
                <Person
                  data={element.person}
                  key={element.person.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({data:getShow(state)});
const mapDispatchToProps = {SHOWS_REQUEST};

export default connect (mapStateToProps, mapDispatchToProps)(ShowPage)
