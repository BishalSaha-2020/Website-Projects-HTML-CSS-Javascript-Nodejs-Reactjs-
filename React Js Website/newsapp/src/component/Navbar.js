import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a Link class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
        <li class="nav-item">
          <a Link class="nav-link" href="/business">Business</a>
        </li>
        <li class="nav-item">
          <a Link class="nav-link" href="/entertainment">Entertainment</a>
        </li>
        <li class="nav-item">
          <a Link class="nav-link" href="/general">General</a>
        </li>
        <li class="nav-item">
          <a Link class="nav-link" href="/health">Health</a>
        </li>
        <li class="nav-item">
          <a Link class="nav-link" href="/science">Science</a>
        </li>
        <li class="nav-item">
          <a Link class="nav-link" href="/sports">Sports</a>
        </li>
        <li class="nav-item">
          <a Link class="nav-link" href="/technology">Technology</a>
        </li>
       
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
