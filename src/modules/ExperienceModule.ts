import { BaseModule } from '../core/BaseModule';
import type { Experience } from '../data/portfolioData';

export class ExperienceModule extends BaseModule {
  private experience: Experience[];

  constructor(root: HTMLElement, experience: Experience[]) {
    super(root);
    this.experience = experience;
  }

  render(): string {
    const roles = this.experience
      .map((role) => {
        const highlights = role.highlights.map((highlight) => `<li>${highlight}</li>`).join('');
        return `
          <article class="resume-card reveal">
            <header>
              <div>
                <h3>${role.title}</h3>
                <p>${role.organization}</p>
              </div>
              <span class="date">${role.dateRange}</span>
            </header>
            <ul>${highlights}</ul>
          </article>
        `;
      })
      .join('');

    return `
      <section class="section" id="experience" aria-labelledby="experience-title">
        <div class="section-heading compact-heading">
          <span class="section-kicker">Experience</span>
          <h2 id="experience-title">Resume snapshot.</h2>
        </div>
        <div class="timeline">${roles}</div>
        <div class="action-row" id="resume">
          <a class="btn btn-primary" href="#contact">Request Resume</a>
        </div>
      </section>
    `;
  }
}
