import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Nav from '@carbon/ibm-security/lib/components/Nav';
import NavList from '@carbon/ibm-security/lib/components/Nav/NavList';
import NavItem from '@carbon/ibm-security/lib/components/Nav/NavItem';

import '@carbon/ibm-security/css/index.min.css';

class App extends Component {
  render() {
    return (
      <Nav heading="Nav example" label="Nav">
        <NavList activeHref="#" title="Nav list">
          <NavItem
            activeHref="#"
            href="#item-1"
            id="item-1"
          >
            Nav item 1
          </NavItem>
          <NavItem
            activeHref="#"
            href="#item-2"
            id="item-2"
          >
            Nav item 2
          </NavItem>
        </NavList>
      </Nav>
    );
  }
}

export default hot(module)(App);

