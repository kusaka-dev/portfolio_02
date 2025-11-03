/**
 * モバイルメニュー
 */

export const initMobileMenu = () => {
  const toggle = document.querySelector('.header__toggle');
  const nav = document.querySelector('.header__nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('is-open');
    toggle.classList.toggle('is-active');

    // bodyのスクロールを制御
    document.body.classList.toggle('menu-open');
  });

  // メニュー項目クリック時にメニューを閉じる
  const navLinks = nav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      toggle.classList.remove('is-active');
      document.body.classList.remove('menu-open');
    });
  });

  // ESCキーでメニューを閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      toggle.classList.remove('is-active');
      document.body.classList.remove('menu-open');
    }
  });
};
