import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm';
import ProductForm from './components/ProductForm';

class RegisterFormContainer extends Component {
  submit = values => {
    window.alert(JSON.stringify(values, null, 4))
  }

  getInitialValues() {
    return {
      preference: "tabs",
      newsletter: true
    }
  }

  render() {
    return (
      <div class="container-fluid">
        <div class="row">
          <div class="col-6 col-sm-9 bg-success"><RegisterForm onSubmit={this.submit}
            initialValues={this.getInitialValues()} /></div>
          <div class="col-6 col-sm-3 bg-warning"><ProductForm /></div>
        </div>
      </div>
  
    )
  }
}

export default RegisterFormContainer