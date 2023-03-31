import React, { Component } from 'react';

class SignUpPage extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignUp = () => {
    const { email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({ error: 'As senhas não correspondem' });
      return;
    }

    try {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({ email, password });
      localStorage.setItem('users', JSON.stringify(users));
      console.log('Cadastro realizado com sucesso');
    } catch (error) {
      console.error(error);
      this.setState({ error: error.message });
    }
  };

  render() {
    return (
      <div className="sign-up-container">
        <h1 className="title">Tela de Cadastro</h1>
        <form className="form">
          <div className="form-item">
            <label className="form-title">Email:</label>
            <input
              type="email"
              name="email"
              className="input"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-item">
            <label className="form-title">Senha:</label>
            <input
              type="password"
              name="password"
              className="input"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-item">
            <label className="form-title">Confirmação de Senha:</label>
            <input
              type="password"
              name="confirmPassword"
              className="input"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
            />
          </div>
          {this.state.error && (
            <div className="error">{this.state.error}</div>
          )}
          <button onClick={this.handleSignUp}>Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default SignUpPage;