import React, { Component } from "react";
import AppRouter from './routers/AppRouter';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layouts/Layout'
import { ToastContainer } from 'react-toastify'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <AuthProvider>
            <Layout>
              <AppRouter />
            </Layout>
          </AuthProvider>
        </Router>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
