# Magazine's name fetchtool

芥川龍之介『羅生門』に関する私の参加する研究活動の過程で必要になったため制作した、CiNiiから羅生門に関する論文を検索した上で検索結果から雑誌名のみ抜き出すやつです。

 ## Requirements 
 Nodejsで動かしてます。Nodeを入れてください。それだけです。

 ## Usage

 ~~~bash
$ cd magazine-research
$ node index.js
 ~~~

以上です。基本的にデータはAPIから毎回取りに行ってます。
取りに行っているデータは[data.json](data.json)を参考にしてください。
