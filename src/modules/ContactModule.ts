import { BaseModule } from '../core/BaseModule';
import type { PortfolioData } from '../data/portfolioData';
import { icon } from './IconModule';

type ContactData = PortfolioData['contact'];

export class ContactModule extends BaseModule {
  private contact: ContactData;

  constructor(root: HTMLElement, contact: ContactData) {
    super(root);
    this.contact = contact;
  }

  render(): string {
    return `
      <section class="section contact-section reveal" id="contact" aria-labelledby="contact-title">
        <div class="contact-panel">
          <div class="contact-card">
            <span class="section-kicker">Contact</span>
            <h2 id="contact-title">Have a workflow worth turning into a tool?</h2>
            <p>Let’s talk about systems, automations, dashboards, or internal apps.</p>
          </div>
          <div class="contact-links" aria-label="Professional contact links">
            <a href="mailto:${this.contact.email}"><span>${icon('mail')} Email</span><strong>${this.contact.email}</strong></a>
            <a href="${this.contact.linkedIn}" target="_blank" rel="noreferrer"><span>${icon('linkedin')} LinkedIn</span><strong>jayrod-galaus</strong></a>
            <a href="${this.contact.github}" target="_blank" rel="noreferrer"><span>${icon('github')} GitHub</span><strong>jayrodgalaus</strong></a>
          </div>
        </div>
      </section>
    `;
  }
}
