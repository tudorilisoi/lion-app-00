import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
import './login-view.js';
import './home-view.js';

@customElement('lion-app')
export class LionApp extends LitElement {
  @property({ type: String }) header = 'My app';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--lion-app-00-background-color);
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  firstUpdated() {
    // Type-safe access to the router's outlet (main container for route views)
    const outlet = this.shadowRoot?.querySelector('#outlet') as HTMLElement;
    const router = new Router(outlet);

    // Define routes using the Router API
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/login', component: 'login-view' },
      { path: '(.*)', component: 'not-found-view' }, // Catch-all route for 404 pages
    ]);
  }

  render() {
    return html`
      <header>
        <nav>
          <a href="/" class="link">Home</a>
          <a href="/login" class="link">Login</a>
        </nav>
      </header>
      <main id="outlet"></main>
      <p class="app-footer">
        Built with
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
