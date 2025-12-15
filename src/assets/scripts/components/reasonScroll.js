import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Reason Sectionのスクロールアニメーション初期化
 */
export function initReasonScroll() {
  const section = document.querySelector('.p-reason');
  if (!section) return;

  const items = section.querySelectorAll('.p-reason__item');
  const imageContainer = section.querySelector('.p-reason__image');

  if (!items.length || !imageContainer) return;

  // 各アイテムにScrollTriggerを設定
  items.forEach((item, index) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => setActiveItem(index),
      onEnterBack: () => setActiveItem(index),
    });
  });

  /**
   * アクティブアイテムを設定
   * @param {number} index - アクティブにするアイテムのインデックス
   */
  function setActiveItem(index) {
    // 全てのアイテムからactiveクラスを削除
    items.forEach((item) => {
      item.classList.remove('p-reason__item--active');
    });

    // 指定されたアイテムにactiveクラスを追加
    items[index].classList.add('p-reason__item--active');

    // 画像を切り替え（data-image属性があれば使用）
    const imageUrl = items[index].dataset.image;
    if (imageUrl && imageContainer) {
      // 画像のフェードアニメーション
      gsap.to(imageContainer, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          imageContainer.style.backgroundImage = `url(${imageUrl})`;
          imageContainer.style.backgroundSize = 'cover';
          imageContainer.style.backgroundPosition = 'center';
          gsap.to(imageContainer, {
            opacity: 1,
            duration: 0.3,
          });
        },
      });
    }
  }

  // 初期状態を設定
  if (items.length > 0) {
    setActiveItem(0);
  }
}
