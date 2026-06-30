import { BaseModule } from '../core/BaseModule';
import type { BuildItem } from '../data/portfolioData';
import { icon } from './IconModule';

export class BuildModule extends BaseModule {
  private items: BuildItem[];

  constructor(root: HTMLElement, items: BuildItem[]) {
    super(root);
    this.items = items;
  }

  render(): string {
    const cards = this.items
      .map((item, index) => `
        <article class="build-card reveal" style="--delay:${index * 55}ms">
          <div class="svg-icon">${icon(item.icon)}</div>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </article>
      `)
      .join('');

    return `
      <section class="section" id="build" aria-labelledby="build-title">
        <div class="section-heading compact-heading">
          <span class="section-kicker">What I build</span>
          <h2 id="build-title">Tools that make work easier to run.</h2>
        </div>
        <div class="build-grid">${cards}</div>
      </section>
    `;
  }
}
