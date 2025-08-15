import { initApp } from './app.js';
// يمكن الإبقاء على style.css فارغ/بسيط؛ Tailwind عبر CDN يكفي
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});
