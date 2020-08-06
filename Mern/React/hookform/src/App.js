import React, { useState } from 'react';
import RegisterForm from './Components/Form';
import FormSubmit from './Components/Results';
import './App.css';

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
      <RegisterForm inputs={state} setInputs={setState}/>
      <FormSubmit data={state}/>
    </div>
  );
}

export default App;