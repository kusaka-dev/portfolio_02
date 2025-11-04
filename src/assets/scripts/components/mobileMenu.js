/**
 * モバイルメニュー
 */

export const initMobileMenu = () => {
  const toggle = document.querySelector('.l-header__toggle');
  const nav = document.querySelector('.l-header__nav-sp');
  const header = document.querySelector('.l-header');
  const caution = document.querySelector('.p-caution');

  if (!toggle || !nav || !header) return;

  // ナビゲーションの位置と高さを動的に計算
  const updateNavPosition = () => {
    const cautionHeight = caution ? caution.offsetHeight : 0;
    const headerHeight = header.offsetHeight;
    const topPosition = cautionHeight + headerHeight;
    const navHeight = window.innerHeight - topPosition;

    nav.style.top = `${topPosition}px`;
    nav.style.height = `${navHeight}px`;
  };

  // 初期化時に計算
  updateNavPosition();

  // リサイズ時に再計算
  window.addEventListener('resize', updateNavPosition);

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('is-open');
    toggle.classList.toggle('is-active');
    header.classList.toggle('is-menu-open');

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
      header.classList.remove('is-menu-open');
      document.body.classList.remove('menu-open');
    });
  });

  // ESCキーでメニューを閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
      toggle.classList.remove('is-active');
      header.classList.remove('is-menu-open');
      document.body.classList.remove('menu-open');
    }
  });
};
