import { BaseModule } from '../core/BaseModule';
import type { Project } from '../data/portfolioData';
import { icon } from './IconModule';

export class ProjectsModule extends BaseModule {
  private projects: Project[];

  constructor(root: HTMLElement, projects: Project[]) {
    super(root);
    this.projects = projects;
  }

  render(): string {
    const projectCards = this.projects
      .map((project, index) => {
        const featureList = project.features.map((feature) => `<li>${feature}</li>`).join('');
        const link = project.link ? `<a class="text-link" href="${project.link}" target="_blank" rel="noreferrer">Open project ${icon('arrow')}</a>` : '';

        return `
          <article class="project-card reveal" style="--delay:${index * 70}ms" data-project-card>
            <button class="project-summary" type="button" aria-expanded="false">
              <span class="project-number">0${index + 1}</span>
              <span class="project-title-group">
                <strong>${project.name}</strong>
                <small>${project.role}</small>
              </span>
              <span class="project-arrow">${icon('arrow')}</span>
            </button>
            <div class="project-details" hidden>
              <p class="project-lead">${project.solution}</p>
              <div class="project-meta-line"><span>Tools</span><strong>${project.tools}</strong></div>
              <div class="project-meta-line"><span>Need</span><strong>${project.problem}</strong></div>
              <ul class="feature-list" aria-label="Key features for ${project.name}">${featureList}</ul>
              ${link}
            </div>
          </article>
        `;
      })
      .join('');

    return `
      <section class="section projects-section" id="projects" aria-labelledby="projects-title">
        <div class="section-heading compact-heading">
          <span class="section-kicker">Projects</span>
          <h2 id="projects-title">Selected systems and web tools.</h2>
        </div>
        <div class="projects-list">${projectCards}</div>
      </section>
    `;
  }

  bindEvents(): void {
    const cards = this.root.querySelectorAll<HTMLElement>('[data-project-card]');
    cards.forEach((card) => {
      const button = card.querySelector<HTMLButtonElement>('.project-summary');
      const details = card.querySelector<HTMLElement>('.project-details');

      button?.addEventListener('click', () => {
        const isOpen = card.classList.toggle('is-open');
        button.setAttribute('aria-expanded', String(isOpen));
        if (details) {
          details.hidden = !isOpen;
        }
      });
    });
  }
}
