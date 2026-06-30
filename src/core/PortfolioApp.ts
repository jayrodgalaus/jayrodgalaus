import type { PortfolioData } from '../data/portfolioData';
import { HeaderModule } from '../modules/HeaderModule';
import { HeroModule } from '../modules/HeroModule';
import { AboutModule } from '../modules/AboutModule';
import { BuildModule } from '../modules/BuildModule';
import { ProjectsModule } from '../modules/ProjectsModule';
import { SkillsModule } from '../modules/SkillsModule';
import { ExperienceModule } from '../modules/ExperienceModule';
import { ContactModule } from '../modules/ContactModule';

export class PortfolioApp {
  private root: HTMLElement;
  private data: PortfolioData;

  constructor({ root, data }: { root: HTMLElement; data: PortfolioData }) {
    this.root = root;
    this.data = data;
  }

  init(): void {
    this.root.innerHTML = '';
    new HeaderModule(this.root, this.data.navigation).init();

    const main = document.createElement('main');
    main.id = 'main-content';
    main.className = 'portfolio-shell';
    this.root.append(main);

    new HeroModule(main).init();
    new AboutModule(main).init();
    new BuildModule(main, this.data.buildItems).init();
    new ProjectsModule(main, this.data.projects).init();
    new SkillsModule(main, this.data.skills).init();
    new ExperienceModule(main, this.data.experience).init();
    new ContactModule(main, this.data.contact).init();

    this.root.insertAdjacentHTML('beforeend', '<footer class="site-footer"><div class="portfolio-shell">© 2026 Jayrod Galaus. Practical business systems, automation, and web tools.</div></footer>');
    this.bindGlobalNavigation();
    this.bindRevealAnimations();
  }

  private bindGlobalNavigation(): void {
    const navToggle = this.root.querySelector<HTMLButtonElement>('[data-nav-toggle]');
    const nav = this.root.querySelector<HTMLElement>('[data-site-nav]');

    navToggle?.addEventListener('click', () => {
      const isOpen = nav?.classList.toggle('open') ?? false;
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav?.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof HTMLAnchorElement) {
        nav.classList.remove('open');
        navToggle?.setAttribute('aria-expanded', 'false');
      }
    });
  }

  private bindRevealAnimations(): void {
    const revealItems = Array.from(this.root.querySelectorAll<HTMLElement>('.reveal'));

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    revealItems.forEach((item) => observer.observe(item));
  }
}
