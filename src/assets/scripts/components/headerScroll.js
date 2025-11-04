/**
 * ヘッダーのスクロール時の挙動を制御
 */

export function initHeaderScroll() {
  const header = document.querySelector('.l-header');
  const fvSection = document.querySelector('.p-fv');

  if (!header || !fvSection) return;

  // FVセクションの高さを取得
  const fvHeight = fvSection.offsetHeight;

  // スクロール時の処理
  function handleScroll() {
    const scrollY = window.scrollY;

    // FVセクションを超えたらヘッダーのスタイルを変更
    if (scrollY > fvHeight) {
      header.classList.add('l-header--active');
    } else {
      header.classList.remove('l-header--active');
    }
  }

  // 初期チェック
  handleScroll();

  // スクロールイベントを監視
  window.addEventListener('scroll', handleScroll, { passive: true });
}
