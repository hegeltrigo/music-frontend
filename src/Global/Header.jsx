import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {


  render() {
    const { user } = this.props;
    // console.log(this.props);
    return (
      <div>
          <header>
            <h1>lallal</h1>
          </header>
          <nav>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Mis Letras</a></li>
              <li><a href="#">Usuarios</a></li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default Header;
