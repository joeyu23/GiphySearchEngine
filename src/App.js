import React, { Component } from "react";
import "./App.css";
import ImageList from "./js/components/ImageList.js";
import { GIPHY_CRED_TOKEN } from "./js/constants/credentials.js";
import SearchForm from "./js/components/SearchForm";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
      loadingState: false
    };
  }

  componentDidMount() {
    
  }

  searchImages = (query) => {
    let giphyAPIClient = require('giphy-js-sdk-core');
    let client = giphyAPIClient(GIPHY_CRED_TOKEN);
    client.search('gifs', {"q": query})
      .then((response) => {
        this.setState({images: response.data, loadingState: false})
        console.log(response);
      })
      .catch((err) => {
        console.log("error in fetching images", err);
      })
  };

  render() {
    return (
      <div>
        <div className = "main-header">
          <div className = "inner">
            <h1>GIF Engine</h1>
            <SearchForm onSearch = {this.searchImages} />
          </div>
        </div>
        <div className = "main-content">
          {this.state.loadingState
            ?<p>Loading...</p>
            :<ImageList data={this.state.images}/>}
        </div>
      </div>
    );
  }
}

export default App;
