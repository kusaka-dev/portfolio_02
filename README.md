# my-coding-template

Viteをベースとした、モダンなフロントエンド開発のためのスターターテンプレートです。

## 特徴

- ⚡ **Vite** - 高速なビルドツールと開発サーバー
- 🎨 **SCSS対応** - Sassプリプロセッサとglobインポート機能（`**/*.scss`で自動インポート）
- 📄 **EJSテンプレート** - コンポーネントベースのHTML生成
- 📦 **マルチページ対応** - 複数のHTML、JS、SCSSファイルを自動検出
- 🔥 **HMR (Hot Module Replacement)** - 開発時の即座な反映
- 🏗️ **最適化されたビルド** - Rollupによる本番環境向けバンドル
- 🎯 **モダンCSS Reset** - アクセシビリティに配慮したリセットCSS
- 🛠️ **充実したmixins** - レスポンシブ、Flexbox、ボタンなど再利用可能なスタイルパターン

## 必要要件

- Node.js 20.x 以上 または 22.x 以上
- npm または pnpm

## インストール

```bash
# 依存関係のインストール
npm install
# または
pnpm install
```

## 使い方

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーが `http://localhost:3000` で起動します。

### 本番環境用ビルド

```bash
npm run build
```

ビルド結果は `dist/` ディレクトリに出力されます。

### ビルドのプレビュー

```bash
npm run preview
```

本番環境用ビルドをローカルでプレビューできます。

## ディレクトリ構造

```
my-coding-template/
├── src/                           # ソースコードディレクトリ
│   ├── assets/
│   │   ├── images/                # 画像ファイル（Viteで処理される）
│   │   ├── scripts/               # JavaScriptファイル
│   │   │   ├── components/        # JSコンポーネント（mobileMenu, smoothScroll等）
│   │   │   └── main.js            # メインJSエントリーポイント
│   │   └── styles/                # SCSS/CSSファイル
│   │       ├── common/            # 共通スタイル
│   │       │   ├── _reset.scss    # モダンCSSリセット
│   │       │   ├── _base.scss     # ベーススタイル
│   │       │   ├── _variables.scss # SCSS変数
│   │       │   └── _mixins.scss   # 再利用可能なmixins
│   │       ├── component/         # コンポーネントスタイル
│   │       │   ├── _header.scss   # ヘッダースタイル
│   │       │   └── _footer.scss   # フッタースタイル
│   │       ├── page/              # ページ固有スタイル
│   │       │   └── _index.scss    # トップページスタイル
│   │       └── style.scss         # メインSCSSエントリーポイント（globインポート使用）
│   ├── components/                # EJS再利用可能なコンポーネント
│   │   ├── _header.ejs            # ヘッダーコンポーネント
│   │   └── _footer.ejs            # フッターコンポーネント
│   ├── public/                    # 静的アセット（そのままコピーされる）
│   │   └── assets/
│   │       └── images/            # favicon、ロゴなど
│   └── index.html                 # トップページ
├── dist/                          # ビルド出力ディレクトリ（自動生成）
├── .editorconfig                  # エディタ設定
├── vite.config.js                 # Vite設定ファイル
└── package.json                   # パッケージ設定
```

## 技術スタック

- **Vite** ^7.1.7 - ビルドツール
- **Sass** ^1.93.2 - CSSプリプロセッサ
- **vite-plugin-ejs** ^1.7.0 - EJSテンプレート対応
- **vite-plugin-sass-glob-import** ^6.0.0 - SCSS globインポート機能

## Vite設定の特徴

- **自動エントリーポイント検出**: `src/**/*.js`、`src/assets/styles/pages/**/*.scss`、`src/**/*.html` を自動的にスキャン
- **カスタム出力構造**: アセットを意味のあるディレクトリに整理（styles/、js/、images/）
- **開発サーバー**: ポート3000で起動
- **ビルドルート**: `./src` ディレクトリ

## SCSS機能

### Globインポート

`style.scss`では`vite-plugin-sass-glob-import`を使用して、ディレクトリ内の全SCSSファイルを自動インポートできます：

```scss
@use './component/**/*.scss';
@use './page/**/*.scss';
```

新しいコンポーネントやページのSCSSファイルを追加すると、自動的にインポートされます。

### 変数とMixins

- **変数** (`_variables.scss`): カラー、フォント、ブレークポイントなどのプロジェクト全体で使用する変数を定義
- **Mixins** (`_mixins.scss`): レスポンシブデザイン、Flexbox、ボタン、ユーティリティなどの再利用可能なスタイルパターン

### 使用例

```scss
@use "../common/variables" as *;
@use "../common/mixins" as *;

.my-component {
  @include container;
  background-color: $color-primary;

  @include mq-sp {
    padding: 16px;
  }
}
```

## ライセンス

このプロジェクトはプライベートプロジェクトです。
