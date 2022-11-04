import React, { Component } from "react";
import Banner from "./BodyLayout/Banner";
import Item from "./BodyLayout/Item";
export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Item />
      </div>
    );
  }
}
