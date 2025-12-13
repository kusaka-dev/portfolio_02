/**
 * 自動スクロールスライダーの初期化
 * Splideを使用した自動スクロールスライダー
 */

import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";

export function initAutoScrollSlider() {
  const autoScrollSlider = document.getElementById("auto-scroll-slider");

  if (!autoScrollSlider) {
    return;
  }

  new Splide(autoScrollSlider, {
    type: "loop",
    drag: "free",
    focus: "center",
    perPage: 6,
    autoWidth: true,
    gap: "20px",
    autoScroll: {
      speed: 1,
    },
    arrows: false,
    pagination: false,
  }).mount({ AutoScroll });
}
