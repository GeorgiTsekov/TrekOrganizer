import React, { Component } from 'react';

class Logout extends React.Component {
    componentWillMount() {
      const {
        keepLoggedIn,
        isLoggedIn,
        history,
      } = this.props;
      if (
        (!keepLoggedIn && !sessionStorage.getItem('keepLoggedIn')) || 
        !isLoggedIn
      ) {
        localStorage.clear("token");
        return history.push('/login');
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

export default Logout;