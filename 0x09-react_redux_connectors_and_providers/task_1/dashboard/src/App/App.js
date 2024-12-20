import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import { user, AppContext } from './AppContext';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

const mapStateToProps = (state) => ({
  isLoggedIn: state.isUserLoggedIn,
  displayDrawer: state.isNotificationDrawerVisible,
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    this.state = {
      user: user,
      listNotifications: [
        { id: 1, value: "New course available", type: "default" },
        { id: 2, value: "New resume available", type: "urgent" },
        { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
      ],
    };
  }

  markNotificationAsRead = (id) => {
    const newList = this.state.listNotifications.filter(not => not.id !== id);
    this.setState({ listNotifications: newList });
  };

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  };

  logOut = () => {
    this.setState({
      user: user
    });
  };

  handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert("Logging you out");
      this.logOut();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <AppContext.Provider value={{
        user: this.state.user,
        logOut: this.logOut
      }}>
        <React.Fragment>
          <Notification
            listNotifications={this.state.listNotifications}
            markNotificationAsRead={this.markNotificationAsRead}
            displayDrawer={this.props.displayDrawer} // Connect to Redux state
            handleDisplayDrawer={this.props.displayNotificationDrawer} // Use Redux action
            handleHideDrawer={this.props.hideNotificationDrawer} // Use Redux action
          />
          <div className={css(bodyStyles.App)}>
            <Header />
            {this.state.user.isLoggedIn ?
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={this.listCourses} />
              </BodySectionWithMarginBottom>
              :
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            }
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet...</p>
            </BodySection>
            <div className={css(footerStyles.footer)}>
              <Footer />
            </div>
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};

const bodyStyles = StyleSheet.create({
  App: {
    position: 'relative',
    minHeight: '100vh'
  }
});

const footerStyles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '3px solid #E11D3F',
    padding: '1rem',
    fontStyle: 'italic',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);