import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    const { user } = this.props;
    return (
          <div>
            <header>
            <div id="wide"><h1>LETRAS DE CANCIONES</h1></div>
            <div id="narrow"><Greeting isLoggedIn={user} /></div>
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

function UserGreeting(props) {
  return(
    <Link to="/login">Salir</Link>


  );
}

function GuestGreeting(props) {
  return(

    <Link to="/login">Login</Link>

  );
}

function Greeting(props) {
  let isLoggedIn;
  if(props.isLoggedIn == undefined){
    console.log(props);
    isLoggedIn = false;
  }
  else{
    console.log(props);
    isLoggedIn = true;
  }
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Header;
