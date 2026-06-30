import { BaseModule } from '../core/BaseModule';
import type { SkillCategory } from '../data/portfolioData';

export class SkillsModule extends BaseModule {
  private categories: SkillCategory[];

  constructor(root: HTMLElement, categories: SkillCategory[]) {
    super(root);
    this.categories = categories;
  }

  render(): string {
    const categoryCards = this.categories
      .map((category) => {
        const skills = category.skills.map((skill) => `<span class="skill-pill">${skill}</span>`).join('');
        return `
          <article class="skill-row reveal">
            <h3>${category.title}</h3>
            <div class="skill-pills">${skills}</div>
          </article>
        `;
      })
      .join('');

    return `
      <section class="section skills-section" id="skills" aria-labelledby="skills-title">
        <div class="section-heading compact-heading">
          <span class="section-kicker">Skills</span>
          <h2 id="skills-title">A mixed toolkit for shipping faster.</h2>
        </div>
        <div class="skills-list">${categoryCards}</div>
      </section>
    `;
  }
}
