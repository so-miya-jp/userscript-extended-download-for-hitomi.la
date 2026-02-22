# userscript-extended-downloader-for-hitomi.la
Tampermonkey上で動作するhitomi.laのダウンロード機能拡張です。

# 機能一覧
- hitomi.laのZIPダウンロードで分割ダウンロードを実施する。
- プログレスバー表示を詳細化。
- ダウンロードに失敗した場合に続行。
- ダウンロードファイル名を事前に入力可能とする。
- ダウンロードファイル名に:区切りで画像番号を追加すると一部だけダウンロード可能。
- hitomi.la上のArtist, Group, Series, Characters, Tagsを翻訳辞書を通して変換して表示する。

# 使用方法
- tampermonkeyを拡張機能から導入する。
- [#hitomi.la_extended_download.js](#hitomi.la_extended_download.js)と
  [#hitomi.la_extended_download_ejdics.js](#hitomi.la_extended_download_ejdics.js)を
  新規ユーザースクリプトとして設定する。<br/>テキストとして貼り付けでよいと思います。
- ツールバーにスクリプトレットとして以下を用意
    > javascript:{if(download_gallery){download_gallery('');}}
