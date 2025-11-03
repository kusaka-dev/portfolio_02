/**
 * FVスライダーの初期化
 * Splideを使用したファーストビュースライダー
 */

import Splide from "@splidejs/splide";
import "@splidejs/splide/css";

export function initFvSlider() {
  const fvSlider = document.getElementById("fv-slider");

  if (!fvSlider) {
    return;
  }

  new Splide(fvSlider, {
    type: "fade",
    perPage: 1,
    autoplay: true,
    interval: 5000,
    speed: 1000,
    pauseOnHover: false,
    pauseOnFocus: false,
    arrows: false,
    pagination: false,
  }).mount();
}
