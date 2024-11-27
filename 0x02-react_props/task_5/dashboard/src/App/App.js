import './App.css';
import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

import PropTypes from 'prop-types';

function App({isLoggedIn = false}) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const listNotifications = [
    { type: "default", value: "New course available" },
    { type: "urgent", value: "New resume available" }, 
    { type: "urgent", html: getLatestNotification() },
  ];

  return (
    <>
      <Notifications listNotifications={listNotifications}/>
      <div className="App">
        <Header />
        <div className="App-body">
          {isLoggedIn ? (
            <CourseList listCourses={listCourses}/>
          ) : (
            <Login />
          )}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
