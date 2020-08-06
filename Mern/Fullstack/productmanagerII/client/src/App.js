import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./components/Display";
import {Link, Router} from '@reach/router';
import ProductForm from './components/ProductForm';
import EditSchedule from './components/EditSchedule';
// import EditSchedule from './components/EditSchedule';

function App() {
  return (
    <div className="container">
      <h1>Product Manager</h1>
      <Link className="btn btn-info" to="/">Product</Link>
      <Link className="btn btn-info" to="/new">New products</Link>
      <Router className="my-5">
        <Display path="/"/>
        <ProductForm path="/new"/>
        <EditSchedule path="/edit/:_id" />
      </Router>
    </div>
  );
}

export default App;
