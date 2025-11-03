/**
 * メインJavaScriptファイル
 * 各コンポーネントをインポートして初期化
 */

import { initMobileMenu } from './components/mobileMenu.js';
import { initSmoothScroll } from './components/smoothScroll.js';

// 初期化
document.addEventListener('DOMContentLoaded', () => {
  // コンポーネントの初期化
  initMobileMenu();
  initSmoothScroll();
});
