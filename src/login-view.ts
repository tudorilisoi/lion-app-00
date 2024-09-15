import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('login-view')
class LoginView extends LitElement {
  render() {
    return html`
      <h1>Login Page</h1>
      <p>This is the Login Page.</p>
    `;
  }
}

export default LoginView;
