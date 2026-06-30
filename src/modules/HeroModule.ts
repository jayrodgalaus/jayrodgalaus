import { BaseModule } from '../core/BaseModule';

export class HeroModule extends BaseModule {
  render(): string {
    return `
      <section class="hero reveal" id="home" aria-labelledby="hero-title">
        <div class="hero-copy-wrap">
          <span class="eyebrow">Business Systems & Automation Developer</span>
          <h1 id="hero-title">Practical systems for messy business workflows.</h1>
          <p class="hero-copy">I build internal tools, dashboards, automations, Power Platform apps, and AI-assisted web solutions that help teams move faster.</p>
          <div class="hero-tags" aria-label="Primary specialties">
            <span>Power Platform</span>
            <span>Automation</span>
            <span>Dashboards</span>
            <span>AI-assisted builds</span>
          </div>
          <div class="action-row" aria-label="Portfolio actions">
            <a class="btn btn-primary" href="#projects">View Projects</a>
            <a class="btn btn-secondary" href="#experience">View Resume</a>
            <a class="btn btn-secondary" href="#contact">Contact Me</a>
          </div>
        </div>
        <aside class="hero-orbit" aria-label="Workflow visual">
          <div class="orbit-card main-card">
            <span>Process</span>
            <strong>Workflow → Tool → Report</strong>
          </div>
          <div class="orbit-dot dot-a"></div>
          <div class="orbit-dot dot-b"></div>
          <div class="orbit-panel panel-a">Power Apps</div>
          <div class="orbit-panel panel-b">Automations</div>
          <div class="orbit-panel panel-c">Dashboards</div>
        </aside>
      </section>
    `;
  }
}
