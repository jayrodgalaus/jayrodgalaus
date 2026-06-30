import './styles.css';
import { PortfolioApp } from './core/PortfolioApp';
import { portfolioData } from './data/portfolioData';

const root = document.querySelector<HTMLDivElement>('#portfolio-shell');

if (!root) {
  throw new Error('Portfolio root element was not found.');
}

const app = new PortfolioApp({ root, data: portfolioData });
app.init();
