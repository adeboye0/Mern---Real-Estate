import React, { Component } from 'react';
import Home from './components/home/Home';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './store';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AddListing from './components/addListing/AddListing';
import SingleList from './components/singleList/singleList';
import error404 from './components/notFound/error404';

import { loadUser } from './actions/authActions';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />

            <Route exact path='/' component={Register} />
            <div>
              <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/single-listing/:id' component={SingleList} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/create-listing' component={AddListing} />
                <Route path='*' component={error404} />
              </Switch>
            </div>

            <Footer />
          </div>
        </Router>

      </Provider >
    );
  }
}

export default App;


