import React, { Component } from "react";
import "./App.css";
import ImageList from "./js/components/ImageList.js";
import SearchForm from "./js/components/SearchForm";
import 'bootstrap/dist/css/bootstrap.css';
import { connect } from 'react-redux'; 

class App extends Component {

  render() {
    return (
      <div>
        <div className = "main-header">
          <h1>GIF Engine</h1>
          <SearchForm />
        </div>
        <div className = "main-content">
          {this.props.loadingState
            ?<p>Loading...</p>
            :<ImageList />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gifs: state.gifs,
  loadingState: state.loadingState,
  error: state.error
})

export default connect(mapStateToProps)(App);
