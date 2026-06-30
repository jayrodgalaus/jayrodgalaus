export abstract class BaseModule {
  protected root: HTMLElement;

  constructor(root: HTMLElement) {
    this.root = root;
  }

  abstract render(): string;

  init(): void {
    this.root.insertAdjacentHTML('beforeend', this.render());
    this.bindEvents();
  }

  bindEvents(): void {
    return;
  }

  destroy(): void {
    this.root.innerHTML = '';
  }
}
