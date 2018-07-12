import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class MainPage extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      const { letters } = this.props;

      return (
          <div className="col-md-12 ">
            <p>
                <Link to="/login">Login</Link>
            </p>
            <h1>Lista de canciones</h1>
          </div>
      );
  }
}


function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedMainPage = connect(mapStateToProps)(MainPage);
export { connectedMainPage as MainPage };
