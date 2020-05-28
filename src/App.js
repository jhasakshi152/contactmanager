import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Contacts from './Component/contacts/Contacts';
import AddContact from './Component/contacts/AddContact';
import EditContact from './Component/contacts/EditContact';
import Header from './Component/layout/Header';
import About from './Component/pages/About';
import NotFound from './Component/pages/NotFound';
import Test from './Component/test/Test';

import { Provider } from './Component/Context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    
            <div className="App">
                <Header branding="Contact Manager"/>
                <div className="container">
                  <Switch>
                      <Route exact path="/" component=
                      {Contacts} />
                      <Route exact path="/contact/add" component=
                      {AddContact} />
                      <Route exact path="/contact/edit/:id" component=
                      {EditContact} />
                      <Route exact path="/about" component=
                      {About} />
                       <Route exact path="/test" component=
                      {Test} />
                      <Route component={NotFound} />

                  </Switch>

                </div>
                
                
            </div>
            </Router>
            </Provider>
        );
    }
}

export default App;