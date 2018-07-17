import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    render() {
        const { user, users } = this.props;
        return (
            <div>
                <header>
                  <h1>ESTA ES LA CABECERA</h1>
                </header>
                <nav>
                  <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                    <li><a href="#">Item 4</a></li>
                  </ul>
                </nav>
                <section>
              		<h2>
              			Contenido del Sitio Web
                  </h2>

                  <h1>Hi {user.email}!</h1>
                  <p>You're logged in with React & JWT!!</p>
                  <h3>Users from secure api end point:</h3>
                  {users.loading && <em>Loading users...</em>}
                  {users.error && <span className="">ERROR: {users.error}</span>}
                  {users.items &&
                      <ul>
                          {users.items.map((user, index) =>
                              <li key={user.id}>
                                  {user.created_at + ' ' + user.updated_at}
                              </li>
                          )}
                      </ul>
                  }
                  <p>
                      <Link to="/login">Logout</Link>
                  </p>

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
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
