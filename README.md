# React Native 複利計算機

このプロジェクトは、**React Native** を使用して開発された複利計算機アプリです。ユーザーはこのアプリを使用して、複利計算を簡単に行うことができます。

## 特徴

- React Native を使用したクロスプラットフォームのモバイルアプリ
- Android と iOS の両方をサポート
- シンプルで使いやすい複利計算機能

## 技術スタック

- **React**: 16.6.3
- **React Native**: ^0.58.4
- **React Navigation**: ^3.3.0
- その他の依存関係については `package.json` を参照してください

## 依存関係のインストール

このプロジェクトを利用するには、以下の手順でインストールとセットアップを行ってください。

### 1. プロジェクトをクローン

```bash
git clone https://github.com/enlian/react-native-fuli-calculator.git
cd react-native-fuli-calculator
```

### 2. 依存関係をインストール

以下のコマンドで依存パッケージをインストールします：

```bash
npm install
```

または Yarn を使用する場合：

```bash
yarn install
```

## アプリの実行

### 1. 開発サーバーの起動

React Native の開発サーバーを起動するには、以下のコマンドを実行します：

```bash
npm start
```

または Yarn を使用する場合：

```bash
yarn start
```

### 2. エミュレーターまたは実機での実行

- **iOS**: Mac で `Xcode` を使用してシミュレーターまたは実機で実行します。次のコマンドを使用します：

  ```bash
  react-native run-ios
  ```

- **Android**: Android Studio を使用してエミュレーターまたは実機で実行します。次のコマンドを使用します：

  ```bash
  react-native run-android
  ```

## ビルド

本番環境用にアプリをビルドするには、以下のコマンドを使用します：

```bash
npm run build
```
