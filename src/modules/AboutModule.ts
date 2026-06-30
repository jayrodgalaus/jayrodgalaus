import { BaseModule } from '../core/BaseModule';

export class AboutModule extends BaseModule {
  render(): string {
    return `
      <section class="section about-section reveal" id="about" aria-labelledby="about-title">
        <div class="section-kicker">About</div>
        <div class="split-section">
          <h2 id="about-title">My work evolved from coding websites to building business tools.</h2>
          <div class="statement-card">
            <p>I started with web development, databases, and system design. Today I use that foundation with Power Platform, automation, AI-assisted development, and modern web tools to ship useful systems faster.</p>
            <div class="mini-proof">
              <span>Web background</span>
              <span>Database work</span>
              <span>Low-code delivery</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
