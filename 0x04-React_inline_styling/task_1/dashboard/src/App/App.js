import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  app: {
    textAlign: 'center',
  },
  appLogo: {
    height: '40vmin',
    pointerEvents: 'none',
  },
  primaryColor: {
    color: '#e01d3f',
  },
  fontFamily: {
    fontFamily: 'Calibri, sans-serif',
  },
  appLogoSpin: {
    animationName: {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg)' },
    },
    animationDuration: '20s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    this.listNotifications = [
      { type: "default", value: "New course available", id: 1 },
      { type: "urgent", value: "New resume available", id: 2 }, 
      { type: "urgent", html: getLatestNotification(), id: 3 },
    ];

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <>
        <Notifications listNotifications={this.listNotifications}/>
        <div className={css(styles.app)}>
          <Header />
          <div className="App-body">
            {isLoggedIn ? (
                <BodySectionWithMarginBottom title='Course List'>
                  <CourseList listCourses={this.listCourses}/>
                </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to Continue">
                <Login />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title>
              <p>50% of alx Students fail their courses</p>
            </BodySection>
          </div>
          <div className={css(styles.primaryColor, styles.fontFamily)}>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
}

App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {},
}

export default App;
