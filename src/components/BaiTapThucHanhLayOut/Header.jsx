import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-dark position-relative pt-2 pb-2">
        <div className="container px-lg-5 d-flex justify-content-between align-items-center">
            <a href="#" className="font-20">Start Bootstrap</a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a href="#" className="nav-link active">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#">About</a>
                </li>
                <li className="nav-item">
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}
