import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class MainPage extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      const { user, letters } = this.props;

      return (
          <div className="col-md-12 ">
            <Greeting isLoggedIn={user} />,

            <p>

            </p>
            <h1>Lista de canciones</h1>
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
