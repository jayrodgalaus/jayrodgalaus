import { BaseModule } from '../core/BaseModule';
import type { NavigationItem } from '../data/portfolioData';

export class HeaderModule extends BaseModule {
  private navigation: NavigationItem[];

  constructor(root: HTMLElement, navigation: NavigationItem[]) {
    super(root);
    this.navigation = navigation;
  }

  render(): string {
    const navItems = this.navigation
      .map((item) => `<a href="${item.href}">${item.label}</a>`)
      .join('');

    return `
      <header class="site-header">
        <div class="header-inner">
          <a class="brand" href="#home" aria-label="Jayrod Galaus home">
            <span class="brand-mark">JG</span>
            <span>Jayrod Galaus<span>Business Systems & Automation Developer</span></span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>Menu</button>
          <nav id="site-nav" class="site-nav" aria-label="Primary navigation" data-site-nav>${navItems}</nav>
        </div>
      </header>
    `;
  }
}
