import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-view')
class HomeView extends LitElement {
  render() {
    return html`
      <h1>Home Page</h1>
      <p>This is the Home Page.</p>
    `;
  }
}

export default HomeView;
