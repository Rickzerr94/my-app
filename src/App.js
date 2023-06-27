import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import LoginForm from './Pages/registration/LoginForm';
import RegistrationForm from './Pages/registration/RegistrationForm';

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Container from "./components/Container/Container"


const App = () => {
  return (
      <AuthProvider>
          {/*<Router>*/}
              <Routes>
                  <Route path="/login" component={LoginForm} />
                  <Route path="/register" component={RegistrationForm} />
                  <PrivateRoute path="/" component={Home} />
              </Routes>
          {/*</Router>*/}
      </AuthProvider>
  );
}
const Home = () => {
    return (
        <div className="App" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Header />
            <Container />
            <Footer />
        </div>
    );
};

export default App;
