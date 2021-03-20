# Gatsby-tutorial

[Gatsby - tutorial](https://www.gatsbyjs.com/docs/tutorial/)を実行しました

所要時間は慣れている人で２時間かからないくらい

0. Set Up Your Development Environment
1. Get to Know Gatsby Building Blocks
2. Introduction to Styling in Gatsby
3. Creating Nested Layout Components
4. Data in Gatsby
5. Source Plugins and Rendering Queried Data
6. Transformer Plugins
7. Programmatically Create Pages from Data
8. Preparing a Site to Go Live


## 0. Set Up Your Development Environment

主に各OSへの Gatsby インストール方法です

Mac, Windows, ubuntu など

Mac だと Homebrew, Xcode, Node.js, npm まで教えてくれます

親切です
めちゃくちゃ親切

npm 推奨

gatsby-cli は yarn でインストールするとエラーが出て大変なことになります

（でもプラグインとかは慣れてる yarn でやってしまいました……）

gatsby-cli は現状インストールすると v3 になります

スターターは v2 が多いのでお気をつけください


## 1. Get to Know Gatsby Building Blocks

React のお作法と Gatsby のお作法

React 使っている方は流し見で十分かと


## 2. Introduction to Styling in Gatsby

CSS 適用方法と CSS Modules の利用方法だけ

CSS-in-JS とか他の方法もあるけどカバーし切れないのでそれは各自で調べてとのことー

[スタイルについてはここら辺から](https://www.gatsbyjs.com/docs/how-to/styling/styled-components/)
詳しく学ぶ必要あり

ちなみに本リポジトリにはここのチュートリアルの内容が含まれています


## 3. Creating Nested Layout Components

プラグインでタイポグラフィ（gatsby-plugin-typography）の利用方法

プラグインについては[こちらから探す](https://www.gatsbyjs.com/plugins)


## 4. Data in Gatsby

ここから７まで同じチュートリアルデータを使って、ブログを作成していきます

本リポジトリはこのチュートリアルを含みます

graphQL でタイトルデータを持ってくるまで

graphQL をサーバ側でクエリとリゾルバ関数書くのはわかりにくかったんですが、Gatsby は確認もしやすいので、学び初めとしてはむしろ良いかもと思いました


## 5. Source Plugins and Rendering Queried Data

プラグインでファイル可視化（gatsby-source-filesystem）を追加

graphQL を介してソースデータや重さ、日付などを取得できるようになります


## 6. Transformer Plugins

プラグインでファイル名を graphQL に追加（gatsby-transformer-remark）します

これで記事データを表として１ページに表示させられるようになります


## 7. Programmatically Create Pages from Data

gatsby-node.js を追加して、slug を graphQL に追加します

slug or path を使ってマークダウンから記事を生成します

めちゃくちゃ簡単に静的ジェネレーターでブログ作成できるんだと言うことがわかります


## 8. Preparing a Site to Go Live

未着手

[Lighthouse audit](https://developers.google.com/web/tools/lighthouse/) を使用したサイト診断を実施します


# After finished

技術ログを残したいので Gatsby + Netlify でやろうと思ったけど

スターターいっくらやっても全然動きそうもなく

これは多分、最近 gatsby-cli が v3 に変更になって、v3 対応のスターターが全然ないことが原因だと思いますが

当初は全然原因もわからず、仕方ないのでチュートリアルからやるか〜、とやってみました

蓋を開けたらめちゃくちゃ親切で簡単でした

この後も [How-to guides](https://www.gatsbyjs.com/docs/how-to/) 参照して自前でログ作ってみたいと思います！


[Syk](https://github.com/SayakaNakajima) 2021/3/20