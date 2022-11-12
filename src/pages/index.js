import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './login';
import SignUp from './signup';

import Dashboard from './dashboard';

import Product from './product';
import ProductDetail from './product/details';

import WarrantyClaims from './warrantyClaims';
import WarrantyClaimDetail from './warrantyClaims/details';

import Staff from './staff';
import StaffDetail from './staff/details';

import Customers from './customers';
import CustomerDetail from './customers/details';

import NotFound from './notFound';


function Pages() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard/>
        </Route>
        <Route exact path="/product">
          <Product/>
        </Route>
        <Route exact path="/product/:id">
          <ProductDetail/>
        </Route>
        <Route exact path="/warranty-claims">
          <WarrantyClaims/>
        </Route>
        <Route exact path="/warranty-claims/:id">
          <WarrantyClaimDetail />
        </Route>
        <Route exact path="/staff">
          <Staff/>
        </Route>
        <Route exact path="/staff/:id">
          <StaffDetail/>
        </Route>
        <Route exact path="/customers">
          <Customers/>
        </Route>
        <Route exact path="/customers/:id">
          <CustomerDetail/>
        </Route>
        <Route exact path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default Pages;
