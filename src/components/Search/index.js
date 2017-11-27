import React, { Component } from "react";
import { connect } from "react-redux";
import  ShowCard  from "./ShowCard";

import { getSearchResult } from "../../reducers/index";
import { SEARCH_REQUEST } from "../../actions/search";

import "./Search.css";

class Search extends Component {
  state = {
    showName: ""
  };

  render() {
    const { showName } = this.state;
    const { shows, isFetching } = this.props.search;
    return (
      <div className="search">
        <form className="search__form">
          <input
            type="text"
            placeholder="Название сериала"
            className="serch__input"
            value={showName}
            onChange={this.handleChange}
          />
          <button
            className="search__button"
            onClick={this.handleSubmit}
          >
            Найти
          </button>
        </form>
        <main className="content">
          <ul className="main__list">
            {isFetching ? (
              <div> Подождите, идет загружка </div>
            ) : (
              shows.map((element, index) => (
                <ShowCard
                  element={element}
                  key={element.id}
                />
              ))
            )}
          </ul>
        </main>
      </div>
    );
  }

  handleChange = e => {
    this.setState({ showName: e.target.value });
  };

  handleSubmit = e => {
    const { isFetching, SEARCH_REQUEST } = this.props;
    const { showName } = this.state;
    e.preventDefault();
    if (!isFetching && showName !== "") {
      SEARCH_REQUEST(showName);
    }
  };
}

const mapStateToProps = state => ({
  search: getSearchResult(state)
});
const mapDispatchToProps = { SEARCH_REQUEST };

export default connect(mapStateToProps, mapDispatchToProps)(
  Search
);
