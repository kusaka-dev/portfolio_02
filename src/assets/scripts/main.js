/**
 * メインJavaScriptファイル
 * 各コンポーネントをインポートして初期化
 */

import { initMobileMenu } from './components/mobileMenu.js';
import { initSmoothScroll } from './components/smoothScroll.js';
import { initFvSlider } from './components/fvSlider.js';
import { initHeaderScroll } from './components/headerScroll.js';
import { initServiceDropdown } from './components/serviceDropdown.js';
import { initAutoScrollSlider } from './components/autoScrollSlider.js';

// 初期化
document.addEventListener('DOMContentLoaded', () => {
  // コンポーネントの初期化
  initMobileMenu();
  initSmoothScroll();
  initFvSlider();
  initHeaderScroll();
  initServiceDropdown();
  initAutoScrollSlider();
});
