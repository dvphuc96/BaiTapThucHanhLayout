import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-lg-5">
              <a class="navbar-brand" href="#">
                Start Bootstrap
              </a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
