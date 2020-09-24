import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{ marginTop: "20px" }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Videos</label>
            <input
              type="text"
              name="search-bar"
              placeholder="Search Videos"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
