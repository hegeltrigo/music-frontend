import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../Global/Header';
import { guestActions } from '../_actions';


class MainPage extends React.Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
      this.props.dispatch(guestActions.getAllLetters());
  }

  render() {
      const { user, letters } = this.props;

      return (

          <div>
              <Header user={user}/>

              <section>
                <h2>
                  Letras
                </h2>
                <table>
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Autor</th>
                      <th>Escuchar</th>
                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </table>
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

const connectedMainPage = connect(mapStateToProps)(MainPage);
export { connectedMainPage as MainPage };
