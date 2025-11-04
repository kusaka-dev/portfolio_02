/**
 * サービスドロップダウンメニューの位置調整とホバー制御
 */

export function initServiceDropdown() {
  const dropdown = document.querySelector(".p-service-menu");
  const header = document.querySelector(".l-header");
  const caution = document.querySelector(".p-caution");
  const navItem = document.querySelector(".l-header__nav-item--has-dropdown");
  const serviceItems = document.querySelectorAll(".p-service-menu__item");
  const imageItems = document.querySelectorAll(".p-service-menu__image-item");

  if (!dropdown || !header || !navItem || !caution) return;

  let hideTimeout = null;

  // ドロップダウンの位置を調整
  function updateDropdownPosition() {
    const headerHeight = header.offsetHeight;
    const cautionHeight = caution.offsetHeight;
    dropdown.style.top = `${headerHeight + cautionHeight}px`;
  }

  // ドロップダウンを表示
  function showDropdown() {
    clearTimeout(hideTimeout);
    dropdown.classList.add("p-service-menu--visible");
  }

  // ドロップダウンを非表示
  function hideDropdown() {
    hideTimeout = setTimeout(() => {
      dropdown.classList.remove("p-service-menu--visible");
    }, 100);
  }

  // 画像を切り替え
  function switchImage(serviceType) {
    imageItems.forEach((img) => {
      if (img.dataset.service === serviceType) {
        img.classList.add("p-service-menu__image-item--active");
      } else {
        img.classList.remove("p-service-menu__image-item--active");
      }
    });
  }

  // サービスアイテムにホバーイベントを設定
  serviceItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const serviceType = item.dataset.service;
      switchImage(serviceType);
    });
  });

  // イベントリスナーを設定
  navItem.addEventListener("mouseenter", showDropdown);
  navItem.addEventListener("mouseleave", hideDropdown);
  dropdown.addEventListener("mouseenter", showDropdown);
  dropdown.addEventListener("mouseleave", hideDropdown);

  // 初期設定
  updateDropdownPosition();

  // ウィンドウリサイズ時に再計算
  window.addEventListener("resize", updateDropdownPosition);
}
