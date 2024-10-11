# ポートフォリオ用リポジトリ

github pagesでホスト予定


# セットアップ


```
docker build -t my-portfolio-app .
```

以下のシェルでコンテナの中にアクセス
```
sh start.sh
```

モジュールをインストール
```
npm install
```

サーバを起動

```
npm start
```

# github pagesにデプロイ

```
npm run deploy
```

# トラブルシューティング

コンテナの中でファイルを作成すると
rootユーザでファイルが作成される

ホスト側でgitによるブランチ切り替えやファイルの削除ができなくなるので、
以下のコマンドでファイルの所有者を変更すること

```
sudo chown -R $USER:$USER .
```