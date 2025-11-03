# コーディングガイドライン

## CSS命名規則

このプロジェクトでは、CSS/SCSSのクラス名に **FLOCSS（フロックス）** を採用しています。

### FLOCSSとは

FLOCSSは、Foundation、Layout、Objectの3つのレイヤーと、Objectをさらに3つに分類した、合計5つのカテゴリでCSSを構造化する設計手法です。

### ディレクトリ構造

```
styles/
├── common/
│   ├── _reset.scss      // Foundation
│   ├── _base.scss       // Foundation
│   └── _variables.scss  // Foundation
├── layout/
│   ├── _header.scss     // Layout
│   └── _footer.scss     // Layout
├── component/
│   ├── _button.scss     // Object/Component
│   └── _card.scss       // Object/Component
├── project/
│   └── _caution.scss    // Object/Project
└── utility/
    └── _margin.scss     // Object/Utility
```

### レイヤー構造

#### 1. Foundation
リセットCSS、基本的なスタイル、変数定義など。**プレフィックスなし**。

```scss
// _reset.scss, _base.scss
html, body {
  margin: 0;
  padding: 0;
}
```

#### 2. Layout（プレフィックス: `l-`）
ページ全体のレイアウトを構成する大枠。ヘッダー、フッター、サイドバーなど。

```scss
// _header.scss
.l-header {
  position: fixed;
  top: 0;
  width: 100%;
}
```

#### 3. Object/Component（プレフィックス: `c-`）
再利用可能な小さなコンポーネント。ボタン、カードなど。

```scss
// _button.scss
.c-button {
  padding: 10px 20px;

  &--primary {
    background-color: blue;
  }
}
```

#### 4. Object/Project（プレフィックス: `p-`）
プロジェクト固有のパターン。他のプロジェクトでは再利用できない。

```scss
// _caution.scss
.p-caution {
  background-color: #fff9e6;
}
```

#### 5. Object/Utility（プレフィックス: `u-`）
マージン、テキスト配置など、単一のスタイルを持つ汎用クラス。

```scss
// _margin.scss
.u-mt-10 {
  margin-top: 10px;
}
```

### BEMとの組み合わせ

FLOCSSでは、各レイヤー内でBEMの命名規則を使用します。

```
.l-block              /* Layout */
.l-block__element     /* Layout内の要素 */
.l-block--modifier    /* Layout内の修飾子 */

.c-block              /* Component */
.c-block__element     /* Component内の要素 */
.c-block--modifier    /* Component内の修飾子 */

.p-block              /* Project */
.p-block__element     /* Project内の要素 */
.p-block--modifier    /* Project内の修飾子 */
```

### 実装例

```html
<!-- Layout: ヘッダー -->
<header class="l-header">
  <div class="l-header__inner">
    <div class="l-header__logo">
      <a href="/">ロゴ</a>
    </div>
    <nav class="l-header__nav">
      <ul>
        <li><a href="#">Menu</a></li>
      </ul>
    </nav>
  </div>
</header>

<!-- Project: 注意書きバー（プロジェクト固有） -->
<div class="p-caution">
  <p>このサイトはポートフォリオ用のデモサイトです。</p>
</div>

<!-- Component: ボタン（再利用可能） -->
<button class="c-button c-button--primary">送信</button>
```

### SCSS実装のポイント

```scss
// Layout
.l-header {
  position: fixed;

  &__inner {
    max-width: 1200px;
  }

  &__logo {
    width: 150px;
  }

  &--transparent {
    background-color: transparent;
  }
}

// Component
.c-button {
  padding: 10px 20px;

  &--primary {
    background-color: blue;
  }

  &--large {
    font-size: 20px;
  }
}

// Project
.p-caution {
  background-color: #fff9e6;

  p {
    margin: 0;
  }
}
```

### クラス分類の判断基準

- **Layout (`l-`)**: ページの骨組み（ヘッダー、フッター、メイン、サイドバー）
- **Component (`c-`)**: 他のプロジェクトでも使える汎用的なパーツ（ボタン、カード、モーダル）
- **Project (`p-`)**: このプロジェクト固有のパターン（特殊なバナー、固有のセクション）
- **Utility (`u-`)**: 単一スタイルの汎用クラス（余白調整、テキスト配置）

### 注意点

- プレフィックスは必ず付ける（FoundationとUtility以外）
- 要素の中に要素をネストしない（`.l-header__nav__item` は避ける → `.l-header__nav-item`）
- Modifierは基本クラスと併用する（`class="c-button c-button--primary"`）
- Utilityは他のクラスと組み合わせて使う
