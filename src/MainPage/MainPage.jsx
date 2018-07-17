import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Global/Header';



class MainPage extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      const { user, letters } = this.props;

      return (

          <div>
              <Header title={user}/>

              <section>
                <h2>
                  Contenido del Sitio Web
                </h2>

                <Greeting isLoggedIn={user} />,

                <p>

                </p>
                <h1>Lista de canciones</h1>
              </section>


              <aside>
                <h2>Barra lateral</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In iaculis porttitor varius. Cras et turpis et eros porta imperdiet eget a elit. Pellentesque eu ullamcorper urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce non iaculis urna. Pellentesque vulputate felis et mauris dignissim cursus. Suspendisse fringilla malesuada est, a fermentum erat molestie sit amet. Etiam quis ex eget sapien suscipit facilisis. Curabitur bibendum eget dolor in rhoncus. Fusce vehicula diam ut erat mollis malesuada. Pellentesque massa sapien, eleifend sed quam at, euismod maximus quam.</p>
              </aside>

              <footer>
                <a href="http://www.internetedadinero.com">Ejemplo de Web Responsive - www.internetedadinero.com</a>
              </footer>
          </div>
      );
  }
}


function mapStateToProps(state) {
    // const { loggingIn } = state.authentication;
    // return {
    //     loggingIn
    // };

    const { letters, authentication } = state;
    const { user } = authentication;
    return {
        user,
        letters
    };
}

function UserGreeting(props) {
  return(
    <Link to="/login">Logout</Link>


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

const connectedMainPage = connect(mapStateToProps)(MainPage);
export { connectedMainPage as MainPage };
