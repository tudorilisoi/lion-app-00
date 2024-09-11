import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { LionApp } from '../src/lion-app.js';
import '../src/lion-app.js';

describe('LionApp00', () => {
  let element: LionApp;
  beforeEach(async () => {
    element = await fixture(html`<lion-app-00></lion-app-00>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
