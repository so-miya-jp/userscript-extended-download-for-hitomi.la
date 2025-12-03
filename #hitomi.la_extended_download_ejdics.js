// ==UserScript==
// @name         hitomi.la add ejdics
// @namespace    test
// @version      0.1
// @description  none
// @author       You
// @match        https://hitomi.la/*
// @icon         https://www.google.com/s2/favicons?domain=hitomi.la
// @grant        none
// ==/UserScript==
var artist_ejdic = {
 "2-g" : "2-G"
,"2t" : ["2T", "ナビエ遥か2T"]
,"35 machi" : "３５まち"
,"45acp" : "45ACP"
,"4uu" : "4UU"
,"846gou" : "846号"
,"92m" : "92M"
,"a.k" : "A・K"
,"a1" : "A1"
,"ab" : "AB"
,"abbb" : "ABBB"
,"abu" : "ABU"
,"acid.909" : "Acid・909"
,"agape" : "Agape"
,"akr" : "AKR"
,"alber" : "Alber"
,"am-dvl" : "AM-DVL"
,"arkas" : "Arkas"
,"bna-v5" : "BNA_V5"
,"boole" : "BOOLE"
,"bou" : "Bou"
,"bren303" : "BREN-303"
,"bren-303" : "BREN-303"
,"brll" : "BRLL"
,"ciz" : "Ciz"
,"co ma" : "Co_Ma"
,"cru" : "Cru"
,"csy" : "CSY"
,"cura" : "Cura"
,"dre" : "DRE"
,"dytm" : "DYTM"
,"d kaketsu" : "Dかけつ"
,"e.c.h" : "E.C.H."
,"ed" : "ED"
,"ekor" : "EKOR"
,"f" : "F"
,"f.s" : ["F・S", "F.S", "江口尋"]
,"f4u" : "F4U"
,"fct" : "FCT"
,"fight fight chiharu" : "FFC"
,"flaty flat" : "FLATY-FLAT"
,"ito fleda" : "fleda伊藤"
,"fue" : "Fue"
,"fugo" : "FUGO"
,"g-10" : ["G-10", "GGGGGGGGGG", "桜井画門"]
,"gall" : "gALL"
,"gggg" : "GGGG"
,"ggi" : "GGぃ"
,"gmkj" : "GMKJ"
,"gody" : "Gody"
,"gorani" : "Gorani"
,"gsus" : "GSUS"
,"gun" : "GUN"
,"h.you" : ["H・YOU", "H.you"]
,"h9" : "H9"
,"ham" : "HAM"
,"hb" : "HB"
,"hellap" : "hellaP"
,"tsusauto" : "ＨＧＴラボ"
,"hg chagawa" : "HG茶川"
,"h-h" : "H-H"
,"hirno" : "Hirno"
,"hiviki.n" : ["Hiviki N", "HivikiN", "時丸佳久"]
,"hiya" : "Hiya"
,"h-magic" : "H-magic"
,"hroz" : "Hroz"
,"hydrant" : "HYDRANT"
,"hyji" : "灰司"
,"i" : "I"
,"i4u" : "I4U"
,"iapoc" : "IAPOC"
,"ii" : "I・I"
,"is" : ["iS", "椅子"]
,"j" : "J"
,"jacky" : "Jacky"
,"jj.jj" : "JJ.JJ"
,"jjune" : "JJune"
,"jmg" : "JMG"
,"joe dandis" : "JOE DANDIS"
,"john.t.h." : "JOHN.T.H"
,"joy ride" : "JOY RIDE"
,"jp06" : "JP06"
,"jun686" : "Jun686"
,"k.a.r" : "K.A.R"
,"k.c." : "K.C."
,"k2isu" : "K2isu"
,"kanikoro" : "KANIKORO"
,"kat" : "KAT"
,"katzeh" : "Katzeh"
,"kdash" : ["K/DASH", "K／DASH"]
,"kinn" : "KINN"
,"kloah" : "Kloah"
,"niwa yukari" : ["KOALA", "生皮ＫＯＡＬＡ"]
,"koi nobori" : "Koiのぼり"
,"ks" : "KS"
,"kumasteam" : "KumaSteam"
,"k-ko" : "K子"
,"laika" : "LAIKA"
,"lien" : "Lien"
,"lin" : "LIN"
,"llm" : "LLM"
,"luna.m" : "Luna.M"
,"m-5" : "M-5"
,"mak" : "MAK"
,"marcy dog" : "MARCYどっぐ"
,"megus" : "MEGU'S"
,"mgmee" : "MGMEE"
,"mg joe" : ["MGジョー", "マシンガンジョー"]
,"m-hiro" : "M-HIRO"
,"mild7" : "MILD7"
,"mine" : "MINE"
,"minitity" : "MINITITY"
,"min-naraken" : "MIN-NARAKEN"
,"miss black" : "MISS BLACK"
,"mk" : "MK"
,"ml" : "ML"
,"milkexplorer" : "MLKx"
,"mmchair" : "MM"
,"m-max" : "M-MAX"
,"mogg" : "Mogg"
,"momomo" : ["momomo", "ももも合衆国"]
,"mondo.k" : "MONDO.K"
,"mon-mon" : "MON-MON"
,"moo" : "Moo"
,"mr.lostman" : "Mr.Lostman"
,"mr.way" : "Mr.way"
,"mtno" : "MTNO"
,"mu." : "MU"
,"muk" : "MUK"
,"mumu" : "MUMU"
,"muta no yoi oniku" : "mutaの良いお肉"
,"m ecchi kei" : "Mえっち系"
,"mda starou" : "MだSたろう"
,"n.o. chachamaru" : ["N.O.ちゃちゃ丸", "N.O-茶々丸"]
,"n820" : ["えぬはに", "N820"]
,"nadare" : "NADARE"
,"nago.k" : "NAGO.K"
,"naname" : "Naname"
,"nandz" : "NandZ"
,"nas-o" : "NAS-O"
,"naz" : "Naz"
,"necojet" : "necoJET"
,"necomi" : "necömi"
,"nekohige" : "NEKOHIGE"
,"neo black" : "NEO BLACK"
,"neo gentle" : ["NEO’GENTLE", "NEO GENTLE"]
,"newmen" : "NEWMEN"
,"newpix" : "NEWPIX"
,"ni theta" : "Niθ"
,"no.gomes" : "NO.ゴメス"
,"nobu-chin" : "Nobu-Chin"
,"nodame" : ["nod飴", "天野どん"]
,"noe" : "Noe"
,"noise" : "Noise"
,"nom" : "Nom"
,"nr" : "NR"
,"nt00" : "NT00"
,"ntntgngn" : "NTNTGNGN"
,"nyan" : ["NYAN", "祥寺はるか"]
,"nylon" : "ナイロン"
,"o.ri" : "O.Ri"
,"o3zone" : "O3zone"
,"oda koziki" : "oda古事記"
,"ogataaz" : ["Ogata Az", "OgataAz"]
,"outa" : "OH太"
,"oka" : "OKA"
,"okama" : "OKAMA"
,"gyotoukotsu" : ["OKASIRA", "魚頭骨"]
,"okawari" : ["OKAWARI", "おかわり"]
,"okina" : "OKINA"
,"ouma" : "OUMA"
,"p19" : "P19"
,"pacific" : "PACIFIC"
,"paint robo" : "ペイントロボ"
,"paradise d" : ["PARADISE“D”", "PARADISE\"D\""]
,"nathaniel pennel" : "Pennel"
,"pennel" : "Pennel"
,"penguindou" : ["PEN吟堂", "筆吟堂"]
,"philly" : "Philly"
,"pikazo" : "Pikazo"
,"pin vice" : "PIN・VICE"
,"pj-1" : ["PJ-1", "高崎隆"]
,"plum" : "ぷらむ"
,"polier" : "POLIER"
,"ponpon" : "PONPON"
,"prhs" : "Prhs"
,"prime" : "Prime"
,"proper" : "PROPER"
,"p-chan" : "Pちゃん"
,"q" : "Q"
,"q-gaku" : "Q-Gaku"
,"qpman" : "QPMAN"
,"qudamomo" : "Qudamomo"
,"randy rhoads" : ["RANDY RHOADS", "らんでーろーず"]
,"rebis" : "Rebis"
,"reco" : "Reco"
,"redguy" : "REDGUY"
,"redrop" : "ReDrop"
,"red-rum" : "RED-RUM"
,"ren" : ["REN", "錬"]
,"r-ex" : "R-Ex"
,"reys" : ["REY’s.", "REY'S."]
,"re shimashima" : "Re:しましま"
,"rhasta" : "Rhasta"
,"ribyuhki" : ["Rib:y[uhki]", "リブユウキ"]
,"rin-45 degrees celsius" : ["Rin-45C", "Rin-45℃"]
,"rinrin" : "RINRIN"
,"road" : "Road"
,"rocket engine" : "ロケットエンジン"
,"route39" : "Route39"
,"rt." : "RT."
,"ruiko" : "RUIKO"
,"rusty soul" : "Rusty Soul"
,"ryoji" : "Ryoji"
,"ryoma" : ["ryoma", "天道龍馬", "きただりょうま"]
,"ryujin" : "Ryujin"
,"ryu-tmr" : "RYU-TMR"
,"s" : "S"
,"s parameter" : "S・パラミター"
,"sage joh" : "sage・ジョー"
,"saipaco." : "SAIPACo."
,"sas" : "SAS"
,"sasar" : "sasaR"
,"sayika" : "Sayika"
,"sgk" : ["SGK", "えすじーけー"]
,"shock-art" : "Shock-Art"
,"shuko" : "SHUKO"
,"sian" : "Sian"
,"sid daisuke" : ["士土大介", "士土美紗子"]
,"sinensian" : "Sinensian"
,"sin-go" : "Sin-Go"
,"sink" : "SINK"
,"sinkai" : "SINKAI"
,"sirou" : "Sirou"
,"siu" : "Siu"
,"onikuya" : ["siu", "onikuya"]
,"skylader" : "すかいれーだー"
,"smac" : "SMAC"
,"sodegaura nozomi" : ["Sodegaura Nozomi", "袖ヶ浦のぞみ"]
,"softcharm" : "SOFTCHARM"
,"solidlum" : "SOLID LUM"
,"solid lum" : "SOLID LUM"
,"sollyz" : "Sollyz"
,"sono" : "SONO"
,"sowitchraw" : "Sowitchraw"
,"soz." : "Soz."
,"spice" : "スパイス"
,"ssa" : "SSA"
,"ssz" : "SSZ"
,"st.retcher" : "ST.レッチャー"
,"str" : "STR"
,"stuka" : ["Stuka", "真柴剣太"]
,"subtle" : "SUBTLE"
,"sugarbt" : "SugarBt"
,"sunasu" : "SUNASU"
,"super zombie" : "すーぱーぞんび"
,"sw" : "Sw"
,"switch 01" : ["スウィッチ01", "p-box"]
,"syroh" : "Syroh"
,"syrup" : "Syrup"
,"syu" : "SYU"
,"t.k-1" : "T.K-1"
,"ta and a" : "TA&A"
,"tagro" : "TAGRO"
,"takahico" : "TAKAHiCo"
,"takashia" : "TAKASHIA"
,"take.s" : "TAKE.S"
,"takto" : "TAKTO"
,"takumi" : "TAKUMI"
,"tamaki" : "TAMAKi"
,"tamao" : "TAMAO"
,"tana" : "TANA"
,"tanabe" : "TANABE"
,"tear" : "Tear"
,"teaindian" : "紅茶インディアン"
,"tege" : "T'ege"
,"tei-oh-k-takamuro" : "TEI-OH-K-TAKAMURO"
,"templus" : "Temたす"
,"kobayashi sara" : ["TEN CATE", "小林紗良", "鴣羽翔", "こばしょー"]
,"tenkla" : ["tenkla", "土居坂崎"]
,"tenyati" : "TenYati"
,"tenyo" : "TENYO"
,"the amanoja9" : ["The Amanoja9", "Amanoja9"]
,"the seiji" : "The SEIJI"
,"thor" : "THOR"
,"tiger" : "タイガー"
,"tiger shark" : ["TIGER SHARK", "太牙射悪"]
,"tj-type1" : "TJ-type1"
,"tks" : "TKS"
,"tmu" : "TMU"
,"tnsk" : "TNSK"
,"tora" : "TORA"
,"toro" : "TORO"
,"tosh" : ["tosh", "佐伯俊"]
,"tower" : "ToWeR"
,"trent" : "TRENT"
,"triage tag" : "Triage Tag"
,"trump" : "TRUMP"
,"tsurugi" : "Tsurugi"
,"twinbox" : "TwinBox"
,"type.90" : "TYPE.90"
,"tsyatu" : "Tシャツ"
,"t landolt" : "T・ランドルト"
,"u" : "U"
,"uc" : "UC"
,"ug" : "UG"
,"u-hi" : "U-hi"
,"u-k" : "U-K"
,"ukyo rst" : "ukyo_rst"
,"u-mi" : "U-MI"
,"urec" : "UREC"
,"u-sora" : "U-sora"
,"utu" : "Utu"
,"u-suke" : "u介"
,"urakan" : "U羅漢"
,"vanilla cream" : "ヴァニラCREAM"
,"vecstar" : "VECSTAR"
,"velfro" : "Velfro"
,"v-mag" : "V-mag"
,"wasavi 8" : "wasavi_8"
,"windart" : "WindArt"
,"wing bird" : "WING☆BIRD"
,"wkar" : "WKAR"
,"wolf tarou" : "狼太郎"
,"x36marubox" : "X36丸ボックス"
,"xe" : "Xe"
,"xetton" : "XEtton"
,"xiaozi xiao" : "笑笑餃子"
,"xin" : "Xin"
,"xxxxl" : "XXXXL"
,"x pierrot" : "Ｘぴえろ"
,"y4" : "Y4"
,"yac" : "YAC"
,"yam" : "Yam"
,"yan-yam" : "Yan-Yam"
,"yao." : "YaO."
,"yaska" : ["YASKA", "安一樹"]
,"yassy" : "YASSY"
,"yasu" : "Yasu"
,"yo-ka" : "YO-KA"
,"yts takana" : "YTS鷹那"
,"yu" : "YU"
,"yui-7" : "YUI_7"
,"yumoteliuce" : "Yumoteliuce"
,"yu-ri" : "YU-RI"
,"zan" : ["ZAN", "ざん"]
,"zen9" : "Zen9"
,"zenki" : "ZENKI"
,"zerry fujio" : "ZERRY藤尾"
,"ziran" : "ZIRAN"
,"zol" : ["ZOL", "キャプテン・キーゼル", "めんげれくん"]
,"zukiki" : "ZUKI樹"
,"zummy" : "Zummy"
,"z-ton" : "Zトン"
,"aako" : "あ～こ"
,"arthurs trike" : "アーサーストライク"
,"arsenal" : ["アーセナル", "左倉かなを"]
,"art post" : "アート・ポスト"
,"r" : "あーる。"
,"rga" : "R賀"
,"r ken" : "R言"
,"rken" : "R言"
,"r-koga" : ["あ～る・こが", "R☆古賀", "R・古賀勲"]
,"roy tong-koh" : ["R☆トンコウ", "瑞東航", "東航"]
,"aian" : "あいあん"
,"aoi sena" : "あいいせな"
,"aiu" : "藍兎"
,"aiue oka" : "愛上陸"
,"aiu kaho" : "相羽翔穂"
,"aio rito" : "相尾リト"
,"aikawa amika" : "あいかわあみか"
,"aikawa arisa" : "相川亜利砂"
,"aikawa an" : "愛川あん"
,"aikawa itaru" : "藍川いたる"
,"aikawa kumika" : "あいかわくみか"
,"shinobu shou" : "哀側翔"
,"aikawa tatsuki" : "相川たつき"
,"aikawa meruo" : "相川めるお"
,"aikawa monako" : "あいかわモナコ"
,"aikawa yoichi" : "相川よいち"
,"aikawa ryou" : "相川りょう"
,"aiken" : "あいけん"
,"aizawa ginji" : "愛澤銀次"
,"aizawa sanae" : "相沢早苗"
,"aizawa tetsuo" : "愛澤鉄夫"
,"aizawa tetora" : "アイザワテトラ"
,"aizawa hiroshi" : "あいざわひろし"
,"aizawa miki" : "藍沢ミキ"
,"aizawa misawo" : "相澤みさを"
,"aizawa monyo" : "逢沢もにょ"
,"ice" : "ICE"
,"icelatte" : "アイス・ラテ"
,"icelee" : "IceLee"
,"aizome gorou" : "愛染五郎"
,"aida" : "阿井田"
,"ai takurou" : "安威拓郎"
,"aida takanobu" : "会田孝信"
,"aida toshizou" : "藍田としぞう"
,"aitanikov" : "あいたにこふ"
,"aida mai" : "英田舞"
,"aida maki" : "相田麻希"
,"aida mizu" : "藍田観杜"
,"aida yu" : "相田裕"
,"aichi shiho" : "あいち志保"
,"aito matoko" : "あいとまとこ"
,"ainaryumu" : "藍那りゅむ"
,"aino" : "あいの"
,"ainose rin" : "あいのせりん"
,"ai ha muteki" : "愛は無敵"
,"aiba yuuya" : "相羽侑哉"
,"aihara you" : "和原ヨウ"
,"aibiki mabo" : "愛引まぁぼ"
,"aibu yue" : "相武ゆえ"
,"eyebrows born" : "アイブロウズボーン"
,"aimaitei umami" : "愛昧亭うまみ"
,"aimitsu" : "姶蜜"
,"aimiya yuu" : "愛宮ゆう"
,"aimu" : "愛夢"
,"aimu yuu" : "愛夢由宇"
,"aimo" : "アイモ"
,"aiyoshi hazuki" : "藍吉はづき"
,"island" : "あいらんど"
,"airandou" : "あいらんどう"
,"aweida" : "アウェイ田"
,"aura seiji" : "あうら聖児"
,"aeba fuchi" : "饗庭淵"
,"aox" : "あおっくす"
,"aoi" : "A・O・I"
,"aoi ume" : "あおいうめ"
,"aoi kumiko" : "葵久美子"
,"aoi shou" : "葵抄"
,"aoi tiduru" : "葵井ちづる"
,"aoi nagisa" : "葵渚"
,"kinata" : "葵奈太"
,"aoi nyaoko" : "あおいにゃおこ"
,"aoi hatori" : "葵羽鳥"
,"aoi haruka" : "碧衣悠"
,"aoi hitori" : ["葵ヒトリ", "A.O.I", "A・O・I"]
,"aoi masami" : "あおいまさみ"
,"aoi manabu" : "あおいまなぶ"
,"aoi mikan" : "葵蜜柑"
,"aoi mikku" : "あおいミック"
,"aoi miharu" : "蒼井ミハル"
,"aoi muramasa" : "蒼井村正"
,"aoi yuuji" : "あおいゆーじ"
,"aoi yumi" : "蒼井遊美"
,"aoi riku" : "碧井理玖"
,"aoi ryuya" : "蒼井怜也"
,"aoi remi" : "青井レミ"
,"aoiro ichigou" : ["あお色一号", "あおいろ一号"]
,"aoiro ereji" : "蒼色えれじ"
,"aoi marin" : ["蒼海", "蒼威まりん"]
,"aoki ume" : "蒼樹うめ"
,"aoki kanji" : "青木幹治"
,"aoki kou" : "アオキコウ"
,"aoki seishin" : "碧木誠心"
,"aoki nanase" : "あおき七瀬"
,"aoki mamoru" : "青木守"
,"aoki rino" : "あおきりの"
,"aogiri penta" : "あおぎりぺんた"
,"aoki reimu" : "青樹零夢"
,"aogu" : "阿呆宮"
,"aokura shou" : ["aokura", "アオクラ"]
,"aoko" : "Aoko"
,"ketsune" : ["青魚", "けつねまじん"]
,"aosaki hifumi" : "青崎ひふみ"
,"aoshima yoshino" : "青島嘉野"
,"aojiru" : ["青汁", "あおじる"]
,"aozora lolipop" : "あおぞらろりぽっぷ"
,"aotsu umihito" : ["蒼津ウミヒト", "深凪ウミヒト", "伊空いなさ"]
,"aotsuki hirotada" : "蒼月裕忠"
,"aoten" : ["青天", "青点"]
,"aoto kurune" : "青乙くるね"
,"aotonbo" : "Aotonbo"
,"aonagi ibane" : "蒼凪イバネ"
,"aonuma shizuma" : "蒼沼シズマ"
,"aono akira" : "蒼野アキラ"
,"aono kankodori" : ["蒼野閑古鳥", "蒼野みよ"]
,"aono gunjou" : "碧野グンジョウ"
,"aono daioh" : "あおのだいおー"
,"aoha" : "あおは"
,"aoba ei" : "青葉エイ"
,"ao banana" : "青ばなな"
,"aoba hachi" : "青葉はち"
,"ao madousi" : "蒼惑う子"
,"aomushi" : "あおむし"
,"aoyama akira" : "蒼山哲"
,"aoyama kazumi" : "青山一海"
,"aoyama kiiro." : "あおやまきいろ。"
,"denchi" : ["アオヤマ電池", "茎", "電池"]
,"aoyama mayama" : "青山まやま"
,"aoyama yuki" : "青山ユキ"
,"aoyama reo" : "青山怜央"
,"akabon" : "あかBON"
,"aka marl" : ["赤Marl", "赤丸"]
,"akaiguppy" : "赤いグッピー"
,"akaishi shiroishi" : "あかいししろいし"
,"akai suisei" : "あかいすいせい"
,"akai nibura" : "赤井にぶら"
,"akai fuji" : "アカイフジ"
,"akai mato" : "紅唯まと"
,"akai marunoshin" : "赤井丸乃進"
,"akai yoru" : "紅威ヨル"
,"akai lapis" : "紅衣らぴす"
,"akairo" : "あかゐろ"
,"akausu ko" : "赤薄紅"
,"akaume" : "あかうめ"
,"akae shirou" : "朱江士朗"
,"akae neo" : "赤絵ねお"
,"akao" : "朱尾"
,"akaou" : "赤王"
,"akaozaka" : "朱尾坂"
,"akagane matsuri" : "赤銅茉莉"
,"akaga hirotaka" : "赤賀博隆"
,"akagi" : "赤木"
,"akagi asahito" : "赤城あさひと"
,"akagi gisho" : "アカギギショウ"
,"akagi kuro" : "赤木クロ"
,"akagi jun" : "赤木惇"
,"akagi shunichi" : "赤城俊一"
,"akagi joukichi" : "赤木城吉"
,"akagi shinden" : "赤城シンデン"
,"akagirenya" : "赤木蓮屋"
,"akagi rio" : "赤木リオ"
,"akaguchi yuuda" : "赤口ゆうだ"
,"akaza" : "あかざ"
,"akasa ai" : "あかさあい"
,"akasaka kazuhiro" : "赤坂かずひろ"
,"akazaki yasuma" : "赤崎やすま"
,"akasa tanu" : "赤佐たぬ"
,"akazawa red" : "あかざわRED"
,"aka shio" : "朱シオ"
,"akasha mitona" : ["朱沙みとな", "ふじいあきこ"]
,"akashiro kiiro" : "赤白キイロ"
,"akashi rokuro" : "明石六露"
,"aka seiryuu" : "赤セイリュウ"
,"agata" : "アガタ"
,"agata ui" : "あがた有為"
,"akadashi" : "赤だし"
,"agachi" : "あがち"
,"akachian" : "あかちあん"
,"akatsuka fujio" : "赤塚不二夫"
,"akatsuki" : ["あかつき", "アカツキ"]
,"akatsuki akane" : "あかつき茜"
,"akatsuki kazuho" : "暁一穂"
,"akatsuki katsuie" : "暁勝家"
,"akatsuki shion" : "あかつきしおん"
,"akatsuki hiziri" : "あかつき聖"
,"akatsuki mao" : "あかつきまお"
,"akatsuki myuuto" : "赤月みゅうと"
,"akanagi" : ["AKANAGI", "あかなぎ"]
,"akana meiko" : "赤名芽衣子"
,"akane" : "茜"
,"akane shuuhei" : "茜しゅうへい"
,"akane sekiro" : "アカネセキロ"
,"akaneman" : "明寝マン"
,"akane midori" : "朱音ミドリ"
,"akaneya" : "茜屋"
,"akabashi" : "アカバシ"
,"akabane" : "アカバネ"
,"akahito" : "赤人"
,"akahira kirin" : ["あかひらきりん", "あかひら"]
,"akahoshi kenji" : "赤星健次"
,"akamaru jyunya" : "あかまる純也"
,"akari kyousuke" : "あかりきょうすけ"
,"arikawa satoru" : "有河サトル"
,"aki" : ["秋", "AKI"]
,"aki eda" : "秋★枝"
,"takami akio" : "秋緒たかみ"
,"akikaze shirakumo" : "秋風白雲"
,"akikawa kouichi" : "秋川康一"
,"akikan" : "あきかん"
,"aki kyouma" : "秋恭魔"
,"akikusa peperon" : "秋草ぺぺろん"
,"akiguchi kojin" : "秋口幸迅"
,"akisaka yamoka" : "あきさかやもか"
,"akizawa kazuhiko" : "秋澤和彦"
,"akishima shun" : "昭嶋しゅん"
,"akishiro akino" : "秋白秋乃"
,"aki suzuki" : ["秋鈴木", "猫都夏椅"]
,"akisoba" : "秋蕎麦"
,"akizora sawayaka" : "秋空さわやか"
,"akizora momidi" : "秋空もみぢ"
,"akitani hiro" : "秋谷ひろ"
,"akichin" : "あきちん"
,"akitsu tombo" : "秋津Tombo!"
,"akiduki akina" : "秋月秋名"
,"akitsuki itsuki" : "秋月伊槻"
,"akitsuki karasu" : ["秋月カラス", "秋月からす"]
,"akizuki takahiro" : "秋月たかひろ"
,"akiduki touya" : "秋月十夜"
,"akitsuki hirozumi" : ["秋月ひろずみ", "大輪田泊"]
,"akiduki wataru" : "あきづき弥"
,"akitsu mikami" : "現津みかみ"
,"akito" : "Akito"
,"akinaie" : "春夏冬工"
,"akino komichi" : "秋乃こみち"
,"akino shin" : "あきのしん"
,"akino subaru" : "秋野すばる"
,"akino sora" : "あきのそら"
,"akino nonomi" : "秋乃ののみ"
,"akino hidefumi" : "秋乃秀文"
,"akino yuuhi" : "秋乃優日"
,"akiha" : ["あきは@", "akiha"]
,"akiha at" : "あきは＠"
,"akiba nagi" : ["秋葉凪樹", "秋葉凪人"]
,"akiba maou" : "秋葉魔王"
,"akiba ryu" : "暁葉龍"
,"akiba wataru" : "秋葉わたる"
,"akihiko" : "あきひこ"
,"aki hirame" : "秋ひらめ"
,"akifuji satoshi" : "あきふじさとし"
,"aki matsuri" : "亜木・祭"
,"akiman" : "あきまん"
,"akio" : "秋生"
,"akimura toki" : "秋村とき"
,"akimoto karma" : "秋元カルマ"
,"akimoto dai" : "あきもと大"
,"akiya akira" : "秋谷昭"
,"akiyama kenta" : "あきやまけんた"
,"akiyama sanshiro" : "あきやまさんしろ"
,"akiyama michio" : "秋山道夫"
,"akimoto hiroshi" : "秋吉ひろし"
,"akiyoshi yoshiaki" : "あきよしよしあき"
,"akiyoshi ryoutarou" : "秋芳涼太郎"
,"akira" : "AKIRA"
,"akira hajime" : ["あきら肇", "あきらはじめ"]
,"akira renji" : "秋良蓮二"
,"akuochisukii sensei" : "アクオチスキー先生"
,"akusema" : "あくせま"
,"akutagawa yoshizumi" : "芥川義澄"
,"akuta noe" : "阿久多のえ"
,"akuta linco" : "あくた琳子"
,"akutsu shun" : "阿久津俊"
,"akutenkou" : "悪天候"
,"aguni" : "あぐに"
,"akuno toujou" : "悪の東杖"
,"akubinium" : "あくびにうむ"
,"akubine kokoro" : "阿久美寝心"
,"acbins" : "あくびんす"
,"akuma" : ["A☆くま", "あくま"]
,"akuyaku sanpachigou" : "悪役八八八号"
,"agekichi" : "あげきち"
,"akechi satoru" : "明智悟"
,"akechi shizuku" : "明地雫"
,"akemi" : "明美"
,"ako" : "アコ"
,"akow kazumi" : "亜神和美"
,"akoko." : "あここ。"
,"akosuke" : "あこ助"
,"agobitch nee-san" : "アゴビッチ姉さん"
,"asai ichiko" : ["あさいいちこ", "浅井市子"]
,"asai neno" : "あさい寧乃"
,"asai makoto" : "浅生マコト"
,"asai you" : ["浅井裕", "あさいもとゆき"]
,"asao masakazu" : "麻生昌和"
,"asaomi shimura" : "あさおみ志群"
,"asaka" : "安佐川"
,"asaga aoi" : "浅賀葵"
,"asakaze maron" : "浅風まろん"
,"asakatsu teishoku" : "あさかつ定食"
,"asagami" : "あさがみ"
,"asakawa" : "浅川"
,"asagi aya" : "あさぎあや"
,"asaki takayuki" : ["朝木貴行", "朝木貴之"]
,"asagi hiroshi" : "浅葱洋"
,"asaki yuzuno" : "淺木柚乃"
,"asagi yoshimitsu" : ["あさぎよしみつ", "アサギヨシミツ"]
,"asagi ryu" : ["あさぎ龍", "天望心喜"]
,"asagiri yuu" : "朝霧夕"
,"asakusa tarou" : "浅草太郎"
,"asakura kukuri" : "アサクラククリ"
,"asakura clock" : "朝倉クロック"
,"asakura sakura" : "麻倉桜"
,"asakura shimoichi" : "麻倉下市"
,"asakura hayate" : "朝倉はやて"
,"asakura hina" : "朝倉妃那"
,"asakura blue" : "朝倉ブルー"
,"asakura mitsuru" : "朝倉満"
,"azasuke" : "AZASUKE"
,"yuusuke asazume" : "麻爪佑助"
,"asada okina" : "麻田起奈"
,"asada ryo" : "あさだリョウ"
,"asazuki norito" : "浅月のりと"
,"asatsuki minami" : "朝月南"
,"asanagi" : "朝凪"
,"asana tukune" : "あさなつくね"
,"asanuma katsuaki" : "浅沼克明"
,"asano ai" : "あさの亜依"
,"asano akira" : "麻野明"
,"asano kaori" : "浅野香織"
,"asano shimon" : "アサノシモン"
,"asanoha" : "麻の葉"
,"asano meyusi" : "浅野めゆし"
,"asano yukino" : "あさのゆきの"
,"asano yomichi" : "朝野よみち"
,"asahi" : "旭"
,"asahi akane" : "朝日暁音"
,"asahina" : "あさひな"
,"asahina saya" : "朝比奈紗弥"
,"asahina hikage" : "アサヒナヒカゲ"
,"asahina makoto" : "朝比奈まこと"
,"asahina mari" : "朝比奈まり"
,"asahina yoshitosi" : "朝比奈吉利"
,"asahina rino" : "朝比奈梨乃"
,"asahimaru" : "旭丸"
,"asahi yurine" : "朝陽ゆりね"
,"asahiru yuu" : "浅ひるゆう"
,"asafimu" : "あさふぃむ"
,"asama hinami" : "浅間ひなみ"
,"asamitsu fumi" : "あさみつ史"
,"tel" : ["朝峰テル", "TEL"]
,"azamino keiji" : "あざみ野圭二"
,"azami yoshinari" : "薊良成"
,"asamori mizuki" : "朝森瑞季"
,"asamori yukihiro" : "麻森ゆき洋"
,"asari yoshitoo" : "あさりよしとお"
,"asio" : "アシオ"
,"ashiomi masato" : ["アシオミマサト", "時原マサト"]
,"ashika" : ["あしか", "海驢"]
,"ajishio" : "アジシオ"
,"ashisyun" : "芦俊"
,"addis abeba" : ["あじす・あべば", "おちよしひこ", "越智善彦"]
,"ashizuki" : "アシズキ"
,"ashita" : "アシタ"
,"ashida ex" : "芦田EX"
,"ashitaba mofu" : "明日葉もふ"
,"aji taro" : "鯵太郎"
,"murata." : ["ACID-HEAD", "ムラタ。"]
,"ashina mellow" : "芦名めろう"
,"ajino hiraki" : "味野ひらき"
,"aji norimi" : "味海苔味"
,"ashima takumi" : "芦間たくみ"
,"ashihara mizuho" : "葦原瑞穗"
,"ashibe haduki" : "芦部はづき"
,"aji pontarou" : "安治ぽん太郎"
,"aji maru" : "あじまる"
,"ashimoto yoika" : "あしもと☆よいか"
,"ajura" : "あじゅら"
,"ashiwara masahiro" : "葦原将軍"
,"asu oikiru" : "明日追斬"
,"asuoi kiru" : "明日追斬"
,"asuka" : "あすか"
,"asuka keisuke" : "明日香景介"
,"asuka yumiki" : ["飛鳥弓樹", "飛鳥", "やまぐちみゆき"]
,"asuka rina" : "飛鳥梨菜"
,"asuka nashina" : "飛鳥梨菜"
,"azuki kurenai" : "あずき紅"
,"azukiko" : "あずきこ"
,"azusa m" : "azusa_m"
,"azusa norihee" : "あずさのりへー"
,"azusa yukimasa" : "梓幸雅"
,"azuse" : "あずせ"
,"us them" : "あすぜむ"
,"azutaka" : "あずたか"
,"astroguy2" : "ASTROGUY II"
,"azuha murasame" : "悪瑞派武羅雨"
,"asuhiro" : "アスヒロ"
,"azuma kyouko" : "東叶子"
,"azuma kyouto" : ["東・京都", "東京都", "東・きょーと"]
,"azuma kiyohiko" : ["あずまきよひこ", "序ノ口譲二"]
,"azuma kenji" : "東犬二"
,"azuma sawayoshi" : "アズマサワヨシ"
,"azuma shin" : "吾妻しん"
,"azuma taira" : "東タイラ"
,"azuma tesshin" : "東鉄神"
,"azuma makoto" : "東真人"
,"azuma minatu" : "東みなつ"
,"azumaya manju" : "あずまやまんぢゅう"
,"azumaya yukiko" : "アズマヤユキコ"
,"azuma yuki" : ["あずまゆき", "あづまゆき"]
,"azumi kyohei" : "あずみ京平"
,"azesaki yuuma" : "畔崎ゆうま"
,"azechi kiyochi" : ["畔地潔地", "アゼチ・キヨチ", "アゼチキヨチ"]
,"asou gatou" : "麻生我等"
,"aso jun" : "麻生純"
,"asou shin" : "麻生シン"
,"ataka atsushi" : "安宅篤"
,"atage" : "あたげ"
,"atatame masuka" : "阿多溜ますか"
,"adachi ken" : "あだちけん"
,"adachi shinichi" : ["足立真一", "あだちしんいち"]
,"adachi takumi" : "安達拓実"
,"atari hiroyuki" : ["辺ヒロユキ", "繚乱童子"]
,"atyuto" : "あちゅと"
,"achumuchi" : "あちゅむち"
,"aduki amaguri" : "あづき甘栗"
,"akkii" : ["あっきー", "アッキー"]
,"akki" : "あっきー"
,"akki gedoumaru" : "悪鬼外道丸"
,"azuki yui" : "阿月唯"
,"akkusu" : "あっくす"
,"ash yokoshima" : "Ash横島"
,"atchy" : "あっちー"
,"acchi" : "あっちー"
,"atte nanakusa" : "あって七草"
,"atsuhisa" : "敦久"
,"affle" : "AFFLE"
,"apple" : "APPLE"
,"apploute" : "あっぷるーと"
,"appleton" : "アップルトン"
,"azuma hideo" : "吾妻ひでお"
,"aduma ren" : "あづま煉"
,"adumi kazuki" : "あづみ一樹"
,"adumi yuu" : "あづみ悠羽"
,"atohoshi cecil" : "後星セシル"
,"atori k" : ["あとりK", "あきなお"]
,"adon no aniki" : "アドンの兄貴"
,"anahama hikoza" : "姉浜彦佐"
,"anapon" : "あなぽん"
,"ani" : "ANI"
,"aniya yuiji" : "阿仁谷ユイジ"
,"anyanko" : "あにゃんこ"
,"anoshabu" : "アノシャブ"
,"ano nimaru" : "阿野弐丸"
,"apatite" : "アパタイト"
,"acht" : "アハト"
,"app" : ["あぱぱ", "東雲舞樹"]
,"abi" : "あび"
,"af kuro" : "アフ黒"
,"new ab" : ["亜部脳丸", "にゅ～AB", "亞部脳丸", "あ～び～NORMAL", "にゅーAB"]
,"abu hyaku" : "あぶひゃく"
,"abubu" : "あぶぶ"
,"aburaage" : "あぶらあげ"
,"apricot" : "ApRicot"
,"aburi saamon maru" : "炙りサーモン丸"
,"aburidashi zakuro" : "あぶりだしざくろ"
,"ahe" : "あへ"
,"abe" : "阿部"
,"abe inori" : "阿部いのり"
,"abekawa kineko" : "阿部川キネコ"
,"abe tsukumo" : "あべつくも"
,"abe nattou" : "あべなっつ"
,"abeno chaco" : "阿倍野ちゃこ"
,"abe manabu" : ["安部マナブ", "安部学"]
,"ahemaru" : "アヘ丸"
,"abe morioka" : "あべもりおか"
,"abe ryu" : "悪部瑠"
,"ahen" : "AHEN"
,"appendix" : "AppendiX"
,"afostar-san" : "あほすたさん"
,"ahobaka" : "AHOBAKA"
,"abo manten" : "阿保満天"
,"amama" : "あまあま"
,"amaama" : "天2"
,"amaori tatsuki" : "天織龍樹"
,"amagai yukino" : "天海雪乃"
,"amagaeru" : "あまがえる"
,"amagappa shoujogun" : ["雨がっぱ少女群", "雨と棘"]
,"amakawa akito" : "天河慊人"
,"amakan" : "あまカン"
,"amagi kazuko" : ["天城一子", "洗井竹弘"]
,"amagi kei" : "亜麻木硅"
,"amaki touri" : "天鬼とうり"
,"amagi michihito" : "あまぎみちひと"
,"amagi yuu" : "天魏裕"
,"amagiri mio" : "雨霧MIO"
,"amakusa tobari" : "天草帳"
,"amakuchi" : "甘口"
,"amakura" : "アマクラ"
,"amaguri cho-ko" : ["天栗ちょーこ", "甘栗ちょーこ"]
,"amasaka takashi" : "天坂隆志"
,"amazato" : "雨砂糖"
,"amashoku" : "あましょく"
,"kumatora" : "天空太一"
,"amazon" : "雨存"
,"amatake akewo" : "甘竹朱郎"
,"amatarou" : "天太郎"
,"amatsuki ruri" : ["天月るり", "夜天月", "島田ひろかず"]
,"amatsu sae" : "天津冴"
,"amatsuji" : "あまつじ"
,"amadu nami" : "天津ナミ"
,"amadume ryuuta" : ["甘詰留太", "A・浪漫・我慢"]
,"amaduyu tatsuki" : "甘露樹"
,"amadeusky" : "アマデウスキー"
,"amanagi seiji" : "天凪青磁"
,"amanatsu amane" : "甘夏あまね"
,"amanatsu makoto" : ["甘夏真琴", "あまなつまこと"]
,"amane" : "Amane"
,"amane shirou" : "あまね紫狼"
,"amane soh" : ["雨音颯", "雨音響"]
,"amane sou" : ["雨音颯", "雨音響"]
,"amane hibiki" : "雨音響"
,"amane mari" : "天音真理"
,"amane ruri" : "天音るり"
,"amano ameno" : "天野雨乃"
,"amano kazumi" : ["天乃一水", "平いっすい"]
,"amanogami dai" : "あまのがみだい"
,"amano koyo" : "天乃紅葉"
,"jet" : ["天野琴音", "Jet"]
,"amano jack" : "天野じゃく"
,"amano shuninta" : "天野しゅにんた"
,"amano tamaki" : "天野タマキ"
,"amano chiharu" : "天乃ちはる"
,"amano teru" : "天乃輝"
,"amanoha asagi" : "天乃羽浅戯"
,"amano banana" : "天乃バナナ"
,"amano hidemi" : "天野英美"
,"amanomiya haruka" : "アマノミヤハルカ"
,"yumano yuuki" : "有間乃ユウキ"
,"amano youki" : ["あまの・よ～き", "天野陽喜"]
,"amano yosora" : "天野よそら"
,"amahara" : "天原"
,"amafuku amane" : "甘福あまね"
,"amamitu kousuke" : "甘蜜こうすけ"
,"amami matoba" : "天海まとば"
,"amamiya" : "アマミヤ"
,"amamiya iria" : "雨宮杁亜"
,"amamiya jun" : ["あまみや淳子", "雨宮じゅん", "雨宮淳", "明石正", "明石ただし"]
,"amamiya mizuki" : "雨宮ミズキ"
,"shinjitsu" : "あまみや実"
,"amamiya you" : "天宮耀"
,"amame" : "あまめ"
,"amayu" : "あまゆ"
,"amayumi" : "あまゆみ"
,"amaro tamaro" : "あまろたまろ"
,"amam colon" : "aman："
,"amisawa kenkyuujo" : "網澤研究所"
,"amino" : ["網野", "あみの"]
,"ami hideto" : "弥舞秀人"
,"amiya mia" : "阿宮美亜"
,"amu" : ["あむ", "亜夢"]
,"amutake" : "あむたけ"
,"ame arare" : "雨あられ"
,"amei sumeru" : "あめいすめる"
,"amekawa sioko" : "飴川塩子"
,"amesaki vanilla" : "飴崎ばにら"
,"amezawa koma" : "飴沢狛"
,"amesawa yagi" : "飴沢やぎ"
,"amedamacon" : "飴玉コン"
,"ameto yuki" : "あめとゆき"
,"amedori" : "飴鳥"
,"ameno shigure" : "雨野しぐれ"
,"ameno chiharu" : "飴野千晴"
,"amehiko" : "雨彦"
,"amamori moru" : "雨森モル"
,"ameya kaname" : "飴屋カナメ"
,"ameya kirica" : "アメヤキリカ"
,"ameyama denshin" : "雨山電信"
,"uran" : ["雨蘭", "URAN", "橋本還"]
,"amoi jun" : ["厦門潤", "あもい潤", "陸乃家鴨", "亜藤潤子"]
,"amou ayano" : "天羽アヤノ"
,"amou mari" : ["天羽真理", "フェニキア雅子"]
,"aya" : ["藍夜", "AYA"]
,"ayakase chiyoko" : "綾枷ちよこ"
,"ayakaze ryuushou" : "綾風柳晶"
,"ayakawa mio" : "綾川みお"
,"ayakawa riku" : "あやかわりく"
,"ayasaka mitsune" : "綾坂みつね"
,"aya shiina" : "彩しいな"
,"aya shachou" : "彩社長"
,"ayasugi tsubaki" : "綾杉つばき"
,"ayase kuroyuri" : "理瀬くろゆり"
,"ayase satomi" : "綾瀬さとみ"
,"ayase totsuki" : "彩瀬とつき"
,"ayase hazuki" : "綾瀬はづき"
,"ayase mai" : "あやせまい"
,"ayase mio" : "綾瀬水音"
,"ayato" : "綺人"
,"ayato ayari" : "あやとあやり"
,"ayatori" : "あや鳥"
,"ayanakitori" : "アヤナキトリ"
,"ayanami kenshi" : "綾波けんし"
,"ayana mizuki" : "綾那瑞奇"
,"ayane" : "あやね"
,"ayano naoto" : "綾野なおと"
,"ayano val" : "絢乃ばる"
,"ayano kira" : "綾乃☆きら"
,"ayano mitsuka" : "アヤノミツカ"
,"ayano rumi" : "綾乃るみ"
,"ayano rei" : "綾野麗"
,"ayano rena" : "綾乃れな"
,"ayama" : "あ山"
,"ayamachi hibi" : "彩町日々"
,"ayamy" : "あやみ"
,"ayuka" : "あゆか"
,"ayukawa aoi" : "鮎川あおい"
,"ayukawa makoto" : "鮎川まこと"
,"ayuhara shizuku" : "鮎原雫"
,"ayuma sayu" : "あゆま紗由"
,"ayumi" : "AYUMI"
,"ayumu.m" : "AYUMU.M"
,"arai araya" : "荒井アラヤ"
,"arai kaikan" : "荒井海鑑"
,"arai kazuki" : ["荒井かずき", "新井カズキ", "新井和崎"]
,"araiguma" : "あらいぐま"
,"arai kei" : "荒井啓"
,"arai satoshi" : "新居さとし"
,"arai susugu" : "荒居すすぐ"
,"araizumi rui" : "あらいずみるい"
,"arai taiki" : "新井大器"
,"arai togami" : "荒居栂美"
,"arainobu" : "アライノブ"
,"arai nobu" : "アライノブ"
,"arao masaki" : "荒尾マサキ"
,"arakawa masami" : "新川雅美"
,"araki akihito" : "荒木アキヒト"
,"araki akira" : "あらきあきら"
,"araki kanao" : "あらきかなお"
,"araki kyouya" : ["荒木狂也", "荒木京也", "あらききょうや"]
,"araki you" : ["あらきよう", "荒木瑛"]
,"arakure" : "あらくれ"
,"arata iri" : "あらた伊里"
,"arata kaoru" : "新薫"
,"aratagawa nikei" : "荒田川にけい"
,"aratama" : "アラタマ"
,"aratamaru" : "改多丸"
,"arato asato" : "あらと安里"
,"aranaga hikaru" : "あらなが輝"
,"aranasi" : "新良梨"
,"alapi" : "あらぴ"
,"arabiki koshou" : "あらびき故障"
,"aramaki echizen" : "荒巻越前"
,"aramaki shake" : "新巻鮭"
,"aran rei" : ["阿乱レイ", "阿乱霊", "アラン霊"]
,"ari" : "あり"
,"ariichi kyuu" : "有一九"
,"ariesu watanabe" : "ありえす渡辺"
,"arika" : "ARIKA"
,"arigase shinji" : "ありがせしんじ"
,"ariga tou" : "有賀冬"
,"ariku" : "アリク"
,"arisaka atsumi" : "有坂亜摘"
,"arisawa keina" : "有沢圭奈"
,"arisawa masaharu" : "有沢柾春"
,"arisue tsukasa" : "有末つかさ"
,"arisuga akira" : "有栖賀明"
,"arisugawa yuuna" : "有栖川雄名"
,"alison" : "ALISON"
,"aritou" : "蟻糖"
,"arino" : "蟻乃"
,"arinotowatari" : "ありのとわたり"
,"arino hiroshi" : "ありのひろし"
,"alpha beta" : "有葉米太"
,"arimaki yoshio" : "ありまきよしお"
,"arima keitarou" : ["有馬啓太郎", "有馬○太郎"]
,"arima ken" : "ありま健"
,"arima kouichi" : "有馬紘一"
,"arima zin" : "有馬侭"
,"arima natsubon" : "ありまなつぼん"
,"alimika satomi" : "ありみかさとみ"
,"arimura ario" : "有村ありお"
,"arimura shinobu" : "有村しのぶ"
,"arimura daikon" : "有村大根"
,"ariyoshi gen" : "蟻吉げん"
,"arinko" : ["ありんこ", "★ありんこ★"]
,"aru" : "ある"
,"arcana mi" : ["あるかな(mi)", "あるかな"]
,"arukarifurin" : "アルカリ"
,"aruza ryuuto" : "あるざ流人"
,"rindow masaki" : "あるでぃ"
,"alde hyde" : "アルデヒド"
,"alto seneka" : "或十せねか"
,"aruto naruto" : "有人成徒"
,"arnage" : "あるなーじゅ"
,"alpine" : "あるぴーぬ"
,"alp" : "あるぷ"
,"alpha" : "有葉"
,"alpha alf layla" : "α・アルフライラ"
,"aruho" : "あるほ"
,"aruma" : "あるま"
,"arumajiki" : "或真じき"
,"arumajiro" : ["あるまじろう", "安藤慈朗"]
,"arumamai ayuka plus" : ["あるま", "在誠舞あゆか＋"]
,"arumi" : "アルミ"
,"aru ra une" : "アル・ラ・ウネ"
,"arurumo" : "あるるも"
,"arearee" : "あれあれえ"
,"alexi laiho" : "荒岸来歩"
,"arekusa mahone" : "荒草まほん"
,"allegro" : "あれぐろ"
,"alex" : "あれっくす"
,"arou rei" : ["あろうれい", "亜朧麗"]
,"aronyan" : "あろにゃん"
,"aro hiroshi" : "あろひろし"
,"awa" : ["AWA", "AwA"]
,"awaji himeji" : "あわじひめじ"
,"awata mokane" : "粟田もかね"
,"awamori ichitarou" : "泡盛一太郎"
,"awayume" : "淡夢"
,"anchors" : "Anchors"
,"uncle sam" : "あんくるさむ"
,"ankou norimitsu" : "安光紀充"
,"ankoku emu shougun" : "暗黒えむ将軍"
,"ainu mania" : ["暗黒のアイヌマニア", "アイヌマニア"]
,"ankoman" : "あんこまん"
,"tanesuke anzai" : "安斉種介"
,"anzaki moral" : "杏咲モラル"
,"anza yuu" : "あんざ友"
,"anji" : "杏二"
,"anthy" : "あんしー"
,"anzu" : "庵ズ"
,"anzuame" : "杏飴"
,"anzen chourui" : "安全鳥類"
,"andy" : "ANDY"
,"andou shuki" : "安藤周記"
,"andou jirou" : ["安藤慈朗", "あるまじろう"]
,"andou tomoya" : "安藤智也"
,"andou hiroyuki" : "安藤裕行"
,"andou yui" : "安藤ユイ"
,"andoryu" : "安堂流"
,"andrew" : "Andrew"
,"announ" : "暗ノ吽"
,"anno hideaki" : "庵野秀明"
,"annomike" : "あんのみけ"
,"anma" : "安間"
,"anmitsu sou" : "あんみつ草"
,"anmo night" : "暗藻ナイト"
,"anyakunin" : "暗躍人"
,"nuwara eliya" : ["アンラクシス", "ヌワリエリヤ", "ヌワラエリヤ"]
,"e equals mc2" : "E=mc2"
,"iio tetsuaki" : "飯尾鉄明"
,"igul" : ["い～ぐる", "いーぐる"]
,"iijima yuuki" : ["飯島優希", "AYUMI"]
,"eshimoto" : "Eシモト"
,"iisen mio" : ["飯閃澪", "御米椎", "みよね椎"]
,"iizuki tasuku" : "唯々月たすく"
,"iwamoto kuyo" : "いーないん"
,"iino haseru" : ["いいのはせる", "飯野ハセル"]
,"e-musu aki" : "いーむす・アキ"
,"ie-i tomii" : ["いえ～い富井", "いえーい富井"]
,"iero" : "いえろ～"
,"ion" : "伊翁"
,"iogi juichi" : "井荻寿一"
,"io takuya" : "射尾卓弥"
,"iori yuzuru" : "庵譲"
,"ikagawa shirou" : "いかがわ四郎"
,"igakino agenasu" : "井垣野あげなす"
,"ikasenbe" : "いかせんべ"
,"ika hotaru" : "伊香ほたる"
,"ikamatsu" : "烏賊松"
,"ikameshi" : "イカめし"
,"igarashi teru" : "五十嵐輝"
,"igarashi denma" : "五十嵐電マ"
,"igarashi hazuki" : "五十嵐はづき"
,"igarashi yuu" : ["いがらし☆ゆう", "いがらしゆう"]
,"ikisugi shokudou" : "イキスギ食堂"
,"iku ikuo" : "威駆イク夫"
,"ikue fuji" : "幾枝風児"
,"ikusa ryuji" : "いくさりゅうじ"
,"ikujinashi no fetishist" : "いくじなしのフェティシスト"
,"ikuta takanon" : "いくたたかのん"
,"iguchi sentarou" : "井口千太郎"
,"ikuhashi muiko" : "郁橋むいこ"
,"ikuhana niro" : "幾花にいろ"
,"ikuba moku" : "育場モク"
,"igumox" : "井雲くす"
,"ikumo taisuke" : "井雲泰助"
,"ikuya daikokudou" : "幾夜大黒堂"
,"ikura nagisa" : "伊倉ナギサ"
,"ike" : "いけ"
,"ikeuchi tanuma" : "池内たぬま"
,"ikegami akane" : "池上茜"
,"ikegami tatsuya" : "池上竜矢"
,"ikegami ryouichi" : "池上竜一"
,"ikezaki misa" : "池咲ミサ"
,"ikeshita maue" : "池下真上"
,"ikeda kazunari" : "池田一成"
,"iketaki ganguten" : "池瀧玩具店"
,"ikeda keiichi" : "池田圭一"
,"ikeda sakura" : "いけださくら"
,"ikeda jun" : "池田淳"
,"iketatsu shizuru" : "池竜静留"
,"ikeda pafue" : "いけだぱふぇ"
,"ikeda matamune" : "池田又心"
,"ikeda yasuhiro" : "池田靖宏"
,"igedoaha" : "イゲドアハ"
,"ikeno jouji" : "イケノジョージ"
,"ikematsu" : "池松"
,"shijiu" : "いけめる"
,"ike reibun" : "池玲文"
,"igouno kanata" : "異郷野かなた"
,"equal" : "イコール"
,"ikoma ippei" : "伊駒一平"
,"isaki" : ["Isaki", "伊佐木"]
,"izanami rou" : "いざなみ朗"
,"isami kouji" : "伊佐未晃治"
,"isami nozomi" : ["伊佐美ノゾミ", "伊佐美・Ｆ・ノゾミ", "伊佐美ノゾミA"]
,"isamu" : "勇"
,"izayoi seishin" : "十六夜清心"
,"izayoi no kiki" : "十六夜のキキ"
,"izayoi megumi" : "いざよいめぐみ"
,"izawa shinichi" : "伊沢慎壱"
,"isawa nohri" : "いさわのーり"
,"ishii takashi" : "石井隆"
,"ishii miring" : "石井美凛"
,"ishii yasuyuki" : "石井康之"
,"ishioto" : "Ishioto"
,"ishigaki takashi" : "イシガキタカシ"
,"ishigana" : "いしがな"
,"ishigami kazui" : "石神一威"
,"ishigami hajime" : "石紙一"
,"ishikawa kingyo" : "石川きんぎょ"
,"ishikawa shisuke" : "石川シスケ"
,"ishikawa jippei" : "石川銃兵"
,"ishikawa hirodi" : "石川ヒロヂ"
,"ishikei" : "石恵"
,"ishizaki manobu" : "石崎真信"
,"ishita" : "以舌"
,"ishida nodoame" : "石田のどあめ"
,"ishida masaharu" : "いしだ雅治"
,"ishizuchi ginko" : "石鎚ぎんこ"
,"ishino kanon" : ["石野鐘音", "歓喜天", "杉村麦太"]
,"ishihara kaori" : "石原歌織"
,"ishihara kouhei" : "石原浩平"
,"ishihara souka" : "石原そうか"
,"ishihara masumi" : "石原ますみ"
,"ishimari yuuya" : "イシマリユウヤ"
,"ishimura" : ["いしみそ", "いしむら"]
,"ijuhin808" : "伊集院808"
,"izumi" : ["和泉", "泉"]
,"izumi kyouta" : "いずみきょうた"
,"izumike" : "いずミケ"
,"izumi kou" : "和泉航"
,"izumi taichi" : "泉たいち"
,"izumi daichi" : "いずみだいち"
,"izumi kouki" : "出水高軌"
,"izumi tsubasu" : "和泉つばす"
,"izuminoaru" : "イズミノアル"
,"izumi hiro 4gou" : "伊豆美尋4号"
,"izumi hiroshi" : "和泉ひろし"
,"izumi hiroshi 4 gou" : "伊豆美尋4号"
,"izumi makoto" : "泉水真琴"
,"izumi mahiru" : "泉まひる"
,"izumi banya" : ["和泉万夜", "inkey"]
,"izumimori mana" : "出水守真名"
,"izumiya otoha" : ["いずみやおとは", "いづみやおとは", "時津風おとは"]
,"izumiya yuuji" : "泉谷勇次"
,"izumi yayoi" : "和泉弥生"
,"izumi yuujiro" : "泉ゆうじろ～"
,"izumi yukiru" : "和泉ゆきる"
,"izumi yuhina" : "いずみゆひな"
,"izumi rion" : "和泉リオン"
,"izumi rin" : "和泉凛"
,"izumi rei" : "いずみれい"
,"izumo ayuka" : "出雲アユカ"
,"izumo kuutarou" : "出雲空太郎"
,"isegawa yasutaka" : "イセ川ヤスタカ"
,"isezaki" : "いせざき"
,"isezaki yuzu" : "伊勢崎ゆず"
,"isemagu" : "いせマグ"
,"isou doubaku" : "位相同爆"
,"isogai shinjyu" : "磯貝槙珠"
,"iso kazunari" : "磯カズナリ"
,"iso nogi" : "磯乃木"
,"isobe mutsumi" : "五十部六罪"
,"isorashi" : ["イソラシ", "五十嵐唱乃"]
,"itau mikitaka" : "いたうみきたか"
,"itagaki keisuke" : "板垣恵介"
,"itachou" : ["いたちょう", "いただき頂上", "頂上雄彦"]
,"idaten funisuke" : "いだ天ふにすけ"
,"isako rokuroh" : "井硲六郎"
,"itaba hiroshi" : ["板場広し", "板場広志", "板場ひろし"]
,"itami" : "伊丹"
,"ichi" : "ICHI"
,"ichiichi yuuna" : "一市裕納"
,"ichie ryouko" : "一恵りょうこ"
,"ichio" : "イチオ"
,"ichiokunen wakusei" : "1億年惑星"
,"ichika" : "イチカ"
,"ichigain" : "ICHIGAIN"
,"ichikawa kazuhiko" : "市川和彦"
,"ichikawa kazuhide" : "市川和秀"
,"ichikawa saasya" : "市川小紗"
,"ichikawa noa" : "一河のあ"
,"ichikawa ryuunosuke" : "壱河柳乃助"
,"ichiki tomoe" : "壱樹ともえ"
,"ichigin" : "いちぎん"
,"kameyoshi ichiko" : ["いちこ", "亀吉いちこ"]
,"ichico" : ["いちこ", "亀吉いちこ"]
,"ichigo" : "いちご"
,"ichiko" : ["いちこ", "亀吉いちこ"]
,"ichigoh" : "1号"
,"ichigono shizuku" : "苺野しずく"
,"ichigono rei" : "苺野れい"
,"ichigo mark" : "いちごまぁく"
,"ichijou karune" : "一条かるね"
,"ichijou chihiro" : "一条ちひろ"
,"ichitaka" : "いちたか"
,"ichitomo kazutomo" : "一智和智"
,"ichina" : "イチナ"
,"ichi2no35" : "いちにのさんご"
,"ichino" : "壱の"
,"ichinose" : "イチノセ"
,"ichinose shio" : "イチノセシヲ"
,"ichinose tsuzuki" : "一ノ瀬つづき"
,"hakui ami" : ["一ノ瀬ランド", "羽咋あみ"]
,"ichinosono yui" : "一ノ園唯"
,"ichinomiya yuu" : "一宮夕羽"
,"ichihaya" : "いちはや"
,"ichihara kazuma" : "市原和真"
,"ichihara hikari z" : "位置原光Z"
,"isshiki nishiki" : "一敷錦"
,"ichimai ugou" : "一枚烏合"
,"ichimatsu" : "いちまつ"
,"ichimura" : "イチムラ"
,"ichiyo moka" : "一葉モカ"
,"144" : "いちよんよん"
,"ichiri" : "イチリ"
,"sazaki ichiri" : "イチリ"
,"ichiretsu jouji" : ["一烈条二", "うらべすう"]
,"ichiren takushou" : "一煉托生"
,"1roo" : "1ROO"
,"ichirou" : "イチロー"
,"itsuka puzzle" : "逸架ぱずる"
,"itsuki kuro" : "伊月クロ"
,"itsuki kousuke" : "いつきこうすけ"
,"izuki jirou" : "戌月ジロウ"
,"itsuki makoto" : "いつきまこと"
,"issi-13" : "イッシー13"
,"isshi taira" : "いっしたいら"
,"itsutsuse" : "いつつせ"
,"itto" : "一十"
,"isutoshi" : "ISUTOSHI"
,"ippachi" : "いっぱち"
,"ippongui" : "一本杭"
,"idumi minami" : "いづみみなみ"
,"izumi yoshiki" : "いづみよしき"
,"izurumi" : "いづるみ"
,"izure" : "いづれ"
,"idea" : "IDEA"
,"ide shota" : "胃出ショータ"
,"itou" : "いトう"
,"ito" : "いとう"
,"itou eight" : "伊藤エイト"
,"itou usagi" : "いとううさぎ"
,"itou ei" : "いとうえい"
,"itou keika" : "伊藤桂霞"
,"itou seto" : "イトウせと"
,"itou souichi" : "伊藤宗一"
,"itou daiku" : "伊藤第九"
,"itou nanami" : "井藤ななみ"
,"itou noizi" : "いとうのいぢ"
,"itou hiromine" : "伊藤聖峰"
,"itou masaya" : "伊藤まさや"
,"itou mami" : "伊藤真美"
,"itouya" : "伊藤屋"
,"itou yuuji" : "イトウゆーじ"
,"ito yoko" : "井藤楊子"
,"itou life" : "伊東ライフ"
,"ito ryusei" : "伊藤隆生"
,"itoyoko" : "ITOYOKO"
,"itokei" : "いとけい"
,"itosugi jou" : "いとすぎ常"
,"itosugi masahiro" : "糸杉柾宏"
,"itohana" : "イトハナ"
,"inagita" : "INAGITA"
,"inago" : "INAGO"
,"inasaki shirau" : "稲咲しらう"
,"inazawa ichitarou" : "稲沢市太郎"
,"inazuma" : ["INAZUMA", "佐藤ショウジ"]
,"inase shinya" : "稲瀬信也"
,"inasotsu" : "いなそつ"
,"inax" : "INAX"
,"inazuma rokenrou" : "稲妻露見郎"
,"inato serere" : "稲戸せれれ"
,"inanaki shiki" : "稲鳴四季"
,"inaba cozy" : ["稲葉COZY", "稲葉晃次"]
,"enoughmin" : "イナフミン"
,"inamitsu shinji" : "稲光伸二"
,"inamoto ineko" : "稲本いねこ"
,"inari" : "稲荷"
,"inari kinzou" : "稲荷金蔵"
,"inari bancha" : "稲荷ばん茶"
,"inari mochi" : "稲荷もち"
,"inan saya" : "伊南鞘"
,"inu" : ["犬", "いぬ", "INU"]
,"inuarasi" : "犬嵐"
,"inui" : "戌亥"
,"inui ayu" : "犬井あゆ"
,"inui sekihiko" : "犬威赤彦"
,"inuineko" : "いぬいねこ"
,"inui haruka" : "乾はるか"
,"inue shinsuke" : "犬江しんすけ"
,"inugai shin" : "犬凱新"
,"inugahora an" : "犬洞あん"
,"inukami" : "いぬかみ"
,"inukami inoji" : "犬上いの字"
,"inugami kira" : "狗神煌"
,"inugami naoyuki" : ["犬神尚雪", "犬神尚幸"]
,"inucreamice" : "いぬくりいむあいす"
,"inuzumi masaki" : "戌角柾"
,"inuta kanco" : "犬田かんこ"
,"inuta zetto" : "いぬた絶斗"
,"inuneko" : "いぬねこ"
,"inu-blade" : "犬ブレード"
,"inuburo" : "いぬぶろ"
,"inuboe" : "狗吠"
,"inuboshi" : "犬星"
,"inumaru" : "犬丸"
,"inumimi moeta" : "犬耳もえ太"
,"inumori sayaka" : "犬森さやか"
,"ino" : "INO"
,"inoue kiyoshirou" : ["胃之上奇嘉郎", "中村嘉宏"]
,"inoue shinkai" : "井上眞改"
,"inoue takumi" : "井上巧"
,"inoue takuya" : "いのうえたくや"
,"inoue tommy" : "いのうえとみい"
,"inoue nanaki" : "井上七樹"
,"inoue makito" : "イノウエマキト"
,"inoue mitan" : "いのうえみたん"
,"inoue yukihiro" : "井上行広"
,"inoue yoshihisa" : "井上よしひさ"
,"inoue wona" : "井上をんあ"
,"inosin" : "いのしん"
,"innocent" : "イノセント"
,"inochi wazuka" : "命わずか"
,"akage no un" : ["井ノ中UN", "赤毛のUN"]
,"inonaka kawazu" : "胃ノ中かわず"
,"inono" : ["inono", "鈴木しげる", "いのの"]
,"inobuta" : "猪豚"
,"inomaru" : "いのまる"
,"inomoto rikako" : "井ノ本リカ子"
,"ibarame hisa" : "茨芽ヒサ"
,"ibukichi" : "いぶきち"
,"ibuki haruhi" : "一颯はるひ"
,"ibuki pon" : "息吹ポン"
,"ibuki mana" : "いぶきまな"
,"ibu hidekichi" : "伊武秀吉"
,"iburo." : "いぶろー。"
,"ibunka kouryu" : "異文化交龍"
,"imaizumi atsushi" : "いまいずみあつし"
,"imai takeshi" : "今井武志"
,"imaichi" : "居妹治"
,"imai yuu" : "今井ユウ"
,"imakane kei" : "いまかねけい"
,"imagawa akira" : "今川あきら"
,"imaki hitotose" : "いまきひととせ"
,"imazaki itsuki" : ["伊魔崎斎", "RAGE", "帝留丸", "いまざきいつき"]
,"imajin kouji" : "イマジン孝二"
,"imazon" : "今ゾン"
,"imachi" : "いまち"
,"imachi souki" : "居待想樹"
,"imachi reki" : "居待暦"
,"imacchi" : "いまっち"
,"imanaga satoshi" : "今長敏"
,"imamura youko" : "今村陽子"
,"imamori" : "今森"
,"imotoka tsuyuki" : "芋とか露木"
,"iyama shinya" : ["猪山慎哉", "猪山槙哉"]
,"iyo" : "いよ"
,"irie" : "IRIE"
,"irie jyunn" : "入江jyunn"
,"iriejun" : "IRIE潤"
,"irie yamazaki" : "IRIE YAMAZAKI"
,"irikura hiroshi" : "入倉ひろし"
,"iruha touhu" : "入葉とうふ"
,"iruma kamiri" : "いるまかみり"
,"iro" : "色"
,"iroito" : "色糸"
,"irotsuki sakari" : "十六女十八女"
,"iroha" : "彩葉"
,"iroha chiyo" : "彩葉チヨ"
,"erory" : "いろり"
,"iwao" : "いわお"
,"iwakutuki" : "岩久月"
,"iwakoshi kunio" : "岩越国雄"
,"iwasaki akira" : "岩崎晶"
,"iwasaki takashi" : "いわさきたかし"
,"iwasaki tatsuya" : "岩崎たつや"
,"iwasaki yuuki" : "岩崎ユウキ"
,"iwasaki youko" : "岩﨑洋子"
,"iwaba" : "岩葉純希"
,"iwabuchi piroshi" : "いわぶちぴろし"
,"iwahoshi" : "いわほし"
,"iwama yoshiki" : ["いわまよしき", "いわまん"]
,"iwami yasoya" : "石見やそや"
,"inkey" : ["inkey", "inkey、和泉万夜"]
,"indo curry" : ["印度カリー", "印カ・オブ・ザ・デッド"]
,"in pulse" : "inぱるす"
,"infraton" : "インフラトン"
,"uasa hiyu" : "雨浅ひゆ"
,"uishi poru" : "羽衣石ぽる"
,"uirou" : "うぃろう"
,"uuizumi" : "うういずみ"
,"umon" : "ウーモン"
,"u-ring" : "うーりん"
,"uekan" : "うえかん"
,"uekino aroe" : "上木乃アロエ"
,"wes heartland smith" : "ウェス・ハートランド・スミス"
,"uesu talk" : "上須トーク"
,"uesugi kyoushirou" : "上杉響士郎"
,"uesugi yoko" : "上杉陽子"
,"uetakano oike" : "上高野御池"
,"ueda kimu" : "上田きむ"
,"ueda metawo" : "上田メタヲ"
,"ueda yuu" : "上田裕"
,"ueda rieko" : "上田リエコ"
,"ueda ryou" : "植田亮"
,"ue tetsuo" : "上鉄巌"
,"ueto seri" : "上戸ルリ"
,"ueno juubai" : "上野十倍"
,"uenosuke" : "↑野介"
,"ueno naoya" : "ウエノ直哉"
,"uehasu" : "上蓮"
,"uebata tani" : "上端たに"
,"uehara yoyogi" : "上原ヨヨギ"
,"uemukai dai" : "上向だい"
,"ueyama yousuke" : ["うえやま洋介犬", "うえやま洋介"]
,"uo" : "うお"
,"uousaoh" : "魚ウサ王"
,"uo denim" : "魚デニム"
,"uona telepin" : "うおなてれぴん"
,"uonuma yuu" : "うおぬまゆう"
,"uonu mayuu" : "うおぬまゆう"
,"uono shinome" : "魚野シノメ"
,"uonome beji" : "魚目ベジ"
,"uoman kotaroo" : "魚萬コタロー"
,"wolf" : "うぉるふ"
,"ukita tougo" : "宇岐多冬梧"
,"ukita tomoru" : "浮田ともる"
,"uguisu" : "うぐいす"
,"uguis anco" : "鶯あんこ"
,"uguisu kagura" : "鶯神楽"
,"ugetsu" : "ウゲツ"
,"ugeppa" : "うげっぱ"
,"uko" : "うこ"
,"usa otome" : "うさおとめ"
,"usagi kei" : "宇佐木恵"
,"usagi nagomu" : "うさぎなごむ"
,"usagine kobo" : "うさぎね工房"
,"usagi no tamago" : "うさぎのたまご"
,"usagi no tsuki" : "ウサギの月"
,"uzakiyu" : "ウザキユウ"
,"usakun" : "うさくん"
,"usashiro mani" : "うさ城まに"
,"usatsuka eiji" : "兎塚エイジ"
,"usanomura kamekichi" : "兎ノ村亀吉"
,"usaman senpai" : "うさまん先輩"
,"usami" : "うさみ☆"
,"usami yuu" : "うさみ優"
,"usami rui" : "ウサミルイ"
,"usami wataru" : "宇佐美渉"
,"usamota hiropon" : "うさもたひろぽん"
,"usi" : ["USI", "usi"]
,"ujiie moku" : "氏家もく"
,"ushio kiyoshi" : "潮汐きよし"
,"ushikani gassen" : "牛蟹合戦"
,"uziga waita" : ["氏賀Y太", "氏賀涌太"]
,"ushi kousen" : "牛工船"
,"ujishiba takako" : ["氏柴貴子", "氏柴貴鼓"]
,"ushisuke" : "ウシスケ"
,"ushino kandume" : "牛野缶詰"
,"ushino naka" : "うしの菜夏"
,"ushinomiya" : "うしのみや"
,"ushihashiru" : "ウシハシル"
,"ujihara shitone" : "蛆孕茵"
,"usimanu" : "うしまぬ"
,"usyuuri" : "白ぅ～凪ぃ"
,"ushiro muki" : "丑露ムキ"
,"usuiken" : "うすいけん"
,"usuki" : "薄稀"
,"uzuki hikaru" : "卯月ひかる"
,"usukuchi" : "うすくち"
,"usubeni sakurako" : "うすべに桜子"
,"uzura i" : "鶉異"
,"uso asio" : "宇曽あしお"
,"usotsuki fx" : "嘘吐きF(x)"
,"usoneko" : "うそねこ"
,"udai tetsurou" : "宇内鉄朗"
,"utata" : "UTATA"
,"utatane" : "ウタタネ"
,"utatane hiroyuki" : ["うたたねひろゆき", "一二三四五"]
,"utano" : "うた乃"
,"utamaru mikio" : "うたまるみきお"
,"utamaro" : "歌麿"
,"utamiya" : "歌宮"
,"uchi-uchi keyaki" : ["内々けやき", "内々欅"]
,"uchigawa" : "ウチガワ"
,"uchikubi gokumon" : "浮乳首極悶"
,"uchida koneri" : "内田こねり"
,"uchino bungo" : "うちの文吾"
,"uchi mikitaka" : "ウチミキタカ"
,"uchimura kaname" : "内村かなめ"
,"uchiyama aki" : ["内山亜紀", "野口正之"]
,"uchuu ika" : "宇宙烏賊"
,"uchuu teiou" : "宇宙帝王"
,"uchoten" : "有頂天"
,"utsugi tsuguha" : "空木次葉"
,"uzukinoko" : "うづきのこ"
,"utsusumi kio" : "空住キオ"
,"at uttakatta" : "@ウッタカッタ"
,"utsutsu minoru" : ["うつつ＊みのる", "うつつ・みのる"]
,"uttorikun" : "うっとりくん"
,"utsunomiya ukatsu" : "鬱ノ宮うかつ"
,"utsunomiya tsumire" : "宇都宮つみれ"
,"uhhii" : "うっひー"
,"utena emu" : "蒂絵夢"
,"uten ameka" : "雨天あめか"
,"u-tom" : "う～とむ"
,"r-one" : ["うな義", "ヌタウナギ"]
,"unagimaru" : "鰻丸"
,"unasaka" : ["海境", "海境涼"]
,"unasaka ryo" : "海境涼"
,"unadon" : "うな丼"
,"unamu hideo" : "宇奈無英雄"
,"uni" : "うに。"
,"uni8" : "うにあはと"
,"unikura" : "うに蔵"
,"unisuke" : "うにすけ"
,"uni toshiki" : "ウニトシキ"
,"unini seven" : "うにに☆せぶん"
,"unimaru" : "uni:maru"
,"unou" : "右脳"
,"uno katsumi" : "宇野かつみ"
,"unosero" : "うのせろ"
,"unobuchi kon" : "宇之渕崑"
,"uno ryoku" : "温野りょく"
,"upanishi." : ["うぱ西。", "うぱ西"]
,"uba yoshiyuki" : "宇場義行"
,"ube yoshiki" : "雨部ヨシキ"
,"umai" : "馬胃"
,"umakuchi syouyu" : "うまくち醤油"
,"umakuchi shouyu" : "うまくち醤油"
,"umashio" : "うましお"
,"umashika" : "うましか"
,"uma namihei" : "馬波平"
,"umayadono ohji" : "厩戸王子"
,"umiushi" : "うみうし"
,"umi suzume" : "雨美すずめ"
,"umida ei" : "海田泳"
,"umi tamako" : "うみたまこ"
,"umineko akira" : "海猫明"
,"umineko kamome" : "海猫かもめ"
,"umi no kyuuban" : "海の吸盤"
,"umino sachi" : "海野幸"
,"umino shibauchi" : "海野しばうち"
,"uminosyachi" : "海乃鯱"
,"umino dozaemon" : "海野土佐衛門"
,"umino haine" : "海野灰猫"
,"umino yayoi" : ["海野やよい", "海野弥生"]
,"umino ryo" : "海野りょう"
,"umino luka" : "海野留珈"
,"umihara minato" : "海原港"
,"umihal" : "umiHAL"
,"umibouzu" : "うみぼうず"
,"umihoshi minori" : "海星みのり"
,"umihotaru harumare" : "海蛍はるまれ"
,"umiyamasoze" : "海山そぜ"
,"umiyama misaki" : "宇美山ミサキ"
,"umu rahi" : "有無らひ"
,"umegaoka chizuko" : "梅丘CHIZUKO"
,"umekichi" : "ウメ吉"
,"umeko" : "うめ子"
,"umezawa takeki" : "梅沢たけき"
,"umetani kenji" : "梅谷ケンヂ"
,"umeda nautilus" : "梅田ノーチラス"
,"umedama nabu" : "梅玉奈部"
,"umetarou" : "梅太郎"
,"umecha" : "梅茶"
,"umetsu yasuomi" : "梅津泰臣"
,"umetsu yukinori" : "うめつゆきのり"
,"umenoki yuji" : "梅乃木裕二"
,"umehisa" : "梅久"
,"ume fumi" : "梅楓味"
,"umemachi syouji" : "梅町将二"
,"umematsu thomas" : "梅松トーマス"
,"umemaru" : "うめ丸"
,"umemiya kou" : "梅宮こう"
,"umemura yuzu" : "梅村ゆず"
,"umeyashiki mitsuyoshi" : ["梅屋敷三慶", "うめやしきみつよし"]
,"uyuu" : "烏有"
,"uyuu atsuno" : "烏有あつの"
,"uyuki" : "卯雪"
,"urai tami" : "浦井民"
,"ura kasumi" : ["うらかすみ", "茅薙隆裕"]
,"urakawa opera" : "浦河おぺら"
,"urakuso" : "うらくそ"
,"urashima yuuhi" : "浦島ゆうひ"
,"urashima reiji" : ["浦島礼仁", "浦島礼二", "浦嶋礼仁", "浦嶋嶺至"]
,"urajirou" : ["裏次郎", "杉浦次郎"]
,"urase shioji" : "浦瀬しおじ"
,"uranokyuu" : "ウラノキュウ"
,"urano mami" : "浦乃まみ"
,"urabi" : "うらび"
,"urabe katsuto" : "浦辺克斗"
,"uraho an" : "浦歩あん"
,"uramac" : ["うらまっく", "増田剛"]
,"urara hikaru" : "宇羅々ひかる"
,"uri" : "瓜"
,"urico take" : "瓜子たけ"
,"uruujima call" : "うるう島呼音"
,"urukaze" : "うる風"
,"urushihara satoshi" : "うるし原智志"
,"urutsu" : "ウルツ"
,"ultra siccative" : "ウルトラシッカチーフ"
,"uru miyu" : "ウル望由"
,"ulrich" : "うるりひ"
,"ureshino megumi" : "嬉野めぐみ"
,"uro" : "ウロ"
,"urokozuki" : "ウロコヅキ"
,"urotan" : "うろたん"
,"urotsuki" : "うろつき"
,"urozuki akira" : "宇路月あきら"
,"uwabaki hakutarou" : "上履伯太郎"
,"uwa bami" : "卯和馬実"
,"un equals shokutarou" : "うん＝食太郎"
,"untue" : "ウンツエ"
,"unno hotaru" : "海野螢"
,"eiichirou" : "瑛一朗"
,"a.s. hermes" : "A.S.ヘルメス"
,"aka kyounagon ayaya" : "A/K/A京納言あやや"
,"eikokukan momoha" : "英国館桃葉"
,"eizan" : "影斬"
,"eiji" : "Eiジ"
,"eisen" : "英戦"
,"eichi" : ["Eichi", "永地"]
,"h dash" : "エイチダッシュ"
,"a-10" : "A-10"
,"eightman" : "えいとまん"
,"eimu yuu" : ["影夢優", "もりのうさぎ", "森野うさぎ"]
,"eiri kiku" : "鋭利菊"
,"eo masaka" : "EOまさか"
,"a-satsuki" : ["A－さつき", "A・さつき", "A.さつき"]
,"esuke" : "えーすけ"
,"a-teru haito" : "A輝廃都"
,"a toshi" : "Aとし"
,"ekakibit" : "えかきびと"
,"egami" : "えがみ"
,"egawa hiromi" : "江川広実"
,"ekimae machinaka" : "駅前街中"
,"extreme" : ["EXTREME", "エロティカヘブン", "恋乃丞"]
,"exeter" : "エグゼター"
,"eguchi jaws" : "江口ジョーズ"
,"eguchi chibi" : ["江口ちび", "忍耐明"]
,"eguchi hiroshi" : ["江口尋", "F・S", "F.S"]
,"ego no mi" : "EGOの実"
,"eco filter" : "えこふぃるたぁ"
,"esuo" : "えすお"
,"ez6" : "えずろく"
,"sy 3-gou" : "えすわい3号"
,"eda" : "えだ"
,"edamame" : "恵田真芽"
,"edara" : "枝空"
,"echigawa ryuuka" : "越川リューカ"
,"echigoya takeru" : "越後屋タケル"
,"echipic" : "エチピク"
,"echihiro" : "えちひろ"
,"etuzan jakusui" : "越山弱衰"
,"edogawa kc" : "江戸川KC"
,"edogawa gabal" : "江戸川ガバル"
,"edogawa shundei" : "江戸川春泥"
,"edogawa pureko" : "江戸川プレコ"
,"edogawa roman" : "江戸川浪漫"
,"edo shigezu" : "江戸しげズ"
,"edoya inuhachi" : "江戸屋犬八"
,"edoya pochi" : "江戸屋ぽち"
,"etori yuuya" : "江鳥"
,"enikuma" : "えにくま"
,"enigma" : "えにぐま"
,"enishi" : "えにし"
,"enu" : "ゑぬ"
,"enu-yamayama" : "えぬーやまやま"
,"eno akira" : "えのあきら"
,"enoka" : "江ノカ"
,"enoki" : "えのき"
,"enokido" : "エノキドォ"
,"enoki tomoyuki" : "榎木知之"
,"eno yukimi" : "榎ゆきみ"
,"enoshima iki" : "江ノ島行き"
,"enoma shinji" : "江之間真次"
,"enomoto tsubaki" : ["えのもと椿", "堂本奈央"]
,"enomoto nao" : "榎本尚"
,"enomoto heights" : ["榎本ハイツ", "酉川宇宙"]
,"enomoto hidehira" : "榎本ひでひら"
,"eba" : "EBA"
,"eba uenihane" : "絵羽"
,"ebara shou" : "えばら翔"
,"api" : "えぴ"
,"ebi ebi" : "エビエビ"
,"eb110ss" : "EB110SS"
,"omitsu" : ["えびおみつ", "さとうみつ"]
,"ebisu" : "えびす"
,"ebisubashi seizou" : "戎橋政造"
,"ebisumaru" : "恵比寿丸"
,"abzome" : "エビゾメ"
,"ebina ebi" : "海老名えび"
,"ebifly" : "えびふらい"
,"abfurai" : "えびふらい"
,"ebi fry teishoku" : "エビフライ定食"
,"ebifurya" : "えびふりゃ"
,"ehime iyo" : ["愛媛伊代", "愛媛イヨ", "愛媛伊予"]
,"f mushoku" : "F無職"
,"ema" : "絵魔"
,"emina" : "えみーな"
,"emine kendama" : "遠峰犬玉"
,"emily" : "Emily"
,"emilio" : "えみりお"
,"emu" : "ゑむ"
,"emua" : "えむあ"
,"m and m" : "M＆M"
,"emuo" : "えむお"
,"emuten" : "えむテン"
,"emupii" : "えむぴい"
,"emumiya nyamu" : "えむみやにゃむ"
,"emoto akihiro" : "江本明宏"
,"emoto aria" : "絵本ありあ"
,"emori uki" : "江森うき"
,"emori misaki" : "江森美沙樹"
,"emon" : "衛門"
,"emons" : "えもんず"
,"eriko yuka" : "絵莉子有香"
,"eryu" : "えりゅ"
,"el" : "EL"
,"el bondage" : ["エル・ボンデージ", "エル・ボンテージ", "牧村みき"]
,"eruu" : "えるう"
,"erutasuku" : "えるたすく"
,"elf.k" : ["elf.k", "elf・K"]
,"eru labo" : "える☆らぼ"
,"ere 2 earo" : "えれ２エアロ"
,"erekuto" : "衛鈴紅人"
,"erect sawaru" : ["エレクトさわる", "諸星凱"]
,"eretto" : "えれっと"
,"eroi-roe" : "エロ井ロエ"
,"erocchi" : "エロッチ"
,"ero no teishokuya" : "エロの定食屋"
,"ero murasaki" : "エロムラサキ"
,"eroya chaos" : "絵ろ屋かおす"
,"engawa suguru" : "エンガワ卓"
,"enji" : "エンジ"
,"enzo enzou" : "エンゾ円蔵"
,"end" : "えんど"
,"endou" : "えんどう"
,"endo saya" : "円堂さや"
,"endou tatsumi" : "遠藤辰己"
,"endou hiroto" : "遠藤弘土"
,"endou maki" : "遠藤麻輝"
,"endou marin" : "遠藤真理ん"
,"endou risawo" : "遠藤りさを"
,"endori" : "えんどり"
,"endles" : "炎℃れす"
,"endou okito" : ["袁藤沖人", "おはぎさん"]
,"enpuro" : "えんぷろ"
,"enya maru" : "円谷まる"
,"oie kaeru" : ["御家かえる", "胃ノ中かわず"]
,"oisuke" : "おい助"
,"oyster" : "オイスター"
,"ou" : "おう"
,"ouka sushi" : "桜花すし"
,"ougi yuzuha" : "扇ゆずは"
,"ohsaka minami" : "逢坂ミナミ"
,"ousawa kanata" : "桜沢かなた"
,"oujano kaze" : "王者之風"
,"ouse aya" : "逢瀬絢"
,"ousono wataru" : "桜園わたる"
,"ouchi kaeru" : ["楝蛙", "御家かえる"]
,"sakurazuki masaru" : "桜月マサル"
,"outou chieri" : ["桜桃千絵里", "無洗米"]
,"ohtoku welles" : "大得ウェルズ"
,"outotsu den" : "凹凸でん"
,"ohma" : "逢魔"
,"ouma tokiichi" : "逢魔刻壱"
,"ouma bunshichirou" : "逢摩文七郎"
,"oekaki ojisan" : "お絵かきおじさん"
,"osterei" : "おー"
,"oaza koaza" : "大字小字"
,"ooasa shigeru" : "大麻シゲル"
,"ooi sakae" : "大井栄"
,"ooishi kou" : "大石コウ"
,"ooishi chuuni" : "大石中二"
,"ooishi hiroto" : "オオイシヒロト"
,"ohishi masaru" : ["大石まさる", "夢ノ二"]
,"ooizumi daisaku" : "大泉だいさく"
,"ooi hanimaru" : "大井はに丸"
,"oouso" : "大嘘"
,"oo umigarasu" : "オオウミガラス"
,"ooooalikui" : "おおおおありくい"
,"ookami uo" : "オオカミうお"
,"ohkami ryosuke" : "狼亮輔"
,"okiami" : "大木亜美"
,"ookido karo" : "大城戸カロ"
,"ookubo matagi" : "おおくぼマタギ"
,"ookuma nekosuke" : "大熊猫介"
,"ohkura kazuya" : "大蔵一也"
,"ohkura mao" : "大倉麻央"
,"oh great" : "大暮維人"
,"ohkoshi koutarou" : "大越孝太郎"
,"ookoshi hidetake" : "大越秀武"
,"oosaka pierou" : "大阪ぴえ郎"
,"oosaki" : "オオサキ"
,"oosawa" : "オオサワ"
,"kou1" : ["大沢ういち", "こう１"]
,"oosawa ofuda" : "大沢おふだ"
,"oosawara sadao" : "大童貞男"
,"o-ji" : "おーじ"
,"oshima aki" : "大島あき"
,"oshima kamome" : "大島かもめ"
,"ooshima takeshi" : "大島岳詩"
,"ooshima tomo" : "大島智"
,"ooshima towa" : "大島永遠"
,"oshima manabu" : "大嶋まなぶ"
,"ooshima yasuhiro" : "大島康弘"
,"ooshima ryou" : "大嶋亮"
,"ooji romu" : "大路ろむ"
,"ohsugi yukihiro" : "大杉 ゆきひろ"
,"ozora ituki" : "大空樹"
,"oozora wakaba" : "大空若葉"
,"ootaki kazufumi" : "大瀧一文"
,"ootake pashio" : "大竹パシ夫"
,"ootake hisakazu" : "大竹久和"
,"oota takeshi" : ["おおたたけし", "大田武志"]
,"oota takehiro" : "太田高弘"
,"oota toraichirou" : "太田虎一郎"
,"ootani ikumi" : "大谷育美"
,"ootani mikoto" : "大谷みこと"
,"oota minomushi" : "緒々田みの虫"
,"oota yuuichi" : "大田優一"
,"ohtsuka akira" : "大塚アキラ"
,"ootsuka kotora" : "大塚子虎"
,"ootsuka hiroki" : "大塚弘樹"
,"ootsuka potato" : "大塚ぽてと"
,"ootsuka poteto" : "大塚ぽてと"
,"ootsuka reika" : "大塚麗夏"
,"otsuki akari" : "大月あかり"
,"ootsuki sachi" : "大槻サチ"
,"ohtsuki suzuki" : "大槻涼樹"
,"ootsuki nekoji" : "大槻ネコヂ"
,"ootsuki hiroko" : "大槻弘子"
,"ootsuki miu" : "大槻ミゥ"
,"ootsuki michiro" : "大槻ミチロヲ"
,"ohtsuki yasuhiko" : "大槻保彦"
,"ootsuki wataru" : "大月渉"
,"ootomo megane" : "大朋めがね"
,"ootori ryuuji" : "おおとりりゅうじ"
,"ohnaka ito" : "大仲いと"
,"oona mitsutoshi" : "おおなみつとし"
,"oonami youko" : "大波耀子"
,"oonuki tetsurou" : "大貫鉄郎"
,"oonuki makuri" : "大貫まくり"
,"ohnuma hiroshi" : "おおぬまひろし"
,"oono" : "オオノ"
,"oono tetsuya" : "大野哲也"
,"oono yasuyuki" : "大野安之"
,"over line" : "オーバーライン"
,"ohba kagerou" : "大場陽炎"
,"oohashi kaoru" : "大橋薫"
,"oohashi takayuki" : "オオハシタカユキ"
,"ooba nii" : "大庭新"
,"oobayashi mori" : "大林森"
,"ohba yoshihiro" : "大場よしひろ"
,"oba yoshifumi" : "大庭佳文"
,"oohara kyutarou" : "大原久太郎"
,"oohara tsutsumi" : "大原つつみ"
,"oobari masami" : "大張正己"
,"oobanburumai" : "オオバンブルマイ"
,"oohira sunset" : "太平さんせっと"
,"oofuji reiichirou" : "大藤玲一郎"
,"auman zureedus" : "オーマンズリーダス"
,"oomi suzu" : "大箕すず"
,"ohmi takeshi" : "大見武士"
,"oomiya" : "おーみや"
,"oomori" : "大盛り"
,"oomori harusame" : "大守春雨"
,"ooyama" : "おーやま"
,"ooya mai" : ["おおや舞", "オーヤ舞", "オーヤ舞ン"]
,"oyama kina" : "大山樹奈"
,"ooya makoto" : "おおやまこと"
,"ooyamada mangetsu" : "大山田満月"
,"ooyama mimizu" : ["大山ミミず", "大山みみず"]
,"oyari ashito" : "大槍葦人"
,"ooyoko yamaame" : "大横山飴"
,"ohwata izumi" : "大渡イズミ"
,"oowada tomari" : ["大輪田泊", "秋月ひろずみ"]
,"oowada tomoki" : "大和田朋輝"
,"okagiri shou" : "岡霧硝"
,"oka kuzira" : "岡くじら"
,"oka kujiran" : "おかクジラん"
,"okazaki kirara" : "岡崎きらら"
,"okazaki takeshi" : "岡崎武士"
,"okazaki nao" : "岡崎那緒"
,"ogasawara uki" : "小笠原宇紀"
,"oka syohei" : "岡昌平"
,"okashira" : "おかしら"
,"oka sundome" : "岡すんどめ"
,"ogata" : "Ogata"
,"okada kazuto" : "岡田和人"
,"ogata gatarou" : ["オガタガタロー", "がたやん"]
,"okada kou" : "岡田コウ"
,"ogata kouji" : "緒方剛志"
,"ogata satomi" : "緒方賢美"
,"ogata zen" : "尾形全"
,"ogatatei" : "緒方亭"
,"okadate imari" : "岡舘いまり"
,"ogata hiro" : "御形紘"
,"okada mao" : "岡田まお"
,"okada masanao" : "岡田正尚"
,"okada matsuoka" : ["おかだまつおか", "岡田松岡"]
,"ogata mamimi" : "緒方マミ美"
,"ogataya haruka" : "御形屋はるか"
,"okada yukio" : "岡田ユキオ"
,"okachimachi tamachi" : "御徒町たまち"
,"ogadenmon" : "オガデンモン"
,"okano ahiru" : ["陸乃家鴨", "亜藤潤子", "厦門潤", "あもい潤"]
,"ogano momomo" : "小鹿野ももも"
,"okabayashi beru" : "岡林べる"
,"okahara meg." : "丘原めぐ"
,"ogami wolf" : "拝狼"
,"okamura bonsai" : "岡村凡斎"
,"okamura morimi" : "岡村杜巳"
,"okamoto daisuke" : ["岡本大助", "おかもと大輔"]
,"okamoto fujio" : ["岡本富士男", "おかもとふじお"]
,"okamoto lynn" : "岡本倫"
,"okayama yumiko" : "岡山弓子"
,"okayu" : "おかゆ"
,"okayusan" : "おかゆさん"
,"okara" : ["おかRA", "おから"]
,"ogawa eru" : "緒川える"
,"ogawa kanran" : ["おがわ甘藍", "小川甘藍", "小川幸辰"]
,"ogawa chitose" : "小河ちとせ"
,"ogawa hidari" : "小川ひだり"
,"ogawa masashi" : ["小川マサシ", "小川雅史"]
,"ogawa mashiro" : "オガワマシロ"
,"oki" : "沖"
,"ogishima chiaki" : "御祗島千明"
,"okinaga umanosuke" : "翁賀馬乃助"
,"ohayou-san" : ["翁さい", "おはよーさん"]
,"ogino satoshi" : "オギノサトシ"
,"ogino jun" : "荻野純"
,"okino matsushiro" : "沖の松城"
,"ogino mayumi" : "荻野眞弓"
,"okiha" : "沖葉"
,"okyuuri" : "おきゅうり"
,"oki yukao" : "沖由佳雄"
,"okiyumi kase" : "置弓枷"
,"okiyo" : "おきよ"
,"okyou" : "おきょう"
,"okiraku heidan" : "おきらく兵団"
,"ogin bara" : "オギン★バラ"
,"ogu" : "おぐ"
,"okuva" : "奥ヴぁ"
,"okusaka maeue" : "奥坂前上"
,"okusan" : "奥さん"
,"okuta kei" : "おくた慧"
,"okuda tamiko" : "おくだたみこ"
,"okudera chiaki" : "奥寺千秋"
,"okuni yoshinobu" : "小國由喜"
,"oguni yuki" : "小國由喜"
,"okuma masami" : "奥間まさみ"
,"okumoto yuuta" : "オクモト悠太"
,"okumori boy" : "奥森ボウイ"
,"okuya sei" : "奥矢星"
,"ogura shuuichi" : "小倉脩一"
,"oguramansai" : "小倉萬采"
,"ogura yuuna" : "小倉夕奈"
,"ogura yuna" : "小倉ゆな"
,"okuri banto" : "送り萬都"
,"okeido" : "おけいど"
,"omusubi korori" : "緒結ころり"
,"okosama lunch" : "おこさまランチ"
,"okonogi happa" : "小此木葉っぱ"
,"okome gang" : "おこめぎゃんぐ"
,"osakana arichi" : "御魚ありち"
,"osakana sankaku" : "御魚三角"
,"ozaki akira" : "尾崎晶"
,"ozaki miray" : "尾崎未来"
,"ozaken" : "オザケン"
,"osada kaname" : "長田要"
,"osato" : "おさとう"
,"osatou" : "おさとう"
,"osana sumika" : "幼菜すみか"
,"osano toshio" : "おさのとしを"
,"ozawa" : "小沢"
,"ozawa akifumi" : "織澤あきふみ"
,"ozawa hakase" : "オザワハカセ"
,"osawari-san" : "おさわり先生"
,"ozawa reido" : ["小沢零人", "小澤零人"]
,"osanpo suisou" : "おさんぽ水槽"
,"ozy" : "オジィ"
,"oshii rei" : "押井零"
,"oshiume nyora" : "押梅にょら"
,"oshikiri raiden" : "押切来電"
,"oshida j.o" : "押田J・O"
,"oshino" : "推乃"
,"oshino shinobu" : "忍野しのぶ"
,"oshare kyoushitsu." : ["おしゃれ教室。", "おしゃれ教室"]
,"ojo" : "おじょ"
,"ojou" : "オジョウ"
,"ojiro makoto" : "オジロマコト"
,"ozu satoru" : "を図さとる"
,"osuzu akiomi" : "尾鈴明臣"
,"ozuno mahou" : "緒図乃真朋"
,"osuwaani" : "オスワーニ"
,"osomatsu" : "おそまつ"
,"oda non" : "織田non"
,"oda akira" : "おだあきら"
,"otaki" : "おたき"
,"otakuda takumi" : "緒択田たくみ"
,"ootsuka mahiro" : ["大塚まひろ", "オタクビーム"]
,"oda kenichi" : "おだけんいち"
,"otabe sakura" : "おたべさくら"
,"odawara hakone" : "オダワラハコネ"
,"ochi gento" : "越智源斗"
,"ochita taiji" : "越智多たいじ"
,"ochanoko" : "お茶の子"
,"otyawan" : "おちゃわん"
,"ochi yoshihiko" : ["おちよしひこ", "越智善彦", "あじす・あべば"]
,"ochin-sama" : "おちんさま"
,"odd" : "Odd"
,"otsunosuke" : "乙の助"
,"otsumami" : "おつまみ"
,"otumaru" : "乙丸"
,"otsumu ga party" : "おつむがパーティ！"
,"oden70" : "おでん70"
,"otou." : "おとう。"
,"otoo" : "ぉとぉ"
,"suzunone kanata" : ["音々かなた", "鈴乃音彼方"]
,"otokam" : "オトカム"
,"otokawa kazuki" : "乙川カヅキ"
,"otogi" : "OTOGI"
,"otokita takao" : "おときたたかお"
,"otogiri fua" : "おとぎりふあ"
,"otokiri minamo" : "音霧みなも"
,"otokura ringo" : "乙倉りんご"
,"otochichi" : "おとちち"
,"otonashi kyousuke" : "音無響介"
,"otona no sexy ehon" : "大人のSEXY絵本"
,"otonari afuro" : "乙鳴アフロ"
,"otone" : "音音"
,"otono natsu" : "音乃夏"
,"otohiko" : "音彦"
,"otori deko" : "媒鳥デコ"
,"onaka" : "ONAKA"
,"onaka emi" : "小中えみ"
,"onapan" : "おなぱん"
,"onamaru" : "おなまる"
,"onion source" : "おにおんソース"
,"onigashima eryu" : ["鬼ヶ島えりゅ", "えりゅ"]
,"onigawara keruri" : "鬼瓦けるり"
,"onigirikun" : "おにぎりくん"
,"onigiri musubi" : "御握むすび"
,"onigiri unicorn" : "鬼斬ゆにこーん"
,"oniku" : "お肉"
,"oniku." : "お肉。"
,"onikubo hirohisa" : "鬼窪浩久"
,"onija tarou" : "鬼邪太郎"
,"hinata neru" : ["おにちくねる", "ひなたねる"]
,"onizuka takuto" : "鬼塚たくと"
,"onizuka naoshi" : "鬼束直"
,"oninarasu" : "鬼鳴らす"
,"oni-noboru" : "Oni-noboru"
,"onihime" : "鬼姫"
,"oniben katze" : ["鬼偏かっつぇ", "鬼遍かっつぇ"]
,"oniru" : "おにる"
,"onoitaru" : "小野いたる"
,"onokana" : "斧カナ"
,"ono kenuji" : "尾野けぬじ"
,"kei enji" : ["尾野けぬじ", "景えんじ"]
,"onoda barao" : "斧田ばら男"
,"ono tsubame" : "尾野燕"
,"onodera" : "おのでら"
,"onodera kouji" : "小野寺浩二"
,"ono misao" : "小野ミサオ"
,"onomesin" : ["オノメシン", "おのめしん"]
,"ohaguro dobu" : "御歯黒溝"
,"obata hiroyuki" : "小幡寛之"
,"obata yayoi" : "おば田やよい"
,"ohara makoto" : "おはら誠"
,"opanchu" : "おぱんちゅ"
,"ohiensis" : "オヒエンシス"
,"ohigetan" : "尾髭丹"
,"ohisashiburi" : "お久しぶり"
,"obyaa" : "おびゃー"
,"opyon" : "おぴょん"
,"obui" : "おぶい"
,"o.p com" : "おぽこむ"
,"opossa" : "オポッサ"
,"oboro-tofu" : "おぼろどうふ"
,"omizu chihiro" : "オミズチヒロ"
,"omita" : "おみた☆"
,"omecho" : "おめちょ"
,"omochi" : "おもち"
,"omochi nabe" : "おもちなべ"
,"ojanu" : "おやぬ"
,"oyabe ryo" : "小矢部亮"
,"oyamada rabuko" : "小山田ラブ子"
,"oyama yasunaga" : "尾山泰永"
,"oyu no kaori" : "お湯の香り"
,"orii hiroshi" : "折井ひろし"
,"orion" : "織音"
,"orikawa" : "折川"
,"orikuchi hirata" : ["折口ヒラタ", "折口"]
,"orikura makoto" : "織倉まこと"
,"orico" : "Orico"
,"oritsuki fumio" : "折月フミオ"
,"orizumeda nyoizou" : "折詰田如意三"
,"orihata" : "オリハタ"
,"orihika" : "おりひか"
,"orihi chihiro" : "織日ちひろ"
,"orihime" : "ORIHIME"
,"orimoto mimana" : "おりもとみまな"
,"oryou" : "おりょう"
,"orinze" : "おりんぜ"
,"oltlo" : "おるとろ"
,"orutoro" : "おるとろ"
,"ore p 1-gou" : "俺P1号"
,"oreiro" : "オレイロ"
,"abi kamesennin" : ["俺正讀", "阿鼻龜仙人"]
,"oreteki juuhachikin" : "俺的十八禁"
,"ore ebis" : "オレンヂエビス"
,"orokega" : "おろけが"
,"oroneko" : "おろねこ"
,"owari umeshige" : "尾張ウメシゲ"
,"owari ningen" : "おわりにんげん"
,"onsen nakaya" : "おんせんなかや"
,"onsen mikan" : "温泉みかん"
,"onda takeshi" : "恩田武史"
,"onda chiro" : "恩田チロ"
,"onda fuoku" : ["恩田斑奥", "奥田斑奥"]
,"he" : "賀"
,"gar" : "ガー"
,"carnelian" : "CARNELIAN"
,"carmilla" : "かーみら"
,"garland" : "があらんど"
,"karl" : "Karl"
,"carn" : "夏庵"
,"gai" : "GUY"
,"kai makoto" : "カイ・マコト"
,"kaishaku" : "介錯"
,"kaishinshi" : "カイシンシ"
,"kaisen chuui" : "開栓注意"
,"kaisenbatake no yuu" : "海鮮畑の遊"
,"kaida bora" : "廻田ぼら"
,"kaiduka" : "かいづか"
,"kaitenfude" : "回転筆"
,"kaidou j1" : "蚕堂j1"
,"kaidou kazuki" : "海道濶毅"
,"kaitou pink" : "かいとうぴんく"
,"kaitou yuuhi" : "快刀ゆーひ"
,"kaiba shun" : "飼葉駿"
,"kaibara keiya" : "海原圭哉"
,"kaibara shijimi" : "貝原しじみ"
,"kaibara you" : "海原由布"
,"kai hiroyuki" : ["甲斐ヒロユキ", "甲斐ひろゆき", "柊流架"]
,"kai masamura" : "甲斐正村"
,"kai maruko" : "甲斐まるこ"
,"kaimeiji yuu" : "海明寺裕"
,"kairi" : "魁李"
,"kairin kichiku" : "回輪鬼畜"
,"caw equals zoo" : "CAW＝ZOO"
,"kauti" : "かーうち"
,"kaede" : "楓"
,"kaede minoru" : "カエデミノル"
,"kaenuco" : "かえぬこ"
,"kaeru jiro" : "かえる次郎"
,"kaen miso" : "火炎味噌"
,"gaou" : "GAOU"
,"kanon" : ["加音", "歌音", "奏音"]
,"kaoru" : "かおる"
,"kaga akuru" : "加賀あくる"
,"gagarin kichi" : "ガガーリン吉"
,"gaga osamu" : "峨々おさむ"
,"gagaga" : "ががが"
,"kakakaka" : "かカカカ"
,"kakashi asahiro" : "かかし朝浩"
,"kagato" : "加画都"
,"kagano shouta" : "加賀野翔太"
,"kagami" : ["鏡", "カガミ"]
,"kagami fumio" : ["かがみふみを", "加賀美ふみお"]
,"kagamimochi mikan" : "鏡餅みかん"
,"kagawa aino" : "賀川あいの"
,"kagawa tomonobu" : "香川友信"
,"kagawa tomohana" : "香川智華"
,"kakiemon" : "カキえもん"
,"kakiko" : "カキコ"
,"kakizaki kousei" : "垣崎コウセイ"
,"kakisawa yuuri" : "柿沢雄里"
,"kakitsubata kanae" : "杜若かなえ"
,"kakitsubata tsukune" : "杜若つくね"
,"kakino nashiko" : "柿野なしこ"
,"kakinomoto utamaro" : "柿ノ本歌麿"
,"kakimoto kenjirou" : "柿本ケンジロウ"
,"kakyouin chiroru" : "華京院ちろる"
,"kakugari kyoudai" : "カクガリ兄弟"
,"kakuzatou" : "核座頭"
,"kakushina nozomi" : "かくしなのぞみ"
,"kakuchou no okina" : "拡張の翁"
,"kakutou oukoku" : "格闘王国"
,"kakunaru ueda" : "かくなる上田"
,"kakuninii" : "角煮煮"
,"kaguyuzu" : "カグユヅ"
,"kagura kurumi" : "神楽くるみ"
,"kagurazaka saki" : "神楽坂沙希"
,"kagura takeshi" : "神楽武志"
,"kagura tsuna" : "神楽つな"
,"kagura nanaki" : "神楽七姫"
,"kagura hiromi" : "神楽広海"
,"kagura momiji" : "神楽紅葉"
,"kagura moromi" : "神楽もろみ"
,"kagura yuuichi" : "神楽ゆういち"
,"kagura yuuki" : "かぐらゆうき"
,"kagura yutakamaru" : "神楽雄隆丸"
,"kakei" : "筧"
,"kakei asato" : "筧あさと"
,"kakei kei" : "花兄けい"
,"kakei hidetaka" : "筧秀隆"
,"kage oi" : "影追い"
,"kagesaki yuna" : ["影崎夕那", "影崎由那", "影山由多"]
,"kageshio" : "カゲシオ"
,"kagechousukashi" : "影蝶透"
,"kagechin" : "かげちん"
,"kagetora" : "影虎"
,"kakenashi" : "かけなし"
,"kageno illyss" : "影乃いりす"
,"kagehara hanzou" : "影原半蔵"
,"kagemusya" : "KAGEMUSYA"
,"kageyama kuroto" : ["景山玄都", "影山玄都"]
,"kageyama rou" : "景山ロウ"
,"kagerou" : "影狼"
,"kagerou1991" : "陽炎1991"
,"kakogawa tarou" : "加古川太郎"
,"kago shintarou" : "駕籠真太郎"
,"kagono tori" : "かごのとり"
,"kagome" : "籠目"
,"kagome beta" : "籠目-β"
,"kasa" : "傘"
,"kasai ichiro" : "加斎一郎"
,"kasai ema" : ["葛西えま", "稲村衣麻"]
,"kasai yukiha" : "霞彩ゆきは"
,"kasaki" : ["華咲", "華咲'03", "華咲'04", "華咲'06"]
,"kasaki99" : "華咲'99"
,"kasaki takao" : "夏咲たかお"
,"kasaki yoshihiko" : ["加崎善彦", "加崎嘉彦"]
,"kazakura" : "夏桜"
,"kazasuzu" : "風鈴"
,"kazahana chiruwo" : "風華チルヲ"
,"kasama shirou" : "笠間しろう"
,"kazama miyuki" : "風間美由紀"
,"kaza midori" : "可座ミドリ"
,"kazami haruki" : "風見春樹"
,"kazami rei" : "KAZAMI零"
,"kasaya mogeru" : "笠屋もげる"
,"gaasan" : "がぁさん"
,"kashii yutaka" : "香椎ゆたか"
,"kajiki tetsu" : "カジキ鉄"
,"kashikoru" : "かしこる"
,"kajishima masaki" : "梶島正樹"
,"kaji-chan" : "かじちゃん"
,"kaji naoki" : "梶なおき"
,"kashiba toshizou" : "樫葉歳三"
,"kaji makoto" : "カジマコト"
,"kashimada shiki" : "鹿島田しき"
,"kashi michinoku" : "KASHIみちのく"
,"kajimura kajima" : "咲村kajima"
,"kajimoto shian" : "梶本シアン"
,"kajimoto jun" : "梶本潤"
,"kajiyama hiroshi" : "梶山浩"
,"cashue" : "香愁"
,"kashuu masami" : "果愁麻沙美"
,"kasyo" : "鹿緒"
,"kashiwagi ame" : "柏木アメ"
,"kashiwagi zombie" : "柏木存美"
,"kashiwagi tatsuya" : "かしわぎ達也"
,"kashiwagi rei" : "柏樹玲"
,"kashiwabara sakae" : "柏原栄"
,"kashiwori" : "かしをり"
,"kasuga" : "カスガ"
,"kasuga syouji" : "春日ショヲジ"
,"kasuga sunao" : "春日沙生"
,"kasuga souichi" : "カスガソウイチ"
,"kasugano tobari" : "春日野トバリ"
,"kasukabe akira" : "カスカベアキラ"
,"kasukabe taro" : "春日部太郎"
,"kasuga mayu" : "春日まゆ"
,"kasuga yukihito" : "春日雪人"
,"kazuki hiyori" : "かずきひより"
,"kazuki misaki" : ["数木美咲", "みにおん"]
,"kazusa shima" : "上総志摩"
,"kazushiki midori" : "一色緑"
,"kazutaro" : "かずたろ"
,"kazuto" : "和斗"
,"gust-san" : "ガストさん"
,"kazunari" : "カズナリ"
,"kazuneko" : "和猫"
,"kazuhiro" : "一弘"
,"kazuma g-version" : "カズマ・G-version"
,"kazuma kowo" : "かずまこを"
,"kazuma muramasa" : ["和馬村政", "和馬村正"]
,"casumi" : ["Casumi", "かすみ亜里沙"]
,"kasumi arisa" : ["かすみ亜里沙", "霞亜里沙", "CASUMI"]
,"kasumiga urara" : "霞香うらら"
,"kazumine taiji" : "和峰太持"
,"kazumine chinatsu" : "一峰千夏"
,"kazumiya akira" : "カズミヤアキラ"
,"kasetsu makoto" : "霞雪誠"
,"kasumi ryo" : "かすみりょう"
,"kazumu" : "一夢"
,"kasuya hideo" : "粕谷秀夫"
,"kazurasui" : "かずらすい"
,"kazuwo daisuke" : "カズヲダイスケ"
,"kasei" : "かせい"
,"huei nazuki" : "風瑛なづき"
,"kase daiki" : "加瀬大輝"
,"gazetta masuda" : "ガゼッタ増田"
,"kazabuki poni" : ["風のごとく！", "風吹ぽに"]
,"kazepana" : "かぜぱな"
,"kaze yanagi" : "風やなぎ"
,"katagiri kaneharu" : "片桐兼春"
,"katagiri hinata" : "片桐雛太"
,"katagiri hinoka" : "片桐火華"
,"katakura ako" : "片倉アコ"
,"katakura mikki" : "片倉みっき"
,"katakuri-ko" : ["片栗子", "若田草平"]
,"katase aoko" : "片瀬蒼子"
,"katase shou" : ["かたせ湘", "片瀬湘"]
,"katase nano" : "かたせなの"
,"katase minami" : "カタセミナミ"
,"katase yuu" : "片瀬ゆう"
,"katatuka kouji" : "片塚工司"
,"katatsuki kei" : "片槻けい"
,"katana kaji" : "刀鍛冶"
,"katano chika" : "片野ちか"
,"catapult" : "かたぱると"
,"katamatsu tenrai" : "片松天籟"
,"katamiki u-toy" : "片幹U-TOY"
,"katamikoi mizue" : "かたみこいみずえ"
,"katayama makoto" : ["片山誠", "かたやままこと"]
,"kachoufuugetsu" : ["花鳥風月", "くろやまてら"]
,"gachonjirou" : "がちょん次郎"
,"gachirin" : "がちりん"
,"katsu aki" : "克・亜樹"
,"kakka hideto" : "活火秀人"
,"katsuki" : "香月"
,"kaduki" : "かづき"
,"kazuki" : "架月"
,"kazuki kaho" : "香月かほ"
,"toda kaduki" : "香月とだ衛門"
,"katsuki manami" : "勝生真菜美"
,"kazuki yuu" : "霞月由羽"
,"kakkuu" : "滑空"
,"guts ishibashi" : "ガッツ石橋"
,"guts shihan" : "ガッツ師範"
,"gattsun" : "ガッツン"
,"kappa" : "かっぱ"
,"kappa yoshimi" : "かっぱよしみ"
,"kappipe" : "かっぴぺ"
,"takaman" : "ガッフェ高饅"
,"katsumata kazuki" : "かつまたかずき"
,"katsuma rei" : "かつまれい"
,"katsumi kouichi" : "かつみこういち"
,"katsura 24 gou" : "桂24號"
,"katsura airi" : "桂あいり"
,"katsura itsuki" : "桂樹"
,"katsurai yoshiaki" : "桂井よしあき"
,"katsura edage" : "桂枝毛"
,"katsuragi takashi" : "桂木高志"
,"katsuragi takumi" : "桂木たくみ"
,"katsuragi maya" : "桂騎魔夜"
,"katsuragi you" : "葛城ゆう"
,"katsura masakazu" : "桂正和"
,"katsura yoshihiro" : "桂よしひろ"
,"gaden" : "GADEN"
,"kadoi aya" : "門井亜矢"
,"kadoi fumio" : "門井文雄"
,"kadou" : "カドウ"
,"katou an" : ["加糖あん", "和泉はち"]
,"katou koban" : "加藤小判"
,"katou jun" : "加藤じゅん"
,"katou setsuko" : "加東セツコ"
,"katou chakichi" : "加藤茶吉"
,"katou tetsuya" : "加糖哲哉"
,"katou fuguo" : "加藤フグオ"
,"katou reijirou" : "加藤礼次朗"
,"katou rennyuu" : "樺糖練乳"
,"katori shinbu" : "香取しんぶ"
,"gudl" : "Gudl"
,"quatraise" : "カトレーゼ"
,"kana" : ["華名+1", "カナ"]
,"kana c" : "かなＣ"
,"kanaisei jitenshasougyou" : "家内制自転車操業。"
,"kanakura waka" : "七々倉和香"
,"kanaguri" : "かなぐり"
,"kanazawa katsuma" : "金澤勝眞"
,"kanata" : "カナタ"
,"kanaduki" : "カナヅキ"
,"kanatomi mikiru" : "かなとみミキル"
,"kanabou tekateka" : "金棒てかてか"
,"kanami" : "かなミ"
,"kaname aomame" : "要青豆"
,"kaname nagi" : "かなめ薙"
,"kanamori yunene" : "かなもりゆねね"
,"kanari tokusaku" : "鹿成トクサク"
,"ganari ryu" : "がなり龍"
,"kani" : "かに〔甲殻類〕"
,"kani itoh" : "可児いとう"
,"kani kani" : "かにかに"
,"kanikuu kaita" : "蟹空解太"
,"kanisuki" : "かにすき"
,"kanitama" : "かにたま"
,"kanichiri" : "かにちり"
,"kanibasami" : "かにばさみ"
,"kanimaru" : "かにまる"
,"kanimura ebio" : "かに村えびお"
,"kanimori guri" : "蟹森ぐり"
,"kaniya shiku" : "蟹屋しく"
,"kanyapyi" : "かにゃぴぃ"
,"kaniyama yusuke" : "蟹山ゆうすけ"
,"kanekiyo miwa" : "兼清みわ"
,"kaneko toshiaki" : "かねことしあき"
,"kaneko naoya" : "カネコナオヤ"
,"kaneko hiraku" : "金子ひらく"
,"kanesada keishi" : "兼処敬士"
,"kaneta" : "かねた"
,"kaneda asao" : "金田麻生"
,"kanetaka souichi" : "兼高双一"
,"kaneda haruko" : "カネダハルコ"
,"kaneyama shin" : "カネヤマシン"
,"kano" : "榎乃"
,"kanou aira" : "嘉納あいら"
,"kanou soukyuu" : "狩野蒼穹"
,"kanoh hollow" : "叶穂郎"
,"kanou miki" : "加納みき"
,"kanou ryuuji" : "叶竜児"
,"kanoe" : "庚"
,"kanola u" : "カノラユ"
,"kapa" : "かぱ"
,"gabyonuno" : "ガビョ布"
,"kafu" : "カフ"
,"kabuki shigeyuki" : "香吹茂之"
,"kabu teriko" : "かぶてりこ"
,"kaburana" : "かぶらな"
,"gabri-l" : "雅舞罹-L"
,"kaho" : "香穂"
,"kapo" : "カポ"
,"kabocha" : "南瓜"
,"kaponco taroh" : ["かぽんこたろう", "佐々木あかね"]
,"kamakiri" : ["カマキリ", "赤木遼一"]
,"gamaguchi poyopi" : "ガマグチポヨピ"
,"kamata" : "かまた"
,"kamaboko" : "釜ボコ"
,"kamaboko red" : "かまぼこRED"
,"kamayan" : ["カマヤン", "鎌やん"]
,"kamiishi sono" : "神石その"
,"kamiishi nyny" : "上石ニーニー"
,"kamio 96" : "神尾96"
,"kamikaze makoto" : "神風誠"
,"gamigami" : "ガミガミ"
,"kamikoppu" : "紙コップ"
,"kamicup yagi" : "カミコップ八木"
,"kamisato takeharu" : "上里竹春"
,"kamishima tatsuya" : "神嶋竜矢"
,"kamisyakujii yubeshi" : "紙石神井ゆべし"
,"kamishiro" : ["神代つかっぱ", "カミシロ"]
,"kamisiro ryu" : "神代竜"
,"kamita" : "かみ田"
,"kamitaki misa" : "神瀧望早"
,"kamitani" : "カミタニ"
,"kamizuki shiki" : "守月史貴"
,"kamitsuki manmaru" : "上月まんまる"
,"kamitsurugi ouka" : "神剣桜花"
,"kamidera chizu" : "神寺千寿"
,"kamitou masaki" : "上藤政樹"
,"kaminaru fuyu" : "神鳴る冬"
,"kamino ryu-ya" : "上乃龍也"
,"kotaru" : "紙場こたる"
,"kamifuji mikeko" : "神藤みけこ"
,"kamimiya kozue" : "神宮梢"
,"kamimura sumiko" : "上村純子"
,"kamiya ogawa" : "神宮小川"
,"kamiya zuzu" : "神谷ズズ"
,"kamiya tomoe" : "神谷ともえ"
,"kamiya naoya" : "神谷尚哉"
,"kamiya maneki" : "かみやまねき"
,"kamiyoshi" : "神吉"
,"kamirenjaku sanpei" : ["上連雀三平", "小野敏洋"]
,"gamu" : "我無"
,"kamushi" : "かむC"
,"gamute nyako" : "gamuteにゃ子"
,"kame" : ["KAME", "祭神子", "まつりみこ"]
,"kamei" : "亀井"
,"camekame" : "かめかめ"
,"kameyama shiruko" : "亀山しるこ"
,"kame burning" : "亀ランッパ火"
,"kamen no hito" : "仮面之人"
,"kamo" : "加茂"
,"gamogamo" : "がもがも"
,"kamogawa tanuki" : "鴨川たぬき"
,"kamotama" : "かもたま"
,"kamoto negi" : "嘉下葱"
,"camonome" : "かものめ"
,"kamon saeko" : "佳門サエコ"
,"comeon showme" : "花門初海"
,"kayanagi takahiro" : ["茅薙隆裕", "うらかすみ"]
,"kayanoi ino" : "茅乃井いの"
,"kayahara yuu" : "萱原ゆう"
,"kayama kazuma" : "かやまかずま"
,"kayama kifumi" : "加山紀章"
,"kayama miku" : "かやまみく"
,"kayama yuichiro" : "鹿山裕一郎"
,"kayama rim" : "香山リム"
,"gayarou" : "☆画野朗"
,"kayumidome" : "かゆみ止め"
,"kayou" : "火曜"
,"color" : "COLOR"
,"karaage" : "からあげ"
,"karaage-chan" : "からあげチャン"
,"garagara tarou" : "ガラガラ太郎"
,"garakuta" : "ガラクタ"
,"karakuchi choucream" : ["櫻井マキ", "辛口しゅーくりーむ"]
,"karakuribee" : "カラくりべえ"
,"karakuri musha" : "からくり武者"
,"karasawa ryo" : "唐沢涼"
,"karasu" : "空巣"
,"karasu chan" : "カラスちゃん"
,"karasuma amiru" : "烏丸あみる"
,"karasuma kanatsu" : "烏丸かなつ"
,"karasuma nishiki" : "からすま弐式"
,"karasuma yayoi" : ["烏丸やよい", "コノシロしんこ"]
,"karateka value" : ["カラテカ・バリュー", "カラテカバリュー", "からてか罵詈"]
,"garana" : "ガラナ"
,"karione" : "かりおね"
,"agumen" : ["仮野テル", "アグ麺"]
,"karino hasumi" : "狩野ハスミ"
,"garyou" : "臥竜"
,"karin akira" : "花琳晶"
,"karukanko" : "カルカン子"
,"karukiya" : "かるきや"
,"karutamo" : "かるたも"
,"karuto" : "かると"
,"karuha" : "かるは"
,"calpish" : "かるぴ"
,"karube guri" : "軽部ぐり"
,"calvetxxx" : "calvet"
,"karma tatsurou" : "かるま龍狼"
,"karura jun" : "迦楼羅淳"
,"karura syou" : "華瑠羅翔"
,"kareki futoshi" : "枯木太"
,"karen kyuu" : "華蓮きゅう"
,"garoudo" : "ガロウド"
,"karou hajime" : "鹿狼一"
,"karoti" : "かろちー"
,"karochii" : "かろちー"
,"kawai shun" : "カワイシュン"
,"kawaisaw" : "可哀想"
,"kawaisounako" : "かわいそうな子"
,"kawai futaba" : "河合二葉"
,"kawai masaki" : "川合正起"
,"kawa kazuo" : "かわかずお"
,"kawakami kou" : "河上康"
,"kawakami takashi" : "川上聖"
,"kawakami natsuki" : "川上夏希"
,"kawakami rokkaku" : "川上六角"
,"kawasaki kentarou" : "川崎犬太朗"
,"kawasaki tadataka" : "川崎直孝"
,"kawashima mitsuha" : "川嶋みつは"
,"kawashima yoshio" : "川島よしお"
,"kawajiri yoshihiro" : "川尻よしひろ"
,"kawazuko chouji" : ["蛙子丁字", "春菊天うどん"]
,"kawase seiki" : "カワセセイキ"
,"kawasemi makiko" : "かわせみまきこ"
,"kawada kan" : "かわだ寛"
,"kawada shougo" : "かわだ章吾"
,"kawata hisashi" : "カワタヒサシ"
,"kawata hiyori" : "河田ひより"
,"kawachi izumi" : "河内和泉"
,"kawady max" : "カワディMAX"
,"kawana" : "かわな"
,"kawana mario" : "河奈マリオ"
,"kawanuma uotsuri" : "川沼魚釣"
,"kawano tanishi" : "川野タニシ"
,"kawano masatoshi" : "川乃雅慧"
,"kawahagi sakana" : "かわはぎさかな"
,"kawahagitei" : "かわはぎ亭"
,"kawahara shin" : "かわはらしん"
,"kawahara mintsu" : "川原みんつ"
,"kawahara ryuuji" : "川原流寺"
,"kawamura tsukasa" : "川邑司"
,"kawamura hirotaka" : "川村ひろたか"
,"kawamura yasuhito" : "かわむらやすひと"
,"kawamoto takahiro" : "川本貴裕"
,"kawamoto hiroshi" : ["かわもとひろし", "河本ひろし"]
,"kawamoto yoshiki" : "川本良樹"
,"kawamori misaki" : "かわもりみさき"
,"kawara keisuke" : ["瓦敬助", "三部敬", "三部けい"]
,"kawarazaki harurou" : ["河原崎晴郎", "河原崎はるろー"]
,"kawarajima koh" : ["かわらじま晃", "かわらじまコウ"]
,"kawarano apara" : "河原野アパラ"
,"kawaraya" : "瓦爺"
,"kawaraya a-ta" : "瓦屋A太"
,"kawaridane akito" : "かわりだね秋都"
,"kawaruhi" : "カワルヒ"
,"kankiten" : ["歓喜天", "杉村麦太", "石野鐘音"]
,"kangoku meika" : "監獄銘菓"
,"kanzaki shirou" : "神崎四郎"
,"kanzaki haruko" : "神崎春子"
,"kanzaki yuzu" : "神崎柚"
,"kanjyu kaoru" : "神寿薫"
,"quanxing" : "光星"
,"kanzume" : "KANZUME"
,"kanta." : "かんた。"
,"gantai penguin" : "眼帯ペンギン"
,"kantamaki yui" : "環々唯"
,"kanda matsu" : "神田まつ"
,"kantarou" : "貫太郎"
,"kandanchi" : ["かんだんち", "漢弾地"]
,"kanchi" : "かんち"
,"kandume" : "かんづめ"
,"kanten" : "寒天"
,"kant" : "カント"
,"kantoku" : "カントク"
,"kantori" : "かんとり"
,"kanto riro" : "かんと里路"
,"kanna" : "かん奈"
,"kannagi kyouichi" : "巫杏壱"
,"kannagi rei" : "かんなぎれい"
,"kanna satsuki" : "神無さつき"
,"kannaduki kanna" : "神無月かんな"
,"kannazuki nem" : "神無月ねむ"
,"kannazuki motofumi" : "神無月元史"
,"kanna tetsuboku" : "かんな鉄木"
,"kanno izuka" : "かんのいづか"
,"kannoura yuzu" : "甲浦ゆず"
,"kannori" : "乾海苔"
,"kannon ouji" : "観音王子"
,"kan-non ritsu" : "観音リツ"
,"ganba matsumoto" : "ガンバ松本"
,"camphara tree" : "かんぱらつりぃ"
,"kanbaru riki" : "敢春力"
,"campyo master" : "かんぴょうマスター"
,"gunblaster itou" : "ガンブラスター伊東"
,"ganmarei" : "眼魔礼"
,"kanmuri" : "かんむり"
,"kanmu ryou" : "柑武遼"
,"kanyan" : "かんやん"
,"kanroame" : "甘露アメ"
,"kiai neko" : ["きあい猫", "樺島あきら"]
,"key" : "きい"
,"kiliu" : "きぃう"
,"kii takashi" : ["キイタカシ", "記伊孝"]
,"kiichi" : "きいち"
,"kiitigo no yoshitatu" : "木苺の吉辰"
,"ki-ma" : "KI-MA"
,"kiiroi tamago" : "きいろいたまご"
,"kiu" : "希憂"
,"giuniu" : "ぎうにう"
,"kio seiji" : "きお誠児"
,"kioseiji r" : "きお誠児R"
,"giga" : "ギガ"
,"kika" : ["きか", "きこ", "peko"]
,"koumei kikaku" : "亀鶴孔明"
,"kika equals zaru" : "kika=ざる"
,"kiki" : "KIKI"
,"gigi met" : "GIGIメット"
,"kiki ryu" : "貴騎琉"
,"kikuazami kaoru" : "菊薊薫"
,"kikuichi monji" : "菊一もんじ"
,"kikusui" : "菊水"
,"kikuta kouji" : "菊田高次"
,"kikuchi" : "キクチ"
,"kikuchi seiji" : "菊池政治"
,"kikuduki taro" : "菊月太朗"
,"kikunyi" : "菊にぃ"
,"kikuno" : "きくの"
,"kikunosukemaru" : "菊のすけまる"
,"kikurage" : "きくらげ"
,"kigetu miya" : "キゲツミヤ"
,"kiken shisou" : "危険思想"
,"peko" : ["peko", "きか", "きこ"]
,"kisa kazuyuki" : "吉舎和幸"
,"kisaki saki" : ["きさきさき", "キサキサキ"]
,"kisaki sora" : "木咲空"
,"kisaki noah" : "希咲のあ"
,"kizakuradou donkichi" : "黄櫻堂ドン吉"
,"kisara ai" : "きさら藍"
,"kisaragi otu" : "如月02"
,"kisaragi gunma" : "如月群真"
,"jirou kisaragi" : "如月次郎"
,"kisaragi natsumi" : "如月夏水"
,"kisaragi nana" : "如月なな"
,"kisaragi mizu" : "如月瑞"
,"kisaragi mitsuo" : "きさらぎ蜜お"
,"kisaragi myau" : "きさらぎみゃう"
,"kisaragi miyu" : "如月みゆ"
,"kisaragi megu" : "木更木めぐ"
,"kisaragi moyu" : "如月モユ"
,"kisaragi yuu" : "如月邑"
,"kizaru" : "黄猿"
,"kishi kaisei" : ["起死快晴", "旗幟灰星", "周防正信"]
,"kishizuka kenji" : "木静謙二"
,"kishida keiichi" : "岸田圭市"
,"kishida mel" : "岸田メル"
,"kishi torajirou" : "岸虎次郎"
,"kijitora nukodi" : "きじとらぬこぢ"
,"kijinaka mahiro" : "雉中まひろ"
,"kishi nisen" : "騎士二千"
,"kishinosato satoshi" : "岸里さとし"
,"kishibe" : "岸辺"
,"kijima daisyarin" : "鬼島大車輪"
,"kishiri toworu" : ["キシリトヲル", "ヲルト"]
,"kisin juki" : "姫心重機"
,"kizuki rei" : "傷希レイ"
,"kiss koori" : "キス氷"
,"kise itsuki" : "木瀬樹"
,"kisen" : "奇仙"
,"kitaura" : "キタウラ"
,"kitakata kuniaki" : "北方国明"
,"kita kaduki" : "北かづき"
,"kita kazuki" : "北かづき"
,"kitakami ren" : "北上れん"
,"kitagawa zayaku" : "北川ざやく"
,"kitagawa mizuki" : "北河瑞樹"
,"kitaku" : ["キタク", "仲町まち"]
,"kitazaki taku" : "北崎拓"
,"kitazato nawoki" : "北里ナヲキ"
,"kitasato makoto" : "北里マコト"
,"kidataro" : "きだた郎"
,"kitani sai" : "木谷さい"
,"kitano urara" : "北野うらら"
,"kitano kenichi" : "北野健一"
,"kitahara aki" : "北原亜希"
,"kitahara eiji" : "北原エイジ"
,"kitahara takeshi" : "北原武志"
,"kitamimaki kei" : "北御牧慶"
,"kitamiya genbu" : "北宮弦武"
,"kitamoto kounosu" : "北本鴻巣"
,"kita yumika" : "北弓佳"
,"gita ren" : "ギタ☆レン"
,"kichiku hiroshi" : "鬼畜広子"
,"kichijouji kitashirou" : "吉祥寺北四郎"
,"kichijouji monaka" : ["吉祥寺もなか", "風鈴"]
,"kichihachi" : "きちはち"
,"gibuchoko" : "ぎヴちょこ"
,"kichirock" : "キチロク"
,"kizuka eiji" : "木塚詠路"
,"kizuka kazuki" : "きづかかずき"
,"kikkawa kabao" : "吉川かば夫"
,"kikkawa kikku" : "きっかわきっく"
,"kikkawa ryounei" : "季川良寧"
,"kizuki akizuki" : "きづきあきづき"
,"kiduki akira" : "きづきあきら"
,"kizuki aruchu" : "鬼月あるちゅ"
,"kiduki erika" : "季月えりか"
,"kiduki sai" : "綺月さい"
,"kidzuki reon" : "桐月れおん"
,"kittsu" : "キッツ"
,"kitty" : ["キチ●イ帝王", "キ帝ィ"]
,"kitto shibaru" : "吉都しばる"
,"kitsune" : "きつね(仮)"
,"kitsuneko anko" : "狐古あんこ"
,"kitsunekov" : "キツネコフ"
,"kitsune choukan" : "きつね長官"
,"kitoen" : "鬼頭えん"
,"kito sakeru" : "鬼頭サケル"
,"kidouchi kon" : "木戸内紺"
,"kidou muichi" : "綺堂無一"
,"kidoban" : "木戸番"
,"kitora" : "キトラ"
,"kido ryousuke" : "きどりょうすけ"
,"kinagi rea" : "きなぎれあ"
,"kinuta nana" : "砧菜々"
,"kinema tenka" : ["杵馬天戈", "きねま天戈"]
,"kinoko" : "きのこ"
,"kinokoningen" : "キノコにんげん"
,"kinokonokko" : "きのこのっこ"
,"kinokomushi" : "きのこむし"
,"kinokoyun" : "木の子ゆん"
,"kinosaki yuki" : "木ノ碕由貴"
,"kinosaki reisui" : "城崎冷水"
,"kinoshita eesuke" : "木下エースケ"
,"kinoshita junichi" : "きのした順市"
,"kinoshita rei" : "きのした黎"
,"kinohara hikaru" : "きのはらひかる"
,"kino hitoshi" : "鬼ノ仁"
,"kinomiki" : "きのみき"
,"kinomoto anzu" : "きのもと杏"
,"kiba satoshi" : "木場智士"
,"kibayashi hiyo" : "木林日ヨ"
,"kibi anmitsu" : "吉備あんみつ"
,"kihiru" : "きひる"
,"kima azusa" : "鬼魔あづさ"
,"kima-gray" : ["Kima^gray", "Kima-gray"]
,"kimio tamako" : "きみおたまこ"
,"kimigawa rui" : "姫美川涙"
,"kimisaki bunka" : "君崎文化"
,"kimishima ao" : "きみしま青"
,"kimizuka aoi" : "きみづか葵"
,"kimineko" : "君ねこ"
,"kimino tomonari" : "君野朋成"
,"kimimaru" : ["きみまる", "えんとっくん"]
,"kimyou chourui" : "奇妙鳥類"
,"kim chii" : "KIMちー"
,"kimura kyuugetsu" : "鬼村九月"
,"kimura koara" : "樹村こあら"
,"kimura takahiro" : "木村貴宏"
,"kimura naoki" : "木村ナオキ"
,"kimura neito" : ["木村寧都", "木村寧人"]
,"kimuraya izumi" : "木村屋いづみ"
,"kimura yoshihiro" : "木村義浩"
,"kimura reiko" : "きむられいこ"
,"kimuru" : "きむる"
,"gyakushuu takeshi" : "逆襲武士"
,"niliu chahui" : "逆流茶会"
,"kiya shii" : "木谷椎"
,"cat protein" : "キャットプロテイン"
,"kyana" : "キャナ"
,"caviar" : "キャビア"
,"captain scarlet" : ["Captain Scarlet", "キャプテン・スカーレット"]
,"kyaradain" : "きゃらだいん"
,"caramel dow" : "きゃらめる堂"
,"kyarine" : "きゃりね"
,"caroline yohko" : ["きゃろらいんようこ", "きゃろらいん妖狐"]
,"campbell gichou" : "キャンベル議長"
,"ki-you" : ["貴勇", "コヤマ貴弘"]
,"giyugun" : "戯遊群"
,"gyuutan" : "牛タン"
,"chomoran" : "牛タン"
,"gyu donko" : "牛☆丼子"
,"omaru gyuunyuu" : "牛乳うまお"
,"gyuunyuu sensha" : "牛乳戦車"
,"gyuunyuu rinda" : "牛乳リンダ"
,"kyuunosuke" : "きゅうのすけ"
,"kyuubi108" : "九尾(108)"
,"cuvie" : "Cuvie"
,"muku" : ["ぎゅうひもち", "むく", "muku"]
,"qmaoh" : "球魔王"
,"kyuuri" : "きゅうり"
,"kyuuryuujousai" : "九龍城砦"
,"curie" : ["キュリー", "久理"]
,"kyou" : "キョウ"
,"kyouan" : "狭暗"
,"kyouichirou" : "狂一郎"
,"kyougoku shin" : "京極しん"
,"kyougoku touya" : "京極燈弥"
,"gyouza teishoku" : "ギョウザテイショク"
,"kyousuke" : "京介"
,"gyouninzaka mawaru" : "行人坂廻"
,"kyouno aki" : "京野秋"
,"kyou no gohan" : "京のごはん"
,"kyoumoto takayuki" : "京本貴之"
,"kyouya ayumi" : "恭屋鮎美"
,"kyouryuu bouya" : "恐竜坊や"
,"kiyoka" : "陽香"
,"kyockcho" : "きょくちょ"
,"kiyose kaoru" : "キヨセ薫"
,"kiyotaro" : "きよたろ"
,"gyonikun" : "魚肉ん"
,"gyofu noriaki" : "漁夫のりあき"
,"kiyomiya ryo" : "清宮涼"
,"kiyomiya ryou" : "清宮涼"
,"gyoran.com" : "魚卵.com"
,"kyolnov" : "キョルノフ"
,"kyon" : "きょん"
,"kira" : ["綺羅", "騎羅", "きら", "KIRA"]
,"kirato ruka" : "キラト瑠香"
,"kira hiroyoshi" : "吉良広義"
,"kira boshi" : "綺羅星"
,"kirara moe" : "きらら萌"
,"kirieppa" : "キリエっぱ"
,"kirie masanobu" : "霧恵マサノブ"
,"kirigakure takaya" : "きりがくれたかや"
,"kirikaze" : "霧風"
,"kiriki setsuna" : "桐木せつな"
,"kiri-kiri mai" : "ギリギリ舞"
,"kirikokan" : "霧湖かん"
,"kirisaki byakko" : "霧咲白狐"
,"kirisaki minchi" : "切裂ミンチ"
,"kirisaki mocori" : "切裂モコリ"
,"kirisawa shinji" : "桐沢しんじ"
,"kirisawa tokito" : "きりさわときと"
,"kirisawa mint" : "桐沢みんと"
,"kirishima ayu" : "霧島鮎"
,"kirishima kanae" : "霧島かなえ"
,"kirishima satoshi" : "桐島サトシ"
,"kirishima shizuku" : "霧島雫"
,"kirishima shiroo" : ["霧島シロー", "きりしましろー"]
,"kirishima tamaki" : "霧嶋珠生"
,"kirishima pine" : "霧島パイン"
,"kirishima hinata" : "霧嶋ひなた"
,"kirise mitsuru" : "霧瀬ミツル"
,"kiritachi noboru" : "桐立のぼる"
,"kirinama" : "きりなま"
,"kirino bonjin" : "桐乃梵人"
,"kirino mokutan" : "きりの木炭"
,"kirihara kotori" : "桐原小鳥"
,"kirihara futaha" : "桐原ふたは"
,"kirihara you" : "桐原湧"
,"kirimitsu" : "桐光"
,"kirimoto yuuji" : "桐下悠司"
,"kiriyama" : "桐山"
,"kiriyama shingo" : "きりやましんご"
,"kiriyama jinto" : "桐山人外"
,"kiriyama taichi" : "キリヤマ太一"
,"kyrie ayame" : "キリュあやめ"
,"kiryuuin hanako" : "鬼龍院花子"
,"kiryh tamami" : "きりゅうたまみ"
,"kiryu chikako" : "桐生ちかこ"
,"kiryuu chihaya" : "桐生ちはや"
,"kiryuu tomohiko" : "桐生知彦"
,"kiryu masumi" : "桐生真澄"
,"kiryuu mina" : "霧生実奈"
,"kiryuu reia" : "桐生レイア"
,"kiryu reihou" : "桐生玲峰"
,"kiriri takanori" : "霧李孝徳"
,"kir-rin" : "きりりん"
,"kirin" : "希麟"
,"kirin kakeru" : "木鈴カケル"
,"kirekawa" : "きれかわ"
,"kirome" : "きろめ"
,"gin" : "ぎん"
,"ginichi" : "銀一"
,"gingami" : ["銀河味めてお", "銀河味"]
,"ginkamen" : "銀仮面"
,"kingyo" : "金魚"
,"kink" : "きんく"
,"gin kemeko" : "銀けめこ"
,"ginzake" : "ギンザケ"
,"kinsan" : "KINSAN"
,"kinjou kazuma" : "金城一馬"
,"kinjou satsuki" : "金城皐月"
,"ginseiou" : "銀星王"
,"kinta" : "キンタ"
,"ginta" : "ぎん太"
,"kinta mawaru" : "きんたまわる"
,"kintarou" : "金たロウ"
,"gintarou" : "ぎん太郎"
,"gincha" : "銀茶"
,"kintoki" : "金時"
,"kinniku munage" : "筋肉胸毛"
,"kinnotama" : ["きんのたま▼", "またのんき▼"]
,"ginhaha" : "ぎんハハ"
,"kinmedai pink" : "金目鯛ぴんく"
,"ginyou haru" : "銀曜ハル"
,"ginyoku screw" : "銀欲スクリュー"
,"kinriki mantou" : "きんりきまんとう"
,"kua tero" : "くあTERO"
,"kuin kyouan" : "くいんきょうあん"
,"guusuka" : "ぐうすか"
,"kuusou" : "空想"
,"kuuchuu yousai" : "空中幼彩"
,"kuune rin" : "くうねりん"
,"cooper" : "くぅぱぁ"
,"kuuya" : "空鵺"
,"cool kyou shinja" : "クール教信者"
,"gwegwe" : ["gweda", "gwegwe"]
,"kuon" : "久遠"
,"kuon itsuki" : "久遠樹"
,"kuonji hodaka" : ["久遠寺火鷹", "久遠路火鷹"]
,"kuon marino" : "くおん摩緒"
,"kuon michiyoshi" : "久遠ミチヨシ"
,"kukado rio" : "九門りお"
,"kuga mayuri" : "久我繭莉"
,"kugami angning" : "九神杏仁"
,"kugami annin" : "九神杏仁"
,"kugayama mio" : "久雅山美桜"
,"kugayama rikako" : "久我山リカコ"
,"kugara" : "くがら"
,"kuki hiruko" : "九鬼ひるこ"
,"kukui can" : "くく維きゃん"
,"kuguri oimo" : "九栗おいも"
,"kusaka souji" : "久坂宗次"
,"kusakabe rei" : "草壁レイ"
,"kusakami akira" : "草上明"
,"kusatsu terunyo" : "草津てるにょ"
,"kurikura kuro" : "久里鞍くろ"
,"kusanagi tonbo" : ["草凪蜻蛉", "草凪とんぼ"]
,"kusano kouichi" : ["草野紅壱", "草薙紅"]
,"kusano takayuki" : "草野たかゆき"
,"kusano yuu" : ["草野ゆぅ", "草野ゆう"]
,"810eru" : "草葉える"
,"kusahara kuuki" : "草原空貴"
,"kusama sakae" : "草間さかえ"
,"kusayarou" : "草野郎"
,"kushikatsu koumei" : "串カツ孔明"
,"kushida ashura" : "くしだあしゅら"
,"kujo shima" : "九條しま"
,"kujou shirei" : "九条志玲"
,"kujou danbo" : "九条だんぼ"
,"kujira" : ["くじら", "KUJIRA"]
,"gujira" : "ぐじら"
,"quzilax" : "クジラックス"
,"kujyou rion" : "久城りおん"
,"kusui aruta" : "久水あるた"
,"xi daisei" : "クスィー大誠"
,"cuzukago" : "葛籠くずかご"
,"kusugawa naruo" : "久寿川なるお"
,"kuzukirimoti" : "屑霧餅"
,"kuzushiro" : "くずしろ"
,"gustav" : "ぐすたふ"
,"tai0201" : "楠木帯"
,"kusunoki hyougo" : ["楠ノ木兵庫", "くすのき兵庫"]
,"kusunoki rin" : "楠木りん"
,"kusunomi kazuma" : "楠見かずま"
,"kusumi ranma" : "楠見らんま"
,"kusumoto toka" : "楠元とうか"
,"kuzuya" : "くずや"
,"kuzuyu" : "葛湯"
,"kutani" : "九手児"
,"kutabi" : "くたび"
,"kudaraji hatsuka" : "百済児廿日"
,"kuchibiru chadzuke" : "くちびる茶漬"
,"kutibue" : ["くちぶえ", "Be-ve"]
,"kujiran" : "くぢらん"
,"cucchiore" : "くっきおーれ"
,"gussan" : "ぐっさん"
,"gucchy gucho" : "グッチーぐちょお"
,"kudo ayumu" : "久遠アユム"
,"kudou kiyoki" : "久遠清雅"
,"qdou kei" : "Q堂恵"
,"kudou shino" : "工藤詩乃"
,"kudou taizou" : "工藤大蔵"
,"kudou hisashi" : ["くどうひさし", "大道いむた"]
,"kudou hiroshi" : "工藤洋"
,"kunaboto" : "クナボト"
,"qunami himehiko" : "九波ヒメヒコ"
,"kunieda saika" : "国枝彩香"
,"kunisaki kei" : "国崎蛍"
,"kunifuto" : "くにふと"
,"kunugi uzura" : "椚うずら"
,"kunugi shunichi" : "くぬぎ俊一"
,"kunel" : "く～ねる"
,"kuno touya" : "九野十弥"
,"kuba yodomu" : "紅端よどむ"
,"nikurotsuchi hoshi" : "くびなが"
,"kubukurin" : "九部玖凛"
,"kubo shiyun" : "久保しゆん"
,"kubota chihiro" : "久保田チヒロ"
,"kuma" : "KUMA"
,"kuma564" : "くま564"
,"kuma ashi s" : "熊足S"
,"hanao." : "熊尾もふもふ"
,"kumakiti" : "隈吉"
,"kumaki toshikazu" : "熊木十志和"
,"kumakito shikazu" : "熊木十志和"
,"kumakou" : "くまこう"
,"kumasaka ramao" : "くま坂らま男"
,"kumasaku tamizou" : "クマ作民三"
,"kuma-san" : "くまさん"
,"kumajiro" : "くまじろ"
,"kumashiro" : ["くましろ", "たかしたたかし"]
,"kumataro" : "隈太郎"
,"kumacchi" : "くまっち"
,"kumatora tatsumi" : "熊虎たつみ"
,"kumaneko rokoko" : "熊猫ろここ"
,"kumano kotaro" : "くまのこたろ"
,"kumada" : "くまのとおる"
,"kumanomi" : "くまの実"
,"kuma pantsu" : "くまパンツ"
,"kumisan" : "くみさん"
,"kumicho" : "くみちょー"
,"gumimi" : "ぐみみ"
,"gumin zaburou" : "グミンザブロウ"
,"kumoi takashi" : ["くもいたかし", "菅野タカシ"]
,"kumoemon" : "くもえもん"
,"kumo suzume" : "くもすずめ"
,"kumon ryuu" : "九紋竜"
,"klaus neu" : "くらうすのい"
,"kurauda shouta" : "クラウド翔太"
,"kura oh" : "蔵王"
,"kuragami atsushi" : "倉上淳士"
,"kuraki hiro" : ["椋木尋", "椋木ヒロ"]
,"kurage aruto" : "海月あると"
,"kurasawa makoto" : "倉澤まこと"
,"kurasawa moko" : "倉澤もこ"
,"kurashina ryou" : "倉科遼"
,"kurata ichiro" : "倉田いち朗"
,"kurata muto" : "倉田むと"
,"gura nyuutou" : "ぐら乳頭"
,"kurano" : "蔵乃"
,"kurami" : "蔵見"
,"kuramubon" : "くらむぼん"
,"kuramoto zen" : "倉本膳"
,"gran" : "GRAN"
,"grand" : "グラン・D"
,"kuriame kururu" : "栗飴くるる"
,"cream" : "CREAM"
,"guglielmo" : "ぐりえるも"
,"kurikata juan" : "刳形寿庵"
,"kurikara" : ["くりから", "倶梨伽羅"]
,"glycogen" : "グリコーゲン"
,"kurisaki king" : "栗崎きんぐ"
,"kurisu yu-ri" : "栗栖ゆーり"
,"gurida soumu" : "ぐりだそうむ"
,"kurita nao" : "栗田奈緒"
,"kurita yuugo" : "栗田勇午"
,"kuritsu yoshihiro" : ["くりつよしひろ", "紺屋たかし"]
,"kuribayashi chris" : "栗林クリス"
,"kurihara kaede" : "くりはら楓"
,"kurihara kenshirou" : "栗原ケンシロウ"
,"grifon" : ["GRIFON", "三木大路", "三顕人"]
,"kurimu ami" : "久里夢亜美"
,"crimson" : "クリムゾン"
,"kurimoti tiduru" : "栗餅ちづる"
,"kurimoto kazumi" : "栗本かずみ"
,"kurimoto shigeharu" : "栗本重治"
,"kuriyama natsuki" : "栗山なつき"
,"kuryuu tsukasa" : "栗生司"
,"kuriyuzu kuryuu" : "栗柚クリュー"
,"crew" : "クルー"
,"glue gun" : ["グルー・ガン", "木工用ボンド"]
,"kurusumin" : "来須眠"
,"kurumiko" : "胡桃子"
,"kurumi moka" : "胡桃もか"
,"kurumiya mashimin" : ["胡桃屋ましみん", "ましみゆき", "みしまゆき"]
,"kururu kariru" : "くるるかりる"
,"kururukariru" : "くるるかりる"
,"kuruwa aki" : "くるわ亜希"
,"grey fisher" : "グレイ・フィッシャー"
,"grace ishikawa" : ["グレイス石川", "ぐれいす"]
,"kure ichirou" : "くれいちろう"
,"kureura keita" : "暮浦鶏太"
,"great mosu" : "ぐれーともす"
,"greco roman" : "暮古浪漫"
,"kurenai yuuki" : "紅悠樹"
,"kurenai yuuji" : "紅ゆーじ"
,"kurebayashi asami" : "暮林あさ美"
,"cle masahiro" : "呉マサヒロ"
,"guremasu" : "ぐれます"
,"cremutsu cule" : "くれむつきゅーる"
,"clearite" : "くれりて"
,"guren naomi" : "紅蓮ナオミ"
,"kuro" : ["くろ", "KURO"]
,"kuro fn" : "クロFn"
,"kuroarama soukai" : "黒荒馬双海"
,"kuroi kingyo" : "黒井きんぎょ"
,"kuroishi ringo" : "黒石りんご"
,"kuroinu" : "クロイヌ"
,"kuroinu juu" : ["黒犬", "黒犬獣"]
,"kuroiwa shinji" : "くろいわしんじ"
,"kuroiwa madoka" : "黒磐まどか"
,"kuroiwa menou" : "黒岩瑪瑙"
,"kuroiwa yoshihiro" : "黒岩よしひろ"
,"kurou" : "九郎"
,"kuroha reiji" : ["九郎", "あきと。"]
,"kurot" : "黒兎"
,"kurou toramaru" : "玄虎丸"
,"crowly" : "くろうり"
,"chloe" : "Chloe"
,"crowe" : "クロエ"
,"keiji-kurobi" : "黒帯形而"
,"clone ningen" : "Clone人間"
,"kurokado mushijirou" : "黒門虫治郎"
,"kurogane" : "くろがね"
,"teppo" : "鉄歩"
,"kurogane kenn" : "玄鉄絢"
,"kurogane satsuki" : "黒金さつき"
,"kurogane tsukasa" : "くろがね司"
,"kurokami" : "黒加味"
,"kurokawa izumi" : ["黒川IZUMI", "黒川いづみ"]
,"kurokawa otogi" : "黒川おとぎ"
,"kurokawa mio" : ["黒河澪", "黒河みお"]
,"kurogishi kazeoki" : "黒岸風興"
,"kuroki hidehiko" : "黒木秀彦"
,"kurokura eri" : "黒倉エリ"
,"kurokoshi you" : "黒越陽"
,"kurosaki kotora" : "黒崎仔虎"
,"kurosaki shun" : "黒咲俊"
,"kurosaki haiji" : "黒崎灰二"
,"kurosaki mairi" : "黒崎まいり"
,"kurosaki rendou" : "黒咲練導"
,"kurosawa" : "クロサワ"
,"kurosawa r" : "黒澤R"
,"kurosawa kiyotaka" : "黒澤清崇"
,"kurosawa shouichi" : "黒沢翔一"
,"kuroshiki" : "玄式"
,"kuro shiti" : "黒シチ"
,"kuroshiro neko" : "黒白音子"
,"cross" : "CROSS"
,"kurosu" : "黒須"
,"kurozu" : "くろず"
,"kurosu gatari" : "黒巣ガタリ"
,"kurosugi shinsaku" : "黒杉晋作"
,"kuroseimu" : "クロセイム"
,"kuroda akimi" : "黒田晶見"
,"kuroda ariake" : "黒田有明"
,"kurotama" : "くろたま"
,"kuroto" : "黒斗"
,"kurona" : "くろな"
,"kuronyan" : "くろニャン"
,"kurono" : "くろの"
,"kronosaurs" : "くろのさうるす"
,"kurono masakado" : "黒乃マサカド"
,"kuronomiki" : "黒ノ樹"
,"kuro no miki" : "黒ノ樹"
,"kuroha" : "くろは"
,"kurohagane" : "クロハガネ"
,"kuroadam" : "黒葉だむ"
,"cloba.u" : "くろば・U"
,"kuroharuto" : "くろはると"
,"kurohitsuji" : "クロヒツジ"
,"kurofood" : "くろふーど"
,"kurobuchi kashiko" : "黒渕かしこ"
,"krohudeanna" : "黒筆ANnA"
,"kurohekiten" : "黒碧天"
,"kurobe tomo" : "黒部知"
,"kuroboshi kouhaku" : "黒星紅白"
,"kuromaimai" : "黒舞々"
,"kuromame" : "クロマメ"
,"kuromotokun" : "黒本君"
,"kuroyui" : "黒結"
,"croriin" : "Croriin"
,"kurowa" : "黒輪"
,"kuwagata ko" : "くわがた子"
,"kuwahara taiki" : "くわはらたいき"
,"kuwabara yuko" : "桑原祐子"
,"gunnjou yosio" : "群青よしお"
,"gunnousa" : "ぐんのうさ"
,"gun ryuusei" : "群りゅうせい"
,"kei" : "KEI"
,"k.tsutomu" : "K・津斗夢"
,"keiki" : "けーき"
,"kei cube" : "ケイキューブ"
,"kei kei" : "啓々"
,"kei jiei" : ["けいじえい", "KEIJIEI"]
,"keijima yuu" : "圭島ゆう"
,"keishouryaku" : "敬称略"
,"keitarou" : "ケイタロウ"
,"keito" : "慶人"
,"k no ji" : "Kの字"
,"k-you" : "K-you"
,"keukegen" : "毛羽毛現"
,"keuma" : ["希有馬", "井上純一", "井上純弌"]
,"ke-ko" : "ケーコ"
,"ksyum" : "けーしむ"
,"keoya" : "ケオヤ"
,"keke" : "ケケ"
,"kekemotsu" : "けけもつ"
,"gegera toshikazu" : "げげら俊和"
,"geko" : "GEKO"
,"kekocha" : "けこちゃ"
,"geshop" : "げしょぷ"
,"kesubi" : "けすび"
,"gesundheit" : "ゲスンタイト"
,"geso smith" : "ゲソスミス"
,"kedama-kun" : "けだまくん"
,"kedama keito" : "毛玉ケヰト"
,"ketarou" : "毛太郎"
,"kecha" : "けちゃ"
,"gekka f-to" : "月下F兎"
,"gekka kaguya" : "月下カグヤ"
,"gekkaku" : "月角"
,"gekkou" : "月光"
,"kesshousui" : "結晶水"
,"getto manten" : "月都満天"
,"keppi" : "KEPPI"
,"getsumen chakuriku" : "月面着陸"
,"gedoushu" : "ゲドウシュウ"
,"keno yantarou" : ["毛野楊太郎", "矢野健太郎"]
,"geboku kazuaki" : "げぼくカズアキ"
,"kemigawa mondo" : ["ケミガワ", "けみがわ", "検見川もんど"]
,"kemuri haku" : "煙ハク"
,"kemosuke" : "けもすけ"
,"kemonono" : "けものの★"
,"keraton" : "ケラトン"
,"gero" : "げろ"
,"gerotan" : "げろたん"
,"keroyon" : "けろよん"
,"kerorin" : "けろりん"
,"ken" : ["KEN", "KEN(INSERT)"]
,"gen" : ["GEN", "源"]
,"ken-1" : "Ken-1"
,"genka ichien" : "原価壱円"
,"ken kawasaki" : "KEN川崎"
,"kenkou cross" : "健康クロス"
,"gengorou" : "源五郎"
,"kenzaki mikuri" : "犬崎みくり"
,"ken-g" : "KEN-G"
,"kenji" : "けんじ"
,"gennsui" : "元帥"
,"ken sogen" : "研そうげん"
,"kentarou" : "けんたろう"
,"gentsuki" : "ゲンツキ"
,"ken tsukikage" : ["ケン月影", "ケン・月影"]
,"gentei kaijo" : "限定解除"
,"gento" : "源斗"
,"kento okayama" : "KENTO OKAYAMA"
,"gennari" : "ゲンナリ"
,"kenpi" : "けんぴ"
,"mizuguchi takashi" : "水口鷹志"
,"core-suke" : "コア助"
,"koayako" : "コアヤアコ"
,"koari" : "小蟻"
,"sugou hiroyuki" : ["鯉王", "菅生博倖"]
,"koio minato" : ["恋緒みなと", "こいおみなと"]
,"koikawa minoru" : "恋河ミノル"
,"koike kazuo" : "小池一夫"
,"koike marumi" : "小池マルミ"
,"koishikawa kei" : ["小石川圭", "小石川系"]
,"koishikawa funi" : "小石川ふに"
,"koishikawa renzu" : "小石川れんず"
,"koishi chikasa" : ["小石ちかさ", "磊磊ちかさ"]
,"koizumi" : "KOIZUMI"
,"koizumi amane" : "恋泉天音"
,"koizumi hitsuji" : "小泉ひつじ"
,"koino jou" : ["恋乃丞", "エロティカヘブン", "EXTREME"]
,"koiwai tiki" : "小岩井てぃき"
,"koiwa eta" : "小岩エータ"
,"coin rand" : "コインRAND"
,"kou" : ["kou", "KOU"]
,"kouichi" : ["甲壱", "こう１"]
,"kouin n" : "工員N"
,"kouenji marimo" : "高円寺まりも"
,"kouenji rei" : "紅園寺麗"
,"kouga saburou" : "甲賀三郎"
,"kougami eri" : "黄上恵理"
,"kouki kuu" : "こうきくう"
,"koguchi" : "こうぐち"
,"kouzaka kouhei" : "神坂公平"
,"kousaka jun" : "香坂純"
,"kousaka tsutomu" : "香坂ツトム"
,"kousaka donten" : "高坂曇天"
,"kousaka haruka" : "高坂遥"
,"kouji" : "孝至"
,"koujin kishi" : "光刃騎士"
,"kousuke" : "交介"
,"kouzenji kei" : "光善寺恵"
,"kousoku" : "光燭"
,"kouda tomohiro" : "幸田朋弘"
,"gouda nagi" : "剛田ナギ"
,"koutaro" : "こうたろ"
,"koutarou" : "こうたろう"
,"koutarosu" : "コウタロス"
,"kouzuki hajime" : "香月☆一"
,"kouzuki mayuki" : ["鴻月まゆき", "鴻月真雪"]
,"kouzuki rio" : "香月りお"
,"kouzu sousuke" : "興津惣介"
,"koudou" : "黄道"
,"kouno aya" : "煌乃あや"
,"kouno kei" : "光野けい"
,"kouno shintarou" : ["河野慎太郎", "河野慎太朗"]
,"kouno mai" : "香野舞"
,"kouno mizuho" : "紅野瑞穂"
,"kouno yukiyo" : "こうのゆきよ"
,"kouheki" : "紅碧"
,"koumashiro" : "こうましろ"
,"koumi takao" : "小海隆夫"
,"koume keito" : "小梅けいと"
,"koume satsuki" : "小梅さつき"
,"kouri" : "コウリ"
,"kourui" : "紅涙"
,"koeda mameko" : "小枝まめ子"
,"gorgeous takarada" : ["ゴージャス宝田", "巨砲キャノン"]
,"kosuke" : "KOSUKE"
,"kota" : "こーた。"
,"kota maru" : "こーた。"
,"ko-cha" : "こ～ちゃ"
,"coffee-kizoku" : "珈琲貴族"
,"kouhi niku" : "コーヒー肉"
,"coffee neko" : "珈琲猫"
,"koori" : "粉織"
,"kohri" : "こーり"
,"koorizu" : "コオリズ"
,"golden" : "ゴールデン"
,"kogaino" : ["こがいの", "フトコロガタナ"]
,"kogaku kazuya" : "虎顎かずや"
,"koga chiharu" : "古蛾千春"
,"koga tsubame" : "古賀燕"
,"koganei musashi" : "小金井武蔵"
,"koga ryouichi" : "古賀亮一"
,"kogawa masayoshi" : "こがわまさよし"
,"ogawa renji" : ["小河レンジ", "小河恋時"]
,"koki" : "こき"
,"kokima dai" : "こきま大"
,"gokugetsu momo" : "ごくげつ桃"
,"heiqing langjun" : "黒青郎君"
,"kokudakaya" : "こくだかや"
,"kunitsu takeshi" : ["國津武士", "追矢斧晃"]
,"gokutsu takeshi" : "極津武士"
,"kokuden kadotake" : "刻田門丈"
,"kokutou nikke" : "黒糖ニッケ"
,"kageusu gokuto" : "ごくとくん"
,"gokubuto mayuge" : "極太眉毛"
,"kokuryuugan" : "黒龍眼"
,"kokekokko coma" : "こけこっこ☆こま"
,"kokeshi men" : "こけし☆メン"
,"kokemomo" : "こけもも"
,"koken" : "こけん"
,"cocoa" : "ここあ"
,"koko ankou" : "ここあんこう"
,"kokonoe chika" : "九重千花"
,"kokonoe yomogi" : "ここのえ蓬"
,"coconoe ricoco" : "九重リココ"
,"kokonoka" : "ここのか"
,"kokonoki nao" : "ここのき奈緒"
,"kokomahi" : "ここまひ"
,"kogorou" : "こごろー"
,"cocolog" : "ココローグ"
,"shin-yu" : "心友"
,"koza" : "コザ"
,"gosaiji" : "ごさいじ"
,"cosine" : "COSiNE"
,"kosaka onemu" : "小坂おねむ"
,"kozakura kumaneko" : "小桜クマネコ"
,"kozakura nanane" : "小桜菜々音"
,"koji pom" : "コジpom"
,"kojiki ohji" : "古事記王子"
,"koshino" : "こしの"
,"koshiba tetsuya" : "こしばてつや"
,"kojima aya" : "こじまあや"
,"kojima goseki" : "小島剛夕"
,"kojima saya" : ["小島紗", "小島さや"]
,"kojima video" : "孤島ビデオ"
,"kojima miu" : "児島未生"
,"kosyo" : "コショウ"
,"gojou kurota" : "五條くろた"
,"koshow showshow" : "故障少将"
,"kojirou" : "KOJIROU!"
,"kojiro kyousuke" : "小白京介"
,"kozue akari" : "こずえあかり"
,"kozue saho" : "梢沙帆"
,"kosugi aya" : ["こすぎあや", "小杉あや"]
,"kosuke haruhito" : "虎助遥人"
,"kosuge yuutarou" : "小菅勇太郎"
,"cosmashiva" : "こすましば"
,"gozenchu" : "娯禅宙"
,"gozen reiji" : "御前零士"
,"kodai heiki" : ["古代兵器", "こだいへいき"]
,"kodaira hiroshi" : "小平ひろし"
,"kotakemaru" : "小竹丸"
,"kotatsu" : "こたつ。"
,"kotatsu tomodachi" : "コタツトモダチ"
,"kodama naoko" : "コダマナオコ"
,"kodama ryou" : "こだま亮"
,"gotarou" : "ゴ太郎"
,"akatsuki kochi" : ["こち", "暁月こち", "暁紅智"]
,"gochishiko" : "ごちシコ"
,"gochou" : "伍長"
,"kochinko" : "故珍子"
,"cotton" : "コットン"
,"koppamu" : "こっぱむ"
,"coupe" : "こっぺ"
,"koppe" : "こっぺ"
,"koppori nama beer" : "こっぽり生ビール"
,"kodeida" : "こでぃだ"
,"goten" : "ごてん"
,"kotengu" : "コテング"
,"goto-p" : "ごとP"
,"gotoh akira" : "後藤晶"
,"goto kasumi" : "五藤加純"
,"godou kotarou" : "悟道琥太郎"
,"gotoh juan" : "後藤寿庵"
,"gotou junji" : ["ごとうじゅんじ", "潤之介"]
,"gotou suzuna" : "後藤スズナ"
,"goto hayako" : "後藤羽矢子"
,"jashin bakunyuu swordsman" : "邪神・爆乳ソードマン"
,"masaki" : ["後藤マサキの野望", "マサキの野望", "MASAKI"]
,"kotokawa suzune" : "琴川鈴音"
,"kotogi raura" : "ことぎ蘭浦"
,"kotoko" : "古都子"
,"cotoji" : "琴慈"
,"kotono wakako" : "琴の若子"
,"kotoba ai" : "コトバアイ"
,"kotobuki" : "ことぶき"
,"kotobuki utage" : "寿宴"
,"kotobuki kazuki" : ["琴吹かずき", "琴吹かづき", "琴吹中二"]
,"kotobuki tsukasa" : "ことぶきつかさ"
,"kotobuki nene" : "寿ねね"
,"kotobuki maimu" : "ことぶきまいむ"
,"kotobuki mairo" : "寿まいろ"
,"goto-beido" : "ゴト・ベイドー"
,"kotomaro" : "ことまろ"
,"kotomi yo-ji" : "ことみようじ"
,"kotoyoshi yumisuke" : "琴義弓介"
,"kotora" : "ことら"
,"kotori ran" : "琴李蘭"
,"kotowari" : "理～ことわり～"
,"konakoma" : "粉駒"
,"konata" : "こなた"
,"konata hyuura" : "虎向ひゅうら"
,"konatsu" : "小夏"
,"konayama kata" : "粉山カタ"
,"konishi hiroshi" : "こにしひろし"
,"konezu" : "コネズ"
,"konoe akihiko" : "九巴昭彦"
,"konoe nanao" : "近江ななお"
,"konoshige" : "コノシゲ"
,"conodonts" : "このどんと"
,"konohana" : "此花"
,"konoma kazuho" : "孤ノ間和歩"
,"konoma waho" : "このま和歩"
,"konomi" : ["konomi", "きのこのみ"]
,"gomenne konomichi" : "此路あゆみ"
,"koha" : "こは"
,"cobaco mimiz" : "小箱みみず"
,"kobashiko" : "コバシコ"
,"kohachi" : "こはち"
,"kobato neneko" : "小鳩ねねこ"
,"kobayashi" : "誇林"
,"kobayashi oukei" : "小林王桂"
,"kobayashi kazumi" : "小林かずみ"
,"kobayashi shounenmaru" : ["小林少年丸", "小林少年"]
,"kobayashi takashi" : "小林多加志"
,"kobayashi takumi" : "小林拓己"
,"kobayashi chisato" : "小林ちさと"
,"kobayashi tetsuya" : "コバヤシテツヤ"
,"kobayashi hiyoko" : "こばやしひよこ"
,"kobayashi masakazu" : "小林将一"
,"kobayashi youkoh" : "小林由高"
,"cobalt ki" : "コバルト機"
,"koharu nanakusa" : "小春七草"
,"gohan" : "ごはん"
,"goban" : "ごばん"
,"kobanya koban" : "狐蛮屋こばん"
,"kohitsuji" : "こひつじ"
,"kobiyuun" : "こびゆうん"
,"xiaowoo" : ["小武", "小武-10cyo"]
,"kobuichi" : "こぶいち"
,"coburaco" : "コブラノヲヤツ"
,"goblin" : ["ゴブリン", "ゴブリン森口"]
,"ko process" : "子プロセス"
,"cobo" : "こぼ"
,"kobone tomo" : "小骨トモ"
,"koporinuchi" : "こぽりヌち"
,"cobolt" : "こぼると"
,"coma" : "COMA"
,"komagata" : "狛形"
,"komaki tamotsu" : "小牧保"
,"komaki ren" : "小巻恋"
,"comaku" : "狛句"
,"komac" : "鼓膜"
,"komagome" : "駒込"
,"goma satoshi" : "ごまさとし"
,"gomatamago" : "ゴマタマゴ"
,"komatsu" : "こまつ"
,"komatsubara kumamochi" : "小松原くまもち"
,"komano mako" : "狛野まこ"
,"komatsu e-ji" : "駒都えーじ"
,"komamemaru" : "こまめ丸"
,"kome" : "コミー"
,"komi zumiko" : "コミズミコ"
,"komine tsubasa" : ["小峯つばさ", "五割引中"]
,"komiya yuuta" : ["小宮裕太", "御堂明日香"]
,"gomu" : "ゴム"
,"komusou" : "こむそう"
,"komura" : "コムラ"
,"komura saki" : "小邑紗希"
,"komei max" : "米胃MAX"
,"komezawa" : "こめざわ"
,"kome tsubu" : "こめつぶ"
,"gomennasai" : "御免なさい"
,"komota" : "KOMOTA"
,"komotoda emai" : "小本田絵舞"
,"komone ushio" : "相音うしお"
,"komori ei" : "古森詠"
,"komori kei" : "こもりけい"
,"goya" : "ごや"
,"goya akira" : ["ゴヤアキラ", "呉屋朗"]
,"koyanagi royal" : "小柳ロイヤル"
,"koyama ichi" : "こやまいち"
,"koyama unkaku" : "小山雲鶴"
,"koyama shigeru" : "こやま滋"
,"koyama tomosato" : "こやまともさと"
,"koyama harutarou" : "コヤマハルタロウ"
,"collagen" : "コラーゲン"
,"corundum" : "こらんだむ"
,"koriinio" : "コリーニオ"
,"korie riko" : "梱枝りこ"
,"korisu" : "こりす"
,"korisei" : "孤裡精"
,"goriyaku" : "ごりやく"
,"koryu misato" : "湖竜美里"
,"colin" : "COLIN"
,"colulun" : "こるるん"
,"koreeda kazuhiro" : "是枝和宏"
,"koresawa shigeyuki" : "是沢重幸"
,"goro" : "ゴロー"
,"korosuke" : "ころすけ"
,"korotsuke" : "コロツケ"
,"colonexe" : "コロねぇ"
,"herokey" : ["コワレ田ラジ男", "ヒーローキィ"]
,"gon" : "GON"
,"konka" : "紺菓"
,"shiromaki mizuga" : ["金画輪画", "しろまきみずが"]
,"kon-kit" : ["蒟吉人", "蒟KIT"]
,"gonzaburo-" : ["ゴンさぶろー", "ゴンざぶろー"]
,"konsayo" : "こんさよ"
,"konjou kenichi" : "紺城けんいち"
,"konjou nappi" : ["紺条なっぴ", "紺條夏生", "紺条夏生"]
,"konjou natsumi" : ["紺條夏生", "紺条夏生", "紺条なっぴ"]
,"konshin" : "魂神"
,"konchiki" : "こんちき"
,"konchan" : "Konchan"
,"kontetsu" : "こんてつ"
,"kondom" : "昆童虫"
,"con narita" : "紺ナリタ"
,"konno azure" : "紺野あずれ"
,"konno sei" : "こんのせい"
,"combat echizen" : "コンバット越前"
,"combat ecchu" : "戦闘的越中"
,"konparu" : "金春"
,"gonbuto" : "ごんぶと"
,"konpeto" : "こんぺと"
,"konboi" : "こんぼい"
,"commamion" : "コンマミオン"
,"konmori" : "こんもり"
,"saaga miono" : "サーガ・ミオノ"
,"13.dreizehn" : "13.DREIZEHN"
,"saiou ga ushi" : ["塞翁が牛", "牛蟹合戦"]
,"saiogauma" : "さいおがうま"
,"saionjionji yuriko" : "西園寺2ゆりこ"
,"saionji poruporu" : "西園寺ぽるぽる"
,"saigado" : "彩画堂"
,"saiga ryuu" : "さいがりゅう"
,"saikawa yusa" : "さいかわゆさ"
,"saiki eisei" : "彩樹衛生"
,"saiki keita" : "サイキケイタ"
,"saiki makiko" : "斉木マキコ"
,"saikyou soujirou" : "斎京宗司郎"
,"psycho" : "さいこ"
,"psycocko" : "砕骨子"
,"saikoro steak" : "サイコロ・ステーキ"
,"saijo satoru" : "西條サトル"
,"saida kazuaki" : "さいだ一明"
,"saitani umetarou" : "才谷ウメタロウ"
,"saida nika" : "西田ニカ"
,"saite kei" : "才手ケイ"
,"saitou choro" : "さいとうちょろ"
,"saitou tsukasa" : "さいとうつかさ"
,"saito tsubame" : "斎藤燕"
,"saitou natsuki" : "斎藤なつき"
,"saito yahu" : "サイトウヤフ"
,"saitou yamashironokami yukihiko" : "齋藤山城守之彦"
,"saito sakae" : ["さいとー栄", "PURUpyon西東"]
,"sai no shigeru" : "才野シン"
,"saipin" : "さいピン"
,"simon" : "さいもん"
,"saiya" : ["彩也", "SAIYA"]
,"saiyazumi" : "さいやずみ"
,"savan" : "SAVAN"
,"sauro" : "サウロ"
,"saeki" : "佐伯"
,"saeki takao" : "冴樹高雄"
,"saeki tatsuya" : ["佐伯達也", "マドロス冨田"]
,"saeki nao" : "彩季なお"
,"saeki hijiri" : "さえきひじり"
,"saeki hokuto" : "さえき北都"
,"saeki poteri" : "冴木ぽてり"
,"saeki yukako" : "佐伯由香子"
,"saegusa kohaku" : "冴草こはく"
,"saegusa mutsumi" : "さえぐさ睦"
,"saemon" : "サエモン"
,"sae wataru" : ["さえわたる", "久富慎太郎"]
,"zaou taishi" : "蔵王大志"
,"saotome mokono" : "早乙女もこ乃"
,"sakai nayuta" : "坂井なゆ太"
,"sakai hamachi" : "堺はまち"
,"sakai hiroyasu" : "酒井ヒロヤス"
,"sakai minato" : "坂井みなと"
,"sakai meri" : "境メリ"
,"sakai ringo" : "坂井リンゴ"
,"sakagaki" : "サカガキ"
,"sakagami umi" : "坂上海"
,"sakaki izumi" : "さかきいずみ"
,"sakaki utamaru" : "榊歌丸"
,"sakaki shiori" : "さかき栞"
,"sakaki naomoto" : "さかきなおもと"
,"sakakibara kaorunaoko" : "榊原薫奈緒子"
,"sakaki hitomi" : "さかきひとみ"
,"sakaki yuino" : "榊ゆいの"
,"sakaguchi iku" : "坂口いく"
,"sakaguchi shizuka" : "さかぐちしずか"
,"sakazaki freddie" : "坂崎ふれでぃ"
,"sakashita r" : "さかしたR"
,"sakashita asuka" : "坂下亜寿佳"
,"sakada" : "逆ダ"
,"sakata kintoki" : "坂田金時"
,"sakazuki homare" : ["さかづきほまれ", "酒月ほまれ"]
,"sakatsu kurumi" : "坂都胡桃"
,"sagattoru" : "サガッとる"
,"sakatsura hasuya" : "佐桂蓮弥"
,"sakana" : "魚"
,"sakanaya kadan" : "肴耶珈暖"
,"sakanawa taro" : "魚輪太朗"
,"sagano aoi" : "さがのあおい"
,"sagano hellmer" : "サガノヘルマー"
,"sagano yuuji" : "サガノユウジ"
,"sakabe shuuichi" : "坂辺周一"
,"sakamata nerimono" : ["逆又練物", "逆叉練物", "シャチカマボコ"]
,"sagami ichisuke" : "相模いちすけ"
,"sagami inumaru" : "佐上犬丸"
,"sagami hina" : "相模ひな"
,"sagamiya takafumi" : "さがみやたかふみ"
,"sagamiyuu" : "さがみゆう"
,"sagami yuki" : "さがみゆき"
,"sagami yoshitsune" : ["沙神よしつね", "竹山祐右"]
,"sakamoto kafka" : "阪本KAFKA"
,"sakamoto shuuji" : "坂本しゅうじ"
,"sakamoto hayato" : "坂本ハヤト"
,"sakayama shinta" : "茶化山心太"
,"sagaraten" : "沙柄天"
,"sagara riri" : "さがら梨々"
,"sakawaki hirota" : "サカワキヒロ太"
,"saki urara" : ["さきうらら", "星憑ネオン"]
,"saki kaori" : "咲香里"
,"zaki zaraki" : "ザキザラキ"
,"sakishita senmu" : "さきしたせんむ"
,"sakida saki" : "咲田咲"
,"sakichi" : "さきち"
,"saki chisuzu" : "さき千鈴"
,"saki hajime" : "佐喜ハジメ"
,"sakibashiri jiru" : "先走☆汁"
,"sakyou kei" : "左京景"
,"sakiyo cake" : "崎由けぇき"
,"sakusabe kyosuke" : "作草部京介"
,"sakujirou" : "咲次朗"
,"sakuma tsukasa" : "さくま司"
,"sakumi" : "サクミ"
,"sakuya shion" : "咲夜しおん"
,"sakuya tsuitachi" : ["さくやついたち", "さくや朔日"]
,"saku yukizou" : "朔ユキ蔵"
,"sakula" : "SAKULA"
,"sakura" : ["さくら", "咲良"]
,"sakura akira" : "佐蔵アキラ"
,"sakura alta" : "桜あるた"
,"sakurai energy" : "櫻井エネルギー"
,"sakurai aya" : "桜井綾"
,"sakurai-kun" : "桜井くん"
,"sakurai shizuku" : "桜井雫"
,"sakurai chada" : "桜井チャダ"
,"sakuraippo" : "さくらいっぽ"
,"sakurai tenchi" : "桜井天智"
,"sakurai mia" : "桜井未亜"
,"sakurai minami" : "櫻井ミナミ"
,"sakurai uta" : "桜井U太"
,"sakurai yuki" : "櫻井ゆき"
,"sakura eri" : "さくら恵理"
,"sakura gai" : ["さくらがい", "さくら・がい"]
,"sakura kanawo" : "佐倉かなを"
,"sakuragawa raama" : "桜川ラアマ"
,"sakuragi ayan" : "桜木あやん"
,"sakuragi mizuho" : "桜木みづほ"
,"sakuragi yomi" : "さくらぎよみ"
,"sakura kumi" : ["永野ひろし", "佐蔵久美"]
,"sakurako" : ["桜娘", "FEENA"]
,"sakura kotetsu" : "桜小鉄"
,"sakura sae" : ["佐倉小枝", "羊子"]
,"sakurazaki momoko" : "桜咲ももこ"
,"sakura saku sakura" : "佐倉さくさく"
,"sakurasachi" : "桜幸"
,"sakurazari hotori" : "桜去ほとり"
,"sakurazawa izumi" : "桜沢いずみ"
,"giriken" : "佐倉シイナ"
,"sakura syoji" : "咲良将司"
,"sakura siro" : "桜シロウ"
,"sakura souichi" : "砂倉そーいち"
,"sakurada" : "桜田"
,"sakurada kyoko" : "桜田キョーコ"
,"sakuratsuki rin" : "桜月りん"
,"sakura pino" : ["咲楽亭", "咲楽ピノ"]
,"sakura denbu" : "桜田麩"
,"sakuraniku umatarou" : "桜肉馬太郎"
,"sakurano nozomi" : "さくらののぞみ"
,"sakurano hikaru" : "さくらの輝"
,"sakuraba jouichirou" : ["桜場丈一朗", "桜庭丈一朗"]
,"sakura hanatsumi" : "佐倉はなつみ"
,"sakuraba hikaru" : "桜庭光"
,"sakuraba yuuki" : "桜庭友紀"
,"sakuraba yukine" : "桜葉雪音"
,"sakuraba rokusuke" : "桜庭六輔"
,"sakura hanpen" : "桜はんぺん"
,"sakura hiiro" : "さくらひいろ"
,"sakura hisayoshi" : "佐倉尚義"
,"sakura puchilo" : "さくらぷちろー"
,"sakurafubuki nel" : "桜吹雪ねる"
,"sakurabe notos" : "桜部のとす"
,"sakurama haruomi" : "桜間はるおみ"
,"sakura mafumi" : "佐倉まふみ"
,"sakura mitsuru" : "桜みつる"
,"sakura mitono" : ["天櫻みとの", "早板奈槻", "早瀬奈槻"]
,"sakurami hiroki" : "櫻見弘樹"
,"sakuramochi kinaco" : "桜餅きな子"
,"sakura yuu" : ["さくらゆう", "桜ゆう"]
,"sakura yu" : ["さくらゆう", "桜ゆう"]
,"sakurayu hal" : "桜湯ハル"
,"sakura ryuuken" : "桜りゅうけん"
,"sakura romako" : "桜ロマ子"
,"sakuretsu tororokonbu" : "炸裂とろろ昆布"
,"zacro" : "ZACRO"
,"sake" : "鮭"
,"sake-chan" : "鮭ちゃん"
,"sakemasu" : ["サケマス", "つるぎ基明"]
,"sakokichi" : "さこきち"
,"zakotsu" : "佐骨"
,"sakofu" : "さこふ"
,"sakomae aichi" : ["佐古前あいち", "あいの智絵"]
,"sasai saji" : "笹井さじ"
,"sasaoka gungu" : "笹岡ぐんぐ"
,"sasagami momo" : "ササガミ百"
,"sasagawa hayashi" : "笹川ハヤシ"
,"sasaki akira" : "ささきあきら"
,"sasaki kaoru" : "ささきかおる"
,"sasaki kazuyuki" : "佐咲和由喜"
,"sasaki kudoo" : "佐々城久遠"
,"sasaki sasa" : "笹木ささ"
,"sasaki bullet" : "佐々木バレット"
,"sasaki maru" : "笹木まる"
,"sasaki mizuki" : "佐々木みずき"
,"sasakuma kyouta" : "ささくまきょうた"
,"sasakura ayato" : "笹倉綾人"
,"sasasa" : "沙々々"
,"sasachinn" : "ささちん"
,"sasano neko" : "ささのねこ"
,"sasanoha" : "笹乃覇"
,"sasahara yuuki" : "佐々原憂樹"
,"sasahiro" : "笹弘"
,"sasamashin" : "ササマシン"
,"sasami" : "ささみ"
,"sasami koto" : "紗々見こと"
,"sasami torino" : "佐々未とりの"
,"sasamine hidetoshi" : "笹峰ひでとし"
,"sazameki" : "さざめき"
,"sasamoto yoshitaka" : "笹本義隆"
,"sasamori tomoe" : "笹森トモエ"
,"sasayama ayako" : "笹山綾子"
,"sasayuki" : "SASAYUKi"
,"sajijiro" : ["サジジロー", "佐治ジロー"]
,"sasizume soutarou" : "差詰そうたろう"
,"sajipen" : "さじぺん"
,"sashimi" : "さしみ"
,"zasha" : "ザシャ"
,"zasetsuou" : "ざせつおう"
,"sasorigatame" : "さそりがため"
,"sadakichi" : "さだ吉"
,"sada ko-ji" : "さだこーじ"
,"sadagorou" : "貞五郎"
,"sadahiro" : "定宏"
,"sadahiro mika" : "定広美香"
,"sadamoto yoshiyuki" : "貞本義行"
,"sachi sakana" : ["サチサカナ", "サチ・サカナ"]
,"sacha" : "さちゃ"
,"sachuma" : "さちゅま"
,"satsuki" : "朔月"
,"satsuki asha" : "さつきあしゃ"
,"satsuki itsuka" : "五月五日"
,"satsuki imonet" : "皐月芋網"
,"satsuki souji" : "サツキソウジ"
,"satsuki neko" : "五月猫"
,"satsukino sonoichi" : "さつきのそのいち"
,"satsuki mikazu" : "皐月みかず"
,"satsuki misuzu" : "皐月みすず"
,"satsuki yuu" : "さつき優"
,"satsuki ruka" : "桜槻るか"
,"sacchi" : "さっち"
,"sapporo momoko" : "さっぽろももこ"
,"satuyo" : "さつよ"
,"satei an" : "沙亭☆杏"
,"satetsu" : "サテツ"
,"sato" : "さと"
,"sado" : "さど"
,"satou ichito" : "砂糖いちと"
,"sato kaoru" : "佐藤かおる"
,"satou kana" : "佐藤カナ"
,"satou kimiatsu" : "さとうきみあつ"
,"satou kiyotoshi" : "佐藤清敏"
,"satou kuuki" : "左藤空気"
,"satou kuron" : "佐藤黒音"
,"satoh coco" : "さとう・ここ"
,"satou saori" : "佐藤沙緒理"
,"satou samu" : "佐藤サム"
,"satou shinmaru" : "さとうしんまる"
,"satou souji" : "佐藤想次"
,"satou takahiro" : ["サトウタカヒロ", "嵯刃天廣", "嵯刃たかひろ"]
,"satou takumi" : ["佐藤匠", "佐藤巧"]
,"satou chagashi" : "佐藤茶菓子"
,"satou teruhito" : "佐藤輝人"
,"satou toshio" : "佐藤登志雄"
,"satou toshiyuki" : "佐藤利幸"
,"satou hagane" : "佐藤はがね"
,"satou masa" : "沙藤昌"
,"satou mizu" : "佐藤ミズ"
,"satou mitsuki" : "佐熊美月"
,"satou murasame eitaroh" : "佐藤村雨英太郎"
,"satoo x kooshi" : "サトー×コーシ"
,"sato-satoru" : "さとーさとる"
,"satou satoru" : "さとーさとる"
,"satoo chief" : "さとーちーふ"
,"satozaki" : "里崎"
,"satoshi" : "Satoshi"
,"satosi" : "Satosi"
,"satotuki tiyo" : "里月ちよ"
,"sadokko" : "さどっこ"
,"satonishi" : "サトニシ"
,"satomi keizou" : "里見兄三"
,"satomichi" : "さとみち"
,"satomi hidefumi" : "さとみひでふみ"
,"satomi yuugo" : "里見優伍"
,"sato yoshimi" : "里好"
,"sato midori" : "さとをみどり"
,"sanae" : "さなえ"
,"sanagi torajirou" : "蛹虎次郎"
,"sanada" : "サナダ"
,"sanada x" : "真田X"
,"sanada kana" : "真田カナ"
,"sanada rin" : "真田鈴"
,"sanatuki" : "さなつき"
,"sanazura hiroyuki" : "さなづらひろゆき"
,"sanaminosuke" : "さなみのすけ"
,"sanari" : "刺成"
,"sanuki" : "さ抜き"
,"sanukiyan" : "さぬきやん"
,"sanezaki tsukiuo" : "志崎月魚"
,"sano akira" : "佐野昭"
,"sano itsuki" : "沙ノ樹"
,"sano takashi" : "佐野タカシ"
,"sano takayoshi" : ["佐野たかよし", "さのたかよし"]
,"sano toshihide" : "佐野俊英"
,"sanomako" : "さのまこ"
,"sano yuu" : "佐野ユウ"
,"saba ibaru" : "佐羽いばる"
,"survival knife" : "サバイバル刃"
,"sabakan" : "佐波缶"
,"sabaku" : "砂漠"
,"saba satoru" : "佐波サトル"
,"sabashi renya" : "左橋レンヤ"
,"sabaneko" : "さばねこ"
,"sabanoniwatori" : ["さばのにわとり", "小林徹郎"]
,"sahara ikkou" : "佐原一光"
,"sahara gensei" : "佐原玄清"
,"sahara hidekazu" : "佐原秀和"
,"sahara wataru" : "砂原渉"
,"saharu yorito" : "佐良和音"
,"sabi wasabi" : "錆わさび"
,"sarfata" : "さふぁ太"
,"sabuustar" : "さぶ～☆☆☆"
,"sabusuka" : "サブスカ"
,"saburoh" : "SABUROH"
,"saburou" : ["サブロー", "さぶろ～"]
,"sabe" : "SABE"
,"saboikku" : "さぼいっく"
,"summer" : "サマー"
,"zama shouji" : "座間翔二"
,"samazuka mashio" : "様塚麻塩"
,"samidare setsuna" : "五月雨せつな"
,"habezamurai" : "侍侍"
,"samura hiroaki" : "沙村広明"
,"same" : "さめ"
,"sameda koban" : "さめだ小判"
,"sameba ikuya" : "鮫葉いくや"
,"same manma" : "さめまんま"
,"samozumo tooru" : "さもずも融"
,"sayaka" : "さやか"
,"sayakata" : "さやかた"
,"sayato" : "さやと"
,"sayuki" : "紗雪"
,"sayori" : "さより"
,"zarasi" : "ざらし"
,"sarashina mizuho" : "さらしな瑞穂"
,"sarashina ryouichi" : "更科了一"
,"salad" : ["さらだ", "さらだまさき"]
,"saranaru takami" : "皿成高味"
,"saranoki chikara" : "沙羅木力"
,"salamander" : "サラマンダ"
,"saru" : "沙流"
,"saru gasso" : "さるがっそ"
,"sargasso kai" : "サルガッソー海"
,"sarunote isao" : "猿ノ手功"
,"sawaki" : "さわき"
,"sawashiro kei" : "沢城ケイ"
,"sawada daisuke" : "沢田大介"
,"sawada hajime" : "沢田一"
,"sawada furope" : "沢田ふろぺ"
,"sawada honoka" : "澤田ほのか"
,"sawatari tatsuya" : "沢渡竜也"
,"sawatari yuuka" : "佐渡悠花"
,"sawada ryuuji" : "沢田竜治"
,"sawananana" : "さわななな"
,"sawano akira" : "澤野明"
,"sawabichi juushi" : "さわびちじゅうし"
,"sawamura ao" : "沢村青"
,"sawamura mariko" : "澤村鞠子"
,"sawamura mekichi" : "澤村目吉"
,"sawayaka samehada" : "さわやか鮫肌"
,"sawa yuzu" : "沙和ゆず"
,"sawaragi" : "さわらぎ"
,"sawarano goan" : "さわらの五庵"
,"sangai" : "算涯"
,"sankaku sui" : "サンカクスイ"
,"sangatsu usagi" : "三月うさぎ"
,"sangatsu sanichi" : "三月さんいち"
,"sanku" : "三九"
,"sankuro" : "三九呂"
,"sankurowa" : "サンクロワ"
,"sangenya chika" : "三軒屋チカ"
,"sansa wasabi" : "三左わさび"
,"zanzi" : "暫時"
,"sanshisuimei" : "山紫水明"
,"sanjuurou" : "さんじゅうろう"
,"sanjou tomomi" : "三条友美"
,"sansyoku amido." : "三色網戸。"
,"sanshoku sumire" : "三色すみれ"
,"sanshoku nerune" : "三食ねるね"
,"sanjiro" : "さんじろ♨"
,"sanzui" : "さんずい"
,"sansun" : "三寸"
,"sanzoku ganyu" : "山賊がにゅ"
,"santa" : "Santa"
,"st.germain-sal" : "さんぢぇるまん・猿"
,"zandoro" : "ざんどろ"
,"sannyuutei shinta" : "三乳亭しん太"
,"sanpaku" : "三泊"
,"sanbasou" : "さんば挿"
,"sanpatisiki" : "38式"
,"sanba riwo" : "三葉りを"
,"3huro" : "三風呂"
,"sanbun kyoden" : "山文京伝"
,"sanri youko" : "さんりようこ"
,"sanrokumaru" : "さんろく丸"
,"sanwaribiki" : "三割引"
,"jia nostalsan" : "次亜ノスタル酸"
,"shiawase 1500" : ["しあわせ1500", "幸せ1500"]
,"shiawase na choshoku." : "幸せな朝食。"
,"shiawase no katachi" : "幸せのかたち"
,"c.meiko" : ["C.みーこ", "C.Meiko"]
,"c.r" : "しーあーる"
,"see.o" : "See.O"
,"shiiki satsuya" : ["椎木冊也", "みなすきぽぷり"]
,"c-kyuu" : "C級"
,"cesar" : "しーざー"
,"shiizaki hinaki" : "椎咲雛樹"
,"shiitaken" : "しいた"
,"shiina" : "シイナ"
,"shiina ahiru" : "椎菜あひる"
,"shiina kazuki" : "しいなかずき"
,"shiina nami" : "椎名波"
,"shiina from" : "椎名フロム"
,"shiina mitsuki" : "椎名みつき"
,"siina yuuki" : "椎名悠輝"
,"g.b onodera" : ["G.B小野寺", "小野寺浩二"]
,"g equals hikorou" : ["G=ヒコロウ", "Gヒコロウ"]
,"g munyo" : "G・むにょ"
,"coelacanth" : "しーらかんす"
,"shiira sara" : "しいら・さら"
,"shiiruzu" : "しーるず"
,"g-wara" : "爺わら"
,"shiun" : "SHIUN"
,"shiun sanchou" : "紫雲山頂"
,"purplecroudhill" : "紫雲山頂"
,"jake" : "じぇいく"
,"j.sairo" : "J・さいろー"
,"james hotate" : ["ジェームスほたて", "小暮マリコ", "高橋くるみ"]
,"chesya" : "CHESYA"
,"jet yowatari" : "ジェット世渡り"
,"jenigata" : "ジェニガタ"
,"shien" : "しえん"
,"gentle sasaki" : "ジェントル佐々木"
,"siooninco" : "塩おにんこ"
,"shiokaze oga" : "潮風OGA"
,"siokaze sango" : "潮風サンゴ"
,"shiokonbu" : "しおこんぶ"
,"shiosaba" : "塩鯖ッ"
,"shiozawa yoshiaki" : "塩沢由明"
,"siose tamotsu" : "シオセタモツ"
,"shiono etorouji" : "塩野干支郎次"
,"shiono kou" : "汐乃コウ"
,"shiono maki" : "塩野まき"
,"siohuu" : "しおふう"
,"shiomaneki" : "シオマネキ"
,"shiomi shaga" : "汐見シャガ"
,"siomidu" : "シオミヅ"
,"shiomi yuusuke" : ["士臣祐介", "士臣佑介"]
,"sioyaki ayu" : "汐焼あゆ"
,"shioya maico" : "塩屋舞子"
,"shiory" : "Shiory"
,"shioroku" : "シオロク"
,"shion" : ["紫恩", "SHION"]
,"sion" : "しおん"
,"zion" : "ZION"
,"utanone sion" : ["しおん", "うたのねしおん"]
,"shigaoka touki" : ["志峨丘トウキ", "士峨丘トウキ"]
,"marui shiro" : "四角いくろ丸"
,"shikage nagi" : "しかげなぎ"
,"shiga saori" : "紫賀サヲリ"
,"shigatake" : "シガタケ"
,"zikataro" : "自家太郎"
,"shigatsu no diamond" : "四月乃ダイヤモンド"
,"shikanari" : "シカナリ"
,"shikanosuke" : "鹿之助"
,"shikabanekamo" : "しかばねかも"
,"shika yuno" : "椎架ゆの"
,"shiga retsuto" : "志賀烈人"
,"shiki" : "支葵"
,"shikiouzi" : "シキオウジ"
,"shikiouji" : "シキオウジ"
,"shikigami azuma" : "しきがみあずま"
,"shikigami kuroko" : "式神くろ子"
,"shikishima shoutarou" : "敷島昭太郎"
,"shikishima tenki" : "敷島天気"
,"shikishima mizuho" : "敷島みずほ"
,"shikishiro konomi" : "色白好"
,"shiki takuto" : "史鬼匠人"
,"shigi tanuki" : "鴫タヌキ"
,"shikimi mikoto" : "樒みこと"
,"shigunyan" : "しぐにゃん"
,"signo mandara" : "シグノマンダラ"
,"sigma rio" : "しぐまりお"
,"shigure" : "時雨"
,"shikuro" : "しくろ"
,"shikei" : "しけー"
,"shikeida" : "しけいだ"
,"shigekix" : "しげきっくす"
,"shigeking-max" : "刺激ing-MAX"
,"shigeta kitao" : "重田キタオ"
,"shigeno osamu" : "しげの理"
,"shigehira" : "茂平"
,"shigemaru shigeru" : "重丸しげる"
,"shigemiya kyouhei" : "樹宮匡平"
,"shigeru" : "しげる"
,"shikou shiki" : "紫紅シキ"
,"shizaki masayuki" : "士崎雅雪"
,"jiji" : "じじ"
,"shishigai" : "シシガイ"
,"shishikura sendou" : "宍倉センドー"
,"shishiji" : "ししじ"
,"shishi senmaru" : "獅子千丸"
,"shijima kiri" : "しじま嬉吏"
,"shijima yukio" : ["四島由紀夫", "青妬かげ"]
,"shishimaru kenya" : "ししまるけんや"
,"shishiyama ryuu" : "獅子山竜"
,"shishamo" : "ししゃも"
,"sisyamo 2 percent" : "sisyamo2％"
,"shijuukara" : "四十雀"
,"shijou sadafumi" : "四条定史"
,"shijou mako" : "士嬢マコ"
,"shishoku gankou" : "紫色雁行"
,"shijokko" : "しじょっこ"
,"shisui ao" : "シスイ青"
,"shizuka" : "SHIZUKA"
,"shizuki shuya" : ["紫月秋也", "紫月秋夜"]
,"sisei tokei" : "市井時計"
,"shida" : "シダ"
,"shidaka akikuni" : "しだかあきくに"
,"shitappa" : "下っ端"
,"shida midori" : "しだ翠"
,"shitaranana" : "したらなな"
,"shidare aya" : "しだれ彩"
,"shikkarimono no takashi-kun" : "しっかり者のタカシくん"
,"shizuki shinra" : "獅月しんら"
,"shiduki michiru" : "しづきみちる"
,"shituzhi" : "シツジ"
,"shittori bouzu" : "しっとりボウズ"
,"sippufx" : "しっぷfx"
,"shizuma" : "しづま"
,"jitsuma" : "児妻"
,"shiden" : ["しでん", "治屋武しでん"]
,"shiden akira" : "しでん晶"
,"shiden hiro" : "四電ヒロ"
,"sid alice" : "獅童ありす"
,"shido mayuru" : "志堂マユル"
,"shinagawa ham" : "品川ハム"
,"shinagawa mikuzu" : "品川ミクズ"
,"shinade kuro" : "科手黒"
,"shinano yura" : "しなのゆら"
,"shinano rurusa" : "信乃流々砂"
,"shinama" : "しなま"
,"shinigami kenji" : "死神健二"
,"haguki" : "歯肉はぐき"
,"shiniku haguki" : "歯肉はぐき"
,"shinima" : "しにま"
,"shino" : ["シノ", "獅乃", "しの", "SHINO"]
,"shinooka homare" : "篠岡ほまれ"
,"shinogi a-suke" : "しのぎ鋭介"
,"shinogi kei" : ["しのぎけい", "篠木圭"]
,"shinogiri zun" : "忍桐ずん"
,"shinozaki rei" : "しのざき嶺"
,"shinoda kazuhiro" : "篠田一宏"
,"shinoda kouta" : "篠田甲太"
,"shinoda sanjuurou" : "篠田参重郎"
,"shinozuka atsuto" : "しのづかあつと"
,"shinozuka george" : "篠塚醸二"
,"shinozuka yuuji" : "篠塚裕志"
,"shinonome 108" : "東雲108"
,"shinonome tarou" : "東雲太郎"
,"shinonome ten" : "東雲天"
,"shinonome maki" : ["東雲舞樹", "あぱぱ"]
,"shinonome mizuo" : "東雲水生"
,"shinonome mizuki" : "東雲瑞稀"
,"shinonome ryu" : ["東雲龍", "荻上ちひろ"]
,"shinohara tesshou" : ["篠原哲生", "紅色餅乾"]
,"shinobu" : "詩乃譜"
,"shinobu akira" : "篠部秋良"
,"shinobu tanei" : "志乃武丹英"
,"shinobe" : "しのべ"
,"sinori" : "しのり"
,"siseki hirame" : "芝石ひらめ"
,"shibaura yuu" : "柴浦佑侑"
,"shibaken goro" : "柴犬五郎"
,"shibasaki syouzi" : "柴崎ショージ"
,"oi shibako" : ["司馬淳子", "しばこ"]
,"shihachiro" : "しはちろ"
,"shibatora" : "柴寅"
,"shiba nanasei" : "柴七世"
,"shibahara gotyo" : "しばはらごちょ"
,"shibahara shouji" : "柴原ショージ"
,"shibamori azumi" : "柴森あずみ"
,"shibari kana" : ["縛夏奈", "縛霞奈"]
,"shibi" : "ShiBi"
,"shihira tatsuya" : "シヒラ竜也"
,"shibire hitsuji" : "シビレヒツジ"
,"jipin" : "ジピン"
,"shipuoru" : "しぷおる"
,"shibuki oroshi" : ["飛沫おろし", "紫吹おろし"]
,"sibusawa eiki" : "渋澤鋭樹"
,"shibusawa hayato" : "渋沢隼人"
,"shift" : "Shift"
,"shivharu" : "シブハル"
,"shibe chou" : "シベ☆超"
,"siberian hahasky" : "シベリアン母スキー"
,"siho" : ["SIHO", "siho"]
,"simaura" : "縞浦"
,"shimao kazu" : "嶋尾和"
,"shimakaze" : "島風"
,"shima kyousuke" : "志摩京佑"
,"shimazaki lem" : "島崎れむ"
,"shimaji" : "しまじ"
,"shima syu" : ["しまシュー", "しましゅー"]
,"shimataka" : "しまたか"
,"shimada panda" : "しま田ぱんだ"
,"shimachiyo" : "しまちよ"
,"shimazu tekko" : "島津鉄甲"
,"shimahara" : "40原"
,"shima mitsuru" : "志摩みつる"
,"shimamura" : "しまむら"
,"shimamura george" : "縞村ジョージ"
,"shimamoto kaoru" : "島本かおる"
,"shimamoto harumi" : ["島本晴海。", "島本晴海"]
,"shimantogawa" : "四万十川"
,"shimanto shisakugata" : "40010試作型"
,"shimanto youta" : "四万十曜太"
,"shimizu kiyoshi" : "清水清"
,"shimizu toshimitsu" : "清水敏満"
,"shimizu masaharu" : "清水雅治"
,"shimimaru" : "紙魚丸"
,"shimuro itaru" : "至室"
,"shimetta seiya" : "湿った星夜"
,"shimokata kouzou" : "霜方降造"
,"shimosan" : "シモさん"
,"shimodaira tooko" : "下平十子"
,"shimotsuki mitsuki" : "霜月みつき"
,"mint shimotsuki" : "霜月眠兎"
,"shimohara" : "しもはら"
,"shimofusa ito" : "下総依斗"
,"shimofuri" : "霜降"
,"shimoyama giruko" : "下山ギルコ"
,"shimo yamashi" : "下やまし"
,"shimoyama ririsu" : "下山りりす"
,"shimon ryushiro" : "子門竜士郎"
,"shark yaminabe" : "シャーク闇鍋"
,"sharp" : "SHあRP"
,"shaa peipei" : "西北々"
,"charveltiger" : "シャーベルタイガー"
,"shaian" : "しゃいあん"
,"gyro amarume" : "ジャイロ余目"
,"jairou" : "ジャイロウ"
,"jagaimo" : "じゃがimo"
,"jagausa" : "じゃがうさ"
,"jagayamatarawo" : "じゃが山たらヲ"
,"jackdempa" : "弱電波"
,"shake" : "ShAKe"
,"shaketsu rh minus" : "瀉血Rh-"
,"jakou nezumi" : "じゃこうねずみ"
,"shako punch" : "シャコぱんち。"
,"jackie kameyama" : "ジャッキー亀山"
,"jacky knee-san" : "ジャッキーニーさん"
,"jack" : ["ジャック", "JACK"]
,"jakko" : "じゃっこ"
,"junny" : "JUNNY"
,"jamming" : "じゃみんぐ"
,"jam ouji" : "ジャム王子"
,"milk jam" : ["ジャムしぃ", "みるくジャム"]
,"jam neko" : "邪夢猫"
,"syamonabe" : "シャモナベ"
,"shamon" : "沙門"
,"shayo" : "しゃよー"
,"zyaroh akira" : "邪琅明"
,"jean louis" : "ジャン・ルイ"
,"junkie" : ["千要よゆち", "ジャンキー"]
,"junk kameyoko" : "JUNK亀横"
,"jeanne dack" : "じゃんぬだっく"
,"jiyu2" : "磁油2"
,"syuuen" : "終焉"
,"jyuuji" : "拾次"
,"juuji" : "拾次"
,"juunigatsu shoujo" : "十二月少女"
,"juubaori mashumaro" : "十羽織ましゅまろ"
,"shuuhen kouichi" : "周辺コウイチ"
,"jewel" : "Jewel"
,"sugar milk" : "シュガーミルク"
,"shuju" : "侏儒"
,"juteimu nakata" : "ジュテーム中田"
,"shuten douji" : "酒呑童子"
,"juna juna juice" : "ジュナジュナジュース"
,"syunichi" : "しゅにち"
,"shura" : "SHURA"
,"jyura" : "じゅら"
,"jury" : "じゅらい"
,"jyu-ri" : "寿裡"
,"shuru-ban" : "しゅる版"
,"syuro" : "Syuro"
,"jun" : "Jun"
,"jyun" : "JYUN"
,"shungiku tenudon" : ["春菊天うどん", "蛙子丁字"]
,"shun shun" : "俊俊"
,"shunjou shuusuke" : "春城秋介"
,"syunzo" : "しゅんぞう"
,"shunzou" : "しゅんぞう"
,"shunmin mk.iii" : ["春眠Mk.Ⅲ", "春眠Mk.III", "春眠MkIII"]
,"shunmin mutsumi" : "春眠六泉"
,"joy" : "じょい"
,"shou akira" : "憧明良"
,"syoukaki" : "消火器"
,"shougeki no hirayama" : "衝撃の平山"
,"shousan bouzu" : "しょうさん坊主"
,"syouji" : "庄司"
,"shouji bc" : ["庄司☆BC", "庄司・BC"]
,"shouji ayumu" : "小路あゆむ"
,"shouji nigou" : "庄司二号"
,"shouji haruka" : ["祥寺はるか", "NYAN"]
,"shouji haruzo" : "障子張蔵"
,"nekokan-nekokan" : "状態異常(毒)"
,"shouchan" : "しょうちゃん"
,"joucho" : "情緒"
,"shoutengai mitsukage" : "小店街光景"
,"shona mitsuishi" : "庄名泉石"
,"jounouchi nene" : "城之内寧々"
,"jonouchi nene" : "城之内寧々"
,"shobu" : "菖蒲"
,"shouhei" : ["将兵", "しょーへい"]
,"shohei" : ["将兵", "しょーへい"]
,"syowmaru" : "翔丸"
,"shouryuu" : "昇龍"
,"shoryutei enraku" : "昇龍亭圓楽"
,"syouwaru" : "性悪"
,"joe" : "JOE"
,"george hirune" : "ジョージひるね"
,"syosonn" : "ショーソン"
,"kuroda shohei" : ["しょーへい", "黒田しょーへい", "阿賀まりの"]
,"shooya akira" : "ショーヤアキラ"
,"sho-yan" : "しょーやん"
,"syouryuupen" : "しょーりゅーぺん"
,"jyoka" : "叙火"
,"shogota" : "しょごた"
,"jotti" : "ジョッチ"
,"shotenin matori" : "書店院まとり"
,"johnny" : ["じょにー", "ジョニー"]
,"jony laser" : "ジョニー"
,"jonokuchi jouji" : ["序ノ口譲二", "あずまきよひこ"]
,"shono kotaro" : "宵野コタロー"
,"jovejun." : "じょぶじゅん。"
,"shomu" : "しょむ"
,"jorori" : "じょろり"
,"jon" : "じょん"
,"john k. pe-ta" : "ジョン・K・ペー太"
,"john sitch-oh" : "ジョン湿地王"
,"johnson tsutomu" : "ジョンソン勉"
,"jon dousuke" : "じょん同助"
,"shirai gouta" : "白井豪太"
,"shirai samoedo" : "白井サモエド"
,"shiraishinsuke" : "白石Nスケ"
,"shiraishi asuka" : "白石明日香"
,"shiraishi nagisa" : "白石なぎさ"
,"jiraichi" : "ジラ壱"
,"shiraichigo" : "しらいちご"
,"shira ichigo" : "しらいちご"
,"shirakage musashi" : "白影武蔵"
,"shiragiku" : "白菊"
,"shirasaka rio" : "白坂りお"
,"shirasagi rokuwa" : "白鷺六羽"
,"shiraso" : "しらそ"
,"shirataki shun" : "しらたき春"
,"shiratama" : "しらたま"
,"shiratama azuki" : "白玉アズキ"
,"shiratama1gou" : "白玉一号"
,"shiratama moti" : "白玉もち"
,"shiratama yomogi" : "しらたまよもぎ"
,"shiratori yuri" : "シラトリ　ユリ"
,"shiratori reiko" : "しらとりれいこ"
,"shiranagi masa" : "白凪まさ"
,"shiranui rei" : "不知火零"
,"shirane taito" : "白根戴斗"
,"shiraha mato" : "白羽まと"
,"shirahama masayoshi" : "白浜将義"
,"shirabe shiki" : "調四季"
,"shiramizu mizuchi" : "白瑞みずち"
,"shiran takashi" : ["しらんたかし", "shiran"]
,"silly" : "しりー"
,"shirisensha" : "尻戦車"
,"shirizou" : "シリ蔵"
,"silhouette sakura" : "シルエットさくら"
,"shiruka bakaudon" : "知るかバカうどん"
,"shiruku" : "シルク"
,"silver dog" : "シルバードッグ"
,"shiremono" : "シレモノ"
,"shiro" : "しろ"
,"shiroie mika" : "白家ミカ"
,"shiroi kuroneko" : "白い黒猫"
,"shiroishi gatta" : "白石ガッタ"
,"shiroi noria" : "城井のりあ"
,"shiroi yuki" : "城井ユキ"
,"jirou" : "ジロウ"
,"shirouzu myuuta" : "白水ミュウタ"
,"masamune shirow" : "士郎正宗"
,"shiroo" : "しろー"
,"shirogane anjyu" : "銀杏樹"
,"shirogane hina" : "シロガネヒナ"
,"shirokarasu" : "白からす"
,"shirokitsune" : "しろきつね"
,"sirokuma" : ["しろくま", "白球磨"]
,"shirokuma a" : "シロクマＡ"
,"shirokuma douji" : "白熊童子"
,"shirokuro" : "シロクロ"
,"sirokuro" : "シロクロ"
,"shiro kuro" : "シロクロ"
,"shirokouji shio" : "白麹シヲ"
,"shirogoma rai" : "白駒らい"
,"sirosaki aroe" : "白崎アロエ"
,"shirosuzu" : "しろすず"
,"shirota kurota" : "シロタクロタ"
,"shirota dai" : "白田太"
,"shirotsumekusa" : "城爪草"
,"shirotobi" : "しろとび"
,"shironeko sanbou" : "白猫参謀"
,"shirono jia" : "白野ジア"
,"takaku tubby" : ["シロノマヒロ", "高句タビー"]
,"shiro paka" : "シロパカ"
,"shiro hatori" : "白ハトリ"
,"shiroha reba" : "白羽れば"
,"sirofugu" : "白フグ"
,"shiromi kazuhisa" : "しろみかずひさ"
,"shiromitsu daiya" : "白蜜ダイヤ"
,"mochio" : "白蜜モチ"
,"shiromochi sakura" : "白もち桜"
,"shiroyagi hato" : "白夜木ハト"
,"shiwasu no okina" : "師走の翁"
,"shiwasu horio" : "師走ほりお"
,"shiworiita" : "シヲリイタ"
,"din" : "DIN"
,"jin" : "JIN"
,"shinichi" : "しんいち"
,"shin en" : "新苑"
,"shinkai" : "真海"
,"shinkaida tetsuyarou" : ["新貝田鉄也郎", "とろろいも一号"]
,"jingai modoki" : "人外モドキ"
,"shinkai yuyu" : "深海ゆゆ"
,"shingyouji tatsuya" : ["真行寺たつや", "富本たつや"]
,"shinkuukan" : ["真空間", "もとや真"]
,"shinkuu tatsuya" : "しんくうたつや"
,"zinkurou" : "ジンクロウ"
,"zin" : "ジンクロウ"
,"jinke wagao" : "陣卦吾雄"
,"jinkennashi tarou" : "人権なし太郎"
,"shingo." : "Shingo."
,"shinzanmono" : "新参者"
,"shinjima saki" : ["心島咲", "マサキ真司", "正鬼真司"]
,"ginger-l" : "ジンジャー・エル"
,"shinjou ruru" : "新条るる"
,"shinjiro" : "信じろ"
,"shinshin" : "しんしん"
,"jinjin" : "じんじん"
,"shinjinkun" : "新人君"
,"shintaisou gaisha" : "新体操会社"
,"shinda mane" : "新田真子"
,"sinntarou" : "心太朗"
,"shintarou" : "しんたろー"
,"shintaro" : "しんたろー"
,"shin tsuguru" : "シン・ツグル"
,"shindou" : "しんどう"
,"shindol" : "新堂エル"
,"shindou naoto" : "新堂なおと"
,"shindou nobumichi" : "新藤ノブミチ"
,"shindou hajime" : "新道一"
,"shindou mayumi" : "シンドウマユミ"
,"shindou michihiro" : "新堂道弘"
,"sindoll" : "シンドール"
,"jinnai" : "ジンナイ"
,"jinnai jun" : "陣内潤"
,"jinnojyou" : "仁ノ丞"
,"simba takafumi" : "しんば鷹史"
,"shinba yagi" : "神馬耶樹"
,"shin fuzen" : "シン・普禅"
,"sinbo tamaran" : "神保玉蘭"
,"jinbo hitode" : "神保ひとで"
,"jinmu hirohito" : "神武裕仁"
,"shinya" : ["しんや", "シンヤ"]
,"shinyashiki" : "新屋敷"
,"shinrin tamago" : "森林たまご"
,"jingrock" : "甚六"
,"suien" : "翠燕"
,"suika" : "水歌"
,"ijiro suika" : ["スイカ", "居城スイカ"]
,"suika koron" : "酔花ころん"
,"suika soda" : "すいかソーダ"
,"suika hazan" : ["西瓜波山", "SRわたなべまこと", "SR渡辺誠", "SR渡邉誠", "わたなべまこと"]
,"suigi" : "スイギ"
,"suigin hachijuu" : "水銀八十"
,"suishin tenra" : "水心天羅"
,"suisui" : "すいすい"
,"suitekiya yuumin" : "水滴屋悠民"
,"suiden moon" : ["水田ムーン", "すいでんげつ"]
,"suihi" : "すいひ"
,"suihei sen" : "水平線"
,"suimya" : "すいみゃ"
,"suiren" : "水蓮"
,"suiroh" : "垂狼"
,"zuuga" : "ズーガ"
,"suzan" : "吸斬"
,"zootan" : "ZOOTAN"
,"suuchin" : "すうちん"
,"sue" : "すえ"
,"suetora ryo" : "据虎涼"
,"suehirogari" : ["すえひろがり", "末広雅里"]
,"suemitsu dicca" : "すえみつぢっか"
,"sueyuu" : "すえゆう"
,"sugai" : "スガイ"
,"sugaishi" : "すがいし"
,"sukage" : "須影"
,"sugane fleen" : "スガネフリーン"
,"sugahara nao" : "すがはらなお"
,"suga hideo" : "スガヒデオ"
,"sugara" : "スガラ"
,"scarabaeus" : "すからべーと"
,"kakuzato yun" : ["すがる春", "角砂糖"]
,"sugaleon" : "スガレオン"
,"sugiura sen" : "杉浦線"
,"sugioka hiroyuki" : "杉岡ヒロユキ"
,"sugi thunder" : "スギサンダー"
,"sugitaka aoya" : "杉崇亜緒弥"
,"sugi g" : "すぎぢー"
,"sugitomo kazuhiro" : "杉友カヅヒロ"
,"sugina miki" : "杉菜水姫"
,"sugimoto takeshi" : "杉本赳士"
,"sugimoto rio" : "杉本リオ"
,"sugiyama genshou" : "すぎやま現象"
,"sugiyuu" : "スギユウ"
,"sukiyoshi shinji" : "好善信士"
,"school izumi" : "すくーるいずみ"
,"sugurugi riko" : "傑木リコ"
,"sukekiyo" : "すけきよ"
,"sukesaburou" : "助三郎"
,"sukeya kurov" : "助谷クロウ"
,"sugo ryo" : "須郷良"
,"scotch" : "スコッチ"
,"sukoyaka gyuunyuu" : "健やか牛乳"
,"sukoyaka" : "すこやかグミ"
,"suzaku" : "朱雀"
,"sushi" : "SUSHI"
,"sujiko" : "すじこ"
,"sushi jiro" : "寿司二郎"
,"suzui narumi" : "鈴井ナルミ"
,"suzuki senpai" : "スズオ"
,"suzuoka chitose" : "鈴岡千歳"
,"suzukake koromo" : ["篠懸ころも", "鈴懸ころも"]
,"suzuka sakito" : "涼加早希兎"
,"suzugami" : "スズガミ"
,"suzukawa rino" : "鈴川梨乃"
,"suzuki akoni" : "鈴月あこに"
,"suzuki address" : "鈴木あどれす"
,"suzuki amaharu" : "涼樹天晴"
,"suzuki isuzu" : "鈴木いすゞ"
,"suzuki otokichi" : "鈴木音吉"
,"suzuki ganma" : ["鈴木がんま", "鈴木銃馬", "鈴木雅洋", "高畠かづを", "今中光太郎"]
,"imanaka koutarou" : ["今中光太郎", "鈴木銃馬", "鈴木がんま", "鈴木雅洋", "高畠かづを"]
,"suzuki gamma" : ["鈴木銃馬", "鈴木がんま", "鈴木雅洋", "高畠かづを", "今中光太郎"]
,"suzuki kimuchi" : "鈴木キムチ"
,"suzuki kyoutarou" : ["鈴木狂太郎", "鈴木恭太郎"]
,"suzuki kokono" : "鈴木玖"
,"suzuki takeo" : "鈴木岳生"
,"suzuki tsuta" : "鈴木ツタ"
,"suzuki torakichi" : "鈴木トラ吉"
,"suzuki nago" : "鈴木和"
,"suzuki shungyou" : "鈴木春暁"
,"suzuki hinomi" : "鈴木ひのみ"
,"suzuki hiromichi" : "鈴木ひろみち"
,"suzuki mira" : ["すずきみら", "鈴木美蘭"]
,"suzuki mey" : "すずきめい"
,"susukumo nagi" : "煤雲なぎ"
,"suzukuri ransei" : "涼栗乱成"
,"suzushiro nazuna" : "蘿蔔なずな"
,"suzudama renri" : "鈴玉レンリ"
,"suzutsuki kiyoto" : "涼月清人"
,"suzutsuki kurara" : "涼月くらら"
,"suzuna aruto" : "鈴名あると"
,"suzunari ichigo" : "鈴鳴いちご"
,"suzune yuuji" : "鈴音ゆうじ"
,"suzune rai" : "鈴根らい"
,"suzunone rena" : "鈴音れな"
,"suzunomoku" : "すずのもく"
,"suzzno yoshito" : "鈴野吉人"
,"suzuhane suzu" : "すずはねすず"
,"suzuhara shino" : "すずはら篠"
,"suzuhira hiro" : "鈴平ひろ"
,"suzumiya kazuki" : "涼宮和貴"
,"suzumushi gyoe" : "鈴虫ぎょえ"
,"jhan g" : "雀二"
,"suzurame" : "スズラメ"
,"suzuri" : "硯"
,"sexyturkey" : "すたーきー"
,"studio sfc" : "スタジオSFC"
,"magurono yukinao" : ["スタンダードアザラシ", "鮪之ゆきなお", "maguro."]
,"zucchini" : "ズッキーニ"
,"zutta" : "Zutta"
,"zutto mae kara darui." : "ずっと前からだるい。"
,"sute" : "すて"
,"sudoh cross" : "須藤くろす"
,"sudou ken" : "須藤謙"
,"sudou hiroshi" : "スドウヒロシ"
,"sudo yumi" : "須藤佑実"
,"sudou ruku" : "須藤るく"
,"sudoo kaoru" : "すどおかおる"
,"suna" : "砂"
,"sunaga kaoru" : "須永かおる"
,"sunagawa tara" : "砂川多良"
,"sunakichi" : "すな吉"
,"sunagimo dx" : "すなぎもDX"
,"suna nezumi" : "すな☆ねずみ"
,"sunaba" : "砂場"
,"sunahama nosame" : "砂浜のさめ"
,"sunaba yuu" : "砂場遊"
,"sunamashi" : "すなまし"
,"sunameri" : "スナメリ"
,"snow" : "スノウ"
,"snowberry" : "スノーベリ"
,"spark utamaro" : "スパークうたまろ"
,"subachi" : "すばち"
,"suhara shiina" : "須原シイナ"
,"subaru" : "SUBARU"
,"spanking samurai" : "スパンキング侍"
,"supika" : "すぴ夏"
,"spiritus tarou" : "スピリタス太郎"
,"supurai" : "すぷらい"
,"subesube manjuu gani" : "滑々饅頭蟹"
,"subesube manjuu gani hogushimi" : "滑々饅頭蟹ほぐしみ"
,"suma yoshihiro" : "須磨ヨシヒロ"
,"sumi" : "すみ"
,"sumisuzu" : "すみすず"
,"sumiso no hito" : "酢味噌の人"
,"sumita kazuasa" : "隅田かずあさ"
,"sumidumi" : "スミヅミ"
,"sumina en" : "澄名エン"
,"sumino yuuji" : "速野悠二"
,"sumihey" : "すみ兵"
,"sumiya" : ["スミヤ", "住屋昭博"]
,"sumiyao" : "すみやお"
,"sumiyoshi" : "すみよし"
,"sumiregawa enikusu" : "菫川エニクス"
,"smilodon" : "スミロドン"
,"sumeragi kohaku" : "すめらぎ琥珀"
,"sumeragi seisuke" : "皇征介"
,"smells like" : "すめるすらいく"
,"sumomo ex" : "すももEX"
,"sumomo kpa" : "李KPA"
,"sumomo pink" : "すももぴんく"
,"surada mami" : "すらだまみ"
,"zurikishi" : "ずり騎士"
,"suruga kuroitsu" : "駿河クロイツ"
,"suruga kreuz" : "駿河クロイツ"
,"suruga rinu" : "駿河りぬ"
,"surumesu" : "スルメス"
,"swakichi" : "すわきち"
,"suwa kunimitsu" : "諏訪クニミツ"
,"suwa moi" : "須和もい"
,"zundarepon" : "ズンダレぽん"
,"zun nyannyan" : "ズンにゃんにゃん"
,"zun-nyannyan" : "ズンにゃんにゃん"
,"seiichiro kawaura" : "川浦誠一郎"
,"seigyoku" : "青玉"
,"seiji" : "正爾"
,"seiju" : "セイジュ"
,"seishoujo" : "聖少女"
,"seishinja" : "精子ンジャ"
,"seito a" : "生徒A"
,"seihoukei" : "せいほうけい"
,"seiya" : "西哉"
,"sayryu" : "性竜"
,"seinto" : "セイント"
,"seuma" : "せうま"
,"seura isago" : "瀬浦沙悟"
,"seijin" : "せーじん"
,"seema" : "せーま"
,"segami daisuke" : "瀬上大輔"
,"sekiguchi hiroki" : "セキグチヒロキ"
,"sekiken" : "セキケン"
,"seki suzume" : "セキスズメ"
,"sekitsui" : "セキツイ"
,"sekine hajime" : "咳寝はじめ"
,"sekiba suguru" : "関場すぐる"
,"sekihara" : "せきはら"
,"sekihan" : "せきはん"
,"sekiya asami" : "関谷あさみ"
,"zekuu tooru" : "是空とおる"
,"seguchi takahiro" : ["瀬口たかひろ", "まついもとき"]
,"sesegawa nako" : "瀬々川なこ"
,"sesena yau" : "せせなやう"
,"seseri ikoi" : "瀬芹いこい"
,"seta aomaru" : "瀬田青丸"
,"sechi" : "せち"
,"sekkei" : "雪景"
,"zettai yarumoni" : "絶対やるもに"
,"setsuna" : "刹奈"
,"setsunai" : "せつない"
,"setsunai porori" : "切内ぽろり"
,"setouchi kurage" : "瀬戸内くらげ"
,"seto kuniaki" : "世戸邦明"
,"seto yuuki" : "世徒ゆうき"
,"seto raio" : "瀬戸らいお"
,"senakagashiri" : "背中が尻"
,"sena chifuyu" : "瀬奈茅冬＊"
,"sena monaco" : ["瀬菜モナコ", "御影甲六"]
,"sena youtarou" : "瀬奈陽太郎"
,"sena rinko" : "瀬名鈴子"
,"senor daietsu" : "セニョール大悦"
,"seneto" : "セネト"
,"senoo hibiteru" : "瀬尾日々照"
,"sebata jun" : "瀬畑純"
,"sepiruth" : "Sepiruth"
,"sevengar" : "せぶんがー"
,"seventh" : "SEVENTH"
,"cevoy" : "せぼい"
,"semine masashige" : "瀬峰正重"
,"seura" : "せゆーら"
,"sella" : "世良"
,"sera" : "世良"
,"serae nohasuta" : "せらえ野蓮太"
,"serakichi." : "世羅吉。"
,"serika" : "セリカ"
,"serikawa kazumi" : "芹川一海"
,"serizawa" : "芹沢"
,"serizawa katsumi" : "芹沢克己"
,"serizawa kaname" : "芹沢かなめ"
,"serizawa yuuji" : "芹沢ゆーじ"
,"serei teru" : "せれいてる"
,"seresu" : "せれす"
,"seres ryu" : "セレス龍"
,"serebi ryousangata" : "セレビィ量産型"
,"zero jirou" : "ぜろじろう"
,"zeros" : "是露巣"
,"zero tanuki" : "零狸"
,"zero no mono" : "ゼロの者"
,"sen" : "SeN"
,"senke kagero" : "千家カゲロー"
,"sengoku-kun" : "戦国くん"
,"sengoku murasaki" : "千石紫"
,"senju rion" : "千樹りおん"
,"sha" : ["千醇", "紗"]
,"senzin" : "せんじん"
,"sensouji kinoto" : "浅草寺きのと"
,"sendaimajin" : "仙台魔人"
,"sentakuki" : "洗濯機"
,"sentape" : "せんたぺ"
,"sendaman" : "センダマン"
,"sentimental hayashi" : "せんちめんたるはやし"
,"sendou kaiko" : "仙藤蚕"
,"sendou hachi" : "仙道八"
,"sendorikun" : ["せんどりくん", "山根正宏"]
,"senno knife" : "千之ナイフ"
,"senbata roh" : "せんばた楼"
,"senbazuru" : "千羽鶴"
,"senbei" : "煎餅"
,"senmu" : "SeNMU"
,"senyuu" : "戦友"
,"zenra" : ["ぜんら", "全裸屋敷"]
,"senrabanshou" : "千羅万象"
,"zenra yashiki" : "全裸屋敷"
,"senryu" : "千竜"
,"soi" : "Soi"
,"soine" : "そい寝"
,"sou" : "双"
,"sou akiko" : "奏亜希子"
,"souijou" : "走為上"
,"souichirou" : "蒼一郎"
,"zoukibayashi" : ["臓器林", "ぞうきばやし"]
,"souko souji" : "倉子倉次"
,"souji hougu" : "掃除朋具"
,"sowjun" : "宗純"
,"souseki" : "層積"
,"futase hijiri" : "双瀬聖"
,"sousen" : "蒼泉"
,"sousouman" : "草草饅"
,"souda gumi" : "創田ぐみ"
,"souda banira" : "そうだばにら"
,"souda mikan" : "左右田柑"
,"sou dengaku" : ["そう!でんがく", "そうでんがく"]
,"souma tatsuya" : ["そうま竜也", "L.ライム"]
,"soumi riri" : "蒼巳莉々"
,"sou megumi" : "そうめぐみ"
,"souryuu" : "双龍"
,"so-ma" : "そーま"
,"sogabe toshinori" : ["羽田としのり", "そがべ利典", "宗我部としのり"]
,"sokumaru" : "即丸"
,"sozatsu nae" : "粗雑那絵"
,"sody" : "Sody"
,"sonozaki souichi" : "園崎宗一"
,"sonoda kenichi" : "園田健一"
,"sonoda juka" : "園田樹花"
,"sonobe kazuaki" : "園部一晶"
,"soborogo" : "ソボロゴ"
,"some" : "ソメ"
,"somei kiku" : "染井菊"
,"someoka yusura" : ["染岡ゆすら", "PINK☆DORAGON"]
,"somejima" : "ソメジマ"
,"someya miho" : "染谷美帆"
,"soyoki" : "そよき"
,"soyosoyo" : ["そよそよ", "SOYO2", "SOYOSOYO"]
,"sora" : "空"
,"sorai shinya" : "空維深夜"
,"sorairo kanata" : "空色かなた"
,"sorairo tsukiiro" : "空色月色"
,"sorairo len" : "空色れん"
,"sorase haruyuki" : "天瀬晴之"
,"sorato" : "そらと"
,"sorano suzume" : "天ノ雀"
,"sorano tsubame" : "そらのつばめ"
,"tsubame sorano" : "そらのつばめ"
,"sora mame" : "そら豆"
,"soramame" : "そら豆"
,"soramame-san" : "そら豆さん"
,"solar milk" : "そらみる"
,"soramoti" : "そらモチ"
,"soramoto koh" : "空本光王"
,"sorimura youji" : ["反村幼児", "そりむらようじ"]
,"solopipb" : "ソロピップB"
,"solomon k" : "そろもんK"
,"son gohan" : "孫御飯"
,"zonda" : "ぞんだ"
,"son yohsyu" : "孫陽州"
,"dark jimmy" : "DARK JIMMY"
,"yuma" : "ダークネスゆま"
,"darkness yuma" : "ダークネスゆま"
,"darkmaya" : "Darkmaya"
,"dirty okamoto" : "ダーティ岡本"
,"dirty matsumoto" : "ダーティ松本"
,"dai 25 hohei shidan" : "第25歩兵師団"
,"daiaru" : "ダイアル"
,"taiga rei" : "太賀零"
,"daiginjou poehe" : "大吟醸ぽえへ"
,"taikuu jikan" : "滞空時間"
,"daigo" : "DAIGO"
,"taikou" : "タイコウ"
,"daiji" : ["だいじ", "大慈"]
,"armadillo daiji" : "大慈"
,"taishow tanaka" : "たいしょう田中"
,"taishinkokuoh anton" : "大秦国王安敦"
,"daizu" : "大豆"
,"daisukitsune" : "だいすきつね"
,"daizusanchi" : "大豆産地"
,"daidai" : "橙"
,"taichi" : "対地"
,"daichi" : "だいち"
,"dainakishin" : "ダイナキシン"
,"dynamite moca" : "ダイナマイトmoca"
,"dining" : "ダイニング"
,"daifuku keiji" : "大福けーじ"
,"typehatena" : "たいぷはてな"
,"taihei tengoku" : "太平天極"
,"daibokki hana" : "大孛輝＊はな"
,"daimon tennyo" : "ダイモーン天女"
,"taira kouichirou" : "平光一郎"
,"taira kosaka" : "平こさか"
,"taira tsukune" : "平つくね"
,"taira hajime" : "たいらはじめ"
,"tairame" : "タイラメ"
,"dairoku tenmaou great" : "第六天魔王グレート"
,"yamato kuroko" : "大和黒子"
,"taura kouji" : "田浦こうじ"
,"taono kinoko" : "汰尾乃きのこ"
,"takaishi fuu" : "高石ふう"
,"takai biki" : "高井美姫"
,"takai yuito" : "高井唯人"
,"takaetsu" : "タカエツ"
,"takao ukyou" : "高雄右京"
,"takaoka motofumi" : "高岡基文"
,"takao yori" : "高尾鷹浬"
,"takaki satoru" : "高木さとる"
,"takagi makoto" : "高木誠"
,"takaku toshihiko" : "高久としひこ"
,"takasaki akira" : ["高崎あきら", "高崎明"]
,"takasaki karin" : "高崎かりん"
,"takasaki keisuke" : "高咲圭介"
,"takasaki takemaru" : "高崎たけまる"
,"takasaki maco" : "高崎まこ"
,"takasaki ryuu" : "高崎隆"
,"takashi" : "「タカシ」"
,"tk4" : "たかし"
,"dagasi" : "DAGASI"
,"dagashi" : "駄菓子"
,"takashita takashi" : "たかしたたかし"
,"takashina asahi" : "たかしな浅妃"
,"takashino rami" : "高篠らみ"
,"takashima" : "田貸魔"
,"takashiro go-ya" : "高城ごーや"
,"takashiro syouseki" : "高代硝石"
,"takasugi kou" : "タカスギコウ"
,"takase nanao" : "高瀬七緒"
,"takase muh" : "高瀬むぅ"
,"takase yuu" : "鷹勢優"
,"takada kouichi" : "貴田光一"
,"takadanobaba" : "高田馬場"
,"takada bambi" : "高田バンビ"
,"takatsu" : "高津"
,"takatsuka sanori" : "高塚さのり"
,"takatsuki ichi" : "タカツキイチ"
,"takatsuki shuuya" : "高月柊也"
,"takatsuki toumei" : "高槻遠名"
,"takato suzunosuke" : "たかとうすずのすけ"
,"takatou rui" : "高遠るい"
,"takato kurosuke" : "高遠くろ助"
,"takatoma takama" : "たかとまたかま"
,"takatori umi" : "鷹鳥海"
,"takanae kyourin" : ["高苗京鈴", "高苗床"]
,"takanaga kouhei" : "高永浩平"
,"takanashi ai" : "高梨藍"
,"takanashi shiro" : "高梨志郎"
,"takanashi miyara" : "鳥遊里都"
,"takanashi ringo" : "高梨りんご"
,"takanashi rei" : "小鳥遊レイ"
,"takanabe chitose" : "高鍋千歳"
,"takana yu-ki" : "鷹那優輝"
,"takane nohana" : "たかねのはな"
,"takano uaka" : "たかのうあか"
,"takano kou" : "高野昴"
,"takano saku" : "嵩乃朔"
,"takanotume" : "たかのつめ"
,"takano masayuki" : "高野真之"
,"takano miki" : "高野美紀"
,"takano yuu" : "タカノユウ"
,"takano yuki" : ["たかのゆき", "鷹乃ゆき"]
,"takahagi kemono" : "タカハギケモノ"
,"takahashi asuka" : ["高橋明日香", "ASUKA"]
,"takahashi kaho" : "高橋果甫"
,"takahashi kurumi" : ["高橋くるみ", "ジェームスほたて", "小暮マリコ"]
,"takahashi kojika" : "高橋こじか"
,"takahashi kobato" : "高橋こばと"
,"takahashi saeko" : "高橋冴虎"
,"takahashi takashi" : "高梁たかし"
,"takahashi tetsuya" : "高橋哲哉"
,"takahashi naoki" : ["高橋ナオキ", "高橋直樹"]
,"takahashi note" : "タカハシノヲト"
,"takahashi mako" : "タカハシマコ"
,"takahashi-ya takabee" : "高橋屋たかべえ"
,"takahashiya takabee" : "高橋屋たかべえ"
,"takahashi rukuna" : "タカハシルクナ"
,"takahama kan" : "高浜寛"
,"takahama tarou" : "高浜太郎"
,"takaba momo" : "高羽もも"
,"takaharu" : "タカハル"
,"takahan" : "タカはん"
,"takapi" : "たかぴ"
,"takahiko" : "たかひこ"
,"takahisa kunihiro" : "鷹久邦弘"
,"takahiro" : "タカヒロ"
,"takafumi" : "たかふみ"
,"taka pon" : "タカ☆ぽん"
,"takamasu komori" : "高増こもり"
,"takamatu makoto" : "高松誠人"
,"takamatsu makoto" : "高松誠人"
,"takamaru" : "鷹丸"
,"takamichi" : ["たかみち", "貴道"]
,"takamiya hairi" : "高宮はいり"
,"takamura yoshiyasu" : "篁よしやす"
,"takamura wamu" : ["高村わむ", "wamwam"]
,"tagame gengoroh" : "田亀源五郎"
,"takamori yu" : "高守勇羽"
,"takayaki" : "たかやKi"
,"takayanagi katsuya" : "高柳カツヤ"
,"takayama chihiro" : "高山千尋"
,"takayama nemuko" : "高山ねむ子"
,"takayamanon" : "タカヤマノン"
,"takayuki hiyori" : "宇行日和"
,"takayoshi" : "たかよし"
,"takayomi" : "たかよみ"
,"takara akihito" : "宝あきひと"
,"takarai minamo" : "たからいみなも"
,"takara kosuke" : "宝耕介"
,"takarama otoko" : "高良間男"
,"taki keisuke" : "滝恵介"
,"takizawa kaname" : "滝沢要"
,"takizawa naia" : "滝沢ナイア"
,"takizawa hiroyuki" : "滝沢ひろゆき"
,"takishima asaka" : "滝島朝香"
,"takitomo tsuguo" : "滝智次朗"
,"taki hajime" : "瀧ハジメ"
,"taki minashika" : "滝美梨香"
,"takimoto panko" : "滝本ぱんこ"
,"takimoto yukari" : "瀧本ゆかり"
,"taki re-ki" : "滝れーき"
,"taku" : "タク"
,"ohtomo takuji" : ["たくじ", "大友卓二"]
,"takutaku" : "たくたく"
,"taguchi makoto" : "田口まこと"
,"taguchi masayuki" : "田口正雪"
,"taguchi monyata" : "田口もにゃ太"
,"takuto" : "拓人"
,"takunomi" : "たくのみ"
,"takuma tomomasa" : "たくま朋正"
,"takumi-kouta" : "たくみこうた"
,"takumi daisuke" : "匠大輔"
,"takumi na muchi" : ["たくみなむち", "たくみな無知"]
,"takura mahiro" : "田倉まひろ"
,"takurou" : "たくろう"
,"takurowo" : "タクロヲ"
,"takuwan" : "たくわん"
,"take" : ["タケ", "TAKE", "丈"]
,"takeaki gaku" : "たけあき学"
,"takei ooki" : "タケイオーキ"
,"takei shikin" : "武居糸錦"
,"takeichi okome" : "竹壱おこめ"
,"takei tsukasa" : "タケイツカサ"
,"kaduchi" : ["武内一真", "KADUCHI", "カヅチ"]
,"takeuchi maki" : "武内真紀"
,"takeuchi reona" : ["竹内冷於奈", "竹内玲於奈"]
,"takekawa ao" : "武川あお"
,"takekawa sin" : "武川慎"
,"takeki michiaki" : "武輝導明"
,"takeshi" : ["Takeshi", "たけし"]
,"takeshisu" : "タケシス"
,"takeshita kenjirou" : ["竹下けんじろう", "竹下堅次郎"]
,"takezo" : "たけぞ→"
,"takeda aranobu" : "武田あらのぶ"
,"takedake" : "タケダケ"
,"takeda sora" : "武田空"
,"takeda hiromitsu" : "武田弘光"
,"takechi" : "たけち"
,"takechiyo" : "たけちよ"
,"taketora suzume" : "竹虎スズメ"
,"takenouchi suama" : "竹之内すあま"
,"takenoko seijin" : "たけのこ星人"
,"takebayashi takeshi" : "武林武士"
,"takepon" : "たけぽん"
,"takemasa takeshi" : "武将武"
,"takemura sesshu" : "竹村雪秀"
,"takemori shintarou" : "竹森真太郎"
,"takeyuu" : "タケユウ"
,"takeru" : "武流"
,"takewakamaru" : ["武若丸", "ののるみあ"]
,"tako" : "朶子"
,"dakouin saburou" : "蛇光院三郎"
,"tako kuboh" : "蛸公方"
,"takota konu" : "蛸田こぬ"
,"tago bow" : "たご坊"
,"takoyaki" : "たこ焼き"
,"takoyaki yoshi" : "たこやきよし"
,"takoyaki rock" : "タコヤキロック"
,"takorina gahaku" : "たこりーな画伯"
,"taji" : "たじ"
,"tajima haru" : "田嶋はる"
,"tajima yasue" : "田嶋安恵"
,"tajima yuki" : "田嶋有紀"
,"tajima ria" : "立嶋りあ"
,"tajima ryuushi" : "タジマ粒子"
,"tasuro kuzuha" : "＋路樟葉"
,"tada atsunori" : "ただ☆あつのり"
,"tada isamu" : "多田イサム"
,"tatakita" : "たたきた"
,"tadano akira" : "只野あきら"
,"tadano kagekichi" : "唯野影吉"
,"tadano myoushi" : "忠之みょうし"
,"tadano mezashi" : "只野めざし"
,"tatami sanjou" : "畳三畳"
,"tachi iyashi" : "館いやし"
,"kan iyashi" : "館いやし"
,"tachikaze shuusui" : "太刀風秋水"
,"tachikawa negoro" : "立川ねごろ"
,"tachikawa ritsuka" : "立川立夏"
,"tachi tsubaki" : "太刀椿"
,"tachibana" : "たちばな"
,"tachibana atsushi" : "橘敦司"
,"tachibana aruto" : "橘アルト"
,"tachibana itsuki" : "橘いつき"
,"tachibana omina" : "立花オミナ"
,"tachibana kai" : "橘海衣"
,"tachibana kaoru" : ["たちばな薫", "立花かおる", "橘薫"]
,"tachibana kou" : "橘こう"
,"tachibana surimu" : "橘すりむ"
,"tachibana seven" : "橘セブン"
,"tachibana takashi" : "橘孝志"
,"tachibana chata" : "橘チャタ"
,"tachibana toshihiro" : "たちばなとしひろ"
,"tachibana naoki" : "断華ナオキ"
,"tachibana nagon" : "立花なごん"
,"tachibana momomi" : "橘桃生"
,"tachibana momoya" : "達華モモヤ"
,"tachibana yui" : "橘由衣"
,"tachibana yuu" : ["たちばなゆう", "橘由宇"]
,"tachibana riuta" : "橘りうた"
,"tachibana rikka" : "橘立夏"
,"tachibana ryou" : "橘亮"
,"tachibana ley" : "橘怜"
,"tadima yoshikadu" : "たぢまよしかづ"
,"nagareboshi" : ["たつか", "ながれぼし"]
,"tatsukawa shin" : "龍河しん"
,"tatsuki ruu" : "樹るう"
,"dakkoku jiro" : "脱穀次郎"
,"dajji fukai" : "ダッジ深井"
,"dasshifunnyuu" : "脱脂粉乳"
,"dash" : "DASH"
,"dush" : "Dush"
,"tatsuse yumino" : "龍瀬弓乃"
,"tatsu tairagi" : "燵成"
,"tatteinu" : "たってぃぬ"
,"tatsunami youtoku" : "辰波要徳"
,"tatsuneko" : "たつねこ"
,"tappa suzuki" : "タッパー鈴木"
,"tap" : "たっぷ"
,"tatsumi" : "巽"
,"tatsumi hiroshi" : "たつみひろし"
,"tatsumi yume" : "辰巳ゆめ"
,"tatsuya" : ["tatsuya", "立つ屋"]
,"tatsuyoshi" : "たつよし"
,"tatekawa mako" : "館川まこ"
,"tateno makoto" : "立野真琴"
,"tateha" : "立羽"
,"date fujiaki" : ["伊達藤明", "伊達藤晃"]
,"tateyama keita" : "館山けーた"
,"date ren" : "伊達レン"
,"tanaka aji" : "田中あじ"
,"tanaka-ex" : "田中エキス"
,"tanaka ginji" : "田中銀二"
,"tanaka kouji" : "タナカ☆コージ"
,"tanaka juice" : "田中十酢"
,"tanaka shoutarou" : "田中松太郎"
,"tanaka seiji" : "田中誠司"
,"tanaka decilitre" : "田中竕"
,"kh" : "たなかななたか"
,"tanaka naburu" : ["田中なぶる", "たなかなぶる", "NABURU"]
,"tanaka hiroaki" : ["田中ひろあき", "た中ひろあ機"]
,"tanaka hiroto" : "田中浩人"
,"tanaka hiromi" : "田中ヒロミ"
,"tanaka penta" : "田中ぺん太"
,"tanaka masato" : ["田中雅人", "南京まーちゃん"]
,"tanaka mamoru" : "田中まもる"
,"tanaka yutaka" : "田中ユタカ"
,"tanaka rui" : "田中るい"
,"tanaha" : "棚葉"
,"tanaharari ura" : "たなはらりうら"
,"tanabe kyou" : ["田辺京", "田部京"]
,"tanabe yuuki" : "田辺優綺"
,"taniuchi kazuki" : ["谷内一生", "谷内和生"]
,"taniguchi kei" : "谷口敬"
,"taniguchi-san" : "谷口さん"
,"taniguchi daisuke" : "谷口大介"
,"taniguchi douji" : ["たにぐち童子", "谷口童子"]
,"tanizaki nao" : "谷咲ナオ"
,"tanizakura shidare" : "谷桜しだれ"
,"tanishi" : "たにし"
,"tanihara natsuki" : "たにはらなつき"
,"tanimachi maid" : "谷町めいど"
,"danimaru" : "だにまる"
,"tanimura hitoshi" : "谷村ひとし"
,"tanimura marika" : "谷村まりか"
,"taniyama-san" : "谷山さん"
,"tanukimaso" : "たぬきマソ"
,"tanufude" : "たぬふで"
,"tanuma yuuichirou" : "田沼雄一郎"
,"taneichi" : "たねいち"
,"tanenashi kuribo" : "たねなしくりぼ"
,"tanenashi miya" : "種梨みや"
,"tanohito" : "たのひと"
,"taba" : "束"
,"tahara sho-ichi" : "田原勝一"
,"tabigarasu" : "旅烏"
,"tabiguchi kouji" : "旅口工路"
,"tabito kazuhiro" : "旅人和弘"
,"daphnia" : "DAPHNIA"
,"tablis" : "タブリス"
,"double deck" : "だぶるでっく"
,"tabe koji" : "たべ・こーじ"
,"tapo" : "たぽ"
,"tama" : ["タ☆マ", "TAMA"]
,"tamai shikine" : "タマイシキネ"
,"tamaoki benkyo" : "玉置勉強"
,"tamagawa yukimaru" : "多摩川雪丸"
,"tamaki kaoru" : "環かおる"
,"tamaki kurou" : ["環九朗", "鐶九朗"]
,"tamaki satoshi" : ["たまき聖", "たまきさとし"]
,"tamaki tamao" : "玉木たまお"
,"tamakichi. jirou" : "たまきち。次郎"
,"tamaki nozomu" : "環望"
,"tamaki maki" : ["たまきまき", "蒔田真記"]
,"tamaki misao" : "たまきみさお"
,"tamaki yayoi" : "珠樹やよい"
,"tamaquis wren" : "環レン"
,"tamakin" : "TAMAKIN"
,"tamago kake gohan" : "たまごかけごはん"
,"tamakoshi hiroyuki" : "玉越博幸"
,"tamagoro" : "たまごろー"
,"tamasaka miki" : "稀未希"
,"tamazatou" : "玉砂糖"
,"tamatanuki" : "たまたぬき"
,"tamada heijun" : "玉田平準"
,"tamachi yuki" : "たまちゆき"
,"tamatsuyada" : "たまつやだ"
,"tamanoi iroha" : "玉の井いろは"
,"tamanoi peromekuri" : "玉乃井ぺろめくり"
,"tamano kedama" : "玉之けだま"
,"tamanosuke" : "たまのすけ"
,"tama noboru" : "たまのぼる"
,"yamashita woory" : ["多摩のりひこ", "うり", "山下うり"]
,"tamahagane" : "たまはがね"
,"tamahara takapon" : "たまはらたかぽん"
,"tamabi" : "たまび"
,"tamayura banko" : "玉ぼん"
,"tamaru hiroshi" : "田丸浩史"
,"damii" : "駄みぃ"
,"dummy kaiko" : "ダミィ蚕"
,"tamikusa namida" : "民草涙"
,"tamima" : "たみま"
,"tamiya akito" : "田宮秋人"
,"dam" : "だむ"
,"tam-u" : "Tam-U"
,"tamura asami" : "田村あさみ"
,"tamura junpei" : "田村純兵"
,"damekama" : "だめかま"
,"tamenaga yuu" : "爲永ゆう"
,"tamori tadaji" : "たもりただぢ"
,"tamon" : "たもん"
,"tamon ketsuyuki" : ["多門結之", "結之"]
,"tamon sakaki" : "多紋サカキ"
,"tayama mamito" : "田山真美人"
,"tarakan" : "たらかん"
,"darabuchi" : "だらぶち"
,"tarisukawa" : "足履須川"
,"taryl." : "たりる。"
,"dulce-q" : "ダルシー研Q所"
,"tarumoto hajime" : "樽本一"
,"taremedon" : "たれめどん"
,"taro" : "TARO"
,"taro oimo" : ["たろおいも", "田町三作"]
,"taropun" : "たろプン"
,"tawara hiryuu" : "俵緋龍"
,"tan" : "TAN"
,"dan" : "ダンdann"
,"dangan" : "DANGAN"
,"dangan sanshiroh" : "弾丸三四郎"
,"tange suzuki" : "丹下スズキ"
,"tanken harahara" : "探検はらはら"
,"tansan alkali" : "単産アルカリ"
,"tansuiken" : "淡水犬"
,"dance a key" : "DANCE英気"
,"tantan" : "たんたん"
,"danchino" : "団地の"
,"dancho" : "だんちょ"
,"dancyo" : "だんちょ"
,"tantsubo kozou" : "たんつぼ小僧"
,"dantetsu" : ["断鉄", "干支門三十四", "〇タ"]
,"tanno ran" : "タンノらん"
,"tanpaku" : "たんぱく"
,"danbo" : "ダンボ"
,"jii" : "ぢぃ"
,"dzii" : "ぢぃ"
,"cheewts" : "ちいうつ"
,"chiizu ore" : "ちぃずオレ"
,"diisuke" : "ヂイスケ"
,"chi-ran" : "CHI-RAN"
,"chiune" : "ちうね"
,"chieko" : "ちえこ"
,"chiebii gyangu" : "ちぇびい・ぎゃんぐ"
,"chiebukuro ichiban" : "知恵袋一番"
,"cherry" : "CHERRY"
,"cherry monkey" : ["チェリーモンキー", "チェリー・モンキー"]
,"cello" : "ちぇろ"
,"chika" : "千翔"
,"chikaishi masashi" : ["近石まさし", "近石雅史"]
,"chikasato michiru" : "近里みちる"
,"chika mizuha" : ["ちかみずは", "ちかみづは"]
,"chikaya" : "チカ也"
,"chikara kutsushita" : "チカラクツシタ"
,"chikigai" : "血鬼骸"
,"chikiko" : "チキコ"
,"chicken" : "チキン"
,"chikin katsu" : "恥菌カツ"
,"chiku" : "築"
,"tigusa suzume" : "千草雀"
,"chiguchi miri" : "チグチミリ"
,"chikubi" : "ちくび"
,"chikuma sara" : "ちくまサラ"
,"chikuwa." : "ちくわ。"
,"tiko" : "Tiko"
,"chikotam" : "ちこたむ"
,"chisato" : "チサト"
,"chizu" : "チズ"
,"chisunosuke" : "ちすの助"
,"chise toshiaki" : "千勢賢秋"
,"chita arihiro" : "知多有洋"
,"chitake hidemi" : "千岳ひでみ"
,"ditama bow" : ["ぢたま(某)", "ぢたま某"]
,"titiduki" : "チチヅキ"
,"chichizuki" : "チチヅキ"
,"chitose piyoko" : "千歳ぴよこ"
,"chitose rin" : "ちとせ凛"
,"chidorinu" : "チドリヌ"
,"chinatsu yamahito" : "千夏山人"
,"chinen hiroyuki" : "ちねんひろゆき"
,"chipa" : "薙派"
,"chiba dirou" : ["ちば・ぢろう", "千葉治郎"]
,"chiba shuusaku" : ["千葉秀作", "千葉○作"]
,"chiba takerou" : "千葉毅郎"
,"chiba tetsutarou" : "千葉哲太郎"
,"chiba toshirou" : "チバトシロウ"
,"chihana kiha" : "千花キハ"
,"chibigon" : "チビゴン"
,"chibinon" : "チビのん☆"
,"chihiro" : "ちひろ"
,"chifuyu" : "ちふゆ"
,"chifuyu appleton" : "千冬アップルトン"
,"chipokan" : ["CHIPOKAN", "CHIPOKN", "チポカン"]
,"chimaro" : "ちまろ"
,"chimi" : "ちみチャンガ"
,"chimi morio" : ["ちみもりを", "高屋良樹"]
,"chimiya" : "ちみや"
,"chimeda" : "ちめだ"
,"chimosaku" : "ちもさく"
,"chimoto chie" : "ちもとちえ"
,"church" : "ちゃーち"
,"cham22" : "チャームさん"
,"charie" : "ちゃーりー"
,"charlie nishinaka" : "チャーリーにしなか"
,"china" : "茶否"
,"chairo" : "チャイロ"
,"chagata" : "ちゃがた"
,"chagata yuu" : "ちゃがた悠"
,"tyagama" : "茶釜"
,"chagama tarou" : "茶釜太郎"
,"chakura kazuhiko" : "茶倉和彦"
,"chako" : ["チャコ", "CHACO"]
,"chasaracha" : "茶皿茶"
,"chado" : "チャダ"
,"chataro" : "ちゃたろー"
,"chachaki noriyuki" : "茶々木紀之"
,"chacharan" : "茶々らん"
,"chano mina" : "茶野みな"
,"chaba" : "茶葉"
,"chabashira" : "茶柱"
,"chabashira tatsukichi" : ["茶柱立吉", "えのきの子"]
,"vae" : "茶畑ヴァエ"
,"chapel" : "ちゃ☆ぺる"
,"chabo" : ["茶鳥", "CHABO"]
,"cha bou" : "茶坊"
,"chiyami" : "ちやみ"
,"charu" : "茶琉"
,"chanpon miyabi" : "ちゃんぽん雅"
,"chiyu" : "ちゆ"
,"chuuou higashiguchi" : "中央東口"
,"chuuka naruto" : "中華なると"
,"chuushin kuranosuke" : "忠臣蔵之介"
,"chuunen" : "中年"
,"tulip" : "ちゅーりっふ。"
,"tyuda" : "ちゅだ"
,"chupimaro" : "ちゅぴまろ"
,"chunko" : "ちゅんこ"
,"chunrouzan" : "春籠漸"
,"choipiro" : "ちょいぴろ"
,"chougoukin" : "兆豪筋"
,"choujigen kurumi" : "超次元来美"
,"choujirooo" : "超ジロー"
,"chouzetsu bishoujo mine" : "超絶美少女mine"
,"chouzetsu yarou" : "超絶野朗"
,"chouchin ankou" : ["提灯暗光", "ちょうちんあんこう"]
,"choudenji koitarou" : "超電磁☆恋太郎"
,"chouno shibuki" : "蝶野飛沫"
,"chono shibuki" : "蝶野飛沫"
,"chouya waneko" : "蝶屋わねこ"
,"chiyoki" : "千代鬼"
,"choco" : "CHOCO"
,"choco coronet" : "チョココロネット"
,"choco dice" : "ちょこだいす"
,"choco-chip" : "choco chip"
,"choco pahe" : "チョコぱへ"
,"chocomint" : "ちょこみんと"
,"chozu." : "ちょず。"
,"cyocyo" : "ちょちょ"
,"chocho" : "ちょちょ"
,"chobipero" : "ちょびぺろ"
,"choma" : "CHOMA"
,"chomoyama" : "ちょも山"
,"mokki" : "ちょりもっき"
,"dyon" : "ぢょん"
,"chiri" : "ちり"
,"chilitan" : "ちりたん"
,"chirinu iroha" : "ちりぬいろは"
,"chilt" : "ちると"
,"chirumakuro" : "ちるまくろ"
,"chiro" : "CHIRO"
,"tirotata" : "ちろたた"
,"chirota rochi" : "チロ田ろち"
,"chirorian" : ["ちろりあん", "ちろり庵"]
,"chin" : "Chin"
,"chinjao roosu" : "ちんじゃおろおす"
,"chinzurena" : "ちんずりーな"
,"chin tokusyu" : "珍・特集"
,"chimple hotter" : "チンプル堀田"
,"chinbotsu" : "沈没"
,"chinyoko" : "ちんよこ"
,"zhen lu" : "珍緑"
,"tsuikanban" : "堆間板"
,"tsuka" : "つか"
,"tsukako" : ["つかこ", "秋奈つかこ"]
,"tsukasa jun" : "司淳"
,"tsukasa ningyou" : "司人形"
,"tsukasa yuuki" : "司ゆうき"
,"yuuki tsukasa" : "結城つかさ"
,"tsukasawa" : "塚沢"
,"tsukamoto takashi" : "つかもとたかし"
,"tsuka motomasa" : "津過元正"
,"tsukamoto miei" : "塚本ミエイ"
,"tukamori syuuji" : ["ツカモリシュウジ", "塚守宗士"]
,"tsukioka reitarou" : "月岡麗太朗"
,"tsukigami hiroshi" : "月上宏"
,"tsukigime jin" : "月極仁"
,"tukisiro saya" : "月白沙耶"
,"tsukitokage" : "月蜥蜴"
,"tsukinami kousuke" : "月並甲介"
,"tsukineko" : "月猫"
,"tsuki neko" : "月猫"
,"tsukino jyogi" : "月野定規"
,"tukinowagamo" : "月ノ輪ガモ"
,"tukinon" : "月音"
,"tukimi daifuku" : "月見大福"
,"tsukimimumi" : "つきみむみ"
,"tsukimoto kizuki" : "月本築希"
,"tsukimori izumi" : "月森泉"
,"tsukimori masato" : "月森雅十"
,"tsukiyoshi hiroki" : "月吉ヒロキ"
,"kanzaki maguro" : ["ツキリラン", "潤咲まぐろ"]
,"tsukiwani" : "月わに"
,"tsukushino makoto" : "つくしの真琴"
,"tsukushi haru" : "筑紫はる"
,"tksn" : "つくすん"
,"tsukudani" : "佃煮"
,"tsukuha" : "つくは"
,"tsugumi suzuma" : "亜美寿真"
,"tsugumi nagisa" : "ツグミ渚"
,"tukumo keiichi" : "九十九K1"
,"tsukumo gou" : "つくも号"
,"tsukumo nikyu" : "九十九弐級"
,"tsukuyomi sazin" : "月読さじん"
,"tsukuru" : "作"
,"tsuge yasuna" : "つげ安奈"
,"tsujikaze" : "辻風"
,"footaro" : "辻風太郎"
,"tsujisaki sou" : "辻崎そう"
,"tsuji santa" : "津路参汰"
,"tsujimori kuniwo" : "つじもりくにを"
,"dusu" : "づす"
,"zutako" : "づ蛸"
,"tsuda nanafushi" : "津田七節"
,"tsutaya honmirin" : "蔦屋ほんみりん"
,"tsuchinoko" : "ツチノコ"
,"tsuchinoshita kaeru" : "土ノ下かえる"
,"vuttya" : "ヴッチャ"
,"tsuzuki kazuhiko" : "都築和彦"
,"tsuzuki masaki" : "都築真紀"
,"tsuduki mayoi" : "ツヅキ真宵"
,"tsuzuki mayoi" : "ツヅキ真宵"
,"tsuttsu" : "つっつ"
,"tsutsumi" : "包"
,"tsutsumi akari" : ["つつみあかり", "凶月昇"]
,"tsutsumori" : "筒森"
,"tsuzuri" : "綴り"
,"tsunakama" : "ツナかま"
,"tsunashima shirou" : "綱島志朗"
,"tsunekawa inumaru" : "雅川犬丸"
,"tsuneyoshi" : "つねよし"
,"tsune yoshi" : "常好し"
,"tsunosign" : "角Sign"
,"tsunoame kazuya" : "角雨和八"
,"tsunomiya rakuko" : "都宮らくこ"
,"tsubaki jushirou" : "椿十四郎"
,"tsubakiyama parry" : "椿山パリィ"
,"tsubakiya meguru" : ["椿屋めぐる", "中村モリス"]
,"tsubasa" : "TSUBASA"
,"naoto tsuburaya" : ["円谷直人", "円谷なおと", "つぶらやなおと"]
,"tsumanitaniokaru" : "妻三谷丘流"
,"tsumugi kyuuta" : "紬きゅうた"
,"tsumetoro" : "つめとろ"
,"tsumori azr minato" : "津森(AZR)みなと"
,"tsuyatsuya" : "艶々"
,"tsuyuki" : "津雪"
,"turiganesou" : "つりがねそう"
,"tsuru" : "鶴"
,"tsurui" : "鶴井"
,"tsuruomi" : "つるおみ"
,"tsurugi ichiro" : "鶴来いちろ"
,"tsurugi kai" : "剣解"
,"tsurugi hagane" : "蔓木鋼音"
,"tsurugi hiryuu" : "つるぎ飛竜"
,"tsurugi motoaki" : "つるぎ基明"
,"tsurusaki takahiro" : "鶴崎貴大"
,"tsuruta kenji" : "鶴田謙二"
,"tsuruta bungaku" : "鶴田文学"
,"tsurunaga ikuo" : "鶴永いくお"
,"tsuruhashi tamazo" : "鶴橋タマゾー"
,"tsurubami roku" : "つるばみ禄"
,"tsurumaki six" : "鶴巻Ⅵ世"
,"tsurumame" : "ツルマメ"
,"tsuruma megumi" : ["つるまめぐみ", "鶴間恵"]
,"tsuruyama mito" : "鶴山ミト"
,"ttuunn" : "つん"
,"tsun" : "つん"
,"d.p" : "D.P"
,"de" : "DE"
,"dha" : "DHA"
,"tm" : "TM"
,"deep purple 72" : ["深紫'72", "深紫’72"]
,"deep valley" : ["ディープバレー", "グレートキャニオン"]
,"t.fumiya" : "T・郁弥"
,"tearontaron" : "てぃーろんたろん"
,"teiou keikaku" : "帝王計画"
,"teika nou" : "ていか脳"
,"thikiso takeda" : "ティキソー竹田"
,"teiku" : "ていく"
,"dgu" : "ディグ"
,"teikuuhikou" : "低空飛行"
,"digdug" : "DigDug"
,"dkdkdkdondondon" : "でぃけぃ"
,"distance" : "DISTANCE"
,"deizu nin" : ["出井州忍", "谷間夢路"]
,"dikk0" : "dikko"
,"dpc" : "デイノジ"
,"dhibi" : "ディビ"
,"tima" : "ティマ"
,"dhimetoro" : "ディメトロ"
,"tyranu" : "ティラヌー"
,"dylan kyouju" : "ディラン教授"
,"tail-gun" : "帝留丸"
,"till yoshi" : "てぃるよし"
,"dingle" : "ディングル"
,"date" : "DATE"
,"tekuteku" : "てくてく"
,"decosuke" : "デコスケ"
,"dekosuke 18gou" : "デコ助18号"
,"dekosen takuji" : "デコセンタクジ"
,"dekochin hammer" : "でこちんハンマー"
,"tekorun" : "てこるん"
,"teshigawara kosuke" : "勅使河原小助"
,"deshima shin" : "出縞臣"
,"testa" : "てすた"
,"death metal" : "死金属"
,"tes-mel" : "tes_mel"
,"tetsu" : "てつ"
,"tetsuo akira" : "鉄雄アキラ"
,"tekkannon chiya" : "鉄観音千夜"
,"tetsukui" : "鐵喰"
,"tekko" : "てっこ"
,"tetsuko" : "てつこ"
,"tetsujoumou akira" : "鉄条網アキラ"
,"tetujin momoko" : "鉄人桃子"
,"detchi" : "でっち"
,"tecchan" : "てっちゃん"
,"tetsuna" : "テツナ"
,"tetsunohiji" : "てつのひじ"
,"tetubuta" : "鉄豚"
,"toumasu" : "鉄巻とーます"
,"tetsuyama kaya" : "鉄山かや"
,"tetsuwan woopie" : "鉄腕うーぴー"
,"teterun" : "ててるん"
,"tetora" : "てとら"
,"tetorapotto" : "てとらぽっと"
,"tetramax" : "てとらまっくす"
,"tebasaki chikin" : "手羽咲ちきん"
,"deburasu" : "でぶらす"
,"tefun" : "てふん"
,"demio" : "デミオ"
,"tem10" : "Tem10"
,"deme" : "DEME"
,"duke" : "デューク"
,"deyuyama" : "でゆ山"
,"tera" : "帝羅"
,"derauea" : "でらうえあ"
,"terajima kon" : "寺島紺"
,"terasu mc" : "テラスMC"
,"terada ochiko" : "寺田落子"
,"terada katsuya" : "寺田克也"
,"jackasss" : ["空蜂ミドロ", "テラダ－ジャッカス", "テラダ・ジャッカス", "テラダ・ジャックス"]
,"terada nuki" : "寺田ぬき"
,"terano haruma" : "寺野遥真"
,"teramoto kaoru" : "寺本薫"
,"teri terio" : "てりてりお"
,"teruki kuma" : "てるき熊"
,"delta-m" : ["DELTA・M", "DELTA･M"]
,"delta chimaki" : ["△ちまき", "▲ちまき"]
,"delta9" : ["デルタナイン", "Δ9"]
,"delta nine" : ["デルタナイン", "Δ9"]
,"teruwo" : "てるを"
,"ten" : "貂"
,"tenganiki" : "テンガニキ"
,"denki shougun" : "電気将軍"
,"denkichi" : "でん吉"
,"tengudake" : "テングダケ"
,"tenken" : "てんけん"
,"denkousekka gou" : ["電光石火轟", "大噴火五郎"]
,"tenzaki kanna" : "天崎かんな"
,"tenjiku rounin" : "天竺浪人"
,"tenshi juuji" : "纏絲十字"
,"denji houniki" : "電磁砲二期"
,"tenshou akira" : "天祥輝"
,"10-shion" : "10-Shion"
,"denjiro" : "DENJIRO"
,"tenshinro ryoichi" : "天真楼亮一"
,"densuke" : ["DEN助", "田スケ", "電助"]
,"tensei-kun" : "転生くん"
,"tenzen miyabi" : "天漸雅"
,"tenchisouha" : "天地争覇"
,"tenchuumaru" : "天誅丸"
,"dendohin" : "電動院"
,"tendou kuon" : "天童久遠"
,"tendou masae" : "天道まさえ"
,"dendoro kakariya" : "澱泥カカリヤ"
,"tennen inari" : "天然いなり"
,"tenno" : "転ノ"
,"tennouji kitsune" : ["天王寺きつね", "天王寺動物園"]
,"tennouji suizokukan" : "天王寺水族館"
,"denpa yukkuri" : "でんぱゆっくり"
,"tenpuu mitsunari" : "天風光成"
,"denbu momo" : "でんぶ腿"
,"tenpura" : "てんぷら"
,"tempura dozaemon" : "天ぷら土左衛門"
,"tempo gensui" : "天蓬元帥"
,"tenmaso" : "てんまそ"
,"tenma haruka" : "天満春華"
,"tenma femio" : "天馬ふぇみお"
,"tenyou" : ["天鷹", "TENYOU"]
,"tenro aya" : "天路あや"
,"doi sakazaki" : ["土居坂崎", "tenkla"]
,"toizumi shuuya" : "十泉鷲矢"
,"toi deisuke" : "土肥泥助"
,"toitoi" : "といとい"
,"toine hoko" : "といね"
,"doi yasutaka" : "土井やすたか"
,"toilet komoru" : "トイレ籠"
,"toilet" : "トイレット"
,"toiro" : "十色"
,"tou" : "トウ"
,"tokaidow micty" : "東海道みっちい"
,"tohgarashi hideyu" : "唐辛子ひでゆ"
,"doukutsu tamago" : "洞窟たまご"
,"touge hiro" : "峠比呂"
,"tohzai" : "東西"
,"tousaki shiina" : "凍咲しいな"
,"toushiki yubune" : "燈織ゆぶね"
,"tojo asami" : "東城麻美"
,"toujyou kouji" : "東条公司"
,"toujou sakana" : "東条さかな"
,"toujou tsukushi" : "東條土筆"
,"tousei oume" : ["とうせいおうめ", "東征青梅"]
,"tousen" : "冬扇"
,"kitakawa touta" : ["トウタ", "北河トウタ", "上杉秀彦"]
,"touta" : "淘汰"
,"doudantsutsuji" : "満天星"
,"doutei nero" : "童帝ねろ"
,"toutou" : "とうとう"
,"toudou kurei" : ["藤堂玖麗", "藤堂玖玲"]
,"todo tsumari" : "藤堂つまり"
,"touno itsuki" : "桐野いつき"
,"toubaru rairu" : "桃原らいる"
,"doubutsu danchou" : "動物団長"
,"hato" : ["藤蜂明鳩", "hato"]
,"touma itsuki" : "東磨樹"
,"touma nao" : "藤馬奈緒"
,"touma ran" : "冬魔乱"
,"dowman sayman" : "道満晴明"
,"toumi haruka" : "遠海ハルカ"
,"tomipuu" : ["TO魅プゥー", "TO魅プロコップ"]
,"toumei mieru" : "藤茗みえる"
,"doumeki bararou" : "百目鬼薔薇郎"
,"doumou" : ["ドウモウ", "doumou"]
,"touya" : "灯夜"
,"tohyama eight" : "東山エイト"
,"toura kyura" : "戸浦きゅら"
,"dunga" : "ドゥンガ"
,"toe gojuu" : "十重五重"
,"doemutan" : "どえむたん"
,"tohno maki" : "遠野麻樹"
,"toono esuke" : "遠野えすけ"
,"toono kaoru" : "とおのかおる"
,"toono gurita" : "とおのぐり太"
,"toono suika" : "遠野すいか"
,"tohno tatsuki" : "遠野タツキ"
,"thomas" : "藤ます"
,"tooya daisuke" : "遠矢大介"
,"tooyama hikaru" : "遠山光"
,"len togarti" : "戸ケ里燐"
,"togashi" : ["冨樫", "冨樫秀昭"]
,"togami" : "とがみ"
,"togami shin" : ["十神真", "荻晴彦"]
,"togawa hanamaru" : ["とがわはなまる", "戸川花丸", "Hane☆Hane", "春花そら"]
,"toki" : "トキ"
,"tokieda ai" : "時枝あい"
,"tokie hirohito" : "刻江尋人"
,"tokisaka mugi" : "時坂夢戯"
,"tokisana" : "トキサナ"
,"tokisudeni osushi" : "ときすでにおすし"
,"tokizumi emishi" : ["ときずみえみし", "時積恵美之"]
,"tokita alumi" : "鴇田アルミ"
,"tokita monta" : "刻田門大"
,"tokino" : "時乃"
,"tokinobutt" : "ときのぶっと"
,"tokino miyuki" : "土岐野みゆき"
,"tokinon" : "ときのん"
,"tokihama jiro" : "時浜次郎"
,"tokimachi eisei" : "トキマチ☆エイセイ"
,"tokimaru" : "時丸"
,"tokimal yoshihisa" : ["時丸佳久", "Hiviki N"]
,"tokimiran" : "ときみらん"
,"tokimeki dodomegira" : "ときめきドドメギラ"
,"tokiwa kanenari" : "ときわ鐘成"
,"tokiwa midori" : "常磐緑"
,"tokiwa yutaka" : "ときわゆたか"
,"tokiwa youko" : "ときわようこ"
,"toku" : ["とく", "とくぴょん", "TOKU"]
,"dokukinokozin" : "毒茸人"
,"toku soncho" : "とく村長"
,"dr.p" : "Dr.P"
,"dr.ddt" : "Dr.DDT"
,"dr. ten" : "Dr.天"
,"dr. pyon r" : "Dr.ぴょんR"
,"dr.raisuke" : "Dr.ライスケ"
,"dr. raisuke" : "Dr.ライスケ"
,"tokuda shinnosuke" : ["徳田しんのすけ", "徳田信ノ助", "早乙女もんどのすけ"]
,"toguchifuru" : "とぐち古"
,"toguchi furu" : "とぐち古"
,"toguchi masaya" : "トグチマサヤ"
,"doku denpa" : "毒でんぱ"
,"tokunaga kujaku" : "徳永孔雀"
,"tokunaga tomoko" : "とくながともこ"
,"dokuneko noil" : "毒猫ノイル"
,"dokuhaku" : "ドクハク"
,"dokumu" : "DOKUMU"
,"tokumei hero" : "匿名ヒーロー"
,"dr.momo" : ["毒桃", "Dr.Momo"]
,"dokuro ame" : "どくろ飴"
,"dokurosan" : "どくろさん"
,"tokei" : "時計"
,"tokei usagi" : "とけーうさぎ"
,"dokokano aitsu" : "何処乃アイツ"
,"tokomaya keita" : "とこまやけいた"
,"tokoyo akashi" : "常夜あかし"
,"tokorozawa waltz" : "所沢わるつ"
,"tokoloten" : ["ところてん", "シもん"]
,"tokowan" : "とこわん"
,"tosaka sei" : "とさか醒"
,"dozamura" : "どざむら"
,"toshi" : ["都氏", "Toshi"]
,"toshiki yuuji" : "としきゆうぢ(仮"
,"toshinari arito" : "俊成有人"
,"toshinawo" : "トシナヲ"
,"toshi hiroshi" : "登志ひろし"
,"toshimitsu megumi" : "利光メグミ"
,"doji ro" : "どじろー"
,"dodai shouji" : "土代昭治"
,"toda youchika" : "戸田陽近"
,"dossei junai" : "どっせい☆純愛"
,"todd oyamada" : "トッド小山田"
,"toppogi" : "トッポギ"
,"dote kabocha" : "どてかぼちゃ"
,"totemoii" : "トテモイイ"
,"totoki kikaku" : "十時企画"
,"dodomeiro mayonnaise" : "どどめ色マヨネーズ"
,"totoyama keiji" : "魚山ケイジ"
,"totorina" : "トトリナ"
,"todoroki kangoku" : "轟かんごく"
,"todoroki shin" : "轟真"
,"tonami satoshi" : "となみさとし"
,"tonami muka" : "となみむか"
,"tonari" : "隣"
,"donan" : "どなん"
,"tony taka" : "トニー"
,"tonikaku" : "兎二角"
,"done" : "どね"
,"dobato" : "ドバト"
,"tobatoinu" : "とばといぬ"
,"toba yuga" : "跳馬遊鹿"
,"tobari" : "とばり"
,"tobari saru" : "トバリ猿"
,"tobari masami" : "とばりまさみ"
,"dopikasu-chan" : "どぴかすちゃん"
,"dohi kensuke" : "土肥けんすけ"
,"hida tatsuo" : "飛田竜夫"
,"tobita mikoto" : "飛田美琴"
,"tobimura" : "鳶村"
,"to hegemonikon" : "ト！ヘーゲモニコン"
,"tomakomai" : "とまこ舞"
,"tomako mai" : "とまこ舞"
,"tomatojigoku" : "とまとじごく"
,"tomatomato" : "トマトマト"
,"tomi." : "とみ。"
,"tomi" : "とみ。"
,"tomiaki yuu" : ["とみあきゆう", "富秋悠"]
,"tomioka sena" : "トミオカセナ"
,"tomizawa jun" : "富沢順"
,"tomisawa chinatsu" : "とみさわ千夏"
,"tomita shigeru" : ["冨田茂", "富田茂"]
,"tominaga f rou" : "富永F郎"
,"tomihero" : "トミヒロ、"
,"tomiyama akiji" : "兎耳山アキジ"
,"tomiyoshi" : "トミヨシ"
,"tom" : "TOM"
,"tom tamio" : ["都夢たみお", "とむたみお", "琴音かのん"]
,"tomura suisen" : "戸村水仙"
,"tomekichi" : "とめきち"
,"tomoe kiko" : "トモエキコ"
,"tomoe tenbu" : "巴天舞"
,"tomoe yousuke" : "巴八丞"
,"tomo" : "ともー"
,"tomokichi" : "友吉"
,"tomoki tomonori" : "ともきとものり"
,"tomozawa shou" : "智沢渚優"
,"tomoshibi hidekazu" : "灯ひでかず"
,"tomojo" : "ともじょー"
,"tomose shunsaku" : "トモセシュンサク"
,"tomose" : ["トモセシュンサク", "Tomose"]
,"tomozero" : "トモゼロ"
,"tomoda hidekazu" : "ともだ秀和"
,"tomotsuka haruomi" : "ともつか治臣"
,"tomonaga kazu" : "友永和"
,"tomonaga kenji" : "友永ケンジ"
,"tomonaga fuuto" : "友永楓人"
,"tomono hiro" : "友野ヒロ"
,"tomohara michiya" : "友原道哉"
,"tomohisa yutaka" : "伴久豊"
,"tomohiro kai" : "智弘カイ"
,"tomomimi shimon" : "ともみみしもん"
,"domoran spika" : "奴裳嵐すぴか"
,"domon" : "ドモン"
,"toya" : "とや"
,"toyama jigoku" : "外山じごく"
,"toyama burin" : "遠山ブリン"
,"toyo" : "トヨ"
,"toyokawa inari" : ["豊川稲荷", "豊川稲理"]
,"toyosaki shu" : "豊咲"
,"toyosawa juuzaburou" : "豊沢十三郎"
,"toyoshima yuusaku" : "豊島ゆーさく"
,"toyotama tsukushi" : "豊玉つくし"
,"toyomasu takahiro" : "とよますたかひろ"
,"dora q ran" : "ドラQらん"
,"try" : "Try"
,"toraisi666" : "とらいし666"
,"try sigma" : "虎井シグマ"
,"torakichi" : "とらきち"
,"drachef" : "ドラチェフ"
,"toranosuke" : "とらのすけ"
,"dramus" : "ドラムス"
,"toria" : "とりあ"
,"toriapon" : "TORIAPON"
,"torii yoshitsuna" : "鳥居ヨシツナ"
,"tries" : "とりえす"
,"torigara mayo" : "鳥空マヨ"
,"torikawa" : "鳥皮"
,"torikawa sora" : "酉川宇宙"
,"torisan" : "鳥三"
,"torishimo" : "とりしも"
,"trista" : "トリスタ"
,"torichamaru" : "鳥茶丸"
,"toritora" : "酉寅"
,"torino munenik" : "トリノ宗肉"
,"toribami sasami" : "鳥喰ささみ"
,"toriburi" : "トリブリ"
,"torimushi" : ["鳥莉蒸師", "戸田泰成"]
,"torimune" : "とりむね"
,"toriyaro" : "トリヤロウ"
,"drill jill" : "ドリル汁"
,"drill murata" : "ドリルムラタ"
,"doluta" : ["ドルタイバシ", "ドルタ"]
,"doluta ibashi" : ["ドルタイバシ", "ドルタ"]
,"toruneko" : "獲る猫"
,"doru riheko" : "ドルリヘコ"
,"dorei jackie" : "奴隷ジャッキー"
,"drain" : ["Drain", "どれいん"]
,"draw2" : "土狼弐"
,"torosawa" : "とろさわ"
,"toroshio" : "とろしお"
,"torotarou" : "トロ太郎"
,"drossel" : "泥っせる"
,"torotoro" : "とろとろ"
,"tololi" : "とろり"
,"tororo" : "とろろ"
,"tororodon" : "とろろどん"
,"dororon ryuuchin" : "どろろん★竜ちん"
,"twilight" : ["TWILIGHT", "問合来人"]
,"towai raito" : ["TWILIGHT", "問合来人"]
,"dowarukofu" : "どわるこふ"
,"twogie" : "トヲギー"
,"don" : ["ドン", "どん"]
,"donkey" : "Donkey"
,"donguri" : "ドングリ"
,"don shigeru" : ["DON繁", "Don.繁"]
,"dondakei" : "どんだけい"
,"tonchan" : "とんちゃん"
,"tonnosuke" : "とんのすけ"
,"donnosuke" : "ドン之介"
,"tonpu" : ["とんぷ", "とんぷう"]
,"tonbo" : "とんぼ"
,"naamo" : "なあも"
,"naisho" : "内緒"
,"naitou kirara" : "内藤キララ"
,"naitou gura" : "内東ぐら"
,"naitou satoshi" : "乃藤悟志"
,"naitou haruto" : "内藤春人"
,"naito loveca" : "内藤らぶか"
,"naipeta" : "ないぺた"
,"naenae" : "なえなえ"
,"nao" : ["なお", "Nao", "NAO（なお）"]
,"nao system" : "NAOシステム"
,"naokame" : "直かめ"
,"naokichi." : "なおきち。"
,"naoko" : "なお子"
,"nao susumu" : "尚すすむ"
,"nao takami" : "尚たかみ"
,"naomi" : "NAOMI"
,"naomu" : "なおむ"
,"naoya" : "直哉"
,"naoya susumu" : "なお屋すすむ"
,"naga" : "な～が"
,"na-ga" : "な～が"
,"nagaikusa" : "長い草"
,"nagai go" : "永井豪"
,"nagai takurou" : "永井拓郎"
,"nagai michinori" : "永井道紀"
,"nagai wataru" : "長井わたる"
,"nakaura" : "中浦トモキ"
,"nagaoka hiroshi" : "長岡ひろし"
,"nakao hamu" : "仲尾ハム"
,"nagao yamahiko" : "長尾山彦"
,"nakagami takashi" : ["中上隆", "中上たかし"]
,"nakagawa homeopathy" : "中川ホメオパシー"
,"nakagawa you" : "中川優"
,"nakagomi" : "中込"
,"nagasaki kenji" : "永崎KENJI"
,"nagasaki biidoro" : "長崎びいどろ"
,"naka shinobu" : "中☆忍"
,"nakajima akihiko" : "中島秋彦"
,"nakajima kaede" : "中島楓"
,"nakajima katsuya" : "中島克揶"
,"nakajima kouichi" : "中島光一"
,"nakajima daizaemon" : "中嶋大佐衛門"
,"nagashima chosuke" : "ながしま超助"
,"nakashima hatsumi" : "中島初美"
,"nakajima fumio" : "中島史雄"
,"nakajima yuka" : "なかじまゆか"
,"nakajima yongou" : "中嶋四号"
,"nakajima rei" : "中島零"
,"nagashiro rouge" : "長代ルージュ"
,"mayu nagashiro" : "永城まゆ"
,"nagase tooru" : "長瀬徹"
,"nagase mayu" : "永瀬まゆ"
,"nagase yuuki" : "長瀬祐希"
,"nagase yutaka" : "長瀬ゆたか"
,"nagase rurio" : "永瀬るりを"
,"nakasone haiji" : "中曽根ハイジ"
,"nakata shunpei" : "中田春平"
,"nagata tsubasa" : "永田翼"
,"nagata tomato" : "永田トマト"
,"nagata maria" : ["長田まりあ", "永田まりあ"]
,"nakata mitsuru" : "中田ミツル"
,"nakata modem" : "中田モデム"
,"nakata yumi" : "中田ゆみ"
,"nakada rumi" : "中田瑠美"
,"nakatsukasa shou" : "中務省"
,"nagatsuki futsuka" : "長月ふつか"
,"nagatsuki misoka" : "長月みそか"
,"nakaduki yuuna" : "中月ゆ～な"
,"nakadera akira" : "中寺明良"
,"nakado kunihiko" : "なかどくにひこ"
,"nagato koujirou" : "長門耕次郎"
,"nakani" : "なかに"
,"naganeko" : "ながねこ"
,"nagano akane" : "永野あかね"
,"nakanoo kei" : "中ノ尾恵"
,"nakanoku kurochan" : "中野区くろちゃん"
,"nakano sora" : "中乃空"
,"nakano hitomi" : "中埜人見"
,"nakano yuu" : "中野ゆう"
,"nakano yuuki" : "中野友貴"
,"naganoro" : "ながのろ"
,"nakahata yoshihiro" : "中畑義浩"
,"nakahara tomo" : "中原とも"
,"nakaharu yuuna" : "仲春結菜"
,"nakaharu ryo" : "仲春リョウ"
,"nakafusa momo" : ["中総もも", "ナカフサモモ"]
,"nagama hisashi" : "永間ひさし"
,"nakamine hiroshi" : "仲峰紘史"
,"nagami yuu" : "永深ゆう"
,"nakami yoshikage" : ["中海義影", "中海美影"]
,"nakamura asumiko" : "中村明日美子"
,"nakamura uzuki" : "中村卯月"
,"nakamura osawari kun" : "中村おさわりくん"
,"nakamura kafka" : "中邑カフカ"
,"nakamura kanko" : "中村カンコ"
,"nakamura kuzuyu" : "中村葛湯"
,"nakamura sakyou" : "中村左京"
,"nakamura taiyaki" : "中村たいやき"
,"nakamura takeshi" : "なかむらたけし"
,"nakamura tetsuya" : "中村哲也"
,"nakamura nishiki" : "中村錦"
,"nakamura hirofumi" : "中村博文"
,"nakamura mizumo" : "中村みずも"
,"nakamura regura" : "仲村レグラ"
,"nakamura rohane" : "中村六翅"
,"nakamori ai" : ["中森愛", "中森あい"]
,"nakayama katsumi" : "中山克美"
,"nakayama tarou" : "中山たろう"
,"nakayama tetsugaku" : "中山哲学"
,"nakayama miyuki" : "中山みゆき"
,"nagayama yuunon" : "永山ゆうのん"
,"nagayori" : "長頼"
,"nagaraya" : "ながら屋"
,"nagare" : "ナガレ"
,"nagare ippon" : "流一本"
,"nagare hyo-go" : "流ひょうご"
,"nagareboshi kai" : "流星改"
,"nagareboshi hikaru" : "流星ひかる"
,"nagi ayame" : "凪妖女"
,"nagian" : "凪庵"
,"nagy" : "Nagy"
,"nagi ichi" : "凪市"
,"nagisa akira" : ["ナギサアキラ", "ナギサ・アキラ"]
,"nagisa sanagi" : "渚さなぎ"
,"nagisano usagi" : ["渚乃兎", "渚ノ兎"]
,"nagisa minami" : "渚ミナミ"
,"nagisawa you" : "なぎさわゆう"
,"nagiyama" : "那岐山"
,"nagumo" : "なぐも。"
,"nagumo haruka" : ["南雲遥", "ガナクラほむ"]
,"nagumo ryuichi" : "南雲龍一"
,"naglfar" : "なぐるふぁる"
,"nako" : "奈子"
,"nagoyaka jirou" : "なごやか次郎"
,"nagoya shachihachi" : "名古屋鯱八"
,"cai pi jun" : "菜さん"
,"nashinomi" : "梨乃実"
,"nasipasuta" : "なしぱすた"
,"najimi shin" : "馴染しん"
,"nasukichi" : "なすきち"
,"nasukon" : "なすこん"
,"nazuna" : ["ナズナ", "なずな"]
,"nasu hanahana" : "那須花花"
,"nusmusbim" : "ナスムスビム"
,"nazen shikana" : "菜然しかな"
,"nada akurou" : "なだあくろう"
,"nadaka harutsugu" : "南高春告"
,"nachi" : "なち"
,"nachisuke" : "なちすけ"
,"natsu" : "夏"
,"natsuo tom" : "夏生TOM"
,"natsuka q-ya" : ["奈塚Q弥", "奈塚久弥"]
,"natsukawa fuyu" : "夏川冬"
,"natsuki" : ["夏樹", "夏木", "夏希"]
,"natsuki kiyohito" : ["夏木きよひと", "夏木清人"]
,"natsuki saichi" : "夏木佐市"
,"natsuki shuri" : "なつきしゅり"
,"natsuki takatora" : "夏樹高虎"
,"natsuki hajime" : "夏生一"
,"natsuki marina" : "夏月まりな"
,"knuckle curve" : "ナックルカーブ"
,"natsuzame" : "ナツザメ"
,"natsuzora haduki" : "夏空葉月"
,"natto shiruko" : "納豆汁粉"
,"natsuno io" : "夏野イオ"
,"natsu no oyatsu" : "夏のおやつ"
,"natsu no koucha" : "夏の紅茶"
,"natsuno suika" : "なつのすいか"
,"natsuno fujimaro" : "なつのふじまろ"
,"natsuhati" : "夏八"
,"natsuba yashi" : "夏葉ヤシ"
,"natsuhiko" : "夏彦"
,"natsumi" : "夏実"
,"natsumi iroha" : "夏海いろは"
,"natsumikan" : ["夏蜜柑", "なつみかん"]
,"natsumi chiharu" : ["菜摘ちはる", "ナツミチハル"]
,"natsume" : "夏目"
,"natsume mila" : "棗Mila"
,"natsume eri" : "なつめえり"
,"natsume katsura" : "夏目かつら"
,"natsumezaka sorekara" : "夏目坂それから"
,"natsume tsuna" : "夏梅つな"
,"natsume fumika" : "夏目文花"
,"natsume ryuunosuke" : "なつめ龍之介"
,"natsuyoshi" : "夏吉"
,"nadeara bukichi" : "撫荒武吉"
,"natin" : "なてぃん"
,"nadoreeno naotsugu" : "ナドリーノ直次"
,"nana" : "NANA"
,"nana g" : ["七G", "ななじー"]
,"nanairo" : "ナナイロ"
,"nanau misou" : "七烏未奏"
,"nanae" : "Nanae"
,"nanao" : "ななお"
,"nanao naru" : "七尾奈留"
,"nanao yukiji" : "七尾ゆきじ"
,"nanakagi satoshi" : "七鍵智志"
,"7x2" : "7×2"
,"nanaca mai" : "ななかまい"
,"nanaki seijyu" : "七輝静樹"
,"nanakichi" : "七吉。"
,"nanakusa amane" : "七草天音"
,"nanasao" : "七竿"
,"nanasaki" : "七崎"
,"nanashi" : ["七市", "774"]
,"nanashiki fuka" : "七色風香"
,"nanasumi" : "奈々澄"
,"nanase aoi" : ["七瀬葵", "ながせまゆ", "ななこ"]
,"nanase jun" : "ななせじゅん"
,"nanase takashi" : "七成貴史"
,"nanase makoto" : ["七瀬真琴", "牛乳娘"]
,"nanase masato" : "七瀬雅人"
,"nanase mizuho" : "七瀬瑞穂"
,"nanase meruchi" : "ななせめるち"
,"nanatabi megumu" : "七行めぐむ"
,"nanatsuki itsuki" : "奈々月いつき"
,"nanatsuzono" : "七ツ園"
,"nanatsuda" : "七ツ田"
,"nanana nana" : "七名菜奈"
,"nananin" : "那無人"
,"nanahara fuyuki" : "七原冬雪"
,"nanahoshi" : "ななほし"
,"nanahoshi keina" : "七星けいな"
,"nanahoshi tento" : ["七保志天十", "七星てんと"]
,"nanamachi" : "ナナマチ"
,"nanamatsu kenji" : "七松建司"
,"nanami ayane" : "七海綾音"
,"nanami shizuka" : ["ななみ静", "七海静歌"]
,"nanami haruka" : "七海はるか"
,"nanami yasuna" : "ナナミヤスナ"
,"nanamiya tsugumi" : ["七宮つぐ実", "七宮つぐ美"]
,"nanamiya rin" : "ななみやりん"
,"nanameno hayuta" : "七芽乃はゆた"
,"nanamo" : "ななも"
,"nanamoto" : "ななもと"
,"nanamomo rio" : "七桃りお"
,"nanaroba hana" : "ななろば華"
,"nanigawa rui" : "名仁川るい"
,"nanita" : "ナニタ"
,"naniwa" : "なにわ？"
,"naniwadou matatabi" : "浪花道またたび"
,"nanotaro" : "なのたろ"
,"nanohana800" : "なのはな800"
,"nanohana lala" : "菜の花ララ"
,"naba" : "菜葉"
,"naha 78" : "ナハ78"
,"napata" : "なぱた"
,"naha ryou" : "那覇了"
,"nabisuke" : "なびすけ"
,"nabe" : "なべ"
,"nabeshima mike" : "鍋島ミケ"
,"nabewo" : "ナベヲ"
,"napo" : "ナポ"
,"naporitan" : "ナポリタン"
,"naporu" : "なぽる"
,"namaitati" : "ナマイタチ"
,"namazu" : "なまず"
,"nama chiu" : "ナマちう"
,"namatsui" : "なまつい"
,"namanie" : "生煮え"
,"namaniku" : "生肉"
,"namaniku atk" : "なまにくATK"
,"namamo nanase" : "なまもななせ"
,"namaribou nayonayo" : "鉛棒なよなよ"
,"namiki nazu" : "並木なず"
,"namiki midori" : "並木みどり"
,"namita" : "浪田"
,"namidame" : "涙目"
,"naminori kamome" : "波乗かもめ"
,"namekata fumiaki" : "行方ふみあき"
,"namekuji" : "なめくじ"
,"name john" : "なめジョン"
,"yonemochi akihiko" : ["なめぞう", "米餅昭彦"]
,"name runao" : "無礼るなぉ"
,"namonashi" : "無望菜志"
,"papermania" : "納屋"
,"nayuzaki natsumi" : "ナユザキナツミ"
,"nayuta" : "那由他"
,"nayuta daichi" : "なゆただいち"
,"narazaki neneko" : "楢崎ねねこ"
,"narazu yoshitomo" : "不可知"
,"narita kyousha" : "成田香車"
,"narita koh" : "成田コウ"
,"narita tsubaki" : "なりた椿"
,"narita manabu" : ["成田マナブ", "ナリタマナブ"]
,"naritayama buraian" : "成田山武頼庵"
,"naritayama brian" : "成田山武頼庵"
,"narita riuku" : "成田りうく"
,"narinatsu machi" : "成夏万智"
,"narimura mikio" : ["成村三起雄", "成村美起雄"]
,"nal" : "NAL"
,"narukami ginryu" : "鳴神銀龍"
,"narukami junichi" : "鳴神潤一"
,"naruko" : ["平間ひろかず", "鳴湖"]
,"naruko hanaharu" : "鳴子ハナハル"
,"narukoro" : "なるころ"
,"narusawa aya" : ["鳴沢綾", "なるさわ綾"]
,"narusawa kio" : "鳴沢きお"
,"narusawa kei" : "なるさわ景"
,"narusawa keiji" : "鳴沢慶次"
,"narusawa sora" : "成沢空"
,"narushima kanna" : "鳴島かんな"
,"narushima godou" : "成島ゴドー"
,"naruse" : "なるせ"
,"naruse tsukino" : "成瀬つきの"
,"naruse hirofumi" : "鳴瀬ひろふみ"
,"naruse mamoru" : "成瀬守"
,"naruse michi" : "成瀬みち"
,"nalzo" : "なるぞう"
,"narutaki shin" : "鳴滝しん"
,"naruhodo" : "なるほど"
,"narumi" : "鳴海"
,"narumieru" : "なるみえる"
,"narumi cristear note" : "成海クリスティアーノート"
,"narumi suzune" : "なるみすずね"
,"narumiya" : "鳴海也"
,"narumiya akira" : "成宮章"
,"narumi yuu" : "成海優"
,"narumi yu" : "鳴海ゆう"
,"narumi yuki" : "鳴海柚来"
,"naruru" : "なるる"
,"nawoko" : "ナヲコ"
,"nawofu" : "ナヲフ"
,"nankin maachan" : ["南京まーちゃん", "田中雅人"]
,"nangou jingeru" : "南郷じんげる"
,"nangou takashi" : "南郷隆"
,"nankotsu tori" : "なんこつ鳥"
,"nanzaki iku" : "南崎いく"
,"nanjou asuka" : "南条飛鳥"
,"nanjou haruno" : "南條ハルノ"
,"nandaba" : "ナンダバ"
,"nandemona" : "なんでもな"
,"nantoka" : "なンとか"
,"nanto hanamaru" : "納都花丸"
,"nanno koto" : "南野琴"
,"nanpuu" : "なんぷぅ"
,"namboku" : "南北"
,"nanri kouichirou" : ["南里孝一郎", "成島ゴドー"]
,"niizuma potepu" : "新妻ぽてぷ"
,"neet" : "にぃと"
,"niimaru yuu" : "ニイマルユウ"
,"niiruma kenji" : "にいるまけんじ"
,"nieta mago" : "にえたまご"
,"nikaidou mitsuki" : "二階堂みつき"
,"nikawa yuki" : "にかわ柚生"
,"nigiri usagi" : "にぎりうさぎ"
,"nikukiu-" : "にくきうー"
,"nikushiki" : "にくしき"
,"nikujaga" : "にくじゃが"
,"nikusyo" : ["弐駆緒", "にくしょ"]
,"nikujiruc" : "肉汁uc"
,"nikusoukyuu" : "肉そうきゅー。"
,"nikutama" : "にくたま"
,"nikudanmaru" : "肉弾丸"
,"nikubou maranoshin" : "肉棒魔羅ノ進"
,"nikumansho" : "にくまん処"
,"nikumen" : "肉メン"
,"nikuyaki" : "ニクヤキ"
,"nigesapo" : "にげサポ"
,"2gou" : "2号"
,"nicoby" : ["nicoby", "にこびぃ"]
,"nico pun nise" : "笑花偽"
,"nicolai no yome" : "ニコライの嫁"
,"nisankatanso" : "23化炭素"
,"nishi" : "弐肆"
,"nishieda" : "西E田"
,"nishi iori" : "西安"
,"nijiiro ink" : "虹色いんこ"
,"nijiiro guin" : "虹色ぐいん"
,"nijiiro tyahantei" : "虹色チャーハン亭"
,"nishieda kinoe" : "西枝きの江"
,"nishiomi kyoko" : "西臣匡子"
,"nishikasai munieru" : "西葛西むにえる"
,"nishikawa kou" : "西川康"
,"nishikawa kouto" : ["西川孔人", "西川淳", "ニシカワ醇"]
,"nishikawa megumi" : "西川恵"
,"nishikawa rosuke" : "西川魯介"
,"nishikigaura koizaburou" : "錦ヶ浦鯉三郎"
,"nishiki shirou" : "西木史郎"
,"nishikibasami" : ["二式鋏", "乙"]
,"nishiki yoshimune" : "にしき義統"
,"nishikousaka kouhei" : "西高坂耕平"
,"nishizaki eimu" : "西崎えいむ"
,"nishi shizumu" : "西しずむ"
,"nishida megane" : "仁志田メガネ"
,"nishitsuki tsutomu" : "西月力"
,"nijiden" : "ニジデン"
,"nishi toshihide" : "西俊秀"
,"nishinari iwao" : ["西成岩男", "岩永亮太郎"]
,"nishino eichi" : ["西野映一", "夜魔介"]
,"nishinozawa kaorisuke" : "西野沢かおり介"
,"nishihata kei" : "西畑けい"
,"nishihara seiichi" : ["西原青一", "東原緑一", "西条真二"]
,"nishimaki tohru" : ["にしまきとおる", "カジワラタケシ"]
,"nishimata aoi" : "西又葵"
,"nishimura arimi" : "西村有未"
,"nishimura kyou" : "西村姜"
,"nishimura takashi" : "にしむらたかし"
,"nishimura nike" : "西村にけ"
,"mihoshi kurage" : ["にしむらはるか", "海星海月", "西村はるか", "幼魔"]
,"nishimura hanten" : "西村飯店"
,"nishimo" : "にしも"
,"nizimoto hirok" : "虹元ひろk"
,"nishiyama ryouji" : "西山りょうじ"
,"nijou katame" : "二条かため"
,"nishi yoshiyuki" : "西義之"
,"nisin" : "ニシン"
,"nishin" : ["ニシン", "ニシンマスミ"]
,"nise" : "似せ"
,"nise kurosaki" : "偽くろさき"
,"nisepakuman-san" : "偽パクマンさん"
,"nisemura kei" : "偽村圭"
,"nittakumi" : "新匠"
,"nitta jun" : ["にったじゅん", "新田じゅん"]
,"niche" : "ニッチ"
,"nicchi sangyou" : "にっちさんぎょう"
,"nippa takahide" : "新羽隆秀"
,"nippori" : "にっぽり"
,"nitouhen" : "二等辺"
,"nitoh yuhsa" : "仁藤勇砂"
,"nina" : "仁奈"
,"ninoko" : "にの子"
,"ninomiya ginta" : ["二ノ宮ギンタ", "うさ銀太郎", "大沢美月"]
,"ninomiya hikaru" : "二宮ひかる"
,"ninomiya ryouzou" : "二宮亮三"
,"nixinamo lens" : "にびなも凸面体"
,"nibo" : "にぼ"
,"nimaji" : "にまじ"
,"nimu" : ["ニム", "にむ"]
,"nyako" : "ニャ子"
,"nyagomaru" : "にゃご丸"
,"nyakkuru" : "ニャックル"
,"nyamal" : "にゃまる"
,"nyamota" : "にゃもた"
,"nyanko" : "にゃんこ"
,"nyanko 400" : "にゃんこ400"
,"nyanko mic" : "にゃんこMIC"
,"nyantarous" : "にゃん太郎s"
,"nyuu" : "にゅう"
,"nyuuhin" : "にゅーひん"
,"nyx" : "にゅくす"
,"nyorari kurari" : ["如羅罹くらり", "にょらりくらり"]
,"nyorali kurali" : ["如羅罹くらり", "にょらりくらり"]
,"nyorutarou" : "にょる太郎"
,"nyorori" : ["にょろり", "NYOROLY"]
,"nilai kanai" : "ニライカナイ"
,"nilitsu" : "二リツ"
,"niritsu haihan" : "二律背反"
,"niro" : "にろ"
,"2 equals 8" : "2=8"
,"niwakaame" : "俄雨"
,"niwaka yuan" : "丹羽香ゆあん"
,"niwatori gunsou" : "にわとり軍曹"
,"niwano makoto" : ["にわのまこと", "Makoto Niwano"]
,"niwahani" : "ニワハニ"
,"nin" : "にん"
,"ninjin san" : "人参・参"
,"nintai akira" : ["忍耐明", "江口ちび"]
,"ninnin" : "にんにん！"
,"nu-" : "ぬー"
,"nukaji" : "ぬかじ"
,"nukiyama gaisei" : ["ぬきやまがいせい", "抜山蓋世", "拔山蓋世"]
,"nukunuku" : "ぬくぬく"
,"nukunuku orange" : "ヌクヌクオレンジ"
,"nukeru" : "ぬける"
,"nukkoru" : "ぬっこる"
,"numata chihiro" : "ぬまたちひろ"
,"numahana" : "ヌマハナ"
,"nuyakana" : "ぬャカな"
,"nurumu" : "ぬるむ"
,"nuresato hiyoko" : "濡里飛四子"
,"nunnu" : "ぬんぬ"
,"neisan" : "ねいさん"
,"neo kusano" : "NEO草野"
,"negiuma" : "ねぎうま"
,"negitoroko" : "ネギトロ子"
,"negito ron" : "葱戸ロン"
,"nectar" : "ねくたー"
,"nekubila" : "ねくびぁ"
,"negura nao" : ["ねぐらなお", "ねぐら☆なお"]
,"negurie" : "ねぐりえ"
,"neko mode" : "猫モード"
,"nekoaka" : "ねこあか"
,"nekoaruko" : "ねこ@るこ"
,"nekoi hikaru" : "猫伊光"
,"nekoi mie" : ["猫井ミィ", "猫井ヤスユキ"]
,"nekoi rutoto" : "猫井るとと"
,"nekou izuru" : "猫生いづる"
,"nekoura" : "ねこうら"
,"nekogen" : ["猫玄", "宮内たけし"]
,"nekokokazuma" : "ねここかずま"
,"neko samurai" : "猫サム雷"
,"nekoshita pong" : "ねこしたPONG"
,"nekojima" : "ねこじまさき"
,"nekojima lei" : ["猫島礼", "LEI・NEKOJIMA"]
,"nekoshiro memo" : "猫代メモ"
,"nekozukin" : "猫頭巾"
,"neko sensei" : "猫センセイ"
,"nekota" : "ねこ太"
,"nekotasou" : "ねこたそう"
,"nekota nanami" : "ねこたななみ"
,"nekota nigra" : "猫多にぐら"
,"nekota hajime" : "猫田始愛"
,"nekotamas" : "Nekotamas"
,"nekodanshaku" : "猫男爵"
,"nekotewi" : "ねこてゐ"
,"neko tenshin" : "猫点心"
,"neko denryoku" : "ねこ電力"
,"nekoniku shake" : "猫肉しゃけ"
,"nekonyan" : "ねこにゃん"
,"nekonose hajime" : "猫ノ瀬はじめ"
,"neko no te" : "猫の手"
,"nekono fuguri" : "猫乃ふぐり"
,"nekonomori maririn" : "猫守麻里鈴"
,"neko pantsu" : ["ねこぱんつ", "ねこパンツ"]
,"nekoma kotomitsu" : "猫間ことみつ"
,"nekomata" : "ねこまた"
,"nekomatagi sanjuurou" : "猫跨三十郎"
,"nekomata naomi" : "ねこまたなおみ"
,"nekomatan." : "ねこまたん。"
,"nekomatsuri" : "猫祭"
,"nekomaru" : "猫丸"
,"neko maru rentarou" : "猫丸恋太郎"
,"neko manma" : "猫まんま。"
,"nekomi haruto" : "猫見春人"
,"neko miya nao" : "猫宮奈緒"
,"nekomiya nao" : "猫宮なお"
,"nekomushi" : "ねこむし"
,"necomushi" : "ねこ虫"
,"nekomura" : "猫村"
,"nekometaru" : "ねこめたる"
,"nekoya" : "猫夜"
,"negoya" : "ねご屋"
,"nekoyashiki nekomaru" : ["猫屋敷ねこ丸", "猫屋敷ねこまる"]
,"nekoyama kushitarou" : "猫山串太郎"
,"nekonta" : "ねこんた"
,"nejiro" : "ねじろ"
,"nezu mickey" : "ねずみっき"
,"nezumin" : "ネズミン"
,"nekko" : "ねっこ"
,"nedokoro mitsuki" : "ねどころみつき"
,"netoromorikon" : "ねとろもりこん"
,"neneneg" : "ねねねじ"
,"nenemaru" : "音音丸"
,"nepuka" : "ネプカ"
,"nemitarou" : "ネミタロウ"
,"nemu" : "ねむ"
,"nemui neru" : "眠井ねる"
,"nemunemu" : ["ネムネム", "ねむねむ", "眠々", "眠眠"]
,"nemuri taiyo" : "ねむり太陽"
,"menea the dog" : "メネア・ザ・ドッグ"
,"nemo" : "NEMO"
,"neyuki rei" : "根雪れい"
,"neriume" : "ねりうめ"
,"nerima yoshito" : "ねりまよしと"
,"neriwasabi" : "ねりわさび"
,"nerotarou" : "ねろ太郎。"
,"tottotonero tarou." : ["ねろ太郎。", "とっととねろ太郎。"]
,"neromashin" : "ねろましん"
,"nenchi" : "ねんち"
,"nendo." : "ねんど。"
,"noa" : "NOA"
,"noq" : ["のうきゅう", "NOQ", "下月重吾"]
,"noumiso" : "脳みそ"
,"noumiso kaimentai" : "脳みそ海綿隊"
,"noel" : "のえる"
,"novice tori" : "のーびす鳥"
,"no limit" : "ノーリミット"
,"nogami kei" : "野上けい"
,"nogami takeshi" : "野上武志"
,"noki kuzuri" : "野生くずり"
,"nogiguchi kohiro" : "のぎぐちこひろ"
,"nokishita negio" : "軒下ネギヲ"
,"nogi makoto" : ["のぎまこと", "蒔野靖弘", "牧野靖弘", "うにぁぼ"]
,"nogiwa kaede" : "野際かえで"
,"nokin" : "のきん"
,"noko" : "NOKO"
,"nogo" : "のご"
,"nokoppa" : "のこっぱ"
,"nosa" : "NOSA"
,"nozarashi satoru" : ["野晒サトル", "野晒惺", "秋神サトル"]
,"nozarashi miira" : "野晒木乃伊"
,"noji" : "ノジ"
,"nozomi tsubame" : "希望つばめ"
,"nozomi yuu" : "のぞみ侑海"
,"noda guri" : "野田ぐり"
,"noda nonda" : "野田のんだ"
,"noda yuuji" : "野田ゆうじ"
,"nochita sin" : ["のちたしん", "のちた紳"]
,"nozuka kiji" : "野塚キジ"
,"nonaka tama" : "のなかたま"
,"nonakano hito" : "乃中乃一"
,"nonohachi" : "ノノはち"
,"nonohara miki" : "野々原幹"
,"nonomura hideki" : "野々村秀樹"
,"nonomura mako" : "野々村真子"
,"nonoru mia" : ["ののるみあ", "武若丸"]
,"noba" : "の歯"
,"nohara hiromi" : "野原ひろみ"
,"nobuki chihiro" : "のぶきちひろ"
,"nobuhiro" : "のぶひろ"
,"nobuyuki" : "のぶゆき"
,"nobeji kazuwo" : "ノベジカズオ"
,"noboru" : "のぼる"
,"nomura teruya" : "野村輝弥"
,"norakuro nero" : "野良黒ネロ"
,"noraneko nagaya" : "のら猫長屋"
,"noraneko nicole" : "のらねこニコル"
,"nora higuma" : "野良ヒグマ"
,"norahoshi" : "ノラホシ"
,"nori" : "糊"
,"nori gorou" : "のり伍郎"
,"norizane" : "のりざね"
,"norisuke" : "乃莉助"
,"nori senbei" : "海苔せんべい"
,"norita" : "のり太"
,"noritako" : "のりたこ"
,"noritama" : "のりたま"
,"noripachi" : "のりパチ"
,"nori-haru" : "のりはる"
,"norihito" : "仁人"
,"norimatsu satoshi" : "乗松聡"
,"norimatsu nanami" : ["のりまつななみ", "範松那奈美"]
,"nora shinji" : ["乃良伸二", "乃良紳二", "白野じん"]
,"norinko" : "のりんこ"
,"norutaru" : "のるたる"
,"noresore" : "ノレソレ"
,"nonjake" : "ノンジャケ"
,"non-sugar" : "ノンシュガー"
,"nontaro nonjiro" : "のん太郎のん次郎"
,"nonnon" : "non☆non"
,"bar peachpit" : ["バー・ぴぃちぴっと", "KAKERU"]
,"birthday" : ["BIRTHday", "蜂文太"]
,"bersuroiru" : "ばーすろいる"
,"haato" : "はぁと"
,"birdhatter" : "BirdHatter"
,"hardboiled yoshiko" : "ハードボイルドよし子"
,"barlun" : "ばーるん"
,"bai asuka" : "唄飛鳥"
,"paio" : "ぱいお"
,"haioku" : "廃屋"
,"high-ox" : "はいおく"
,"bionics nattou" : "バイオ納豆"
,"violetshit" : "バイオレットシット"
,"haikawa hemlen" : "灰川ヘムレン"
,"haikome" : "灰米"
,"haison" : "ハイソン"
,"haitokukan" : "背徳漢"
,"haitoku sensei" : "はいとく先生"
,"haito mitori" : "灰都みとり"
,"haiboku" : "敗北"
,"haimura kiyotaka" : "はいむらきよたか"
,"highlow" : "廃狼"
,"painpa" : "パインパ"
,"bau bau" : "ばうばう"
,"pao" : "パオ"
,"haoto luna" : "羽音るな"
,"hagger" : "はがー"
,"hakaishin" : "破壊神"
,"hakai taitei" : "破壊大帝"
,"hakai taitei miyayan" : "破壊大帝みややん"
,"baka ouji persia" : "バカ王子ペルシャ"
,"hagane tetsu" : "鋼鉄"
,"haganemaru kennosuke" : ["はがねま", "鋼丸剣ノ介"]
,"haganemaru" : "鋼丸"
,"hakano shinshi" : "ハカノシンシ"
,"hakaba" : "墓場"
,"haga yui" : "葉賀ユイ"
,"hakiata" : "はきあた"
,"hagio nobuto" : "萩尾ノブト"
,"hagi tsukimitsu" : "萩月光"
,"hagiya masakage" : "はぎやまさかげ"
,"hagiyoshi" : "はぎよし"
,"hagiwara emirio" : "萩原エミリオ"
,"hagiwara onsen" : "萩原音泉"
,"hagiwara kazushi" : "萩原一至"
,"hagiwara yutarou" : "萩原雄太郎"
,"haku" : "白"
,"hakua ugetsu" : "白亜右月"
,"hakuun" : "はく雲"
,"at" : "バクシーシAT"
,"hakujitsu mamire" : "白日まみれ"
,"hakuto" : "ハクト"
,"hakutou" : "白桃"
,"hakutou noriko" : "白桃ノリコ"
,"haguhagu" : "はぐはぐ"
,"bakuhatsu ichigou" : "爆発壱號"
,"b. gorou" : "ばくはつごろう"
,"hakufuu" : "白風"
,"hakubun." : ["はくぶん．", "はくぶん。"]
,"hakuho" : "白鳳"
,"hakumai gen" : "白米玄"
,"bakuya" : "ばくや"
,"haguruma" : "歯車"
,"hagure tanishi" : ["葉雨たにし", "谷澤史紀"]
,"hagure metal" : "はぐれメタル"
,"hagunsei" : "破軍星"
,"bakedanuki" : "バケダヌキ"
,"hakomaru" : "はこまる"
,"hako reema" : "箱れぇま"
,"hasaki shinji" : "波崎慎史"
,"hazakura satsuki" : "はざくらさつき"
,"haji" : "恥"
,"hashi cube" : "土師キューブ"
,"hashida mamoru" : "橋田鎮"
,"hashiba sunanin" : "羽柴砂忍"
,"hashiba noriko" : "羽柴紀子"
,"hashiba maiko" : "羽柴舞子"
,"hashibiro kou" : "橋広こう"
,"hashimura aoki" : "橋村青樹"
,"ichita karu" : "一太かる"
,"hashimoto" : "橋本"
,"hashimoto yuuichi" : "橋本ゆういち"
,"hashimo yuki" : "羽霜ゆき"
,"paja" : "破邪"
,"bajou takurou" : "馬乗拓郎"
,"basyosyo" : "ばしょたろう"
,"hasuno" : "蓮野"
,"hasunoue baitsu" : "はすの上梅津"
,"hasblow cream" : ["はすぶろ", "はすぶろくりーむ"]
,"hasblow" : ["はすぶろ", "はすぶろくりーむ"]
,"hasumi hiro" : "ハスミヒロ"
,"hasei agana" : "ハセイアガナ"
,"hasegawa atsuji" : "長谷川敦史"
,"hasegawa yuuichi" : "長谷川裕一"
,"hasegawa yukino" : "長谷川ユキノ"
,"hase sawara" : "はせさわら"
,"hase tsubura" : "長谷円"
,"hasebe souutsu" : ["ACはせべ", "はせべso鬱"]
,"hasebe mitsuhiro" : "長谷部臣丈"
,"hasemi ryo" : "長谷見亮"
,"hata" : "波多"
,"nariharu seiji" : "肌着少女"
,"hatakeyama tohya" : ["畠山桃哉", "綾川久氏"]
,"hachigo" : ["はちご", "ハチゴ"]
,"batten kyuki" : "八転九起"
,"hachi no hachihachi" : "はちの八八"
,"hachiha kazuhira" : "八葉一片"
,"hachimitsu" : "はちみつ"
,"hachi mega" : "八メガ"
,"hatimoto" : "鉢本"
,"hachiya makoto" : "蜂矢マコト"
,"hachuu rui" : "羽中ルイ"
,"batsu" : "ばつ"
,"hatsuuni ikura" : "初雲丹いくら"
,"batsu kakeru peke" : "ばつかけるぺけ"
,"hakka yuki" : "薄荷ゆき"
,"hazuki" : "はづき"
,"haduki" : "はづき"
,"hazuki kaoru" : "八月薫"
,"hazuki kazuo" : "葉月かずお"
,"haduki kazuo" : "葉月かずお"
,"haduki kaduhiro" : "葉月かづひろ"
,"hatsuki kyou" : ["葉月京", "百済内創"]
,"hazuki kyou" : "葉月梗"
,"hazuki shishimaru" : "葉月獅子丸"
,"hazuki shingo" : "葉月慎吾"
,"hazuki tsuyako" : "葉月つや子"
,"hazuki yuto" : "羽月ユウト"
,"hakkyou daioujou" : "発狂大往生。"
,"hadukinton" : "はづきんとん"
,"batta" : "Batta"
,"hatch" : "ハッチ"
,"hatte miina" : "八手美以菜"
,"badhand" : "BadHanD"
,"hattori shinobu" : "はっとり忍"
,"hattori masaki" : "はっとりまさき"
,"hattori mitsuka" : "服部ミツカ"
,"happoubi jin" : "八宝備仁"
,"hadumi rio" : "羽純りお"
,"hatsuyasumi" : "はつやすみ"
,"hatsuyuki" : "はつゆき"
,"particular" : "ぱてくらー"
,"paderapollo norio" : "パデラポッロのりお"
,"hatokonro" : "鳩こんろ"
,"hatoba akane" : "波止場茜"
,"hatopopoko" : "ハトポポコ"
,"hatomugi" : "はとむぎ"
,"hatomugi munmun" : "鳩麦月々"
,"hatoya mameshichi" : ["鳩矢豆七", "ねことはと"]
,"akira hatori" : "羽鳥晃"
,"hatori piyoko" : "羽鳥ぴよこ"
,"hana" : ["Hana", "hana"]
,"hanainu" : "花犬"
,"hanai hironao" : "花井ヒロナオ"
,"hanauna" : "はなうな"
,"hanao" : "はなぉ"
,"hanasaki" : "華咲"
,"kasaki04" : "華咲04"
,"hanasaku mahiru" : "花咲まひる"
,"hanazawa futoshi" : "花沢太"
,"hanazawa rena" : "華沢れな"
,"hanashino karui" : "華凌かるい"
,"hanataka retomo" : "はなたかれとも"
,"hanada yanochi" : "花田やのち"
,"hanaji" : "はなぢ"
,"hanatsumami edamamemaru" : ["花妻味枝豆丸", "花妻見枝豆丸"]
,"banabana" : "バナバナ"
,"hanahanamaki" : "花花捲"
,"hanabi" : "HANABI"
,"hanabusa nowon" : "英のをん"
,"hanafuda sakurano" : ["花札さくらの", "花札さくら"]
,"hana hook" : "華フック"
,"panama" : "PaNaMa"
,"hanamaki kaeru" : "花巻かえる"
,"hanamaru umekichi" : "花丸梅吉"
,"hanamaluo" : "ハナマルオ"
,"hanamizawa q-tarou" : "花見沢Q太郎"
,"hanamiya natsuka" : "花宮なつか"
,"hanamura oniku" : "はなむらおにく"
,"hanamura torirou" : "花村鳥郎"
,"hanamo daiou" : "はなも大王"
,"hanayashiki botan" : "花屋敷ぼたん"
,"hanawa maroru" : "花輪マロル"
,"honey" : "はにぃ"
,"honey-usako" : "はにいうさこ"
,"bunny urasawa" : "ばにー浦沢"
,"hanikura un" : "羽仁倉雲"
,"vanicooo" : "ばにこー"
,"panic attack" : "パニックアタック"
,"hanimemeo" : "ハニメメオ"
,"hanya" : "はにゃ"
,"vanilla coke" : "ヴァニラコーク"
,"vanilla boh" : "ばにら棒"
,"haneinu" : "跳犬"
,"hanekumo" : "羽雲"
,"hanetu" : "はねつ"
,"hanehane" : ["Hane☆Hane", "とがわはなまる", "戸川花丸", "春花そら"]
,"hano haruka" : "葉乃はるか"
,"hahakigi" : "ははきぎ"
,"haba hirokazu" : "幅ヒロカズ"
,"bahamucho" : "ばはむーちょ"
,"habara meguru" : "羽原メグル"
,"papipupe ponta" : "ぱぴぷぺぽん太"
,"papipurin" : "ぱぴぷりん"
,"hapirorina" : "はぴろり菜"
,"parfait" : "ぱふぇ"
,"hamao" : "Hamao"
,"hamaguchi mitama" : "濱口味たま"
,"hamaguri kinome" : "蛤木の芽"
,"hamashima shigeo" : "はましま薫夫"
,"hamada kinnosuke" : "はまだ金之介"
,"hamada yutaka" : "ハマダユタカ"
,"hamada yoshikadu" : "浜田よしかづ"
,"hamachi" : "ハマチ"
,"hamatyonn" : "ハマちょん"
,"hamamura toshikiri" : "はまむらとしきり"
,"hamamoto ryuusuke" : "濱元隆輔"
,"hamayarawan" : "はまやらわん"
,"hamiya" : "食宮"
,"hamiltan" : "ハミルタン"
,"hamura wataru" : ["羽村わたる", "栗東てしお", "くら☆りっさ"]
,"hamo" : "はも"
,"hayakawa akari" : "早川あかり"
,"hayakawa naomi" : "早川ナオミ"
,"hayakawa mamoru" : "早川守"
,"hayake" : "はやけ"
,"hayasaka natsuki" : "早坂奈槻"
,"hayashi" : "Hayashi"
,"hayashi sakura" : "早矢志さくら"
,"hayashi soushiki" : "林宗識"
,"hayashida toranosuke" : "林田虎之助"
,"hayashibara hikari" : "林原ひかり"
,"hayashi mario" : "林マリオ"
,"hayashiya shizuru" : "林家志弦"
,"hayashiya daizaemon" : "林家大佐衛門"
,"hayashiya himehachi" : "林家姫八"
,"hayashiya pe" : "林家ぺー"
,"hayase hashiba" : "速瀬羽柴"
,"hayase misaki" : "速瀬みさき"
,"hayase yoshihito" : "早瀬義人"
,"hayano rinta" : "早野りんた"
,"hayabusa jirou" : "隼次郎"
,"hayabusa shingo" : "はやぶさ真吾"
,"hayami osamu" : "速水オサム"
,"hayami kuro" : "速水くろ"
,"hayami jun" : "早見純"
,"hayami yami" : "はやみやみ"
,"hayami yumi" : ["速水憂海", "井口ユミ", "ひらいけい"]
,"hayami rokusichi" : "速水ろくしち"
,"payochiyo" : "ぱょちょ"
,"haraita" : "はらいた"
,"paragasu" : "ぱらがす"
,"haraguchi kiyoshi" : "原口清志"
,"harakucchi" : "原くっち"
,"harasaki" : "原崎"
,"harazaki takuma" : "はらざきたくま"
,"harasaki takuma" : "はらざきたくま"
,"hara sakeru" : "はらさける"
,"hara shigeyuki" : "原茂之"
,"harada shoutarou" : "原田将太郎"
,"harapeko kakko-nemumari" : ["はらぺこ（眠）", "はらぺこ(眠)"]
,"hara" : "はらへら"
,"parabola" : "ぱらボら"
,"harami" : "ハラミ"
,"pararan" : "ぱららん"
,"valiant" : "ばりあんと"
,"pari-miki" : "ぱり～みき"
,"hariu kouta" : "針生幸太"
,"varios" : "ヴァリオス"
,"harigane shinshi" : "針金紳士"
,"hariken hanna" : "はりけんはんな"
,"hariken ryuu" : "破李拳竜"
,"bari gonzou" : "馬利権造"
,"haritama hiroki" : "針玉ヒロキ"
,"haru" : ["Haru", "HaRu", "はる"]
,"hal" : ["ハル", "hal"]
,"haruichigo" : "はるいちご"
,"haruomi" : ["治臣", "冒険工房"]
,"harukaze unipo" : "春風うにぽ"
,"harukaze koucha" : "春風紅茶"
,"harukaze saki" : ["春風サキ", "宮原ナオ"]
,"harukaze soyogu" : "春風ソヨグ"
,"harukaze daiki" : "春風大樹"
,"harukaze do-jin" : "春風道人"
,"haruka tomoe" : "遥巴絵"
,"haruka natsuki" : "遙華ナツキ"
,"harukane" : "治兼"
,"haruki" : ["春輝", "猪上春樹"]
,"haruki genia" : "はるきゲにあ"
,"haruhisky" : ["はるきち", "haruhisky"]
,"haruken" : "ハル犬"
,"harukoubou norimaki" : "春工房のりまき"
,"palco nagashima" : "パルコ長嶋"
,"harusame" : "春雨"
,"harusawa" : "ハルサワ"
,"harusuke" : "春助"
,"baltan" : "バルタン"
,"partner" : "ぱるとねる"
,"harunire ichiru" : "春楡いちる"
,"haruharu haruto" : "春々春兎"
,"harubaru haruto" : "春々春兎"
,"harufumi" : "ハルフミ"
,"haruhonya" : "はるほんや"
,"harumi jun" : "春海潤"
,"harumi zyun" : "春海潤"
,"harumi chihiro" : "ハルミチヒロ"
,"haruyukiko" : "はるゆきこ"
,"haruruyuco" : "はるるゆこ"
,"harurun" : "はるるん"
,"bareisho" : "馬鈴薯"
,"haregama shiina" : ["ハレガマシイナ", "ハレガマ"]
,"baret" : "バレット"
,"harenochiame" : "ハレノチアメ"
,"harepore" : "はれぽれ"
,"hallelujah" : "晴屋"
,"harenchi tomeko" : "はれんちとめこ"
,"paromuro" : "パロムロ"
,"ban" : "ばん！"
,"pan" : "ぱん"
,"vangaado" : "蛮画亜土"
,"bangaichi mitsugu" : "番外地貢"
,"ban kazuyasu" : "伴カズヤス"
,"bangetsu setsuka" : "晩月雪加"
,"ayuya" : ["万国あゆや", "あゆや"]
,"hanzaki jirou" : "はんざきじろう"
,"panta" : "ぱん太"
,"pandain" : "パンダィン"
,"panchira steak" : "ぱんちらステーキ"
,"pantsu kaburou" : "パンツカブロウ"
,"hanpera" : "はんぺら"
,"hanpen" : "はんぺん"
,"bang-you" : "BANG-YOU"
,"henrybird" : "半里バード"
,"pia pia" : "ぴあぴあ"
,"b.tarou" : "B.たろう"
,"hiiaru" : "ひいある"
,"bkyu" : "B級"
,"b-ginga" : "B-銀河"
,"hiiko" : "日衣子"
,"peach ku" : "桃区"
,"p-chiku" : "桃区"
,"beat" : ["Beat©", "Beat"]
,"benantoka" : "Beなんとか"
,"b village" : ["Bビレッジ", "B・ビレッジ", "ブラッドビレッジ", "ブラッド・ビレッジ"]
,"b-mary" : "B-MARY"
,"hi-mosu" : ["ひ～もす", "ひーもす"]
,"hiiragi hizashi" : "柊ひざし"
,"hiiragi popura" : "柊ぽぷら"
,"hiiragi masaki" : "柊柾葵"
,"hiiragi masami" : "柊まさみ"
,"hiiragi yuichi" : "柊裕一"
,"b-river" : "B-RIVER"
,"hiiro" : "ひいろ"
,"hiura r" : "火浦R"
,"hiura papiko" : "火浦パピコ"
,"pierre norano" : "ピエールのらの"
,"pierre yoshio" : ["ピエール☆よしお", "ピエール・よしお"]
,"piero" : "Piえろ"
,"higa" : "ひが"
,"higa asato" : "ひがあさと"
,"picao" : "ぴかお"
,"higaki akiko" : "ひがきあきこ"
,"hikagi tatsuhiko" : "緋鍵龍彦"
,"hikage eiji" : "日陰影次"
,"hikage tetsuo" : "日影鉄雄"
,"hikage hinata" : "日陰ひなた"
,"higashi" : "ひがし"
,"higashide irodori" : "東出イロドリ"
,"higashitotsuka raisuta" : "東戸塚らいすた"
,"higashitotsuka rai suta" : "東戸塚らいすた"
,"higashino mikan" : "東野みかん"
,"higashimidou hisagi" : "東御堂ひさぎ"
,"higashiyama show" : "東山翔"
,"higata" : "HIGATA"
,"higata akatsuki" : "ヒガタアカツキ"
,"pikachi" : "ぴかち"
,"hikabe sakuho" : "ひかべさくほ"
,"hikarino daichi" : "光野大地"
,"hikaru" : "日袈流"
,"hikawa hekiru" : "氷川へきる"
,"hikigaeru" : "－gaL"
,"hikitogu" : "ひきとぐ"
,"higuchi aya" : "樋口あや"
,"higuchi isami" : "ひぐちいさみ"
,"higuchi takeru" : "樋口武流"
,"pikupikun" : ["ピクピクン", "ピロンタン"]
,"pickles" : "ピクルス"
,"hige" : "ひげ"
,"hikeshi" : "119"
,"higeta" : "ひげた"
,"higenamuchi" : "ひげなむち"
,"hige masamune" : ["ひげ政宗", "ひげ"]
,"hikoma hiroyuki" : "彦馬ヒロユキ"
,"hicoromo kyouichi" : "緋衣響一"
,"hisauchi michio" : "ひさうちみちお"
,"hisakabe oto" : "久壁おと"
,"anzu hisagami" : "久神あんず"
,"hisakawa tinn" : "久川ちん"
,"hisagi" : "ひさぎ"
,"hisasi" : "Hisasi"
,"hisatomi shintarou" : "久富慎太郎"
,"pizanuko" : "ぴざぬこ"
,"hisano" : "ひさの"
,"hisahiko" : "久彦"
,"hisama kumako" : ["ひさまくまこ", "久麻くまこ"]
,"hisayakiq" : "ひさやききゅう"
,"pizza yorozu" : "ピザ萬"
,"hisawa yumi" : "ひさわゆみ"
,"hishigata tomaru" : "ひし形とまる"
,"pija" : "ピジャ"
,"kasha" : "火車"
,"bijogi junction" : "美女木ジャンクション"
,"hijiri" : "聖"
,"tadano satoru" : ["聖", "tadano sotoru"]
,"saint shiro" : "聖シロー"
,"hijiri tsukasa" : "聖☆司"
,"hijiribashi ran" : "聖橋蘭"
,"hisui" : "翡翠石"
,"pistachio" : "ピス☆タチオ"
,"histamine c" : "ヒスタミンC"
,"piston" : "ピストン"
,"pistonring nishizawa" : ["ピストンリング西沢", "西沢みずき"]
,"bizen dorobune" : "備前泥舟"
,"hidaka suzune" : ["飛鷹鈴音", "ひだかすずね"]
,"hidaka toworu" : "ヒダカトヲル"
,"hidaka riku" : "日高陸"
,"hitagiri" : ["ヒタギリ", "日滾"]
,"hida mari" : "妃田マリ"
,"hidari" : "左"
,"hidari kagetora" : "左カゲトラ"
,"hidarite tarou" : "左手太郎"
,"hidiri rei" : ["ヒヂリレイ", "ひぢりれい", "聖レイ", "聖麗", "石川マサキ"]
,"hitsuka no tsukimiko" : "ひつか"
,"hizuki akira" : "緋月アキラ"
,"hizuki mai" : ["飛月まい", "ひづきまい"]
,"hiduki mai" : ["ひづきまい", "飛月まい"]
,"hiduki yayoi" : "ひづき夜宵"
,"bigshine" : "ビッグシャイン"
,"big house" : "ビックハウス"
,"hissatsukun" : "ひっさつくん"
,"hitsujiko" : ["羊子", "佐倉小枝"]
,"hitsuji takako" : "ひつじたかこ"
,"hitsujino" : "羊乃"
,"hitsuzino yashito" : "未野やしと"
,"hitsuji hako" : "日辻ハコ"
,"hitsuji bako" : "羊箱"
,"hitsujibane shinobu" : "羊羽忍"
,"bitch goigostar" : ["ビッチ☆ゴイゴスター", "ビッチ★ゴイゴスター"]
,"pizza" : "ぴっつぁ"
,"hitsumabushi" : "ヒツマブシ"
,"hide-san" : "ひでSAN"
,"hidebou" : "ひでぼう"
,"hidemaru" : "英丸"
,"hidemaro" : "ひでまろ"
,"hide min" : "ひでミン"
,"hiten" : "Hiten"
,"hitoi" : "灯問"
,"hitotsuba" : "ひとつば"
,"hitotsu yukimoto" : "単ユキモト"
,"hitotose rin" : "ひととせりん"
,"hitomaru" : "人丸"
,"hitomi kousuke" : "人見広介"
,"hitori" : "火鳥"
,"hinaki" : "ひな姫"
,"hinakuma" : "ひなくま"
,"hinako yui" : "比奈子惟"
,"hinasaki yo" : "雛咲葉"
,"hinase aya" : "雛瀬あや"
,"hinata aimi" : "日向アイミ"
,"hinata momo" : "ひなたもも"
,"ouji hiyoko" : ["ひなづか凉", "桜路ひよこ"]
,"hinahara emi" : "雛原えみ"
,"hinahara hajime" : "雛原肇"
,"hinamatsuri touko" : "雛祭桃子"
,"hinamori mizuha" : "雛森瑞羽"
,"hinayuki usa" : "ヒナユキウサ"
,"hinemosu notari" : "ひねもすのたり"
,"hinoue itaru" : "樋上いたる"
,"hinoe nami" : "ヒノエナミ"
,"hinooka shuuji" : "緋ノ丘終次"
,"hinokawa jun" : "火の川純"
,"hinoki kazushi" : "ひのき一志"
,"hino satoshi" : "火野聡司"
,"hino karoku" : "ひの鹿路"
,"hinoshita akame" : ["日之下あかめ", "日乃下あかめ"]
,"hinotsuki neko" : "日月ネコ"
,"hino toshiyuki" : "飛野俊之"
,"hino hino" : "緋乃ひの"
,"hino yamada" : "ヒノ山田"
,"hinori" : "ひのり"
,"hibari rei" : "ひばり・れい"
,"vhivaru" : "びばる"
,"vivi" : "びび"
,"hibiki ai" : "響あい"
,"hibiki jun" : "ひびき純"
,"hibiki seiya" : "響星哉"
,"hibiki mio" : "ひびき澪"
,"hibiki rika" : ["日比木リカ", "日々木リカ"]
,"hibino sho" : "日比野翔"
,"bifidus" : "ビフィダス"
,"pipo" : "ピポ"
,"hippopotamus" : "ひぽぽたます"
,"hipopotamus" : "ひぽぽたます"
,"hima" : "HIMA"
,"himajin no izu" : "暇人のいず"
,"himino" : "ひみの"
,"himukai kyousuke" : "日向恭介"
,"himukai yuji" : ["日向悠二", "西向アズタカ"]
,"himura eiji" : "緋村えいじ"
,"himura jin" : "緋邑陣"
,"himura masaru" : ["緋村まさる", "ヒムラー魔猿"]
,"masaru himura" : "緋村まさる"
,"himuro shunsuke" : "氷室しゅんすけ"
,"himuro serika" : "氷室芹夏"
,"himuro hakka" : "氷室はっか"
,"himei yoru" : "ひめいよる"
,"himeeda yuuto" : ["姫枝夕人", "上田夢人"]
,"himesama" : "姫様"
,"himenogami kinta" : "姫ノ神金太"
,"himenogi apo" : "姫乃城あぽ"
,"himeno komomo" : "姫野こもも"
,"himeno mikan" : "姫野蜜柑"
,"hime hajime" : "姫はじめ"
,"himehachi" : "ひめはち"
,"jtveemo" : ["ビモ", "JT_Veemo"]
,"100yen locker" : "100円ロッカー"
,"hyaku takeshi" : "百武士"
,"108 gou" : "108号"
,"byakkomaru" : "白虎丸"
,"hiyama shuri" : "ヒヤマシュリ"
,"beauty hair" : ["ビューティ・ヘア", "藤原ひさし"]
,"hyouga." : "ひょうが。"
,"hyougaki" : "氷河期"
,"hyouju issei" : "氷樹一世"
,"hyoujun mai" : "氷純舞"
,"hyou takayuki" : ["豹高ユキ", "豹高之"]
,"hyouri" : "表裏"
,"hiyoko" : "hiyocco"
,"hiyoko." : "ひよこ。"
,"hiyoko-n" : ["飛四子・N", "飛四子.N"]
,"hyocorou" : "ひょころー"
,"hiyoshi hana" : "日吉ハナ"
,"piyodera mucha" : "ぴよ寺むちゃ"
,"hiyo hiyo" : "ひよひよ"
,"piyopiyo" : "ぴよぴよ"
,"hiyori mizuki" : "陽寄瑞貴"
,"pyon-kti" : "ぴょん吉"
,"biyondo" : "びよんど"
,"hiraoka ryuichi" : "平岡竜一"
,"hiraki naori" : "平木直利"
,"hirasaka fuyu" : "比良坂冬"
,"pirason" : "ぴらそん"
,"hira taira" : "ひらたいら"
,"hirata norio" : "平田のりお"
,"pirano" : "ピラノ"
,"hirano kawajuu" : "平野河重"
,"hirano kouta" : "平野耕太"
,"hirano takeshi" : "平野武士"
,"hirano tomoki" : "平野トモキ"
,"hirano yuuya" : "平野遊也"
,"hira hira" : "比良ひら"
,"pilaf modoki" : "ぴらふもどき"
,"hirama hirokazu" : ["平間ひろかず", "鳴子"]
,"hiramaru akira" : "平丸あきら"
,"hirame" : ["ヒラメ", "T.F.P [Fishin]"]
,"molokonomi" : ["平屋のぼり", "MOLOKONOMI"]
,"hirayan" : "ひらやん"
,"hirari" : "ひらり"
,"pira ruku" : "ぴら・るく"
,"periodo" : "ピリオドö"
,"billion" : "Billion"
,"hirihori harimoru" : "ひりほりはりもる"
,"hiryuu takahiro" : "緋龍高弘"
,"hiryuu ran" : "飛龍乱"
,"piririnegi" : "ぴりりねぎ"
,"hiru okita" : "昼沖太"
,"pirukusu" : "ぴるくす"
,"hirune" : "昼寝"
,"hiruma kouji" : "ひるまこうじ"
,"hirekatsu" : "ヒレカツ"
,"hiro" : ["博", "ひろ"]
,"piro" : "Piro"
,"hiroichi" : "ヒロイチ"
,"hiroe rei" : ["広江礼威", "れっどべあ"]
,"hiro kazuki" : "比呂カズキ"
,"hirokawa" : "ヒロカワ"
,"hirokawa kouichirou" : "広川浩一郎"
,"hirokawa tomo" : "緋呂河とも"
,"hirogoori akio" : "広郡明生"
,"hiroshi" : "HIROSHI"
,"hiroshiki" : "宏式"
,"hirosue maron" : "広末まろん"
,"hirose kaito" : "広瀬海斗"
,"hirose madoka" : "広瀬まどか"
,"hirose miho" : "ひろせみほ"
,"hirota" : "ひろた"
,"hirotake awataka" : "粟岳高弘"
,"hirota masatane" : "廣田眞胤"
,"hironii" : "ひろにい"
,"hirono akitomi" : "ひろのあきとみ"
,"hirono azuma" : "広乃あずま"
,"hirob816" : "ひろびー"
,"hiro hiroki" : "ひろひろき"
,"biro-budou" : "びろぶどう"
,"birobon" : "ビロボン"
,"piro mayu" : "ぴろまゆ"
,"piromizu" : "ピロ水"
,"hiromoto shinichi" : "ヒロモト森一"
,"hiromori shinobu" : ["ひろもりしのぶ", "洋森しのぶ", "みやすのんき"]
,"hiroya" : "広弥"
,"hirowa nagi" : "広輪凪"
,"pirontan" : ["ピロンタン", "ピクピクン"]
,"biwa" : "枇杷"
,"biwamaro" : "琵琶麻呂"
,"binkan argento" : "びんかんargento"
,"pink taro" : "ピンク太郎"
,"binsen" : "びんせん"
,"hindenburg" : "ひんでんブルグ"
,"binto" : "瓶人"
,"binbi" : "びん美"
,"faith" : ["Faith", "faith"]
,"factory43" : ["FACTORY43", "FAC-43"]
,"fuckuma" : "ふぁっ熊"
,"fabiyama" : "ファビ山"
,"fan" : "FAN"
,"funky function" : "ファンキーファンクション"
,"fan no hitori" : "煌野一人"
,"bui" : "武夷"
,"feena" : ["FEENA", "FEENAA", "桜娘"]
,"fever-san" : "フィーバーさん"
,"v gata tankitou" : "V型単気筒"
,"fishinloli" : "フィッシンローリ"
,"bui bui" : "舞井武依"
,"5th luna" : "5thルナ"
,"fuu" : "Fuu"
,"pooh" : "POOH"
,"puuakachan" : "プーアカちゃん"
,"fuun daiki" : "風雲だいき"
,"fuuga" : "楓牙"
,"fuuga utsura" : "風雅うつら"
,"fuuga yuyu" : "風雅ゆゆ"
,"zeroshiki kouichi" : "ぷぅ崎ぷぅ奈"
,"fuusen club" : "風船クラブ"
,"fuuta" : "ふーた"
,"futamaro" : ["ふうたまろ", "森川ひさし"]
,"booch" : "ぶーち"
,"bu-chan" : "ぶーちゃん"
,"fuuna" : "ふうな"
,"funa" : "ふうな"
,"fuurai" : "風籟"
,"foolest" : "ふぅりすと"
,"fuurin" : ["風鈴", "吉祥寺もなか"]
,"fei" : "飛燕"
,"fey tas" : "Fey Tas"
,"fuetakishi" : "フエタキシ"
,"fetio" : "フェチ男"
,"fechi" : "ふぇっちー"
,"phoenicia masako" : ["フェニキア雅子", "天羽真理"]
,"puebro" : "ぷえぶろ"
,"fuemagari otoko" : "笛曲男"
,"fuemagariotoko" : "笛曲男"
,"fueru nattou" : "増える納豆"
,"fox-" : "ふぉっくスー"
,"forester" : "ふぉれすた"
,"follet" : "ふぉれっと"
,"fontin" : "ふぉんてぃん"
,"fukagawa emu" : "不可川えむ"
,"fukada takushi" : "深田拓士"
,"pucachi" : "ぷかち"
,"bukatsu" : "ぶかつ"
,"fukami naoyuki" : "深水直行"
,"fukita mafuyu" : "吹田まふゆ"
,"fukyo waon" : "不京わおん"
,"fukui sora" : "福井空"
,"fukuinu" : "福犬"
,"fukuki tete" : "鰒生テテ"
,"fukuguri yuuto" : "福栗悠斗"
,"fukudahda" : "フクダーダ"
,"fuguta-ke" : "フグタ家"
,"fukuda masashi" : "福田雅志"
,"fukuda rio" : "福田りお"
,"fukunaga yukito" : "福永ゆきと"
,"fukufukuan" : "福々餡"
,"fukumaaya" : "ふくまーや"
,"fukuyama naoto" : "復八磨直兎"
,"fukura hagi" : "吹浦ハギ"
,"fuku-ryu" : "伏竜"
,"fukurou" : "フクロウ"
,"fukurou doumin" : "梟道眠"
,"fukuroumori" : "梟森"
,"fukurokouji" : "袋小路"
,"fusataka sikibu" : "ふさたか式部"
,"fusatsugu" : "ふさつぐ"
,"fujii akiko" : ["ふじいあきこ", "朱沙みとな"]
,"fujii sam" : "藤井サム"
,"fujii sumio" : "藤井純生"
,"fujii yuhka" : "ふじいゆうか"
,"fujioka tamae" : ["藤岡タマヱ", "藤岡たまえ"]
,"fujioka toki" : "藤岡とき"
,"fuji katsupiko" : "ふじかつぴこ"
,"fujikawa satoshi" : "不二河聡"
,"fujikawa yuka" : "藤川祐華"
,"fujikawa riko" : "藤川梨子"
,"fujiku yuima" : "藤久ゆいま"
,"fujikura kazune" : "藤倉和音"
,"fujisaka kuuki" : "藤坂空樹"
,"fujisaka lyric" : "藤坂リリック"
,"fujisaki kou" : "藤崎こう"
,"fujisaki hikari" : "藤崎ひかり"
,"fujisaki makoto" : "藤咲真"
,"fujisaki rie" : "藤崎りえ"
,"fujizarashi" : "ふじざらし"
,"fujisawa tatsurou" : "ふじさわたつろー"
,"fuji sangou" : ["富士参號", "K・みつふじ", "K・MITSUFUJI"]
,"fuji shinobu" : "藤忍"
,"fujishima sei1go" : "藤島製1号"
,"fujishiro seiki" : "藤城成騎"
,"fujise akira" : "藤瀬あきら"
,"fujita jun" : ["ふじたじゅん", "菊千代"]
,"fuji tasuku" : ["藤匡", "藤佐"]
,"fujita naoya" : "藤田直哉"
,"fujita hidetoshi" : "フジタヒデトシ"
,"fujitsuna" : "フジツナ"
,"bujidearu" : "ぶじである"
,"fujito" : "藤渡"
,"fuji dokoro" : "藤処"
,"fujinaga eri" : "Fujinaga Eri"
,"huzinami kaoru" : "藤波薫"
,"fujinomiya yuu" : "藤ノ宮悠"
,"hujinon" : "ふじのん"
,"fujibayashi haru" : "フジバヤシ春"
,"fuji-han" : "ふじはん"
,"fujibuchi takahisa" : "藤渕タカヒサ"
,"fujima takuya" : "藤真拓哉"
,"fujimaru" : "藤丸"
,"fujimaru arikui" : "ふぢまるありくい"
,"fujimi" : "藤味"
,"fujimiya omurice" : "藤宮★オムライス"
,"fujimiya hiroshi" : "藤宮博士"
,"fujimura erika" : "藤村絵梨香"
,"fujimura q" : "藤村久"
,"fujimura tomoki" : "藤村知樹"
,"fujimoto ikura" : "藤本いくら"
,"fujimoto sei" : "ふじもとせい"
,"fujimoto tsukune" : "藤本つくね"
,"fujimoto hideaki" : "藤本秀明"
,"fujimori ikuno" : ["藤守郁乃", "藤森郁乃"]
,"fujimori saya" : "ふじもり沙耶"
,"fujimori yuyukan" : "藤森ゆゆ缶"
,"fujiya" : "ふじや"
,"fujiyama" : "富士やま"
,"fujiyama takashi" : "フジヤマタカシ"
,"fujiyama hyouta" : "富士山ひょうた"
,"fujiya yoshiko" : "富士屋好子"
,"fujyu" : "フジュ"
,"fujoujoshi" : "不嬢女子"
,"fushoku" : "腐蝕"
,"fujiyoshi" : "ふじよし"
,"fujirin" : "ふじりん"
,"fujiwara akihisa" : "藤原秋久"
,"fujiwara shunichi" : "藤原俊一"
,"fujiwara noriwo" : "藤原ノリヲ"
,"fujiwara hisashi" : "藤原ひさし"
,"fujiwara yumi" : "藤原結実"
,"fujiwara warawara" : "藤原々々"
,"fusu" : "ふす"
,"fuzui" : "不随"
,"fuseya niwaka" : "伏夜俄"
,"buta" : "BUTA"
,"bttamako" : "豚たま子"
,"butachang" : "ぶたちゃんぐ"
,"futatsuno-peanuts" : "ふたつのピーナツ"
,"futaba masumi" : "双葉ますみ"
,"futaba yae" : "双葉八重"
,"hakaba yodomu" : "双葉淀夢"
,"futamine kobito" : "二峰跨人"
,"butayaro pork" : "豚野郎ぽーく"
,"petitgori-chan" : "ぷちゴリちゃん"
,"bookmoun10" : "ぶっくまうんten"
,"butcha-u" : "ブッチャーU"
,"butte" : "ぶって"
,"fudou ran" : "不動乱"
,"futou ryouko" : "不透りょうこ"
,"futogane hiromi" : "ふとがね裕美"
,"hutoshi" : "ふとし"
,"futoshi slim" : "ふとしSLIM"
,"fudono fudou" : "ふどのふどう"
,"ptomaine" : "プトマイン"
,"futon no naka" : "布団ノ中"
,"funatsu kazuki" : "ふなつかずき"
,"funato hitoshi" : ["船戸等", "船戸ひとし", "ふなとひとし"]
,"bunapi 397 yen" : "ぶなぴー397円"
,"funaho" : "船帆"
,"funabori nariaki" : "船堀斉晃"
,"funamuku" : "フナムク"
,"funamushi" : "船虫"
,"funaya sakichi" : "船弥さ吉"
,"funiai riko" : "不似合りこ"
,"punita" : "ぷにた"
,"punyon" : "プニョン"
,"bunoke" : "ぶのけ"
,"bubuzuke" : "ぶぶづけ"
,"pupunezumi" : "ぷぷねずみ"
,"bubonic" : "ぶぼにっく"
,"fummy" : "ふみー"
,"fumio" : "フミオ"
,"fumizuki kou" : "文月晃"
,"fumitsuki sou" : "二三月そう"
,"fumizuki misoka" : "文月みそか"
,"fumihiko" : "ふみひこ"
,"fumihiro" : "ふみひろ"
,"fumimaro" : "フミマロ"
,"fumiya" : "文哉"
,"fumiwaki shunji" : "ふみわきしゅんじ"
,"fuyakero" : "ふやケロ"
,"fuyuichi monme" : "冬壱もんめ"
,"fuyukaze tsubasa" : "冬風つばさ"
,"fuyuka ren" : "冬香れん"
,"fuyuki masato" : "冬木真人"
,"yukito" : "冬咲ゆきと"
,"fuyujin sora" : "冬陣そら"
,"fuyutugu" : "冬嗣"
,"fuyu naga" : ["冬長", "蜈蚣Melibe", "斉藤佳素理", "斎藤佳素理", "にゃかな"]
,"fuyunagi reku" : "冬凪れく"
,"fuyuno mikan" : "冬野みかん"
,"fuyu mikan" : "冬みかん"
,"fuyuwa kotatsu" : "冬和こたつ"
,"puyo" : "ぷよ"
,"fuyou fuyusuke" : "芙蓉フユスケ"
,"puyocha" : "ぷよちゃ"
,"puyon" : "ぷよん"
,"fly" : "フライ"
,"friday" : "フライデイ"
,"buraindogatei" : "武羅淫怒我帝"
,"furau" : "ふらう"
,"plug" : "ぷらぐ"
,"brother bob" : "ブラザー・ボブ"
,"brother pierrot" : "ブラザーピエロ"
,"blastbeat" : "BLASTBEAT"
,"furatsu" : "ふらつ"
,"black olive" : "ブラックオリーブ"
,"black heart" : "BLACK HEART"
,"blackheart" : "BLACK HEART"
,"purapa" : "ぷらぱ"
,"furari" : "フラリ"
,"flowerchild" : ["Flowerchild", "FLOWER CHILD"]
,"franken n" : "フランケンN"
,"branshea" : "ブランシェア"
,"francois" : "ふらんそーわ"
,"brandon hakase" : "ブランドン博士"
,"puranpuman" : "ぷらんぷまん"
,"freedom nakai" : "フリーダム中井"
,"fried" : "ふりいど"
,"dt hone" : "フリーハンド魂"
,"freehand tamashii" : "フリーハンド魂"
,"furisuku" : "ふりすく"
,"puritei" : "ぷりてゐ"
,"buriteri" : ["鰤てり", "鰤照焼"]
,"puripuri jet" : "プリプリJET"
,"puribou" : "プリ坊"
,"flugel" : "Flugel"
,"furyouhin" : "不良品"
,"purin" : "ぷりん"
,"furu" : "古"
,"blue gk" : "Blue_Gk"
,"blue blood" : "BLUE BLOOD"
,"huruga yuudai" : "フルガユウダイ"
,"niiyama takashi" : ["古川やすし", "新山たかし"]
,"furuta kazuya" : "古田一也"
,"furutani rayu" : "古谷ラユ"
,"bull terrier" : "ブルテリア"
,"full house" : "フルハウス"
,"burubera" : "ブルベラ"
,"bloomer hogero" : ["ぶるマほげろー", "ぶるまほげろー"]
,"blmanian" : ["ブルマン", "ぶるまにあん"]
,"purumetal" : "ぷるめたる"
,"furumoto takeru" : "降本孟"
,"buredo" : ["武礼堂", "村正みかど"]
,"blade" : "BLADE"
,"fred kelly" : ["フレッド・ケリー", "フレッドケリー", "FRED KELLY"]
,"protohotel" : "プロトホテル"
,"protonsaurus" : "プロトンザウルス"
,"prophecy" : "ぷろへしぃ"
,"furomochi" : "フロモチ"
,"fuwa satoru" : "不破悟"
,"fuwa shinri" : "不破慎理"
,"bun" : "ぶん"
,"fumi miyabi" : "文雅"
,"funjin" : "FUN人"
,"bunchin" : "ぶんちん"
,"phantom" : "ふぁんとむ"
,"funnyaka" : "フンニャカ"
,"bunbuku nagi" : "分福ナギ"
,"bunbon" : "ぶんぼん"
,"funwari rice" : "ふんわり☆らいす"
,"pei" : "ぺい"
,"heianmochao" : "黑暗魔巢"
,"vyo" : "べぃお"
,"heijitu" : "平日"
,"beijuu" : "米獣"
,"heizo" : "HEIZO"
,"beidan" : "米男"
,"heirou" : "へいろー"
,"deadflow" : "Б"
,"peter mitsuru" : "ペーター・ミツル"
,"pegasus" : "ぺがさす"
,"hekaton" : "へかとん"
,"begirama" : "ベギラマ"
,"bekotarou" : "ベコ太郎"
,"heshi" : "HESHI"
,"vegetable" : "ゔぇじたぶる"
,"peso" : "ペソ"
,"hetaren" : "へたれん"
,"petancoside" : "ぺたんこさいど"
,"hechi" : "へち"
,"bekkankou" : "べっかんこう"
,"betty" : "べってぃ"
,"heppokokun" : ["へっぽこくん", "ヘッポコクン"]
,"betsuyaku shou" : "別役礁"
,"beti" : "べてぃ"
,"petenshi" : "ペテン師"
,"pedocchi" : "ぺどっち"
,"pedopetton" : "ぺどぺっとん"
,"bennys" : "BENNY'S"
,"peniire" : "ペニイレ"
,"peniken" : "ぺに健"
,"penicillin xi" : "ペニシリンXI"
,"yuuka rei" : ["紅染月夕也", "紅染月友也", "優華麗"]
,"benimura karu" : "紅村かる"
,"henoeno" : "へのえの"
,"heno heno" : "へのへの"
,"heaven-11" : "HEAVEN-11"
,"bebebe" : "ベベベ"
,"pepo" : "ぺぽ"
,"herada mitsuru" : "ヘラダミツル"
,"perry uraga" : "ペリー浦賀"
,"helios" : "へりおす"
,"heriyama" : "縁山"
,"herio" : "ヘリを"
,"hell azarashi" : "ヘルアザラシ"
,"healthyman" : "ヘルシーマン"
,"bells" : ["Bell's", "Bell’s"]
,"velzhe" : "ヴェルゼ"
,"persona" : "ぺるそな"
,"peruri" : "ぺるり"
,"herurun" : "へるるん"
,"berose" : "べろせ"
,"herohero tom" : "へろへろTom"
,"hen" : "HEN"
,"henkuma" : "変熊"
,"benjamin" : "ベンジャミン"
,"penname wa nai" : "ペンネームは無い"
,"henreader" : "へんりいだ"
,"hoyhoy colo" : "ホイホイこーろ"
,"poin" : "ぽいん"
,"point takashi" : ["ぽいんとたかし", "みるく工房", "妄想低気圧"]
,"boui" : "暴威"
,"houou kim" : ["鳳凰KIM", "鳳凰たん"]
,"houou-tan" : ["鳳凰たん", "鳳凰KIM"]
,"houkisei" : "ほうき星"
,"boukenou hajime" : ["冒険王ハジメ", "冒険王はじめ"]
,"houtengeki" : "方天戟"
,"bouningen" : "某人間"
,"bou hachi" : "忘八"
,"houmitsu" : "方密"
,"houruri" : "蓬瑠璃"
,"bow rei" : "某零"
,"houwa aji" : "蓬羽あじ"
,"hoeru tarou" : "吠えるタロウ"
,"boichi" : "Boichi"
,"bowcan" : "ぼーかん"
,"po-ju" : ["ぽ～じゅ", "ぽーじゅ"]
,"potion" : "ぽ～しょん"
,"hoono yurumu" : "頬乃ゆるむ"
,"homing" : "ホーミング"
,"bonehead" : "Bone Head"
,"hoka" : "ほか"
,"pokachu" : "ぽかちゅ"
,"hokama mitsuri" : "ほかまみつり"
,"boku" : "ぼく"
,"bokuto kimiha" : "僕刀君刃"
,"hokuna rin" : "北那りん"
,"bokuboku" : "僕々"
,"hogeramu" : "ほげらむ"
,"pokoten" : "ぽこてん"
,"poshi" : "ぽし"
,"hoshiai hilo" : "星逢ひろ"
,"hoshi akira" : "星明"
,"hoshii nasake" : "星井情"
,"hoshika" : "ほしか"
,"hoshikawa danpa" : "星河でんぱ"
,"hoshisaka ami" : "星坂網"
,"hoshizaki hikaru" : "星崎ひかる"
,"hoshizaki leo" : "星崎レオ"
,"hosizora mikoto" : "星空ミコト"
,"hoshi takeru" : "ほしたける"
,"hoshitsuki neon" : ["星憑ネオン。", "さきうらら"]
,"hoshiduki melon" : "星月めろん"
,"hoshitoyuri" : "ほしとゆり"
,"hoshi to lucky" : "ほしとラッキー"
,"hoshina meito" : "星名めいと"
,"hoshino uirou" : ["星野ういろう", "星野浩字"]
,"hoshino emiko" : "ほしのえみこ"
,"hoshino darts" : "星乃だーつ"
,"hoshi nohara" : "ほしのはら"
,"hoshino fuuta" : "ほしのふうた"
,"hoshino ryuichi" : "星野竜一"
,"hoshino lily" : "星野リリィ"
,"hoshi hiroto" : "星ひろと"
,"starraisins" : ["星レーズン", "StarRaisins"]
,"boss chin" : "BOSS珍"
,"hozumi kenji" : "ほずみけんじ"
,"hozumi takashi" : "穂積貴志"
,"hota." : "ほた。"
,"hodaka akira" : "穂高アキラ"
,"potaki" : "歩滝"
,"hotate-chan" : "ほたてちゃん"
,"bota mochito" : "牡丹もちと"
,"botan mochito" : "牡丹もちと"
,"hotaryuso" : "ホタリュソ"
,"hotaru" : "ほたる"
,"botan" : "牡丹"
,"pochi." : "ぽち。"
,"bochiura hitori" : "墓地浦一人"
,"pochi katou" : "ポチ加藤"
,"pochitaro" : "ぽちたろ"
,"pochincoff" : "ポチンコフ"
,"potu" : "ぽつ"
,"potsu" : "ぽつ"
,"focke wolf" : "ほっけうるふ"
,"poccora" : "ぽっこら"
,"bosshi" : "ぼっしぃ"
,"hotta kei" : "法田恵"
,"poper" : "PoPer"
,"popponosuke" : "ぽっぽの介"
,"hodumi kaoru" : "八月朔日珈瑠"
,"hotei kazuha" : "保汀一葉"
,"potekoro" : "ぽてころ"
,"potato samurai" : "ぽてと侍"
,"hotori" : "歩鳥"
,"hotondo shindeiru" : "殆ど死んでいる"
,"pony r" : ["ポニーR", "ポニーR."]
,"hone" : "ホネ"
,"honenuki tomato" : "ほねぬきとまと"
,"honebuto danshaku" : "骨太男爵"
,"honoutsukai" : "炎使"
,"popijiro" : "ぽぴじろ～"
,"bob r" : ["暴武(R)", "暴武R"]
,"bobobo" : "ボボボ"
,"homare" : "誉"
,"pomita" : "ぽみ太"
,"pomimiko" : "ぽみみ子"
,"homura subaru" : "焔すばる"
,"homurano teruki" : "炎輝樹"
,"homunculus" : "ホムンクルス"
,"poyamu" : "ぽやむ"
,"poyo equals namaste" : "ポヨ=ナマステ"
,"hoyoyo" : "ほよよ"
,"boyon" : "ぼよん"
,"horii toshiki" : "堀井俊貴"
,"poriuretan" : ["ポリウレたん", "ぽりうれたん"]
,"horie" : "ホリエ"
,"horie tankei" : "堀江耽閨"
,"horie naoto" : "堀江なおと"
,"horieros" : "ほりえろす"
,"horikawa gorou" : "堀川悟郎"
,"polygon osushi" : "ポリゴンお寿司"
,"borisu" : "ボリス"
,"holiday yasumi" : "堀出井靖水"
,"horitomo" : "ほりとも"
,"hori hiroaki" : "堀博昭"
,"horihone saizou" : ["ほりほねさいぞう", "掘骨砕三", "小瀬秋葉"]
,"horimoto akira" : "ほりもとあきら"
,"horimoto rimi" : "堀本理未"
,"horimoto yoshimi" : "堀本理未"
,"borusiti" : "ぼるしち"
,"porutan" : "ぽるたん"
,"poruno ibuki" : "ぽるのいぶき"
,"volpe" : "ヴォルペ"
,"hormone koijirou" : "ホルモン恋次郎"
,"horosuke" : "ホロすけ"
,"poronatsu" : "ポロなつ"
,"horonamin" : "ホロナミン"
,"porori" : "ぽろり"
,"pororivista" : "ポロリビスタ"
,"poron" : "ぽろん"
,"ponke" : "本家"
,"hongou akira" : "本郷彰"
,"ponkotsu works" : "ぽんこつわーくす"
,"poncocchan" : "ぽんこっちゃん"
,"honjou hiroshi" : "本情ヒロシ"
,"honjou rie" : "本庄りえ"
,"honjou rika" : "本城リカ"
,"honjyo ruu" : "本条るう"
,"ponsu" : "PONSU"
,"ponzu" : ["ぽん酢", "来栖達也"]
,"bonske" : "ぼんすけ"
,"ponsuke" : "ポンスケ"
,"ponta" : ["PON太", "PONTA"]
,"honda arima" : "ほんだありま"
,"honda aru" : ["ほんだある", "翻田亜流"]
,"honda opon" : "本田おぽん"
,"pon takasyo" : "Pon_TAKASYO"
,"pon takahanada" : "ポン貴花田"
,"honda kurio" : "ほんだくりお"
,"honda takeshi" : "本田雄"
,"honda naoki" : "本田直樹"
,"hontani kanae" : "ほんたにかなえ"
,"pontaro" : "ぽんたろ"
,"bonten" : "梵典"
,"bondo" : "ぼんど"
,"bond" : "ぼんど"
,"hontoku" : "ホン・トク"
,"bonnari" : "ぼんなり"
,"honna wakou" : "本名ワコウ"
,"bonnou obaa-chan" : "煩悩おばあちゃん"
,"bonnouji yura" : "煩悩寺ゆら"
,"ponfaz" : "ぽんふぁーず"
,"ponpon itai" : "ぽんぽんイタイ"
,"honma shuuichi" : "本間秀一"
,"honmachi keisuke" : ["本町圭祐", "本町K介"]
,"honma naive" : "本魔ナイーブ"
,"honryo hanaru" : "本領はなる"
,"margamoid" : "まーがもいど"
,"ma-kurou" : "まー九郎"
,"maakou" : "雅亜公"
,"ma-sa" : "MA-SA"
,"mercy rabbit" : "マーシーラビット"
,"martan" : "まあたん"
,"maatsu" : "ま～つ"
,"maami" : "まあみ"
,"ma-yu" : ["ma-yu", "カニトマト"]
,"mala xiao longxia" : "麻辣小龍蝦"
,"mai" : "MAI"
,"maiami vice" : "舞亜美VICE"
,"michael harawata" : ["マイケル原腸", "乙一大弓冬"]
,"maitaimu" : "舞大夢"
,"maito shirou" : ["舞登志郎", "まいとしろう"]
,"minor boy" : "まいなぁぼぉい"
,"maineko ruru" : "舞猫ルル"
,"minority" : "マイノリティ"
,"maihama kaede" : "舞浜楓"
,"maihara matsuge" : ["舞原まつげ", "舞原マツゲ", "末下まつげ"]
,"maihime" : "舞姫"
,"maimu-maimu" : "舞六まいむ"
,"maumen" : "まうめん"
,"maekawa koubou" : ["前川★工房", "前川☆工房", "前川かずお"]
,"maekawa hayato" : "前川ハヤト"
,"maeshima ryou" : "前島龍"
,"maeda kenjirou" : "前田健二郎"
,"maeda sengoku" : "前田千石"
,"maeda toshio" : ["前田俊夫", "前田俊男"]
,"maeda futoshi" : ["マエダフトシ", "西崎泰正"]
,"macaroni and cheese" : "マカロニ＆チーズ"
,"magaki ryouta" : "間垣亮太"
,"magatama" : "マガタマ"
,"maka fushigi" : "魔訶不思議"
,"makabe gorou" : "真壁吾朗"
,"makari tohru" : "魔狩十織"
,"macaroni" : "まかろに"
,"maki" : ["MAKI", "巻"]
,"magi" : "まぎぃ"
,"makio" : "まきお"
,"mko" : "マキオ"
,"makigai ikko" : "巻貝一ヶ"
,"maximum" : "MAXIMUM"
,"makita aoi" : "魔北葵"
,"maki daikichi" : "牧だいきち"
,"maki tatsuki" : "麻樹タツキ"
,"makita yoshinobu" : "牧田良信"
,"makita yoshiharu" : "巻田佳春"
,"makina" : "まきな"
,"makina zero" : "マキナゼロ"
,"maki nyanko" : "まきにぁんこ"
,"makino kenji" : "まきの拳二"
,"makinosaka shinichi" : "牧野坂シンイチ"
,"maki hideto" : "牧秀人"
,"magifuro konnyaku" : ["magifuro蒟蒻", "magifuro"]
,"makibe kataru" : "牧部かたる"
,"makimura hiromi" : "牧村ひろみ"
,"makiya" : "真喜屋"
,"makin" : "まきん"
,"yamaguchi shunichi" : "まぐしゅんいち"
,"mg kurino" : "Mg栗野"
,"makunouchi" : "幕野内"
,"makunouchi isami" : "幕の内勇"
,"makunouchi sukeroku" : "幕ノ内助六"
,"magpoppo" : "まぐぽっぽ"
,"makuma ikeru" : "マ熊イケル"
,"makura maina" : ["真倉まいな", "真倉翔"]
,"makuro" : "まくろ"
,"maguro ouji" : "真黒皇子"
,"maguro shining" : "まぐろシャイニング"
,"maguro taishi" : "まぐろ大使"
,"maguro teikoku" : "まぐろ帝國"
,"makuwa" : ["ま☆くわ", "ま・くわ"]
,"makuwauni" : "まくわうに"
,"magekichi" : "まげきち"
,"mako kujira" : "まこくじら"
,"makosho" : "まこしょ"
,"makoto" : "睦"
,"makoto daikichi" : "まこと大吉"
,"macop" : ["Macop.", "まこぷ"]
,"masaaki" : "MASAAKI"
,"masakazu" : "まさかず"
,"masakado tsukasa" : ["将門つかさ", "まさかどつかさ", "将門司"]
,"masaki aizo" : "柾木愛造"
,"masaki kazuyoshi" : "将貴和寿"
,"masaki gunji" : "真崎ぐんじ"
,"masakichi" : "まさきち"
,"masago ryouichi" : "真砂亮一"
,"masa-nii" : "マサ兄"
,"masaharu" : "まさはる"
,"masami chie" : "柾見ちえ"
,"masamineko" : "まさみねこ"
,"masaya ichika" : "磨鞘一佳"
,"masayo" : "まさよ"
,"mashikodori" : "ましこどり"
,"majikoro" : "まじころ"
,"mashitaka" : ["ましたか", "Mashitaka"]
,"majima shiroyuki" : "間島白幸"
,"mashu" : "ましゅ"
,"mashuuko" : "摩周子"
,"mashumaro maron" : "ましゅまろまろん"
,"majoccoid" : "Majoccoid"
,"mashiraga aki" : "猿駕アキ"
,"majirou" : "まじろー"
,"mashiro shirako" : "真白しらこ"
,"mashiro shiroiro" : "真白しろいろ"
,"masu" : "ます"
,"masuo panda" : "ますおぱんだ"
,"maskwolf" : "MaskWolf"
,"mask the j" : "マスクザJ"
,"masco" : "Masco"
,"masuda" : "舛田"
,"masuda affura" : "増田逢羅"
,"masuda inu" : "ますだ犬"
,"masuda takahiro" : "ますだたかひろ"
,"masuda tsuyoshi" : ["増田剛", "うらまっく"]
,"masudate toshihide" : "舛舘俊秀"
,"masuda naoki" : "ますだ直紀"
,"masutabe kokemaru" : "増田部苔丸"
,"masutabe shou" : "増田部翔"
,"mustang r" : "マスタングR"
,"masumi" : "ますみ"
,"masuyama kei" : "ますやまけい"
,"masora ema" : "眞空エマ"
,"madaco" : "まだ子"
,"matashita kintama" : "股下金珠"
,"madara sai" : "まだらさい"
,"mataro" : "魔太郎"
,"machi gaita" : "街凱太"
,"machigi ruru" : "街樹るる"
,"machida hiraku" : "町田ひらく"
,"machida poyo" : "町田ぽよ"
,"machinechine" : "まちねちね"
,"machino henmaru" : "町野変丸"
,"machimura komori" : "町村こもり"
,"machiya hatoko" : "町屋はとこ"
,"matsui motoki" : ["まついもとき", "瀬口たかひろ"]
,"matsuura kei" : "松浦桂"
,"matsuura madoka" : "松浦まどか"
,"matsuena syun" : "松江名俊"
,"matsuka" : "松果"
,"matsugami kurare" : "松上くられ"
,"matsukawa" : "松河"
,"matsukawa iku" : "松川郁"
,"macky" : ["MACKY", "まっきい"]
,"mac-v" : "MAC-V"
,"max" : "MAX"
,"matsukura nemu" : "松倉ねむ"
,"kurogewagyuu" : ["松阪牛", "黒毛和牛"]
,"matsusaka takeshi" : "松阪剛志"
,"matsuzaka reia" : ["まつざかれぃあ", "松阪れぃあ"]
,"matsuzaki tsukasa" : "松崎司"
,"matsuzawa kei" : "松沢慧"
,"matsuzawa muni" : "松沢夢丹"
,"matsushita makako" : "松下まかこ"
,"matsushima kei" : "松島卿"
,"matsushima namio" : "松島ナミオ"
,"massiro" : "MASSIRO"
,"muscleman" : "マッスルマン"
,"matsuzono" : "松園"
,"matsuda" : "マツダ"
,"matsu dinosaur" : "MATSU★ダイナソー"
,"matsutaka zon" : "松鷹ぞん"
,"matsu takeshi" : "松武"
,"matsuda shouichi" : "マツダ猖市"
,"matsuda val" : "松田ヴァル"
,"mattya aisu" : "抹茶あいす"
,"maccha chamomo" : "抹茶ちゃもも"
,"maccha neji" : "抹茶ねじ"
,"maccha momiji" : "抹茶もみじ"
,"matsutou tomoki" : "松任知基"
,"matsuna hitoshi" : "松名一"
,"matsunami yuuki" : ["松並ゆうき", "松並夕紀"]
,"matsunami rumi" : "松波留美"
,"matsuno susumu" : "松野すすむ"
,"matsuno megumi" : "枩埜めぐみ"
,"matsuba" : "松葉"
,"mappa ninatta" : "マッパニナッタ"
,"matsubara jun" : "松原じゅん"
,"map" : "まっぷ"
,"matsumi jun" : "真罪純"
,"matsumiya kiseri" : "茉宮祈芹"
,"matsumoto" : "マツモト"
,"matsumoto akira" : "松本英"
,"matsumoto katsuya" : "まつもとかつや"
,"matsumoto kichidi" : "松本きちぢ"
,"matumoto kei" : "松本痙"
,"matsumoto drill kenkyuujo" : "松本ドリル研究所"
,"matsumoto noriyuki" : "松本規之"
,"matsumoto mican" : "松本蜜柑"
,"matsumoto mitohi." : "松本ミトヒ。"
,"matsumoto mimiko" : "松本耳子"
,"matsumoto yuuka" : "松本ゆうか"
,"matsumomo mahiru" : "松百まひる"
,"matsuyama zunko" : "松山ずんこ"
,"matsuyama seiji" : "松山せいじ"
,"matsuyama hayate" : "松山はやて"
,"matsuyama mitsuo" : "松山三津夫"
,"matsuriuta" : "松竜太"
,"matsurioka hideyuki" : "祭丘ヒデユキ"
,"matsuri seishiro" : "マツリセイシロウ"
,"matsurino naginata" : ["祭野薙刀", "和久じん平"]
,"matsuri miko" : ["祭神子", "まつりみこ", "KAME"]
,"matsuryu" : "松竜"
,"matsuri yuuchi" : "まつりゆうち"
,"matetsu" : "まてつ"
,"materiarucou" : "マテリアル考"
,"mato" : ["魔都", "MATO"]
,"mado" : "窓"
,"matou" : "まとう"
,"madou uni" : "魔道うに"
,"madoutei" : "魔童貞"
,"madoka tsukumo" : "円つくも"
,"mato mai" : "まと舞"
,"matra milan" : "的良みらん"
,"madoromi" : "まどろみ"
,"mana" : "MANA"
,"mana-ko" : ["MANA-KO", "福佐瞳子", "松原香織"]
,"manao" : "まなお"
,"manaka mizuki" : "マナカミズキ"
,"manazuru chizuko" : "まなづるちずこ"
,"manaduru chizuko" : "まなづるちずこ"
,"manabe jouji" : "真鍋譲治"
,"manami 18-sai" : "まなみ18歳"
,"manami ken" : "まなみけん"
,"manami tatsuya" : "真未たつや"
,"manarou" : "まなろう"
,"manikoro" : "マニコロ"
,"manyuu kaeru tasuke sansei" : "魔乳カエル太助三世"
,"mano jun" : ["真野ジュン", "まの純"]
,"maban" : "まばん"
,"mahiruno kagerou" : "まひるの影郎"
,"mafen" : "マフェン"
,"mabuchoko m" : "マブチョコ_m"
,"mafuyu" : "真冬"
,"mafuyu hemp" : "麻冬HEMP"
,"mafuyu no suika" : "真冬ノ水火"
,"maple" : "まぷる"
,"maho" : "真秀"
,"mabo" : "マボ"
,"maboku" : "魔ボク"
,"mabo nasu" : "麻婆なす"
,"mahorogi hiroshi" : "真幌木弘"
,"maboroshi chouji" : "幻超二"
,"mahoroba" : "まほろば"
,"mamada kiki" : "間々田キキ"
,"mamito" : "真美人"
,"mamiya komashi" : ["まみやこまし", "西川秀明"]
,"mamiya seiji" : ["間宮聖士", "間宮青児"]
,"mamiya poko" : "まみやぽこ"
,"mamu" : "魔夢"
,"mame" : "豆"
,"mameojitan" : "まめおじたん"
,"mameko" : "まめこ"
,"mamezou" : "まめぞう"
,"mame danuki" : "まめだぬき"
,"mame denkyuu" : "まめでんきゅう"
,"mameneko" : "まめ猫"
,"mamemochi" : "まめもち"
,"mameroku" : "豆六"
,"mamo" : "MAMO"
,"mamo williams" : "まもウィリアムズ"
,"maya gorou" : "まゃ～吾郎"
,"maya kaoruko" : "摩耶薫子"
,"mayafufu -kakko- kashikoi" : ["まやふふ(賢)", "まやふふ（賢）"]
,"mayamura aki" : "真矢村明"
,"mayuna yuuma" : "まゆなゆうま"
,"mayumi daisuke" : "真弓大介"
,"mayonaka taroupho" : "真夜中足穂"
,"mayonnaise." : ["まよねーず。", "伊豆まよね"]
,"mara jou daisuke" : "マラ嬢ダイ輔"
,"marapan" : "まらぱん"
,"marianne hanako" : "マリアンヌ花子"
,"mario" : "まりお"
,"mario kaneda" : "まりお金田"
,"marino aya" : "まりのあや"
,"marinosuke" : "鞠之助"
,"maripyon" : "まりぴょん"
,"marimo" : ["まりも", "marimo"]
,"marimon majin" : "まりもん魔神"
,"maririn" : ["まりりん", "麻里鈴"]
,"marui" : "〇い"
,"marui shikaku" : "丸石核"
,"marui tamaki" : "丸井環"
,"marui maru" : "丸居まる"
,"marui ryuu" : "まるいりゅう"
,"maruo" : "MARIO"
,"maruo suehiro" : "丸尾末廣"
,"marugari santarou" : "丸刈参太郎"
,"marukidou" : "まるキ堂"
,"maru-kiri" : "丸切"
,"maruco" : "マルコ"
,"marco" : "マルコ"
,"marukoji" : "まるこじ"
,"marugoshi" : "まるごし"
,"marukochin" : "マルコチン"
,"marugoto ringo" : "まるごと林檎"
,"malcorond" : "まるころんど"
,"marushamo" : "まるしゃも"
,"marushin" : "丸新"
,"maruta" : "MARUTA"
,"maru dasshu" : ["まるだっしゅ", "佐藤丸美", "ふらんそーわ"]
,"maruchang" : "丸ちゃん。"
,"maruto" : "Maruto!"
,"marneko" : "まる寝子"
,"marunosuke" : "まるのすけ"
,"marumarusuke" : "まる丸介"
,"malumi" : ["MALUMI", "MARUMI"]
,"marumi" : ["MARUMI", "MALUMI"]
,"marumie" : "まるミエ"
,"maru mikan" : "〇蜜柑"
,"maruyama" : "マルヤマ"
,"maruwa tarou" : "丸和太郎"
,"mareo" : "まれお"
,"maro" : "MARO"
,"maro azuma" : "MARO東"
,"koto" : ["まろん☆まろん", "こと"]
,"man" : "まん"
,"mankai kaika" : "満開開花"
,"mangetsu pon" : "満月ポン"
,"manjusyage" : "曼珠沙華"
,"manjushage" : "曼珠沙華"
,"mance" : "まんす"
,"manzou" : ["まんぞう", "萬蔵"]
,"manta" : "男太"
,"manda ringo" : "まんだ林檎"
,"uminou rin" : ["万太郎", "海納りん"]
,"manno" : "まんの"
,"manno rikyuu" : ["万利休", "桜木HAL", "ツインテール"]
,"manmaru" : "漫丸"
,"mammoth" : "マンモス"
,"manmosu marimo" : "マンモスまりも"
,"mia" : "未亜"
,"mee" : ["MEE", "MEEくん", "みいくん"]
,"mii akira" : "美衣暁"
,"mee-kun" : ["MEEくん", "MEE", "みいくん"]
,"miisuke" : "ミー助"
,"michi" : "みーち"
,"miito shido" : "三糸シド"
,"miitoban" : ["みぃとばん", "みいとばん"]
,"miu" : ["未宇", "未宇。"]
,"miumi" : "みうみ"
,"miura kazuki" : "三卜和貴"
,"miura jota" : "三浦いお太"
,"miura takehiro" : ["みうらたけひろ", "TAKEHIRO MIURA"]
,"miura monzetsu" : "みうら悶絶"
,"mio" : "MIO"
,"mioki koeru" : "みおき超"
,"miotama" : "みおたま"
,"mio mio mio" : "澪澪澪"
,"mika" : "みか"
,"mikagami sou" : "水鏡想"
,"mikage" : "みかげ"
,"mikage sizuru" : "御影静流"
,"mikage sekizai" : "御影石材"
,"mikage tsubaki" : "御景椿"
,"mikage nao" : "みかげ尚"
,"mikage baku" : "御影獏"
,"migakeba hikaru" : "御垳葉ひかる"
,"mikaze takashi" : "水風天"
,"mikaze maruto" : "緑風マルト"
,"mikaduki neko" : "三日月ネコ"
,"mikaduchi" : ["みかづち", "御雷"]
,"mikazuchi" : ["みかづち", "御雷"]
,"mikami cannon" : "三上キャノン"
,"mikami takashi" : "みかみたかし"
,"mikami hokuto" : ["箕神北都", "みかみ北都"]
,"mikami mika" : "三上ミカ"
,"mikarin" : ["みかりん", "ミカリン"]
,"akai yuuji" : ["三川貝", "亜界ゆうじ"]
,"mikawaya" : "みかわや"
,"mikan" : "みかん"
,"mikan." : "みかん。"
,"mikan r" : ["みかん(R)", "みかんR"]
,"migi" : "みぎ"
,"mikiuchi shitei" : "三木内指定"
,"mikikazu" : ["みきかず", "美樹カズ"]
,"migita" : "みぎた"
,"miki chika" : "みきちか"
,"mikitoamon" : "ミキトアモン"
,"migitobira" : "右とびら"
,"miki tonpi" : "美樹とんぴ"
,"miginohito mitsuru" : "右の人みつる"
,"migihaji" : "右端"
,"mikihime" : "みき姫"
,"miki hime" : "みき姫"
,"miki meguri" : "美樹めぐり"
,"migiwa kouji" : "みぎわこうじ"
,"mikuta" : "みくた"
,"mikuni saho" : "御国紗帆"
,"mikuni hadzime" : "三国ハヂメ"
,"mikuni mizuki" : "みくに瑞貴"
,"migumigu" : "みぐみぐどっこいしょ"
,"mikura naru" : "実倉なる"
,"mikurou" : "ミクローン"
,"mike" : "ミケ"
,"mikeou" : "みけおう"
,"miketa miekichi" : "みけ田みい吉"
,"mikeneko" : "みけねこ"
,"mikemono yuu" : "神毛物由宇"
,"mikokuno homare" : "みこくのほまれ"
,"micosivaa" : "みこしば"
,"mikoshiro honnin" : ["みこしろ本人", "巫代凪遠"]
,"mikozin" : "ミコジン"
,"mikoto" : "みこと"
,"mikoto akemi" : "みことあけみ"
,"misao" : "ミサオ"
,"misao." : "みさお。"
,"misaoka" : "みさおか"
,"misakana" : "みさかな"
,"misaki" : "みさき"
,"misaki kaho." : "ミサキカホ。"
,"misaki kurehito" : "深崎暮人"
,"misaki takahiro" : ["三崎高博", "はぶらえる"]
,"misaki tou" : ["ミサキ糖", "ミサキ闘", "みさき闘"]
,"misagi nagomu" : "みさぎ和"
,"misaki yukihiro" : "岬ゆきひろ"
,"misaki ryou" : "御前伶"
,"misaki ryo" : "御前伶"
,"misakura nankotsu" : "みさくらなんこつ"
,"misasagi koeri" : "陵こえり"
,"misasagi task" : "陵たすく"
,"misasagi hisayoshi" : "陵久美"
,"misato nana" : "三郷なな"
,"misato you" : ["みさと憂", "みさと優", "真里まさとし"]
,"misa wasabi" : "三左わさび"
,"misawa shin" : "三沢伸"
,"misawa hiroko" : "みさわひろこ"
,"misawa mitsuharu" : ["三沢光晴", "三沢満晴"]
,"mishibe hamata" : "みしべハマタ"
,"mishima hiroji" : "みしまひろじ"
,"mijuu" : "みじゅう"
,"mishiro shizuku" : "水白しずく"
,"mizui" : "みずい"
,"mizui kaou" : "瑞井鹿央"
,"mizuiro megane" : "みずいろめがね"
,"mizukaga syou" : "水利硝"
,"mizukami ranmaru" : "水上蘭丸"
,"mizuki" : "みずき"
,"mizuki eimu" : "みずきえいむ"
,"mizuki gai" : "水樹凱"
,"mizuki gyokuran" : "瑞姫玉蘭"
,"mizuki sanban" : "水木三番"
,"mizuki tatsu" : "みずきたつ"
,"mizuki haku" : "水木伯"
,"miduki honey" : "水月ハニー"
,"mizuki hitoshi" : "みずきひとし"
,"mizuki fubuki" : "水城吹雪"
,"mizuki hotaru" : "みずきほたる"
,"mizuki masami" : "海月まさみ"
,"mizuki misato" : "水木美里"
,"mizuki yuu" : "瑞紀悠"
,"mizuki raimu" : "海月来夢"
,"mizukoshi mayu" : "水越まゆ"
,"mizusaki." : "みずさき。"
,"mizusaki serisu" : "水咲せりす"
,"mizusawa mimori" : "水沢深森"
,"rayze" : "瑞氏"
,"mizushima irohasu" : "水嶋イロハス"
,"mizushima eri" : "未津島えり"
,"mizushima oonari" : "水島☆多也"
,"mizushima sei" : "みずしま聖"
,"mizushima sorahiko" : "水島空彦"
,"mizujouyu" : "水醤油"
,"mizushiro takuya" : "水城たくや"
,"mizushiro makoto" : "水城丹"
,"mizusumi toshiaki" : "みずすみ俊明"
,"mizutaki" : "水炊き"
,"mizutani tooru" : "水谷とおる"
,"mizutani hitomi" : "水谷瞳"
,"mizutani mint" : "水谷みんと"
,"mizutani minto" : "水谷みんと"
,"mizutani rin" : "みずたにりん"
,"mizutani reiji" : "水谷零G"
,"mizuno alto" : "水乃アルト"
,"mizuno kei" : "みずのけい"
,"mizuno keita" : "水野景太"
,"mizunose mizuho" : "水之瀬瑞穂"
,"mizuno cho" : "みずのちょう"
,"mizuno tohko" : "水野透子"
,"mizunoto tatsumi" : "みずのとたつみ"
,"mizuno poppo" : "水翠野ポッポ"
,"mizuno maimi" : "水野まいみ"
,"mizuno makoto" : "みずのまこと"
,"misnon the great" : "ミスノン・ザ・グレート"
,"misnon blue" : "ミスノン・ブルー"
,"mizuhara kenji" : "水原賢治"
,"mizuhara masaki" : "水原マサキ"
,"mizuhara mei" : "水原明"
,"mizuhara yuu" : "水原優"
,"mizumizuni" : "見ず水煮"
,"misumi tsubaki" : "三澄ツバキ"
,"mizumura kaoru" : "水村かおる"
,"mizumori omizu" : "水森おみず"
,"mizuya tiharu" : "水夜ちはる"
,"mizuyan" : "みずやん"
,"mizuyuki" : "みずゆき"
,"mizuyoukan" : "水ようかん"
,"mizuryu kei" : "水龍敬"
,"miseo" : "みせお"
,"misooden" : "みそおでん"
,"miso oden" : "みそおでん"
,"miso katsu" : ["ミソカツ", "みそカツ"]
,"gelatin" : ["溝口ぜらちん", "ぜらちん"]
,"mizone" : "みぞね"
,"misono thiaki" : "御園千秋"
,"mitauo reiichi" : "水田魚零一"
,"mita unmei" : "三田雲盟"
,"mitaonsya" : "MITAONSYA"
,"mitaka" : "美岳"
,"mita kazuo" : "三田和夫"
,"mita kurumi" : "みたくるみ"
,"mitama kei" : "みたまけい"
,"mitamori tatsuya" : "みた森たつや"
,"mitarai yuuki" : "御手洗佑樹"
,"mitarashi kousei" : "みたらし侯成"
,"mitarashi dango" : "みたらしだんご"
,"mita ryuuji" : "三田龍次"
,"mita ryuusuke" : "見田竜介"
,"michi." : "みち。"
,"michiking" : "みちきんぐ"
,"michian ruu" : "路杏るう"
,"michio" : "美知夫"
,"michinoku atami" : "みちのくアタミ"
,"michu" : "美中"
,"mitsu king" : "蜜キング"
,"mitsuaki" : "みつあき"
,"mitsuashi" : "みつあし"
,"mitsui jun" : "三井純"
,"mitsuo" : ["MITSUO", "Mitsuo"]
,"mitsukasa mitsuki" : "みつかさみつき"
,"mitsuki" : "ミツ季"
,"mitsugi" : "ミツギ"
,"miduki amane" : "蜜月あまね"
,"mizuki takehito" : "みづきたけひと"
,"mizuki haruto" : ["三月春人", "みづき春人"]
,"mitsuki ponz" : "蜜葵ぽんず"
,"mizukimaru" : "満月○"
,"mitsuki mantarou" : "光姫満太郎"
,"mitsuki rintarou" : "水月林太郎"
,"mizuki loose" : "みづきるうず"
,"mikkoukun" : "ミッコウクン"
,"michizuki" : "ミツズキ"
,"mizuchi fuuka" : "ミヅチフウカ"
,"mitsudoue" : "みつどうえ"
,"miduno kenshi" : "みづの剣士"
,"mitsuno daichi" : "光野大地"
,"mitsuba" : "三葉"
,"mitsuba minoru" : ["三ヶ葉稔", "三ッ葉稔"]
,"mitsuha yahiko" : "三葉やひこ"
,"mitubishi soara" : "三菱そあら"
,"mitsumaro" : "蜜麻呂"
,"mitsumi misato" : "みつみ美里"
,"mitsu miroku" : "蜜みろく"
,"mitsumura hachi" : "密村ハチ"
,"mitsumori akira" : "三ツ森あきら"
,"mitsuya" : "みつや"
,"mitsurugi aoi" : ["みつるぎあおい", "能都くるみ"]
,"mito" : "ミト"
,"midoh tsukasa" : "御堂つかさ"
,"midou asuka" : "御堂明日香"
,"mito erina" : "みとえりな"
,"mitomo akira" : "ミトモアキラ"
,"midori aoi" : "みどり葵"
,"midoriiro" : "緑いろ"
,"midoriiro no shinzou" : "緑色の心臓"
,"midorigi mura" : "緑木邑"
,"midorisawa miyuki" : "緑沢みゆき"
,"midorino tanuki" : ["緑野タヌキ", "翠野タヌキ"]
,"midorinocha" : "みどりのちや"
,"midori no rupe" : "緑のルーペ"
,"minagata jinpachirou" : "水形陣八郎"
,"minakami sakura" : ["水上桜", "水上さくら"]
,"minakami riku" : "ミナカミ理久"
,"minakami rin" : "ミナカミリン"
,"minagi umihito" : "深凪ウミヒト"
,"minagiri" : "ミナギリ"
,"minakuchi takashi" : ["みなくちたかし", "水口鷹志"]
,"minako nami" : "みなこなみ"
,"minasaki keitarou" : "皆咲ケイタロウ"
,"minasuki popuri" : ["みなすきぽぷり", "椎木冊也"]
,"minase akira" : "水瀬洸"
,"kou minase" : "水瀬洸"
,"minase seri" : "水瀬せり"
,"minase tamaki" : "皆瀬たまき"
,"minase yuu" : "水瀬結宇"
,"minase youkou" : "水瀬揺光"
,"minase yowkow" : "水瀬揺光"
,"minazuki akira" : "水無月あきら"
,"minaduki akira" : "水無月あきら"
,"minatsuki alumi" : "水月あるみ"
,"minazuki satsuki" : "水無月皐月"
,"minazuki satoshi" : "水無月サトシ"
,"minazuki juuzou" : "水無月十三"
,"minazuki tsuyuha" : "水無月露葉"
,"minazuki tooru" : "水無月徹"
,"minazuki no-mu" : "水無月のーむ"
,"minaduki haruka" : "水月悠"
,"minazuki mikka" : "水無月三日"
,"minazuki yuzu" : "みなづきゆず"
,"minato itoya" : "ミナトイトヤ"
,"minatoku" : "みなとく"
,"minato fumi" : "三巷文"
,"minatoya shunsaku" : "湊谷俊作"
,"minato yuu" : ["湊ゆう", "湊夕"]
,"minato yoshihiro" : ["ミナトヨ", "湊良弘"]
,"minaka shobu" : "皆仲笑歩"
,"minamax" : "みなまっくす"
,"minami" : ["みなみ", "ミナミ"]
,"minami kazumi" : "みなみかずみ"
,"minami katsumi" : "南勝海"
,"minami star" : "南☆"
,"minamida usuke" : "南田U助"
,"minami chisato" : "南ちさと"
,"minami tomoko" : "南智子"
,"minamino gyo" : "南野魚"
,"kanno takanori" : "南乃さざん"
,"minamino hazuki" : "南乃映月"
,"minamino marin" : "南野まりん"
,"minamihama yoriko" : "南浜よりこ"
,"minami haruka" : "みなみ遥"
,"minami fumika" : "南文夏"
,"minami yuuko" : "みなみゆうこ"
,"minami rin" : "美波リン"
,"minamoon" : "みなむーん"
,"minamura haruki" : "皆村春樹"
,"minamoto" : "みな本"
,"minamoto kyunta" : "源キュン太"
,"minamoto kosada" : "みなもと小定"
,"minamo ruri" : "水面ルリ"
,"minarai zouhyou" : "見習い雑兵"
,"minion" : ["みにおん", "数木美咲"]
,"minekawa reko" : "嶺川れーこ"
,"minesaki" : "ミネサキ"
,"minemura nagato" : "峰村ナガト"
,"mino inomi" : "三野いのみ"
,"minoh rom" : "水尾ろむ"
,"mino kodama" : "魅野こだま"
,"minobe tadashi" : "みのべただし"
,"minomushi" : "みのむし"
,"minori" : "みのり"
,"mihama kazunari" : "美浜一成"
,"mihara jun" : ["みはらじゅん", "三原ジュン"]
,"miharu" : ["美春", "ミハル"]
,"mibu natsuki" : "みぶなつき"
,"mifune seijirou" : "三船誠二郎"
,"mibuno kakashi" : "三舞野かかし"
,"mibu manjimaru" : "壬生卍丸"
,"mib yoshikazu" : "ミブヨシカズ"
,"mihoto kouji" : "みほとこうじ"
,"mima" : "ミマ"
,"mimasaka hideaki" : "美作英明"
,"mimachi" : "みまち"
,"mimikaki" : "みみかき"
,"mimiko" : "耳子"
,"mimizu" : "みみず"
,"mimizushiki" : "みみずしき"
,"miminoura" : "みみのうら"
,"mimi mimizu" : "実々みみず"
,"mimuda ryouzou" : ["みむだ良雑", "みむだ猟象"]
,"mimonel" : "ミモネル"
,"miya" : "みや"
,"myai" : "みゃい"
,"miyauchi miima" : "宮内みいま"
,"miyauchi yuka" : "宮内由香"
,"miyakawa hajime" : "美夜川はじめ"
,"miyagishi akihisa" : "宮岸あきひさ"
,"miyagi yasutomo" : "宮城靖朋"
,"miyake hikaru" : "三宅光"
,"miyaken" : "みやけん"
,"miyakoshi wasoh" : "宮越和草"
,"keishi surota" : "京師すろた"
,"miyako surota" : "京師すろた"
,"miyako no gohan" : "京のごはん"
,"miyako harumi" : "都晴海"
,"miyasaka takaji" : "ミヤサカタカジ"
,"miyasaka miyu" : "宮坂みゆ"
,"miyazaki usagi" : "みやざきうさぎ"
,"miyazaki uno" : "宮崎うの"
,"miyasaki toshiyuki" : "宮咲都志幸"
,"miyazaki baku" : "宮崎ばく"
,"miyazaki maya" : "宮崎摩耶"
,"miyazato eri" : "宮里えり"
,"miyaji kaneyuki" : "宮路兼幸"
,"miyashita kitsune" : "宮下キツネ"
,"miyake taishi" : ["みやしたけい", "三宅大志"]
,"miyashita miki" : "宮下未紀"
,"miyashiro sousuke" : "宮社惣恭"
,"miyashiro yousuke" : "ミヤシロヨースケ"
,"miyashiro ryuutarou" : "宮代龍太郎"
,"miyasu risa" : "ミヤスリサ"
,"miyazen" : "みやぜん"
,"miyaso saki" : "宮宗咲"
,"miyata etsuko" : "みやたえつこ"
,"miyanishi kazuaki" : "宮西和明"
,"miyane aki" : "みやねあき"
,"miyano amika" : "宮野あみか"
,"miyanogi jiji" : "宮野木ジジ"
,"miyano kintarou" : ["宮野金太郎", "宮野将一", "宮野桃太郎"]
,"miyanose you" : "宮ノ瀬よう"
,"miyanoyuki" : "みやのゆき"
,"miyahara ayumu" : "宮原歩"
,"miyahara mimikaki" : "みやはらみみかき"
,"miyabi" : "美矢火"
,"miyabikawa sakura" : ["雅川佐倉", "雅川SAKURA"]
,"miyabi tatsuto" : "みやびたつと"
,"miyabi tsuzuru" : "みやびつづる"
,"miyahiro akira" : "宮廣彬"
,"myapuzou" : "みゃぷぞう"
,"miyabe kiwi" : "宮部キウイ"
,"miyama" : "箕山"
,"miyamae meguru" : "宮前めぐる"
,"miyama zero" : "みやま零"
,"miyama noboru" : "三山のぼる"
,"miyamu" : "みやむ"
,"myamo" : "ミャモ"
,"miyamoto" : "みやもと"
,"miyamoto issa" : "宮元一佐"
,"miyamoto tatsuya" : "宮本たつや"
,"miyamoto yuu" : ["みやもとゆう", "宮本悠"]
,"miyamoto liz" : "宮本りず"
,"miyamoto rumi" : "みやもと留美"
,"myuu" : "ミュー"
,"miyuki" : "深雪"
,"miyuki rock" : "深雪ROCK☆"
,"miyuki yaya" : "御幸やや"
,"miyuki rou" : "みゆき朗"
,"miyu aki" : "美雪朗"
,"miyuma subaru" : "未由間すばる"
,"myouga" : "茗荷"
,"myouji namae" : "苗字なまゑ"
,"miyoshi" : "みよし"
,"miyomi yamori" : "みよみやもり"
,"mira" : "みら"
,"mirai denki" : "未来電機"
,"miriko" : "ミリコ"
,"mirino" : "みりの"
,"millefeuille" : ["ミル・フィーユ", "ミルフィーユ"]
,"milk sugar" : "ミルクシュガー"
,"milkshake" : "ミルクセーキ"
,"milk melon" : "みるくめろん"
,"milts" : "みるつ"
,"miromiro mumu" : "みるみる☆むむ"
,"miroku kotoko" : "みろくことこ"
,"miwa uzuki" : "美和卯月"
,"miwa yoshikazu" : "美和美和"
,"min" : "眠"
,"minku" : "ミンク"
,"minguri." : "みんぐり。"
,"minchi" : "みんち"
,"mint green" : "みんとぐりん"
,"mintice" : "ミントアイス"
,"minna daisuki" : "みんなだいすき"
,"minna no haipe" : "みんなのハイペ"
,"minna no hipe" : "みんなのハイペ"
,"minpei ichigo" : "民兵一号"
,"muichimon" : "無一文"
,"mu-inu475" : "ムーいぬ"
,"muinu475" : "ムーいぬ"
,"muunyan" : "むーにゃん"
,"muupyon" : "むーぴょん"
,"mu-min" : "夢～眠"
,"murian" : "無有利安"
,"moonlight" : "むーんらいと"
,"mukai kiyoharu" : "むかいきよはる"
,"mukai masayoshi" : "向正義"
,"mukade melibe" : ["蜈蚣Melibe", "斉藤佳素理", "斎藤佳素理", "にゃかな", "冬長"]
,"mugi" : "MUGI"
,"mugichoko" : "むぎちょこ"
,"mukimoto koko" : "剥元ここ"
,"mukui" : "ムクイ"
,"mugenkidou" : "無限軌道"
,"mugendai" : "無限大"
,"mugen no ossan" : "無限のおっさん"
,"mugen no sudadokei" : "無限の須田時計"
,"mukoujima tenro" : ["むこうじまてんろ", "向島てんろ"]
,"mukouyama" : "ムコウヤマ"
,"musashi daichi" : "武蔵ダイチ"
,"musashino sekai" : "ムサシノセカイ"
,"musashimaru" : "ムサシマル"
,"musasiya chogenbo" : "武蔵屋長元坊"
,"mushi" : "ムシ"
,"mushikera hoihoi" : "虫けらホイホイ"
,"mushipan" : "むしパン"
,"musha sabu" : "武者サブ"
,"mushanokouji shizuka" : "武者小路静香"
,"mushoku santaro" : "無色三太郎"
,"musouduki" : "夢双月"
,"muta" : "むた"
,"muchiou" : "むちおう"
,"muchipan" : "むちぱん"
,"muchimuchi chiaki" : "むちむちちあき"
,"muchimo" : "むちも"
,"mucha" : "むちゃ"
,"mutsuki" : "睦月"
,"mutsuki ooyashima" : "睦月大八洲"
,"mutsuki ginji" : "睦月銀二"
,"mutuki shin" : "六樹しん"
,"mutsuki tsutomu" : ["むつきつとむ", "睦月努"]
,"mutsuki tetsu" : "睦月哲"
,"mutsuki nozomi" : ["睦月のぞみ", "梶原ヒワ"]
,"mutsuki haru" : "睦月はる"
,"mutsuki lime" : "むつき来夢"
,"monsieur dk" : "ムッシュDk"
,"mutsutake" : "睦茸"
,"mucchii" : "むっちぃ"
,"mutsu nagare" : "陸奥流"
,"mdo-h" : "無道叡智"
,"mutou keiji" : "むとうけいじ"
,"mutou tetsu" : "武藤鉄"
,"mutou mato" : "武藤まと"
,"mutou" : "無糖まめ"
,"mutou morihiro" : "武藤守弘"
,"mutou rei" : "武藤礼恵"
,"mudoochi" : "むどおち"
,"munashimujou" : "むなしむじょう"
,"muniko" : "むにこ"
,"munyuu" : "むにゅう"
,"muneshiro" : "むねしろ"
,"munomerikun" : "むのめりくん"
,"mufuru" : "むふる"
,"mumumu" : ["むむむ", "飛膝むむむ"]
,"mume" : "むめ"
,"mumei" : "Mumei"
,"miwerjooggetser" : "無名老圖"
,"mura" : "無良"
,"murai toyo" : "むらいとよ"
,"murao mio" : "村生ミオ"
,"murakami aki" : "村上晶"
,"murakami suigun" : "村上水軍"
,"murakami takashi" : "村上隆史"
,"murakami masaki" : "村上雅貴"
,"muraku" : "夢楽"
,"murasaki" : "紫紀"
,"tamposa" : ["村崎色", "TAM", "TAMぽ～さ"]
,"murasakiiro orange" : "むらさきいろオレンジ"
,"murasakio" : "紫御"
,"murasaki syu" : "むらさき朱"
,"murasaki shingou" : "紫信号"
,"murasaki nyaa" : "紫☆にゃ～"
,"murasaki rei" : "村崎零"
,"murasaki reika" : "紫れいか"
,"murasame masumi" : "村雨真澄"
,"murasame maru" : "村雨丸"
,"murasan" : ["むらさん", "ムラさん"]
,"murase masafumi" : "村瀬雅文"
,"muraso shunichi" : "村祖俊一"
,"murata" : "ムラタ。"
,"murata kouji" : "ムラタコウジ"
,"murata taichi" : "むらたたいち"
,"murata denji" : "村田電磁"
,"murata renji" : "村田蓮爾"
,"murata range" : "村田蓮爾"
,"murano tami" : ["むらの・たみ", "むらのたみ"]
,"murabito c" : "村人C"
,"muramasa mikado" : ["村正みかど", "武礼堂"]
,"mura mura" : ["むら・むら", "むらむら"]
,"murayamamon" : "村山門"
,"muraro" : "むらろ"
,"muririn" : "むりりん"
,"muroi sasuke" : "室井佐介"
,"muronaga chaashuu" : "室永叉焼"
,"meiousei jin" : "冥王星人"
,"meika" : "めいか"
,"meiko" : "めい子"
,"meiji kanako" : ["明治カナ子", "明治かな子"]
,"maij chichico" : "明治乳子"
,"meiji michiru" : "明治みちる"
,"maze" : "maze*"
,"meicha" : "冥茶"
,"meito" : "めいと"
,"meido yomi" : "冥土黄泉"
,"maybe" : "めいびい"
,"meimu" : "MEIMU"
,"meisuke" : "めーすけ"
,"meesuke" : "めーすけ"
,"mekaigo" : "メカイゴ"
,"megao 3rd" : ["メガオ3rd", "メガオ4th"]
,"meganei" : "メガねぃ"
,"megane inu" : "眼鏡狗"
,"megi" : "めぎ"
,"meki ruriwo" : "目木ルリヲ"
,"megrim haruyo" : "メグリム・ハルヨ"
,"megurogawa una" : "目黒川うな"
,"meguro sankichi" : "目黒三吉"
,"meguro linu" : "目黒霖雨"
,"meshiro" : "めしろ"
,"mejiro tsugumi" : ["目白次美", "くまたかつみ"]
,"medaka kenichi" : "目高健一"
,"metako" : "めた子"
,"metacora" : "めたこら"
,"messy" : "メッシィ"
,"metsubushi" : "メツブシ"
,"methonium" : "メトニウム"
,"menu." : "めぬ。"
,"meno" : "めの"
,"menoko" : "めの子"
,"meme50" : "メメ50"
,"memeyu" : "めめゆ"
,"meramera jealousy" : "メラメラジェラシー"
,"meria" : "メリア"
,"merkonig" : "メルコニグ"
,"merubo run" : ["めるぼ・るん", "めるぼるん"]
,"melonleaf" : "メロソリーフ"
,"mentai" : "めんたい"
,"menteiyakuna" : "めんていやくな"
,"menyoujan" : "めんようじゃん"
,"mo" : "も"
,"moai tentyou" : "モアイ店長"
,"mos" : "モアス"
,"kokemozuku" : "もいや"
,"mou" : "もう"
,"moegi" : "萌黄おじさん"
,"moegi oji-san" : "萌黄おじさん"
,"moekibara fumitake" : "萌木原ふみたけ"
,"moejin" : "萌尽"
,"moeno yukiji" : "萌乃雪路"
,"moehime nenene" : "萌姫ねねね"
,"momo" : "MO・MO"
,"mon" : "も～ん"
,"moka" : "モカ"
,"mogami koji" : ["最上工路", "最中工路"]
,"kanbayashi takaki" : ["モガミセイ", "神林タカキ"]
,"mokamoka" : "モカモカ"
,"mogiki hayami" : "十はやみ"
,"mogu" : "モグ"
,"mokuzu" : "藻屑"
,"mokusei zaijuu" : "木星在住"
,"mokuseirokku" : "木星ろっく"
,"mokuzou" : "杢臓"
,"mogudan" : "モグダン"
,"mokufu" : "もくふう"
,"mogupuchi." : "もぐぷちっ"
,"mokuyama hito" : "木山ヒト"
,"moketa" : "もけ太"
,"mogelano" : "モゲラーノ"
,"mocoda" : "モコ田"
,"mojarin" : "もじゃりん"
,"mozu" : "もず"
,"mozu k" : "もずK"
,"mozuya murasaki" : "もずや紫"
,"mozomi" : "最初美"
,"mota" : "モタ"
,"modaetei anetarou" : "悶亭姉太郎"
,"modaetei imojirou" : "悶亭妹次郎"
,"mochi" : ["モチ", "もち"]
,"mochikuu usagi" : "もちくううさぎ"
,"mochisaka mitsuki" : "もちさかみつき"
,"mochisuke teru" : "操昌輝"
,"mochida koyubi" : "餅田こゆび"
,"mochiji" : "モチヂ"
,"mochizuki azumi" : "望月あづみ"
,"mochizuki nana" : "望月奈々"
,"mochizuki nozomu" : "望月望"
,"mochimako" : "モチマコ"
,"mochimochi yusaku" : "餅望ゆさく"
,"motsu" : "もつ"
,"motsuaki" : "もつあき"
,"mocco" : "もっこ"
,"mokkouyou bond" : ["木工用ボンド", "グルー・ガン"]
,"motchie" : ["もっちー", "うんこプリ太郎"]
,"motsutora" : "もつとら"
,"mothica" : "モティカ"
,"motoe hiroya" : "元永尋也"
,"motozaki akira" : "素崎彰"
,"motozaki tsukiko" : "本崎月子"
,"motoni modoru" : "本仁戻"
,"motomiya hiroshi" : "本宮ひろ志"
,"motomiya mitsuki" : "もとみやみつき"
,"monaka" : ["藻仲", "もなか"]
,"monikano" : "モニカノ"
,"monety" : "もねてぃ"
,"monogusa wolf" : "ものぐさうるふ"
,"monota rinu" : ["ものたりぬ", "みなづき由宇"]
,"monono ex" : "もののEX"
,"monorino" : "モノリノ"
,"mohu2factory" : "モフ2製作所"
,"mofuriru" : "もふりる"
,"momio" : "もみお"
,"momico" : "もみ子"
,"momiji" : "もみじ"
,"momiji mimo" : "紅葉みも"
,"momiyama" : "もみやま"
,"momoi comomo" : "桃飴こもも"
,"momoi nanabei" : "桃井奈々兵衛"
,"momoiro manjiru" : "桃色卍流"
,"momo iwao" : "百々巌"
,"momoka" : "百夏"
,"momokawa gen" : "桃川げん"
,"momokawa pink" : "桃川ぴんく"
,"momo kitsune" : "桃きつね"
,"momokumo" : "桃雲"
,"momokuri sannen" : "桃栗さんねん"
,"momoko" : "ももこ"
,"momoshika fujiko" : "ももしか藤子"
,"momoshiro asako" : "桃白あさこ"
,"momozukuku" : "ももずくく"
,"maeda momo" : ["ももずみ純", "まえだもも"]
,"momota" : "萌々汰"
,"momota tetsu" : "桃田テツ"
,"momoduki suzu" : "桃月すず"
,"momonashi potato" : "桃梨ぽてと"
,"momo no kanzume" : "桃の缶詰"
,"momo no suidousui" : "モモの水道水"
,"momonosuke" : "桃之助"
,"momonosukebe" : "腿之助兵衛"
,"sakura yukimi" : ["もものみ由貴", "もものみ", "桜ゆきみ"]
,"momono moto" : "百乃モト"
,"momono yuuca" : "もものユーカ"
,"momohime shibuki" : "桃姫しぶき"
,"momofuki rio" : "桃吹リオ"
,"momohonyu" : "ももほにゅ"
,"momopon" : "モモぽん"
,"momosui piromi" : "桃水ぴろみ"
,"momomitsu kinako" : "桃蜜きなこ"
,"momomo gasshuukoku" : "ももも合衆国"
,"momoya show-neko" : "桃屋しょう猫"
,"momoyama jirou" : "桃山ジロウ"
,"momoyama tadashi" : "桃山正"
,"momoyama hato" : "モモヤマハト"
,"momo youkan" : "ももようかん"
,"momon kooji" : "ももんこーじ"
,"moyasibasto" : "もやしばーすと"
,"moyamoya" : "モヤモヤ"
,"mori airi" : "森あいり"
,"morii" : "MORII"
,"morii shizuki" : "森井しづき"
,"morio masahiro" : "森尾正博"
,"mori katsuki" : "モリカツキ"
,"morikuga mei" : "森久我鳴"
,"mori guruta" : "森ぐる太"
,"morikoke" : "もり苔"
,"morisaki karin" : "森咲果梨"
,"morisaki kurumi" : "森崎くるみ"
,"morisawa toshio" : "森沢としお"
,"morishige" : "もりしげ"
,"morishita futaba" : "森下双葉"
,"morishima akiko" : "森島明子"
,"morishima kon" : "森島コン"
,"morishima petit" : "森嶋プチ"
,"mori sinrisk" : "森シンリスク"
,"morris" : "モリス"
,"morizono milk" : "森園みるく"
,"moritaka takashi" : ["もりたかたかし", "森高たかし"]
,"mori takuya" : "杜拓哉"
,"morita nayuta" : "森田なゆた"
,"moriton" : "もりとん"
,"morinaga ichirou" : "森永一郎"
,"morinaga korune" : "森永こるね"
,"morinaga mizuki" : "森永水基"
,"morinaga milk" : "森永みるく"
,"morinaga ramune" : "森永らむね"
,"morino" : "森野。"
,"morino kasumi" : "森野カスミ"
,"morino kinoko" : "森乃きのこ"
,"morino kinoco" : "森乃きのこ"
,"morino koala" : "森乃こあら"
,"morino papiko" : "森野ぱぴこ"
,"moribayashi ringo" : ["森林りんご", "森林林檎", "もりばやしりんご", "Woody-Rinn"]
,"mori hiromi" : ["もり☆ひろみ", "もりひろみ", "森ヒロミ", "森博巳"]
,"mori marimo" : "もりまりも"
,"mori manpei" : "森万平"
,"morimi ashita" : "森見明日"
,"morinomiya maachi" : "森宮まあち"
,"morimiya masayuki" : "森宮正幸"
,"moriya neko" : "もりやねこ"
,"moriyama ayumi" : "森山あゆみ"
,"moriyama izumi" : "もりやま泉"
,"moriya makoto" : "森谷誠"
,"moriya mato" : "盛谷真人"
,"moriyama yusuke" : "森山雄介"
,"moriyama rikka" : "森山六花"
,"moririn-monson" : "モリリン・モンソン"
,"more" : "モレ"
,"moroi ai" : "諸井愛"
,"morooka kimiko" : "もろおか紀美子"
,"morota shigetaka" : "諸汰鎮孝"
,"morodashi zen" : "モロ出汁膳"
,"moroha" : ["乙", "二式鋏"]
,"monkey ni-gou" : "悶鬼威弐号"
,"monji" : "もんじ"
,"monsuke" : "もんすけ"
,"monchy" : "もんちぃ"
,"monchi kaori" : "門地かおり"
,"monchan rev3" : "もんちゃんrev3"
,"monden akiko" : "もんでんあきこ"
,"mon-petit" : "もんぷち"
,"monpechi" : "もんぺち"
,"monmon" : ["MONMON", "悶悶"]
,"yaiba kyousuke" : "刃狂介"
,"yaegashi nan" : "八重樫南"
,"yaeda nagumo" : "八重田なぐも"
,"yaeba itsuki" : "八重葉いつき"
,"yaemugura" : "やえむぐら"
,"yaoichou narimasu" : "矢追町成増"
,"yaotetsu" : "八百鉄"
,"yaomai" : "やおまい"
,"yagami ken" : ["八神健", "八神けん"]
,"yagami sai" : "夜神紗衣"
,"yagami shiino" : "矢神しいの"
,"yagami shuuichi" : "八神秋一"
,"yagami shuichi" : "八神秋一"
,"yagami dai" : ["八神大", "やがみだい"]
,"yagami haruroku" : "矢神春六"
,"yagami hiroki" : "八神ひろき"
,"yagawa maito" : "矢河真衣斗"
,"yagicom" : "ヤギコム"
,"yakishio" : "焼塩"
,"yakisoba" : "八木そば"
,"yakitomato" : "焼きトマト"
,"yakiniku king" : "焼肉キング"
,"yakiniku teisyoku" : "焼肉定食"
,"yakinikuteishoku" : "焼肉定食"
,"yagyuu ryuu" : "柳生柳"
,"yakushimaru hiroshi" : "薬師丸ひろし"
,"yakusho" : "やくしょ"
,"yaguchiya tomoshi" : "矢口屋ともし"
,"yakumi benishouga" : "薬味紅生姜"
,"yakumo kinako" : "やくもきなこ"
,"yagumo kengou" : "八雲剣豪"
,"yakuya" : "やくや"
,"yakura waka" : "矢倉わか"
,"yasakani an" : "ヤサカニ・アン"
,"yasaki" : "夜咲"
,"yazaki kou" : "矢崎恍"
,"yazaki hikaru" : "矢崎恍"
,"yazaki tooru" : "矢崎透"
,"yashiki" : "Yaski"
,"yajima index" : "矢島Index"
,"yajima minoru" : "矢島みのる"
,"yajuu" : "野獣"
,"yajiro masaru" : "野城まさる"
,"yashiro ryo" : "八代涼"
,"yasuaki" : "ヤスアキEX"
,"yasui hirosato" : "やすいひろさと"
,"yasui riosuke" : "ヤスイリオスケ"
,"yasuda shuuichi" : "安田秀一"
,"yasuda suzuhito" : "ヤスダスズヒト"
,"yasuhara tsukasa" : "安原司"
,"yasuhiro" : "ヤスヒロ"
,"yasumi" : "泰三"
,"yasumibito" : "ヤスミビト"
,"yasumo" : "やすも"
,"yasumori zen" : "安森然"
,"yasuyuki" : "やすゆき"
,"yasu rintarou" : "安鱗太郎"
,"yasohachi ryo" : "八十八良"
,"yatanukikey" : "やたぬき圭"
,"yachan" : "やちゃん"
,"yatsuashi matomo" : "ヤツアシマトモ"
,"yatsuashimatomo" : "ヤツアシマトモ"
,"yatsuki akehisa" : "八月明久"
,"wolfeed" : "夜月ノ孤狼"
,"yatsuki hiyori" : "八樹ひより"
,"yatuzaki" : "やつざき"
,"yatsuzaki" : "やつざき"
,"yasson yoshiyuki" : "やっそん義之"
,"yatengetu" : "夜天月"
,"yadokari genpachirou" : "宿借り源八郎"
,"yanagawa rio" : ["やながわ理央", "梁川理央"]
,"yanagi" : "柳"
,"yanagihara mitsuki" : "柳原ミツキ"
,"yanagi hirohiko" : "柳ひろひこ"
,"yanagi masashi" : "矢凪まさし"
,"yanagi yuu" : "ヤナギユウ"
,"yanase kotatsu" : "柳瀬こたつ"
,"yaneue ryo" : "屋根上リョウ"
,"yaneura yuu" : "屋根裏ユウ"
,"yano takumi" : "矢野たくみ"
,"yano tatara" : "八乃多々良"
,"yano toshinori" : "矢野トシノリ"
,"yano mitsuki" : "夜ノみつき"
,"yahagi wakahiko" : "矢矧稚彦"
,"yahima" : "やひま"
,"yahiro" : "八尋"
,"yahiro pochi" : "八尋ぽち"
,"yabuki kentarou" : "矢吹健太郎"
,"yabuki gou" : "矢吹豪"
,"yama" : "YAMA"
,"yamai" : ["山井", "やまい", "ヤマイ"]
,"yamai sakatarou" : ["山井逆太郎", "山井坂太郎"]
,"yamaishi juhachi" : "山石18"
,"yamaishi" : "山石18"
,"yamaiso" : "やまいそ"
,"yamaimo torotoro" : "山いもとろとろ"
,"yamaimo tororo" : ["山芋トロロ", "山芋とろろ"]
,"yamauchi kazunari" : "山内和成"
,"yamauchi shigetoshi" : "山内繁利"
,"yamaura shou" : "山浦章"
,"yamaoka koutetsurou" : "山岡鋼鉄郎"
,"yamakaze ran" : "やまかぜ嵐"
,"yamagata sei" : "山形せい"
,"yamagara tasuku" : "山雀たすく"
,"yamaguchi" : "ヤマグチ"
,"yamaguchi shinji" : "ヤマグチシンジ"
,"yamaguchi hyroharu" : "山口弘春"
,"yamaguchi masakazu" : "山口譲司"
,"yamaguchi miyuki" : ["やまぐちみゆき", "飛鳥", "飛鳥弓樹"]
,"yamaguchi roman" : "山口ろまん"
,"yamakumo" : "山雲"
,"yamakouji koumyou" : "山小路工明"
,"yamakonbu" : "やまこんぶ"
,"yamasaki atsushi" : "山﨑あつし"
,"yamazaki umetarou" : "山咲梅太郎"
,"yamazaki kazuma" : "山崎かずま"
,"yamazaki kana" : "山崎かな"
,"yamasaki show" : "夜魔咲翔"
,"yamazaki show" : "夜魔咲翔"
,"yamazaki daiki" : "山崎大紀"
,"yamazaki hiroshi" : "山崎浩"
,"yamazaki mitsuru" : "山崎みつる"
,"yamasada osamu" : "山貞おさむ"
,"yamashita kurowo" : "山下クロヲ"
,"yamashita shunya" : "山下しゅんや"
,"yamashita nigou" : "山下にごう"
,"yamashita masahiro" : "山下正浩"
,"yamasuke" : ["夜魔介", "西野映一"]
,"yamase zenn" : "山瀬ゼン"
,"yamada kanan" : "山田可南"
,"yamada kou" : "山田こう"
,"yamada kosuke" : ["山田こうすけ", "山田こーすけ"]
,"yamada gogogo" : "山田ゴゴゴ"
,"yamada konayuki" : "山田コナユキ"
,"yamada satoshi" : "山田サトシ"
,"yamada shiguma" : "山田シグ魔"
,"yamada shuutarou" : "山田秋太郎"
,"yamada shouji" : "山田ショウジ"
,"yamada sukeroku" : "山田助六"
,"yamada taishi" : "山田たいし"
,"yamada tahichi" : ["山田タヒチ", "安世夢"]
,"takei masaki" : ["山田太郎（仮名）", "竹井正樹"]
,"yamada toriko" : "山田酉子"
,"yamada no seikatu ga daiichi" : "山田の性活が第一"
,"yamada nora" : ["山田のら", "やまだのら"]
,"yamata no worochi" : "やまたのをろち"
,"yamada hitori" : "山田一人"
,"yamada hiyori" : "山田ひより"
,"yamada mikan" : "山田みかん"
,"yamada yasutake" : "山田康健"
,"yamada yuuya" : "ヤマダユウヤ"
,"yamada yugi" : "山田ユギ"
,"yamada yomoran" : "山田よもらん"
,"yamato akira" : "八的暁"
,"yamato kaoru" : "大和香"
,"yamatogawa" : "大和川"
,"yamatodanuki" : "大和狸"
,"yamato nadeshiko" : ["大和撫子", "大和なでしこ"]
,"yamato masaomi" : "やまと将臣"
,"yamato masaki" : "大和正樹"
,"yamato miyu" : "やまとみゆ"
,"yama tomoti" : "やまともち"
,"yamadori" : "山鳥"
,"yamanako" : "やまなこ"
,"yamanashi kaname" : "月見里中"
,"yamanashi yuuya" : "山梨ユウヤ"
,"yamana neko" : "やまなねこ"
,"yamaneko suzume" : "山猫スズメ"
,"yamane satsuki" : "やまねさつき"
,"yamane masahiro" : ["山根正宏", "せんどりくん"]
,"yamanokami" : "やまのかみ"
,"yamano kitsune" : "矢間野狐"
,"yamano konzaburo" : "山野紺三郎"
,"yamano hajime" : ["山野一", "ねこぢるy"]
,"yamanobe kitta" : "やまのべきった"
,"yamahata rian" : "山畑璃杏"
,"yamabuki satoshi" : "矢吹怜史"
,"yamabuki zarame" : "山吹ざらめ"
,"yamabuki shiroto" : "山吹しろと"
,"yamabuki suiten" : "山吹水天"
,"yamabuki mook" : "山吹ムック"
,"yamabe umihito" : "山部海人"
,"yamamichi" : "やまみち"
,"yamamura umi" : "山村うみ"
,"yamamura natsuru" : "山村なつる"
,"yamamura hajime" : "やまむらはじめ"
,"yamamoto" : "山本"
,"yamamoto atsuji" : "山本貴嗣"
,"yamamoto ahiru" : "山本AHIRU"
,"yamamoto kazue" : "山本和枝"
,"yamamoto kumoi" : "山本雲居"
,"yamamoto kenji" : "山本賢治"
,"yamamoto kouji" : "やまもと孝二"
,"yamamoto zenzen" : "山本善々"
,"yamamoto takuto" : "やまもと卓仁"
,"yamamoto tomomitsu" : "山本ともみつ"
,"yamamoto naoki" : ["山本直樹", "森山塔", "塔山森"]
,"yamamoto nanashiki" : "山本七式"
,"yamamoto hyugo" : "山本ひゅーご"
,"yamamoto yammy" : "山本やみー"
,"yamamoto yoshifumi" : ["山本よし文", "山本善文"]
,"yamamoto johanne" : ["山本夜羽", "山本夜羽音", "玄田生"]
,"yamaya oowemon" : "山家大右衛門"
,"yaman" : "yaman**"
,"yamizawa" : "ヤミザワ"
,"ootori mahiro" : ["弥美津ヒロ", "鳳まひろ"]
,"yamito" : "やみと"
,"yaminabe" : ["やみなべ", "ヤミナベ"]
,"yamino kenji" : "闇野ケンジ"
,"yamino yomiko" : "闇野黄泉子"
,"yamu" : "やむっ"
,"yameta takashi" : "止田卓史"
,"yaya hinata" : "稍日向"
,"yayo" : "夜与"
,"yarii shimeta" : "槍衣七五三太"
,"yaruku" : "ヤルク"
,"yawa" : "やわ"
,"yawano yawa" : "柔乃やわ"
,"yawaraka midori" : "やわらかみどり"
,"yanyo" : "やんよ"
,"yuasa" : "ゆあさ"
,"yui" : ["YUI", "ユイ"]
,"yuiga naoha" : "由雅なおは"
,"yuizaki kazuya" : "ユイザキカズヤ"
,"yui toshiki" : ["唯登詩樹", "加藤雅基"]
,"yuibi" : "ゆいび"
,"yuu" : "ゆう"
,"yuuichi" : "ゆういち"
,"yuuka" : "由家"
,"yuuga" : ["ゆぅ～が", "ゆーが"]
,"yuuga momiji" : ["夕雅紅葉", "夕雅もみじ"]
,"yuuki" : "悠宇樹"
,"yu-ki" : "ゆーき"
,"yuuki alice" : "夕姫ありす"
,"yuukey" : "ゆーきぃ"
,"yuukii" : "ゆーきぃ"
,"yuuki hb" : "ユウキHB"
,"yuuki shin" : ["悠木しん", "結城しん"]
,"yuuki setsuna" : "ゆうき刹那"
,"yuuki tsumugi" : ["ゆうきつむぎ", "騙野犠牲"]
,"tomto" : "結城とむ"
,"yuuki tomoka" : ["ゆうきともか", "友紀知佳"]
,"yuuki hagure" : "憂姫はぐれ"
,"yuuki homura" : "結城焔"
,"yuuki mitsuru" : "結城みつる"
,"yuuki mona" : "悠木もな"
,"yuukiya sai" : "結城屋さい"
,"yuuki yuki" : "祐希ユキ"
,"youki runner" : "結城らんな"
,"yuugiri" : "夕霧"
,"yuuki rion" : "悠木りおん"
,"yuuki ryo" : "結城稜"
,"yuuki ringo" : "有機リンゴ"
,"yuuki ray" : "ユウキレイ"
,"yuuki rei" : "悠稀れい"
,"yuugo" : "ユーゴ"
,"yuzaki" : "ユウザキ"
,"yuuji" : "ゆうじ"
,"yuji" : "悠路"
,"yuushi tessen" : ["柚子鉄線", "柚子まち"]
,"u-jin" : "遊人"
,"yuuzu tsushiro" : "ゆうづつしろ"
,"yuuto" : "優斗"
,"utopian" : "優斗秘庵"
,"yunagi amane" : "憂凪あまね"
,"yunagi kahoru" : "夕凪薫"
,"yuunagi show" : "夕凪ショウ"
,"yuunagi sesina" : "夕凪セシナ"
,"yuunagi seshina" : "夕凪セシナ"
,"yuunyan" : "ゆうにゃん"
,"eunos" : "ゆ～のす"
,"yuuhi homare" : "ゆうひほまれ"
,"yuuma" : "佑真"
,"mizuki yuuma" : "佑真"
,"yuumi" : "ゆうみ"
,"yumi ichirou" : "友美イチロウ"
,"yuumi kazuaki" : "優実かづあき"
,"yuumyago" : "ゆうみゃご"
,"yuya" : ["悠夜アキハル", "悠夜"]
,"yuuyami sabou" : "夕闇茶房"
,"yuurin" : "祐リン"
,"yue" : ["ユエ", "ゆえ"]
,"yueko" : "ゆえこ"
,"yuetsu saru" : "愉悦さる"
,"yukaida uchio" : "愉快田うちお"
,"yukako" : "有香子"
,"yugami goosyu" : "由上ゴーシュ"
,"yukaran nosuke" : "ゆからんのすけ"
,"yuka rannosuke" : "ゆからんのすけ"
,"yukarigawa yumiya" : ["紫川弓夜", "ゆかりがわ弓夜"]
,"yukari minemi" : "紫みねみ"
,"yukawa asami" : "由河朝巳"
,"yugawara atami" : "湯河原あたみ"
,"yukibuster z" : "ユキバスターZ"
,"yuki asuka" : "雪あすか"
,"yuki ayano" : "ゆきあやの"
,"yukian" : "Yukian"
,"yukiu con" : "雪雨こん"
,"yukiusagi" : "ゆきうさぎ"
,"yukiusagi." : "ゆきうさぎ。"
,"yukie" : "ゆき恵"
,"yukion" : "ゆきおん"
,"yukiguni" : "雪國"
,"yukikuni" : "雪國"
,"yukiguni omaru" : "雪國おまる"
,"yukiko" : "YUKIKO"
,"yukisaki miale" : "雪咲MIALE"
,"yukiji shia" : "雪路時愛"
,"yukijirushi" : "逝印"
,"yukishiro yoshi" : "雪城よし"
,"yukijin kageyu" : "雪陣勘解由"
,"yukitaka" : "柚木貴"
,"yuki tomoshi" : "幸灯"
,"yukino" : "ゆきの"
,"yukino tsukimi" : "雪乃つきみ"
,"yukino minato" : "雪野みなと"
,"yukimochi ringo" : "ゆきのみりんご"
,"yukino yukikaze" : "ゆきのゆきかぜ"
,"yukinon" : "雪乃ん"
,"yuki mau" : "有希まう"
,"yukimachi komachi" : "雪待小町"
,"yukimaru." : "雪丸。"
,"yukimaro yukky" : "ゆきまろゆっきー"
,"yukimi" : "ゆきみ"
,"yukimino yukio" : "雪見野ユキオ"
,"yukimura" : "ユキムラ"
,"yukimura kanae" : "幸村佳苗"
,"yukimura sei" : "雪村聖"
,"yukimura hajime" : "雪村一"
,"yukimura riko" : "雪村理子"
,"yukiyanagi" : "ゆきやなぎ"
,"yukiyoshi mamizu" : "ゆきよし真水"
,"yukiri takashi" : "ゆきりたかし"
,"yukirin" : "YUKIRIN"
,"yukiwo" : "ユキヲ"
,"yug" : "YUG"
,"yuge makoto" : "弓削誠"
,"yusa" : "ゆさ"
,"yusa mimori" : "遊佐魅森"
,"yuzuka" : "柚夏"
,"yuzuki n dash" : "柚木'N"
,"yuzuki gao" : "柚木ガオ"
,"yuzuki makii" : "柚木まき"
,"yuzuki yu" : "柚木ゆー"
,"yuzuki yuno" : "柚木ゆの"
,"yuzuki rin" : "柚希りん"
,"yuzugin" : "柚銀"
,"yuzushiko" : "ゆずしこ"
,"yuzu syrup" : "ゆずしろっぷ"
,"yuzuto sen" : "柚十扇"
,"yuzuna hiyo" : "柚子奈ひよ"
,"yuzuno kiichi" : "ゆずのきいち"
,"yuzunoki ichika" : "柚木イチカ"
,"yuzuha" : "ユズハ"
,"yuzupon" : "ゆずぽん"
,"yusura" : ["山桜桃", "新名あき", "新名昭彦"]
,"yuzu ramune" : "柚子ラムネ"
,"yuzuri ai" : "ゆずりあい"
,"yuzuriha" : ["ユズリハ", "譲葉", "ゆずりは"]
,"yutakame" : "ゆたかめ"
,"yuduki ichi" : "唯月一"
,"yuduki kei" : "雪月佳"
,"yuzuki hikaru" : "弓月光"
,"yuduki yuu" : "結月ゆう"
,"yukkyun" : "ユッキュン"
,"yucchris" : "ゆっ栗栖"
,"yukke-ani" : "ゆっけ兄"
,"yudouhu" : "湯豆ふ"
,"yutori-nu" : "ゆとりーぬ"
,"yuna" : ["YUNA", "由那"]
,"unite souji" : "ユナイト双児"
,"yunamaro" : "ゆなまろ"
,"yuni" : "夕仁"
,"yunioshi" : "ゆにおし"
,"yunichima" : ["ゆにちま", "ゆにぃちご"]
,"yunodon" : "ゆのどん"
,"yumi" : "YUMI"
,"yuminaga kyuuten" : "弓長九天"
,"yumura hiroyuki" : "ゆむら博雪"
,"yumeiro gurasan" : "夢色ぐらさん"
,"yumeiro rukka" : "夢色るっか"
,"yumeuta" : "ゆめうた"
,"yumeori amu" : ["ゆめおりあむ", "夢庵あむ"]
,"yumeka sumomo" : "夢花李"
,"yumeki banana" : "夢木ばなな"
,"yumekiyo" : "ゆめきよ"
,"yume kirei" : "由瞳綺麗"
,"yumesaki sanjuro" : "夢咲三十郎"
,"yumesube" : "ユメスベ"
,"yume neko" : "夢猫"
,"yumeno shiya" : "夢ノ紫也"
,"yumeno tanuki" : "夢乃狸"
,"yumeno hiroshi" : "夢野ひろし"
,"yumemi" : "ゆめみ"
,"yumemi gokochi" : "夢見御弧地"
,"yumemi go kochi" : "夢見御弧地"
,"yumemi teer" : "夢見てぇる"
,"yumeyama mikon" : "夢山ミコン"
,"yumoto suzu" : "湯本寿々"
,"yuyama chika" : "湯山チカ"
,"yuyumaru aikichi" : "ゆゆ丸あい吉"
,"yurarin" : "遊来りん"
,"yuran" : "ゆらん"
,"yuri ai" : "悠理愛"
,"yuri kamome" : "友梨かもめ"
,"yurikawa" : "ゆりかわ"
,"yurishima shiro" : "ゆりしましろ"
,"yurihara aki" : "百合原明"
,"yuruta" : "ゆるた"
,"yuruchin kyouso" : "ゆるちん教祖"
,"yuncha" : "ゆんちゃ*"
,"yoikono tt" : "ヨイコノtt"
,"yoiduki mashiro" : "宵月ましろ"
,"yoihoshi hikari" : "宵星ヒカリ"
,"youka" : "妖華"
,"youkai kubinashi" : "妖怪クビナシ"
,"youkihi" : "陽気婢"
,"yousyu" : "陽州"
,"yoshu ohepe" : "養酒オヘペ"
,"youta" : ["夜歌", "よう太"]
,"youtou sadamitsu" : "妖刀定蜜"
,"youhei kozou" : "傭兵小僧"
,"youma kachie" : "夜馬勝絵"
,"yo-jin" : "YO-JIN"
,"yosuke" : "ヨースケ"
,"yoongonji" : "Yoongonji"
,"yoki" : "ヨキ"
,"yoki kana" : "斧カナ"
,"yokoi rego" : "横井レゴ"
,"yokosima" : ["横縞", "縦縞キタ"]
,"yokoshima koishi" : "よこしま小石"
,"yokoshima takemaru" : "邪武丸"
,"yokoshima tadashi" : "横嶋ただし"
,"yokoshima tsumugi" : "よこしまつむぎ"
,"yokoshima nikki" : "よこしま日記"
,"yoko juusuke" : "横十輔"
,"yokota kumi" : "横田くみ"
,"yokota mamoru" : "横田守"
,"yokohachi" : "よこはち"
,"yokohama inka" : "よこはまインカ"
,"yokomizo satori" : "横溝さとり"
,"yokoyama chicha" : "よこやまちちゃ"
,"yokoyama naoki" : "よこやまなおき"
,"yokoyama negi" : "横山葱"
,"yokoyama michiru" : "横山ミチル"
,"yokoyama lynch" : "横山私刑"
,"yokoya manjirou" : "よこやまんじろう"
,"yokoyari mengo" : "横槍メンゴ"
,"yozakura sakyou" : "夜桜左京"
,"yozakura souki" : "夜桜ソウキ"
,"yoshiama renzou" : ["吉天レンゾー", "吉天レンゾウ"]
,"yoshiie" : "由家"
,"yoshiura kazuya" : "由浦カズヤ"
,"yoshio akira" : "吉尾アキラ"
,"yoshio ereki" : "よしおエレキ"
,"yoshioka hirosumi" : "吉岡宏純"
,"yoshika" : "ヨシカ"
,"yoshikawa ravelli" : "吉川ラベリ"
,"yoshiki" : ["よ式", "遠藤良危"]
,"yoshiki aya" : "美輝妖"
,"yoshiki-chan" : "よしきちゃん"
,"yoshiki ryoma" : "よしき龍馬"
,"yoshizaki mine" : "吉崎観音"
,"yoshizawa tomoaki" : "吉澤友章"
,"yoshizawa vanilla" : "吉澤ばにら"
,"yoshizawa miyabi" : "吉沢雅"
,"yoshizawa megane" : "吉沢メガネ"
,"yoshizawa rui" : "吉澤瑠偉"
,"yoshi shikou" : "夜獅子吼"
,"yoshijima ataru" : "よしじまあたる"
,"yoshida" : "吉田"
,"yoshida apeji" : ["吉田あぺぢ", "吉田ふらわ"]
,"yoshida inuhito" : "吉田犬人"
,"yoshida kei" : "よしだけい"
,"yoshida goten" : "吉田御殿"
,"yoshida gorou" : "吉田悟郎"
,"yoshida seiji" : "吉田誠治"
,"yoshida sensha" : "吉田戦車"
,"yoshida tobio" : ["吉田鳶牡", "吉田トビヲ"]
,"yoshida furawa" : ["吉田ふらわ", "吉田あぺぢ"]
,"yoshida hebisaku" : "吉田蛇作"
,"yositama" : "ヨシタマ"
,"yoshida mint" : "よしだみんと"
,"yoshitomi akihito" : "吉富昭仁"
,"yoshitora" : "よしとら"
,"yoshinaga sayuri" : "ヨシナガサユリ"
,"yoshinari ayaka" : "吉成綾加"
,"yoshino" : "よしの"
,"yoshino aya" : "吉野あや"
,"yoshino koyuki" : "吉野小雪"
,"yoshino shiho" : ["吉野志穂", "よしのしほ"]
,"yoshino hodaka" : "吉野ホダカ"
,"yoshihama sakari" : "吉浜さかり"
,"yoshihara kurohiko" : "良原くろひこ"
,"yoshihara maito" : "芳原舞人"
,"yoshi hyuuma" : "吉飛雄馬"
,"yoshifumi kaoru" : "ヨシフミカオル"
,"yoshimi kiyo" : "吉見キヨ"
,"yoshimizu" : "よしみず"
,"yoshimitsu kura" : "蔵吉光"
,"yoshimune" : "令家まひな"
,"yoshimura kentaro" : "芳村ケンタロ"
,"yoshimura tatsumaki" : "吉村竜巻"
,"yoshimura hideaki" : "吉村英明"
,"carpsukidayo" : "吉本"
,"yoshimoto kinji" : "よしもときんじ"
,"yosiya" : "吉家"
,"yoshiragi" : "ヨシラギ"
,"yoshiron" : "よしろん"
,"yoshiwo" : "よし☆ヲ"
,"yosuteinu" : "世棄犬"
,"yosehira tamamo" : "与世平たまも"
,"yosomono" : "よそ者"
,"yozora shiba" : "夜空柴"
,"yotaka" : "よたか"
,"yoda kikunai" : "依田キクない"
,"yochi ryota" : "よちリョウタ"
,"yokkora" : "ヨッコラ"
,"yottan" : "ヨッタン"
,"yotsuba chelsea" : "四葉チェルシー"
,"yotsuba chika" : "四葉チカ"
,"yotsuba masumi" : ["四葉真澄", "よつ葉真澄", "よつば◎ますみ。"]
,"yopparai oni" : "酔っ払い鬼"
,"yotsuya mika" : "よつやみか"
,"yonige-ya no kyou" : "夜逃げ屋の恭"
,"yone kinji" : "与根金次"
,"yonekura" : "米蔵"
,"yonekura kengo" : "米倉けんご"
,"yonesaka akira" : "よねさかあきら"
,"nekota yonezou" : "米蔵"
,"yoneda pororis" : "米田ポロリス"
,"yonemaru" : "よねまる"
,"yonoki" : "よのき"
,"yohi" : "よひ"
,"yomibitoshirazu" : "よみびとしらず"
,"yom" : "よむ"
,"yomogi shigure" : "よもぎしぐれ"
,"yomogi mametaro" : "よもぎ豆太郎"
,"yomosugara" : "よもすがら"
,"yomotsuka tsukasa" : "四方塚ツカサ"
,"yomoyama akira" : "四方山哲"
,"qoom" : "よもやまサンド"
,"yoriu mushi" : ["寄生虫", "増田晴彦"]
,"yorisuke" : "よりすけ"
,"yorichika bibiru" : "よりちかびびる"
,"yoruge" : "よるげ"
,"yoruda neyo" : "夜田ねよ"
,"yoru no oto" : "夜の音"
,"yoruno tsubasa" : "よるのつばさ"
,"yabai yuu" : "夜灰ゆう"
,"yorumo" : "ヨルモ"
,"yorozu ichi" : "よろず壱"
,"yorozu" : "よろづ"
,"yoroduya hyakuhachi" : "万屋百八"
,"yontarou" : "よんたろう"
,"yonbangai" : "4番街"
,"yonyon" : "よんよん"
,"kawatsu kenjiro" : ["らーかいらむ", "川津健二朗"]
,"ra-men" : "らーめん"
,"raia" : "らいあ"
,"rice cake" : "らいすけいく"
,"tanu ukyo" : ["らいすぱん", "たぬうきょ"]
,"raizou" : "雷蔵"
,"raita" : ["来太", "RAITA"]
,"raiden" : "らいでん"
,"lightsource" : "0Lightsource"
,"raidon" : "来鈍"
,"raipa zrx" : "雷覇ZRX"
,"library" : "らいぶらり"
,"lime" : "Lime"
,"lime mint" : "らいむみんと"
,"lao long" : "ラオロン"
,"rakia" : "rakiA"
,"ragii" : "裸戯慰"
,"rakuji tarahi" : "楽時たらひ"
,"rakujin" : ["らくじん", "楽人", "沢尻メロウ"]
,"rakuta shouko" : "らくたしょうこ"
,"lact mangan" : "楽人満願"
,"rakuma kanori" : "楽間かのり"
,"rakuria" : "ラクリア"
,"rakurincho" : "R@kurincho"
,"rage" : ["らげ", "らげ。"]
,"rasahan" : "ラサハン"
,"razy" : "らじー"
,"radio sensei" : "ラジオ先生"
,"rasukaru" : "ラスカル"
,"lasto" : "らすとー"
,"rustle" : ["らする", "Rustle"]
,"radiohead" : "ラヂヲヘッド"
,"rakkaa" : "らっかあ"
,"rakko" : "らっこ"
,"rusher verak" : "ラッシャーヴェラク"
,"rasson" : "らっそん"
,"ranaecho" : "らなえちよ"
,"rabi" : "らび"
,"rabbi" : "らび"
,"lapis" : "LAPIS"
,"lapis lazuli" : "Lapis Lazuli"
,"rabihoru" : "らびほる"
,"labui" : "羅ぶい"
,"laplace" : ["らぷらす", "ラプラス"]
,"rama" : "らま"
,"ramanda" : "ラマンダ"
,"ramiya ryou" : ["蘭宮涼", "蘭雅涼"]
,"ramu" : "らむ"
,"ramchi" : "らむち"
,"rara8" : "らら8"
,"lalamate" : "LALAmate"
,"lalala holiday" : "ラララ・ホリディ"
,"ran" : ["らん", "RAN"]
,"ranka" : "RANKA"
,"rangetsu" : "嵐月"
,"random" : ["ランダム", "蘭田夢"]
,"lunch" : "らんち"
,"rando" : "乱道"
,"land sale" : "蘭戸せる"
,"ran masumi" : "乱真澄"
,"ranma nekokichi" : "乱魔猫吉"
,"ranmaru" : "乱丸"
,"okano hajime" : ["乱満", "おかのはじめ"]
,"lee" : "LEE"
,"riia" : "りぃあ"
,"liveis watanabe" : "リーバイス渡辺"
,"leafy" : "リーフィ"
,"ri-ru-" : "りーるー"
,"riumu" : "りうむ"
,"rie-chan 14-sai" : "りえちゃん14歳"
,"rion" : "りおん"
,"rikao" : "梨加夫"
,"rikaya" : "りかや"
,"riki" : "RIKI"
,"rikudou koushi" : "六道神士"
,"rikudou maki" : "六堂真稀"
,"rikumoto yoshiyuki" : "陸本美幸"
,"rico" : "Rico"
,"riko" : "利行"
,"ricochet" : "リコシェット"
,"rikomaru" : "りこ丸"
,"risei" : "李星"
,"lithium" : "Lithium"
,"rityou" : "リチョウ"
,"rikka" : "立夏"
,"ricca" : "りっか"
,"rikka kai" : "リッカー改"
,"rikko" : "リッコ"
,"littlemare" : "リトルメア"
,"rinon9" : "riNon9"
,"ribahara aki" : "リバ原あき"
,"rihi" : "梨比"
,"rihitozoire" : "リヒトゾイレ"
,"ribu" : "りぷ"
,"rebutsu" : "りぶつ"
,"rifuru" : "りふる"
,"libre" : "Libre"
,"rim" : "りむ"
,"ryao" : "リャオ"
,"ryu" : "りゅー"
,"ruuen rouga" : "龍炎狼牙"
,"ryuga syo" : "龍牙翔"
,"ryuukihei" : "竜騎兵"
,"ryuuki yumi" : "りゅうき夕海"
,"ryuusei" : "流星"
,"ryuuta" : "竜太"
,"ryuuto hisashi" : "りゅうとひさし"
,"ryunosuke" : "龍之介"
,"ryuu mokunen" : "流木念"
,"riyun" : "RiYUN"
,"ryunnu" : "りゅんぬ"
,"ryo" : ["りょう", "りょう@涼", "RYÖ", "RYO"]
,"ryou" : "椋"
,"ryoattoryo" : "りょう＠涼"
,"ryouei" : "諒英"
,"ryohka" : "涼香"
,"ryouga taku" : "良河卓"
,"ryosuke." : "涼助。"
,"ryoh-zoh" : "椋蔵"
,"ryo-chan" : "良ちゃん"
,"ryoumoto hatsumi" : "嶺本八美"
,"ryokuchaism" : "緑茶イズム"
,"ryokurin" : "りょくりん"
,"lilithlauda" : "リリスラウダ"
,"riro" : "りろ"
,"ring haka" : "リング墓"
,"ringo club" : "りんごくらぶ"
,"ringo sui" : "りんご水"
,"rin sin" : "りんしん"
,"rin suumin" : "鈴好明"
,"rinsun" : "リンスン"
,"linda" : "LINDA"
,"rindou" : "竜胆"
,"rindoh" : ["竜胆", "りんどう"]
,"rindou noboru" : "鱗堂昇"
,"rinna rika" : "鈴凪りか"
,"rinno arara" : "りんのあらら"
,"rinbo" : "リンボ"
,"rinri kazuki" : "倫理一輝"
,"louis and visee" : "Louis＆Visee"
,"lewis mclaren" : "るいす・まくられん"
,"ruuku" : "るーく"
,"ruzhai" : "儒宅"
,"lushea" : "ルーシア"
,"ruka" : "流嘉"
,"ruka hikaru" : "瑠夏ひかる"
,"rukia" : "るきあ"
,"rukitsura." : "るきつら。"
,"rucu" : "るく"
,"luku" : "る～く"
,"rucuk" : "るくーく"
,"rushi" : "るし"
,"ruschuto" : "るしゅーと"
,"luna" : "屡那"
,"lunaluku" : "るなるく"
,"rune" : "ルネ"
,"rubi-sama" : "るび様"
,"rubibi" : "るびび"
,"ruburu" : "るぶる"
,"rumoi jun" : ["るもいじゅん", "留萌純"]
,"rulia 046" : "るりあ046"
,"ruriiro sugar" : "るりいろシュガー"
,"ruri erika" : "瑠璃えりか"
,"rurien" : "瑠璃燕"
,"rurimaru" : "るりまる"
,"ruri rarako" : "瑠璃ららこ"
,"ruri ruri" : "るりるり"
,"ruruepa" : "るるえぱ"
,"rurukichi" : "るるキチ"
,"runrun" : "るんるん"
,"rei" : "れい"
,"raven" : "RAVEN"
,"reigaros" : "れいがろす"
,"lazy club" : "LAZY CLUB"
,"reizei" : "冷泉"
,"reiji" : "れゐぢ"
,"rate" : ["RaTe", "まつかさ"]
,"reitou mikan" : "れいとうみかん"
,"reiha" : "零覇"
,"leymei" : "LEYMEI"
,"raymon" : "RAYMON"
,"racer" : "れーさー"
,"leonardo 16sei" : "れオナるド16世"
,"leopard" : "レオパルド"
,"rekisitaihoonoji" : "レキシタイふのじ"
,"regdic" : "れぐでく"
,"regudeku" : "れぐでく"
,"retsuoh" : "烈王"
,"redking" : "れっどきんぐ"
,"redlight" : "REDLIGHT"
,"lefthand" : "レフトハンド"
,"remu" : "れむ"
,"lem" : "LEM"
,"lemonteapot" : "LemonTeaPot"
,"leli" : "レリ"
,"renga" : "煉瓦"
,"renji" : "練慈"
,"renn sport" : "れん・しゅぽると"
,"renren" : "れんれん"
,"rouka" : "ろうか"
,"roshuu takehiro" : "浪州建博"
,"low" : "Low"
,"rohgun" : ["老眼", "ROHGUN"]
,"rollei" : "ローライ"
,"rollpan2" : "ろーるぱんつ"
,"roga" : "Ro・Ga"
,"rokita" : "ろきた"
,"rokuichi" : "六壱"
,"rokusyou kokuu" : "緑青黒羽"
,"rokujou mugi" : "六条麦"
,"rokuya maou" : "六谷魔王"
,"rokuma susumu" : "呂熊進"
,"rokumei kanau" : "鹿鳴叶"
,"rokuroichi" : "ロクロイチ"
,"rocket kyoudai" : ["ロケット兄弟", "阿部ゆたか"]
,"rocket monkey" : "ロケットモンキー"
,"rojione" : "ロジオネ"
,"russia no dassouhei" : "ロシヤの脱走兵"
,"rojiro" : "ロジロ"
,"roshin" : "炉心"
,"ros" : "ROS"
,"roze" : "ロゼ"
,"rokkaku yasosuke" : "六角八十助"
,"lockheart" : "ロックハート"
,"rokko" : "ロッコ"
,"rokkotsu" : "肋骨"
,"roteri" : "ろてり"
,"ropan" : "ろぱん"
,"melopan" : ["ろぱん", "めろぱん"]
,"lobster" : "ロブ☆スター"
,"roboku" : "ロボク"
,"robohachi" : "ロボハチ"
,"lorica" : "Lorica"
,"ippon" : ["ロリコントラップ", "Lとらっぷ", "L-Trap", "一本", "一本院遊郭"]
,"lolisin" : "ろりしn"
,"lolicept" : "LOLICEPT"
,"rorita rorisuke" : "ロリ田ロリ助"
,"rolly bell" : "露李鈴"
,"rorimo" : ["ロリモ", "ヌカきゅーり"]
,"rororogi mogera" : "露々々木もげら"
,"rondonko" : "ろんどんこ"
,"ronna" : "ろんな"
,"ronrinri ronri" : "論倫理ろんり"
,"wise speak" : "ワイズスピーク"
,"waichien" : "わいちえん"
,"yd" : "YD"
,"waira" : ["ワイラ", "わいら"]
,"waka" : "ワカ"
,"wakai ikuo" : "若井いくお"
,"wakatsuki" : "若月"
,"wakadori nikomi" : "若鶏にこみ"
,"wakana hanabi" : ["稚名はなび", "わかなはなび"]
,"wakaba kaoru" : "わかばかおる"
,"wakamatsu" : "わかまつ"
,"wakamatsu satoshi" : "若松智"
,"wakamiya santa" : ["月下冴喜", "矢上健喜朗", "若宮参太"]
,"wakamiya teresa" : "若宮てれさ"
,"wakamesan" : "ワカメさん"
,"kanabun" : "わかるティッシュ"
,"wakino keibun" : "脇乃敬文"
,"wakimiunten" : "ワキミウンテン"
,"wakusei gyaraga" : "惑星ぎゃらが"
,"masuda miyaka" : ["枠田ちさき", "チサキッス"]
,"wakutsu yutaro" : "和久津ゆうたろう"
,"wazakita" : "わざきた"
,"wasisan" : "わしさん"
,"washizuka sho" : "鷲塚翔"
,"washimi yu-ko" : "わしみゆーこ"
,"wasu" : "ワス"
,"wada erika" : "和田エリカ"
,"watashiki" : "わたしき"
,"watashiya kaworu" : "私屋カヲル"
,"wadachi kururu" : "わだちくるる"
,"wada-chin" : "和田ちん"
,"watanabe asia" : "わたなべあじあ"
,"watanabe izumi" : ["渡辺泉水", "わたなべいずみ"]
,"watanabe kappa" : "渡辺河童"
,"watanabe kouji" : "わたなべこーじ"
,"nerune" : ["渡辺純子", "イコ", "ねるね"]
,"watanabe hideyuki" : "渡辺ヒデユキ"
,"watanabe yayoi" : "渡辺やよい"
,"watanabe yukihiro" : "ワタナベ幸弘"
,"watanabe yoshimasa" : ["わたなべよしまさ", "渡辺よしまさ"]
,"watanabe wataru" : "わたなべわたる"
,"watanuki kaname" : "四月朔日要"
,"watanuki lon" : "綿貫ろん"
,"watanuki ron" : "綿貫ろん"
,"wataya" : "綿谷"
,"watari kaoru" : "渡薫"
,"watari kazuya" : "渡和矢"
,"wada wau" : "和田羽烏"
,"watan kazunari" : "わたんかづなり"
,"watsuki rumi" : "わつきるみ"
,"watchie" : "わっちー"
,"wazuchi nao" : "わづち直"
,"wanao" : "わなお"
,"wanashiro giovanna" : "和南城ジョアンナ"
,"wabara hiro" : "羽原ヒロ"
,"yamatomaru keruwo" : "倭丸けるを"
,"wamusato haru" : "和六里ハル"
,"wara" : "わら"
,"warashina mama" : "わらしなママ"
,"warashibe" : "わらしべ"
,"warabino matsuri" : "蕨野まつり"
,"warabi yuuzou" : "わらびゆうぞう"
,"warabuki iraka" : "わらぶきいらか"
,"wariko" : "わり子"
,"valkyrie" : "ワルキューレ"
,"waremono" : "ワレモノ"
,"wanda tatsuya" : "ワンダ龍也"
,"wantan meo" : "雲呑めお"
,"wancho" : "わんちょ"
,"wang-pac" : "わんぱく"
,"wan-pyo" : "王彪"
,"wanyanaguda" : "完顔阿骨打"
,"wokasiya" : "ヲカシヤ"
,"wosushi" : "をすし"
,"wonawo" : "ヲナヲ"
,"n" : "ん"
,"nbo" : "んぼ"
,"nmasse" : "ンマッセ"
,"nme" : "んめ"
};
var group_ejdic = {
 "... mou ii desu." : "・・・もういいです。"
,".squirrel" : ".Squirrel"
,"0000" : "0000 (クアドラプルゼロ)"
,"0422shop" : "0422SHOP"
,"04u" : "04U"
,"100yenmofa" : "100円外務省"
,"102 goushitsu" : "102号室"
,"10pasec no kanata" : "拾八secの彼方"
,"110-groove" : "110-GROOVE"
,"16kenme" : "16軒目"
,"16nights" : "16Nights"
,"18 monkeys" : "18モンキーズ"
,"18master" : "18マスター"
,"1st.ms" : "1st.M's"
,"20liquid" : "20LIQUID"
,"23.4do" : "23.4ド"
,"2b" : "2B"
,"2cv.ss" : "2CV.SS"
,"2h" : "2H"
,"2stroke" : "2STROKE"
,"3rdeye" : "3rdEye"
,"40010 1-go" : "40010壱号"
,"4h" : "4H"
,"4t" : "4T"
,"50on" : "50ON!"
,"54burger" : "54BURGER"
,"552 no yakata" : "午後煮の館"
,"65535th avenue" : "65535あべぬー。"
,"666 no oka" : "666の丘"
,"666protect" : ["666PROTECT", "666プロテクト"]
,"70 nenshiki yuukyuu kikan" : "70年式悠久機関"
,"88 gou" : "88号"
,"a" : "A"
,"a dash" : "A'"
,"a gokuburi" : "A極振り"
,"a human a" : "人間アブラハム"
,"a matures" : "ア・マチュアズ"
,"a to z" : "A to Z"
,"a.l.c" : ["A.L.C", "ALC"]
,"a.o.i" : "A.O.I PROJECT"
,"a.s.t.a." : "A.S.T.A."
,"a.w.p." : "A.W.P."
,"a10 booster unit" : "エー・テン・ブースター・ユニット"
,"a2" : "A2"
,"aa aishiteru" : "ああ愛してる"
,"aardvark" : "AARDVARK"
,"a-arms" : "A-arms"
,"aaru" : "アアル"
,"ab laboratory" : "ABラボラトリー"
,"abalone soft" : "Abalone Soft"
,"abarenbow tengu" : ["暴れん坊天狗", "ABARENBOW TENGU"]
,"abbey load" : "ABBEY LOAD"
,"abel software" : "AbelSoftware"
,"abelia" : "アベリア"
,"abellcain" : ["ABELLCAIN", "アベルカイン"]
,"aberyu" : "悪部流"
,"abhar" : "ABHAR"
,"abogado powers" : "アボガドパワーズ"
,"aboshi-kensetsu" : "亜星建設"
,"abradeli kami" : "油照紙"
,"absolute" : "Absolute"
,"absolute fantasy" : "ABSOLUTE FANTASY"
,"absorb" : "アブそ～ぶ"
,"abura katabura" : ["あぶらかたぶら", "ABURAKATABURA"]
,"abura stadium" : "あぶらスタジアム"
,"aburasoba biyori" : "あぶらそば日和"
,"abyssinia" : "あびしにあ"
,"acacia soft" : "AcaciaSoft"
,"accent" : "ACCENT"
,"achromic" : "Achromic"
,"acid eaters" : "ACID EATERS"
,"acid noel" : "Acid Noel"
,"acid-head" : "ACID-HEAD"
,"acidsea" : "ACIDSEA"
,"act.direction" : "ACT.DIRECTION"
,"action mokei" : "アクション模型"
,"activa" : "ACTIVA"
,"active" : "Active"
,"activemover" : "ActiveMover"
,"actress" : "アクトレス"
,"adel-heid" : "アーデルハイド"
,"adnis" : "ADNiS"
,"advanced-ss" : "Advanced-SS"
,"aeba no mori" : "喘葉の森"
,"aerodog" : "AERODOG"
,"aeterna" : "Aeterna"
,"afj" : "AFJ"
,"aft seat" : "AFT SEAT"
,"afterschool of the 5th year" : "Afterschool Of The 5th Year"
,"age" : "AGE"
,"agoitei" : "AGOI亭"
,"ahaan" : "AHAAN"
,"aheazif" : "アヘアジフ"
,"ahm" : "AHM"
,"ai no terrorism" : "愛のテロリズム"
,"ai wa kurayami" : "愛は暗闇"
,"aiai" : "あいあい"
,"aias" : "アイアス"
,"aigamodou" : "あいがも堂"
,"aihara otome" : "相原乙女"
,"aiko dot com" : ["AIKO.com", "ACO dot com"]
,"ail soft" : "アイル"
,"aile" : "Aile"
,"aimaitei" : "愛昧亭"
,"ainos" : "AINOS"
,"aion" : "AION"
,"aion-heart" : "AION HEART"
,"air plants" : "エアプランツ"
,"airyu" : "あいりゅ"
,"aiu show communication" : "A.I.U SHOW COMMUNICATION"
,"ajala" : "戯(あじゃら)"
,"aji no hiraki" : "あじのひらき"
,"aji zukushi" : "鯵づくし"
,"ajisaidenden" : "アジサイデンデン"
,"ajisaihuumitei" : "紫陽花風味亭"
,"ajiyama" : "アジ山"
,"akabei soft" : "アカベイソフト"
,"akabei soft2" : "あかべぇそふとつぅ"
,"akabei soft2 try" : "あかべぇそふとつぅTRY"
,"akabei soft3" : "あかべぇそふとすりぃ"
,"akachi" : "あかち"
,"akacia" : "AKACIA"
,"akadama-ya" : "赤玉屋"
,"akahira kirin" : "あかひらきりん"
,"akai marlboro" : "赤いマルボロ"
,"akai suzume" : "AKAI SUZUME"
,"akai tsubasa" : "赤い翼"
,"akanagi" : "あかなぎ"
,"akane makes revolution" : "サークルAMR"
,"akane soft" : "あかねそふと"
,"akanenone" : "AKANENONE"
,"akapenguin" : "アカペンギン"
,"akari blast" : "Akari Blast!"
,"akatama" : "アカタマ"
,"akatonbo" : "あかとんぼ"
,"akatsuki souken" : "サークル暁創圏"
,"akatsuki works" : "暁WORKS"
,"akatsuki works black" : "暁WORKS-黒-"
,"akatsuki works hibiki" : ["暁WORKS-響-", "響 works"]
,"akatukiya" : "赤月屋"
,"akausagi" : "赤兎"
,"aki beya" : "明部屋"
,"akifumi-chan" : "あきふみちゃん"
,"akihabara chika kakutoujou" : "秋葉原地下格闘場"
,"akikaze asparagus" : "秋風アスパラガス"
,"akinasuya" : "秋茄子屋"
,"akitsu seisakujo" : "現津製作所"
,"akiyama production" : "アキヤマ興行"
,"akkan-bi project" : "Akkan-Bi PROJECT"
,"akumu no takuhaibin" : "悪夢の宅配便"
,"akuochisukii kyoushitsu" : "アクオチスキー教室"
,"akusei-shinseibutsu" : ["悪性新生物", "アクセイシンセイブツ"]
,"akutensoushin" : "悪転奏進"
,"akys honpo" : "akys本舗"
,"alamode" : "あらもーど"
,"alaruma" : "アラルマ"
,"alcot" : "ALcot"
,"alcot honey comb" : "ALcotハニカム"
,"alemateorema" : "アレマテオレマ"
,"alem-gakan" : "亜嶺夢画館"
,"alfa300" : "ALFA300"
,"algolagnia" : "アルゴラグニア"
,"alice digital factory" : "Alice Digital Factory"
,"alice no takarabako" : "ありすの宝箱"
,"alice syndrome" : "アリスシンドローム"
,"alice-do" : ["ありす堂", "アリス堂"]
,"alicegarden" : "AliceGarden"
,"alicesoft" : "AliceSoft"
,"allegro mistic" : "Allegro Mistic"
,"alliance" : "アライアンス"
,"all-time" : "ALL-TiME"
,"alma" : "ALMA"
,"alpha to yukaina nakamatachi" : "有葉と愉快な仲間たち"
,"alphaville" : "ALPHAVILLE"
,"alps" : "ALPS"
,"alraune-batake" : "アルラウネ畑"
,"altycia" : "Altycia"
,"alumi soft" : "あるみそふと"
,"alumican" : "あるみかん"
,"amaama-tei" : "甘々亭"
,"amadeus no isan" : "アマデウスの遺産"
,"amagami dou" : "あまがみ堂"
,"amakuchi syoujo" : "AMAKUCHI SYOUJO"
,"amato bu" : "あまとー部"
,"amazake hatosyo-ten" : "甘酒鳩商店"
,"amazawa kingdom" : "AMAZAWA KINGDOM"
,"ambivalence" : "AMBIVALENCE"
,"ambivalenz" : "Ambivalenz"
,"ame nochi yuki" : "あめ のち ゆき"
,"ame usagi" : "あめうさぎ"
,"ame-chan" : "アメチャン"
,"american kenpou" : "アメリカン拳法"
,"ameshoo" : "あめしょー"
,"ameya." : "飴屋。"
,"amisawa kenkyuujo" : "網澤研究所"
,"ammolite" : "アンモライト"
,"amorphous" : "AMORPHOUS"
,"amp" : "AMP"
,"amuai okashi seisakusho" : "あむぁいおかし製作所"
,"amuse craft erotica" : "アミューズクラフトエロチカ"
,"ana" : "ANA"
,"anago pie" : "あなごぱい"
,"an-arc" : "アンアーク"
,"anarchy sox" : "ANARCHY SOX"
,"anastasia" : "アナスタシア"
,"anc" : "A.N.C"
,"anchor" : "ANCHOR"
,"andorogynous" : "ANDOROGYNOUS"
,"aneko chokudoukan" : "あねこ直道館"
,"aneko no techo" : "あねこの手帖"
,"anemone" : "アネモネ"
,"anesen" : "あねせん"
,"ange" : "ANGE"
,"angel red" : "Angel Red"
,"angel smile" : "Angel Smile"
,"angelbox" : "ANGELBOX"
,"angelhearts" : "AngelHearts"
,"angyadow" : "行脚堂"
,"aniki teikoku" : "アニキテイコク"
,"anim" : "ANIM"
,"anim teammm" : ["ANIM Mother&Wife", "ANIM.teamMM"]
,"animal ship" : "ANIMAL SHIP"
,"anime brothers" : "アニメブラザーズ"
,"aniseed" : "AniSeed"
,"ankh" : "あんく"
,"anklet-girl" : "Anklet少女"
,"ankoku-bousougumi" : "暗黒暴走組"
,"anmitsuyomogitei" : "あんみつよもぎ亭"
,"anmonkan" : "闇夢館"
,"anorak post" : "AnorakPost"
,"another cellar" : "Another cellar"
,"another room" : "AnotherRoom"
,"antyuumosaku" : "暗中模索"
,"any wa sea" : "AnyはSea!!"
,"anzen daiichi" : "安全第一"
,"anzen ekisu" : "anzenEkis"
,"anzen na buffalo" : "安全なバッファロー"
,"ao hana" : "青華"
,"aoba q madou" : "青葉Ｑ魔洞"
,"aodiso kankou" : "青ぢそ甘工"
,"aodouhu" : "青豆腐"
,"a-office" : "A-Office"
,"aohimo familia" : "アオヒモファミリア"
,"aokihoshi" : "AOKIHOSHI"
,"aomizuan" : "青水庵"
,"aozora biscuit" : "青空ビスケット"
,"apadash" : "アパダッシュ"
,"aphrodite" : "あふろでぃ～て"
,"apocrine." : "あぽくりん。"
,"appe-" : "アパダッシュ"
,"appetite" : "Appetite"
,"apple pie" : "Apple Pie"
,"apple pie en" : "Apple Pie えん"
,"applecat" : "あっぷるきゃっと"
,"applemint" : "あっぷるみんと"
,"applemint black" : "あっぷるみんとBLACK"
,"applique" : "あっぷりけ"
,"apricot" : ["APRICOT", "applicot"]
,"apricot cherry" : "Apricot Cherry"
,"apricot pie" : "あぷりこっとぱい"
,"apsara project" : ["[apsara project];", "あぷさらPROJECT"]
,"aqua house" : "AQUA HOUSE"
,"aqua-brand" : "AQUA-BRAND"
,"aquadrop" : "アクアドロップ"
,"aquahouse" : "AQUA HOUSE"
,"aquamarine" : "あくあまりん"
,"aquaplus" : "アクアプラス"
,"arakureta monotachi" : "あらくれた者たち"
,"aramaa" : "あらまあ"
,"aramushadou" : "荒武者堂"
,"aratoya" : "あらと屋"
,"arc" : "ARC"
,"arch" : "ARCH"
,"archetype" : "ARCHETYPE"
,"archives" : "アーカイブ"
,"arctic pan" : ["北極鍋", "ARCTIC-PAN"]
,"are." : "あれ。"
,"arekusa thunder" : "アレクササンダー"
,"arestica" : "ARESTICA"
,"areya" : "あれ屋"
,"areyouhappy" : "AREYOUHAPPY"
,"argonauts" : "Argonauts"
,"arianrhod" : "Arianrhod"
,"ariel soft" : "ARIEL SOFT"
,"arieroof" : "アリエルーフ"
,"aries" : "Aries"
,"ark emerald" : "ArkEmerald"
,"ark shell" : "アークシェル"
,"arkham" : "ああかむ"
,"arkham products team ankoku baitai" : "アーカムプロダクツ／チーム暗黒媒体"
,"armadillo" : "Armadillo"
,"armonica" : "Armonica"
,"armored ginkakuji" : ["ARMORED銀閣寺", "アーマードギンカクジ"]
,"aroma gaeru" : "あろまガエル"
,"arrow island" : "アローアイランド"
,"arsenothelus" : "アルセノテリス"
,"art craft" : "ART CRAFT"
,"art equals theater" : "ART=THEATER"
,"art rakugaki" : "ARTラクガキ"
,"artemis" : "あるてみす。"
,"article 60 of criminal code" : "Article 60 of criminal code"
,"artifact" : "アーティファクト"
,"artificial eden" : "Artificial Eden"
,"arts graffiti" : "アーツグラフティ"
,"arukaseya" : "歩かせ屋"
,"aruku denpatou no kai" : "歩く電波塔の会"
,"aruto-ya" : "あると屋"
,"as library" : "A's Library"
,"asa project" : "ASa Project"
,"asagayatei" : "Asagayatei"
,"asaka sangyou" : "朝霞産業"
,"asakatsu" : "あさかつ"
,"asanoya" : ["浅野屋", "浅廼屋"]
,"asgard" : "アースガルド"
,"asgo" : "ASGO"
,"ash wing" : "Ash wing"
,"ashima sandou" : "芦間山道"
,"ashinoie" : "あしの家"
,"ashita o sakigakeru kyouki shuudan cog" : "明日を魁る狂気集団COG"
,"ashita wa docchida" : "明日はどっちだ！"
,"ashitakara-ganbaru" : "あしたから頑張る"
,"ashuraya" : "阿修羅屋"
,"asihireya" : "あしひれや"
,"askray" : "AskRay"
,"aspergillus" : "Aspergillus"
,"asstaro-san" : "アスタローサン"
,"ast" : "AST"
,"asteroid fish" : "Asteroid Fish"
,"astras" : "ASTRA'S"
,"astro creep" : "ASTRO CREEP"
,"astrocleep" : "ASTROCLEEP"
,"astronauts" : "アストロノーツ"
,"astronauts alya" : "アストロノーツ・アリア"
,"astronauts comet" : "アストロノーツ・コメット"
,"astronauts sirius" : "アストロノーツ・シリウス"
,"astronauts spica" : "アストロノーツ・スピカ"
,"astronomy" : "ASTRONOMY"
,"atelier bord" : "Atelier Bord"
,"atelier d" : "アトリエD"
,"atelier gh" : "Atelier GH"
,"atelier gons" : "アトリエGONS"
,"atelier kaguya" : "アトリエかぐや"
,"atelier kaguya berkshire yorkshire" : "アトリエかぐや Berkshire Yorkshire"
,"atelier kaguya cheshirecat" : "アトリエかぐや CheshireCat"
,"atelier kaguya dreizehn" : "アトリエかぐや Dreizehn"
,"atelier kaguya honky-tonk pumpkin" : "アトリエかぐや Honky-Tonk Pumpkin"
,"atelier kaguya p-ch" : "アトリエかぐや P-ch"
,"atelier kaguya team gassa-q" : "アトリエかぐや TEAM Gassa-Q"
,"atelier kaguya team heartbeat" : "アトリエかぐや TEAM HEARTBEAT"
,"atelier kinta" : "あとりえKINTA"
,"atelier m" : "アトリエM"
,"atelier maso" : "アトリエマゾ"
,"atelier miyabi" : "あとりえ雅"
,"atelier ms" : "atelier Ms"
,"atelier pinpoint" : "アトリエ ピンポイント"
,"atelier ponyo2 heart" : "Atelier ponyo2 Heart"
,"atelier sakura" : "アトリエさくら"
,"atelier sakura darkness" : "アトリエさくら DARKNESS"
,"atelier sakura extra" : "アトリエさくら eXtra"
,"atelier sakura konmai studio" : "アトリエさくら こんまいすたじお"
,"atelier sakura mount position" : "アトリエさくら マウントポジション"
,"atelier sakura roshutsu yuugi" : "アトリエさくら 露出遊戯"
,"atelier sakura team.ntr" : "アトリエさくら Team.NTR"
,"atelier sava" : "Atelier Sava"
,"atelier yang" : "あとりえ・ヤン"
,"atelier yutanpo" : "アトリエゆたんぽ"
,"atelier-g" : "Atelier-G"
,"ather" : "Ater"
,"atomic buster" : "アトミックバスター"
,"atsuatsu muchimuchi" : "あつあつむちむち"
,"atsuya kougyou" : "篤屋工業"
,"attendance number 26" : "出席番号26"
,"atuworks" : "あてゅ・わぁくす"
,"august" : "August"
,"aurora" : "AURORA"
,"authoring heaven" : "オーサリングヘヴン"
,"autobahn" : "Autobahn"
,"autozoon" : "AUTOZOON"
,"av" : "Team AV"
,"avion village" : "アビオン村"
,"avion village f" : "アビオン村F"
,"awatake" : "あわたけ"
,"ax" : "サークルAX"
,"axis" : "アクシス"
,"axl" : "AXL"
,"axz" : "サークルAXZ (アクシヅ)"
,"axz-braziole" : "AXZ_ブラジオーレ"
,"aya" : ["team-aya", "彩"]
,"ayashige dan" : ["あやしげ団", "ADAN"]
,"ayashii bochi" : "あやしい墓地"
,"ayashii kikaku" : "綾椎企画"
,"aypio" : "AYPIO"
,"aza" : "AZA"
,"azarashi factory" : "AZARASHI FACTORY"
,"azarashisoft" : "あざらしそふと"
,"azasuke wind" : "AZASUKEWIND"
,"azumaya matsukaze" : ["Azumaya MATSUKAZE", "あずまや松風", "アズマヤ マツカゼ"]
,"azumaya shiten" : "アズマ屋支店"
,"azure" : "AZURE"
,"azurite" : "Azurite"
,"b.i-project" : "B.I-PROJECT"
,"b5 doumei" : "B5同盟"
,"babel" : "BABEL"
,"baby maniacs" : "BABY MANIACS"
,"baby pink" : "BABY PINK!!"
,"babybed" : "ベビーベッド"
,"babydoll" : "BABYDOLL"
,"badon" : "BADON"
,"baguri sangyou" : ["馬栗産業", "BAGURI SANGYOU"]
,"baha-chop" : "ばはちょっぷ"
,"bakeda daigaku" : "バケダ大学"
,"bakugeki monkeys" : "爆撃モンキーズ"
,"bakuhatsu brs." : "ばくはつBRS"
,"bakunyu fullnerson" : "爆乳フルネルソン"
,"bakuretsu fusen" : "爆裂風船"
,"bakusou special" : "爆走スペシャル"
,"ballistic onahole" : "Ballistic onahole"
,"ballox" : "BalloX"
,"banana king" : "バナナキング"
,"banana musume" : "甘蕉小姐"
,"banana sakana" : "バナナサカナ"
,"banana saruen" : ["ばななサル園", "BANANA MONKY PARK"]
,"banana shu-shu" : "BANANA Shu-Shu"
,"bananajam" : "BANANA JAM"
,"bandit" : "BANDIT"
,"banten 69" : "蛮天69"
,"barbarossa" : "バルバロッサ"
,"barricade" : "BARRICADE"
,"baseson" : "BaseSon"
,"baseson light" : "BaseSon Light"
,"basic champions" : "BASIC CHAMPIONS"
,"basil" : "BasiL"
,"bassoon factory" : "ばっすん工房"
,"basutei shower" : "バス停シャワー"
,"batten kariba" : "×仮歯"
,"batterken" : "BatterKen"
,"battle fighters oretachi" : "バトルファイターズ俺たち！"
,"b-baba-s" : "B-BABA-S"
,"bbb-extra" : "BBBえくすとら"
,"bbg" : "BBG"
,"b-crews" : "B-Crews"
,"beaf emotion" : "びーふえもーしょん"
,"bear hand" : "熊掌社"
,"beastics" : "Beastics"
,"beat-pop" : "BEAT POP"
,"bebe" : "BEBE"
,"bect" : "Bect"
,"beelzebub" : "ベルゼブブ"
,"beenyan" : "び～にゃん"
,"beep-beep" : "BEEP-BEEP!"
,"bef" : "びいえふ"
,"behind moon" : "Behind Moon"
,"being man" : "Being Man"
,"bell-da" : "BELL-DA"
,"bellybell" : "ベリーベル"
,"beniya" : "紅屋"
,"bens works" : "Ben's Works"
,"bergamot" : "Bergamot"
,"berkana" : "ベルカナ"
,"berries" : "ベリーズ"
,"berry lollipop" : "Berry Lollipop"
,"bible" : "BIBLE"
,"big boss" : "BIG BOSS"
,"bijutsubu" : "美術部"
,"bikkuri gyouten" : "びっくり仰天"
,"bindume syojo." : "瓶詰少女。"
,"birdy soft" : "バーディーソフト"
,"birobon" : "ビロボン"
,"bis" : "Bis"
,"bishop" : "BISHOP"
,"biwa gakudan" : "琵琶楽団"
,"bizensiki roroppu" : "備前式ロロップ"
,"bks studio" : "BKS STUDIO"
,"black angel" : "BLACK ANGEL"
,"black art" : "BLACK ART"
,"black box" : "BLACK BOX"
,"black cats garage" : "BLACK CAT'S GARAGE"
,"black currant" : "ブラックカラント"
,"black cyc" : "ブラックサイク"
,"black dog" : ["ぶらっくどっぐ", "BLACK DOG"]
,"black fly" : "BLACK FLY"
,"black light" : "ブラックライト"
,"black list" : "BLACK LIST"
,"black onix" : "BLACK ONIX"
,"black package" : "BLACK PACKAGE"
,"black package try" : "BLACK PACKAGE TRY"
,"black shadow" : ["ぶらっくしゃどー", "black shadow"]
,"blackglobe" : "BLACKGLOBE"
,"blackrabbits" : "Black Rabbits"
,"blackrainbow" : "BLACKRAINBOW"
,"blaze" : "BLAZE!"
,"blazer one" : "BLAZER ONE"
,"blip" : "BLIP"
,"blitzkrieg" : "ブリッツクリーク"
,"blood company" : "ブラッドカンパニー"
,"blood elemental" : "Blood-Elemental"
,"bloody hawk" : "BLOODY HAWK"
,"bloomhandle" : "ブルームハンドル"
,"blue age" : "BLUE AGE"
,"blue berry gum" : "BLUE BERRY GUM"
,"blue blood" : "BLUE BLOOD"
,"blue catty" : "BLUE CATTY"
,"blue devil" : "Blue Devil"
,"blue gale" : "BLUE GALE"
,"blue gale light" : "ブルゲLIGHT"
,"blue garnet" : "BLUE GARNET"
,"blue impact" : "ブルーインパクト"
,"blue metal" : "BLUE METAL"
,"blue shachi" : "ブルーシャッチー"
,"blue spiral" : "Blue Spiral"
,"blue syndrome" : "青色症候群"
,"blue topaz" : "Blue Topaz"
,"blue wind" : "BLUE☆WIND"
,"blueberry soft light" : "ぶる～べり～そふとLight"
,"bluegrass" : "Bluegrass"
,"bluejelly" : "BLUEJELLY"
,"bluemage" : "BlueMage"
,"bluemonday" : "BLUEMONDAY"
,"bluewater" : "BLUEWATER"
,"bm dan" : "BM団"
,"bodley head" : "BODLEY HEAD"
,"boku no tampopo" : "ぼくのたんぽぽ"
,"bokukko inma no soukutu" : "ボクっ娘淫魔の巣窟"
,"bokusatsu shinzui" : "撲殺真髄"
,"bokuto-kitan" : "墨東綺譚"
,"bolt-king" : "BOLT-KING"
,"bonanza" : "Bonanza"
,"bonbee" : "Bonbee!"
,"bonbee bonbon" : "ボンびいボンボン"
,"bonbon company" : "ボンボンカンパニー"
,"bone china" : "Bone★chinA"
,"bonusshop" : "BONUSSHOP"
,"booblian" : "Booblian"
,"bootup" : "bootUP!"
,"boru kikaku" : "ぼる企画"
,"bottomress pit" : "BOTTOMRESS PIT"
,"bouken koubou" : "冒険工房"
,"bounamitei" : "防波亭"
,"bousou fuhatsudan" : "暴走!!不発団"
,"bousousuwanchika" : "暴走スワンチカ"
,"box" : "BOX"
,"brain soft" : "BRAIN SOFT"
,"brave chicken" : "BRAVE CHICKEN"
,"brave heart" : "ブレイヴはぁと"
,"brave heart petit" : "BRAVE HEART petit"
,"braziole" : "ブラジオーレ"
,"breakin bakery" : "Breakin Bakery"
,"breeze" : "Breeze"
,"bridget goudou" : "ブリジット合同"
,"briest" : "BRIEST"
,"brilliant thunder" : "Brilliant Thunder"
,"brio" : "Brio"
,"broad smile" : "Broad smile"
,"bronco hitoritabi" : "ブロンコ一人旅"
,"brough-superior" : "Brough-Superior"
,"brownie" : "ブラウニー"
,"budou bekkan" : "ブドウ別館"
,"buffalow propaganda" : "BUFFALOW PROPAGANDA"
,"bug system" : "バグシステム"
,"buki to bougu no mise" : "ぶきとぼうぐのみせ"
,"bukimi no tanigoto aishitai" : "不気味の谷ごと愛したい"
,"bulack okusan" : "BULACK OKUSAN"
,"bullet ballet" : "Bullet Ballet"
,"bumsign" : "BUMSIGN"
,"bunbukudou" : "ぶんぶく堂"
,"bunchindoh" : "ぶんちん堂"
,"bunny pro." : "Bunny Pro."
,"bunta kikaku" : "BUN太企画"
,"burning hammer" : "Burning Hammer"
,"burugari-ya" : "ぶるがり屋"
,"busou megami" : "武装女神"
,"busou yousei" : "武装妖精"
,"butagoya" : "ぶた小屋"
,"butakoma 300g" : "ぶたコマ300g"
,"butter cookie" : ["ばたぁくっきぃ", "BUTTER COOKIE"]
,"buzz buzz" : "Buzz Buzz"
,"byakuya kisoukyoku" : "白夜綺想曲"
,"byousatsu tanukidan" : "秒殺狸団"
,"bystander" : "BYSTANDER"
,"c drive" : "C：Drive"
,"c.a.t" : "CAT Creative Art Team"
,"c.bjim" : "C.Bjim"
,"c.c. clockup" : "C.C. CLOCKUP"
,"c.r.c" : "C.R.C"
,"c.rs nest" : "C.R's NEST"
,"cabbage soft" : "きゃべつそふと"
,"cabbit" : "Cabbit"
,"cable hogue unit" : "CABLEHOGUE UNIT"
,"cacao" : "カカオ"
,"cafeteria watermelon" : "CAFETERIA WATERMELON"
,"caitsith" : "Caitsith"
,"calcite" : "Calcite"
,"caligula" : "CALIGULA"
,"call.a" : "CALL.A"
,"calm white" : "カームホワイト"
,"calvary 13th" : "Calvary 13th"
,"campus" : "Campus"
,"camrism" : "カムリズム"
,"can do now" : "キャンドゥーなう！"
,"candy" : "CANDY"
,"candy paddle" : "Candy Paddle"
,"candy pop" : "Candy Pop"
,"candycastle" : "CANDYCASTLE"
,"candyman" : "CANDYMAN"
,"candysoft" : "きゃんでぃそふと"
,"cannabis" : "カンナビス"
,"canvas garden" : "CANVAS+GARDEN"
,"caprice" : "Caprice"
,"capsule 29" : "カプセル29"
,"capsule29" : "カプセル29"
,"captain santa" : "Captain SANTA"
,"caramel box" : "Caramel Box"
,"carmine" : "Carmine"
,"carnelian" : "CARNELIAN"
,"carol works" : "Carol Works"
,"carriere" : "Carriere"
,"cartagra" : "骨牌倉"
,"c-arts" : "C-ARTS"
,"casket" : "Casket"
,"casmania" : "CASMANIA"
,"catear" : "Catear"
,"category killer" : "カテゴリーキラー"
,"catwalknero" : "catwalkNERO"
,"caym" : "Caym"
,"caza mayor" : "CAZA MAYOR"
,"c-chaos.net" : "サークルChaos"
,"cdpa" : "CDPA"
,"celestial eden" : "CELESTIAL EDEN"
,"celluloid-acme" : "CELLULOID ACME"
,"ceramic heart" : "セラミックハート"
,"cha cha cha brothers" : "ちゃちゃちゃぶらざーず"
,"chabashira-project" : "茶柱プロジェクト"
,"cha-cha gumi" : "茶々組"
,"chagashi saiban" : "茶菓子裁判"
,"chagu chagu koubou" : "ちゃぐちゃぐ工房"
,"chaho" : "ちゃほ"
,"chain reaction" : "チェーンリアクション"
,"chaingang" : "CHAINGANG"
,"chakapoko honpo" : "ちゃかぽこ本舗"
,"chanbara" : "CHANBARA!"
,"chandora" : "ちゃんどら"
,"channel ubai" : "チャンネル奪"
,"chaos-l" : "CHAOS-L"
,"chaotic arts" : "カオティック・アーツ"
,"chara chara" : "CHARA CHARA"
,"charm books" : "CHARM BOOKS"
,"chawanmushi" : "ちゃわんむし"
,"cheap cheap" : "CHEAP CHEAP"
,"cheese company" : "チーズカンパニー"
,"chelsea lip" : "Chelsea lip"
,"chelseasoft" : "Chelseasoft"
,"chemi-story" : "Chemi-Story"
,"cherry blossom" : "ちぇりーぶろっさむ"
,"cherry palace" : "CHERRY PALACE"
,"cherry soft" : "ちぇりーそふと"
,"chesha neko no yakata" : "チェシャ猫の館"
,"chevalerie" : "シュヴァルリ"
,"chibi chibi neko neko" : "ちびちびねこねこ"
,"chibikko kingdom" : "CHIBIKKO KINGDOM"
,"chicken chicken machine" : "チキチキ☆マシーン"
,"chicken knife" : "Chicken Knife"
,"chien" : "Chien"
,"chiffon" : "シフォン"
,"chijoku an" : "恥辱庵"
,"chika sekai" : "地下世界"
,"chikashitsu" : "地下室"
,"chikatetsu shokudou" : "地下鉄食堂"
,"chikauo yakkyoku" : "地下魚薬局"
,"chikuwano kimochi" : "ちくわの気持ち"
,"chill-out" : "CHILL OUT"
,"chimatsuriya honpo" : "血祭屋本舗"
,"chimee house" : "ちみはうす"
,"chimeishou" : "致命傷"
,"chinasanchi" : "ちゃいなさんち"
,"chinchintei" : "ちんちん亭"
,"chinjao girl." : "ちんじゃお娘。"
,"chinnmokunogazinn" : "沈黙の牙人"
,"chinpudo" : "珍譜堂"
,"chinzuri bop" : "CHINZURIBOP"
,"chiri akuta" : "塵芥"
,"chirigami goya" : "ちり紙小屋"
,"chise" : "千世"
,"chocolate banana ou lait" : "Chocolate Banana Ou lait"
,"chocolate kinema" : "Chocolate Kinema"
,"chocolate latte" : "ショコラテ"
,"chocolate shop" : "CHOCOLATE SHOP"
,"chocolate synapse" : "ChocolateSynapse"
,"cho-jin hakaba" : "超人墓場"
,"choki no kamisama" : "ちょきの神さま"
,"chokore topafe" : "チョコレートパフェ"
,"chokudoukan" : "直道館"
,"chotto dake aruyo." : "チョットだけアルヨ。"
,"chou-cream-sunday" : "しゅーくりーむさんでー"
,"choujikuu yousai kachuusha" : "超時空要塞カチューシャ"
,"chronicle" : "くろにくる"
,"chrono mail" : "Chrono Mail"
,"chronolog" : "CHRONOLOG"
,"chuable soft" : "チュアブルソフト"
,"chuugoku 12man" : "中国12万"
,"chuuka mantou" : "中華饅頭"
,"chuuni" : "ちゅうに"
,"cico" : "Cico"
,"ciel" : "CIEL"
,"cinematograph" : "CINEMATOGRAPH"
,"cior" : "Cior"
,"circle anco" : "サークルアンコ"
,"circle billion" : "サークルBILLION"
,"circle bob" : "サークルボブ"
,"circle credit" : "くれじっと"
,"circle eden" : "CircleEden"
,"circle energy" : "CIRCLE ENERGY"
,"circle foundation" : "CIRCLE FOUNDATION"
,"circle heron" : "サークルヘロン"
,"circle kuusou zikken" : ["Circle KUUSOU ZIKKEN", "サークル空想実験"]
,"circle meimitei" : "サークル冥魅亭"
,"circle ohigetan" : "尾髭丹"
,"circle outerworld" : "サークルOUTERWORLD"
,"circle taihei-tengoku" : "サークル太平天国"
,"circle-fiore" : "circle-FiORE"
,"circus" : "CIRCUS"
,"circus fetish" : "サーカス・フェティッシュ"
,"citron love" : "CITRON LOVE"
,"citron soft" : "しとろんソフト"
,"citrus" : "Citrus"
,"citrus air" : "Citrus Air"
,"cla cla clala" : "Cla Cla Clala"
,"clapworks" : "CLAPWORKS"
,"class of love girls" : "ふともも組"
,"clear" : "Clear"
,"clearmana" : "クリアマナ"
,"clesta" : "クレスタ"
,"clip craft" : "CLIP☆CRAFT"
,"clochette" : "クロシェット"
,"clock star" : "くろっくすたー"
,"clockup" : ["CLOCKUP", "クロックアップ"]
,"clockup kikaku" : "クロックアップ企画"
,"clockup team anise" : "CLOCKUP team.ANISE"
,"closet child" : "CLOSET CHILD"
,"clover" : "CLOVER"
,"clover kai" : "くろーヴァー会"
,"club bacteria" : "くらぶ ばくてりあ"
,"clutch shot king" : "CLUTCH SHOT KING"
,"coa" : "COA"
,"cobanzame" : "こばんざめ"
,"coburamenman" : "コブラーメンマン"
,"cocktail soft" : "カクテルソフト"
,"cocoa holic" : "Cocoa Holic"
,"cocon" : "cocon!"
,"coconutbless" : "COCONUT BLESS"
,"codegia" : "CODEGiA"
,"codepink" : ["CODEPINK", "コードピンク"]
,"coffee maker" : "こーひーめーかー"
,"coin toss" : "こいんとす"
,"coin-software" : "COIN-SOFTWARE"
,"colon" : "：co／on"
,"colors" : "COLORS"
,"colt" : "Colt"
,"combat mon-mon" : "コンバットモンモン"
,"come through" : "ComeThrough"
,"comic kingdom" : "コミックキングダム"
,"comics way" : "Comics way"
,"command plus z" : "COMMAND+Z"
,"concerto" : "Concerto"
,"conezu step plus ziggurat" : "こねずステップ！+Ziggurat"
,"confiture soft" : "コンフィチュールソフト"
,"cool brain" : "COOL BRAIN"
,"cool kyou dai san shibu" : "クール教第三支部"
,"cool palace" : "Cool Palace"
,"copy cat crime" : "COPY CAT CRIME"
,"corkscrew" : "CORKSCREW"
,"corori" : "CORORI"
,"cosmic cute" : "COSMIC CUTE"
,"cosplay kissa nyan nyan" : "コスプレ喫茶娘々"
,"cotojikan" : "琴慈館"
,"cotton software" : "コットンソフト"
,"countack" : "カウンタック"
,"counter attack" : "COUNTER ATTACK"
,"courmet-nyankichi" : "くるめにゃん吉"
,"courreges ace" : "クレージュA"
,"cowper" : "COWPER"
,"craft" : "CRAFT"
,"crank.in" : "CRANK.IN"
,"crayon arts" : "くれよんあーつ"
,"crazy clover club" : "Crazy Clover Club"
,"crazy9" : "Crazy9"
,"cream cider" : "Cream Cider"
,"creampie" : "CreamPie"
,"crear mint" : "CREAR★MINT"
,"crepe" : "Crepe"
,"crimson" : "クリムゾン"
,"crimson ground" : "Crimson Ground"
,"cronus" : "Cronus"
,"cross down" : "CROSS DOWN"
,"cross place" : "CROSS PLACE"
,"cross-do" : "黒酢堂"
,"crossnet" : "CROSSNET"
,"crossnet-pie" : "Crossnet-Pie"
,"crossover" : "CrossOver"
,"crowd" : "CROWD"
,"crystal candy" : "CRYSTAL☆CANDY"
,"crystalia" : "CRYSTALiA"
,"cs cheese" : "C's cheese"
,"cs ware" : "C's Ware"
,"cshouse" : "しーずはうす"
,"c-side" : "C-side"
,"cube" : "CUBE"
,"cube sugar" : "Cube Sugar"
,"cubetype" : "CUBE TYPE"
,"cubic" : "CUBIC"
,"cuffs" : "CUFFS"
,"cu-little2" : ["くりとる", "くりとるりとる"]
,"cuniculus" : "CUNICULUS"
,"curecube" : "キュアキューブ"
,"curefull base" : "Curefull Base"
,"curious" : "CURIOUS"
,"curry berg dish" : "Curry Berg Dish"
,"custard" : "かすたーど"
,"custom" : "カスタム"
,"customer" : "CUSTOMER"
,"cut a dash" : "Cut a Dash!!"
,"cut works publishing" : "CUT WORKS PUBLISHING"
,"cutie kids club" : "Cutie Kids Club"
,"cyan" : "シアン"
,"cybele" : "Cybele"
,"cyberia" : "CYBERIA"
,"cyc" : "Cyc"
,"cyc no-nos" : "CYC NO-NOS"
,"cyclet" : "CYCLET"
,"cyclone" : "CYCLONE"
,"d drive" : "D：drive."
,"d star g" : "Ｄ☆Ｇ"
,"d.doll.house" : "D：DOLL：HOUSE"
,"d.n.a.lab." : "D.N.A.Lab."
,"d.o." : "D.O."
,"da hootch" : "DA HOOTCH"
,"dadacha" : "だだちゃ！"
,"dagashiya" : "駄菓子屋"
,"dai 14 dokritsu butai" : "第14独立部隊"
,"dai 14 dokuritsu butai" : "第14独立部隊"
,"dai 46 kishidan" : "第46騎士団"
,"dai 6 kichi" : "第６基地"
,"daigakuseikyou" : "大学性協"
,"daigo wakusei koukyoukyoku" : "第五惑星交響曲"
,"daihonei" : "大本営"
,"daijobi kenkyuujo" : "ダイジョビ研究所"
,"dai-kotetsu dan" : "ダイコテツ団"
,"daisy feat. giga" : "daisy feat.戯画"
,"daitoutaku" : "大菫卓"
,"daizu azuki" : ["DAIZU-AZUKI", "大豆小豆"]
,"dakimakuma" : "だきまくま"
,"damage honpo" : "ダメージ本舗"
,"dame tamashii" : "ダメ魂"
,"danbooru" : "ダンボール"
,"dancing cat" : "ダンシングキャット"
,"dangan densetsu" : "弾丸伝説"
,"dangan densetsu laser" : "弾丸伝説 LASER"
,"danger equals zone" : "DANGER=ZONE"
,"dangerous thoughts" : ["危険思想", "Dangerous Toughts"]
,"darabuchidou" : "だらぶち堂"
,"darai-blood" : "DARAI-BLOOD"
,"dark battery" : ["黒電池", "Dark Battery"]
,"dark castle" : "DARK CASTLE"
,"dark rose" : "DARKROSE"
,"dark side" : "Dark Side"
,"dark swan" : "ダークスワン"
,"dark water" : "DARK WATER"
,"darknesspot" : "DarknessPot"
,"dasei seikatsu suishin iinkai" : "怠惰生活推進委員会"
,"dash" : "Dash!"
,"dashigara 100" : "ダシガラ100%"
,"dasshifunnyuu" : "脱脂粉乳"
,"dasshifunnyuu teishoku" : "脱脂粉乳定食"
,"date wa gorgeous ni" : "デートはゴージャスに"
,"datendou" : "堕天堂"
,"datsuryoku-shoutai" : "脱力小隊"
,"d-cave" : "D-CAVE"
,"d-club" : "D-くらぶ"
,"ddt" : "DDT"
,"dear" : ["DE@R", "でぃあ"]
,"deastim" : "でぃあすちーむ"
,"death powder" : "DEATH POWDER"
,"debonosu works" : "でぼの巣製作所"
,"dedepoppo" : "DEDEPOPPO"
,"dederantan" : "ででらんたん"
,"deep blue" : "ディープブルー"
,"deep rising" : "DEEPRISING"
,"delayder" : "でぃれ～だ～"
,"deliverance" : "Deliverance"
,"delta box" : "DELTA BOX"
,"delta horse" : "でるたほーす"
,"deltaforce" : "DELTAFORCE"
,"denchuu rui" : "田中類"
,"dendou kodomo" : "電動子供"
,"dennou denpa hatsureisho" : "電脳電波発令所"
,"dennou fuyu mikan" : "電脳冬蜜柑"
,"dennou rakuen" : "電脳楽園"
,"dennougiwa" : "DENNOUGIWA"
,"denpatou" : "電波塔"
,"denryokukei" : "電力計"
,"deriya" : "Deriya"
,"derlanger" : "D'ERLANGER"
,"derolian" : "デロリアン"
,"desire" : "DESIRE"
,"dessert soft" : "DESSERT Soft"
,"devil-seal" : "Devil-seal"
,"dewdrop" : "DEWDROP"
,"d-heaven" : "D-heaven"
,"didii temp" : "ぢぢぃTEMP"
,"dieppe factory" : ["DIEPPE FACTORY", "でぃえっぷ工房"]
,"dieselmine" : "ディーゼルマイン"
,"digianime corporation" : "デジアニメ・コーポレイション"
,"digiel" : "DiGiEL"
,"digital accel works" : ["DAW", "DIGITAL ACCEL WORKS"]
,"digital boys" : "DIGITAL BOYS"
,"digital cute" : "Digital Cute"
,"digital flyer" : "Digital Flyer"
,"digital g power" : "デジタルGパワー"
,"digital lover" : "Digital Lover"
,"digital wife project" : ["デジタルワイフProject", "熟女神の黒穴"]
,"digitalian cafe" : "Digitalian Cafe"
,"digix" : "digiX"
,"diogenes club" : "ディオゲネスクラブ"
,"disabel" : "DisAbel"
,"discovery" : "DISCOVERY"
,"dish up" : "Dish up"
,"diskdream" : "DISKDREAM"
,"ditama kikaku" : "ぢたま企画"
,"diva" : "DIVA"
,"dl mate" : "DLメイト"
,"d-lovers" : "D-LOVERS"
,"dmm.com" : "DMM.com"
,"do well" : "Do well !!!"
,"dobuita street" : "DOBUITA STREET"
,"dodo fuguri" : "百々ふぐり"
,"dog and god" : "Dog&God"
,"doggymissile" : "Doggy Missile"
,"dogorpanda" : "Dog or Panda"
,"dogstyle" : "DogStyle"
,"dogyear" : "DOGYEAR"
,"dojinchi" : "どじんち"
,"dokkoi soft" : "どっ恋ソフト"
,"doku pepper" : ["doku-pepper", "毒胡椒"]
,"dokudenpa kenkyuusho" : "毒電波研究所"
,"dokumushi shokeitai" : "毒虫処刑隊"
,"dokuritsu gurentai" : "独立愚連隊"
,"dolce" : "DOLCE"
,"doll play" : "サークルDOLL PLAY"
,"dolls sweets" : "Doll's Sweet's"
,"donburi beya" : "丼部屋"
,"dorayakiya" : "どらやきや"
,"dorei mania" : "奴隷★MANIA"
,"dorepooru" : "ドレポール"
,"dorian kanshokutai" : "ドリアン完食隊"
,"doronuma kyoudai" : "泥沼兄弟"
,"doropanda tours" : "どろぱんだTOURS"
,"dosukoi jinja" : ["どす恋☆神社", "どす恋♡八幡宮"]
,"dot eito" : "ドットエイト"
,"dotechin tengoku" : "どてちん天国"
,"dott plan" : "ドット企画"
,"double branch" : "だぶるぼらんち"
,"double typhoon" : "ダブルタイフーン"
,"double-h" : "DOUBLE-H"
,"doudan tsutsuji" : "満天星"
,"doudantsutsujitomonokai" : "満天星友乃会"
,"doujin arctic" : "同人アークティック"
,"doujin hoops" : "DOUJIN HOOPS!!"
,"doukou doukou kai" : "瞳孔同好会"
,"doushi hachimaki" : "同志ハチマキ"
,"doushoku" : "どうしょく"
,"douwa club" : "童話クラブ"
,"douwa-kensetsu" : "童話建設"
,"douyo saikin" : "どうよ、最近？"
,"doza village" : "Doza Village"
,"d-power" : "ディーパワー"
,"dr.vermilion" : "Dr.VERMILION"
,"dragon goya" : "ドラゴン小屋"
,"dragon kitchen" : "Dragon Kitchen"
,"dragon rock" : "ドラゴンロック"
,"drakle-nekota perpetual motion" : "どらねこ永久機関"
,"d-raw 2" : "土狼弐"
,"dreamsoft" : "ドリームソフト"
,"dress" : "DRESS"
,"drill" : "DRILL"
,"drop dead" : "DROP DEAD!!"
,"drops" : "RIP-comic"
,"d-side" : "D-side"
,"dual beat" : "DUAL BEAT"
,"dualtail" : ["DualTail", "DualMage"]
,"ducky duck" : "DUCKY DUCK"
,"dynamite honey" : "Dynamite☆Honey"
,"e.b." : "E.B."
,"e.m.i" : "E.M.I"
,"e.m.i." : "E.M.I"
,"earthling chronicle" : "EARTHLING CHRONICLE"
,"easymode" : "EasyMode"
,"eau rouge" : "eau-Rouge"
,"eau-rouge" : "eau-Rouge"
,"ebitendon" : "えびてん丼"
,"ebizoridan" : "えびぞり団"
,"echizen bugyousho" : "越前奉行所"
,"eclair" : "Eclair"
,"econokicks" : "ECONOKICKS"
,"ed" : "サークルED"
,"edge" : "サークルED"
,"edo-ya" : "EDO屋"
,"effordom soft" : "エフォルダムソフト"
,"effordom soft crown" : "エフォルダムソフトcrown"
,"efuya" : "エフ屋"
,"ego" : "イージーオー"
,"egoistic honey" : "Egoistic Honey"
,"egonokatamari" : "エゴノカタマリ"
,"eight beat" : "エイトビート"
,"eighth note" : "eighthnote"
,"einsatz gruppe" : "EINSATZ GRUPPE"
,"ekakigoya notesystem" : "EKAKIGOYA NOTESYSTEM"
,"ekesetene." : "えけせてね。"
,"ekitai no tomosha" : "液体の友社"
,"electromagneticwave" : "ElectroMagneticWave"
,"eleonora" : "Eleonora -エレオノーラ-"
,"elephant.giraffe" : "ELE.GIRA"
,"elhearts" : "ELHEART'S"
,"elithheart" : "Elithheart"
,"elle-murakami" : "elle-叢神"
,"elysion" : "Elysion"
,"ende der welt" : "Ende der Welt"
,"engetsuten" : "遠月点"
,"england peach" : "England Peach"
,"enmaya" : ["ENMAYA", "えんま屋"]
,"enogu shoujo" : "絵具少女"
,"enokoro kurage" : "えのころくらげ"
,"ensemble sweet" : "ensemble SWEET"
,"en-sof" : "えんそふ"
,"entrance" : "ENTRANCE"
,"epi" : "EPI"
,"era feel" : "ERA FEEL"
,"erect touch" : ["ERECT TOUCH", "G-ZONE"]
,"erectlip" : "エレクトリップ"
,"eroge honpo" : "エロゲーホンポ"
,"erogos" : "Erogos"
,"eroitto" : "エロイット"
,"eroliya" : "えろり屋"
,"eromazun" : "エロマズン"
,"erondo" : "eRONDO"
,"eroquis" : "EROQUIS!"
,"eroro" : "Eroro"
,"erotic fantasy larvaturs" : "らばた工房"
,"erotic honeymoon" : "Erotic Honeymoon"
,"erotica black" : "EROTICA BLACK"
,"erotica peach" : "EROTICA PEACH"
,"erotical combat" : "EROTICAL COMBAT"
,"error" : "ERROR"
,"escargot club" : ["えすかるご倶楽部", "ESCARGOT CLUB"]
,"escude" : "Escu：de"
,"esecool" : "エセクール"
,"esora note" : "エソラnote"
,"es-pot" : "Es-pot"
,"essentia" : "ESSENTIA"
,"esuesu" : "EsuEsu"
,"eternal" : "ETERNAL"
,"eternal-eclipse" : "ETERNAL - ECLIPSE"
,"etoile" : "Etoile"
,"etoile zamurai" : ["エトワール侍", "エトワールザムライ"]
,"etoiles" : "Etoiles"
,"eunospress" : "ゆ～のす通信"
,"euphony production" : "Euphony Production"
,"euphoria" : "ユーフォリア"
,"eushully" : "エウシュリー"
,"eve" : "EVE"
,"ever" : "ever."
,"evil" : "EVIL"
,"evil aratame baroque store" : "EVIL改めBAROQUE STORE"
,"evoll" : "evoLL"
,"evolution brand" : "EVOLUTION BRAND"
,"examgames" : "エグザムゲームズ"
,"examinee" : "イグザミニー"
,"exclamation" : "EXCLAMATION"
,"execio" : "Execio"
,"ex-it" : "Ex-iT"
,"ex-one" : "EX-ONE"
,"extage" : "Extage"
,"extry" : "ExTry"
,"eye phon" : "eye★phon"
,"eyebrows born" : "アイブロウズボーン"
,"eyes of dragon" : "Eyes of Dragon"
,"f and c" : "F&C"
,"f taku" : "F宅"
,"f.a" : "F・A"
,"f.w.zholic" : "F.W.Zholic"
,"f4-company" : "F4 COMPANY"
,"face" : "Face"
,"fairy dust" : "フェアリーダスト"
,"fairy pink" : "Fairy Pink"
,"fairytale" : "フェアリーテール"
,"fairytale hardcover" : "フェアリーテールHARDCOVER"
,"fairytale red-zone" : "フェアリーテールRED-ZONE"
,"fakestar" : "FAKE STAR"
,"family affair" : "Family Affair"
,"fangs" : "FANGS"
,"fan-na" : "ふぁんな"
,"fantasy factory" : "FANTASY・FACTORY"
,"fantasy wind" : "FANTASY WIND"
,"fastest lap" : "FASTEST LAP"
,"favorite" : "FAVORITE"
,"felicia" : "Felicia"
,"fenrir" : "ふぇんりる"
,"festa." : "ふぇすた。"
,"fetch" : "Fetch"
,"fetish" : "ふぇちっしゅ"
,"fetish children" : "Fetish Children"
,"fever lactic acid bacteria deluxe" : "フィーバー乳酸菌DX"
,"f-graphics" : "F・Graphics"
,"fiancee" : "FIANCEE"
,"film software" : "FILM-SOFTWARE"
,"find up" : "Findup!"
,"finish" : "FINISH!"
,"fire dragon" : "FIRE DRAGON"
,"fire witch" : "Fire Witch"
,"firstspear" : "Firstspear"
,"fish" : "FISH"
,"fizz" : "Fizz"
,"flady" : "FLADY"
,"flat" : "FLAT"
,"flat and slit racing" : "FLAT & SLIT RACING 66"
,"flat and slit racing 66" : "FLAT & SLIT RACING 66"
,"flavor graphics" : "Flavor Graphics"
,"flicker10" : "Flicker10"
,"flicula machine" : "フリキュラマシーン"
,"flomox" : "FLOMOX"
,"flower crown" : "Flower Crown"
,"fluorite" : "Fluorite"
,"flyingshine" : "FlyingShine"
,"flyingshine black" : "FlyingShine黒"
,"flyingshine ken" : "FlyingShine犬"
,"fomalhaut" : "FOMALHAUT"
,"fonte" : "Fonte"
,"fools art gallery" : "FOOL'S ART GALLERY"
,"fools works" : "FOOLS WORKS"
,"forbidden city" : "Forbidden City"
,"foresight" : "フォーサイト"
,"fortune" : "ふぉ～ちゅん♪"
,"foster" : "FOSTER"
,"foundation" : "FOUNDATION"
,"fountains square" : "FOUNTAIN'S SQUARE"
,"four-nine" : "フォア・ナイン"
,"frac" : "FRAC"
,"fragile" : "FragiLe"
,"frapper spirits" : "FRAPPER SPIRITS"
,"freaks" : ["フリークス", "FREAKS"]
,"free style" : "FREE STYLE"
,"freedom tomy r" : "Freedom☆Tomy R"
,"freehand tamashii" : "フリーハンド魂"
,"french letter" : "French letter"
,"fresnel lens" : "ふれぇねるれんず"
,"frill" : "Frill"
,"from japan" : ["ふろむじゃぱん", "FROM JAPAN"]
,"from nou kanja no kai" : "フロム脳患者の会"
,"frontwing" : "FrontWing"
,"fruitsjam" : "FRUITS JUM"
,"fudegaki soft" : "筆柿そふと"
,"fugudoku" : "川豚毒"
,"fuguri" : "ふぐり"
,"fuguriya" : "ふぐり屋"
,"fuji sangou koubou" : "富士三號工房"
,"fujidana" : "藤棚"
,"fujinomiya millenium" : "藤ノ宮ミレニアム"
,"fujitsubo-machine" : ["富士壺機械", "ふじつぼまっすぅい～ん"]
,"fujiya" : "ふじ家"
,"fujiya honten" : "藤屋本店"
,"fuka fuka" : "不可不可"
,"fukahire" : "フカヒレ"
,"fukame takame" : "ふかめたかめ"
,"fukashigi" : "不可思議"
,"fukuda sennen oukoku" : "福田千年王国"
,"fukufuku" : "FukuFuku!"
,"fukujin senrai" : "福神閃来"
,"fukumaden" : "伏魔殿"
,"fukunoren" : "福のれん"
,"fukupukutei" : "福ぷく亭"
,"fukurou naru tori" : "フクロウなる鳥"
,"fukurou no yuubinya san" : "梟の郵便屋さん"
,"fullmetal madness" : "FULLMETAL MADNESS"
,"funa time" : "ふなたいむ"
,"funanori house" : "ふなのりはうす"
,"funazushi bazooka" : "鮒鮨バズーカ"
,"funi funi lab" : "フニフニラボ"
,"furaipan daimaou" : "ふらいぱん大魔王"
,"furansowa" : "ふらんそわ"
,"fururi." : "ふるり。"
,"furuya" : "ふる屋"
,"fusuma goten" : "ふすま御殿"
,"futaburo" : "ふたブロ"
,"futamura futon ten" : "ふたむらふとん店"
,"futanarun" : "ふたなるん"
,"futotta obasan" : "太ったおばさん"
,"futoumei z" : "不透明Z"
,"futsu-no-tapioca-yasan" : "ふつうのタピオカ屋さん"
,"futurepack" : "FUTURE PACK!"
,"fuusen club kuroshiki" : "風船クラブ 黒式！"
,"fuyuchuu natsukusa" : "冬中夏草"
,"fuzoku kugayama kindergarden" : "附属久我山キンダーガーデン"
,"fuzukikai" : "文月会"
,"fuzume" : "ふずめ"
,"g.j" : "G.J？"
,"ga fake" : "GA FAKE"
,"gachinko shobou" : "我チ○コ書房"
,"gadget" : ["ガジェット工房", "GADGET-FACT", "画ジェット"]
,"gadoujuku" : "我道塾"
,"gage" : "Gage"
,"gaikotsu kenpo" : "ガイコツけんぽ"
,"gaikotsu no spare rib" : "骸骨のスペアリブ"
,"gainamon" : "がいなもん"
,"gakuen hanimokuo" : "学園はにもくお"
,"gakuen yuushabu" : "学園勇者部"
,"galactica" : "GALACTICA"
,"galaxy style" : "GALAXY STYLE"
,"galette" : "Galette"
,"gallery fake." : "ギャラリー・フェイク。"
,"galley" : "画嶺"
,"gambler club" : "ギャンブラー倶楽部"
,"game dome" : "GAME DOME"
,"game dome ariake" : "GAME DOME 有明店"
,"game dome hamamatsuchouten" : "GAME DOME 浜松町店"
,"gamushara" : "がむしゃら"
,"garage-talk" : "GARAGE-TALK"
,"garakuta-ya" : "GARAKUTA-YA"
,"garden" : "Garden"
,"gardening bulldog" : "ガーデニング・ブルドッグ"
,"gargoyle" : "Gargoyle"
,"garland" : "Garland"
,"garou kissa hapido" : "画廊喫茶はぴど"
,"garyuh-chitai" : "我流痴帯"
,"garyuuya" : "我龍屋"
,"gasayabu" : "がさやぶ"
,"gash" : "Gash"
,"gazel form" : "GAZEL FORM"
,"gazelle" : "GAZELLE"
,"gby" : "GBY"
,"geboku shuppan" : "下僕出版"
,"gebokudou" : "下僕堂"
,"gedou shoukai" : "外道商会"
,"geiwamiwosukuu" : "芸は身を救う！！"
,"gekidan gengorouza" : "劇団げんごろう座"
,"gekidan kinmirai" : "劇團近未来"
,"gekka bijin" : "月下美刃"
,"gekkou-dou" : "月咬洞"
,"gendai" : "GENDAI"
,"genei humanoid" : "幻影ヒューマノイド"
,"genei humanoid vb" : "幻影ヒューマノイドVB"
,"genki honpo" : ["元気本舗", "GENKIHOMPO"]
,"genki no mizu no wakutokoro" : "げんきのみずのわくところ"
,"genkin-dou souhonpo" : "げんきん堂総本舗"
,"genkotsu dan" : "げんこつ団"
,"genocidekiss" : "GENOCIDEKISS"
,"genocidou" : "ジェノサイ堂"
,"genshokuya" : "原色屋"
,"genshoudou" : "幻笙堂"
,"gensou kuukan" : "幻蒼空間"
,"gensou shoujo" : "幻捜少女"
,"gensou toshi" : "幻想都市"
,"gensyokuhakoniwa" : "原色箱庭"
,"gensyokukan" : "玄色館"
,"gentoukai" : "幻灯会"
,"genyukyo" : "幻遊郷"
,"gerudochuu oukoku" : "げるどちゅう王国"
,"gerumaru" : "ゲルマル"
,"gerupin" : "ゲルピン"
,"gesellschaft" : "ゲゼルシャフト"
,"gesen18" : "げーせん18"
,"ge-shop" : "Ge-Shop"
,"gessyu" : "げっしゅ"
,"get you" : "GET YOU!"
,"getsusekai" : "月世界"
,"gewalt" : "GEWALT"
,"gff" : "GFF"
,"giant panda" : "大熊猫"
,"giftless" : "GiFTLESS"
,"giga" : "戯画"
,"gimlet" : "Gimlet"
,"gin no hoshitei" : "銀の星亭"
,"gindokei" : "銀時計"
,"ginjou maggots" : "吟醸マゴッツ"
,"ginmomodou" : "銀桃堂"
,"ginrinkyuu" : "銀鱗宮"
,"giorama saga" : "Giorama Saga"
,"gipsy" : "Gipsy"
,"girigiri nijiiro" : "ギリギリ虹色"
,"girigiricombination." : "GiriGiriCombination."
,"girls empire" : "娘。帝国"
,"girls kingdom" : "少女の王国"
,"girls software" : "GIRL'S SOFTWARE"
,"giroutei" : "妓楼亭"
,"glace" : "GLace"
,"glamour works" : "GLAMOUR WORKS"
,"glassed concrete" : "ガラストコンクリート"
,"global one" : "Global One"
,"globe" : "GLOBE"
,"glovety" : "GLOVETY"
,"go go heaven" : "Go! Go! Heaven!!"
,"goberazzo" : "ごべらっつぉ"
,"gokudou daigensui" : "極道大元帥"
,"gokufero" : "極フェロ"
,"goku-raku" : "GOKU-RAKU"
,"gokuraku tengoku" : "極楽天国"
,"gokurakuhihoukan" : "GOKURAKUHIHOUKAN"
,"gokusaishiki" : "極彩色"
,"gold lip" : "ゴールドリップ"
,"gold rush" : "GOLD RUSH"
,"golden bazooka" : "ゴールデンバズーカ"
,"golden harvest" : ["GOLDEN HARVEST", "ゴールデンハーベスト"]
,"golden nyannyan" : "ゴールデンニャンニャン"
,"gomuhachi" : "ごむはち"
,"goromenz" : "ゴロメンツ"
,"gos to vi" : "-gos to vi-"
,"gouriki hyakkaten" : "剛力百貨店"
,"goutokuji konzern" : "豪徳寺コンツェルン"
,"gozen sanji" : "午前三時"
,"g-panda" : "Gぱんだ"
,"g-power" : "G-Power!"
,"gpx" : "GPX"
,"g-r" : "G-R"
,"grace" : "GRACE"
,"graf zeppelin" : "GRAF ZEPPELIN"
,"granada sky" : "グラナダの空"
,"grand cru" : "Grand Cru"
,"grand cru bourgeois" : "Grand Cru bourgeois"
,"grand cru noir" : "Grand Cru noir"
,"grand lemon" : "Grand lemon"
,"grapefruit" : "GRAPEFRUIT"
,"graphicarossa" : "Graphicarossa"
,"grateful dead" : "GRATEFUL DEAD"
,"gray zone" : "GRAY ZONE"
,"great acta" : "GREAT芥"
,"great canyon" : "グレートキャニオン"
,"great dadan" : "ぐれいと・だだん"
,"greatest18club" : "GREATEST18CLUB"
,"greenhouse" : "ぐりいん野はうす"
,"greyhound" : "Greyhound"
,"grisedge" : "GRISEDGE"
,"groover" : "GROOVER"
,"ground-zero" : "GROUND-Zero"
,"group 601" : "グループ601"
,"group hinoran" : "ぐる～ぷひのらん"
,"gs studio" : "G's studio"
,"g-scan corp." : "G-SCAN Corp"
,"gsoft" : "GSOFT"
,"g-spot" : "じぃすぽっと"
,"gt" : "GT"
,"guchokuya" : "愚直屋"
,"guilty" : "Guilty"
,"guilty ex" : "Guilty eX"
,"guilty hearts" : "GUILTY HEARTS"
,"guilty plus" : "Guilty＋"
,"guiltyn" : "GuiltyN"
,"gummy-rise" : "ガミ・ライズ"
,"gunburrel" : "がんバレル"
,"gunp" : "GUNP"
,"guruguru honpo" : "グルグル本舗"
,"gurumepoppo" : "ぐるめポッポ"
,"gust" : "GUST"
,"guten tag" : "グーテンターク"
,"gutenberg no musume" : "グーテンベルグの娘"
,"gutterflower" : "Gutterflower"
,"guy-ya" : ["男屋", "GUY-YA"]
,"g-work at mi" : "G-work@ミ"
,"gyara cter" : "ギャラ☆クター"
,"gyokusaijima" : "玉砕島"
,"gyuunyuuya" : "牛乳屋"
,"gyuutan teishoku e no koi" : "牛タン定食への恋"
,"h and k" : "H and K"
,"h plus" : "H+"
,"h.b" : "H.B"
,"h.i.t. koubou" : "H.I.T.工房"
,"h.p.c. meirei denpa" : "H.P.C 命令電波"
,"h.w.k.k" : ["H.W.K.K", "初音ちゃんの声をあてる声優はこおろぎさとみしかいない血盟"]
,"haa haa works" : "はぁはぁWorks"
,"hacca candy" : "Hacca Candy"
,"hacchakesou" : "はっちゃけ荘"
,"hacchoubori" : "八丁堀"
,"hachigo" : "ハチゴ"
,"hachimitsu kumasan" : "はちみつくまさん"
,"hachimitsu soft" : "はちみつそふと"
,"hachimitsu syoujo" : "蜂蜜少女"
,"hachiouji kaipan totsugeki kiheitai" : "八王子海パン突撃騎兵隊"
,"hadashi shoujo" : "裸足少女"
,"haechaimu" : "ハエチャイム"
,"hagakure" : "ハガクレ"
,"hagane koubou" : "鋼工房"
,"haguruman" : "はぐるまん"
,"haiboku kamen" : "敗北仮面"
,"haigoku ryodan" : "廃獄旅団"
,"haikara cafe" : ["はいから喫茶", "ハイカラ喫茶"]
,"haikuo-soft" : "ハイクオソフト"
,"haine club" : "灰猫倶楽部"
,"haisui no jin" : "ハイスイノ陣"
,"haitoku sensei" : "はいとく先生"
,"haitokukan" : "背徳漢"
,"hakattanakowappahzu" : "はかったなこわっぱーず"
,"hakka ame" : "薄荷飴"
,"hakkaame" : "白花雨"
,"hakka-ya" : "薄荷屋"
,"hakke deneijyo" : "八卦電影城"
,"hakudakukei" : "白濁系"
,"hakueki shobou" : "白液書房"
,"hakuginmokusei" : "白銀木犀"
,"hakuhakukan" : "白々館"
,"hakutamayu" : "白玉湯"
,"hakutoutei" : "白桃亭"
,"half time" : "HALF TIME"
,"hallelujah" : "晴屋"
,"hallenchi planet" : "HALLENCHI PLANET"
,"halloween" : "Halloween"
,"halopack" : "HALOぱっく"
,"hamham soft" : "はむはむソフト"
,"hammer head" : "HAMMER_HEAD"
,"hammerheads" : "Hammerheads"
,"hana to ribon" : "華とりぼん"
,"hana x hana" : "HANA＊HANA"
,"hanamaru mugen gym" : "はな丸無限ジム"
,"handsome aniki" : "ハンサム兄貴"
,"hanene no mori" : "はねねのもり"
,"hanjuku yude tamago" : "半熟茹で卵"
,"hannama" : "はんなま"
,"hanshi x hanshow" : "半死半生"
,"hanzai tengoku" : "犯罪天国"
,"haoh" : "覇王"
,"hapoi-dokoro" : "はぽい処"
,"happies" : "ハピエス"
,"happo ryuu" : "HAPPO流"
,"happy birthday" : "Happy Birthday"
,"happy kamu kamu" : "はっぴーかむかむ"
,"happy man" : "HAPPY MAN"
,"happy paranoia" : "ハッピーパラノイア"
,"happy water" : "HAPPY WATER"
,"happyend" : "HappyEnd"
,"happywest" : "ハッピー・ウエスト"
,"haradaya" : "原田屋"
,"harakiri" : "HARAKIRI"
,"harakiri yakkyoku" : "腹切薬局"
,"hard" : "HARD"
,"hard flogs" : "Hard Flogs"
,"hard taco" : "HARD TACO"
,"harimaya" : "播磨屋"
,"harmonia" : "Harmonia"
,"harmorise" : "Harmorise"
,"harness" : "HARNESS"
,"harthnir" : "ハースニール"
,"harugakita" : "Harugakita"
,"harugoya" : "はるごや"
,"harukaze" : "HARUKAZE"
,"harukomachikan." : "はるこまちかん。"
,"harumankai" : "はるまん会"
,"harvest" : "Harvest"
,"haryuu" : "破龍"
,"hasuya" : "蓮屋"
,"hatahata factory" : "ハタハタ工房"
,"hatena-box" : "HATENA-BOX"
,"hato no sushiki seisakusho" : "はとのす式製作所"
,"hatogoya" : "鳩小屋"
,"hayashigumi" : "林組"
,"hayonipo" : "はよにぽ"
,"hbo" : "HBO"
,"heart manju mania" : "はぁと饅頭マニア"
,"heart work" : "HEART WORK"
,"heartbring" : "ハートブリング"
,"heartbringan" : "ハートブリガン"
,"hearts" : "Hearts"
,"hearts and crusts" : "HEARTS & CRUSTS"
,"heat haze" : "Heat Haze"
,"heat-soft" : "HEAT-SOFT"
,"heatwave" : "HEATWAVE"
,"heavens gate" : "Heaven's Gate"
,"heavens unit" : "HEAVEN'S UNIT"
,"heavy bunny addiction" : ["H.B.A", "Heavy Bunny Addiction"]
,"hebameki" : "HEBAMEKI"
,"hecate" : "Hecate"
,"hegurimurayakuba" : "へぐり村役場"
,"heisei chachamaru dou" : "平成茶々丸堂"
,"heliodor" : "Heliodor"
,"hellabunna" : ["HELLABUNNA", "へらぶな"]
,"helldevice" : "HellDevice"
,"hellfragrance" : "HELLFRAGRANCE"
,"hellter skelter" : "HELLTER SKELTER"
,"helmet ga naosemasen" : "ヘルメットが直せません"
,"hending" : "Hending"
,"henreikai" : "片励会"
,"henry plaza" : "半里プラザー"
,"henshitsusya" : "変質社"
,"heppoko housing" : "へっぽこはうじんぐ"
,"heppoko youchien" : "へっぽこ幼稚園"
,"hermit" : "HERMIT"
,"hero hero tei" : "へろへろてい"
,"heroes factory" : ["HF", "HEROES FACTORY"]
,"heston world" : "HESTON WORLD"
,"heta no yoko zuki" : "ヘタの横好き"
,"hexenhaus" : "HexenHaus"
,"hgh" : "HGH"
,"hi at skip" : "Hi@Skip"
,"hiasobi club" : "火遊び倶楽部"
,"hi-b" : "Hi_b"
,"hibon" : "非凡"
,"hide and seek" : "HIDE AND SEEK"
,"high and low" : "HIGH&LOW"
,"high risk revolution" : "HIGH RISK REVOLUTION"
,"high thrust" : "ハイスラスト"
,"high-octane" : "廃屋譚"
,"highrunning" : "HighRunning"
,"high-spirit" : "High-Spirit"
,"highway magician" : "HIGHWAY MAGICIAN"
,"highway-senmu" : "HIGHWAY専務"
,"higuma-ya" : "ひぐま屋"
,"hiiro no kenkyuushitsu" : "灯色の研究室"
,"hijouguchi" : "ひじょうぐち"
,"hikakuteki simple na panty" : "比較的シンプルなパンティ"
,"hikari no shinden" : "光の神殿"
,"hikarito mahou koubou" : "光と魔法工房"
,"hikaru no kobeya" : "ひかるの小部屋"
,"hikawado" : "火川堂"
,"hikiwari nattou" : "ひきわり納豆"
,"hikodge beya" : "彦二部屋"
,"hikou dai 50 sentai" : "飛行第50戦隊"
,"hiland-studio" : "HILAND-STUDIO"
,"himawari endan" : "ひまわり園団"
,"hime club" : "姫倶楽部"
,"hime mania" : "姫まにあ"
,"himegami" : "姫神"
,"himeya" : "姫屋"
,"himeya soft" : "姫屋ソフト"
,"himitsu kessha love hunter" : "秘密結社愛狩人"
,"himura nyuugyou" : "比村乳業"
,"hinakan" : "ヒナ缶"
,"hinaprin" : "Hina-prin"
,"hinatabokko club" : "ひなたぼっこ倶楽部"
,"hinemosuan" : "終日庵"
,"hi-per pinch" : ["ハイパーピンチ", "Hi-per PINCH"]
,"hirojuu renshuuchou" : "広十練習帖"
,"hirokaworld" : "ヒロカワールド"
,"hirusuta" : "ヒルスタ"
,"hisagoya" : "ヒサゴヤ"
,"hispano-suiza" : "Hispano-Suiza"
,"hisuitei" : "翡翠亭"
,"hito no fundoshi" : "ひとのふんどし"
,"hitomakase" : "ヒトまかせ"
,"hitori tower bridge" : "ヒトリタワーブリッジ"
,"hitosuji nawa" : "ひとスジ縄"
,"hitsuji kikaku" : "ヒツジ企画"
,"hiwatari honpo" : "樋渡本舗"
,"hiyoko no gekijoh" : "ひよこの劇場"
,"hiyoko soft" : "ひよこソフト"
,"hiyori hamster" : "ひよりハムスター"
,"hiyorimi no sora" : "ひよりみのソラ"
,"hiyotama goten" : "ひよたま御殿"
,"hizamakura" : "膝枕"
,"hk syndicate" : "HKシンジケート"
,"h-m" : "H・M"
,"hmk" : "HMK"
,"hobbs end" : "Hobb's End"
,"hobikore" : "ホビコレ"
,"hobukuro" : "ほおぶくろっ！"
,"hogero kikaku" : "ほげろー企画"
,"hohhe dan" : "ほっへ！団"
,"hokahokashoten" : "ほかほか書店"
,"hokkaidou bussanten" : "北海道物産展"
,"holm viking" : "ほるむヴァイキング"
,"holymist" : "Holy Mist"
,"homunculus" : "ホムンクルス"
,"homuras r comics" : "Homura's R Comics"
,"homuraya" : "ほむら屋"
,"honda koumuten" : "本田工務店"
,"honey bump" : "HONEY BUMP"
,"honey knuckle" : "Honey Knuckle"
,"honey mary" : "ハニーマリー"
,"honey milk" : "ハニーミルク"
,"honey no tsuki" : "Honeyの月"
,"honey pot" : "はにぃぽっと"
,"honey qp" : "HONEY QP"
,"honey soft" : "HONEY SOFT"
,"honeyboy" : "Honeyboy"
,"honeyking" : "蜜キング"
,"honyarara noir" : "ほにゃららNoir"
,"honyarara pink" : "ほにゃららPink"
,"honyo no uchi" : "ほにょのうち"
,"hook" : ["HOOK", "HOOKSOFT"]
,"horizontal world" : "Horizontal World"
,"horsetail" : "ほーすている"
,"hoshikariza" : "星狩座"
,"hoshino koya" : "ほしの小屋"
,"hoshinohate" : "ほしのはて"
,"hot dog chuck" : "ホットドックチャック"
,"hotateya" : "ホタテヤ"
,"hotel california" : "HOTEL CALIFORNIA"
,"houenken" : "方円軒"
,"houkago paradise" : "放課後パラダイス"
,"houkaiseki." : "方解石。"
,"houruri" : "蓬瑠璃"
,"house of karsea" : "ハウス オブ KARSEA"
,"housoutou" : "放送塔"
,"hoyoyodou" : "ほよよ堂"
,"hqs" : "HQ's Soft"
,"huge eyes" : "Huge Eyes"
,"hulotte" : "Hulotte"
,"human high-light film" : "ヒューマン・ハイライト・フィルム"
,"huzinami koubou" : "藤波工房"
,"hyakumanben alien" : "百万遍エイリアン"
,"hy-dou" : "灰同"
,"hyoco road" : "ひょこ道"
,"hyoui lover" : ["憑依ラヴァー", "憑依好きの人"]
,"hyoujououkoku" : "氷上王国"
,"hyper brand" : "HYPER BRAND"
,"hyperiyon" : "はいぺりよん"
,"hypnotic angel" : "Hypnotic Angel"
,"i and i" : "I&I"
,"i.d." : "I.D."
,"ice" : "ICE"
,"ice box" : "ICE☆BOX"
,"ice brand" : "ICE BRAND"
,"ice coffin" : "ICE・COFFIN"
,"ice pink" : "ICE PINK"
,"ice to choco" : "あいすとちょこ"
,"ichibangai" : "一番街"
,"ichibocchi" : "ゐちぼっち"
,"ichigo ichie" : "苺一会"
,"ichigo jet" : "いちごじぇっと"
,"ichigo saboten honpo" : "苺仙人掌本舗"
,"ichigosize" : "いちごさいず"
,"ichijiku yogurt" : "いちじくよーぐると"
,"ichinichi sanjou" : "一日三錠"
,"ichiokumangenjaya" : "一億万軒茶屋"
,"ico-ba" : "Ico-ba"
,"idenshi no fune" : "遺伝子の舟"
,"ifdef" : "#ifdef"
,"ignition" : "イグニッション"
,"igyouha club" : "異形波倶楽部"
,"iiwake-gaisya" : "いいわけ会社"
,"ikaruganomiya" : "斑鳩宮"
,"ikayaki" : "いか焼き"
,"ikebukuro dpc" : ["池袋DPC", "Dynamite Pussy Cat"]
,"ikeda jun kikakushitsu" : ["池田淳企画室", "池田淳企画堂"]
,"ikibata 49ers" : "いきばた49ERS"
,"ikka risan" : "一家離散"
,"ikkizuka" : "いっきづか"
,"ill chou" : "I'LL調"
,"im" : "I'm"
,"image club" : "iMAGE CLUB"
,"image craft" : "IMAGE CRAFT"
,"image sync" : "Imagesync"
,"image-works" : "IMAGE-WORKS"
,"imakaya" : "いまか屋"
,"imitation genome" : "イミテーションゲノム"
,"imitation moon" : "Imitation Moon"
,"imomuya honpo" : "いもむや本舗"
,"imonoan" : "芋ノ庵"
,"in the sky" : "In The Sky"
,"inbou no teikoku" : "陰謀の帝国"
,"incarose" : "インカローズ"
,"include" : "#include"
,"index410" : "INDEX:410"
,"indico lite" : "Indico lite"
,"indolent field" : "Indolent Field"
,"indurain" : "INDURAIN"
,"infinity drive" : "INFINITY DRIVE"
,"infinity-force" : "INFINITY FORCE"
,"information high" : "INFORMATION-HIGH"
,"inishie no nushi" : "いにしえのぬし"
,"inkpot" : "INKPOT"
,"innk" : "InnK"
,"innocence" : "Innocence"
,"innocent grey" : "Innocent Grey"
,"inochi no furusato" : "いのちのふるさと"
,"inohead studio" : "イノヘッドスタジオ"
,"inout" : "INOUT"
,"inre" : "インレ"
,"insert" : "INSERT"
,"intendou" : "淫天堂"
,"interheart" : "INTERHEART"
,"interrupt voice" : "Interrupt Voice"
,"intoku.info" : "いんとくいんふぉ"
,"inu no dan" : "犬の団"
,"inu no sekai" : "いぬのせかい"
,"inuburo" : "INUBURO"
,"inudrill lolita engine" : "イヌドリルロリータエンジン"
,"inuteikoku" : ["犬帝国", "いぬていこく"]
,"inu-tv" : "いぬTV"
,"inuya" : "INUYA"
,"invoice" : "インヴォイス"
,"io lite" : "Io lite"
,"i-raf-you" : "I-Raf-you"
,"irodori" : "彩～IRODORI～"
,"iron rocks" : "IRON⇔ROCKS"
,"ironman" : "IRONMAN"
,"irotenya" : "色点屋"
,"ishikari shake nabe doukoukai" : "石狩シャケ鍋同好会"
,"ishin doujinkai" : "維新同人會"
,"island belle" : "Island Belle"
,"isotonix" : "アイソトニクス"
,"itaba tatamiten" : "板場畳店"
,"itou life" : "伊東ライフ"
,"itsukidou" : "itsukidoh"
,"ivy girl" : "Ivy girl"
,"iwasaki seihonsho" : "岩崎製本所"
,"iwashi" : "サークル鰯"
,"iyokan." : "いよかん。"
,"iyou" : "iYou"
,"izumi freak" : "泉フリーク"
,"izumi gakuen" : "いずみ学園"
,"izumisou 5" : "いずみ荘５号室"
,"izumiya" : "いずみ屋"
,"izumo gasshuukoku" : "いづも合衆国"
,"izuya" : "IZU屋"
,"j.d.world" : "J.D.World"
,"ja no michi wa hebi soft" : "蛇ノ道ハ蛇ソフト"
,"jack to nicholson" : "ジャックとニコルソン"
,"jack-o-lantern" : ["ぢゃっからんたん", "JACK-O-LANTERN"]
,"jack-pot" : "JACK-POT"
,"jam" : "Jam"
,"jam kingdom" : ["ジャム王国", "JAM KINGDOM"]
,"jamboree" : "Jamboree!"
,"janis" : "JANIS"
,"jast" : "JAST"
,"je taime" : "濡鼎夢"
,"jelly bean" : "JellyBean"
,"jelly fish" : "Jelly fish"
,"jellyfish" : "JellyFish"
,"jellyfish factory" : "Jellyfish Factory"
,"jennys jimusho" : "JeNnys事務所"
,"jenoa cake" : "じぇのばけーき"
,"jereheim garden" : "Jereheim Garden"
,"jesus drug" : "JESUS DRUG"
,"jet engine" : "JET ENGINE"
,"jet-black baselarde" : "漆黒のBaselard"
,"jewel box" : "JEWEL BOX"
,"jewelry" : "ジュエリー"
,"jibaku mecha" : "自爆メカ"
,"jibaku-system" : "自爆システム"
,"jido-hikki" : "じどー筆記"
,"jidou hanbaiki" : "じどうはんばいき"
,"jigen bakudan" : "時限爆弾"
,"jigizagi" : "ジギザギ"
,"jikahatsudensho" : "自家発電処"
,"jikansa-kougeki" : "時間差攻撃"
,"jikusando" : "ジークサンド！"
,"jingai makyou" : "ジンガイマキョウ"
,"jingai makyou club" : "人外魔境倶楽部"
,"jinsei saigo no asobi." : "人生最後の遊び。"
,"jipohou" : "時ポ砲"
,"jirai soft" : "地雷ソフト"
,"jishou seijunha" : "自称清純派"
,"jitaku studio" : "自宅すたじお"
,"jitsuyou tosho fukyuukai r" : ["実用図書普及会", "実用図書普及会R"]
,"jiyou-kyousou" : "滋養狂騒"
,"jiyuugaoka shoutengai" : "自由が丘商店会"
,"j-m-box" : "J-M-BOX"
,"joji panchu uriba" : "女児ぱんちゅ売場"
,"joker type" : "JOKER TYPE"
,"jon" : "JAPAN ONANY NETWORK"
,"joshinzoku" : "女真族"
,"joshiriron kai" : "女子理論会"
,"joudan janai yo" : "冗談じゃないよっっ！"
,"jouji mujoh" : "常時無常"
,"joukitei" : "蒸気亭"
,"js style" : "J's STYLE"
,"juice" : "JUICE"
,"juicebox koujou" : "ジュースボックス工場"
,"juicy fruits" : "Juicy Fruits"
,"jumangoku manju" : "JUMANGOKU MANJU"
,"jumbomax" : "JUMBOMAX"
,"jungarian" : "ジャンガリアン"
,"junk" : "JUNK"
,"junk arts" : "JUNK-ARTS"
,"junk castle" : "ジャンクキャッスル"
,"junk center kameyoko bldg" : "JUNKセンター亀横ビル"
,"junpuumanpandou" : "順風満帆堂"
,"jushoku to sono ichimi" : "住職とその一味"
,"just-k" : "JUST-K"
,"jyaraya" : "JYARAYA"
,"k plus w" : "K＋W"
,"k.a.d" : "K.A.D"
,"k.f.d." : "K.F.D"
,"k.h.hanten" : "K.H.飯店"
,"k.h.r" : "K.H.R"
,"k.o.store" : "K.O.STORE"
,"k.s. ozaki" : "K.S.尾崎"
,"k.z.z. gundan" : "K.Z.Z.軍団"
,"k-1" : "K-1"
,"k2 tomo no kai" : "K2友の怪"
,"k3" : "K3《ケイキューブ》"
,"kabayakiya" : "蒲焼屋"
,"kabosu." : "かぼす。"
,"kabushikigaisha toranoana" : "とらのあな"
,"kacchuu musume" : "甲冑娘"
,"kaede no harawata" : "楓のはらわた"
,"kaeri no kai 2" : "帰りの会２"
,"kaeru soft" : "かえるそふと"
,"kaeru wa nani yatte mo erai" : "カエルは何やってもエライ！！"
,"kagero" : "カゲ路"
,"kagero studio" : "カゲロースタジオ"
,"kagishippo" : "かぎしっぽ"
,"kagura goten" : "神楽御殿"
,"kaguradou" : "かぐら堂"
,"kaguyahime" : "かぐや姫"
,"kai" : "KAI"
,"kaicho-maniax" : "カイチョーマニアックス"
,"kaientai" : "絵援隊"
,"kaihatsushitsu" : "開発室"
,"kaiki nisshoku" : "怪奇日蝕"
,"kaikoku soft" : "カイコクソフト"
,"kairaku shuudan" : "快楽集団"
,"kaitaiya" : "解体屋"
,"kaitei kaoku" : "海底家屋"
,"kaiteisinden" : "海底神殿"
,"kaiten sommelier" : "回転ソムリエ"
,"kaitoushinshidan" : "怪盗紳士団"
,"kaiyuu kikaku" : "回遊企画"
,"kajishima onsen" : "梶島温泉"
,"kajura" : "かじゅら"
,"kaki no boo" : "柿ノ房"
,"kaki no tane" : "夏季のタネ"
,"kakohimenoutuwa" : "KAKOHIMENOUTUWA"
,"kakumei seifu kouhoushitsu" : "革命政府広報室"
,"kalmia" : "KALMIA"
,"kamaboko koubou" : "カマボコ工房"
,"kamarujirushi" : ["かまる印", "KAMARUJIRUSHI"]
,"kamidake onsen" : "上竹温泉"
,"kamikadou" : "かみか堂"
,"kamikaze style" : "神風STYLE"
,"kamikire basami" : "紙切ればさみ"
,"kaminendo.corporation" : "かみねんど"
,"kamiyan" : "サークルかみやん"
,"kamiyorozu" : "上万"
,"kamogawaya" : "鴨川屋"
,"kamukamu" : "かむかむっ！"
,"kaname" : "要"
,"kanamedan" : "要団"
,"kanan koubou" : "かなん工房"
,"kanchuumimai" : ["寒中見舞", "あかいくつ倶楽部"]
,"kaneko" : "KANEKO"
,"kanikieru" : "カニキエル"
,"kanisky" : "カニスキー"
,"kaniya" : "かに家"
,"kanmido" : "KANMIDO"
,"kanmidokoro usb" : "甘味処USB"
,"kannazuki seikakusho tsumami gumi" : "神無月製作所・妻魅組"
,"kannazuki seisakusho" : "神無月製作所"
,"kansai gyogyou kyoudou kumiai" : "関西漁業協同組合"
,"kansai kemono rengou" : "関西けもの連合"
,"kansai orange" : ["関西オレンジ", "Kansai Orange"]
,"kanten jigenryuu" : "寒天示現流"
,"kantou usagi gumi" : "関東うさぎ組"
,"kanzen dokusen" : "完全独占"
,"kappa create" : "カッパくりえいと"
,"kapparaitei" : "河童来亭"
,"karajishi" : "唐獅子"
,"karakishi youhei-dan" : "からきし傭兵団"
,"karashi mentaiko" : "からしめんたいこ"
,"karen soft" : "可憐ソフト"
,"kare-na lyric" : "Kare-na Lyric"
,"karintou" : "かりん党"
,"karomix" : "KAROMIX"
,"karuki-ya" : "カルキ屋"
,"karumaya" : "かるま屋"
,"kasakigumi" : "華咲組"
,"kashiwa-ya" : "かしわ屋"
,"katakuri house" : "カタクリハウス"
,"katakuri kinako" : "かたくりきなこ"
,"katamari-ya" : "かたまり屋"
,"katou seiki seisakusho" : "加藤精機製作所"
,"katsuma gokurakudou" : "かつま極楽堂"
,"katsuobushi" : "かつおぶし"
,"kawaisounako" : "かわいそうな子"
,"kawamuraya honpo" : "かわむら屋本舗"
,"kawarajima kojinshi kai" : "かわらじま個人誌会"
,"kawaraya honpo" : "瓦屋本舗"
,"kazami dori" : "風見鳥"
,"kazami jinguu" : "風見神宮"
,"kaze no gotoku" : "風のごとく！"
,"kaze no mori" : "風の森"
,"kazemichiya" : "風道屋"
,"kazeuma" : "かぜうま"
,"kedama gyuunyuu" : "毛玉牛乳"
,"kedamono soft" : "けだものソフト"
,"keepon" : "keepON"
,"kegareta tamashii" : "穢れた魂"
,"keiji in cage" : "ケージインケージ"
,"keikadou" : "桂霞堂"
,"kemokomoya" : "けもこも屋"
,"kemono ekaki no kousoku 2" : "ケモノ絵描きの光速２"
,"kemono no koshikake" : "けもののこしかけ"
,"ken" : "けーいーえぬ"
,"kenix" : "KENIX"
,"kenja time" : "けんじゃたいむ"
,"kenrou koubo" : "けんろー工房"
,"kensei haou shoukai" : "剣聖覇皇商会"
,"kensoh ogawa" : "ケンソウオガワ"
,"keroq" : "ケロQ"
,"kesson shoujo" : "欠損少女"
,"ketsukaseya" : "けつかせ屋"
,"keumaya" : "希有馬屋"
,"key" : "Key"
,"key trash" : "KEY TRASH"
,"kfc" : "KFC"
,"khaos wind" : "KHAOS+WIND"
,"kia no moribito" : "きあのもりびと"
,"kichiku yaro" : "鬼畜野郎"
,"kichu" : "きちゅ"
,"kids world" : "きっずわーるど"
,"kieyza cmp" : "喜栄座cmp"
,"kigeki banzai" : "喜劇万歳"
,"kiirotei" : "黄色亭"
,"kijirushi ryouhin" : "キ印良品"
,"kikka-shurou" : "菊花酒楼"
,"kikkaya" : "橘花屋"
,"kikouken" : "機甲犬"
,"kikurage-ya" : "きくらげ屋"
,"kikyakudou" : ["鬼脚堂", "KIKYAKUDOU"]
,"killer pierce" : "Killer Pierce"
,"kimarinet" : "KIMARINET"
,"kimi no housoku" : "キミの法則"
,"kimpotsu" : "きムぽつ"
,"kimuchi-tei" : "キムチ亭"
,"kinakomochi" : "KINAKOMOCHI"
,"kinbou sokai" : "近傍租界"
,"kindandowa" : "禁断童話"
,"kinema bambi" : "キネマ☆バンビ"
,"king revolver" : "キングリボルバー"
,"kinmekki damashii" : "金メッキ魂"
,"kinoko allstars" : "キノコallstars"
,"kinokomushin" : "きのこむ神"
,"kinokonomi" : "きのこのみ"
,"kirei na oneesan" : "紀霊なお姉さん"
,"kirintei" : "木鈴亭"
,"kirisawa giken" : "桐沢技研"
,"kiritanpo" : "桐たん舗"
,"kisaradudou" : "木更津堂"
,"ki-software" : "KI-SofTWarE"
,"kisou d koubou" : "奇想D工房"
,"kiss" : "KISS"
,"kiss cube" : "Kiss Cube"
,"kiss project" : "KISS PROJECT"
,"kiss-ma" : "KISS-MA"
,"kitaku jikan" : "帰宅時間"
,"kitchies" : "KITCHIES"
,"kitkaters" : "KITKATERS"
,"kitsch" : "KITSCH"
,"kitsune" : ["RED FOX", "来つ寝"]
,"kitsune to budou" : "きつねとぶどう"
,"kitsuneya" : "きつね屋"
,"kitsuneyane" : "きつね屋根"
,"kitune" : "来つ寝"
,"klein" : "KLEIN"
,"klein syrop" : "KLEINシロップ"
,"knife edge" : "ナイフエッジ"
,"knights" : "KNIGHTS"
,"knockout" : "KNOCKOUT"
,"ko nekoneko house" : "こねこねこはうス"
,"koa" : "こあ"
,"koakuma sageha" : "小悪魔sage派"
,"koala kikaku" : "コアラ企画"
,"koala machine" : ["コアラマシン", "KOALA MACHINE"]
,"kobiki" : "こびき"
,"kocher" : "KOCHER"
,"kodomo ginkou" : "こどもぎんこう"
,"kodomo oukoku" : "こども王国"
,"kohakutei" : ["琥珀亭", "kohakutei"]
,"koi tenshi doumei" : "恋☆天使同盟"
,"koinu kantai" : "子犬艦隊"
,"koito sousakusho" : "小糸創作所"
,"koitosousakusyo" : "小糸創作所"
,"kojimashiki" : "コジマシキ"
,"kokesimuken" : "こけしム軒"
,"kokikko" : "KOKIKKO"
,"kokonoe" : "九重"
,"kokonokiya" : "ここのき屋"
,"kokuchou" : "黒鳥"
,"kokuden bunguten" : "刻田文具店"
,"kokuritsu shounen" : "国立少年"
,"kokusan jk" : "国産JK"
,"komansha" : "講漫社"
,"komaya" : "駒屋"
,"komedokoro" : "KOMEDOKORO"
,"komekami kishi dan" : "こめかみ騎士団"
,"kometsubu soft" : "こめつぶソフト"
,"komorebi-notebook" : "こもれびのーと"
,"konatuiro" : "来夏色"
,"konbuni" : "こんぶに"
,"konekodamashi" : "コネコダマシ"
,"kongarin" : "金画輪"
,"koniro kajitsu" : "紺色果実"
,"konno seisakubou" : "紺野制作坊"
,"konnyaku nabe" : "蒟蒻鍋"
,"konoha" : "このは"
,"konoshiro shinko" : "コノシロしんこ"
,"konpal style" : "金春流"
,"koori ame" : "こおりあめ"
,"koorigoya" : "氷小屋"
,"kopikura" : "こぴくら"
,"korisuya" : "こりすや"
,"korokoro koronp" : "ころころころんぴ"
,"korupon tantei dan" : "こるぽん探偵団！"
,"kosakunin retsuden" : "小作人列伝"
,"kotatsuya" : "こたつ屋"
,"kotobuki chop" : "寿ちょっぷ"
,"kotonoha" : "コトノハ"
,"kotonoya" : "琴乃屋"
,"kotori jimusho" : "小鳥事務所"
,"kotorikan" : "小鳥館"
,"kouanihonsha" : "KOUA NIHONSHA"
,"koubai gekka" : "紅梅月下"
,"koubou grounds" : "KOUBOU GROUND'S"
,"kouchaya" : "紅茶屋"
,"koudansha" : "幸田ん舎"
,"kouga-dou" : "高画堂"
,"kouhuku shigen" : "幸福資源"
,"kousoku kaiten" : "高速回転"
,"koutarou with t" : "KOUTAROU with T"
,"koutatsu dennou koushi" : "高達電脳公司"
,"kouyadou" : "こうや堂"
,"kouyoudou" : "好葉堂"
,"kouzukitei" : "香月亭"
,"kouzuya" : "興津屋"
,"krutta fan" : "Krutta Fan"
,"ks project" : "K's Project"
,"kudoki dancer" : "くどきダンサー"
,"kujira club" : "くじら倶楽部"
,"kujira logic" : "くぢらろじっく"
,"kumagaya hakushon kai" : "熊谷ハクション会"
,"kuma-tan flash" : ["くまたんFlash!", "熊尾もふもふ"]
,"kumatyu bokujou" : "クマチュウ牧場"
,"kumikae dna" : "組換DNA"
,"kumikae-dna" : "組換DNA"
,"kumo to koumori" : "クモトコウモリ"
,"kurage no candume" : "くらげのかんづめ"
,"kurakura-honey" : "KURAKURA HONEY"
,"kuri" : "KURI"
,"kurimokke" : "KURIMOKKE"
,"kurimomo" : "くりもも"
,"kurione-sha" : "くりおね社"
,"kuriya" : "栗屋"
,"kur-mar-ter" : ["Kur-Mar-Ter", "クルマレテル"]
,"kuro no omikuji" : "黒ノ御神籤"
,"kurogane dou" : "くろがね堂"
,"kurohige" : "黒髭"
,"kurohime" : "黒姫"
,"kurohina" : "黒雛"
,"kurohonyasan" : "くろほんやさん"
,"kuroirodoru yomiji" : "黒彩黄泉路"
,"kuromagedon" : "くろまげどん"
,"kuromahou kenkyuujo" : "黒魔法研究所"
,"kuronekodou" : "黒猫堂"
,"kuroneko-kan" : "クロネコ缶"
,"kuronekokan-monpetit" : "黒猫館モンプチ"
,"kuroni" : "クロニ"
,"kuronisiki" : "黒錦"
,"kurono taitsu" : "黒野タイツ"
,"kurono to kuroe" : "くろのとくろえ"
,"kurosawa pict" : "黒澤pict"
,"kuroshikatei" : "黒鹿亭"
,"kurotora" : "黒虎"
,"kuroyuki" : "黒雪"
,"kurubusi-kai" : "踝会"
,"kurumi" : "くるみ"
,"kurumi namiki" : "くるみ並木"
,"kuuchuu caricature" : "空中カリカチュア"
,"kuuronziyou" : "九龍城"
,"kuusou monochrome" : "空想モノクローム"
,"kuwon no tobari" : "くおんの帳"
,"kuzuryuu" : "九頭龍"
,"kyockchokyock" : "きょくちょ局"
,"kyodai kidou yousai kyoushuu" : "巨大機動要塞強襲"
,"kyojaku taishitsu" : "虚弱体質"
,"kyokutou koumuten" : "極東工務店"
,"kyomu no uta" : "虚無の歌"
,"kyoubou jouchotai" : "凶暴情緒帯"
,"kyougetsutei" : "共月亭"
,"kyouken diners" : "狂犬ダイナース"
,"kyousei shuuryou" : "強制終了"
,"kyuu" : "球"
,"kyuu kyuu" : "きゅうきゅう"
,"l.l. milk" : "L.L.MILK"
,"l.p.e.g." : "L.P.E.G."
,"l.s.d cicle" : "L.S.D・CIRCLE"
,"l.s.p." : "L.S.P."
,"l5ex" : "L5EX"
,"la.bit soft" : "La.Bit Soft"
,"labomagi" : "らぼまじ"
,"lacryma" : "La'cryma"
,"lady vermilion" : "LADY VERMILION"
,"lala la" : "lala_la"
,"lala studio" : "LALA STUDIO"
,"lamia" : "Lamia"
,"laminaria" : "LAMINARIA"
,"lapis blue." : "LAPIS BLUe."
,"lapis lazuli" : "Lapis lazuli"
,"lapislazuli corporation" : "LapisLazuli=corporation"
,"lapiss" : "Lapiss"
,"laplacian" : "Laplacian"
,"lasagna club" : "らざにあくらぶ"
,"lass" : "Lass"
,"lass pixy" : "Lass Pixy"
,"last eden" : "LAST EDEN"
,"latte" : "Latte"
,"laurier" : "ろりえ～る"
,"lazy crew" : "LAZYCREW"
,"lb" : "LB"
,"l-calena" : "L-CALENA"
,"le.chocolat" : "Le.Chocolat"
,"leaf" : "Leaf"
,"leaf party" : "リーフパーティー"
,"leafgun" : "LEAFGUN"
,"leaz koubou" : "りーず工房"
,"left side" : "Left Side"
,"lemonmaiden" : "Lemon Maiden"
,"leo-circle" : "LEO-CIRCLE"
,"leonat koubou" : "レオナト工房"
,"level1" : "レベル1"
,"level-x" : "LEVEL-X"
,"levol" : "LevoL"
,"lezmoe" : "レズ萌え！"
,"l-gauge sha" : ["L.GAUGE", "Lゲージ社"]
,"lhezi" : ["LHEZI", "エルヘッジ"]
,"liar-soft" : "Liar-soft"
,"libido" : ["LIBIDO", "裏媚堂"]
,"libido soft" : "りびどーそふと"
,"libre" : "りぷる"
,"liddell" : "Liddell CLUB"
,"liebe" : "LIEBE"
,"light garden" : "LIGHT GARDEN"
,"light pink" : "ライトピンク"
,"lightplan" : "LightPlan"
,"lightright" : "LightRight"
,"lilac soft" : "Lilac Soft"
,"lili marleen" : "リリーマルレーン"
,"lilim" : "LiLiM"
,"lilim darkness" : "LiLiM DARKNESS"
,"lilim nama" : "LiLiM生"
,"lilisyuka" : "麗麗酒家"
,"lilith" : "Lilith"
,"lillian" : "Lillian"
,"lily heart" : "LILY HEART"
,"lime" : "Lime"
,"lime vert" : "Lime vert"
,"limecat" : "LimeCat"
,"limit breakers" : "LIMIT BREAKERS"
,"limit cycle" : "LIMIT CYCLE"
,"lipstar" : "LIPSTAR"
,"liquid" : "Liquid"
,"liquid-shine" : "Liquid-Shine"
,"liquid-touchable" : "Liquid-Touchable"
,"little cheat-ya" : "リトルチート屋"
,"little garden" : "りとるがーでん"
,"little kinetic" : "LITTLE KINETIC"
,"littlewitch" : "Littlewitch"
,"littlewitch velvet" : "Littlewitch velvet"
,"lively boys" : "LIVELY BOYS"
,"liz" : "Liz"
,"l-letter" : "L-letter"
,"log house" : "Log House"
,"lolitachannel" : "LolitaChannel"
,"lonely church" : "Lonely Church"
,"longhorntrain" : "LongHornTrain"
,"lost garden" : "Lost Garden"
,"lost heart" : "Lost Heart"
,"lostscript" : "LOST SCRIPT"
,"love and peace" : "ラブ＆ピース"
,"love cherry" : "ラブチェリー"
,"love delivery" : "Love Delivery"
,"love-gun" : "LOVE-GUN"
,"lovejuice pink" : "LoveJuiceピンク"
,"loveless" : "LOVELESS"
,"lovely pretty chou aishiteru" : "ラブリープリチー超愛してる"
,"lovemaster" : "LOVEMASTER"
,"lovematic" : "らぶまてぃっく"
,"loverevo" : "ラブレボ"
,"lovers" : ["Lover's", "studio A side B “Lover's”"]
,"lovers hyper drive" : "Lovers Hyper Drive"
,"loversoul" : "LOVER SOUL"
,"lr-0 hasune" : "LR-0 HASUNE"
,"ltm." : "LTM."
,"lu sear" : "LU SEAR"
,"lucha" : ["るチャ！", "LUCHA!"]
,"lucha libre" : "Lucha Libre"
,"luciferhood" : "Luciferhood"
,"luck and pluck co." : "LUCK & PLUCK!"
,"luckystripe" : "lucky stripe"
,"lucretia" : "LUCRETIA"
,"luft forst" : "Luft Forst"
,"lulu koubou" : "LULU工房"
,"lump of sugar" : "Lump of Sugar"
,"luna system" : "LunaSystem"
,"lunapran" : "LUNA PLAN"
,"lunar soft" : "Lunar Soft"
,"lunatic" : "LUNATIC"
,"lunatic wings" : "LUNATIC WINGS"
,"lunatique" : "LUNATIQUE"
,"lunch box" : "ランチBOX"
,"lune" : "ルネ"
,"lune team bitters" : "ルネ Team Bitters"
,"lupinus" : "ルピナス"
,"lusterise" : "Lusterise"
,"luv mix" : "LUV∞MIX"
,"luxury tiara" : "Luxury Tiara"
,"lv.x" : "Lv.X"
,"lyco-z" : "Lyco-Z"
,"lyricbox" : "リリックボックス"
,"m" : "M"
,"m and u" : "M&U"
,"m de pink" : "M de PINK"
,"m ni aqua" : "M ni AQUA"
,"m no violet" : "M no VIOLET"
,"m.macabre" : "M.Macabre"
,"m-10" : "M-10"
,"m2unit" : "M2UNIT"
,"machednia" : "まけどに屋"
,"machwing" : "マッハウイング"
,"macv-sog" : "MACV-SOG"
,"mado soft" : "まどそふと"
,"madoromi andon" : "まどろみ行灯"
,"madraid" : "マッドレイド"
,"magi" : "MAGI"
,"magi black" : "MAGI black"
,"magic bullet" : "Magic BulleT"
,"magic creation" : "マジッククリエイション"
,"magic machinery" : "MAGIC MACHINERY"
,"magic private eye" : ["魔法探偵社", "MAGIC PRIVATE EYE"]
,"magical kagechousukashi" : "マジカル影蝶透"
,"magicaldelta dot com" : "MAGICAL DELTA.COM"
,"magnetic field" : "MAGNETIC FIELD"
,"magnitude 2" : "Magnitude 2"
,"magnolia" : "マグノリア"
,"magono-tei" : "まごの亭"
,"magudara kaihou doumei" : "マグダラ解放同盟"
,"mahirutei" : "まひる亭"
,"mahjong yugen co.ltd 58" : "麻雀有限会社58"
,"mahola" : "まほら"
,"maho-shinsengumi" : "魔法新選組"
,"maidoll" : "MAIDOLL"
,"maika" : "MAIKA"
,"maika-p" : ["MAIKA-P", "M-pure"]
,"mainichi kenkou seikatsu" : "毎日健康生活"
,"majimadou" : "眞嶋堂"
,"majimeya" : "真面目屋"
,"maka-rakko" : "MAKA-RAKKO"
,"makaron soft" : "まかろんソフト"
,"makino jimusho" : "マキノ事務所"
,"makotonet" : "MAKOTONET"
,"makura" : ["枕", "けろ枕"]
,"makuu gundan" : "魔空軍団"
,"maltese" : "まるち～ズ"
,"mamagult" : "ママグル徒"
,"mamekura" : "豆蔵"
,"mamiana hanten" : "狸穴飯店"
,"man say" : "MAN SAY"
,"manamagu" : "まなまぐ"
,"manatsu8" : "MANATSU_8"
,"mandokoro" : "MANDOKORO"
,"mandoragora striker" : "まんどらごらすとらいかー"
,"manekineko" : "まねきねこ"
,"manga super" : "マンガスーパー"
,"mangana" : "漫画な"
,"manganiku" : "マンガ肉"
,"maniac street" : "ManiacStreet"
,"manifla ent" : "マニフラエント"
,"manitic" : "まにてぃっく"
,"manitou" : "MANITOU"
,"mannen dokodoko dondodoko" : "まんねんドコドコドンドドコ"
,"manoou noguchi eigyou nika" : "魔の王野口営業二課"
,"maraparte" : "Maraparte"
,"marble candy soft" : "マーブルCandySoft"
,"marble candysoft" : "マーブルCandySoft"
,"marbleland" : "Marbleland"
,"march" : "MARCH"
,"marchen box" : "メルヘンBOX"
,"marcys" : "MARCY'S"
,"marialite" : "Marialite"
,"mari-chan fc" : "まりちゃんFC"
,"marine" : "マリン"
,"marine heart" : "マリンハート"
,"marked-two" : "Marked-two"
,"marmalade" : "ま～まれぇど"
,"marron" : "Marron"
,"marry bell" : "Marry Bell"
,"marshmallow soft" : "ましゅまろそふと"
,"maruarai" : ["まるあらい", "MARUARAI"]
,"maruchuu seisaku" : "MARUCHU SEISAKU"
,"marukane teikoku" : "丸金帝国"
,"maruneji" : "まるねじ"
,"maruta-dojo" : "丸田道場"
,"mary" : "MARY"
,"maskdo" : "ますく堂"
,"mastermind" : "MasterMind"
,"masulao maximum" : "MASULAO MAXIMUM"
,"masys" : "Masys"
,"mat" : "MAT"
,"mata ashita." : "また明日。"
,"matcha pink factory" : "抹茶ピンクファクトリー"
,"matilda kanmidokoro" : "まちるだ甘味処"
,"matsumoto drill kenkyuujo" : "松本ドリル研究所"
,"matsuri kikaku" : "祭企画"
,"matsurika" : "茉莉花"
,"matsutake club" : "松竹くらぶ"
,"matsutakeya honpo" : "まつたけ屋本舗"
,"mattsuaya" : "まっつあ屋"
,"mauve" : "Mauve"
,"maxi" : "MAXI"
,"maximum wind" : "MAXIMUM WIND"
,"may no tenshi" : ["メイの天使", "An angel for May"]
,"may-be soft" : "May-Be Soft"
,"mayfar soft" : "メイファーソフト"
,"mayoineko" : ["迷い猫", "MAYOINEKO"]
,"mayumayu" : "まゆまゆ"
,"mbs truth" : "MBS TRUTH"
,"mbs truth cherish pink" : "MBS TRUTH -Cherish Pink-"
,"mc" : "MC"
,"mcnail koubou" : "まくねいる工房"
,"mean machine" : "MEAN MACHINE"
,"mechanical code" : "メカニカルコード"
,"mechanical pencil" : "メカニカルペンシル"
,"mederukai" : "愛でる会"
,"medical berry" : "Medical Berry"
,"medical company" : ["めでぃかるカンパニー", "瑠璃とすそのの診察室"]
,"medicine compilation" : "MEDICINE COMPILATION"
,"medusa" : "メドゥーサ"
,"mega despair" : "MEGA DESPAIR"
,"mega drive" : "MEGA DRIVE"
,"megaki" : "メガキー"
,"megami" : "MEGAMI"
,"megami kyouten" : "女神経典"
,"mega-mix" : "MEGA-MIX"
,"meganekko manga shuudan" : "めがねっこ漫画集団"
,"megaplus" : "MEGAPLUS"
,"megasoundorchestra" : "MegaSoundOrchestra"
,"meikyoushisui" : ["明鏡止水", "明鏡止水Z"]
,"meikyuuden" : "迷宮殿"
,"meisaku network" : ["名作ネットワーク", "Meisaku Network"]
,"mekakushi musume" : "目隠し娘"
,"mekongdelta" : "MEKONGDELTA"
,"melodiya" : "メロディ屋"
,"melody" : "Melody"
,"melt downers" : "Melt Downers"
,"meltdown comet" : "MeltdoWNCOmet"
,"melty" : "めるてぃ"
,"melty koubou" : "メルティ工房"
,"memeya" : "メメ屋"
,"memoria" : "Memoria"
,"mengerekun" : "めんげれくん"
,"mens equal k" : "MEN'S=K"
,"mentaiko" : "MENたいこ"
,"mentaipark" : "めんたいぱぁく"
,"mental specialist" : "めんたるスペシャリスト"
,"mentsukidou" : "眼ん月堂"
,"mephisto" : "MEPHISTO"
,"mercure" : "Mercure"
,"mercurius" : "Mercurius"
,"mercury lampe" : "MercuryLamp"
,"merkmal" : "MERKMAL"
,"meromero cute" : "めろめろキュート"
,"meromerofactory xl" : "メロメロファクトリーXL"
,"merrymoon" : "MerryMoon"
,"meshikutteneru." : "飯食って寝る。"
,"metabocafe offensive smell uproar" : "メタボ喫茶異臭騒ぎ"
,"metal" : "METAL"
,"metal bunshitsu" : "METAL分室"
,"metal corpse" : "Metal Corpse"
,"metal delicious" : "メタルデリシャス"
,"metamorphose" : "Metamorphose"
,"meteor" : "Meteor"
,"metsuki warui kyoudan" : "目つき悪い教団"
,"mgw" : ["MG works", "MGW"]
,"micro page" : "みくろぺえじ"
,"microbit" : "Microbit"
,"midareageha" : "乱蝶姫"
,"middly" : "MIDDLY"
,"midoriiro cut in" : "緑色カットin"
,"miel" : "Miel"
,"mieow" : "MIEOW"
,"mikandensya" : "蜜柑電車"
,"mikan-honpo" : "MIKAN HONPO"
,"mikekodou" : "みけこ堂"
,"mikeneko" : "みけねこ"
,"mikezoutei" : "三毛蔵亭"
,"miki house" : "Miki House"
,"milimili amuse craft erotica" : "milimili：AMUSE CRAFT EROTICA"
,"milk bar" : "MILK BAR"
,"milk caramel" : "みるくキャラメル"
,"milk crown" : "MILK CROWN"
,"milk factory" : "みるくふぁくとりー"
,"milk gohan" : "みるくごはん"
,"milk pai" : "みるくぱい"
,"milk pudding" : "ミルクプリン"
,"milk standard" : "MILK STANDARD"
,"milkids" : "milKids"
,"milksoft" : ["牛乳ソフト", "みるくそふと"]
,"milky way" : "MilkyWay"
,"milkypoko" : "みるきーポコ"
,"millenium-garage" : "ミレニアムガレージ"
,"million drops" : "MILLION＊DROPS"
,"milts chaya" : "みるつ茶屋"
,"mimasaka direct" : "ミマサカダイレクト"
,"mimimimi" : "みみみみ"
,"mimizu thousand" : "ミミズサウザンド"
,"mimoneland" : "ミモネランド"
,"minatekishugi" : "御奈的主義"
,"minato carnival" : "みなとカーニバル"
,"minato-soft" : "みなとそふと"
,"minayu" : "みなゆ"
,"minemine kikaku" : "ルイルイ企画"
,"minies club" : "MINIES CLUB"
,"minirebe." : "ミニレベ。"
,"mink" : "MINK"
,"mink ego" : "Mink EGO"
,"minors escort" : "マイナーズ・エスコート"
,"minshuku inarimushi" : "民宿いなりむし"
,"mint blue" : "MINT BLUE"
,"mintcube" : "MintCUBE"
,"mint-nium" : "Mint-nium*"
,"minx" : "MINX"
,"mirabilien fabrik" : "Mirabilien Fabrik"
,"mirage-soft" : "みらーじゅそふと"
,"mirai seiki maruhi club" : "未来世紀マル秘倶楽部"
,"miraiya" : "MIRAIYA"
,"mirin" : "ミリン"
,"mirukomi" : "Mirukomi"
,"mirukuseiki" : "みるく世紀"
,"misaki" : "MISAKI COMICS"
,"mischief" : "MISCHIEF"
,"mischievous" : "Mischievous"
,"misoshiru" : "みそ汁"
,"missing link" : "Missing Link"
,"missing park" : "MISSING PARK"
,"misssail" : "Miss-Sail"
,"mist mysteria" : "MIST MYSTERIA"
,"mist mysterisia" : "Mist Mysterisia"
,"mist night" : "Mist Night"
,"misty" : "Misty"
,"misty isle" : "misty Isle"
,"misty midnight" : "MISTY MIDNIGHT"
,"misty moon" : "MISTYMOON"
,"mita kazuo daihyakka" : "三田和夫大百科"
,"mitarashi club" : "みたらし倶楽部"
,"mithril software" : "ミスリルソフトウェア"
,"miti" : "ミィティ"
,"mix biscuit" : "みっくす★ビスケット"
,"mix fry" : "みっくすふらい"
,"mixing channel" : "MIXING CHANNEL"
,"mix-ism" : "MIX-ISM"
,"mixwill soft" : "Mixwill Soft"
,"miyabi tsuzuru bu" : "みやびつづる部"
,"miyamori" : "みやもり"
,"miyanchi" : "みやんち"
,"miyumiyu project" : "みゆみゆproject"
,"mizuiro koneko" : "水色仔猫"
,"mizuiro zenmai" : "みずいろぜんまい"
,"mizukagami" : "水鏡"
,"mizuki-chan club" : "みずきちゃんくらぶ"
,"mizukidou" : "観月堂"
,"mizumanjiu" : "みずまんじゅう"
,"mizumo club" : "みずも倶楽部"
,"mizunekotei" : "水猫亭"
,"mizutama shouboudan" : "みずたま消防団"
,"mizutaniya" : "水谷屋"
,"mizutataki" : "みずたたき"
,"mjgg" : "もりじおぎゅうぎゅう"
,"mk2factory" : "MK2FACTORY"
,"mlc design house" : "MLC DESIGN HOUSE"
,"mo" : "MO"
,"mochinchi" : "もちんち"
,"mochi-ya" : ["餅屋", "もち屋"]
,"modae shine" : "悶え死ね！！！"
,"modae tei" : "悶亭"
,"moe" : "萌。"
,"moe hime rengou" : "萌姫連合"
,"moe hina" : "萌雛"
,"moe moe cafe" : "モエモエカフェ"
,"moe osu" : "萌♂"
,"moe tamago soft" : "もえたまごソフト"
,"moehina kagaku" : "萌雛化学"
,"mofumanjuu" : "もふまんじゅう"
,"mofumofuen" : "もふもふ苑"
,"mokumokudo" : "もくもく堂"
,"mokusei zaijuu" : "木星在住"
,"mokushiroku" : "黙示録"
,"molamola.software" : "Molamola.software"
,"momiji oroshi" : "もみじおろし"
,"momo no tsubomi" : "モモのつぼみ"
,"momo9" : "ももきゅー"
,"momochichi" : "ももちち"
,"momohina" : "桃雛"
,"momoilock" : ["MOMOILOCK", "桃色っく。"]
,"momo-iro" : "MOMO-IRO"
,"momoiro kageboushi" : "桜色影法師"
,"momoiro pocket" : "ももいろPocket"
,"momoiro settoudan" : "桃色窃盗団"
,"momoiro toiki" : "桃色吐息"
,"momoiro-gekijyou" : "桃色劇場"
,"momoiro-rip" : "MOMOIRO-RIP"
,"momokan" : "ももかん"
,"momonga club" : "モモンガ倶楽部"
,"momonomi plus" : "もものみプラス"
,"monaco meister" : "モナコマイスター"
,"monaka udon" : "もなかうどん"
,"monako" : "MONAKO"
,"mongoose studio" : "マングース・スタジオ"
,"monkey adventure" : "モンキーアドベンチャー"
,"monmontei" : "悶亭"
,"monna lisa over drive" : "Monna Lisa OVER DRIVE"
,"mono letter" : "モノ手紙"
,"mono x chro" : "モノ×クロ"
,"monoceros plus" : "monoceros+"
,"monogram" : "Monogram"
,"monsuke honpo" : "もんすけ本舗"
,"montage" : "モンタージュ"
,"monte carlo-ya" : "もんてかるろ屋"
,"moon ruler" : "むうんるうらあ"
,"moonsault express" : "ムーンサルトエクスプレス"
,"moonshell" : "Moon Shell"
,"moonstone" : "MOONSTONE"
,"moonstone cherry" : "MOONSTONE Cherry"
,"moonstone honey" : "MOONSTONE Honey"
,"more" : "MORE"
,"more prity" : "More Prity"
,"morelia standard" : "もれりあすたんだーど"
,"moriisan-tokono" : "森井さんとこの"
,"morimi-ya" : "森見屋"
,"morimiyakan" : "森宮缶"
,"morinomiya koushinkyoku" : "森ノ宮行進曲"
,"moriq" : "moriQ"
,"morishigeru laboratory" : "もりしげる研究所"
,"morning" : "もーにんぐ"
,"morning light" : "もーにんぐらいと"
,"morning star" : "モーニングスター"
,"morningmoon merchandising products" : "MORNINGMOON MERCHANDISING PRODUCTS"
,"morningstar rush" : "モニスタラッシュ"
,"mosquitone." : "もすきーと音。"
,"motchie kingdom" : "もっちー王国"
,"mothman" : "もすまん"
,"motion" : "MOTION"
,"motsu ryouri" : "もつ料理"
,"mouko mouretsu hasai dan" : "蒙古猛烈破砕団"
,"mount position" : "マウントポジション"
,"mousou bijutsubu" : "妄想美術部"
,"mousou pushon" : "妄想 PushOn"
,"moviendo" : "Moviendo"
,"moyori no chi" : "最寄りの地"
,"mozham" : "MozHAM"
,"mozukuya" : "もずく屋"
,"mr.outside" : "Mr.OUTSIDE"
,"ms is" : "M's I's"
,"msize" : ["エムサイズ", "MSIZE"]
,"mtsp" : "MTSP"
,"mu soft" : "美遊"
,"mubimuchuu" : "夢寐夢中"
,"muchakai" : "夢茶会"
,"muchi muchi seven" : "ムチムチ７"
,"muchimuchi neko" : "むちむちねこ"
,"mucus" : "ミューカス"
,"mugen" : "夢幻"
,"mugen at works" : "MUGEN@WORKS"
,"mugen honpo" : "むげん本舗"
,"mugen no chikara" : "無限ノ力"
,"mugendai" : "無限大"
,"mugenkidou a" : "無限軌道A"
,"mugichoco club" : "麦チョコ倶楽部"
,"mugichoko store" : "むぎちょこストア"
,"mukousharan" : "無口遮欄"
,"multi-link" : "MULTI-LINK"
,"munchengraph" : "MunchenGraph"
,"munomeritei" : "むめのり亭"
,"murakami suigun no yakata" : "村上水軍の館"
,"murasakiiro no yoru" : "むらさきいろのよる"
,"murderhouse" : "マーダーハウス"
,"musasabidou" : "むささび堂"
,"musashi no wwf" : "MUSASHI NO WWF"
,"musashi-dou" : "武蔵堂"
,"museifu kutsushita doumei" : "無政府靴下同盟"
,"mushimusume aikoukai" : "蟲娘愛好会"
,"mushiringo" : "むしりんご"
,"musou tensei" : "夢想転生"
,"mutation" : "Mutation"
,"mutekei-fire" : "むてけいファイヤー"
,"muteki chaya" : "むてきちゃや"
,"mutsugumi" : "睦組"
,"mutsukian" : "睦月庵"
,"mutsuya" : "陸奥屋"
,"muzin syoujo" : "無人少女"
,"mystery clock" : "MYSTERY CLOCK"
,"mystic chord" : "ミスティック・コード"
,"n.s craft" : "N.S craft"
,"n7747" : "N7747"
,"nadorindou" : "ナドリン堂"
,"nagaredamaya" : "流弾屋"
,"nagasaki-inter" : "長崎インター"
,"nagehame" : "投げはめ"
,"naginata kikaku" : "なぎなたきかく"
,"nagisawaya" : "なぎさわ屋"
,"nagiya honpo" : "なぎや本舗"
,"nagiyamasugi" : "ナギヤマスギ"
,"nagomi" : "和"
,"nagomi-chaya" : "なごみ茶屋"
,"nagumo curry-bu" : "なぐもカレー部"
,"nagumoya" : "なぐも屋"
,"nail" : "Nail"
,"nail sharp" : "Nail Sharp"
,"naitou2" : "NAITOU2"
,"nakasatogumi" : "ナカサト組"
,"nakayama shiki kenkou tosho" : "中山式健康図書"
,"nakayohi" : "なかよひ"
,"nakayohi mogudan" : "なかよひモグダン"
,"nama cream biyori" : "生クリームびより"
,"nameco-soup" : "お澄ましなめこ"
,"namekuzu" : "なめくず"
,"nameless" : "Nameless"
,"nanacan" : "NANACAN"
,"nanachan team" : "ななちゃんちーむ"
,"nanairo koubou" : ["七色工房", "なないろ工房"]
,"nanairo momogumi" : "なないろもも組"
,"nanairo no magatama" : "七色の勾玉"
,"nanairo no neribukuro" : "七色のねりぶくろ"
,"nanamoya" : "ななも屋"
,"nanao heavy industries" : ["七尾重工", "七緒重工"]
,"nanashi kissa" : "名無し喫茶"
,"nanashiki" : "七式"
,"nanatsu no kagiana" : "七つの鍵穴"
,"nanatsugumi" : "ななつ組"
,"nanawind" : "NanaWind"
,"nanbou hitogakushiki" : "南方ヒトガクシキ"
,"nangchi-dou" : "難吃堂"
,"nanika no heya" : "何かの部屋"
,"nanika-modoki" : "なにかもどき"
,"nanimoshinai" : "NANIMOSHINAI"
,"naniwa onsen tamago kumiai" : "浪花温泉たまご組合"
,"nanmin festival" : "NANMIN-FESTIVAL"
,"nansyu-koubow" : "南洲好房"
,"nantoka narunaru." : "なんとかなるなる。"
,"narashino kaitoudan" : "習志野海盗団"
,"narisawa hatsudensho" : ["NARISAWA HATUDENNSYO", "成沢発電所"]
,"naruho-dou" : "NARUHO堂"
,"narumiya" : "成宮"
,"naschbe" : "Naschbe"
,"nas-on-ch" : "NAS-ON-CH"
,"nataku no omise" : "なたくのお店"
,"natsukon" : "なつこん"
,"nattou mania" : ["納豆☆マニア", "mania☆nattou"]
,"navel" : "Navel"
,"nawanoren" : "縄のれん"
,"naya" : "納屋"
,"nazonokai" : "謎の会"
,"ncp" : "NCP"
,"ndemotte" : "んでもって"
,"nearly equal zero" : ["Nearly Equal \"ZERO\"", "MADA ZERO JA NAI"]
,"neco seiryuu" : "NECO青龍"
,"necoanshin" : "猫安心"
,"necobook" : "NecoBook"
,"necoro-girl" : "ねころがーる"
,"necotoxin" : "NECOTOXIN"
,"needle garden" : "NEEDLE GARDEN"
,"neetest" : "nEetest"
,"negative" : "NEGATIVE"
,"negative gang" : "相討ちネガティブギャング"
,"negibouzu" : "ねぎ坊主"
,"negimiso oden" : "ねぎみそおでん"
,"negiumaya" : "ねぎうま屋"
,"nejimaki kougen" : "ねじまきこうげん"
,"nejiya no hito" : "ねじやのひと"
,"nekketsu kouenji housoukyoku" : "熱血高円寺放送局"
,"nekketsu project" : "熱血プロジェクト"
,"neko ga kyuuhiki" : "猫が九匹！"
,"neko gohan" : "ねこごはん"
,"neko happyaku" : "ねこはっぴゃく"
,"neko iri bako dairi" : "猫入り箱代理"
,"neko kinryouku" : "猫禁猟区"
,"neko masshigura" : "ねこまっしぐら"
,"neko neko soft" : "ねこねこソフト"
,"neko no paraiso" : "猫のパライソ"
,"neko pantsu" : "ねこぱんつ"
,"neko saffron" : "ネコサフラン"
,"neko to hato" : "ねことはと"
,"neko wa manma ga utsukushii" : "ねこはまんまが美しい"
,"neko work h" : "NEKO WORK H"
,"neko works" : "NEKO WORKs"
,"neko-bus tei" : ["ねこバス停", "ネコバステイ", "A CAT BUS STOP"]
,"nekodotto" : "ネコドット"
,"nekohigetei" : "ねこひげ亭"
,"nekojarasare" : "猫じゃらされ"
,"nekomarudow." : "猫丸堂"
,"nekomataya" : "ねこまた屋"
,"nekomaya" : "ねこま屋。"
,"nekomiya" : "猫見屋"
,"nekonin-so" : "猫忍荘"
,"nekonokone" : "ねこのこね"
,"nekoranbu" : "猫乱舞"
,"nekosenyou milk" : "猫専用牛乳"
,"nekotank" : "ねこタンク"
,"nekousa pudding" : "ねこうさプリン"
,"nekoya gakkiten" : "ねこや楽器店"
,"nekoya kaigetsudou" : "猫屋懐月堂"
,"nekoyashiki" : "猫屋敷"
,"nekoya-systemz" : "猫屋システムズ"
,"nel" : "ネル"
,"nendo jam" : "ねんどじゃむ"
,"neo frontier" : "Neo Frontier"
,"neo hyper kids" : "Neo Hyper Kids"
,"neopil" : "NEOPIL"
,"nephrite" : "Nephrite"
,"nerima hakushon kai" : "練馬ハクション会"
,"netorare no tami" : "ネトラレの民"
,"nettaigyo club" : "熱帯魚倶楽部"
,"neu" : "NEU"
,"neuromancer" : "NEUROMANCER"
,"neuromancer." : "NEUROMANCER."
,"new koubou" : "NEW工房"
,"news" : "NEWS"
,"newton no ringo" : "ニュートンの林檎"
,"newtype kenkyuujo" : "にゅうたいぷ研究所"
,"next" : "NEXT"
,"nextwith" : "NEXTwith"
,"nexus koubou" : "ネクサス工房"
,"nf121" : "NF121"
,"ngmyu" : "NGMYU"
,"nicchi sangyou" : "にっちさんぎょう"
,"nice and friendly" : "Nice and Friendly"
,"nichoume no denchuu" : "二丁目の電柱"
,"nigarizumu" : "にがりずむ"
,"night fuckers" : "夜☆FUCKERS"
,"nigimitama no ya" : "和魂屋"
,"nihon dandy" : "日本ダンディ"
,"nihon waru waru doumei" : "日本ワルワル同盟"
,"niikyuu" : "にーきゅー"
,"niitakayama tozantai" : "新高山登山隊"
,"nijutteya" : "弐十手屋"
,"nikka" : "NIKKA"
,"niko" : "NIKO"
,"nikomark" : "にこまあく"
,"nikonikomachi" : "にこにこ街"
,"nikopondo" : "NIKOPONDO"
,"niku ringo" : "肉りんご"
,"nikukyuu" : "にくきゅう"
,"nikuman aikoukai" : "肉まん愛好会"
,"nilitsu haihan" : "ニリツハイハン"
,"nina" : "NINA"
,"nine tail" : "NINE TAIL"
,"ninelives" : "NINELIVES"
,"ningyou gishou" : "人形技廠"
,"ninokoya" : "にのこや"
,"nipopo crisis" : "ニポポクライシス"
,"nippon h manga kyoukai" : "日本H漫画出版協会"
,"nippon teikoku toshokan" : "日本帝國図書館"
,"niratama" : "にらたま"
,"nirvana soft" : "Nirvana Soft"
,"nisanka mangan" : "二酸化マンガン"
,"nise-jyuusyofutei" : "偽住所不定"
,"nisemididoronokai" : "偽MIDI泥の会"
,"nisiarea" : "にしえりあ"
,"nita ken" : "ニタ研"
,"nitroplus" : "NitroPlus"
,"nitroplus chiral" : "Nitro+CHiRAL"
,"niwakakamikiriyamodoki" : "ニワカカミキリヤモドキ"
,"nmadchen" : "N*MADCHEN"
,"nnz dan" : "NNZ団"
,"no brand" : "NO_BRAND"
,"noa" : "NOA"
,"nobita jimetsu system" : "のび太自滅システム"
,"nocturnum" : "Nocturnum"
,"nodoame" : "のど雨"
,"nodomaru biyori" : "のどまる日和"
,"noel" : "のえる"
,"noesis" : "Noesis"
,"noi-gren" : "NOI-GREN"
,"noir" : "NOIR"
,"noirsoft" : "ノアールソフト"
,"nokishita no rakuen." : "のきしたのらくえん。"
,"nomad" : "Nomad"
,"nononon kikaku" : "のののん企画"
,"nonoya" : "のの屋"
,"nonsugar" : "NONSUGAR"
,"nontan project" : "のんたんプロジェクト"
,"noppikiya" : "のっぴき屋"
,"noraneko-no-tama" : "ノラネコノタマ"
,"norausagi" : "NORAUSAGI"
,"noraya" : "のら屋"
,"nord" : "のると"
,"noriajou" : "のりあ城"
,"noritama-gozen" : "のりたま御膳"
,"norn" : "Norn"
,"north river" : "NORTH RIVER"
,"nosebleed" : "NOSEBLEED"
,"nostalgic chord" : "Nostalgic Chord"
,"no-tenki company" : "のーてんきかんぱにー"
,"notone" : "NOTONE"
,"notus" : "Notus"
,"nounai kanojo" : "脳内彼女"
,"nounanka sedai" : "nounanka"
,"noutenki company" : "のーてんきかんぱにー"
,"nouvelle" : "Nouvelle"
,"nouzui majutsu" : ["脳髄魔術", "NoZui-Magic"]
,"noxious plant" : "noxious_plant"
,"nozarashi" : "のざらし"
,"ns factory label" : "N's Factory Label"
,"ns radio show" : "N's Radio Show"
,"nt confess" : "NTconfess"
,"nukowata" : "ぬこわた"
,"nuku nuku dou" : "ヌクヌク堂"
,"nul neverland" : "ヌルネバーランド"
,"null mayu" : "NULLまゆ"
,"number2" : "Number2"
,"nv3offline" : "NV3OFFLINE"
,"nyagos" : "にゃごズ"
,"nyan nyan" : "娘娘"
,"nyan nyan nyan" : "にゃんにゃんにゃん！"
,"nyandaber" : "にゃんだばー"
,"nyankone" : "にゃんこね"
,"nyannyan club" : "娘々倶楽部"
,"nyan-nyan-hanten" : "NYAN-NYAN-HANTEN"
,"nylon 100" : "ナイロン100%"
,"nyotai kougaku kenkyuujo" : "女体光学研究所"
,"nyuu koubou" : "にゅう工房"
,"o3zone works" : "O3zone works"
,"oba-q honpo qt" : "OBA-Q HONPO QT"
,"oboro" : "朧"
,"oboro and tempo gensui dou" : "朧と天蓬元帥堂"
,"ocarina" : ["おかりな", "OCARINA"]
,"ochimusha." : "落武者。"
,"o-chu-gen" : "お中元"
,"oct works" : "oct-works"
,"odenden" : "おでんでん"
,"oden-ya" : "おでんや"
,"odin" : "オーディン"
,"o-din" : "O-Din"
,"off side" : "Off side"
,"office neko" : "Office猫"
,"ofuton de suyaa" : "おふとんでスヤァ"
,"ogeretsu-dan" : ["おげれつ団", "PRODUCTION O.G"]
,"o-g-g" : "O-G-G"
,"ogofwitch" : "OgOfWitch"
,"ohgetsu" : "桜月"
,"ohizumi bakuretsutai" : "大泉爆裂隊"
,"ohkura bekkan" : "大蔵別館"
,"ohsaka spirits" : ["大坂魂", "Oh!SAKA SPIRITS"]
,"ohtado" : "おおた堂"
,"oideyasu honpo" : "おいでやす本舗"
,"oiwaidou" : "御祝堂"
,"ojou no yokushitsu" : "お嬢の浴室"
,"okachimentaiko" : "おかちめんたいこ"
,"okadatei" : "おかだ亭"
,"okazaki mental clinic" : "OKAZAKI MENTAL CLINIC"
,"okazu club" : "おかず倶楽部"
,"okina flying factory" : "OKINA FLYING FACTORY"
,"okina keikaku" : "翁計画"
,"okinawa taieki gunjinkai" : "沖縄体液軍人会"
,"okochama club" : "おこちゃま倶楽部"
,"okosama lunch" : "お子様ランチ"
,"okota" : "おこた"
,"oldwiseman" : "Old wiseman"
,"ole" : "OLE"
,"ole-m" : "OLE-M"
,"omatsuri dragon" : "お祭りDRAGON"
,"omatsuri kibun" : "お祭り気分"
,"omega 2-d" : "OMEGA 2-D"
,"omega star" : "ωstar"
,"omega13" : "OMEGA13"
,"omiotsuke" : ["オミオツケ", "御御御付"]
,"omocha kaden" : "玩具家電"
,"omochi soft" : "おもちそふと"
,"omodume" : "想詰め"
,"omokaji ippai ippai" : "面舵いっぱいいっぱい"
,"omomuroni" : "おもむろに"
,"omoshiro burger" : "おもしろバーガー"
,"one games" : "ONE GAMES"
,"one hit wonder" : "ONE HIT WONDER"
,"one shot" : "One Shot"
,"onecoin" : "わんこ院"
,"oneekyou" : "御姉狂"
,"onegai-cheesecake" : "おねがいチーズケーキ"
,"oneone1" : "ONEONE1"
,"one-seven" : "ONE-SEVEN"
,"one-site" : "おねして"
,"one-up" : "ONE-UP"
,"onikibitou" : "鬼きび党"
,"onikushop" : "OnikuShop"
,"onnanoko himitsu seisan koujou" : "女の子秘密生産工場"
,"onomatope" : "onomatope＊"
,"onomatopoeia" : "Onomatopoeia"
,"on-show" : "怨床"
,"oobae toudai" : "オオバエ灯台"
,"oohashiya" : "大橋屋"
,"oomune soft" : "概ソフト"
,"oops" : "OOPS!!"
,"oosaka gundan" : "大阪軍団"
,"ootsuku shouji" : ["大津久屋", "大津久商事(有)"]
,"open book" : "OPEN BOOK"
,"oppeke hei" : "おっぺけ兵"
,"optim" : "OPTiM"
,"optimist" : "Optimist"
,"option 5" : "OPTION 5"
,"orange crown" : "ORANGE CROWN"
,"orange peel" : "Orange Peel"
,"orange peels" : "オレンジピールズ"
,"orangemaru" : "OrangeMaru"
,"orange-soft" : "ORANGE☆SOFT"
,"orbit cactus" : "ORBIT-CACTUS"
,"orc soft" : "ORCSOFT"
,"oregun" : "OREGUN"
,"oretachi misnon ikka" : "俺たちミスノン一家"
,"ororiya enpitsudo" : "オロリヤ鉛筆堂"
,"osakana center" : "OSAKANA CENTER"
,"osaru-san panic" : "おさるさんパニック"
,"oshaban" : "オシャバン"
,"oshiruko kan" : "おしるこ缶"
,"osterei" : "OSTEREi"
,"ota" : "OTA"
,"otabe dynamites" : "おたべ★ダイナマイツ"
,"otafukutei" : "おたふく亭"
,"otaku beam" : "オタクビーム"
,"otaku no youjinbou" : "オタクの用心棒"
,"otakulife japan" : "オタクライフJAPAN"
,"otaut-r" : "おたうT-R"
,"otentomaru" : "オテント丸"
,"othello ice" : "オセロアイス"
,"otobokechasoba" : "Otobokechasoba"
,"otogiya" : "御伽屋"
,"otoko no roman" : "OTOKO NO ROMAN"
,"otokodama" : "男魂"
,"otokonoko club" : "おとこの娘倶楽部"
,"otokonoko club z" : "おとこの娘倶楽部Z"
,"otokonoko soft" : "男の娘ソフト"
,"otomekibun" : "乙女気分"
,"otona star" : "大人スター"
,"otonano do-wa" : "大人の童話"
,"otukimi koubo" : "おつきみ工房"
,"ouchi jikan" : "おうちじかん"
,"ousama to ichigo" : "おうさまと苺"
,"out of sight" : "OUT OF SIGHT"
,"ouun" : "桜雲"
,"ovacas" : ["OVACAS", "おばかーず"]
,"over" : "OVER"
,"over all" : "OVER ALL"
,"over flows" : "オーバーフローズ"
,"overall" : "OVERALL"
,"overdose" : "オーバードーズ"
,"overdrive" : "OVERDRIVE"
,"overflow" : "Overflow"
,"oving" : "Oving"
,"oyt shuppan" : "OYT出版"
,"ozon dance" : "OZONE DANCE"
,"p kikaku" : "P企画"
,"p.a. project" : "P.A. Project"
,"p.p" : "P:P"
,"p.p.projects" : "P.P.Projects"
,"p.s." : "P.S."
,"p.w." : "P.W."
,"pachipachi soft" : "ぱちぱちそふと"
,"padlock" : "PADLOCK"
,"pag-pag-magu" : "ぱぐぱぐまぐぅ"
,"pajamas ex" : ["ぱじゃまエクスタシー", "POISONエクスタシー"]
,"pajamas soft" : "ぱじゃまソフト"
,"pakkuri paradise" : "ぱっくりパラダイス"
,"pa-ku-pa" : "PA・KU・PA"
,"pale lilac" : "PALE LILAC"
,"pale scarlet" : "Pale Scarlet"
,"palepink" : "PalePink!"
,"palette" : "ぱれっと"
,"palette enterprise" : "Palette Enterprise"
,"pam" : "PAM"
,"panda house" : "ぱんだはうす"
,"pandagaippiki." : "パンダが一匹。"
,"panic attack in sailor q2" : "PANIC ATTACK in SAILRQ2"
,"pannacotta" : "パンナコッタ"
,"pannomimi" : ["ぱんのみみ", "ぱんみみそふと"]
,"panoramakan" : "ぱのらま館"
,"pao pao" : "PAO-PAO"
,"paopaship" : "PAOPASHIP"
,"paper hearts" : "PAPER HEARTS"
,"papercrown" : "Paper Crawn"
,"papikuria" : "ぱぴくりあ♪"
,"pa-pu-" : "PA-PU-"
,"paradigm conflict" : "PARADIGM CONFLICT"
,"paradise city" : "ぱらだいすCITY"
,"paradise d products" : "PARADISE“D”PRODUCTS"
,"parameter" : "パラミター"
,"paranoia" : "PARANOIA"
,"paranoia cat" : "PARANOIA CAT"
,"parapluie" : ["parapluie", "パラプリュイ"]
,"paraselene" : "Paraselene"
,"parasol" : "Parasol"
,"parfum soft" : "ぱるふぁんそふと"
,"part k" : "Part K"
,"parthenon" : "Parthenon"
,"parthenon zero" : "Parthenon ZERO"
,"parufe" : "ぱるふぇ"
,"parukusu" : "CIRCLEぱるくす"
,"parupunte" : "ぱるぷんて"
,"passing rim" : "Passing Rim"
,"pastel color" : "PASTEL COLOR"
,"pastel white" : "Pastel White"
,"pastel wing" : "PASTEL WING"
,"patisserie" : "パティスリー"
,"patoto" : "PATOTO"
,"patricide" : "Patricide"
,"paya paya mambo de u" : "パヤパヤ・マンボウでウッ！"
,"pazzo s.p." : "Pazzo S.P."
,"p-collection" : "P-COLLECTION"
,"pe theta" : "Peθ"
,"peace maker" : "Peace Maker"
,"peach candy" : "Peach Candy"
,"peach class" : "Peach Class"
,"peach-pit" : ["PEACH-PIT", "もものたね"]
,"pearl soft" : "PEARL SOFT"
,"pearl soft r" : "パールソフトR"
,"peassoft" : "PeasSoft"
,"pecan" : "ピーカン"
,"peco poco" : "ぺこぽこ"
,"penetrate" : "Penetrate"
,"penguin works" : "ペンギンワークス"
,"penpengusa club" : "ペンペン草倶楽部"
,"peony" : "ピオニー"
,"peperoncino" : "ぺぺろんちーの"
,"peppy angel" : "PEPPY ANGEL"
,"peppy cherry" : "ペピーチェ"
,"perceptron" : "ぱーせぷとろん"
,"perfect crime" : "PERFECT CRIME"
,"personal color" : "PERSONAL COLOR"
,"petica" : "ペチカ"
,"petit" : "ぷち"
,"petit bunny" : "PETIT BUNNY"
,"petit crowd" : "ぷちクラウド"
,"petit ferret" : "ぷちフェレット"
,"petit keroq" : ["プチケロQ", "ぷちけろ"]
,"petit pajamas" : "ぷちぱじゃま"
,"petit sanctuary" : "Petit Sanctuary!"
,"petite x cerisier" : "Petite*Cerisier"
,"petitx" : "ぷちX"
,"p-factory" : "P-FACTORY"
,"p-forest" : "P-FOREST"
,"ph" : "PH"
,"pham" : "PHAM!"
,"phantomcross" : "PHANTOM CROSS"
,"phantomsoft" : "ファントムソフト"
,"phase" : "PHASE"
,"phase end" : "PHASE#END"
,"ph-bu" : "PH部"
,"physalis" : "PHYSALIS"
,"pianiishimo" : "ピアニッシモ"
,"pico martel" : "Pico Martel"
,"pico pico labyrinth" : "ピコピコ★ラビリンス"
,"pietoro" : "ピエトロ"
,"piggstar" : "PIGGSTAR"
,"pigment" : "PIGMENT"
,"pii-club" : "PII-CLUB"
,"pika" : "ぴか"
,"pil" : "PIL"
,"pil slash" : "PIL／SLASH"
,"pil-vamp" : "PIL-VAMP"
,"pinata party" : "ぴにゃたぱ～てぃ"
,"pink" : "PINK"
,"pink cats garden" : "PINK CAT'S GARDEN"
,"pink chuchu" : "PINK CHUCHU"
,"pink dinosaur" : "PINK DINOSAUR"
,"pink hatena" : "ぴんくはてな"
,"pink no chao" : "PINK NO CHAO!"
,"pink panzer division" : "桃色機甲師団"
,"pink rose" : "PINK ROSE"
,"pink typhoon" : "ピンクタイフーン"
,"pink vision" : "PINK VISION"
,"pinkbell software" : "PINKBELL SOFTWARE"
,"pinpai" : "Pinpai"
,"pinsize inc." : "PINSIZE.Inc"
,"pintsize" : "ぱいんとさいず"
,"pinvise" : "Pinvise"
,"pirokobo" : "ピロコボ"
,"piropiro-go" : "ぴろぴろごー"
,"pisces" : "PISCES"
,"pit" : "Pit"
,"pitafeti" : "ぴたふぇち！"
,"pixel cot." : "Pixel Cot."
,"pixel mint" : "PIXEL MINT"
,"pixy-led" : "ピクシーレッド"
,"piyo project" : "ぴよぷろじぇくと"
,"piyokorota" : "ぴよころた"
,"piyokoya" : "ぴよこ屋"
,"piyopiyo-gumi" : "ぴよぴよ組"
,"p-land" : "P-LAND"
,"planet porno" : "PLANET PORNO"
,"plant" : "PLANT"
,"plastic dreamer" : "PLASTIC DREAMER"
,"plastic image" : "PLASTIC IMAGE"
,"plastic people" : "PLASTIC PEOPLE"
,"platina blonde" : ["PLATINA BLONDE", "プラチナブロンド"]
,"platonic shoujo" : "Platonic少女"
,"pleco" : "PLECO"
,"pleiades fortune" : "PLEIADES☆FORTUNE"
,"plum" : "PLUM"
,"plum hill dai ni kaihatsu shitsu" : "PLUM HILL 第弐開発室"
,"plumzero" : "PlumZERO"
,"plus" : "PL+US"
,"pno group" : "PNOグループ"
,"pnyoon-soft" : "ぷにょーんソフト"
,"poashara" : "ポアシャラ"
,"pochi-goya." : "ぽち小屋。"
,"pocket" : "POCKET"
,"points" : "Points"
,"poison" : "POISON"
,"poison gray" : "Poison Gray"
,"pokopen-honpo" : "ぽこぺん本舗"
,"pokopii" : "ぽこぴー"
,"polorinken" : "ポロリン軒"
,"ponbikiya" : "ポン引き屋"
,"ponchees kari" : "ぽんちーず(仮)"
,"ponkotsu works" : "ぽんこつわーくす"
,"ponpalas" : "PONPALAS"
,"ponpharse" : "ぽんふぁーず"
,"ponpon haroharo" : "PonPon HaroHaro"
,"ponyori densetsu" : ["ポンヨリ伝説", "PONYORI LEGEND"]
,"ponytail soft" : "Ponytail Software"
,"poo and momodenbu" : "Poo&ももでんぶ"
,"popochichi" : "ぽぽちち"
,"pop-word" : "POP-WORD"
,"pornostar" : "ポルノ★スター"
,"potage" : "Potage"
,"potato house" : "Potato house"
,"power drug" : "POWER DRUG"
,"power gradation" : "パワーグラデイション"
,"power skill" : "POWER SKILL"
,"power slide" : "パワースライド"
,"powered" : "Powered"
,"powerful soft" : "ぱわふるソフト"
,"poyochinsen" : "ポヨちん線"
,"poyopacho" : "ぽよぱちょ"
,"pp.mu" : "パヤパヤ・マンボウでウッ！"
,"praline" : "プラリネ"
,"precious heart" : "Precious HEART"
,"precious..." : "Precious…"
,"prekano" : "プレカノ"
,"prelude" : "Prelude"
,"premium heart" : "プレミアムハート"
,"pretty clever" : "Pretty Clever"
,"pretty well" : "Pretty Well"
,"prettyclever" : "PrettyClever"
,"prettydolls" : "PRETTY DOLLS"
,"p-rhythm star" : "P-rythm☆Star"
,"prima" : "PRIMA"
,"primal gym" : "Primal Gym"
,"prime-f" : "Prime-F"
,"princess project" : "ぷりんせす☆ぷろじぇくと"
,"princess sugar" : "Princess Sugar"
,"prison" : "プリズン"
,"pritannia" : "ぷりたにあ"
,"private garden" : "プライベートガーデン"
,"production studio" : "PRODUCTION STUDIO"
,"project harakiri" : "PROJECTハラキリ"
,"project m" : "プロジェクトM"
,"project shiba" : "Project Shiba"
,"project valkyrie" : "PROJECT VALKYRIE"
,"projectgs" : "Project GS"
,"prometheus" : "Prometheus"
,"promised land" : "Promised land"
,"przm star" : "Przm Star"
,"psychiatric" : "PSYCHIATRIC"
,"psycho" : "PSYCHO"
,"psy-chs" : "Psy-chs"
,"psyco delicious" : "PSYCHO DELICIOUS"
,"psy-walken" : "Psy-Walken"
,"public bath" : "Public Bath"
,"puchi parfait" : "ぷちぱるふぇ"
,"puchi-ankh" : "ぷちあんく"
,"puchi-ya" : "ぷち屋"
,"pulin nabe" : "PULIN鍋"
,"pulltop" : "PULLTOP"
,"pulltop latte" : "PULLTOP LATTE"
,"pulse rifle" : "PULSE RIFLE"
,"pumpkin" : "パンプキン"
,"pumpkin software" : "ぱんぷきんソフト"
,"puni-douraku" : "ぷに道楽"
,"puniket junbikai" : "ぷにケット準備会"
,"puniman do" : "ぷにまん堂"
,"puppe house" : "puppe＊house"
,"puppukupu" : "ぷっぷくぷー"
,"pure milk" : "Pure☆Milk"
,"pure platinum" : "Pure Platinum"
,"pure-liquid" : "Pure-Liquid"
,"purimomo" : "ぷり桃"
,"purin yokochou" : "ぷりん横丁"
,"puriori-soft" : "ぶりおりソフト"
,"purple haze" : "PURPLE HAZE"
,"purple ribbon" : "パープルリボン"
,"purple sky" : "PURPLE SKY"
,"purple software" : "Purple software"
,"purple software delight" : "Purple software delight"
,"purplish" : "PURPLISH"
,"pururun estate" : "プルルンエステ"
,"pururun esthe" : "プルルンエステ"
,"pussy cat" : "Pussy-CAT"
,"pussy.cat seisaku iinkai" : "Pussy-CAT制作委員会"
,"puu no puupuupuu" : "ぷぅのぷぅぷぅぷぅ"
,"puzzle" : "ぱずる"
,"puzzle town" : "PUZZLE TOWN"
,"puzzlebox" : "PUZZLEBOX"
,"pwing works" : "PWING WORKS"
,"px-dan nihon shibu" : "PX団日本支部"
,"pyonpyororin" : "ぴょんぴょろりん"
,"pypyworks" : "PYPYworks"
,"pyramid house" : "ピラミッドハウス"
,"q doujin" : "QDOUJIN"
,"q-bit" : "Q-bit"
,"qoobrand" : "Qoo brand"
,"qp flapper" : "Q.P. FLAPPER"
,"qross" : "QRoss"
,"qruppo" : "Qruppo	"
,"quadrifoglio" : "Quadrifoglio"
,"quantum leap" : "QUANTUM LEAP"
,"quarter view" : ["Quarter View", "くぉーたーびゅー"]
,"quasar drive" : "クェーサードライブ"
,"que sera sera" : "Que sera sera"
,"queen soft" : "クイーンソフト"
,"question" : "Question"
,"questionbox" : "QUESTIONBOX"
,"quick kick lee" : "QUICK KICK LEE"
,"quince soft" : "QUINCE SOFT"
,"qune soft" : "きゅんソフト"
,"q-x" : "Q-X"
,"r.a.n.software" : "R.A.N Software"
,"r.o.c" : "R.O.C"
,"r1" : "r;1"
,"r10035" : "R10035"
,"r2" : "R2"
,"rabbit company" : "ラビット・カンパニー"
,"rabbits" : "らびっつ"
,"rabbits foot" : "ラビッツフット"
,"raccoon" : "ラクーン"
,"rack and pinion" : "RACK & PINION"
,"radiant" : "RADIANT"
,"radical dash" : "RADICAL DASH"
,"radical dream" : "Radical Dream"
,"raid slash" : "RAID SLASH"
,"raiden labo" : "らいでんらぼ"
,"raiden yashiki" : "雷電屋敷"
,"raijigen" : "雷次元"
,"raijinkai" : "雷神会"
,"rail-soft" : "raiL-soft"
,"rainbow cyc" : "RAINBOW CYC"
,"raindog" : "れいんどっぐ"
,"raisupan" : "らいすぱん"
,"rakuichimonji" : "楽一文字"
,"ram" : "RaM"
,"ramen rice" : ["らーめんらいす", "RAMENrice"]
,"ran no sono" : "蘭の園"
,"ranshi to kimi to." : "乱視と君と。"
,"rapapuru" : "らぱぷる"
,"raqdes" : "RAQDES"
,"rasa house" : "らさはうす"
,"rasen" : "RaSeN"
,"rask" : "RASK"
,"raspberry" : "らずべりー"
,"rat tail" : "RAT TAIL"
,"rateblack" : "Rateblack"
,"ray flood" : "Ray Flood"
,"ray-raw" : "玲瓏"
,"rbooks" : "浪漫書店"
,"reak" : "Reak"
,"recette" : "Recette"
,"red crown" : "RED CROWN"
,"red data book" : "RED DATA BOOK"
,"red dragon" : "RED DRAGON"
,"red label" : "Red Label"
,"red rebel" : "Red Rebel"
,"red ribbon revenger" : "RED RIBBON REVENGER"
,"red signal" : "れっどしぐなる"
,"red sox" : "RED SOX"
,"red spec" : "REDすぺっく"
,"redlight" : "REDLIGHT"
,"redrop" : "ReDrop"
,"red-rum" : "れっどらむ"
,"reds" : "Reds!"
,"red-zone" : "RED-ZONE"
,"regulus" : "Regulus"
,"rehabilitation" : "リハビリテーション"
,"rei no tokoro" : "例の所"
,"reien" : "黎en"
,"reimei kikaku" : "黎明企画"
,"reimeidou" : "黎明堂"
,"reirei kyou" : "泪泪教"
,"remain" : "Remain"
,"renai mangaka" : "恋愛漫画家"
,"rengaworks" : "Rengaworks"
,"renrakumou ami doujin section" : "連絡網AMI同人セクション"
,"renrendou" : "漣々堂"
,"reon" : "Reon"
,"retro" : "RETRO"
,"reverse" : "Re：verse"
,"reverse noise" : "Reverse Noise"
,"reverv." : "Reverv."
,"ribi dou" : "RIBI堂"
,"ribons nights" : "リボーンズナイツ"
,"ricecandy" : "RiceCandy"
,"rico-ba" : ["Rico-ba", "Pico-ba"]
,"ricotta" : "Ricotta"
,"riddle soft" : "Riddle Soft"
,"right away" : "Right Away"
,"right door" : "ライトドア―"
,"riki" : "RIKI"
,"rikondou" : ["RECONDO", "離魂道"]
,"riku no kotoutei" : "陸の孤島亭"
,"rikudoukan" : "六道館"
,"rinarina" : "RINARINA"
,"ring a bell" : "RING A BELL"
,"ringo no naru ki" : "林檎のなる木"
,"ringoya" : "リンゴヤ"
,"rinjuu circus" : "臨終サーカス"
,"rinne" : "鈴音"
,"rinrin" : "RINRIN"
,"rintoneko" : "りんとねこ"
,"rio grande" : "リオグランデ"
,"r-i-p" : "R・I・P"
,"rip at lip" : "Rip@Lip"
,"ripe" : "Ripe"
,"rippadou" : "立派堂"
,"riroland" : "RIROLAND"
,"ris" : "ri：s"
,"rkaffy" : "R*kaffy"
,"robazoku" : "ROBAZOKU"
,"rock man" : "ROCK☆MAN"
,"rocket kyoudai" : "ロケット兄弟"
,"rocket nenryou 21" : "ロケット燃料★21"
,"rockydou" : "ロッキー堂"
,"rodiura." : "ろぢうら。"
,"rokisonin koubou" : "ろきそにん工房"
,"rokumen roppi" : "ろくめん★ろっぴ"
,"roll" : "ロール"
,"rolling haiena" : "Rollingハイエナ"
,"rolling star" : "Rolling Star"
,"rolling zonbies" : "ローリングゾンビーズ"
,"romance no neko ookami musume" : "猫狼娘"
,"romancegray" : "ろまんすぐれい"
,"romantic sintai-kensa." : "ロマンティック身体検査"
,"ronno and kalus" : "RONNO&KALUS"
,"ronpaia" : "ろんぱいあ"
,"root" : "ROOT"
,"rootnuko" : "√nuko"
,"rorie-do" : "ろり絵堂"
,"rose crown" : "ローズクラウン"
,"rose tiara" : "ローズティアラ"
,"rose water" : "ROSE WATER"
,"rosebleu" : "Rosebleu"
,"roshutsuhime" : "ろしゅつひめ"
,"rotary engine" : "ろ～たり～Engine"
,"roubai-tei" : "狼狽亭"
,"route venus" : "ROUTE VENUS"
,"route1" : "ROUTE1"
,"royal bitch" : "ROYALBITCH"
,"royal crown" : "ROYAL CROWN"
,"rpg company 2" : "RPGカンパニー2"
,"r-spirits" : "R-SPIRITS"
,"rst slave" : "RST SLave"
,"rtd" : "RTD"
,"rubbish selecting squad" : "RUBBISH選別隊"
,"ruby fruit" : "RUBY FRUIT"
,"ruirui kikaku" : "ミネミネ企画"
,"ruki ruki exiss" : "るきるきEXISS"
,"ruku-pusyu" : "るくーぷしゅ"
,"rune" : "RUNE"
,"runners high" : "RUNNERS HIGH"
,"runrun soft" : "るんるんそふと"
,"runrunrun pch" : "RUNRUNRUN PCH."
,"rupinasu touzokudan" : "るぴなす盗賊団"
,"ruri ruri kikaku" : "瑠璃瑠璃企画"
,"ruruie" : "るるいえ"
,"rushe museum" : "Rushe Museum"
,"rusk" : "RusK"
,"russian blue" : "RUSSIAN BLUE"
,"ruu kikaku" : "龍企画"
,"r-works" : ["R-works", "Rothmans workstation"]
,"rycanthropy" : "RYCANTHROPY"
,"ryokan hanamura" : "旅館はなむら"
,"ryoushi ookami" : "量子オオカミ"
,"ryu-seki-do" : "流石堂"
,"ryuu no kinyoubi" : "龍の金曜日"
,"ryuukakusan nodoame" : "りゅうかくさんのどあめ"
,"ryuukisha" : "隆起社"
,"ryuurei tennyo" : "龍麗天女"
,"ryuutai rikigaku" : "流体力学"
,"s" : "S"
,"s.cry.dou" : ["S.cry.DOU", "スク頼堂"]
,"s.k." : "S.K."
,"s.m.l" : "S.M.L"
,"s.s.l" : "S.S.L"
,"s.s.o.s." : "S.S.O.S."
,"sabamisokan" : "さばみそ館"
,"sachi" : "さち"
,"sae" : "SAE"
,"sae honpo" : "SAE honpo"
,"saga planets" : "SAGA PLANETS"
,"sage" : "Sage サージュ"
,"sago-jou" : "沙悟荘"
,"saigado" : "彩画堂"
,"saihate no maria" : "最果てのマリア"
,"saihate-kukan" : "最果て空間"
,"saikyo gakuen" : "最強学園"
,"saikyou anaheim" : "蔡京アナハイム"
,"sailor q2" : "SAILOR Q2"
,"sairo publishing" : "SAIRO PUBLISHING"
,"saitouya" : "斉藤屋"
,"saiya gakuen" : "彩也学園"
,"sakaniya factory" : "さかにや工房"
,"sakida shoten" : "咲田書店"
,"sakigake 5121 anti tank party" : "魁！5121小隊"
,"saku saku tei" : "さくsaku亭"
,"sakura koubou" : "さくら工房"
,"sakura no tomoru hie" : "桜の灯る日へ"
,"sakura suishou" : "桜水晶"
,"sakuradou" : "桜堂"
,"sakurairo" : "SAKURAIRO"
,"sakuramochi" : "桜餅"
,"sakuraneko" : "さくらねこ"
,"sakurara and cherry" : "桜羅＆Cherry"
,"sakuraya" : "さくら屋"
,"sakusakusakuchan" : "さくさくさくちゃん"
,"sakuya17sai" : "咲耶17歳"
,"salvage kouboh" : "サルヴェージ工房"
,"samemaro party" : "サメマロ党"
,"samidaregiri" : "五月雨斬り"
,"samoyed smile" : "SAMOYED SMILE"
,"samurai" : "侍"
,"samurai ninja greentea" : "サムライ忍者GREEN TEA"
,"san se fang" : "三色坊"
,"sanazura doujinshi hakkoujo" : "さなづら同人誌発行所"
,"sanbaizu" : "三杯酢"
,"sandglass" : "Sandglass"
,"sangatsu no lion" : "三月のライオン"
,"sangenshokudou" : "三原色堂"
,"sangetsushi" : "山月誌"
,"sankaku apron" : "さんかくエプロン"
,"sanketsushuu" : "酸欠集"
,"sankyaku rasen" : "三脚ラセン"
,"sanryuu club" : "三流倶楽部"
,"sanso dousotaisha" : "酸素同素体舎"
,"sansuisha" : "散水社"
,"saomako" : "さおまこ"
,"sarang" : "SARANG"
,"sarpaccio" : "サルパッチョ"
,"sarurururu" : "サルルルル"
,"sasaduka" : "砂々塚"
,"sasaki muu shouten" : "佐々木無宇商店"
,"sasha forest" : "サーシア・フォレスト"
,"sashichigai-dan" : "挿し違い団"
,"sashimi choco" : "さしみチョコ"
,"sasuga shoukai" : "流石商会"
,"satellites" : "Satellites"
,"sator" : "SATOR"
,"satsukidoh" : "サツキ堂"
,"sawayaka tokunou milk" : "爽やか特濃みるく"
,"saz" : "SAZ"
,"sazameki dori" : "さざめき通り"
,"schwester" : "しゅべすた"
,"scoop" : "ScooP"
,"score" : "SCORE"
,"scramble egg" : "SCRAMBLE EGG"
,"scramble house" : "ScrambleHOUSE"
,"sdf" : "SDF"
,"se bone" : "背・骨"
,"seacoxx" : "SEACOXX"
,"seafox" : "SeaFox"
,"search and destroy" : "search&destroy"
,"search-light" : "サーチライト"
,"sec brand" : "SEC brand"
,"second cry" : "SECOND CRY"
,"secreder" : "SECREDER"
,"secret service" : "シークレット★サービス"
,"secret society m" : "秘密結社M"
,"section-11" : "SECTION-11"
,"seika kairaku shoten" : "聖華快楽書店"
,"seinansei ni kagayakeru hoshi" : "西南西ニ輝ケル星"
,"seishimentai" : "せいしめんたい"
,"seitokaishitsu" : "生徒会室"
,"sekai kakumei club" : "世界革命倶楽部"
,"sekai no hate" : "世界のHATE"
,"seki sabato" : "関サバト"
,"sekirara" : "せ・き・ら・ら"
,"sekitou" : "赤橙"
,"selen" : "Selen"
,"semakute kurai" : "狭くて暗い"
,"semedain g" : "セメダインG"
,"senbon knock zadankai" : "千本ノック座談会"
,"sendan" : "仙弾"
,"sendouya" : "千堂屋"
,"seniman kartun" : "セニマンカルタン"
,"senjintei" : "仙人亭"
,"senpenbankashiki" : "千変万化式"
,"sentimental kangaroo" : "センチメンタルカンガルー"
,"senya sabou" : "千夜茶房"
,"senzankou" : "穿山甲"
,"sepia" : "SEPIA"
,"sequence" : "し～くえんす"
,"serene" : "Serene"
,"service heaven" : "サービスヘブン"
,"setagaya kingyo" : "せたがや金魚"
,"setoran" : "せとらん"
,"seven wonder" : "SEVEN WONDER"
,"seventh door" : "Seventh Door"
,"seventh garden" : "SEVENTH GARDEN"
,"seventh heaven" : "SEVENTH HEAVEN"
,"seventh heaven maxion" : "セブンスヘブンMAXION"
,"sexpistols" : "SEX PISTOLS"
,"sexual khorosho" : "セクシャルハラショー"
,"s-force" : "S-FORCE"
,"shadows" : "Shadows"
,"shagwell" : "SHAGWELL"
,"shallot coco" : "シャルロット・ココ"
,"shanghai honey bee" : "上海蜜蜂"
,"shangrila" : "しゃんぐりら"
,"shape shifter" : "Shape Shifter"
,"sharp define" : "#define"
,"shd" : "SHD"
,"sheepfold" : "羊小屋"
,"sherbet soft" : "SherbetSoft"
,"shiawase kanmiryou" : "しあわせ甘味料"
,"shiawase kyouwakoku" : "幸せ共和国"
,"shiawase manjuu" : "しあわせまんじゅう"
,"shibarism" : "SIBARISM"
,"shibasoft" : "しばそふと"
,"shichiten battou" : "シチテンバットウ"
,"shichiyou souryuujin" : "七曜蒼龍陣"
,"shidendou" : "紫電堂"
,"shigunyan" : "しぐにゃん"
,"shigureya" : "時雨屋"
,"shiitake" : "椎茸"
,"shiitake nouen" : "しいたけ農園"
,"shikaper" : "シカパー"
,"shikishima guntool" : "敷島贋具"
,"shikitenshi" : "色天使"
,"shikkokuno j.p.s." : ["漆黒のJ.P.S.", "J.P.S. OF BLACK BEAUTY"]
,"shiko neru mix" : "しこ寝るミックス"
,"shimahokke" : "しまほっけ"
,"shimajiya" : "しまじや"
,"shimanto ryouri gakkou" : "四万十料理学校"
,"shimanto seiryuu" : "四万十清流"
,"shimapan" : ["しまぱん", "SHIMAPAN"]
,"shimekiri sanpunmae" : "〆切3分前"
,"shimoboard" : ["SHIMOBOARD", "シモボード"]
,"shimoyakedou" : "しもやけ堂"
,"shin hijiridou honpo" : "真・聖堂☆本舗"
,"shin nanka tou" : "新なんか党"
,"shin shouryuu-ken" : "真昇竜軒"
,"shin tsuguru taisaku honbu" : ["シンツグル対策本部", "シンツグル対策委員会"]
,"shinanoya" : "信濃屋"
,"shinba oolong cha" : "神葉烏龍茶"
,"shin-chan" : "Shin-Chan"
,"shinchintaisha company" : "新陳代謝COMPANY"
,"shinenkan" : "新炎館"
,"shining" : "SHINING"
,"shinjugai" : "真珠貝"
,"shinnihon pepsitou" : "新日本ペプシ党"
,"shinobi no yakata" : "忍ノ館"
,"shinohara heavy industry" : ["篠原重工", "SHINOHARA HEAVY INDUSTRY"]
,"shinpakusu teika" : "Shinpacsu Teika"
,"shinrin ryokuju" : "森林緑樹"
,"shinsei lolishota" : "新生ロリショタ"
,"shiokonbu project" : "塩こんぶプロジェクト"
,"shioya" : "塩屋"
,"shirando" : ["SHIRANDO", "熾鸞堂"]
,"shiratama" : "しらたま"
,"shiritsu sakuranbo shougakkou" : "私立さくらんぼ小学校"
,"shiroganeya" : ["白銀屋", "しろがね屋"]
,"shiroi pantsu" : "しろいぱんつ"
,"shirokuma dango" : "しろくまだんご"
,"shironegiya" : "白ネギ屋"
,"shirukke no ooi zakuro" : "汁っけの多い柘榴"
,"shiruzaru" : "汁・ザル"
,"shis laboratory" : "SHi's Laboratory"
,"shishamo house" : "ししゃもハウス"
,"shishunki" : "思春棄"
,"shisshin chuudoku" : "失神中毒"
,"shitsuren restaurant for men" : "失恋レストラン for MEN"
,"shitsuren restaurant omu" : "失恋レストラン オム"
,"shitteiruka" : "知っているか！"
,"shitteiruka x" : "知っているか！X"
,"shoot the moon" : "シュート ザ ムーン"
,"shootouts" : "ShootOuts"
,"shoryutei" : "昇竜亭"
,"shota mangaya-san" : ["ショタ漫画屋さん", "アオクロ(AOQLO)"]
,"shotaian" : "所帯庵"
,"shouchuu mac" : "焼酎MAC"
,"shoujo gesshoku" : "少女月蝕"
,"shoujo heisa kuukan" : "少女閉鎖空間"
,"shoujo hyouhon" : "少女標本"
,"shoujo kishidan" : "少女騎士団"
,"shoujo kousaku" : "少女交錯"
,"shounen byoukan" : "少年病監"
,"shounen x shoujo" : ["Syounen×Syoujo", "少年×少女"]
,"shounen yuuichirou" : "少年ゆういちろう"
,"shounen zoom" : "少年ズーム"
,"showa saishuu sensen" : "昭和最終戦戦"
,"shungabu" : "春画部"
,"shuraba keikaku" : "修羅場計画"
,"shyness over drive" : "SHYNESS OVER DRIVE"
,"sibakarigumi" : "芝刈組"
,"sick boys" : "Sick Boys"
,"side effects" : "SIDE EFFECTS"
,"siesta" : "SIESTA"
,"sigma-arts" : "Σ-Arts"
,"sign" : "Sign"
,"silhouette" : "Silhouette"
,"silica gel" : "シリカゲル"
,"silkys" : "シルキーズ"
,"silkys connect" : "しるきーずこねくと"
,"silkys plus" : "シルキーズプラス"
,"silkys plus wasabi" : "シルキーズプラス WASABI"
,"silkys sakura" : "シルキーズSAKURA"
,"silmaril" : "しるまりる"
,"silver bullet" : "Silver Bullet"
,"silver bullet automatic" : "Silver Bullet Automatic"
,"silver dog" : "シルバードッグ"
,"silver stone" : "Silver Stone"
,"simasima system" : "しましましすてむ"
,"simian expansion" : "SIMIAN EXPANSION"
,"simple house" : "SIMPLE HOUSE"
,"sincere" : "Sincere"
,"singing-dog" : "Singing-DOG"
,"singleton" : "Singleton"
,"sion" : ["SION Graphic Works", "紫音-SION-"]
,"sirius soft" : "Sirius"
,"sisaku" : "SISAKU"
,"sister soft" : "しすたーそふと"
,"situation laboratory" : "シチュラボ"
,"six alchemy" : "Six Alchemy"
,"six shot" : "SixShot"
,"skirt tsuki" : "スカートつき"
,"skirthike" : "すかーとはいく"
,"skk" : "SKK"
,"sky high" : "Sky-High feat.戯画"
,"sky lounge garden" : "Sky Lounge Garden"
,"sky rocket" : "スカイロケット"
,"skyfish" : "SkyFish"
,"skyfish poco" : "SkyFish poco"
,"skysphere" : "Skysphere"
,"slave" : "SLAVE"
,"slavenir gamma" : "スレイブニールγ"
,"sledgehammerout" : "SledgehammerOut!"
,"sleepwatch.ex" : "寝ヲチEX"
,"slime inn" : ["スライム亭", "SLIME INN", "スライム村"]
,"slime kikaku" : "スライム企画"
,"slump life" : "すらんぷらいふ"
,"slw" : "SLW"
,"smash box" : "smash BOX"
,"smee" : "SMEE"
,"smile" : "スミレ"
,"snack factory" : "スナック・ファクトリー"
,"sniff dogs" : "Sniff Dogs"
,"snow child" : "Snow Child"
,"soba udon" : "そばうどん"
,"socha-ya" : "そちゃ屋"
,"sodomutogomora" : "ソドムトゴモラ"
,"soft circle courreges" : "ソフトさ～くるクレージュ"
,"softhouse chara" : "ソフトハウスキャラ"
,"softhouse dew" : "ソフトハウスDew"
,"softhouse parsley" : "ソフトウェアハウスぱせり"
,"softhouse-seal grandee" : "softhouse-seal GRANDEE"
,"software circle mercure" : "Software circle Mercure"
,"sogna" : "SOGNA"
,"soldier frog" : "SOLDIER FROG"
,"soleil" : "Soleil"
,"solex" : "SOLEX"
,"solo play" : "そろぷれい"
,"so-matou" : "そーま党"
,"song of groove bird" : "Song of Groove Bird"
,"sonic winter" : "SONIC WINTER"
,"sonohigurashi" : "そのひぐらし"
,"sorahane" : "SORAHANE"
,"sorairo march" : "空色まーち"
,"sorairono." : "宇宙色の。"
,"soratobu mighty python" : "空飛ぶマイティ・パイソン"
,"soreya" : "其レ屋"
,"sorya annmarida" : "そりゃあんまりだ"
,"sotikoti" : "ソチコチ"
,"soubi kenkyuujo" : "創美研究所"
,"souffle soft" : "すふれそふと"
,"sougetsutei" : "双月亭"
,"soul company" : "SOUL COMPANY"
,"soul magic" : "そうるまぢっく"
,"sound sticker" : "サウンドステッカー"
,"souzai soft" : "そうざいそふと"
,"soy-darake" : "SOYだらけ"
,"space color" : "SPACE COLOR"
,"special antlers" : "SPECIAL ANTLERS"
,"spec-r" : "Spec-R"
,"speed" : "SPEED"
,"speed down zaidan" : "スピードダウン財団"
,"spermaniax" : "スペルマニアックス"
,"spermation" : "スペルメーション"
,"sphere" : "Sphere"
,"spicy daisakusen" : "スパイシー大作戦"
,"spinergy" : "SPINERGY"
,"spiral" : "すぱいらる"
,"spiral brain" : "SPIRAL BRAIN"
,"spirit speak" : "Spirit Speak"
,"spiritguide" : "SpiritGuide"
,"splash" : "SPLASH"
,"s-plus" : "S-Plus"
,"sponge empire" : "すぽんじ帝国"
,"spread-pink" : "Spread-Pink"
,"sprechchor" : "シュプレヒコール"
,"spt" : "SPT"
,"sputnik" : "Sputnik"
,"squadra d" : "SQUADRA D"
,"squeez" : "SQUEEZ"
,"squeez sweet" : "SQUEEZ sweet"
,"squeeze all" : "SqueezeALL"
,"squeeze candy heaven" : "SqueezeCandyHeaven"
,"s-room" : "S-Room"
,"s-rs" : "S-RS"
,"ss109" : "SS109"
,"ssb" : "SSB"
,"ss-brain" : "SS-BRAIN"
,"ssd" : "SSD"
,"st ruger power" : "St RUGER POWER"
,"st. armadel ch." : "聖アルマデル教会"
,"st. different" : ["DIFFERENT", "ST.DIFFERENT"]
,"st. rio" : "聖リオ"
,"staccato squirrel" : "Staccato・Squirrel"
,"stadio hose" : "STADIO HOSE"
,"staffing" : "スタッフィング"
,"standard azarashi" : "スタンダードアザラシ"
,"stapspats" : "Stapspats"
,"star genom" : "STAR☆GENOM"
,"stargazer" : "STARGAZER"
,"starworks" : "STARWORKS"
,"status doku" : "ステータスどく"
,"steed enterprise" : "Steed Enterprise"
,"steel mayonnaise" : "鋼のマヨネーズ"
,"stellar" : "Stellar"
,"steroider" : "Steroider"
,"stratos" : "ストラトス"
,"strawberry kick" : "ストロベリーキック"
,"stray rabbit" : "すとれいらびっと"
,"straymoon" : "StrayMoon"
,"strega" : "STREGA"
,"strike three" : "ストライク・スリー"
,"strikes" : "STRIKES"
,"sts" : "STS"
,"studio 3.14" : "Studio 3.14"
,"studio a" : "studio A"
,"studio ajinrui" : "STUDIO亜人類"
,"studio anmitsu-tei" : "すたじお あんみつ亭"
,"studio anteros" : "スタジオ・アンテロス"
,"studio aqa" : "studioAQA"
,"studio araluma" : "STUDIO ARALUMA"
,"studio artroom" : "STUDIO★ART ROOM"
,"studio aruta" : "Studio Aruta"
,"studio beast" : "Studio Beast"
,"studio big-x" : "スタジオBIG-X"
,"studio black cats" : "STUDIO BLACK CATS"
,"studio boxer" : "STUDIO BOXER"
,"studio b-room" : "STUDiO B-ROOM"
,"studio charen" : "すたじおちゃれん"
,"studio ciao" : "すたじおちゃお"
,"studio c-take" : ["studio C-TAKE", "DARK STARS", "BLACk STAR"]
,"studio e.go" : "Studio e.go!"
,"studio fatality" : "STUDiO FATALITY"
,"studio gomasenbe" : "すたじおごませんべ"
,"studio hamachigumi" : "STUDIOはまち組"
,"studio hammer rock" : "STUDIO HAMMER ROCK"
,"studio hatake" : "スタジオ畑"
,"studio hilite" : "studioハイライト"
,"studio himawari" : "スタジオ☆ひまわり"
,"studio himitsu kichi" : "スタジオ秘密基地"
,"studio honeyblade" : "STUDIO HONEYBLADE"
,"studio huan" : ["STUDIOふあん", "STUDIO HUAN"]
,"studio implant" : "Studio Implant"
,"studio insane" : "Studio Insane"
,"studio jam" : "STUDIO JAM"
,"studio jaren" : "Studio 邪恋"
,"studio jikkenshitsu" : "すたじお実験室"
,"studio jon" : "STUDIO JON"
,"studio kame" : "スタジオカメ"
,"studio katsudon" : "スタジオかつ丼"
,"studio kimigabuchi" : "スタジオKIMIGABUCHI"
,"studio koron" : "スタジオころん"
,"studio kouroumu" : "STUDIO紅狼夢"
,"studio kyawn" : "スタジオきゃうん"
,"studio loud in school" : "studio LOUD in SCHOOL"
,"studio mebius" : "Studio Mebius"
,"studio miki shinsha" : "StudioMIKI新社"
,"studio miris" : "すたじおみりす"
,"studio miris pellet" : "すたじおみりす ペレット"
,"studio mizuyokan" : ["スタジオみずよーかん", "MIZUYOKAN BRAND"]
,"studio momiji" : "すたじおもみじ"
,"studio momoka" : "スタジオ桃華"
,"studio mukon" : "Studio MUKON"
,"studio n.ball" : "スタジオN.BALL"
,"studio nama" : "スタジオ生"
,"studio neko punch" : "STUDIOねこぱんち"
,"studio neo black" : "studio NEO BLACK"
,"studio nikuman" : "スタジオにくまん"
,"studio nishi tokyo" : "studio西東京"
,"studio oguma" : "すたじおおぐま"
,"studio orca" : "studioオルカ"
,"studio pakira" : "Studio PAKIRA"
,"studio pal" : "STUDIO PAL"
,"studio parfe" : "すたじお・ぱふぇ"
,"studio parm" : "studio Parm"
,"studio pastel" : "STUDIO PASTEL"
,"studio pudding princess" : "STUDIOぷりんプリンセス"
,"studio q" : "すたじおQ"
,"studio r" : "STUDIO R"
,"studio rakkyou" : "スタジオらっきょう"
,"studio rakugaki shachuu" : "スタジオ落柿舎中"
,"studio retake" : "STUDIO RETAKE"
,"studio room" : "STUDIO ROOM"
,"studio runaway wolf" : "studio RUNAWAY WOLF"
,"studio ryokucha" : "すたじお緑茶"
,"studio saults-walt" : "スタジオ・ザルツウェルツ"
,"studio scan" : "STUDIO SCAN"
,"studio sharaku" : "STUDIO SHARAKU"
,"studio shilph" : "STUDIO SHILPH"
,"studio sitomi" : "STUDIO-SITOMI"
,"studio skb" : "STUDIO SKB"
,"studio t.r.c." : "STUDIO T.R.C."
,"studio tapa tapa" : "すたじお☆たぱたぱ"
,"studio tar" : ["スタジオた～", "STUDIO TAR"]
,"studio tiamat" : "STUDIO TIAMAT"
,"studio triumph" : "STUDIO TRIUMPH"
,"studio ubai" : "スタジオ奪"
,"studio unbalance" : "すたぢお・あんばらんす"
,"studio vanguard" : "STUDIO VANGUARD"
,"studio wallaby" : "スタジオワラビー"
,"studio z-agnam" : "スタジオZ-AGNAM"
,"studio zuburi" : "スタジオ ズブリ"
,"studio-ash" : "Studio-Ash"
,"studio-sakura" : "Studio Sakura"
,"style-c3" : "Style-C3"
,"subsonic factor" : "SUBSONIC FACTOR"
,"succubus" : "SUCCUBUS"
,"sueya" : "末屋"
,"sugar beans" : "シュガービーンズ"
,"sugar berry syrup" : "Sugar*Berry*Syrup"
,"sugar house" : "シュガーハウス"
,"sugar pot" : "Sugar pot"
,"sugar soul drive" : "SugarSoulDrive"
,"sugar star" : "Sugar star"
,"sugarcake" : "砂糖ケーキ"
,"sugarspot" : "SUGAR(S)POT"
,"suginami mougyuu kai" : "杉並猛牛会"
,"sugitakaya" : "杉崇屋"
,"sugiura-ke" : "杉浦家"
,"sugiura-ya" : "杉浦家"
,"sugiya" : "杉屋"
,"suika dokei" : "すいか時計"
,"suirankaku" : "翠蘭郭"
,"suiren" : "翠憐"
,"suitekiya" : "水滴屋"
,"sukapon-do" : "スカポン堂"
,"sukaradog" : "SUKARADOG"
,"sukiiro sekai" : "スキイロセカイ"
,"sumechiru" : "スメチル"
,"sumi kara sumi made" : "スミカラスミマデ"
,"sumicco." : "すみっこ。"
,"sumikko soft" : "すみっこソフト"
,"sumire club" : "スミレ倶楽部"
,"sumisumi dou" : "スミスミ堂"
,"sumomo" : "すもも"
,"sumomo dou" : "すもも堂"
,"sune girochin" : "すねぎろちん"
,"sunkist orange" : "サンキスト・オレンジ"
,"sunset dreamer" : "Sunset Dreamer"
,"supe" : "すぺ"
,"super flat lolinitron" : "超平板小娘電視台"
,"super soul" : "SUPER SOUL"
,"surf" : "Surf"
,"surumeya" : "するめ屋"
,"survive" : "Survive"
,"sutekiplan" : "ステキプラン"
,"suzuki giken" : "鈴木技研"
,"suzukure" : "涼暮"
,"suzunaridou" : "鈴鳴堂"
,"suzune rai chikashitsu" : "鈴根らい地下室"
,"suzuya" : "涼屋"
,"swan" : "スワン"
,"swan mania" : "スワンマニア"
,"swaneye" : "スワンアイ"
,"swaneye plus" : "スワンアイ+"
,"swat" : "SWAT"
,"sweet" : "Sweet"
,"sweet and tea" : "SWEET&TEA"
,"sweet basil" : "スィートバジル"
,"sweet brier" : "Sweet Brier"
,"sweet candle" : "SweetCandle"
,"sweet heart" : "SweetHEART"
,"sweet light" : "Sweet light"
,"sweet pea" : "Sweet Pea"
,"sweet sage" : "SweetSage"
,"sweet sugar" : "Sweet Sugar"
,"sweet taste" : "Sweet Taste"
,"sweetcotton" : "Sweetcotton"
,"sweethearts" : "SweetHEART"
,"sweetlight" : "Sweetlight"
,"sweetpain" : "Sweetpain"
,"sweettaboo" : "SWEET TABOO"
,"syakunage" : "しゃくなげ"
,"syangrila" : "しゃんぐりら"
,"symphony" : "Symphony"
,"synthetic garden" : "Synthetic Garden"
,"syokusyusentai" : "Syokusyusentai"
,"syrup -honey sweet-" : "SYRUP -Honey Sweet-"
,"system gzzy" : "SYSTEM GZZY"
,"syunichi kansuu" : "しゅにち関数"
,"syunkan saidaihusoku" : "瞬間最大風速"
,"t.4.p" : "T.4.P"
,"t.cop" : "T.cop"
,"t2 art works" : "T2 Art Works"
,"t2 unit" : "T2UNIT"
,"t2000" : "T2000"
,"tabito" : "サークル旅人"
,"tabitoya" : "旅人屋"
,"tablet" : "Tablet"
,"tachibanakan" : "TACHIBANAKAN"
,"tachikawa software" : "たちかわソフトウェア"
,"tachimukau" : "タチムカウ"
,"tachineko miya" : "タチネコ宮"
,"tactics" : "Tactics"
,"tadakage-dou" : "Tadakage-dou"
,"taikan kyohougumi" : "大艦巨砲組"
,"tail" : "Tail"
,"tail of nearly" : ["tail of nearly", "てーるおぶにやりー"]
,"tail skid" : "TAIL SKID"
,"tail up" : "TAIL UP!"
,"tail wind" : "TAIL WIND"
,"tairikudoumeigun" : "大陸同盟軍"
,"taisaisoft" : "Taisaisoft"
,"taishikan" : "大志館"
,"taishita shoten" : "太下書店"
,"taiyaki yaketa" : "たいやきやけた"
,"takadoya-tei" : "たかどや亭"
,"takakuya" : ["TAKAKUya", "高久屋"]
,"takanaedoko" : "高苗床"
,"takane no hanazono" : "たかねの花園"
,"takara no suzunari" : ["たからのすずなり", "TAKARANO SUZUNARI"]
,"takarabune" : "宝船"
,"takaradamashii" : "宝魂"
,"takatobiya" : ["高飛屋", "タカトビヤ"]
,"takatsuki koujou" : "高槻工場"
,"takayashiki kaihatsu" : "高屋敷開発"
,"take out" : "Take Out"
,"takeda syouten" : "武田商店"
,"takemasaya" : "たけまさ屋"
,"takeout" : "テイクアウト"
,"takeya" : "たけ屋"
,"takimoto doujou" : "滝本道場"
,"takitate" : ["炊きたて", "TAKITATE"]
,"takotsubo club" : "たこつぼ倶楽部"
,"takotsuboya" : "蛸壺屋"
,"takoyaki-batake" : "たこ焼き畑"
,"takumi na muchi" : ["たくみなむち", "たくみな無知"]
,"takumiya" : "TAKUMIYA"
,"takurowo-dou" : "タクロヲ堂"
,"talisman" : "Talisman"
,"tama center" : "たまセンター"
,"tamagou" : "多摩豪"
,"tamakakeya" : "たまかけ屋"
,"tamakiya" : "環屋"
,"tamamo soft" : "玉藻ソフト"
,"tamamo studio" : "玉藻スタジオ"
,"tamaranchi" : "たまらんち"
,"tamashii max" : "魂MAX"
,"tamashiro" : "たましろ"
,"tama-soft" : "たまソフト"
,"tamatamasanmyaku" : "たまたま山脈"
,"tanabata milky way" : "タナバタミルキーウェイ"
,"tange kentou club" : "丹下拳闘倶楽部"
,"tanishi flavor" : "タニシフレーバー"
,"tanmatsu ijou" : "端末異常"
,"tanuki no rakugaki" : "たぬきの落書き"
,"tanuki soft" : "たぬきそふと"
,"tanuking sleep" : "たぬきんぐすりーぷ"
,"tarako koubou" : "たらこ工房"
,"tarots" : "TAROTS"
,"tartarosauce of the hell" : "地獄のタルタロソース"
,"tarte" : "Tarte"
,"tarutaru-ke" : "たるたる家"
,"tasomorera" : "たそもれら"
,"ta-ta-s labo" : "TA-TA-S LABO"
,"tatesima." : "タテシマ。"
,"tatteinu koubou" : "たってぃぬ工房"
,"tawarishichi" : "たわり しち"
,"team fraternity" : "Team FRATERNITY"
,"team ibm" : "Team IBM"
,"team its mint" : "team IT’S みんと"
,"team kihara" : "チームキハラ"
,"team phoenix" : "TEAMフェニックス"
,"team popup" : "チーム・ポップアップ"
,"team sazandora" : "チームサザンドラ"
,"team shuffle" : "TEAM SHUFFLE"
,"team tanabe" : "田辺組"
,"tear drop" : "TEAR DROP"
,"tecchitecchi" : "テッチテッチ"
,"tech-ken" : "TECH-KEN"
,"teikiatu de ikou" : "低気圧で行こう"
,"teikoku onanies" : "帝国オナニーズ"
,"teikuu ms combo" : "低空MSコンボ"
,"teishibou new" : "低脂肪乳"
,"tekireiki ni shokuchuudoku" : "適齢期に食中毒"
,"telomerena" : "テロメアナ"
,"temparing" : "テンパりんぐ"
,"tempest" : "Tempest"
,"tenchuugumi" : "天誅組"
,"tengallon" : "てんがろん"
,"tengu no tsuzura" : "天狗のつづら"
,"tenjikuya" : "天軸屋"
,"tenkaichi babys" : "天下一ベイビーズ"
,"tenkirin" : "天気輪"
,"tenko" : "天狐"
,"tennen yuuwaku princess" : "天然誘惑プリンセス"
,"tennenseki" : "天然石"
,"tenny le tai" : "テニーレ隊"
,"tenraiga" : "天雷芽"
,"tensen koubou" : "天仙工房"
,"tentacle games" : "Tentacle Games"
,"tentai-kansoku" : "テンタイ→カンソク"
,"tentendou" : "てんてん堂"
,"tenzan koubou" : "天山工房"
,"tenziku opera company" : "TENZIKU OPERA COMPANY"
,"terios" : "Terios"
,"teriyaki nikuman" : "てりやきにくまん"
,"terra drive" : "TERRA DRIVE"
,"teruo haruo" : "てるおはるお"
,"teruterugirl" : "てるてるがーる"
,"testa kitchen" : "てすた厨房"
,"tetratech" : "TETRATECH"
,"tetrodotoxin" : "TETRODOTOXIN"
,"tetsu no otoshigo" : "てつのおとしご"
,"tetsunari doujou" : "鉄成道場"
,"teufelwald" : "Teufelwald"
,"tex-mex" : "TEX-MEX"
,"tga" : "TGA"
,"the dungeon in yarn" : "The Dungeon In Yarn"
,"the flyers" : "THE FLYERS"
,"the fools house" : "THE FOOLS HOUSE"
,"the knight of the pants" : "パンツ騎士団"
,"the latest engine" : "The Latest Engine"
,"the nation of head scissors" : "The Nation of Head  Scissores"
,"the saturn" : "THE SATURN"
,"the world" : "The World"
,"third brand" : "THIRD BRAND"
,"thirty saver street 2d shooting" : "サーティセイバーストリート 2dシューティング"
,"thornapple" : "Thornapple"
,"thultwul" : "トュルトュル"
,"tiare" : "TIARE"
,"tiba-santi" : "千葉産地"
,"ties" : "TIES"
,"tigerman project" : "タイガーマンプロジェクト"
,"tigers eye" : "Tiger's eye"
,"tigre soft" : "てぃ～ぐる"
,"times square" : "TIMES SQUARE"
,"timest" : "TIMEST"
,"timtim machine" : "TIMTIMマシン"
,"tinker bell" : ["Tinker Bell", "ティンカーベル"]
,"tinkerbell" : "TinkerBell"
,"tinkle position" : "Tinkle Position"
,"tiny bell" : "Tiny Bell"
,"tiny feather" : "Tiny Feather"
,"tiramisu tart" : "てぃらみすたると"
,"titancolor brand" : ["チタンカラー ブランド", "TITANCOLOR BRAND"]
,"titokara 2nd branch" : "千歳烏山第2出張所"
,"tk-bros" : "TK-BROS"
,"tnk" : "TNK"
,"t-north" : "T-NORTH"
,"todd special" : "トッドスペシャル"
,"tohonifun" : "徒歩二分"
,"tohosanhun" : "徒歩三分"
,"tokage 3gou" : "とかげ3号"
,"tokai oohashi" : "東海大橋(仮)"
,"tokimigumi" : "時美組"
,"tokino sakura" : "トキノサクラ"
,"tokinochaya" : "時乃茶屋"
,"tokki mono" : "サークル突起物"
,"tokkibutsu gerotan" : "とっきぶつげろたん"
,"tokohana" : "とこはな"
,"tokoroten" : "ところてん"
,"toko-ya" : "床子屋"
,"tokuda" : "とくだ"
,"tokyo glider" : "東京グライダー"
,"tokyo tomodachi kouen" : "東京友達公園"
,"tololinco" : "とろりんこ"
,"toluene ittokan" : "トルエン一斗缶"
,"tom tom" : "トムトム"
,"tomahawk" : "とまほーく"
,"tomato" : "TOMATO"
,"tomato kanzume" : "TOMATO缶詰"
,"tomatta tokei" : "とまった時計"
,"tomikadou" : "tomika堂"
,"tomoshibiya koubou" : "灯夜工房"
,"tone works" : "tone work's"
,"tonkatsu" : "サークル・とんかつ"
,"tonpuuratei" : "とんぷぅら亭"
,"top" : "TOP"
,"topgun" : "TOP GUN"
,"tora machine" : "虎マシーン"
,"toraisix" : "とらいしっくす"
,"toraya" : "トラ屋"
,"tori no ya" : "鳥の屋"
,"toriaezu kari" : "とりあえず(仮)"
,"torihamu holic" : "とりはむほりっく"
,"torii-za" : "鳥居座"
,"toriten software studio." : "Toriten Software Studio."
,"toruneko chaya" : "獲る猫茶屋"
,"toto max" : "totoMAX"
,"totomi ya" : "totomi屋"
,"totoya" : "兎々屋。"
,"totsugeki wolf" : ["突撃ウルフ", "おしおきウルフで突撃タッチ"]
,"touchable" : "TOUCHABLE"
,"toufuya" : "とーふ屋"
,"tougall kai" : "東ガル会"
,"tougechaya" : "峠茶屋"
,"tougenkyo" : "桃源郷"
,"tougesakuraya" : "峠桜屋"
,"tougeya honpo" : "峠屋本舗"
,"toukyou shinbunsha" : "倒狂新聞社"
,"toumei kousoku" : "透明光速"
,"toumei tsuushin" : "透明通信"
,"tounantou" : "東＊南＊東"
,"tousoushin" : "TOUSOUSHIN"
,"touyoko surfrider" : "東横サーフライダー"
,"touzoku tachi no rakuda no mure" : "盗賊達の駱駝の群"
,"toyatei" : "とやてい"
,"toybox" : "といぼっくす"
,"tozan bu" : "TOZAN・BU"
,"t-press" : "T-press"
,"trabulance" : "Trabulance"
,"tracklisko" : "とらつくりすこ"
,"trancesoft" : "TranceSoft"
,"trans" : "Trans"
,"transistor baby" : "トランジスタベイビィ"
,"trap" : "TRAP"
,"triad" : "TRIAD"
,"triangle" : "Triangle"
,"tribo" : "TRIBO"
,"trick a" : "Trick A'"
,"tridisaster" : "Tridisaster"
,"tri-moon" : "TRI-MOON"
,"trinity kyoudan" : "トリニティ教団"
,"trip dancer" : "TRIP DANCER"
,"triple joker" : "トリプルジョーカー"
,"triple n" : "TriPLE“n”"
,"trumple" : "TRUMPLE"
,"tryset" : "TRYSET"
,"tryset break" : "TRYSET Break"
,"tryset mad" : "TRYSET MAD"
,"tsf no f" : "TSFのF"
,"tsk" : ["TSK", "天使館"]
,"tsubuan doumei" : "TSUBUANDOUMEI"
,"tsuchineko" : "つちねこ"
,"tsuchinoko kyoukai" : "ツチノコ協会"
,"tsuji andon" : "辻行灯"
,"tsujimo ga machi ni yattekita" : "つじもが町に殺ってきた!!!"
,"tsukasa" : "TSUKASA"
,"tsuki no ryodan" : "月の旅団"
,"tsukuten" : "つくてん"
,"tsunken" : "ツン研"
,"tsurikichi doumei" : "釣りキチ同盟"
,"tsurukawa ryozanpaku" : "鶴川梁山泊"
,"tsurukiya" : "鶴喜屋"
,"tsurumiku" : "つるみく"
,"tsurupeta punch" : "つるぺたぱんち"
,"tsutsumorien" : "筒森園"
,"ttt" : "TTT"
,"tubasa" : "翼"
,"tukamori club" : "TUKAMORI CLUB"
,"tukinon bunko" : "月音文庫"
,"tuned by aiu" : "Tuned by AIU"
,"turing game" : "Turing Game"
,"turning point" : "Turning point"
,"turquoise" : "ターコイズ"
,"turtle.fish.paint" : ["龜魚派", "Turtle.Fish.Paint", "T.F.P"]
,"tuyudakukei nijigumi" : "汁ダク系 虹組"
,"tweak" : "Tweak"
,"twilight dusk" : "TWILIGHT DUSK"
,"twilight moon" : "Twilight Moon"
,"twilightlyric" : "TwilightLyric"
,"twin heart" : "TWIN HEART"
,"twin tail" : "TWIN TAIL"
,"twin tail laboratory" : "TWIN TAIL LABORATORY"
,"twinbox" : "TwinBox"
,"twinbunny" : "Twinbunny"
,"twinkle" : "Twinkle"
,"twinkle heart." : "とぅいんくるはーと"
,"twinkle snows" : "TWINKLE SNOWS"
,"tyatsune" : "茶常"
,"type punishment" : "罰式"
,"type-g" : "Type-G"
,"type-moon" : "TYPE-MOON"
,"tyrell piccolo" : "たいれるPiccolo"
,"u.r.c" : "U.R.C"
,"ua" : "UA"
,"ua daisakusen" : "U・A大作戦"
,"u-bullet" : "U-BULLET"
,"uchinon" : "うちのん"
,"uchuu ryokou kyoukai" : "宇宙旅行協会"
,"ucky labo" : "ウッキーラボ"
,"ucyunekogundan" : "宇宙猫軍団"
,"udon-ya" : "うどんや"
,"ue ni aru mikan" : "うえにあるみかん"
,"uenihane" : "うえにはね"
,"ugeman" : ["うげ漫", "UGE-MAN"]
,"ugo" : "UGO"
,"uguisu kagura" : "ウグイスカグラ"
,"uguisuya" : "うぐいす屋"
,"ukkaridou" : "うっかり堂"
,"uk-works" : "UK-WORKS"
,"ulala" : "うらら"
,"ultra pirontan" : "ULTRA PIRONTAN"
,"u-me soft" : "U・Me SOFT"
,"umemoto seisaku iinkai" : "梅本制作委員会"
,"umenomi gahou" : "梅の実画報"
,"ume-nyan-tei" : "UME-NYAN-TEI"
,"umesuke" : "UMESUKE"
,"umetama karubo" : "UMETAMA KARUBO"
,"uminouie" : "海納家"
,"umitsuki seisakusho" : "海月製作所"
,"umon paradise" : "ウーモンパラダイス"
,"unadon" : ["うな丼", "うなどぅーむ"]
,"unadondon" : "うな丼丼"
,"unagi academy" : "鰻アカデミー"
,"unagi no nedoko" : "うなぎの寝床"
,"unaginobori" : "うなぎのぼり"
,"unagiyasan" : "うなぎやさん"
,"undead" : "UNDEAD"
,"undead world" : "UNDEAD WORLD"
,"undel" : "あんでる"
,"under77" : "UNDER77"
,"underlip" : "アンダーリップ"
,"undermoon" : "アンダームーン"
,"unfixed" : "UNFIXED"
,"ungrofish" : ["地下魚！", "UNDER GROUND FISH!", "Ungrofish!"]
,"uni matrix one" : "UNI MATRIX ONE"
,"uni no tane" : "うにの種"
,"uniikuradon" : "うにいくら丼"
,"uninigumi" : "うにに組"
,"union of the snake" : "UNION OF THE SNAKE"
,"unisex blend" : "UNISEX BLEND"
,"unisonshift" : "UNiSONSHIFT"
,"unisonshift accent" : "UNiSONSHIFT Accent."
,"unisonshift blossom" : "UNiSONSHIFT：Blossom"
,"unitone" : "UNITONE"
,"unizo" : "うに蔵"
,"unknown" : "UNKNOWN"
,"unn slash a" : "UnN／A"
,"uotatsu18kinshiten" : "魚辰一八金支店"
,"uousaohkoku" : "魚ウサ王国"
,"upagoya" : "うぱ小屋"
,"ura" : ["URA", "游有英"]
,"ura fmo" : "裏FMO"
,"urahyakkiyakou" : "裏百鬼夜行"
,"ura-innosq" : "URA-innosq"
,"urainutei" : "裏イヌ亭"
,"urakata honpo" : "裏方本舗"
,"uran" : "URAN"
,"uran-factory" : "URAN FACTORY"
,"uraomote." : "ウラオモテ。"
,"uraryon kikaku" : "うらりょん企画"
,"urasazan" : "うらさざん"
,"urawa anime festa" : "浦和アニメフェスタ"
,"urayoroduya" : "Ura Yoroduya"
,"urayorozuya" : "Ura Yoroduya"
,"uroboros" : "UROBOROS"
,"uropyon" : "うろぴょん☆"
,"urufechi" : "うるふぇち Ultimate Fetish"
,"urumin" : "URUMIN"
,"usa daioh" : "ウサ大王"
,"usacastle" : "Usacastle"
,"usagi boss" : "ウサギBOSS"
,"usagi club" : "うさぎ倶楽部"
,"usagi youchien" : "うさぎ幼稚園"
,"usagigoya" : "うさぎ小屋"
,"usaneri island" : "Usaneri★IsLand"
,"usausa" : "うさうさ"
,"usausa bunny" : "うさうさバニー"
,"ushikani gassen" : "牛蟹合戦"
,"ushimitsu soft" : "ウシミツソフト"
,"uso seisakusho" : "うそ製作所"
,"uso to chinmoku" : "嘘と沈黙"
,"usotsukiya" : "嘘つき屋"
,"utamaru press" : "うたまるPress"
,"utaneya" : "うたね屋"
,"utanone dou" : "うたのね堂"
,"utataneyashiki" : "転寝屋敷"
,"utatte go" : "うたってゴー"
,"uzigaya" : "氏賀屋"
,"uzo-muzo" : "UZO-MUZO"
,"v. hercules" : "V・ヘラクレス"
,"valkyria" : "わるきゅ～れ"
,"vamp" : "VAMP"
,"vanadis" : "Vanadis"
,"vanilla-dou max" : "バニラ堂MAX"
,"variable" : "VARIABLE？"
,"vega" : "VEGA"
,"venom" : "VENOM"
,"veryberry" : "Veryberry"
,"veto" : "VETO"
,"violence asia team" : "猛烈アジア隊"
,"violence club" : ["VIOLENCE CLUB", "ばいおれんす倶楽部"]
,"violet order" : "VIOLET ORDER"
,"virgin virus" : "Virgin Virus"
,"virginal" : "VIRGINAL"
,"visionnerz" : "VISIONNERZ"
,"vista" : "VISTA"
,"vitamin gohan" : ["ビタミンごはん", "Vitamin rice!"]
,"vitamin l" : "ビタミンL"
,"vitamin soft" : "ビタミン"
,"vivido" : "ヴィヴィ堂"
,"vollmond" : "VOLLMOND"
,"voltcompany." : "VOLTCOMPANY."
,"volvox" : "VOLVOX"
,"vpans extasy" : "Vパン’sエクスタシー"
,"v-spot" : "V-SPOT"
,"waffle" : "Waffle"
,"waffle doumeiken" : "ワッフル同盟犬"
,"wafuu" : "わ風"
,"wagamama dou" : ["我儘堂", "わがまま堂"]
,"wagamama king" : "わがままKING"
,"wagarashiya" : "和がらし屋"
,"waisetsujou" : "猥褻城"
,"wakamaker" : "WAKAMAKER"
,"wakuwaku doubutsuen" : "わくわく動物園"
,"wakuwaku gochishiko land" : "わくわく！ごちシコランド"
,"wancho-ke" : "わんちょ家"
,"wanton land kumiai" : "わんとんランド組合"
,"wanwandoh" : "わんわん堂"
,"warabimochi" : "ワラビモチー"
,"waretama" : "われたま。"
,"warheads" : "WARHEADS"
,"warp loop" : "WARP LOOP"
,"washokudeniku." : "和食で肉。"
,"wasre kaban" : "忘れカバン"
,"wasuraruru tegami" : "忘らるる手紙"
,"wata 120 percent" : "綿120パーセント"
,"watakubi" : "わたくび"
,"water drop" : "うぉーたーどろっぷ"
,"water fall" : "WATER FALL"
,"waterwheel" : "water wheel"
,"watosato" : "ワトサト"
,"watsukiya" : "わつき屋"
,"web knight" : "Web Knight"
,"wedding cake" : "ウェディングケーキ"
,"wendybell" : "Wendy Bell"
,"west vision" : "West Vision"
,"wheel" : "WHEEL"
,"whirlpool" : "Whirlpool"
,"white cyc" : "WHITE CYC"
,"white drop" : "ホワイトドロップ"
,"white elephant" : "WHITE ELEPHANT"
,"white out" : "WHITE OUT"
,"white strawberry paper" : "白いちご新聞"
,"whitemoor" : "WhiteMoor"
,"whitepowder" : "WhitePowder"
,"whitesoft" : "WHITESOFT"
,"whitesoft-albino" : "WHITESOFT-ALBINO"
,"wicked heart" : "WICKED HEART"
,"wild flower" : "WILD FLOWER"
,"wild kingdom" : "WILD KINGDOM"
,"wild rose" : "WILD ROSE"
,"will tame" : ["ウィルテイム", "WINGLAY SOFT"]
,"wind rhythm" : "WIND RHYTHM"
,"windarteam" : "風藝WindArTeam"
,"windfall" : "WIND FALL"
,"windmill" : "ういんどみる"
,"windmill oasis" : "ういんどみるOasis"
,"windtone" : "うぃんどと～ん"
,"windy wing" : "WiNDY_WiNG"
,"winger in mind" : "WINGER in MIND"
,"winters" : "WINTERS"
,"wireframe" : "WIREFRAME"
,"witch" : "Witch"
,"witchflame" : "WitchFlame"
,"witchs" : "WITCH'S"
,"withdrop" : "ウィズドロップ"
,"wolkenkratzer" : "WOLKENKRATZER"
,"wonawonchi" : "ヲナヲんち"
,"wonder fool" : "Wonder Fool"
,"wonderful one" : "WONDERFUL ONE"
,"words worth" : "ワーズワース"
,"works maruma" : "WORKS MARUMA"
,"works-maruma" : "WORKS MARUMA"
,"workstation r" : "ワークステーションR"
,"wougiya" : "をうぎや"
,"wrench studio" : "WRENCH STUDIO"
,"wwalker" : "W'WALKER"
,"xai" : "彩[Xai]"
,"xanadu" : "キサナドゥ"
,"x-bangbang" : "X-BANGBANG"
,"xiguratt works" : "Xiguratt Works"
,"xration" : "Xration"
,"xuse" : "ザウス"
,"xuse happou" : "ザウス【発泡】"
,"xuse honjouzou" : "ザウス【本醸造】"
,"xxx" : "XXX"
,"y no shokutaku" : "Yの食卓"
,"yabougumi" : "野望組"
,"yadokugaeru" : "ヤドクガエル"
,"yaesaka" : "YAESAKA"
,"yagi to sakana" : "山羊と魚"
,"yagisaki ginza" : "八木崎銀座"
,"yago no ana" : "ヤゴの穴"
,"yajirushi factory" : "矢印ファクトリー"
,"yajuu kazoku" : "野獣家族"
,"yakan hikou" : "夜間飛行"
,"yakata" : ["館-YAKATA-", "Yakata"]
,"yaki ringo" : "YAKIRINGO"
,"yakiniku tabetai" : "焼肉食べたい"
,"yakiniku teikoku" : "焼肉帝国"
,"yakiyama line" : "YAKIYAMA LINE"
,"yakoutei" : "夜光亭"
,"yakouyousei" : "夜光幼性"
,"yamagarasu" : "やまガラス"
,"yamaguchi print" : "やまぐちぷりんと"
,"yamaguchirou" : "やまぐち楼"
,"yamakon-ya" : "山紺屋"
,"yamamoto" : "山本同人"
,"yamamoto j.k" : "山本J・K"
,"yamanashi musume." : "やまなし娘。"
,"yami ni ugomeku" : "闇に蠢く"
,"yamitsuki koubou" : "闇憑キ工房"
,"yamo7" : "ヤモセブン"
,"yanasegawabeya" : "柳瀬川部屋"
,"yan-yam" : "Yan-Yam"
,"yappari suki" : "やっぱり好き"
,"yaroujidai" : "YAROUZIDAI"
,"yasagure kitsuenjo" : "やさぐれ喫煙所"
,"yashiya" : "やし屋"
,"yasyokutei" : "夜食亭"
,"yatagarasu" : ["Yatagarasu", "八咫鴉"]
,"yaya hinata-ya" : "梢日向屋"
,"ya-zy" : "YA-ZY"
,"yellow tag" : "YELLOW TAG"
,"yggdrasil" : ["yGGDRASIL", "イグドラシル"]
,"ylang-ylang" : ["YLANG-YLANG", "イランイラン"]
,"yojouhan" : "四畳半"
,"yokohama lemonade" : "横濱レモネード"
,"yokoshimanchi." : "横島んち。"
,"yokoshimaya" : "邪屋。"
,"yomosue doukoukai" : "ヨモスエ同好会"
,"yomothuhirasaka" : "黄泉比良坂"
,"yorimichi" : "よりみち"
,"yorokobi no kuni" : "ヨロコビの国"
,"yoru no benkyoukai" : "夜の勉強会"
,"yoru no hitsuji" : "夜のひつじ"
,"yoshizakiminesya" : "吉崎観音社"
,"yosutebito na mangakaki" : "世捨人な漫画描き"
,"yotukuro" : "YOTUKURO"
,"youdou sakusen" : "陽動作戦"
,"youkai ankake" : "妖怪あんかけ"
,"youkai tamanokoshi" : "ようかい玉の輿"
,"youki m.k.c." : "優希M.K.C."
,"youmusya" : "遥夢社"
,"yours-wow" : "YOUR'S-WOW!!"
,"youseimangasya" : "妖精漫画社"
,"youtoujirushi" : "洋燈印"
,"yu gp03" : "YU GP03"
,"yudokuya" : "友毒屋"
,"yuganda oukoku" : "YUGANDA OUKOKU"
,"yuiumiya" : "結海屋"
,"yuka house" : "YUKA HOUSE!!"
,"yukan high zakura" : "有閑High桜"
,"yuki-iro" : "YuKi-IRo"
,"yukijirushi nyuugyou" : "逝印乳業"
,"yukimi honpo" : "ゆきみ本舗"
,"yukirins" : "YUKIRINS"
,"yukisizuku" : "ゆきしずく"
,"yukitenkan" : "雪天館"
,"yume no kakera" : "ユメノカケラ"
,"yume no niwatori goya" : "夢のニワトリ小屋"
,"yume yori suteki na" : "夢よりすてきな"
,"yumemigokoti" : "夢見ごこち"
,"yumemiru" : "ユメミル"
,"yumemisou" : "夢見奏"
,"yumeno-gotosi" : "夢ノ如シ"
,"yumesaki annai kairanban" : "夢先案内回覧板"
,"yumesenri" : "夢染理"
,"yumeya hananoya" : ["夢屋花乃屋", "オポチュニティ委員会", "STARDUST-OPERATION"]
,"yureru keikoutou" : "揺れる蛍光灯"
,"yuriai kojinshi kai" : "悠理愛個人誌会"
,"yurimoe" : "ユリ萌え☆"
,"yuriru-rarika" : "ユリルラリカ"
,"yururuka-dou" : "ゆるるか堂"
,"yusaritsukata" : "ゆうさりつかた"
,"yuubeno gakuensai" : "ユウベノ学園祭"
,"yuugai tosho kikaku" : "有害図書企画"
,"yuugen jikkou" : "有言実行"
,"yuugure koubou" : "夕暮向房"
,"yuuhodou" : ["遊歩堂(てくてく)", "遊甫堂(telemark)"]
,"yuukari soft" : "ゆ～かりそふと"
,"yuunabe shinkouchuu" : "夕鍋進行中"
,"yuunagi gaibutai" : "夕凪の戦力外部隊"
,"yuunagi zakkaten" : "夕凪雑貨店"
,"yuusei honpo" : "遊星本舗"
,"yuusha-sama go-ikkou" : "勇者様御一行"
,"yuushaya" : "勇者屋"
,"yuuyake note" : "ゆうやけのーと"
,"yuuyami sabou" : "夕闇茶房"
,"yuuzen animal dou" : "友禅あにまる堂"
,"yu-yu tei" : "YU-YU TEI"
,"yuzu soft" : "ゆずソフト"
,"yuzupon" : "ゆずぽん"
,"yuzuponz" : "ゆずぽん酢"
,"yuzuriha" : "譲葉"
,"za da carjya" : "ZA DA CARJYA"
,"zangyaku koui teate" : ["残虐行為手当", "GENOCIDE BONUS"]
,"zankirow" : "斬鬼楼"
,"zankoku ondo" : "残酷音頭"
,"zattou keshiki" : "雑踏景色"
,"zenmai kourogi" : "ぜんまいこうろぎ"
,"zenos" : "Zenos"
,"zenra qq" : "全裸QQ"
,"zenra restaurant" : "全裸レストラン"
,"zensekai yakenohara doumei" : "全世界焼野原同盟"
,"zensoku rider" : "漸速ライダー"
,"zero" : "ZERO"
,"zero byte" : "0byte"
,"zero hour" : "ZERO HOUR"
,"zero-sen" : "zero戦"
,"zetsubou shiromuji" : "絶望しろむじ"
,"zettai kanzen rippoutai" : "絶対完全立方体"
,"zettai shoujo" : "絶対少女"
,"zi" : "Zi"
,"zi0topia" : "ジ○トピア"
,"zigzag" : "ZIGZAG"
,"zinzin" : "ジンジン"
,"zion" : "ZION"
,"zip" : "ZiP"
,"z-less" : "Z-Less"
,"znn" : "ZNN"
,"zoku" : "ZOKU"
,"zombie to yukaina nakamatachi" : "ぞんびと愉快な仲間たち"
,"zone" : "ZONE"
,"zouni" : "雑煮"
,"z-tabukuroneko house" : "Zた袋猫ハウス"
,"zuukoku shoukai" : "ずぅこく商会"
,"z-vector" : "Z-VECTOR"
,"zvizva-dan" : "ズビズバ団"
,"zyx" : "Zyx"
};
var series_ejdic = {
 ".hackg.u." : ".hack//G.U."
,".hacklegend of the twilight" : ".hack//黄昏の腕輪伝説"
,".hackroots" : ".hack//Roots"
,".hacksign" : ".hack//SIGN"
,"009-1" : "009ノ1"
,"07-ghost" : "07-GHOST"
,"1 plus 2 equals paradise" : "1+2=パラダイス"
,"10 carat torte" : "天からトルテ!"
,"1000-chan" : "1000ちゃん"
,"11eyes" : "11eyes -罪と罰と贖いの少女-"
,"13 sentinels aegis rim" : "十三機兵防衛圏"
,"16bit sensation" : "16bitセンセーション"
,"2.43 seiin high school boys volleyball team" : "2.43 清陰高校男子バレー部"
,"2.5-jigen no yuuwaku" : "2.5次元の誘惑"
,"21 emon" : "21エモン"
,"2x2 shinobuden" : "ニニンがシノブ伝"
,"3000 leagues in search of mother" : "母をたずねて三千里"
,"30-sai no hoken taiiku" : "30歳の保健体育"
,"3-gatsu no lion" : "三月のライオン"
,"3-nen b-gumi kinpachi sensei densetsu no kyoudan ni tate" : "3年B組金八先生 伝説の教壇に立て！"
,"3x3 eyes" : "3×3 EYES"
,"7th dragon" : "セブンスドラゴン"
,"81diver" : "ハチワンダイバー"
,"86" : "エイティシックス"
,"91 days" : "91Days"
,"a channel" : "Aチャンネル"
,"a dog of flanders" : "フランダースの犬"
,"a little snow fairy sugar" : "ちっちゃな雪使いシュガー"
,"a.i. ga tomaranai" : "A.I.が止まらない"
,"a3" : "A3!"
,"abenobashi mahou shoutengai" : "アベノ橋魔法☆商店街"
,"absolute duo" : "アブソリュート・デュオ"
,"abunai tengu densetsu - yomigaetta tengu ga yozora o mau" : "あぶない天狗伝説 よみがえった天狗が夜空を舞う"
,"accel world" : "アクセル・ワールド"
,"acchi kocchi" : "あっちこっち"
,"ace attorney" : "逆転裁判"
,"ace force" : "ACE FORCE"
,"act-age" : "アクタージュ"
,"action heroine cheer fruits" : "アクションヒロイン チアフルーツ"
,"active raid" : "アクティヴレイド"
,"actraiser" : "アクトレイザー"
,"adachi to shimamura" : "安達としまむら"
,"advance wars" : "ファミコンウォーズ"
,"adventure kid" : "アドベンチャーKiD"
,"adventure time" : "アドベンチャー・タイム"
,"aflame inferno" : "Aflame Inferno"
,"after..." : "After…"
,"agarest senki" : "アガレスト戦記"
,"agatha christies great detectives poirot and marple" : "アガサ・クリスティーの名探偵ポワロとマープル"
,"agent aika" : "AIKa"
,"agents of atlas" : "Agents of Atlas"
,"aggressors of dark kombat" : "痛快GANGAN行進曲"
,"aggretsuko" : "アグレッシブ烈子"
,"ah my goddess" : "ああっ女神さまっ"
,"aharen-san wa hakarenai" : "阿波連さんははかれない"
,"aho-girl" : "アホガール"
,"ai kora" : "あいこら"
,"ai mai mi" : "あいまいみー"
,"ai no wakakusa monogatari" : "愛の若草物語"
,"ai shimai" : "愛姉妹"
,"ai the somnium files" : "AI： ソムニウム ファイル"
,"ai yori aoshi" : "藍より青し"
,"aikatsu" : "アイカツ！"
,"aikatsu friends" : "アイカツフレンズ!"
,"aim for the ace" : "エースをねらえ!"
,"air" : "AIR"
,"air gear" : "エア・ギア"
,"air master" : "エアマスター"
,"aisai nikki" : "愛妻日記"
,"aishiteruze baby" : "愛してるぜベイベ★★"
,"aiura" : "あいうら"
,"aiyoku no eustia" : "穢翼のユースティア"
,"ajin" : "亜人"
,"ajisai no chiru koro ni" : "紫陽花の散ル頃に"
,"akagi" : ["アカギ", "アカギ ～闇に降り立った天才～"]
,"akame ga kill" : "アカメが斬る!"
,"akane wa tsumare somerareru" : "茜ハ摘マレ染メラレル"
,"akane-banashi" : "あかね噺"
,"akaneiro ni somaru saka" : "あかね色に染まる坂"
,"akatsuki blitzkampf" : "アカツキ電光戦記"
,"akatsuki no goei" : "暁の護衛"
,"akatsuki no yona" : "暁のヨナ"
,"akazukin chacha" : "赤ずきんチャチャ"
,"akb49" : "AKB49～恋愛禁止条例～"
,"akebi no mi" : "山姫の実"
,"akebi-chan no sailor fuku" : "明日ちゃんのセーラー服"
,"aki sora" : "あきそら"
,"akiba kei kanojo" : "アキバ系彼女"
,"akiba maid sensou" : "アキバ冥途戦争"
,"akibas trip" : "AKIBA'S TRIP"
,"akihabara dennou gumi" : "アキハバラ電脳組"
,"akira" : "AKIRA"
,"aku no onna kanbu" : "悪の女幹部"
,"akuma no memumemu-chan" : "悪魔のメムメムちゃん"
,"akuma no riddle" : "悪魔のリドル"
,"akuma-kun" : "悪魔くん"
,"akuyaku reijo level 99" : "悪役令嬢レベル99 ～私は裏ボスですが魔王ではありません～"
,"aladdin" : "アラジン"
,"albatross koukairoku" : "信天翁航海録"
,"alchemy stars" : "白夜極光"
,"aldnoah.zero" : "アルドノア・ゼロ"
,"alias carnival" : "ALIA's CARNIVAL!"
,"alice gear aegis" : "アリス・ギア・アイギス"
,"alice in the country of hearts" : "ハートの国のアリス"
,"alice in wonderland" : "ふしぎの国のアリス"
,"alice no yakata" : "アリスの館"
,"alien 9" : "エイリアン9"
,"alien vs predator" : "エイリアンVS.プレデター"
,"aliens" : "エイリアン"
,"all out" : "ALL OUT!!"
,"all purpose cultural cat girl nuku nuku" : "万能文化猫娘"
,"all you need is kill" : "ALL YOU NEED IS KILL"
,"alps no shoujo heidi" : "アルプスの少女ハイジ"
,"alternative girls" : "オルタナティブガールズ"
,"amaama to inazuma" : "甘々と稲妻"
,"amagami" : "アマガミ"
,"amagami-san chi no enmusubi" : "甘神さんちの縁結び"
,"amagi brilliant park" : "甘城ブリリアントパーク"
,"amairo islenauts" : "天色＊アイルノーツ"
,"amakano" : "アマカノ"
,"amakano 2" : "アマカノ2"
,"amanchu" : "あまんちゅ！"
,"amano megumi ha sukidarake" : "天野めぐみはスキだらけ!"
,"amazing nurse nanako" : "菜々子解体診書"
,"american mcgees alice" : "アリス イン ナイトメア"
,"amesarasa" : "アメサラサ ～雨と不思議な君に、恋をする～"
,"amnesia" : "AMNESIA"
,"among us" : "Among Us"
,"amphibia" : "ふしぎの国 アンフィビア"
,"anarchy reigns" : "マックス アナーキー"
,"anata no shiranai kangofu" : "あなたの知らない看護婦～性的病棟24時～"
,"ane doki" : "あねどきっ"
,"ane haramix" : "姉☆孕みっくす"
,"ane naru mono" : "姉なるもの"
,"anejiru" : "姉汁"
,"ange vierge" : "アンジュ・ヴィエルジュ"
,"angel beats" : "Angel Beats!"
,"angel blade" : "エンジェルブレイド"
,"angel halo" : "Angel Halo"
,"angel links" : "星方天使エンジェルリンクス"
,"angelic layer" : "ANGELIC LAYER"
,"angelique" : "アンジェリーク"
,"animal crossing" : "どうぶつの森"
,"animal yokochou" : "アニマル横町"
,"animaniacs" : "アニマニアックス"
,"anitore" : "あにトレ！"
,"anna millers" : "アンナミラーズ"
,"anne happy" : "あんハピ♪"
,"anne of green gables" : "赤毛のアン"
,"ano hi mita hana no namae wo bokutachi wa mada shiranai" : "あの日見た花の名前を僕達はまだ知らない。"
,"ano hito no i ni wa boku ga tarinai" : "あの人の胃には僕が足りない"
,"ano natsu de matteru" : "あの夏で待ってる"
,"another" : "Another"
,"another lady innocent" : "フロントイノセント"
,"anothereidos of dragon vein r" : "龍脈のアナザーエイドスR"
,"anpanman" : "アンパンマン"
,"ansatsu kyoushitsu" : "暗殺教室"
,"anyamaru tantei kiruminzoo" : "あにゃまる探偵キルミンずぅ"
,"ao no exorcist" : "青の祓魔師"
,"ao no hako" : "アオのハコ"
,"ao no kanata no four rhythm" : "蒼の彼方のフォーリズム"
,"aoharu tetsudo" : "青春鉄道"
,"aoi hana" : "青い花"
,"aoi shiro" : "アオイシロ"
,"ape escape" : "サルゲッチュ"
,"apex legends" : "エーペックスレジェンズ"
,"appleseed" : "アップルシード"
,"aquarian age" : "アクエリアンエイジ"
,"aquarion" : "創聖のアクエリオン"
,"aquarion evol" : "アクエリオンEVOL"
,"aquarion logos" : "アクエリオンロゴス"
,"ar tonelico" : "アルトネリコ"
,"ar tonelico qoga" : ["アルトネリコ3", "アルトネリコ3 世界終焉の引鉄は少女の詩が弾く"]
,"arakawa under the bridge" : "荒川アンダー ザ ブリッジ"
,"arakusa ninpouchou" : "あらくさ忍法帖"
,"arashi no yoru ni" : "あらしのよるに"
,"arc the lad" : "アークザラッド"
,"arcade gamer fubuki" : "アーケードゲーマーふぶき"
,"arcaea" : "Arcaea	"
,"arcana famiglia" : "アルカナ・ファミリア"
,"arcana heart" : "アルカナハート"
,"arena of valor" : "伝説対決 -Arena of Valor-"
,"ares no tsubasa" : "アレスの翼"
,"aria" : "ARIA"
,"arifureta shokugyou de sekai saikyou" : "ありふれた職業で世界最強"
,"arknights" : "アークナイツ"
,"arknights endfield" : "アークナイツ：エンドフィールド"
,"armitage iii" : "アミテージ・ザ・サード"
,"armored core" : "アーマード・コア"
,"armored trooper votoms" : "装甲騎兵ボトムズ"
,"arms" : "ARMS"
,"arpeggio of blue steel" : "蒼き鋼のアルペジオ"
,"arrow emblem hawk of the grand prix" : "アローエンブレム グランプリの鷹"
,"arslan senki" : "アルスラーン戦記"
,"art of fighting" : "龍虎の拳"
,"asatte no houkou" : "あさっての方向。"
,"ase to sekken" : "あせとせっけん"
,"ash arms" : "アッシュアームズ-灰燼戦線-"
,"ashita no joe" : "あしたのジョー"
,"ashita no nadja" : "明日のナージャ"
,"ashitaba-san chi no mukogurashi" : "明日葉さんちのムコ暮らし"
,"ask dr. rin" : "Dr.リンにきいてみて!"
,"asobi asobase" : "あそびあそばせ"
,"asobi ni iku yo" : "あそびにいくヨ!"
,"asoko de hataraku musubu-san" : "あそこではたらくムスブさん"
,"assassins creed" : "アサシン クリード"
,"assault lily" : "アサルトリリィ"
,"asteroid in love" : "恋する小惑星"
,"astralair no shiroki towa" : "アストラエアの白き永遠"
,"astro boy" : "鉄腕アトム"
,"astro fighter sunred" : "天体戦士サンレッド"
,"asu no yoichi" : "明日のよいち！"
,"asuka 120" : "あすか120%"
,"asura cryin" : "アスラクライン"
,"atashinchi" : "あたしンち"
,"atelier ayesha" : ["アーシャのアトリエ", "アーシャのアトリエ ～黄昏の大地の錬金術士～"]
,"atelier elie" : "エリーのアトリエ"
,"atelier escha and logy" : "エスカ&ロジーのアトリエ"
,"atelier firis" : "フィリスのアトリエ"
,"atelier iris" : "イリスのアトリエ"
,"atelier judie" : "ユーディーのアトリエ"
,"atelier lilie" : "リリーのアトリエ"
,"atelier lina" : "リーナのアトリエ"
,"atelier lulua" : "ルルアのアトリエ"
,"atelier marie" : "マリーのアトリエ"
,"atelier meruru" : "メルルのアトリエ"
,"atelier rorona" : "ロロナのアトリエ"
,"atelier ryza" : "ライザのアトリエ"
,"atelier series" : "アトリエシリーズ"
,"atelier shallie" : "シャリーのアトリエ"
,"atelier sophie" : "ソフィーのアトリエ"
,"atelier tanaka" : "田中のアトリエ"
,"atelier totori" : "トトリのアトリエ"
,"athena" : "アテナ"
,"atlach-nacha" : "アトラク＝ナクア"
,"atomic betty" : "アトミック・ベティ"
,"atomic heart" : "ATOMIC HEART"
,"atsumare fushigi kenkyuubu" : "あつまれ!ふしぎ研究部"
,"attack no. 1" : "アタックNo.1"
,"aura battler dunbine" : "聖戦士ダンバイン"
,"avatar" : "アバター"
,"avatar the last airbender" : "アバター 伝説の少年アン"
,"avataro sentai donbrothers" : "暴太郎戦隊ドンブラザーズ"
,"avengers" : "アベンジャーズ"
,"axis powers hetalia" : "Axis powers ヘタリア"
,"ayakashi rumble" : "あやかしランブル!"
,"ayakashi triangle" : "あやかしトライアングル"
,"ayakashibito" : "あやかしびと"
,"azuki-chan" : "あずきちゃん"
,"azumanga daioh" : "あずまんが大王"
,"azur lane" : "アズールレーン"
,"azure striker gunvolt" : "蒼き雷霆 ガンヴォルト"
,"b.b.idol" : "B.B.IDOL"
,"baby princess" : "Baby Princess"
,"baby steps" : "Baby Steps"
,"baccano" : "バッカーノ！"
,"backbeard-sama ga miteru" : "バックベアード様がみてる"
,"bagi the monster of mighty nature" : "大自然の魔獣バギ"
,"bahamut lagoon" : "バハムートラグーン"
,"baka to test to shoukanjuu" : "バカとテストと召喚獣"
,"bakemono no ko" : "バケモノの子"
,"bakemonogatari" : "化物語"
,"bakuage sentai boonboomger" : "爆上戦隊ブンブンジャー"
,"bakugan" : "爆丸バトルブローラーズ"
,"bakugan battle planet" : "爆丸バトルプラネット"
,"bakuman" : "バクマン。"
,"bakumatsu jinchuu houkoku resshiden miburo" : "幕末尽忠報国烈士伝MIBURO"
,"bakumatsu rock" : "幕末Rock"
,"bakunyuu maid kari" : "爆乳メイド狩り"
,"bakuon" : "ばくおん!!"
,"bakuretsu hunters" : "爆れつハンター"
,"bakusou kyoudai lets and go" : "爆走兄弟レッツ&ゴー!!"
,"baldr force" : "BALDR FORCE"
,"baldurs gate" : "バルダーズ・ゲート"
,"ballroom e youkoso" : "ボールルームへようこそ"
,"bamboo blade" : "BAMBOO BLADE"
,"banana fish" : "BANANA FISH"
,"band yarouze" : "バンドやろうぜ！"
,"bang dream" : "BanG Dream!"
,"banished from the heros party i decided to live a quiet life in the countryside" : "真の仲間じゃないと勇者のパーティーを追い出されたので、辺境でスローライフすることにしました"
,"banner of the stars" : "星界の戦旗"
,"barakamon" : "ばらかもん"
,"barcode fighter" : "バーコードファイター"
,"basilisk" : "バジリスク ～甲賀忍法帖～"
,"basquash" : "バスカッシュ!"
,"bastard" : "BASTARD"
,"batman" : "バットマン"
,"batsuichi de nakimushi na otonari-san" : "バツイチで泣き虫なおとなりさん"
,"battle angel alita" : "銃夢"
,"battle arena toshinden" : "闘神伝"
,"battle athletes" : "バトルアスリーテス大運動会"
,"battle fever j" : "バトルフィーバーJ"
,"battle girl high school" : "バトルガール ハイスクール"
,"battle programmer shirase" : "BPS バトルプログラマーシラセ"
,"battle royale" : "バトル・ロワイアル"
,"battle spirits" : "バトルスピリッツ"
,"battle spirits double drive" : "バトルスピリッツ ダブルドライブ"
,"battlefield" : "バトルフィールド"
,"bayonetta" : "ベヨネッタ"
,"b-daman" : "ビーダマン"
,"beast wars" : "ビーストウォーズ 超生命体トランスフォーマー"
,"beastars" : "BEASTARS"
,"beat blades haruka" : "超昂閃忍ハルカ"
,"beatmania" : "Beatmania"
,"beatstream" : "BeatStream"
,"beautiful gunbari" : "Beautiful Gunbari"
,"beauty and the beast" : "美女と野獣"
,"beelzebub" : "べるぜバブ"
,"beet the vandel buster" : "冒険王ビィト"
,"ben 10" : "ベン10"
,"ben-to" : "ベン・トー"
,"bernd and the mystery of unteralterbach" : "ベルントとウンターアルターバッハの謎"
,"beroncho karada kensa joshi koukou hen" : "ベロンチョ身体検査 1 女子高校編"
,"berserk" : "ベルセルク"
,"betterman" : "ベターマン"
,"beyblade" : "ベイブレード"
,"bible black" : "Bible Black"
,"biblia koshodou no jiken techou" : "ビブリア古書堂の事件手帖"
,"big hero 6" : "ベイマックス"
,"bijin onna joushi takizawa-san" : "美人女上司滝沢さん"
,"bijo de yajuu" : "美女で野獣"
,"bikini warriors" : "ビキニ・ウォリアーズ"
,"bikkuriman" : "ビックリマン"
,"binan koukou chikyuu bouei-bu love" : "美男高校地球防衛部LOVE!"
,"binbougami ga" : "貧乏神が！"
,"binzume yousei" : "瓶詰妖精"
,"birdy the mighty" : "鉄腕バーディー"
,"bishoujo kamen poitrine" : "美少女仮面ポワトリン"
,"bishoujo mangekyou" : "美少女万華鏡"
,"bishounen tanteidan" : "美少年探偵団"
,"black bullet" : "ブラック・ブレット"
,"black butler" : "黒執事"
,"black cat" : "BLACK CAT"
,"black clover" : "ブラッククローバー"
,"black desert online" : "黒い砂漠"
,"black jack" : "ブラックジャック"
,"black lagoon" : "ブラックラグーン"
,"black myth wukong" : "黒神話：悟空"
,"black panther" : "ブラックパンサー"
,"black rock shooter" : "ブラック ロックシューター"
,"black souls" : "BLACKSOULS"
,"black survival" : "BLACK SURVIVAL"
,"blade and soul" : "ブレイドアンドソウル"
,"blade of the immortal" : "無限の住人"
,"bladedance of elementalers" : "精霊使いの剣舞"
,"blame" : "BLAME!"
,"blassreiter" : "BLASSREITER"
,"blast of tempest" : "絶園のテンペスト"
,"blaster master zero 2" : "ブラスターマスター ゼロ 2"
,"blazblue" : "BLAZBLUE"
,"bleach" : "BLEACH"
,"blend s" : "ブレンド・S"
,"blood lad" : "ブラッドラッド"
,"blood plus" : "BLOOD+"
,"blood royale" : "BLOOD ROYAL"
,"bloodborne" : "Bloodborne"
,"blood-c" : "BLOOD-C"
,"bloodstained" : "Bloodstained: Ritual of the Night"
,"bloody roar" : "ブラッディロア"
,"blue archive" : "ブルーアーカイブ"
,"blue breaker" : "ブルーブレイカー"
,"blue comet spt layzner" : "蒼き流星SPTレイズナー"
,"blue dragon" : "BLUE DRAGON"
,"blue lock" : "ブルーロック"
,"blue period" : "ブルーピリオド"
,"blue reflection" : "ブルー リフレクション 幻に舞う少女の剣"
,"blue seed" : "ブルーシード"
,"blue submarine no. 6" : "青の6号"
,"bluey" : "ブルーイ"
,"bna brand new animal" : "BNA ビー・エヌ・エー"
,"bobobo-bo bo-bobo" : "ボボボーボ・ボーボボ"
,"bocchi kaibutsu to moumoku shoujo" : "ぼっち怪物と盲目少女"
,"bocchi the rock" : "ぼっち・ざ・ろっく！"
,"bojack horseman" : "ボージャック・ホースマン"
,"boku dake ga inai machi" : "僕だけがいない街"
,"boku girl" : "ボクガール"
,"boku no kanojo ga majimesugiru shobitch na ken" : "僕の彼女がマジメ過ぎる処女ビッチな件"
,"boku no kokoro no yabai yatsu" : "僕の心のヤバイやつ"
,"boku no pico" : "ぼくのぴこ"
,"boku no shoukibo na seikatsu" : "僕の小規模な生活"
,"boku to roboko" : "僕とロボコ"
,"boku wa tomodachi ga sukunai" : "僕は友達が少ない"
,"bokura wa mahou shounen" : "ボクらは魔法少年"
,"bokura wa minna kawaisou" : "僕らはみんな河合荘"
,"bokusatsu tenshi dokuro-chan" : "撲殺天使ドクロちゃん"
,"bokutachi no remake" : "ぼくたちのリメイク"
,"bokutachi wa benkyou ga dekinai" : "ぼくたちは勉強ができない"
,"bomber girl" : "ボンバーガール"
,"bomberman" : "ボンバーマン"
,"bomberman jetters" : "ボンバーマンジェッターズ"
,"border break" : "ボーダーブレイク"
,"borderlands" : "ボーダーランズ"
,"boruto" : "BORUTO-ボルト-"
,"bosco adventure" : "ボスコアドベンチャー"
,"bra-ban" : "ぶらばん! -The bonds of melody-"
,"brain powerd" : "ブレンパワード"
,"brandish" : "Brandish"
,"branmarker" : "ブランマーカー"
,"brave beats" : "ブレイブビーツ"
,"brave express might gaine" : "勇者特急マイトガイン"
,"brave girl ravens" : "ブレイヴガール レイヴンズ"
,"brave nine" : "BRAVE NINE"
,"brave police j-decker" : "勇者警察ジェイデッカー"
,"brave story" : "ブレイブ ストーリー"
,"brave sword x blaze soul" : "ブレイブソード×ブレイズソウル"
,"brave witches" : "ブレイブウィッチーズ"
,"bravely default" : "ブレイブリーデフォルト"
,"bravestarr" : "BraveStarr"
,"bravoman" : "超絶倫人ベラボーマン"
,"brawl stars" : "ブロスタ"
,"breath of fire" : "ブレス オブ ファイア"
,"breath of fire ii" : ["ブレス オブ ファイアII", "ブレス オブ ファイアII 使命の子"]
,"breath of fire iii" : "ブレス オブ ファイアIII"
,"breath of fire iv" : ["ブレス オブ ファイアIV", "ブレス オブ ファイアIV うつろわざるもの"]
,"breath of fire v" : "ブレス オブ ファイアV ドラゴンクォーター"
,"brigadoon" : "BRIGADOON まりんとメラン"
,"brocken blood" : "ブロッケンブラッド"
,"broken blade" : "ブレイク ブレイド"
,"brothers conflict" : "BROTHERS CONFLICT"
,"brynhildr in the darkness" : "極黒のブリュンヒルデ"
,"bt x" : "B'T-X"
,"btooom" : "BTOOOM!"
,"bubblegum crisis" : "バブルガムクライシス"
,"bucchigire" : "ブッチギレ!"
,"buddy complex" : "バディ・コンプレックス"
,"buddy mission bond" : "バディミッション BOND"
,"bug fables" : "バグ・フェイブルズ"
,"bungaku shoujo" : "文学少女"
,"bungou stray dogs" : "文豪ストレイドッグス"
,"bungou to alchemist" : "文豪とアルケミスト"
,"bunny black" : "BUNNYBLACK"
,"bunny garden" : "バニーガーデン"
,"buraiden gai" : "無頼伝涯"
,"burn the witch" : "BURN THE WITCH"
,"burn up" : "BURN-UP"
,"burn up w" : "BURN-UP W"
,"burning force" : "バーニングフォース"
,"burning rangers" : "バーニングレンジャー"
,"burst angel" : "爆裂天使"
,"busou renkin" : "武装錬金"
,"busou shinki" : "武装神姫"
,"busou shoujo machiavellianism" : "武装少女マキャヴェリズム"
,"bust a groove" : "バスト ア ムーブ"
,"buta no gotoki" : "豚の如き山賊に捕らわれて処女を奪われる巨乳姫騎士&女戦士～絶対チ○ポなんかに負けたりしない！！～ THE ANIMATION"
,"buttobi cpu" : "ぶっとび!!CPU"
,"c cube" : "C³ -シーキューブ-"
,"c the money of soul and possibility control" : "C -THE MONEY OF SOUL AND POSSIBILITY CONTROL-"
,"cafe junkie" : "カフェ･ジャンキー"
,"cafe sourire" : "CAFE SOURIRE"
,"cafe stella to shinigami no chou" : "喫茶ステラと死神の蝶"
,"cage of eden" : "Cage of Eden"
,"calabiyau" : "Strinova"
,"caligula" : "Caligula -カリギュラ"
,"call of duty" : "Call of Duty"
,"camp buddy" : "Camp Buddy"
,"campione" : "カンピオーネ!"
,"can can bunny" : "きゃんきゃんバニー"
,"canaan" : "CANAAN"
,"candy boy" : "Candy☆Boy"
,"candy candy" : "キャンディ・キャンディ"
,"canvas" : ["CANVAS", "Canvas セピア色のモチーフ"]
,"capricorn" : "カプリコン"
,"captain commando" : "キャプテンコマンドー"
,"captain earth" : "キャプテン・アース"
,"captain tsubasa" : "キャプテン翼"
,"caravan kidd" : "キャラバン・キッド"
,"cardcaptor sakura" : "カードキャプターさくら"
,"cardfight vanguard" : "カードファイト!! ヴァンガード"
,"casshan" : "新造人間キャシャーン"
,"casshern sins" : "キャシャーンSins"
,"castlevania" : "悪魔城ドラキュラ"
,"casual romance club" : "放課後恋愛クラブ"
,"cat busters" : "キャットバスターズ"
,"caterpillar" : "キャタピラー-CATERPILLAR-"
,"catherine" : "キャサリン・フルボディ"
,"cats eye" : "キャッツ・アイ"
,"cave story" : "洞窟物語"
,"cerberus" : "ケルベロス"
,"cevio" : "CeVIO"
,"chain chronicle" : "チェインクロニクル"
,"chainsaw man" : "チェンソーマン"
,"challenge first-year-student" : "チャレンジ1年生"
,"changed" : "Changed"
,"chaos angels" : "カオスエンジェルズ"
,"chaos breaker" : "カオスブレイカー"
,"chaos child" : "CHAOS;CHILD"
,"chaos code" : "カオスコード"
,"chaos head" : "CHAOS;HEAD"
,"charisma" : "超人的シェアハウスストーリー『カリスマ』"
,"charlotte" : "Charlotte"
,"chibi vampire" : "かりん"
,"chichi chichi" : "チチチチ"
,"chihayafuru" : "ちはやふる"
,"chinpui" : "チンプイ"
,"chip n dale rescue rangers" : "チップとデールの大作戦 レスキュー・レンジャーズ"
,"chiyu mahou no machigatta tsukaikata" : "治癒魔法の間違った使い方"
,"chizuru-chan kaihatsu nikki" : "千鶴ちゃん開発日記"
,"chobits" : "ちょびっツ"
,"chocolate melancholy" : "チョコレート・メランコリー"
,"chokotto sister" : "ちょこッとSister"
,"chou kuse ni narisou" : "超くせになりそう"
,"choudenshi bioman" : "超電子バイオマン"
,"choujin koukousei-tachi wa isekai demo yoyuu de ikinuku you desu" : "超人高校生たちは異世界でも余裕で生き抜くようです!"
,"choujin sentai jetman" : "鳥人戦隊ジェットマン"
,"choujuu kishin dancougar" : "超獣機神ダンクーガ"
,"choujuu sentai liveman" : "超獣戦隊ライブマン"
,"choukou shinki ixseal" : "超昂神騎エクシール"
,"choukou tenshi escalayer" : "超昂天使エスカレイヤー"
,"chouriki sentai ohranger" : "超力戦隊オーレンジャー"
,"chousoku henkei gyrozetter" : "超速変形ジャイロゼッター"
,"chou-tantei jikenbo rain code" : "超探偵事件簿 レインコード"
,"chrome shelled regios" : "鋼殻のレギオス"
,"chrono cross" : "クロノ・クロス"
,"chrono crusade" : "クロノクルセイド"
,"chrono trigger" : "クロノ・トリガー"
,"chuunibyou demo koi ga shitai" : "中二病でも恋がしたい！"
,"ciel nosurge" : "シェルノサージュ～失われた星へ捧ぐ詩～"
,"cinderella" : "シンデレラ"
,"cinderella blade" : "シンデレラブレイド"
,"cinnamoroll" : "シナモロール"
,"city hunter" : "シティーハンター"
,"clannad" : "CLANNAD"
,"class of heroes" : "剣と魔法と学園モノ。"
,"claymore" : "CLAYMORE"
,"cleavage" : "CLEAVAGE"
,"closers" : "CLOSERS"
,"clover days" : "Clover Day’s"
,"clover hearts" : "Clover Heart's"
,"clover point" : "Clover Point"
,"cluster edge" : "クラスターエッジ"
,"coco" : "リメンバー・ミー"
,"cocoro restarter" : "こころリスタ！"
,"code geass" : "コードギアス"
,"code vein" : "CODE VEIN"
,"codename kids next door" : "KND ハチャメチャ大作戦"
,"collar x malice" : "Collar×Malice"
,"combat mecha xabungle" : "戦闘メカ ザブングル"
,"combattler v" : "コンバトラーV"
,"comic girls" : "こみっくがーるず"
,"comic party" : "こみっくパーティー"
,"compass" : "コンパス"
,"concon-collector" : "コンコンコレクター"
,"control" : "操作"
,"cookie run" : "クッキーラン"
,"cooking idol ai mai main" : "クッキンアイドル アイ!マイ!まいん!"
,"cooking papa" : "クッキングパパ"
,"cool devices" : "クール・ディバイシスシリーズ"
,"corpse party" : "コープスパーティー"
,"corrector yui" : "コレクター・ユイ"
,"cosmic baton girl comet-san" : "Cosmic Baton Girl コメットさん☆"
,"cosmic break" : "コズミックブレイク"
,"cotton" : "COTTON"
,"counter side" : "カウンターサイド"
,"cowboy bebop" : "カウボーイビバップ"
,"coyote ragtime show" : "コヨーテ ラグタイムショー"
,"crash bandicoot" : "クラッシュバンディクー"
,"crash b-daman" : "爆球Hit! クラッシュビーダマン"
,"crave saga" : "クレイヴ・サーガ 神絆の導師"
,"crayon shin-chan" : "クレヨンしんちゃん"
,"cream lemon" : "くりいむレモン"
,"creamy mami" : "魔法の天使クリィミーマミ"
,"criminal girls" : "クリミナルガールズ"
,"cross ange" : ["クロスアンジュ", "クロスアンジュ 天使と竜の輪舞"]
,"crusaders quest" : "クルセイダークエスト"
,"crush gear nitro" : "クラッシュギアNitro"
,"crusher joe" : "クラッシャー・ジョー"
,"crystal maidens" : "Crystal Maidens"
,"cthulhu mythos" : "クトゥルフ神話"
,"cue" : "CUE!"
,"culdcept" : "カルドセプト"
,"cult of the lamb" : "Cult of the Lamb"
,"cuphead" : "CUPHEAD"
,"cutey honey" : "キューティーハニー"
,"cyberbots" : "サイバーボッツ"
,"cyberpunk" : "サイバーパンク"
,"cyborg 009" : "サイボーグ009"
,"cyborg kuro-chan" : "サイボーグクロちゃん"
,"cyphers online" : "Cyphers Online"
,"d.gray-man" : "D.Gray-man"
,"d.n.angel" : "D・N・ANGEL"
,"d.p.s." : "D.P.S."
,"da capo" : "D.C. ～ダ・カーポ～"
,"da capo ii" : "D.C.II ～ダ・カーポII～"
,"da capo iii" : "D.C.III ～ダ・カーポIII～"
,"daa daa daa" : "だぁ!だぁ!だぁ!"
,"dagashi kashi" : "だがしかし"
,"dai sentai goggle v" : "大戦隊ゴーグルファイブ"
,"daiakuji" : "大悪司"
,"daibanchou -big bang age-" : "大番長-Big Bang Age-"
,"daicon" : "DAICON FILM"
,"dai-guard" : "地球防衛企業ダイ・ガード"
,"daihanjou manpuku marche" : "大繁盛!まんぷくマルシェ"
,"daikaijuu monogatari" : "大貝獣物語"
,"daiku no gen-san" : "大工の源さん"
,"daiteikoku" : "大帝国"
,"daitoshokan no hitsujikai" : "大図書館の羊飼い"
,"daiya no ace" : "ダイヤのA"
,"dakara boku wa h ga dekinai" : "だから僕は、Hができない。"
,"dalk" : "DALK"
,"dalk gaiden" : "DALK外伝"
,"dame x prince" : "DAME×PRINCE"
,"danball senki" : "ダンボール戦機"
,"dance in the vampire bund" : "ダンス イン ザ ヴァンパイアバンド"
,"dance with devils" : "Dance with Devils"
,"dandadan" : "ダンダダン"
,"dangaioh" : "破邪大星ダンガイオー"
,"danganronpa" : "ダンガンロンパ"
,"dankira" : "ダンキラ!!! - Boys, be DANCING! -"
,"danna ga nani o itteiru ka wakaranai ken" : "旦那が何を言っているかわからない件"
,"danny phantom" : "ダニー・ファントム"
,"danshi koukousei de urekko light novel sakka o shiteiru keredo" : "男子高校生で売れっ子ライトノベル作家をしているけれど、年下のクラスメイトで声優の女の子に首を絞められている。"
,"danshi koukousei no nichijou" : "男子高校生の日常"
,"daphne in the brilliant blue" : "光と水のダフネ"
,"darcrows" : "DARCROWS"
,"dark avengers" : "ダークアベンジャーズ"
,"dark gathering" : "ダークギャザリング"
,"darker than black" : "DARKER THAN BLACK"
,"darkest dungeon" : "Darkest Dungeon"
,"darkstalkers" : "ヴァンパイア ダークストーカーズ"
,"darling in the franxx" : "ダーリン・イン・ザ・フランキス"
,"dasei 67 percent" : "惰性67パーセント"
,"date a live" : "デート・ア・ライブ"
,"days" : "DAYS"
,"dead by daylight" : "Dead by Daylight"
,"dead dead demons dededededestruction" : "デッドデッドデーモンズデデデデデストラクション"
,"dead or alive" : "デッド オア アライブ"
,"dead rising" : "デッドライジング"
,"dead space" : "DEAD SPACE"
,"deadman wonderland" : "デッドマン・ワンダーランド"
,"deadpool" : "デッドプール"
,"deaimon" : "であいもん"
,"dears" : "DearS"
,"death march kara hajimaru isekai kyousoukyoku" : "デスマーチからはじまる異世界狂想曲"
,"death note" : "DEATH NOTE"
,"deathsmiles" : "デススマイルズ"
,"debby the corsifa wa makezugirai" : "デビィ・ザ・コルシファは負けず嫌い"
,"deception" : "刻命館"
,"defense of the ancients" : ["DotA", "Defense of the Ancients"]
,"de-ja" : "DE・JA"
,"delicious party precure" : "デリシャスパーティ♡プリキュア"
,"deltarune" : "DELTARUNE"
,"deltora quest" : "デルトラ・クエスト"
,"demento" : "DEMENTO"
,"demi-chan wa kataritai" : "亜人ちゃんは語りたい"
,"demonbane" : "デモンベイン"
,"demonion" : "デモニオン"
,"demonophobia" : "DEMONOPHOBIA"
,"demons souls" : "Demon's Souls"
,"denji sentai megaranger" : "電磁戦隊メガレンジャー"
,"denkigai no honya-san" : "デンキ街の本屋さん"
,"dennou boukenki webdiver" : "電脳冒険記ウェブダイバー"
,"dennou coil" : "電脳コイル"
,"dennou tenshi djibril" : "電脳天使ジブリール"
,"denpa onna to seishun otoko" : "電波女と青春男"
,"densetsu no ogre battle" : "伝説のオウガバトル"
,"densetsu no yuusha da garn" : "伝説の勇者ダ・ガーン"
,"dero dero" : "でろでろ"
,"destiny" : "DESTINY"
,"destiny child" : "デスティニーチャイルド"
,"detective conan" : "名探偵コナン"
,"detroit become human" : "デトロイト ビカム ヒューマン"
,"detroit metal city" : "デトロイト・メタル・シティ"
,"devil connection" : "でびるコネクショん"
,"devil hunter yohko" : "魔物ハンター妖子"
,"devil may cry" : "デビルメイクライ"
,"devil summoner soul hackers" : "デビルサマナー ソウルハッカーズ"
,"devil survivor" : "女神異聞録デビルサバイバー"
,"devil survivor 2" : "デビルサバイバー2"
,"devilman" : "デビルマン"
,"devilman lady" : "デビルマン レディ"
,"dexters laboratory" : "デクスターズ ラボ"
,"d-frag" : "ディーふらぐ!"
,"di gi charat" : "デ・ジ・キャラット"
,"diablo" : "ディアブロ"
,"diabolik lovers" : "DIABOLIK LOVERS"
,"diebuster" : "トップをねらえ2!"
,"dies irae" : ["Dies irae", "Dies irae -Also sprach Zarathustra-"]
,"dig delight direct drive dj" : "D4DJ"
,"digimon" : "デジモン"
,"digimon adventure" : "デジモンアドベンチャー"
,"digimon adventure tri." : "デジモンアドベンチャー tri."
,"digimon frontier" : "デジモンフロンティア"
,"digimon ghost game" : "デジモンゴーストゲーム"
,"digimon liberator" : "デジモンリベレイター"
,"digimon savers" : "デジモンセイバーズ"
,"digimon story cyber sleuth" : "デジモンストーリー サイバースルゥース"
,"digimon survive" : "デジモンサヴァイブ"
,"digimon tamers" : "デジモンテイマーズ"
,"digimon universe appli monsters" : "デジモンユニバース アプリモンスターズ"
,"digimon world re digitize decode" : "デジモンワールド Re:Digitize Decode"
,"digimon xros wars" : "デジモンクロスウォーズ"
,"dimension w" : "Dimension W"
,"dino crisis" : "ディノクライシス"
,"dinosaur king" : "古代王者恐竜キング"
,"dirty pair" : "ダーティペア"
,"dirty pair flash" : "ダーティペア FLASH"
,"discipline" : "DISCIPLINE"
,"disgaea" : "魔界戦記ディスガイア"
,"dislyte" : "DISLYTE-神世代ネオンシティ-"
,"disney twisted-wonderland" : "ディズニー ツイステッドワンダーランド"
,"dissidia final fantasy" : "ディシディア ファイナルファンタジー"
,"divergence eve" : "ダイバージェンス・イヴ"
,"divine gate" : "ディバインゲート"
,"dna2" : "D・N・A² ～何処かで失くしたあいつのアイツ～"
,"do it yourself" : "Do It Yourself!! -どぅー・いっと・ゆあせるふ-"
,"doctor strange" : "ドクター・ストレンジ"
,"dodge danko" : "炎の闘球女 ドッジ弾子"
,"dodge danpei" : "炎の闘球児 ドッジ弾平"
,"dog days" : "DOG DAYS"
,"dogeza de tanondemita" : "土下座で頼んでみた"
,"dohna dohna issho ni warui koto o shiyou" : "ドーナドーナ いっしょにわるいことをしよう"
,"doki doki literature club" : "ドキドキ文芸部!"
,"doki doki majo shinpan" : "どきどき魔女神判"
,"doki doki pretty league" : "ドキドキプリティリーグ"
,"dokidoki precure" : "ドキドキ！プリキュア"
,"dokkin minako-sensei" : "ドッキン美奈子先生"
,"dokkiri doctor" : "どっきりドクター"
,"dokkoida" : "住めば都のコスモス荘"
,"dokonjou gaeru" : "ど根性ガエル"
,"dokyuu hentai hxeros" : "ド級編隊エグゼロス"
,"dolphin wave" : "ドルフィンウェーブ"
,"domestic na kanojo" : "ドメスティックな彼女"
,"dominion tank police" : "ドミニオン"
,"donkey kong" : "ドンキーコング"
,"doom" : "DOOM"
,"dora the explorer" : "ドーラといっしょに大冒険"
,"doraemon" : "ドラえもん"
,"dorei to no seikatsu" : "奴隷との生活 -Teaching Feeling-"
,"dorohedoro" : "ドロヘドロ"
,"dororo" : "どろろ"
,"dororon enma-kun" : "ドロロンえん魔くん"
,"dosanko gal wa namaramenkoi" : "道産子ギャルはなまらめんこい"
,"doubutsu sentai zyuohger" : "動物戦隊ジュウオウジャー"
,"doukyuusei" : "同級生"
,"doukyuusei 2" : "同級生２"
,"douluo continent" : "Soul Land - Douluo Continent"
,"doupo cangqiong" : ["蒼穹の剣", "斗破苍穹"]
,"dousoukai" : "同窓会"
,"dr. slump" : "Dr.スランプ アラレちゃん"
,"dr. stone" : "Dr.STONE"
,"dra plus koi" : "竜†恋"
,"dracu-riot" : "DRACU-RIOT！"
,"dragalia lost" : "Dragalia Lost"
,"dragon ball" : "ドラゴンボール"
,"dragon ball daima" : "ドラゴンボールDAIMA"
,"dragon ball gt" : "ドラゴンボールGT"
,"dragon ball heroes" : "ドラゴンボールヒーローズ"
,"dragon ball super" : "ドラゴンボール超"
,"dragon ball z" : "ドラゴンボールＺ"
,"dragon crisis" : "ドラゴンクライシス！"
,"dragon force" : "ドラゴンフォース"
,"dragon half" : "ドラゴンハーフ"
,"dragon knight" : "ドラゴンナイト"
,"dragon nest" : "ドラゴンネスト"
,"dragon pink" : "ドラゴンピンク"
,"dragon poker" : "ドラゴンポーカー"
,"dragon quest" : "ドラゴンクエスト"
,"dragon quest builders 2" : "ドラゴンクエストビルダーズ2 破壊神シドーとからっぽの島"
,"dragon quest dai no daibouken" : "DRAGON QUEST -ダイの大冒険-"
,"dragon quest heroes" : "ドラゴンクエストヒーローズ"
,"dragon quest i" : "ドラゴンクエストⅠ"
,"dragon quest ii" : "ドラゴンクエストII"
,"dragon quest iii" : "ドラゴンクエストIII"
,"dragon quest iv" : "ドラゴンクエストIV"
,"dragon quest ix" : "ドラゴンクエストIX"
,"dragon quest monsters" : "ドラゴンクエストモンスターズ"
,"dragon quest monsters terrys wonderland" : "ドラゴンクエストモンスターズ テリーのワンダーランド"
,"dragon quest retsuden roto no monshou" : "ドラゴンクエスト列伝 ロトの紋章"
,"dragon quest swords" : "ドラゴンクエストソード 仮面の女王と鏡の塔"
,"dragon quest v" : "ドラゴンクエストV"
,"dragon quest vi" : "ドラゴンクエストVI"
,"dragon quest vii" : "ドラゴンクエストVII"
,"dragon quest viii" : "ドラゴンクエストVIII"
,"dragon quest x" : "ドラゴンクエストX"
,"dragon quest xi" : "ドラゴンクエストXI"
,"dragon quest yuusha abel densetsu" : "ドラゴンクエスト 勇者アベル伝説"
,"dragonaut" : "ドラゴノーツ -ザ・レゾナンス-"
,"dragons crown" : "ドラゴンズクラウン"
,"dragons dogma" : "Dragon's Dogma"
,"drakengard" : "ドラッグオンドラグーン"
,"dramatical murder" : "DRAMAtical Murder"
,"dreadout" : "DreadOut"
,"dream c club" : "ドリームクラブ"
,"dream daddy" : "Dream Daddy: A Dad Dating Simulator"
,"dream festival" : "ドリフェス！R"
,"dream hunter rem" : "ドリームハンター麗夢"
,"drifters" : "ドリフターズ"
,"dual parallel trouble adventure" : "デュアル!ぱられルンルン物語"
,"duck dodgers" : "ダック・ドジャース"
,"ducktales" : "わんぱくダック夢冒険"
,"duel masters" : "デュエル・マスターズ"
,"dumbbell nan kilo moteru" : "ダンベル何キロ持てる？"
,"dungeon fighter online" : "アラド戦記"
,"dungeon meshi" : "ダンジョン飯"
,"dungeon ni deai o motomeru no wa machigatteiru darou ka" : "ダンジョンに出会いを求めるのは間違っているだろうか"
,"dungeons and dragons" : "ダンジョンズ&ドラゴンズ"
,"duolingo" : "Duolingo"
,"durarara" : "デュラララ！！"
,"dynasty warriors" : "真・三國無双"
,"earth defense force" : "地球防衛軍"
,"earthbound" : "MOTHER2 ギーグの逆襲"
,"earthbound zero" : "MOTHER"
,"echocalypse" : "Echocalypse"
,"ecoko" : "エコアイスちゃん"
,"edens bowy" : "ヱデンズボゥイ"
,"edens zero" : "EDENS ZERO"
,"edomae elf" : "江戸前エルフ"
,"ef a tale of memories" : "ef - a tale of memories."
,"eiken" : "エイケン"
,"eiyuu senki" : "英雄＊戦姫"
,"eiyuu-ou bu o kiwameru tame tenseisu" : "英雄王、武を極めるため転生す"
,"el cazador de la bruja" : "エル・カザド"
,"el hazard" : "神秘の世界エルハザード"
,"el shaddai" : "エルシャダイ"
,"el viento" : "エル・ヴィエント"
,"elden ring" : "ELDEN RING"
,"elden ring nightreign" : "ELDEN RING NIGHTREIG"
,"element hunters" : "エレメントハンター"
,"elemental gelade" : "エレメンタル ジェレイド"
,"elf 17" : "エルフ・17"
,"elfen lied" : "エルフェンリート"
,"elf-san wa yaserarenai." : "エルフさんは痩せられない。"
,"elite beat agents" : "エリート・ビート・エージェント"
,"elsword" : "エルソード"
,"emil chronicle online" : "エミル・クロニクル・オンライン"
,"emma a victorian romance" : "エマ"
,"emperors saga" : "エンペラーズ サガ"
,"endless frontier" : "無限のフロンティア"
,"endro" : "えんどろ～！"
,"enen no shouboutai" : "炎炎ノ消防隊"
,"energy kyouka" : "えなじぃキョーカ!!"
,"engage kiss" : "Engage Kiss"
,"engine sentai go-onger" : "炎神戦隊ゴーオンジャー"
,"enjou genmu tan" : "艷娘幻夢譚"
,"ensemble stars" : "あんさんぶるスターズ！！"
,"enzai" : "冤罪"
,"epic seven" : "Epic Seven-エピックセブン-"
,"equestria girls" : ["エクエストリア・ガールズ", "マイリトルポニー: エクエストリア・ガールズ"]
,"ero trap dungeon" : "エロトラップダンジョン"
,"eromanga sensei" : "エロマンガ先生"
,"esp ra.de." : "エスプレイド"
,"esper mami" : "エスパー魔美"
,"eternal melody" : "エターナルメロディ"
,"eto rangers" : "十二戦支 爆烈エトレンジャー"
,"etotama" : "えとたま"
,"etrian odyssey" : "世界樹の迷宮"
,"etsuraku hyakka alegria" : "悦楽百華アレグリア"
,"euphoria" : "ユーフォリア"
,"eureka 7" : "エウレカセブン"
,"eureka seven ao" : "エウレカセブンAO"
,"eve burst error" : "EVE burst error"
,"evenicle" : "イブニクル"
,"ever 17" : "Ever17 -the out of infinity-"
,"evolution" : "EVOLUTION"
,"excel saga" : "エクセル・サーガ"
,"expelled from paradise" : "楽園追放"
,"eyeshield 21" : "アイシールド21"
,"fairy fencer f" : "フェアリーフェンサー エフ"
,"fairy ranmaru anata no kokoro otasuke shimasu" : "Fairy蘭丸～あなたの心お助けします～"
,"fairy tail" : "FAIRY TAIL"
,"fallout" : "Fallout"
,"famicom rocky" : "ファミコンロッキー"
,"family guy" : "ファミリー・ガイ"
,"family project" : "家族計画"
,"fancy lala" : "魔法のステージファンシーララ"
,"fantasista doll" : "ファンタジスタドール"
,"fantastic four" : "ファンタスティック・フォー"
,"fantasy bishoujo juniku ojisan to" : "異世界美少女受肉おじさんと"
,"fantasy earth zero" : "ファンタジーアース ゼロ"
,"far cry" : "FAR CRY"
,"far east of eden kabuki klash" : "天外魔境 真伝"
,"fatal frame" : "零"
,"fatal fury" : "餓狼伝説"
,"fate apocrypha" : "Fate/Apocrypha"
,"fate extra" : "Fate/EXTRA"
,"fate grand order" : "Fate/Grand Order"
,"fate hollow ataraxia" : "Fate/hollow ataraxia"
,"fate kaleid liner prisma illya" : "Fate/kaleid liner プリズマ☆イリヤ"
,"fate prototype" : "Fate/Prototype"
,"fate samurai remnant" : "Fate/Samurai Remnant"
,"fate stay night" : "Fate/stay night"
,"fate zero" : "Fate/Zero"
,"fear and hunger" : "FEAR&HUNGER"
,"fifth twin" : "Fifth～Twin～"
,"fight class 3" : "Fight Class 3"
,"fight ippatsu juuden-chan" : "ファイト一発! 充電ちゃん!!"
,"fighting vipers" : "ファイティングバイパーズ"
,"figure 17" : "フィギュア17 つばさ&ヒカル"
,"final fantasy" : "ファイナルファンタジー"
,"final fantasy brave exvius" : "ファイナルファンタジー ブレイブエクスヴィアス"
,"final fantasy crystal chronicles" : "ファイナルファンタジー・クリスタルクロニクル"
,"final fantasy fables chocobos dungeon" : "チョコボの不思議なダンジョン 時忘れの迷宮"
,"final fantasy gaiden" : "光の4戦士 -ファイナルファンタジー外伝-"
,"final fantasy ii" : "ファイナルファンタジーII"
,"final fantasy iii" : "ファイナルファンタジーIII"
,"final fantasy iv" : "ファイナルファンタジーIV"
,"final fantasy ix" : "ファイナルファンタジーIX"
,"final fantasy legend ii" : "ファイナルファンタジーレジェンズII 時空の水晶"
,"final fantasy tactics" : "ファイナルファンタジータクティクス"
,"final fantasy tactics a2" : "ファイナルファンタジータクティクス A2 封穴のグリモア"
,"final fantasy tactics advance" : "ファイナルファンタジータクティクスアドバンス"
,"final fantasy type-0" : "ファイナルファンタジー零式"
,"final fantasy unlimited" : "FF：U～ファイナルファンタジー：アンリミテッド"
,"final fantasy v" : "ファイナルファンタジーV"
,"final fantasy vi" : "ファイナルファンタジーVI"
,"final fantasy vii" : "ファイナルファンタジーVII"
,"final fantasy viii" : "ファイナルファンタジーVIII"
,"final fantasy x" : "ファイナルファンタジーX"
,"final fantasy x-2" : "ファイナルファンタジーX-2"
,"final fantasy xi" : "ファイナルファンタジーXI"
,"final fantasy xii" : "ファイナルファンタジーXII"
,"final fantasy xiii" : "ファイナルファンタジーXIII"
,"final fantasy xiv" : "ファイナルファンタジーXIV"
,"final fantasy xv" : "ファイナルファンタジーXV"
,"final fantasy xvi" : "ファイナルファンタジーXVI"
,"final fight" : "ファイナルファイト"
,"final romance" : "アイドル麻雀ファイナルロマンス"
,"fire emblem" : "ファイアーエムブレム"
,"fire emblem awakening" : "ファイアーエムブレム 覚醒"
,"fire emblem engage" : "ファイアーエムブレム エンゲージ"
,"fire emblem fates" : "ファイアーエムブレムif"
,"fire emblem gaiden" : "ファイアーエムブレム外伝"
,"fire emblem genealogy of the holy war" : "ファイアーエムブレム 聖戦の系譜"
,"fire emblem heroes" : "ファイアーエムブレム ヒーローズ"
,"fire emblem if" : "ファイアーエムブレムif"
,"fire emblem mystery of the emblem" : "ファイアーエムブレム 紋章の謎"
,"fire emblem path of radiance" : "ファイアーエムブレム 蒼炎の軌跡"
,"fire emblem radiant dawn" : "ファイアーエムブレム 暁の女神"
,"fire emblem the binding blade" : "ファイアーエムブレム 封印の剣"
,"fire emblem the blazing blade" : "ファイアーエムブレム 烈火の剣"
,"fire emblem the sacred stones" : "ファイアーエムブレム 聖魔の光石"
,"fire emblem thracia 776" : "ファイアーエムブレム トラキア776"
,"fire emblem three houses" : "ファイアーエムブレム 風花雪月"
,"fireball" : "ファイアボール"
,"firefighter daigo of fire company m" : "め組の大吾"
,"fist of the north star" : "北斗の拳"
,"fit boxing" : "Fit Boxing"
,"five nights at freddys" : "Five Nights at Freddy's"
,"flame of recca" : "烈火の炎"
,"flcl" : "フリクリ"
,"flip flappers" : "フリップフラッパーズ"
,"floral magician mary bell" : "花の魔法使いマリーベル"
,"flower knight girl" : "FLOWER KNIGHT GIRL"
,"flying witch" : "ふらいんぐうぃっち"
,"forgotten worlds" : "ロストワールド"
,"fortnite" : "フォートナイト"
,"fortune arterial" : "FORTUNE ARTERIAL"
,"fortune quest" : "フォーチュンクエスト"
,"fosters home for imaginary friends" : "フォスターズ・ホーム"
,"fractale" : "フラクタル-FRACTALE-"
,"frame arms girl" : "フレームアームズ・ガール"
,"franken fran" : "フランケン・ふらん"
,"frankenstein" : "フランケンシュタイン"
,"free" : "Free!"
,"freezing" : "フリージング"
,"fresh precure" : "フレッシュプリキュア！"
,"friday night funkin" : "フライデーナイトファンキン"
,"friday the 13th" : "13日の金曜日"
,"from argonavis" : "from ARGONAVIS"
,"frozen" : "アナと雪の女王"
,"fruits basket" : "フルーツバスケット"
,"fujiyama-san wa shishunki" : "富士山さんは思春期"
,"fukai ni nemuru oujo no abaddon" : "腐界に眠る王女のアバドーン"
,"full bokko heroes" : "フルボッコヒーローズ"
,"full metal daemon muramasa" : "装甲悪鬼村正"
,"full metal panic" : "フルメタルパニック！"
,"full moon o sagashite" : "満月をさがして"
,"full service" : "FULL SERVICE"
,"fullmetal alchemist" : "鋼の錬金術師"
,"fumetsu no anata e" : "不滅のあなたへ"
,"fun fun pharmacy" : "ふしぎ魔法ファンファンファーマシィー"
,"furai no shiren gaiden onna kenshi asuka kenzan" : "不思議のダンジョン 風来のシレン外伝 女剣士アスカ見参!"
,"fushigi no umi no nadia" : "ふしぎの海のナディア"
,"fushigi tsuushin toilet no hanako-san" : "ふしぎ通信 トイレの花子さん"
,"fushigi yuugi" : "ふしぎ遊戯"
,"fushigiboshi no futagohime" : "ふしぎ星のふたご姫"
,"futaba channel" : "ふたば☆ちゃんねる"
,"futakoi" : "双恋"
,"futari ecchi" : "ふたりエッチ"
,"futari no lotte" : "ふたりのロッテ"
,"futari wa precure splash star" : "ふたりはプリキュア Splash Star"
,"futari wa pretty cure" : "ふたりはプリキュア"
,"futoku no guild" : "不徳のギルド"
,"futsuu no joshikousei ga locodol yattemita." : "普通の女子校生が【ろこどる】やってみた。"
,"futurama" : "フューチュラマ"
,"future boy conan" : "未来少年コナン"
,"future card buddyfight" : "フューチャーカード バディファイト"
,"future gpx cyber formula" : "新世紀GPXサイバーフォーミュラ"
,"fuurai no shiren" : "風来のシレン"
,"fuuun ishin dai shogun" : "風雲維新ダイ☆ショーグン"
,"f-zero" : "F-ZERO"
,"g gundam" : "機動武闘伝Gガンダム"
,"g senjou no maou" : "G線上の魔王"
,"ga geijutsuka art design class" : "GA 芸術科アートデザインクラス"
,"gabriel dropout" : "ガブリールドロップアウト"
,"gad guard" : "GAD GUARD"
,"gag manga biyori" : "ギャグマンガ日和"
,"gaiking" : "ガイキング"
,"gaikotsu kishi-sama tadaima isekai e odekakechuu" : "骸骨騎士様、只今異世界へお出掛け中"
,"gaist crusher" : "ガイストクラッシャー"
,"gakkou gurashi" : "がっこうぐらし!"
,"gakkou no kaidan" : "学校の怪談"
,"gakuen alice" : "学園アリス"
,"gakuen heaven" : "学園ヘヴン BOY'S LOVE SCRAMBLE!"
,"gakuen saimin reido" : "学園催眠隷奴 ～さっきまで、大嫌いだったはずなのに"
,"gakuen sousei nekoten" : "学園創世 猫天！"
,"gakusen toshi asterisk" : "学戦都市アスタリスク"
,"galactic drifter vifam" : "銀河漂流バイファム"
,"galaxy angel" : "ギャラクシーエンジェル"
,"galaxy cyclone braiger" : "銀河旋風ブライガー"
,"galaxy express 999" : "銀河鉄道999"
,"galaxy fight" : "ギャラクシーファイト"
,"galaxy fraulein yuna" : "銀河お嬢様伝説ユナ"
,"galilei donna" : "ガリレイドンナ"
,"gall force" : "ガルフォース"
,"galleria no chika meikyuu to majo no ryodan" : "ガレリアの地下迷宮と魔女ノ旅団"
,"gals panic" : "ギャルズパニック"
,"galzoo island" : "GALZOOアイランド"
,"gamba no bouken" : "ガンバの冒険"
,"game of thrones" : "ゲーム・オブ・スローンズ"
,"game tengoku" : "ゲーム天国"
,"gamers" : "ゲーマーズ"
,"ganbare goemon" : "がんばれゴエモン"
,"gangsta." : "GANGSTA."
,"gankutsuou" : "巌窟王"
,"gantz" : "GANZ"
,"gaogaigar" : "勇者王ガオガイガー"
,"ga-rei" : "喰霊"
,"garo vanishing line" : "牙狼-GARO- -VANISHING LINE-"
,"gasaraki" : "ガサラキ"
,"gatchaman" : "ガッチャマン"
,"gatchaman crowds" : "ガッチャマン クラウズ"
,"gate - jieitai kano chi nite kaku tatakaeri" : "ゲート 自衛隊 彼の地にて、斯く戦えり"
,"gate keepers" : "ゲートキーパーズ"
,"gau gau wata" : "ガウガウわー太"
,"gdgd fairies" : "gdgd妖精s"
,"gear fighter dendoh" : "GEAR戦士電童"
,"gears of war" : "Gears of War"
,"gegege no kitarou" : "ゲゲゲの鬼太郎"
,"gekkan shoujo nozaki-kun" : "月刊少女野崎くん"
,"generation of chaos" : "ジェネレーションオブカオス"
,"geneshaft" : "ジーンシャフト"
,"genji tsuushin agedama" : "ゲンジ通信あげだま"
,"genjitsu shugi yuusha no oukoku saikenki" : "現実主義勇者の王国再建記"
,"genki bakuhatsu ganbaruger" : "元気爆発ガンバルガー"
,"genmu senki leda" : "幻夢戦記レダ"
,"genshiken" : "げんしけん"
,"genshin impact" : "原神"
,"gensou suikoden" : "幻想水滸伝"
,"geobreeders" : "ジオブリーダーズ"
,"getbackers" : "GetBackers-奪還屋-"
,"getsumen to heiki mina" : "月面兎兵器ミーナ"
,"getsuyoubi no tawawa" : "月曜日のたわわ"
,"getter robo" : "ゲッターロボ"
,"ghost in the shell" : "攻殻機動隊"
,"ghost sweeper mikami" : "GS美神 極楽大作戦!!"
,"ghostbusters" : "ゴーストバスターズ"
,"ghosts n goblins" : "魔界村"
,"giant gorg" : "巨神ゴーグ"
,"giant killing" : "GIANT KILLING"
,"giant robo" : "ジャイアントロボ"
,"gigant" : "GIGANT"
,"ginga e kickoff" : "銀河へキックオフ!!"
,"ginga sengoku gun yuuden rai" : "銀河戦国群雄伝ライ"
,"gingitsune" : "ぎんぎつね"
,"gintama" : "銀魂"
,"girl friend beta" : "ガールフレンド（仮）"
,"girlish number" : "ガーリッシュ ナンバー"
,"girls band cry" : "ガールズバンドクライ"
,"girls bravo" : "GIRLSブラボー"
,"girls frontline" : ["ガールズフロントライン", "ドールズフロントライン"]
,"girls frontline neural cloud" : "ドールズフロントライン：ニューラルクラウド"
,"girls high" : "女子高生"
,"girls und panzer" : "ガールズ＆パンツァー"
,"girumasu" : "ギルドの受付嬢ですが、残業は嫌なのでボスをソロ討伐しようと思います"
,"gj-bu" : "GJ部"
,"glass mask" : "ガラスの仮面"
,"gleipnir" : "グレイプニル"
,"gnosia" : "グノーシア"
,"go princess precure" : "Go！プリンセスプリキュア"
,"goblin slayer" : "ゴブリンスレイヤー"
,"gochuumon wa usagi desu ka" : "ご注文はうさぎですか？"
,"god eater" : "ゴッドイーター"
,"goddess kiss" : "女神にキスを～Goddess Kiss～"
,"goddess of victory nikke" : "勝利の女神：NIKKE"
,"godzilla" : "ゴジラ"
,"gogo sentai boukenger" : "轟轟戦隊ボウケンジャー"
,"gokujou seitokai" : "極上生徒会"
,"gokuto jihen" : "獄都事変"
,"golden axe" : "ゴールデンアックス"
,"golden boy" : "GOLDEN BOY"
,"golden kamuy" : "ゴールデンカムイ"
,"golden time" : "ゴールデンタイム"
,"goldfish warning" : "きんぎょ注意報!"
,"goldieblox" : "GoldieBlox"
,"g-on riders" : "G-onらいだーす"
,"goof troop" : "パパはグーフィー"
,"gosei sentai dairanger" : "五星戦隊ダイレンジャー"
,"gosenzo san-e" : "御先祖賛江"
,"goshogun" : "戦国魔神ゴーショーグン"
,"goshujin-sama to kemonomimi no shoujo mel" : "ご主人様と獣耳の少女メル"
,"goshuushou-sama ninomiya-kun" : "ご愁傷さま二ノ宮くん"
,"gosick" : "GOSICK -ゴシック-"
,"gotcha force" : "ガチャフォース"
,"gothic wa mahou otome" : "ゴシックは魔法乙女"
,"gotoubun no hanayome" : "五等分の花嫁"
,"graduation" : "卒業"
,"granado espada" : "グラナド・エスパダ"
,"granblue fantasy" : "グランブルーファンタジー"
,"grancrest senki" : "グランクレスト戦記"
,"grand blue" : "ぐらんぶる"
,"grand chase" : "グランドチェイス"
,"grander musashi" : "スーパーフィッシング グランダー武蔵"
,"grandia" : "グランディア"
,"grandmaster of demonic cultivation" : "魔道祖師"
,"grappler baki" : "グラップラー刃牙"
,"gravion" : "超重神グラヴィオン"
,"gravity falls" : "怪奇ゾーン グラビティフォールズ"
,"gravity rush" : "GRAVITY DAZE"
,"great dangaioh" : "破邪巨星Gダンガイオー"
,"great mazinger" : "グレートマジンガー"
,"green akizora no screen" : "GREEN～秋空のスクリーン～"
,"green green" : "グリーングリーン"
,"grenadier" : "グレネーダー"
,"grendizer" : ["グレンダイザー", "UFOロボ グレンダイザー"]
,"grimms notes" : "グリムノーツ"
,"grimoire shiritsu grimoire mahou gakuen" : "グリモア～私立グリモワール魔法学園～"
,"grisaia no kajitsu" : "グリザイアの果実"
,"groove adventure rave" : "RAVE"
,"ground defense force mao-chan" : "陸上防衛隊まおちゃん"
,"growlanser" : "グローランサー"
,"g-taste" : "G-taste"
,"guardian heroes" : "ガーディアンヒーローズ"
,"guardian tales" : "ガーディアンテイルズ"
,"guardians of the galaxy" : "ガーディアンズ・オブ・ギャラクシー"
,"gu-gu ganmo" : "Gu-Guガンモ"
,"gugure kokkuri-san" : "繰繰れ! コックリさん"
,"guild wars" : "ギルドウォーズ"
,"guilty crown" : "ギルティクラウン"
,"guilty gear" : "ギルティギア"
,"guitarfreaks and drummania" : "GITADORA"
,"gun x sword" : "ガン×ソード"
,"gunbird" : "Gunbird"
,"gunbuster" : "トップをねらえ!"
,"gundam" : "ガンダム"
,"gundam 00" : "機動戦士ガンダム00"
,"gundam 0080" : "機動戦士ガンダム0080"
,"gundam 0083" : "機動戦士ガンダム0083"
,"gundam age" : "機動戦士ガンダムAGE"
,"gundam breaker mobile" : "ガンダムブレイカーモバイル"
,"gundam build divers" : "ガンダムビルドダイバーズ"
,"gundam build fighters" : "ガンダムビルドファイターズ"
,"gundam build fighters try" : "ガンダムビルドファイターズトライ"
,"gundam exa" : "ガンダムEXA"
,"gundam f91" : "機動戦士ガンダムF91"
,"gundam g no reconguista" : "ガンダム Gのレコンギスタ"
,"gundam seed" : "機動戦士ガンダムSEED"
,"gundam seed destiny" : "機動戦士ガンダムSEED DESTINY"
,"gundam unicorn" : "機動戦士ガンダムUC"
,"gundam wing" : "新機動戦記ガンダムW"
,"gundam x" : "機動新世紀ガンダムX"
,"gundam zz" : "機動戦士ガンダムZZ"
,"gunparade march" : "ガンパレード・マーチ"
,"gunparade orchestra" : "ガンパレード・オーケストラ"
,"gunslinger girl" : "GUNSLINGER GIRL"
,"gunslinger stratos" : "ガンスリンガー ストラトス"
,"gunsmith cats" : "ガンスミスキャッツ"
,"guyver" : ["ガイバー", "強殖装甲ガイバー"]
,"gyee" : "サンクタス戦記-GYEE-"
,"gyousatsu shinsengumi" : "行殺♥新選組"
,"h2" : "H2"
,"hachigatsu no cinderella nine" : "八月のシンデレラナイン"
,"hachi-nan tte sore wa nai deshou" : "八男って、それはないでしょう！"
,"hacka doll" : "ハッカドール"
,"hadaka shitsuji" : "裸執事"
,"hades" : "HADES"
,"hades project zeorymer" : "冥王計画ゼオライマー"
,"hai to gensou no grimgar" : "灰と幻想のグリムガル"
,"haikyuu" : "ハイキュー！！"
,"haite kudasai takamine-san" : "履いてください、鷹峰さん"
,"haiyore nyaruko-san" : "這いよれ! ニャル子さん"
,"hajime no ippo" : "はじめの一歩"
,"hajimete no aku" : "はじめてのあく"
,"hajimete no gal" : "はじめてのギャル"
,"hajimete no hitozuma" : "初めてのヒトヅマ"
,"hajimete no oishasan" : "はじめてのおいしゃさん"
,"hajimete no orusuban" : "はじめてのおるすばん"
,"hajimete no otetsudai" : "はじめてのおてつだい"
,"hakkenden" : "八犬伝"
,"hakuouki" : "薄桜鬼"
,"hakushon daimaou" : "ハクション大魔王"
,"halloween" : "ハロウィン"
,"halo" : "HALO"
,"hamidashi creative" : "ハミダシクリエイティブ"
,"hamtaro" : "とっとこハム太郎"
,"hana awase" : "華あわせ"
,"hana no ko lunlun" : "花の子ルンルン"
,"hanamaru youchien" : "はなまる幼稚園"
,"hanasaku iroha" : "花咲くいろは"
,"hanaukyo maid tai" : "花右京メイド隊"
,"hanayamata" : "ハナヤマタ"
,"hanazuki full of treasures" : "Hanazuki: Full of Treasures"
,"hand maid may" : "HAND MAID メイ"
,"hanebado" : "はねバド!"
,"hansel and gretel" : "ヘンゼルとグレーテル"
,"happiness" : "はぴねす！"
,"happinesscharge precure" : "ハピネスチャージプリキュア！"
,"happy lesson" : "HAPPY★LESSON"
,"happy sugar life" : "ハッピーシュガーライフ"
,"happy tree friends" : "Happy Tree Friends"
,"hapymaher" : "ハピメア"
,"harbor light story fashion lala yori" : "ハーバーライト物語 ファッションララより"
,"hare tokidoki buta" : "はれときどきぶた"
,"harem ace" : "ハーレムエース"
,"harry potter" : "ハリーポッター"
,"haruka ni aogi uruwashi no" : "遥かに仰ぎ、麗しの"
,"harukana receive" : "はるかなレシーブ"
,"harukanaru toki no naka de" : "遙かなる時空の中で"
,"harukanaru toki no naka de 3" : "遙かなる時空の中で3"
,"harukoi otome" : "春恋＊乙女"
,"haruru minamo ni" : "はるるみなもに！"
,"harvest moon" : "牧場物語"
,"hataage kemono michi" : "旗揚!けものみち"
,"hataraku maou-sama" : "はたらく魔王さま!"
,"hataraku onii-san" : "働くお兄さん！"
,"hataraku saibou" : "はたらく細胞"
,"hateshinaku aoi kono sora no shita de..." : "果てしなく青い、この空の下で…"
,"hatsukoi" : "初恋"
,"hatsukoi limited" : "初恋限定。"
,"hatsukoi zombie" : "初恋ゾンビ"
,"hatsuyuki sakura" : "はつゆきさくら"
,"hayate no gotoku" : "ハヤテのごとく！！"
,"haydee" : "Haydee"
,"hazbin hotel" : "ハズビン・ホテル"
,"he is my master" : "これが私の御主人様"
,"healin good precure" : "ヒーリングっど♥プリキュア"
,"heart catch izumi-chan" : "ハートキャッチいずみちゃん"
,"heartcatch precure" : "ハートキャッチプリキュア！"
,"heartful maman" : "は～とふるママン"
,"heaven burns red" : "ヘブンバーンズレッド"
,"heavens memo pad" : "神様のメモ帳"
,"heavy metal l-gaim" : "重戦機エルガイム"
,"heavy object" : "ヘヴィーオブジェクト"
,"heike monogatari" : "平家物語"
,"heion sedai no idaten-tachi" : "平穏世代の韋駄天達"
,"helios rising heroes" : "エリオスライジングヒーローズ"
,"hell teacher nube" : "地獄先生ぬーべー"
,"helldivers" : "HELLDIVERS"
,"hello kitty" : "ハローキティ"
,"hellsing" : "HELLSING"
,"helltaker" : "Helltaker"
,"helluva boss" : "ヘルヴァ・ボス"
,"hengen sennin asuka" : "変幻戦忍アスカ"
,"henshin" : "へんし～ん！"
,"hentai heroes" : "Hentai Heroes"
,"hentai ouji to warawanai neko" : "変態王子と笑わない猫。"
,"hercules" : "ハーキュリーズ"
,"hero bank" : "ヒーローバンク"
,"heroic age" : "ヒロイック・エイジ"
,"heroman" : "HEROMAN"
,"heybot" : "ヘボット！"
,"hi hi puffy amiyumi" : "ハイ!ハイ! パフィー・アミユミ"
,"hibike euphonium" : "響け! ユーフォニアム"
,"hidamari sketch" : "ひだまりスケッチ"
,"hidan no aria" : "緋弾のアリア"
,"hi-fi rush" : "Hi-Fi RUSH"
,"higanbana no saku yoru ni" : "彼岸花の咲く夜に"
,"hige o soru. soshite joshikousei o hirou." : "ひげを剃る。そして女子高生を拾う。"
,"high school fleet" : "ハイスクール・フリート"
,"high school kimengumi" : "ハイスクール!奇面組"
,"high school mystery gakuen nanafushigi" : "ハイスクールミステリー学園七不思議"
,"high score girl" : "ハイスコアガール"
,"highschool dxd" : "ハイスクールD×D"
,"highschool of the dead" : "学園黙示録 HIGHSCHOOL OF THE DEAD"
,"higurashi no naku koro ni" : "ひぐらしのなく頃に"
,"hihouden" : "秘宝伝"
,"hikarian" : "超特急ヒカリアン"
,"hikaru ga shinda natsu" : "光が死んだ夏"
,"hikaru no go" : "ヒカルの碁"
,"hikikomari kyuuketsuki no monmon" : "ひきこまり吸血姫の悶々"
,"hikounin sentai akibaranger" : "非公認戦隊アキバレンジャー"
,"hilda" : "ヒルダの冒険"
,"hima-ten" : "ひまてん！"
,"hime chen otogi chikku idol lilpri" : "ひめチェン！おとぎちっくアイドル リルぷりっ"
,"hime kishi lilia" : "姫騎士リリア"
,"hime to boin" : "姫とボイン"
,"hime-chans ribbon" : "姫ちゃんのリボン"
,"himekishi angelica" : "姫騎士アンジェリカ"
,"himesama goumon no jikan desu" : "姫様“拷問”の時間です"
,"himitsu no aipri" : "ひみつのアイプリ"
,"himitsu no akko-chan" : "ひみつのアッコちゃん"
,"himitsu sentai metamor v" : "ひみつ戦隊メタモルV"
,"himouto umaru-chan" : "干物妹!うまるちゃん"
,"hinabita" : "ひなビタ♪"
,"hinako note" : "ひなこのーと"
,"hinamatsuri" : "ヒナまつり"
,"hinomaru-zumou" : "火ノ丸相撲"
,"hirogaru sky precure" : "ひろがるスカイ！プリキュア"
,"hiseki shinki arcana saber" : "秘蹟神姫アルカナセイバー"
,"historys strongest disciple kenichi" : "史上最強の弟子ケンイチ"
,"hitomi no karte" : "ひとみのカルテ"
,"hitori bocchi no marumaru seikatsu" : "ひとりぼっちの○○生活"
,"hitsugi no chaika" : "棺姫のチャイカ"
,"hizashi no naka no real" : "陽射しの中のリアル"
,"hokenshitsu no shinigami" : "保健室の死神"
,"hollow knight" : "Hollow Knight"
,"hololive" : "ホロライブ"
,"holy knight" : "Holy Knight"
,"homestuck" : "Homestuck"
,"honey and clover" : "ハチミツとクローバー"
,"honkai gakuen" : "崩壊学園"
,"honkai star rail" : "崩壊スターレイル"
,"honor of kings" : "王者栄耀"
,"honzuki no gekokujou" : "本好きの下剋上"
,"hoozuki no reitetsu" : "鬼灯の冷徹"
,"horimiya" : "ホリミヤ"
,"horizon zero dawn" : "Horizon Zero Dawn"
,"hoshi no samidare" : "惑星のさみだれ"
,"hoshizora e kakaru hashi" : "星空へ架かる橋"
,"hoshizora no memoria" : "星空のメモリア"
,"hotel transylvania" : "モンスター・ホテル"
,"houkago no pleiades" : "放課後のプレアデス"
,"houkago play" : "放課後プレイ"
,"houkago saikoro club" : "放課後さいころ倶楽部"
,"houkago teibou nisshi" : "放課後ていぼう日誌"
,"hourou musuko" : "放浪息子"
,"houseki no kuni" : "宝石の国"
,"housekishou richard-shi no nazo kantei" : "宝石商リチャード氏の謎鑑定"
,"houshin engi" : "封神演義"
,"how to train your dragon" : "ヒックとドラゴン"
,"howls moving castle" : "ハウルの動く城"
,"hugtto precure" : "HUGっと！プリキュア"
,"hulu xiongdi" : "ひょうたん童子"
,"hundred" : "ハンドレッド"
,"huniepop" : "ハニーポップ"
,"hunter x hunter" : "HUNTER×HUNTER"
,"hurricane polymar" : "破裏拳ポリマー"
,"huyao xiao hongniang" : "縁結びの妖狐ちゃん"
,"hyakka ryouran samurai girls" : "百花繚乱 SAMURAI GIRLS"
,"hyakko" : "ヒャッコ"
,"hyakugojuunenme no mahoutsukai" : "百五十年目の魔法使い"
,"hyakujuu sentai gaoranger" : "百獣戦隊ガオレンジャー"
,"hyakuren no haou to seiyaku no valkyria" : "百錬の覇王と聖約の戦乙女"
,"hyoui henshin extra souls" : "憑依変身エクストラソウルズ"
,"hyouka" : "氷菓"
,"hyouryuu kyoushitsu" : "漂流教室"
,"hyper anna" : "ハイパーあんな"
,"hyper doll" : "ハイパードール"
,"hyper police" : "はいぱーぽりす"
,"hyperdimension neptunia" : "超次元ゲイム ネプテューヌ"
,"hypnosis mic" : "ヒプノシスマイク"
,"i my me strawberry eggs" : "あぃまぃみぃ！ストロベリー・エッグ"
,"ib" : "Ib"
,"ibara no ou" : "いばらの王"
,"ichiban ushiro no daimaou" : "いちばんうしろの大魔王"
,"ichibanyu no kanata" : "一番湯のカナタ"
,"ichigeki sacchu hoihoi-san" : "一撃殺虫!!ホイホイさん"
,"ichigo 100" : "いちご100％"
,"ichigo mashimaro" : "苺ましまろ"
,"iczer" : "戦え!!イクサー1"
,"id invaded" : "ID：INVADED イド：インヴェイデッド"
,"idejuu" : "いでじゅう！"
,"identity v" : "IdentityV 第五人格"
,"idol defense force hummingbird" : "アイドル防衛隊ハミングバード"
,"idol densetsu eriko" : "アイドル伝説えり子"
,"idol janshi suchie-pai" : "アイドル雀士スーチーパイ"
,"idol project" : "アイドルプロジェクト"
,"idol tenshi youkoso yoko" : "アイドル天使ようこそようこ"
,"idol wars z" : "アイドルうぉーずZ"
,"idola phantasy star saga" : "イドラ ファンタシースターサーガ"
,"idolish7" : "アイドリッシュセブン"
,"idoly pride" : "IDOLY PRIDE"
,"igpx" : "IGPX"
,"ijiranaide nagatoro-san" : "イジらないで、長瀞さん"
,"ikemen sengoku" : ["イケメン戦国", "イケメン戦国◆時をかける恋"]
,"ikenai luna sensei" : "いけない!ルナ先生"
,"ikkitousen" : "一騎当千"
,"ikoku meiro no croisee" : "異国迷路のクロワーゼ"
,"ikusa otome suvia" : "戦乙女スヴィア"
,"ikusa otome valkyrie" : "戦乙女ヴァルキリー"
,"imouto sae ireba ii." : "妹さえいればいい。"
,"in search of the lost future" : "失われた未来を求めて"
,"inaka ni kaeru to yakeni natsuita kasshoku ponytail shota ga iru" : "田舎に帰るとやけになついた褐色ポニテショタがいる"
,"inari konkon koi iroha" : "いなり、こんこん、恋いろは。"
,"inazuma eleven" : "イナズマイレブン"
,"inazuma eleven go" : "イナズマイレブンGO"
,"inbi na doukutsu no sono oku de" : "淫靡な洞窟のその奥で"
,"inda no himekishi janne" : "淫堕の姫騎士ジャンヌ"
,"indigo park" : "Indigo Park"
,"infinite ryvius" : "無限のリヴァイアス"
,"infinite stratos" : "IS 〈インフィニット・ストラトス〉"
,"ingoku danchi" : "淫獄団地"
,"ingoshima" : "インゴシマ"
,"initial d" : "頭文字D"
,"injuu genmu" : "淫獣幻夢"
,"inkya lovecome" : "陰キャラブコメ"
,"inma kourin devil carnival" : "淫魔降臨デビル カーニバル"
,"inou-battle wa nichijou-kei no naka de" : "異能バトルは日常系のなかで"
,"inside out" : "インサイド・ヘッド"
,"inspector gadget" : "ガジェット警部"
,"inu x boku ss" : "妖狐×僕SS"
,"inukami" : "いぬかみっ！"
,"inuyasha" : "犬夜叉"
,"invincible" : "インビンシブル ～無敵のヒーロー～"
,"inyouchuu" : "淫妖蟲"
,"iris mysteria" : "あいりすミスティリア！"
,"irisu syndrome" : "いりす症候群!"
,"iron man" : "アイアンマン"
,"irotoridori no sekai" : "いろとりどりのセカイ"
,"irresponsible captain tylor" : "無責任艦長タイラー"
,"is" : "I”s"
,"isaku" : "遺作"
,"isekai cheat magician" : "異世界チート魔術師"
,"isekai harem monogatari" : "異世界ハーレム物語"
,"isekai maou to shoukan shoujo no dorei majutsu" : "異世界魔王と召喚少女の奴隷魔術"
,"isekai meikyuu de harem o" : "異世界迷宮でハーレムを"
,"isekai no seikishi monogatari" : "異世界の聖機師物語"
,"isekai nonbiri nouka" : "異世界のんびり農家"
,"isekai ojisan" : "異世界おじさん"
,"isekai shokudou" : "異世界食堂"
,"isekai wa smartphone to tomo ni." : "異世界はスマートフォンとともに。"
,"ishuzoku reviewers" : "異種族レビュアーズ"
,"issho ni training" : "いっしょにとれーにんぐ"
,"itai no wa iya nano de bougyoryoku ni kyokufuri shitai to omoimasu." : "痛いのは嫌なので防御力に極振りしたいと思います。"
,"its not my fault that im not popular" : "私がモテないのはどう考えてもお前らが悪い!"
,"itsuka tenma no kuro usagi" : "いつか天魔の黒ウサギ"
,"ixion saga dt" : "イクシオン サーガ DT"
,"iya na kao sare nagara opantsu misete moraitai" : "嫌な顔されながらおパンツ見せてもらいたい"
,"iyashite agerun saiyuuki" : "癒してあげルン 西遊記"
,"izumo" : "IZUMO"
,"izuna legend of the unemployed ninja" : "降魔霊符伝イヅナ"
,"jack and the beanstalk" : "ジャックと豆の木"
,"jack jeanne" : "ジャックジャンヌ"
,"jackie chan adventures" : "ジャッキー・チェン・アドベンチャー"
,"jahy-sama wa kujikenai" : "ジャヒー様はくじけない!"
,"jaiden animations" : "Jaiden Animations"
,"jaja uma grooming up" : "じゃじゃ馬グルーミン★UP!"
,"jaku-chara tomozaki-kun" : "弱キャラ友崎くん"
,"jarinko chie" : "じゃりン子チエ"
,"jashin-chan dropkick" : "邪神ちゃんドロップキック"
,"jet set radio" : "ジェットセットラジオ"
,"jewelpet" : "ジュエルペット"
,"jewelpet happiness" : "ジュエルペット ハッピネス"
,"jewelpet kira deco" : "ジュエルペット きら☆デコッ！"
,"jewelpet magical change" : "ジュエルペット マジカルチェンジ"
,"jewelpet sunshine" : "ジュエルペットサンシャイン"
,"jewelpet tinkle" : "ジュエルペット てぃんくる☆"
,"jibaku shounen hanako-kun" : "地縛少年花子くん"
,"jigoku shoujo" : "地獄少女"
,"jigokuraku" : "地獄楽"
,"jijou wo shiranai tenkousei ga guigui kuru." : "事情を知らない転校生がグイグイくる。"
,"jikkyou powerful pro yakyuu" : "実況パワフルプロ野球"
,"jimoto saikou" : "地元最高！"
,"jin ping mei" : "金瓶梅"
,"jinki" : "ジンキ"
,"jinrou judgement" : "人狼 ジャッジメント"
,"jinrui wa suitai shimashita" : "人類は衰退しました"
,"jinsei" : "人生"
,"jinzou konchuu kabutoborg vxv" : "人造昆虫カブトボーグ V×V"
,"jitaku keibiin" : "自宅警備員"
,"jitsu wa ore saikyou deshita" : "実は俺、最強でした？"
,"jitsu wa watashi wa" : "実は私は"
,"jojos bizarre adventure" : "ジョジョの奇妙な冒険"
,"joker game" : "ジョーカー・ゲーム"
,"jormungand" : "ヨルムンガンド"
,"joshi kausei" : "女子かう生"
,"joshiraku" : "じょしらく"
,"josou jinja" : "女装神社"
,"josou sanmyaku" : "女装山脈"
,"joukamachi no dandelion" : "城下町のダンデライオン"
,"jouki toshi no tantei shoujo" : "蒸気都市の探偵少女"
,"journey to the west" : "西遊記"
,"jubei-chan" : "十兵衛ちゃん"
,"jujutsu kaisen" : "呪術廻戦"
,"jungle de ikou" : "ジャングルDEいこう！"
,"jungle wa itsumo hare nochi guu" : "ジャングルはいつもハレのちグゥ"
,"junketsu no maria" : "純潔のマリア"
,"jurassic tripper" : "恐竜冒険記ジュラトリッパー"
,"just because" : "Just Because!"
,"justice league" : "ジャスティス・リーグ"
,"jutaijima" : "受胎島"
,"juujika" : "十字架"
,"juuken sentai gekiranger" : "獣拳戦隊ゲキレンジャー"
,"juuni taisen" : "十二大戦"
,"juusenshi gulkeeva" : "獣戦士ガルキーバ"
,"juusou kikou dancougar nova" : "獣装機攻ダンクーガノヴァ"
,"juuza engi" : "十三支演義"
,"k" : "K"
,"k.o. beast" : "KO世紀ビースト三獣士"
,"kaerunyo panyorn" : "かえるにょぱにょーん"
,"kagaku chop" : "カガクチョップ"
,"kagaku na yatsura" : "カガクなヤツら"
,"kage no jitsuryokusha ni naritakute" : "陰の実力者になりたくて！"
,"kagerou project" : "カゲロウプロジェクト"
,"kagihime monogatari eikyuu alice rondo" : "鍵姫物語 永久アリス輪舞曲"
,"kagura douchuuki" : "神楽道中記"
,"kagura reimeiki" : "神楽黎明記"
,"kaguya-sama wa kokurasetai" : "かぐや様は告らせたい"
,"kaichou wa maid-sama" : "会長はメイド様!"
,"kaidan restaurant" : "怪談レストラン"
,"kaifuku jutsushi no yarinaoshi" : "回復術士のやり直し"
,"kaii to otome to kamikakushi" : "怪異と乙女と神隠し"
,"kaiji" : "賭博黙示録カイジ"
,"kaijin kaihatsubu no kuroitsu-san" : "怪人開発部の黒井津さん"
,"kaiju girls" : ["怪獣娘", "怪獣娘 ～ウルトラ怪獣擬人化計画～"]
,"kaijuu 8-gou" : "怪獣8号"
,"kaiketsu zorori" : "かいけつゾロリ"
,"kaiko sareta ankoku heishi 30-dai no slow na second life" : "解雇された暗黒兵士（30代）のスローなセカンドライフ"
,"kaiten mutenmaru" : "回転むてん丸"
,"kaitou joker" : "怪盗ジョーカー"
,"kaitou sentai lupinranger vs keisatsu sentai patranger" : "快盗戦隊ルパンレンジャーVS警察戦隊パトレンジャー"
,"kaitou tenshi twin angel" : "快盗天使ツインエンジェル"
,"kaizoku sentai gokaiger" : "海賊戦隊ゴーカイジャー"
,"kakegurui" : "賭ケグルイ"
,"kakkou no iinazuke" : "カッコウの許嫁"
,"kakuchou shoujo-kei trinary" : "拡張少女系トライナリー"
,"kaku-san-sei million arthur" : "拡散性ミリオンアーサー"
,"kakushigoto" : "かくしごと"
,"kakyuusei" : "下級生"
,"kaleido star" : "カレイドスター"
,"kamen no maid guy" : "仮面のメイドガイ"
,"kamen rider" : "仮面ライダー"
,"kamen rider 555" : "仮面ライダー555"
,"kamen rider amazon" : "仮面ライダーアマゾン"
,"kamen rider black sun" : "仮面ライダーBLACK SUN"
,"kamen rider blade" : "仮面ライダー剣"
,"kamen rider build" : "仮面ライダービルド"
,"kamen rider decade" : "仮面ライダーディケイド"
,"kamen rider den-o" : "仮面ライダー電王"
,"kamen rider drive" : "仮面ライダードライブ"
,"kamen rider ex-aid" : "仮面ライダーエグゼイド"
,"kamen rider fourze" : "仮面ライダーフォーゼ"
,"kamen rider gavv" : "仮面ライダーガヴ"
,"kamen rider geats" : "仮面ライダーギーツ"
,"kamen rider gotchard" : "仮面ライダーガッチャード"
,"kamen rider hibiki" : "仮面ライダー響鬼"
,"kamen rider kabuto" : "仮面ライダーカブト"
,"kamen rider kuuga" : "仮面ライダークウガ"
,"kamen rider ooo" : "仮面ライダーオーズ"
,"kamen rider revice" : "仮面ライダーリバイス"
,"kamen rider saber" : "仮面ライダーセイバー"
,"kamen rider w" : "仮面ライダーW"
,"kamen rider wizard" : "仮面ライダーウィザード"
,"kamen rider zero-one" : "仮面ライダーゼロワン"
,"kamen rider zi-o" : "仮面ライダージオウ"
,"kami no rhapsody" : "神のラプソディ"
,"kamichu" : "かみちゅ!"
,"kamidori alchemy meister" : "神採りアルケミーマイスター"
,"kamigami no asobi" : "神々の遊び"
,"kamihime project" : "神姫PROJECT"
,"kamikaze kaitou jeanne" : "神風怪盗ジャンヌ"
,"kaminaki sekai no kamisama katsudou" : "神無き世界のカミサマ活動"
,"kamisama dolls" : "神様ドォルズ"
,"kamisama minarai himitsu no cocotama" : "かみさまみならい ヒミツのここたま"
,"kamisama ni natta hi" : "神様になった日"
,"kami-sama no inai nichiyoubi" : "神さまのいない日曜日"
,"kampfer" : "けんぷファー"
,"kanamemo" : "かなめも"
,"kanata no astra" : "彼方のアストラ"
,"kandagawa jet girls" : "神田川JET GIRLS"
,"kangoku senkan" : "監獄戦艦"
,"kangokutou mary skelter" : "神獄塔 メアリスケルター"
,"kannagi" : "かんなぎ"
,"kannagi no tori" : "神無ノ鳥"
,"kannazuki no miko" : "神無月の巫女"
,"kanojo mo kanojo" : "カノジョも彼女"
,"kanojo okarishimasu" : "彼女、お借りします"
,"kanojo x kanojo x kanojo" : "彼女×彼女×彼女"
,"kanokon" : "かのこん"
,"kanon" : "KANON"
,"kanpani girls" : "かんぱに☆ガールズ"
,"kantai collection" : "艦隊これくしょん"
,"kaoru hana wa rin to saku" : "薫る花は凛と咲く"
,"kara no kyoukai" : "空の境界"
,"kara no naka no kotori" : "殻の中の小鳥"
,"kara no shoujo" : "殻ノ少女"
,"karakai jouzu no takagi-san" : "からかい上手の高木さん"
,"karakuri circus" : "からくりサーカス"
,"kare kano" : "彼氏彼女の事情"
,"kashimashi" : ["かしまし", "かしまし ～ガール・ミーツ・ガール～"]
,"kasumin" : "カスミン"
,"katanagatari" : "刀語"
,"katawa shoujo" : "かたわ少女"
,"katekyo hitman reborn" : "家庭教師ヒットマンREBORN!"
,"katri girl of the meadows" : "牧場の少女カトリ"
,"katsute mahou shoujo to aku wa tekitai shite ita." : "かつて魔法少女と悪は敵対していた。"
,"kawaii dake ja nai shikimori-san" : "可愛いだけじゃない式守さん"
,"kawaikereba hentai demo suki ni natte kuremasu ka" : "可愛ければ変態でも好きになってくれますか？"
,"kawarazaki-ke no ichizoku" : "河原崎家の一族"
,"kaze no naka no shoujo kinpatsu no jeanie" : "風の中の少女 金髪のジェニー"
,"keio flying squadron" : "慶応遊撃隊"
,"kekkai sensen" : "血界戦線"
,"kekkaishi" : "結界師"
,"kekko kamen" : "けっこう仮面"
,"kemeko deluxe" : "ケメコデラックス!"
,"kemo coliseum" : "ケモコロシアム"
,"kemono friends" : "けものフレンズ"
,"kemono jihen" : "怪物事変"
,"kemurikusa" : "ケムリクサ"
,"kengan ashura" : "ケンガンアシュラ"
,"kenja no mago" : "賢者の孫"
,"kenkou zenrakei suieibu umishou" : "ケンコー全裸系水泳部 ウミショー"
,"kenzen robo daimidaler" : "健全ロボ ダイミダラー"
,"kero kero chime" : "ケロケロちゃいむ"
,"keroro gunsou" : "ケロロ軍曹"
,"key the metal idol" : "KEY THE METAL IDOL"
,"kibou no chikara otona pretty cure 23" : "キボウノチカラ～オトナプリキュア'23～"
,"kichiku megane" : "鬼畜眼鏡"
,"kick-ass" : "キック・アス"
,"kid icarus" : "パルテナの鏡"
,"kiddy grade" : "キディ・グレイド"
,"kikai sentai zenkaiger" : "機界戦隊ゼンカイジャー"
,"kikaider" : "人造人間キカイダー"
,"kiki kaikai" : "奇々怪々"
,"kikis delivery service" : "魔女の宅急便"
,"kill blue" : "キルアオ"
,"kill la kill" : "キルラキル"
,"kill me baby" : "キルミーベイベー"
,"killing bites" : "キリングバイツ"
,"killing stalking" : "Killing Stalking"
,"kim possible" : "キム・ポッシブル"
,"kimagure orange road" : "きまぐれオレンジロード"
,"kimba the white lion" : "ジャングル大帝"
,"kimetsu no yaiba" : "鬼滅の刃"
,"kimi ga nozomu eien" : "君が望む永遠"
,"kimi ni todoke" : "君に届け"
,"kimi no koto ga daidaidaidaidaisuki na 100-nin no kanojo" : "君のことが大大大大大好きな100人の彼女"
,"kimi no na wa." : "君の名は。"
,"kimi no suizou o tabetai" : "君の膵臓をたべたい"
,"kimi to boku no saigo no senjou aruiwa sekai ga hajimaru seisen" : "キミと僕の最後の戦場、あるいは世界が始まる聖戦"
,"kimi to idol precure" : "キミとアイドルプリキュア"
,"kimi wa 008" : "君は008"
,"kimi wa houkago insomnia" : "君は放課後インソムニア"
,"kimi wa midara na boku no joou" : "君は淫らな僕の女王"
,"kimikiss" : "キミキス"
,"kindaichi shounen no jikenbo" : "金田一少年の事件簿"
,"king of fighters" : "ザ・キング・オブ・ファイターズ"
,"king of races" : "KING OF RACES"
,"kingdom" : "キングダム"
,"kingdom hearts" : "キングダム ハーツ"
,"kings raid" : "キングスレイド"
,"kin-iro loveriche" : "金色ラブリッチェ"
,"kiniro mosaic" : "きんいろモザイク"
,"kinnikuman" : "キン肉マン"
,"kinnikuman lady" : "キン肉マンレディー"
,"kino no tabi" : "キノの旅"
,"kinsou no vermeil" : "金装のヴェルメイユ"
,"kira kira" : "キラ☆キラ"
,"kirakira precure a la mode" : "キラキラ☆プリキュアアラモード"
,"kirara fantasia" : "きららファンタジア"
,"kiratto pri chan" : "キラッとプリ チャン"
,"kirby" : "星のカービィ"
,"kisaku" : "鬼作"
,"kisei juui suzune" : "寄性獣医・鈴音"
,"kisetsu no hanayome" : "季節の花嫁"
,"kishin douji zenki" : "鬼神童子ZENKI"
,"kishiryu sentai ryusoulger" : "騎士竜戦隊リュウソウジャー"
,"kishuku gakkou no juliet" : "寄宿学校のジュリエット"
,"kiss x sis" : "kiss×sis"
,"kite" : "A KITE"
,"kiteretsu daihyakka" : "キテレツ大百科"
,"kizuato" : "痕"
,"kizuna striker" : "キズナストライカー！"
,"klonoa" : "風のクロノア"
,"knights and magic" : "ナイツ&マジック"
,"knights college" : "Knights College"
,"knights of ramune" : "VS騎士ラムネ"
,"knights of sidonia" : "シドニアの騎士"
,"kobayashi-san-chi no maid dragon" : "小林さんちのメイドラゴン"
,"kochikame" : "こち亀"
,"kodoku no gourmet" : "孤独のグルメ"
,"kodomo no jikan" : "こどものじかん"
,"kodomo no omocha" : "こどものおもちゃ"
,"koe de oshigoto" : "こえでおしごと！"
,"koe no katachi" : "聲の形"
,"koi iro marriage" : "恋色マリアージュ"
,"koi kaze" : "恋風"
,"koi to senkyo to chocolate" : "恋と選挙とチョコレート"
,"koi wa ameagari no you ni" : "恋は雨上がりのように"
,"koi wa sekai seifuku no ato de" : "恋は世界征服のあとで"
,"koihime musou" : "恋姫無双"
,"koikatsu" : "コイカツ"
,"koikishi purely kiss" : "恋騎士 Purely☆Kiss"
,"koimoku" : "こいもく"
,"kojin taxi" : "股人タクシー"
,"ko-ko-ro" : "コ・コ・ロ…"
,"kokoro connect" : "ココロコネクト"
,"kokoro ga sakebitagatterunda." : "心が叫びたがってるんだ。"
,"kokoro library" : "ココロ図書館"
,"kokoro navi" : "こころナビ"
,"kokuran" : "黒蘭"
,"komi-san wa komyushou desu." : "古見さんは、コミュ症です。"
,"komori-san wa kotowarenai" : "小森さんは断れない！"
,"k-on" : "けいおん！"
,"konbini shoujo z" : "コンビニ少女Z"
,"konchu ouja mushiking mori no tami no densetsu" : "甲虫王者ムシキング ～森の民の伝説"
,"konjiki no gash" : "金色のガッシュ!!"
,"kono bijutsubu ni wa mondai ga aru" : "この美術部には問題がある!"
,"kono healer mendokusai" : "このヒーラー、めんどくさい"
,"kono naka ni hitori imouto ga iru" : "この中に1人、妹がいる！"
,"kono subarashii sekai ni syukufuku o" : "この素晴らしい世界に祝福を！"
,"kono yo no hate de koi wo utau shoujo yu-no" : "この世の果てで恋を唄う少女YU-NO"
,"konohana kitan" : "このはな綺譚"
,"koori zokusei danshi to cool na douryou joshi" : "氷属性男子とクールな同僚女子"
,"kore wa zombie desu ka" : "これはゾンビですか?"
,"kotetsu jeeg" : "鋼鉄ジーグ"
,"koto no ha no niwa" : "言の葉の庭"
,"kotoura-san" : "琴浦さん"
,"kouchuu ouja mushiking" : "甲虫王者　ムシキング"
,"koufuku graffiti" : "幸腹グラフィティ"
,"koukou kyuuji zawa-san" : "高校球児ザワさん"
,"kourin tenshi en ciel rena" : "光臨天使エンシェル・レナ"
,"kouryuu densetsu villgust" : "甲竜伝説ヴィルガスト"
,"kousoku card battle card hero" : "高速カードバトル カードヒーロー"
,"koutarou makaritooru" : "コータローまかりとおる！"
,"koutetsu no majo annerose" : "鋼鉄の魔女アンネローゼ"
,"koutetsujou no kabaneri" : "甲鉄城のカバネリ"
,"kouya no kotobuki hikoutai" : "荒野のコトブキ飛行隊"
,"kouyoku senki exs-tia" : "光翼戦姫エクスティア"
,"kowaku no toki" : "蠱惑の刻"
,"kowloon youma gakuenki" : "九龍妖魔學園紀"
,"kujibiki unbalance" : "くじびきアンバランス"
,"kuma kuma kuma bear" : "くまクマ熊ベアー"
,"kuma miko" : "くまみこ"
,"kumo desu ga nani ka" : "蜘蛛ですが、なにか?"
,"kumo no ito" : "蜘蛛の糸"
,"ku-neru maruta" : "くーねるまるた"
,"kung fu panda" : "カンフー・パンダ"
,"kunoichi" : "Kunoichi -忍-"
,"kunoichi tsubaki no mune no uchi" : "くノ一ツバキの胸の内"
,"kuon no kizuna" : "久遠の絆"
,"kurai mirai" : "クライミライ"
,"kurama-chan ni guitte shitara pishatte sareta" : "くらまちゃんにグイってしたらピシャってされた！"
,"kurenai" : "紅"
,"kurogane no linebarrels" : "鉄のラインバレル"
,"kuroinu kedakaki seijo wa hakudaku ni somaru" : "黒獣 ～気高き聖女は白濁に染まる～"
,"kuroiwa medaka ni watashi no kawaii ga tsuujinai" : "黒岩メダカに私の可愛いが通じない"
,"kurokami" : "黒神"
,"kuroko no basuke" : "黒子のバスケ"
,"kuromajo-san ga tooru" : "黒魔女さんが通る!!"
,"kuromukuro" : "クロムクロ"
,"kurukuru rinne" : "くるくるりんね"
,"kusarihime" : "腐り姫"
,"kusuriya no hitorigoto" : "薬屋のひとりごと"
,"kutsujoku" : "屈辱"
,"kuttsukiboshi" : "くっつきぼし"
,"kuzu no honkai" : "クズの本壊"
,"kyo kara maoh" : "今日から㋮王!"
,"kyojin no hoshi" : "巨人の星"
,"kyokou suiri" : "虚構推理"
,"kyonyuu fantasy" : "巨乳ファンタジー"
,"kyonyuu majo" : "巨乳魔女"
,"kyou no go no ni" : "今日の5の2"
,"kyoukai no kanata" : "境界の彼方"
,"kyoukai senjou no horizon" : "境界線上のホライゾン"
,"kyouran kazoku nikki" : "狂乱家族日記"
,"kyouryuu sentai zyuranger" : "恐竜戦隊ジュウレンジャー"
,"kyouryuu wakusei" : "恐竜惑星"
,"kyuujou lovers" : "球場ラヴァーズ"
,"kyuuketsu senki vjedogonia" : "吸血殲鬼ヴェドゴニア"
,"kyuuketsuki sugu shinu" : "吸血鬼すぐ死ぬ"
,"kyuukyoku choujin r" : "究極超人あ～る"
,"kyuukyoku hentai kamen" : "究極!!変態仮面"
,"kyuukyoku shinka shita full dive rpg ga genjitsu yori mo kusogee dattara" : "究極進化したフルダイブRPGが現実よりもクソゲーだったら"
,"kyuukyuu sentai gogofive" : "救急戦隊ゴーゴーファイブ"
,"kyuushu sentai danjija" : "急襲戦隊ダンジジャー"
,"l no kisetsu" : "Lの季節 ～A piece of memories～"
,"la blue girl" : "淫獣学園 La☆BlueGirl"
,"la corda doro" : "金色のコルダ"
,"la pucelle" : "ラ・ピュセル 光の聖女伝説"
,"la seine no hoshi" : "ラ・セーヌの星"
,"ladies versus butlers" : "れでぃ×ばと！"
,"lagoon engine" : "ラグーンエンジン"
,"lamento" : ["Lamento", "Lamento -BEYOND THE VOID-"]
,"lamento beyond the void" : "Lamento -BEYOND THE VOID-"
,"langrisser" : "ラングリッサー"
,"lapis relights" : "ラピスリライツ ～この世界のアイドルは魔法が使える～"
,"laputa castle in the sky" : "天空の城ラピュタ"
,"last bronx" : ["ラストブロンクス", "ラストブロンクス -東京番外地-"]
,"last exile" : "LAST EXILE"
,"last inning" : "ラストイニング―私立彩珠学院高校野球部の逆襲"
,"last origin" : "ラストオリジン"
,"last period" : ["ラストピリオド", "ラストピリオド -終わりなき螺旋の物語-"]
,"leadale no daichi nite" : "リアデイルの大地にて"
,"league of legends" : "リーグオブレジェンド"
,"legend clover" : "れじぇくろ！ ～レジェンド・クローバー～"
,"legend of lemnear" : "極黒の翼バルキサス"
,"legend of lyon flare" : "リヨン伝説フレア"
,"legend of queen opala" : "Legend Of Queen Opala"
,"legendz" : "レジェンズ"
,"lemon angel" : "レモンエンジジェル"
,"les miserables shoujo cosette" : "レ・ミゼラブル 少女コゼット"
,"letter bee" : "テガミバチ"
,"library of ruina" : "Library Of Ruina"
,"licca vignette" : "リカヴィネ"
,"lightning warrior raidy" : "雷の戦士ライディ"
,"lilim kiss" : "りりむキッス"
,"lilo and stitch" : "リロ・アンド・スティッチ"
,"limbus company" : "Limbus Company"
,"little busters" : "リトルバスターズ!"
,"little memole" : "とんがり帽子のメモル"
,"little monica monogatari" : "リトルモニカ物語"
,"little nightmares" : "LITTLE NIGHTMARES-リトルナイトメア-"
,"little noah" : "リトル ノア 楽園の後継者"
,"little red riding hood" : "赤ずきん"
,"little twins sugu ni toriko ni shite ageru" : "りとる☆ついんず ～すぐにトリコにしてあげる♪～"
,"little witch academia" : "リトルウィッチアカデミア"
,"little witch nobeta" : "Little Witch Nobeta"
,"little witch parfait" : "リトルウィッチ☆パルフェ"
,"live a hero" : "ライブ・ア・ヒーロー！"
,"live a live" : "ライブ・ア・ライブ"
,"live on cardliver kakeru" : "ライブオン CARDLIVER 翔"
,"lobotomy corporation" : "Lobotomy Corporation"
,"lodoss-tou senki" : "ロードス島戦記"
,"log horizon" : "ログ・ホライズン"
,"lollipop chainsaw" : "ロリポップチェーンソー"
,"long riders" : "ろんぐらいだぁす！"
,"looney tunes" : "ルーニー・テューンズ"
,"lord el-melloi ii sei no jikenbo" : "ロード・エルメロイII世の事件簿"
,"lord of lords ryu knight" : "覇王大系リューナイト"
,"lord of vermilion" : "ロード オブ ヴァーミリオン"
,"lord of walkure" : "ロードオブワルキューレ"
,"lost ark" : "LOST ARK"
,"lost universe" : "ロストユニバース"
,"lotte no omocha" : "ロッテのおもちゃ!"
,"love cube" : "Love³ -ラヴキューブ-"
,"love hina" : "ラブひな"
,"love lab" : "恋愛ラボ"
,"love live" : "ラブライブ！"
,"love live hasunosora jogakuin school idol club" : "ラブライブ！蓮ノ空女学院スクールアイドルクラブ"
,"love live nijigasaki high school idol club" : "ラブライブ！虹ヶ咲学園スクールアイドル同好会"
,"love live sunshine" : "ラブライブ！サンシャイン！！"
,"love live superstar" : "ラブライブ!スーパースター!!"
,"love plus" : "ラブプラス"
,"loveless" : "LOVELESS"
,"lovely x cation" : "LOVELY×CATION"
,"lover" : "LoveR"
,"lovers koi ni ochitara..." : "LOVERS～恋に落ちたら…"
,"love-yan" : "ラブやん"
,"lucky dog 1" : "ラッキードッグ1"
,"lucky star" : "らき☆すた"
,"lucu lucu" : "るくるく"
,"lucy of the southern rainbow" : "南の虹のルーシー"
,"luminous arc" : "ルミナスアーク"
,"lunar eternal blue" : "LUNARエターナルブルー"
,"lunar silver star story" : "LUNAR ザ・シルバースター"
,"lupin iii" : "ルパン三世"
,"lust geass" : "ラストギアス"
,"lv1 maou to one room yuusha" : "Lv1魔王とワンルーム勇者"
,"lv2 kara cheat datta motoyuusha kouho no mattari isekai life" : "Lv2からチートだった元勇者候補のまったり異世界ライフ"
,"lycoris recoil" : "リコリス・リコイル"
,"m.u.g.e.n" : "M.U.G.E.N"
,"m3gan" : "M3GAN ミーガン"
,"ma ga ochiru yoru" : "魔が堕ちる夜"
,"mabinogi" : "マビノギ"
,"maburaho" : "まぶらほ"
,"macademi wasshoi" : "まかでみ・WAっしょい！"
,"mach breakers" : "マッハブレイカーズ"
,"machikado mazoku" : "まちカドまぞく"
,"machine maiden" : "Machine Maiden"
,"machine robo" : "マシンロボ"
,"machine robo rescue" : "出撃!マシンロボレスキュー"
,"machine robo revenge of cronos" : "マシンロボ クロノスの大逆襲"
,"machine-doll wa kizutsukanai" : "機巧少女は傷つかない"
,"macross" : "マクロス"
,"macross 7" : "マクロス7"
,"macross delta" : "マクロスΔ"
,"macross frontier" : "マクロスF"
,"mad rat dead" : "MAD RAT DEAD"
,"madan no ou to vanadis" : "魔弾の王と戦姫"
,"made in abyss" : "メイドインアビス"
,"madlax" : "MADLAX"
,"madou king granzort" : "魔動王グランゾート"
,"magi the labyrinth of magic" : "マギ"
,"magic kaito" : "まじっく快斗"
,"magic knight rayearth" : "魔法騎士レイアース"
,"magic sword" : "マジックソード"
,"magic the gathering" : "マジック:ザ・ギャザリング"
,"magic woman m" : "魔法少女メルル"
,"magical angel sweet mint" : "魔法のエンジェルスイートミント"
,"magical antique" : "まじかるアンティーク"
,"magical arms angel nana" : "魔法戦姫エンジェル☆ナナ"
,"magical canan" : "SeptemCharm まじかるカナン"
,"magical drop" : "マジカルドロップ"
,"magical emi" : "魔法のスターマジカルエミ"
,"magical halloween" : "マジカルハロウィン"
,"magical kanan" : "まじかるカナン"
,"magical suite prism nana" : "まじかるすいーと プリズム・ナナ"
,"magical taruruuto-kun" : "まじかる☆タルるートくん"
,"magicalo magical" : "マジカロマジカル"
,"magicami" : "マジカミ"
,"magna carta" : "マグナカルタ"
,"magne robo ga-keen" : "マグネロボ ガ・キーン"
,"mahjong fight girl" : "麻雀ファイトガール"
,"mahjong monogatari" : "麻雀物語"
,"mahjong soul" : "雀魂 -じゃんたま-"
,"maho girls precure" : "魔法つかいプリキュア！"
,"mahoraba" : "まほらば"
,"mahoromatic" : "まほろまてぃっく"
,"mahou no juujin foxy rena" : "魔法の獣人フォクシィ・レナ"
,"mahou no kangofu magical nurse" : "魔法の看護婦マジカル・ナース"
,"mahou no mako-chan" : "魔法のマコちゃん"
,"mahou no yousei persia" : "魔法の妖精ペルシャ"
,"mahou sensei negima" : "魔法先生ネギま！"
,"mahou senshi sweet knights" : "魔法戦士スイートナイツ"
,"mahou senshi symphonic knights" : "魔法戦士シンフォニックナイツ"
,"mahou sentai magiranger" : "魔法戦隊マジレンジャー"
,"mahou shoujo ai" : "魔法少女アイ"
,"mahou shoujo celesphonia" : "魔法少女セレスフォニア"
,"mahou shoujo ikusei keikaku" : "魔法少女育成計画"
,"mahou shoujo lalabel" : "魔法少女ララベル"
,"mahou shoujo lyrical nanoha" : "魔法少女リリカルなのは"
,"mahou shoujo nante mouiidesukara." : "魔法少女なんてもういいですから。"
,"mahou shoujo neko x" : "魔法少女猫X"
,"mahou shoujo ni akogarete" : "魔法少女にあこがれて"
,"mahou shoujo no majo saiban" : "魔法少女ノ魔女裁判"
,"mahou shoujo sae" : "魔法少女沙枝"
,"mahou shoujo tai arusu" : "魔法少女隊アルス"
,"mahou shoujo tokushusen asuka" : "魔法少女特殊戦あすか"
,"mahou tsukai chappy" : "魔法使いチャッピー"
,"mahou tsukai no yoru" : "魔法使いの夜"
,"mahou tsukai tai" : "魔法使いTai!"
,"mahoujin guru guru" : "魔法陣グルグル"
,"mahouka koukou no rettousei" : "魔法科高校の劣等生"
,"mahoutsukai no yakusoku" : "魔法使いの約束"
,"mahoutsukai no yome" : "魔法使いの嫁"
,"mahoutsukai reimeiki" : "魔法使い黎明期"
,"mai-hime" : "舞-HiME"
,"mai-otome" : "舞-乙HiME"
,"mairimashita iruma-kun" : "魔入りました!入間くん"
,"maison ikkoku" : "めぞん一刻"
,"maitetsu" : "まいてつ"
,"majestic prince" : ["マジェスティックプリンス", "銀河機攻隊 マジェスティックプリンス"]
,"maji de watashi ni koi shinasai" : "真剣で私に恋しなさい！"
,"majin bone" : "マジンボーン"
,"majin tantei nougami neuro" : "魔人探偵脳噛ネウロ"
,"majo no tabitabi" : "魔女の旅々"
,"majo to hyakkihei" : "魔女と百騎兵"
,"majokko a la mode" : "魔女っ娘ア・ラ・モード"
,"majokko megu-chan" : "魔女っ子メグちゃん"
,"major" : "MAJOR"
,"makai kingdom" : "ファントム・キングダム"
,"makai kishi ingrid" : "魔界騎士イングリッド"
,"makai tenshi jibril" : "魔界天使ジブリール"
,"make heroine ga oosugiru" : "負けヒロインが多すぎる！"
,"maken-ki" : "マケン姫っ!"
,"mama is a 4th grader" : "ママは小学4年生"
,"mamatoto" : "ママトト"
,"mamono musume zukan" : "魔物娘図鑑"
,"mamoru-kun" : "まもるくん"
,"mamoru-kun ni megami no shukufuku wo" : "護くんに女神の祝福を！"
,"mamoru-kun wa norowarete shimatta" : "まもるクンは呪われてしまった!"
,"mamotte shugogetten" : "まもって守護月天！"
,"manabi straight" : ["まなびストレート!", "がくえんゆーとぴあ まなびストレート!"]
,"manaria friends" : "マナリアフレンズ"
,"manatsu no yo no inmu" : "真夏の夜の淫夢"
,"manga science" : "まんがサイエンス"
,"mantradeva" : "Mantradeva"
,"manyuu hikenchou" : "魔乳秘剣帖"
,"mao mao heroes of pure heart" : "マオマオ ピュアハートのヒーロー"
,"maou gakuin no futekigousha" : ["魔王学院の不適合者", "魔王学院の不適合者 ～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～"]
,"maou no ore ga dorei elf o yome ni shitanda ga dou medereba ii" : "魔王の俺が奴隷エルフを嫁にしたんだが、どう愛でればいい？"
,"maou to ore no hangyakuki" : "魔王と俺の叛逆記"
,"maoujou de oyasumi" : "魔王城でおやすみ"
,"maoyuu maou yuusha" : "まおゆう魔王勇者"
,"maple colors" : "Maple Colors"
,"maple town monogatari" : "メイプルタウン物語"
,"maplestory" : "メイプルストーリー"
,"maps" : "マップス"
,"mar" : "MÄR - Märchen Awakens Romance"
,"marchen maze" : "メルヘンメイズ"
,"maria holic" : "まりあ†ほりっく"
,"maria-sama ga miteru" : "マリア様がみてる"
,"marine a go go" : "Marine A Go Go"
,"maritsu loli succubus youmaen" : "魔立ロリサキュバス妖魔園"
,"marmalade boy" : "ママレード・ボーイ"
,"mars daybreak" : ["マーズ・デイブレイク", "絢爛舞踏祭 ザ・マーズ・デイブレイク"]
,"martial champion" : "マーシャルチャンピオン"
,"martian successor nadesico" : "機動戦艦ナデシコ"
,"marvel disk wars the avengers" : "ディスク・ウォーズ:アベンジャーズ"
,"marvel vs capcom" : "MARVEL vs. CAPCOM"
,"marvelous melmo" : "ふしぎなメルモ"
,"masamune-kun no revenge" : "政宗くんのリベンジ"
,"mashin hero wataru" : "魔神英雄伝ワタル"
,"mashin sentai kiramager" : "魔進戦隊キラメイジャー"
,"mashiro iro symphony" : "ましろ色シンフォニー"
,"mashle" : "マッシュル"
,"masou gakuen hxh" : "魔装学園H×H"
,"mass effect" : "Mass Effect"
,"master of epic" : ["Master of Epic", "Master of Epic -The ResonanceAge Universe-"]
,"matai toshi" : "魔胎都市"
,"matantei loki ragnarok" : "魔探偵ロキ"
,"mato seihei no slave" : "魔都精兵のスレイブ"
,"matou kitan zankan" : "魔討綺譚 ZANKAN！"
,"mawaru penguindrum" : "輪るピングドラム"
,"maximum ride" : "マキシマム・ライド"
,"mayo chiki" : "まよチキ!"
,"mayoi neko overrun" : "迷い猫オーバーラン!"
,"mayonaka no tantei nightwalker" : "Night Walker -真夜中の探偵-"
,"mazinger z" : "マジンガーZ"
,"mecha mote" : "極上！！めちゃモテ委員長"
,"medabots" : "メダロット"
,"medaka box" : "めだかボックス"
,"medalist" : "メダリスト"
,"mega man legends" : "ロックマンDASH 鋼の冒険心"
,"mega man star force" : "流星のロックマン"
,"mega man x" : "ロックマンX"
,"megaman" : "ロックマン"
,"megaman battle network" : "ロックマンエグゼ"
,"megaman zero" : "ロックマン ゼロ"
,"megaman zx" : "ロックマンゼクス"
,"megami device" : "メガミデバイス"
,"megami no cafe terrace" : "女神のカフェテラス"
,"megami paradise" : "女神天国"
,"megazone 23" : "メガゾーン23"
,"megido 72" : "メギド72"
,"meiji tokyo renka" : "明治東亰恋伽"
,"meikyuu black company" : "迷宮ブラックカンパニー"
,"mekakucity actors" : "メカクシティアクターズ"
,"meltys quest" : "メルティス・クエスト"
,"memories off" : "Memories Off"
,"men in black" : "メン・イン・ブラック"
,"merc storia" : ["メルクストーリア", "メルクストーリア - 癒術士と鐘の音色 -"]
,"mermaid melody pichi pichi pitch" : "マーメイドメロディーぴちぴちピッチ"
,"metal armor dragonar" : "機甲戦記ドラグナー"
,"metal fighter miku" : "メタルファイター・MIKU"
,"metal gear solid" : "メタルギアソリッド"
,"metal max" : "メタルマックス"
,"metal saga" : "メタルサーガ ～砂塵の鎖～"
,"metal slug" : "メタルスラッグ"
,"metaphor refantazio" : "メタファー:リファンタジオ"
,"metroid" : "メトロイド"
,"mewkledreamy" : "ミュークルドリーミー"
,"midnight girls" : "ミッドナイトガールズ"
,"midnight panther" : "ミッドナイトパンサー"
,"midori no hibi" : "美鳥の日々"
,"midori no makibao" : "みどりのマキバオー"
,"mieruko-chan" : "見える子ちゃん"
,"mika ni harassment" : "みかにハラスメント"
,"mikakunin de shinkoukei" : "未確認で進行形"
,"milky season" : "Milky Season"
,"mimi wo sumaseba" : "耳をすませば"
,"minami-ke" : "みなみけ"
,"minecraft" : "マインクラフト"
,"minky momo" : "魔法のプリンセス ミンキーモモ"
,"miracle giants dome-kun" : "ミラクルジャイアンツ童夢くん"
,"miracle girl limit-chan" : "ミラクル少女リミットちゃん"
,"miracle girls" : "ミラクル☆ガールズ"
,"miraculous ladybug" : ["ミラキュラス レディバグ", "ミラキュラス レディバグ&シャノワール"]
,"mirai nikki" : "未来日記"
,"mirai sentai timeranger" : "未来戦隊タイムレンジャー"
,"mirmo de pon" : "ミルモでポン!"
,"miru tights" : "みるタイツ"
,"miside" : "MiSide -ミサイド-"
,"miss machiko" : "まいっちんぐマチコ先生"
,"mister ajikko" : "ミスター味っ子"
,"misty moon metropolis" : "朧月都市"
,"mitsuboshi colors" : "三ツ星カラーズ"
,"mitsudomoe" : "みつどもえ"
,"miyuki" : "みゆき"
,"mizuiro" : "みずいろ"
,"mizuiro jidai" : "水色時代"
,"mm" : "えむえむっ!"
,"mob psycho 100" : "モブサイコ100"
,"mobile legends bang bang" : "モバイル・レジェンド： Bang Bang"
,"mobile suit gundam" : "機動戦士ガンダム"
,"mobile suit gundam gquuuuuux" : "機動戦士Gundam GQuuuuuuX"
,"mobile suit gundam hathaways flash" : "機動戦士ガンダム 閃光のハサウェイ"
,"mobile suit gundam lost war chronicles" : "機動戦士ガンダム戦記 Lost War Chronicles"
,"mobile suit gundam tekketsu no orphans" : "機動戦士ガンダム 鉄血のオルフェンズ"
,"mobile suit gundam the 08th ms team" : "機動戦士ガンダム 第08MS小隊"
,"mobile suit gundam the witch from mercury" : "機動戦士ガンダム 水星の魔女"
,"moekan" : "モエかん"
,"moero robocon" : "燃えろ!!ロボコン"
,"moetan" : "もえたん"
,"mokke" : "もっけ"
,"moldiver" : "モルダイバー"
,"momo kyun sword" : "モモキュンソード"
,"momotarou densetsu" : "桃太郎伝説"
,"mon colle knights" : "六門天外モンコレナイト"
,"mondaiji-tachi ga isekai kara kuru sou desu yo" : "問題児たちが異世界から来るそうですよ？"
,"monobeno" : "ものべの"
,"mononoke" : "モノノ怪"
,"monster collection" : "モンスター・コレクション"
,"monster girl quest" : "もんむす・くえすと!"
,"monster hunter" : "モンスターハンター"
,"monster musume no iru nichijou" : "モンスター娘のいる日常"
,"monster park" : "Monster Park"
,"monster prom" : "Monster Prom"
,"monster rancher" : "モンスターファーム"
,"monster retsuden oreca battle" : "モンスター烈伝 オレカバトル"
,"monster strike" : "モンスターストライク"
,"monster super league" : "モンスタースーパーリーグ"
,"monsters inc." : "モンスターズ・インク"
,"monsuno" : "獣旋バトル モンスーノ"
,"moomintroll" : "ムーミントロール"
,"moonlight lady" : "顔のない月"
,"morenatsu" : "漏れなつ。"
,"mortal kombat" : "モータルコンバット"
,"moshidora" : ["もしドラ", "もし高校野球の女子マネージャーがドラッカーの『マネジメント』を読んだら"]
,"mother 3" : "MOTHER 3"
,"mount celeb kaneda-san" : "マウントセレブ金田さん"
,"mouretsu pirates" : "モーレツ宇宙海賊"
,"mousou kagaku series wandaba style" : "妄想科学シリーズ ワンダバスタイル"
,"mouthwashing" : "Mouthwashing"
,"moyashimon" : "もやしもん"
,"muchi muchi pork" : "むちむちポーク！"
,"mugen senshi valis" : "夢幻戦士ヴァリス"
,"muhyo to rouji no mahouritsu soudan jimusho" : "ムヒョとロージーの魔法律相談事務所"
,"mujaki no rakuen" : "無邪気の楽園"
,"muka muka paradise" : "ムカムカパラダイス"
,"mulan" : "ムーラン"
,"munou na nana" : "無能なナナ"
,"murder drones" : "マーダー・ドローンズ"
,"murenase seton gakuen" : "群れなせ! シートン学園"
,"mushibugyo" : "ムシブギョー"
,"mushihime-sama" : "虫姫さま"
,"mushishi" : "蟲師"
,"mushoku tensei" : "無職転生"
,"muteki koujin daitarn 3" : "無敵鋼人ダイターン3"
,"muten no kaito" : "武天のカイト"
,"muv-luv" : "マブラヴ"
,"muv-luv alternative total eclipse" : "マブラヴ オルタネイティヴ トータル・イクリプス"
,"mx0" : "エム×ゼロ"
,"my hero academia" : "僕のヒーローアカデミア"
,"my life as a teenage robot" : "ジェニーはティーン☆ロボット"
,"my little pony friendship is magic" : "マイリトルポニー ～トモダチは魔法～"
,"my neighbor totoro" : "となりのトトロ"
,"my sweet umadonna boku wa kimi no uma" : "My sweet ウマドンナ ～僕は君のウマ"
,"myo-chan sensei wa kaku katariki" : "みょーちゃん先生はかく語りき"
,"myriad colors phantom world" : "無彩限のファントム・ワールド"
,"mystery flesh pit national park" : "Mystery Flesh Pit National Park"
,"nagasarete airantou" : "ながされて藍蘭島"
,"nagi no asukara" : "凪のあすから"
,"najica blitz tactics" : "ナジカ電撃作戦"
,"nami sos first battle" : "奈美SOS! ファースト・バトル"
,"namiuchigiwa no muromi-san" : "波打際のむろみさん"
,"nana to kaoru" : "ナナとカオル"
,"nanabun no nijyuuni" : "22/7(ナナブンノニジュウニ)"
,"nanaka 6-17" : "ななか6/17"
,"nanako sos" : "ななこSOS"
,"nanami to konomi no oshiete a-b-c" : "ななみとこのみのおしえてA・B・C"
,"nanatsu no fushigi no owaru toki" : "七つのふしぎの終わるとき"
,"nanatsu no taizai" : "七つの大罪"
,"nanatsuiro drops" : "ななついろ★ドロップス"
,"nande koko ni sensei ga" : "なんでここに先生が！？"
,"nangoku shounen papuwa-kun" : "南国少年パプワくん"
,"nano core" : "nanocore"
,"narue no sekai" : "成恵の世界"
,"narutaru" : "なるたる"
,"naruto" : "NARUTO"
,"natsu no ame" : "夏ノ雨"
,"natsu no kumo" : "ナツノクモ"
,"natsuiro high school seishun hakusho" : "夏色ハイスクル★青春白書"
,"natsuiro kiseki" : "夏色キセキ"
,"natsumes book of friends" : "夏目友人帳"
,"natsuyuki rendezvous" : "夏雪ランデブー"
,"natural mi mo kokoro mo" : "Natural -身も心も-"
,"nausicaa of the valley of the wind" : "風の谷のナウシカ"
,"nazo no kanojo x" : "謎の彼女X"
,"nee chanto shiyou yo" : "姉、ちゃんとしようよっ！"
,"nee summer" : "姉SUMMER!"
,"needless" : "NEEDLESS"
,"needy streamer overload" : "NEEDY GIRL OVERDOSE"
,"nejimaki kagyuu" : "ねじまきカギュー"
,"nejimaki seirei senki tenkyou no alderamin" : "ねじ巻き精霊戦記 天鏡のアルデラミン"
,"nekketsu saikyou go-saurer" : "熱血最強ゴウザウラー"
,"neko musume michikusa nikki" : "ねこむすめ道草日記"
,"neko no otera no chion-san" : "猫のお寺の知恩さん"
,"neko to wakai seyo" : "ネコと女子寮せよ"
,"nekojishi" : "家有大猫 Nekojishi"
,"nekopara" : "ネコぱら"
,"nelke to densetsu no renkinjutsushi-tachi" : "ネルケと伝説の錬金術士たち"
,"neo ranga" : "南海奇皇ネオランガ"
,"neo steam" : "ネオスチーム"
,"neon genesis evangelion" : "新世紀エヴァンゲリオン"
,"net ghost pipopa" : "ネットゴーストPIPOPA"
,"netoge no yome wa onnanoko ja nai to omotta" : "ネトゲの嫁は女の子じゃないと思った?"
,"nettou bemani stadium" : "熱闘！BEMANIスタジアム"
,"new game" : "NEW GAME!"
,"new horizon" : "NEW HORIZON"
,"ng knight lamune and 40" : "NG騎士ラムネ&40"
,"nichijou" : "日常"
,"nier" : "NieR"
,"nier automata" : "NieR：Automata"
,"nige jouzu no wakagimi" : "逃げ上手の若君"
,"night shift nurses" : "夜勤病棟"
,"night wizard" : "ナイトウィザード"
,"nijisanji" : "にじさんじ"
,"nijiura maids" : "虹裏メイド"
,"nikujo no susume" : "肉女のススメ"
,"ninja gaiden" : "忍者龍剣伝"
,"ninja sentai kakuranger" : "忍者戦隊カクレンジャー"
,"ninja slayer" : "ニンジャスレイヤー"
,"ninpuu sentai hurricaneger" : "忍風戦隊ハリケンジャー"
,"nintama rantarou" : "忍たま乱太郎"
,"nisekoi" : "ニセコイ"
,"nishikida keibu wa dorobou ga osuki" : "錦田警部はどろぼうがお好き"
,"no game no life" : "ノーゲーム・ノーライフ"
,"no more heroes" : "ノーモア★ヒーローズ"
,"no. 6" : "NO.6"
,"no.1 sentai gozyuger" : "ナンバーワン戦隊ゴジュウジャー"
,"nobunaga no shinobi" : "信長の忍び"
,"nodame cantabile" : "のだめカンタービレ"
,"noein" : "ノエイン もうひとりの君へ"
,"nogizaka haruka no himitsu" : "乃木坂春香の秘密"
,"noir" : "NOIR"
,"non non biyori" : "のんのんびより"
,"nonomura byouin no hitobito" : "野々村病院の人々"
,"nora to toki no koubou kiri no mori no majo" : "ノーラと刻の工房 霧の森の魔女"
,"noragami" : "ノラガミ"
,"no-rin" : "のうりん"
,"nu carnival" : "NU：カーニバル"
,"nue no onmyouji" : "鵺の陰陽師"
,"nurarihyon no mago" : "ぬらりひょんの孫"
,"nurse angel ririka sos" : "ナースエンジェルりりかSOS"
,"nurse witch komugi" : "ナースウィッチ小麦ちゃん"
,"nyan koi" : "にゃんこい!"
,"nyanda kamen" : "ニャニがニャンだー ニャンダーかめん"
,"nyanko daisensou" : "にゃんこ大戦争"
,"obey me one master to rule them all" : "Obey Me!"
,"obi wo gyuttone" : "帯をギュッとね!"
,"oboro muramasa" : "朧村正"
,"occult academy" : "世紀末オカルト学院"
,"occultic nine" : "Occultic;Nine -オカルティック・ナイン-"
,"ochame na futago" : "おちゃめなふたご"
,"ochamegami monogatari korokoro pollon" : "おちゃめ神物語コロコロポロン"
,"ochikobore fruit tart" : "おちこぼれフルーツタルト"
,"octopath traveler" : "OCTOPATH TRAVELER"
,"oda nobuna no yabou" : "織田信奈の野望"
,"odd taxi" : "オッドタクシー"
,"odin sphere" : "オーディンスフィア"
,"odoru daisousasen" : "踊る大捜査線"
,"ohsama sentai king-ohger" : "王様戦隊キングオージャー"
,"oide yo mizuryuu kei land" : "おいでよ！水龍敬ランド"
,"oira uchuu no tankoufu" : "おいら宇宙の探鉱夫"
,"ojamajo doremi" : "おジャ魔女どれみ"
,"ojisan to marshmallow" : "おじさんとマシュマロ"
,"ok k.o. lets be heroes" : "OK K.O.! めざせヒーロー"
,"okami" : "大神"
,"okhotsk ni kiyu hokkaido rensa satsujin jiken" : "北海道連鎖殺人 オホーツクに消ゆ"
,"okujou no yurirei-san" : "屋上の百合霊さん"
,"okusama ga seito kaichou" : "おくさまが生徒会長！"
,"oku-sama wa joshi kousei" : "おくさまは女子高生"
,"okusama wa mahou shoujo" : "奥さまは魔法少女"
,"okusan" : "おくさん"
,"ole tower" : "俺タワー"
,"omae umasou da na" : "おまえうまそうだな"
,"omae wo otaku ni shiteyaru kara ore wo riaju ni shite kure" : "おまえをオタクにしてやるから、俺をリア充にしてくれ！"
,"omaera zenin mendokusai" : "お前ら全員めんどくさい!"
,"omakase peace denkiten" : "おまかせ! ピース電器店"
,"omamori himari" : "おまもりひまり"
,"omishi magical theater risky safety" : "臣士魔法劇場 リスキー☆セフティ"
,"omniscient readers viewpoint" : "Omniscient Reader's Viewpoint"
,"omoide no marnie" : "思い出のマーニー"
,"omoikkiri kagaku adventure sou nanda" : "おもいっきり科学アドベンチャー そーなんだ!"
,"omori" : "OMORI"
,"one kagayaku kisetsu e" : "ONE ～輝く季節へ～"
,"one piece" : "ONE PIECE"
,"one punch man" : "ワンパンマン"
,"one room hiatari futsuu tenshi-tsuki" : "ワンルーム、日当たり普通、天使つき。"
,"one week friends" : "一週間フレンズ。"
,"onegai my melody" : "おねがいマイメロディ"
,"onegai teacher" : "おねがいティーチャー"
,"onegai twins" : "おねがい☆ツインズ"
,"oneshot" : "OneShot"
,"ongeki" : "オンゲキ"
,"oni chichi" : "鬼父"
,"onidere" : "オニデレ"
,"onigokko" : "鬼ごっこ！"
,"onihime vs" : "鬼姫VS"
,"onii-chan asa made zutto gyutte shite yoru made motto ecchi shite" : "お兄ちゃん、朝までずっとギュッてして！夜までもっとエッチして！"
,"onii-chan dakedo ai sae areba kankeinai yo ne" : "お兄ちゃんだけど愛さえあれば関係ないよねっ"
,"oniichan no koto nanka zenzen suki janain dakara ne" : "お兄ちゃんのことなんかぜんぜん好きじゃないんだからねっ!!"
,"onii-chan wa oshimai" : "お兄ちゃんはおしまい！"
,"onimusha" : "鬼武者"
,"onmyoji" : "陰陽師"
,"onmyou taisenki" : "陰陽大戦記"
,"ookami kodomo no ame to yuki" : "おおかみこどもの雨と雪"
,"ookami-san to shichinin no nakama-tachi" : "オオカミさんと七人の仲間たち"
,"ookii onnanoko wa suki desu ka" : "大きい女の子は好きですか"
,"ookiku furikabutte" : "おおきく振りかぶって"
,"ooyasan wa shishunki" : "大家さんは思春期!"
,"ore ga suki nano wa imouto dakedo imouto ja nai" : "俺が好きなのは妹だけど妹じゃない"
,"ore monogatari" : "俺物語!!"
,"ore no imouto ga konna ni kawaii wake ga nai" : "俺の妹がこんなに可愛いわけがない"
,"ore no kanojo to osananajimi ga shuraba sugiru" : "俺の彼女と幼なじみが修羅場すぎる"
,"ore no natsuyasumi" : "おれのなつやすみ"
,"ore no nounai sentakushi ga gakuen love comedy wo zenryoku de jama shiteiru" : "俺の脳内選択肢が、学園ラブコメを全力で邪魔している"
,"ore no shikabane wo koeteyuke" : "俺の屍を越えてゆけ"
,"ore o suki nano wa omae dake kayo" : "俺を好きなのはお前だけかよ"
,"ore twintail ni narimasu." : "俺、ツインテールになります。"
,"ore wa lolicon ja nai" : "俺はロリコンじゃない！"
,"oretachi ni tsubasa wa nai" : "俺たちに翼はない"
,"ori and the blind forest" : "オリとくらやみの森"
,"original" : "オリジナル"
,"osana najimi wa bed yakuza" : "幼なじみはベッドヤクザ!"
,"osananajimi ga zettai ni makenai love comedy" : "幼なじみが絶対に負けないラブコメ"
,"osawari island" : "大冒険！ゆけゆけ☆おさわりアイランド"
,"oshi ga budoukan ittekuretara shinu" : "推しが武道館いってくれたら死ぬ"
,"oshi no ko" : "推しの子"
,"oshiete galko-chan" : "おしえて! ギャル子ちゃん"
,"oshioki sweetie" : "オシオキSweetie"
,"oshiro project" : "御城プロジェクト"
,"osomatsu-san" : "おそ松さん"
,"os-tan" : "OSたん"
,"otaku no video" : "おたくのビデオ"
,"otogi-jushi akazukin" : "おとぎ銃士 赤ずきん"
,"otokonoko wa maid fuku ga osuki" : "オトコのコはメイド服がお好き！？"
,"otome game no hametsu flag shika nai akuyaku reijou ni tensei shiteshimatta..." : "乙女ゲームの破滅フラグしかない悪役令嬢に転生してしまった …"
,"otome game sekai wa mob ni kibishii sekai desu" : "乙女ゲー世界はモブに厳しい世界です"
,"otome wa boku ni koishiteru" : "処女はお姉さまに恋してる"
,"otome youkai zakuro" : "おとめ妖怪 ざくろ"
,"otomedius" : "オトメディウス"
,"otonari no tenshi-sama ni itsunomanika dame ningen ni sareteita ken" : "お隣の天使様にいつの間にか駄目人間にされていた件"
,"otoyomegatari" : "乙嫁語り"
,"ouchi ni kaeru made ga mashimaro desu" : "お家に帰るまでがましまろです"
,"ouendan" : "押忍!闘え!応援団"
,"oumagadoki zoo" : "逢魔ヶ刻動物園"
,"ouran high school host club" : "桜蘭高校ホスト部"
,"ousama ranking" : "王様ランキング"
,"outbreak company" : "アウトブレイク・カンパニー 萌える侵略者"
,"outer zone" : "アウターゾーン"
,"outlanders" : "アウトランダーズ"
,"outlaw star" : "星方武侠アウトロースター"
,"overlord" : "オーバーロード"
,"overman king gainer" : "OVERMANキングゲイナー"
,"overwatch" : "オーバーウォッチ"
,"owari no seraph" : "終わりのセラフ"
,"oyakodon oppai tokumori bonyuu tsuyudaku de" : "母娘丼 おっぱい特盛母乳汁だくで"
,"p2 lets play pingpong" : "P2! - let's Play Pingpong!"
,"pachique next" : "CRAパチクエネクスト"
,"pacific rim" : "パシフィック・リム"
,"pac-man" : "PAC-MAN"
,"paladins" : "PALADINS"
,"palworld" : "パルワールド"
,"panda kopanda" : "パンダコパンダ"
,"pandemonium majutsushi no mura" : "パンデモニウム ―魔術師の村―"
,"pandora hearts" : "PandoraHearts"
,"panel de pon" : "パネルでポン"
,"pangya" : "スカッとゴルフ パンヤ"
,"pani poni dash" : "ぱにぽにだっしゅ！"
,"panty and stocking with garterbelt" : "パンティ&ストッキングwithガーターベルト"
,"panzer world galient" : "機甲界ガリアン"
,"papa no iu koto wo kikinasai" : "パパのいうことを聞きなさい!"
,"parallel paradise" : "パラレルパラダイス"
,"paranormasight the seven mysteries of honjo" : "パラノマサイト FILE23 本所七不思議"
,"parasite eve" : "パラサイト・イヴ"
,"parasyte" : "寄生獣"
,"paripi koumei" : "パリピ孔明"
,"pastel chime" : "ぱすてるチャイム"
,"pastel chime continue" : "ぱすてるチャイムContinue"
,"pastel yumi" : "魔法のアイドルパステルユーミ"
,"patlabor" : "パトレーバー"
,"paw patrol" : "パウパトロール"
,"peace hame" : "ピスはめっ！"
,"penguin highway" : "ペンギン・ハイウェイ"
,"perman" : "パーマン"
,"persona" : "ペルソナ"
,"persona 2" : "ペルソナ2 罪"
,"persona 3" : "ペルソナ3"
,"persona 4" : "ペルソナ4"
,"persona 5" : "ペルソナ5"
,"persona q" : ["ペルソナQ", "ペルソナQ シャドウ オブ ザ ラビリンス"]
,"peter pan" : "ピーターパン"
,"petite princess yucie" : "ぷちぷり＊ユーシィ"
,"petopeto-san" : "ぺとぺとさん"
,"phantasy star" : "ファンタシースター"
,"phantasy star online" : "ファンタシースターオンライン"
,"phantasy star online 2" : "ファンタシースターオンライン2"
,"phantasy star portable" : "ファンタシースターポータブル"
,"phantasy star portable 2" : "ファンタシースターポータブル2"
,"phantasy star universe" : "ファンタシースターユニバース"
,"phantom brave" : "ファントム・ブレイブ"
,"phantom of inferno" : "Phantom -PHANTOM OF INFERNO-"
,"phantom of the kill" : "ファントム オブ キル"
,"phelios" : "フェリオス"
,"phi brain puzzle of god" : "ファイ・ブレイン 神のパズル"
,"phineas and ferb" : "フィニアスとファーブ"
,"photo kano" : "フォトカノ"
,"photon" : "フォトン"
,"pia carrot e youkoso" : "Piaキャロットへようこそ!!"
,"pia carrot e youkoso 2" : "Piaキャロットへようこそ!!2"
,"pia carrot e youkoso 3" : "Piaキャロットへようこそ!!3"
,"pieces" : "PIECES"
,"pigeon blood" : "PIGEON BLOOD"
,"pikmin" : "ピクミン"
,"pinkerton" : "PINKERTON"
,"pinocchio" : "ピノキオ"
,"pita ten" : "ぴたテン"
,"planet of the apes" : "猿の惑星"
,"planet with" : "プラネット・ウィズ"
,"planetes" : "プラネテス"
,"plants vs. zombies" : "PLANTS VS. ZOMBIES"
,"plastic little" : "プラスチックリトル"
,"plastic memories" : "プラスティック・メモリーズ"
,"plawres sanshiro" : "プラレス3四郎"
,"playerunknowns battlegrounds" : "PUBG"
,"pokemon" : "ポケモン"
,"pokonyan" : "ポコニャン"
,"pon no michi" : "ぽんのみち"
,"ponkotsu quest" : "ポンコツクエスト～魔王と派遣の魔物たち～"
,"ponyo" : "ぽにょ"
,"pop team epic" : "ポプテピピック"
,"popful mail" : "ぽっぷるメイル"
,"popn music" : "pop'n music"
,"popolocrois" : ["ポポロクロイス物語", "PoPoLoCrois"]
,"popotan" : "ぽぽたん"
,"poppy playtime" : "Poppy Playtime"
,"pop-up story" : "ポップアップストーリー～魔法の本と聖樹の学園～"
,"porco rosso" : "紅の豚"
,"portal" : "PORTAL"
,"power instinct" : "豪血寺一族"
,"power pack" : "POWER PACK"
,"power pro kun pocket" : "パワプロクンポケット"
,"power rangers" : "パワーレンジャー"
,"power stone" : "パワーストーン"
,"powerpuff girls z" : "出ましたっ!パワパフガールズZ"
,"pp -pianissimo- ayatsuri ningyou no rinbu" : "PP -ピアニッシモ- 操リ人形ノ輪舞"
,"predator" : "プレデター"
,"pretty cure" : "プリキュア"
,"pretty face" : "プリティフェイス"
,"pretty rhythm" : "プリティーリズム"
,"pretty sammy" : "魔法少女プリティサミー"
,"primal x hearts" : "PRIMAL×HEARTS"
,"prince of tennis" : "テニスの王子様"
,"princess connect" : "プリンセスコネクト！"
,"princess crown" : "プリンセスクラウン"
,"princess evangile" : "Princess Evangile 〜プリンセスエヴァンジール〜"
,"princess holiday" : "Princess Holiday 〜転がるりんご亭千夜一夜〜"
,"princess knight" : "リボンの騎士"
,"princess lover" : "プリンセスラバー！"
,"princess maker" : "プリンセスメーカー"
,"princess mononoke" : "もののけ姫"
,"princess nine" : "プリンセスナイン 如月女子高野球部"
,"princess princess" : "Princess×Princess"
,"princess principal" : "プリンセス・プリンシパル"
,"princess resurrection" : "怪物王女"
,"princess sarah" : "小公女セーラ"
,"princess tears" : "プリンセスティアーズ"
,"princess tutu" : "プリンセスチュチュ"
,"pripara" : "プリパラ"
,"pripri chi-chan" : "プリプリちぃちゃん!!"
,"prism ark" : "PRISM ARK"
,"prison school" : "監獄学園"
,"private garden" : "PRIVATE GARDEN"
,"professor layton" : "レイトン教授"
,"project a-ko" : "プロジェクトA子"
,"project kv" : "プロジェクトKV"
,"project sekai" : "プロジェクトセカイ"
,"promare" : "プロメア"
,"prostudent g" : "ぷろすちゅーでんとG"
,"prunus girl" : "プラナス・ガール"
,"psychic force" : "サイキックフォース"
,"psycho soldier" : "サイコソルジャー"
,"psycho-pass" : "PSYCHO-PASS"
,"psyren" : "PSYREN -サイレン-"
,"puella magi madoka magica" : "魔法少女まどか マギカ"
,"puella magi madoka magica side story magia record" : "マギアレコード 魔法少女まどか マギカ外伝"
,"puella magi suzune magica" : "魔法少女すずね☆マギカ"
,"pu-li-ru-la" : "Pu・Li・Ru・La"
,"pumpkin scissors" : "パンプキン・シザーズ"
,"punch-out" : "パンチアウト!!"
,"puniru wa kawaii slime" : "ぷにるはかわいいスライム"
,"punishing gray raven" : "パニシング:グレイレイヴン"
,"puppet princess of marl kingdom" : "マール王国の人形姫"
,"puss in boots the last wish" : "長ぐつをはいたネコ"
,"puyo puyo" : "ぷよぷよ"
,"puzzle and dragons" : "パズル＆ドラゴンズ"
,"qualidea code" : "クオリディア・コード"
,"quartett" : "Quartett!"
,"queen emeraldas" : "クイーン・エメラルダス"
,"queens blade" : "クイーンズブレイド"
,"queens blade rebellion" : "クイーンズブレイドリベリオン"
,"quiz magic academy" : "クイズマジックアカデミー"
,"quiz nanairo dreams" : "クイズなないろDREAMS 虹色町の奇跡"
,"quiz rpg mahoutsukai to kuroneko no wiz" : "クイズRPG 魔法使いと黒猫のウィズ"
,"r-15" : "R-15"
,"radiata stories" : "ラジアータ ストーリーズ"
,"rage of bahamut" : "神撃のバハムート"
,"rage of the dragons" : "レイジ・オブ・ザ・ドラゴンズ"
,"ragnarok online" : "ラグナロクオンライン"
,"ragnarok the animation" : "RAGNAROK THE ANIMATION"
,"rahxephon" : "ラーゼフォン"
,"rail wars" : ["RAIL WARS!", "RAIL WARS! -日本國有鉄道公安隊-"]
,"rainbow sentai robin" : "レインボー戦隊ロビン"
,"rakudai kishi no cavalry" : "落第騎士の英雄譚"
,"ramen daisuki koizumi-san" : "ラーメン大好き小泉さん"
,"rampo kitan game of laplace" : "乱歩奇譚 Game of Laplace"
,"ran to haiiro no sekai" : "乱と灰色の世界"
,"rance" : "Rance"
,"ranma 12" : "らんま1/2"
,"ran-sem hakudaku delmo tsuma no miira tori" : "Ran→Sem～白濁デルモ妻のミイラ捕り～"
,"rapelay" : "レイプレイ"
,"rapunzel" : "ラプンツェル"
,"raramagi honyarara magic" : "ららマジ ホニャららMAGIC"
,"re creators" : "Re:CREATORS"
,"re zero kara hajimeru isekai seikatsu" : "Re：ゼロから始める異世界生活"
,"read or die" : "R.O.D -READ OR DIE"
,"real bout high school" : "召喚教師リアルバウトハイスクール"
,"real drive" : "RD 潜脳調査室"
,"rebirth the lunatic taker" : "リバース Re:BIRTH -The Lunatic Taker"
,"reco love" : "レコラヴ"
,"red baron" : "スーパーロボット レッド・バロン"
,"red photon zillion" : "赤い光弾ジリオン"
,"refrain no chika meikyuu to majo no ryodan" : "ルフランの地下迷宮と魔女ノ旅団"
,"regalia the three sacred stars" : "レガリア The Three Sacred Stars"
,"reibaishi izuna" : "霊媒師いずな"
,"rekishi ni nokoru akujo ni naru zo" : "歴史に残る悪女になるぞ"
,"remi nobodys girl" : "家なき子レミ"
,"renkin san-kyuu magical pokaan" : "錬金3級 まじかる?ぽか～ん"
,"rental magica" : "レンタルマギカ"
,"resident evil" : "バイオハザード"
,"resort boin" : "リゾートBOIN"
,"ressha sentai toqger" : "烈車戦隊トッキュウジャー"
,"return to shironagasu island" : "シロナガス島への帰還"
,"reverse 1999" : "リバース:1999"
,"revolutionary girl utena" : "少女革命ウテナ"
,"rewrite" : "Rewrite"
,"rick and morty" : "リック・アンド・モーティ"
,"riddle joker" : "RIDDLE JOKER"
,"ridge racer" : "リッジレーサー"
,"rignetta-san no bouken" : "リジネッタさんの冒険"
,"rikei ga koi ni ochita no de shuomei shite mita." : "理系が恋に落ちたので証明してみた。"
,"rilakkuma" : "リラックマ"
,"rimworld" : "RimWorld"
,"rin x sen hakudaku onna kyoushi to yaroudomo" : "RIN×SEN～白濁女教師と野郎ども～"
,"ring dream" : "リング☆ドリーム 女子プロレス大戦"
,"ring fit adventure" : "リングフィット アドベンチャー"
,"ring ni kakero" : "リングにかけろ"
,"rinkan biyaku chuudoku" : "輪姦媚薬中毒"
,"rinne no lagrange" : "輪廻のラグランジェ"
,"rio paradise" : "リオパラダイス"
,"rising force online" : "RF online"
,"rising impact" : "ライジングインパクト"
,"rival schools" : "ジャスティス学園"
,"river city girls" : "熱血硬派くにおくん外伝 River City Girls"
,"rizelmine" : "りぜるまいん"
,"robin hood" : "ロビンフッド"
,"roblox" : "ROBLOX"
,"robocop" : "ロボコップ"
,"robokko beaton" : "ろぼっ子ビートン"
,"robopon" : "ロボットポンコッツ"
,"robot girls z" : "ロボットガールズZ"
,"robot neoanthropinae polynian" : "ポリニアン リリー"
,"robotics notes" : "ROBOTICS;NOTES"
,"rokka no yuusha" : "六花の勇者"
,"rokudenashi majutsu koushi to akashic records" : "ロクでなし魔術講師と禁忌教典"
,"rokujouma no shinryakusha" : "六畳間の侵略者！？"
,"ro-kyu-bu" : "ロウきゅーぶ!"
,"romance of the three kingdoms" : "三國志演義"
,"romancing saga" : "ロマンシング サ・ガ"
,"romancing saga 2" : "ロマンシング サ・ガ2"
,"romeos blue skies" : "ロミオの青い空"
,"rosario vampire" : "ロザリオとバンパイア"
,"rose of versailles" : "ベルサイユのばら"
,"rougo ni sonaete isekai de 8-man-mai no kinka o tamemasu" : "老後に備えて異世界で8万枚の金貨を貯めます"
,"rozen maiden" : "ローゼンメイデン"
,"rpg densetsu hepoi" : "RPG伝説ヘポイ"
,"r-type" : "R-TYPE"
,"ruin explorers" : "秘境探検ファム&イーリー"
,"rumble fish" : "ザ・ランブルフィッシュ"
,"rumble roses" : "ランブルローズ"
,"rune factory" : "ルーンファクトリー"
,"rune factory 3" : "ルーンファクトリー3"
,"rune factory 4" : "ルーンファクトリー4"
,"rune soldier" : "魔法戦士リウイ"
,"ruri dragon" : "ルリドラゴン"
,"ruri no houseki" : "瑠璃の宝石"
,"rurouni kenshin" : "るろうに剣心"
,"rwby" : "RWBY"
,"ryu ga gotoku" : "龍が如く"
,"ryuugajou nanana no maizoukin" : "龍ヶ嬢七々々の埋蔵金"
,"ryuuou no oshigoto" : "りゅうおうのおしごと!"
,"sabagebu" : "さばげぶっ！"
,"saber marionette" : "セイバーマリオネット"
,"sacred seven" : "セイクリッドセブン"
,"saenai heroine no sodatekata" : "冴えない彼女の育てかた"
,"saga frontier" : "サガ フロンティア"
,"saijaku muhai no bahamut" : "最弱無敗の神装機竜《バハムート》"
,"saijaku tamer wa gomi hiroi no tabi o hajimemashita." : "最弱テイマーはゴミ拾いの旅を始めました。"
,"saikano" : "最終兵器彼女"
,"saiki kusuo no psi nan" : "斉木楠雄のΨ難"
,"saikin yatotta maid ga ayashii" : "最近雇ったメイドが怪しい"
,"saikyou densetsu kurosawa" : "最強伝説 黒沢"
,"saikyou tank no meikyuu kouryaku" : "最強タンクの迷宮攻略"
,"sailor moon" : "セーラームーン"
,"saimin seishidou" : "催眠性指導"
,"saimin yuugi" : "催眠遊戯"
,"saint october" : "Saint October"
,"saint seiya" : "聖闘士星矢"
,"saint tail" : "怪盗セイント・テール"
,"saint young men" : "聖☆おにいさん"
,"saiyuki" : "最遊記"
,"sakamoto days" : "SAKAMOTO DAYS"
,"saki" : "咲-Saki-"
,"sakuna of rice and ruin" : "天穂のサクナヒメ"
,"sakura hime" : "桜姫"
,"sakura moyu." : "さくら、もゆ。"
,"sakura musubi" : "さくらむすび"
,"sakura quest" : "サクラクエスト"
,"sakura taisen" : "サクラ大戦"
,"sakura trick" : "桜Trick"
,"sakurako-san no ashimoto ni wa shitai ga umatteiru" : "櫻子さんの足下には死体が埋まっている"
,"sakurasou no pet na kanojo" : "さくら荘のペットな彼女"
,"sakushi shoujo shi o nameteta watashi ga shitta 8-tsu no gijutsu to yuuki no han" : "作詞少女～詞をなめてた私が知った8つの技術と勇気の話～"
,"sally the witch" : "魔法使いサリー"
,"samon-kun wa summoner" : "左門くんはサモナー"
,"samurai 7" : "SAMURAI7"
,"samurai champloo" : "サムライチャンプルー"
,"samurai flamenco" : "サムライフラメンコ"
,"samurai pizza cats" : "キャッ党忍伝てやんでえ"
,"samurai sentai shinkenger" : "侍戦隊シンケンジャー"
,"samurai spirits" : "サムライスピリッツ"
,"samurai usagi" : "侍兎"
,"samurai warriors" : "戦国無双"
,"sangoku rensenki" : "三国恋戦記"
,"sangokushi puzzle taisen" : "三国志パズル大戦"
,"sangokushi taisen" : "三国志大戦"
,"sankarea" : "さんかれあ"
,"sanoba witch" : "サノバウィッチ"
,"sansha sanyou" : "三者三葉"
,"sarazanmai" : "さらざんまい"
,"sasameki koto" : "ささめきこと"
,"sasami magical girls club" : "砂沙美☆魔法少女クラブ"
,"sasami-san ganbaranai" : "ささみさん@がんばらない"
,"sasayaku you ni koi wo utau" : "さやくように恋を唄う"
,"sasuga no sarutobi" : "さすがの猿飛"
,"satsuriku no tenshi" : "殺戮の天使"
,"savage reign" : "風雲黙示録"
,"saya no uta" : "沙耶の唄"
,"sayonara zetsubou sensei" : "さよなら絶望先生"
,"scared rider xechs" : "スカーレッドライダーゼクス"
,"scarlet nexus" : "SCARLET NEXUS"
,"school days" : "School Days"
,"school rumble" : "スクールランブル"
,"schoolgirl strikers" : "スクールガールストライカーズ"
,"schwarzesmarken" : "シュヴァルツェスマーケン"
,"scooby-doo" : "スクービー・ドゥー"
,"scott pilgrim" : "スコット・ピルグリム"
,"scp foundation" : "SCP財団"
,"scrapped princess" : "スクラップド・プリンセス"
,"s-cry-ed" : "スクライド"
,"sd gundam sangokuden" : "SDガンダム三国伝"
,"sdorica" : "Sdorica"
,"seer" : "Seer"
,"sei juushi bismark" : "星銃士ビスマルク"
,"seijuu sentai gingaman" : "星獣戦隊ギンガマン"
,"seiken densetsu" : "聖剣伝説"
,"seiken densetsu 2" : "聖剣伝説2"
,"seiken densetsu 3" : "聖剣伝説3"
,"seiken gakuin no maken tsukai" : "聖剣学院の魔剣使い"
,"seiken manifestia" : "政剣マニフェスティア"
,"seikon no qwaser" : "聖痕のクェイサー"
,"seirei gensouki" : "精霊幻想記"
,"seirei kishi aquael" : "精霊騎士アクエアル"
,"seirei no moribito" : "精霊の守り人"
,"seiren" : "セイレン"
,"seishokuki" : "性食鬼"
,"seishoujo sentai lakers" : "聖少女戦隊レイカーズ"
,"seishun buta yarou wa bunny girl senpai no yume o minai" : "青春ブタ野郎はバニーガール先輩の夢を見ない"
,"seitenshi yumieru" : "聖天使ユミエル"
,"seitokai ni mo ana wa aru" : "生徒会にも穴はある！"
,"seitokai no ichizon" : "生徒会の一存"
,"seitokai yakuindomo" : "生徒会役員共"
,"sekai de ichiban tsuyoku naritai" : "世界でいちばん強くなりたい！"
,"sekai saikou no ansatsusha isekai kizoku ni tensei suru" : "世界最高の暗殺者、異世界貴族に転生する"
,"sekai seifuku bouryaku no zvezda" : "世界征服～謀略のズヴィズダー～"
,"sekaiichi hatsukoi" : "世界一初恋"
,"sekirei" : "セキレイ"
,"sekiro shadows die twice" : "SEKIRO: SHADOWS DIE TWICE"
,"selector infected wixoss" : "selector infected WIXOSS"
,"sen no hatou tsukisome no kouki" : "千の刃濤、桃花染の皇姫"
,"sengoku ace" : "戦国エース"
,"sengoku basara" : "戦国バサラ"
,"sengoku bushouki muramasa" : "戦国武将姫-MURAMASA-"
,"sengoku collection" : "戦国コレクション"
,"sengoku gakuen senki nobunaga" : "仙獄学艶戦姫ノブナガッ！"
,"sengoku night blood" : "戦刻ナイトブラッド"
,"sengoku otome" : "戦国乙女"
,"sengoku puzzle animal daigassen" : "戦国パズル!!あにまる大合戦"
,"senjou no fuga" : "戦場のフーガ"
,"senki zesshou symphogear" : "戦姫絶唱シンフォギア"
,"senko no ronde" : "旋光の輪舞"
,"sennen sensou aigis" : "千年戦争アイギス"
,"senpai ga uzai kouhai no hanashi" : "先輩がうざい後輩の話"
,"senran kagura" : "閃乱カグラ"
,"senren banka" : "千恋*万花"
,"sentai daishikkaku" : "戦隊大失格"
,"sentai red isekai de boukensha ni naru" : "戦隊レッド 異世界で冒険者になる"
,"sentimental graffiti" : "センチメンタルグラフィティ"
,"sentimental journey" : "センチメンタルジャーニー"
,"sentouin hakenshimasu" : "戦闘員、派遣します！"
,"senyuu." : "戦勇。"
,"servant x service" : "サーバント×サービス"
,"seto no hanayome" : "瀬戸の花嫁"
,"seven knights" : "セブンナイツ"
,"seven mortal sins" : "sin 七つの大罪"
,"seven of seven" : "七人のナナ"
,"sewayaki kitsune no senko-san" : "世話やきキツネの仙狐さん"
,"sexfriend" : "SEXFRIEND"
,"shachiku-san wa youjo yuurei ni iyasaretai." : "社畜さんは幼女幽霊に癒されたい。"
,"shadow hearts" : "シャドウハーツ"
,"shadow lady" : "SHADOW LADY"
,"shadow of the colossus" : "ワンダと巨像"
,"shadow skill" : "SHADOW SKILL -影技-"
,"shadows house" : "シャドーハウス"
,"shadowverse" : "Shadowverse"
,"shakugan no shana" : "灼眼のシャナ"
,"shakunetsu no takkyuu musume" : "灼熱の卓球娘"
,"shaman king" : "シャーマンキング"
,"shamanic princess" : "シャーマニックプリンセス"
,"shangri-la frontier" : "シャングリラ・フロンティア〜クソゲーハンター、神ゲーに挑まんとす"
,"shantae" : "シャンティ"
,"sharin no kuni himawari no shoujo" : "車輪の国、向日葵の少女"
,"she-ra and the princesses of power" : "シーラとプリンセス戦士"
,"sherlock hound" : "名探偵ホームズ"
,"shiei no sona-nyl -what a beautiful memories-" : "紫影のソナーニル -What a beautiful memories-"
,"shiin" : "死印"
,"shijou saikyou no daimaou murabito a ni tensei suru" : "史上最強の大魔王、村人Aに転生する"
,"shikabane hime" : "屍姫"
,"shikanoko nokonoko koshitantan" : "しかのこのこのここしたんたん"
,"shiki" : "屍鬼"
,"shikigami no shiro" : "式神の城"
,"shikkoku no sharnoth" : "漆黒のシャルノス"
,"shimaizuma" : "姉妹妻"
,"shimoneta to iu gainen ga sonzai shinai taikutsu na sekai" : "下ネタという概念が存在しない退屈な世界"
,"shin megami tensei" : "真・女神転生"
,"shin megami tensei devil children" : "真・女神転生デビルチルドレン"
,"shinazu no himegimi" : "死なずの姫君"
,"shinchou yuusha kono yuusha ga ore tueee kuse ni shinchou sugiru" : "この勇者が俺TUEEEくせに慎重すぎる"
,"shingeki no kyojin" : "進撃の巨人"
,"shingu secret of the stellar wars" : "学園戦記ムリョウ"
,"shinigami bocchan to kuro maid" : "死神坊ちゃんと黒メイド"
,"shining" : "シャイニング・シリーズ"
,"shining ark" : "シャイニング・アーク"
,"shining blade" : "シャイニング・ブレイド"
,"shining force" : "シャイニング・フォース"
,"shining force exa" : "シャイニング・フォース イクサ"
,"shining force neo" : "シャイニング・フォース ネオ"
,"shining hearts" : "シャイニング・ハーツ"
,"shining in the darkness" : "シャイニング&ザ・ダクネス"
,"shining may" : "シャイNing・めい"
,"shining resonance" : "シャイニング・レゾナンス"
,"shining star" : "シャイニングスター"
,"shining sword romance" : "ロマンスは剣の輝き"
,"shining tears" : "シャイニング・ティアーズ"
,"shining wind" : "シャイニング・ウィンド"
,"shinja zero no megami-sama to hajimeru isekai kouryaku" : "信者ゼロの女神サマと始める異世界攻略"
,"shinkansen henkei robo shinkalion" : "新幹線変形ロボ シンカリオン"
,"shinken" : "しんけん!!"
,"shinken zemi koukou kouza" : "進研ゼミ高校講座"
,"shinkon gattai godannar" : "神魂合体ゴーダンナー"
,"shinmai fukei kiruko-san" : "新米婦警キルコさん"
,"shinmai maou no testament" : "新米魔王の契約者"
,"shinmai renkinjutsushi no tenpo keiei" : "新米錬金術師の店舗経営"
,"shinrabansho" : "神羅万象"
,"shinryaku ika musume" : "侵略!イカ娘"
,"shinseiki inma seiden" : "新世紀 淫魔聖伝"
,"shinsekai yori" : "新世界より"
,"shippuu iron leaguer" : "疾風!アイアンリーガー"
,"shiro seijo to kuro bokushi" : "白聖女と黒牧師"
,"shirobako" : "SHIROBAKO"
,"shiroi suna no aquatope" : "白い砂のアクアトープ"
,"shirokuma cafe" : "しろくまカフェ"
,"shironeko project" : "白猫プロジェクト"
,"shishunki na adam" : "思春期なアダム"
,"shiunji-ke no kodomotachi" : "紫雲寺家の子供たち"
,"shizuku" : "雫"
,"shock troopers" : "ショックトルーパーズ"
,"shojo no shimobe-kun" : "処女のシモベくん♪"
,"shokugeki no soma" : "食戟のソーマ"
,"shomin sample" : "俺がお嬢様学校に「庶民サンプル」として拉致られた件"
,"shoujo kageki revue starlight" : "少女☆歌劇 レヴュー・スタァライト"
,"shoujo mahou gaku little witch romanesque" : "少女魔法学リトルウィッチロマネスク"
,"shoujo no toge" : "少女のトゲ"
,"shoujo ramune" : "少女ラムネ"
,"shoujo shuumatsu ryokou" : "少女終末旅行"
,"shoujo x shoujo x shoujo" : "少女×少女×少女"
,"shoukan yuusha to f-kei kareshi" : "召喚勇者とF系彼氏"
,"shounen maid" : "少年メイド"
,"show by rock" : "SHOW BY ROCK!!"
,"shrek" : "シュレック"
,"shrine of the morning mist" : "朝霧の巫女"
,"shuffle" : "SHUFFLE!"
,"shugaten" : "しゅがてん！"
,"shugo chara" : "しゅごキャラ!"
,"shukufuku no campanella" : "祝福のカンパネラ"
,"shuriken sentai ninninger" : "手裏剣戦隊ニンニンジャー"
,"shuu ni ichido classmate o kau hanashi" : "週に一度クラスメイトを買う話"
,"shuukan watashi no onii-chan" : "週刊わたしのおにいちゃん"
,"shuumatsu nani shitemasu ka isogashii desu ka sukutte moratte ii desu ka" : "終末なにしてますか？忙しいですか？救ってもらっていいですか？"
,"shuumatsu no harem" : "終末のハーレム"
,"shuumatsu no izetta" : "終末のイゼッタ"
,"shuumatsu no valkyrie" : "終末のワルキューレ"
,"shuusen no lorelei" : "終戦のローレライ"
,"signalis" : "SIGNALIS"
,"silent hill" : "サイレントヒル"
,"silent mobius" : "サイレントメビウス"
,"silver spoon" : "銀の匙"
,"simoun" : "シムーン"
,"sing" : "SING/シング"
,"sinisistar" : "SiNiSistar"
,"sinoalice" : ["SINoALICE", "SINoALICE -シノアリス-"]
,"sister princess" : "シスタープリンセス"
,"sister quest" : "Sister Quest"
,"sisters natsu no saigo no hi" : "SISTERS ～夏の最後の日～"
,"sk8 the infinity" : "SK∞ エスケーエイト"
,"sket dance" : "SKET DANCE"
,"skies of arcadia" : "エターナルアルカディア"
,"skullgirls" : "スカルガールズ"
,"sky girls" : "スカイガールズ"
,"slam dunk" : "SLAM DUNK"
,"slay the spire" : "Slay the Spire"
,"slayers" : "スレイヤーズ"
,"sleeping beauty" : "眠れる森の美女"
,"slime taoshite 300-nen shiranai uchi ni level max ni nattemashita" : "スライム倒して300年、知らないうちにレベルMAXになってました"
,"slow loop" : "スローループ"
,"slow start" : "スロウスタート"
,"sly cooper" : "怪盗スライ・クーパー"
,"smile precure" : "スマイルプリキュア!"
,"snow white and the seven dwarfs" : "白雪姫と七人の小人"
,"snowbreak containment zone" : "スノウブレイク：禁域降臨"
,"solatorobo" : "Solatorobo"
,"soleil" : "ソレイユシリーズ"
,"solo leveling" : "俺だけレベルアップな件"
,"soltyrei" : "SoltyRei"
,"sonic soldier borgman" : "超音戦士ボーグマン"
,"sonic the hedgehog" : "ソニック・ザ・ヘッジホッグ"
,"sono bisque doll wa koi o suru" : "その着せ替え人形は恋をする"
,"sono hanabira ni kuchizuke o" : "その花びらにくちづけを"
,"sonzai shinai manga no hitokoma" : "存在しない漫画の1コマ"
,"sora no iro mizu no iro" : "そらのいろ、みずのいろ"
,"sora no kanata no dystopia" : "天穹ノ彼方の錬星郷"
,"sora no manimani" : "宙のまにまに"
,"sora no method" : "天体のメソッド"
,"sora no otoshimono" : "そらのおとしもの"
,"sora no woto" : "ソ・ラ・ノ・ヲ・ト"
,"sora wo kakeru shoujo" : "宇宙をかける少女"
,"sora yori mo tooi basho" : "宇宙よりも遠い場所"
,"sorcerous stabber orphen" : "魔術士オーフェン"
,"soredemo ayumu wa yosetekuru" : "それでも歩は寄せてくる"
,"soredemo machi wa mawatteiru" : "それでも町は廻っている"
,"soredemo tsuma o aishiteru" : "それでも妻を愛してる"
,"soukyuu no fafner" : "蒼穹のファフナー"
,"soul catchers" : "SOUL CATCHER(S)"
,"soul eater" : "ソウルイーター"
,"soul eater not" : "ソウルイーターノット!"
,"soul knight" : "Soul Knight"
,"soulcalibur" : "ソウルキャリバー"
,"soulworker" : "ソウルワーカー"
,"sound horizon" : "Sound Horizon"
,"sound voltex" : "SOUND VOLTEX"
,"souran no chikai" : "蒼藍の誓い"
,"sousei no onmyouji" : "双星の陰陽師"
,"sousei tenshi cross emotion" : "想聖天使クロスエモーション"
,"sousou no frieren" : "葬送のフリーレン"
,"south park" : "サウスパーク"
,"space adventure cobra" : "コブラ"
,"space battleship yamato" : "宇宙戦艦ヤマト"
,"space battleship yamato 2199" : "宇宙戦艦ヤマト2199"
,"space channel 5" : "スペースチャンネル5"
,"space dandy" : "スペース☆ダンディ"
,"space patrol luluco" : "宇宙パトロールルル子"
,"space pirate captain harlock" : "宇宙海賊キャプテンハーロック"
,"space pirate mito" : "宇宙海賊ミトの大冒険"
,"space runaway ideon" : "伝説巨神イデオン"
,"spaceship agga ruter" : "Space Ofera アッガ・ルター"
,"spectral force" : "スペクトラルフォース"
,"spice and wolf" : "狼と香辛料"
,"spider-man" : "スパイダーマン"
,"spiral" : "スパイラル ～推理の絆～"
,"spirited away" : "千と千尋の神隠し"
,"splatoon" : "スプラトゥーン"
,"spongebob squarepants" : "スポンジ・ボブ"
,"spy kyoushitsu" : "スパイ教室"
,"spy x family" : "SPY×FAMILY"
,"spyro the dragon" : "スパイロ・ザ・ドラゴン"
,"squid game" : "イカゲーム"
,"ssss.dynazenon" : "SSSS.DYNAZENON"
,"ssss.gridman" : "SSSS.GRIDMAN"
,"stand my heroes" : "スタンドマイヒーローズ"
,"star driver" : "STAR DRIVER 輝きのタクト"
,"star fox" : "スターフォックス"
,"star gladiator" : "スターグラディエイター"
,"star ocean" : "スターオーシャン"
,"star ocean 2" : "スターオーシャン2"
,"star ocean 3" : "スターオーシャン3"
,"star ocean 4" : "スターオーシャン4"
,"star trek" : "スタートレック"
,"star twinkle precure" : "スター☆トゥインクルプリキュア"
,"star vs. the forces of evil" : "悪魔バスター★スター・バタフライ"
,"star wars" : "スター・ウォーズ"
,"starcraft" : "スタークラフト"
,"stardew valley" : "Stardew Valley"
,"starless" : "STARLESS"
,"star-myu" : "スタミュ"
,"starship girl yamamoto yohko" : "それゆけ!宇宙戦艦ヤマモト・ヨーコ"
,"starzinger" : "SF西遊記スタージンガー"
,"station memories" : "ステーションメモリーズ！ - 駅メモ！"
,"steam detectives" : "快傑蒸気探偵団"
,"steel angel kurumi" : "鋼鉄天使くるみ"
,"steinsgate" : "STEINS;GATE"
,"stella glow" : "ステラ グロウ"
,"stellar blade" : "Stellar Blade"
,"steven universe" : "スティーブン・ユニバース"
,"stop hibari-kun" : "ストップ!! ひばりくん!"
,"strange case of dr jekyll and mr hyde" : "ジキル博士とハイド氏"
,"strange journey" : "真・女神転生 STRANGE JOURNEY"
,"stranger things" : "ストレンジャー・シングス 未知の世界"
,"stratos 4" : "ストラトス・フォー"
,"strawberry panic" : "ストロベリー・パニック！"
,"street fighter" : "ストリートファイター"
,"streets of rage" : "ベア・ナックル"
,"strider" : "ストライダー飛竜"
,"strike the blood" : "ストライク・ザ・ブラッド"
,"strike witches" : "ストライクウィッチーズ"
,"stringendo" : "ストリンジェンド"
,"subarashiki hibi" : "素晴らしき日々 ～不連続存在～"
,"subete no jinrui o hakai suru. sorera wa saisei dekinai." : "すべての人類を破壊する。それらは再生できない。"
,"submarine 707r" : "サブマリン707R"
,"subverse" : "Subverse"
,"sugarbunnies" : "シュガーバニーズ"
,"suguri" : "スグリ"
,"suigetsu" : "水月"
,"suika" : "水夏"
,"suikoden v" : "幻想水滸伝V"
,"suisei no gargantia" : "翠星のガルガンティア"
,"suisei tenshi prima veil zwei" : "彗聖天使プリマヴェールZwei"
,"suite precure" : "スイートプリキュア♪"
,"suki na ko ga megane wo wasureta" : "好きな子がめがねを忘れた"
,"suki na mono wa suki dakara shouganai" : "好きなものは好きだからしょうがない!!"
,"summer pockets" : "Summer Pockets"
,"summer wars" : "サマーウォーズ"
,"summertime render" : "サマータイムレンダ"
,"summon night" : "サモンナイト"
,"sumomomo momomo" : "すもももももも～地上最強のヨメ～"
,"sunohara-sou no kanrinin-san" : "すのはら荘の管理人さん"
,"super black jack" : "スーパーブラックジャック"
,"super cub" : "スーパーカブ"
,"super dimension century orguss" : "超時空世紀オーガス"
,"super doctor k" : "スーパードクターK"
,"super doll licca-chan" : "スーパードール リカちゃん"
,"super gals" : "超GALS！寿蘭"
,"super mario brothers" : "スーパーマリオブラザーズ"
,"super radical gag family" : "浦安鉄筋家族"
,"super real mahjong" : "スーパーリアル麻雀"
,"super robot wars" : "スーパーロボット大戦"
,"super robot wars k" : "スーパーロボット大戦K"
,"super robot wars w" : "スーパーロボット大戦W"
,"super robot wars z 2nd" : "第2次スーパーロボット大戦Z"
,"super sentai" : "スーパー戦隊"
,"super sonico" : "すーぱーそに子"
,"super sons" : "スーパーサンズ"
,"superman" : "スーパーマン"
,"supernatural" : "スーパーナチュラル"
,"suzuka" : "涼風"
,"suzume no tojimari" : "すずめの戸締まり"
,"suzunone seven" : "スズノネセブン！"
,"swat kats" : "SWAT Kats: The Radical Squadron"
,"sword art online" : "ソードアート・オンライン"
,"sword art online alternative gun gale online" : "ソードアート・オンライン オルタナティブ ガンゲイル・オンライン"
,"sword world 2.0" : "ソード・ワールド2.0"
,"sword world rpg" : "ソード・ワールドRPG"
,"sylvanian families" : "シルバニアファミリー"
,"taboo charming mother" : "艶母"
,"tachibana-san-chi no dansei jijou" : "橘さん家ノ男性事情"
,"tactics ogre" : "タクティクスオウガ"
,"taimadou gakuen 35 shiken shoutai" : "対魔導学園35試験小隊"
,"taimanin asagi" : "対魔忍アサギ"
,"taimanin gogo" : "対魔忍GOGO"
,"taimanin rpg" : "対魔忍RPG"
,"taimanin yukikaze" : "対魔忍ユキカゼ"
,"taisen hot gimmick" : "対戦ホットギミック"
,"taishou yakyuu musume" : "大正野球娘。"
,"taiyou no yuusha fighbird" : "太陽の勇者ファイバード"
,"takamare takamaru" : "たかまれ!タカマル"
,"tako no marine" : "タコのマリネ"
,"takopii no genzai" : "タコピーの原罪"
,"takuan to batsu no nichijou enmachou" : "たくあんとバツの日常閻魔帳"
,"tales of" : "テイルズ オブ シリーズ"
,"tales of arise" : "テイルズ オブ アライズ"
,"tales of asteria" : "テイルズ オブ アスタリア"
,"tales of berseria" : "テイルズ オブ ベルセリア"
,"tales of destiny" : "テイルズ オブ デスティニー"
,"tales of destiny 2" : "テイルズ オブ デスティニー2"
,"tales of eternia" : "テイルズ オブ エターニア"
,"tales of graces" : "テイルズ オブ グレイセス"
,"tales of hearts" : "テイルズ オブ ハーツ"
,"tales of innocence" : "テイルズ オブ イノセンス"
,"tales of legendia" : "テイルズ オブ レジェンディア"
,"tales of phantasia" : "テイルズ オブ ファンタジア"
,"tales of rebirth" : "テイルズ オブ リバース"
,"tales of symphonia" : "テイルズ オブ シンフォニア"
,"tales of the abyss" : "テイルズ オブ ジ アビス"
,"tales of the world" : "テイルズ オブ ザ ワールド"
,"tales of vesperia" : "テイルズ オブ ヴェスペリア"
,"tales of xillia" : "テイルズ オブ エクシリア"
,"tales of zestiria" : "テイルズ オブ ゼスティリア"
,"tamacolle" : "魂これ"
,"tamagotchi" : "たまごっち"
,"tamako market" : "たまこまーけっと"
,"tamayura" : "たまゆら"
,"tanaka-kun wa itsumo kedaruge" : "田中くんはいつもけだるげ"
,"tangled" : "塔の上のラプンツェル"
,"tanken driland" : "探検ドリランド"
,"tantei opera milky holmes" : "探偵オペラ ミルキィホームズ"
,"tantei wa mou shindeiru." : "探偵はもう、死んでいる。"
,"tari tari" : "TARI TARI"
,"tartaros" : "Tartaros-タルタロス"
,"tarzan" : "ターザン"
,"tasogare otome x amnesia" : "黄昏乙女×アムネジア"
,"tate no yuusha no nariagari" : "盾の勇者の成り上がり"
,"tayutama" : "タユタマ"
,"team fortress" : "Team Fortress"
,"tear ring saga" : "ティアリングサーガ ユトナ英雄戦記"
,"tearmoon teikoku monogatari" : "ティアムーン帝国物語"
,"tears to tiara" : "ティアーズ・トゥ・ティアラ"
,"tech romancer" : "超鋼戦紀キカイオー"
,"teekyuu" : "てーきゅう"
,"teen titans" : "ティーン・タイタンズ"
,"teenage mutant ninja turtles" : "ティーンエイジ・ミュータント・ニンジャ・タートルズ"
,"teisou gyakuten sekai" : "貞操逆転世界"
,"tejina senpai" : "手品先輩"
,"tekkaman blade" : "宇宙の騎士テッカマンブレード"
,"tekken" : "鉄拳"
,"ten tenhoudoori no kaidanji" : "天 天和通りの快男児"
,"tenchi muyo" : "天地無用！"
,"tenchi muyo gxp" : "天地無用! GXP"
,"tenchu" : "天誅"
,"tengai makyou" : "天外魔境"
,"tengen toppa gurren lagann" : "天元突破グレンラガン"
,"tengoku daimakyou" : "天国大魔境"
,"tenjou tenge" : "天上天下"
,"tenka hyakken" : "天華百剣"
,"tenkai knights" : "テンカイナイト"
,"tenki no ko" : "天気の子"
,"tensai ouji no akaji kokka saisei jutsu" : "天才王子の赤字国家再生術"
,"tensei kizoku kantei skill de nariagaru" : "転生貴族、鑑定スキルで成り上がる"
,"tensei oujo to tensai reijou no mahou kakumei" : "転生王女と天才令嬢の魔法革命"
,"tensei shitara dainana ouji datta node kimama ni majutsu o kiwamemasu" : "転生したら第七王子だったので、気ままに魔術を極めます"
,"tensei shitara ken deshita" : "転生したら剣でした"
,"tensei shitara slime datta ken" : "転生したらスライムだった件"
,"tenshi na konamaiki" : "天使な小生意気"
,"tenshi ni narumon" : "天使になるもんっ!"
,"tenshi no 3p" : "天使の3P!"
,"tenshi no inai 12-gatsu" : "天使のいない12月"
,"tenshi no nichou kenjuu -angelos armas-" : "天使ノ二挺拳銃-Angelos Armas-"
,"tenshi no shippo" : ["天使のしっぽ", "おとぎストーリー 天使のしっぽ"]
,"tenshi souzou re-boot" : "天使☆騒々 RE-BOOT!"
,"tenshin ranman" : "天神乱漫"
,"tensou sentai goseiger" : "天装戦隊ゴセイジャー"
,"tera" : "TERA"
,"terao the next generation machine" : "テラオ The next generation machine"
,"terminator" : "ターミネーター"
,"terra formars" : "テラフォーマーズ"
,"terraria" : "Terraria"
,"tetsujin 28-gou" : "鉄人28号"
,"tetsunabe no jan" : "鉄鍋のジャン！"
,"the adventures of jimmy neutron boy genius" : "ジミー・ニュートロン 僕は天才発明家！"
,"the adventures of tom sawyer" : "トム・ソーヤーの冒険"
,"the amazing 3" : "W3"
,"the amazing digital circus" : "ザ・アメイジング・デジタル・サーカス"
,"the amazing world of gumball" : "おかしなガムボール"
,"the bad guys" : "バッドガイズ"
,"the big o" : "THE ビッグオー"
,"the bush baby" : "大草原の小さな天使 ブッシュベイビー"
,"the cat returns" : "猫の恩返し"
,"the coffin of andy and leyley" : "The Coffin of Andy and Leyley"
,"the elder scrolls" : "The Elder Scrolls"
,"the eternity sword" : "エターニティソードシリーズ"
,"the evil within" : "サイコブレイク"
,"the exit 8" : "8番出口"
,"the fairly oddparents" : "Oops!フェアリーペアレンツ"
,"the genius bakabon" : "天才バカボン"
,"the ghost and molly mcgee" : "ゴースト&モリー"
,"the girl who leapt through time" : "時をかける少女"
,"the goose that laid the golden eggs" : "ガチョウと黄金の卵"
,"the great escape" : "The Great Escape"
,"the grim adventures of billy and mandy" : "ビリー&マンディ"
,"the hunchback of notre dame" : "ノートルダムの鐘"
,"the idolmaster" : "アイドルマスター"
,"the idolmaster sidem" : "アイドルマスター SideM"
,"the incredibles" : "Mr.インクレディブル"
,"the iron giant" : "アイアン・ジャイアント"
,"the jungle book" : "ジャングル・ブック"
,"the kabocha wine" : "かぼちゃワイン"
,"the last blade" : "月華の剣士"
,"the last of us" : "The Last of Us"
,"the last story" : "ラストストーリー"
,"the law of ueki" : "うえきの法則"
,"the legend of dragoon" : "レジェンドオブドラグーン"
,"the legend of heroes" : "英雄伝説"
,"the legend of korra" : "レジェンド･オブ･コーラ"
,"the legend of luo xiaohei" : "羅小黒戦記"
,"the legend of the legendary heroes" : "伝説の勇者の伝説"
,"the legend of zelda" : "ゼルダの伝説"
,"the lion king" : "ライオンキング"
,"the little match girl" : "マッチ売りの少女"
,"the little mermaid" : "リトル・マーメイド"
,"the lord of the rings" : "THE LOAD OF THE RINGS"
,"the loud house" : "ラウド・ハウス"
,"the marshmallow times" : "マシュマロ通信"
,"the mask" : "マスク"
,"the melancholy of haruhi suzumiya" : "涼宮ハルヒの憂鬱"
,"the melody of oblivion" : "忘却の旋律"
,"the momotaroh" : "THE MOMOTAROH"
,"the onechanbara" : "お姉チャンバラ"
,"the owl house" : "アウルハウス"
,"the powerpuff girls" : "パワーパフガールズ"
,"the ring" : "リング"
,"the road to el dorado" : "エル・ドラド 黄金の都"
,"the sacred blacksmith" : "聖剣の刀鍛冶"
,"the secret of kells" : "ブレンダンとケルズの秘密"
,"the secret world of arrietty" : "借りぐらしのアリエッティ"
,"the severing crime edge" : "断裁分離のクライムエッジ"
,"the silence of the lambs" : "羊たちの沈黙"
,"the simpsons" : "ザ・シンプソンズ"
,"the smoke room" : "The Smoke Room"
,"the story of perrine" : "ペリーヌ物語"
,"the story of pollyanna" : "ポリアンナ物語"
,"the summoning" : "The Summoning"
,"the super dimension fortress macross" : "超時空要塞マクロス"
,"the swiss family robinson flone of the mysterious island" : "家族ロビンソン漂流記 ふしぎな島のフローネ"
,"the tale of the bamboo cutter" : "竹取物語"
,"the three little pigs" : "三匹の子豚"
,"the tortoise and the hare" : "ウサギとカメ"
,"the unbeatable squirrel girl" : "The Unbeatable Squirrel Girl"
,"the unbelievable gwenpool" : "アンビリーバブル・グウェンプール"
,"the vision of escaflowne" : "天空のエスカフローネ"
,"the wing of madoola" : "マドゥーラの翼"
,"the witcher" : "ウィッチャー"
,"the wolf and the seven young kids" : "狼と七匹の子山羊"
,"the world ends with you" : "すばらしきこのせかい"
,"the world god only knows" : "神のみぞ知るセカイ"
,"they are my noble masters" : "君が主で執事が俺で"
,"this ugly yet beautiful world" : "この醜くも美しい世界"
,"threads of fate" : "デュープリズム"
,"thumbelina" : "おやゆび姫"
,"thunder claps" : "サンダークラップス！"
,"tico of the seven seas" : "七つの海のティコ"
,"tiger and bunny" : "TIGER & BUNNY"
,"tiger mask" : "タイガーマスク"
,"time bokan" : "タイムボカン"
,"time gal" : "タイムギャル"
,"to heart" : "ToHeart"
,"to love-ru" : "To LOVEる"
,"toaru project" : "とあるプロジェクト"
,"tobaku haouden zero" : "賭博覇王伝 零"
,"tobe isami" : "飛べ!イサミ"
,"tobikage" : "忍者戦士飛影"
,"togainu no chi" : "咎狗の血"
,"toheart2" : "ToHeart2"
,"toji no miko" : "刀使ノ巫女"
,"tokidoki bosotto russia-go de dereru tonari no alya-san" : "時々ボソッとロシア語でデレる隣のアーリャさん"
,"tokimeki memorial" : "ときめきメモリアル"
,"tokimeki tonight" : "ときめきトゥナイト"
,"tokkyuu" : "トッキュー！！"
,"tokumei sentai go-busters" : "特命戦隊ゴーバスターズ"
,"tokusou sentai dekaranger" : "特捜戦隊デカレンジャー"
,"tokyo 7th sisters" : "Tokyo 7th シスターズ"
,"tokyo afterschool summoners" : "東京放課後サモナーズ"
,"tokyo ghoul" : "東京喰種"
,"tokyo jungle" : "TOKYO JUNGLE"
,"tokyo mew mew" : "東京ミュウミュウ"
,"tokyo mirage sessions fe" : "幻影異聞録♯FE"
,"tokyo necro suicide mission" : ["凍京NECRO", "凍京NECRO＜トウキョウ・ネクロ＞ SUICIDE MISSION"]
,"tokyo ravens" : "東京レイヴンズ"
,"tokyo revengers" : "東京卍リベンジャーズ"
,"tokyo underground" : "東京アンダーグラウンド"
,"tokyo xanadu" : "東亰ザナドゥ"
,"tom and jerry" : "トムとジェリー"
,"tom clancys rainbow six" : "レインボーシックス"
,"tomb raider" : "トゥームレイダー"
,"tomica hyper rescue drive head" : "ドライブヘッド～トミカハイパーレスキュー 機動救急警察～"
,"tomo-chan wa onnanoko" : "トモちゃんは女の子!"
,"tonagura" : "となグラ！"
,"tonari no ie no anette-san" : "となりの家のアネットさん"
,"tonari no kyuuketsuki-san" : "となりの吸血鬼さん"
,"tonari no miko-san wa minna warau" : "隣の巫女さんは皆笑う"
,"tonari no onee-san" : "となりのお姉さんシリーズ"
,"tonari no seki-kun" : "となりの関くん"
,"tonde buurin" : "とんでぶーりん"
,"tondemo skill de isekai hourou meshi" : "とんでもスキルで異世界放浪メシ"
,"tongari boushi no atelier" : "とんがり帽子のアトリエ"
,"tonikaku kawaii" : "トニカクカワイイ"
,"toradora" : "とらドラ！"
,"toriko" : "トリコ"
,"toshokan sensou" : "図書館戦争"
,"total drama island" : "トータル・ドラマ"
,"totally spies" : "トータリー・スパイズ！"
,"tottemo luckyman" : "とっても！ラッキーマン"
,"tottemo yasashii amae-chan" : "とっても優しいあまえちゃん！"
,"touch" : "タッチ"
,"touch detective" : "おさわり探偵 小沢里奈"
,"touhou project" : "東方プロジェクト"
,"touken ranbu" : "刀剣乱舞"
,"touki denshou angel eyes" : "闘姫伝承 ANGEL EYES"
,"toukiden" : "討鬼伝"
,"toushin toshi" : "闘神都市"
,"toushou daimos" : "闘将ダイモス"
,"toward the terra" : "地球へ…"
,"tower of druaga" : "ドルアーガの塔"
,"tower of fantasy" : "Tower of Fantasy（幻塔）"
,"tower of god" : "神之塔"
,"tp bon" : "T・Pぼん"
,"transformers" : "トランスフォーマー"
,"trapezium" : "トラペジウム"
,"trapp family story" : "トラップ一家物語"
,"trapt" : "刻命館シリーズ"
,"trauma center" : "TRAUMA CENTER"
,"treasure planet" : "トレジャー・プラネット"
,"tree of savior" : "Tree of Savior"
,"triage x" : "トリアージX"
,"triangle heart" : "とらいあんぐるハート"
,"triggerheart exelica" : "トリガーハート エグゼリカ"
,"trigun" : "トライガン"
,"trinity seven" : "スローループ"
,"tropical kiss" : "トロピカルKISS"
,"tropical-rouge precure" : "トロピカル～ジュ!プリキュア"
,"trouble evocation" : "Trouble evocation"
,"true love story" : "トゥルー・ラブストーリー"
,"tsubasa reservoir chronicle" : "ツバサ-RESERVoir CHRoNiCLE-"
,"tsugumomo" : "つぐもも"
,"tsuihou sareta cheat fuyo majutsushi" : "追放されたチート付与魔術師は気ままなセカンドライフを謳歌する"
,"tsujou kougeki ga zentai kougeki de 2-kai kougeki no okaasan wa suki desu ka" : "通常攻撃が全体攻撃で二回攻撃のお母さんは好きですか？"
,"tsuki ga michibiku isekai douchuu" : "月が導く異世界道中"
,"tsuki ni yorisou otome no sahou" : "月に寄りそう乙女の作法"
,"tsuki wa higashi ni hi wa nishi ni" : "月は東に日は西に"
,"tsukiatte yo satsuki-chan" : "つきあってよ！五月ちゃん"
,"tsukihime" : "月姫"
,"tsukikagerou" : "月陽炎"
,"tsukuyomi moon phase" : "月詠 -MOON PHASE-"
,"tsuma shougakusei ni naru." : "妻、小学生になる。"
,"tsumamigui" : "妻みぐい"
,"tsurikichi sanpei" : "釣りキチ三平"
,"tsuritama" : "つり球"
,"tsurune kazemai koukou kyuudoubu" : "ツルネ ―風舞高校弓道部―"
,"tsuyokiss" : "つよきす"
,"turn a gundam" : "∀ガンダム"
,"turning red" : "私ときどきレッサーパンダ"
,"twelve kingdoms" : "十二国記"
,"twin angels" : "淫獣聖戦"
,"twinbee" : "ツインビー"
,"twinkle crusaders" : "ティンクル くるせいだーす"
,"twinkle star sprites" : "ティンクルスタースプライツ"
,"uchi no kaisha no chiisai senpai no hanashi" : "うちの会社の小さい先輩の話"
,"uchi no maid ga uzasugiru" : "うちのメイドがウザすぎる!"
,"uchi no musume ni te o dasuna" : "ウチのムスメに手を出すな！"
,"uchi no otouto maji de dekain dakedo mi ni konai" : "ウチの弟マジでデカイんだけど見にこない？"
,"uchouten kazoku" : "有頂天家族"
,"uchu sentai kyuranger" : "宇宙戦隊キュウレンジャー"
,"uchuu eiyuu monogatari" : "宇宙英雄物語"
,"uchuu kazoku carlvinson" : "宇宙家族カールビンソン"
,"uchuu no stellvia" : "宇宙のステルビア"
,"uchuu senshi baldios" : "宇宙戦士バルディオス"
,"ueno-san wa bukiyou" : "上野さんは不器用"
,"ufo princess valkyrie" : "円盤皇女ワるきゅーレ"
,"ukagaka" : "伺か"
,"ultimate girls" : "UG☆アルティメットガール"
,"ultraman" : "ウルトラマン"
,"ulysses jeanne darc to renkin no kishi" : "ユリシーズ ジャンヌ・ダルクと錬金の騎士"
,"uma musume pretty derby" : "ウマ娘プリティーダービー"
,"umi monogatari" : "海物語"
,"umibe no etranger" : "海辺のエトランゼ"
,"umihara kawase" : "海腹川背"
,"umineko no naku koro ni" : "うみねこのなく頃に"
,"unbalance x unbalance" : "アンバランス×2"
,"undead girl murder farce" : "アンデッドガール・マーダーファルス"
,"undead unluck" : "アンデッドアンラック"
,"under night in-birth" : "UNDER NIGHT IN-BIRTH"
,"undertale" : "Undertale"
,"un-go" : "UN-GO"
,"unicorn overlord" : "ユニコーンオーバーロード"
,"uninhabited planet survive" : "無人惑星サヴァイヴ"
,"unitia" : "UNITIA 神託の使徒×終焉の女神"
,"unlight" : ["Unlight", "アンライト～Unlight～"]
,"unlimited saga" : "アンリミテッド:サガ"
,"upotte" : "うぽって!!"
,"uq holder" : "UQ HOLDER!"
,"ura kyoushi haitoku no in etsu jugyou" : "裏教師～背徳の淫悦授業～"
,"ura sekai picnic" : "裏世界ピクニック"
,"urara meirochou" : "うらら迷路帖"
,"urotsukidoji" : "超神伝説うろつき童子"
,"urusei yatsura" : "うる星やつら"
,"usagi drop" : "うさぎドロップ"
,"ushio to tora" : "うしおととら"
,"usodere" : "嘘デレ!"
,"uta kata" : "うた∽かた"
,"uta no prince-sama" : "うたのプリンスさまっ"
,"utau" : "UTAU"
,"utawarerumono" : "うたわれるもの"
,"utawarerumono itsuwari no kamen" : "うたわれるもの 偽りの仮面"
,"utsukushiki sei no dendoushi rei rei" : "美しき聖の伝道師麗麗"
,"uzaki-chan wa asobitai" : "宇崎ちゃんは遊びたい!"
,"va-11 hall-a" : "VA-11 Hall-A ヴァルハラ"
,"valkyria chronicles" : "戦場のヴァルキュリア"
,"valkyria chronicles 2" : "戦場のヴァルキュリア2"
,"valkyria chronicles 3" : "戦場のヴァルキュリア3"
,"valkyrie drive" : "ヴァルキリードライブ"
,"valkyrie no bouken" : "ワルキューレの冒険"
,"valkyrie profile" : "ヴァルキリープロファイル"
,"valorant" : "VALORANT"
,"valvrave the liberator" : "革命機ヴァルヴレイヴ"
,"vampire knight" : "ヴァンパイア騎士"
,"vampire princess miyu" : "吸血姫美夕"
,"vampiyan kids" : "バンパイヤン・キッズ"
,"vandread" : "ヴァンドレッド"
,"vanguard princess" : "ヴァンガードプリンセス"
,"variable geo" : "ヴァリアブル・ジオ"
,"various" : "よろず"
,"venus 5" : "セーラー戦士ヴィーナス・ファイブ"
,"venus eleven vivid" : "ビーナスイレブンびびっど！"
,"veritas" : "Veritas"
,"victory gundam" : "機動戦士Vガンダム"
,"video girl ai" : "電影少女"
,"vindictus" : "マビノギ英雄伝"
,"violated heroine" : "VHゲーム01"
,"violet evergarden" : "ヴァイオレット・エヴァーガーデン"
,"violinist of hameln" : "ハーメルンのバイオリン弾き"
,"viper" : "VIPER"
,"viper ctr" : "VIPER CTR ～あすか～"
,"viper f40" : "VIPER -F40-"
,"viper gtb" : "VIPER GTB -RISE AFTER-"
,"viper gts" : "VIPER -GTS- 悪魔は再び"
,"viper rsr" : "VIPER -RSR-"
,"viper v16" : "VIPER -V16-"
,"virtua fighter" : "バーチャファイター"
,"virtuacall" : "バーチャコール"
,"virtual on" : "電脳戦機バーチャロン"
,"vividred operation" : "ビビッドレッド・オペレーション"
,"vocaloid" : "VOCALOID"
,"voiceroid" : "VOICEROID"
,"voicevox" : "VOICEVOX"
,"voltage fighter gowcaizer" : "超人学園ゴウカイザー"
,"voltes v" : ["ボルテスV", "超電磁マシーン ボルテスV"]
,"voltron" : "ボルトロン"
,"w.l.o. sekai renai kikou" : "W.L.O.世界恋愛機構"
,"waccha primagi" : "ワッチャプリマジ！"
,"wagamama high spec" : "ワガママハイスペック"
,"wagaya no oinari-sama" : "我が家のお稲荷さま。"
,"wahhaman" : "ワッハマン"
,"waka okami wa shougakusei" : "若おかみは小学生!"
,"wakakusa monogatari nan to jo-sensei" : "若草物語 ナンとジョー先生"
,"wake up girls" : "Wake Up,Girls!"
,"wakfu" : "ワクフ"
,"waku waku 7" : "わくわく7"
,"walkure romanze" : "ワルキューレロマンツェ"
,"wan sheng jie" : "万聖街"
,"wan wan celeb soreyuke tetsunoshin" : "ワンワンセレプー それゆけ！徹之進"
,"wander crown" : ["WANDER CROWN", "WANDER CROWN ～七つの大陸と忘れられた島国"]
,"wander over yonder" : "なんだかんだワンダー"
,"warframe" : "WARFRAME"
,"warhammer" : "ウォーハンマー"
,"warioware" : "メイド イン ワリオシリーズ"
,"warriors orochi" : "無双OROCHI"
,"warship girls" : "戦艦少女"
,"warzard" : "ウォーザード"
,"washio sumi wa yuusha de aru" : "鷲尾須美は勇者である"
,"watashi ga koibito ni nareru wake nai jan muri muri muri ja nakatta" : "わたしが恋人になれるわけないじゃん、ムリムリ！（※ムリじゃなかった!?）"
,"watashi ni tenshi ga maiorita" : "私に天使が舞い降りた!"
,"watashi no ashinaga ojisan" : "私のあしながおじさん"
,"watashi no tame no nuginasai" : "わたしのために脱ぎなさいっ！"
,"watashi nouryoku wa heikinchi de tte itta yo ne" : "私、能力は平均値でって言ったよね!"
,"we bare bears" : "ぼくらベアベアーズ"
,"wedding peach" : "愛天使伝説ウェディングピーチ"
,"weiss kreuz" : "ヴァイスクロイツ"
,"welcome to the n.h.k." : "NHKにようこそ!"
,"whistle" : "ホイッスル!"
,"white album" : "WHITE ALBUM"
,"who framed roger rabbit" : "ロジャー・ラビット"
,"wii fit" : "Wii Fit"
,"wild arms" : "ワイルドアームズ"
,"wild arms 2" : "ワイルドアームズ セカンドイグニッション"
,"wild arms 3" : "ワイルドアームズ3"
,"wild arms 4" : "ワイルドアームズ4"
,"wild arms 5" : ["ワイルドアームズ5", "ワイルドアームズ ザ フィフスヴァンガード"]
,"windbreaker" : "WIND BREAKER"
,"wingman" : "ウィングマン"
,"winnie the pooh" : "クマのプーさん"
,"witch craft works" : "ウィッチクラフトワークス"
,"witchblade" : "ウィッチブレイド"
,"witchs weapon" : "Witch's Weapon -魔女兵器"
,"with you" : "With You"
,"wizard of oz" : "オズの魔法使い"
,"wizardry" : "ウィーザードリィ"
,"wolfs rain" : "WOLF'S RAIN"
,"wonder egg priority" : "ワンダーエッグ プライオリティ"
,"wonder festival mascot" : "ワンダーフェスティバルマスコット"
,"wonder momo" : "ワンダーモモ"
,"wonder project j2" : "ワンダープロジェクトJ2 コルロの森のジョゼット"
,"wonder woman" : "ワンダーウーマン"
,"wonderful precure" : "わんだふるぷりきゅあ！"
,"wonderland wars" : "Wonderland Wars"
,"words worth" : "ワーズ・ワース"
,"working" : "WORKING!!!"
,"world flipper" : "ワールドフリッパー"
,"world heroes" : "ワールドヒーローズ"
,"world masterpiece theater" : "世界名作劇場"
,"world of warcraft" : "World of Warcraft"
,"world teacher isekaishiki kyouiku agent" : "ワールド・ティーチャー -異世界式教育エージェント-"
,"world trigger" : "ワールドトリガー"
,"wotaku ni koi wa muzukashii" : "ヲタクに恋は難しい"
,"wreck it ralph" : "シュガー・ラッシュ"
,"wrestle angels" : "レッスルエンジェルス"
,"wuqi mitu" : "無期迷途"
,"wuthering waves" : "鳴潮"
,"x change" : "XChange"
,"xenoblade" : "ゼノブレイド"
,"xenoblade chronicles 2" : "ゼノブレイド2"
,"xenoblade chronicles 3" : "ゼノブレイド3"
,"xenoblade x" : "ゼノブレイドクロス"
,"xenogears" : "ゼノギアス"
,"xenon mugen no shitai" : "XENON -夢幻の肢体-"
,"xenosaga" : "ゼノサーガ"
,"x-men" : "X-MEN"
,"xxl woofia" : "XXL漢気二丁目"
,"xxxholic" : "XXXHOLiC"
,"yadamon" : "ヤダモン"
,"yagate kimi ni naru" : "やがて君になる"
,"yahari ore no seishun love come wa machigatteiru" : "やはり俺の青春ラブコメはまちがっている"
,"yakitate japan" : "焼きたて!!ジャぱん"
,"yakushiji ryouko no kaiki jikenbo" : "薬師寺涼子の怪奇事件簿"
,"yakusoku no neverland" : "約束のネバーランド"
,"yama no susume" : "ヤマノススメ"
,"yamato gensouki" : "邪馬台幻想記"
,"yamato takeru" : "ヤマトタケル"
,"yami no matsuei" : "闇の末裔"
,"yami to boushi to hon no tabibito" : "ヤミと帽子と本の旅人"
,"yamitsuki" : "やみツキ！"
,"yanineko" : "ヤニねこ"
,"yarukkya knight" : "やるっきゃ騎士"
,"yat space travel agency" : "YAT安心!宇宙旅行"
,"yatterman" : "ヤッターマン"
,"yawara" : "YAWARA!"
,"yes precure 5" : "Yes！プリキュア5"
,"yoake mae yori ruriiro na" : "夜明け前より瑠璃色な"
,"yofukashi no uta" : "よふかしのうた"
,"yokohama kaidashi kikou" : "ヨコハマ買い出し紀行"
,"yomawari" : "夜廻"
,"yondemasuyo azazel-san" : "よんでますよ、アザゼルさん。"
,"yoru ga kuru" : "夜が来る!"
,"yoru no kurage wa oyogenai" : "夜のクラゲは泳げない"
,"yoru no yatterman" : "夜のヤッターマン"
,"yoru to asa no uta" : "よるとあさの歌"
,"yoshinaga-san chi no gargoyle" : "吉永さん家のガーゴイル"
,"yosuga no sora" : "ヨスガノソラ"
,"yotsubato" : "よつばと！"
,"yotsunoha" : "よつのは"
,"you shou yan" : "妖獣之獣"
,"youjo senki" : "幼女戦記"
,"youjuu club" : "妖獣クラブ"
,"youjuu senki a.d. 2048" : "妖獣戦記 -A.D.2048-"
,"youkai hyakkitan" : "妖怪百姫たん！"
,"youkai watch" : "妖怪ウォッチ"
,"youkoso jitsuryoku shijou shugi no kyoushitsu e" : "ようこそ実力至上主義の教室へ"
,"youkoso sukebe elf no mori e" : "ようこそ！スケベエルフの森へ"
,"young justice" : "ヤング・ジャスティス"
,"youre under arrest" : "逮捕しちゃうぞ"
,"yowamushi pedal" : "弱虫ペダル"
,"ys" : "Ys"
,"yu yu hakusho" : "幽遊白書"
,"yu-gi-oh" : "遊☆戯☆王"
,"yu-gi-oh 5ds" : "遊☆戯☆王5D's"
,"yu-gi-oh arc-v" : "遊☆戯☆王ARC-V"
,"yu-gi-oh go rush" : "遊☆戯☆王ゴーラッシュ!!"
,"yu-gi-oh gx" : "遊☆戯☆王GX"
,"yu-gi-oh ocg structures" : "遊戯王OCG"
,"yu-gi-oh sevens" : "遊☆戯☆王SEVENS"
,"yu-gi-oh tag force" : "遊☆戯☆王 タッグフォース"
,"yu-gi-oh vrains" : "遊☆戯☆王VRAINS"
,"yu-gi-oh zexal" : "遊☆戯☆王ZEXAL"
,"yui to onii-chan no koko dake no hanashi" : "結衣とお兄ちゃんの＊だけの話"
,"yukikaze" : "戦闘妖精・雪風"
,"yume nikki" : "ゆめにっき"
,"yume no crayon oukoku" : "夢のクレヨン王国"
,"yume oukoku to nemureru 100-nin no ouji-sama" : "夢王国と眠れる100人の王子様"
,"yume shokunin to wasureji no kuroi yousei" : "夢職人と忘れじの黒い妖精"
,"yumekui merry" : "夢喰いメリー"
,"yumeria" : "ゆめりあ"
,"yu-no" : "この世の果てで恋を唄う少女YU-NO"
,"yuragisou no yuuna-san" : "ゆらぎ荘の幽奈さん"
,"yuri on ice" : "ユーリ!!! on ICE"
,"yurikuma arashi" : "ユリ熊嵐"
,"yuru camp" : "ゆるキャン"
,"yuruyuri" : "ゆるゆり"
,"yuuki bakuhatsu bang bravern" : "勇気爆発バーンブレイバーン"
,"yuuki yuuna wa yuusha de aru" : "結城友奈は勇者である"
,"yuukyuu gensoukyoku" : "悠久幻想曲"
,"yuukyuu no sharin" : "悠久の車輪"
,"yuusha ni narenakatta ore wa shibushibu shuushoku wo ketsui shimashita." : "勇者になれなかった俺はしぶしぶ就職を決意しました。"
,"yuusha no kuse ni namaiki da" : "勇者のくせになまいきだ。"
,"yuusha party o tsuihou sareta beast tamer saikyoushu no nekomimi shoujo to deau" : "勇者パーティーを追放されたビーストテイマー、最強種の猫耳少女と出会う"
,"yuusha raideen" : "勇者ライディーン"
,"yuusha to maou" : "まおゆう魔王勇者"
,"yuyushiki" : "ゆゆ式"
,"z slash x" : "Z/X -Zillions of enemy X-"
,"zambot 3" : "無敵超人ザンボット3"
,"zannen onna kanbu black general-san" : "残念女幹部ブラックジェネラルさん"
,"zaregoto" : "戯言シリーズ"
,"zegapain" : "ゼーガペイン"
,"zeikin de katta hon" : "税金で買った本"
,"zenkoku seifuku bishoujo grand prix" : "全国制服美少女グランプリ"
,"zenless zone zero" : "ゼンレスゾーンゼロ"
,"zero kara hajimeru mahou no sho" : "ゼロから始める魔法の書"
,"zero no tsukaima" : "ゼロの使い魔"
,"zeroin" : "ゼロイン"
,"zeta gundam" : "機動戦士Ζガンダム"
,"zetman" : "ZETMAN"
,"zetsubou" : "絶望"
,"zettai bouei leviathan" : "絶対防衛レヴィアタン"
,"zettai junpaku mahou shoujo" : "絶対純白魔法少女"
,"zettai karen children" : "絶対可憐チルドレン"
,"zettai muteki raijin-oh" : "絶対無敵ライジンオー"
,"ziga" : "ジガ-ZIGA-"
,"zoids" : "ZOIDS"
,"zoids field of rebellion" : "ZOIDS FIELD OF REBELLION"
,"zoids fuzors" : "ゾイドフューザーズ"
,"zoids genesis" : "ゾイドジェネシス"
,"zoids new century" : "ゾイド新世紀／ゼロ"
,"zoids wild" : "ゾイドワイルド"
,"zoids wild zero" : "ゾイドワイルド Zero"
,"zom 100 zombie ni naru made ni shitai 100 no koto" : "ゾン100 ～ゾンビになるまでにしたい100のこと"
,"zombie land saga" : "ゾンビランドサガ"
,"zombie revenge" : "ゾンビリベンジ"
,"zombiepowder." : "ZOMBIEPOWDER."
,"zone of the enders" : "ZONE OF THE ENDERS"
,"zootopia" : "ズートピア"
,"zyuden sentai kyoryuger" : "獣電戦隊キョウリュウジャー"
};
var tags_ejdic = {
 "already uploaded" : {n:"アップロード済"}
,"non-h imageset" : {n:"エロ画像なし"}
,"caption" : {n:"キャプション"}
,"sample" : {n:"サンプル"}
,"scanmark" : {n:"スキャン印"}
,"full color" : {n:"フルカラー"}
,"compilation" : {n:"まとめ"}
,"uncensored" : {n:"モザイク消し"}
,"mosaic censorship" : {n:"モザイク有"}
,"incomplete" : {n:"一部"}
,"full censorship" : {n:"黒消し"}
,"redraw" : {n:"書き換え"}
,"rewrite" : {n:"書き換え"}
,"rough grammar" : {n:"粗翻訳"}
,"rough translation" : {n:"粗翻訳"}
,"replaced" : {n:"置き換え済"}
,"watermarked" : {n:"透かし有"}
,"missing cover" : {n:"表紙なし"}
,"poor grammar" : {n:"貧弱な翻訳"}
,"extraneous ads" : {n:"無関係な広告"}
,"draenei" : {n:"ウォークラフトの種族：ドラエネイ"}
,"kafra" : {n:"ラグナログオンライン：カプラ職員"}
,"houkago tea time" : {n:"放課後ティータイム"}
,"grassens war" : {n:"series:Grassen's War"}
,"bloodyzone" : {n:"series:血界戦線"}
,"bio booster armor guyver" : {n:"強殖装甲ガイバー"}
,"touhou eiyashou" : {n:"東方永夜抄"}
,"b.tarou" : {n:"artist:B.たろう"}
,"dudulu" : {n:"artist:DUDULU"}
,"furiouzly" : {n:"artist:furiouzly"}
,"itotiisakihito" : {n:"artist:いと小さき人"}
,"cobura no oyatsu" : {n:"artist:コブラノヲヤツ"}
,"sahara yumi" : {n:"artist:さはらゆみ"}
,"shiruko" : {n:"artist:しるこ"}
,"chobikuma" : {n:"artist:ちょびくま"}
,"terasu mc" : {n:"artist:テラスMC"}
,"himadara" : {n:"artist:ひまだら"}
,"ryuntack" : {n:"artist:リュンタック"}
,"ore p 2-gou" : {n:"artist:俺P2号"}
,"chihiro hiroi" : {n:"artist:千弘ヒロイ"}
,"azuma minatu" : {n:"artist:東みなつ"}
,"azuma minatsu" : {n:"artist:東みなつ"}
,"hironikuru senga anarogu" : {n:"hironikuru senga anarogu"}
,"kaitou" : {n:"kaitou"}
,"3d" : {n:"3D"}
,"3d imageset" : {n:"3D画像セット"}
,"pixiv" : {n:"pixiv"}
,"webtoon" : {n:"WEB漫画"}
,"artbook" : {n:"アートブック"}
,"anthology" : {n:"アンソロジー"}
,"game sprite" : {n:"ゲームスプライト"}
,"comic" : {n:"コミック"}
,"screenshots" : {n:"スクリーンショット"}
,"digital" : {n:"デジタル"}
,"pixel art" : {n:"ドット絵"}
,"goudoushi" : {n:"合同誌"}
,"variant set" : {n:"差分セット"}
,"novel" : {n:"小説"}
,"sketch lines" : {n:"線画"}
,"soushuuhen" : {n:"総集編"}
,"tankoubon" : {n:"単行本"}
,"digital works" : {n:"電子画像集"}
,"animated" : {n:"動画"}
,"同人誌" : {n:"同人誌"}
,"western cg" : {n:"洋物CG"}
,"western non-h" : {n:"洋物エロなし"}
,"western imageset" : {n:"洋物画像セット"}
,"story arc" : {n:"連載"}
,"multi-work series" : {n:"連載シリーズ"}
,"vtuber" : {n:"Vチューバ―"}
,"animegao" : {n:"アニメ顔"}
,"raccoon boy" : {m:"アライグマ少年"}
,"albino" : {n:"アルビノ"}
,"squid boy" : {m:"イカ少年"}
,"squid girl" : {f:"イカ娘"}
,"cousin" : {n:"いとこ"}
,"dog boy" : {m:"イヌ少年"}
,"dog girl" : {f:"イヌ娘"}
,"dolphin" : {n:"イルカ"}
,"waiter" : {n:"ウェイター"}
,"waitress" : {n:"ウェイトレス"}
,"rabbit" : {n:"ウサギ"}
,"maggot" : {n:"ウジムシ"}
,"cowgirl" : {f:"ウシ娘"}
,"eel" : {n:"ウナギ"}
,"horse boy" : {m:"ウマ少年"}
,"horse girl" : {f:"ウマ娘"}
,"elf" : {n:"エルフ"}
,"wolf boy" : {m:"オオカミ少年"}
,"orc" : {n:"オーク"}
,"dilf" : {m:"おじさん"}
,"tomboy" : {f:"おてんば娘"}
,"frog" : {n:"カエル"}
,"frog boy" : {m:"カエル少年"}
,"frog girl" : {f:"カエル娘"}
,"snail girl" : {f:"カタツムリ娘"}
,"kappa" : {n:"カッパ"}
,"crab" : {n:"カニ"}
,"turtle" : {n:"カメ"}
,"otter boy" : {m:"カワウソ少年"}
,"otter girl" : {f:"カワウソ娘"}
,"kangaroo" : {n:"カンガルー"}
,"kangaroo boy" : {m:"カンガルー少年"}
,"kangaroo girl" : {f:"カンガルー娘"}
,"fox" : {n:"キツネ"}
,"fox boy" : {m:"キツネ少年"}
,"fox girl" : {f:"キツネ娘"}
,"gyaru" : {f:"ギャル"}
,"giraffe girl" : {f:"キリン娘"}
,"whale" : {n:"クジラ"}
,"kunoichi" : {n:"くノ一"}
,"spider" : {n:"クモ"}
,"spider boy" : {m:"クモ少年"}
,"spider girl" : {f:"クモ娘"}
,"clone" : {n:"クローン"}
,"furry" : {n:"ケモ"}
,"kemonomimi" : {n:"ケモミミ"}
,"centaur" : {n:"ケンタウルス"}
,"bat" : {n:"コウモリ"}
,"bat boy" : {m:"コウモリ少年"}
,"bat girl" : {f:"コウモリ娘"}
,"coach" : {n:"コーチ"}
,"goblin" : {n:"ゴブリン"}
,"gorilla" : {n:"ゴリラ"}
,"rhinoceros" : {n:"サイ"}
,"rhinoceros boy" : {m:"サイ少年"}
,"rhinoceros girl" : {f:"サイ娘"}
,"shark" : {n:"サメ"}
,"shark boy" : {m:"サメ少年"}
,"shark girl" : {f:"サメ娘"}
,"monkey boy" : {m:"サル少年"}
,"monkey girl" : {f:"サル娘"}
,"shemale" : {n:"シーメール"}
,"deer" : {n:"シカ"}
,"deer boy" : {m:"シカ少年"}
,"deer girl" : {f:"シカ娘"}
,"zebra" : {n:"シマウマ"}
,"shota" : {m:"ショタ"}
,"skunk boy" : {m:"スカンク少年"}
,"skunk girl" : {f:"スカンク娘"}
,"skeleton" : {n:"スケルトン"}
,"stewardess" : {n:"スチュワーデス"}
,"slime" : {n:"スライム"}
,"slime boy" : {m:"スライム少年"}
,"slime girl" : {f:"スライム娘"}
,"zombie" : {n:"ゾンビ"}
,"ostrich" : {n:"ダチョウ"}
,"raccoon girl" : {f:"タヌキ娘"}
,"cheerleader" : {n:"チアリーダー"}
,"midget" : {n:"チビ"}
,"gyaru-oh" : {m:"チャラ男"}
,"lizard guy" : {m:"トカゲ青年"}
,"lizard girl" : {f:"トカゲ娘"}
,"tiger" : {n:"トラ"}
,"dragon" : {n:"ドラゴン"}
,"nazi" : {n:"ナチ"}
,"slug" : {n:"ナメクジ"}
,"catboy" : {m:"ネコ少年"}
,"catgirl" : {f:"ネコ娘"}
,"mouse" : {n:"ネズミ"}
,"mouse boy" : {m:"ネズミ少年"}
,"mouse girl" : {f:"ネズミ娘"}
,"harpy" : {n:"ハーピー"}
,"hyena boy" : {m:"ハイエナ少年"}
,"hyena girl" : {f:"ハイエナ娘"}
,"bisexual" : {n:"バイセクシャル"}
,"bee boy" : {m:"ハチ少年"}
,"bunny girl" : {f:"バニーガール"}
,"bunny boy" : {m:"バニーボーイ"}
,"hedgehog boy" : {m:"ハリネズミ少年"}
,"hedgehog girl" : {f:"ハリネズミ娘"}
,"panther" : {n:"パンサー"}
,"panda boy" : {m:"パンダ少年"}
,"panda girl" : {f:"パンダ娘"}
,"clown" : {n:"ピエロ"}
,"sheep boy" : {m:"ヒツジ少年"}
,"sheep girl" : {f:"ヒツジ娘"}
,"futanari" : {n:"ふたなり"}
,"pig man" : {m:"ブタ男"}
,"pig girl" : {f:"ブタ娘"}
,"pegasus" : {n:"ペガサス"}
,"snake" : {n:"ヘビ"}
,"snake boy" : {m:"ヘビ少年"}
,"snake girl" : {f:"ヘビ娘"}
,"ponygirl" : {f:"ポニー娘"}
,"merman" : {m:"マーマン"}
,"minigirl" : {f:"ミニ娘"}
,"minotaur" : {m:"ミノタウロス"}
,"military" : {n:"ミリタリ"}
,"maid" : {n:"メイド"}
,"mecha boy" : {m:"メカ少年"}
,"mecha girl" : {f:"メカ娘"}
,"mesugaki" : {n:"メスガキ"}
,"monster" : {n:"モンスター"}
,"monster girl" : {f:"モン娘"}
,"yandere" : {n:"ヤンデレ"}
,"yukkuri" : {n:"ゆっくり"}
,"unicorn" : {n:"ユニコーン"}
,"lion" : {n:"ライオン"}
,"camel" : {n:"ラクダ"}
,"real doll" : {n:"リアルドール"}
,"squirrel boy" : {m:"リス少年"}
,"squirrel girl" : {f:"リス娘"}
,"race queen" : {f:"レースクィーン"}
,"cashier" : {n:"レジ係"}
,"donkey" : {n:"ロバ"}
,"robot" : {n:"ロボット"}
,"loli" : {f:"ロリ"}
,"oppai loli" : {f:"ロリ巨乳"}
,"demon" : {m:"悪魔"}
,"demon girl" : {f:"悪魔娘"}
,"inseki" : {n:"姻戚"}
,"alien girl" : {f:"宇宙少女"}
,"alien" : {m:"宇宙人"}
,"monkey" : {n:"猿"}
,"bull" : {m:"牡牛"}
,"tutor" : {n:"家庭教師"}
,"widower" : {m:"寡夫"}
,"moth girl" : {f:"蛾少女"}
,"pirate" : {n:"海賊"}
,"nurse" : {n:"看護師",f:"看護婦"}
,"oni" : {n:"鬼"}
,"gijinka" : {n:"擬人化"}
,"vampire" : {n:"吸血鬼"}
,"doll joints" : {n:"球体関節"}
,"cow" : {n:"牛"}
,"cowman" : {m:"牛男"}
,"giantess" : {f:"巨女"}
,"giant" : {m:"巨人"}
,"giant sperm" : {n:"巨大精子"}
,"fish" : {n:"魚"}
,"dinosaur" : {n:"恐竜"}
,"teacher" : {n:"教師",f:"女教師",m:"男教師"}
,"ball-less shemale" : {f:"玉無しシーメール"}
,"bear" : {n:"熊"}
,"bear girl" : {f:"熊少女"}
,"bear boy" : {m:"熊少年"}
,"brother" : {m:"兄弟"}
,"policeman" : {m:"警察官"}
,"dog" : {n:"犬"}
,"insect girl" : {f:"昆虫少女"}
,"insect boy" : {m:"昆虫少年"}
,"goat" : {n:"山羊"}
,"sister" : {f:"姉妹"}
,"lioness" : {n:"雌ライオン"}
,"butler" : {n:"執事",f:"女執事",m:"執事"}
,"steward" : {m:"執事"}
,"headless" : {n:"首なし"}
,"nun" : {n:"修道女"}
,"uncle" : {m:"叔父"}
,"aunt" : {f:"叔母"}
,"milf" : {f:"熟女"}
,"schoolgirl" : {n:"女子学生"}
,"miniguy" : {m:"小さな青年"}
,"elephant" : {n:"象"}
,"elephant girl" : {f:"象少女"}
,"elephant boy" : {m:"象少年"}
,"plant boy" : {m:"植物少年"}
,"plant girl" : {f:"植物娘"}
,"mermaid" : {n:"人魚娘"}
,"drunk" : {n:"酔っ払い"}
,"mature" : {n:"成人"}
,"living clothes" : {n:"生きてる服"}
,"grandfather" : {m:"祖父"}
,"grandmother" : {f:"祖母"}
,"priest" : {m:"僧侶"}
,"twins" : {n:"双子"}
,"granddaughter" : {f:"孫娘"}
,"octopus" : {n:"蛸"}
,"tomgirl" : {m:"男の娘"}
,"otokofutanari" : {m:"男ふたなり"}
,"schoolboy" : {m:"男子学生"}
,"ssbbm" : {m:"超肥満男性"}
,"tall man" : {m:"長身男"}
,"tall girl" : {f:"長身娘"}
,"bird boy" : {m:"鳥少年"}
,"bird girl" : {f:"鳥娘"}
,"angel" : {n:"天使"}
,"slave" : {n:"奴隷"}
,"virginity" : {m:"童貞"}
,"pig" : {n:"豚"}
,"pregnant" : {n:"妊婦"}
,"ninja" : {m:"忍者"}
,"cat" : {n:"猫"}
,"old lady" : {n:"婆"}
,"horse" : {n:"馬"}
,"policewoman" : {n:"婦警"}
,"unusual pupils" : {n:"普通ではない生徒"}
,"father" : {m:"父親"}
,"mother" : {n:"母親"}
,"bee girl" : {f:"蜂少女"}
,"witch" : {f:"魔女"}
,"magical girl" : {f:"魔法少女"}
,"widow" : {f:"未亡人"}
,"mute" : {n:"無口"}
,"daughter" : {f:"娘"}
,"niece" : {f:"姪"}
,"old man" : {m:"爺"}
,"ghost" : {n:"幽霊"}
,"fairy" : {n:"妖精"}
,"sheep" : {n:"羊"}
,"frottage" : {n:"両性具有"}
,"wolf" : {n:"狼"}
,"wolf girl" : {f:"狼少女"}
,"miko" : {f:"巫女"}
,"worm" : {n:"蟲"}
,"inflation" : {n:"インフレ"}
,"gaping" : {n:"ギャップ"}
,"christmas" : {n:"クリスマス"}
,"futanarization" : {f:"フタナリ化"}
,"time stop" : {n:"時間停止"}
,"femdom" : {f:"女性優位"}
,"food on body" : {f:"女体盛",m:"男体盛"}
,"smalldom" : {n:"小さいほう優位"}
,"human cattle" : {n:"人間家畜"}
,"ningen bokujou" : {n:"人間牧場"}
,"gender change" : {n:"性転換"}
,"gender morph" : {n:"性別変化"}
,"cum bath" : {n:"精液風呂"}
,"brain fuck" : {n:"洗脳"}
,"ruined orgasm" : {n:"台無し絶頂",m:"台無し射精"}
,"chikan" : {n:"痴漢"}
,"out of order" : {n:"非日常"}
,"yuri" : {n:"百合"}
,"glory hole" : {n:"壁穴"}
,"clit growth" : {n:"クリトリス成長"}
,"penis reduction" : {n:"ちんぽ縮小"}
,"dick growth" : {n:"ちんぽ成長"}
,"penis enlargement" : {n:"ちんぽ増大"}
,"feminization" : {m:"メスイキ"}
,"mesuiki" : {n:"メスイキ"}
,"moral degeneration" : {n:"モラル低下"}
,"shapening" : {n:"感度倍増"}
,"parasite" : {n:"寄生"}
,"balls expansion" : {n:"玉膨張"}
,"muscle growth" : {n:"筋力増大"}
,"menstruation" : {n:"月経"}
,"domination loss" : {n:"支配喪失"}
,"shrinking" : {n:"縮小"}
,"conjoined" : {n:"身体融合"}
,"forniphilia" : {n:"人間家具"}
,"petrification" : {n:"石化"}
,"weight gain" : {n:"太っていく"}
,"invisible" : {n:"透明"}
,"breast expansion" : {n:"膨乳"}
,"infantilism" : {n:"幼児がえり"}
,"abortion" : {n:"流産"}
,"multiple orgasms" : {n:"連続絶頂"}
,"bathing room" : {n:"バスルーム"}
,"onsen" : {n:"温泉"}
,"location:onsen" : {n:"温泉"}
,"classroom" : {n:"教室"}
,"beach" : {n:"砂浜"}
,"underwater sex" : {n:"水面下セックス"}
,"sentou" : {n:"銭湯"}
,"infirmary" : {n:"保健室"}
,"apron" : {n:"エプロン"}
,"diaper" : {n:"おむつ"}
,"garter belt" : {n:"ガーターベルト"}
,"gasmask" : {n:"ガスマスク"}
,"cosplaying" : {n:"コスプレ"}
,"gothic lolita" : {n:"ゴスロリ"}
,"corset" : {n:"コルセット"}
,"sundress" : {n:"サマードレス"}
,"sarashi" : {n:"サラシ"}
,"sunglasses" : {n:"サングラス"}
,"tracksuit" : {n:"ジャージ"}
,"school swimsuit" : {n:"スク水"}
,"stockings" : {n:"ストッキング"}
,"tights" : {n:"タイツ"}
,"chinese dress" : {n:"チャイナドレス"}
,"tiara" : {n:"ティアラ"}
,"high heels" : {n:"ハイヒール"}
,"pantyhose" : {n:"パンスト"}
,"bikini" : {n:"ビキニ"}
,"business suit" : {n:"ビジネススーツ"}
,"hijab" : {n:"ヒジャブ"}
,"hood" : {n:"フード"}
,"bloomers" : {n:"ブルマ"}
,"fundoshi" : {n:"ふんどし"}
,"headphones" : {n:"ヘッドホン"}
,"hotpants" : {n:"ホットパンツ"}
,"bodysuit" : {n:"ボディスーツ"}
,"bodystocking" : {n:"ボディストッキング"}
,"bondage" : {n:"ボンデージ"}
,"painted nails" : {n:"マニキュア"}
,"exposed clothing" : {n:"モロ出し服"}
,"randoseru" : {n:"ランドセル"}
,"bike shorts" : {n:"レーサーパンツ"}
,"leotard" : {n:"レオタード"}
,"crossdressing" : {n:"異性装"}
,"kindergarten uniform" : {n:"園児服"}
,"crown" : {n:"王冠"}
,"lingerie" : {n:"下着"}
,"makeup" : {n:"化粧"}
,"masked face" : {n:"仮面"}
,"glasses" : {n:"眼鏡"}
,"scrotal lingerie" : {n:"金玉ランジェリー"}
,"metal armor" : {n:"金属鎧"}
,"lab coat" : {n:"研究着"}
,"straitjacket" : {n:"拘束衣"}
,"braces" : {n:"歯列矯正"}
,"shimapan" : {n:"縞パン"}
,"gloves" : {n:"手袋"}
,"collar" : {n:"首輪"}
,"schoolgirl uniform" : {n:"女子学生服"}
,"swimsuit" : {n:"水着"}
,"tabi socks" : {n:"足袋"}
,"gymshorts" : {n:"体操パンツ"}
,"school gym uniform" : {n:"体操服"}
,"thigh high boots" : {n:"腿まであるハイブーツ"}
,"schoolboy uniform" : {n:"男子学生服"}
,"kigurumi pajama" : {n:"着ぐるみパジャマ"}
,"kimono" : {n:"着物"}
,"transparent clothing" : {n:"透け服"}
,"dougi" : {n:"胴着"}
,"wet clothes" : {n:"濡れ服"}
,"mouth mask" : {n:"風邪マスク"}
,"detached sleeves" : {n:"分離袖"}
,"bandages" : {n:"包帯"}
,"fishnets" : {n:"網タイツ"}
,"exhibitionism" : {n:"露出癖"}
,"bandaid" : {n:"絆創膏"}
,"stirrup legwear" : {n:"脛ガード"}
,"sweating" : {n:"汗"}
,"low smegma" : {n:"軽い恥垢"}
,"blood" : {n:"血"}
,"saliva" : {n:"唾液"}
,"cumflation" : {n:"大量射精"}
,"smegma" : {n:"恥垢"}
,"double blowjob" : {n:"2本フェラ"}
,"analphagia" : {n:"アナルで丸呑み"}
,"double anal" : {n:"アナルに2本刺し"}
,"triple anal" : {n:"アナルに3本刺し"}
,"anal birth" : {n:"アナル出産"}
,"anal intercourse" : {n:"アナル性交"}
,"focus anal" : {n:"アナル中心"}
,"rimjob" : {n:"アナル舐め"}
,"focus rimjob" : {n:"アナル舐め中心"}
,"omorashi" : {n:"お漏らし"}
,"kissing" : {n:"キス"}
,"tickling" : {n:"くすぐり"}
,"clit stimulation" : {n:"クリトリス刺激"}
,"clit insertion" : {n:"クリトリス挿入"}
,"guro" : {n:"グロ"}
,"cunnilingus" : {n:"クンニリングス"}
,"focus cunnilingus" : {n:"クンニ中心"}
,"burping" : {n:"げっぷ"}
,"ass expansion" : {n:"ケツ穴拡張"}
,"gokkun" : {n:"ごっくん"}
,"scat" : {n:"スカ"}
,"stretching" : {n:"ストレッチ"}
,"swinging" : {n:"スワッピング"}
,"penis birth" : {n:"ちんぽから出産"}
,"cockphagia" : {n:"ちんぽで丸呑み"}
,"cockslapping" : {n:"ちんぽビンタ"}
,"deepthroat" : {n:"ディープ・スロート"}
,"phone sex" : {n:"テレホンセックス"}
,"netorase" : {n:"ネトラセ"}
,"netorare" : {n:"ネトラレ"}
,"heartfull communication" : {n:"ハートフルコミュニケーション"}
,"harem" : {n:"ハーレム"}
,"haigure" : {n:"ハイグレ"}
,"paizuri" : {n:"パイズリ"}
,"focus paizuri" : {n:"パイズリ中心"}
,"pantyjob" : {n:"パンツコキ"}
,"blowjob" : {n:"フェラ"}
,"focus blowjob" : {n:"フェラ中心"}
,"bukkake" : {n:"ぶっかけ"}
,"full tour" : {n:"フルツアー"}
,"navel fuck" : {n:"ヘソ姦"}
,"navel birth" : {n:"ヘソ出産"}
,"petplay" : {n:"ペットプレイ"}
,"pegging" : {m:"ペニス拘束"}
,"pole dancing" : {n:"ポールダンス"}
,"body painting" : {n:"ボディペイント"}
,"double vaginal" : {n:"まんこに2本刺し"}
,"triple vaginal" : {n:"まんこに3本刺し"}
,"cuntbusting" : {n:"まんこ焼き"}
,"yaoi" : {m:"やおい"}
,"ryona" : {n:"リョナ"}
,"wrestling" : {n:"レスリング"}
,"emotionless sex" : {n:"愛のないセックス"}
,"corruption" : {n:"悪堕ち"}
,"piss drinking" : {n:"飲尿"}
,"crotch tattoo" : {n:"淫紋"}
,"scat insertion" : {n:"汚物挿入"}
,"dismantling" : {n:"解体"}
,"orgasm denial" : {n:"快感拒絶"}
,"tribadism" : {f:"貝合わせ"}
,"shared senses" : {n:"感覚共有"}
,"confinement" : {n:"監禁"}
,"vore" : {n:"丸呑みフェチ"}
,"eye penetration" : {n:"眼姦"}
,"cum in eye" : {n:"眼射"}
,"facesitting" : {n:"顔面騎乗"}
,"table masturbation" : {n:"机オナ"}
,"smoking" : {n:"喫煙"}
,"absorption" : {n:"吸精"}
,"rape" : {n:"強姦"}
,"forced exposure" : {n:"強制露出"}
,"blackmail" : {n:"脅迫"}
,"balljob" : {n:"玉ズリ"}
,"ball caressing" : {n:"玉弄り"}
,"ball sucking" : {n:"玉舐め"}
,"bdsm" : {n:"緊縛"}
,"incest" : {n:"近親相姦"}
,"cbt" : {n:"金玉責め"}
,"humiliation" : {n:"屈辱"}
,"sockjob" : {n:"靴下コキ"}
,"vaginal birth" : {n:"経膣出産"}
,"low guro" : {n:"軽いグロ"}
,"low scat" : {n:"軽いスカトロ"}
,"low bestiality" : {n:"軽い獣姦"}
,"low lolicon" : {n:"軽度のロリコン"}
,"low incest" : {n:"軽度の虫姦"}
,"bride" : {n:"結婚"}
,"pubic stubble" : {n:"公開剃毛"}
,"public use" : {n:"公衆便所"}
,"all the way through" : {n:"口まで貫通"}
,"torture" : {n:"拷問"}
,"mind control" : {n:"催眠"}
,"filming" : {n:"撮影"}
,"snuff" : {n:"殺人"}
,"triple penetration" : {n:"三つ穴攻め"}
,"amputee" : {n:"四肢切断"}
,"shimaidon" : {n:"姉妹丼"}
,"cervix penetration" : {n:"子宮攻め"}
,"fingering" : {n:"指いじり"}
,"necrophilia" : {n:"死体愛好"}
,"tooth brushing" : {n:"歯磨き"}
,"ear fuck" : {n:"耳姦"}
,"masturbation" : {n:"自慰"}
,"autopaizuri" : {n:"自家パイズリ"}
,"autofellatio" : {n:"自家フェラチオ"}
,"selfcest" : {n:"自身姦"}
,"handjob" : {n:"手コキ"}
,"breast feeding" : {n:"授乳"}
,"bestiality" : {n:"獣姦"}
,"layer cake" : {n:"重ねて性交"}
,"birth" : {n:"出産"}
,"unbirth" : {n:"女性器に丸呑み"}
,"catfight" : {n:"女性同士の喧嘩"}
,"josou seme" : {m:"女装責め"}
,"cannibalism" : {n:"食人"}
,"coprophagia" : {n:"食糞"}
,"assjob" : {n:"尻コキ"}
,"spanking" : {n:"尻叩き"}
,"tailjob" : {n:"尻尾コキ"}
,"tailphagia" : {n:"尻尾触手で丸呑み"}
,"oyakodon" : {n:"親子丼"}
,"body modification" : {n:"身体改造"}
,"body swap" : {n:"身体入れ替わり"}
,"body writing" : {n:"身体落書き"}
,"personality excretion" : {n:"人格排泄"}
,"human pet" : {n:"人間ペット"}
,"fanny packing" : {n:"人間ペニスケース"}
,"underwater" : {n:"水中"}
,"sleeping" : {n:"睡眠姦"}
,"growth" : {n:"成長"}
,"cum swap" : {n:"精液交換"}
,"crying" : {n:"絶叫"}
,"prostate massage" : {m:"前立腺マッサージ"}
,"sumata" : {n:"素股"}
,"footjob" : {n:"足コキ"}
,"legjob" : {n:"足コキ"}
,"foot insertion" : {n:"足挿入"}
,"foot licking" : {n:"足舐め"}
,"mind break" : {n:"尊厳破壊"}
,"prolapse" : {n:"脱離",f:"子宮脱",m:"脱肛"}
,"asphyxiation" : {n:"窒息"}
,"clothed paizuri" : {n:"着衣パイズリ"}
,"internal urination" : {n:"中で排尿"}
,"nakadashi" : {n:"中出し"}
,"insect" : {n:"虫姦"}
,"squirting" : {n:"潮吹き"}
,"piercing" : {n:"痛み"}
,"hanging" : {n:"吊り"}
,"denki anma" : {n:"電気アンマ"}
,"electric shocks" : {n:"電気ショック"}
,"voyeurism" : {n:"盗撮"}
,"trampling" : {n:"踏みつけ"}
,"double penetration" : {n:"二穴攻め"}
,"nipple birth" : {n:"乳首から出産"}
,"nipple expansion" : {n:"乳首拡張"}
,"nipple fuck" : {n:"乳首姦"}
,"nipple stimulation" : {n:"乳頭刺激"}
,"urethra insertion" : {n:"尿道挿入"}
,"impregnation" : {n:"妊娠"}
,"defloration" : {f:"破瓜"}
,"prostitution" : {n:"売春"}
,"shibari" : {n:"縛り"}
,"hairjob" : {n:"髪コキ"}
,"hidden sex" : {n:"秘密性交"}
,"nose fuck" : {n:"鼻姦"}
,"kneepit sex" : {n:"膝裏コキ"}
,"unusual insertions" : {n:"普通ではない挿入"}
,"cheating" : {n:"浮気"}
,"apparel bukkake" : {n:"服にぶっかけ"}
,"stomach deformation" : {n:"腹ボコ"}
,"multiple handjob" : {n:"複数で手コキ"}
,"multiple paizuri" : {n:"複数パイズリ"}
,"multimouth blowjob" : {n:"複数フェラ"}
,"multiple straddling" : {n:"複数騎乗"}
,"multiple assjob" : {n:"複数尻コキ"}
,"multiple footjob" : {n:"複数足コキ"}
,"stuck in wall" : {n:"壁尻"}
,"transformation" : {n:"変身"}
,"lactation" : {n:"母乳"}
,"milking" : {n:"母乳噴射"}
,"dakimakura" : {n:"抱き枕"}
,"urination" : {n:"放尿"}
,"toddlercon" : {n:"幼児性愛"}
,"wingjob" : {n:"翼コキ"}
,"gang rape" : {n:"輪姦"}
,"armpit sex" : {n:"脇姦"}
,"armpit licking" : {n:"脇舐め"}
,"vomit" : {n:"嘔吐"}
,"farting" : {n:"屁"}
,"possession" : {n:"憑依"}
,"enema" : {n:"浣腸"}
,"horns" : {n:"角"}
,"muscle" : {n:"筋肉"}
,"fisting" : {n:"拳"}
,"handicapped" : {n:"障碍"}
,"tentacles" : {n:"触手"}
,"tail" : {n:"尻尾"}
,"anorexic" : {n:"痩せぎす"}
,"smell" : {n:"体臭"}
,"ssbbw" : {n:"超肥満",f:"超肥満女性"}
,"halo" : {n:"天使の輪"}
,"big muscles" : {n:"肥大筋肉"}
,"bbw" : {n:"肥満",f:"肥満女性"}
,"bbm" : {m:"肥満男性"}
,"unusual teeth" : {n:"普通ではない歯"}
,"multiple tails" : {n:"複数尻尾"}
,"multiple arms" : {n:"複腕"}
,"wings" : {n:"翼"}
,"hairy armpits" : {n:"腋毛"}
,"ahegao" : {n:"アヘ顔"}
,"freckles" : {n:"ソバカス"}
,"blowjob face" : {n:"ひょっとこ顔"}
,"adventitious mouth" : {n:"異常口腔"}
,"big lips" : {n:"厚い唇"}
,"thick eyebrows" : {n:"太眉毛"}
,"long tongue" : {n:"長い舌"}
,"facial hair" : {n:"髭"}
,"split tongue" : {n:"裂けた舌"}
,"afro" : {n:"アフロ"}
,"hair buns" : {n:"シニョン"}
,"twintails" : {n:"ツインテール"}
,"drill hair" : {n:"ドリルヘア"}
,"bald" : {n:"ハゲ"}
,"pixie cut" : {n:"ピクシーカット"}
,"ponytail" : {n:"ポニーテール"}
,"very long hair" : {n:"超長髪"}
,"prehensile hair" : {n:"髪触手"}
,"shaved head" : {n:"坊主頭"}
,"anal" : {n:"アナル"}
,"big ass" : {n:"デカ尻"}
,"adventitious penis" : {n:"異常ちんぽ"}
,"adventitious vagina" : {n:"異常まんこ"}
,"hairy" : {n:"陰毛"}
,"big penis" : {n:"巨根"}
,"big balls" : {n:"巨大金玉"}
,"no balls" : {m:"玉無し"}
,"cervix prolapse" : {n:"子宮腟脱"}
,"retractable penis" : {n:"伸縮自在ちんぽ"}
,"knotted penis" : {n:"節くれちんぽ"}
,"cloaca insertion" : {m:"総排泄口挿入"}
,"big clit" : {n:"大きなクリトリス"}
,"big vagina" : {n:"大きなまんこ"}
,"anal prolapse" : {n:"脱肛"}
,"small penis" : {n:"短小"}
,"huge penis" : {n:"超巨根"}
,"horse cock" : {n:"馬並"}
,"multiple penises" : {n:"複数ちんぽ"}
,"multiple vaginas" : {n:"複数まんこ"}
,"cuntboy" : {m:"包茎"}
,"phimosis" : {n:"包茎"}
,"full-packaged futanari" : {n:"包茎フタナリ"}
,"penis bumps" : {n:"瘤つきちんぽ"}
,"reptile" : {n:"ウロコ"}
,"lipstick mark" : {n:"キスマーク"}
,"beauty mark" : {n:"艶ほくろ"}
,"dark skin" : {n:"褐色肌"}
,"bite mark" : {n:"噛み跡"}
,"large tattoo" : {n:"巨大刺青"}
,"scar" : {n:"傷痕"}
,"depth grading" : {n:"深さ測定"}
,"full body tattoo" : {n:"全身刺青"}
,"tanlines" : {n:"日焼け痕"}
,"heterochromia" : {n:"オッドアイ"}
,"monoeye" : {n:"一つ目"}
,"dark sclera" : {n:"黒白目"}
,"closed eyes" : {n:"糸目"}
,"additional eyes" : {n:"多眼"}
,"blind" : {n:"盲目"}
,"eye-covering bang" : {n:"目隠れ"}
,"small breasts" : {n:"ナイチチ"}
,"inverted nipples" : {n:"陥没乳首"}
,"gigantic breasts" : {n:"巨大乳"}
,"big breasts" : {n:"巨乳"}
,"breast reduction" : {n:"胸縮小"}
,"dark nipples" : {n:"黒乳首"}
,"big nipples" : {n:"大きな乳首"}
,"big areolae" : {n:"大きな乳輪"}
,"huge breasts" : {n:"超巨乳"}
,"dicknipples" : {n:"乳首ちんこ"}
,"multiple nipples" : {n:"複数乳首"}
,"multiple breasts" : {n:"複乳"}
,"butt plug" : {n:"アナルプラグ"}
,"onahole" : {n:"オナホール"}
,"clamp" : {n:"クランプ鉗子"}
,"chloroform" : {n:"クロロフォルム"}
,"condom" : {n:"コンドーム"}
,"gag" : {n:"さるぐつわ"}
,"cock ring" : {n:"ちんぽリング"}
,"pasties" : {n:"ニプレス"}
,"harness" : {n:"ハーネス"}
,"body packing" : {n:"ピンクローター"}
,"strap-on" : {n:"ペニスバンド"}
,"latex" : {n:"ラテックス"}
,"leash" : {n:"リード"}
,"wormhole" : {n:"遠隔ホール"}
,"tube" : {n:"管接続"}
,"eyepatch" : {n:"眼帯"}
,"machine" : {n:"機械"}
,"vacbed" : {n:"吸引ベッド"}
,"large insertions" : {n:"巨大ディルド"}
,"pillory" : {n:"首枷"}
,"tail plug" : {n:"尻尾プラグ"}
,"skinsuit" : {n:"人皮スーツ"}
,"genital piercing" : {n:"性器ピアス"}
,"vaginal sticker" : {n:"前貼り"}
,"leg lock" : {n:"足枷"}
,"property tag" : {n:"属性表"}
,"sex toys" : {n:"大人のおもちゃ"}
,"syringe" : {n:"注射器"}
,"chastity belt" : {n:"貞操帯"}
,"nipple piercing" : {n:"乳首ピアス"}
,"nose hook" : {n:"鼻フック"}
,"whip" : {n:"鞭"}
,"wooden horse" : {n:"木馬"}
,"blindfold" : {n:"目隠し"}
,"eyemask" : {n:"目隠し"}
,"oil" : {n:"油"}
,"eggs" : {n:"卵"}
,"drugs" : {n:"媚薬"}
,"speculum" : {n:"膣鏡"}
,"x-ray" : {n:"X線"}
,"corpse" : {n:"死体"}
,"yarussu doumei" : {n:"group:YARUSSU-DOMEI"}
,"kankodori" : {n:"group:かんこどり"}
,"supekter" : {n:"group:すーぺくたー"}
,"oumi keimaisha" : {n:"group:近江兄妹社"}
,"dai 9 shougakkou" : {n:"group:第9小学校"}
,"daikyuu shougakkou" : {n:"group:第9小学校"}
,"ttf threesome" : {n:"TS2人と女の3P"}
,"ttm threesome" : {n:"TS2人と男の3P"}
,"ttt threesome" : {n:"TSのみの3P"}
,"futanari on male" : {n:"ふたなり×男性"}
,"futanari on futanari" : {n:"ふたなり同士"}
,"dickgirl on dickgirl" : {n:"ふたなり娘×ふたなり娘"}
,"dickgirl on female" : {n:"ふたなり娘×女性"}
,"dickgirl on male" : {m:"ふたなり娘×男性"}
,"dickgirls only" : {n:"ふたなり娘のみ"}
,"sole dickgirl" : {n:"ふたなり娘一人"}
,"kodomo only" : {n:"子供のみ"}
,"kodomo doushi" : {n:"子供同士"}
,"fft threesome" : {n:"女2人とTSの3P"}
,"ffm threesome" : {n:"女2人と男の3P"}
,"fff threesome" : {n:"女のみの3P"}
,"females only" : {n:"女性のみ"}
,"sole female" : {f:"女性一人"}
,"girls only" : {f:"少女のみ"}
,"human on furry" : {n:"人間×ケモ"}
,"solo action" : {n:"単独行動"}
,"mmt threesome" : {n:"男2人とTSの3P"}
,"mmf threesome" : {n:"男2人と女の3P"}
,"mtf threesome" : {n:"男TS女の3P"}
,"guys only" : {m:"男のみ"}
,"mmm threesome" : {m:"男のみの3P"}
,"male on futanari" : {n:"男性×ふたなり"}
,"male on dickgirl" : {n:"男性×ふたなり娘"}
,"males only" : {m:"男性のみ"}
,"sole male" : {m:"男性一人"}
,"clothed female nude male" : {n:"着衣女性/裸男性"}
,"clothed male nude female" : {n:"着衣男性/裸女性"}
,"animal on furry" : {n:"動物×ケモ"}
,"animal on animal" : {n:"動物×動物"}
,"pussyboys only" : {m:"童貞少年のみ"}
,"sole pussyboy" : {m:"童貞少年一人"}
,"group" : {n:"複数"}
,"multiple pairings" : {n:"複数ペア"}
,"comedy" : {n:"コメディ"}
,"themeless" : {n:"テーマなし"}
,"horror" : {n:"ホラー"}
,"how to" : {n:"やり方"}
,"first person perspective" : {n:"一人称視点"}
,"no penetration" : {n:"性交なし"}
,"gender bender" : {n:"男女入れ替え"}
,"age regression" : {n:"年齢逆行"}
,"age progression" : {n:"年齢進行"}
,"multipanel sequence" : {n:"複枠進行"}
,"object insertion only" : {n:"物品挿入のみ"}
,"non-nude" : {n:"裸なし"}
,"nudity only" : {n:"裸体のみ"}
,"nudism" : {n:"裸体主義"}
,"nekoket" : {n:"ねこケット"}
,"dmm@ster 2" : {n:"DMM＠STER 2"}
,"mencomi15" : {n:"メンコミ15"}
,"men's comic 15" : {n:"メンコミ15"}
,"mencomi21" : {n:"メンコミ21"}
,"mencomi23" : {n:"メンコミ23"}
,"mencomi30" : {n:"メンコミ30"}
,"mencomi32" : {n:"メンコミ32"}
,"mencomi33" : {n:"メンコミ33"}
,"mencomi35" : {n:"メンコミ35"}
,"mencomi37" : {n:"メンコミ37"}
,"mencomi38" : {n:"メンコミ38"}
,"mencomi40" : {n:"メンコミ40"}
,"mencomi45" : {n:"メンコミ45"}
,"mencomi55" : {n:"メンコミ55"}
,"pixiv market" : {n:"pixiv MARKET"}
,"pixivmarket" : {n:"pixiv MARKET"}
,"dai 3-kai tsf market" : {n:"第3回TSFマーケット"}
,"the voc@loid m@ster" : {n:"THE VOC@LOiD M@STER"}
,"the voc@loid m@ster 13" : {n:"THE VOC@LOiD M@STER 13"}
,"the voc@loid m@ster 14" : {n:"THE VOC@LOiD M@STER 14"}
,"the voc@loid m@ster14" : {n:"THE VOC@LOiD M@STER 14"}
,"the voc@loid m@ster 16" : {n:"THE VOC@LOiD M@STER 16"}
,"the voc@loid m@ster 17" : {n:"THE VOC@LOiD M@STER 17"}
,"the voc@loid m@ster 18" : {n:"THE VOC@LOiD M@STER 18"}
,"the voc@loid m@ster 19" : {n:"THE VOC@LOiD M@STER 19"}
,"the voc@loid m@ster 3" : {n:"THE VOC@LOiD M@STER 3"}
,"the voc@loid m@ster 30" : {n:"THE VOC@LOiD M@STER 30"}
,"the voc@loid m@ster 35" : {n:"THE VOC@LOiD M@STER 35"}
,"the voc@loid m@ster35" : {n:"THE VOC@LOiD M@STER 35"}
,"the voc@loid m@ster 36" : {n:"THE VOC@LOiD M@STER 36"}
,"the voc@loid m@ster 4" : {n:"THE VOC@LOiD M@STER 4"}
,"the voc@loid m@ster 41" : {n:"THE VOC@LOiD M@STER 41"}
,"the voc@loid m@ster 5" : {n:"THE VOC@LOiD M@STER 5"}
,"the voc@loid m@ster 6" : {n:"THE VOC@LOiD M@STER 6"}
,"vocaloid paradise 3" : {n:"VOCALOID PARADISE 3"}
,"vocaloid paradise 5" : {n:"VOCALOID PARADISE 5"}
,"vocaloid paradise bangaihen 3" : {n:"VOCALOID PARADISE 番外編 3"}
,"vocaloid paradise bangaihen 7" : {n:"VOCALOID PARADISE 番外編 7"}
,"vocaloid paradise bangaihen 8" : {n:"VOCALOID PARADISE 番外編 8"}
,"vocaloid street 08" : {n:"VOCALOID STREET 08"}
,"voice connect 2" : {n:"ボイスコネクト2"}
,"voiceroid march" : {n:"ボイスロイドマーチ"}
,"voiceroid march 3" : {n:"ボイスロイドマーチ3"}
,"voiceroid march 5" : {n:"ボイスロイドマーチ5"}
,"akari no utage 1-jikai" : {n:"あかりの宴 一次会"}
,"abcd!" : {n:"ABnormal Comic Day!"}
,"abnormal comic day!" : {n:"ABnormal Comic Day!"}
,"abnormal comic day! 2" : {n:"ABnormal Comic Day! 2"}
,"abnormal comic day! 3" : {n:"ABnormal Comic Day! 3"}
,"abnormal comic day! 4" : {n:"ABnormal Comic Day! 4"}
,"abnormalcomicday!4" : {n:"ABnormal Comic Day! 4"}
,"abc 2" : {n:"アブノーマル・カーニバル 2"}
,"abc 3" : {n:"アブノーマル・カーニバル 3"}
,"abc 4" : {n:"アブノーマル・カーニバル 4"}
,"アブノーマル・カーニバル4" : {n:"アブノーマル・カーニバル 4"}
,"abc 5" : {n:"アブノーマル・カーニバル 5"}
,"abnormal carnival 5" : {n:"アブノーマル・カーニバル 5"}
,"team up 10" : {n:"TEAM UP 10"}
,"team up 13" : {n:"TEAM UP 13"}
,"team up 5" : {n:"TEAM UP 5"}
,"team up 6" : {n:"TEAM UP 6"}
,"team up 7" : {n:"TEAM UP 7"}
,"team up 9" : {n:"TEAM UP 9"}
,"enzan 2" : {n:"艶惨2"}
,"enzan 3" : {n:"艶惨3"}
,"shi~musu! 11" : {n:"し～むす！11"}
,"shi~musu! 13" : {n:"し～むす！13"}
,"shi~musu! 15" : {n:"し～むす！15"}
,"shi~musu! 17" : {n:"し～むす！17"}
,"shi~musu! 19" : {n:"し～むす！19"}
,"shi~musu! 2" : {n:"し～むす！2"}
,"shi~musu! 20" : {n:"し～むす！20"}
,"shi-musu! 20" : {n:"し～むす！20"}
,"shi-musu! 26" : {n:"し～むす！26"}
,"shi~musu! 7" : {n:"し～むす！7"}
,"ai☆fes24" : {n:"アイ☆FES 24"}
,"ai☆fes 6" : {n:"アイ☆FES 6"}
,"sao market 2" : {n:"竿マーケット2"}
,"june bride fes 2023" : {n:"JUNE BRIDE FES 2023"}
,"june bride fes 2024" : {n:"JUNE BRIDE FES 2024"}
,"yarofes2009" : {n:"野郎フェス 2009"}
,"yarou fes 2009" : {n:"野郎フェス 2009"}
,"yarou fes 2011" : {n:"野郎フェス 2011"}
,"yarou fes 2012" : {n:"野郎フェス 2012"}
,"yarou fes 2012 oosaka aki no jin" : {n:"野郎フェス 2012 大阪秋の陣"}
,"yarou fes 2013 petit" : {n:"野郎フェス 2013-petit-"}
,"yarou fes 2015" : {n:"野郎フェス 2015"}
,"yarou fes 2016" : {n:"野郎フェス 2016"}
,"yarou fes 2017" : {n:"野郎フェス 2017"}
,"yarou fes 2018" : {n:"野郎フェス 2018"}
,"yarou fes 2018-petit- in osaka" : {n:"野郎フェス 2018-petit- in OSAKA"}
,"yarofes2019" : {n:"野郎フェス 2019"}
,"yarou fes 2019" : {n:"野郎フェス 2019"}
,"yarou fes 2020" : {n:"野郎フェス 2020"}
,"yarofes2022" : {n:"野郎フェス 2022"}
,"yarou fes 2022 -autumn-" : {n:"野郎フェス 2022 -automn-"}
,"yarofes2022-autumn-" : {n:"野郎フェス 2022秋"}
,"yarou fes 2023" : {n:"野郎フェス 2023"}
,"yarou fes 2023 -autumn-" : {n:"野郎フェス 2023 -automn-"}
,"yarou fes 2023-autumn-" : {n:"野郎フェス 2023 -automn-"}
,"yarou fes 2023-summer-" : {n:"野郎フェス 2023 -summer-"}
,"yarofes2025" : {n:"野郎フェス 2025"}
,"yarofes2025-summer-" : {n:"野郎フェス 2025夏"}
,"yarou fes 2024-summer-" : {n:"野郎フェス2024 -summer-"}
,"osuket 2" : {n:"雄ケット2"}
,"osuket 3" : {n:"雄ケット3"}
,"osuket 4" : {n:"雄ケット4"}
,"osuket f" : {n:"雄ケットf"}
,"further confusion 2003" : {n:"Further Confusion 2003"}
,"further confusion 2009" : {n:"Further Confusion 2009"}
,"kemokko lovers" : {n:"Kemokko lovers"}
,"kemekko lovers 6" : {n:"Kemokko lovers 6"}
,"kemoket" : {n:"けもケット"}
,"kemoket 1" : {n:"けもケット 1"}
,"kemoket 10" : {n:"けもケット 10"}
,"けもケット10" : {n:"けもケット 10"}
,"kemoket 11" : {n:"けもケット 11"}
,"kemoket 12" : {n:"けもケット 12"}
,"kemoket 13" : {n:"けもケット 13"}
,"kemoket 14" : {n:"けもケット 14"}
,"kemoket 15" : {n:"けもケット 15"}
,"kemoket 16" : {n:"けもケット 16"}
,"kemoket 2" : {n:"けもケット 2"}
,"kemoket 3" : {n:"けもケット 3"}
,"けもケット3" : {n:"けもケット 3"}
,"kemoket 04" : {n:"けもケット 4"}
,"kemoket 4" : {n:"けもケット 4"}
,"kemoket4" : {n:"けもケット 4"}
,"kemoket 05" : {n:"けもケット 5"}
,"kemoket 5" : {n:"けもケット 5"}
,"kemoket5" : {n:"けもケット 5"}
,"kemoket 6" : {n:"けもケット 6"}
,"kemoketto 6" : {n:"けもケット 6"}
,"kemoket 7" : {n:"けもケット 7"}
,"kemoket 08" : {n:"けもケット 8"}
,"kemoket 8" : {n:"けもケット 8"}
,"kemoket 8]" : {n:"けもケット 8"}
,"kemoket 9" : {n:"けもケット 9"}
,"kemoket 9.5" : {n:"けもケット 9.5"}
,"kemoketto 9.5" : {n:"けもケット 9.5"}
,"kemoket trc" : {n:"けもケット TRC"}
,"fur-st" : {n:"ふぁーすと"}
,"fur-st 10" : {n:"ふぁーすと 10"}
,"fur-st 11" : {n:"ふぁーすと 11"}
,"fur-st 12" : {n:"ふぁーすと 12"}
,"fur-st 2" : {n:"ふぁーすと 2"}
,"fur-st 3" : {n:"ふぁーすと 3"}
,"fur-st 4" : {n:"ふぁーすと 4"}
,"furst 5" : {n:"ふぁーすと 5"}
,"fur-st 5" : {n:"ふぁーすと 5"}
,"fur-st 6" : {n:"ふぁーすと 6"}
,"fur-st 7" : {n:"ふぁーすと 7"}
,"fur-st 8" : {n:"ふぁーすと 8"}
,"fur-st 9" : {n:"ふぁーすと 9"}
,"furst junbikai kikakubu" : {n:"ふぁーすと 準備会企画部"}
,"mofuket" : {n:"もふけっと"}
,"mofuket 2" : {n:"もふけっと2"}
,"mofuket 3" : {n:"もふけっと3"}
,"mofuket 6" : {n:"もふけっと6"}
,"mofuket 7" : {n:"もふけっと7"}
,"kansai kemoket" : {n:"関西けもケット"}
,"kansai! kemoket" : {n:"関西けもケット"}
,"kansai kemoket 10" : {n:"関西けもケット 10"}
,"kansai! kemoket 10" : {n:"関西けもケット 10"}
,"kansai kemoket 2" : {n:"関西けもケット 2"}
,"kansai! kemoket 2" : {n:"関西けもケット 2"}
,"kansai kemoket 3" : {n:"関西けもケット 3"}
,"kansai! kemoket 3" : {n:"関西けもケット 3"}
,"kansai! kemoket 4" : {n:"関西けもケット 4"}
,"kansai kemoket 5" : {n:"関西けもケット 5"}
,"kansai! kemoket 5" : {n:"関西けもケット 5"}
,"kansai! kemoketto 5" : {n:"関西けもケット 5"}
,"kaisai kemoket 6" : {n:"関西けもケット 6"}
,"kansai kemoket 6" : {n:"関西けもケット 6"}
,"kansai! kemoket 6" : {n:"関西けもケット 6"}
,"kansai! kemoket 6, spark12" : {n:"関西けもケット 6、SPARK 12"}
,"kansai kemoket 7" : {n:"関西けもケット 7"}
,"kansai! kemoket 7" : {n:"関西けもケット 7"}
,"kansai kemoket 8" : {n:"関西けもケット 8"}
,"kansai! kemoket 8" : {n:"関西けもケット 8"}
,"kensai! kemoket 8" : {n:"関西けもケット 8"}
,"関西!けもケット8" : {n:"関西けもケット 8"}
,"kansai kemoket 9" : {n:"関西けもケット 9"}
,"kansai! kemoket 9" : {n:"関西けもケット 9"}
,"kansai!kemoket 9" : {n:"関西けもケット 9"}
,"juujin matsuri" : {n:"獣人祭"}
,"juujin matsuri 2" : {n:"獣人祭2"}
,"shinshun kemoket" : {n:"新春けもケット"}
,"shinshun kemoket 10" : {n:"新春けもケット 10"}
,"shinshun kemoket 11" : {n:"新春けもケット 11"}
,"new year kemoket 2" : {n:"新春けもケット 2"}
,"shinshun kemoket 2" : {n:"新春けもケット 2"}
,"shinsun kemoket 2" : {n:"新春けもケット 2"}
,"shinshun kemoket 3" : {n:"新春けもケット 3"}
,"shinsun kemoket 3" : {n:"新春けもケット 3"}
,"shinshun kemoket 4" : {n:"新春けもケット 4"}
,"new year's ket 5" : {n:"新春けもケット 5"}
,"shinshun kemoket 5" : {n:"新春けもケット 5"}
,"shinshun kemoket 6" : {n:"新春けもケット 6"}
,"shinshun kemoket 8" : {n:"新春けもケット 8"}
,"shinshun kemoket 9" : {n:"新春けもケット 9"}
,"furrymosa" : {n:"furrymosa"}
,"furrymosa 2" : {n:"furrymosa 2"}
,"furrymosa2" : {n:"furrymosa 2"}
,"furrymosa 5" : {n:"furrymosa 5"}
,"mimiket" : {n:"みみけっと"}
,"mimiket 1" : {n:"みみけっと1"}
,"mimiket 10" : {n:"みみけっと10"}
,"mimiket 11" : {n:"みみけっと11"}
,"mimiket 12" : {n:"みみけっと12"}
,"mimiket 13" : {n:"みみけっと13"}
,"mimiket 14" : {n:"みみけっと14"}
,"mimiket 15" : {n:"みみけっと15"}
,"mimiket 16" : {n:"みみけっと16"}
,"mimiket 17" : {n:"みみけっと17"}
,"mimiket 18" : {n:"みみけっと18"}
,"mimiket 19" : {n:"みみけっと19"}
,"mimiket 20" : {n:"みみけっと20"}
,"mimiket 21" : {n:"みみけっと21"}
,"mimiket 22" : {n:"みみけっと22"}
,"mimiket 23" : {n:"みみけっと23"}
,"mimiket 24" : {n:"みみけっと24"}
,"mimiket 25" : {n:"みみけっと25"}
,"mimiket 26" : {n:"みみけっと26"}
,"mimiket 27" : {n:"みみけっと27"}
,"mimiket 28" : {n:"みみけっと28"}
,"みみけっと28" : {n:"みみけっと28"}
,"mimiket 29" : {n:"みみけっと29"}
,"mimiket 3" : {n:"みみけっと3"}
,"mimiket 30" : {n:"みみけっと30"}
,"mimiket 31" : {n:"みみけっと31"}
,"mimiket 32" : {n:"みみけっと32"}
,"mimiket 33" : {n:"みみけっと33"}
,"mimiket 34" : {n:"みみけっと34"}
,"mimiket 35" : {n:"みみけっと35"}
,"mimiket 36" : {n:"みみけっと36"}
,"mimiket 37" : {n:"みみけっと37"}
,"mimiket 38" : {n:"みみけっと38"}
,"mimiket 39" : {n:"みみけっと39"}
,"mimiket 4" : {n:"みみけっと4"}
,"mimiket 40" : {n:"みみけっと40"}
,"mimiket 41" : {n:"みみけっと41"}
,"mimiket 43" : {n:"みみけっと43"}
,"mimiket 48" : {n:"みみけっと48"}
,"mimiket 5" : {n:"みみけっと5"}
,"mimiket 6" : {n:"みみけっと6"}
,"mimiket 7" : {n:"みみけっと7"}
,"mimiket 9" : {n:"みみけっと9"}
,"cyket" : {n:"Cyket 001"}
,"shokusai 8" : {n:"触祭八"}
,"shokusai 6" : {n:"触祭六"}
,"cute 2nd" : {n:"CUTE☆2"}
,"cute☆5" : {n:"CUTE☆5"}
,"cute☆6" : {n:"CUTE☆6"}
,"cute☆7" : {n:"CUTE☆7"}
,"cute osaka 8" : {n:"CUTE☆8"}
,"cute☆8" : {n:"CUTE☆8"}
,"cute☆9" : {n:"CUTE☆9"}
,"cute☆tokyo" : {n:"CUTE☆TOKYO"}
,"cute☆tokyo2" : {n:"CUTE☆TOKYO 2"}
,"j ket" : {n:"Jケット"}
,"jket 1" : {n:"Jケット 1"}
,"jket 2" : {n:"Jケット 2"}
,"jket 3" : {n:"Jケット 3"}
,"jket 4" : {n:"Jケット 4"}
,"jket 5" : {n:"Jケット 5"}
,"jket 6" : {n:"Jケット 6"}
,"jket 7" : {n:"Jケット 7"}
,"jket 8" : {n:"Jケット 8"}
,"shotaket & shota scratch" : {n:"ショタケット＆ショタスクラッチ-オメガ-"}
,"shotaket & shota scratch omega" : {n:"ショタケット＆ショタスクラッチ-オメガ-"}
,"shotaket & shota scratch ω" : {n:"ショタケット＆ショタスクラッチ-オメガ-"}
,"shotaket 10" : {n:"ショタケット10"}
,"shotaket 11" : {n:"ショタケット11"}
,"shotaket 12" : {n:"ショタケット12"}
,"shotaket 13" : {n:"ショタケット13"}
,"shotaket 13r" : {n:"ショタケット13R"}
,"shotaket 14" : {n:"ショタケット14"}
,"shotaket 15" : {n:"ショタケット15"}
,"shotaket 16" : {n:"ショタケット16"}
,"shotaket 2" : {n:"ショタケット2"}
,"shotaket 03" : {n:"ショタケット3"}
,"shotaket 3" : {n:"ショタケット3"}
,"shotaket 4" : {n:"ショタケット4"}
,"shotaket 5" : {n:"ショタケット5"}
,"shotaket 6" : {n:"ショタケット6"}
,"shotaket 7" : {n:"ショタケット7"}
,"shotaket 08" : {n:"ショタケット8"}
,"shotaket 8" : {n:"ショタケット8"}
,"shotaket 9" : {n:"ショタケット9"}
,"shota collection" : {n:"ショタコレクション"}
,"shota collection 2" : {n:"ショタコレクション2"}
,"shota collection 3" : {n:"ショタコレクション3"}
,"shota collection 4" : {n:"ショタコレクション4"}
,"shota collection 5" : {n:"ショタコレクション5"}
,"shota scratch" : {n:"ショタスクラッチ"}
,"shota petit" : {n:"ショタスクラッチSPECIAL しょた★ぷち"}
,"shota scratch special shota ★ petit" : {n:"ショタスクラッチSPECIAL しょた★ぷち"}
,"shota scratch special shota petit" : {n:"ショタスクラッチSPECIAL しょた★ぷち"}
,"shota scratch sp 2" : {n:"ショタスクラッチSPECIAL2"}
,"shota scratch sp2" : {n:"ショタスクラッチSPECIAL2"}
,"shota scratch sp3" : {n:"ショタスクラッチSPECIAL3"}
,"shota scratch special 3" : {n:"ショタスクラッチSPECIAL3"}
,"shota scratch sp4" : {n:"ショタスクラッチSPECIAL4"}
,"shota scratch sp5" : {n:"ショタスクラッチSPECIAL5"}
,"shota scratch sp6" : {n:"ショタスクラッチSPECIAL6"}
,"shotafes" : {n:"ショタフェス"}
,"shotafes 10" : {n:"ショタフェス10"}
,"shotafes 11" : {n:"ショタフェス11"}
,"shotafes 12" : {n:"ショタフェス12"}
,"shotafes 13" : {n:"ショタフェス13"}
,"shotafes 14" : {n:"ショタフェス14"}
,"shotafes 15" : {n:"ショタフェス15"}
,"shotafes 16" : {n:"ショタフェス16"}
,"shotafes 17" : {n:"ショタフェス17"}
,"shotafes 18" : {n:"ショタフェス18"}
,"shotafes 19" : {n:"ショタフェス19"}
,"shotafes 2" : {n:"ショタフェス2"}
,"shotafes 3" : {n:"ショタフェス3"}
,"shotafes 4" : {n:"ショタフェス4"}
,"shotafes 5" : {n:"ショタフェス5"}
,"shotafes 6" : {n:"ショタフェス6"}
,"shotafes 7" : {n:"ショタフェス7"}
,"shotafes 8" : {n:"ショタフェス8"}
,"shotafes 9" : {n:"ショタフェス9"}
,"shotaful!" : {n:"しょたふる！"}
,"しょたふる!" : {n:"しょたふる！"}
,"shota scratch 10" : {n:"第10回 ショタスクラッチ"}
,"shota scratch 10 fluffy 1" : {n:"第10回 ショタスクラッチ"}
,"shota scratch 11" : {n:"第11回 ショタスクラッチ"}
,"shota scratch 12" : {n:"第12回 ショタスクラッチ"}
,"fluffy 2" : {n:"第13回 ショタスクラッチ"}
,"shota scratch 13" : {n:"第13回 ショタスクラッチ"}
,"shota scratch 13 fluffy 2" : {n:"第13回 ショタスクラッチ"}
,"shota scratch 14" : {n:"第14回 ショタスクラッチ"}
,"shota scratch 15" : {n:"第15回 ショタスクラッチ"}
,"shota scratch 16" : {n:"第16回 ショタスクラッチ"}
,"shota scratch 17" : {n:"第17回 ショタスクラッチ"}
,"shota scratch 18" : {n:"第18回 ショタスクラッチ"}
,"shota scratch 19" : {n:"第19回 ショタスクラッチ"}
,"shota scratch 1" : {n:"第1回 ショタスクラッチ"}
,"shota scratch 20" : {n:"第20回 ショタスクラッチ"}
,"shota scratch 21" : {n:"第21回 ショタスクラッチ"}
,"shota scratch 22" : {n:"第22回 ショタスクラッチ"}
,"shota scratch 23" : {n:"第23回 ショタスクラッチ"}
,"shota scratch 24" : {n:"第24回 ショタスクラッチ"}
,"shota scratch 25" : {n:"第25回 ショタスクラッチ"}
,"shota scratch 26" : {n:"第26回 ショタスクラッチ"}
,"shota scratch 27" : {n:"第27回 ショタスクラッチ"}
,"shota scratch 28" : {n:"第28回 ショタスクラッチ"}
,"shota scratch 29" : {n:"第29回 ショタスクラッチ"}
,"shota scratch 2" : {n:"第2回 ショタスクラッチ"}
,"shota scratch 30" : {n:"第30回 ショタスクラッチ"}
,"shota scratch 31" : {n:"第31回 ショタスクラッチ"}
,"shota scratch 32" : {n:"第32回 ショタスクラッチ"}
,"shota scratch 33" : {n:"第33回 ショタスクラッチ"}
,"shota scratch 35" : {n:"第35回 ショタスクラッチ"}
,"shota scratch 3" : {n:"第3回 ショタスクラッチ"}
,"shota scratch 4" : {n:"第4回 ショタスクラッチ"}
,"shota scratch 5" : {n:"第5回 ショタスクラッチ"}
,"shota scratch 6" : {n:"第6回 ショタスクラッチ"}
,"shota scratch 7" : {n:"第7回 ショタスクラッチ"}
,"shota scratch 8" : {n:"第8回 ショタスクラッチ"}
,"shota scratch 9" : {n:"第9回 ショタスクラッチ"}
,"sht2009" : {n:"SHT2009"}
,"sht2010 aki" : {n:"SHT2010秋"}
,"sht2011 aki" : {n:"SHT2011秋"}
,"sht2011 haru" : {n:"SHT2011春"}
,"sht2012 aki" : {n:"SHT2012秋"}
,"sht2012 haru" : {n:"SHT2012春"}
,"sht2013 aki" : {n:"SHT2013秋"}
,"sht2013 haru" : {n:"SHT2013春"}
,"sht2014 aki" : {n:"SHT2014秋"}
,"sht 2014 haru" : {n:"SHT2014春"}
,"sht2014 haru" : {n:"SHT2014春"}
,"sht2015 aki" : {n:"SHT2015秋"}
,"sht2015 haru" : {n:"SHT2015春"}
,"sht2016 aki" : {n:"SHT2016秋"}
,"sht2016 haru" : {n:"SHT2016春"}
,"sht2017 aki" : {n:"SHT2017秋"}
,"sht2017 haru" : {n:"SHT2017春"}
,"sht2018 aki" : {n:"SHT2018秋"}
,"sht2018 haru" : {n:"SHT2018春"}
,"sht2019 aki" : {n:"SHT2019秋"}
,"sht2019 haru" : {n:"SHT2019春"}
,"sht2020 haru" : {n:"SHT2020春"}
,"sht2020春" : {n:"SHT2020春"}
,"sht2020 fuyu" : {n:"SHT2020冬"}
,"sht2021 aki" : {n:"SHT2021秋"}
,"sht2022 haru, gataket170" : {n:"SHT2022春、ガタケット170"}
,"sht2023 aki" : {n:"SHT2023秋"}
,"sht2023 haru" : {n:"SHT2023春"}
,"sht2024 aki" : {n:"SHT2024秋"}
,"sht2024 haru" : {n:"SHT2024春"}
,"sht2025 haru" : {n:"SHT2025春"}
,"super heroine time 2025 haru" : {n:"SHT2025春"}
,"twinkle mirage 10" : {n:"TWINKLE MIRAGE 10"}
,"twinkle mirage 11" : {n:"TWINKLE MIRAGE 11"}
,"twinkle mirage 13" : {n:"TWINKLE MIRAGE 13"}
,"twinkle mirage 14" : {n:"TWINKLE MIRAGE 14"}
,"twinkle mirage 22" : {n:"TWINKLE MIRAGE 22"}
,"twinkle mirage 3" : {n:"TWINKLE MIRAGE 3"}
,"twinkle mirage 5" : {n:"TWINKLE MIRAGE 5"}
,"twinkle mirage5" : {n:"TWINKLE MIRAGE 5"}
,"twinkle mirage 6" : {n:"TWINKLE MIRAGE 6"}
,"twinkle mirage 7" : {n:"TWINKLE MIRAGE 7"}
,"twinkle mirage 8" : {n:"TWINKLE MIRAGE 8"}
,"twinkle mirage 9" : {n:"TWINKLE MIRAGE 9"}
,"ashipita!! 6" : {n:"あしピタっ!! 6"}
,"ashipita!! 8" : {n:"あしピタっ!! 8"}
,"booket 10" : {n:"ブーケット10"}
,"booket 11" : {n:"ブーケット11"}
,"booket 13" : {n:"ブーケット13"}
,"booket 6" : {n:"ブーケット6"}
,"booket 7" : {n:"ブーケット7"}
,"booket 8" : {n:"ブーケット8"}
,"booket 9" : {n:"ブーケット9"}
,"tokimeki party sensation premium" : {n:"ときめきパーティセンセーション プレミアム"}
,"tokimeki party sensation 2" : {n:"ときめきパーティセンセーション2"}
,"tokimeki party sensation 3" : {n:"ときめきパーティセンセーション3"}
,"tokimeki party sensation 4" : {n:"ときめきパーティセンセーション4"}
,"tokimeki party sensation 5" : {n:"ときめきパーティセンセーション5"}
,"tokimeki party sensation 6" : {n:"ときめきパーティセンセーション6"}
,"pitaket" : {n:"ぴたけっと"}
,"pitaket 3" : {n:"ぴたけっと3"}
,"futaket" : {n:"ふたけっと"}
,"futaket 01" : {n:"ふたけっと 1"}
,"futaket 1" : {n:"ふたけっと 1"}
,"futaket 10" : {n:"ふたけっと 10"}
,"futaket 10.5" : {n:"ふたけっと 10.5"}
,"futaket 11" : {n:"ふたけっと 11"}
,"futaket 11.5" : {n:"ふたけっと 11.5"}
,"futaket 12" : {n:"ふたけっと 12"}
,"futaket12" : {n:"ふたけっと 12"}
,"futaket 12.5" : {n:"ふたけっと 12.5"}
,"futaket 13" : {n:"ふたけっと 13"}
,"futaket 13.5" : {n:"ふたけっと 13.5"}
,"futaket 14" : {n:"ふたけっと 14"}
,"futaket 14.5" : {n:"ふたけっと 14.5"}
,"futaket 15" : {n:"ふたけっと 15"}
,"futaket 15.5" : {n:"ふたけっと 15.5"}
,"futaket 16.5" : {n:"ふたけっと 16.5"}
,"futaket16.5" : {n:"ふたけっと 16.5"}
,"futaket 17" : {n:"ふたけっと 17"}
,"futaket 17.5" : {n:"ふたけっと 17.5"}
,"futaket 18" : {n:"ふたけっと 18"}
,"futaket 19" : {n:"ふたけっと 19"}
,"futaket 2" : {n:"ふたけっと 2"}
,"futaket 23" : {n:"ふたけっと 23"}
,"futaket 28" : {n:"ふたけっと 28"}
,"futaket 29" : {n:"ふたけっと 29"}
,"futaket 3" : {n:"ふたけっと 3"}
,"futaket3" : {n:"ふたけっと 3"}
,"futaket 30" : {n:"ふたけっと 30"}
,"futaket 31" : {n:"ふたけっと 31"}
,"futaket 32" : {n:"ふたけっと 32"}
,"futaket 33" : {n:"ふたけっと 33"}
,"futaket 34" : {n:"ふたけっと 34"}
,"futaket34" : {n:"ふたけっと 34"}
,"ふたけっと34" : {n:"ふたけっと 34"}
,"futaket 04" : {n:"ふたけっと 4"}
,"futaket 4" : {n:"ふたけっと 4"}
,"futaket 05" : {n:"ふたけっと 5"}
,"futaket 5" : {n:"ふたけっと 5"}
,"futaket 6" : {n:"ふたけっと 6"}
,"futaket 07" : {n:"ふたけっと 7"}
,"futaket 7" : {n:"ふたけっと 7"}
,"futaket 08" : {n:"ふたけっと 8"}
,"futaket 8" : {n:"ふたけっと 8"}
,"futaket08" : {n:"ふたけっと 8"}
,"futaket 8.5" : {n:"ふたけっと 8.5"}
,"futaket 9" : {n:"ふたけっと 9"}
,"futaket 9.5" : {n:"ふたけっと 9.5"}
,"futaket tai abc ~hentaisai~" : {n:"ふたけっと対ABC～変態祭"}
,"futaket vs. abc ~hentaisai~" : {n:"ふたけっと対ABC～変態祭"}
,"nijiket 2" : {n:"にじけっと2"}
,"futaba bunkasai" : {n:"ふたば☆文化祭"}
,"futaba bunkasai 2" : {n:"ふたば☆文化祭2"}
,"futaba☆bunkasai 2" : {n:"ふたば☆文化祭2"}
,"futaba gakuensai 1" : {n:"ふたば★学園祭1"}
,"futaba gakuensai 10" : {n:"ふたば★学園祭10"}
,"futaba gakuensai 11" : {n:"ふたば★学園祭11"}
,"futaba gakuensai 12" : {n:"ふたば★学園祭12"}
,"futaba gakuensai 13" : {n:"ふたば★学園祭13"}
,"futaba gakuensai 14" : {n:"ふたば★学園祭14"}
,"futaba gakuensai 15" : {n:"ふたば★学園祭15"}
,"futaba gakuensai 16" : {n:"ふたば★学園祭16"}
,"futaba gakuensai 17" : {n:"ふたば★学園祭17"}
,"futaba ★ gakuen-sai 18" : {n:"ふたば★学園祭18"}
,"futaba gakuensai 18" : {n:"ふたば★学園祭18"}
,"futaba gakuensai 2" : {n:"ふたば★学園祭2"}
,"futaba gakuensai 3" : {n:"ふたば★学園祭3"}
,"futaba gakuensai 5" : {n:"ふたば★学園祭5"}
,"futaba gakuensai 6" : {n:"ふたば★学園祭6"}
,"futaba gakuensai 7" : {n:"ふたば★学園祭7"}
,"futaba gakuensai 8" : {n:"ふたば★学園祭8"}
,"futaba gakuensai 9" : {n:"ふたば★学園祭9"}
,"puniket" : {n:"ぷにケット"}
,"puniket 1" : {n:"ぷにケット 1"}
,"puniket 10" : {n:"ぷにケット 10"}
,"puniket 11" : {n:"ぷにケット 11"}
,"puniket 12" : {n:"ぷにケット 12"}
,"puniket 13" : {n:"ぷにケット 13"}
,"puniket 14" : {n:"ぷにケット 14"}
,"puniket 15" : {n:"ぷにケット 15"}
,"puniket 16" : {n:"ぷにケット 16"}
,"puniket 17" : {n:"ぷにケット 17"}
,"puniket 18" : {n:"ぷにケット 18"}
,"puniket 19" : {n:"ぷにケット 19"}
,"puniket 2" : {n:"ぷにケット 2"}
,"puniket 20" : {n:"ぷにケット 20"}
,"puniket 21" : {n:"ぷにケット 21"}
,"puniket 22" : {n:"ぷにケット 22"}
,"puniket 23" : {n:"ぷにケット 23"}
,"puniket 24" : {n:"ぷにケット 24"}
,"puniket 25" : {n:"ぷにケット 25"}
,"puniket 26" : {n:"ぷにケット 26"}
,"puniket 27" : {n:"ぷにケット 27"}
,"puniket 28" : {n:"ぷにケット 28"}
,"puniket 29" : {n:"ぷにケット 29"}
,"puniket 3" : {n:"ぷにケット 3"}
,"puniket 30" : {n:"ぷにケット 30"}
,"puniket 31" : {n:"ぷにケット 31"}
,"puniket 32" : {n:"ぷにケット 32"}
,"puniket 33" : {n:"ぷにケット 33"}
,"puniket 34" : {n:"ぷにケット 34"}
,"puniket 35" : {n:"ぷにケット 35"}
,"puniket 36" : {n:"ぷにケット 36"}
,"puniket 37" : {n:"ぷにケット 37"}
,"puniket 37sp" : {n:"ぷにケット 37 SP"}
,"puniket 38" : {n:"ぷにケット 38"}
,"puniket 39" : {n:"ぷにケット 39"}
,"puniket 4" : {n:"ぷにケット 4"}
,"puniket 40" : {n:"ぷにケット 40"}
,"puniket 41" : {n:"ぷにケット 41"}
,"puniket 42" : {n:"ぷにケット 42"}
,"puniket 43" : {n:"ぷにケット 43"}
,"puniket 44" : {n:"ぷにケット 44"}
,"puniket 45" : {n:"ぷにケット 45"}
,"puniket 46" : {n:"ぷにケット 46"}
,"puniket 47" : {n:"ぷにケット 47"}
,"puniket 48" : {n:"ぷにケット 48"}
,"puniket 49" : {n:"ぷにケット 49"}
,"puniket 5" : {n:"ぷにケット 5"}
,"puniket 50" : {n:"ぷにケット 50"}
,"puniket 6" : {n:"ぷにケット 6"}
,"puniket 7" : {n:"ぷにケット 7"}
,"puniket 8" : {n:"ぷにケット 8"}
,"puniket 9" : {n:"ぷにケット 9"}
,"puniket special 2017" : {n:"ぷにケット スペシャル 2017"}
,"puniket mascot" : {n:"ぷにケット マスコット"}
,"boys parade" : {n:"ぼーいず☆パレード"}
,"boys parade 2" : {n:"ぼーいず☆パレード 2"}
,"boys parade 3" : {n:"ぼーいず☆パレード 3"}
,"boys parade 4" : {n:"ぼーいず☆パレード 4"}
,"boys parade 5" : {n:"ぼーいず☆パレード 5"}
,"boys parade 6" : {n:"ぼーいず☆パレード 6"}
,"boys parade osaka 4" : {n:"ぼーいず☆パレード 大阪4"}
,"dai-2-kai pocharism" : {n:"第二回ぽちゃリズム"}
,"nikuket" : {n:"にくけっと"}
,"nikuket 10" : {n:"にくけっと10"}
,"nikuket 12" : {n:"にくけっと12"}
,"nikuket 2" : {n:"にくけっと2"}
,"nikuket 3" : {n:"にくけっと3"}
,"nikuket 9" : {n:"にくけっと9"}
,"hariket 2" : {n:"はりケット"}
,"ryonaket" : {n:"りょなけっと"}
,"ryonaket 11" : {n:"りょなけっと11"}
,"ryonaket 2" : {n:"りょなけっと2"}
,"ryonaket 3" : {n:"りょなけっと3"}
,"ryonaket 4" : {n:"りょなけっと4"}
,"ryonaket 5" : {n:"りょなけっと5"}
,"ryonaket 6" : {n:"りょなけっと6"}
,"ryonaket 7" : {n:"りょなけっと7"}
,"ryonaket 8" : {n:"りょなけっと8"}
,"loketto" : {n:"Loけっと"}
,"loketto 3" : {n:"Loけっと3"}
,"loketto 4" : {n:"Loけっと4"}
,"loketto 5" : {n:"Loけっと5"}
,"love collection 2011" : {n:"ラヴ♥コレクション 2011"}
,"love ♥ collection 2011 in autumn" : {n:"ラヴ♥コレクション 2011 in Autumn"}
,"love collection 2013" : {n:"ラヴ♥コレクション 2013"}
,"love ♥ collection 2013 in autumn" : {n:"ラヴ♥コレクション 2013 in Autumn"}
,"love♥collection 2014" : {n:"ラヴ♥コレクション 2014"}
,"love ♥ collection 2014 in autumn" : {n:"ラヴ♥コレクション 2014 in Autumn"}
,"love ♥ collection 2014 in summer" : {n:"ラヴ♥コレクション 2014 in Summer"}
,"love collection 2014 in summer" : {n:"ラヴ♥コレクション 2014 in Summer"}
,"love ♥ collection 2015" : {n:"ラヴ♥コレクション 2015"}
,"love collection 2015 in autumn" : {n:"ラヴ♥コレクション 2015 in Autumn"}
,"love collection 2015 in summer" : {n:"ラヴ♥コレクション 2015 in Summer"}
,"love collection 2016" : {n:"ラヴ♥コレクション 2016"}
,"love collection 2016 in autumn" : {n:"ラヴ♥コレクション 2016 in Autumn"}
,"love ♥ collection 2016 in summer" : {n:"ラヴ♥コレクション 2016 in Summer"}
,"love ♥ collection 2017" : {n:"ラヴ♥コレクション 2017"}
,"love collection 2017 in autumn" : {n:"ラヴ♥コレクション 2017 in Autumn"}
,"love ♥ collection 2017 in summer" : {n:"ラヴ♥コレクション 2017 in Summer"}
,"love collection 2017 in summer" : {n:"ラヴ♥コレクション 2017 in Summer"}
,"love ♥ collection 2018" : {n:"ラヴ♥コレクション 2018"}
,"love collection 2018" : {n:"ラヴ♥コレクション 2018"}
,"love collection 2018 in summer" : {n:"ラヴ♥コレクション 2018 in Summer"}
,"love collection 2019" : {n:"ラヴ♥コレクション 2019"}
,"love collection 2019 in summer" : {n:"ラヴ♥コレクション 2019 in Summer"}
,"love collection 2023 in summer" : {n:"ラヴ♥コレクション 2023 in Summer"}
,"junction box 13" : {n:"Junction Box 13"}
,"junction box 14" : {n:"Junction Box 14"}
,"junction box 15" : {n:"Junction Box 15"}
,"junction box 16" : {n:"Junction Box 16"}
,"junction box16" : {n:"Junction Box 16"}
,"junction box 17" : {n:"Junction Box 17"}
,"junction box 3" : {n:"Junction Box 3"}
,"junction box 4" : {n:"Junction Box 4"}
,"junction box 5" : {n:"Junction Box 5"}
,"junction box 8" : {n:"Junction Box 8"}
,"junction box ex track13" : {n:"Junction Box EX TRACK 13"}
,"junction box ex track9" : {n:"Junction Box EX TRACK 9"}
,"junction box nagoya" : {n:"Junction Box 名古屋"}
,"junction box nagoya 2" : {n:"Junction Box 名古屋 2"}
,"junction box nagoya 3" : {n:"Junction Box 名古屋 3"}
,"super toon mix 2023" : {n:"SUPER TOON MIX  2023"}
,"super toon mix 2025" : {n:"SUPER TOON MIX  2025"}
,"supertoonmix2023 natsu" : {n:"SUPER TOON MIX 2023 夏"}
,"toon mix 10" : {n:"TOON MIX 10"}
,"toon mix 11" : {n:"TOON MIX 11"}
,"toon mix 12" : {n:"TOON MIX 12"}
,"toon mix 15" : {n:"TOON MIX 15"}
,"toon mix 17" : {n:"TOON MIX 17"}
,"toon mix 18" : {n:"TOON MIX 18"}
,"toon mix 19" : {n:"TOON MIX 19"}
,"toon mix 2" : {n:"TOON MIX 2"}
,"toon mix 3" : {n:"TOON MIX 3"}
,"toonmix3" : {n:"TOON MIX 3"}
,"toon mix 4" : {n:"TOON MIX 4"}
,"toon mix 5" : {n:"TOON MIX 5"}
,"toon mix 6" : {n:"TOON MIX 6"}
,"toon mix 8" : {n:"TOON MIX 8"}
,"unlimited ex 11" : {n:"UNLIMITED EX 11"}
,"unlimited ex 13" : {n:"UNLIMITED EX 13"}
,"unlimited ex 16" : {n:"UNLIMITED EX 16"}
,"unlimited ex 18" : {n:"UNLIMITED EX 18"}
,"unlimited ex 19" : {n:"UNLIMITED EX 19"}
,"unlimited ex 2" : {n:"UNLIMITED EX 2"}
,"unlimited ex2" : {n:"UNLIMITED EX 2"}
,"unlimited ex 3" : {n:"UNLIMITED EX 3"}
,"unlimited ex 5" : {n:"UNLIMITED EX 5"}
,"unlimited ex 6" : {n:"UNLIMITED EX 6"}
,"unlimited ex 7" : {n:"UNLIMITED EX 7"}
,"gijinka oukoku 10" : {n:"擬人化王国10"}
,"gijinka oukoku 12" : {n:"擬人化王国12"}
,"gijinka oukoku ii" : {n:"擬人化王国2"}
,"gijinka oukoku 3 ~zenkoku r12~" : {n:"擬人化王国3 全国R12"}
,"gijinka oukoku 4" : {n:"擬人化王国4"}
,"gijinka oukoku 5" : {n:"擬人化王国5"}
,"gijinka oukoku 6" : {n:"擬人化王国6"}
,"gijinka oukoku 7" : {n:"擬人化王国7"}
,"kyonyuukko" : {n:"巨乳っ娘"}
,"kyonyuukko 2" : {n:"巨乳っ娘2"}
,"kyonyuukko 3" : {n:"巨乳っ娘3"}
,"kyonyuukko 4" : {n:"巨乳っ娘4"}
,"kyonyuuko 4" : {n:"巨乳っ娘4"}
,"kyonyuukko 5" : {n:"巨乳っ娘5"}
,"kyonyuukko 6" : {n:"巨乳っ娘6"}
,"kyonyuukko 7" : {n:"巨乳っ娘7"}
,"suika musume" : {n:"西瓜娘"}
,"suika musume 2" : {n:"西瓜娘2"}
,"suika musume 3" : {n:"西瓜娘3"}
,"suika musume 4" : {n:"西瓜娘4"}
,"suika musume 5" : {n:"西瓜娘5"}
,"suika musume 6" : {n:"西瓜娘6"}
,"suika musume 7" : {n:"西瓜娘7"}
,"sukima festival 4" : {n:"スキマフェスティバル 4"}
,"sukima festival 7" : {n:"スキマフェスティバル 7"}
,"sukima festival 2006" : {n:"スキマフェスティバル2006"}
,"sukima festival 2007" : {n:"スキマフェスティバル2007"}
,"maiden's garden" : {n:"Maiden's Garden"}
,"maiden's garden 10" : {n:"Maiden's Garden 10"}
,"maiden's garden 4" : {n:"Maiden's Garden 4"}
,"maiden's garden 7" : {n:"Maiden's Garden 7"}
,"maiden's garden 9" : {n:"Maiden's Garden 9"}
,"himegimi-tachi no utage west4" : {n:"姫君たちの宴 西4"}
,"himegimi-tachi no utage 5" : {n:"姫君たちの宴5"}
,"himegimi-tachi no utage 7" : {n:"姫君たちの宴7"}
,"nyosoket!" : {n:"にょそけっと"}
,"nyosoket! 2" : {n:"にょそけっと2"}
,"nyosoket! 3" : {n:"にょそけっと3"}
,"ume momo sakura 2010 hanazakari no otome-tachi" : {n:"梅桃桜2010〜花ざかりの乙女たち～"}
,"girls love festival 10" : {n:"GirlsLoveFestival 10"}
,"girls love festival 11" : {n:"GirlsLoveFestival 11"}
,"girls love festival 12" : {n:"GirlsLoveFestival 12"}
,"girls love festival 13" : {n:"GirlsLoveFestival 13"}
,"girls love festival 14" : {n:"GirlsLoveFestival 14"}
,"girls love festival 15" : {n:"GirlsLoveFestival 15"}
,"girls love festival 16" : {n:"GirlsLoveFestival 16"}
,"girls love festival 17" : {n:"GirlsLoveFestival 17"}
,"girls love festival 19" : {n:"GirlsLoveFestival 19"}
,"girls love festival 20" : {n:"GirlsLoveFestival 20"}
,"girls love festival 21" : {n:"GirlsLoveFestival 21"}
,"girls love festival 22" : {n:"GirlsLoveFestival 22"}
,"girls love festival 24" : {n:"GirlsLoveFestival 24"}
,"girls love festival 25" : {n:"GirlsLoveFestival 25"}
,"girls love festival 27" : {n:"GirlsLoveFestival 27"}
,"girls love festival 28" : {n:"GirlsLoveFestival 28"}
,"girls love festival 29" : {n:"GirlsLoveFestival 29"}
,"girls love festival 34" : {n:"GirlsLoveFestival 34"}
,"girls love festival 36" : {n:"GirlsLoveFestival 36"}
,"girls love festival 37" : {n:"GirlsLoveFestival 37"}
,"girls love festival 39" : {n:"GirlsLoveFestival 39"}
,"girls love festival 41" : {n:"GirlsLoveFestival 41"}
,"girls love festival 7" : {n:"GirlsLoveFestival 7"}
,"girls love festival 8" : {n:"GirlsLoveFestival 8"}
,"girls love festival 9" : {n:"GirlsLoveFestival 9"}
,"ishu love" : {n:"異種ラブ"}
,"isyu love" : {n:"異種ラブ"}
,"isyu love 2" : {n:"異種ラブ2"}
,"isyu love 3" : {n:"異種ラブ3"}
,"isyu love 4" : {n:"異種ラブ4"}
,"isyu love 5" : {n:"異種ラブ5"}
,"ningen janai 6" : {n:"人間じゃない♪6"}
,"ningen ja nai r" : {n:"人間じゃない♪R"}
,"ningen janai r" : {n:"人間じゃない♪R"}
,"ningen janai r2" : {n:"人間じゃない♪R2"}
,"ningen janai r3" : {n:"人間じゃない♪R3"}
,"ningen janai♪r3" : {n:"人間じゃない♪R3"}
,"ningen ja nai sp" : {n:"人間じゃない♪SP"}
,"ningen janai sp2" : {n:"人間じゃない♪SP2"}
,"ningen janai x3" : {n:"人間じゃない♪X3"}
,"coscafe1" : {n:"コスチュームカフェ1"}
,"coscafe10" : {n:"コスチュームカフェ10"}
,"coscafe12" : {n:"コスチュームカフェ12"}
,"coscafe13" : {n:"コスチュームカフェ13"}
,"coscafe14" : {n:"コスチュームカフェ14"}
,"coscafe15" : {n:"コスチュームカフェ15"}
,"coscafe16" : {n:"コスチュームカフェ16"}
,"coscafe17" : {n:"コスチュームカフェ17"}
,"coscafe18" : {n:"コスチュームカフェ18"}
,"coscafe19" : {n:"コスチュームカフェ19"}
,"coscafe2" : {n:"コスチュームカフェ2"}
,"coscafe20" : {n:"コスチュームカフェ20"}
,"coscafe21" : {n:"コスチュームカフェ21"}
,"coscafe22" : {n:"コスチュームカフェ22"}
,"coscafe23" : {n:"コスチュームカフェ23"}
,"coscafe24" : {n:"コスチュームカフェ24"}
,"coscafe25" : {n:"コスチュームカフェ25"}
,"coscafe8" : {n:"コスチュームカフェ8"}
,"j.garden 22" : {n:"J.GARDEN 22"}
,"j.garden 30" : {n:"J.GARDEN 30"}
,"j.garden 31" : {n:"J.GARDEN 31"}
,"j.garden 32" : {n:"J.GARDEN 32"}
,"j.garden 34" : {n:"J.GARDEN 34"}
,"j.garden 35" : {n:"J.GARDEN 35"}
,"j.garden 36" : {n:"J.GARDEN 36"}
,"j.garden 37" : {n:"J.GARDEN 37"}
,"j.garden 38" : {n:"J.GARDEN 38"}
,"j.garden 40" : {n:"J.GARDEN 40"}
,"j.garden 41" : {n:"J.GARDEN 41"}
,"j.garden 42" : {n:"J.GARDEN 42"}
,"j.garden 43" : {n:"J.GARDEN 43"}
,"j.garden 44" : {n:"J.GARDEN 44"}
,"j.garden 45" : {n:"J.GARDEN 45"}
,"j.garden 46" : {n:"J.GARDEN 46"}
,"j.garden 47" : {n:"J.GARDEN 47"}
,"j.garden 50" : {n:"J.GARDEN 50"}
,"j.garden 51" : {n:"J.GARDEN 51"}
,"j.garden 52" : {n:"J.GARDEN 52"}
,"j.garden 53" : {n:"J.GARDEN 53"}
,"j.garden 54" : {n:"J.GARDEN 54"}
,"j.garden 55" : {n:"J.GARDEN 55"}
,"j.garden 56" : {n:"J.GARDEN 56"}
,"danmenzu comic" : {n:"だんめんずこみっく"}
,"danmenzu comic 01" : {n:"だんめんずこみっく 1"}
,"danmenzu comic 1" : {n:"だんめんずこみっく 1"}
,"danmenzu comic 2" : {n:"だんめんずこみっく 2"}
,"danmenzu comic 3" : {n:"だんめんずこみっく 3"}
,"chimuchimu world micchimume" : {n:"ちむちむわ～るど みっちむめ！"}
,"chimuchimu world micchimume!" : {n:"ちむちむわ～るど みっちむめ！"}
,"chimuchimu world" : {n:"ちむちむわーるど"}
,"chimuchimu world 4" : {n:"ちむちむわーるど4"}
,"mbfes tokyo in plaza maam 6-gatsu" : {n:"MBFes TOKYO inプラザマーム 6月"}
,"mbfes tokyo in plaza maam 7-gatsu" : {n:"MBFes TOKYO inプラザマーム 7月"}
,"comic next" : {n:"コミックNEXT"}
,"toretama001" : {n:"トレ魂#001"}
,"toretama002" : {n:"トレ魂#002"}
,"toretama003" : {n:"トレ魂#003"}
,"toretama004" : {n:"トレ魂#004"}
,"mega mbfes tokyo in tokyo ryuutsuu center" : {n:"超MBfes TOKYO IN 東京流通センター"}
,"all star 11" : {n:"ALL STAR 11"}
,"all star 12" : {n:"ALL STAR 12"}
,"all star 17" : {n:"ALL STAR 17"}
,"all star 19" : {n:"ALL STAR 19"}
,"all star 2" : {n:"ALL STAR 2"}
,"all star 21" : {n:"ALL STAR 21"}
,"all star 24" : {n:"ALL STAR 24"}
,"all star 26" : {n:"ALL STAR 26"}
,"all star 27" : {n:"ALL STAR 27"}
,"all star 3" : {n:"ALL STAR 3"}
,"all star 4" : {n:"ALL STAR 4"}
,"all star 5" : {n:"ALL STAR 5"}
,"all star 6" : {n:"ALL STAR 6"}
,"all star 7" : {n:"ALL STAR 7"}
,"all star 8" : {n:"ALL STAR 8"}
,"all star 9" : {n:"ALL STAR 9"}
,"super all star 2021" : {n:"SUPER ALL STAR 2021"}
,"mitsudol 10" : {n:"貢いで☆ドル箱！ 10"}
,"mitsudol 11" : {n:"貢いで☆ドル箱！ 11"}
,"mitsudol 12" : {n:"貢いで☆ドル箱！ 12"}
,"mitsudol 13" : {n:"貢いで☆ドル箱！ 13"}
,"mitsudol 14" : {n:"貢いで☆ドル箱！ 14"}
,"mitsudol 15" : {n:"貢いで☆ドル箱！ 15"}
,"mitsudol 16" : {n:"貢いで☆ドル箱！ 16"}
,"mitsudol 17" : {n:"貢いで☆ドル箱！ 17"}
,"mitsudol 18" : {n:"貢いで☆ドル箱！ 18"}
,"mitsudol 19" : {n:"貢いで☆ドル箱！ 19"}
,"mitsuide☆dollbako! 22" : {n:"貢いで☆ドル箱！ 22"}
,"mitsuide☆dollbako! 24" : {n:"貢いで☆ドル箱！ 24"}
,"mitsuide☆dollbako! 25" : {n:"貢いで☆ドル箱！ 25"}
,"mitsudol 7" : {n:"貢いで☆ドル箱！ 7"}
,"mitsudol 8" : {n:"貢いで☆ドル箱！ 8"}
,"inoketto" : {n:"いのけっと"}
,"inoket 2" : {n:"いのけっと 2"}
,"dozen rose fes.2021" : {n:"DOZEN ROSE FES 2021"}
,"dozenrosefes.2021" : {n:"DOZEN ROSE FES 2021"}
,"dozen rose fes 2022" : {n:"DOZEN ROSE FES 2022"}
,"dozen rose fes.2022" : {n:"DOZEN ROSE FES 2022"}
,"dozen rose fes.2023" : {n:"DOZEN ROSE FES 2023"}
,"dozen rose fes.2024" : {n:"DOZEN ROSE FES 2024"}
,"chiraket" : {n:"ちらけっと"}
,"higurashi no tsudoi" : {n:"ひぐらしのつどい"}
,"higurashi no tsudoi 3" : {n:"ひぐらしのつどい3"}
,"higurashi no tsudoi 6" : {n:"ひぐらしのつどい6"}
,"lun lun festa" : {n:"ルンルンフェスタ"}
,"lun lun festa 2" : {n:"ルンルンフェスタ2"}
,"lun lun festa 3" : {n:"ルンルンフェスタ3"}
,"lun lun festa 5" : {n:"ルンルンフェスタ5"}
,"chaos gate notes! 11" : {n:"カオスゲートノーツ！11"}
,"chaos gate notes! 13" : {n:"カオスゲートノーツ！13"}
,"chaos gate notes! 16" : {n:"カオスゲートノーツ！16"}
,"popuket" : {n:"ぽぷケット"}
,"popuket 4" : {n:"ぽぷケット4"}
,"popuket 6" : {n:"ぽぷケット6"}
,"chō kai ★ kaigi 2024" : {n:"超怪★会議 2024"}
,"chokai★kaigi 2024" : {n:"超怪★会議 2024"}
,"chou kai ★ kaigi 2025 fuyu" : {n:"超怪★会議 2025冬"}
,"nishio matsuri in akihabara" : {n:"西尾維新祭 in 秋葉原"}
,"07th expansion party" : {n:"07thExpansionParty"}
,"07th expansion party! 02" : {n:"07thExpansionParty 2"}
,"07th expansion party 3" : {n:"07thExpansionParty 3"}
,"07th expansion party 4" : {n:"07thExpansionParty 4"}
,"07th expansion party! 04" : {n:"07thExpansionParty 4"}
,"07th expansion party 5" : {n:"07thExpansionParty 5"}
,"full bloom season 11" : {n:"FULL BLOOM SEASON 11"}
,"full bloom season 16" : {n:"FULL BLOOM SEASON 16"}
,"full bloom season 2" : {n:"FULL BLOOM SEASON 2"}
,"full bloom season 7" : {n:"FULL BLOOM SEASON 7"}
,"super full bloom season 2018" : {n:"SUPER FULL BLOOM SEASON 2018"}
,"super full bloom season 2019" : {n:"SUPER FULL BLOOM SEASON 2019"}
,"after match function 2" : {n:"アフターマッチファンクション2"}
,"aftermatch function 4" : {n:"アフターマッチファンクション4"}
,"bang dreamer's party! ~8 gatsu no in fukuoka~" : {n:"BanG Dreamer's Party! ～8月のin fukuoka～"}
,"bang dreamer's party! 10th stage" : {n:"BanG Dreamer's Party! 10th STAGE"}
,"bang dreamer's party! 11th stage" : {n:"BanG Dreamer's Party! 11th STAGE"}
,"bang dreamer's party! 13th stage" : {n:"BanG Dreamer's Party! 13th STAGE"}
,"bang dreamer's party! 14th stage" : {n:"BanG Dreamer's Party! 14th STAGE"}
,"bang dreamer's party! 2nd stage" : {n:"BanG Dreamer's Party! 2nd STAGE"}
,"bang dreamer's party! 3rd stage" : {n:"BanG Dreamer's Party! 3rd STAGE"}
,"bang dreamer's party! 4th stage" : {n:"BanG Dreamer's Party! 4th STAGE"}
,"bang dreamer's party! 5th stage" : {n:"BanG Dreamer's Party! 5th STAGE"}
,"bang dreamer's party! 6th stage" : {n:"BanG Dreamer's Party! 6th STAGE"}
,"bang dreamer's party! 7th stage" : {n:"BanG Dreamer's Party! 7th STAGE"}
,"bang dreamer's party! 8th stage" : {n:"BanG Dreamer's Party! 8th STAGE"}
,"bang dreamer's party! 9th stage" : {n:"BanG Dreamer's Party! 9th STAGE"}
,"bang dreamer's party! in fukuoka 3rd" : {n:"BanG Dreamer's Party! in fukuoka 3rd"}
,"bang dreamer's party! in osaka" : {n:"BanG Dreamer's Party! in大阪"}
,"circle space meeting 1st" : {n:"CIRCLE Space Meeting 1st"}
,"circle space meeting 2nd" : {n:"CIRCLE Space Meeting 2nd"}
,"circle space meeting 5th" : {n:"CIRCLE Space Meeting 5th"}
,"circle space meeting 7th" : {n:"CIRCLE Space Meeting 7th"}
,"bandrea! star festival 3" : {n:"バンドリ！スターフェスティバル 3"}
,"bandrea! star festival 4" : {n:"バンドリ！スターフェスティバル 4"}
,"bandrea! star festival 5" : {n:"バンドリ！スターフェスティバル 5"}
,"bandrea! star festival 6" : {n:"バンドリ！スターフェスティバル 6"}
,"bandrea! star festival 8" : {n:"バンドリ！スターフェスティバル 8"}
,"sekai de hitotsu no taisetsu na hi" : {n:"世界でヒトツの大切な日"}
,"black robes" : {n:"BLACK ROBES"}
,"super black robes 2023" : {n:"SUPER BLACK ROBES 2023"}
,"super black robes 2024" : {n:"SUPER BLACK ROBES 2024"}
,"the rock" : {n:"The ROCK"}
,"the rock 11" : {n:"The ROCK 11"}
,"the rock 12" : {n:"The ROCK 12"}
,"the rock 13" : {n:"The ROCK 13"}
,"the rock 14" : {n:"The ROCK 14"}
,"the rock 2" : {n:"The ROCK 2"}
,"the rock 3" : {n:"The ROCK 3"}
,"the rock 4" : {n:"The ROCK 4"}
,"the rock 5" : {n:"The ROCK 5"}
,"the rock 6" : {n:"The ROCK 6"}
,"the rock 9" : {n:"The ROCK 9"}
,"the super rock 2021 osaka" : {n:"The Super ROCK  2021大阪"}
,"the super rock 2021 tokyo" : {n:"The Super ROCK  2021東京"}
,"the super rock 2022 natsu" : {n:"The Super ROCK  2022夏"}
,"the super rock 2023 natsu" : {n:"The Super ROCK  2023夏"}
,"brain breaker" : {n:"brain Breaker"}
,"brain breaker 2" : {n:"brain Breaker 2"}
,"brain breaker 3" : {n:"brain Breaker 3"}
,"brain breaker 4" : {n:"brain Breaker 4"}
,"brain breaker 5" : {n:"brain Breaker 5"}
,"brain breaker 7" : {n:"brain Breaker 7"}
,"bokura no grand order" : {n:"僕らのGrand Order"}
,"bokura no grandorder" : {n:"僕らのGrand Order"}
,"bokura no grand order 14" : {n:"僕らのGrand Order 14"}
,"bokura no grand order 4" : {n:"僕らのGrand Order 4"}
,"bokura no grand order 6" : {n:"僕らのGrand Order 6"}
,"bokura no grand order 9" : {n:"僕らのGrand Order 9"}
,"go! my master ver.boy2" : {n:"Go! My Master ver.Boy 2"}
,"go! my master ver.girl" : {n:"Go! My Master ver.Girl"}
,"go! my master ver.girl2" : {n:"Go! My Master ver.Girl 2"}
,"root4to5" : {n:"ROOT 4 to 5"}
,"super root 4-5" : {n:"Super ROOT 4 to 5"}
,"super root4to5 2018" : {n:"Super ROOT 4 to 5 2018"}
,"super root4to5 2019" : {n:"Super ROOT 4 to 5 2019"}
,"super root4to5 2020" : {n:"Super ROOT 4 to 5 2020"}
,"super root4to5 2021 tokyo" : {n:"Super ROOT 4 to 5 2021東京"}
,"super root4to5 2022" : {n:"Super ROOT 4 to 5 2022"}
,"super root4to5 2022 natsu" : {n:"Super ROOT 4 to 5 2022夏"}
,"super root4to5 2023" : {n:"Super ROOT 4 to 5 2023"}
,"super root4to5 2024" : {n:"Super ROOT 4 to 5 2024"}
,"super root4to5 2025" : {n:"Super ROOT 4 to 5 2025"}
,"ou no utsuwa" : {n:"王の器"}
,"ou no utsuwa 10" : {n:"王の器 10"}
,"ou no utsuwa 11" : {n:"王の器 11"}
,"ou no utsuwa 14" : {n:"王の器 14"}
,"ou no utsuwa 15" : {n:"王の器 15"}
,"ou no utsuwa 16" : {n:"王の器 16"}
,"ou no utsuwa 17" : {n:"王の器 17"}
,"ou no utsuwa 18" : {n:"王の器 18"}
,"ou no utsuwa 19" : {n:"王の器 19"}
,"ou no utsuwa 2" : {n:"王の器 2"}
,"ou no utsuwa 3" : {n:"王の器 3"}
,"ou no utsuwa 4" : {n:"王の器 4"}
,"ou no utsuwa 5" : {n:"王の器 5"}
,"ou no utsuwa 6" : {n:"王の器 6"}
,"ou no utsuwa 8" : {n:"王の器 8"}
,"ou no utsuwa grail oath" : {n:"王の器 Grail Oath"}
,"ou no utsuwa grail oath 2" : {n:"王の器 Grail Oath 2"}
,"ou no utsuwa grail oath2" : {n:"王の器 Grail Oath 2"}
,"ou no utsuwa grail oath 3" : {n:"王の器 Grail Oath 3"}
,"ou no utsuwa grail oath 4" : {n:"王の器 Grail Oath 4"}
,"ou no utsuwa grail oath 5" : {n:"王の器 Grail Oath 5"}
,"ou no utsuwa grail oath okinawa" : {n:"王の器 Grail Oath 沖縄"}
,"ou no utsuwa grail oath sapporo 3" : {n:"王の器 Grail Oath 札幌3"}
,"ou no utsuwa grail oath osaka" : {n:"王の器 Grail Oath 大阪"}
,"ou no utsuwa grail oath osaka 3" : {n:"王の器 Grail Oath 大阪3"}
,"ou no utsuwa natsuyasumi 2013" : {n:"王の器 夏休み 2013"}
,"ou no utsuwa osaka 8" : {n:"王の器 大阪8"}
,"dai 10-ji root4to5" : {n:"第10次ROOT 4 to 5"}
,"dai 11 ji root 4 to 5" : {n:"第11次ROOT 4 to 5"}
,"dai 11-ji root 4 to 5" : {n:"第11次ROOT 4 to 5"}
,"dai 11-ji root4to5" : {n:"第11次ROOT 4 to 5"}
,"dai 12-ji root4to5" : {n:"第12次ROOT 4 to 5"}
,"dai 14-ji root4to5" : {n:"第14次ROOT 4 to 5"}
,"dai 15-ji root4to5" : {n:"第15次ROOT 4 to 5"}
,"dai 16-ji root4to5" : {n:"第16次ROOT 4 to 5"}
,"dai 17-ji root4to5" : {n:"第17次ROOT 4 to 5"}
,"dai 18-ji root4to5" : {n:"第18次ROOT 4 to 5"}
,"dai 19-ji root4to5" : {n:"第19次ROOT 4 to 5"}
,"dai 20-ji root4to5" : {n:"第20次ROOT 4 to 5"}
,"dai 21-ji root4to5" : {n:"第21次ROOT 4 to 5"}
,"dai 22-ji root4to5" : {n:"第22次ROOT 4 to 5"}
,"第22次root4to5" : {n:"第22次ROOT 4 to 5"}
,"dai 23-ji root4to5" : {n:"第23次ROOT 4 to 5"}
,"dai 24-ji root4to5" : {n:"第24次ROOT 4 to 5"}
,"dai 26-ji root4to5" : {n:"第26次ROOT 4 to 5"}
,"dai 27-ji root4to5" : {n:"第27次ROOT 4 to 5"}
,"dai 29-ji root4to5" : {n:"第29次ROOT 4 to 5"}
,"dai 30-ji root4to5" : {n:"第30次ROOT 4 to 5"}
,"dai 31-ji root4to5" : {n:"第31次ROOT 4 to 5"}
,"dai 33-ji root 4 to 5" : {n:"第33次ROOT 4 to 5"}
,"dai 33-ji root4to5" : {n:"第33次ROOT 4 to 5"}
,"dai 35-ji root 4 to 5" : {n:"第35次ROOT 4 to 5"}
,"dai 37-ji root 4 to 5" : {n:"第37次ROOT 4 to 5"}
,"dai 3-ji root4to5" : {n:"第3次ROOT 4 to 5"}
,"dai 41-ji root4to5" : {n:"第41次ROOT 4 to 5"}
,"dai 43-ji root4to5" : {n:"第43次ROOT 4 to 5"}
,"44th root 4 to 5" : {n:"第44次ROOT 4 to 5"}
,"45th root 4 to 5" : {n:"第45次ROOT 4 to 5"}
,"dai 45-ji root4to5" : {n:"第45次ROOT 4 to 5"}
,"dai 48-ji root4to5" : {n:"第48次ROOT 4 to 5"}
,"dai 49-ji root4to5" : {n:"第49次ROOT 4 to 5"}
,"dai 4 tsugi root 4 to 5" : {n:"第4次ROOT 4 to 5"}
,"dai 4-ji root4to5" : {n:"第4次ROOT 4 to 5"}
,"dai 5-ji root4to5" : {n:"第5次ROOT 4 to 5"}
,"dai 7-ji root 4 to 5" : {n:"第7次ROOT 4 to 5"}
,"dai 7-ji root4to5" : {n:"第7次ROOT 4 to 5"}
,"dai 8-ji root4to5" : {n:"第8次ROOT 4 to 5"}
,"dai 9-ji root 4 to 5" : {n:"第9次ROOT 4 to 5"}
,"dai 9-ji root4to5" : {n:"第9次ROOT 4 to 5"}
,"chou super root 4 to 5 2021 natsu" : {n:"超Super ROOT 4 to 5 2021夏"}
,"kimi to ochiru yume no hanashi dr2024" : {n:"きみとおちる夢の噺 DR2024"}
,"kimi to ochiru yume no hanashi jb2024" : {n:"きみとおちる夢の噺 JB2024"}
,"ryuu to hayabusa no teito roman dr2021" : {n:"龍と隼の帝都浪漫 DR2021"}
,"ryuu to hayabusa no teito roman dr2022" : {n:"龍と隼の帝都浪漫 DR2022"}
,"jabjab maidoari!" : {n:"じゃぶじゃぶマイドアリ！"}
,"jabjab maidoari! 10" : {n:"じゃぶじゃぶマイドアリ！ 10"}
,"jabjab maidoari! 11" : {n:"じゃぶじゃぶマイドアリ！ 11"}
,"jabjab maidoari! 12" : {n:"じゃぶじゃぶマイドアリ！ 12"}
,"jabjab maidoari! 13" : {n:"じゃぶじゃぶマイドアリ！ 13"}
,"jabjab maidoari! 14" : {n:"じゃぶじゃぶマイドアリ！ 14"}
,"jabjab maidoari! 17" : {n:"じゃぶじゃぶマイドアリ！ 17"}
,"jabjab maidoari! 18" : {n:"じゃぶじゃぶマイドアリ！ 18"}
,"jabjab maidoari! 2" : {n:"じゃぶじゃぶマイドアリ！ 2"}
,"jabjab maidoari! 3" : {n:"じゃぶじゃぶマイドアリ！ 3"}
,"jabjab maidoari! 4" : {n:"じゃぶじゃぶマイドアリ！ 4"}
,"jabjab maidoari! 5" : {n:"じゃぶじゃぶマイドアリ！ 5"}
,"jabjab maidoari! 6" : {n:"じゃぶじゃぶマイドアリ！ 6"}
,"jabjab maidoari! 7" : {n:"じゃぶじゃぶマイドアリ！ 7"}
,"jabjab maidoari! 8" : {n:"じゃぶじゃぶマイドアリ！ 8"}
,"jabjab maidoari! 9" : {n:"じゃぶじゃぶマイドアリ！ 9"}
,"renai free style! entry2" : {n:"恋愛自由形!entry2"}
,"renai jiyuugata! entry2" : {n:"恋愛自由形!entry2"}
,"renai jiyuugata! entry3" : {n:"恋愛自由形!entry3"}
,"renai jiyuugata! entry4" : {n:"恋愛自由形!entry4"}
,"renai jiyuugata! entry5" : {n:"恋愛自由形!entry5"}
,"renai jiyuugata!entry5" : {n:"恋愛自由形!entry5"}
,"renai free style! entry6" : {n:"恋愛自由形!entry6"}
,"renai jiyuugata! entry 6" : {n:"恋愛自由形!entry6"}
,"renai jiyuugata! entry6" : {n:"恋愛自由形!entry6"}
,"renai jiyuugata!entry6" : {n:"恋愛自由形!entry6"}
,"renai jiyuugata! natsu honban" : {n:"恋愛自由形!夏本番"}
,"renai jiyuugata! junbi undou" : {n:"恋愛自由形!準備運動"}
,"renai free style! osaka taikai" : {n:"恋愛自由形!大阪大会"}
,"renai jiyuugata! osaka taikai" : {n:"恋愛自由形!大阪大会"}
,"renai free style! osaka taikai 2" : {n:"恋愛自由形!大阪大会2"}
,"renai jiyūgata! ōsaka taikai 2" : {n:"恋愛自由形！大阪大会2"}
,"renai jiyuugata! osaka taikai 2" : {n:"恋愛自由形!大阪大会2"}
,"renai free style! osaka taikai 3" : {n:"恋愛自由形!大阪大会3"}
,"renai jiyuugata! osaka taikai 3" : {n:"恋愛自由形!大阪大会3"}
,"renai jiyuugata! osaka taikai 4" : {n:"恋愛自由形!大阪大会4"}
,"renai jiyuugata! osaka taikai 6" : {n:"恋愛自由形!大阪大会6"}
,"renai jiyuugata! fukuoka taikai" : {n:"恋愛自由形!福岡大会"}
,"renai free style! nagoya taikai" : {n:"恋愛自由形!名古屋大会"}
,"renai free style! nagoya taikai 4" : {n:"恋愛自由形!名古屋大会4"}
,"renai survival" : {n:"恋愛サバイバル"}
,"renai survival 2" : {n:"恋愛サバイバル2"}
,"renai survival 3" : {n:"恋愛サバイバル3"}
,"renai survival 4" : {n:"恋愛サバイバル4"}
,"renai survival 5" : {n:"恋愛サバイバル5"}
,"renai shachuation" : {n:"恋愛シャチュエーション"}
,"renai shachuation 2" : {n:"恋愛シャチュエーション2"}
,"renai shachuation 3" : {n:"恋愛シャチュエーション3"}
,"renai shachuation 4" : {n:"恋愛シャチュエーション4"}
,"renai shachuation 6" : {n:"恋愛シャチュエーション6"}
,"hoeru! shark!!" : {n:"吼える！SHARK！！"}
,"hoeru! shark!! 2" : {n:"吼える！SHARK！！2"}
,"renai endorphin" : {n:"恋愛エンドルフィン"}
,"renai endorphin 2" : {n:"恋愛エンドルフィン2"}
,"renai endorphin 3" : {n:"恋愛エンドルフィン3"}
,"renai endorphin 4" : {n:"恋愛エンドルフィン4"}
,"renai jaws" : {n:"恋愛ジョーズ"}
,"renai jaws 1" : {n:"恋愛ジョーズ"}
,"renai jaws 2" : {n:"恋愛ジョーズ 2"}
,"renai jaws 3" : {n:"恋愛ジョーズ 3"}
,"renai jaws 4" : {n:"恋愛ジョーズ 4"}
,"renai jaws 5" : {n:"恋愛ジョーズ 5"}
,"0ji ni nagisa de approach" : {n:"0時に渚でアプローチ"}
,"0ji ni nagisa de approach 2" : {n:"0時に渚でアプローチ 2回目"}
,"splash!" : {n:"Splash!"}
,"splash! 11" : {n:"Splash! 11"}
,"splash! 12" : {n:"Splash! 12"}
,"splash! 14" : {n:"Splash! 14"}
,"splash! 2" : {n:"Splash! 2"}
,"splash! 3" : {n:"Splash! 3"}
,"splash! 5" : {n:"Splash! 5"}
,"splash! hi" : {n:"Splash! HI"}
,"splash!hi" : {n:"Splash! HI"}
,"splash!hi 2" : {n:"Splash! HI 2"}
,"splash! spark 2017" : {n:"Splash! SPARK 2017"}
,"asakusa triumph 6th" : {n:"浅草トライアンフ 6th"}
,"bridget festival" : {n:"ブリジットフェスティバル〜鰤祭1〜"}
,"what the hell!? vg2024" : {n:"What the Hell!? VG2024"}
,"re:hunter" : {n:"Re:HUNTER"}
,"re:hunter 10" : {n:"Re:HUNTER 10"}
,"re:hunter 6" : {n:"Re:HUNTER 6"}
,"king of colors" : {n:"King of colors"}
,"king of colors ii" : {n:"King of colors 2"}
,"king of colors iii" : {n:"King of colors 3"}
,"king of colors iv" : {n:"King of colors 4"}
,"king of colors winter" : {n:"King of colors winter"}
,"king of colors christmas" : {n:"King of colors クリスマス"}
,"king of colors osaka" : {n:"King of colors 大阪"}
,"king of colors osakaii" : {n:"King of colors 大阪2"}
,"king of colors osakaiii" : {n:"King of colors 大阪3"}
,"sayuket" : {n:"さゆけっと"}
,"sayuket 2" : {n:"さゆけっと2"}
,"ware koso prism king!" : {n:"我こそプリズムキング!"}
,"ware koso prism king! 2" : {n:"我こそプリズムキング!2"}
,"ware koso prism king! 3" : {n:"我こそプリズムキング!3"}
,"kindan no prism" : {n:"禁断のプリズム"}
,"kindan no prism 10" : {n:"禁断のプリズム10"}
,"kindan no prism 12" : {n:"禁断のプリズム12"}
,"kindan no prism 2" : {n:"禁断のプリズム2"}
,"kindan no prism 5" : {n:"禁断のプリズム5"}
,"kindan no prism 8" : {n:"禁断のプリズム8"}
,"kindan no prism 9" : {n:"禁断のプリズム9"}
,"brand new leaf 10" : {n:"Brand New Leaf 10"}
,"brand new leaf 17" : {n:"Brand New Leaf 17"}
,"brand new leaf 19" : {n:"Brand New Leaf 19"}
,"brand new leaf 20" : {n:"Brand New Leaf 20"}
,"brand new leaf 8" : {n:"Brand New Leaf 8"}
,"brand new leaf 9" : {n:"Brand New Leaf 9"}
,"zennin shuuketsu" : {n:"全忍集結"}
,"zennin shuuketsu 10" : {n:"全忍集結 10"}
,"zennin shuuketsu 11" : {n:"全忍集結 11"}
,"zennin shuuketsu 12" : {n:"全忍集結 12"}
,"zennin shuuketsu 14" : {n:"全忍集結 14"}
,"zennin shuuketsu 15" : {n:"全忍集結 15"}
,"zennin shuuketsu 2" : {n:"全忍集結 2"}
,"zennin shuuketsu 25" : {n:"全忍集結 25"}
,"zennin shuuketsu 3" : {n:"全忍集結 3"}
,"zennin shuuketsu 4" : {n:"全忍集結 4"}
,"zennin shuuketsu 5" : {n:"全忍集結 5"}
,"zennin shuuketsu 6" : {n:"全忍集結 6"}
,"zennin shuuketsu 7" : {n:"全忍集結 7"}
,"zennin shuuketsu 8" : {n:"全忍集結 8"}
,"zennin shuuketsu 9" : {n:"全忍集結 9"}
,"chou zennin shuuketsu 2018" : {n:"超全忍集結 2018"}
,"chou zennin shuuketsu 2019" : {n:"超全忍集結 2019"}
,"chou zennin shuuketsu 2022" : {n:"超全忍集結 2022"}
,"grandline cruise" : {n:"GRANDLINE CRUISE"}
,"grandline cruise 15" : {n:"GRANDLINE CRUISE 15"}
,"grandline cruise 19" : {n:"GRANDLINE CRUISE 19"}
,"grandline cruise 21" : {n:"GRANDLINE CRUISE 21"}
,"grandline cruise 24" : {n:"GRANDLINE CRUISE 24"}
,"grandline cruise 31" : {n:"GRANDLINE CRUISE 31"}
,"daienkai! 6" : {n:"大宴海! 6"}
,"daienkai! 7" : {n:"大宴海! 7"}
,"chou grandline cruise 2018" : {n:"超GRANDLINE CRUISE 2018"}
,"chou grandline cruise 2022" : {n:"超GRANDLINE CRUISE 2022"}
,"chou grandline cruise 2023" : {n:"超GRANDLINE CRUISE 2023"}
,"chou grandline cruise 2024" : {n:"超GRANDLINE CRUISE 2024"}
,"enai kakumei dr2023" : {n:"炎愛革命 DR2023"}
,"ore no kaen ni ai o chikau yo dr2023" : {n:"おれの火炎に愛を誓うよ DR2023"}
,"aishuu reel-jet 3" : {n:"愛執Reel-jet3"}
,"aishuu reel-jet 6" : {n:"愛執Reel-jet8"}
,"open the gate!" : {n:"OPEN THE GATE!"}
,"open the gate! 10" : {n:"OPEN THE GATE! 10"}
,"open the gate! 2" : {n:"OPEN THE GATE! 2"}
,"open the gate! 3" : {n:"OPEN THE GATE! 3"}
,"open the gate! 4" : {n:"OPEN THE GATE! 4"}
,"open the gate！4" : {n:"OPEN THE GATE! 4"}
,"open the gate! 6" : {n:"OPEN THE GATE! 6"}
,"open the gate! 7" : {n:"OPEN THE GATE! 7"}
,"open the gate! toppatsu summer" : {n:"OPEN THE GATE! 突発SUMMER"}
,"chou open the gate! 2021" : {n:"超OPEN THE GATE 2021"}
,"chou open the gate! 2021 -summer-" : {n:"超OPEN THE GATE 2021夏"}
,"cho open the gate! 2022" : {n:"超OPEN THE GATE 2022"}
,"chou open the gate! 2022" : {n:"超OPEN THE GATE 2022"}
,"cho open the gate! 2022 -summer-" : {n:"超OPEN THE GATE 2022夏"}
,"chou open the gate! 2022 -summer-" : {n:"超OPEN THE GATE 2022夏"}
,"chou open the gate 2023" : {n:"超OPEN THE GATE 2023"}
,"chou open the gate! 2023" : {n:"超OPEN THE GATE 2023"}
,"chou open the gate 2023 natsu" : {n:"超OPEN THE GATE 2023夏"}
,"aisa re kitsu! jb2024" : {n:"あいされきっ！ JB2024"}
,"burst out" : {n:"BURST OUT"}
,"burst out 15" : {n:"BURST OUT 15"}
,"burst out 2" : {n:"BURST OUT 2"}
,"burst out 3" : {n:"BURST OUT 3"}
,"burst out 4" : {n:"BURST OUT 4"}
,"burst out 8" : {n:"BURST OUT 8"}
,"burst out sp2023" : {n:"BURST OUT SP2023"}
,"code:1122 jb2024" : {n:"code:1122 JB2024"}
,"akihabara syutage matsuri" : {n:"秋葉原シュタゲ祭り"}
,"mirai gadget 325 gou" : {n:"未来ガジェット325号"}
,"mirai gadget 94 gou" : {n:"未来ガジェット94号"}
,"boku no hero" : {n:"僕のヒーロー"}
,"boku no hero 5" : {n:"僕のヒーロー 5"}
,"boku no hero osaka de akushu!" : {n:"僕のヒーロー 大阪で握手！"}
,"toheartsai 2" : {n:"ToHeart祭 2"}
,"toheartsai2" : {n:"ToHeart祭 2"}
,"toheartsai 2-d" : {n:"ToHeart祭 2-d"}
,"toheartsai2-e" : {n:"ToHeart祭 2-e"}
,"777 festival" : {n:"777 FESTIVAL"}
,"777 festival 11th" : {n:"777 FESTIVAL 11th"}
,"777 festival 2nd" : {n:"777 FESTIVAL 2nd"}
,"777 festival 3rd" : {n:"777 FESTIVAL 3rd"}
,"777 festival 5th" : {n:"777 FESTIVAL 5th"}
,"777festival 7th" : {n:"777 FESTIVAL 7th"}
,"sougetsusai" : {n:"蒼月祭"}
,"sougetsusai 19" : {n:"蒼月祭 19"}
,"sougetsusai 2" : {n:"蒼月祭 2"}
,"sougetsusai 24" : {n:"蒼月祭 24"}
,"sougetsusai 25" : {n:"蒼月祭 25"}
,"sougetsusai 29" : {n:"蒼月祭 29"}
,"sougetsusai 33" : {n:"蒼月祭 33"}
,"sougetsusai 36" : {n:"蒼月祭 36"}
,"sougetsusai 4" : {n:"蒼月祭 4"}
,"sougetsusai 41" : {n:"蒼月祭 41"}
,"sougetsusai 53" : {n:"蒼月祭 53"}
,"sougetsusai 9" : {n:"蒼月祭 9"}
,"chou kimi no sentaku 2022" : {n:"超きみの選択。 2022"}
,"kono koe todoke, tsuki made mo go" : {n:"この声届け、月までも五"}
,"kono koe todoke, tsuki made mo san" : {n:"この声届け、月までも三"}
,"kono koe todoke, tsuki made mo yon" : {n:"この声届け、月までも四"}
,"kono koe todoke, tsuki made mo roku" : {n:"この声届け、月までも六"}
,"yukari paradise 2" : {n:"ゆかりPARADISE 2"}
,"arts in sanity #2" : {n:"Arts in Sanity #2"}
,"arts in sanity #3" : {n:"Arts in Sanity #3"}
,"aikatsu! carnival! 5" : {n:"アイカツ！カーニバル！5"}
,"dokkidoki live 7" : {n:"ドッキドキ☆ライブ PART 7"}
,"dokkidoki live part 7" : {n:"ドッキドキ☆ライブ PART 7"}
,"dokkidoki live 9" : {n:"ドッキドキ☆ライブ PART 9"}
,"geinoujin wa card ga inochi! 10" : {n:"芸能人はカードが命！10"}
,"geinoujin wa card ga inochi! 11" : {n:"芸能人はカードが命！11"}
,"geinoujin wa card ga inochi! 12" : {n:"芸能人はカードが命！12"}
,"geinoujin wa card ga inochi! 13" : {n:"芸能人はカードが命！13"}
,"geinoujin wa card ga inochi! 14" : {n:"芸能人はカードが命！14"}
,"geinoujin wa card ga inochi! 15" : {n:"芸能人はカードが命！15"}
,"geinoujin wa card ga inochi! 16" : {n:"芸能人はカードが命！16"}
,"geinoujin wa card ga inochi! 17" : {n:"芸能人はカードが命！17"}
,"geinoujin wa card ga inochi! 18" : {n:"芸能人はカードが命！18"}
,"geinoujin wa card ga inochi! 19" : {n:"芸能人はカードが命！19"}
,"geinoujin wa card ga inochi! 21" : {n:"芸能人はカードが命！21"}
,"geinoujin wa card ga inochi! 23" : {n:"芸能人はカードが命！23"}
,"geinoujin wa card ga inochi! 28" : {n:"芸能人はカードが命！28"}
,"geinoujin wa card ga inochi! 30" : {n:"芸能人はカードが命！30"}
,"geinoujin ha card ga inochi ! 4" : {n:"芸能人はカードが命！4"}
,"geinoujin wa card ga inochi! 4" : {n:"芸能人はカードが命！4"}
,"geinoujin wa card ga inochi! 5" : {n:"芸能人はカードが命！5"}
,"geinoujin wa card ga inochi! 6" : {n:"芸能人はカードが命！6"}
,"geinoujin ha card ga inochi ! 7" : {n:"芸能人はカードが命！7"}
,"geinoujin wa card ga inochi! 7" : {n:"芸能人はカードが命！7"}
,"geinoujin wa card ga inochi! 8" : {n:"芸能人はカードが命！8"}
,"geinoujin wa card ga inochi! 9" : {n:"芸能人はカードが命！9"}
,"top of the stage" : {n:"TOP OF THE STAGE"}
,"top of the stage 12" : {n:"TOP OF THE STAGE 12"}
,"top of the stage 13" : {n:"TOP OF THE STAGE 13"}
,"top of the stage 14" : {n:"TOP OF THE STAGE 14"}
,"top of the stage 17" : {n:"TOP OF THE STAGE 17"}
,"top of the stage 18" : {n:"TOP OF THE STAGE 18"}
,"top of the stage 19" : {n:"TOP OF THE STAGE 19"}
,"top of the stage 2" : {n:"TOP OF THE STAGE 2"}
,"top of the stage 20" : {n:"TOP OF THE STAGE 20"}
,"top of the stage 23" : {n:"TOP OF THE STAGE 23"}
,"top of the stage 25" : {n:"TOP OF THE STAGE 25"}
,"top of the stage 27" : {n:"TOP OF THE STAGE 27"}
,"top of the stage 29" : {n:"TOP OF THE STAGE 29"}
,"top of the stage 3" : {n:"TOP OF THE STAGE 3"}
,"top of the stage 33" : {n:"TOP OF THE STAGE 33"}
,"top of the stage 35" : {n:"TOP OF THE STAGE 35"}
,"top of the stage 37" : {n:"TOP OF THE STAGE 37"}
,"top of the stage 4" : {n:"TOP OF THE STAGE 4"}
,"top of the stage 7" : {n:"TOP OF THE STAGE 7"}
,"top of the stage 9" : {n:"TOP OF THE STAGE 9"}
,"top of the stage kinkyuu summer2021" : {n:"TOP OF THE STAGE 緊急SUMMER 2021"}
,"top of the super stage 2017" : {n:"TOP OF THE SUPER STAGE 2017"}
,"top of the super stage 2018" : {n:"TOP OF THE SUPER STAGE 2018"}
,"top of the super stage 2019" : {n:"TOP OF THE SUPER STAGE 2019"}
,"top of the super stage 2020" : {n:"TOP OF THE SUPER STAGE 2020"}
,"top of the super stage 2024" : {n:"TOP OF THE SUPER STAGE 2024"}
,"11-kaime no colorful m@ster" : {n:"11回目のカラフルマスター"}
,"13-kaime no colorful m@ster" : {n:"13回目のカラフルマスター"}
,"idol m@trix" : {n:"IDOL M@TRIX"}
,"idol m@trix 2" : {n:"IDOL M@TRIX 2"}
,"idol star festiv@l" : {n:"IDOL STAR FESTIV@L"}
,"idol star festiv@l 02" : {n:"IDOL STAR FESTIV@L 02"}
,"idol star festiv@l 03" : {n:"IDOL STAR FESTIV@L 03"}
,"idol star festiv@l 04" : {n:"IDOL STAR FESTIV@L 04"}
,"idol star festiv@l 05" : {n:"IDOL STAR FESTIV@L 05"}
,"idol star festiv@l 06" : {n:"IDOL STAR FESTIV@L 06"}
,"idol star festiv@l 07" : {n:"IDOL STAR FESTIV@L 07"}
,"idol star festiv@l 08" : {n:"IDOL STAR FESTIV@L 08"}
,"idol star festiv@l 09" : {n:"IDOL STAR FESTIV@L 09"}
,"idol star festiv@l 10" : {n:"IDOL STAR FESTIV@L 10"}
,"idol star festiv@l 11" : {n:"IDOL STAR FESTIV@L 11"}
,"idol star festiv@l 12" : {n:"IDOL STAR FESTIV@L 12"}
,"idol star festiv@l 13" : {n:"IDOL STAR FESTIV@L 13"}
,"idol star festiv@l14" : {n:"IDOL STAR FESTIV@L 14"}
,"my best friends" : {n:"MyBestFriends"}
,"mybestfriends10" : {n:"MyBestFriends10"}
,"my best friends 11" : {n:"MyBestFriends11"}
,"mybestfriends11" : {n:"MyBestFriends11"}
,"my best friends 12" : {n:"MyBestFriends12"}
,"mybestfriends13" : {n:"MyBestFriends13"}
,"my best friends 14" : {n:"MyBestFriends14"}
,"my best friends 15" : {n:"MyBestFriends15"}
,"mybestfriends16" : {n:"MyBestFriends16"}
,"my best friends 2" : {n:"MyBestFriends2"}
,"my best friends2" : {n:"MyBestFriends2"}
,"mybestfriends 2" : {n:"MyBestFriends2"}
,"mybestfriends2" : {n:"MyBestFriends2"}
,"mybestfriends4" : {n:"MyBestFriends4"}
,"my best friends 5" : {n:"MyBestFriends5"}
,"mybestfriends5" : {n:"MyBestFriends5"}
,"my best friends 6" : {n:"MyBestFriends6"}
,"mybestfriends6" : {n:"MyBestFriends6"}
,"my best friends 7" : {n:"MyBestFriends7"}
,"mybestfriends7" : {n:"MyBestFriends7"}
,"my best friend 8" : {n:"MyBestFriends8"}
,"my best friends 8" : {n:"MyBestFriends8"}
,"mybestfriends8" : {n:"MyBestFriends8"}
,"my best friends 9" : {n:"MyBestFriends9"}
,"mybestfriends9" : {n:"MyBestFriends9"}
,"the idolm@niax" : {n:"THE iDOLM@NIAX"}
,"idolm@niax2" : {n:"THE iDOLM@NIAX 2"}
,"the idolm@niax 4" : {n:"THE iDOLM@NIAX 4"}
,"the idolm@niax 6" : {n:"THE iDOLM@NIAX 6"}
,"the idolm@niax 7" : {n:"THE iDOLM@NIAX 7"}
,"the idolm@niax 8" : {n:"THE iDOLM@NIAX 8"}
,"the idolm@niax 9" : {n:"THE iDOLM@NIAX 9"}
,"the idolm@niax sp" : {n:"THE iDOLM@NIAX SP"}
,"idolmystar 2009" : {n:"アイドルMySTAR 2009"}
,"idol mystar! 2015" : {n:"アイドルMySTAR 2015"}
,"idol variety" : {n:"アイドルバラエティ"}
,"idolproject" : {n:"アイドルプロジェクト"}
,"idolproject 13" : {n:"アイドルプロジェクト13"}
,"idol project 3" : {n:"アイドルプロジェクト3"}
,"idolproject 4" : {n:"アイドルプロジェクト4"}
,"idolproject 5" : {n:"アイドルプロジェクト5"}
,"idolproject 6" : {n:"アイドルプロジェクト6"}
,"idolproject 7" : {n:"アイドルプロジェクト7"}
,"idolproject 8" : {n:"アイドルプロジェクト8"}
,"colorful master 8" : {n:"カラフルマスター8"}
,"colorful m@ster harmony" : {n:"カラフルマスターHarmony"}
,"colorful m@ster revolution" : {n:"カラフルマスターレボリューション"}
,"colorful master revolution" : {n:"カラフルマスターレボリューション"}
,"colorful m@ster infinity" : {n:"カラマス∞～infinity～"}
,"colormas ∞ ~infinity~" : {n:"カラマス∞～infinity～"}
,"prismstars! -2nd☆star-" : {n:"プリズムスターズ  2nd star"}
,"utahime teien" : {n:"歌姫庭園"}
,"utahime teien 10" : {n:"歌姫庭園10"}
,"utahime teien 11" : {n:"歌姫庭園11"}
,"utahime teien 12" : {n:"歌姫庭園12"}
,"utahime teien 13" : {n:"歌姫庭園13"}
,"utahime teien 14" : {n:"歌姫庭園14"}
,"utahime teien 15" : {n:"歌姫庭園15"}
,"utahime teien 16" : {n:"歌姫庭園16"}
,"utahime teien 17" : {n:"歌姫庭園17"}
,"utahime teien17" : {n:"歌姫庭園17"}
,"utahime teien 18" : {n:"歌姫庭園18"}
,"utahime teien 19" : {n:"歌姫庭園19"}
,"utahime teien 19 -the idol g@rden-" : {n:"歌姫庭園19 -THE IDOL G@RDEN-"}
,"utahime teien 2" : {n:"歌姫庭園2"}
,"utahime teien 20" : {n:"歌姫庭園20"}
,"utahime teien 21" : {n:"歌姫庭園21"}
,"utahime teien 22" : {n:"歌姫庭園22"}
,"utahime teien 23" : {n:"歌姫庭園23"}
,"utahime teien 24" : {n:"歌姫庭園24"}
,"utahime teien 25" : {n:"歌姫庭園25"}
,"utahime teien 26" : {n:"歌姫庭園26"}
,"utahime teien 27" : {n:"歌姫庭園27"}
,"utahime teien 28" : {n:"歌姫庭園28"}
,"utahime teien 29" : {n:"歌姫庭園29"}
,"utahime teien 3" : {n:"歌姫庭園3"}
,"utahime teien 30" : {n:"歌姫庭園30"}
,"utahime teien 31" : {n:"歌姫庭園31"}
,"utahime teien 33" : {n:"歌姫庭園33"}
,"utahime teien 34" : {n:"歌姫庭園34"}
,"utahime teien 35" : {n:"歌姫庭園35"}
,"utahime teien 39" : {n:"歌姫庭園39"}
,"utahime teien 4" : {n:"歌姫庭園4"}
,"utahime teien 40" : {n:"歌姫庭園40"}
,"utahime teien 5" : {n:"歌姫庭園5"}
,"utahime teien 6" : {n:"歌姫庭園6"}
,"utahime teien 7" : {n:"歌姫庭園7"}
,"utahime teien 8" : {n:"歌姫庭園8"}
,"utahime teien 9" : {n:"歌姫庭園9"}
,"shiny star festiv@l" : {n:"SHINY STAR FESTIV@L"}
,"shiny star festiv@l 02" : {n:"SHINY STAR FESTIV@L 02"}
,"shiny star festiv@l 03" : {n:"SHINY STAR FESTIV@L 03"}
,"shiny star festiv@l 04" : {n:"SHINY STAR FESTIV@L 04"}
,"shiny star festiv@l 06" : {n:"SHINY STAR FESTIV@L 06"}
,"shiny star festiv@l 07" : {n:"SHINY STAR FESTIV@L 07"}
,"shiny star festiv@l 08" : {n:"SHINY STAR FESTIV@L 08"}
,"kagayaki festiv@l 2021 fuyu" : {n:"SHINY STAR FESTIV@L 2021冬"}
,"super kagayaki festiv@l2020" : {n:"SUPER SHINY STAR FESTIV@L 2020"}
,"miraclefestiv@l!!" : {n:"MIRACLE FESTIV@L!!"}
,"miracle festiv@l!! 11" : {n:"MIRACLE FESTIV@L!! 11"}
,"miraclefestiv@l!!12" : {n:"MIRACLE FESTIV@L!! 12"}
,"miracle festiv@l!! 13" : {n:"MIRACLE FESTIV@L!! 13"}
,"miraclefestiv@l!!13" : {n:"MIRACLE FESTIV@L!! 13"}
,"miracle festiv@l!! 16" : {n:"MIRACLE FESTIV@L!! 16"}
,"miracle festiv@l!! 17" : {n:"MIRACLE FESTIV@L!! 17"}
,"miracle festiv@l!! 18" : {n:"MIRACLE FESTIV@L!! 18"}
,"miracle festiv@l!! 26" : {n:"MIRACLE FESTIV@L!! 26"}
,"miraclefestiv@l!!3" : {n:"MIRACLE FESTIV@L!! 3"}
,"miraclefestiv@l!! 7" : {n:"MIRACLE FESTIV@L!! 7"}
,"miracle festiv@l!! 9" : {n:"MIRACLE FESTIV@L!! 9"}
,"miraclefestiv@l!!9" : {n:"MIRACLE FESTIV@L!! 9"}
,"miracle festiv@l!! kinkyuu summer2021" : {n:"MIRACLE FESTIV@L!! 緊急SUMMER2021"}
,"miraclefestiv@l!! kinkyuu summer2021" : {n:"MIRACLE FESTIV@L!! 緊急SUMMER2021"}
,"passion! virtu@l stage! 3" : {n:"Passion! VIRTU@L STAGE! 3"}
,"super miracle festiv@l!! 2018" : {n:"SUPER MIRACLE FESTIV@L!! 2018"}
,"super miracle festiv@l!! 2019" : {n:"SUPER MIRACLE FESTIV@L!! 2019"}
,"super miracle festiv@l!! 2025" : {n:"SUPER MIRACLE FESTIV@L!! 2025"}
,"dramatic change" : {n:"ドラマティックチェンジ"}
,"dramatic change 2" : {n:"ドラマティックチェンジ 2"}
,"dramatic change 3" : {n:"ドラマティックチェンジ 3"}
,"dramatic change 4" : {n:"ドラマティックチェンジ 4"}
,"dramatic change osaka" : {n:"ドラマティックチェンジ 大阪"}
,"dramatic change osaka 2" : {n:"ドラマティックチェンジ 大阪2"}
,"dear idol 2" : {n:"DEAR iDOL"}
,"aisubeki idol desushi!!" : {n:"愛スべきアイドルでスシ!!"}
,"aisubeki idol desushi!! 2sarame" : {n:"愛スべきアイドルでスシ!! 2皿目"}
,"aisubeki idol de sushi!! 3sarame" : {n:"愛スべきアイドルでスシ!!3皿目"}
,"million festiv@l" : {n:"MILLION FESTIV@L!!"}
,"million festiv@l!!" : {n:"MILLION FESTIV@L!!"}
,"million festiv@l!! 2" : {n:"MILLION FESTIV@L!! 2"}
,"million festiv@l 3" : {n:"MILLION FESTIV@L!! 3"}
,"million festiv@l!! 04" : {n:"MILLION FESTIV@L!! 4"}
,"million festiv@l 5" : {n:"MILLION FESTIV@L!! 5"}
,"millionly the@ter" : {n:"MILLIONLY THE@TER"}
,"millionly the@ter 4" : {n:"MILLIONLY THE@TER 4"}
,"cinderella festiv@l" : {n:"Cinderella Star Festiv@l"}
,"cinderella star festiv@l" : {n:"Cinderella Star Festiv@l"}
,"cinderella festiv@l2" : {n:"Cinderella Star Festiv@l 02"}
,"cinderella star festiv@l 02" : {n:"Cinderella Star Festiv@l 02"}
,"cinderella star festiv@l 03" : {n:"Cinderella Star Festiv@l 03"}
,"idol survival" : {n:"アイドルサバイバル"}
,"idol survival 2" : {n:"アイドルサバイバル 2"}
,"idol survival 3" : {n:"アイドルサバイバル 3"}
,"idol survival 5" : {n:"アイドルサバイバル 5"}
,"idol survival 7" : {n:"アイドルサバイバル 7"}
,"cinderella ☆ stage" : {n:"シンデレラ☆ステージ"}
,"cinderella stage" : {n:"シンデレラ☆ステージ"}
,"cinderella ☆ stage 10 step" : {n:"シンデレラ☆ステージ 10STEP"}
,"cinderella ☆ stage 11 step" : {n:"シンデレラ☆ステージ 11STEP"}
,"cinderella ☆ stage 12 step" : {n:"シンデレラ☆ステージ 12STEP"}
,"cinderella ☆ stage 13 step" : {n:"シンデレラ☆ステージ 13STEP"}
,"cinderella ☆ stage 2 step" : {n:"シンデレラ☆ステージ 2STEP"}
,"cinderella ☆ stage 3 step" : {n:"シンデレラ☆ステージ 3STEP"}
,"cinderella stage 3step" : {n:"シンデレラ☆ステージ 3STEP"}
,"cinderella ☆ stage 4 step" : {n:"シンデレラ☆ステージ 4STEP"}
,"cinderella stage 4 step" : {n:"シンデレラ☆ステージ 4STEP"}
,"cinderella stage 4step" : {n:"シンデレラ☆ステージ 4STEP"}
,"cinderella ☆ stage 5 step" : {n:"シンデレラ☆ステージ 5STEP"}
,"cinderella stage 5 step" : {n:"シンデレラ☆ステージ 5STEP"}
,"cinderella stage 5step" : {n:"シンデレラ☆ステージ 5STEP"}
,"cinderella ☆ stage 6 step" : {n:"シンデレラ☆ステージ 6STEP"}
,"cinderella ☆ stage 7 step" : {n:"シンデレラ☆ステージ 7STEP"}
,"cinderella stage 07 step" : {n:"シンデレラ☆ステージ 7STEP"}
,"cinderella ☆ stage 8 step" : {n:"シンデレラ☆ステージ 8STEP"}
,"cinderella ☆ stage 9 step" : {n:"シンデレラ☆ステージ 9STEP"}
,"cinderella memories 18" : {n:"シンデレラメモリーズ 18"}
,"cinderella memories 2" : {n:"シンデレラメモリーズ 2"}
,"cinderella memories 4" : {n:"シンデレラメモリーズ 4"}
,"cinderella memories 6" : {n:"シンデレラメモリーズ 6"}
,"cinderella memories 7" : {n:"シンデレラメモリーズ 7"}
,"cool star festiv@l" : {n:"CoolStarFestiv@l"}
,"cool star festiv@l 02" : {n:"CoolStarFestiv@l02"}
,"cute star festiv@l 02" : {n:"CuteStarFestiv@l02"}
,"cute star festiv@l 03" : {n:"CuteStarFestiv@l03"}
,"little cinderella party!" : {n:"リトルシンデレラパーティ！"}
,"little cinderella party! 3" : {n:"リトルシンデレラパーティ！ 3"}
,"marionette angel" : {n:"マリオネットエンジェル"}
,"marionette angel 2013" : {n:"マリオネットエンジェル 2013"}
,"marionetteangel2013" : {n:"マリオネットエンジェル 2013"}
,"aoi utahime -blue diva-" : {n:"蒼い歌姫 -BLUE DIVA-"}
,"aoi utahime -blue diva- 4th style" : {n:"蒼い歌姫 -BLUE DIVA- 4th style"}
,"aoi utahime -blue diva- the final" : {n:"蒼い歌姫 -BLUE DIVA- THE FINAL"}
,"hikiau unmei 11th" : {n:"惹き合う運命11th"}
,"hikiau unmei 13th" : {n:"惹き合う運命13th"}
,"hikiau unmei 2nd" : {n:"惹き合う運命2nd"}
,"hikiau unmei 4th" : {n:"惹き合う運命4th"}
,"hikiau unmei 5th" : {n:"惹き合う運命5th"}
,"hikiau unmei 6th" : {n:"惹き合う運命6th"}
,"hikiau unmei 7th" : {n:"惹き合う運命7th"}
,"hikiau unmei 9th" : {n:"惹き合う運命9th"}
,"azulan gakuen koubaibu" : {n:"アズレン学園購買部"}
,"azulan gakuen koubaibu 12" : {n:"アズレン学園購買部12"}
,"azulan gakuen koubaibu 2" : {n:"アズレン学園購買部2"}
,"azulan gakuen koubaibu 3" : {n:"アズレン学園購買部3"}
,"azulan gakuen koubaibu 6" : {n:"アズレン学園購買部6"}
,"azulan gakuen koubaibu 7" : {n:"アズレン学園購買部7"}
,"azulan gakuen koubaibu 9" : {n:"アズレン学園購買部9"}
,"azulan musou" : {n:"アズレン夢想"}
,"azulan musou 2" : {n:"アズレン夢想 2"}
,"azulan musou 3" : {n:"アズレン夢想 3"}
,"azulan musou 5" : {n:"アズレン夢想 5"}
,"another control" : {n:"アナザーコントロール"}
,"another control 10" : {n:"アナザーコントロール 10"}
,"another control 12" : {n:"アナザーコントロール 12"}
,"another control 2" : {n:"アナザーコントロール 2"}
,"another control 23" : {n:"アナザーコントロール 23"}
,"another control 3" : {n:"アナザーコントロール 3"}
,"another control 4" : {n:"アナザーコントロール 4"}
,"another control 5" : {n:"アナザーコントロール 5"}
,"another control 6" : {n:"アナザーコントロール 6"}
,"another control 7" : {n:"アナザーコントロール 7"}
,"another control 8" : {n:"アナザーコントロール 8"}
,"another control 9" : {n:"アナザーコントロール 9"}
,"atelierfes10" : {n:"アトリエフェス10"}
,"atelierfes3" : {n:"アトリエフェス3"}
,"8 gatsu no himitsu kichi" : {n:"8月の秘密基地"}
,"minna de try 10" : {n:"みんなで☆トライ10"}
,"minna de try11 in ariake shard" : {n:"みんなで☆トライ11in有明シャード"}
,"minna de try12 in ariake shard" : {n:"みんなで☆トライ12in有明シャード"}
,"minna de try 14" : {n:"みんなで☆トライ14"}
,"minna de try 15 in ariake shard" : {n:"みんなで☆トライ15in有明シャード"}
,"minna de try 2 in menshou shard" : {n:"みんなで☆トライ2綿商シャード"}
,"minna de try 3 in kawaguchi shard" : {n:"みんなで☆トライ3川口シャード"}
,"minna de try 4 in ariake shard mini" : {n:"みんなで☆トライ4in有明シャードMINI"}
,"minna de try 6 in ariake shard" : {n:"みんなで☆トライ6in有明シャード"}
,"minna de try 8 in ariake shard" : {n:"みんなで☆トライ8in有明シャード"}
,"minna de try in ariake shard" : {n:"みんなで☆トライin有明シャード"}
,"haruka naru outo" : {n:"遥かなる王都"}
,"haruka naru outo 15" : {n:"遥かなる王都 15"}
,"haruka naru outo ii" : {n:"遥かなる王都 II"}
,"haruka naru outo iii" : {n:"遥かなる王都 III"}
,"haruka naru outo vi" : {n:"遥かなる王都 VI"}
,"zero no hakobune" : {n:"ZEROの方舟"}
,"zero no hakobune osaka" : {n:"ZEROの方舟 大阪"}
,"zero no hakobune 2" : {n:"ZEROの方舟2"}
,"zero no hakobune 03" : {n:"ZEROの方舟3"}
,"zero no hakobune 3" : {n:"ZEROの方舟3"}
,"zero no hakobune 4" : {n:"ZEROの方舟4"}
,"zero no hakobune 5" : {n:"ZEROの方舟5"}
,"zero no hakobune 6" : {n:"ZEROの方舟6"}
,"brilliant days" : {n:"brilliant days"}
,"brilliantdays tsuika kouen" : {n:"brilliant days  追加公演"}
,"brilliant days 10" : {n:"brilliant days 10"}
,"brilliant days 11" : {n:"brilliant days 11"}
,"brilliant days 13" : {n:"brilliant days 13"}
,"brilliant days 16" : {n:"brilliant days 16"}
,"brilliant days 18" : {n:"brilliant days 18"}
,"brilliant days 2" : {n:"brilliant days 2"}
,"brilliant days 21" : {n:"brilliant days 21"}
,"brilliant days 22" : {n:"brilliant days 22"}
,"brilliant days 24" : {n:"brilliant days 24"}
,"brilliant days 25" : {n:"brilliant days 25"}
,"brilliant days 27" : {n:"brilliant days 27"}
,"brilliant days 28" : {n:"brilliant days 28"}
,"brilliant days 3" : {n:"brilliant days 3"}
,"brilliant days 30" : {n:"brilliant days 30"}
,"brilliant days 31" : {n:"brilliant days 31"}
,"brilliant days 33" : {n:"brilliant days 33"}
,"brilliant days 34" : {n:"brilliant days 34"}
,"brilliant days 36" : {n:"brilliant days 36"}
,"brilliant days 38" : {n:"brilliant days 38"}
,"brilliant days 39" : {n:"brilliant days 39"}
,"brilliant days 4" : {n:"brilliant days 4"}
,"brilliant days 41" : {n:"brilliant days 41"}
,"brilliant days 42" : {n:"brilliant days 42"}
,"brilliant days 43" : {n:"brilliant days 43"}
,"brilliant days 46" : {n:"brilliant days 46"}
,"brilliant days 47" : {n:"brilliant days 47"}
,"brilliant days 5" : {n:"brilliant days 5"}
,"brilliant days 52" : {n:"brilliant days 52"}
,"brilliant days 54" : {n:"brilliant days 54"}
,"brilliant days 6" : {n:"brilliant days 6"}
,"brilliant days 9" : {n:"brilliant days 9"}
,"super brilliant days 2017" : {n:"SUPER brilliant days 2017"}
,"super brilliant days 2018" : {n:"SUPER brilliant days 2018"}
,"super brilliant days 2021" : {n:"SUPER brilliant days 2021"}
,"brilliant days 2022" : {n:"SUPER brilliant days 2022"}
,"super brilliant days 2022" : {n:"SUPER brilliant days 2022"}
,"super brilliant days 2022 natsu" : {n:"SUPER brilliant days 2022夏"}
,"super brilliant days 2023" : {n:"SUPER brilliant days 2023"}
,"super brilliant days 2023 natsu" : {n:"SUPER brilliant days 2023夏"}
,"super brilliant days 2024" : {n:"SUPER brilliant days 2024"}
,"super brilliant days 25" : {n:"SUPER brilliant days 25"}
,"superbrilliantdays25" : {n:"SUPER brilliant days 25"}
,"brilliant days tandoku kouen 2019" : {n:"SUPER brilliant days 単独公演2019"}
,"yumeiro ★ symphony" : {n:"ゆめいろ★シンフォニー"}
,"yumeiro ★ symphony 2" : {n:"ゆめいろ★シンフォニー 2"}
,"yumeiro ★ symphony 3" : {n:"ゆめいろ★シンフォニー 3"}
,"yumeiro ★ symphony 4" : {n:"ゆめいろ★シンフォニー 4"}
,"yumeiro ★ symphony 5" : {n:"ゆめいろ★シンフォニー 5"}
,"yumeiro symphony 5" : {n:"ゆめいろ★シンフォニー 5"}
,"yumeiro ★ symphony osaka" : {n:"ゆめいろ★シンフォニー 大阪"}
,"yumeiro symphony osaka" : {n:"ゆめいろ★シンフォニー 大阪"}
,"kimi ni okuru jounetsu no bouquet jb2023" : {n:"君に送る情熱のブーケ JB2023"}
,"kimi ni okuru jounetsu no buuke jb2023" : {n:"君に送る情熱のブーケ JB2023"}
,"kimi ni okuru jounetsu no bouquet jb2024" : {n:"君に送る情熱のブーケ JB2024"}
,"boku dake ni kikasete rinki no melody dr2021" : {n:"僕だけに聞かせて悋気のMelody DR2021"}
,"arishi hi yo, junzentare jb 2023" : {n:"在りし日よ、純然たれ JB2023"}
,"junjou karen na ii biyori 4" : {n:"純情可憐ないい日和 4"}
,"minna no ketsui" : {n:"みんなの決意"}
,"minna no ketsui 2" : {n:"みんなの決意2"}
,"fff" : {n:"FAN☆FUN☆FANTASISTA"}
,"fan★fun★fantasista 2" : {n:"FAN☆FUN☆FANTASISTA 2"}
,"fff2" : {n:"FAN☆FUN☆FANTASISTA 2"}
,"fff3" : {n:"FAN☆FUN☆FANTASISTA 3"}
,"fan★fun★fantasista 4" : {n:"FAN☆FUN☆FANTASISTA 4"}
,"fff4" : {n:"FAN☆FUN☆FANTASISTA 4"}
,"kanazawa seishun cup 2" : {n:"金沢青春カップ2"}
,"seishun cup" : {n:"青春カップ"}
,"seishun cup 10" : {n:"青春カップ10"}
,"seishun cup 11" : {n:"青春カップ11"}
,"seishun cup 13" : {n:"青春カップ13"}
,"seishun cup 14" : {n:"青春カップ14"}
,"seishun cup 15" : {n:"青春カップ15"}
,"seishun cup 2" : {n:"青春カップ2"}
,"seishun cup 21" : {n:"青春カップ21"}
,"seishun cup 26" : {n:"青春カップ26"}
,"seishun cup 3" : {n:"青春カップ3"}
,"seishun cup 4" : {n:"青春カップ4"}
,"seishun cup 5" : {n:"青春カップ5"}
,"seishun cup 6" : {n:"青春カップ6"}
,"seishun cup 7" : {n:"青春カップ7"}
,"seishun cup 8" : {n:"青春カップ8"}
,"seishun cup 9" : {n:"青春カップ9"}
,"seishun cup osaka 16" : {n:"大阪青春カップ16"}
,"seishun cup osaka 4" : {n:"大阪青春カップ4"}
,"seishun cup osaka 7" : {n:"大阪青春カップ7"}
,"ka no moto ni tsudoe" : {n:"彼のもとに集へ"}
,"ka no moto ni tsudoe 2" : {n:"彼のもとに集へ2"}
,"ka no moto ni tsudoe 3" : {n:"彼のもとに集へ3"}
,"happy prince party" : {n:"ハッピー☆プリンスパーティ"}
,"happy prince party 2" : {n:"ハッピー☆プリンスパーティ2"}
,"love song lesson" : {n:"ラブソング☆レッスン♪"}
,"love song ☆ lesson ♪ 11th" : {n:"ラブソング☆レッスン♪ 11th"}
,"love song ☆ lesson ♪ 13th" : {n:"ラブソング☆レッスン♪ 13th"}
,"love song ☆ lesson ♪ 14th" : {n:"ラブソング☆レッスン♪ 14th"}
,"love song ☆ lesson ♪ 2 nd" : {n:"ラブソング☆レッスン♪ 2nd"}
,"love song lesson 2nd" : {n:"ラブソング☆レッスン♪ 2nd"}
,"love song ☆ lesson ♪ 3 rd" : {n:"ラブソング☆レッスン♪ 3rd"}
,"love song ☆ lesson ♪ 3rd" : {n:"ラブソング☆レッスン♪ 3rd"}
,"love song lesson 3rd" : {n:"ラブソング☆レッスン♪ 3rd"}
,"love song ☆ lesson ♪ 4th" : {n:"ラブソング☆レッスン♪ 4th"}
,"love song ☆ lesson ♪ 5th" : {n:"ラブソング☆レッスン♪ 5th"}
,"love song ☆ lesson ♪ 6th" : {n:"ラブソング☆レッスン♪ 6th"}
,"love song lesson 6th" : {n:"ラブソング☆レッスン♪ 6th"}
,"love song ☆ lesson ♪ 7th" : {n:"ラブソング☆レッスン♪ 7th"}
,"love song ☆ lesson ♪ 8 th" : {n:"ラブソング☆レッスン♪ 8th"}
,"love song ☆ lesson ♪ 8th" : {n:"ラブソング☆レッスン♪ 8th"}
,"love song lesson 8th" : {n:"ラブソング☆レッスン♪ 8th"}
,"love song ☆ lesson ♪ 9th" : {n:"ラブソング☆レッスン♪ 9th"}
,"love song ☆ lesson♪ osaka" : {n:"ラブソング☆レッスン♪ 大阪"}
,"pre★con" : {n:"プリ★コン"}
,"pre★con 2" : {n:"プリ★コン2"}
,"pre★con 3" : {n:"プリ★コン3"}
,"quartet score 4" : {n:"カルテット☆スコア♪ 4"}
,"quartet score 5" : {n:"カルテット☆スコア♪ 5"}
,"quartet ☆ score ♪ 6" : {n:"カルテット☆スコア♪ 6"}
,"quartet score 6" : {n:"カルテット☆スコア♪ 6"}
,"circle ultra summer fest" : {n:"サークルウルトラサマーフェスタ"}
,"circle ultra summer festa" : {n:"サークルウルトラサマーフェスタ"}
,"dai 2 kai ultra summer festa" : {n:"第2回ウルトラサマーフェスタ"}
,"dai 2-kai ultra summer festa" : {n:"第2回ウルトラサマーフェスタ"}
,"dai 3-kai ultra summer festa" : {n:"第3回ウルトラサマーフェスタ"}
,"ecoket" : {n:"ECOケット"}
,"ecoket 3" : {n:"ECOケット 3"}
,"ecoket 4" : {n:"ECOケット 4"}
,"ecoket 5" : {n:"ECOケット 5"}
,"daijoubuda, mondai nai." : {n:"大丈夫だ、問題ない。"}
,"daijoubu da, mondai nai. 16" : {n:"大丈夫だ、問題ない。16"}
,"daijoubu da, mondai nai. 17" : {n:"大丈夫だ、問題ない。17"}
,"daijoubu da, mondai nai. 18" : {n:"大丈夫だ、問題ない。18"}
,"daijoubuda, mondai nai 9" : {n:"大丈夫だ、問題ない。9"}
,"10 maji extra majokai he youkoso!" : {n:"10マジextra 魔女界へようこそ！"}
,"ojamajo festa" : {n:"おジャ魔女ふぇすた"}
,"6tsugo no tamashii forever" : {n:"6つ子の魂☆フォーエバー"}
,"mutsugo no tamashii forever 3" : {n:"6つ子の魂☆フォーエバー 3"}
,"6tsugo no tamashii forever 4" : {n:"6つ子の魂☆フォーエバー 4"}
,"mutsugo no tamashii forever 4" : {n:"6つ子の魂☆フォーエバー 4"}
,"iikara sukida to icchimae! 6" : {n:"いいから好きだと言っちまえ！6"}
,"iikara sukida to icchimae! 7" : {n:"いいから好きだと言っちまえ！7"}
,"iikara sukida to icchimae! hoshi ni negai o. 2022" : {n:"いいから好きだと言っちまえ！星願2022"}
,"kahou wa nete matsu" : {n:"家宝は寝て松"}
,"kahou wa chou nete matsu 2020gw" : {n:"家宝は寝て松　2020GW"}
,"kahou wa nete matsu 10" : {n:"家宝は寝て松10"}
,"kahou wa nete matsu 12" : {n:"家宝は寝て松12"}
,"kahou wa nete matsu 14" : {n:"家宝は寝て松14"}
,"kahou wa nete matsu 17" : {n:"家宝は寝て松17"}
,"kahou wa nete matsu 18" : {n:"家宝は寝て松18"}
,"kahou wa nete matsu 20" : {n:"家宝は寝て松20"}
,"kahou wa nete matsu 21" : {n:"家宝は寝て松21	"}
,"kahou wa nete matsu 22" : {n:"家宝は寝て松22"}
,"kahou wa nete matsu 23" : {n:"家宝は寝て松23"}
,"kahou wa nete matsu 24" : {n:"家宝は寝て松24"}
,"kahou wa nete matsu 26" : {n:"家宝は寝て松26"}
,"kahou wa nete matsu 28" : {n:"家宝は寝て松28"}
,"kahou wa nete matsu 30" : {n:"家宝は寝て松30"}
,"kahou wa nete matsu 33" : {n:"家宝は寝て松33"}
,"kahou wa nete matsu 38" : {n:"家宝は寝て松38"}
,"kahou wa nete matsu 4" : {n:"家宝は寝て松4"}
,"kahou wa nete matsu 41" : {n:"家宝は寝て松41"}
,"kahou wa nete matsu 6" : {n:"家宝は寝て松6"}
,"kahou wa nete matsu 9" : {n:"家宝は寝て松9"}
,"kahou wa nete matsu haru21" : {n:"家宝は寝て松HARU21"}
,"kahou wa nete matsu spark 2017" : {n:"家宝は寝て松SPARK2017"}
,"kahou wa nete matsu spark2017" : {n:"家宝は寝て松SPARK2017"}
,"kahou wa nete matsu spark 2019" : {n:"家宝は寝て松SPARK2019"}
,"kahou wa nete matsu spark2019" : {n:"家宝は寝て松SPARK2019"}
,"kahou wa nete matsu spark 11" : {n:"家宝は寝て松スパーク11"}
,"kahou wa nete matsu shunmin 2017" : {n:"家宝は寝て松春眠2017"}
,"kahou wa nete matsu shunmin 2018" : {n:"家宝は寝て松春眠2018"}
,"kahou wa nete matsu shunmin 2019" : {n:"家宝は寝て松春眠2019"}
,"kahou wa nete matsu shunmin 2020" : {n:"家宝は寝て松春眠2020"}
,"kahou wa nete matsu fukuoka40" : {n:"家宝は寝て松福岡40	"}
,"kahou wa chou nete matsu 2017" : {n:"家宝は超寝て松2017"}
,"kahou wa chou nete matsu 2018" : {n:"家宝は超寝て松2018"}
,"kahou wa chou nete matsu 2019" : {n:"家宝は超寝て松2019"}
,"kahou wa chou nete matsu 2022 natsuyasumi" : {n:"家宝は超寝て松2022夏休み"}
,"kahou wa chou nete matsu 25" : {n:"家宝は超寝て松25"}
,"kahou wa chou nete matsu kansai 2017" : {n:"家宝は超寝て松関西2017"}
,"kahou wa chou nete matsu kansai 2018" : {n:"家宝は超寝て松関西2018"}
,"kahou wa chou nete matsu kansai 22" : {n:"家宝は超寝て松関西22"}
,"atsuatsu sweetodo live" : {n:"あつあつスウィーとどライブ"}
,"atsuatsu sweetodo live 2" : {n:"あつあつスウィーとどライブ2"}
,"aiiro color mapping" : {n:"あいいろカラーマッピング"}
,"aiiro color mapping osaka 2" : {n:"あいいろカラーマッピング 大阪2"}
,"aiiro color mapping 3" : {n:"あいいろカラーマッピング3"}
,"onii-chan to issho!" : {n:"お兄ちゃんといっしょ！"}
,"onii-chan to issho! 2" : {n:"お兄ちゃんといっしょ！2"}
,"onii-chan to issho! 3" : {n:"お兄ちゃんといっしょ！3"}
,"onii-chan to issho! 4" : {n:"お兄ちゃんといっしょ！4"}
,"onii-chan to issho! 5" : {n:"お兄ちゃんといっしょ！5"}
,"onii-chan to issho! 6" : {n:"お兄ちゃんといっしょ！6"}
,"onii-chan to issho! 7" : {n:"お兄ちゃんといっしょ！7"}
,"stand up! 11" : {n:"スタンドアップ！11"}
,"stand up! 12" : {n:"スタンドアップ！12"}
,"stand up! 13" : {n:"スタンドアップ！13"}
,"stand up! 14" : {n:"スタンドアップ！14"}
,"stand up! 16" : {n:"スタンドアップ！16"}
,"stand up! 22" : {n:"スタンドアップ！22"}
,"stand up! 24" : {n:"スタンドアップ！24"}
,"stand up! 25" : {n:"スタンドアップ！25"}
,"stand up! 26" : {n:"スタンドアップ！26"}
,"stand up! 27" : {n:"スタンドアップ！27"}
,"stand up! 28" : {n:"スタンドアップ！28"}
,"stand up! 29" : {n:"スタンドアップ！29"}
,"stand up! 3" : {n:"スタンドアップ！3"}
,"stand up! 31" : {n:"スタンドアップ！31"}
,"stand up! 4" : {n:"スタンドアップ！4"}
,"stand up! 5" : {n:"スタンドアップ！5"}
,"stand up! 6" : {n:"スタンドアップ！6"}
,"stand up! 8" : {n:"スタンドアップ！8"}
,"stand up! 9" : {n:"スタンドアップ！9"}
,"panzer vor!" : {n:"ぱんっあ☆ふぉー！"}
,"panzer vor! 10" : {n:"ぱんっあ☆ふぉー！ １０"}
,"panzer vor! 11" : {n:"ぱんっあ☆ふぉー！ １１"}
,"panzer vor! 12" : {n:"ぱんっあ☆ふぉー！ １２"}
,"ぱんっあ☆ふぉー!12" : {n:"ぱんっあ☆ふぉー！ １２"}
,"panzer vor! 13" : {n:"ぱんっあ☆ふぉー！ １３"}
,"panzer vor! 14" : {n:"ぱんっあ☆ふぉー！ １４"}
,"panzer vor! 15" : {n:"ぱんっあ☆ふぉー！ １５"}
,"panzer vor! 17" : {n:"ぱんっあ☆ふぉー！ １７"}
,"panzer vor! 18" : {n:"ぱんっあ☆ふぉー！ １８"}
,"panzer vor! 2" : {n:"ぱんっあ☆ふぉー！ ２"}
,"panzer vor! 20" : {n:"ぱんっあ☆ふぉー！ ２０"}
,"panzer vor! 21" : {n:"ぱんっあ☆ふぉー！ ２１"}
,"panzer vor! 22" : {n:"ぱんっあ☆ふぉー！ ２２"}
,"panzer vor! 23" : {n:"ぱんっあ☆ふぉー！ ２３"}
,"panzer vor! 27" : {n:"ぱんっあ☆ふぉー！ ２７"}
,"panzer vor! 28" : {n:"ぱんっあ☆ふぉー！ ２８"}
,"panzer vor! 33" : {n:"ぱんっあ☆ふぉー！ ３３"}
,"panzer vor! 36" : {n:"ぱんっあ☆ふぉー！ ３６"}
,"panzer vor! 42" : {n:"ぱんっあ☆ふぉー！ ４２"}
,"panzer vor! 44" : {n:"ぱんっあ☆ふぉー！ ４４"}
,"panzer vor! 46" : {n:"ぱんっあ☆ふぉー！ ４６"}
,"panzer vor! 6" : {n:"ぱんっあ☆ふぉー！ ６"}
,"panzer vor! 7" : {n:"ぱんっあ☆ふぉー！ ７"}
,"panzer vor! 8" : {n:"ぱんっあ☆ふぉー！ ８"}
,"panzer vor! 9" : {n:"ぱんっあ☆ふぉー！ ９"}
,"panzer girls!" : {n:"パンツァーガールズ！"}
,"panzer girls! 10" : {n:"パンツァーガールズ！10"}
,"panzer girls! 17" : {n:"パンツァーガールズ！17"}
,"panzer girls! 3" : {n:"パンツァーガールズ！3"}
,"panzer girls! 36" : {n:"パンツァーガールズ！36"}
,"panzer girls! 7" : {n:"パンツァーガールズ！7"}
,"panzer girls! 8" : {n:"パンツァーガールズ！8"}
,"panzer girls! 9" : {n:"パンツァーガールズ！9"}
,"glorious sp2023" : {n:"グロリアス SP2023"}
,"g spirits" : {n:"G魂"}
,"g spirits sen no hana" : {n:"G魂 戦ノ華"}
,"g spirits sen no hana 2" : {n:"G魂 戦ノ華 2"}
,"g spirits sen no hana 4" : {n:"G魂 戦ノ華 4"}
,"g spirits chou sen no hana 2018" : {n:"G魂 超戦ノ華2018"}
,"g spirits 13" : {n:"G魂13"}
,"g spirits 4" : {n:"G魂4"}
,"g spirits 5" : {n:"G魂5"}
,"chou g spirits 2023" : {n:"超G魂 2023"}
,"chou g spirits 2023 natsu" : {n:"超G魂 2023夏"}
,"qmaket" : {n:"QUIZ MAGIC MARKET"}
,"quiz magic market" : {n:"QUIZ MAGIC MARKET"}
,"qmaket2" : {n:"QUIZ MAGIC MARKET 2"}
,"qmaket special" : {n:"QUIZ MAGIC MARKET SPECIAL"}
,"gataket 77" : {n:"ガタケット77"}
,"graket 2" : {n:"グラケット2"}
,"graket 3" : {n:"グラケット3"}
,"graket 5" : {n:"グラケット5"}
,"graket 6" : {n:"グラケット6"}
,"graket 8" : {n:"グラケット8"}
,"fata grande kikuusai" : {n:"ファータグランデ騎空祭"}
,"fata grande kikuusai 2" : {n:"ファータグランデ騎空祭2"}
,"zenkuu no chou hasha 2019" : {n:"全空の超覇者 2019"}
,"zenkuu no chouhasha 2019" : {n:"全空の超覇者 2019"}
,"zenkuu no hasha 2019" : {n:"全空の超覇者 2019"}
,"zenkuu no hasha 10" : {n:"全空の覇者 10"}
,"zenkuu no hasha 11" : {n:"全空の覇者 11"}
,"zenkuu no hasha 12" : {n:"全空の覇者 12"}
,"zenkuu no hasha 14" : {n:"全空の覇者 14"}
,"zenkuu no hasha 15" : {n:"全空の覇者 15"}
,"zenkuu no hasha 2" : {n:"全空の覇者 2"}
,"zenkuu no hasha 3" : {n:"全空の覇者 3"}
,"zenkuu no hasha 5" : {n:"全空の覇者 5"}
,"zenkuu no hasha 6" : {n:"全空の覇者 6"}
,"zenkuu no hasha 7" : {n:"全空の覇者 7"}
,"zenkuu no hasha 8" : {n:"全空の覇者 8"}
,"japariket" : {n:"ジャパリケット"}
,"japariket 2" : {n:"ジャパリケット2"}
,"japariket 3" : {n:"ジャパリケット3"}
,"friends chihou 10" : {n:"フレンズチホー10"}
,"friends chihou 16" : {n:"フレンズチホー16"}
,"friends chihou 27" : {n:"フレンズチホー27"}
,"friends chihou 8" : {n:"フレンズチホー8"}
,"dai 1 kai genshiken & kujibiki unbalance omoshirokatta kaigi" : {n:"第一回げんしけん＆くじびきアンバランス面白かった会議"}
,"full code 13" : {n:"FULLCODE 13"}
,"full code 8" : {n:"FULLCODE 8"}
,"super full code 2019" : {n:"SUPER FULLCODE 2019"}
,"geass turbo" : {n:"ギアスターボ"}
,"geass turbo 14" : {n:"ギアスターボ14"}
,"geass turbo 9" : {n:"ギアスターボ9"}
,"chou kogane angou 2019" : {n:"超黄金暗号 2019"}
,"chou kogane angou 2020" : {n:"超黄金暗号 2020"}
,"dasshutsu fukana koi no ori dr2021" : {n:"脱出不可な恋の檻 DR2021"}
,"dasshutsu fukana koi no ori dr2023" : {n:"脱出不可な恋の檻 DR2023"}
,"dai kanransha no choujou de jb2023" : {n:"大観覧車の頂上で JB2023"}
,"dai kanransha no choujou de hoshi ni negai o. 2022" : {n:"大観覧車の頂上で 星願2022"}
,"asakusa zanmai" : {n:"あさくさ三昧"}
,"asakusa zanmai 2" : {n:"あさくさ三昧2"}
,"golden stars" : {n:"Golden Stars"}
,"golden stars 2" : {n:"Golden Stars 2"}
,"golden stars 6" : {n:"Golden Stars 6"}
,"the world" : {n:"ザ・ワールド"}
,"the world 10" : {n:"ザ・ワールド 10"}
,"the world 12" : {n:"ザ・ワールド 12"}
,"the world 13" : {n:"ザ・ワールド 13"}
,"the world 14" : {n:"ザ・ワールド 14"}
,"the world 16" : {n:"ザ・ワールド 16"}
,"the world 17" : {n:"ザ・ワールド 17"}
,"the world 19" : {n:"ザ・ワールド 19"}
,"the world 21" : {n:"ザ・ワールド 21"}
,"za waarudo 22" : {n:"ザ・ワールド 22"}
,"the world 26" : {n:"ザ・ワールド 26"}
,"the world 32" : {n:"ザ・ワールド 32"}
,"the world 35" : {n:"ザ・ワールド 35"}
,"the world 4" : {n:"ザ・ワールド 4"}
,"the world 5" : {n:"ザ・ワールド 5"}
,"the world 7" : {n:"ザ・ワールド 7"}
,"the world 8" : {n:"ザ・ワールド 8"}
,"the world 9" : {n:"ザ・ワールド 9"}
,"super the world 2017" : {n:"スーパー・ザ・ワールド 2017"}
,"super the world 2018" : {n:"スーパー・ザ・ワールド 2018"}
,"super the world 2019" : {n:"スーパー・ザ・ワールド 2019"}
,"super the world 2021" : {n:"スーパー・ザ・ワールド 2021"}
,"super the world 25" : {n:"スーパー・ザ・ワールド 2025"}
,"orarero splash 11" : {n:"オラレロスプラッシュ 11"}
,"orarero splash 4" : {n:"オラレロスプラッシュ 4"}
,"orarero splash 5" : {n:"オラレロスプラッシュ 5"}
,"orarero splash 6" : {n:"オラレロスプラッシュ 6"}
,"orarero splash 7" : {n:"オラレロスプラッシュ 7"}
,"orarero splash 9" : {n:"オラレロスプラッシュ 9"}
,"orarero splash osaka" : {n:"オラレロスプラッシュ OSAKA"}
,"golden blood west 3" : {n:"Golden Blood WEST 第3部"}
,"golden blood west 5" : {n:"Golden Blood WEST 第5部"}
,"golden blood west 8" : {n:"Golden Blood WEST 第8部"}
,"golden blood 10" : {n:"Golden Blood 第10部"}
,"golden blood10" : {n:"Golden Blood 第10部"}
,"golden blood 11" : {n:"Golden Blood 第11部"}
,"golden blood 13" : {n:"Golden Blood 第13部"}
,"golden blood 14" : {n:"Golden Blood 第14部"}
,"golden blood 15" : {n:"Golden Blood 第15部"}
,"golden blood 16" : {n:"Golden Blood 第16部"}
,"golden blood 17" : {n:"Golden Blood 第17部"}
,"golden blood 18" : {n:"Golden Blood 第18部"}
,"golden blood 19" : {n:"Golden Blood 第19部"}
,"golden blood 5" : {n:"Golden Blood 第5部"}
,"golden blood 6" : {n:"Golden Blood 第6部"}
,"golden blood 8" : {n:"Golden Blood 第8部"}
,"golden blood 9" : {n:"Golden Blood 第9部"}
,"golden blood nagoya" : {n:"Golden Blood 名古屋"}
,"sweet scramble" : {n:"SWEET SCRAMBLE"}
,"sweet scramble 2" : {n:"SWEET SCRAMBLE 2nd"}
,"sweet scramble 2nd" : {n:"SWEET SCRAMBLE 2nd"}
,"splaket 12" : {n:"スプラケット12"}
,"splaket 19" : {n:"スプラケット19"}
,"splaket 2" : {n:"スプラケット2"}
,"splaket 20" : {n:"スプラケット20"}
,"splaket 22" : {n:"スプラケット22"}
,"splaket 24" : {n:"スプラケット24"}
,"splaket 4" : {n:"スプラケット4"}
,"splaket 6" : {n:"スプラケット6"}
,"splaket 7" : {n:"スプラケット7"}
,"zombie land kamata" : {n:"ゾンビィランドカマタ"}
,"zombie land kamata in yokohama" : {n:"ゾンビィランドカマタ in横浜"}
,"zombie land kamata 2" : {n:"ゾンビィランドカマタ2"}
,"zombie land kamata 3" : {n:"ゾンビィランドカマタ3"}
,"brave adventure" : {n:"BRAVE ADVENTURE"}
,"brave adventure 2" : {n:"BRAVE ADVENTURE 2"}
,"super brave adventure 2022" : {n:"SUPER BRAVE ADVENTURE 2022"}
,"super brave adventure 2024" : {n:"SUPER BRAVE ADVENTURE 2024"}
,"diamond rainbow2" : {n:"Diamond Rainbow2"}
,"diamondrainbow3" : {n:"Diamond Rainbow3"}
,"diamond rainbow4" : {n:"Diamond Rainbow4"}
,"winning shot" : {n:"ウイニングショット"}
,"winning shot 2" : {n:"ウイニングショット 2"}
,"winning shot 3" : {n:"ウイニングショット 3"}
,"winning shot 4" : {n:"ウイニングショット 4"}
,"winning shot 5" : {n:"ウイニングショット 5"}
,"winning shot 7" : {n:"ウイニングショット 7"}
,"winning shot 9" : {n:"ウイニングショット 9"}
,"winning shot haru21" : {n:"ウイニングショットHARU21"}
,"super winning shot 2019" : {n:"スーパーウイニングショット 2019"}
,"heartmeet southpaw 2" : {n:"ハートミート・サウスポー2"}
,"heartmeet southpaw 3" : {n:"ハートミート・サウスポー3"}
,"heartmeet southpaw 4" : {n:"ハートミート・サウスポー4"}
,"heartmeet southpaw 5" : {n:"ハートミート・サウスポー5"}
,"heartmeet southpaw 6" : {n:"ハートミート・サウスポー6"}
,"heartmeet southpaw 8" : {n:"ハートミート・サウスポー8"}
,"super break shot! 2020" : {n:"スーパーブレイクショット! 2020"}
,"break shot! 10" : {n:"ブレイクショット! 10"}
,"break shot! 11" : {n:"ブレイクショット! 11"}
,"break shot! 15" : {n:"ブレイクショット! 15"}
,"break shot! 16" : {n:"ブレイクショット! 16"}
,"break shot! 2" : {n:"ブレイクショット! 2"}
,"break shot! 3" : {n:"ブレイクショット! 3"}
,"break shot! 4" : {n:"ブレイクショット! 4"}
,"break shot! 5" : {n:"ブレイクショット! 5"}
,"break shot! 7" : {n:"ブレイクショット! 7"}
,"break shot! 8" : {n:"ブレイクショット! 8"}
,"break shot! 9" : {n:"ブレイクショット! 9"}
,"gakuen trial" : {n:"学園トライアル"}
,"gakuen trial shingakki special" : {n:"学園トライアル 新学期スペシャル"}
,"gakuen trial osaka 11" : {n:"学園トライアル 大阪11"}
,"gakuen trial nagoya" : {n:"学園トライアル 名古屋"}
,"gakuen trial 1.5 kagai jugyou" : {n:"学園トライアル1.5課外授業"}
,"gakuen trial 12" : {n:"学園トライアル12"}
,"gakuen trial 2" : {n:"学園トライアル2"}
,"gakuen trial 3" : {n:"学園トライアル3"}
,"gakuen trial 5" : {n:"学園トライアル5"}
,"gakuen trial 6" : {n:"学園トライアル6"}
,"mad hysteria 10" : {n:"mad hysteria 10"}
,"mad hysteria 2" : {n:"mad hysteria 2"}
,"mad hysteria 3" : {n:"mad hysteria 3"}
,"mad hysteria 4" : {n:"mad hysteria 4"}
,"mad hysteria 5" : {n:"mad hysteria 5"}
,"mad hysteria 6" : {n:"mad hysteria 6"}
,"mad hysteria 7" : {n:"mad hysteria 7"}
,"mad hysteria 9" : {n:"mad hysteria 9"}
,"chou mad hysteria 2022" : {n:"超 mad histeria 2022"}
,"beckon of the mirror" : {n:"Beckon of the Mirror"}
,"beckon of the mirror 10" : {n:"Beckon of the Mirror 10"}
,"beckon of the mirror 11" : {n:"Beckon of the Mirror 11"}
,"beckon of the mirror 13" : {n:"Beckon of the Mirror 13"}
,"beckon of the mirror 14" : {n:"Beckon of the Mirror 14"}
,"beckon of the mirror 16" : {n:"Beckon of the Mirror 16"}
,"beckon of the mirror 17" : {n:"Beckon of the Mirror 17"}
,"beckon of the mirror 18" : {n:"Beckon of the Mirror 18"}
,"beckon of the mirror 19" : {n:"Beckon of the Mirror 19"}
,"beckon of the mirror 2" : {n:"Beckon of the Mirror 2"}
,"beckon of the mirror 22" : {n:"Beckon of the Mirror 22"}
,"beckon of the mirror 25" : {n:"Beckon of the Mirror 25"}
,"beckon of the mirror 3" : {n:"Beckon of the Mirror 3"}
,"beckon of the mirror 5" : {n:"Beckon of the Mirror 5"}
,"beckon of the mirror 6" : {n:"Beckon of the Mirror 6"}
,"beckon of the mirror 8" : {n:"Beckon of the Mirror 8"}
,"beckon of the mirror 9" : {n:"Beckon of the Mirror 9"}
,"beckon of the mirror zero" : {n:"Beckon of the Mirror ZERO"}
,"chou chou beckon of the mirror 2021 natsu" : {n:"超Beckon of the Mirror 2021夏"}
,"chou beckon of the mirror 2021 tokyo" : {n:"超Beckon of the Mirror 2021東京"}
,"chou beckon of the mirror 2022" : {n:"超Beckon of the Mirror 2022"}
,"chou beckon of the mirror 2023" : {n:"超Beckon of the Mirror 2023"}
,"juusha to shujin o koeta saki 4" : {n:"従者と主人を越えた先 4"}
,"juusha to shujin o koeta saki dr2021" : {n:"従者と主人を越えた先 DR2021"}
,"juusha to shujin o koeta saki jb2023" : {n:"従者と主人を越えた先 JB2023"}
,"amakute tsurai koigokoro hoshi ni negai o. 2022" : {n:"甘くて辛い恋心 星願2022"}
,"kimagure kinoko hunting 3" : {n:"気まぐれキノコハンティング 3"}
,"kimagure kinoko hunting 4" : {n:"気まぐれキノコハンティング 4"}
,"kimagure kinoko hunting dr2021" : {n:"気まぐれキノコハンティング DR2021"}
,"kimagure kinoko hunting dr2023" : {n:"気まぐれキノコハンティング DR2023"}
,"kimagure kinoko hunting jb2023" : {n:"気まぐれキノコハンティング JB2023"}
,"tales kitchen vi" : {n:"テイルズキッチンⅵ"}
,"tales kitchen in nagoya iii" : {n:"テイルズキッチンin名古屋ⅲ"}
,"tales link" : {n:"テイルズリンク"}
,"tales link 10" : {n:"テイルズリンク10"}
,"tales link 11" : {n:"テイルズリンク11"}
,"tales link 15" : {n:"テイルズリンク15"}
,"tales link 17" : {n:"テイルズリンク17"}
,"tales link 2" : {n:"テイルズリンク2"}
,"tales link 20" : {n:"テイルズリンク20"}
,"tales link 23" : {n:"テイルズリンク23"}
,"tales link 27" : {n:"テイルズリンク27"}
,"tales link 29" : {n:"テイルズリンク29"}
,"tales link 3" : {n:"テイルズリンク3"}
,"tales link 4" : {n:"テイルズリンク4"}
,"tales link 5" : {n:"テイルズリンク5"}
,"テイルズリンク5" : {n:"テイルズリンク5"}
,"tales link 6" : {n:"テイルズリンク6"}
,"tales link 9" : {n:"テイルズリンク9"}
,"tales saien 14" : {n:"テイルズ菜園14"}
,"tales saien 30" : {n:"テイルズ菜園30"}
,"tales saien 40" : {n:"テイルズ菜園40"}
,"zeals kitchen doushi kenbunroku 2" : {n:"Zeals Kitchen 導師見聞録 2"}
,"zeals kitchen doushi kenbunroku 3" : {n:"Zeals Kitchen 導師見聞録 3"}
,"zeals kitchen doushi kenbunroku 4" : {n:"Zeals Kitchen 導師見聞録 4"}
,"zeals kitchen doushi kenbunroku 6" : {n:"Zeals Kitchen 導師見聞録 6"}
,"digicolle11" : {n:"DIGIコレ11"}
,"digicolle7" : {n:"DIGIコレ7"}
,"chou digi colle 2023" : {n:"超DIGIコレ 2023"}
,"zenkoku taikai gs ω 2023" : {n:"全国大会GS ω 2023"}
,"dai 12-kai zenkoku taikai gs" : {n:"第12回全国大会GS"}
,"dai 1-kai zenkoku taikai gs" : {n:"第1回全国大会GS"}
,"dai-8-kai zenkoku taikai gs" : {n:"第8回全国大会GS"}
,"ikebukuro crossroads × 12" : {n:"池袋クロスロード ×12"}
,"ikebukuro crossroads × 2" : {n:"池袋クロスロード ×2"}
,"ikebukuro crossroads × 3" : {n:"池袋クロスロード ×3"}
,"ikebukuro crossroads × 4" : {n:"池袋クロスロード ×4"}
,"ikebukuro crossroads × 5" : {n:"池袋クロスロード ×5"}
,"ikebukuro crossroads × 6" : {n:"池袋クロスロード ×6"}
,"ikebukuro crossroads westgate × 5" : {n:"池袋クロスロード WESTGATE×5"}
,"yousei genki!" : {n:"ようせいげんき！"}
,"yousei genki! 10" : {n:"ようせいげんき！10"}
,"yousei genki! 12" : {n:"ようせいげんき！12"}
,"yousei genki! 8" : {n:"ようせいげんき！8"}
,"yuuenjaku 2" : {n:"東方遊宴雀 2"}
,"shoujo senryaku saizensen" : {n:"少女戦略最前線"}
,"shoujo senryaku saizensen 02" : {n:"少女戦略最前線 02"}
,"shoujo senryaku saizensen 03" : {n:"少女戦略最前線 03"}
,"shoujo senryaku saizensen 04" : {n:"少女戦略最前線 04"}
,"shoujo senryaku saizensen revenge" : {n:"少女戦略最前線REVENGE"}
,"11-banme no yuusha" : {n:"11番目の勇者"}
,"11-banme no yuusha 3" : {n:"11番目の勇者 3"}
,"11-banme no yuusha 4" : {n:"11番目の勇者 4"}
,"syukufuku to ai o tsukamiyuku" : {n:"祝福と愛をつかみゆく"}
,"syukufuku to ai o tsukamiyuku 3" : {n:"祝福と愛をつかみゆく 3"}
,"syukufuku to ai o tsukamiyuku ii" : {n:"祝福と愛をつかみゆく II"}
,"syukufuku to ai o tsukamiyuku iv" : {n:"祝福と愛をつかみゆく IV"}
,"syukufuku to ai o tsukamiyuku v" : {n:"祝福と愛をつかみゆく V"}
,"syukufuku to ai o tsukamiyuku vii" : {n:"祝福と愛をつかみゆく VII"}
,"syukufuku to ai o tsukamiyuku xi" : {n:"祝福と愛をつかみゆく XI"}
,"dragon souls" : {n:"DRAGON SOULS～龍魂～"}
,"dragon souls 2" : {n:"DRAGON SOULS～龍魂～2"}
,"dragon survival" : {n:"ドラゴンサバイバル"}
,"dragon survival 3" : {n:"ドラゴンサバイバル3"}
,"chou dragon geki 2023" : {n:"超DRAGON撃2023"}
,"chou dragon geki 2024" : {n:"超DRAGON撃2024"}
,"drasurvival☆saiyan matsuri" : {n:"どらさば☆サイヤ祭り"}
,"drasurvival☆super hero matsuri" : {n:"どらさば☆スパヒロ祭り"}
,"gotcha! to iku ze!! trans for market 2" : {n:"Gotcha!と行くぜ！！トランスforマーケット2"}
,"gotchaket" : {n:"ガチャケット"}
,"gotchaket 3" : {n:"ガチャケット 3"}
,"gotchaket 4" : {n:"ガチャケット 4"}
,"tiny trans funket 03 fly high jet!! & bumblebee biiki!" : {n:"タイニートランスファンケット3 -FLY HIGH JET!＆バンブル贔屓！"}
,"sekai bishoku hakken! 10" : {n:"世界美食発見!10"}
,"sekai bishoku hakken! 3" : {n:"世界美食発見!3"}
,"sekai bishoku hakken! 8" : {n:"世界美食発見!8"}
,"#nijisousaku" : {n:"＃にじそうさく"}
,"#nijisousaku 10" : {n:"＃にじそうさく10"}
,"#nijisousaku 2" : {n:"＃にじそうさく2"}
,"#nijisousaku 3" : {n:"＃にじそうさく3"}
,"#nijisousaku 4" : {n:"＃にじそうさく4"}
,"#nijisousaku 5" : {n:"＃にじそうさく5"}
,"#nijisousaku 6" : {n:"＃にじそうさく6"}
,"#nijisousaku 7" : {n:"＃にじそうさく7"}
,"#nijisousaku 08" : {n:"＃にじそうさく8"}
,"#nijisousaku 8" : {n:"＃にじそうさく8"}
,"#nijisousaku 9" : {n:"＃にじそうさく9"}
,"idling attacker" : {n:"IDLING ATTACKER"}
,"idling attacker 10" : {n:"IDLING ATTACKER 10"}
,"idling attacker 3" : {n:"IDLING ATTACKER 3"}
,"idling attacker3" : {n:"IDLING ATTACKER 3"}
,"idling attacker 4" : {n:"IDLING ATTACKER 4"}
,"idling attacker5" : {n:"IDLING ATTACKER 5"}
,"idling attacker 6" : {n:"IDLING ATTACKER 6"}
,"idling attacker 7" : {n:"IDLING ATTACKER 7"}
,"idling attacker7" : {n:"IDLING ATTACKER 7"}
,"idling attacker 9" : {n:"IDLING ATTACKER 9"}
,"idling attacker osaka 10" : {n:"IDLING ATTACKER 大阪10"}
,"idling attacker osaka 7" : {n:"IDLING ATTACKER 大阪7"}
,"idling attacker fukuoka 5" : {n:"IDLING ATTACKER 福岡5"}
,"rts!!" : {n:"RTS!!"}
,"rts!!10" : {n:"RTS!! 10"}
,"rts!! 13" : {n:"RTS!! 13"}
,"rts!!13" : {n:"RTS!! 13"}
,"rts!! 15" : {n:"RTS!! 15"}
,"rts!!15" : {n:"RTS!! 15"}
,"rts!!18" : {n:"RTS!! 18"}
,"rts!!2" : {n:"RTS!! 2"}
,"rts!!21" : {n:"RTS!! 21"}
,"rts!! 24" : {n:"RTS!! 24"}
,"rts!!25" : {n:"RTS!! 25"}
,"rts!!26" : {n:"RTS!! 26"}
,"rts!! 27" : {n:"RTS!! 27"}
,"rts!! 28" : {n:"RTS!! 28"}
,"rts!! 3" : {n:"RTS!! 3"}
,"rts!!3" : {n:"RTS!! 3"}
,"rts3!!" : {n:"RTS!! 3"}
,"rts!! 31" : {n:"RTS!! 31"}
,"rts!! 32" : {n:"RTS!! 32"}
,"rts!!34" : {n:"RTS!! 34"}
,"rts!! 38" : {n:"RTS!! 38"}
,"rts!!38" : {n:"RTS!! 38"}
,"rts!!4" : {n:"RTS!! 4"}
,"rts!! 40" : {n:"RTS!! 40"}
,"rts!! 5" : {n:"RTS!! 5"}
,"rts!!5" : {n:"RTS!! 5"}
,"rts!!6" : {n:"RTS!! 6"}
,"rts!! 7" : {n:"RTS!! 7"}
,"rts!!7" : {n:"RTS!! 7"}
,"rts!! 8" : {n:"RTS!! 8"}
,"rts!!8" : {n:"RTS!! 8"}
,"rts!!9" : {n:"RTS!! 9"}
,"rts!! kinkyuu summer 2021" : {n:"RTS!! 緊急SUMMER 2021"}
,"super rts!! 2018" : {n:"SUPER RTS!! 2018"}
,"super rts!! 2021" : {n:"SUPER RTS!! 2021"}
,"super rts!! 2022" : {n:"SUPER RTS!! 2022"}
,"super rts!! 2023" : {n:"SUPER RTS!! 2023"}
,"daiou-sama ga tooru" : {n:"大王様がとおる☆"}
,"daiou-sama ga tooru 2" : {n:"大王様がとおる☆2"}
,"akai kono heart dr2022" : {n:"赤いこのハート DR2022"}
,"6teki no jishuren!" : {n:"6テキの自主練！"}
,"welcome to hell's hotel" : {n:"WELCOME TO HELL'S HOTEL"}
,"welcome to hell's hotel2" : {n:"WELCOME TO HELL'S HOTEL 2"}
,"welcome to hell's hotel gw2024" : {n:"WELCOME TO HELL'S HOTEL GW2024"}
,"welcome to hell's hotel haru 2024" : {n:"WELCOME TO HELL'S HOTEL 春2024"}
,"welcome to hell's hotel haru2024" : {n:"WELCOME TO HELL'S HOTEL 春2024"}
,"welcome to super hell's hotel 2025 fuyu" : {n:"WELCOME TO SUPER HELL'S HOTEL 2025冬"}
,"shitsuji toranoana!" : {n:"執事とらのあな！"}
,"shitsuji toranoana! 10" : {n:"執事とらのあな！10"}
,"shitsuji toranoana! 2" : {n:"執事とらのあな！2"}
,"shitsuji toranoana! 3" : {n:"執事とらのあな！3"}
,"shitsuji toranoana! 4" : {n:"執事とらのあな！4"}
,"shitsuji toranoana! 5" : {n:"執事とらのあな！5"}
,"shitsuji toranoana! 6" : {n:"執事とらのあな！6"}
,"shitsuji toranoana! 7" : {n:"執事とらのあな！7"}
,"shitsuji toranoana! 8" : {n:"執事とらのあな！8"}
,"shitsuji toranoana! 9" : {n:"執事とらのあな！9"}
,"cho powerful cup 2024" : {n:"超パワフルカップ 2024"}
,"bonjou no souzoushyu" : {n:"盤上の創造主"}
,"bonjou no souzoushyu 2" : {n:"盤上の創造主2"}
,"crazy lyric battle" : {n:"CrazyLyricBattle"}
,"crazy lyric battle 10" : {n:"CrazyLyricBattle 10"}
,"crazy lyric battle 12" : {n:"CrazyLyricBattle 12"}
,"crazy lyric battle 14" : {n:"CrazyLyricBattle 14"}
,"crazy lyric battle 15" : {n:"CrazyLyricBattle 15"}
,"crazy lyric battle 17" : {n:"CrazyLyricBattle 17"}
,"crazy lyric battle 18" : {n:"CrazyLyricBattle 18"}
,"crazy lyric battle 2" : {n:"CrazyLyricBattle 2"}
,"crazylyricbattle2" : {n:"CrazyLyricBattle 2"}
,"crazy lyric battle 24" : {n:"CrazyLyricBattle 24"}
,"crazy lyric battle 3" : {n:"CrazyLyricBattle 3"}
,"crazy lyric battle 31" : {n:"CrazyLyricBattle 31"}
,"crazy lyric battle 4" : {n:"CrazyLyricBattle 4"}
,"crazy lyric battle 5" : {n:"CrazyLyricBattle 5"}
,"crazy lyric battle 8" : {n:"CrazyLyricBattle 8"}
,"crazy lyric battle shitou" : {n:"CrazyLyricBattle 四闘"}
,"crazy lyric battle shitou kettou zenjinmitou" : {n:"CrazyLyricBattle 四闘 決闘 前人未踏"}
,"chou crazy lyric battle 2019" : {n:"超CrazyLyricBattle2019"}
,"chou crazy lyric battle 2021" : {n:"超CrazyLyricBattle2021"}
,"chou crazy lyric battle 2023 natsu" : {n:"超CrazyLyricBattle2023夏"}
,"chou crazy lyric battle golden 2020" : {n:"超CrazyLyricBattleゴールデン2020"}
,"kaihi funou na dokusenyoku 6" : {n:"回避不能な独占欲 6"}
,"kaihi funou na dokusenyoku dr2021" : {n:"回避不能な独占欲 DR2021"}
,"kaihi funou na dokusenyoku jb2023" : {n:"回避不能な独占欲 JB2023"}
,"kaihi funou na dokusen yoku hoshi ni negai o. 2022" : {n:"回避不能な独占欲 星願2022"}
,"sekai ichisama ni naru 3" : {n:"世界イチサマになる3"}
,"sekai ichisama ni naru 4" : {n:"世界イチサマになる4"}
,"aikata wa omae dake dr2021" : {n:"相方はお前だけ DR2021"}
,"aikata wa omae dake dr2023" : {n:"相方はお前だけ DR2023"}
,"arittake no yume o misete 5" : {n:"ありったけの夢を見せて5"}
,"arittake no yume o misete 6" : {n:"ありったけの夢を見せて6"}
,"purin no otomo ni melon soda 4" : {n:"プリンのお供にメロンソーダ 4"}
,"purin no otomo ni melon soda 5" : {n:"プリンのお供にメロンソーダ 5"}
,"purin no otomo ni melon soda hoshi ni negai o. 2022" : {n:"プリンのお供にメロンソーダ 星願2022"}
,"honou no seisen 62" : {n:"炎の聖戦 62"}
,"honoo no seisen 64" : {n:"炎の聖戦 64"}
,"honoo no seisen 65" : {n:"炎の聖戦 65"}
,"honoo no seisen 66" : {n:"炎の聖戦 66"}
,"honoo no seisen 67" : {n:"炎の聖戦 67"}
,"honoo no seisen 70" : {n:"炎の聖戦 70"}
,"honoo no seisen 76" : {n:"炎の聖戦 76"}
,"honou no seisen 81" : {n:"炎の聖戦 81"}
,"honoo no seisen 91" : {n:"炎の聖戦 91"}
,"kokuin no hokori" : {n:"刻印の誇り"}
,"kokuin no hokori 10" : {n:"刻印の誇り 10"}
,"kokuin no hokori 12" : {n:"刻印の誇り 12"}
,"kokuin no hokori 13" : {n:"刻印の誇り 13"}
,"kokuin no hokori 15" : {n:"刻印の誇り 15"}
,"kokuin no hokori 17" : {n:"刻印の誇り 17"}
,"kokuin no hokori 19" : {n:"刻印の誇り 19"}
,"kokuin no hokori 2" : {n:"刻印の誇り 2"}
,"kokuin no hokori 20" : {n:"刻印の誇り 20"}
,"kokuin no hokori 21" : {n:"刻印の誇り 21"}
,"kokuin no hokori 3" : {n:"刻印の誇り 3"}
,"kokuin no hokori 4" : {n:"刻印の誇り 4"}
,"kokuin no hokori 6" : {n:"刻印の誇り 6"}
,"kokuin no hokori 7" : {n:"刻印の誇り 7"}
,"kokuin no hokori 8" : {n:"刻印の誇り 8"}
,"kokuin no hokori 9" : {n:"刻印の誇り 9"}
,"chou kokuin no hokori 2020" : {n:"超刻印の誇り 2020"}
,"chou kokuin no hokori 2021" : {n:"超刻印の誇り 2021"}
,"glorious glaivy" : {n:"GLORIOUS GLAIVY"}
,"glorious glaivy 2" : {n:"GLORIOUS GLAIVY 2"}
,"princess festa" : {n:"プリンセス☆フェスタ"}
,"princess☆festa" : {n:"プリンセス☆フェスタ"}
,"princess festa 2" : {n:"プリンセス☆フェスタ2"}
,"princess festa 03" : {n:"プリンセス☆フェスタ3"}
,"princess festa 3" : {n:"プリンセス☆フェスタ3"}
,"princess festa 4" : {n:"プリンセス☆フェスタ4"}
,"princess festa 5" : {n:"プリンセス☆フェスタ5"}
,"princess☆festa 5" : {n:"プリンセス☆フェスタ5"}
,"princess festa 6" : {n:"プリンセス☆フェスタ6"}
,"princess festa 8" : {n:"プリンセス☆フェスタ8"}
,"puyoism 11" : {n:"ぷよ主義  11"}
,"puyo shugi 8" : {n:"ぷよ主義  8"}
,"puyoism 8" : {n:"ぷよ主義  8"}
,"precure festa 11" : {n:"プリキュア☆フェスタ11"}
,"precure festa 12" : {n:"プリキュア☆フェスタ12"}
,"precure festa 16" : {n:"プリキュア☆フェスタ16"}
,"precure festa 22" : {n:"プリキュア☆フェスタ22"}
,"precure festa 28" : {n:"プリキュア☆フェスタ28"}
,"precure festa 3" : {n:"プリキュア☆フェスタ3"}
,"precure festa 32" : {n:"プリキュア☆フェスタ32"}
,"precure*festa 4" : {n:"プリキュア☆フェスタ4"}
,"precure festa 5" : {n:"プリキュア☆フェスタ5"}
,"precure festa 52" : {n:"プリキュア☆フェスタ52"}
,"precure festa 7" : {n:"プリキュア☆フェスタ7"}
,"precure festa 9" : {n:"プリキュア☆フェスタ9"}
,"precure matsuri dx11" : {n:"プリキュアまつりDX11"}
,"precure matsuri dx4" : {n:"プリキュアまつりDX4"}
,"precure matsuri dx9" : {n:"プリキュアまつりDX9"}
,"rainbow flavor 10" : {n:"レインボウフレーバー10"}
,"rainbow flavor 11" : {n:"レインボウフレーバー11"}
,"rainbow flavor 12" : {n:"レインボウフレーバー12"}
,"rainbow flavor 13" : {n:"レインボウフレーバー13"}
,"rainbow flavor 14" : {n:"レインボウフレーバー14"}
,"rainbow flavor 15" : {n:"レインボウフレーバー15"}
,"rainbow flavor 16" : {n:"レインボウフレーバー16"}
,"rainbow flavor 17" : {n:"レインボウフレーバー17"}
,"rainbow flavor 18" : {n:"レインボウフレーバー18"}
,"rainbow flavor 19" : {n:"レインボウフレーバー19"}
,"rainbow flavor 20" : {n:"レインボウフレーバー20"}
,"rainbow flavor 21" : {n:"レインボウフレーバー21"}
,"rainbow flavor 22" : {n:"レインボウフレーバー22"}
,"rainbow flavor 24" : {n:"レインボウフレーバー24"}
,"rainbow flavor 25" : {n:"レインボウフレーバー25"}
,"rainbow flavor 28" : {n:"レインボウフレーバー28"}
,"rainbow flavor 30" : {n:"レインボウフレーバー30"}
,"rainbow flavor 31" : {n:"レインボウフレーバー31"}
,"rainbow flavor 32" : {n:"レインボウフレーバー32"}
,"rainbow flavor 7" : {n:"レインボウフレーバー7"}
,"rainbow flavor 8" : {n:"レインボウフレーバー8"}
,"rainbow flavor 9" : {n:"レインボウフレーバー9"}
,"rainbow flavor nagoya 10" : {n:"レインボウフレーバーNAGOYA 10"}
,"rainbow flavor nagoya 7" : {n:"レインボウフレーバーNAGOYA 7"}
,"rainbow flavor osaka 8" : {n:"レインボウフレーバーOSAKA 8"}
,"prism jump 11" : {n:"プリズム☆ジャンプ11"}
,"prism jump 12" : {n:"プリズム☆ジャンプ12"}
,"prism jump 13" : {n:"プリズム☆ジャンプ13"}
,"prism jump 14" : {n:"プリズム☆ジャンプ14"}
,"prism jump 15" : {n:"プリズム☆ジャンプ15"}
,"prism jump 17" : {n:"プリズム☆ジャンプ17"}
,"prism jump 19" : {n:"プリズム☆ジャンプ19"}
,"prism jump 20" : {n:"プリズム☆ジャンプ20"}
,"prism jump 21" : {n:"プリズム☆ジャンプ21"}
,"prism jump 22" : {n:"プリズム☆ジャンプ22"}
,"prism jump 23" : {n:"プリズム☆ジャンプ23"}
,"prism jump 24" : {n:"プリズム☆ジャンプ24"}
,"prism jump 25" : {n:"プリズム☆ジャンプ25"}
,"prism jump 26" : {n:"プリズム☆ジャンプ26"}
,"prism jump 27" : {n:"プリズム☆ジャンプ27"}
,"prism jump 28" : {n:"プリズム☆ジャンプ28"}
,"prism jump 29" : {n:"プリズム☆ジャンプ29"}
,"prism jump 30" : {n:"プリズム☆ジャンプ30"}
,"prism jump 31" : {n:"プリズム☆ジャンプ31"}
,"prism jump 32" : {n:"プリズム☆ジャンプ32"}
,"prism jump 33" : {n:"プリズム☆ジャンプ33"}
,"prism jump 34" : {n:"プリズム☆ジャンプ34"}
,"prism jump 35" : {n:"プリズム☆ジャンプ35"}
,"prism jump 36" : {n:"プリズム☆ジャンプ36"}
,"prism jump 44" : {n:"プリズム☆ジャンプ44"}
,"prism jump 47" : {n:"プリズム☆ジャンプ47"}
,"prism jump 6" : {n:"プリズム☆ジャンプ6"}
,"priconne daihyakka 10" : {n:"プリコネ大百科10"}
,"priconne daihyakka 12" : {n:"プリコネ大百科12"}
,"priconne daihyakka 2" : {n:"プリコネ大百科2"}
,"priconne daihyakka 29" : {n:"プリコネ大百科29"}
,"priconne daihyakka 3" : {n:"プリコネ大百科3"}
,"priconne daihyakka 4" : {n:"プリコネ大百科4"}
,"priconne daihyakka 5" : {n:"プリコネ大百科5"}
,"priconne daihyakka 6" : {n:"プリコネ大百科6"}
,"priconne daihyakka 7" : {n:"プリコネ大百科7"}
,"sanctum archive" : {n:"Sanctum Archive"}
,"sanctum archive chapter.2" : {n:"Sanctum Archive chapter.2"}
,"sanctum archive chapter.3" : {n:"Sanctum Archive chapter.3"}
,"sanctum archive chapter.4" : {n:"Sanctum Archive chapter.4"}
,"sanctum archive chapter.5" : {n:"Sanctum Archive chapter.5"}
,"sensei no archive 10" : {n:"せんせーのアーカイブ 10"}
,"sensei no archive 11" : {n:"せんせーのアーカイブ 11"}
,"sensei no archive 12" : {n:"せんせーのアーカイブ 12"}
,"sensei no archive 13" : {n:"せんせーのアーカイブ 13"}
,"せんせーのアーカイブ13" : {n:"せんせーのアーカイブ 13"}
,"sensei no archive 3" : {n:"せんせーのアーカイブ 3"}
,"sensei no archive 5" : {n:"せんせーのアーカイブ 5"}
,"sensei no archive 6" : {n:"せんせーのアーカイブ 6"}
,"sensei no archive 7" : {n:"せんせーのアーカイブ 7"}
,"sensei no archive 8" : {n:"せんせーのアーカイブ 8"}
,"blue market 10" : {n:"ブルーマーケット10"}
,"blue market 11" : {n:"ブルーマーケット11"}
,"blue market 13" : {n:"ブルーマーケット13"}
,"blue market 15" : {n:"ブルーマーケット15"}
,"blue market 18" : {n:"ブルーマーケット18"}
,"blue market 3" : {n:"ブルーマーケット3"}
,"blue market 4" : {n:"ブルーマーケット4"}
,"blue market 5" : {n:"ブルーマーケット5"}
,"blue market 6" : {n:"ブルーマーケット6"}
,"blue market 7" : {n:"ブルーマーケット7"}
,"blue market 9" : {n:"ブルーマーケット9"}
,"seishun egoism" : {n:"青春エゴイズム"}
,"seishun egoism ~natsuyasumi~" : {n:"青春エゴイズム ～夏休み～"}
,"seishun egoism sp 2022" : {n:"青春エゴイズム SP2022"}
,"seishun egoism sp2022" : {n:"青春エゴイズム SP2022"}
,"seishun egoism 2" : {n:"青春エゴイズム2"}
,"seishun egoism2" : {n:"青春エゴイズム2"}
,"seishun egoism 3" : {n:"青春エゴイズム3"}
,"seishun egoism 6" : {n:"青春エゴイズム6"}
,"seishun egoism 9" : {n:"青春エゴイズム9"}
,"chou seishun egoism 2023" : {n:"超青春エゴイズム 2023"}
,"chou seishun egoism 2023 natsu" : {n:"超青春エゴイズム 2023夏"}
,"together until the end" : {n:"Together Until The End"}
,"together until the end 3" : {n:"Together Until The End 3"}
,"kanzen nenshou!!" : {n:"完全燃消!!"}
,"kanzen nenshou!! 2" : {n:"完全燃消!!2"}
,"kyouten douchi" : {n:"驚纏動地"}
,"kyouten douchi 3" : {n:"驚纏動地 3"}
,"chou kyouran douchi 2020" : {n:"超驚纏動地 2020"}
,"chou kyouran douchi 2021" : {n:"超驚纏動地 2021"}
,"sekai kaigi 2" : {n:"世界会議2"}
,"sekai kaigi 3" : {n:"世界会議3"}
,"sekai kaigi uk hen 2-baime" : {n:"世界会議UK編 2杯目"}
,"sekai kaigi uk hen teatimemagic13-haime" : {n:"世界会議UK編 Tea Time Magic 13杯目"}
,"sekaijuu no chu!! 7" : {n:"世界中のChu!! 7"}
,"cho sekaijuu no chu!!" : {n:"超世界中のChu!!"}
,"cho sekaijuu no chu!! 2017" : {n:"超世界中のChu!! 2017"}
,"cho sekaijuu no chu!! 2023" : {n:"超世界中のChu!! 2023"}
,"youkoso velvet room 2" : {n:"ようこそベルベットルームへ2"}
,"youkoso velvet room 3" : {n:"ようこそベルベットルームへ3"}
,"tonari no nitro dr2022" : {n:"となりのニトロ DR2022"}
,"tonari no nitro dr2023" : {n:"となりのニトロ DR2023"}
,"idle mystar 2008" : {n:"アイドルMySTAR 2008"}
,"challe! 10" : {n:"チャレ！10"}
,"challe! 11" : {n:"チャレ！11"}
,"challe! 14" : {n:"チャレ！14"}
,"challe! 21" : {n:"チャレ！21"}
,"challe! 26" : {n:"チャレ！26"}
,"challenger!" : {n:"チャレンジャー！"}
,"challenger! 13" : {n:"チャレンジャー！13"}
,"challenger! 2" : {n:"チャレンジャー！2"}
,"challenger! 21" : {n:"チャレンジャー！21"}
,"challenger! 25" : {n:"チャレンジャー！25"}
,"challenger!25" : {n:"チャレンジャー！25"}
,"challenger! 29" : {n:"チャレンジャー！29"}
,"challenger! 3" : {n:"チャレンジャー！3"}
,"challenger! 30" : {n:"チャレンジャー！30"}
,"challenger! 31" : {n:"チャレンジャー！31"}
,"yume wa pocket no naka ni 3" : {n:"夢はポケットの中に 3"}
,"yume wa pocket no naka ni 4" : {n:"夢はポケットの中に 4"}
,"yume wa pocket no naka ni 6" : {n:"夢はポケットの中に 6"}
,"bocchi the only!" : {n:"ぼっち・ざ・おんりー！"}
,"bocchi the only! #2" : {n:"ぼっち・ざ・おんりー！#2"}
,"bocchi the book! #2" : {n:"ぼっち・ざ・ぶっく！#2"}
,"kessoku rock!" : {n:"結束ロック！"}
,"kessoku rock! 10" : {n:"結束ロック！10"}
,"kessoku rock! 2" : {n:"結束ロック！2"}
,"kessoku rock! 3" : {n:"結束ロック！3"}
,"kessoku rock! 5" : {n:"結束ロック！5"}
,"kessoku rock! 6" : {n:"結束ロック！6"}
,"kessoku rock! 7" : {n:"結束ロック！7"}
,"kessoku rock! 8" : {n:"結束ロック！8"}
,"kessoku rock! 9" : {n:"結束ロック！9"}
,"holokle" : {n:"ホロクル"}
,"holokle 2nd" : {n:"ホロクル 2nd"}
,"holokle 3rd" : {n:"ホロクル 3rd"}
,"holokle 4th" : {n:"ホロクル 4th"}
,"holokle 5th" : {n:"ホロクル 5th"}
,"holokle 7th" : {n:"ホロクル 7th"}
,"holoket" : {n:"ホロケット"}
,"holoket 2nd" : {n:"ホロケット2nd"}
,"holoket 5th" : {n:"ホロケット5th"}
,"pretty bomb! 10" : {n:"Pretty Bomb! 10"}
,"pretty bomb! 2" : {n:"Pretty Bomb! 2"}
,"pretty bomb! 3" : {n:"Pretty Bomb! 3"}
,"pretty bomb! 5" : {n:"Pretty Bomb! 5"}
,"pretty bomb! 7" : {n:"Pretty Bomb! 7"}
,"pretty bomb! 9" : {n:"Pretty Bomb! 9"}
,"pretty bomb! nagoya 6" : {n:"Pretty Bomb! 名古屋6"}
,"senya ichiya" : {n:"千夜一夜"}
,"senya ichiya 14" : {n:"千夜一夜14"}
,"senya ichiya 15" : {n:"千夜一夜15"}
,"senya ichiya 2" : {n:"千夜一夜2"}
,"senya ichiya 3" : {n:"千夜一夜3"}
,"senya ichiya 4" : {n:"千夜一夜4"}
,"senya ichiya 5" : {n:"千夜一夜5"}
,"senya ichiya 6" : {n:"千夜一夜6"}
,"senya ichiya 7" : {n:"千夜一夜7"}
,"mabiket g3" : {n:"マビケットG3"}
,"triplet rhapsody" : {n:"Triplet Rhapsody"}
,"triplet rhapsody 15" : {n:"Triplet Rhapsody 15"}
,"triplet rhapsody 2" : {n:"Triplet Rhapsody 2"}
,"triplet rhapsody 3" : {n:"Triplet Rhapsody 3"}
,"triplet rhapsody 4" : {n:"Triplet Rhapsody 4"}
,"triplet rhapsody 5" : {n:"Triplet Rhapsody 5"}
,"triplet rhapsody 6" : {n:"Triplet Rhapsody 6"}
,"triplet rhapsody 7" : {n:"Triplet Rhapsody 7"}
,"triplet rhapsody 8" : {n:"Triplet Rhapsody 8"}
,"triplet rhapsody 9" : {n:"Triplet Rhapsody 9"}
,"akogare ga tomaranai" : {n:"あこがれがとまらない"}
,"akogare ga tomaranai 10-soume" : {n:"あこがれがとまらない10層目"}
,"akogare ga tomaranai 11-soume" : {n:"あこがれがとまらない11層目"}
,"akogare ga tomaranai 12-soume" : {n:"あこがれがとまらない12層目"}
,"akogare ga tomaranai 14-soume" : {n:"あこがれがとまらない14層目"}
,"akogare ga tomaranai 18-soume" : {n:"あこがれがとまらない18層目"}
,"akogare ga tomaranai 19-soume" : {n:"あこがれがとまらない19層目"}
,"akogare ga tomaranai 20-soume" : {n:"あこがれがとまらない20層目"}
,"akogare ga tomaranai 21-soume" : {n:"あこがれがとまらない21層目"}
,"akogare ga tomaranai 22-soume" : {n:"あこがれがとまらない22層目"}
,"akogare ga tomaranai 2-soume" : {n:"あこがれがとまらない2層目"}
,"akogare ga tomaranai 3-soume" : {n:"あこがれがとまらない3層目"}
,"akogare ga tomaranai 4-soume" : {n:"あこがれがとまらない4層目"}
,"abyss in wonderworld osaka" : {n:"アビス イン ワンダーワールド"}
,"daisagu kutsusai 2018" : {n:"大探窟祭2018"}
,"daitan kutsusai 2018" : {n:"大探窟祭2018"}
,"daitankutsusai 2018" : {n:"大探窟祭2018"}
,"daitankutsusai 2018 aki" : {n:"大探窟祭2018"}
,"psychic100%" : {n:"サイキック100%"}
,"psychic100%+2%" : {n:"サイキック100%+2%"}
,"psychic100%+3%" : {n:"サイキック100%+3%"}
,"psychic100%+4%" : {n:"サイキック100%+4%"}
,"psychic100% osaka" : {n:"サイキック100%大阪"}
,"psychic100% osaka+2%" : {n:"サイキック100%大阪+2%"}
,"psychic100% fukuoka" : {n:"サイキック100%福岡"}
,"ore no manadeshi wa chounouryokusha" : {n:"俺の愛弟子は超能力者"}
,"ore no manadeshi wa chounouryokusha 2" : {n:"俺の愛弟子は超能力者2"}
,"ginban no glory" : {n:"銀盤のglory"}
,"ginban no glory 0.5" : {n:"銀盤のglory 0.5"}
,"ginban no glory 2" : {n:"銀盤のglory 2"}
,"ginban no glory seichi special" : {n:"銀盤のglory 聖地スペシャル"}
,"ginban no glory osaka" : {n:"銀盤のglory 大阪"}
,"hyousou strast" : {n:"氷奏ストラースチ"}
,"hyousou strast 11" : {n:"氷奏ストラースチ 11"}
,"hyousou strast 12" : {n:"氷奏ストラースチ 12"}
,"hyousou strast 13" : {n:"氷奏ストラースチ 13"}
,"hyousou strast 14" : {n:"氷奏ストラースチ 14"}
,"hyousou strast 15" : {n:"氷奏ストラースチ 15"}
,"hyousou strast 16" : {n:"氷奏ストラースチ 16"}
,"hyousou strast 17" : {n:"氷奏ストラースチ 17"}
,"hyousou strast 2" : {n:"氷奏ストラースチ 2"}
,"hyousou strast 22" : {n:"氷奏ストラースチ 22"}
,"hyousou strast 24" : {n:"氷奏ストラースチ 24"}
,"hyousou strast 29" : {n:"氷奏ストラースチ 29"}
,"hyousou strast 4" : {n:"氷奏ストラースチ 4"}
,"hyousou strast 5" : {n:"氷奏ストラースチ 5"}
,"hyousou strast 8" : {n:"氷奏ストラースチ 8"}
,"hyousou strast banquet" : {n:"氷奏ストラースチ Banquet"}
,"hyousou strast ex" : {n:"氷奏ストラースチEX"}
,"hyousou strast gp 2018" : {n:"氷奏ストラースチGP 2018"}
,"youkai parade" : {n:"ようかいパレード"}
,"youkai parade 2" : {n:"ようかいパレード2"}
,"youkai parade 5" : {n:"ようかいパレード5"}
,"youkai parade 6" : {n:"ようかいパレード6"}
,"youkai tomodachi ichidaiji!" : {n:"妖怪ともだち一大事！"}
,"youkai tomodachi ichidaiji! 2" : {n:"妖怪ともだち一大事！2"}
,"rag-fes" : {n:"RAG-FES"}
,"rag-fes2" : {n:"RAG-FES 02"}
,"rag-fes3" : {n:"RAG-FES 03"}
,"rag-fes 05" : {n:"RAG-FES 05"}
,"rag-fes 5" : {n:"RAG-FES 05"}
,"rag-fes5" : {n:"RAG-FES 05"}
,"rag-fes7" : {n:"RAG-FES 07"}
,"rag-fes14" : {n:"RAG-FES 14"}
,"rag-fes16" : {n:"RAG-FES 16"}
,"rag-fes19" : {n:"RAG-FES 19"}
,"rag-fes21" : {n:"RAG-FES 21"}
,"rag-fes27" : {n:"RAG-FES 27"}
,"rag-fes29" : {n:"RAG-FES 29"}
,"rag-fes33" : {n:"RAG-FES 33"}
,"rag-fes48" : {n:"RAG-FES 48"}
,"rag-fes49" : {n:"RAG-FES 49"}
,"love impact! osaka 4" : {n:"LOVEインパクト！ 大阪4"}
,"love impact! 4" : {n:"LOVEインパクト！4"}
,"anata to love live! 11" : {n:"あなたとラブライブ！11"}
,"anata to love live! 3" : {n:"あなたとラブライブ！3"}
,"anata to love live! 4" : {n:"あなたとラブライブ！4"}
,"anata to lovelive! 04" : {n:"あなたとラブライブ！4"}
,"anata to love live! 5" : {n:"あなたとラブライブ！5"}
,"bokura no love live! 10" : {n:"僕らのラブライブ！ 10"}
,"bokura no love live! 11" : {n:"僕らのラブライブ！ 11"}
,"bokura no love live! 12" : {n:"僕らのラブライブ！ 12"}
,"bokura no love live! 13" : {n:"僕らのラブライブ！ 13"}
,"bokura no love live! 14" : {n:"僕らのラブライブ！ 14"}
,"bokura no love live! 15" : {n:"僕らのラブライブ！ 15"}
,"bokura no love live! 16" : {n:"僕らのラブライブ！ 16"}
,"bokura no love live! 17" : {n:"僕らのラブライブ！ 17"}
,"bokura no love live! 18" : {n:"僕らのラブライブ！ 18"}
,"bokura no love live! 19" : {n:"僕らのラブライブ！ 19"}
,"bokura no love live! 19!" : {n:"僕らのラブライブ！ 19"}
,"bokura no love live! 2" : {n:"僕らのラブライブ！ 2"}
,"bokura no love live! 20" : {n:"僕らのラブライブ！ 20"}
,"bokura no love live! 21" : {n:"僕らのラブライブ！ 21"}
,"bokura no love live! 22" : {n:"僕らのラブライブ！ 22"}
,"bokura no love live! 23" : {n:"僕らのラブライブ！ 23"}
,"bokura no love live! 24" : {n:"僕らのラブライブ！ 24"}
,"bokura no love live! 25" : {n:"僕らのラブライブ！ 25"}
,"bokura no love live! 26" : {n:"僕らのラブライブ！ 26"}
,"bokura no love live! 27" : {n:"僕らのラブライブ！ 27"}
,"bokura no love live! 28" : {n:"僕らのラブライブ！ 28"}
,"bokura no love live! 29" : {n:"僕らのラブライブ！ 29"}
,"bokura no love live! 3" : {n:"僕らのラブライブ！ 3"}
,"bokura no love live! 30" : {n:"僕らのラブライブ！ 30"}
,"bokura no love live! 31" : {n:"僕らのラブライブ！ 31"}
,"bokura no love live! 32" : {n:"僕らのラブライブ！ 32"}
,"bokura no love live! 33" : {n:"僕らのラブライブ！ 33"}
,"bokura no love live! 34" : {n:"僕らのラブライブ！ 34"}
,"bokura no love live! 35" : {n:"僕らのラブライブ！ 35"}
,"bokura no love live! 36" : {n:"僕らのラブライブ！ 36"}
,"bokura no love live! 37" : {n:"僕らのラブライブ！ 37"}
,"bokura no love live! 38" : {n:"僕らのラブライブ！ 38"}
,"bokura no love live! 39" : {n:"僕らのラブライブ！ 39"}
,"bokura no love live! 4" : {n:"僕らのラブライブ！ 4"}
,"bokura no love live! 40" : {n:"僕らのラブライブ！ 40"}
,"bokura no love live! 41" : {n:"僕らのラブライブ！ 41"}
,"bokura no love live! 42" : {n:"僕らのラブライブ！ 42"}
,"bokura no love live! 43" : {n:"僕らのラブライブ！ 43"}
,"bokura no love live! 44" : {n:"僕らのラブライブ！ 44"}
,"bokura no love live! 45" : {n:"僕らのラブライブ！ 45"}
,"bokura no love live! 46" : {n:"僕らのラブライブ！ 46"}
,"bokura no love live! 5" : {n:"僕らのラブライブ！ 5"}
,"bokura no love live! 6" : {n:"僕らのラブライブ！ 6"}
,"bokura no love live! 7" : {n:"僕らのラブライブ！ 7"}
,"bokura no love live! 8" : {n:"僕らのラブライブ！ 8"}
,"bokura no love live! 9" : {n:"僕らのラブライブ！ 9"}
,"bokura no love live! sunshine in numazu 2" : {n:"僕らのラブライブ！ サンシャイン in 沼津 2"}
,"bokura no love live! sunshine in numazu 3" : {n:"僕らのラブライブ！ サンシャイン in 沼津 3"}
,"bokura no love live! sunshine!! in numazu 4" : {n:"僕らのラブライブ！ サンシャイン in 沼津 4"}
,"bokura no love live! sunshine in numazu 5" : {n:"僕らのラブライブ！ サンシャイン in 沼津 5"}
,"bokura no love live! shinnenkai 2017" : {n:"僕らのラブライブ！ 新年会 2017"}
,"bokura no love live! shinnenkai 2018" : {n:"僕らのラブライブ！ 新年会 2018"}
,"bokura no love live! hasunosora in kanazawa" : {n:"僕ラブ！蓮ノ空in金沢"}
,"sweet sweet sweet" : {n:"SWEET SWEET SWEET"}
,"sweet sweet sweet 3" : {n:"SWEET SWEET SWEET 3"}
,"sweet sweet sweet 4" : {n:"SWEET SWEET SWEET 4"}
,"sweet sweet sweet 5" : {n:"SWEET SWEET SWEET 5"}
,"bokulove! sunshine in numazu" : {n:"僕ラブ！サンシャインin沼津"}
,"bokulove! sunshine in numazu 2" : {n:"僕ラブ！サンシャインin沼津2"}
,"bokulove! sunshine in numazu 3" : {n:"僕ラブ！サンシャインin沼津3"}
,"bokulove! sunshine in numazu 5" : {n:"僕ラブ！サンシャインin沼津5"}
,"bokulove! sunshine in numazu 6" : {n:"僕ラブ！サンシャインin沼津6"}
,"bokulove! sunshine in numazu 8" : {n:"僕ラブ！サンシャインin沼津8"}
,"aquamarine-dream 4th" : {n:"アクアマリンドリーム 4th"}
,"aquamarine-dream 5th" : {n:"アクアマリンドリーム 5th"}
,"aquamarine-dream 6th" : {n:"アクアマリンドリーム 6th"}
,"itsuka mita koi no yume 3" : {n:"いつか見た恋の夢3"}
,"makitan!" : {n:"真姫誕！"}
,"bokulove! nijigasaki 17" : {n:"僕ラブ！虹ヶ咲17"}
,"bokulove! nijigasaki 18" : {n:"僕ラブ！虹ヶ咲18"}
,"bokulove! nijigasaki 19" : {n:"僕ラブ！虹ヶ咲19"}
,"makimaki 12" : {n:"まきまき 12"}
,"makimaki 13" : {n:"まきまき 13"}
,"makimaki 2" : {n:"まきまき 2"}
,"makimaki 25" : {n:"まきまき 25"}
,"makimaki 27" : {n:"まきまき 27"}
,"makimaki 29" : {n:"まきまき 29"}
,"makimaki 3" : {n:"まきまき 3"}
,"makimaki3" : {n:"まきまき 3"}
,"makimaki 4" : {n:"まきまき 4"}
,"makimaki 5" : {n:"まきまき 5"}
,"makimaki 6" : {n:"まきまき 6"}
,"makimaki 7" : {n:"まきまき 7"}
,"makimaki 8" : {n:"まきまき 8"}
,"makimaki 9" : {n:"まきまき 9"}
,"makimasuka? makimasenka? ex" : {n:"まきますか？まきませんか？EX"}
,"bara no kouchakai" : {n:"薔薇の紅茶会"}
,"bara no kouchakai 02" : {n:"薔薇の紅茶会02"}
,"bara no kouchakai 2" : {n:"薔薇の紅茶会02"}
,"bara otome no utage 2" : {n:"薔薇乙女の宴2"}
,"lovket" : {n:"LoVけっと"}
,"borderline3" : {n:"BORDER LINE 3"}
,"borderline4" : {n:"BORDER LINE 4"}
,"border line 5" : {n:"BORDER LINE 5"}
,"borderline5" : {n:"BORDER LINE 5"}
,"border line 7" : {n:"BORDER LINE 7"}
,"boderline osaka 3" : {n:"BORDER LINE 大阪3"}
,"waga te ni hikigane o" : {n:"吾が手に引き金を"}
,"waga te ni hikigane o s kansai 22" : {n:"吾が手に引き金を 関西22"}
,"waga te ni hikigane o 10" : {n:"吾が手に引き金を10"}
,"waga te ni hikigane o s11" : {n:"吾が手に引き金を11"}
,"waga te ni hikigane o 12" : {n:"吾が手に引き金を12"}
,"waga te ni hikigane o 13" : {n:"吾が手に引き金を13"}
,"waga te ni hikigane o 15" : {n:"吾が手に引き金を15"}
,"waga te ni hikigane o 16" : {n:"吾が手に引き金を16"}
,"waga te ni hikigane o 17" : {n:"吾が手に引き金を17"}
,"waga te ni hikigane o 2" : {n:"吾が手に引き金を2"}
,"waga te ni hikigane o 24" : {n:"吾が手に引き金を24"}
,"waga te ni hikigane o 29" : {n:"吾が手に引き金を29"}
,"waga te ni hikigane o 3" : {n:"吾が手に引き金を3"}
,"waga te ni hikigane o 31" : {n:"吾が手に引き金を31"}
,"waga te ni hikigane o 34" : {n:"吾が手に引き金を34"}
,"waga te ni hikigane o 4" : {n:"吾が手に引き金を4"}
,"waga te ni hikigane o 6" : {n:"吾が手に引き金を6"}
,"waga te ni hikigane o 8" : {n:"吾が手に引き金を8"}
,"chou waga te ni hikigane o 2021 tokyo" : {n:"超吾が手に引き金を2021東京"}
,"chou waga te ni hikigane o 2022" : {n:"超吾が手に引き金を2022"}
,"chou waga te ni hikigane o 2023" : {n:"超吾が手に引き金を2023"}
,"one→hundred" : {n:"ONE→HUNDRED"}
,"one→hundred 10" : {n:"ONE→HUNDRED 10"}
,"one→hundred 12" : {n:"ONE→HUNDRED 12"}
,"one→hundred 14" : {n:"ONE→HUNDRED 14"}
,"one→hundred 15" : {n:"ONE→HUNDRED 15"}
,"one→hundred 2" : {n:"ONE→HUNDRED 2"}
,"one→hundred 20" : {n:"ONE→HUNDRED 20"}
,"one→hundred 25" : {n:"ONE→HUNDRED 25"}
,"one→hundred 29" : {n:"ONE→HUNDRED 29"}
,"one→hundred 3" : {n:"ONE→HUNDRED 3"}
,"one→hundred 4" : {n:"ONE→HUNDRED 4"}
,"one→hundred 5" : {n:"ONE→HUNDRED 5"}
,"one→hundred 6" : {n:"ONE→HUNDRED 6"}
,"one→hundred 7" : {n:"ONE→HUNDRED 7"}
,"one→hundred 8" : {n:"ONE→HUNDRED 8"}
,"chou one→hundred 2018" : {n:"超ONE→HUNDRED 2018"}
,"chou one→hundred 2019" : {n:"超ONE→HUNDRED 2019"}
,"chou one→hundred 2022" : {n:"超ONE→HUNDRED 2022"}
,"chou one→hundred 2023 natsu" : {n:"超ONE→HUNDRED 2023夏"}
,"byousatsu knockout" : {n:"秒殺ノックアウト"}
,"byousatsu knockout 2" : {n:"秒殺ノックアウト2"}
,"byousatsu knockout 4" : {n:"秒殺ノックアウト4"}
,"byousatsu knockout 5" : {n:"秒殺ノックアウト5"}
,"houkago assassin party!" : {n:"放課後暗殺者PARTY！"}
,"houkago assassin party! 2" : {n:"放課後暗殺者PARTY！2"}
,"houkago ansatsusha party!3" : {n:"放課後暗殺者PARTY！3"}
,"bokura wa koroshiya" : {n:"僕らは殺し屋"}
,"bokura wa koroshiya 2" : {n:"僕らは殺し屋2"}
,"yamaket 6" : {n:"ヤマケット 6"}
,"angel time 3" : {n:"エンジェルタイム3"}
,"angel time 4" : {n:"エンジェルタイム4"}
,"angel time 6" : {n:"エンジェルタイム6"}
,"formosa chinjufu 2" : {n:"フォルモサ鎮守府弐"}
,"yokosuka chinjufu" : {n:"横須賀鎮守府"}
,"yokosuka chinjufu 2" : {n:"横須賀鎮守府弐"}
,"ware, yasen ni totsunyuu su!" : {n:"我、夜戦に突入す!"}
,"ware, yasen totsunyuusu!" : {n:"我、夜戦に突入す!"}
,"ware, yasen ni totsunyuusu! -hakata futou shinkou sakusen 2-" : {n:"我、夜戦に突入す! -博多ふ頭侵攻作戦2-"}
,"ware, yasen ni totsunyuu su! 2" : {n:"我、夜戦に突入す!2"}
,"ware, yasen totsunyuusu! 2" : {n:"我、夜戦に突入す!2"}
,"ware, yasen ni totsunyuusu! 3" : {n:"我、夜戦に突入す!3"}
,"ware, yasen totsunyuusu! 3" : {n:"我、夜戦に突入す!3"}
,"ware, yasen ni totsunyuu su! 3 gokuen" : {n:"我、夜戦に突入す!3 獄炎"}
,"ware, yasen ni totsunyuusu! 4" : {n:"我、夜戦に突入す!4"}
,"ware, yasen ni totsunyuu su! 4 senpuu" : {n:"我、夜戦に突入す!4 旋風"}
,"ware, yasen ni totsunyuusu! 4 senpuu" : {n:"我、夜戦に突入す!4 旋風"}
,"ware, yasen ni totsunyuusu! 5 raigou" : {n:"我、夜戦に突入す!5 雷轟"}
,"ware, yasen ni totsunyuu su! 6" : {n:"我、夜戦に突入す!6"}
,"ware, yasen ni totsunyuusu! 6" : {n:"我、夜戦に突入す!6"}
,"ware, yasen ni totsunyuusu! 6 senkou" : {n:"我、夜戦に突入す!6 閃光"}
,"umi yukaba" : {n:"海ゆかば"}
,"umi yukaba 2" : {n:"海ゆかば2"}
,"umi yukaba 3" : {n:"海ゆかば3"}
,"umi yukaba 4" : {n:"海ゆかば4"}
,"umi yukaba 5" : {n:"海ゆかば5"}
,"umi yukaba 6" : {n:"海ゆかば6"}
,"umi yukaba 7" : {n:"海ゆかば7"}
,"umi yukaba 8" : {n:"海ゆかば8"}
,"kamata chinjufu" : {n:"蒲田鎮守府"}
,"kamata chinjufu 3" : {n:"蒲田鎮守府参"}
,"kamata chinjufu 2" : {n:"蒲田鎮守府弐"}
,"kanmusu marine festa ~kanfes~" : {n:"艦娘まりんふぇすた～艦ふぇす～"}
,"gunreibu shuho gunrei dai 6-gou" : {n:"軍令部酒保軍令第6号"}
,"gunreibu shuho goudou enshuu reiwa sannen touki" : {n:"軍令部酒保合同演習令和3年冬季"}
,"gunreibu shuho reiwa yonnen shuuki" : {n:"軍令部酒保令和4年秋季"}
,"gunreibu shuho reiwa gonen shuuki" : {n:"軍令部酒保令和5年秋季"}
,"gunreibu shuho reiwa gonen shunki" : {n:"軍令部酒保令和5年春季"}
,"gunreibu shuho reiwa gonen fuyu" : {n:"軍令部酒保令和5年冬季"}
,"gunreibu hamamatsuchou shuho" : {n:"軍令部浜松町酒保"}
,"gunreibu hamamatsu-chou shuho" : {n:"軍令部浜松町酒保"}
,"gunreibu hamamatsuchou shuho 2" : {n:"軍令部浜松町酒保 2"}
,"gunreibu hamamatsu-chou shuho 2" : {n:"軍令部浜松町酒保 2"}
,"kobe kawasaki zousen collection 10" : {n:"神戸かわさき造船これくしょん10"}
,"kobe kawasaki zousen collection 11" : {n:"神戸かわさき造船これくしょん11"}
,"kobe kawasaki zousen collection 2" : {n:"神戸かわさき造船これくしょん2"}
,"kobe kawasaki zousen collection 3" : {n:"神戸かわさき造船これくしょん3"}
,"koube kawasaki zousen collection 3" : {n:"神戸かわさき造船これくしょん3"}
,"kobe kawasaki zousen collection 4" : {n:"神戸かわさき造船これくしょん4"}
,"koube kawasaki zousen collection 4" : {n:"神戸かわさき造船これくしょん4"}
,"koube kawasaki zousen collection 5" : {n:"神戸かわさき造船これくしょん5"}
,"kobe kawasaki zousen collection 6" : {n:"神戸かわさき造船これくしょん6"}
,"kobe kawasaki zousen collection 7" : {n:"神戸かわさき造船これくしょん7"}
,"koube kawasaki zousen collection 7" : {n:"神戸かわさき造船これくしょん7"}
,"kobe kawasaki zousen collection 8" : {n:"神戸かわさき造船これくしょん8"}
,"kobe kawasaki zousen collection 9" : {n:"神戸かわさき造船これくしょん9"}
,"houraigekisen! yo-i!" : {n:"砲雷撃戦！よーい！"}
,"houraigekisen! yo-i! gunreibu shuho" : {n:"砲雷撃戦！よーい！ ＆軍令部酒保"}
,"houraigekisen! yo-i! okinawasp" : {n:"砲雷撃戦！よーい！ 沖縄SP"}
,"houraigekisen yo-i! 9senme" : {n:"砲雷撃戦！よーい！ 九戦目"}
,"houraigekisen! yo-i! 9senme" : {n:"砲雷撃戦！よーい！ 九戦目"}
,"houraigekisen! yo-i! 9senme!" : {n:"砲雷撃戦！よーい！ 九戦目"}
,"gunrei bu shuho & houraigekisen! yo-i! goudou enshuu" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習"}
,"gunreibu shuho & houraigekisen! yo-i! goudou enshuu" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習"}
,"gunreibu shuho & houraigekisen yo-i! goudou enshuu 5senme" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 五戦目"}
,"gunreibu shuho & houraigekisen! yo-i! goudou enshuu 5senme" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 五戦目"}
,"gunrei bu shuho & houraigekisen! yo-i! goudou enshuu 3senme" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 三戦目"}
,"gunreibu shuho & houraigekisen yo-i! goudou enshuu 3senme" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 三戦目"}
,"gunreibu shuho & houraigekisen! yo-i! goudou enshuu 3senme" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 三戦目"}
,"houraigekisen! yo-i! & gunrei bu shuho goudou enshuu 3senme" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 三戦目"}
,"houraigekisen! yo-i! & gunreibu shuho goudou enshuu 3senme" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 三戦目"}
,"gunreibu shuho & houraigekisen! yo-i! goudou enshuu 4senme" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 四戦目"}
,"gunrei bu shuho & houraigekisen! yo-i! goudou enshuu 2senme" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 二戦目"}
,"gunreibu shuho & houraigekisen yo-i! goudou enshuu 2senme" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 二戦目"}
,"gunreibu shuho & houraigekisen! yo-i! goudou enshuu 02" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 二戦目"}
,"gunreibu shuho & houraigekisen! yo-i! goudou enshuu 2senme" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 二戦目"}
,"houraigekisen yo-i! & gunreibu shuho goudou enshuu 2senme" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 二戦目"}
,"houraigekisen! yo-i! & gunrei bu shuho goudou enshuu 2senme" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習 二戦目"}
,"houraigekisen! yo-i! gunreibu shuho goudou enshuu shunki" : {n:"砲雷撃戦！よーい！ 軍令部酒保合同演習春季"}
,"houraigekisen! yo-i! 55senme" : {n:"砲雷撃戦！よーい！ 五十五戦目"}
,"houraigekisen! yo-i! 50senme" : {n:"砲雷撃戦！よーい！ 五十戦目"}
,"houraigekisen! yooi! 50 senme" : {n:"砲雷撃戦！よーい！ 五十戦目"}
,"houraigekisen! yo-i! 50senme&gunreibu shuho" : {n:"砲雷撃戦！よーい！ 五十戦目＆軍令部酒保"}
,"houraigekisen! yooi! 50 senme&gunreibu shuho" : {n:"砲雷撃戦！よーい！ 五十戦目＆軍令部酒保"}
,"houraigekisen! yo-i! 52senme" : {n:"砲雷撃戦！よーい！ 五十二戦目"}
,"houraigekisen! yo-i! 52senme & gunreibu shuho" : {n:"砲雷撃戦！よーい！ 五十二戦目＆軍令部酒保"}
,"houraigekisen! yo-i! 5senme!" : {n:"砲雷撃戦！よーい！ 五戦目"}
,"houraigekisen! yo-i! 35senme" : {n:"砲雷撃戦！よーい！ 三十五戦目"}
,"houraigekisen! yo-i! 34senme" : {n:"砲雷撃戦！よーい！ 三十四戦目"}
,"houraigekisen! yo-i! 32senme" : {n:"砲雷撃戦！よーい！ 三十二戦目"}
,"houraigekisen yo-i 38senme" : {n:"砲雷撃戦！よーい！ 三十八戦目"}
,"houraigekisen! yo-i! 38senme" : {n:"砲雷撃戦！よーい！ 三十八戦目"}
,"houraigekisen! yo-i! 3senme" : {n:"砲雷撃戦！よーい！ 三戦目"}
,"houraigekisen! yo-i! 3senme!" : {n:"砲雷撃戦！よーい！ 三戦目"}
,"houraigekisen! yo-i! 43senme" : {n:"砲雷撃戦！よーい！ 四十三戦目"}
,"houraigekisen! yo-i! 46senme" : {n:"砲雷撃戦！よーい！ 四十六戦目"}
,"houraigekisen! yo-i! 4senme" : {n:"砲雷撃戦！よーい！ 四戦目"}
,"houraigekisen! yo-i! 4senme!" : {n:"砲雷撃戦！よーい！ 四戦目"}
,"houraigekisen! yo-i! 14senme" : {n:"砲雷撃戦！よーい！ 十四戦目"}
,"houraigekisen! yo-i! 14senme!" : {n:"砲雷撃戦！よーい！ 十四戦目"}
,"houraigekisen! yo-i! 17senme" : {n:"砲雷撃戦！よーい！ 十七戦目"}
,"houraigekisen! yo-i! 17senme!" : {n:"砲雷撃戦！よーい！ 十七戦目"}
,"houraigekisen yo-i! 12senme" : {n:"砲雷撃戦！よーい！ 十二戦目"}
,"houraigekisen! yo-i! 12senme" : {n:"砲雷撃戦！よーい！ 十二戦目"}
,"houraigekisen! yo-i! 29senme" : {n:"砲雷撃戦！よーい！ 二十九戦目"}
,"houraigekisen! yo-i! 29senme!" : {n:"砲雷撃戦！よーい！ 二十九戦目"}
,"houraigekisen! yo-i! 25senme" : {n:"砲雷撃戦！よーい！ 二十五戦目"}
,"houraigekisen! yo-i! 25senme!" : {n:"砲雷撃戦！よーい！ 二十五戦目"}
,"houraigekisen! yo-i! 23senme" : {n:"砲雷撃戦！よーい！ 二十三戦目"}
,"houraigekisen! yo-i! 23senme!" : {n:"砲雷撃戦！よーい！ 二十三戦目"}
,"houraigekisen! yo-i! 28senme" : {n:"砲雷撃戦！よーい！ 二十八戦目"}
,"houraigekisen! yo-i! 28senme!" : {n:"砲雷撃戦！よーい！ 二十八戦目"}
,"houraigekisen! yo-i! 2senme" : {n:"砲雷撃戦！よーい！ 二戦目"}
,"houraigekisen! yo-i! 2senme!" : {n:"砲雷撃戦！よーい！ 二戦目"}
,"houraigekisen! yo-i! rei no pool kaiiki" : {n:"砲雷撃戦！よーい！ 例のプール海域"}
,"houraigekisen! yo-i! 61senme & gunreibu shuho" : {n:"砲雷撃戦！よーい！ 六十一戦目＆軍令部酒保"}
,"houraigekisen! yo-i! 63senme" : {n:"砲雷撃戦！よーい！ 六十三戦目"}
,"houraigekisen! yo-i! 66senme" : {n:"砲雷撃戦！よーい！ 六十六戦目"}
,"houraigekisen yo-i! 6 senme" : {n:"砲雷撃戦！よーい！ 六戦目"}
,"houraigekisen yo-i! 6senme" : {n:"砲雷撃戦！よーい！ 六戦目"}
,"houraigekisen! yo-i! 6senme" : {n:"砲雷撃戦！よーい！ 六戦目"}
,"houraigekisen! yo-i! 6senme!" : {n:"砲雷撃戦！よーい！ 六戦目"}
,"houraigekisen! yooi! 06 senme" : {n:"砲雷撃戦！よーい！ 六戦目"}
,"houraigekisen! yo-i! 6senme, ct23" : {n:"砲雷撃戦！よーい！ 六戦目、コミとれ23"}
,"houraigekisen & gunreibu shuho 2020 autumn goudou enshuu" : {n:"砲雷撃戦&軍令部酒保令和2年秋合同演習"}
,"gund parade 3" : {n:"GUNDパレード3"}
,"jigoku no tomoshibi nanba" : {n:"地獄の灯火 難波"}
,"jigoku no tomoshibi nanba ni" : {n:"地獄の灯火 難波2"}
,"jigoku no tomoshibi nanba san" : {n:"地獄の灯火 難波3"}
,"jigoku no tomoshibi nanba shi" : {n:"地獄の灯火 難波4"}
,"jigoku no tomoshibi 3" : {n:"地獄の灯火3"}
,"jigoku no tomoshibi 4" : {n:"地獄の灯火4"}
,"jigoku no tomoshibi 5" : {n:"地獄の灯火5"}
,"jigoku no tomoshibi go" : {n:"地獄の灯火5"}
,"jigoku no tomoshibi 6" : {n:"地獄の灯火6"}
,"jigoku no tomoshibi nana" : {n:"地獄の灯火7"}
,"jigoku tokubetsu kaigi 2" : {n:"地獄特別会議2"}
,"jigoku tokubetsu kaigi 3" : {n:"地獄特別会議3"}
,"jigoku tokubetsu kaigi 5" : {n:"地獄特別会議5"}
,"koi no tougenkyou ~mofumofu paradise~" : {n:"恋の桃源郷～もふもふパラダイス～"}
,"koi no tougenkyou mofumofu paradise" : {n:"恋の桃源郷～もふもふパラダイス～"}
,"koi no tougenkyou ~mofumofu paradise~ 3" : {n:"恋の桃源郷～もふもふパラダイス～ 3"}
,"koi no tougenkyou ~mofumofu paradise~ 4" : {n:"恋の桃源郷～もふもふパラダイス～ 4"}
,"koi no tougenkyou ~mofumofu paradise~ 7" : {n:"恋の桃源郷～もふもふパラダイス～ 7"}
,"chou nichirin kitan" : {n:"超日輪鬼譚"}
,"chou nichirin kitan 2021" : {n:"超日輪鬼譚2021"}
,"chou nichirin kitan 2022" : {n:"超日輪鬼譚2022"}
,"chou nichirin kitan 2022 natsu" : {n:"超日輪鬼譚2022夏"}
,"chou nichirin kitan 2023" : {n:"超日輪鬼譚2023"}
,"chou nichirin kitan 2023 natsu" : {n:"超日輪鬼譚2023夏"}
,"nichirin kitan kinkyuu summer 2021" : {n:"日輪鬼譚 緊急SUMMER2021"}
,"nichirin kitan 10" : {n:"日輪鬼譚10"}
,"nichirin kitan 12" : {n:"日輪鬼譚12"}
,"nichirin kitan 13" : {n:"日輪鬼譚13"}
,"nichirin kitan 16" : {n:"日輪鬼譚16"}
,"nichirin kitan 17" : {n:"日輪鬼譚17"}
,"nichirin kitan 18" : {n:"日輪鬼譚18"}
,"nichirin kitan 20" : {n:"日輪鬼譚20"}
,"nichirin kitan 22" : {n:"日輪鬼譚22"}
,"nichirin kitan 23" : {n:"日輪鬼譚23"}
,"nichirin kitan 26" : {n:"日輪鬼譚26"}
,"nichirin kitan 27" : {n:"日輪鬼譚27"}
,"nichirin kitan 30" : {n:"日輪鬼譚30"}
,"nichirin kitan 33" : {n:"日輪鬼譚33"}
,"nichirin kitan 4" : {n:"日輪鬼譚4"}
,"nichirin kitan 5" : {n:"日輪鬼譚5"}
,"nichirin kitan 6" : {n:"日輪鬼譚6"}
,"nichirin kitan 9" : {n:"日輪鬼譚9"}
,"kaze ga orinasu mizu moyou 4" : {n:"風が織りなす水模様 4"}
,"kaze ga orinasu mizu moyou dr2023" : {n:"風が織りなす水模様 DE2023"}
,"kaze ga orinasu mizu moyou jb2021" : {n:"風が織りなす水模様 JB2021"}
,"kaze ga orinasu mizu moyou jb2023" : {n:"風が織りなす水模様 JB2023"}
,"kaze ga orinasu mizu moyou hoshi ni negai o. 2022" : {n:"風が織りなす水模様 星願2022"}
,"mizube ni maiorita chou dr2021" : {n:"水辺に舞い降りた蝶 DR2021"}
,"mizube ni maiorita chou dr2022" : {n:"水辺に舞い降りた蝶 DR2022"}
,"sabaki no niwa 11" : {n:"裁きの庭11"}
,"sabaki no niwa 12" : {n:"裁きの庭12"}
,"sabaki no niwa 17" : {n:"裁きの庭17"}
,"sabaki no niwa 19" : {n:"裁きの庭19"}
,"sabaki no niwa 20" : {n:"裁きの庭20"}
,"sabaki no niwa 21" : {n:"裁きの庭21"}
,"sabaki no niwa 24" : {n:"裁きの庭24"}
,"sabaki no niwa 26" : {n:"裁きの庭26"}
,"sabaki no niwa 27" : {n:"裁きの庭27"}
,"sabaki no niwa 28" : {n:"裁きの庭28"}
,"sabaki no niwa 29" : {n:"裁きの庭29"}
,"sabaki no niwa 30" : {n:"裁きの庭30"}
,"sabaki no niwa 6" : {n:"裁きの庭6"}
,"drunk in long night jb2023" : {n:"Drunk in Long Night JB2023"}
,"dai 10 kai chikashiki shinkou no tame no doujinshi kouzu kai" : {n:"第10回 近しき親交のための同人誌好事会"}
,"dai 11 kai chikashiki shinkou no tame no doujinshi kouzu kai" : {n:"第11回 近しき親交のための同人誌好事会"}
,"dai 14 kai chikashiki shinkou no tame no doujinshi kouzu kai" : {n:"第14回 近しき親交のための同人誌好事会"}
,"dai 16 kai chikashiki shinkou no tame no doujinshi kouzu kai" : {n:"第16回 近しき親交のための同人誌好事会"}
,"dai 20 kai chikashiki shinkou no tame no doujinshi kouzu kai" : {n:"第20回 近しき親交のための同人誌好事会"}
,"dai 23 kai chikashiki shinkou no tame no doujinshi kouzu kai" : {n:"第23回 近しき親交のための同人誌好事会"}
,"dai 3 kai chikashiki shinkou no tame no doujinshi kouzu kai" : {n:"第3回 近しき親交のための同人誌好事会"}
,"dai 4 kai chikashiki shinkou no tame no doujinshi kouzu kai" : {n:"第4回 近しき親交のための同人誌好事会"}
,"dai 5 kai chikashiki shinkou no tame no doujinshi kouzu kai" : {n:"第5回 近しき親交のための同人誌好事会"}
,"dai 6 kai chikashiki shinkou no tame no doujinshi kouzu kai" : {n:"第6回 近しき親交のための同人誌好事会"}
,"dai 7 kai chikashiki shinkou no tame no doujinshi kouzu kai" : {n:"第7回 近しき親交のための同人誌好事会"}
,"dai 8 kai chikashiki shinkou no tame no doujinshi kouzu kai" : {n:"第8回 近しき親交のための同人誌好事会"}
,"dai 9 kai chikashiki shinkou no tame no doujinshi kouzu kai" : {n:"第9回 近しき親交のための同人誌好事会"}
,"kotonoha's festa" : {n:"コトノハーズフェスタ"}
,"kotonoha's festa 2" : {n:"コトノハーズフェスタ2"}
,"kotonoha's festa 8" : {n:"コトノハーズフェスタ8"}
,"kabukichou hanami dai enkai" : {n:"かぶき町花見大宴会"}
,"kabukichou oohanabi taikai 2017" : {n:"かぶき町大花火大会2017"}
,"kabukichou oohanabi taikai 2018" : {n:"かぶき町大花火大会2018"}
,"kabukichou oohanabi taikai 2019" : {n:"かぶき町大花火大会2019"}
,"kabukichou daishuukai" : {n:"かぶき超大集会"}
,"kabukichou daishuukai 11" : {n:"かぶき超大集会11"}
,"kabukichou daishuukai 14" : {n:"かぶき超大集会14"}
,"kabukichou daishuukai 2" : {n:"かぶき超大集会2"}
,"kabukichou daishuukai 2018" : {n:"かぶき超大集会2018"}
,"kabukichou daishuukai 2019" : {n:"かぶき超大集会2019"}
,"kabukichou daishuukai 2021" : {n:"かぶき超大集会2021"}
,"kabukichou daishuukai 25" : {n:"かぶき超大集会25"}
,"kabukichou daishuukai 4" : {n:"かぶき超大集会4"}
,"kabukichou daishuukai 5" : {n:"かぶき超大集会5"}
,"kabukichou daishuukai 9" : {n:"かぶき超大集会9"}
,"azuki mayo don dr2021" : {n:"あずきマヨ丼 DR2021"}
,"yuushabu mankai - yuushabu kokoroe, hitotsu!" : {n:"勇者部満開 勇者部心得、とーっう！"}
,"bloody zone" : {n:"BLOODY ZONE"}
,"bloody zone 14" : {n:"BLOODY ZONE 14"}
,"bloody zone 2" : {n:"BLOODY ZONE 2"}
,"bloody zone 3" : {n:"BLOODY ZONE 3"}
,"bloody zone 6" : {n:"BLOODY ZONE 6"}
,"bloody zone west" : {n:"BLOODY ZONE WEST"}
,"super bloody zone 2017" : {n:"SUPER BLOODY ZONE 2017"}
,"ikai toshi no arukikata" : {n:"異界都市の歩き方"}
,"ikai toshi no arukikata 2" : {n:"異界都市の歩き方 2"}
,"ikai toshi no arukikata central" : {n:"異界都市の歩き方CENTRAL"}
,"ikai toshi no arukikata west" : {n:"異界都市の歩き方WEST"}
,"ikai toshi no arukikata west 2" : {n:"異界都市の歩き方WEST 2"}
,"bessatsu love romance" : {n:"別冊ラブロマンス"}
,"bessatsu love romance osaka" : {n:"別冊ラブロマンス 大阪"}
,"bessatsu love romance 2" : {n:"別冊ラブロマンス2"}
,"bessatsu love romance 3" : {n:"別冊ラブロマンス3"}
,"bessatsu love romance 5" : {n:"別冊ラブロマンス5"}
,"tsukiyomi no utage" : {n:"月詠宴"}
,"tsukiyomi no utage 4" : {n:"月詠宴4"}
,"tsukihime matsuri" : {n:"月姫祭"}
,"tsukihimematsuri" : {n:"月姫祭"}
,"kami no eichi" : {n:"神ノ叡智"}
,"kami no eichi 10" : {n:"神ノ叡智 10"}
,"kami no eichi 11" : {n:"神ノ叡智 11"}
,"kami no eichi 12" : {n:"神ノ叡智 12"}
,"kami no eichi 13" : {n:"神ノ叡智 13"}
,"kami no eichi 14" : {n:"神ノ叡智 14"}
,"kami no eichi 15" : {n:"神ノ叡智 15"}
,"kami no eichi 19" : {n:"神ノ叡智 19"}
,"kami no eichi 2" : {n:"神ノ叡智 2"}
,"kami no eichi 21" : {n:"神ノ叡智 21"}
,"kami no eichi 22" : {n:"神ノ叡智 22"}
,"kami no eichi 3" : {n:"神ノ叡智 3"}
,"kami no eichi 4" : {n:"神ノ叡智 4"}
,"kami no eichi 5" : {n:"神ノ叡智 5"}
,"kami no eichi 6" : {n:"神ノ叡智 6"}
,"kami no eichi 8" : {n:"神ノ叡智 8"}
,"kami no eichi 9" : {n:"神ノ叡智 9"}
,"chojin no eichi 2022" : {n:"超神ノ叡智 2022"}
,"chojin no eichi 2023" : {n:"超神ノ叡智 2023"}
,"chou kami no eichi 2023" : {n:"超神ノ叡智 2023"}
,"chou kami no eichi 2023 natsu" : {n:"超神ノ叡智 2023夏"}
,"chou kami no eichi 2025 winter" : {n:"超神ノ叡智 2023冬"}
,"chou kami no eichi 2024" : {n:"超神ノ叡智 2024"}
,"chou kami no eichi 2025" : {n:"超神ノ叡智 2025"}
,"akatuki no bishu o kimi ni dr2023" : {n:"アカツキの美酒を君に DR2023"}
,"banjaku no kimi to ruri no hana de yakusoku o" : {n:"磐石の君と琉璃の花で約束を"}
,"banjaku no kimi to ruri no hana de yakusoku o 3" : {n:"磐石の君と琉璃の花で約束を3"}
,"shiroket" : {n:"しろけっと"}
,"shiroket 4" : {n:"しろけっと4"}
,"super gathering day 2018" : {n:"SUPER GATHERING DAY 2018"}
,"super gathering day 2019" : {n:"SUPER GATHERING DAY 2019"}
,"super gathering day 2023 natsu" : {n:"SUPER GATHERING DAY 2023夏"}
,"the gathering day2" : {n:"THE GATHERING DAY 2"}
,"the gathering day 7" : {n:"THE GATHERING DAY 7"}
,"the gathering day 9" : {n:"THE GATHERING DAY 9"}
,"rumiket 2" : {n:"るみけっと2"}
,"rumiket 4" : {n:"るみけっと4"}
,"rumiket 6" : {n:"るみけっと6"}
,"dc returns" : {n:"DC RETURNS"}
,"dc returns 1" : {n:"DC RETURNS 1"}
,"dc returns 10" : {n:"DC RETURNS 10"}
,"dc returns 11" : {n:"DC RETURNS 11"}
,"dc returns 12" : {n:"DC RETURNS 12"}
,"dc returns 13" : {n:"DC RETURNS 13"}
,"dc returns 15" : {n:"DC RETURNS 15"}
,"dc returns 24" : {n:"DC RETURNS 24"}
,"dc returns 25" : {n:"DC RETURNS 25"}
,"dc returns 3" : {n:"DC RETURNS 3"}
,"dc returns 6" : {n:"DC RETURNS 6"}
,"dc returns 7" : {n:"DC RETURNS 7"}
,"hop!step!jam!" : {n:"Hop! Step! Jam!"}
,"hop! step! jam! 2" : {n:"Hop! Step! Jam! 2"}
,"hop!step!jam! 2" : {n:"Hop! Step! Jam! 2"}
,"hop!step!jam! 3" : {n:"Hop! Step! Jam! 3"}
,"shadow trickster 2" : {n:"Shadow Trickster 2"}
,"shadow trickster 3" : {n:"Shadow Trickster 3"}
,"shadowtrickster3" : {n:"Shadow Trickster 3"}
,"shadow trickster 5" : {n:"Shadow Trickster 5"}
,"shadow trickster natsuyasumi special" : {n:"Shadow Trickster 夏休みスペシャル"}
,"shadow trickster shizuoka" : {n:"Shadow Trickster 静岡"}
,"shadow trickster sendai" : {n:"Shadow Trickster 仙台"}
,"super dc returns 2020" : {n:"SUPER DC RETURNS 2020"}
,"kuroket" : {n:"くろケット"}
,"burning ★ shake!" : {n:"バーニング★シェイク!"}
,"burning ★ shake! 2" : {n:"バーニング★シェイク! 2"}
,"burning ★ shake! 4" : {n:"バーニング★シェイク! 4"}
,"anta, senaka ga suketeru je!! nagoya dai 5 kai" : {n:"あンた、背中が透けてるじぇ!! 名古屋第５回"}
,"motenaishi meguriau 2" : {n:"モテないし巡り会う 2"}
,"motenaishi meguriau 4 in kyoto" : {n:"モテないし巡り会う4 in京都"}
,"motenaishi sokubaikai suru 11" : {n:"モテないし即売会する 11"}
,"motenaishi sokubaikai suru 14" : {n:"モテないし即売会する 14"}
,"motenaishi sokubaikai suru 2" : {n:"モテないし即売会する 2"}
,"motenaishi sokubaikai suru 3" : {n:"モテないし即売会する 3"}
,"motenaishi sokubaikai suru 4" : {n:"モテないし即売会する 4"}
,"motenaishi sokubaikai suru 7" : {n:"モテないし即売会する 7"}
,"motenaishi sokubaikai suru 9" : {n:"モテないし即売会する 9"}
,"tsumi to batsu" : {n:"罪と罰"}
,"tsumi to batsu 2" : {n:"罪と罰2"}
,"tsumi to batsu 3" : {n:"罪と罰3"}
,"tsumi to batsu 4" : {n:"罪と罰4"}
,"egetsunai sabbath" : {n:"えげつないサバト"}
,"egetsunai sabbath 2" : {n:"えげつないサバト2"}
,"anata to dokidoki shitai! 4" : {n:"あなたとドキドキしたい！4"}
,"anata to dokidoki shitai! 9" : {n:"あなたとドキドキしたい！9"}
,"sakamichi climb! 4" : {n:"坂道クライム！4"}
,"sakamichi climb! 5" : {n:"坂道クライム！5"}
,"sakamichi climb! 6" : {n:"坂道クライム！6"}
,"sakamichi climb! 8" : {n:"坂道クライム！8"}
,"sakamichi climb! 9" : {n:"坂道クライム！9"}
,"sakamichi climb! sapporo 5" : {n:"坂道クライム！札幌5"}
,"sakamichi climb! osaka" : {n:"坂道クライム！大阪"}
,"sakamichi climb! osaka 3" : {n:"坂道クライム！大阪3"}
,"sakamichi climb! osaka 5" : {n:"坂道クライム！大阪5"}
,"zenkai cadence" : {n:"全開ケイデンス"}
,"zenkai cadence 10" : {n:"全開ケイデンス10"}
,"zenkai cadence 12" : {n:"全開ケイデンス12"}
,"zenkai cadence 16" : {n:"全開ケイデンス16"}
,"zenkai cadence 18" : {n:"全開ケイデンス18"}
,"zenkai cadence 2" : {n:"全開ケイデンス2"}
,"zenkai cadence 26" : {n:"全開ケイデンス26"}
,"zenkai cadence 3" : {n:"全開ケイデンス3"}
,"zenkai cadence 5" : {n:"全開ケイデンス5"}
,"zenkai cadence 6" : {n:"全開ケイデンス6"}
,"zenkai cadence 7" : {n:"全開ケイデンス7"}
,"zenkai cadence 8" : {n:"全開ケイデンス8"}
,"chou zenkai cadence 2017" : {n:"超全開ケイデンス2017"}
,"chou zenkai cadence 25" : {n:"超全開ケイデンス25"}
,"zenkai cadence 25" : {n:"超全開ケイデンス25"}
,"arakure ookami 4" : {n:"荒くれ狼4"}
,"aoi sangaku no tenshi-sama 2" : {n:"青い山岳の天使様2"}
,"aoi yama no tenshi-sama 2" : {n:"青い山岳の天使様2"}
,"aoi sangaku no tenshi-sama 3" : {n:"青い山岳の天使様3"}
,"chou yougen 2021 osaka" : {n:"超妖言 2021大阪"}
,"chou yougen 2021 tokyo" : {n:"超妖言 2021東京"}
,"chou yougen 2022" : {n:"超妖言 2022"}
,"chou yougen 2022 natsu" : {n:"超妖言 2022夏"}
,"chou yougen 2023" : {n:"超妖言 2023"}
,"chou yougen 2023 natsu" : {n:"超妖言 2023夏"}
,"chou yougen 2024" : {n:"超妖言 2024"}
,"chou yougen 2025 osaka" : {n:"超妖言 2025大阪"}
,"chou yougen 2025 fuyu" : {n:"超妖言 2025冬"}
,"yougen 10" : {n:"妖言 10"}
,"yougen 11" : {n:"妖言 11"}
,"yougen 12" : {n:"妖言 12"}
,"yougen 14" : {n:"妖言 14"}
,"yougen 15" : {n:"妖言 15"}
,"yougen 16" : {n:"妖言 16"}
,"yougen 18" : {n:"妖言 18"}
,"yougen 19" : {n:"妖言 19"}
,"yougen 20" : {n:"妖言 20"}
,"yougen 21" : {n:"妖言 21"}
,"yougen 22" : {n:"妖言 22"}
,"yougen 24" : {n:"妖言 24"}
,"yougen 25" : {n:"妖言 25"}
,"yougen 26" : {n:"妖言 26"}
,"yougen 27" : {n:"妖言 27"}
,"yogen 28" : {n:"妖言 28"}
,"yougen 28" : {n:"妖言 28"}
,"yougen 33" : {n:"妖言 33"}
,"yougen 34" : {n:"妖言 34"}
,"yougen 5" : {n:"妖言 5"}
,"yougen 6" : {n:"妖言 6"}
,"yougen 7" : {n:"妖言 7"}
,"yougen 8" : {n:"妖言 8"}
,"yougen 9" : {n:"妖言 9"}
,"yougen kinkyuu summer 2021" : {n:"妖言 緊急SUMMER2021"}
,"koe ni dekinai ai kotoba 4" : {n:"声にできない愛言葉 4"}
,"koe ni dekinai ai kotoba dr2023" : {n:"声にできない愛言葉 DR2023"}
,"koe ni dekinai ai kotoba  jb2023" : {n:"声にできない愛言葉 JB2023"}
,"koe ni dekinai ai kotoba jb2023" : {n:"声にできない愛言葉 JB2023"}
,"koe ni dekinai ai kotoba jb2024" : {n:"声にできない愛言葉 JB2024"}
,"irozuita megumi no hibi" : {n:"色づいた恵の日々"}
,"irozuita megumi no hibi 2" : {n:"色づいた恵の日々2"}
,"irozuita megumi no hibi 5" : {n:"色づいた恵の日々5"}
,"irozuita megumi no hibi jb2023" : {n:"色づいた恵の日々JB2023"}
,"houkago utopia 2" : {n:"放課後ユートピア 2"}
,"houkago utopia 5" : {n:"放課後ユートピア 5"}
,"houkago utopia dr2021" : {n:"放課後ユートピア DR2021"}
,"houkago utopia dr2022" : {n:"放課後ユートピア DR2022"}
,"houkago utopia dr2023" : {n:"放課後ユートピア DR2023"}
,"houkago utopia jb2023" : {n:"放課後ユートピア JB2023"}
,"houkago utopia hoshi ni negai o. 2022" : {n:"放課後ユートピア 星願2022"}
,"57festa!!2" : {n:"57FESTA!!2"}
,"aishi no oshiego 4" : {n:"愛しの教え子 4"}
,"aishi no oshiego dr2021" : {n:"愛しの教え子 DR2021"}
,"aishi no oshiego dr2023" : {n:"愛しの教え子 DR2023"}
,"aishi no oshiego hoshi ni negai o. 2022" : {n:"愛しの教え子 星願2022"}
,"kage to hibana" : {n:"影と火花"}
,"kage to hibana 2" : {n:"影と火花2"}
,"kage to hibana 3" : {n:"影と火花3"}
,"fusetaru wa itaike na koi dr2021" : {n:"伏せたるは幼気な恋 DR2021"}
,"fusetaru wa itaike na koi hoshi ni negai o. 2022" : {n:"伏せたるは幼気な恋 星願2022"}
,"ayameru toki mo sukuitaru toki mo hoshi ni negai o. 2022" : {n:"あやめる時も救いたる時も 星願2022"}
,"kimi to no rendan" : {n:"君との連弾"}
,"kimi to no rendan osaka 2" : {n:"君との連弾 大阪2"}
,"kimi to no rendan 15" : {n:"君との連弾15"}
,"kimi to no rendan 19" : {n:"君との連弾19"}
,"kimi to no rendan 2" : {n:"君との連弾2"}
,"kimi to no rendan 20" : {n:"君との連弾20"}
,"kimi to no rendan 21" : {n:"君との連弾21"}
,"kimi to no rendan 22" : {n:"君との連弾22"}
,"kimi to no rendan 3" : {n:"君との連弾3"}
,"kimi to no rendan 4" : {n:"君との連弾4"}
,"kimi to no rendan 5" : {n:"君との連弾5"}
,"kimi to no rendan 6" : {n:"君との連弾6"}
,"kimi to no rendan 7" : {n:"君との連弾7"}
,"fall of wall" : {n:"FALL OF WALL"}
,"fall of wall2" : {n:"FALL OF WALL 2"}
,"fall of wall3" : {n:"FALL OF WALL 3"}
,"fall of wall4" : {n:"FALL OF WALL 4"}
,"fall of wall5" : {n:"FALL OF WALL 5"}
,"fall of wall6" : {n:"FALL OF WALL 6"}
,"fall of wall7" : {n:"FALL OF WALL 7"}
,"fall of wall christmas special 2013" : {n:"FALL OF WALL クリスマススペシャル 2013"}
,"fall of wall osaka" : {n:"FALL OF WALL 大阪"}
,"fall of wall osaka 2" : {n:"FALL OF WALL 大阪 2"}
,"fall of wall osaka 3" : {n:"FALL OF WALL 大阪 3"}
,"fall of wall osaka 5" : {n:"FALL OF WALL 大阪 5"}
,"fall of wall nagoya" : {n:"FALL OF WALL 名古屋"}
,"kyuushuu hekigai chousa haku" : {n:"九州壁外調査博"}
,"dai 10 kai hekigai chousa haku" : {n:"第10回壁外調査博"}
,"dai 11 kai hekigai chousa haku" : {n:"第11回壁外調査博"}
,"dai 12 kai hekigai chousa haku" : {n:"第12回壁外調査博"}
,"dai 14 kai hekigai chousa haku" : {n:"第14回壁外調査博"}
,"dai 15 kai hekigai chousa haku" : {n:"第15回壁外調査博"}
,"dai 17 kai hekigai chousa haku" : {n:"第17回壁外調査博"}
,"dai 19 kai hekigai chousa haku" : {n:"第19回壁外調査博"}
,"dai 20 kai hekigai chousa haku" : {n:"第20回壁外調査博"}
,"dai 21 kai hekigai chousa haku" : {n:"第21回壁外調査博"}
,"dai 22 kai hekigai chousa haku" : {n:"第22回壁外調査博"}
,"dai 25 kai hekigai chousa haku" : {n:"第25回壁外調査博"}
,"dai 26 kai hekigai chousa haku" : {n:"第26回壁外調査博"}
,"dai 28 kai hekigai chousa haku" : {n:"第28回壁外調査博"}
,"dai 2 kai hekigai chousa haku" : {n:"第2回壁外調査博"}
,"hekigai chousa haku 2" : {n:"第2回壁外調査博"}
,"dai 30 kai hekigai chousa haku" : {n:"第30回壁外調査博"}
,"dai 31 kai hekigai chousa haku" : {n:"第31回壁外調査博"}
,"dai 32 kai hekigai chousa haku" : {n:"第32回壁外調査博"}
,"dai 33 kai hekigai chousa haku" : {n:"第33回壁外調査博"}
,"dai 34 kai hekigai chousa haku" : {n:"第34回壁外調査博"}
,"dai 35 kai hekigai chousa haku" : {n:"第35回壁外調査博"}
,"dai 36 kai hekigai chousa haku" : {n:"第36回壁外調査博"}
,"dai 3 kai hekigai chousa haku" : {n:"第3回壁外調査博"}
,"dai 3 kai kabegai chousa haku" : {n:"第3回壁外調査博"}
,"hekigai chousa haku 3" : {n:"第3回壁外調査博"}
,"dai 4 kai hekigai chousa haku" : {n:"第4回壁外調査博"}
,"dai 5 kai hekigai chousa haku" : {n:"第5回壁外調査博"}
,"hekigai chousa haku 5" : {n:"第5回壁外調査博"}
,"dai 6 kai hekigai chousa haku" : {n:"第6回壁外調査博"}
,"dai 7 kai hekigai chousa haku" : {n:"第7回壁外調査博"}
,"dai 8 kai hekigai chousa haku" : {n:"第8回壁外調査博"}
,"dai 9 kai hekigai chousa haku" : {n:"第9回壁外調査博"}
,"hekigai chousa haku 9" : {n:"第9回壁外調査博"}
,"chou hekigai chousa haku 2017" : {n:"超壁外調査博 2017"}
,"chou hekigai chousa haku 2018" : {n:"超壁外調査博 2018"}
,"chou hekigai chousa haku 2019" : {n:"超壁外調査博 2019"}
,"chou hekigai chousa haku 2023" : {n:"超壁外調査博 2023"}
,"chou hekigai chousa haku 2023 natsu" : {n:"超壁外調査博 2023夏"}
,"hekigai chousa haku" : {n:"壁外調査博"}
,"hekigai chousa haku kinkyuu summer2021" : {n:"壁外調査博 緊急SUMMER2021"}
,"hekigai chousa haku haru 21" : {n:"壁外調査博 春 21"}
,"jinrui saikyou darling!! 9" : {n:"人類最強ダーリン!! 9"}
,"jinrui saikyou darling!! dr2022" : {n:"人類最強ダーリン!! DR2022"}
,"jinrui saikyou darling!! hoshi ni negai o. 2022" : {n:"人類最強ダーリン!! 星願2022"}
,"ore no kibou, ore no tsubasa 2" : {n:"俺の希望、オレの翼 2"}
,"ore no kibou, ore no tsubasa dr2021" : {n:"俺の希望、オレの翼 DR2021"}
,"ore no kibou, ore no tsubasa dr2022" : {n:"俺の希望、オレの翼 DR2022"}
,"ore no kibou, ore no tsubasa jb2023" : {n:"俺の希望、オレの翼 JB2023"}
,"ore no kibou, ore no tsubasa hoshi ni negai o. 2022" : {n:"俺の希望、オレの翼 星願2022"}
,"saikyou kareshi" : {n:"最強彼氏"}
,"saikyou kareshi 10" : {n:"最強彼氏１０"}
,"saikyou kareshi 5" : {n:"最強彼氏５"}
,"saikyou kareshi 6" : {n:"最強彼氏６"}
,"saikyou kareshi 7" : {n:"最強彼氏７"}
,"aitsu no megane ni koishiteru 3" : {n:"アイツのメガネに恋してる3"}
,"chousa heidan no renai jijou" : {n:"調査兵団の恋愛事情"}
,"chousa heidan no renai jijou 2 r18" : {n:"調査兵団の恋愛事情2 R18"}
,"chousa heidan no renai jijou 6" : {n:"調査兵団の恋愛事情6"}
,"gensou no jukai viii" : {n:"幻想の樹海 Ⅷ"}
,"gensou no jukai vi" : {n:"幻想の樹海 VI"}
,"gensou no jukai 2" : {n:"幻想の樹海Ⅱ"}
,"gensou no jukai 5" : {n:"幻想の樹海Ⅴ"}
,"ao no seiiki" : {n:"青の聖域"}
,"ao no seiiki in osaka" : {n:"青の聖域 in 大阪"}
,"ao no seiiki in osaka lv. 3" : {n:"青の聖域 in 大阪 Lv.3"}
,"ao no seiiki lv.2" : {n:"青の聖域 Lv.2"}
,"ao no seiikilv.2" : {n:"青の聖域 Lv.2"}
,"ao no seiiki lv.3" : {n:"青の聖域 Lv.3"}
,"coffee jelly de te o utou 3" : {n:"コーヒーゼリーで手をうとう3"}
,"coffee jelly de te o utou 4" : {n:"コーヒーゼリーで手をうとう4"}
,"758 daitoubatsu mission 2" : {n:"758大討伐ミッション2"}
,"ippai waru no desu... ouji" : {n:"いっぱい割るのです…王子"}
,"kossori waru no desu... ouji" : {n:"こっそり割るのです…王子"}
,"sarani wareru no desu... ouji" : {n:"さらに割るのです…王子"}
,"sarani waru no desu... ouji" : {n:"さらに割るのです…王子"}
,"soredemo waru no desu... ouji" : {n:"それでも割るのです…王子"}
,"chokotto waru no desu... ouji" : {n:"ちょこっと割るのです…王子"}
,"dondon waru no desu... ouji" : {n:"どんどん割るのです…王子"}
,"hitasura waru no desu... ouji" : {n:"ひたすら割るのです…王子"}
,"madamada waru no desu... ouji" : {n:"まだまだ割るのです…王子"}
,"motto waru no desu... ouji" : {n:"もっと割るのです…王子"}
,"motto waru no desu...ouji" : {n:"もっと割るのです…王子"}
,"motto warunodesu... ouji" : {n:"もっと割るのです…王子"}
,"waru no desu… ouji" : {n:"割るのです…王子"}
,"waru no desu... ouji 15" : {n:"割るのです…王子15"}
,"waru no desu... ouji 19" : {n:"割るのです…王子19"}
,"zesshou stage 10" : {n:"絶唱ステージ10"}
,"zesshou stage 11" : {n:"絶唱ステージ11"}
,"zesshou stage 13" : {n:"絶唱ステージ13"}
,"zesshou stage 14" : {n:"絶唱ステージ14"}
,"zesshou stage 15" : {n:"絶唱ステージ15"}
,"zesshou stage 16" : {n:"絶唱ステージ16"}
,"zesshou stage 18" : {n:"絶唱ステージ18"}
,"zesshou stage 2" : {n:"絶唱ステージ2"}
,"zesshou stage 20" : {n:"絶唱ステージ20"}
,"zesshou stage 21" : {n:"絶唱ステージ21"}
,"zesshou stage 22" : {n:"絶唱ステージ22"}
,"zesshou stage 5" : {n:"絶唱ステージ5"}
,"zesshou stage 6" : {n:"絶唱ステージ6"}
,"zesshou stage 7" : {n:"絶唱ステージ7"}
,"zesshou stage 8" : {n:"絶唱ステージ8"}
,"zesshou stage 9" : {n:"絶唱ステージ9"}
,"drill wa otoko no tamashii 2" : {n:"ドリルは男の魂2"}
,"drill wa otoko no tamashii 3" : {n:"ドリルは男の魂3"}
,"senka no toki" : {n:"閃華の刻"}
,"senka no toki 10" : {n:"閃華の刻 10"}
,"senka no toki 10 hatsuyume" : {n:"閃華の刻 10 初夢"}
,"senka no toki 13" : {n:"閃華の刻 13"}
,"senka no toki 14" : {n:"閃華の刻 14"}
,"senka no toki 18" : {n:"閃華の刻 18"}
,"senka no toki 18 toshiosame" : {n:"閃華の刻 18 年納"}
,"senka no toki 2" : {n:"閃華の刻 2"}
,"senka no toki 22" : {n:"閃華の刻 22"}
,"senka no toki 23" : {n:"閃華の刻 23"}
,"senka no toki 27" : {n:"閃華の刻 27"}
,"senka no toki 28" : {n:"閃華の刻 28"}
,"senka no toki 28 -toshiosame-" : {n:"閃華の刻 28 -年納-"}
,"senka no toki 3" : {n:"閃華の刻 3"}
,"senka no toki 35 -hatsuyume-" : {n:"閃華の刻 35 -年納-"}
,"senka no toki 36" : {n:"閃華の刻 36"}
,"senka no toki 38" : {n:"閃華の刻 38"}
,"senka no toki 4" : {n:"閃華の刻 4"}
,"senka no toki 5" : {n:"閃華の刻 5"}
,"senka no toki 7" : {n:"閃華の刻 7"}
,"senka no toki 9" : {n:"閃華の刻 9"}
,"senka no toki 9 toshiosame" : {n:"閃華の刻 9 年納"}
,"senka no toki hibana 11" : {n:"閃華の刻 火華 11"}
,"senka no toki hibana 2017" : {n:"閃華の刻 火華 2017"}
,"senka no toki hibana 2019" : {n:"閃華の刻 火華 2019"}
,"senka no toki hibana 2020" : {n:"閃華の刻 火華 2020"}
,"senka no toki hibana 2021" : {n:"閃華の刻 火華 2021"}
,"senka no toki zan" : {n:"閃華の刻 斬"}
,"senka natsu taisai 2019" : {n:"閃華夏大祭  2019"}
,"senka no haru taisai" : {n:"閃華春大祭"}
,"senka no haru taisai 2017" : {n:"閃華春大祭 2017"}
,"senka haru taisai 2018" : {n:"閃華春大祭 2018"}
,"senka no haru taisai 2021" : {n:"閃華春大祭 2021"}
,"senka no haru taisai 2021 -osaka-" : {n:"閃華春大祭 2021 大阪"}
,"senka no haru taisai 2022" : {n:"閃華春大祭 2022"}
,"senka no haru taisai 2023" : {n:"閃華春大祭 2023"}
,"senka haru taisai nishi 2019" : {n:"閃華春大祭 西2019"}
,"senka haru taisai higashi 2019" : {n:"閃華春大祭 東2019"}
,"senka haru taisai higasi 2019" : {n:"閃華春大祭 東2019"}
,"senka daigassen 2018" : {n:"閃華大合戦 2018"}
,"chou senka no toki 2017" : {n:"超閃華の刻 2017"}
,"cho sanka no koku 2018" : {n:"超閃華の刻 2018"}
,"chou senka no toki 2018" : {n:"超閃華の刻 2018"}
,"chou senka no toki 2022" : {n:"超閃華の刻 2022"}
,"chou senka no toki 2022 natsu" : {n:"超閃華の刻 2022夏"}
,"chou senka no toki 2023 natsu" : {n:"超閃華の刻 2023夏"}
,"chou senka no toki 2024" : {n:"超閃華の刻 2024"}
,"chou senka no toki 25" : {n:"超閃華の刻 25"}
,"chou senka no toki kansai 2017" : {n:"超閃華の刻 関西 2017"}
,"chou senka no toki kansai 2018" : {n:"超閃華の刻 関西 2018"}
,"chou senka no toki kansai 22" : {n:"超閃華の刻 関西 22"}
,"chou senka daigassen 2019" : {n:"超閃華大合戦 2019"}
,"hyattou ryouran ~kimi no heart o shirahadori~" : {n:"百刀繚乱 ～君の心を白刃取り～"}
,"hyattou ryouran ~kimi no heart o shirahadori~ akinokuni ensei junbi" : {n:"百刀繚乱 ～君の心を白刃取り～ 安芸国遠征準備"}
,"hyattou ryouran ~kimi no heart o shirahadori~ san" : {n:"百刀繚乱 ～君の心を白刃取り～ 参"}
,"hyattou ryouran ~kimi no heart o shirahadori~san" : {n:"百刀繚乱 ～君の心を白刃取り～ 参"}
,"hyattou ryouran ~kimi no heart o shirahadori~ tantou junbi" : {n:"百刀繚乱 ～君の心を白刃取り～ 鍛刀準備"}
,"hyattou ryouran ~kimi no heart o shirahadori~ chikuzen no kuni ensei junbi" : {n:"百刀繚乱 ～君の心を白刃取り～ 筑前国遠征準備"}
,"hyattou ryouran ~kimi no heart o shirahadori~ ni" : {n:"百刀繚乱 ～君の心を白刃取り～ 弐"}
,"hyattou ryouran ~kimi no heart o shirahadori~ni" : {n:"百刀繚乱 ～君の心を白刃取り～ 弐"}
,"hyattou ryouran ~kimi no heart o shirahadori~ owari kuni ensei ni" : {n:"百刀繚乱 ～君の心を白刃取り～ 尾張国遠征弐"}
,"hyattou ryouran ~kimi no heart o shirahadori~ izumi no kuni ensei" : {n:"百刀繚乱 ～君の心を白刃取り～ 和泉国遠征"}
,"hyattou ryouran ~kimi no heart o shirahadori~ izumi no kuni ensei san" : {n:"百刀繚乱 ～君の心を白刃取り～ 和泉国遠征参"}
,"hyattou ryouran ~kimi no heart o shirahadori~ izumi no kuni ensei 2" : {n:"百刀繚乱 ～君の心を白刃取り～ 和泉国遠征弐"}
,"hyattou ryouran ~kimi no heart o shirahadori~ izumi no kuni ensei ni" : {n:"百刀繚乱 ～君の心を白刃取り～ 和泉国遠征弐"}
,"daichi yasuragu kaze no koe dr2022" : {n:"大地やすらぐ風の声 DR2022"}
,"ryuu ni yomeirase sourae" : {n:"龍に嫁入らせ候へ"}
,"ryuu ni yomeirase sourae 14" : {n:"龍に嫁入らせ候へ 14"}
,"ryuu ni yomeirase sourae 2" : {n:"龍に嫁入らせ候へ 2"}
,"ryuu ni yomeirase sourae 3" : {n:"龍に嫁入らせ候へ 3"}
,"ryuu ni yomeirase sourae dr2022" : {n:"龍に嫁入らせ候へ DR2022"}
,"edomurasaki no koi dr2024" : {n:"江戸紫の恋 DR2024"}
,"edomurasaki no koi jb2023" : {n:"江戸紫の恋 JB2023"}
,"edomurasaki no koi 5" : {n:"江戸紫の恋5"}
,"tokyo shock west" : {n:"トーキョー喰区 WEST"}
,"tokyo shock west 2" : {n:"トーキョー喰区 WEST2"}
,"tokyo shock fukuoka" : {n:"トーキョー喰区 福岡"}
,"tokyo shock 2" : {n:"トーキョー喰区2"}
,"tokyo shock 3" : {n:"トーキョー喰区3"}
,"tokyo shock 4" : {n:"トーキョー喰区4"}
,"tokyo shock 8" : {n:"トーキョー喰区8"}
,"shoku no kyouen" : {n:"喰の狂宴"}
,"shoku no kyouen 2" : {n:"喰の狂宴 2"}
,"shoku no kyouen 3" : {n:"喰の狂宴 3"}
,"shoku no kyouen 4" : {n:"喰の狂宴 4"}
,"shoku no kyouen 6" : {n:"喰の狂宴 6"}
,"shoku no kyouen 7" : {n:"喰の狂宴 7"}
,"be our elevens dr2023" : {n:"Be Our Elevens DR2023"}
,"super tokyo revive 2022" : {n:"SUPER TOKYO罹破維武 2022"}
,"super tokyo revive 2022 natsu" : {n:"SUPER TOKYO罹破維武 2022夏"}
,"super tokyo revive 2023" : {n:"SUPER TOKYO罹破維武 2023"}
,"tokyo revive" : {n:"TOKYO罹破維武"}
,"tokyo revive 11" : {n:"TOKYO罹破維武 11"}
,"tokyo revive 12" : {n:"TOKYO罹破維武 12"}
,"tokyo revive 13" : {n:"TOKYO罹破維武 13"}
,"tokyo revive 14" : {n:"TOKYO罹破維武 14"}
,"tokyo revive 15" : {n:"TOKYO罹破維武 15"}
,"tokyo revive 16" : {n:"TOKYO罹破維武 16"}
,"tokyo revive 17" : {n:"TOKYO罹破維武 17"}
,"tokyo revive 19" : {n:"TOKYO罹破維武 19"}
,"tokyo revive 2" : {n:"TOKYO罹破維武 2"}
,"tokyo revive 3" : {n:"TOKYO罹破維武 3"}
,"tokyo revive 4" : {n:"TOKYO罹破維武 4"}
,"tokyo revive 5" : {n:"TOKYO罹破維武 5"}
,"tokyo revive 7" : {n:"TOKYO罹破維武 7"}
,"tokyo revive 8" : {n:"TOKYO罹破維武 8"}
,"tokyo罹破維武8" : {n:"TOKYO罹破維武 8"}
,"drastic remind 3" : {n:"Drastic reMind 3"}
,"drastic remind 4" : {n:"Drastic reMind 4"}
,"air reitaisai 8" : {n:"エア例大祭 8"}
,"moriya jinja reitaisai 2" : {n:"もりや神社例大祭 2"}
,"moriya jinja reitaisai 3" : {n:"もりや神社例大祭 3"}
,"moriya jinja reitaisai 9" : {n:"もりや神社例大祭 9"}
,"kagaku seiki no cafe terrace 13" : {n:"科学世紀のカフェテラス13"}
,"kagaku seiki no cafe terrace 3" : {n:"科学世紀のカフェテラス3"}
,"kagaku seiki no cafe terrace 5" : {n:"科学世紀のカフェテラス5"}
,"kagaku seiki no cafe terrace 7" : {n:"科学世紀のカフェテラス7"}
,"kagaku seiki no cafe terrace 8" : {n:"科学世紀のカフェテラス8"}
,"kagaku seiki no cafe terrace 9" : {n:"科学世紀のカフェテラス9"}
,"tsuki no utage" : {n:"月の宴"}
,"tsuki no utage 1" : {n:"月の宴1"}
,"tsuki no utage 2" : {n:"月の宴2"}
,"tsuki no utage 4" : {n:"月の宴4"}
,"tsuki no utage 5" : {n:"月の宴5"}
,"tsuki no utage 6" : {n:"月の宴6"}
,"tsuki no utage 8" : {n:"月の宴8"}
,"tsuki no utage 9" : {n:"月の宴9"}
,"gensoukyou summit" : {n:"幻想郷サミット"}
,"gensoukyou summit 2" : {n:"幻想郷サミット 2"}
,"gensoukyou summit 4" : {n:"幻想郷サミット 4"}
,"niigata touhousai 12" : {n:"新潟東方祭12"}
,"niigata touhousai 2" : {n:"新潟東方祭2"}
,"daikyuushuu touhousai" : {n:"大⑨州東方祭"}
,"daikyusyu tohosai 10" : {n:"大⑨州東方祭10"}
,"daikyuushuu touhousai 11" : {n:"大⑨州東方祭11"}
,"daikyuushuu touhousai 11.5" : {n:"大⑨州東方祭11.5 in かごしま"}
,"daikyuushuu touhousai 12" : {n:"大⑨州東方祭12"}
,"daikyuushuu touhousai 14" : {n:"大⑨州東方祭14"}
,"daikyuushuu touhousai 15" : {n:"大⑨州東方祭15"}
,"daikyuushuu touhousai 19" : {n:"大⑨州東方祭19"}
,"daikyuushuu touhousai 29" : {n:"大⑨州東方祭29"}
,"daikyuushuu touhousai 3" : {n:"大⑨州東方祭3"}
,"daikyuushuu touhousai 4" : {n:"大⑨州東方祭4"}
,"daikyusyu tohosai 5" : {n:"大⑨州東方祭5"}
,"daikyuushuu touhousai 5" : {n:"大⑨州東方祭5"}
,"daikyuushuu touhousai 6" : {n:"大⑨州東方祭6"}
,"daikyuushuu touhousai 7" : {n:"大⑨州東方祭7"}
,"daikyuushuu touhousai 8" : {n:"大⑨州東方祭8"}
,"daikyuushuu touhousai 9" : {n:"大⑨州東方祭⑨"}
,"shuuki reitaisai 10" : {n:"第10回博麗神社秋季例大祭"}
,"reitaisai 10" : {n:"第10回博麗神社例大祭"}
,"shuuki reitaisai 11" : {n:"第11回博麗神社秋季例大祭"}
,"reitaisai 11" : {n:"第11回博麗神社例大祭"}
,"例大祭11" : {n:"第11回博麗神社例大祭"}
,"reitaisai 12" : {n:"第12回博麗神社例大祭"}
,"reitaisai 13" : {n:"第13回博麗神社例大祭"}
,"reitaisai 14" : {n:"第14回博麗神社例大祭"}
,"例大祭14" : {n:"第14回博麗神社例大祭"}
,"reitaisai 15" : {n:"第15回博麗神社例大祭"}
,"reitaisai 16" : {n:"第16回博麗神社例大祭"}
,"例大祭16" : {n:"第16回博麗神社例大祭"}
,"reitaisai 17" : {n:"第17回博麗神社例大祭"}
,"reitaisai 18" : {n:"第18回博麗神社例大祭"}
,"reitaisai 19" : {n:"第19回博麗神社例大祭"}
,"reitaisai 20" : {n:"第20回博麗神社例大祭"}
,"reitaisai 21" : {n:"第21回博麗神社例大祭"}
,"reitaisai 22" : {n:"第22回博麗神社例大祭"}
,"shuuki reitaisai 2" : {n:"第2回博麗神社秋季例大祭"}
,"reitaisai 2" : {n:"第2回博麗神社例大祭"}
,"dai 2-kai reitaisai in shizuoka" : {n:"第2回例大祭in静岡"}
,"shuuki reitaisai 3" : {n:"第3回博麗神社秋季例大祭"}
,"reitaisai 3" : {n:"第3回博麗神社例大祭"}
,"shuuki reitaisai 4" : {n:"第4回博麗神社秋季例大祭"}
,"reitaisai 4" : {n:"第4回博麗神社例大祭"}
,"shuuki reitaisai 5" : {n:"第5回博麗神社秋季例大祭"}
,"reitaisai 5" : {n:"第5回博麗神社例大祭"}
,"shuuki reitaisai 6" : {n:"第6回博麗神社秋季例大祭"}
,"reitaisai 6" : {n:"第6回博麗神社例大祭"}
,"shuuki reitaisai 7" : {n:"第7回博麗神社秋季例大祭"}
,"reitaisai 7" : {n:"第7回博麗神社例大祭"}
,"例大祭7" : {n:"第7回博麗神社例大祭"}
,"shuuki reitaisai 8" : {n:"第8回博麗神社秋季例大祭"}
,"reitaisai 8" : {n:"第8回博麗神社例大祭"}
,"reitaisai 8ex" : {n:"第8回博麗神社例大祭EX"}
,"shuuki reitaisai 9" : {n:"第9回博麗神社秋季例大祭"}
,"秋季例大祭9" : {n:"第9回博麗神社秋季例大祭"}
,"reitaisai 9" : {n:"第9回博麗神社例大祭"}
,"touhou manga matsuri" : {n:"東方まんがまつり"}
,"touhou leisure land" : {n:"東方レジャーランド"}
,"touhou kenbunroku owari no maki" : {n:"東方絢文禄 尾張の巻"}
,"touhou kenbunroku owari no maki 5" : {n:"東方絢文禄 尾張の巻 5"}
,"touhou kuonkyou tenjin" : {n:"東方久遠境Tenjin"}
,"kouroumu" : {n:"東方紅楼夢"}
,"kouroumu 1" : {n:"東方紅楼夢 1"}
,"kouroumu 10" : {n:"東方紅楼夢 10"}
,"kouroumu 11" : {n:"東方紅楼夢 11"}
,"kouroumu 12" : {n:"東方紅楼夢 12"}
,"kouroumu 13" : {n:"東方紅楼夢 13"}
,"kouroumu 14" : {n:"東方紅楼夢 14"}
,"kouroumu 15" : {n:"東方紅楼夢 15"}
,"kouroumu 16" : {n:"東方紅楼夢 16"}
,"kouroumu 17" : {n:"東方紅楼夢 17"}
,"kouroumu 18" : {n:"東方紅楼夢 18"}
,"kouroumu 19" : {n:"東方紅楼夢 19"}
,"kouroumu 2" : {n:"東方紅楼夢 2"}
,"kouroumu 20" : {n:"東方紅楼夢 20"}
,"kouroumu 3" : {n:"東方紅楼夢 3"}
,"kouroumu 4" : {n:"東方紅楼夢 4"}
,"kouroumu 5" : {n:"東方紅楼夢 5"}
,"kouroumu 6" : {n:"東方紅楼夢 6"}
,"kouroumu 7" : {n:"東方紅楼夢 7"}
,"kouroumu 8" : {n:"東方紅楼夢 8"}
,"kouroumu 9" : {n:"東方紅楼夢 9"}
,"touhou goudou event 2017 shinshun!" : {n:"東方合同イベント2017新春！"}
,"touhou goudou event 2018 haru!" : {n:"東方合同イベント2018春！"}
,"touhou goudou event 2023 fuyu!" : {n:"東方合同イベント2023冬！"}
,"touhou goudou saiji 3" : {n:"東方合同祭事3"}
,"touhou goudou saiji 5" : {n:"東方合同祭事5"}
,"touhou kamuisai 4" : {n:"東方神居祭4"}
,"touhou shinrenju" : {n:"東方神蓮珠"}
,"touhou suikansai" : {n:"東方睡姦祭"}
,"suukeisai" : {n:"東方崇敬祭"}
,"touhou suukei sai" : {n:"東方崇敬祭"}
,"touhou suukeisai" : {n:"東方崇敬祭"}
,"suukeisai 1" : {n:"東方崇敬祭 1"}
,"suukeisai 2" : {n:"東方崇敬祭 2"}
,"suukeisai 4" : {n:"東方崇敬祭 4"}
,"touhou sugei matsuri" : {n:"東方素芸祭"}
,"touhou tougenkyou" : {n:"東方桃源郷"}
,"touhou tougenkyou3" : {n:"東方桃源郷3"}
,"komachi" : {n:"東方不敗小町"}
,"komachi 2" : {n:"東方不敗小町2"}
,"komachi 3" : {n:"東方不敗小町3"}
,"komachi 5" : {n:"東方不敗小町5"}
,"komachi 6" : {n:"東方不敗小町6"}
,"komachi petit komachi" : {n:"東方不敗小町ぷちこまち"}
,"komachi petit komachi 2" : {n:"東方不敗小町ぷちこまち２"}
,"meikasai 10" : {n:"東方名華祭10"}
,"meikasai 11" : {n:"東方名華祭11"}
,"meikasai 12" : {n:"東方名華祭12"}
,"meikasai 13" : {n:"東方名華祭13"}
,"meikasai 14" : {n:"東方名華祭14"}
,"meikasai 15" : {n:"東方名華祭15"}
,"meikasai 16" : {n:"東方名華祭16"}
,"meikasai 17" : {n:"東方名華祭17"}
,"meikasai 18" : {n:"東方名華祭18"}
,"meikasai 2" : {n:"東方名華祭2"}
,"meikasai 8" : {n:"東方名華祭8"}
,"meikasai 9" : {n:"東方名華祭9"}
,"yarinsai" : {n:"東方椰麟祭"}
,"touhou yarinsai dai 5 maku" : {n:"東方椰麟祭 第五幕"}
,"yarinsai 10" : {n:"東方椰麟祭10"}
,"yarinsai 2" : {n:"東方椰麟祭2"}
,"yarinsai 3" : {n:"東方椰麟祭3"}
,"yarinsai 4" : {n:"東方椰麟祭4"}
,"yarinsai 9" : {n:"東方椰麟祭9"}
,"shuuki reitaisai" : {n:"博麗神社秋季例大祭"}
,"reitaisai" : {n:"博麗神社例大祭"}
,"reitaisai in taiwan" : {n:"博麗神社例大祭 in 台湾"}
,"reitaisai sp" : {n:"博麗神社例大祭SP"}
,"reitaisai sp2" : {n:"博麗神社例大祭SP 第2回"}
,"yougakudan carnival!" : {n:"幺樂団カァニバル！"}
,"yougakudan carnival! 2" : {n:"幺樂団カァニバル！2"}
,"yougakudan carnival! 3" : {n:"幺樂団カァニバル！3"}
,"yougakudan carnival! 7" : {n:"幺樂団カァニバル！7"}
,"touhou keikousai" : {n:"東方蛍光祭"}
,"sounanoka 2" : {n:"東方想七日2"}
,"sounanoka 3" : {n:"東方想七日3"}
,"sounanoka 4" : {n:"東方想七日4"}
,"sounanoka 5" : {n:"東方想七日5"}
,"sounanoka 6" : {n:"東方想七日6"}
,"sounanoka 7" : {n:"東方想七日7"}
,"komeiji complex" : {n:"古明地こんぷれっくす"}
,"komeiji complex mittsume." : {n:"古明地こんぷれっくす　みっつめ。"}
,"komeiji complex muttsume." : {n:"古明地こんぷれっくす　むっつめ。"}
,"komeiji complex 4" : {n:"古明地こんぷれっくす　よっつめ。"}
,"aka no hiroba" : {n:"紅のひろば"}
,"aka no hiroba 11" : {n:"紅のひろば11"}
,"aka no hiroba 12" : {n:"紅のひろば12"}
,"aka no hiroba 13" : {n:"紅のひろば13"}
,"aka no hiroba 15" : {n:"紅のひろば15"}
,"aka no hiroba 17" : {n:"紅のひろば17"}
,"aka no hiroba 2" : {n:"紅のひろば2"}
,"aka no hiroba 3" : {n:"紅のひろば3"}
,"aka no hiroba 4" : {n:"紅のひろば4"}
,"aka no hiroba 5" : {n:"紅のひろば5"}
,"aka no hiroba 6" : {n:"紅のひろば6"}
,"aka no hiroba 7" : {n:"紅のひろば7"}
,"aka no hiroba 8" : {n:"紅のひろば8"}
,"aka no hiroba 9" : {n:"紅のひろば9"}
,"tengu-sama no oshigoto" : {n:"天狗様のお仕事"}
,"tengu-sama no oshigoto 2" : {n:"天狗様のお仕事 2"}
,"tengu-sama no oshigoto 3" : {n:"天狗様のお仕事 3"}
,"tengu-sama no oshigoto 4" : {n:"天狗様のお仕事 4"}
,"tengu-sama no oshigoto 6" : {n:"天狗様のお仕事 6"}
,"tengu-sama no oshigoto 8" : {n:"天狗様のお仕事 8"}
,"tengu-sama no oshigoto 9" : {n:"天狗様のお仕事 9"}
,"dai 130 ki bunbunmaru shinbun tomo no kai" : {n:"第百三十季 文々。新聞友の会"}
,"dai 133 ki bunbunmaru shinbun tomo no kai" : {n:"第百三十三季 文々。新聞友の会"}
,"dai-134-ki bunbunmaru. shinbun tomo no kai" : {n:"第百三十四季 文々。新聞友の会"}
,"dai 132 ki bunbunmaru shinbun tomo no kai" : {n:"第百三十二季 文々。新聞友の会"}
,"dai-132-ki bunbunmaru. shinbun tomo no kai" : {n:"第百三十二季 文々。新聞友の会"}
,"dai-138-ki bunbunmaru. shinbun tomo no kai" : {n:"第百三十八季 文々。新聞友の会"}
,"dai-129-ki bunbunmaru. shinbun tomo no kai" : {n:"第百二十九季 文々。新聞友の会"}
,"dai 128 ki bunbun maru shinbun tomo no kai" : {n:"第百二十八季 文々。新聞友の会"}
,"dai 128 ki bunbun. maru shinbun tomo no kai" : {n:"第百二十八季 文々。新聞友の会"}
,"dai 128 ki bunbunmaru shinbun tomo no kai" : {n:"第百二十八季 文々。新聞友の会"}
,"dai-128-ki bunbunmaru shinbun tomo no kai" : {n:"第百二十八季 文々。新聞友の会"}
,"dai-128-ki bunbunmaru. shinbun tomo no kai" : {n:"第百二十八季 文々。新聞友の会"}
,"konohana sakuya 1" : {n:"このはな咲夜1"}
,"konohana sakuya 2" : {n:"このはな咲夜2"}
,"konohana sakuya 4" : {n:"このはな咲夜4"}
,"konohana sakuya 5" : {n:"このはな咲夜5"}
,"konohana sakuya 6" : {n:"このはな咲夜6"}
,"akatsuki no utage" : {n:"紅月ノ宴"}
,"akatsuki no utage 01" : {n:"紅月ノ宴 1"}
,"akatsuki no utage 1" : {n:"紅月ノ宴 1"}
,"akatsuki no utage 2" : {n:"紅月ノ宴 2"}
,"akatsuki no utage 3" : {n:"紅月ノ宴 3"}
,"akatsuki no utage san" : {n:"紅月ノ宴 3"}
,"akatsuki no utage 4" : {n:"紅月ノ宴 4"}
,"akatsuki no utage 5" : {n:"紅月ノ宴 5"}
,"akatsuki no utage extra stage" : {n:"紅月ノ宴 extra stage"}
,"koharu komichi" : {n:"小春小径"}
,"koharu komichi 3" : {n:"小春小径3"}
,"koharu komichi 6" : {n:"小春小径6"}
,"koimari2" : {n:"恋のまほうは魔理沙におまかせ! 2"}
,"koimari3" : {n:"恋のまほうは魔理沙におまかせ! 3"}
,"koimari 4" : {n:"恋のまほうは魔理沙におまかせ! 4"}
,"koimari4" : {n:"恋のまほうは魔理沙におまかせ! 4"}
,"koimari 5" : {n:"恋のまほうは魔理沙におまかせ! 5"}
,"koimari5" : {n:"恋のまほうは魔理沙におまかせ! 5"}
,"koimari 6" : {n:"恋のまほうは魔理沙におまかせ! 6"}
,"koimari9" : {n:"恋のまほうは魔理沙におまかせ! 9"}
,"kageki no utage" : {n:"華激ノ宴"}
,"kageki no utage 3 final" : {n:"華激ノ宴3 Final"}
,"muteki no love prince" : {n:"無敵のLOVEプリンス"}
,"muteki no love prince osaka 2" : {n:"無敵のLOVEプリンス 大阪2"}
,"muteki no love prince 2" : {n:"無敵のLOVEプリンス2"}
,"chou sennin banrai 2019" : {n:"超仙人万来2019"}
,"itan renatus 11" : {n:"異端レナトス 11"}
,"itan renatus 13" : {n:"異端レナトス 13"}
,"itan renatus 15" : {n:"異端レナトス 15"}
,"itan renatus 17" : {n:"異端レナトス 17"}
,"itan renatus 2" : {n:"異端レナトス 2"}
,"itan renatus 5" : {n:"異端レナトス 5"}
,"itan renatus 6" : {n:"異端レナトス 6"}
,"itan renatus 9" : {n:"異端レナトス 9"}
,"chou itan renatus 2022" : {n:"超異端レナトス 2022"}
,"bungou kessakusen 03" : {n:"文豪傑作選03"}
,"bungou kessakusen 07" : {n:"文豪傑作選07"}
,"bungou kessakusen 09" : {n:"文豪傑作選09"}
,"aru toshokan nite" : {n:"或る図書館にて"}
,"aru toshokan nite 11" : {n:"或る図書館にて11"}
,"aru toshokan nite 6" : {n:"或る図書館にて6"}
,"aru toshokan nite 8" : {n:"或る図書館にて8"}
,"chokkyuu remember sp2024" : {n:"直球リメンバー SP2024"}
,"chou bokutachi ga iru machi" : {n:"超僕たちがいる街"}
,"chou bokutachi ga iru machi 2" : {n:"超僕たちがいる街2"}
,"douyara deban no youda!" : {n:"どうやら出番のようだ!"}
,"douyara deban no youda! 10" : {n:"どうやら出番のようだ! 10"}
,"douyara deban no youda! 11" : {n:"どうやら出番のようだ! 11"}
,"douyara deban no youda! 12" : {n:"どうやら出番のようだ! 12"}
,"douyara deban no youda! 13" : {n:"どうやら出番のようだ! 13"}
,"douyara deban no youda! 14" : {n:"どうやら出番のようだ! 14"}
,"douyara deban no youda! 15" : {n:"どうやら出番のようだ! 15"}
,"douyara deban no you da! 16" : {n:"どうやら出番のようだ! 16"}
,"douyara deban no youda! 16" : {n:"どうやら出番のようだ! 16"}
,"douyara deban no youda! 17" : {n:"どうやら出番のようだ! 17"}
,"douyara deban no youda! 18" : {n:"どうやら出番のようだ! 18"}
,"douyara deban no you da! 19" : {n:"どうやら出番のようだ! 19"}
,"douyara deban no youda! 19" : {n:"どうやら出番のようだ! 19"}
,"douyara deban no youda! 2" : {n:"どうやら出番のようだ! 2"}
,"douyara deban no youda! 20" : {n:"どうやら出番のようだ! 20"}
,"douyara deban no you da! 21" : {n:"どうやら出番のようだ! 21"}
,"douyara deban no youda! 21" : {n:"どうやら出番のようだ! 21"}
,"douyara deban no you da! 22" : {n:"どうやら出番のようだ! 22"}
,"douyara deban no youda! 22" : {n:"どうやら出番のようだ! 22"}
,"douyara deban no youda! 23" : {n:"どうやら出番のようだ! 23"}
,"douyara deban no youda! 25" : {n:"どうやら出番のようだ! 25"}
,"douyara deban no youda! 26" : {n:"どうやら出番のようだ! 26"}
,"douyara deban no youda! 27" : {n:"どうやら出番のようだ! 27"}
,"douyara deban no youda! 28" : {n:"どうやら出番のようだ! 28"}
,"douyara deban no youda! 29" : {n:"どうやら出番のようだ! 29"}
,"douyara deban no youda! 3" : {n:"どうやら出番のようだ! 3"}
,"douyara deban no youda! 30" : {n:"どうやら出番のようだ! 30"}
,"douyara deban no youda! 31" : {n:"どうやら出番のようだ! 31"}
,"douyara deban no youda! 32" : {n:"どうやら出番のようだ! 32"}
,"douyara deban no youda! 33" : {n:"どうやら出番のようだ! 33"}
,"douyara deban no youda! 34" : {n:"どうやら出番のようだ! 34"}
,"douyara deban no youda! 35" : {n:"どうやら出番のようだ! 35"}
,"douyara deban no youda! 36" : {n:"どうやら出番のようだ! 36"}
,"douyara deban no youda! 4" : {n:"どうやら出番のようだ! 4"}
,"douyara deban no youda! 42" : {n:"どうやら出番のようだ! 42"}
,"douyara deban no youda! 43" : {n:"どうやら出番のようだ! 43"}
,"douyara deban no youda! 44" : {n:"どうやら出番のようだ! 44"}
,"douyara deban no youda! 5" : {n:"どうやら出番のようだ! 5"}
,"douyara deban no youda! 6" : {n:"どうやら出番のようだ! 6"}
,"douyara deban no youda! 7" : {n:"どうやら出番のようだ! 7"}
,"douyara deban no youda! 8" : {n:"どうやら出番のようだ! 8"}
,"douyara deban no youda! 9" : {n:"どうやら出番のようだ! 9"}
,"douyara deban no youda! sp2024" : {n:"どうやら出番のようだ! SP 2024"}
,"douyara deban no youda! ultra 2019" : {n:"どうやら出番のようだ! ULTRA 2019"}
,"deban no youda! ultra 2022" : {n:"どうやら出番のようだ! ULTRA 2022"}
,"douyara deban no youda! ultra 2022" : {n:"どうやら出番のようだ! ULTRA 2022"}
,"deban no youda! ultra 2022 natsu" : {n:"どうやら出番のようだ! ULTRA 2022夏"}
,"douyara deban no youda! ultra 2022 natsu" : {n:"どうやら出番のようだ! ULTRA 2022夏"}
,"deban no youda! ultra 2023" : {n:"どうやら出番のようだ! ULTRA 2023"}
,"douyara deban no youda! ultra 2023" : {n:"どうやら出番のようだ! ULTRA 2023"}
,"deban no youda! ultra 2023 natsu" : {n:"どうやら出番のようだ! ULTRA 2023夏"}
,"deban no youda! ultra 2024" : {n:"どうやら出番のようだ! ULTRA 2024"}
,"hanjuku hero life" : {n:"半熟ヒーローライフ"}
,"hanjuku hero life west" : {n:"半熟ヒーローライフ WEST"}
,"hanjuku hero life hiroshima 18" : {n:"半熟ヒーローライフ 広島18"}
,"hanjuku hero life shingakki" : {n:"半熟ヒーローライフ 新学期"}
,"hanjuku hero life fukuoka 5" : {n:"半熟ヒーローライフ 福岡5"}
,"hanjuku hero life 2" : {n:"半熟ヒーローライフ2"}
,"hanjuku hero life 3" : {n:"半熟ヒーローライフ3"}
,"hanjuku hero life 4" : {n:"半熟ヒーローライフ4"}
,"hanjuku hero life 5" : {n:"半熟ヒーローライフ5"}
,"flame wing dr2021" : {n:"FLAME WING DR2021"}
,"todoroku bakuon rhapsody 3" : {n:"轟く爆音ラプソディ 3"}
,"todoroku bakuon rhapsody 5" : {n:"轟く爆音ラプソディ 5"}
,"todoroku bakuon rhapsody dr2021" : {n:"轟く爆音ラプソディ DR2021"}
,"todoroku bakuon rhapsody dr2022" : {n:"轟く爆音ラプソディ DR2022"}
,"todoroku bakuon rhapsody dr2023" : {n:"轟く爆音ラプソディ DR2023"}
,"todoroku bakuon rhapsody jb2023" : {n:"轟く爆音ラプソディ JB2023"}
,"todoroku bakuon rhapsody hoshi ni negai o. 2022" : {n:"轟く爆音ラプソディ 星願2022"}
,"sobazuki no kimi, sobakasu na boku 3" : {n:"そば好きの君、そばかすな僕 3"}
,"sobazuki no kimi, sobakasu na boku 4" : {n:"そば好きの君、そばかすな僕 4"}
,"sobazuki no kimi, sobakasu na boku dr2021" : {n:"そば好きの君、そばかすな僕 DR2021"}
,"sobazuki no kimi, sobakasu na boku dr2022" : {n:"そば好きの君、そばかすな僕 DR2022"}
,"sobazuki no kimi, sobakasu na boku jb2023" : {n:"そば好きの君、そばかすな僕 JB2023"}
,"sobazuki no kimi, sobakasu na boku hoshi ni negai o. 2022" : {n:"そば好きの君、そばかすな僕 星願2022"}
,"osananajimi ni goyoujin! 2" : {n:"幼馴染にご用心! 2"}
,"osananajimi ni goyoujin! 3" : {n:"幼馴染にご用心! 3"}
,"osananajimi ni goyoujin! 4" : {n:"幼馴染にご用心! 4"}
,"osananajimi ni goyoujin! 6" : {n:"幼馴染にご用心! 6"}
,"osananajimi ni goyoujin! 7" : {n:"幼馴染にご用心! 7"}
,"osananajimi ni goyoujin! dr2022" : {n:"幼馴染にご用心! DR2022"}
,"osananajimi ni goyoujin! dr2023" : {n:"幼馴染にご用心! DR2023"}
,"osananajimi ni goyoujin! jb2021" : {n:"幼馴染にご用心! JB2021"}
,"osananajimi ni goyoujin! jb2023" : {n:"幼馴染にご用心! JB2023"}
,"osananajimi ni goyoujin! jb2024" : {n:"幼馴染にご用心! JB2024"}
,"osananajimi ni goyoujin! hoshi ni negai o. 2022" : {n:"幼馴染にご用心! 星願2022"}
,"bakugoi dynamite!" : {n:"爆恋ダイナマイト!"}
,"bakugoi dynamite! 3" : {n:"爆恋ダイナマイト!3"}
,"bakugoi dynamite! 4" : {n:"爆恋ダイナマイト!4"}
,"renai detonation 2" : {n:"恋愛デトネーション"}
,"watashi no toshokan toshi keikaku!" : {n:"わたしの図書館都市計画！"}
,"watashi no toshokan toshi keikaku! 2" : {n:"わたしの図書館都市計画！2"}
,"watashi no toshokan toshi keikaku! 3" : {n:"わたしの図書館都市計画！3"}
,"watashi no toshokan toshi keikaku! 4" : {n:"わたしの図書館都市計画！4"}
,"youkoso akuma gakkou e 2" : {n:"ようこそ悪魔学校へ 2"}
,"youkoso akuma gakkou e 4" : {n:"ようこそ悪魔学校へ 4"}
,"youkoso akuma gakkou e 8" : {n:"ようこそ悪魔学校へ 8"}
,"youkoso akuma gakkou e sp2023" : {n:"ようこそ悪魔学校へ SP2023"}
,"prism record" : {n:"プリズムレコード"}
,"prism record 10" : {n:"プリズムレコード10"}
,"prism record 11" : {n:"プリズムレコード11"}
,"prism record 2" : {n:"プリズムレコード2"}
,"prism record 3" : {n:"プリズムレコード3"}
,"prism record 4" : {n:"プリズムレコード4"}
,"prism record 5" : {n:"プリズムレコード5"}
,"prism record 6" : {n:"プリズムレコード6"}
,"prism record 7" : {n:"プリズムレコード7"}
,"prism record 8" : {n:"プリズムレコード8"}
,"mou nani mo kowaku nai" : {n:"もう何も恐くない"}
,"mou nanimo kowaku nai" : {n:"もう何も恐くない"}
,"mou nanimo kowakunai" : {n:"もう何も恐くない"}
,"mounanimokowakunai" : {n:"もう何も恐くない"}
,"mou nanimo kowakunai 1" : {n:"もう何も恐くない1"}
,"mou nanimo kowakunai 1.5" : {n:"もう何も恐くない1.5"}
,"mou nanimo kowakunai 12" : {n:"もう何も恐くない12"}
,"mou nanimo kowakunai 13" : {n:"もう何も恐くない13"}
,"mou nanimo kowakunai 14" : {n:"もう何も恐くない14"}
,"mou nanimo kowakunai 16" : {n:"もう何も恐くない16"}
,"mou nanimo kowakunai 17" : {n:"もう何も恐くない17"}
,"mou nanimo kowakunai 18" : {n:"もう何も恐くない18"}
,"mou nanimo kowakunai 19" : {n:"もう何も恐くない19"}
,"mou nanimo kowakunai 2" : {n:"もう何も恐くない2"}
,"mou nanimo kowakunai 20" : {n:"もう何も恐くない20"}
,"mou nanimo kowakunai 21" : {n:"もう何も恐くない21"}
,"mou nanimo kowakunai 22" : {n:"もう何も恐くない22"}
,"mou nanimo kowakunai 23" : {n:"もう何も恐くない23"}
,"mou nanimo kowakunai 24" : {n:"もう何も恐くない24"}
,"mou nanimo kowakunai 25" : {n:"もう何も恐くない25"}
,"mou nanimo kowakunai 26" : {n:"もう何も恐くない26"}
,"mou nanimo kowakunai 29" : {n:"もう何も恐くない29"}
,"mou nanimo kowakunai 3" : {n:"もう何も恐くない3"}
,"mou nanimo kowakunai 34" : {n:"もう何も恐くない34"}
,"mou nanimo kowakunai 39" : {n:"もう何も恐くない39"}
,"mou nanimo kowakunai 4" : {n:"もう何も恐くない4"}
,"mou nanimo kowakunai 40" : {n:"もう何も恐くない40"}
,"mou nanimo kowakunai 41" : {n:"もう何も恐くない41"}
,"mou nanimo kowakunai 5" : {n:"もう何も恐くない5"}
,"enkan no kotowari 10" : {n:"円環の理10"}
,"enkan no kotowari 14" : {n:"円環の理14"}
,"enkan no kotowari 7" : {n:"円環の理7"}
,"lyrical magical" : {n:"リリカルマジカル"}
,"lyrical magical 1" : {n:"リリカルマジカル1"}
,"lyrical magical 10" : {n:"リリカルマジカル10"}
,"lyrical magical 11" : {n:"リリカルマジカル11"}
,"lyrical magical 12" : {n:"リリカルマジカル12"}
,"lyrical magical 13" : {n:"リリカルマジカル13"}
,"lyrical magical 14" : {n:"リリカルマジカル14"}
,"lyrical magical 15" : {n:"リリカルマジカル15"}
,"lyrical magical 16" : {n:"リリカルマジカル16"}
,"lyrical magical 18" : {n:"リリカルマジカル18"}
,"lyrical magical 2" : {n:"リリカルマジカル2"}
,"lyrical magical 20" : {n:"リリカルマジカル20"}
,"lyrical magical 21" : {n:"リリカルマジカル21"}
,"lyrical magical 23" : {n:"リリカルマジカル23"}
,"lyrical magical 24" : {n:"リリカルマジカル24"}
,"lyrical magical 25" : {n:"リリカルマジカル25"}
,"lyrical magical 26" : {n:"リリカルマジカル26"}
,"lyrical magical 27" : {n:"リリカルマジカル27"}
,"lyrical magical 28" : {n:"リリカルマジカル28"}
,"lyrical magical 29" : {n:"リリカルマジカル29"}
,"lyrical magical 3" : {n:"リリカルマジカル3"}
,"lyrical magical 32" : {n:"リリカルマジカル32"}
,"lyrical magical 39" : {n:"リリカルマジカル39"}
,"lyrical magical 4" : {n:"リリカルマジカル4"}
,"lyrical magical 5" : {n:"リリカルマジカル5"}
,"lyrical magical 6" : {n:"リリカルマジカル6"}
,"lyrical magical 7" : {n:"リリカルマジカル7"}
,"lyrical magical 8" : {n:"リリカルマジカル8"}
,"lyrical magical 9" : {n:"リリカルマジカル9"}
,"toshokanjima no kyuujitsu" : {n:"図書館島の休日"}
,"toshokan-jima no kyuujitsu" : {n:"図書館島の休日"}
,"ishin denshin" : {n:"維新伝心"}
,"ishin denshin naniwa" : {n:"維新伝心 浪花"}
,"ishin denshin naniwa 2" : {n:"維新伝心 浪花2"}
,"ishin denshin 2" : {n:"維新伝心2"}
,"ishin denshin 3" : {n:"維新伝心3"}
,"ishin denshin 4" : {n:"維新伝心4"}
,"amazing cafe time" : {n:"AMAZing♥カフェタイム"}
,"amazing cafe time osaka" : {n:"AMAZing♥カフェタイム 大阪"}
,"amazing cafe time 2" : {n:"AMAZing♥カフェタイム2"}
,"chou himitsu no ura kagyou 2018" : {n:"超秘密の裏稼業 2018"}
,"chou himitsu no ura kagyou 2019" : {n:"超秘密の裏稼業 2019"}
,"chou himitsu no ura kagyou 2020" : {n:"超秘密の裏稼業 2020"}
,"chou himitsu no ura kagyou 2021 tokyo" : {n:"超秘密の裏稼業 2021東京"}
,"chou himitsu no ura kagyou 2022 natsu" : {n:"超秘密の裏稼業 2022夏"}
,"chou himitsu no ura kagyou 2023" : {n:"超秘密の裏稼業 2023"}
,"chou himitsu no ura kagyou 2023 natsu" : {n:"超秘密の裏稼業 2023夏"}
,"chou himitsu no ura kagyou 2024" : {n:"超秘密の裏稼業 2024"}
,"chou himitsu no ura kagyou 2025" : {n:"超秘密の裏稼業 2025"}
,"himitsu no ura kagyou 10" : {n:"秘密の裏稼業 10"}
,"himitsu no ura kagyou 11" : {n:"秘密の裏稼業 11"}
,"himitsu no ura kagyou 12" : {n:"秘密の裏稼業 12"}
,"himitsu no ura kagyou 13" : {n:"秘密の裏稼業 13"}
,"himitsu no ura kagyou 14" : {n:"秘密の裏稼業 14"}
,"himitsu no ura kagyou 15" : {n:"秘密の裏稼業 15"}
,"himitsu no ura kagyou 18" : {n:"秘密の裏稼業 18"}
,"himitsu no ura kagyou 2" : {n:"秘密の裏稼業 2"}
,"himitsu no ura kagyou 21" : {n:"秘密の裏稼業 21"}
,"himitsu no ura kagyou 22" : {n:"秘密の裏稼業 22"}
,"himitsu no ura kagyou 23" : {n:"秘密の裏稼業 23"}
,"himitsu no ura kagyou 25" : {n:"秘密の裏稼業 25"}
,"himitsu no ura kagyou 26" : {n:"秘密の裏稼業 26"}
,"himitsu no ura kagyou 27" : {n:"秘密の裏稼業 27"}
,"himitsu no ura kagyou 28" : {n:"秘密の裏稼業 28"}
,"himitsu no ura kagyou 31" : {n:"秘密の裏稼業 31"}
,"himitsu no ura kagyou 33" : {n:"秘密の裏稼業 33"}
,"himitsu no ura kagyou 34" : {n:"秘密の裏稼業 34"}
,"himitsu no ura kagyou 35" : {n:"秘密の裏稼業 35"}
,"himitsu no ura kagyou 4" : {n:"秘密の裏稼業 4"}
,"himitsu no ura kagyou 5" : {n:"秘密の裏稼業 5"}
,"himitsu no ura kagyou 6" : {n:"秘密の裏稼業 6"}
,"himitsu no ura kagyou 9" : {n:"秘密の裏稼業 9"}
,"chou kanochi o mezashite 2019" : {n:"超彼の地をめざして 2019"}
,"chou kai ni itaru kusuri 2024" : {n:"超解ニ至ル薬 2024"}
,"超解ニ至ル薬 2024" : {n:"超解ニ至ル薬 2024"}
,"duel party" : {n:"DUEL★PARTY"}
,"duel★party" : {n:"DUEL★PARTY"}
,"duel party 2" : {n:"DUEL★PARTY 2"}
,"duel party 3" : {n:"DUEL★PARTY 3"}
,"duel party 4" : {n:"DUEL★PARTY 4"}
,"duel party 5" : {n:"DUEL★PARTY 5"}
,"duel party 6" : {n:"DUEL★PARTY 6"}
,"lucky card 1" : {n:"LUCKY CARD! 1"}
,"lucky card! 1" : {n:"LUCKY CARD! 1"}
,"lucky card! 2" : {n:"LUCKY CARD! 2"}
,"lucky card! 3" : {n:"LUCKY CARD! 3"}
,"lucky card! 4" : {n:"LUCKY CARD! 4"}
,"lucky card! 5" : {n:"LUCKY CARD! 5"}
,"lucky card! 6" : {n:"LUCKY CARD! 6"}
,"lucky card! 7" : {n:"LUCKY CARD! 7"}
,"lucky card! final" : {n:"LUCKY CARD! FINAL"}
,"ore no turn" : {n:"俺のターン"}
,"ore no turn 10" : {n:"俺のターン 10"}
,"ore no turn 12" : {n:"俺のターン 12"}
,"ore no turn 13" : {n:"俺のターン 13"}
,"ore no turn 15" : {n:"俺のターン 15"}
,"ore no turn 16" : {n:"俺のターン 16"}
,"ore no turn 17" : {n:"俺のターン 17"}
,"ore no turn 18" : {n:"俺のターン 18"}
,"ore no turn 2" : {n:"俺のターン 2"}
,"ore no turn 2019" : {n:"俺のターン 2019"}
,"ore no turn 3" : {n:"俺のターン 3"}
,"ore no turn 4" : {n:"俺のターン 4"}
,"ore no turn 5" : {n:"俺のターン 5"}
,"ore no turn 6" : {n:"俺のターン 6"}
,"ore no turn 7" : {n:"俺のターン 7"}
,"ore no turn 9" : {n:"俺のターン 9"}
,"ore no turn vs 2019" : {n:"俺のターンVS 2019"}
,"ore no turn vs. 2019" : {n:"俺のターンVS 2019"}
,"ore no turn vs 2020" : {n:"俺のターンVS 2020"}
,"sennen battle in sendai 3" : {n:"千年☆バトル in仙台 3"}
,"sennen battle in osaka" : {n:"千年☆バトル in大阪"}
,"sennen☆battle in osaka" : {n:"千年☆バトル in大阪"}
,"sennen battle in osaka 10" : {n:"千年☆バトル in大阪 10"}
,"sennen battle in osaka 15" : {n:"千年☆バトル in大阪 15"}
,"sennen battle in osaka 16" : {n:"千年☆バトル in大阪 16"}
,"sennen battle in osaka 2" : {n:"千年☆バトル in大阪 2"}
,"sennen☆battle in osaka 2" : {n:"千年☆バトル in大阪 2"}
,"sennen battle in osaka 3" : {n:"千年☆バトル in大阪 3"}
,"sennen battle in osaka 4" : {n:"千年☆バトル in大阪 4"}
,"sennen battle in osaka 5" : {n:"千年☆バトル in大阪 5"}
,"sennen battle in osaka 6" : {n:"千年☆バトル in大阪 6"}
,"sennen battle in osaka 7" : {n:"千年☆バトル in大阪 7"}
,"sennen☆battle in osaka 7" : {n:"千年☆バトル in大阪 7"}
,"sennen battle in osaka 8" : {n:"千年☆バトル in大阪 8"}
,"sennen battle in osaka 9" : {n:"千年☆バトル in大阪 9"}
,"sennen ☆ battle in fukuoka 5" : {n:"千年☆バトル in福岡 5"}
,"sennen battle in nagoya" : {n:"千年☆バトル in名古屋"}
,"sennen battle in nagoya 3" : {n:"千年☆バトル in名古屋 3"}
,"sennen battle in nagoya 7" : {n:"千年☆バトル in名古屋 7"}
,"sennen battle in nagoya 8" : {n:"千年☆バトル in名古屋 8"}
,"sennen battle christmas 2013" : {n:"千年☆バトル クリスマス 2013"}
,"sennan battle phase 10" : {n:"千年☆バトル フェイズ10"}
,"senne battle phase 10" : {n:"千年☆バトル フェイズ10"}
,"sennen battle phase 10" : {n:"千年☆バトル フェイズ10"}
,"sennen battle phase 11" : {n:"千年☆バトル フェイズ11"}
,"sennen battle phase 12" : {n:"千年☆バトル フェイズ12"}
,"sennan battle phase 13" : {n:"千年☆バトル フェイズ13"}
,"sennen battle phase 13" : {n:"千年☆バトル フェイズ13"}
,"sennan battle phase 14" : {n:"千年☆バトル フェイズ14"}
,"sennen battle phase 14" : {n:"千年☆バトル フェイズ14"}
,"sennan battle phase 15" : {n:"千年☆バトル フェイズ15"}
,"sennen battle phase 15" : {n:"千年☆バトル フェイズ15"}
,"sennan battle phase 16" : {n:"千年☆バトル フェイズ16"}
,"sennen battle phase 16" : {n:"千年☆バトル フェイズ16"}
,"sennan battle phase 17" : {n:"千年☆バトル フェイズ17"}
,"sennen battle phase 17" : {n:"千年☆バトル フェイズ17"}
,"millennium ☆ battle phase 18" : {n:"千年☆バトル フェイズ18"}
,"sennen balttle phase 18" : {n:"千年☆バトル フェイズ18"}
,"sennen battle phase 18" : {n:"千年☆バトル フェイズ18"}
,"sen bato 19" : {n:"千年☆バトル フェイズ19"}
,"sennan battle phase 19" : {n:"千年☆バトル フェイズ19"}
,"sennen battle phase 19" : {n:"千年☆バトル フェイズ19"}
,"sennen battle phase 2" : {n:"千年☆バトル フェイズ2"}
,"sennen battle phase 20" : {n:"千年☆バトル フェイズ20"}
,"sennan battle phase 21" : {n:"千年☆バトル フェイズ21"}
,"sennen battle phase 21" : {n:"千年☆バトル フェイズ21"}
,"sennen battle phase 22" : {n:"千年☆バトル フェイズ22"}
,"sennan battle phase 23" : {n:"千年☆バトル フェイズ23"}
,"sennen battle phase 23" : {n:"千年☆バトル フェイズ23"}
,"sennan battle phase 24" : {n:"千年☆バトル フェイズ24"}
,"sennen battle phase 24" : {n:"千年☆バトル フェイズ24"}
,"sennan battle phase 25" : {n:"千年☆バトル フェイズ25"}
,"senne battle phase 25" : {n:"千年☆バトル フェイズ25"}
,"sennen battle phase 25" : {n:"千年☆バトル フェイズ25"}
,"sennan battle phase 26" : {n:"千年☆バトル フェイズ26"}
,"sennen battle phase 26" : {n:"千年☆バトル フェイズ26"}
,"sennen battle phase 33" : {n:"千年☆バトル フェイズ33"}
,"sennen battle phase 4" : {n:"千年☆バトル フェイズ4"}
,"sennan battle phase 5" : {n:"千年☆バトル フェイズ5"}
,"sennen battle phase 5" : {n:"千年☆バトル フェイズ5"}
,"sennan battle phase 6" : {n:"千年☆バトル フェイズ6"}
,"sennen battle phase 6" : {n:"千年☆バトル フェイズ6"}
,"sennan battle phase 7" : {n:"千年☆バトル フェイズ7"}
,"sennen battle phase 7" : {n:"千年☆バトル フェイズ7"}
,"sennenbattle phase 7" : {n:"千年☆バトル フェイズ7"}
,"senne battle phase 8" : {n:"千年☆バトル フェイズ8"}
,"sennen battle phase 8" : {n:"千年☆バトル フェイズ8"}
,"senne battle phase 9" : {n:"千年☆バトル フェイズ9"}
,"sennen battle phase 9" : {n:"千年☆バトル フェイズ9"}
,"sennen battle natsuyasumi 2013" : {n:"千年☆バトル 夏休み 2013"}
,"sennen battle darkness region" : {n:"千年☆バトルDarkness Region"}
,"sennen☆battle darkness region" : {n:"千年☆バトルDarkness Region"}
,"chou ore no turn 20" : {n:"超★俺の★ターン 20"}
,"chou ore no turn 25" : {n:"超★俺の★ターン 25"}
,"chou ore no turn 2017" : {n:"超★俺のターン 2017"}
,"chou ore no turn 2018" : {n:"超★俺のターン 2018"}
,"chou ore no turn 2019" : {n:"超★俺のターン 2019"}
,"chou ore no turn 2021" : {n:"超★俺のターン 2021"}
,"chou ore no turn 2022" : {n:"超★俺のターン 2022"}
,"chou ore no turn 2023" : {n:"超★俺のターン 2023"}
,"chou★ore no turn 2023" : {n:"超★俺のターン 2023"}
,"chou ore no turn 2024" : {n:"超★俺のターン 2024"}
,"gouyoku de kenkyo na event" : {n:"強欲で謙虚なイベント"}
,"gouyoku de kenkyo na event turn10" : {n:"強欲で謙虚なイベント TURN10"}
,"gouyoku de kenkyo na event turn11" : {n:"強欲で謙虚なイベント TURN11"}
,"gouyoku de kenkyo na event turn12" : {n:"強欲で謙虚なイベント TURN12"}
,"gouyoku de kenkyo na event turn13" : {n:"強欲で謙虚なイベント TURN13"}
,"gouyoku de kenkyo na event turn14" : {n:"強欲で謙虚なイベント TURN14"}
,"gouyoku de kenkyo na event turn15" : {n:"強欲で謙虚なイベント TURN15"}
,"gouyokude kenkyona event turn15" : {n:"強欲で謙虚なイベント TURN15"}
,"gouyoku de kenkyo na event turn16" : {n:"強欲で謙虚なイベント TURN16"}
,"gouyokude kenkyona event turn16" : {n:"強欲で謙虚なイベント TURN16"}
,"gouyoku de kenkyo na event turn17" : {n:"強欲で謙虚なイベント TURN17"}
,"gouyoku de kenkyo na event turn4" : {n:"強欲で謙虚なイベント TURN4"}
,"gouyoku de kenkyo na event turn7" : {n:"強欲で謙虚なイベント TURN7"}
,"gouyoku de kenkyo na event turn8 battle phase" : {n:"強欲で謙虚なイベント TURN8 バトルフェイズ"}
,"mirai o terasu three bullet" : {n:"未来を照らすスリーバレット"}
,"mirai o terasu three bullet 2" : {n:"未来を照らすスリーバレット2"}
,"mirai o terasu three bullet 3" : {n:"未来を照らすスリーバレット3"}
,"mirai o terasu three bullet 4" : {n:"未来を照らすスリーバレット4"}
,"mirai o terasu three bullet 5" : {n:"未来を照らすスリーバレット5"}
,"mirai o terasu three bullet 7" : {n:"未来を照らすスリーバレット7"}
,"mirai o terasu three bullet 8" : {n:"未来を照らすスリーバレット8"}
,"link☆duelmaker" : {n:"Link☆Duelmaker"}
,"link☆duelmaker10" : {n:"Link☆Duelmaker 10"}
,"link☆duelmaker11" : {n:"Link☆Duelmaker 11"}
,"link☆duelmaker3" : {n:"Link☆Duelmaker 3"}
,"link duelmaker 4" : {n:"Link☆Duelmaker 4"}
,"link☆duelmaker 4" : {n:"Link☆Duelmaker 4"}
,"link☆duelmaker4" : {n:"Link☆Duelmaker 4"}
,"link duelmaker5" : {n:"Link☆Duelmaker 5"}
,"link☆duelmaker5" : {n:"Link☆Duelmaker 5"}
,"link duelmaker6" : {n:"Link☆Duelmaker 6"}
,"link☆duelmaker6" : {n:"Link☆Duelmaker 6"}
,"link☆duelmaker7" : {n:"Link☆Duelmaker 7"}
,"link☆duelmaker8" : {n:"Link☆Duelmaker 8"}
,"link☆duelmaker9" : {n:"Link☆Duelmaker 9"}
,"link☆duelmaker west2" : {n:"Link☆Duelmaker WEST2"}
,"link☆duelmaker west3" : {n:"Link☆Duelmaker WEST3"}
,"unmei o michibiku access code" : {n:"運命を導くアクセスコード"}
,"unmei o michibiku access code 2" : {n:"運命を導くアクセスコード2"}
,"unmei o michibiku access code 4" : {n:"運命を導くアクセスコード4"}
,"unmei o michibiku access code 7" : {n:"運命を導くアクセスコード7"}
,"unmei o michibiku access code west" : {n:"運命を導くアクセスコードWEST"}
,"unmei o michibiku akusesukōdo west" : {n:"運命を導くアクセスコードWEST"}
,"visa wa omochi desu ka?" : {n:"査証はおもちですかぁ？"}
,"visa wa omochi desu ka? 6" : {n:"査証はおもちですかぁ？6"}
,"visa wa omochi desu ka? 7" : {n:"査証はおもちですかぁ？7"}
,"visa wa omochi desu ka? 8" : {n:"査証はおもちですかぁ？8"}
,"visa wa omochi desu ka? 9" : {n:"査証はおもちですかぁ？9"}
,"ryuu ni sakazuki -giri jin jou- 2" : {n:"龍に盃-義理仁情-2"}
,"ryuu ni sakazuki -giri jin jou- 3" : {n:"龍に盃-義理仁情-3"}
,"ryuu ni sakazuki -giri jin jou- 4" : {n:"龍に盃-義理仁情-4"}
,"ryuu ni sakazuki -giri jin jou- 5" : {n:"龍に盃-義理仁情-5"}
,"ryuu ni sakazuki -giri jin jou- naniwa" : {n:"龍に盃-義理仁情-難波"}
,"0228#airboo 2021" : {n:"0228#エアブーHARU2021"}
,"0411#airboo 2021" : {n:"0411#エアブー2021"}
,"0530 super #airboo 2021-day2-" : {n:"0530超#エアブー2021-day2-"}
,"0530# chou airboo 2021 day2" : {n:"0530超#エアブー2021-day2-"}
,"0726 #airboo cityfes2020" : {n:"0726#エアブーCITYFES2020"}
,"0822 super #airboo 2021" : {n:"0822超SUPER #エアブー 2021"}
,"0828# chou airboo natsu 2022" : {n:"0828#超エアブー夏2022"}
,"1010 # airboo 2021" : {n:"1010 #エアブー 2021"}
,"bs-sai 5" : {n:"BS祭05"}
,"bs-sai 7" : {n:"BS祭07"}
,"cc10" : {n:"COMIC CITY 10"}
,"cc17" : {n:"COMIC CITY 17"}
,"comic city online-231215-" : {n:"COMIC CITY ONLINE 231215"}
,"spark10" : {n:"COMIC CITY SPARK 10"}
,"spark11" : {n:"COMIC CITY SPARK 11"}
,"spark12" : {n:"COMIC CITY SPARK 12"}
,"cc spark 13" : {n:"COMIC CITY SPARK 13"}
,"spark13" : {n:"COMIC CITY SPARK 13"}
,"comic city spark 14" : {n:"COMIC CITY SPARK 14"}
,"spark14" : {n:"COMIC CITY SPARK 14"}
,"spark15" : {n:"COMIC CITY SPARK 15"}
,"spark16" : {n:"COMIC CITY SPARK 16"}
,"spark17" : {n:"COMIC CITY SPARK 17"}
,"comic city spark 18" : {n:"COMIC CITY SPARK 18"}
,"spark18" : {n:"COMIC CITY SPARK 18"}
,"comic city spark 19" : {n:"COMIC CITY SPARK 19"}
,"spark19" : {n:"COMIC CITY SPARK 19"}
,"spark2" : {n:"COMIC CITY SPARK 2"}
,"spark23" : {n:"COMIC CITY SPARK 23"}
,"spark25" : {n:"COMIC CITY SPARK 25"}
,"spark26" : {n:"COMIC CITY SPARK 26"}
,"spark3" : {n:"COMIC CITY SPARK 3"}
,"spark4" : {n:"COMIC CITY SPARK 4"}
,"spark5" : {n:"COMIC CITY SPARK 5"}
,"spark6" : {n:"COMIC CITY SPARK 6"}
,"spark7" : {n:"COMIC CITY SPARK 7"}
,"spark8" : {n:"COMIC CITY SPARK 8"}
,"ccs9" : {n:"COMIC CITY SPARK 9"}
,"spark9" : {n:"COMIC CITY SPARK 9"}
,"comic city vega 2024" : {n:"COMIC CITY VEGA 2024"}
,"comic city vega 2025" : {n:"COMIC CITY VEGA 2025"}
,"cckobe61" : {n:"COMIC CITY 神戸 61"}
,"cckobe64" : {n:"COMIC CITY 神戸 64"}
,"cckobe 69" : {n:"COMIC CITY 神戸 69"}
,"ccharumi 38" : {n:"COMIC CITY 晴海 38"}
,"ccosaka100" : {n:"COMIC CITY 大阪 100"}
,"comic city osaka 100" : {n:"COMIC CITY 大阪 100"}
,"ccosaka101" : {n:"COMIC CITY 大阪 101"}
,"ccosaka102" : {n:"COMIC CITY 大阪 102"}
,"ccosaka104" : {n:"COMIC CITY 大阪 104"}
,"ccosaka105" : {n:"COMIC CITY 大阪 105"}
,"ccosaka106" : {n:"COMIC CITY 大阪 106"}
,"ccosaka107" : {n:"COMIC CITY 大阪 107"}
,"ccosaka108" : {n:"COMIC CITY 大阪 108"}
,"ccosaka109" : {n:"COMIC CITY 大阪 109"}
,"ccosaka112" : {n:"COMIC CITY 大阪 112"}
,"comic city osaka 112" : {n:"COMIC CITY 大阪 112"}
,"ccosaka113" : {n:"COMIC CITY 大阪 113"}
,"ccosaka115" : {n:"COMIC CITY 大阪 115"}
,"ccosaka116" : {n:"COMIC CITY 大阪 116"}
,"ccosaka117" : {n:"COMIC CITY 大阪 117"}
,"ccosaka118" : {n:"COMIC CITY 大阪 118"}
,"ccosaka119" : {n:"COMIC CITY 大阪 119"}
,"ccosaka120" : {n:"COMIC CITY 大阪 120"}
,"comic city osaka121" : {n:"COMIC CITY 大阪 121"}
,"ccosaka122" : {n:"COMIC CITY 大阪 122"}
,"ccosaka123" : {n:"COMIC CITY 大阪 123"}
,"ccosaka124" : {n:"COMIC CITY 大阪 124"}
,"comic city osaka 124, isekai no kaitou 2" : {n:"COMIC CITY 大阪 124、異世界の怪盗2"}
,"ccosaka125" : {n:"COMIC CITY 大阪 125"}
,"ccosaka30" : {n:"COMIC CITY 大阪 30"}
,"ccosaka36" : {n:"COMIC CITY 大阪 36"}
,"ccosaka37" : {n:"COMIC CITY 大阪 37"}
,"ccosaka38" : {n:"COMIC CITY 大阪 38"}
,"ccosaka44" : {n:"COMIC CITY 大阪 44"}
,"ccosaka45" : {n:"COMIC CITY 大阪 45"}
,"ccosaka47" : {n:"COMIC CITY 大阪 47"}
,"ccosaka48" : {n:"COMIC CITY 大阪 48"}
,"ccosaka52" : {n:"COMIC CITY 大阪 52"}
,"ccosaka53" : {n:"COMIC CITY 大阪 53"}
,"ccosaka54" : {n:"COMIC CITY 大阪 54"}
,"ccosaka57" : {n:"COMIC CITY 大阪 57"}
,"ccosaka59" : {n:"COMIC CITY 大阪 59"}
,"ccosaka61" : {n:"COMIC CITY 大阪 61"}
,"ccosaka62" : {n:"COMIC CITY 大阪 62"}
,"ccosaka64" : {n:"COMIC CITY 大阪 64"}
,"cco66" : {n:"COMIC CITY 大阪 66"}
,"ccosaka66" : {n:"COMIC CITY 大阪 66"}
,"ccosaka67" : {n:"COMIC CITY 大阪 67"}
,"ccosaka68" : {n:"COMIC CITY 大阪 68"}
,"ccosaka69" : {n:"COMIC CITY 大阪 69"}
,"ccosaka72" : {n:"COMIC CITY 大阪 72"}
,"ccosaka74" : {n:"COMIC CITY 大阪 74"}
,"ccosaka75" : {n:"COMIC CITY 大阪 75"}
,"cco76" : {n:"COMIC CITY 大阪 76"}
,"ccosaka76" : {n:"COMIC CITY 大阪 76"}
,"ccosaka77" : {n:"COMIC CITY 大阪 77"}
,"ccosaka78" : {n:"COMIC CITY 大阪 78"}
,"ccosaka79" : {n:"COMIC CITY 大阪 79"}
,"ccosaka80" : {n:"COMIC CITY 大阪 80"}
,"ccosaka82" : {n:"COMIC CITY 大阪 82"}
,"ccosaka83" : {n:"COMIC CITY 大阪 83"}
,"ccosaka84" : {n:"COMIC CITY 大阪 84"}
,"ccosaka85" : {n:"COMIC CITY 大阪 85"}
,"ccosaka86" : {n:"COMIC CITY 大阪 86"}
,"ccosaka87" : {n:"COMIC CITY 大阪 87"}
,"ccosaka89" : {n:"COMIC CITY 大阪 89"}
,"ccosaka91" : {n:"COMIC CITY 大阪 91"}
,"ccosaka92" : {n:"COMIC CITY 大阪 92"}
,"comic city osaka 92" : {n:"COMIC CITY 大阪 92"}
,"ccosaka93" : {n:"COMIC CITY 大阪 93"}
,"ccosaka94" : {n:"COMIC CITY 大阪 94"}
,"ccosaka97" : {n:"COMIC CITY 大阪 97"}
,"cc osaka 98" : {n:"COMIC CITY 大阪 98"}
,"ccosaka98" : {n:"COMIC CITY 大阪 98"}
,"ccosaka99" : {n:"COMIC CITY 大阪 99"}
,"cctokyo102" : {n:"COMIC CITY 東京 102"}
,"cctokyo103" : {n:"COMIC CITY 東京 103"}
,"cctokyo106" : {n:"COMIC CITY 東京 106"}
,"cctokyo114" : {n:"COMIC CITY 東京 114"}
,"cctokyo119" : {n:"COMIC CITY 東京 119"}
,"cctokyo121" : {n:"COMIC CITY 東京 121"}
,"cctokyo122" : {n:"COMIC CITY 東京 122"}
,"cctokyo123" : {n:"COMIC CITY 東京 123"}
,"cctokyo124" : {n:"COMIC CITY 東京 124"}
,"cctokyo125" : {n:"COMIC CITY 東京 125"}
,"cctokyo126" : {n:"COMIC CITY 東京 126"}
,"cctokyo 127" : {n:"COMIC CITY 東京 127"}
,"cctokyo127" : {n:"COMIC CITY 東京 127"}
,"cctokyo128" : {n:"COMIC CITY 東京 128"}
,"cctokyo129" : {n:"COMIC CITY 東京 129"}
,"cctokyo130" : {n:"COMIC CITY 東京 130"}
,"cctokyo131" : {n:"COMIC CITY 東京 131"}
,"cctokyo132" : {n:"COMIC CITY 東京 132"}
,"cctokyo133" : {n:"COMIC CITY 東京 133"}
,"cc tokyo 134" : {n:"COMIC CITY 東京 134"}
,"ccotokyo134" : {n:"COMIC CITY 東京 134"}
,"cctokyo134" : {n:"COMIC CITY 東京 134"}
,"cctokyo135" : {n:"COMIC CITY 東京 135"}
,"cctokyo136" : {n:"COMIC CITY 東京 136"}
,"cctokyo137" : {n:"COMIC CITY 東京 137"}
,"cctokyo138" : {n:"COMIC CITY 東京 138"}
,"cctokyo139" : {n:"COMIC CITY 東京 139"}
,"cctokyo140" : {n:"COMIC CITY 東京 140"}
,"cctokyo141" : {n:"COMIC CITY 東京 141"}
,"cctokyo142" : {n:"COMIC CITY 東京 142"}
,"comic city tokyo 142" : {n:"COMIC CITY 東京 142"}
,"cctokyo144" : {n:"COMIC CITY 東京 144"}
,"cctokyo145" : {n:"COMIC CITY 東京 145"}
,"cctokyo146" : {n:"COMIC CITY 東京 146"}
,"cctokyo147" : {n:"COMIC CITY 東京 147"}
,"comic city tokyo 147" : {n:"COMIC CITY 東京 147"}
,"cctokyo148" : {n:"COMIC CITY 東京 148"}
,"cctokyo149" : {n:"COMIC CITY 東京 149"}
,"comic city tokyo 149" : {n:"COMIC CITY 東京 149"}
,"cctokyo150" : {n:"COMIC CITY 東京 150"}
,"comic city tokyo 151" : {n:"COMIC CITY 東京 151"}
,"cctokyo56" : {n:"COMIC CITY 東京 56"}
,"cctokyo89" : {n:"COMIC CITY 東京 89"}
,"cctokyo95" : {n:"COMIC CITY 東京 95"}
,"cctokyo96" : {n:"COMIC CITY 東京 96"}
,"cctokyo97" : {n:"COMIC CITY 東京 97"}
,"cctokyo98" : {n:"COMIC CITY 東京 98"}
,"ccfukuoka17" : {n:"COMIC CITY 福岡 17"}
,"ccfukuoka19" : {n:"COMIC CITY 福岡 19"}
,"ccfukuoka20" : {n:"COMIC CITY 福岡 20"}
,"ccfukuoka22" : {n:"COMIC CITY 福岡 22"}
,"ccfukuoka23" : {n:"COMIC CITY 福岡 23"}
,"ccfukuoka24" : {n:"COMIC CITY 福岡 24"}
,"ccfukuoka25" : {n:"COMIC CITY 福岡 25"}
,"ccfukuoka26" : {n:"COMIC CITY 福岡 26"}
,"ccfukuoka27" : {n:"COMIC CITY 福岡 27"}
,"ccfukuoka28" : {n:"COMIC CITY 福岡 28"}
,"ccfukuoka31" : {n:"COMIC CITY 福岡 31"}
,"ccfukuoka32" : {n:"COMIC CITY 福岡 32"}
,"ccfukuoka33" : {n:"COMIC CITY 福岡 33"}
,"ccfukuoka34" : {n:"COMIC CITY 福岡 34"}
,"ccfukuoka38" : {n:"COMIC CITY 福岡 38"}
,"ccfukuoka39" : {n:"COMIC CITY 福岡 39"}
,"ccfukuoka40" : {n:"COMIC CITY 福岡 40"}
,"ccfukuoka41" : {n:"COMIC CITY 福岡 41"}
,"ccfukuoka42" : {n:"COMIC CITY 福岡 42"}
,"ccfukuoka43" : {n:"COMIC CITY 福岡 43"}
,"ccfukuoka45" : {n:"COMIC CITY 福岡 45"}
,"ccfukuoka46" : {n:"COMIC CITY 福岡 46"}
,"ccfukuoka47" : {n:"COMIC CITY 福岡 47"}
,"ccfukuoka48" : {n:"COMIC CITY 福岡 48"}
,"ccfukuoka49" : {n:"COMIC CITY 福岡 49"}
,"ccfukuoka51" : {n:"COMIC CITY 福岡 51"}
,"ccfukuoka52" : {n:"COMIC CITY 福岡 52"}
,"ccfukuoka53" : {n:"COMIC CITY 福岡 53"}
,"ccfukuoka55" : {n:"COMIC CITY 福岡 55"}
,"ccfukuoka56" : {n:"COMIC CITY 福岡 56"}
,"ccfukuoka59" : {n:"COMIC CITY 福岡 59"}
,"ccfukuoka60" : {n:"COMIC CITY 福岡 60"}
,"cc fukuoka 61" : {n:"COMIC CITY 福岡 61"}
,"ccfukuoka61" : {n:"COMIC CITY 福岡 61"}
,"ccfukuoka62" : {n:"COMIC CITY 福岡 62"}
,"cc fukuoka dome 11" : {n:"COMIC CITY 福岡ドーム 11"}
,"cc fukuoka dome 3" : {n:"COMIC CITY 福岡ドーム 3"}
,"ccfukuokadome6" : {n:"COMIC CITY 福岡ドーム 6"}
,"good comic city 14" : {n:"GOOD COMIC CITY 14"}
,"good comic city 16" : {n:"GOOD COMIC CITY 16"}
,"good comic city 17" : {n:"GOOD COMIC CITY 17"}
,"good comic city 18" : {n:"GOOD COMIC CITY 18"}
,"good comic city 19" : {n:"GOOD COMIC CITY 19"}
,"good comic city 20" : {n:"GOOD COMIC CITY 20"}
,"good20" : {n:"GOOD COMIC CITY 20"}
,"good comic city 21" : {n:"GOOD COMIC CITY 21"}
,"good comic city 23" : {n:"GOOD COMIC CITY 23"}
,"good comic city 24" : {n:"GOOD COMIC CITY 24"}
,"good comic24 city 24" : {n:"GOOD COMIC CITY 24"}
,"good comic city 25" : {n:"GOOD COMIC CITY 25"}
,"good comic city 27" : {n:"GOOD COMIC CITY 27"}
,"good comic city 28" : {n:"GOOD COMIC CITY 28"}
,"good comic city 29" : {n:"GOOD COMIC CITY 29"}
,"good comic city 30 koube" : {n:"GOOD COMIC CITY 30神戸"}
,"good comic city 30 osaka" : {n:"GOOD COMIC CITY 30大阪"}
,"good comic city 8" : {n:"GOOD COMIC CITY 8"}
,"harucc" : {n:"HARU COMIC CITY"}
,"harucc10" : {n:"HARU COMIC CITY 10"}
,"harucc11" : {n:"HARU COMIC CITY 11"}
,"harucc12" : {n:"HARU COMIC CITY 12"}
,"harucc13" : {n:"HARU COMIC CITY 13"}
,"harucc14" : {n:"HARU COMIC CITY 14"}
,"harucc15" : {n:"HARU COMIC CITY 15"}
,"harucc16" : {n:"HARU COMIC CITY 16"}
,"harucc17" : {n:"HARU COMIC CITY 17"}
,"harucc18" : {n:"HARU COMIC CITY 18"}
,"harucc19" : {n:"HARU COMIC CITY 19"}
,"harucc20" : {n:"HARU COMIC CITY 20"}
,"haru comic city 21" : {n:"HARU COMIC CITY 21"}
,"harucc21" : {n:"HARU COMIC CITY 21"}
,"haru comic city 22" : {n:"HARU COMIC CITY 22"}
,"harucc22" : {n:"HARU COMIC CITY 22"}
,"harucc23" : {n:"HARU COMIC CITY 23"}
,"harucc24" : {n:"HARU COMIC CITY 24"}
,"harucc24 tokyo" : {n:"HARU COMIC CITY 24 東京"}
,"harucc25osaka" : {n:"HARU COMIC CITY 25 大阪"}
,"haru comic city 26" : {n:"HARU COMIC CITY 26"}
,"harucc26" : {n:"HARU COMIC CITY 26"}
,"harucc27" : {n:"HARU COMIC CITY 27"}
,"harucc28" : {n:"HARU COMIC CITY 28"}
,"harucc3" : {n:"HARU COMIC CITY 3"}
,"haru comic city 30" : {n:"HARU COMIC CITY 30"}
,"harucc30" : {n:"HARU COMIC CITY 30"}
,"haru comic city 31" : {n:"HARU COMIC CITY 31"}
,"harucc31" : {n:"HARU COMIC CITY 31"}
,"haru comic city 32" : {n:"HARU COMIC CITY 32"}
,"harucc32" : {n:"HARU COMIC CITY 32"}
,"hcc32" : {n:"HARU COMIC CITY 32"}
,"harucc33" : {n:"HARU COMIC CITY 33"}
,"haru comic city 34" : {n:"HARU COMIC CITY 34"}
,"harucc34" : {n:"HARU COMIC CITY 34"}
,"harucc6" : {n:"HARU COMIC CITY 6"}
,"harucc8" : {n:"HARU COMIC CITY 8"}
,"hcc8" : {n:"HARU COMIC CITY 8"}
,"harucc9" : {n:"HARU COMIC CITY 9"}
,"super 10" : {n:"SUPER COMIC CITY 10"}
,"super comic city 10" : {n:"SUPER COMIC CITY 10"}
,"super10" : {n:"SUPER COMIC CITY 10"}
,"super comic city 11" : {n:"SUPER COMIC CITY 11"}
,"super11" : {n:"SUPER COMIC CITY 11"}
,"super12" : {n:"SUPER COMIC CITY 12"}
,"super 13" : {n:"SUPER COMIC CITY 13"}
,"super13" : {n:"SUPER COMIC CITY 13"}
,"super14" : {n:"SUPER COMIC CITY 14"}
,"scc15" : {n:"SUPER COMIC CITY 15"}
,"super 15" : {n:"SUPER COMIC CITY 15"}
,"super15" : {n:"SUPER COMIC CITY 15"}
,"super16" : {n:"SUPER COMIC CITY 16"}
,"super 17" : {n:"SUPER COMIC CITY 17"}
,"super17" : {n:"SUPER COMIC CITY 17"}
,"super18" : {n:"SUPER COMIC CITY 18"}
,"super19" : {n:"SUPER COMIC CITY 19"}
,"scc2" : {n:"SUPER COMIC CITY 2"}
,"scc20" : {n:"SUPER COMIC CITY 20"}
,"super20" : {n:"SUPER COMIC CITY 20"}
,"super 21" : {n:"SUPER COMIC CITY 21"}
,"super21" : {n:"SUPER COMIC CITY 21"}
,"super22" : {n:"SUPER COMIC CITY 22"}
,"scc23" : {n:"SUPER COMIC CITY 23"}
,"super comic city 23" : {n:"SUPER COMIC CITY 23"}
,"super23" : {n:"SUPER COMIC CITY 23"}
,"super24" : {n:"SUPER COMIC CITY 24"}
,"super25" : {n:"SUPER COMIC CITY 25"}
,"scc26" : {n:"SUPER COMIC CITY 26"}
,"super comic city 26" : {n:"SUPER COMIC CITY 26"}
,"super26" : {n:"SUPER COMIC CITY 26"}
,"super comic city 27" : {n:"SUPER COMIC CITY 27"}
,"super27" : {n:"SUPER COMIC CITY 27"}
,"super28" : {n:"SUPER COMIC CITY 28"}
,"scc28 -ki-" : {n:"SUPER COMIC CITY 28 -起-"}
,"super28 -ten-" : {n:"SUPER COMIC CITY 28 -転-"}
,"scc29" : {n:"SUPER COMIC CITY 29"}
,"super comic city 29" : {n:"SUPER COMIC CITY 29"}
,"super29" : {n:"SUPER COMIC CITY 29"}
,"super3" : {n:"SUPER COMIC CITY 3"}
,"super comic city 30" : {n:"SUPER COMIC CITY 30"}
,"super30" : {n:"SUPER COMIC CITY 30"}
,"super comic city 31" : {n:"SUPER COMIC CITY 31"}
,"super31" : {n:"SUPER COMIC CITY 31"}
,"scc32" : {n:"SUPER COMIC CITY 32"}
,"super32" : {n:"SUPER COMIC CITY 32"}
,"super comic city 32 -day2-" : {n:"SUPER COMIC CITY 32 2日目"}
,"super4" : {n:"SUPER COMIC CITY 4"}
,"super6" : {n:"SUPER COMIC CITY 6"}
,"super7" : {n:"SUPER COMIC CITY 7"}
,"super8" : {n:"SUPER COMIC CITY 8"}
,"super9" : {n:"SUPER COMIC CITY 9"}
,"scc gyu!! 2021" : {n:"SUPER COMIC CITY GYU!! 2021"}
,"super comic city gyu!! 2021" : {n:"SUPER COMIC CITY GYU!! 2021"}
,"superkansai10" : {n:"SUPER COMIC CITY 関西 10"}
,"superkansai11" : {n:"SUPER COMIC CITY 関西 11"}
,"superkansai13" : {n:"SUPER COMIC CITY 関西 13"}
,"superkansai14" : {n:"SUPER COMIC CITY 関西 14"}
,"superkansai15" : {n:"SUPER COMIC CITY 関西 15"}
,"superkansai16" : {n:"SUPER COMIC CITY 関西 16"}
,"superkansai17" : {n:"SUPER COMIC CITY 関西 17"}
,"superkansai18" : {n:"SUPER COMIC CITY 関西 18"}
,"superkansai19" : {n:"SUPER COMIC CITY 関西 19"}
,"scc kansai 20" : {n:"SUPER COMIC CITY 関西 20"}
,"superkansai20" : {n:"SUPER COMIC CITY 関西 20"}
,"superkansai21" : {n:"SUPER COMIC CITY 関西 21"}
,"superkansai22" : {n:"SUPER COMIC CITY 関西 22"}
,"superkansai23" : {n:"SUPER COMIC CITY 関西 23"}
,"superkansai24" : {n:"SUPER COMIC CITY 関西 24"}
,"superkansai25" : {n:"SUPER COMIC CITY 関西 25"}
,"superkansai26" : {n:"SUPER COMIC CITY 関西 26"}
,"super comic city kansai 27" : {n:"SUPER COMIC CITY 関西 27"}
,"superkansai27" : {n:"SUPER COMIC CITY 関西 27"}
,"super comic city kansai 28" : {n:"SUPER COMIC CITY 関西 28"}
,"superkansai28" : {n:"SUPER COMIC CITY 関西 28"}
,"superkansai29" : {n:"SUPER COMIC CITY 関西 29"}
,"super関西29" : {n:"SUPER COMIC CITY 関西 29"}
,"super comic city kansai 30" : {n:"SUPER COMIC CITY 関西 30"}
,"superkansai7" : {n:"SUPER COMIC CITY 関西 7"}
,"superkansai8" : {n:"SUPER COMIC CITY 関西 8"}
,"chou super comic city 2020" : {n:"超SUPER COMIC CITY 2020"}
,"chou super2020" : {n:"超SUPER COMIC CITY 2020"}
,"chou chou super comic city 2021" : {n:"超超SUPER COMIC CITY 2021"}
,"cwhk22" : {n:"Comic World 香港 22"}
,"cwhk23" : {n:"Comic World 香港 23"}
,"cwhk31" : {n:"Comic World 香港 31"}
,"cwt27" : {n:"Comic World 台湾 27"}
,"cwt29" : {n:"Comic World 台湾 29"}
,"cwt31" : {n:"Comic World 台湾 31"}
,"cwt32" : {n:"Comic World 台湾 32"}
,"cwt35" : {n:"Comic World 台湾 35"}
,"cwt36" : {n:"Comic World 台湾 36"}
,"cwt37" : {n:"Comic World 台湾 37"}
,"cwt39" : {n:"Comic World 台湾 39"}
,"cwt40" : {n:"Comic World 台湾 40"}
,"cwt43" : {n:"Comic World 台湾 43"}
,"cwt49" : {n:"Comic World 台湾 49"}
,"cwt51" : {n:"Comic World 台湾 51"}
,"cwt54" : {n:"Comic World 台湾 54"}
,"cwt56" : {n:"Comic World 台湾 56"}
,"cwt-61" : {n:"Comic World 台湾 61"}
,"cwt66" : {n:"Comic World 台湾 66"}
,"cwt-k11" : {n:"Comic World 台湾 高雄場11"}
,"cwtk24" : {n:"Comic World 台湾 高雄場24"}
,"comic1" : {n:"COMIC1"}
,"comic1☆" : {n:"COMIC1"}
,"comic1☆1" : {n:"COMIC1☆1"}
,"comic1☆10" : {n:"COMIC1☆10"}
,"comic1☆11" : {n:"COMIC1☆11"}
,"comic1☆12" : {n:"COMIC1☆12"}
,"comic1☆13" : {n:"COMIC1☆13"}
,"comic1☆14" : {n:"COMIC1☆14"}
,"comic1☆15" : {n:"COMIC1☆15"}
,"comic1☆16" : {n:"COMIC1☆16"}
,"comic1☆17" : {n:"COMIC1☆17"}
,"comic1☆19" : {n:"COMIC1☆19"}
,"comic1☆02" : {n:"COMIC1☆2"}
,"comic1☆2" : {n:"COMIC1☆2"}
,"comic1☆02/c75/c78" : {n:"COMIC1☆2 / C75 / C78"}
,"comic1☆20" : {n:"COMIC1☆20"}
,"comic1☆21" : {n:"COMIC1☆21"}
,"comic1☆22" : {n:"COMIC1☆22"}
,"comic1☆23" : {n:"COMIC1☆23"}
,"comic1☆24" : {n:"COMIC1☆24"}
,"comic1☆25" : {n:"COMIC1☆25"}
,"comic1☆26" : {n:"COMIC1☆26"}
,"comic1☆03" : {n:"COMIC1☆3"}
,"comic1☆3" : {n:"COMIC1☆3"}
,"(comic1☆4" : {n:"COMIC1☆4"}
,"comic1☆04" : {n:"COMIC1☆4"}
,"comic1☆4" : {n:"COMIC1☆4"}
,"comic1☆05" : {n:"COMIC1☆5"}
,"comic1☆5" : {n:"COMIC1☆5"}
,"comic1-5" : {n:"COMIC1☆5"}
,"comic1☆06" : {n:"COMIC1☆6"}
,"comic1☆6" : {n:"COMIC1☆6"}
,"comic1☆07" : {n:"COMIC1☆7"}
,"comic1☆7" : {n:"COMIC1☆7"}
,"comic17" : {n:"COMIC1☆7"}
,"comic1☆08" : {n:"COMIC1☆8"}
,"comic1☆8" : {n:"COMIC1☆8"}
,"comic1☆ 9" : {n:"COMIC1☆9"}
,"comic1☆09" : {n:"COMIC1☆9"}
,"comic1☆9" : {n:"COMIC1☆9"}
,"comic1 bs-sai" : {n:"COMIC1 BS祭スペシャル"}
,"comic1 bssai special" : {n:"COMIC1 BS祭スペシャル"}
,"comic1 bs-sai special" : {n:"COMIC1 BS祭スペシャル"}
,"ac" : {n:"エアコミケ"}
,"ac2" : {n:"エアコミケ2"}
,"air comike 2" : {n:"エアコミケ2"}
,"air comiket 2" : {n:"エアコミケ2"}
,"ac3" : {n:"エアコミケ3"}
,"comic sdf" : {n:"コミックSDF"}
,"aggregate 3" : {n:"アグリゲート3"}
,"aggregate 05" : {n:"アグリゲート5"}
,"aggregate 5" : {n:"アグリゲート5"}
,"gataket 107" : {n:"ガタケット107"}
,"gataket 121" : {n:"ガタケット121"}
,"gataket 126" : {n:"ガタケット126"}
,"gataket 132" : {n:"ガタケット132"}
,"gataket 142" : {n:"ガタケット142"}
,"gataket 144" : {n:"ガタケット144"}
,"gataket 153" : {n:"ガタケット153"}
,"gataket 162" : {n:"ガタケット162"}
,"gataket 164" : {n:"ガタケット164"}
,"gataket 174" : {n:"ガタケット174"}
,"sc" : {n:"サンクリ"}
,"sc in pio 2016" : {n:"サンクリ in PIO 2016"}
,"sc1" : {n:"サンクリ1"}
,"sc10" : {n:"サンクリ10"}
,"sc11" : {n:"サンクリ11"}
,"sc12" : {n:"サンクリ12"}
,"comic creation 13" : {n:"サンクリ13"}
,"sc13" : {n:"サンクリ13"}
,"sc14" : {n:"サンクリ14"}
,"comic creation 15" : {n:"サンクリ15"}
,"sc15" : {n:"サンクリ15"}
,"sc16" : {n:"サンクリ16"}
,"comic creation 17" : {n:"サンクリ17"}
,"sc17" : {n:"サンクリ17"}
,"comic creation 18" : {n:"サンクリ18"}
,"sc18" : {n:"サンクリ18"}
,"comic creation 19" : {n:"サンクリ19"}
,"sankuri 19" : {n:"サンクリ19"}
,"sc19" : {n:"サンクリ19"}
,"sc2" : {n:"サンクリ2"}
,"sc20" : {n:"サンクリ20"}
,"sc2015 summer" : {n:"サンクリ2015夏"}
,"sc2015 autumn" : {n:"サンクリ2015秋"}
,"sc2015 winter" : {n:"サンクリ2015冬"}
,"sc 2016 summer" : {n:"サンクリ2016夏"}
,"sc2016 summer" : {n:"サンクリ2016夏"}
,"sc2016summer" : {n:"サンクリ2016夏"}
,"sc2016 autumn" : {n:"サンクリ2016秋"}
,"sc 2018 spring" : {n:"サンクリ2016春"}
,"sc2016 winter" : {n:"サンクリ2016冬"}
,"sc2017" : {n:"サンクリ2017"}
,"sc2017 summer" : {n:"サンクリ2017夏"}
,"sc2017 autumn" : {n:"サンクリ2017秋"}
,"sc2017 winter" : {n:"サンクリ2017冬"}
,"sc2018 summer" : {n:"サンクリ2018夏"}
,"sc2018 autumn" : {n:"サンクリ2018秋"}
,"sc2018 spring" : {n:"サンクリ2018春"}
,"sc2019 summer" : {n:"サンクリ2019夏"}
,"sc2019 autumn" : {n:"サンクリ2019秋"}
,"sc2019 spring" : {n:"サンクリ2019春"}
,"sc2020 summer" : {n:"サンクリ2020夏"}
,"sc2020 autumn" : {n:"サンクリ2020秋"}
,"sc2020 spring" : {n:"サンクリ2020春"}
,"sc2020 winter" : {n:"サンクリ2020冬"}
,"sc2021 summer" : {n:"サンクリ2021夏"}
,"sc2021 autumn" : {n:"サンクリ2021秋"}
,"sc spring 2021" : {n:"サンクリ2021春"}
,"sc2021 spring" : {n:"サンクリ2021春"}
,"sc2021spring" : {n:"サンクリ2021春"}
,"sc2022 summer" : {n:"サンクリ2022夏"}
,"sc2022 autumn" : {n:"サンクリ2022秋"}
,"sc2022 aki 2nd" : {n:"サンクリ2022秋 2nd"}
,"sc2022 autumn 2nd" : {n:"サンクリ2022秋 2nd"}
,"sc2022 spring" : {n:"サンクリ2022春"}
,"sc2022 winter" : {n:"サンクリ2022冬"}
,"scwinter 2022" : {n:"サンクリ2022冬"}
,"sc2023 summer" : {n:"サンクリ2023夏"}
,"sc2023 autumn" : {n:"サンクリ2023秋"}
,"sc2023 spring" : {n:"サンクリ2023春"}
,"sc2024 summer" : {n:"サンクリ2024夏"}
,"sc2024 autumn" : {n:"サンクリ2024秋"}
,"sc2024 spring" : {n:"サンクリ2024春"}
,"sc2025 summer" : {n:"サンクリ2025夏"}
,"sc2025 winter" : {n:"サンクリ2025冬"}
,"comic creation 21" : {n:"サンクリ21"}
,"sc21" : {n:"サンクリ21"}
,"comic creation 22" : {n:"サンクリ22"}
,"sc22" : {n:"サンクリ22"}
,"sc23" : {n:"サンクリ23"}
,"sc24" : {n:"サンクリ24"}
,"sc25" : {n:"サンクリ25"}
,"sc26" : {n:"サンクリ26"}
,"sc27" : {n:"サンクリ27"}
,"sc28" : {n:"サンクリ28"}
,"sc29" : {n:"サンクリ29"}
,"sc3" : {n:"サンクリ3"}
,"sc30" : {n:"サンクリ30"}
,"sc31" : {n:"サンクリ31"}
,"sc32" : {n:"サンクリ32"}
,"sc33" : {n:"サンクリ33"}
,"sc34" : {n:"サンクリ34"}
,"sc35" : {n:"サンクリ35"}
,"sc36" : {n:"サンクリ36"}
,"sankuri 37" : {n:"サンクリ37"}
,"sc37" : {n:"サンクリ37"}
,"sankuri 38" : {n:"サンクリ38"}
,"sc38" : {n:"サンクリ38"}
,"sc39" : {n:"サンクリ39"}
,"sc4" : {n:"サンクリ4"}
,"sc40" : {n:"サンクリ40"}
,"sc41" : {n:"サンクリ41"}
,"sc42" : {n:"サンクリ42"}
,"sc43" : {n:"サンクリ43"}
,"sc44" : {n:"サンクリ44"}
,"sc45" : {n:"サンクリ45"}
,"sc46" : {n:"サンクリ46"}
,"sc47" : {n:"サンクリ47"}
,"sankuri 48" : {n:"サンクリ48"}
,"sc48" : {n:"サンクリ48"}
,"サンクリ48" : {n:"サンクリ48"}
,"sc49" : {n:"サンクリ49"}
,"sc5" : {n:"サンクリ5"}
,"sc50" : {n:"サンクリ50"}
,"sc51" : {n:"サンクリ51"}
,"sc52" : {n:"サンクリ52"}
,"sc53" : {n:"サンクリ53"}
,"sc54" : {n:"サンクリ54"}
,"sc55" : {n:"サンクリ55"}
,"sc56" : {n:"サンクリ56"}
,"sc57" : {n:"サンクリ57"}
,"sc58" : {n:"サンクリ58"}
,"sc59" : {n:"サンクリ59"}
,"sc6" : {n:"サンクリ6"}
,"sc60" : {n:"サンクリ60"}
,"sc61" : {n:"サンクリ61"}
,"sc62" : {n:"サンクリ62"}
,"sc63" : {n:"サンクリ63"}
,"sc64" : {n:"サンクリ64"}
,"sc65" : {n:"サンクリ65"}
,"sc67" : {n:"サンクリ67"}
,"sc69" : {n:"サンクリ69"}
,"sc7" : {n:"サンクリ7"}
,"sc71" : {n:"サンクリ71"}
,"sc8" : {n:"サンクリ8"}
,"sc9" : {n:"サンクリ9"}
,"sc98" : {n:"サンクリ98"}
,"sunshine creation 99" : {n:"サンクリ99"}
,"comic planet tokorozawa 4" : {n:"COMICぷらねっと 所沢4"}
,"comichara" : {n:"コミキャラ"}
,"comichara 2" : {n:"コミキャラ2"}
,"comiket special 2" : {n:"コミケットスペシャル2"}
,"csp2" : {n:"コミケットスペシャル2"}
,"comiket sp4" : {n:"コミケットスペシャル4"}
,"comiket special 4" : {n:"コミケットスペシャル4"}
,"csp4" : {n:"コミケットスペシャル4"}
,"csp5" : {n:"コミケットスペシャル5"}
,"csp6" : {n:"コミケットスペシャル6"}
,"comic castle 10" : {n:"コミックキャッスル 10"}
,"comic castle 12" : {n:"コミックキャッスル 12"}
,"comic castle 13" : {n:"コミックキャッスル 13"}
,"comic castle 14" : {n:"コミックキャッスル 14"}
,"comic castle 15" : {n:"コミックキャッスル 15"}
,"comic castle 16" : {n:"コミックキャッスル 16"}
,"comic castle 2005" : {n:"コミックキャッスル 2005"}
,"comic castle 2006" : {n:"コミックキャッスル 2006"}
,"comic castle 2006 haru" : {n:"コミックキャッスル 2006春"}
,"comic castle 3" : {n:"コミックキャッスル 3"}
,"comic castle 5" : {n:"コミックキャッスル 5"}
,"comic castle 6" : {n:"コミックキャッスル 6"}
,"comic castle 7" : {n:"コミックキャッスル 7"}
,"comic castle 8" : {n:"コミックキャッスル 8"}
,"comic castle 9" : {n:"コミックキャッスル 9"}
,"comic castle eva special" : {n:"コミックキャッスル EVAスペシャル"}
,"comic castle final" : {n:"コミックキャッスル ファイナル"}
,"comcom10" : {n:"コミコミ10"}
,"comicomi10" : {n:"コミコミ10"}
,"comicomi11" : {n:"コミコミ11"}
,"comicomi12" : {n:"コミコミ12"}
,"comicomi13" : {n:"コミコミ13"}
,"comicomi14" : {n:"コミコミ14"}
,"comicomi15" : {n:"コミコミ15"}
,"comicomi16" : {n:"コミコミ16"}
,"comicomi17" : {n:"コミコミ17"}
,"comicomi18" : {n:"コミコミ18"}
,"comicomi2" : {n:"コミコミ2"}
,"comicomi3" : {n:"コミコミ3"}
,"comicomi4" : {n:"コミコミ4"}
,"comicomi5" : {n:"コミコミ5"}
,"comicomi6" : {n:"コミコミ6"}
,"comicomi7" : {n:"コミコミ7"}
,"comicomi8" : {n:"コミコミ8"}
,"comicomi9" : {n:"コミコミ9"}
,"ct" : {n:"こみトレ"}
,"ct origin 2" : {n:"こみトレ オリジン 2"}
,"ct origin 03" : {n:"こみトレ オリジン 3"}
,"ct origin 3" : {n:"こみトレ オリジン 3"}
,"ct orizin 3" : {n:"こみトレ オリジン 3"}
,"ct10" : {n:"こみトレ10"}
,"ct11" : {n:"こみトレ11"}
,"ct12" : {n:"こみトレ12"}
,"ct13" : {n:"こみトレ13"}
,"ct14" : {n:"こみトレ14"}
,"ct15" : {n:"こみトレ15"}
,"ct16" : {n:"こみトレ16"}
,"ct17" : {n:"こみトレ17"}
,"ct18" : {n:"こみトレ18"}
,"ct19" : {n:"こみトレ19"}
,"ct2" : {n:"こみトレ2"}
,"ct20" : {n:"こみトレ20"}
,"ct21" : {n:"こみトレ21"}
,"ct22" : {n:"こみトレ22"}
,"ct23" : {n:"こみトレ23"}
,"ct24" : {n:"こみトレ24"}
,"comi tore 25" : {n:"こみトレ25"}
,"ct25" : {n:"こみトレ25"}
,"ct26" : {n:"こみトレ26"}
,"ct27" : {n:"こみトレ27"}
,"ct28" : {n:"こみトレ28"}
,"ct29" : {n:"こみトレ29"}
,"ct3" : {n:"こみトレ3"}
,"ct30" : {n:"こみトレ30"}
,"こみトレ30" : {n:"こみトレ30"}
,"ct31" : {n:"こみトレ31"}
,"ct32" : {n:"こみトレ32"}
,"ct33" : {n:"こみトレ33"}
,"ct34" : {n:"こみトレ34"}
,"ct35" : {n:"こみトレ35"}
,"ct37" : {n:"こみトレ37"}
,"ct38" : {n:"こみトレ38"}
,"ct39" : {n:"こみトレ39"}
,"ct4" : {n:"こみトレ4"}
,"ct40" : {n:"こみトレ40"}
,"ct41" : {n:"こみトレ41"}
,"ct42" : {n:"こみトレ42"}
,"ct43" : {n:"こみトレ43"}
,"ct44" : {n:"こみトレ44"}
,"comic treasure 45" : {n:"こみトレ45"}
,"ct45" : {n:"こみトレ45"}
,"ct5" : {n:"こみトレ5"}
,"ct6" : {n:"こみトレ6"}
,"ct7" : {n:"こみトレ7"}
,"ct8" : {n:"こみトレ8"}
,"ct9" : {n:"こみトレ9"}
,"chou comic treasure 2020" : {n:"超こみトレ 2020"}
,"comifuro 10" : {n:"コミフロ10"}
,"cf11" : {n:"コミフロ11"}
,"comifuro 11" : {n:"コミフロ11"}
,"cf12" : {n:"コミフロ12"}
,"comifuro 12" : {n:"コミフロ12"}
,"cf13" : {n:"コミフロ13"}
,"comifuro 13" : {n:"コミフロ13"}
,"comifuro 14" : {n:"コミフロ14"}
,"comifuro 15" : {n:"コミフロ15"}
,"cf5" : {n:"コミフロ5"}
,"cf7" : {n:"コミフロ7"}
,"comifuro 8" : {n:"コミフロ8"}
,"c1" : {n:"C1"}
,"c100" : {n:"C100"}
,"c101" : {n:"C101"}
,"c102" : {n:"C102"}
,"c103" : {n:"C103"}
,"c104" : {n:"C104"}
,"comic104" : {n:"C104"}
,"c105" : {n:"C105"}
,"c106" : {n:"C106"}
,"c11" : {n:"C11"}
,"c12" : {n:"C12"}
,"c14" : {n:"C14"}
,"c19" : {n:"C19"}
,"c21" : {n:"C21"}
,"c24" : {n:"C24"}
,"c26" : {n:"C26"}
,"c27" : {n:"C27"}
,"c28" : {n:"C28"}
,"c29" : {n:"C29"}
,"c30" : {n:"C30"}
,"c31" : {n:"C31"}
,"c32" : {n:"C32"}
,"c33" : {n:"C33"}
,"c34" : {n:"C34"}
,"c35" : {n:"C35"}
,"c36" : {n:"C36"}
,"c37" : {n:"C37"}
,"c38" : {n:"C38"}
,"c39" : {n:"C39"}
,"c4" : {n:"C4"}
,"c40" : {n:"C40"}
,"c41" : {n:"C41"}
,"c42" : {n:"C42"}
,"c43" : {n:"C43"}
,"c44" : {n:"C44"}
,"c45" : {n:"C45"}
,"c46" : {n:"C46"}
,"c47" : {n:"C47"}
,"c48" : {n:"C48"}
,"c49" : {n:"C49"}
,"c50" : {n:"C50"}
,"с50" : {n:"C50"}
,"c51" : {n:"C51"}
,"c52" : {n:"C52"}
,"c53" : {n:"C53"}
,"c54" : {n:"C54"}
,"с54" : {n:"C54"}
,"c55" : {n:"C55"}
,"c56" : {n:"C56"}
,"c57" : {n:"C57"}
,"c58" : {n:"C58"}
,"c59" : {n:"C59"}
,"c60" : {n:"C60"}
,"c61" : {n:"C61"}
,"c62" : {n:"C62"}
,"c63" : {n:"C63"}
,"c64" : {n:"C64"}
,"c65" : {n:"C65"}
,"c66" : {n:"C66"}
,"c67" : {n:"C67"}
,"c68" : {n:"C68"}
,"c69" : {n:"C69"}
,"c70" : {n:"C70"}
,"c71" : {n:"C71"}
,"с71" : {n:"C71"}
,"c72" : {n:"C72"}
,"с72" : {n:"C72"}
,"c73" : {n:"C73"}
,"cm73" : {n:"C73"}
,"c74" : {n:"C74"}
,"c75" : {n:"C75"}
,"c76" : {n:"C76"}
,"c77" : {n:"C77"}
,"c78" : {n:"C78"}
,"comiket 78" : {n:"C78"}
,"c79" : {n:"C79"}
,"c80" : {n:"C80"}
,"c81" : {n:"C81"}
,"c82" : {n:"C82"}
,"c83" : {n:"C83"}
,"c84" : {n:"C84"}
,"c85" : {n:"C85"}
,"c86" : {n:"C86"}
,"c87" : {n:"C87"}
,"с87" : {n:"C87"}
,"(c88" : {n:"C88"}
,"c88" : {n:"C88"}
,"c89" : {n:"C89"}
,"c90" : {n:"C90"}
,"c91" : {n:"C91"}
,"c92" : {n:"C92"}
,"c93" : {n:"C93"}
,"c94" : {n:"C94"}
,"comiket 94" : {n:"C94"}
,"c95" : {n:"C95"}
,"c96" : {n:"C96"}
,"c97" : {n:"C97"}
,"c98" : {n:"C98"}
,"c99" : {n:"C99"}
,"cr12" : {n:"Cレヴォ12"}
,"cr13" : {n:"Cレヴォ13"}
,"cr14" : {n:"Cレヴォ14"}
,"cr15" : {n:"Cレヴォ15"}
,"cr16" : {n:"Cレヴォ16"}
,"cr17" : {n:"Cレヴォ17"}
,"cレヴォ17" : {n:"Cレヴォ17"}
,"cr18" : {n:"Cレヴォ18"}
,"cr19" : {n:"Cレヴォ19"}
,"cr20" : {n:"Cレヴォ20"}
,"cr21" : {n:"Cレヴォ21"}
,"cr22" : {n:"Cレヴォ22"}
,"cr23" : {n:"Cレヴォ23"}
,"cr24" : {n:"Cレヴォ24"}
,"cr25" : {n:"Cレヴォ25"}
,"cr26" : {n:"Cレヴォ26"}
,"cr27" : {n:"Cレヴォ27"}
,"cr28" : {n:"Cレヴォ28"}
,"cr29" : {n:"Cレヴォ29"}
,"cr30" : {n:"Cレヴォ30"}
,"cr31" : {n:"Cレヴォ31"}
,"cr32" : {n:"Cレヴォ32"}
,"crevo32" : {n:"Cレヴォ32"}
,"cレヴォ32" : {n:"Cレヴォ32"}
,"cr33" : {n:"Cレヴォ33"}
,"cr34" : {n:"Cレヴォ34"}
,"c revo 35" : {n:"Cレヴォ35"}
,"c revo35" : {n:"Cレヴォ35"}
,"cr35" : {n:"Cレヴォ35"}
,"crevo 35" : {n:"Cレヴォ35"}
,"cr36" : {n:"Cレヴォ36"}
,"cr37" : {n:"Cレヴォ37"}
,"cr38" : {n:"Cレヴォ38"}
,"cr39" : {n:"Cレヴォ39"}
,"cr4" : {n:"Cレヴォ4"}
,"comitia100" : {n:"コミティア 100"}
,"comitia101" : {n:"コミティア 101"}
,"comitia102" : {n:"コミティア 102"}
,"comitia103" : {n:"コミティア 103"}
,"comitia104" : {n:"コミティア 104"}
,"comitia105" : {n:"コミティア 105"}
,"comitia106" : {n:"コミティア 106"}
,"comitia107" : {n:"コミティア 107"}
,"comitia108" : {n:"コミティア 108"}
,"comitia109" : {n:"コミティア 109"}
,"comitia110" : {n:"コミティア 110"}
,"comitia111" : {n:"コミティア 111"}
,"comitia112" : {n:"コミティア 112"}
,"comitia113" : {n:"コミティア 113"}
,"comitia114" : {n:"コミティア 114"}
,"comitia115" : {n:"コミティア 115"}
,"comitia116" : {n:"コミティア 116"}
,"comitia117" : {n:"コミティア 117"}
,"comitia118" : {n:"コミティア 118"}
,"comitia119" : {n:"コミティア 119"}
,"comitia120" : {n:"コミティア 120"}
,"comitia121" : {n:"コミティア 121"}
,"comitia122" : {n:"コミティア 122"}
,"comitia123" : {n:"コミティア 123"}
,"comitia124" : {n:"コミティア 124"}
,"comitia125" : {n:"コミティア 125"}
,"comitia126" : {n:"コミティア 126"}
,"comitia127" : {n:"コミティア 127"}
,"comitia128" : {n:"コミティア 128"}
,"comitia129" : {n:"コミティア 129"}
,"comitia130" : {n:"コミティア 130"}
,"comitia131" : {n:"コミティア 131"}
,"comitia133" : {n:"コミティア 133"}
,"comitia134" : {n:"コミティア 134"}
,"comitia135" : {n:"コミティア 135"}
,"comitia136" : {n:"コミティア 136"}
,"comitia137" : {n:"コミティア 137"}
,"comitia138" : {n:"コミティア 138"}
,"comitia139" : {n:"コミティア 139"}
,"comitia140" : {n:"コミティア 140"}
,"comitia141" : {n:"コミティア 141"}
,"comitia142" : {n:"コミティア 142"}
,"comitia143" : {n:"コミティア 143"}
,"comitia144" : {n:"コミティア 144"}
,"comitia145" : {n:"コミティア 145"}
,"comitia146" : {n:"コミティア 146"}
,"comitia147" : {n:"コミティア 147"}
,"comitia148" : {n:"コミティア 148"}
,"comitia149" : {n:"コミティア 149"}
,"comitia150" : {n:"コミティア 150"}
,"comitia151" : {n:"コミティア 151"}
,"comitia152" : {n:"コミティア 152"}
,"comitia153" : {n:"コミティア 153"}
,"comitia27" : {n:"コミティア 27"}
,"comitia29" : {n:"コミティア 29"}
,"comitia33" : {n:"コミティア 33"}
,"comitia37" : {n:"コミティア 37"}
,"comitia46" : {n:"コミティア 46"}
,"comitia51" : {n:"コミティア 51"}
,"comitia52" : {n:"コミティア 52"}
,"comitia54" : {n:"コミティア 54"}
,"comitia56" : {n:"コミティア 56"}
,"comitia57" : {n:"コミティア 57"}
,"comitia58" : {n:"コミティア 58"}
,"comitia59" : {n:"コミティア 59"}
,"comitia60" : {n:"コミティア 60"}
,"comitia62" : {n:"コミティア 62"}
,"comitia63" : {n:"コミティア 63"}
,"comitia64" : {n:"コミティア 64"}
,"comitia65" : {n:"コミティア 65"}
,"comitia66" : {n:"コミティア 66"}
,"comitia67" : {n:"コミティア 67"}
,"comitia68" : {n:"コミティア 68"}
,"comitia69" : {n:"コミティア 69"}
,"comitia70" : {n:"コミティア 70"}
,"comitia71" : {n:"コミティア 71"}
,"comitia72" : {n:"コミティア 72"}
,"comitia73" : {n:"コミティア 73"}
,"comitia74" : {n:"コミティア 74"}
,"comitia75" : {n:"コミティア 75"}
,"comitia76" : {n:"コミティア 76"}
,"comitia77" : {n:"コミティア 77"}
,"comitia78" : {n:"コミティア 78"}
,"comitia79" : {n:"コミティア 79"}
,"comitia80" : {n:"コミティア 80"}
,"comitia82" : {n:"コミティア 82"}
,"comitia83" : {n:"コミティア 83"}
,"comitia84" : {n:"コミティア 84"}
,"comitia85" : {n:"コミティア 85"}
,"comitia86" : {n:"コミティア 86"}
,"comitia87" : {n:"コミティア 87"}
,"comitia88" : {n:"コミティア 88"}
,"comitia89" : {n:"コミティア 89"}
,"comitia90" : {n:"コミティア 90"}
,"comitia91" : {n:"コミティア 91"}
,"comitia92" : {n:"コミティア 92"}
,"comitia93" : {n:"コミティア 93"}
,"comitia94" : {n:"コミティア 94"}
,"comitia94 kakudai special" : {n:"コミティア 94 拡大スペシャル"}
,"comitia95" : {n:"コミティア 95"}
,"comitia96" : {n:"コミティア 96"}
,"comitia97" : {n:"コミティア 97"}
,"comitia98" : {n:"コミティア 98"}
,"comitia99" : {n:"コミティア 99"}
,"kansai comitia" : {n:"関西コミティア"}
,"kansai comitia35" : {n:"関西コミティア 35"}
,"kansai comitia38" : {n:"関西コミティア 38"}
,"kansai comitia39" : {n:"関西コミティア 39"}
,"kansai comitia40" : {n:"関西コミティア 40"}
,"kansai comitia42" : {n:"関西コミティア 42"}
,"kansai comitia45" : {n:"関西コミティア 45"}
,"kansai comitia48" : {n:"関西コミティア 48"}
,"kansai comitia56" : {n:"関西コミティア 56"}
,"関西comitia61" : {n:"関西コミティア 61"}
,"kansai comitia62" : {n:"関西コミティア 62"}
,"kansai comitia68" : {n:"関西コミティア 68"}
,"kansai comitia 71" : {n:"関西コミティア 71"}
,"hokkaido comitia10" : {n:"北海道コミティア 10"}
,"hokkaido comitia 6" : {n:"北海道コミティア 6"}
,"hokkaidou comitia 8" : {n:"北海道コミティア 8"}
,"comiclive in nagoya" : {n:"コミックライブ in 名古屋"}
,"hiroshima comiket 229" : {n:"広島コミケ229"}
,"online tora matsuri 2020 summer" : {n:"オンラインとら祭り2020夏"}
,"tora matsuri 2010" : {n:"とら祭り 2010"}
,"toramatsuri 2010" : {n:"とら祭り 2010"}
,"toramatsuri2010" : {n:"とら祭り 2010"}
,"tora matsuri 2015" : {n:"とら祭り 2015"}
,"hataket" : {n:"はたケット"}
,"hataket sp" : {n:"はたケットSP"}
,"comicvket 1" : {n:"ComicVket 1"}
,"3-gatsu no doujinsai 2022" : {n:"3月の同人祭 2022"}
,"circle shop blue festa" : {n:"Circle shop Blue Festa"}
,"christmas festa" : {n:"クリスマスフェスタ"}
,"circle shop rainbow festa" : {n:"サークルショップレインボーフェスタ"}
,"circle halloween festa" : {n:"サークルハロウィンフェスタ"}
,"valentine festa dai 2 kai" : {n:"バレンタインフェスタ第2回"}
,"mega akihabara doujin festival 1" : {n:"メガ秋葉原同人祭 第1回"}
,"mega akihabara doujinsai 1" : {n:"メガ秋葉原同人祭 第1回"}
,"mega akihabara doujinsai 2" : {n:"メガ秋葉原同人祭 第2回"}
,"mega akihabara doujinsai 3" : {n:"メガ秋葉原同人祭 第3回"}
,"mega akihabara doujinsai 4" : {n:"メガ秋葉原同人祭 第4回"}
,"natsu no mega chou doujinsai" : {n:"夏のメガ超同人祭"}
,"natsu no doujinsai 2022" : {n:"夏の同人祭 2022"}
,"2021-03 akihabara chou doujinsai" : {n:"秋葉原超同人祭"}
,"2021-nen 3-gatsu akihabara chou doujin-sai" : {n:"秋葉原超同人祭"}
,"akihabara chou doujinsai" : {n:"秋葉原超同人祭"}
,"akihabara chou doujinsai, utahime teien 22" : {n:"秋葉原超同人祭 歌姫庭園22"}
,"akihabara chou doujinsai plus" : {n:"秋葉原超同人祭＋"}
,"akihabara chou doujinsai+" : {n:"秋葉原超同人祭＋"}
,"akihabaradoujinsai 1" : {n:"秋葉原同人祭 1"}
,"akihabaradoujinsai 2" : {n:"秋葉原同人祭 2"}
,"akihabaradoujinsai 3" : {n:"秋葉原同人祭 3"}
,"akihabaradoujinsai 4" : {n:"秋葉原同人祭 4"}
,"haru no chou doujinsai 2022" : {n:"春の超同人祭 2022"}
,"osaka & nagoya doujinsai" : {n:"大阪&名古屋同人祭"}
,"dai 2-kai halloween festa" : {n:"第2回ハロウィンフェスタ"}
,"dai 2-kai rainbow festa" : {n:"第2回レインボーフェスタ"}
,"dai 2-kai akihabara \"chou\" doujinsai+" : {n:"第2回秋葉原「超」同人祭＋"}
,"christmas festa 3" : {n:"第3回クリスマスフェスタ"}
,"dai 3-kai christmas festa" : {n:"第3回クリスマスフェスタ"}
,"dai 3-kai spring festa" : {n:"第3回スプリングフェスタ"}
,"dai 3-kai akihabara \"chou\" doujinsai+" : {n:"第3回秋葉原「超」同人祭＋"}
,"dai 4-kai akihabara \"chou\" doujinsai+" : {n:"第4回秋葉原「超」同人祭＋"}
,"dai 4-kai akihabara \"chou\" doujin-sai+" : {n:"第4回秋葉原「超」同人祭＋"}
,"fuyu no doujinsai 2022" : {n:"冬の同人祭 2022"}
,"seoul comicw" : {n:"SEOUL COMIC WORLD"}
,"seoul comicw112" : {n:"SEOUL COMIC WORLD112"}
,"comic network 25" : {n:"COMIC NETWORK 25"}
,"daikyusyu touhousai 1" : {n:"大九州合同祭1"}
,"daikyuushuu goudousai 12" : {n:"大九州合同祭12"}
,"daikyuushuu goudousai 14" : {n:"大九州合同祭14"}
,"daikyuushuu goudousai 17" : {n:"大九州合同祭17"}
,"daikyuushuu goudousai 23" : {n:"大九州合同祭23"}
,"daikyuushuu goudousai 27" : {n:"大九州合同祭27"}
,"daikyuushuu goudousai 9" : {n:"大九州合同祭9"}
,"pf11" : {n:"Petit Fancy 11"}
,"pf14" : {n:"Petit Fancy 14"}
,"pf15" : {n:"Petit Fancy 15"}
,"pf16" : {n:"Petit Fancy 16"}
,"pf17" : {n:"Petit Fancy 17"}
,"pf19" : {n:"Petit Fancy 19"}
,"pf21" : {n:"Petit Fancy 21"}
,"pf22" : {n:"Petit Fancy 22"}
,"pf25" : {n:"Petit Fancy 25"}
,"pf27" : {n:"Petit Fancy 27"}
,"pf28" : {n:"Petit Fancy 28"}
,"pf29" : {n:"Petit Fancy 29"}
,"pf30" : {n:"Petit Fancy 30"}
,"pf40" : {n:"Petit Fancy 40"}
,"comic horizon 16" : {n:"Comic Horizon 16"}
,"comic horizon 16いつか一緒に輝いて－百合向only" : {n:"Comic Horizon 16"}
,"comic horizon 18 いつか一緒に輝いて－百合向only" : {n:"Comic Horizon 18"}
,"comic horizon 3いつか一緒に輝いて－百合向only" : {n:"Comic Horizon 3"}
,"comic horizon 4" : {n:"Comic Horizon 4"}
,"comic horizon 5いつか一緒に輝いて－百合向only" : {n:"Comic Horizon 5"}
,"ff11" : {n:"Fancy Frontier 11"}
,"ff12" : {n:"Fancy Frontier 12"}
,"ff14" : {n:"Fancy Frontier 14"}
,"ff15" : {n:"Fancy Frontier 15"}
,"ff16" : {n:"Fancy Frontier 16"}
,"ff17" : {n:"Fancy Frontier 17"}
,"ff18" : {n:"Fancy Frontier 18"}
,"fancy frontier 19" : {n:"Fancy Frontier 19"}
,"ff19" : {n:"Fancy Frontier 19"}
,"ff20" : {n:"Fancy Frontier 20"}
,"ff21" : {n:"Fancy Frontier 21"}
,"ff22" : {n:"Fancy Frontier 22"}
,"fancy frontier 23" : {n:"Fancy Frontier 23"}
,"ff23" : {n:"Fancy Frontier 23"}
,"ff24" : {n:"Fancy Frontier 24"}
,"ff25" : {n:"Fancy Frontier 25"}
,"fancy frontier 26" : {n:"Fancy Frontier 26"}
,"ff26" : {n:"Fancy Frontier 26"}
,"ff27" : {n:"Fancy Frontier 27"}
,"ff28" : {n:"Fancy Frontier 28"}
,"ff29" : {n:"Fancy Frontier 29"}
,"ff30" : {n:"Fancy Frontier 30"}
,"ff31" : {n:"Fancy Frontier 31"}
,"ff32" : {n:"Fancy Frontier 32"}
,"ff33" : {n:"Fancy Frontier 33"}
,"ff34" : {n:"Fancy Frontier 34"}
,"ff35" : {n:"Fancy Frontier 35"}
,"ff36" : {n:"Fancy Frontier 36"}
,"ff37" : {n:"Fancy Frontier 37"}
,"ff38" : {n:"Fancy Frontier 38"}
,"ff39" : {n:"Fancy Frontier 39"}
,"ff40" : {n:"Fancy Frontier 40"}
,"ff41" : {n:"Fancy Frontier 41"}
,"ff41 / c102" : {n:"Fancy Frontier 41／C102"}
,"ff42" : {n:"Fancy Frontier 42"}
,"ff43" : {n:"Fancy Frontier 43"}
,"ff44" : {n:"Fancy Frontier 44"}
,"ff45" : {n:"Fancy Frontier 45"}
,"ff6" : {n:"Fancy Frontier 6"}
,"ff9" : {n:"Fancy Frontier 9"}
,"comic stream 1" : {n:"Comic Stream 1"}
,"comic stream#2" : {n:"Comic Stream 2"}
,"comic stream 3" : {n:"Comic Stream 3"}
,"comic stream#03" : {n:"Comic Stream 3"}
,"comic stream#3" : {n:"Comic Stream 3"}
,"comicup 2021sp" : {n:"COMICUP 2021SP"}
,"comic fortune 6" : {n:"Comic Fortune 6"}
,"comic memories 2" : {n:"Comic Memories 2"}
,"comic memories 03" : {n:"Comic Memories 3"}
,"comic generation" : {n:"Comic★Generation"}
,"gw chou doujinsai" : {n:"GW超同人祭"}
,"jb2024" : {n:"JB2024"}
,"tokyo fes aug.2023" : {n:"TOKYO FES Aug. 2023"}
,"tokyo fes feb.2018" : {n:"TOKYO FES Feb. 2018"}
,"tokyo fes feb 2020" : {n:"TOKYO FES Feb. 2020"}
,"tokyo fes feb.2020" : {n:"TOKYO FES Feb. 2020"}
,"tokyo fes feb.2023" : {n:"TOKYO FES Feb. 2023"}
,"tokyo fes feb 2024" : {n:"TOKYO FES Feb. 2024"}
,"tokyo fes feb.2024" : {n:"TOKYO FES Feb. 2024"}
,"tokyo fes jan.2019" : {n:"TOKYO FES Jan. 2019"}
,"tokyo fes jan.2025" : {n:"TOKYO FES Jan. 2025"}
,"tokyo fes jul.2019" : {n:"TOKYO FES Jul. 2019"}
,"tokyo fes jul.2021" : {n:"TOKYO FES Jul. 2021"}
,"tokyo fes jul.2024" : {n:"TOKYO FES Jul. 2024"}
,"tokyo fes nov.2020" : {n:"TOKYO FES Nov. 2020"}
,"tokyo fes oct.2022" : {n:"TOKYO FES Oct. 2022"}
,"tokyo fes oct.2023" : {n:"TOKYO FES Oct. 2023"}
,"tokyo fes sep.2022" : {n:"TOKYO FES Sep. 2022"}
,"tokyo fes sep.2024" : {n:"TOKYO FES Sep. 2024"}
,"zenkoku3" : {n:"zenkoku 3"}
,"zenkoku4" : {n:"zenkoku 4"}
,"zenkoku5" : {n:"zenkoku 5"}
,"zenkoku r" : {n:"zenkoku r"}
,"zenkoku r1" : {n:"zenkoku r1"}
,"zenkoku r11" : {n:"zenkoku r11"}
,"zenkoku r3" : {n:"zenkoku r3"}
,"zenkoku r4" : {n:"zenkoku r4"}
,"zenkoku r5" : {n:"zenkoku r5"}
,"comic oukoku 10" : {n:"こみっく王国10"}
,"comic oukoku 8" : {n:"こみっく王国8"}
,"hoshi ni negai o 2" : {n:"星願 2"}
,"hoshi ni nagai o. 2022" : {n:"星願 2022"}
,"hoshi ni negai o 2025" : {n:"星願 2025"}
,"area 27 soudatsu sensen" : {n:"エリア27争奪戦線"}
};
var chars_ejdic = {
 "teitoku" : {v:"提督"}
,"gudao" : {v:"ぐだ男"}
,"sensei" : {v:"先生"}
,"producer" : {v:"プロデューサー"}
,"reimu hakurei" : {v:"博麗靈夢"}
,"asuka langley soryu" : {v:"惣流・アスカ・ラングレー"}
,"gran" : {v:"グラン"}
,"shielder" : {v:"シールダー", m:{"fate grand order" : "マシュ・キリエライト(シールダー)"}}
,"nami" : {v:"ナミ"}
,"shikikan" : {v:"指揮官"}
,"shinji ikari" : {v:"碇シンジ"}
,"sakuya izayoi" : {v:"十六夜咲夜"}
,"patchouli knowledge" : {v:"パチュリー・ノーレッジ"}
,"rei ayanami" : {v:"綾波レイ"}
,"naruto uzumaki" : {v:"うずまきナルト"}
,"sanae kochiya" : {v:"東風谷早苗"}
,"flandre scarlet" : {v:"フランドール・スカーレット"}
,"tifa lockhart" : {v:"ティファ・ロックハート"}
,"asuna yuuki" : {v:"結城明日奈"}
,"rito yuuki" : {v:"結城梨斗"}
,"remilia scarlet" : {v:"レミリア・スカーレット"}
,"marisa kirisame" : {v:"霧雨魔理沙"}
,"fate testarossa" : {v:"フェイト・テスタロッサ"}
,"chun-li" : {v:"春麗"}
,"kazuto kirigaya" : {v:"桐ヶ谷和人"}
,"shirou emiya" : {v:"衛宮士郎"}
,"atago" : {v:"愛宕", m:{"azur lane" : "愛宕(IJN Atago)"}}
,"mai shiranui" : {v:"不知火舞"}
,"sailor mercury" : {v:"水野亜美(セーラーマーキュリー)"}
,"illyasviel von einzbern" : {v:"イリヤスフィール・フォン・アインツベルン"}
,"shimakaze" : {v:"島風", m:{"azur lane" : "島風(IJN Shimakaze)"}}
,"sakura haruno" : {v:"春野サクラ"}
,"jeanne alter" : {v:"ジャンヌ［オルタ］"}
,"sakura kinomoto" : {v:"木之本桜"}
,"gudako" : {v:"ぐだ子"}
,"alice margatroid" : {v:"アリス・マーガトロイド"}
,"yukari yakumo" : {v:"八雲紫"}
,"sailor moon" : {v:"月野うさぎ(セーラームーン)"}
,"hinata hyuga" : {v:"日向ヒナタ"}
,"nanoha takamachi" : {v:"高町なのは"}
,"minamoto no raikou" : {v:"源頼光"}
,"rin tosaka" : {v:"遠坂凛"}
,"aya shameimaru" : {v:"射命丸文"}
,"satori komeiji" : {v:"古明地さとり"}
,"ganyu" : {v:"甘雨"}
,"asuna ichinose" : {v:"一之瀬アスナ"}
,"reisen udongein inaba" : {v:"鈴仙・優曇華院・イナバ"}
,"sailor jupiter" : {v:"木野まこと(セーラージュピター)"}
,"kaga" : {v:"加賀", m:{"azur lane" : "加賀(IJN Kaga)"}}
,"saber" : {v:"セイバー"}
,"tsunade" : {v:"綱手"}
,"nico robin" : {v:"ニコ・ロビン"}
,"kasumi" : {v:"カスミ", m:{"kantai collection" : "霞", "blue archive" : "鬼怒川カスミ", "azur lane" : "霞(IJN Kasumi)", "dead or alive" : "霞"}}
,"yuuka hayase" : {v:"早瀬ユウカ"}
,"kashima" : {v:"鹿島"}
,"youmu konpaku" : {v:"魂魄妖夢"}
,"mikoto misaka" : {v:"御坂美琴"}
,"takao" : {v:"高雄", m:{"azur lane" : "高雄(IJN Takao)"}}
,"artoria pendragon" : {v:"アルトリア・ペンドラゴン"}
,"miku hatsune" : {v:"初音ミク"}
,"jeanne darc" : {v:"ジャンヌ・ダルク", m:{"azur lane" : "ジャンヌ・ダルク(FFNF Jeanne D'Arc)", "granblue fantasy" : "ジャンヌダルク"}}
,"sailor mars" : {v:"火野レイ(セーラーマーズ)"}
,"aether" : {v:"空"}
,"izuku midoriya" : {v:"緑谷出久"}
,"sailor venus" : {v:"愛野美奈子(セーラービーナス)"}
,"raiden shogun" : {v:"雷電将軍"}
,"kyousuke kousaka" : {v:"高坂京介"}
,"scathach" : {v:"スカサハ"}
,"astolfo" : {v:"アストルフォ"}
,"mikan yuuki" : {v:"結城美柑"}
,"android 18" : {v:"18号"}
,"megumin" : {v:"めぐみん"}
,"bulma briefs" : {v:"ブルマ・ブリーフ"}
,"mio akiyama" : {v:"秋山澪"}
,"koishi komeiji" : {v:"古明地こいし"}
,"maki nishikino" : {v:"西木野真姫"}
,"eli ayase" : {v:"絢瀬絵里"}
,"homura akemi" : {v:"暁美ほむら"}
,"momiji inubashiri" : {v:"犬走椛"}
,"rin shibuya" : {v:"渋谷凛"}
,"haruhi suzumiya" : {v:"涼宮ハルヒ"}
,"kazuma satou" : {v:"佐藤和真"}
,"arisu tachibana" : {v:"橘ありす"}
,"golden darkness" : {v:"金色の闇"}
,"lumine" : {v:"蛍"}
,"touma kamijou" : {v:"上条当麻"}
,"aqua" : {v:"アクア"}
,"madoka kaname" : {v:"鹿目まどか"}
,"bb" : {v:"BB"}
,"koyomi araragi" : {v:"阿良々木暦"}
,"katsuki bakugou" : {v:"爆豪勝己"}
,"kirino kousaka" : {v:"高坂桐乃"}
,"suguha kirigaya" : {v:"桐ヶ谷直葉"}
,"belldandy" : {v:"ベルダンディー"}
,"kallen stadtfeld" : {v:"紅月カレン"}
,"sena kashiwazaki" : {v:"柏崎星奈"}
,"azusa nakano" : {v:"中野梓"}
,"chino kafuu" : {v:"香風智乃"}
,"hong meiling" : {v:"紅美鈴"}
,"mami tomoe" : {v:"巴マミ"}
,"lelouch vi britannia" : {v:"ルルーシュ・ランペルージ"}
,"nico yazawa" : {v:"矢澤にこ"}
,"ran yakumo" : {v:"八雲藍"}
,"djeeta" : {v:"ジータ"}
,"chloe von einzbern" : {v:"クロエ・フォン・アインツベルン"}
,"rider" : {v:"ライダー"}
,"eren jaeger" : {v:"エレン・イェーガー"}
,"toki asuma" : {v:"飛鳥馬トキ"}
,"nozomi tojo" : {v:"東條希"}
,"ayane" : {v:"綾音", m:{"nagasarete airantou" : "あやね"}}
,"nightingale" : {v:"ナイチンゲール"}
,"koakuma" : {v:"小悪魔"}
,"houshou marine" : {v:"宝鐘マリン"}
,"c.c." : {v:"C.C."}
,"hamakaze" : {v:"浜風", m:{"azur lane" : "浜風(IJN Hamakaze)"}}
,"ruri gokou" : {v:"五更瑠璃"}
,"maya" : {v:"マヤ", m:{"kantai collection" : "摩耶", "azur lane" : "摩耶(IJN Maya)", "dragon quest iv" : "マーニャ", "dragon quest" : "マーニャ"}}
,"levi ackerman" : {v:"レヴィ・アッカーマン"}
,"suzuya" : {v:"鈴谷", m:{"azur lane" : "鈴谷(IJN Suzuya)"}}
,"yuuka kazami" : {v:"風見幽香"}
,"mika jougasaki" : {v:"城ヶ崎美嘉"}
,"fern" : {v:"フェルン", m:{"pokemon" : "コージ"}}
,"suwako moriya" : {v:"洩矢諏訪子"}
,"yae miko" : {v:"八重神子"}
,"yuyuko saigyouji" : {v:"西行寺幽々子"}
,"taihou" : {v:"大鳳", m:{"azur lane" : "大鳳(IJN Taihō)"}}
,"kotori minami" : {v:"南ことり"}
,"mika misono" : {v:"聖園ミカ"}
,"kodaka hasegawa" : {v:"羽瀬川小鷹"}
,"yui kotegawa" : {v:"小手川唯"}
,"kongou" : {v:"金剛", m:{"azur lane" : "金剛(IJN Kongō)", "arpeggio of blue steel" : "コンゴウ"}}
,"tomoyo daidouji" : {v:"大道寺知世"}
,"warrior" : {v:"戦士"}
,"nagato" : {v:"長門", m:{"azur lane" : "長門(IJN Nagato)"}}
,"haruka nanase" : {v:"七瀬遙"}
,"sakura matou" : {v:"間桐桜"}
,"haruna" : {v:"榛名", m:{"azur lane" : "榛名(IJN Haruna)", "arpeggio of blue steel" : "ハルナ", "kore wa zombie desu ka" : "ハルナ"}}
,"rika jougasaki" : {v:"城ヶ崎莉嘉"}
,"hu tao" : {v:"胡桃"}
,"morrigan aensland" : {v:"モリガン・アーンスランド"}
,"orihime inoue" : {v:"井上織姫"}
,"boa hancock" : {v:"ボア・ハンコック"}
,"shuten douji" : {v:"酒吞童子"}
,"marin kitagawa" : {v:"喜多川海夢"}
,"hina sorasaki" : {v:"空崎ヒナ"}
,"bianca whitaker" : {v:"ビアンカ"}
,"mona megistus" : {v:"モナ"}
,"karin kakudate" : {v:"角楯カリン"}
,"umi sonoda" : {v:"園田海未"}
,"kisaki ryuuge" : {v:"竜華キサキ"}
,"minami nitta" : {v:"新田美波"}
,"makoto tachibana" : {v:"橘真琴"}
,"miyu edelfelt" : {v:"美遊・エーデルフェルト"}
,"ranma saotome" : {v:"早乙女らんま"}
,"ako amau" : {v:"天雨アコ"}
,"yamato" : {v:"大和", m:{"one piece" : "ヤマト", "naruto" : "ヤマト", "arpeggio of blue steel" : "ヤマト"}}
,"fumika sagisawa" : {v:"鷺沢文香"}
,"rangiku matsumoto" : {v:"松本乱菊"}
,"yor forger" : {v:"ヨル・フォージャー"}
,"miki hoshii" : {v:"星井美希"}
,"ichika orimura" : {v:"織斑一夏"}
,"prinz eugen" : {v:"プリンツ・オイゲン", m:{"kantai collection" : "Prinz Eugen(プリンツ・オイゲン)", "azur lane" : "プリンツ・オイゲン(KMS Prinz Eugen)"}}
,"yuki nagato" : {v:"長門有希"}
,"pyra" : {v:"ホムラ"}
,"byakuren hijiri" : {v:"聖白蓮"}
,"kokkoro" : {v:"コッコロ"}
,"rio tsukatsuki" : {v:"調月リオ"}
,"rosa" : {v:"ローザ", m:{"pokemon" : "メイ", "arknights" : "ロサ", "king of fighters" : "エル・ローザ", "dragon quest iv" : "ロザリー"}}
,"shigure" : {v:"時雨", m:{"azur lane" : "時雨(IJN Shigure)", "hataage kemono michi" : "シグレ"}}
,"uzuki shimamura" : {v:"島村卯月"}
,"rem" : {v:"レム"}
,"darkness" : {v:"ダクネス"}
,"cirno" : {v:"チルノ"}
,"musashi miyamoto" : {v:"宮本武蔵"}
,"hoshino takanashi" : {v:"小鳥遊ホシノ"}
,"keqing" : {v:"刻晴"}
,"link" : {v:"リンク"}
,"takane shijou" : {v:"四条貴音"}
,"charlotte dunois" : {v:"シャルロット・デュノア"}
,"kyouko sakura" : {v:"佐倉杏子"}
,"pecorine" : {v:"ぺコリーヌ"}
,"abigail williams" : {v:"アビゲイル・ウィリアムズ"}
,"tenshi hinanai" : {v:"比那名居天子"}
,"mari iochi" : {v:"伊落マリー"}
,"tamaki kousaka" : {v:"向坂環"}
,"noa ushio" : {v:"生塩ノア"}
,"misato katsuragi" : {v:"葛城ミサト"}
,"hibiki" : {v:"響", m:{"azur lane" : "響(IJN Hibiki)", "gundam build fighters try" : "ヒビキ"}}
,"kyon" : {v:"キョン"}
,"nitori kawashiro" : {v:"河城にとり"}
,"frieren" : {v:"フリーレン"}
,"may" : {v:"メイ", m:{"pokemon" : "ハルカ"}}
,"hero" : {v:"ヒーロー(HMS Hero)", m:{"dragon quest iii" : "勇者", "dragon quest" : "勇者", "etrian odyssey" : "ヒーロー", "goblin slayer" : "ゴブリンスレイヤー", "omori" : "ヒロ"}}
,"tamamo no mae" : {v:"玉藻の前"}
,"yoruichi shihoin" : {v:"四楓院夜一"}
,"cammy white" : {v:"キャミィ・ホワイト"}
,"tenryuu" : {v:"天龍"}
,"sailor chibi moon" : {v:"ちびうさ(セーラーちびムーン)"}
,"hoshimachi suisei" : {v:"星街すいせい"}
,"sakura kasugano" : {v:"春日野さくら"}
,"nakoruru" : {v:"ナコルル"}
,"rin kaenbyou" : {v:"火焔猫燐"}
,"iori minase" : {v:"水瀬伊織"}
,"belfast" : {v:"ベルファスト", m:{"azur lane" : "ベルファスト(HMS Belfast)"}}
,"eula lawrence" : {v:"エウルア・ローレンス"}
,"ruri hoshino" : {v:"ホシノ・ルリ"}
,"sailor saturn" : {v:"土萠ほたる(セーラーサターン)"}
,"doctor" : {v:"ドクター"}
,"honoka kosaka" : {v:"高坂穂乃果"}
,"cleric" : {v:"僧侶"}
,"utsuho reiuji" : {v:"霊烏路空"}
,"nekomata okayu" : {v:"猫又おかゆ"}
,"eirin yagokoro" : {v:"八意永琳"}
,"lillie" : {v:"リーリエ"}
,"momoka sakurai" : {v:"櫻井桃華"}
,"shenhe" : {v:"申鶴"}
,"momo velia deviluke" : {v:"モモ・ベリア・デビルーク"}
,"yui hirasawa" : {v:"平沢唯"}
,"2b" : {v:"2B"}
,"cynthia" : {v:"シンシア", m:{"pokemon" : "シロナ"}}
,"hestia" : {v:"ヘスティア"}
,"miho nishizumi" : {v:"西住みほ"}
,"sage" : {v:"賢者", m:{"ragnarok online" : "セージ", "sonic the hedgehog" : "セージ"}}
,"hachiman hikigaya" : {v:"比企谷八幡"}
,"ayaka kamisato" : {v:"神里綾華"}
,"subaru natsuki" : {v:"ナツキ・スバル"}
,"mari illustrious makinami" : {v:"真希波・マリ・イラストリアス"}
,"rin matsuoka" : {v:"松岡凛"}
,"narmaya" : {v:"ナルメア"}
,"nino nakano" : {v:"中野二乃"}
,"lala satalin deviluke" : {v:"ララ・サタリン・デビルーク"}
,"akagi" : {v:"赤城", m:{"azur lane" : "赤城(IJN Akagi)"}}
,"sailor uranus" : {v:"天王はるか(セーラーウラヌス)"}
,"hasumi hanekawa" : {v:"羽川ハスミ"}
,"nahida" : {v:"ナヒーダ"}
,"kuroko shirai" : {v:"白井黒子"}
,"rumia" : {v:"ルーミア"}
,"firefly" : {v:"ホタル"}
,"mythra" : {v:"ミスラ", m:{"xenoblade chronicles 2" : "ヒカリ", "xenoblade" : "ヒカリ", "xenoblade chronicles 3" : "ヒカリ"}}
,"hitori gotou" : {v:"後藤ひとり"}
,"madoka higuchi" : {v:"樋口円香"}
,"mikasa ackerman" : {v:"ミカサ・アッカーマン"}
,"haruna sairenji" : {v:"西連寺春奈"}
,"tsumugi kotobuki" : {v:"琴吹紬"}
,"dark magician girl" : {v:"ダークマジシャンガール"}
,"sasuke uchiha" : {v:"うちはサスケ"}
,"shiho nishizumi" : {v:"西住しほ"}
,"sayaka miki" : {v:"美樹さやか"}
,"kasen ibara" : {v:"茨木華扇"}
,"shirakami fubuki" : {v:"白上フブキ"}
,"makima" : {v:"マキマ"}
,"mikuru asahina" : {v:"朝比奈ミクル"}
,"alice tendou" : {v:"天童アリス"}
,"tewi inaba" : {v:"因幡てゐ"}
,"ritsu tainaka" : {v:"田井中律"}
,"souji okita" : {v:"沖田総司", m:{"sengoku collection" : "白蓮・沖田総司"}}
,"archer" : {v:"アーチャー", m:{"pokemon" : "アポロ", "dragons crown" : "エルフ"}}
,"chie sasaki" : {v:"佐々木千枝"}
,"chisato nishikigi" : {v:"錦木千束"}
,"senritsu no tatsumaki" : {v:"戦慄のタツマキ"}
,"miku nakano" : {v:"中野美玖"}
,"lana" : {v:"ラナ", m:{"pokemon" : "スイレン", "mega man star force" : "ラーナ", "fire emblem genealogy of the holy war" : "ラーナ"}}
,"princess zelda" : {v:"ゼルダ王女"}
,"yoko ritona" : {v:"ヨーコ・リットナー"}
,"red saber" : {v:"赤セイバー"}
,"shiroko sunaookami" : {v:"砂狼シロコ"}
,"koharu shimoe" : {v:"下江コハル"}
,"videl" : {v:"ビーデル"}
,"athena asamiya" : {v:"麻宮アテナ"}
,"kafka" : {v:"カフカ"}
,"kazusa kyouyama" : {v:"杏山カズサ"}
,"serena" : {v:"セレナ"}
,"hayate yagami" : {v:"八神はやて"}
,"ash ketchum" : {v:"サトシ"}
,"ochako uraraka" : {v:"麗日お茶子"}
,"hatate himekaidou" : {v:"姫海棠はたて"}
,"nilou" : {v:"ニィロウ"}
,"barbara pegg" : {v:"バーバラ"}
,"fujiwara no mokou" : {v:"藤原妹紅"}
,"louise francoise le blanc de la valliere" : {v:"ルイズ・フランソワーズ・ル・ブラン・ド・ラ・ヴァリエール"}
,"keine kamishirasawa" : {v:"上白沢慧音"}
,"focalors" : {v:"フォカロルス"}
,"misty" : {v:"ミスティ", m:{"pokemon" : "カスミ"}}
,"lum" : {v:"ラム"}
,"inazuma" : {v:"電", m:{"azur lane" : "電(IJN Inazuma)"}}
,"kama" : {v:"カーマ"}
,"lunamaria hawke" : {v:"ルナマリア・ホーク"}
,"chen" : {v:"橙(ちぇん)"}
,"ahri" : {v:"アーリ"}
,"son goku" : {v:"孫悟空"}
,"hanako urawa" : {v:"浦和ハナコ"}
,"gilgamesh" : {v:"ギルガメッシュ", m:{"tower of druaga" : "ギルガメス"}}
,"son gohan" : {v:"孫悟飯"}
,"shinobu kochou" : {v:"胡蝶しのぶ"}
,"miria akagi" : {v:"赤城みりあ"}
,"kaede takagaki" : {v:"高垣楓"}
,"maho nishizumi" : {v:"西住まほ"}
,"chi chi" : {v:"チチ"}
,"kokoa hoto" : {v:"保登心愛"}
,"you watanabe" : {v:"渡辺曜"}
,"riko sakurauchi" : {v:"桜内梨子"}
,"onpu segawa" : {v:"瀬川おんぷ"}
,"shoukaku" : {v:"翔鶴", m:{"azur lane" : "翔鶴(IJN Shōkaku)"}}
,"hilichurl" : {v:"ヒルチャール"}
,"kyaru" : {v:"キャル"}
,"yuuki" : {v:"ユウキ"}
,"formidable" : {v:"フォーミダブル", m:{"azur lane" : "フォーミダブル(HMS Formidable)"}}
,"nue houjuu" : {v:"封獣ぬえ"}
,"bremerton" : {v:"ブレマートン", m:{"azur lane" : "ブレマートン(USS Bremerton)"}}
,"lacus clyne" : {v:"ラクス・クライン"}
,"cure black" : {v:"美墨なぎさ(キュアブラック)"}
,"kagami hiiragi" : {v:"柊かがみ"}
,"oozora subaru" : {v:"大空スバル"}
,"cattleya" : {v:"カトレア"}
,"zuikaku" : {v:"瑞鶴", m:{"azur lane" : "瑞鶴(IJN Zuikaku)"}}
,"isuzu sento" : {v:"千斗いすず"}
,"hilda" : {v:"ヒルダ", m:{"pokemon" : "トウコ"}}
,"misaki shokuhou" : {v:"食蜂操祈"}
,"cecilia alcott" : {v:"セシリア・オルコット"}
,"morgan le fay" : {v:"ルガン・ル・フェ"}
,"kagerou imaizumi" : {v:"今泉影狼"}
,"gardevoir" : {v:"サーナイト"}
,"yukari yuzuki" : {v:"結月ゆかり"}
,"samus aran" : {v:"サムス・アラン"}
,"akatsuki" : {v:"暁", m:{"azur lane" : "暁(IJN Akatsuki)", "log horizon" : "アカツキ"}}
,"shino asada" : {v:"朝田詩乃"}
,"master roshi" : {v:"亀仙人"}
,"amatsukaze" : {v:"天津風"}
,"azusa miura" : {v:"三浦あずさ"}
,"cure white" : {v:"雪城ほのか(キュアホワイト)"}
,"monkey d. luffy" : {v:"モンキー・D・ルフィ"}
,"rinko iori" : {v:"イオリ・リン子"}
,"shirogane noel" : {v:"白銀ノエル"}
,"len kagamine" : {v:"鏡音レン"}
,"ikazuchi" : {v:"雷", m:{"azur lane" : "雷(IJN Ikazuchi)"}}
,"fuyuko mayuzumi" : {v:"黛冬優子"}
,"riesz" : {v:"リーズ"}
,"bismarck" : {v:"ビスマルク", m:{"kantai collection" : "Bismarck(ビスマルク)", "azur lane" : "ビスマルク(KMS Bismarck)"}}
,"mutsuki asagi" : {v:"浅黄ムツキ"}
,"nene anegasaki" : {v:"姉ヶ崎寧々"}
,"akiko minase" : {v:"水瀬秋子"}
,"ritsuko akagi" : {v:"赤城リツコ"}
,"minato aqua" : {v:"湊あくあ"}
,"saito hiraga" : {v:"平賀才人"}
,"darjeeling" : {v:"ダージリン"}
,"cagliostro" : {v:"カリオストロ"}
,"cloud strife" : {v:"クラウド・ストライフ"}
,"konata izumi" : {v:"泉こなた"}
,"shinobu oshino" : {v:"忍野忍"}
,"doremi harukaze" : {v:"春風どれみ"}
,"mallow" : {v:"マロウ", m:{"pokemon" : "マオ", "super mario brothers" : "マロ"}}
,"jean gunnhildr" : {v:"ジン・グンヒルド"}
,"jessica albert" : {v:"ゼシカ・アルバート"}
,"kanna ogata" : {v:"尾刃カンナ"}
,"sailor neptune" : {v:"海王みちる(セーラーネプチューン)"}
,"nonomi izayoi" : {v:"十六夜ノノミ"}
,"akira kurusu" : {v:"来栖暁"}
,"ro-500" : {v:"呂500"}
,"chiyuki kuwayama" : {v:"桑山千雪"}
,"dawn" : {v:"ドーン", m:{"pokemon" : "ヒカリ"}}
,"bridget" : {v:"ブリジット"}
,"tsubasa hanekawa" : {v:"羽川翼"}
,"saren sasaki" : {v:"佐々木咲恋(サレン)"}
,"unicorn" : {v:"ユニコーン", m:{"azur lane" : "ユニコーン(HMS Unicorn)"}}
,"karamatsu matsuno" : {v:"松野カラ松"}
,"sakamata chloe" : {v:"沙花叉クロヱ"}
,"artoria pendragon alter" : {v:"アルトリア・ペンドラゴン［オルタ］"}
,"mutsu" : {v:"陸奥", m:{"azur lane" : "陸奥(IJN Mutsu)"}}
,"chihaya kisaragi" : {v:"如月千早"}
,"cure beauty" : {v:"青木れいか(キュアビューティ)"}
,"aru rikuhachima" : {v:"陸八幡アル"}
,"rin hoshizora" : {v:"星空凛"}
,"ishtar" : {v:"イシュタル"}
,"kayoko onikata" : {v:"鬼方カヨコ"}
,"meer campbell" : {v:"ミーア・キャンベル"}
,"aerith gainsborough" : {v:"エアリス・ゲインズブール"}
,"kiyohime" : {v:"清姫"}
,"yuu narukami" : {v:"鳴上悠"}
,"ichigo kurosaki" : {v:"黒崎一護"}
,"saori joumae" : {v:"錠前サオリ"}
,"ritsuko akizuki" : {v:"秋月律子"}
,"mordred pendragon" : {v:"モードレッド・ペンドラゴン"}
,"hitagi senjougahara" : {v:"戦場ヶ原ひたぎ"}
,"marnie" : {v:"マリィ", m:{"omoide no marnie" : "マーニー"}}
,"boudica" : {v:"ブーディカ"}
,"jigoku no fubuki" : {v:"地獄のフブキ"}
,"nazrin" : {v:"ナズーリン"}
,"yoshiko tsushima" : {v:"津島善子"}
,"cure march" : {v:"緑川なお(キュアマーチ)"}
,"yelan" : {v:"夜蘭"}
,"ayase aragaki" : {v:"新垣あやせ"}
,"yui kusano" : {v:"草野優衣(ユイ)"}
,"komachi onozuka" : {v:"小野塚小町"}
,"makoto kikuchi" : {v:"菊地真"}
,"ranko kanzaki" : {v:"神崎蘭子"}
,"musashi" : {v:"武蔵", m:{"azur lane" : "武蔵(IJN Musashi)", "ganbare goemon" : "ムサシ"}}
,"alena" : {v:"アリーナ"}
,"shinobu maehara" : {v:"前原しのぶ"}
,"takaaki kouno" : {v:"河野貴明"}
,"tokoyami towa" : {v:"常闇トワ"}
,"cure peace" : {v:"黄瀬やよい(キュアピース)"}
,"emilia" : {v:"エミリア", m:{"houkago saikoro club" : "エミーリア"}}
,"saber alter" : {v:"セイバー［オルタ］"}
,"kanako yasaka" : {v:"八坂神奈子"}
,"ookami mio" : {v:"大神ミオ"}
,"shouko komi" : {v:"古見硝子"}
,"ellen joe" : {v:"エレン・ジョー"}
,"momo yaoyorozu" : {v:"八百万百"}
,"mysterious heroine x" : {v:"謎のヒロインX"}
,"yuffie kisaragi" : {v:"ユフィ・キサラギ"}
,"iku nagae" : {v:"永江衣玖"}
,"suika ibuki" : {v:"伊吹萃香"}
,"index librorum prohibitorum" : {v:"インデックス"}
,"lyfa" : {v:"リーファ"}
,"yukihana lamy" : {v:"雪花ラミィ"}
,"kokomi sangonomiya" : {v:"珊瑚宮心海"}
,"naru narusegawa" : {v:"成瀬川なる"}
,"koume shirasaka" : {v:"白坂小梅"}
,"kobato hasegawa" : {v:"羽瀬川小鳩"}
,"meena" : {v:"ミネア", m:{"brave story" : "ミーナ"}}
,"rukia kuchiki" : {v:"朽木ルキア"}
,"yuuichi aizawa" : {v:"相沢祐一"}
,"ruiko saten" : {v:"佐天涙子"}
,"gawr gura" : {v:"がうる・ぐら"}
,"lei fang" : {v:"レイファン"}
,"lucy heartfilia" : {v:"ルーシィ・ハートフィリア"}
,"rex" : {v:"レックス", m:{"animal crossing" : "サンデー"}}
,"sparkle" : {v:"花火"}
,"ino yamanaka" : {v:"山中いの"}
,"chris yukine" : {v:"雪音クリス"}
,"haruka amami" : {v:"天海春香"}
,"eiki shiki" : {v:"四季映姫"}
,"murasaki shion" : {v:"紫シオン"}
,"itsuki nakano" : {v:"中野五月"}
,"ushiwakamaru" : {v:"牛若丸"}
,"yukiho hagiwara" : {v:"萩原雪歩"}
,"wriggle nightbug" : {v:"リグル・ナイトバグ"}
,"ichika nakano" : {v:"中野一花"}
,"leonardo da vinci" : {v:"レオナルド・ダ・ヴィンチ"}
,"rikka takanashi" : {v:"小鳥遊六花"}
,"seia yurizono" : {v:"百合園セイア"}
,"kogasa tatara" : {v:"多々良小傘"}
,"nobara kugisaki" : {v:"釘崎野薔薇"}
,"rumi usagiyama" : {v:"兎山ルミ"}
,"junichi tachibana" : {v:"橘純一"}
,"murakumo" : {v:"叢雲", m:{"senran kagura" : "叢"}}
,"hanayo koizumi" : {v:"小泉花陽"}
,"hinagiku katsura" : {v:"桂ヒナギク"}
,"aiko senoo" : {v:"妹尾あいこ"}
,"ereshkigal" : {v:"エレシュキガル"}
,"anira" : {v:"アニラ"}
,"kaguya houraisan" : {v:"蓬莱山輝夜"}
,"sachiko koshimizu" : {v:"輿水幸子"}
,"wise" : {v:"ワイズ", m:{"zenless zone zero" : "アキラ"}}
,"bell cranel" : {v:"ベル・クラネル"}
,"fumina hoshino" : {v:"ホシノ・フミナ"}
,"robin" : {v:"ロビン", m:{"animal crossing" : "パーチク"}}
,"ichimatsu matsuno" : {v:"松野一松"}
,"skuld" : {v:"スクルド"}
,"yotsuba nakano" : {v:"中野四葉"}
,"yuri sakazaki" : {v:"ユリ・サカザキ"}
,"takagi" : {v:"高木"}
,"yu takasaki" : {v:"高咲侑"}
,"osakabehime" : {v:"刑部姫"}
,"shizuku oikawa" : {v:"及川雫"}
,"setsuna yuki" : {v:"優木せつ菜"}
,"takina inoue" : {v:"井ノ上たきな"}
,"yuri" : {v:"ユリ", m:{"yu-gi-oh arc-v" : "ユーリ", "harvest moon" : "ユーリ"}}
,"illustrious" : {v:"イラストリアス", m:{"azur lane" : "イラストリアス(HMS Illustrious)"}}
,"kaworu nagisa" : {v:"渚カヲル"}
,"roronoa zoro" : {v:"ロロノア・ゾロ"}
,"usada pekora" : {v:"兎田ぺこら"}
,"erina nakiri" : {v:"薙切えりな"}
,"anzu futaba" : {v:"双葉杏"}
,"gloria" : {v:"グロリア", m:{"pokemon" : "ユウリ", "animal crossing" : "スワンソン"}}
,"hoshikawa sara" : {v:"星川サラ"}
,"lilith aensland" : {v:"リリス・アーンスランド"}
,"asashio" : {v:"朝潮", m:{"azur lane" : "朝潮(IJN Asashio)"}}
,"tomoe gozen" : {v:"巴御前"}
,"satoru gojo" : {v:"五条悟"}
,"st. louis" : {v:"セントルイス(USS St.Louis)"}
,"neko musume" : {v:"ねこ娘"}
,"sister claire" : {v:"シスター・クレア"}
,"yozora mikazuki" : {v:"三日月夜空"}
,"mayu sakuma" : {v:"佐久間まゆ"}
,"hata no kokoro" : {v:"秦こころ"}
,"miku maekawa" : {v:"前川みく"}
,"tuxedo mask" : {v:"地場衛(タキシード仮面)"}
,"yuudachi" : {v:"夕立", m:{"azur lane" : "夕立(IJN Yūdachi)"}}
,"hazuki fujiwara" : {v:"藤原はづき"}
,"tsuki uzaki" : {v:"宇崎月"}
,"tsuyu asui" : {v:"蛙吹梅雨"}
,"hana uzaki" : {v:"宇崎花"}
,"caelus" : {v:"穹"}
,"reisalin stout" : {v:"ライザ(ライザリン・シュタウト)"}
,"nodoka haramura" : {v:"原村和"}
,"holo" : {v:"ホロ"}
,"iono" : {v:"ナンジャモ"}
,"mizuho kazami" : {v:"風見みずほ"}
,"yui yuigahama" : {v:"由比ヶ浜結衣"}
,"yuuta togashi" : {v:"富樫勇太"}
,"asuna kagurazaka" : {v:"神楽坂明日菜"}
,"hotaru shidare" : {v:"枝垂ほたる"}
,"rin kagamine" : {v:"鏡音リン"}
,"hibiki ganaha" : {v:"我那覇響"}
,"lize helesta" : {v:"リゼ・ヘルエスタ"}
,"plana" : {v:"プラナ"}
,"sirius" : {v:"シリウス", m:{"azur lane" : "シリアス(HMS Sirius)"}}
,"chika takami" : {v:"高海千歌"}
,"sagiri izumi" : {v:"和泉紗霧"}
,"shizuku osaka" : {v:"桜坂しずく"}
,"dia kurosawa" : {v:"黒澤ダイヤ"}
,"hayate ayasaki" : {v:"綾崎ハヤテ"}
,"ichiro ogami" : {v:"大神一郎"}
,"lucario" : {v:"ルカリオ"}
,"lanas mom" : {v:"スイレンママ"}
,"murrue ramius" : {v:"マリュー・ラミアス"}
,"suzaku kururugi" : {v:"枢木スザク"}
,"tatsuta" : {v:"龍田"}
,"midori saiba" : {v:"才羽ミドリ"}
,"renko usami" : {v:"宇佐見蓮子"}
,"laura bodewig" : {v:"ラウラ・ボーデヴィッヒ"}
,"shouto todoroki" : {v:"轟焦凍"}
,"anastasia" : {v:"アナスタシア"}
,"arona" : {v:"アロナ"}
,"murasaki shikibu" : {v:"紫式部"}
,"ushio" : {v:"潮"}
,"kanan matsuura" : {v:"松浦果南"}
,"lusamine" : {v:"ルザミーネ"}
,"nera briscoletti" : {v:"フローラ"}
,"vita" : {v:"ヴィータ", m:{"honkai gakuen" : "ヴィタ"}}
,"hitomi" : {v:"ヒトミ"}
,"akane tendo" : {v:"天道あかね"}
,"byleth eisner" : {v:"ベレス=アイスナー"}
,"neru mikamo" : {v:"美甘ネル"}
,"shun sunohara" : {v:"春原シュン"}
,"juri han" : {v:"ハン・ジュリ"}
,"martina" : {v:"マルティナ"}
,"sharo kirima" : {v:"桐間紗路"}
,"amane kanata" : {v:"天音かなた"}
,"ayumu uehara" : {v:"上原歩夢"}
,"meguru hachimiya" : {v:"八宮めぐる"}
,"mitsuri kanroji" : {v:"甘露寺蜜璃"}
,"super sonico" : {v:"すーぱーそに子"}
,"baobhan sith" : {v:"バーヴァン・シー"}
,"edward elric" : {v:"エドワード・エルリック"}
,"cure twinkle" : {v:"天ノ川きらら(キュアトゥインクル)"}
,"hex maniac" : {v:"オカルトマニア"}
,"jack the ripper" : {v:"ジャック・ザ・リッパー"}
,"tanjirou kamado" : {v:"竈門炭治郎"}
,"urd" : {v:"ウルド"}
,"yuuji itadori" : {v:"虎杖悠仁"}
,"chie satonaka" : {v:"里中千枝"}
,"sanji vinsmoke" : {v:"ヴィンスモーク・サンジ"}
,"anne takamaki" : {v:"高巻杏"}
,"gintoki sakata" : {v:"坂田銀時"}
,"shizune" : {v:"シズネ"}
,"tearju lunatique" : {v:"ティアーユ・ルナティーク"}
,"signum" : {v:"シグナム"}
,"syaoran li" : {v:"李小狼"}
,"yukikaze mizuki" : {v:"水城ゆきかぜ"}
,"yunyun" : {v:"ゆんゆん"}
,"fuutarou uesugi" : {v:"上杉風太郎"}
,"ran mouri" : {v:"毛利蘭"}
,"arisu shimada" : {v:"島田愛里寿"}
,"hanamaru kunikida" : {v:"国木田花丸"}
,"rei furuya" : {v:"降谷零(安室透)"}
,"keiko ayano" : {v:"綾野珪子"}
,"mahiro oyama" : {v:"緒山まひろ"}
,"momoi saiba" : {v:"才羽モモイ"}
,"naruko anjou" : {v:"安城鳴子"}
,"princess peach" : {v:"ピーチ姫"}
,"ruby kurosawa" : {v:"黒澤ルビィ"}
,"xuanzang" : {v:"玄奘三蔵"}
,"hikari tachibana" : {v:"橘ヒカリ"}
,"melusine" : {v:"メリュジーヌ"}
,"saniwa" : {v:"審神者"}
,"yamashiro" : {v:"山城", m:{"azur lane" : "山城(IJN Yamashiro)"}}
,"jill valentine" : {v:"ジル・バレンタイン"}
,"shigure ui" : {v:"しぐれうい"}
,"cure melody" : {v:"北条響(キュアメロディ)"}
,"risa matoba" : {v:"的場梨沙"}
,"yayoi takatsuki" : {v:"高槻やよい"}
,"kokona sunohara" : {v:"春原ココナ"}
,"mystia lorelei" : {v:"ミスティア・ローレライ"}
,"i-19" : {v:"伊19", m:{"azur lane" : "伊19(IJN I19)"}}
,"kei" : {v:"ケイ"}
,"naoto shirogane" : {v:"白鐘直斗"}
,"quetzalcoatl" : {v:"ケツァルコアトル"}
,"ryuuko matoi" : {v:"纏流子"}
,"tomoko kuroki" : {v:"黒木智子"}
,"renamon" : {v:"レナモン"}
,"mio honda" : {v:"本田未央"}
,"rikka takarada" : {v:"宝多六花"}
,"yukino yukinoshita" : {v:"雪ノ下雪乃"}
,"ilulu" : {v:"イルル"}
,"protagonist" : {v:"主人公"}
,"rinnosuke morichika" : {v:"森近霖之助"}
,"yoimiya naganohara" : {v:"長野原宵宮"}
,"taiga aisaka" : {v:"逢坂大河"}
,"yuna" : {v:"ユウナ", m:{"sword art online" : "ユナ", "mega man legends" : "ユーナ", "tales of" : "ユナ・アゼッタ", "onidere" : "鈴音由那", "kuma kuma kuma bear" : "ユナ"}}
,"kurisu makise" : {v:"牧瀬紅莉栖"}
,"amber" : {v:"アンバー"}
,"kanna kamui" : {v:"カンナカムイ"}
,"masamune izumi" : {v:"和泉正宗"}
,"yuma tsukumo" : {v:"九十九遊馬"}
,"tina armstrong" : {v:"ティナ・アームストロング"}
,"yuugi hoshiguma" : {v:"星熊勇儀"}
,"zeta" : {v:"ゼタ", m:{"kage no jitsuryokusha ni naritakute" : "ゼータ"}}
,"felicia" : {v:"フェリシア"}
,"kanu unchou" : {v:"関羽雲長", m:{"koihime musou" : "愛紗(関羽 雲長)"}}
,"katsushika hokusai" : {v:"葛飾北斎"}
,"poison" : {v:"ポイズン"}
,"rias gremory" : {v:"リアス・グレモリー"}
,"saitama" : {v:"サイタマ"}
,"silver wolf" : {v:"銀狼", m:{"langrisser" : "シルバーウルフ"}}
,"chika fujiwara" : {v:"藤原千花"}
,"nozomi tachibana" : {v:"橘ノゾミ"}
,"kamui" : {v:"カムイ", m:{"gintama" : "神威", "tokyo afterschool summoners" : "ホロケウカムイ"}}
,"ui kozeki" : {v:"古関ウイ"}
,"nakiri ayame" : {v:"百鬼あやめ"}
,"bea" : {v:"ビー", m:{"pokemon" : "サイトウ", "animal crossing" : "ベーグル"}}
,"miyu kasumizawa" : {v:"霞沢ミユ"}
,"saeko busujima" : {v:"毒島冴子"}
,"cure diamond" : {v:"菱川六花(キュアダイヤモンド)"}
,"kanako mimura" : {v:"三村かな子"}
,"mami futami" : {v:"双海真美"}
,"taiga kagami" : {v:"火神大我"}
,"helena douglas" : {v:"エレナ・ダグラス"}
,"haru yuuki" : {v:"結城晴"}
,"karen araragi" : {v:"阿良々木火憐"}
,"manaka komaki" : {v:"小牧愛佳"}
,"z1" : {v:"Z1", m:{"kantai collection" : "Z1(レーベレヒト・マース)", "azur lane" : "Z1(KMS Leberecht Maass)"}}
,"ikuyo kita" : {v:"喜多郁代"}
,"suigintou" : {v:"水銀灯"}
,"airi totoki" : {v:"十時愛梨"}
,"cagalli yula athha" : {v:"カガリ・ユラ・アスハ"}
,"scathach skadi" : {v:"スカサハ=スカディ"}
,"daiyousei" : {v:"大妖精"}
,"erika itsumi" : {v:"逸見エリカ"}
,"krillin" : {v:"クリリン"}
,"nana asta deviluke" : {v:"ナナ・アスタ・デビルーク"}
,"riamu yumemi" : {v:"夢見りあむ"}
,"ai haibara" : {v:"灰原哀"}
,"cure heart" : {v:"相田マナ(キュアハート)"}
,"king" : {v:"キング"}
,"seiga kaku" : {v:"霍青娥"}
,"siesta" : {v:"シエスタ"}
,"fischl" : {v:"フィッシュル"}
,"meltryllis" : {v:"メルトリリス"}
,"miyu mifune" : {v:"三船美優"}
,"barghest" : {v:"バーゲスト(妖精騎士ガウェイン)", m:{"tokyo afterschool summoners" : "バーゲスト"}}
,"maam" : {v:"マァム"}
,"sakuya shirase" : {v:"白瀬咲耶"}
,"trunks briefs" : {v:"トランクス・ブリーフ"}
,"elio" : {v:"エリオ", m:{"pokemon" : "ヨウ"}}
,"satoko houjou" : {v:"北条沙都子"}
,"cure sunny" : {v:"日野あかね(キュアサニー)"}
,"iowa" : {v:"Iowa(アイオワ)"}
,"suletta mercury" : {v:"スレッタ・マーキュリー"}
,"yukiko amagi" : {v:"天城雪子"}
,"graf zeppelin" : {v:"Graf Zeppelin(グラーフ・ツェッペリン)", m:{"azur lane" : "グラーフ・ツェッペリン(KMS Graf Zeppelin)"}}
,"iroha isshiki" : {v:"一色いろは"}
,"kaguya shinomiya" : {v:"四宮かぐや"}
,"maribel han" : {v:"マエリベリー・ハーン"}
,"miyako tsukiyuki" : {v:"月雪ミヤコ"}
,"saratoga" : {v:"サラトガ", m:{"kantai collection" : "Saratoga(サラトガ)", "azur lane" : "サラトガ(USS Saratoga)"}}
,"daiki aomine" : {v:"青峰大輝"}
,"kira yamato" : {v:"キラ・ヤマト"}
,"rise kujikawa" : {v:"久慈川りせ"}
,"lancer" : {v:"ランサー", m:{"goblin slayer" : "槍使い"}}
,"multi" : {v:"マルチ(HMX-12)"}
,"ibuki tanga" : {v:"丹花イブキ"}
,"nicole demara" : {v:"ニコ・デマラ"}
,"poplar taneshima" : {v:"種島ぽぷら"}
,"evelyn chevalier" : {v:"イヴリン・シェヴァリエ"}
,"negi springfield" : {v:"ネギ・スプリングフィールド"}
,"sakura miko" : {v:"さくらみこ"}
,"mina ashido" : {v:"芦戸三奈"}
,"ouro kronii" : {v:"オーロ・クロニー"}
,"skyla" : {v:"フウロ"}
,"sora" : {v:"ソラ", m:{"genshin impact" : "空", "no game no life" : "空"}}
,"hypno" : {v:"ヒプノ", m:{"pokemon" : "スリーパー"}}
,"nitocris" : {v:"ニトクリス"}
,"rintarou okabe" : {v:"岡部倫太郎"}
,"rize tedeza" : {v:"天々座理世"}
,"sousuke yamazaki" : {v:"山崎宗介"}
,"tetsuya kuroko" : {v:"黒子テツヤ"}
,"satsuki kitaoji" : {v:"北大路さつき"}
,"sheryl nome" : {v:"シェリル・ノーム"}
,"vegeta" : {v:"ベジータ"}
,"zuihou" : {v:"瑞鳳", m:{"azur lane" : "瑞鳳(IJN Zuihou)"}}
,"cure happy" : {v:"星空みゆき(キュアハッピー)"}
,"fuuka ayase" : {v:"綾瀬風香"}
,"alexis rhodes" : {v:"天上院明日香"}
,"eru chitanda" : {v:"千反田える"}
,"kari kamiya" : {v:"八神ヒカリ"}
,"kotori otonashi" : {v:"音無小鳥"}
,"anis" : {v:"アニス"}
,"rindou mikoto" : {v:"竜胆尊"}
,"ryu" : {v:"リュウ"}
,"tanya von degurechaff" : {v:"ターニャ・デグレチャフ"}
,"temari" : {v:"テマリ"}
,"kyouko kirigiri" : {v:"霧切響子"}
,"galko" : {v:"ギャル子"}
,"sakura shinguji" : {v:"真宮寺さくら"}
,"yuuri katsuki" : {v:"勝生勇利"}
,"mori calliope" : {v:"森カリオペ"}
,"sailor pluto" : {v:"冥王せつな(セーラープルート)"}
,"venti" : {v:"ウェンティ"}
,"hina kagiyama" : {v:"鍵山雛"}
,"nadeko sengoku" : {v:"千石撫子"}
,"ryuujou" : {v:"龍驤", m:{"azur lane" : "龍驤(IJN Ryūjō)"}}
,"shishiro botan" : {v:"獅白ぼたん"}
,"ami futami" : {v:"双海亜美"}
,"arlecchino" : {v:"アルレッキーノ"}
,"rika furude" : {v:"古手梨花"}
,"hibiki tachibana" : {v:"立花響"}
,"kanade hayami" : {v:"速水奏"}
,"kensou sie" : {v:"椎拳崇"}
,"motoko aoyama" : {v:"青山元子"}
,"beatrix" : {v:"ベアトリクス"}
,"fubuki" : {v:"吹雪", m:{"azur lane" : "吹雪(IJN Fubuki)", "one punch man" : "地獄のフブキ", "senran kagura" : "雪不帰", "kamen no maid guy" : "フブキ"}}
,"kokonotsu shikada" : {v:"鹿田ココノツ"}
,"nadia la arwall" : {v:"ナディア・ラ・アルウォール"}
,"sasara kusugawa" : {v:"久寿川ささら"}
,"haruka morishima" : {v:"森島はるか"}
,"himiko toga" : {v:"トガヒミコ"}
,"kagura" : {v:"神楽", m:{"senran kagura" : "カグラ", "the onechanbara" : "カグラ"}}
,"shizuka minamoto" : {v:"源静香"}
,"keiichi morisato" : {v:"森里螢一"}
,"makoto niijima" : {v:"新島真"}
,"shiki ichinose" : {v:"一ノ瀬志希"}
,"shiranui flare" : {v:"不知火フレア"}
,"yui ohtsuki" : {v:"大槻唯"}
,"albedo" : {v:"アルベド"}
,"sei iori" : {v:"イオリ・セイ"}
,"hk416" : {v:"HK416"}
,"lisa minci" : {v:"リサ・ミンツ"}
,"cure rhythm" : {v:"南野奏(キュアリズム)"}
,"shampoo" : {v:"シャンプー"}
,"yukari akiyama" : {v:"秋山優花里"}
,"dizzy" : {v:"ディズィー", m:{"animal crossing" : "ヒュージ"}}
,"simon" : {v:"シモン", m:{"animal crossing" : "エテキチ"}}
,"yu mei-ren" : {v:"虞美人"}
,"sophitia alexandra" : {v:"ソフィーティア・アレクサンドル"}
,"iroha" : {v:"いろは", m:{"blue archive" : "棗イロハ", "beatmania" : "彩葉"}}
,"izuna kuda" : {v:"久田イズナ"}
,"parsee mizuhashi" : {v:"水橋パルスィ"}
,"saki sorai" : {v:"空井サキ"}
,"urakaze" : {v:"浦風", m:{"azur lane" : "浦風(IJN Urakaze)"}}
,"wo-class" : {v:"ヲ級"}
,"kazari uiharu" : {v:"初春飾利"}
,"ooi" : {v:"大井"}
,"utaha kasumigaoka" : {v:"霞ヶ丘詩羽"}
,"kyouka hikawa" : {v:"氷川鏡華(キョウカ)"}
,"cure marine" : {v:"来海えりか(キュアマリン)"}
,"aya toujou" : {v:"東城綾"}
,"kraft lawrence" : {v:"クラフト・ロレンス"}
,"mitsuru kirijo" : {v:"桐条美鶴"}
,"houki shinonono" : {v:"篠ノ之箒"}
,"leina vance" : {v:"レイナ・ヴァンス"}
,"revy" : {v:"レヴィ"}
,"roy mustang" : {v:"ロイ・マスタング"}
,"sarada uchiha" : {v:"うちはサラダ"}
,"victor nikiforov" : {v:"ビクター・ニキフォロフ"}
,"karen hojo" : {v:"北条加蓮"}
,"kasumi nakasu" : {v:"中須かすみ"}
,"osomatsu matsuno" : {v:"松野おそ松"}
,"texas" : {v:"テキサス"}
,"zhongli" : {v:"鍾離"}
,"gendo ikari" : {v:"碇ゲンドウ"}
,"iori shiromi" : {v:"銀鏡イオリ"}
,"march 7th" : {v:"三月なのか"}
,"purple heart" : {v:"パープルハート(ネプテューヌ)"}
,"sasami masaki jurai" : {v:"柾木砂沙美樹雷"}
,"sara kujou" : {v:"九条裟羅"}
,"kagome higurashi" : {v:"日暮かごめ"}
,"kaoru ryuzaki" : {v:"龍崎薫"}
,"manaka takane" : {v:"高嶺愛花"}
,"milly ashford" : {v:"ミレイ・アッシュフォード"}
,"neptune" : {v:"ネプテューヌ(パープルハート)"}
,"shinka nibutani" : {v:"丹生谷森夏"}
,"henrietta de tristain" : {v:"アンリエッタ・ド・トリステイン"}
,"honolulu" : {v:"Honolulu(ホノルル)", m:{"azur lane" : "ホノルル(USS Honolulu)"}}
,"maria" : {v:"マリア", m:{"seven mortal sins" : "十束真莉亜"}}
,"karin asaka" : {v:"朝香果林"}
,"ram" : {v:"ラム"}
,"rebecca" : {v:"レベッカ"}
,"souma yukihira" : {v:"幸平創真"}
,"ai amatsu" : {v:"天津亜衣"}
,"akari" : {v:"アカリ", m:{"pokemon" : "ショウ"}}
,"alice liddell" : {v:"アリス・リデル"}
,"makoto naegi" : {v:"苗木誠"}
,"mononobe no futo" : {v:"物部布都"}
,"stark" : {v:"シュタルク"}
,"villetta nu" : {v:"ヴィレッタ・ヌゥ"}
,"yuusaku fujiki" : {v:"藤木遊作"}
,"9s" : {v:"ヨルハ九号S型"}
,"koyanskaya" : {v:"コヤンスカヤ"}
,"raku ichijou" : {v:"一条楽"}
,"vivio takamachi" : {v:"高町ヴィヴィオ"}
,"yurika misumaru" : {v:"ミスマル・ユリカ"}
,"nessa" : {v:"ネッサ", m:{"pokemon" : "ルリナ"}}
,"wizard" : {v:"魔法使い"}
,"yuzu hanaoka" : {v:"花岡ユズ"}
,"hakui koyori" : {v:"博衣こより"}
,"kyoko otonashi" : {v:"音無響子"}
,"little red riding hood" : {v:"赤ずきん"}
,"shana" : {v:"シャナ"}
,"yorumi rena" : {v:"夜見れな"}
,"kitakami" : {v:"北上"}
,"saori takebe" : {v:"武部沙織"}
,"ivy valentine" : {v:"イザベラ・バレンタイン(アイヴィー)"}
,"pekoras mother" : {v:"ぺこらママ"}
,"ai miyashita" : {v:"宮下愛"}
,"amana osaki" : {v:"大崎甘奈"}
,"ichika nakamasa" : {v:"仲正イチカ"}
,"momoko asuka" : {v:"飛鳥ももこ"}
,"tenchi masaki" : {v:"柾木天地"}
,"kiara sessyoin" : {v:"殺生院キアラ"}
,"oolong" : {v:"ウーロン"}
,"shinji matou" : {v:"間桐慎二"}
,"iroha natsume" : {v:"棗イロハ"}
,"kirika akatsuki" : {v:"暁切歌"}
,"priestess" : {v:"プリースティス", m:{"ragnarok online" : "プリースト", "goblin slayer" : "女神官"}}
,"saint martha" : {v:"聖女マルタ"}
,"sonia" : {v:"ソニア", m:{"berserk" : "ソーニャ"}}
,"sylveon" : {v:"ニンフィア"}
,"conan edogawa" : {v:"江戸川コナン"}
,"umi ryuuzaki" : {v:"龍咲海"}
,"cure sword" : {v:"剣崎真琴(キュアソード)"}
,"erza scarlet" : {v:"エルザ・スカーレット"}
,"glaceon" : {v:"グレイシア"}
,"hiroyuki fujita" : {v:"藤田浩之"}
,"lina inverse" : {v:"リナ・インバース"}
,"nao kamiya" : {v:"神谷奈緒"}
,"anko mitarashi" : {v:"みたらしアンコ"}
,"keitaro urashima" : {v:"浦島景太郎"}
,"martial artist" : {v:"武闘家"}
,"meyrin hawke" : {v:"メイリン・ホーク"}
,"mitsuha miyamizu" : {v:"宮水三葉"}
,"belle" : {v:"リン", m:{"beauty and the beast" : "ベル"}}
,"clownpiece" : {v:"クラウンピース"}
,"ryo akizuki" : {v:"秋月涼"}
,"yoshika miyafuji" : {v:"宮藤芳佳"}
,"yuuya sakaki" : {v:"榊遊矢"}
,"athrun zala" : {v:"アスラン・ザラ"}
,"hakase fuyuki" : {v:"葉加瀬冬雪"}
,"hifumi ajitani" : {v:"阿慈谷ヒフミ"}
,"rika shinozaki" : {v:"篠崎里香(リズ)"}
,"shou toramaru" : {v:"寅丸星"}
,"tsukasa hiiragi" : {v:"柊つかさ"}
,"azki" : {v:"AZKi"}
,"lynette bishop" : {v:"リネット・ビショップ"}
,"ooyodo" : {v:"大淀"}
,"takumi mukai" : {v:"向井拓海"}
,"eris boreas greyrat" : {v:"エリス・ボレアス・グレイラット"}
,"nagisa kirifuji" : {v:"桐藤ナギサ"}
,"ranka lee" : {v:"ランカ・リー"}
,"ryouta kise" : {v:"黄瀬涼太"}
,"tea gardner" : {v:"真崎杏子"}
,"aoi inuyama" : {v:"犬山あおい"}
,"kanata konoe" : {v:"近江彼方"}
,"kikyou kiryuu" : {v:"桐生キキョウ"}
,"megumi kato" : {v:"加藤恵"}
,"nijika ijichi" : {v:"伊地知虹夏"}
,"rinko akiyama" : {v:"秋山凜子"}
,"shirabe tsukuyomi" : {v:"月読調"}
,"souryuu" : {v:"蒼龍", m:{"azur lane" : "蒼龍(IJN Sōryū)"}}
,"hikaru shidou" : {v:"獅堂光"}
,"nagi sanzenin" : {v:"三千院ナギ"}
,"tooru oikawa" : {v:"及川徹"}
,"ai nanasaki" : {v:"七咲逢"}
,"helena blavatsky" : {v:"エレナ・ブラヴァツキー"}
,"hitoha marui" : {v:"丸井ひとは"}
,"rimuru tempest" : {v:"リムル=テンペスト"}
,"citlali" : {v:"シトラリ"}
,"seija kijin" : {v:"鬼人正邪"}
,"chitoge kirisaki" : {v:"桐崎千棘"}
,"cure aqua" : {v:"水無月かれん(キュアアクア)"}
,"natarle badgiruel" : {v:"ナタル・バジルール"}
,"ryuuji takasu" : {v:"高須竜児"}
,"rimururu" : {v:"リムルル"}
,"roxy migurdia" : {v:"ロキシー・ミグルディア"}
,"akito tenkawa" : {v:"アキト・テンカワ"}
,"alisa ilinichina amiella" : {v:"アリサ・イリーニチナ・アミエーラ"}
,"hinata wakaba" : {v:"若葉ヒナタ"}
,"kazama iroha" : {v:"風真いろは"}
,"maya ibuki" : {v:"伊吹マヤ"}
,"princess of moonbrook" : {v:"ムーンブルクの王女"}
,"sofia" : {v:"ソフィア", m:{"dragon quest iv" : "勇者ソフィア", "dragon quest" : "勇者ソフィア", "punishing gray raven" : "ソフィア・銀牙"}}
,"dehya" : {v:"ディシア"}
,"eevee" : {v:"イーブイ"}
,"klee" : {v:"クレー"}
,"kotetsu t. kaburagi" : {v:"鏑木・T・虎徹"}
,"noelle" : {v:"ノエル", m:{"deltarune" : "Noelle"}}
,"wakana gojou" : {v:"五条新菜"}
,"kisaragi" : {v:"如月", m:{"azur lane" : "如月(IJN Kisaragi)"}}
,"mari ohara" : {v:"小原鞠莉"}
,"nemesis" : {v:"ネメシス"}
,"satsuki kiryuuin" : {v:"鬼龍院皐月"}
,"serval" : {v:"サーバル"}
,"soi fon" : {v:"砕蜂"}
,"toshiro hijikata" : {v:"土方敏郎"}
,"kyouko kasodani" : {v:"幽谷響子"}
,"asagi igawa" : {v:"井河アサギ"}
,"erio mondial" : {v:"エリオ・モンディアル"}
,"mitsuba marui" : {v:"丸井みつば"}
,"rin kokonoe" : {v:"九重りん"}
,"sayo hikawa" : {v:"氷川紗夜"}
,"shirley fenette" : {v:"シャーリー・フェネット"}
,"tobio kageyama" : {v:"影山飛雄"}
,"mano sakuragi" : {v:"櫻木真乃"}
,"rainbow mika" : {v:"レインボー・ミカ"}
,"shiori fujisaki" : {v:"藤崎詩織"}
,"tomoko hoshina" : {v:"保科智子"}
,"vira" : {v:"ヴィーラ", m:{"punishing gray raven" : "ヴィラ"}}
,"akeno himejima" : {v:"姫島朱乃"}
,"cure blossom" : {v:"花咲つぼみ(キュアブロッサム)"}
,"houshou" : {v:"鳳翔", m:{"azur lane" : "鳳翔(IJN Hōshō)"}}
,"kosuzu motoori" : {v:"本居小鈴"}
,"mikazuki munechika" : {v:"三日月宗近"}
,"toyosatomimi no miko" : {v:"豊聡耳神子"}
,"zero two" : {v:"ゼロツー"}
,"blue mary" : {v:"ブルー・マリー"}
,"florian" : {v:"フローリアン", m:{"pokemon" : "ハルト"}}
,"paimon" : {v:"パイモン"}
,"shigeo kageyama" : {v:"影山茂夫"}
,"shiki tohno" : {v:"遠野志貴"}
,"shiranui mizuki" : {v:"水城不知火"}
,"w" : {v:"W"}
,"eila ilmatar juutilainen" : {v:"エイラ・イルマタル・ユーティライネン"}
,"euryale" : {v:"エウリュアレ", m:{"granblue fantasy" : "エウリュアレー"}}
,"hideyoshi kinoshita" : {v:"木下秀吉"}
,"mai amatsu" : {v:"天津麻衣"}
,"sanya v. litvyak" : {v:"サーニャ・V・リトヴャク"}
,"tsukihi araragi" : {v:"阿良々木月火"}
,"cure peach" : {v:"桃園ラブ(キュアピーチ)"}
,"tartaglia" : {v:"タルタリヤ"}
,"hajime hinata" : {v:"日向創"}
,"hasshaku-sama" : {v:"八尺様"}
,"killua zoldyck" : {v:"キルア=ゾルディック"}
,"shiina yuika" : {v:"椎名唯華"}
,"tai kamiya" : {v:"八神太一"}
,"akashi" : {v:"明石", m:{"azur lane" : "明石(IJN Akashi)"}}
,"anastasia nikolaevna romanova" : {v:"アナスタシア・ニコラエヴナ・ロマノヴァ"}
,"cure sunshine" : {v:"明堂院いつき(キュアサンシャイン)"}
,"eijirou kirishima" : {v:"切島鋭児郎"}
,"ikaruga" : {v:"斑鳩"}
,"kaori kanzaki" : {v:"神裂火織"}
,"miorine rembran" : {v:"ミオリネ・レンブラン"}
,"motoko kusanagi" : {v:"草薙素子"}
,"natsuha arisugawa" : {v:"有栖川夏葉"}
,"ryouko mikado" : {v:"御門涼子"}
,"seiya kanie" : {v:"可児江西也"}
,"andira" : {v:"アンチラ"}
,"kaoruko sazaki" : {v:"サザキ・カオルコ"}
,"kirin" : {v:"キリン", m:{"hoozuki no reitetsu" : "麒麟"}}
,"nezuko kamado" : {v:"竈門禰豆子"}
,"ryoga hibiki" : {v:"響良牙"}
,"seolla schweizer" : {v:"ゼオラ・シュバイツァー"}
,"shizuo heiwajima" : {v:"平和島静雄"}
,"elizabeth bathory" : {v:"エリザベート・バートリー"}
,"kozue yusa" : {v:"遊佐こずえ"}
,"mitsuki bakugou" : {v:"爆豪光己"}
,"natsumi hinata" : {v:"日向夏美", m:{"sharin no kuni himawari no shoujo" : "日向夏咲"}}
,"tomoya aki" : {v:"安芸倫也"}
,"tsukasa nishino" : {v:"西野つかさ"}
,"yukari takeba" : {v:"岳羽ゆかり"}
,"chiyomi anzai" : {v:"安斎千代美(アンチョビ)"}
,"chris" : {v:"クリス"}
,"clarisse" : {v:"クラリス"}
,"england" : {v:"イングランド"}
,"exusiai" : {v:"エクシア"}
,"nagi" : {v:"那岐", m:{"kannagi" : "ナギ", "fire emblem mystery of the emblem" : "ナギ", "shin megami tensei" : "凪", "persona q" : "ナギ"}}
,"nana abe" : {v:"安部菜々"}
,"sekai kamiki" : {v:"カミキ・セカイ"}
,"arcueid brunestud" : {v:"アルクェイド・ブリュンスタッド"}
,"kakashi hatake" : {v:"はたけカカシ"}
,"laplus darknesss" : {v:"ラプラス・ダークネス"}
,"rikku" : {v:"リュック"}
,"shokudaikiri mitsutada" : {v:"燭台切光忠"}
,"jane doe" : {v:"ジェーン・ドゥ"}
,"kirishima" : {v:"霧島", m:{"azur lane" : "霧島(IJN Kirishima)", "my hero academia" : "切島鋭児郎", "arpeggio of blue steel" : "キリシマ"}}
,"kiritan tohoku" : {v:"東北きりたん"}
,"kogane tsukioka" : {v:"月岡恋鐘"}
,"sakaki" : {v:"榊"}
,"shiho kitazawa" : {v:"北沢志保"}
,"aiko takamori" : {v:"高森藍子"}
,"hikari horaki" : {v:"洞木ヒカリ"}
,"kirara" : {v:"キララ", m:{"blue archive" : "夜桜キララ", "genshin impact" : "綺良々", "inuyasha" : "雲母", "kirara fantasia" : "きらら"}}
,"kuroyukihime" : {v:"黒雪姫(ブラック・ロータス)"}
,"mea kurosaki" : {v:"黒咲芽亜"}
,"sorceress" : {v:"魔女", m:{"dragons crown" : "ソーサレス", "diablo" : "ソーサレス"}}
,"tear grants" : {v:"ティア・グランツ"}
,"touya kinomoto" : {v:"木之本桃矢"}
,"cure magical" : {v:"十六夜リコ(キュアマジカル)"}
,"cure miracle" : {v:"朝日奈みらい(キュアミラクル)"}
,"karin kanzuki" : {v:"神月かりん"}
,"leona heidern" : {v:"レオナ・ハイデルン"}
,"ryoko hakubi" : {v:"魎呼"}
,"iori yoshizuki" : {v:"葦月伊織"}
,"kos-mos" : {v:"KOS-MOS"}
,"shoyo hinata" : {v:"日向翔陽"}
,"tsubaki kasuga" : {v:"春日ツバキ"}
,"ui hirasawa" : {v:"平沢憂"}
,"yamakaze" : {v:"山風", m:{"azur lane" : "山風(IJN Yamakaze)"}}
,"baltimore" : {v:"ボルチモア", m:{"azur lane" : "ボルチモア(USS Baltimore)"}}
,"teana lanster" : {v:"ティアナ・ランスター"}
,"wakamo kosaka" : {v:"狐坂ワカモ"}
,"anna mochizuki" : {v:"望月杏奈"}
,"futaba sakura" : {v:"佐倉双葉"}
,"hieda no akyuu" : {v:"稗田阿求"}
,"kaltsit" : {v:"ケルシー"}
,"katori" : {v:"香取", m:{"phantasy star online 2" : "カトリ"}}
,"luka megurine" : {v:"巡音ルカ"}
,"syuko shiomi" : {v:"塩見周子"}
,"echidna" : {v:"エキドナ", m:{"queens blade" : "歴戦の傭兵エキドナ"}}
,"emma verde" : {v:"エマ・ヴェルデ"}
,"ingrid" : {v:"イングリッド", m:{"resident evil" : "イングリド", "taimanin asagi" : "魔界騎士イングリッド", "sennen sensou aigis" : "魔戦団長イングリッド", "makai kishi ingrid" : "魔界騎士イングリッド", "atelier marie" : "イングリド", "atelier elie" : "イングリド", "atelier lilie" : "イングリド", "nelke to densetsu no renkinjutsushi-tachi" : "イングリド"}}
,"shuuichi akai" : {v:"赤井秀一"}
,"tsukino mito" : {v:"月ノ美兎"}
,"chieri ogata" : {v:"緒方智絵里"}
,"yuel" : {v:"ユエル"}
,"z3" : {v:"Z3(マックス・シュルツ)"}
,"asuka" : {v:"アスカ", m:{"senran kagura" : "飛鳥", "magic knight rayearth" : "阿洲花", "dream c club" : "あすか", "viper ctr" : "あすか"}}
,"ningguang" : {v:"凝光"}
,"tori aoi" : {v:"葵・トーリ"}
,"megumi tokoro" : {v:"所恵美"}
,"taki" : {v:"多喜"}
,"moe kazekura" : {v:"風倉モエ"}
,"reginald kastle" : {v:"神代凌牙"}
,"rinze morino" : {v:"杜野凛世"}
,"stelle" : {v:"星"}
,"akiha tohno" : {v:"遠野秋葉"}
,"ayeka masaki jurai" : {v:"柾木阿重霞樹雷"}
,"chii" : {v:"ちぃ"}
,"d.va" : {v:"D.Va"}
,"elf yamada" : {v:"山田エルフ"}
,"junpei manaka" : {v:"真中淳平"}
,"shioriko mifune" : {v:"三船栞子"}
,"suzuran" : {v:"スズラン", m:{"monster strike" : "鈴蘭"}}
,"yamame kurodani" : {v:"黒谷ヤマメ"}
,"yuki mori" : {v:"森雪"}
,"christie" : {v:"クリスティ"}
,"isokaze" : {v:"磯風", m:{"azur lane" : "磯風(IJN Isokaze)"}}
,"kaori nishino" : {v:"西野かおり"}
,"suiseiseki" : {v:"翠星石"}
,"takamiya rion" : {v:"鷹宮リオン"}
,"tiki" : {v:"ティキ", m:{"fire emblem" : "チキ", "fire emblem awakening" : "チキ", "fire emblem mystery of the emblem" : "チキ", "fire emblem heroes" : "チキ", "pangya" : "ティッキー"}}
,"akane kotonoha" : {v:"琴葉茜"}
,"ataru moroboshi" : {v:"諸星あたる"}
,"kyoka jiro" : {v:"耳郎響香"}
,"ling yin huang" : {v:"凰鈴音"}
,"miles tails prower" : {v:"マイルス“テイルス”パウアー"}
,"sakurako utazumi" : {v:"歌住サクラコ"}
,"yuriko nanao" : {v:"七尾百合子"}
,"luna" : {v:"ルナ", m:{"queens blade" : "月影の踊り手ルナルナ", "yu-gi-oh zexal" : "瑠那", "defense of the ancients" : "Luna"}}
,"ninomae inanis" : {v:"一伊那尓栖"}
,"rinko kobayakawa" : {v:"小早川凛子"}
,"houtarou oreki" : {v:"折木奉太郎"}
,"ika musume" : {v:"イカ娘"}
,"izaya orihara" : {v:"折原臨也"}
,"marie" : {v:"マリー", m:{"pokemon" : "オハギ"}}
,"niyah" : {v:"ニア"}
,"noire" : {v:"ノワール(ブラックハート)", m:{"fire emblem awakening" : "ノワール"}}
,"rokuro okajima" : {v:"岡島緑郎"}
,"ayanami" : {v:"綾波", m:{"azur lane" : "綾波(IJN Ayanami)"}}
,"denji" : {v:"デンジ"}
,"hiei" : {v:"比叡(IJN Hiei)"}
,"i-401" : {v:"伊401"}
,"kumano" : {v:"熊野", m:{"azur lane" : "熊野(IJN Kumano)"}}
,"kyouka tachibana" : {v:"橘京香"}
,"riza hawkeye" : {v:"リザ・ホークアイ"}
,"mayoi hachikuji" : {v:"八九寺真宵"}
,"the herta" : {v:"マダム・ヘルタ"}
,"wu zetian" : {v:"武則天"}
,"anya forger" : {v:"アーニャ・フォージャー"}
,"maria cadenzavna eve" : {v:"マリア・カデンツァヴナ・イヴ"}
,"miyuki shiba" : {v:"司波深雪"}
,"son goten" : {v:"孫悟天"}
,"tokitsukaze" : {v:"時津風"}
,"erica hartmann" : {v:"エーリカ・ハルトマン"}
,"nepgear" : {v:"ネプギア(パープルシスター)"}
,"power" : {v:"パワー"}
,"sendai" : {v:"川内", m:{"azur lane" : "川内(IJN Sendai)"}}
,"tsukasa ayatsuji" : {v:"絢辻詞"}
,"aichi sendou" : {v:"先導アイチ"}
,"clorinde" : {v:"クロリンデ"}
,"flay allster" : {v:"フレイ・アルスター"}
,"kanade tachibana" : {v:"立華かなで"}
,"kaori sakuramori" : {v:"桜守歌織"}
,"kusuha mizuha" : {v:"クスハ・ミズハ"}
,"mudrock" : {v:"Mudrock"}
,"sakuya" : {v:"サクヤ", m:{"touhou project" : "十六夜咲夜", "sister princess" : "咲耶", "puzzle and dragons" : "麒麟の化身・サクヤ", "shining blade" : "サクヤ・マキシマ・エンフィールド", "okami" : "木精サクヤ姫", "rune factory 3" : "さくや"}}
,"sumeragi lee noriega" : {v:"スメラギ・李・ノリエガ"}
,"tiffania westwood" : {v:"ティファニア・ウエストウッド"}
,"inui toko" : {v:"戌亥とこ"}
,"latifa fleuranza" : {v:"ラティファ・フルーランザ"}
,"medaka kurokami" : {v:"黒神めだか"}
,"natsuiro matsuri" : {v:"夏色まつり"}
,"oboro" : {v:"オボロ", m:{"kantai collection" : "朧", "taimanin asagi" : "朧", "basilisk" : "朧"}}
,"selvaria bles" : {v:"セルベリア・ブレス"}
,"wa2000" : {v:"WA2000"}
,"eri sawachika" : {v:"沢近愛理"}
,"higuchi kaede" : {v:"樋口楓"}
,"kazuma ikezawa" : {v:"池沢佳主馬"}
,"lopunny" : {v:"ミミロップ"}
,"luna child" : {v:"ルナチャイルド"}
,"mai fukuyama" : {v:"福山舞"}
,"star sapphire" : {v:"スターサファイア"}
,"stocking anarchy" : {v:"アナーキー・ストッキング"}
,"chiyoko sonoda" : {v:"園田智代子"}
,"jeanne alter lily" : {v:"ジャンヌ・ダルク・オルタ・サンタ・リリィ"}
,"kashino" : {v:"樫野(IJN Kashino)"}
,"laffey" : {v:"ラフィー(USS Laffey)"}
,"rin okumura" : {v:"奥村燐"}
,"ibaraki douji" : {v:"茨木童子"}
,"iris chateaubriand" : {v:"イリス・シャトーブリアン"}
,"kyou fujibayashi" : {v:"藤林杏"}
,"mai" : {v:"マイ", m:{"pokemon" : "ヨネ", "popotan" : "まい"}}
,"naganami" : {v:"長波", m:{"azur lane" : "長波(IJN Naganami)"}}
,"rose" : {v:"ローズ", m:{"king of fighters" : "ローズ・バーンシュタイン", "dragon quest iv" : "ロザリー", "elsword" : "ロゼ", "tiger and bunny" : "ブルーローズ(カリーナ・ライル)", "tales of zestiria" : "ロゼ", "epic seven" : "カーマイン・ローズ", "the legend of dragoon" : "ロゼ"}}
,"tetsurou kuroo" : {v:"黒尾鉄朗"}
,"vivi nefertari" : {v:"ネフェルタリ・ビビ"}
,"yuzuki choco" : {v:"癒月ちょこ"}
,"akari kanzaki" : {v:"神崎あかり"}
,"aliza" : {v:"アリーザ", m:{"ragnarok online" : "エリザ", "undertale" : "アリザ"}}
,"cure dream" : {v:"夢原のぞみ(キュアドリーム)"}
,"gon freecss" : {v:"ゴン=フリークス"}
,"miyuki takara" : {v:"高良みゆき"}
,"nodoka miyazaki" : {v:"宮崎のどか"}
,"vikala" : {v:"ビカラ"}
,"wiz" : {v:"ウィズ"}
,"chiyo shimada" : {v:"島田千代"}
,"kaban" : {v:"かばんちゃん"}
,"miyabi hoshimi" : {v:"星見雅"}
,"moon" : {v:"ミヅキ"}
,"rina tennoji" : {v:"天王寺璃奈"}
,"shinku" : {v:"真紅"}
,"yukimi sajo" : {v:"佐城雪美"}
,"hibiki tsukahara" : {v:"塚原響"}
,"jotaro kujo" : {v:"空条承太郎"}
,"rein" : {v:"レイン"}
,"subaru nakajima" : {v:"スバル・ナカジマ"}
,"uruha rushia" : {v:"潤羽るしあ"}
,"erasa" : {v:"イレーザ"}
,"hakuno kishinami" : {v:"岸波白野"}
,"krista lenz" : {v:"クリスタ・レンズ"}
,"mamizou futatsuiwa" : {v:"二ッ岩マミゾウ"}
,"misaka-imouto" : {v:"御坂妹"}
,"roll" : {v:"ロールちゃん"}
,"sumireko usami" : {v:"宇佐見菫子"}
,"toriel" : {v:"トリエル"}
,"ume hanami" : {v:"花海佑芽"}
,"wang liu mei" : {v:"王留美"}
,"fuu hououji" : {v:"鳳凰寺風"}
,"ikuyo hoshizora" : {v:"星空育代"}
,"kay" : {v:"ケイ"}
,"lulu" : {v:"ルル", m:{"final fantasy" : "ルールー", "final fantasy x" : "ルールー", "final fantasy x-2" : "ルールー", "tenshi no shippo" : "カエルのルル"}}
,"luminary" : {v:"勇者"}
,"nayuki minase" : {v:"水瀬名雪"}
,"rudeus greyrat" : {v:"ルーデウス・グレイラット"}
,"rydia" : {v:"リディア"}
,"shinichi sakurai" : {v:"桜井真一"}
,"wendy marvell" : {v:"ウェンディ・マーベル"}
,"zara" : {v:"Zara(ザラ)", m:{"azur lane" : "ザラ(RN Zara)"}}
,"cure mint" : {v:"秋元こまち(キュアミント)"}
,"giyuu tomioka" : {v:"冨岡義勇"}
,"ruan mei" : {v:"ルアン・メェイ"}
,"sayla mass" : {v:"セイラ・マス"}
,"yixuan" : {v:"儀玄"}
,"akali" : {v:"アカリ	"}
,"chiya ujimatsu" : {v:"宇治松千夜"}
,"gertrud barkhorn" : {v:"ゲルトルート・バルクホルン"}
,"navia caspar" : {v:"ナヴィア・カスパール"}
,"rio rollins tachibana" : {v:"リオ・ロリンズ・タチバナ"}
,"sukoya kana" : {v:"健屋花那"}
,"artoria pendragon rider alter" : {v:"アルトリア・ペンドラゴン ライダー［オルタ］"}
,"kosaki onodera" : {v:"小野寺小咲"}
,"mihoshi kuramitsu" : {v:"九羅密美星"}
,"misao amano" : {v:"天野美紗緒"}
,"sunny milk" : {v:"サニーミルク"}
,"agrias oaks" : {v:"アグリアス・オークス"}
,"annie leonhart" : {v:"アニ・レオンハート"}
,"pan" : {v:"パン"}
,"ciel" : {v:"シエル", m:{"tsukihime" : "エレイシア(シエル)", "god eater" : "シエル・アランソン"}}
,"maou" : {v:"魔王"}
,"reiko katherine akimoto" : {v:"秋本・カトリーヌ・麗子"}
,"ciel phantomhive" : {v:"シエル・ファントムハイヴ"}
,"evangeline a.k. mcdowell" : {v:"エヴァンジェリン・A・K・マクダウェル"}
,"ichigo morino" : {v:"森野苺"}
,"ryou yamada" : {v:"山田リョウ"}
,"barnaby brooks jr." : {v:"バーナビー・ブルックスJr."}
,"bayonetta" : {v:"ベヨネッタ"}
,"loid forger" : {v:"ロイド・フォージャー"}
,"pola" : {v:"Pola(ポーラ)", m:{"azur lane" : "ポーラ(RN Pola)"}}
,"sebastian michaelis" : {v:"セバスチャン・ミカエリス"}
,"ada wong" : {v:"エイダ・ウォン"}
,"laala manaka" : {v:"真中らぁら"}
,"nui sociere" : {v:"ニュイ・ソシエール"}
,"umbreon" : {v:"ブラッキー"}
,"yukikaze panettone" : {v:"ユキカゼ・パネトーネ"}
,"azusa shirasu" : {v:"白洲アズサ"}
,"kanako ohno" : {v:"大野加奈子(神無月曜湖)"}
,"lisa imai" : {v:"今井リサ"}
,"lunch" : {v:"ランチ"}
,"ryoken kogami" : {v:"鴻上了見"}
,"vector" : {v:"ベクター", m:{"girls frontline" : "Vector"}}
,"yukikaze" : {v:"雪風", m:{"azur lane" : "雪風(IJN Yukikaze)"}}
,"fusou" : {v:"扶桑(IJN Fuso)"}
,"hayate hisakawa" : {v:"久川颯"}
,"klan klan" : {v:"クラン・クラン"}
,"kohaku" : {v:"コハク", m:{"tsukihime" : "琥珀", "inuyasha" : "琥珀"}}
,"nishikata" : {v:"西片"}
,"sasami kawai" : {v:"河合砂沙美"}
,"ump45" : {v:"UMP45"}
,"akebono" : {v:"曙"}
,"harusame" : {v:"春雨"}
,"kotoha tanaka" : {v:"田中琴葉"}
,"okita souji alter" : {v:"沖田総司［オルタ］"}
,"sona buvelle" : {v:"Sona Buvelle"}
,"tomoya okazaki" : {v:"岡崎朋也"}
,"bronya zaychik" : {v:"ブローニャ・ザイチク"}
,"ghislaine dedoldia" : {v:"ギレーヌ・デドルディア"}
,"hiori kazano" : {v:"風野灯織"}
,"inkling" : {v:"インクリング"}
,"tabitha" : {v:"タバサ", m:{"pokemon" : "ホムラ", "dragon quest v" : "タバサ王女", "dragon quest" : "タバサ王女"}}
,"warspite" : {v:"ウォースパイト", m:{"kantai collection" : "Warspite(ウォースパイト)", "azur lane" : "ウォースパイト(HMS Warspite)"}}
,"aki hinata" : {v:"日向秋"}
,"chihiro senkawa" : {v:"千川ちひろ"}
,"cure milky" : {v:"羽衣ララ(キュアミルキー)"}
,"hiro shinosawa" : {v:"篠澤広"}
,"scaramouche" : {v:"スカラマシュ"}
,"stheno" : {v:"ステンノ"}
,"suruga kanbaru" : {v:"神原駿河"}
,"tsurumaru kuninaga" : {v:"鶴丸国永"}
,"yasutomo arakita" : {v:"荒北靖友"}
,"chiori" : {v:"千織"}
,"hina hikawa" : {v:"氷川日菜"}
,"kei kusanagi" : {v:"草薙桂"}
,"luca" : {v:"リュカ", m:{"duel masters" : "ルカ"}}
,"tatsuya shiba" : {v:"司波達也"}
,"yanagi tsukishiro" : {v:"月城柳"}
,"yukio okumura" : {v:"奥村雪男"}
,"zhu yuan" : {v:"朱鳶"}
,"angel" : {v:"エンジェル", m:{"king of fighters" : "アンヘル", "fairy tail" : "ソラノ・アグリア(エンジェル)", "actraiser" : "天使"}}
,"deedlit" : {v:"ディードリット"}
,"etna" : {v:"エトナ"}
,"issei hyoudou" : {v:"兵藤一誠"}
,"megumi fushiguro" : {v:"伏黒恵"}
,"momo" : {v:"モモ", m:{"xenosaga" : "モモ(M.O.M.O.)", "idolish7" : "百"}}
,"regu" : {v:"レグ"}
,"scheherazade" : {v:"シェヘラザード"}
,"shin sato" : {v:"佐藤心"}
,"takanashi kiara" : {v:"小鳥遊キアラ"}
,"aki izayoi" : {v:"十六夜アキ"}
,"amazon" : {v:"アマゾン(HMS Amazon)"}
,"amiya" : {v:"アーミヤ"}
,"arataka reigen" : {v:"霊幻新隆"}
,"hiro" : {v:"ヒロ", m:{"lunar eternal blue" : "ヒイロ"}}
,"kaede isami" : {v:"勇美カエデ"}
,"keiichi maebara" : {v:"前原圭一"}
,"mei izumi" : {v:"和泉愛依"}
,"minamitsu murasa" : {v:"村紗水蜜"}
,"shiroko terror" : {v:"シロコ*テラー"}
,"skadi" : {v:"スカディ", m:{"fate grand order" : "スカサハ=スカディ", "arknights" : "スカジ"}}
,"arisa ichigaya" : {v:"市ヶ谷有咲"}
,"boruto uzumaki" : {v:"うずまきボルト"}
,"chizuru ichinose" : {v:"一ノ瀬ちづる(水原千鶴)"}
,"cure moonlight" : {v:"月影ゆり(キュアムーンライト)"}
,"cure pine" : {v:"山吹祈里(キュアパイン)"}
,"fine" : {v:"フィーネ", m:{"fushigiboshi no futagohime" : "ファイン"}}
,"hange zoe" : {v:"ハンジ・ゾエ"}
,"haruka" : {v:"ハルカ", m:{"senran kagura" : "春花", "sister princess" : "春歌", "dream c club" : "遙華", "tactics" : "春華"}}
,"haruka yuzuhara" : {v:"柚原春夏"}
,"heles" : {v:"ヘルエス"}
,"kaho komiya" : {v:"小宮果穂"}
,"kaoru niimi" : {v:"新見薫"}
,"rika nonaka" : {v:"牧野留姫"}
,"sword maiden" : {v:"剣の乙女"}
,"yumi" : {v:"ユミ", m:{"senran kagura" : "雪泉", "ape escape" : "サヤカ"}}
,"yuni shingyouji" : {v:"真行寺由仁(ユニ)"}
,"cornelia li britannia" : {v:"コーネリア・リ・ブリタニア"}
,"layla" : {v:"レイラ", m:{"the idolmaster" : "ライラ"}}
,"nina ichihara" : {v:"市原仁奈"}
,"ai-chan" : {v:"アイちゃん", m:{"honkai gakuen" : "AIちゃん"}}
,"anna yamada" : {v:"山田杏奈"}
,"debora briscoletti" : {v:"デボラ・ブリスコレッティ"}
,"hayase nagatoro" : {v:"長瀞早瀬"}
,"inuyasha" : {v:"犬夜叉"}
,"kouwan seiki" : {v:"港湾棲姫"}
,"rain mikamura" : {v:"レイン・ミカムラ"}
,"ashley graham" : {v:"アシュリー・グラハム"}
,"charlotte" : {v:"シャルロット", m:{"granblue fantasy" : "シャルロッテ・フェニヤ", "puella magi madoka magica" : "シャルロッテ", "last origin" : "シャーロット", "south park" : "シャーロット", "unlight" : "シャーロット", "kangokutou mary skelter" : "シャーロット", "kaiketsu zorori" : "シャーロット", "fire emblem if" : "シャーロッテ"}}
,"cure ange" : {v:"薬師寺さあや(キュアアンジュ)"}
,"cure muse" : {v:"調辺アコ(キュアミューズ)"}
,"hsien-ko" : {v:"レイレイ"}
,"kon the knight" : {v:"ジャミ"}
,"mina majikina" : {v:"真鏡名ミナ"}
,"nanachi" : {v:"ナナチ"}
,"rihoko sakurai" : {v:"桜井梨穂子"}
,"yuko yoshida" : {v:"吉田優子"}
,"chifuyu orimura" : {v:"織斑千冬"}
,"lucina" : {v:"ルキナ", m:{"galactic drifter vifam" : "ルチーナ・プレシェット"}}
,"maya jouga" : {v:"条河麻耶"}
,"mika" : {v:"ミカ", m:{"genshin impact" : "ミカ・シュミット", "nintama rantarou" : "みか"}}
,"nobita nobi" : {v:"野比のび太"}
,"touji suzuhara" : {v:"鈴原トウジ"}
,"winry rockbell" : {v:"ウィンリィ・ロックベル"}
,"cure chocolat" : {v:"剣城あきら(キュアショコラ)"}
,"fu xuan" : {v:"符玄"}
,"hacka doll no.3" : {v:"ハッカドール3号"}
,"haruna kurodate" : {v:"黒舘ハルナ"}
,"raven" : {v:"レイヴン", m:{"fire emblem the blazing blade" : "レイモンド", "teen titans" : "レイブン", "ben 10" : "レイブン", "gravity rush" : "グラビティ・クロウ", "rune factory 3" : "トゥーナ"}}
,"serika kuromi" : {v:"黒見セリカ"}
,"vaporeon" : {v:"シャワーズ"}
,"astra yao" : {v:"アストラ・ヤオ"}
,"captain nemo" : {v:"ネモ船長", m:{"fate grand order" : "キャプテン・ネモ", "fushigi no umi no nadia" : "ネモ(エルシス・ラ・アルウォール)"}}
,"cure beat" : {v:"黒川エレン(キュアビート)"}
,"furen e lustario" : {v:"フレン・E・ルスタリオ"}
,"inugami korone" : {v:"戌神ころね"}
,"sagume kishin" : {v:"稀神サグメ"}
,"tomo asama" : {v:"浅間・智"}
,"ai hayasaka" : {v:"早坂愛"}
,"akari kizuna" : {v:"紲星あかり"}
,"hiro hamada" : {v:"ヒロ・ハマダ"}
,"mint blancmanche" : {v:"ミント・ブラマンシュ"}
,"ryoko asakura" : {v:"朝倉涼子", m:{"kuromajo-san ga tooru" : "麻倉良子"}}
,"shion" : {v:"シオン", m:{"king of fighters" : "紫苑", "shinrabansho" : "征嵐剣シオン", "xenosaga" : "シオン・ウヅキ", "no. 6" : "紫苑"}}
,"shizuka mogami" : {v:"最上静香"}
,"ako atarashi" : {v:"新子憧"}
,"baiken" : {v:"梅喧"}
,"cure passion" : {v:"東せつな(キュアパッション)"}
,"marcille donato" : {v:"マルシル・ドナトー"}
,"shinn asuka" : {v:"シン・アスカ"}
,"tenka osaki" : {v:"大崎甜花"}
,"tsubasa kazanari" : {v:"風鳴翼"}
,"atlanta" : {v:"アトランタ", m:{"kantai collection" : "Atlanta(アトランタ)", "azur lane" : "アトランタ(USS Atlanta)"}}
,"danua" : {v:"ダヌア"}
,"konomi yuzuhara" : {v:"柚原このみ"}
,"lynette" : {v:"リネット"}
,"mako reizei" : {v:"冷泉麻子"}
,"osaka" : {v:"春日歩(大阪)"}
,"passionlip" : {v:"パッションリップ"}
,"ryoji kaji" : {v:"加持リョウジ"}
,"asuka kazama" : {v:"風間飛鳥"}
,"erika" : {v:"エリカ", m:{"beatmania" : "北見エリカ"}}
,"phoenix wright" : {v:"成歩堂龍一"}
,"sakura igawa" : {v:"井河さくら"}
,"suzuhara lulu" : {v:"鈴原るる"}
,"tomoe" : {v:"トモエ", m:{"blue archive" : "佐城トモエ", "hololive" : "白雪巴", "queens blade" : "武者巫女トモエ", "tsuki ga michibiku isekai douchuu" : "巴"}}
,"astaroth" : {v:"アスタロト", m:{"soulcalibur" : "アスタロス", "highschool dxd" : "ディオドラ・アスタロト", "shinrabansho" : "アスタロット", "dragonaut" : "ディオドラ・アスタロト"}}
,"blanc" : {v:"ブラン", m:{"hyperdimension neptunia" : "ブラン(ホワイトハート)"}}
,"caenis" : {v:"カイニス"}
,"castorice" : {v:"キャストリス"}
,"cinque izumi" : {v:"シンク・イズミ"}
,"dantoudai no aura" : {v:"断頭台のアウラ"}
,"momo kawashima" : {v:"河嶋桃"}
,"tsukiko tsutsukakushi" : {v:"筒隠月子"}
,"cassandra alexandra" : {v:"カサンドラ・アレクサンドル"}
,"china kousaka" : {v:"コウサカ・チナ"}
,"haguro" : {v:"羽黒", m:{"azur lane" : "羽黒(IJN Haguro)"}}
,"hibari" : {v:"ヒバリ", m:{"one piece" : "ひばり", "senran kagura" : "雲雀", "river city girls" : "ひばり"}}
,"meowscarada" : {v:"マスカーニャ"}
,"reki kyan" : {v:"喜屋武暦"}
,"rika sasaki" : {v:"佐々木利佳"}
,"saki miyanaga" : {v:"宮永咲"}
,"setsuna sakurazaki" : {v:"桜咲刹那"}
,"stella loussier" : {v:"ステラ・ルーシェ"}
,"watson amelia" : {v:"ワトソン・アメリア"}
,"akane hino" : {v:"日野茜"}
,"akane shinjou" : {v:"新条アカネ", m:{"miracle giants dome-kun" : "新城あかね"}}
,"america" : {v:"アメリカ"}
,"cure macaron" : {v:"琴爪ゆかり(キュアマカロン)"}
,"eve" : {v:"イヴ", m:{"to love-ru" : "イヴ(金色の闇)", "parasite eve" : "イヴ・ブレア", "needless" : "イヴ・ノイシュヴァンシュタイン"}}
,"galleon" : {v:"ガレヲン"}
,"ken kaneki" : {v:"金木研"}
,"monika" : {v:"モニカ", m:{"princess connect" : "モニカ・ヴァイスヴィント"}}
,"nobunaga oda" : {v:"織田信長", m:{"sengoku otome" : "織田ノブナガ", "sengoku collection" : "織田ノブナガ"}}
,"panty anarchy" : {v:"アナーキー・パンティ"}
,"rei miyamoto" : {v:"宮本麗"}
,"tingyun" : {v:"停雲"}
,"bradamante" : {v:"ブラダマンテ"}
,"francesca lucchini" : {v:"フランチェスカ・ルッキーニ"}
,"konoka konoe" : {v:"近衛木乃香"}
,"kotori mizuki" : {v:"観月小鳥"}
,"mio sakamoto" : {v:"坂本美緒"}
,"mirai kamiki" : {v:"カミキ・ミライ"}
,"rana" : {v:"ラナ", m:{"mega man star force" : "ラーナ", "langrisser" : "ラーナ"}}
,"sasaki saku" : {v:"笹木咲"}
,"satoshi tainaka" : {v:"田井中聡"}
,"xianyun" : {v:"閑雲"}
,"elaina" : {v:"イレイナ"}
,"euphemia li britannia" : {v:"ユーフェミア・リ・ブリタニア"}
,"galo thymos" : {v:"ガロ・ティモス"}
,"irisviel von einzbern" : {v:"アイリスフィール・フォン・アインツベルン"}
,"jintsuu" : {v:"神通", m:{"azur lane" : "神通(IJN Jintsū)"}}
,"kiana kaslana" : {v:"キアナ・カスラナ"}
,"miyuki shirogane" : {v:"白銀御行"}
,"toushirou hitsugaya" : {v:"日番谷冬獅郎"}
,"tsubasa ibuki" : {v:"伊吹翼"}
,"aigis" : {v:"アイギス"}
,"alice zuberg" : {v:"アリス・ツーベルク"}
,"aoko aozaki" : {v:"蒼崎青子(フォーリナー)", m:{"mahou tsukai no yoru" : "蒼崎青子"}}
,"high elf archer" : {v:"妖精弓手"}
,"kokichi ouma" : {v:"王馬小吉"}
,"mihari oyama" : {v:"緒山みはり"}
,"nabiki tendo" : {v:"天道なびき"}
,"sae nakata" : {v:"中多紗江"}
,"zange" : {v:"ざんげちゃん"}
,"chen hui-chieh" : {v:"チェン"}
,"katsuragi" : {v:"葛城", m:{"azur lane" : "葛城(IJN Katsuragi)"}}
,"koyomi mizuhara" : {v:"水原暦"}
,"seto kaiba" : {v:"海馬瀬人"}
,"taki tachibana" : {v:"立花瀧"}
,"yuuno scrya" : {v:"ユーノ・スクライア"}
,"aoi kotonoha" : {v:"琴葉葵"}
,"braixen" : {v:"テールナー"}
,"kaito" : {v:"KAITO", m:{"ajin" : "海斗"}}
,"manami tamura" : {v:"田村麻奈実"}
,"megumi natsu" : {v:"奈津恵"}
,"mualani" : {v:"ムアラニ"}
,"shion yorigami" : {v:"依神紫苑"}
,"vice" : {v:"バイス"}
,"yahagi" : {v:"矢矧"}
,"yakumo tsukamoto" : {v:"塚本八雲"}
,"yousuke koiwai" : {v:"小岩井葉介"}
,"ashelia bnargin dalmasca" : {v:"アーシェ・バナルガン・ダルマスカ"}
,"chiho sasaki" : {v:"佐々木千穂"}
,"iris" : {v:"アイリス"}
,"kyoko igarashi" : {v:"五十嵐響子"}
,"mai tokiha" : {v:"鴇羽舞衣"}
,"rouge the bat" : {v:"ルージュ・ザ・バット"}
,"shido itsuka" : {v:"五河士道"}
,"shinichi kudo" : {v:"工藤新一"}
,"yukina himeragi" : {v:"姫柊雪菜"}
,"akari kamigishi" : {v:"神岸あかり"}
,"alisa reinford" : {v:"アリサ・ラインフォルト"}
,"bowser" : {v:"クッパ"}
,"iroha tamaki" : {v:"環いろは"}
,"kako takafuji" : {v:"鷹富士茄子"}
,"kirari moroboshi" : {v:"諸星きらり"}
,"le malin" : {v:"ル・マラン", m:{"azur lane" : "ル・マラン(MNF Le Malin)"}}
,"makoto aki" : {v:"安芸真琴(マコト)"}
,"saya endou" : {v:"遠藤サヤ"}
,"serika hakozaki" : {v:"箱崎星梨花"}
,"tsukiumi" : {v:"月海"}
,"erica fontaine" : {v:"エリカ・フォンティーヌ"}
,"fuka toyokawa" : {v:"豊川風花"}
,"hanako kuroe" : {v:"黒江花子(クロエ)"}
,"jean kirschtein" : {v:"ジャン・キルシュタイン"}
,"jtf mob" : {v:"JTFモブ"}
,"kirei kotomine" : {v:"言峰綺礼"}
,"mafuyu kirisu" : {v:"桐須真冬"}
,"millhiore firianno biscotti" : {v:"ミルヒオーレ・フィリアンノ・ビスコッティ"}
,"shuuichi saihara" : {v:"最原終一"}
,"suguru geto" : {v:"夏油傑"}
,"surtr" : {v:"スルト"}
,"acheron" : {v:"黄泉"}
,"amamiya kokoro" : {v:"天宮こころ"}
,"ashigara" : {v:"足柄", m:{"azur lane" : "足柄(IJN Ashigara)"}}
,"camilla" : {v:"カミラ"}
,"haman karn" : {v:"ハマーン・カーン"}
,"hoozuki" : {v:"ほおずき", m:{"flower knight girl" : "ホオズキ", "hoozuki no reitetsu" : "鬼灯", "otome youkai zakuro" : "鬼灯"}}
,"lio fotia" : {v:"リオ・フォーティア"}
,"mogami" : {v:"最上", m:{"azur lane" : "最上(IJN Mogami)"}}
,"tokiko tsumura" : {v:"津村斗貴子"}
,"tsunayoshi sawada" : {v:"沢田綱吉"}
,"yumi fukuzawa" : {v:"福沢祐巳"}
,"burnice white" : {v:"バーニス・ホワイト"}
,"cham cham" : {v:"チャムチャム"}
,"langa hasegawa" : {v:"馳河ランガ"}
,"sadayo kawakami" : {v:"川上貞代"}
,"tenten" : {v:"テンテン"}
,"eijun sawamura" : {v:"沢村栄純"}
,"judy hopps" : {v:"ジュディ・ホップス"}
,"junko enoshima" : {v:"江ノ島盾子"}
,"leonardo watch" : {v:"レオナルド・ウォッチ"}
,"nariyuki yuiga" : {v:"唯我成幸"}
,"oberon" : {v:"オベロン", m:{"sword art online" : "須郷伸之(妖精王オベイロン)"}}
,"akane murokasa" : {v:"室笠アカネ"}
,"atsuko hakari" : {v:"秤アツコ"}
,"cure flora" : {v:"春野はるか(キュアフローラ)"}
,"cure mermaid" : {v:"海藤みなみ(キュアマーメイド)"}
,"hiyori tsuchinaga" : {v:"槌永ヒヨリ"}
,"ibuki" : {v:"伊吹(IJN Ibuki)"}
,"kotone fujita" : {v:"藤田ことね"}
,"lunasa prismriver" : {v:"ルナサ・プリズムリバー"}
,"mai kazuki" : {v:"香月舞", m:{"magne robo ga-keen" : "花月舞"}}
,"mumei" : {v:"無名"}
,"springfield" : {v:"スプリングフィールド"}
,"theresa apocalypse" : {v:"テレサ・アポカリプス"}
,"ayaka kurusugawa" : {v:"来栖川綾香"}
,"chacha" : {v:"チャチャ"}
,"charlotte e. yeager" : {v:"シャーロット・E・イェーガー"}
,"elpeo ple" : {v:"エルピー・プル"}
,"hakutaku" : {v:"白澤"}
,"kaho hinata" : {v:"日向夏帆"}
,"lanzhu zhong" : {v:"鐘嵐珠"}
,"mamimi tanaka" : {v:"田中摩美々"}
,"noel vermillion" : {v:"ノエル=ヴァーミリオン"}
,"taigei" : {v:"大鯨"}
,"valkyrie" : {v:"ヴァルキリー", m:{"fate grand order" : "ワルキューレ", "valkyrie no bouken" : "ワルキューレ", "ufo princess valkyrie" : "ワるきゅーレ", "galzoo island" : "バルキリー"}}
,"ai hinatsuru" : {v:"雛鶴あい"}
,"akihisa yoshii" : {v:"吉井明久"}
,"chiyo mihama" : {v:"美浜ちよ"}
,"eureka" : {v:"エウレカ"}
,"kaolla su" : {v:"カオラ・スゥ"}
,"katyusha" : {v:"カチューシャ"}
,"kouichi aihara" : {v:"相原光一"}
,"kurumi tokisaki" : {v:"時崎狂三"}
,"kyojuro rengoku" : {v:"煉獄杏寿郎"}
,"orange pekoe" : {v:"オレンジペコ"}
,"principal" : {v:"校長"}
,"sekibanki" : {v:"赤蛮奇"}
,"shinobu kuki" : {v:"久岐忍"}
,"talia gladys" : {v:"タリア・グラディス"}
,"yusei fudo" : {v:"不動遊星"}
,"yuuki otokura" : {v:"乙倉悠貴"}
,"airi" : {v:"アイリ", m:{"queens blade" : "冥土へ誘うものアイリ", "arena of valor" : "愛里", "robotics notes" : "愛理"}}
,"celes chere" : {v:"セリス・シェール"}
,"cure rouge" : {v:"夏木りん(キュアルージュ)"}
,"fujiko mine" : {v:"峰不二子"}
,"haru okumura" : {v:"奥村春"}
,"ibuki douji" : {v:"伊吹童子"}
,"kamoi" : {v:"神威"}
,"kenichi saruyama" : {v:"猿山ケンイチ"}
,"libeccio" : {v:"Libeccio(リベッチオ)", m:{"azur lane" : "リベッチオ(RN Libeccio)"}}
,"mion sonozaki" : {v:"園崎魅音"}
,"misogi hodaka" : {v:"穂高みそぎ(ミソギ)"}
,"rover" : {v:"漂泊者", m:{"etrian odyssey" : "ハウンド"}}
,"sachiko ogasawara" : {v:"小笠原祥子"}
,"sturm" : {v:"スツルム"}
,"tomoyo sakagami" : {v:"坂上智代"}
,"toru asakura" : {v:"浅倉透"}
,"tron bonne" : {v:"トロン・ボーン"}
,"youto yokodera" : {v:"横寺陽人"}
,"yue ayase" : {v:"綾瀬夕映"}
,"artoria caster" : {v:"アルトリア キャスター"}
,"beatrice" : {v:"ベアトリーチェ", m:{"granblue fantasy" : "ベアトリクス", "re zero kara hajimeru isekai seikatsu" : "ベアトリス", "zero no tsukaima" : "ベアトリス・イヴォンヌ・フォン・クルデンホルフ", "final fantasy ix" : "ベアトリクス", "kage no jitsuryokusha ni naritakute" : "ベアトリクス", "rune factory" : "ベアトリス", "princess principal" : "ベアトリス", "diabolik lovers" : "ベアトリクス", "mamoru-kun ni megami no shukufuku wo" : "鷹栖絢子(魔女ベアトリーチェ)"}}
,"dusk" : {v:"ダスク"}
,"eas" : {v:"イース(東せつな)"}
,"faruzan" : {v:"ファルザン"}
,"hideki motosuwa" : {v:"本須和秀樹"}
,"iskandar" : {v:"イスカンダル"}
,"iv" : {v:"Ⅳ"}
,"leafeon" : {v:"リーフィア"}
,"mikoto utsugi" : {v:"卯都木命"}
,"mitsune konno" : {v:"紺野みつね"}
,"murasame" : {v:"村雨", m:{"senren banka" : "ムラサメ"}}
,"shermie" : {v:"シェルミー"}
,"waver velvet" : {v:"ウェイバー・ベルベット"}
,"ferry" : {v:"フェリ"}
,"hana isuzu" : {v:"五十鈴華"}
,"jinx" : {v:"ジンクス"}
,"kana arima" : {v:"有馬かな"}
,"kaname chidori" : {v:"千鳥かなめ", m:{"koi kaze" : "千鳥要"}}
,"kanao tsuyuri" : {v:"栗花落カナヲ"}
,"krystal" : {v:"クリスタル"}
,"lancelot" : {v:"ランスロット", m:{"fate grand order" : "ランスロット(セイバー)", "fate zero" : "ランスロット(バーサーカー)"}}
,"mai kawakami" : {v:"川神舞"}
,"maria takayama" : {v:"高山マリア"}
,"nunnally vi britannia" : {v:"ナナリー・ヴィ・ブリタニア"}
,"nyaruko" : {v:"ニャル子"}
,"souseiseki" : {v:"蒼星石"}
,"tokino sora" : {v:"ときのそら"}
,"android 21" : {v:"21号"}
,"coquelicot" : {v:"コクリコ"}
,"cure berry" : {v:"蒼乃美希(キュアベリー)"}
,"elena" : {v:"エレナ", m:{"final fantasy vii" : "イリーナ"}}
,"espeon" : {v:"エーフィ"}
,"hagikaze" : {v:"萩風"}
,"hibiki nekozuka" : {v:"猫塚ヒビキ"}
,"naga the serpent" : {v:"サーペントのナーガ"}
,"ookurikara" : {v:"大倶利伽羅"}
,"ragna the bloodedge" : {v:"ラグナ=ザ=ブラッドエッジ"}
,"rika shiguma" : {v:"志熊理科"}
,"rin shima" : {v:"志摩リン"}
,"shauna" : {v:"サナ"}
,"teletha tessa testarossa" : {v:"テレサ・テスタロッサ(テッサ)"}
,"ami kawashima" : {v:"川嶋亜美"}
,"caster" : {v:"キャスター", m:{"fate stay night" : "メディア(キャスター)", "fate hollow ataraxia" : "メディア(キャスター)", "fate zero" : "ジル・ド・レェ(キャスター)", "fate extra" : "玉藻の前(キャスター)", "fate apocrypha" : "アヴィケブロン、シェイクスピア(キャスター)", "fate prototype" : "メディア(キャスター)"}}
,"cell" : {v:"セル"}
,"fourth raikage" : {v:"四代目雷影(エー)"}
,"hinoa" : {v:"ヒノエ"}
,"lightning" : {v:"ライトニング"}
,"maria tachibana" : {v:"マリア・タチバナ"}
,"momoko suou" : {v:"周防桃子"}
,"rena ryuuguu" : {v:"竜宮レナ"}
,"rosaria" : {v:"ロサリア"}
,"takashi komuro" : {v:"小室孝"}
,"aisha" : {v:"アイシャ", m:{"sennen sensou aigis" : "伏龍の軍師アイシャ", "koihime musou" : "愛紗(関羽 雲長)"}}
,"alice nakiri" : {v:"薙切アリス"}
,"amelia wil tesla seyruun" : {v:"アメリア=ウィル=テスラ=セイルーン"}
,"caro ru lushe" : {v:"キャロ・ル・ルシエ"}
,"delia ketchum" : {v:"ハナコ"}
,"irida" : {v:"イリーダ", m:{"pokemon" : "カイ"}}
,"isuzu" : {v:"五十鈴", m:{"azur lane" : "五十鈴(IJN Isuzu)"}}
,"lyndis" : {v:"リンディス"}
,"merchant" : {v:"商人", m:{"ragnarok online" : "マーチャント"}}
,"morgiana" : {v:"モルジアナ"}
,"regina" : {v:"レジーナ", m:{"pokemon" : "チホコ"}}
,"shima katase" : {v:"片瀬志麻"}
,"tsukasa kudamaki" : {v:"菅牧典"}
,"tsumugi shiraishi" : {v:"白石紬"}
,"dante" : {v:"ダンテ", m:{"shironeko project" : "気高き騎士団長ダンテ"}}
,"elegg" : {v:"エレグ"}
,"frederica miyamoto" : {v:"宮本フレデリカ"}
,"himari akeboshi" : {v:"明星ヒマリ"}
,"mostima" : {v:"モスティマ"}
,"sakura" : {v:"サクラ", m:{"naruto" : "春野サクラ", "street fighter" : "春日野さくら", "urusei yatsura" : "サクラ先生", "ijiranaide nagatoro-san" : "桜", "isekai wa smartphone to tomo ni." : "桜", "tsubasa reservoir chronicle" : "サクラ姫"}}
,"shuuko komi" : {v:"古見秀子"}
,"tone" : {v:"利根"}
,"anzu kadotani" : {v:"角谷杏"}
,"ceres fauna" : {v:"セレス・ファウナ"}
,"cure sky" : {v:"ソラ・ハレワタール(キュアスカイ)"}
,"eriri spencer sawamura" : {v:"澤村・スペンサー・英梨々"}
,"isabelle" : {v:"しずえ", m:{"shadowverse" : "イザベル"}}
,"kou seiya" : {v:"星野光"}
,"mai sakurajima" : {v:"桜島麻衣"}
,"niyaniya kyouju" : {v:"ニヤニヤ教授"}
,"noshiro" : {v:"能代", m:{"azur lane" : "能代(IJN Noshiro)"}}
,"rean schwarzer" : {v:"リィン・シュバルツァー"}
,"rinami himesaki" : {v:"姫崎莉波"}
,"suzuka gozen" : {v:"鈴鹿御前"}
,"yoshika miyako" : {v:"宮古芳香"}
,"yugi mutou" : {v:"武藤遊戯"}
,"arle nadja" : {v:"アルル・ナジャ"}
,"hajime iwaizumi" : {v:"岩泉一"}
,"karen" : {v:"カレン", m:{"pokemon" : "カリン"}}
,"mutsumi otohime" : {v:"乙姫むつみ"}
,"nia teppelin" : {v:"ニア・テッペリン"}
,"shun kurosaki" : {v:"黒崎隼", m:{"yu-gi-oh arc-v" : "黒咲隼"}}
,"tabitha helene orleans de gallia" : {v:"タバサ(シャルロット・エレーヌ・オルレアン・デ・ガリア)"}
,"takane lui" : {v:"鷹嶺ルイ"}
,"yoshino yorita" : {v:"依田芳乃"}
,"yukina minato" : {v:"湊友希那"}
,"aya maruyama" : {v:"丸山彩"}
,"enterprise" : {v:"エンタープライズ", m:{"azur lane" : "エンタープライズ(USS Enterprise)"}}
,"erich von rerugen" : {v:"エーリッヒ・フォン・レルゲン"}
,"junko" : {v:"純狐"}
,"kimi aoi" : {v:"葵・喜美"}
,"mahiru inami" : {v:"伊波まひる"}
,"mysterious heroine x alter" : {v:"謎のヒロインX［オルタ］"}
,"samui" : {v:"サムイ"}
,"secelia dote" : {v:"セセリア・ドート"}
,"seishirou tsugumi" : {v:"鶫誠士郎"}
,"tohru" : {v:"トール"}
,"hakos baelz" : {v:"ハコス・ベールズ"}
,"ichirin kumoi" : {v:"雲居一輪"}
,"kirara yozakura" : {v:"夜桜キララ"}
,"lecia" : {v:"リーシャ"}
,"madoka ayukawa" : {v:"鮎川まどか"}
,"riko saikawa" : {v:"才川リコ"}
,"sanae katagiri" : {v:"片桐早苗"}
,"shouta magatsuchi" : {v:"真ヶ土翔太"}
,"tsuruya" : {v:"鶴屋さん"}
,"alexander" : {v:"アレクサンダー", m:{"fate grand order" : "アレキサンダー", "fullmetal alchemist" : "アレキサンダー", "kaitou tenshi twin angel" : "アレキサンダー", "yuukyuu no sharin" : "アレキサンダー", "bahamut lagoon" : "アレキサンダー"}}
,"alibaba saluja" : {v:"アリババ・サルージャ"}
,"aoba suzukaze" : {v:"涼風青葉"}
,"elesa" : {v:"エリーサ", m:{"pokemon" : "カミツレ"}}
,"evelynn" : {v:"イブリン"}
,"ikumi mito" : {v:"水戸郁魅"}
,"kazuya miyuki" : {v:"御幸一也"}
,"nonna" : {v:"ノンナ"}
,"sae kobayakawa" : {v:"小早川紗枝"}
,"shiranui" : {v:"不知火", m:{"azur lane" : "不知火(IJN Shiranui)"}}
,"swan white" : {v:"スワン・ホワイト"}
,"takaya abe" : {v:"阿部隆也"}
,"yoichi isagi" : {v:"潔世一"}
,"choromatsu matsuno" : {v:"松野チョロ松"}
,"jun sagami" : {v:"佐上ジュン"}
,"katalina aryze" : {v:"カタリナ・アリゼ"}
,"korwa" : {v:"コルワ"}
,"kyouko toshinou" : {v:"歳納京子"}
,"menace" : {v:"メナス"}
,"miho kohinata" : {v:"小日向美穂"}
,"momo chiyoda" : {v:"千代田桃"}
,"rena andou" : {v:"安藤レナ"}
,"riina tada" : {v:"多田李衣菜"}
,"sadao maou" : {v:"真奥貞夫"}
,"sasha blouse" : {v:"サシャ・ブラウス"}
,"tia halibel" : {v:"ティア・ハリベル"}
,"unryuu" : {v:"雲龍"}
,"yuu morisawa" : {v:"森沢優"}
,"zoroark" : {v:"ゾロアーク"}
,"ayane okusora" : {v:"奥空アヤネ"}
,"doremy sweet" : {v:"ドレミー・スイート"}
,"flareon" : {v:"ブースター"}
,"hatsuzuki" : {v:"初月", m:{"azur lane" : "初月(IJN Hatsuzuki)"}}
,"ichigo hoshimiya" : {v:"星宮いちご"}
,"minako satake" : {v:"佐竹美奈子"}
,"twilight sparkle" : {v:"トワイライトスパークル"}
,"big bad wolf" : {v:"悪いオオカミ"}
,"chika itou" : {v:"伊藤千佳"}
,"cure rosetta" : {v:"四葉ありす(キュアロゼッタ)"}
,"hana makihatayama" : {v:"巻機山ハナ(ハナちゃん)"}
,"implacable" : {v:"インプラカブル", m:{"azur lane" : "インプラカブル(HMS Implacable)"}}
,"kohran li" : {v:"李紅蘭"}
,"magisa" : {v:"マギサ"}
,"medb" : {v:"メイヴ"}
,"minoto" : {v:"ミノト"}
,"nagito komaeda" : {v:"狛枝凪斗"}
,"nick wilde" : {v:"ニック・ワイルド"}
,"tashigi" : {v:"たしぎ"}
,"yui" : {v:"ユイ", m:{"persona 5" : "YUI", "lucky star" : "成実ゆい", "sekirei" : "結", "jigokuraku" : "結", "mitsuboshi colors" : "結衣", "sakuna of rice and ruin" : "ゆい"}}
,"aoi asahina" : {v:"朝日奈葵"}
,"asuha chigusa" : {v:"千種明日葉"}
,"cure honey" : {v:"大森ゆうこ(キュアハニー)"}
,"ena ayase" : {v:"綾瀬恵那"}
,"hana shirosaki" : {v:"白咲花"}
,"makoto nanaya" : {v:"マコト=ナナヤ"}
,"mamako oosuki" : {v:"大好真々子"}
,"percival" : {v:"パーシヴァル"}
,"rabi en rose" : {v:"ラ・ビ・アン・ローズ(うさだヒカル)"}
,"shiki" : {v:"シキ", m:{"samurai spirits" : "色", "senran kagura" : "四季", "tsukihime" : "遠野志貴", "durarara" : "四木", "beatmania" : "識", "tsuki ga michibiku isekai douchuu" : "識"}}
,"super crown bowser" : {v:"クッパ姫"}
,"topaz" : {v:"トパーズ"}
,"ultrawoman" : {v:"ウルトラウーマン"}
,"yuubari" : {v:"夕張", m:{"azur lane" : "夕張(IJN Yūbari)"}}
,"black swan" : {v:"ブラックスワン"}
,"kasumi chigusa" : {v:"千種霞"}
,"mature" : {v:"マチュア"}
,"meiko shiraki" : {v:"白木芽衣子"}
,"perrine h. clostermann" : {v:"ペリーヌ＝アンリ・クロステルマン"}
,"saori kido" : {v:"城戸沙織"}
,"saya takagi" : {v:"高城沙耶"}
,"sinbad" : {v:"シンドバッド"}
,"xiao" : {v:"魈"}
,"yosuke hanamura" : {v:"花村陽介"}
,"yuzuru otonashi" : {v:"音無結弦"}
,"ilsa" : {v:"イルザ"}
,"kaoru tanamachi" : {v:"棚町薫"}
,"kiriko yukoku" : {v:"幽谷霧子"}
,"liliruca arde" : {v:"リリルカ・アーデ"}
,"makie sasaki" : {v:"佐々木まき絵"}
,"millia rage" : {v:"ミリア=レイジ"}
,"natsuki kuga" : {v:"玖我なつき"}
,"riven" : {v:"Riven"}
,"tomoka minato" : {v:"湊智花"}
,"ymir" : {v:"ユミル", m:{"queens blade" : "ユーミル", "queens blade rebellion" : "ユーミル"}}
,"yuki himekawa" : {v:"姫川友紀"}
,"chinatsu hinomiya" : {v:"火宮チナツ"}
,"cure lemonade" : {v:"春日野うらら(キュアレモネード)"}
,"eris" : {v:"エリス"}
,"hei" : {v:"黒"}
,"kamina" : {v:"カミナ"}
,"kokoro" : {v:"ココロ", m:{"dead or alive" : "こころ", "kokoro library" : "こころ"}}
,"letty whiterock" : {v:"レティ・ホワイトロック"}
,"loran cehack" : {v:"ロラン・セアック"}
,"rei ryuugazaki" : {v:"竜ヶ崎怜"}
,"rin" : {v:"リン", m:{"king of fighters" : "麟", "senran kagura" : "凜", "inuyasha" : "りん", "kamen rider zero-one" : "厘", "nagasarete airantou" : "りん", "kemurikusa" : "りん", "needless" : "凜", "bunny garden" : "凜"}}
,"akizuki" : {v:"秋月"}
,"kotona elegance" : {v:"コトナ・エレガンス"}
,"minoriko aki" : {v:"秋穣子"}
,"nate argente loup mitotsudaira" : {v:"ネイト・ミトツダイラ"}
,"rance" : {v:"ランス"}
,"risa momioka" : {v:"籾岡里紗"}
,"sanae dekomori" : {v:"凸守早苗"}
,"ichika takatsuki" : {v:"貴月イチカ"}
,"miya tachibana" : {v:"橘美也"}
,"momoko akatsutsumi" : {v:"赤堤ももこ(ハイパー・ブロッサム)"}
,"nagi hisakawa" : {v:"久川凪"}
,"ririchiyo shirakiin" : {v:"白鬼院凜々蝶"}
,"iku nakatani" : {v:"中谷育"}
,"natalia" : {v:"ナターリア"}
,"jessica" : {v:"ジェシカ", m:{"pokemon" : "ナツキ"}}
,"juushimatsu matsuno" : {v:"松野十四松"}
,"suzutsuki" : {v:"涼月", m:{"azur lane" : "涼月(IJN Suzutsuki)"}}
,"haruyuki arita" : {v:"有田春雪(シルバー・クロウ)"}
,"incineroar" : {v:"ガオガエン"}
,"kirlia" : {v:"キルリア"}
,"leaf" : {v:"リーフ"}
,"nemona" : {v:"ネモナ", m:{"pokemon" : "ネモ"}}
,"teruzuki" : {v:"照月"}
,"tsumugi mayumiya" : {v:"繭宮つむぎ"}
,"yumi aiba" : {v:"相葉夕美"}
,"greninja" : {v:"ゲッコウガ"}
,"juliana" : {v:"ジュリアナ", m:{"pokemon" : "アオイ"}}
,"urumi ushizaki" : {v:"牛崎潤美"}
,"uzuki" : {v:"卯月", m:{"azur lane" : "卯月(IJN Uzuki)"}}
,"akigumo" : {v:"秋雲"}
,"akitsu maru" : {v:"あきつ丸"}
,"misaki imashino" : {v:"戒野ミサキ"}
,"nachi" : {v:"那智", m:{"azur lane" : "那智(IJN Nachi)"}}
,"shizuru hoshino" : {v:"星野静流"}
,"cheshire" : {v:"チェシャー", m:{"azur lane" : "チェシャー(HMS Cheshire)"}}
,"konomi baba" : {v:"馬場このみ"}
,"nono morikubo" : {v:"森久保乃々"}
,"raihan" : {v:"ライハン", m:{"pokemon" : "キバナ"}}
,"shiny luminous" : {v:"九条ひかり(シャイニールミナス)"}
,"yayoi" : {v:"弥生"}
,"calem" : {v:"カルム"}
,"erik" : {v:"エリク", m:{"pokemon" : "マサシ", "fairy tail" : "エリック(毒竜のコブラ)", "dragon quest xi" : "カミュ", "animal crossing" : "チャック"}}
,"hinata hoshino" : {v:"星野ひなた"}
,"ringo" : {v:"鈴瑚"}
,"sara" : {v:"サラ", m:{"genshin impact" : "九条サラ", "pokemon" : "マリ", "jewelpet tinkle" : "沙羅", "tenshi ni narumon" : "サーラ"}}
,"cure macherie" : {v:"愛崎えみる(キュアマシェリ)"}
,"housen ryofu" : {v:"恋(呂布 奉先)"}
,"nao yokoyama" : {v:"横山奈緒"}
,"pikachu" : {v:"ピカチュウ"}
,"syoko hoshi" : {v:"星輝子"}
,"cure princess" : {v:"白雪ひめ(キュアプリンセス)"}
,"cure star" : {v:"星奈ひかる(キュアスター)"}
,"etorofu" : {v:"択捉"}
,"ginrei" : {v:"銀鈴", m:{"senran kagura" : "銀嶺"}}
,"jolteon" : {v:"サンダース"}
,"shinmyoumaru sukuna" : {v:"少名針妙丸"}
,"hiryuu" : {v:"飛龍", m:{"azur lane" : "飛龍(IJN Hiryū)"}}
,"kiyoshimo" : {v:"清霜"}
,"kumbhira" : {v:"クビラ"}
,"poppy" : {v:"ポピー", m:{"league of legends" : "ポッピー", "animal crossing" : "グミ", "poppy playtime" : "Poppy"}}
,"vajra" : {v:"ヴァジラ"}
,"washu hakubi" : {v:"白眉鷲羽"}
,"aoi futaba" : {v:"双葉碧"}
,"hinana ichikawa" : {v:"市川雛菜"}
,"charizard" : {v:"リザードン"}
,"cow girl" : {v:"牛飼娘"}
,"milfeulle sakuraba" : {v:"ミルフィーユ・桜葉"}
,"saki hanami" : {v:"花海咲季"}
,"yukito tsukishiro" : {v:"月城雪兎(月)"}
,"akira sunazuka" : {v:"砂塚あきら"}
,"cure prism" : {v:"虹ヶ丘ましろ(キュアプリズム)"}
,"silva" : {v:"シルバ"}
,"yukari mizumoto" : {v:"水本ゆかり"}
,"arashio" : {v:"荒潮(IJN Arashio)"}
,"caesar king" : {v:"キング・シーザー"}
,"cure yell" : {v:"野乃はな(キュアエール)"}
,"hazuki nanakusa" : {v:"七草はづき"}
,"peorth" : {v:"ペイオース"}
,"reisa uzawa" : {v:"宇沢レイサ"}
,"joon yorigami" : {v:"依神女苑"}
,"koyuki kurosaki" : {v:"黒崎コユキ"}
,"ranpha franboise" : {v:"蘭花・フランボワーズ"}
,"tomo takino" : {v:"滝野智"}
,"umi kousaka" : {v:"高坂海美"}
,"asahi serizawa" : {v:"芹沢あさひ"}
,"choukai" : {v:"鳥海", m:{"azur lane" : "鳥海(IJN Chōkai)"}}
,"ginko sora" : {v:"空銀子"}
,"gwen tennyson" : {v:"グウェン・テニスン"}
,"rei" : {v:"レイ", m:{"pokemon" : "テル", "goddess of victory nikke" : "ライ"}}
,"acolyte" : {v:"アコライト"}
,"eimi izumimoto" : {v:"和泉元エイミ"}
,"fletcher" : {v:"フレッチャー", m:{"kantai collection" : "Fletcher(フレッチャー)", "azur lane" : "フレッチャー(USS Fletcher)"}}
,"kris" : {v:"クリス"}
,"kurenai yuhi" : {v:"夕日紅"}
,"mutsuki" : {v:"睦月", m:{"azur lane" : "睦月(IJN Mutsuki)"}}
,"shirayuki" : {v:"白雪", m:{"azur lane" : "白雪(IJN Shirayuki)"}}
,"watatsuki no yorihime" : {v:"綿月依姫"}
,"elena shimabara" : {v:"島原エレナ"}
,"fubuki nemugaki" : {v:"合歓垣フブキ"}
,"kagerou" : {v:"陽炎(IJN Kagerō)"}
,"sabrina" : {v:"サブリナ", m:{"pokemon" : "ナツメ"}}
,"seiran" : {v:"清蘭"}
,"tomoka tenkubashi" : {v:"天空橋朋花"}
,"z23" : {v:"Z23(KMS Z23)"}
,"arezu" : {v:"アリーズ", m:{"pokemon" : "ヒナツ"}}
,"haruka igusa" : {v:"伊草ハルカ"}
,"kikuri hiroi" : {v:"廣井きくり"}
,"miko iino" : {v:"伊井野ミコ"}
,"mizuki makabe" : {v:"真壁瑞希"}
,"nelson" : {v:"ネルソン", m:{"kantai collection" : "Nelson(ネルソン)", "azur lane" : "ネルソン(HMS Nelson)"}}
,"noa himesaka" : {v:"姫坂乃愛"}
,"yaia" : {v:"ヤイア"}
,"bianca" : {v:"ビアンカ", m:{"pokemon" : "ベル", "animal crossing" : "コユキ"}}
,"shizuha aki" : {v:"秋静葉"}
,"agano" : {v:"阿賀野", m:{"azur lane" : "阿賀野(IJN Agano)"}}
,"kamikaze" : {v:"神風", m:{"azur lane" : "神風(IJN Kamikaze)"}}
,"kiyone makibi" : {v:"真備清音"}
,"sheffield" : {v:"シェフィールド", m:{"kantai collection" : "Sheffield(シェフィールド)", "azur lane" : "シェフィールド(HMS Sheffield)"}}
,"ankha" : {v:"ナイル"}
,"aoba" : {v:"青葉", m:{"azur lane" : "青葉(IJN Aoba)"}}
,"aoi oki" : {v:"扇喜アオイ"}
,"aria" : {v:"アリア"}
,"cure selene" : {v:"香久矢まどか(キュアセレーネ)"}
,"shiori kashiwazaki" : {v:"柏崎栞"}
,"javelin" : {v:"ジャベリン", m:{"kantai collection" : "Javelin(ジャヴェリン)", "azur lane" : "ジャベリン(HMS Javelin)"}}
,"wakasagihime" : {v:"わかさぎ姫"}
,"bache" : {v:"バッチ", m:{"azur lane" : "バッチ(USS Bache)"}}
,"blaziken" : {v:"バシャーモ"}
,"cure cosmo" : {v:"ユニ(キュアコスモ)"}
,"eriko kuraishi" : {v:"倉石恵理子"}
,"red" : {v:"レッド"}
,"shinano" : {v:"信濃(IJN Shinano)"}
,"cure amour" : {v:"ルールー・アムール(キュアアムール)"}
,"cure gelato" : {v:"立神あおい(キュアジェラート)"}
,"forte stollen" : {v:"フォルテ・シュトーレン"}
,"melony" : {v:"メロニー", m:{"pokemon" : "メロン"}}
,"naka" : {v:"那珂", m:{"azur lane" : "那珂(IJN Naka)"}}
,"natsu yutori" : {v:"柚鳥ナツ"}
,"nozomi sakurai" : {v:"桜井望"}
,"rin nanagami" : {v:"七神リン"}
,"yuugumo" : {v:"夕雲"}
,"ai yashajin" : {v:"夜叉神天衣"}
,"hunter" : {v:"ハンター", m:{"azur lane" : "ハンター(HMS Hunter)"}}
,"kieran" : {v:"スグリ"}
,"dido" : {v:"ダイドー", m:{"azur lane" : "ダイドー(HMS Dido)"}}
,"medusa" : {v:"メデューサ", m:{"fate grand order" : "メドゥーサ(ライダー)", "fate stay night" : "メドゥーサ(ライダー)", "kid icarus" : "冥界女王メデューサ", "ghost sweeper mikami" : "メドーサ"}}
,"mimi akane" : {v:"茜ミミ"}
,"arashi" : {v:"嵐"}
,"cure grace" : {v:"花寺のどか(キュアグレース)"}
,"eldridge" : {v:"エルドリッジ", m:{"azur lane" : "エルドリッジ(USS Eldridge)"}}
,"goblin slayer" : {v:"ゴブリンスレイヤー"}
,"kuroshio" : {v:"黒潮", m:{"azur lane" : "黒潮(IJN Kuroshio)"}}
,"mirai kasuga" : {v:"春日未来"}
,"rio momose" : {v:"百瀬莉緒"}
,"u-511" : {v:"U-511"}
,"chihiro kagami" : {v:"各務チヒロ"}
,"elise" : {v:"エリス", m:{"fire emblem" : "エリーゼ", "fire emblem fates" : "エリーゼ", "animal crossing" : "モンこ", "fire emblem heroes" : "エリーゼ"}}
,"hakufu sonsaku" : {v:"雪蓮(孫策 伯符)"}
,"i-58" : {v:"伊58", m:{"azur lane" : "伊58(IJN I58)"}}
,"leon" : {v:"レオン", m:{"the idolmaster" : "玲音", "pokemon" : "ダンデ"}}
,"megumu iizunamaru" : {v:"飯綱丸龍"}
,"miya miyao" : {v:"宮尾美也"}
,"yaichi kuzuryuu" : {v:"九頭竜八一"}
,"cure lovely" : {v:"愛乃めぐみ(キュアラブリー)"}
,"cure scarlet" : {v:"紅城トワ(キュアスカーレット)"}
,"i-26" : {v:"伊26", m:{"azur lane" : "伊26(IJN I26)"}}
,"zangoose" : {v:"ザングース"}
,"ditto" : {v:"メタモン"}
,"juri saijo" : {v:"西城樹里"}
,"kobayashi-san" : {v:"小林さん"}
,"samidare" : {v:"五月雨"}
,"shigure mayoi" : {v:"間宵シグレ"}
,"shikamaru nara" : {v:"奈良シカマル"}
,"soga no tojiko" : {v:"蘇我屠自古"}
,"fuuka aikiyo" : {v:"愛清フウカ"}
,"hayashimo" : {v:"早霜"}
,"hornet" : {v:"ホーネット", m:{"kantai collection" : "Hornet(ホーネット)", "azur lane" : "ホーネット(USS Hornet)"}}
,"i-8" : {v:"伊8"}
,"sazanami" : {v:"漣"}
,"wicke" : {v:"ビッケ"}
,"aglaea" : {v:"アグライア"}
,"amagi" : {v:"天城", m:{"azur lane" : "天城(IJN Amagi)"}}
,"cure fortune" : {v:"氷川いおな(キュアフォーチュン)"}
,"hatsune kashiwazaki" : {v:"柏崎初音"}
,"serina sumi" : {v:"鷲見セリナ"}
,"todomatsu matsuno" : {v:"松野トド松"}
,"vert" : {v:"ベール(グリーンハート)"}
,"cure soleil" : {v:"天宮えれな(キュアソレイユ)"}
,"flonne" : {v:"フロン"}
,"kurumi" : {v:"クルミ", m:{"steel angel kurumi" : "くるみ", "murenase seton gakuen" : "猫米クルミ"}}
,"yuika mitsumine" : {v:"三峰結華"}
,"catura" : {v:"シャトラ"}
,"ike" : {v:"アイク", m:{"animal crossing" : "ダイク"}}
,"mary stuart" : {v:"メアリ"}
,"carmine" : {v:"カーマイン", m:{"pokemon" : "ゼイユ"}}
,"miyako hoshino" : {v:"星野みやこ"}
,"satsuki" : {v:"皐月", m:{"blue archive" : "京極サツキ", "quiz magic academy" : "サツキ", "my neighbor totoro" : "サツキ"}}
,"yuuna akashi" : {v:"明石裕奈"}
,"hammann" : {v:"ハムマン", m:{"azur lane" : "ハムマン(USS Hammann)"}}
,"rumi akeshiro" : {v:"朱城ルミ"}
,"shikinami" : {v:"敷波"}
,"temari tsukimura" : {v:"月村手毬"}
,"cinderace" : {v:"エースバーン"}
,"dunkerque" : {v:"ダンケルク", m:{"azur lane" : "ダンケルク(MNF Dunkerque)"}}
,"kaya shiranui" : {v:"不知火カヤ"}
,"kearsarge" : {v:"キアサージ", m:{"azur lane" : "キアサージ(USS Kearsarge)"}}
,"rui" : {v:"ルイ", m:{"dream c club" : "るい"}}
,"amuro ray" : {v:"アムロ・レイ"}
,"chikuma" : {v:"筑摩", m:{"azur lane" : "筑摩(IJN Chikuma)"}}
,"keith" : {v:"ケイト"}
,"yoshimi ibaragi" : {v:"伊原木ヨシミ"}
,"chisame hasegawa" : {v:"長谷川千雨"}
,"chitose" : {v:"千歳", m:{"azur lane" : "千歳(IJN Chitose)"}}
,"new jersey" : {v:"ニュージャージー", m:{"azur lane" : "ニュージャージー(USS New Jersey)"}}
,"roon" : {v:"ローン", m:{"azur lane" : "ローン(KMS Roon)"}}
,"shuro yabuki" : {v:"箭吹シュロ"}
,"vulpix" : {v:"ロコン"}
,"white heart" : {v:"ホワイトハート(ブラン)"}
,"yura" : {v:"由良", m:{"azur lane" : "由良(IJN Yura)"}}
,"chiyo shirayuki" : {v:"白雪千夜"}
,"delphox" : {v:"マフォクシー"}
,"elma" : {v:"エルマ"}
,"kasumi kirihara" : {v:"霧原かすみ"}
,"lily white" : {v:"リリーホワイト"}
,"marina" : {v:"マリーナ", m:{"pokemon" : "マリン", "animal crossing" : "タコリーナ"}}
,"myoukou" : {v:"妙高", m:{"azur lane" : "妙高(IJN Myōkō)"}}
,"tsunami" : {v:"津名魅"}
,"asuka ninomiya" : {v:"二宮飛鳥"}
,"ayaka yukihiro" : {v:"雪広あやか"}
,"chiharu mihara" : {v:"三原千春"}
,"qingyi" : {v:"青衣"}
,"brock" : {v:"ブロック", m:{"pokemon" : "タケシ"}}
,"mine aomori" : {v:"蒼森ミネ"}
,"mirei hayasaka" : {v:"早坂美玲"}
,"tashkent" : {v:"タシュケント", m:{"kantai collection" : "Ташкент(タシュケント)", "azur lane" : "タシュケント(SN Tashkent)"}}
,"absol" : {v:"アブソル"}
,"daisy" : {v:"デイジー", m:{"animal crossing" : "バニラ", "flower knight girl" : "デージー"}}
,"indomitable" : {v:"インドミタブル", m:{"azur lane" : "インドミタブル(HMS Indomitable)"}}
,"naoko yanagisawa" : {v:"柳沢奈緒子"}
,"penny" : {v:"ペニー", m:{"pokemon" : "ボタン"}}
,"subaru nagayoshi" : {v:"永吉昴"}
,"tenzou crossunite" : {v:"点蔵・クロスユナイト"}
,"watatsuki no toyohime" : {v:"綿月豊姫"}
,"cherry" : {v:"チェリー", m:{"urusei yatsura" : "錯乱坊", "animal crossing" : "ハンナ"}}
,"ilya ornstein" : {v:"イリヤ・オーンスタイン"}
,"lance" : {v:"ランス", m:{"pokemon" : "ワタル"}}
,"marina ikekura" : {v:"池倉マリナ"}
,"yukari kadenokouji" : {v:"勘解由小路ユカリ"}
,"cleveland" : {v:"クリーブランド", m:{"azur lane" : "クリーブランド(USS Cleveland)"}}
,"cure ace" : {v:"円亜久里(キュアエース)"}
,"drang" : {v:"ドランク"}
,"hina araki" : {v:"荒木比奈"}
,"mochizuki" : {v:"望月"}
,"olivia" : {v:"オリビア", m:{"pokemon" : "ライチ"}}
,"societte" : {v:"ソシエ"}
,"alexandrina sebastiane" : {v:"アレクサンドリナ・セバスチャン"}
,"cure etoile" : {v:"輝木ほまれ(キュアエトワール)"}
,"cure precious" : {v:"和実ゆい(キュアプレシャス)"}
,"i-168" : {v:"伊168", m:{"azur lane" : "伊168(IJN I168)"}}
,"mightyena" : {v:"グラエナ"}
,"momoyo himemushi" : {v:"姫虫百々世"}
,"phoebe" : {v:"フィービー", m:{"pokemon" : "フヨウ", "granblue fantasy" : "ヴェトル"}}
,"reijo kayama" : {v:"鹿山レイジョ"}
,"alsace" : {v:"アルザス", m:{"azur lane" : "アルザス(FFNF Alsace)"}}
,"amy" : {v:"アミー", m:{"pokemon" : "ウッチー"}}
,"cure summer" : {v:"夏海まなつ(キュアサマー)"}
,"furutaka" : {v:"古鷹", m:{"azur lane" : "古鷹(IJN Furutaka)"}}
,"gotland" : {v:"ゴトランド", m:{"kantai collection" : "Gotland(ゴトランド)"}}
,"kaho kuwakami" : {v:"桑上カホ"}
,"machamp" : {v:"カイリキー"}
,"anby demara" : {v:"アンビー・デマラ"}
,"brendan" : {v:"ユウキ"}
,"cure la mer" : {v:"ローラ(キュアラメール)"}
,"hecatia lapislazuli" : {v:"ヘカーティア・ラピスラズリ"}
,"merlin prismriver" : {v:"メルラン・プリズムリバー"}
,"ning hai" : {v:"寧海(ROC Ning Hai)"}
,"reshiram" : {v:"レシラム"}
,"riolu" : {v:"リオル"}
,"colorado" : {v:"コロラド", m:{"kantai collection" : "Colorado(コロラド)", "azur lane" : "コロラド(USS Colorado)"}}
,"courtney" : {v:"コートニー", m:{"pokemon" : "カガリ"}}
,"emily stewart" : {v:"エミリー スチュアート"}
,"misuzu hataya" : {v:"秦谷美鈴"}
,"yuniko kouzuki" : {v:"上月由仁子(スカーレット・レイン)"}
,"chen hai" : {v:"鎮海", m:{"azur lane" : "鎮海(ROC Chen Hai)"}}
,"cure spicy" : {v:"芙羽ここね(キュアスパイシー)"}
,"hanae asagao" : {v:"朝顔ハナエ"}
,"hilbert" : {v:"ヒルベルト", m:{"pokemon" : "トウヤ"}}
,"kotori toyomi" : {v:"豊見コトリ"}
,"mahira" : {v:"マキラ"}
,"mao arimura" : {v:"有村麻央"}
,"matsuwa" : {v:"松輪"}
,"michishio" : {v:"満潮(IJN Michishio)"}
,"milky rose" : {v:"美々野くるみ(ミルキィローズ)"}
,"niyon" : {v:"ニオ"}
,"tsurugi kensaki" : {v:"剣先ツルギ"}
,"camieux" : {v:"クムユ"}
,"chimata tenkyuu" : {v:"天弓千亦"}
,"chitose kurosaki" : {v:"黒埼ちとせ"}
,"cure felice" : {v:"花海ことは(キュアフェリーチェ)"}
,"cure lillian" : {v:"猫屋敷まゆ(キュアリリアン)"}
,"green heart" : {v:"グリーンハート(ベール)"}
,"tsushima" : {v:"対馬"}
,"airi kurimura" : {v:"栗村アイリ"}
,"cure butterfly" : {v:"聖あげは(キュアバタフライ)"}
,"hyuuga" : {v:"日向", m:{"azur lane" : "日向(IJN Hyūga)"}}
,"kazuto hongou" : {v:"北郷一刀"}
,"megu shimokura" : {v:"下倉メグ"}
,"mizuki kawashima" : {v:"川島瑞樹"}
,"pegasus seiya" : {v:"ペガサス星矢"}
,"reika kitakami" : {v:"北上麗花"}
,"sarah" : {v:"サラ", m:{"pokemon" : "スイ"}}
,"zeraora" : {v:"ゼラオラ"}
,"black heart" : {v:"ブラックハート(ノワール)"}
,"guild girl" : {v:"受付嬢"}
,"haruna saotome" : {v:"早乙女ハルナ"}
,"hatsuyuki" : {v:"初雪"}
,"professor kukui" : {v:"ククイ博士"}
,"shinki" : {v:"神綺"}
,"allister" : {v:"アリスター", m:{"genshin impact" : "主人公(炎)", "pokemon" : "オニオン"}}
,"hotaru shiragiku" : {v:"白菊ほたる"}
,"kisume" : {v:"キスメ"}
,"michiru chidori" : {v:"千鳥ミチル"}
,"mikoto aketa" : {v:"緋田美琴"}
,"okina matara" : {v:"摩多羅隠岐奈"}
,"tamao suzumi" : {v:"涼水玉青"}
,"tsukuyo oono" : {v:"大野ツクヨ"}
,"altina orion" : {v:"アルティナ・オライオン"}
,"arisa ayase" : {v:"絢瀬亜里沙"}
,"bonnie" : {v:"ボニー", m:{"pokemon" : "ユリーカ"}}
,"cure bloom" : {v:"日向咲(キュアブルーム)"}
,"gentoku ryuubi" : {v:"桃香(劉備 玄徳)"}
,"hayasui" : {v:"速吸"}
,"junyou" : {v:"隼鷹", m:{"azur lane" : "隼鷹(IJN Jun'yō)"}}
,"karen shinomiya" : {v:"篠宮可憐"}
,"lyrica prismriver" : {v:"リリカ・プリズムリバー"}
,"makigumo" : {v:"巻雲"}
,"meiling li" : {v:"李苺鈴"}
,"mogador" : {v:"モガドール", m:{"kantai collection" : "Mogador(モガドール)", "azur lane" : "モガドール(MNF Mogador)"}}
,"prier" : {v:"プリエ"}
,"tamaki ogami" : {v:"大神環"}
,"fumizuki" : {v:"文月", m:{"azur lane" : "文月(IJN Fumizuki)"}}
,"klara" : {v:"クララ"}
,"kuma" : {v:"球磨", m:{"persona 4" : "クマ", "tekken" : "クマ"}}
,"shiryuu chouun" : {v:"星(趙雲 子龍)"}
,"zebstrika" : {v:"ゼブライカ"}
,"kutaka niwatari" : {v:"庭渡久侘歌"}
,"lily" : {v:"リリィ", m:{"animal crossing" : "レイニー"}}
,"lugia" : {v:"ルギア"}
,"matsuri tokugawa" : {v:"徳川まつり"}
,"ping hai" : {v:"平海", m:{"azur lane" : "平海(ROC Ping Hai)"}}
,"snivy" : {v:"ツタージャ"}
,"acerola" : {v:"アセロラ"}
,"akari kazemiya" : {v:"風宮あかり"}
,"ako izumi" : {v:"和泉亜子"}
,"august von parseval" : {v:"アウグスト・フォン・パーセヴァル", m:{"azur lane" : "アウグスト・フォン・パーセヴァル(KMS August von Parseval)"}}
,"cure whip" : {v:"宇佐美いちか(キュアホイップ)"}
,"deutschland" : {v:"ドイッチュラント", m:{"azur lane" : "ドイッチュラント(KMS Deutschland)"}}
,"elizabeth" : {v:"エリザベス"}
,"hare omagari" : {v:"小鈎ハレ"}
,"i-13" : {v:"伊13(IJN I13)"}
,"koito fukumaru" : {v:"福丸小糸"}
,"lucas" : {v:"ルーカス", m:{"pokemon" : "コウキ", "re zero kara hajimeru isekai seikatsu" : "リュカ"}}
,"nichika nanakusa" : {v:"七草にちか"}
,"niko" : {v:"ニコ"}
,"queen elizabeth" : {v:"クイーン・エリザベス", m:{"azur lane" : "クイーン・エリザベス(HMS Queen Elizabeth)"}}
,"rei shijo" : {v:"士条怜"}
,"richelieu" : {v:"リシュリュー", m:{"kantai collection" : "Richelieu(リシュリュー)", "azur lane" : "リシュリュー(FFNF Richelieu)"}}
,"shouhou" : {v:"祥鳳", m:{"azur lane" : "祥鳳(IJN Shōhō)"}}
,"z46" : {v:"Z46(KMS Z46)"}
,"chiyoda" : {v:"千代田", m:{"azur lane" : "千代田(IJN Chiyoda)", "oshiro project" : "千代田城"}}
,"kana yabuki" : {v:"矢吹可奈"}
,"kaori" : {v:"カオリ", m:{"azumanga daioh" : "かおりん", "super real mahjong" : "香織", "persona 2" : "香", "generation of chaos" : "香莉"}}
,"littorio" : {v:"リットリオ", m:{"kantai collection" : "Littorio(リットリオ)", "azur lane" : "リットリオ(RN Littorio)"}}
,"umikaze" : {v:"海風", m:{"azur lane" : "海風(IJN Umikaze)"}}
,"victor" : {v:"ヴィクトル", m:{"pokemon" : "マサル"}}
,"whitney" : {v:"ホイットニー", m:{"pokemon" : "アカネ", "animal crossing" : "ビアンカ"}}
,"azuma" : {v:"吾妻(IJN Azuma)"}
,"horizon ariadust" : {v:"ホライゾン・アリアダスト"}
,"lilja katsuragi" : {v:"葛城リーリヤ"}
,"pamiat merkuria" : {v:"パーミャチ・メルクーリヤ", m:{"azur lane" : "パーミャチ・メルクーリヤ(SN Pamiat Merkuria)"}}
,"yuko hori" : {v:"堀裕子"}
,"admiral graf spee" : {v:"アドミラル・グラーフ・シュペー", m:{"azur lane" : "アドミラル・グラーフ・シュペー(KMS Admiral Graf Spee)"}}
,"akira kiyosumi" : {v:"清澄アキラ"}
,"chika yokoyama" : {v:"横山千佳"}
,"cure egret" : {v:"美翔舞(キュアイーグレット)"}
,"eri" : {v:"エリ", m:{"pokemon" : "ビワ"}}
,"goodra" : {v:"ヌメルゴン"}
,"kawakaze" : {v:"江風", m:{"azur lane" : "江風(IJN Kawakaze)"}}
,"kiso" : {v:"木曾"}
,"machoke" : {v:"ゴーリキー"}
,"monika weisswind" : {v:"モニカ・ヴァイスヴィント"}
,"oyashio" : {v:"親潮", m:{"azur lane" : "親潮(IJN Oyashio)"}}
,"prince of wales" : {v:"プリンス・オブ・ウェールズ", m:{"azur lane" : "プリンス・オブ・ウェールズ(HMS Prince of Wales)"}}
,"ranger" : {v:"レンジャー", m:{"kantai collection" : "Ranger(レンジャー)", "azur lane" : "レンジャー(USS Ranger)"}}
,"roxanne" : {v:"ロクサーヌ", m:{"pokemon" : "ツツジ", "kyonyuu fantasy" : "ロクサーヌ・ド・デジール"}}
,"vanilla h" : {v:"ヴァニラ・H"}
,"yuuma toutetsu" : {v:"饕餮尤魔"}
,"ajax" : {v:"エイジャックス", m:{"azur lane" : "エイジャックス(HMS Ajax)"}}
,"chihiro fujimi" : {v:"藤見千尋"}
,"cure fontaine" : {v:"沢泉ちゆ(キュアフォンテーヌ)"}
,"ein" : {v:"アイン"}
,"medicine melancholy" : {v:"メディスン・メランコリー"}
,"reno" : {v:"レノ", m:{"azur lane" : "リノ(USS Reno)"}}
,"villager" : {v:"村人"}
,"chachamaru karakuri" : {v:"絡繰茶々丸"}
,"freya" : {v:"フレイヤ", m:{"animal crossing" : "ツンドラ", "valkyrie profile" : "フレイア"}}
,"friedrich der grosse" : {v:"フリードリヒ・デア・グローセ", m:{"azur lane" : "フリードリヒ・デア・グローセ(KMS Friedrich der Grosse)"}}
,"kasumi kinugawa" : {v:"鬼怒川カスミ"}
,"roxie" : {v:"ロキシー", m:{"pokemon" : "ホミカ"}}
,"sai" : {v:"サイ", m:{"koihime musou" : "祭"}}
,"sumomo" : {v:"スモモ"}
,"xp-tan" : {v:"XPたん"}
,"yachie kicchou" : {v:"吉弔八千慧"}
,"arcanine" : {v:"ウインディ"}
,"cure custard" : {v:"有栖川ひまり(キュアカスタード)"}
,"fuuko kurasaki" : {v:"倉崎楓子(スカイ・レイカー)"}
,"jasmine" : {v:"ジャスミン", m:{"pokemon" : "ミカン"}}
,"kako" : {v:"加古", m:{"azur lane" : "加古(IJN Kako)"}}
,"kei shirogane" : {v:"白銀圭"}
,"koharu koga" : {v:"古賀小春"}
,"lacey" : {v:"タロ"}
,"noriko fukuda" : {v:"福田のり子"}
,"owari" : {v:"尾張(IJN Owari)"}
,"typhlosion" : {v:"バクフーン"}
,"cure nyammy" : {v:"猫屋敷ユキ(キュアニャミー)"}
,"iris heart" : {v:"アイリスハート(プルルート)"}
,"johnston" : {v:"ジョンストン", m:{"kantai collection" : "Johnston(ジョンストン)"}}
,"mimori mizuha" : {v:"水羽ミモリ"}
,"miyoi okunoda" : {v:"奥野田美宵"}
,"tweyen" : {v:"ソーン"}
,"vampire" : {v:"ヴァンパイア", m:{"azur lane" : "ヴァンパイア(HMS Vampire)", "etrian odyssey" : "闇の眷属"}}
,"aki yamato" : {v:"大和亜季"}
,"akiha ikebukuro" : {v:"池袋晶葉"}
,"albion" : {v:"アルビオン", m:{"azur lane" : "アルビオン(HMS Albion)"}}
,"benben tsukumo" : {v:"九十九弁々"}
,"hiyori harusaki" : {v:"春咲ひより"}
,"kinugasa" : {v:"衣笠", m:{"azur lane" : "衣笠(IJN Kinugasa)"}}
,"seika ijichi" : {v:"伊地知星歌"}
,"shiratsuyu" : {v:"白露", m:{"azur lane" : "白露(IJN Shiratsuyu)"}}
,"volo" : {v:"ウォロ"}
,"gengar" : {v:"ゲンガー"}
,"hajime fujiwara" : {v:"藤原肇"}
,"hood" : {v:"フッド", m:{"azur lane" : "フッド(HMS Hood)"}}
,"i-14" : {v:"伊14"}
,"lyra" : {v:"ライラ", m:{"pokemon" : "コトネ"}}
,"maki konuri" : {v:"小塗マキ"}
,"nier" : {v:"ニーア"}
,"brest" : {v:"ブレスト(FFNF Brest)"}
,"briar" : {v:"ブライア"}
,"ethan" : {v:"イーサン", m:{"pokemon" : "ヒビキ"}}
,"io hasekura" : {v:"支倉伊緒"}
,"lisia" : {v:"リシア", m:{"pokemon" : "ルチア"}}
,"morgan" : {v:"モーガン", m:{"pokemon" : "ルミタン"}}
,"ray" : {v:"レイ", m:{"pokemon" : "コウタ"}}
,"akari wanibuchi" : {v:"鰐渕アカリ"}
,"ark royal" : {v:"アーク・ロイヤル", m:{"kantai collection" : "Ark Royal(アークロイヤル)", "azur lane" : "アーク・ロイヤル(HMS Ark Royal)"}}
,"aunn komano" : {v:"高麗野あうん"}
,"chiyuri kurashima" : {v:"倉嶋千百合(ライム・ベル)"}
,"cure finale" : {v:"菓彩あまね(キュアフィナーレ)"}
,"cure wonderful" : {v:"犬飼こむぎ(キュアワンダフル)"}
,"eternity larva" : {v:"エタニティラルバ"}
,"garchomp" : {v:"ガブリアス"}
,"hatakaze" : {v:"旗風", m:{"azur lane" : "旗風(IJN Hatakaze)"}}
,"hatsuharu" : {v:"初春", m:{"azur lane" : "初春(IJN Hatsuharu)"}}
,"kirino nakatsukasa" : {v:"中務キリノ"}
,"kurumi ohnuma" : {v:"大沼くるみ"}
,"peter strasser" : {v:"ペーター・シュトラッサー(KMS Peter Strasser)"}
,"razor" : {v:"レザー", m:{"robopon" : "マーシャル", "swat kats" : "Jake Clawson(Razor)"}}
,"reed" : {v:"リード", m:{"pokemon" : "ツゲ"}}
,"renge fuwa" : {v:"不破レンゲ"}
,"cure friendly" : {v:"犬飼いろは(キュアフレンディ)"}
,"eri mizutani" : {v:"水谷絵理"}
,"ku fei" : {v:"古菲"}
,"miyuki" : {v:"深雪", m:{"azur lane" : "深雪(IJN Miyuki)"}}
,"pheromosa" : {v:"フェローチェ"}
,"professor juniper" : {v:"アララギ博士"}
,"sonomi daidouji" : {v:"大道寺園美"}
,"akira okouchi" : {v:"大河内アキラ"}
,"aurora" : {v:"オーロラ", m:{"azur lane" : "オーロラ(HMS Aurora)", "league of legends" : "Aurora"}}
,"cure coral" : {v:"涼村さんご(キュアコーラル)"}
,"fennekin" : {v:"フォッコ"}
,"hindenburg" : {v:"ヒンデンブルク", m:{"azur lane" : "ヒンデンブルク(KMS Hindenburg)"}}
,"lucy" : {v:"アザミ"}
,"lycanroc" : {v:"ルガルガン"}
,"niya amachi" : {v:"天地ニヤ"}
,"piper wheel" : {v:"パイパー・ウィール"}
,"shizuko kawawa" : {v:"河和シズコ"}
,"zorua" : {v:"ゾロア"}
,"ai" : {v:"アイ", m:{"yu-gi-oh vrains" : "Ai", "aria" : "愛野アイ", "popotan" : "あい"}}
,"asashimo" : {v:"朝霜"}
,"buizel" : {v:"ブイゼル"}
,"grace howard" : {v:"グレース・ハワード"}
,"grecale" : {v:"グレカーレ", m:{"kantai collection" : "Grecale(グレカーレ)"}}
,"haaselia" : {v:"ハーゼリーラ"}
,"maho himemiya" : {v:"姫宮真歩"}
,"ooshio" : {v:"大潮(IJN Ōshio)"}
,"sayoko takayama" : {v:"高山紗代子"}
,"sena himuro" : {v:"氷室セナ"}
,"tanikaze" : {v:"谷風", m:{"azur lane" : "谷風(IJN Tanikaze)"}}
,"yatsuhashi tsukumo" : {v:"九十九八橋"}
,"drowzee" : {v:"スリープ"}
,"genji" : {v:"ゲンジ", m:{"overwatch" : "島田源氏"}}
,"keiki haniyasushin" : {v:"埴安神袿姫"}
,"lamretta" : {v:"ラムレッダ"}
,"mayumi joutouguu" : {v:"杖刀偶磨弓"}
,"miriam" : {v:"ミリアム", m:{"pokemon" : "ミモザ"}}
,"suzume amano" : {v:"天野すずめ"}
,"yume kuchinashi" : {v:"梔子ユメ"}
,"abukuma" : {v:"阿武隈", m:{"azur lane" : "阿武隈(IJN Abukuma)"}}
,"akari tsujino" : {v:"辻野あかり"}
,"chise waraku" : {v:"和楽チセ"}
,"chizuru nikaido" : {v:"二階堂千鶴"}
,"hatsukaze" : {v:"初風"}
,"jade" : {v:"ジェイド", m:{"azur lane" : "ヤーデ(KMS Jade)"}}
,"junko akashi" : {v:"赤司ジュンコ"}
,"latias" : {v:"ラティアス"}
,"matsu" : {v:"松", m:{"dungeon meshi" : "マツ(ベニチドリ)", "sengoku basara" : "まつ"}}
,"natural harmonia gropius" : {v:"ナチュラル・ハルモニア・グロピウス(N)"}
,"satono nishida" : {v:"爾子田里乃"}
,"yukari tanizaki" : {v:"谷崎ゆかり"}
,"yumeko sakurai" : {v:"桜井夢子"}
,"isonami" : {v:"磯波"}
,"mina" : {v:"ミナ", m:{"pokemon" : "マツリカ", "granblue fantasy" : "マイム", "samurai spirits" : "真鏡名ミナ", "rage of bahamut" : "マイム"}}
,"minamo kurosawa" : {v:"黒沢みなも"}
,"narumi yatadera" : {v:"矢田寺成美"}
,"toraichi tamiya" : {v:"田宮寅一"}
,"yuu ishigami" : {v:"石上優"}
,"conte di cavour" : {v:"コンテ・ディ・カブール", m:{"kantai collection" : "Conte di Cavour(カブール)", "azur lane" : "コンテ・ディ・カブール(RN Conte di Cavour)"}}
,"cure sparkle" : {v:"平光ひなた(キュアスパークル)"}
,"cure wing" : {v:"夕凪ツバサ(キュアウィング)"}
,"harukaze" : {v:"春風"}
,"ise" : {v:"伊勢(IJN Ise)"}
,"kaede nagase" : {v:"長瀬楓"}
,"maikaze" : {v:"舞風"}
,"maruyu" : {v:"まるゆ"}
,"megumi morisato" : {v:"森里恵"}
,"takano morisato" : {v:"森里鷹乃"}
,"yoshiyuki terada" : {v:"寺田良幸"}
,"atsumi munakata" : {v:"棟方愛海"}
,"china kuramoto" : {v:"倉本千奈"}
,"guzma" : {v:"グズマ"}
,"hikozaemon otaki" : {v:"大滝彦左衛門"}
,"jervis" : {v:"ジャーヴィス", m:{"kantai collection" : "Jervis(ジャーヴィス)", "azur lane" : "ジャーヴィス(HMS Jervis)"}}
,"kerberos" : {v:"ケルベロス"}
,"papi" : {v:"パピ", m:{"animal crossing" : "オカッピ"}}
,"rino inosaki" : {v:"衣之咲璃乃"}
,"saki kurokoma" : {v:"驪駒早鬼"}
,"viola" : {v:"ビオラ"}
,"zinnia" : {v:"ジニア", m:{"pokemon" : "ヒガナ"}}
,"akitsushima" : {v:"秋津洲"}
,"cidala" : {v:"シンダラ"}
,"cure parfait" : {v:"キラ星シエル(キュアパルフェ)"}
,"floatzel" : {v:"フローゼル"}
,"kiawe" : {v:"カキ"}
,"rika" : {v:"リカ", m:{"pokemon" : "チリ"}}
,"roma" : {v:"ローマ", m:{"kantai collection" : "Roma(ローマ)", "azur lane" : "ローマ(RN Rome)"}}
,"sagiri" : {v:"狭霧"}
,"tokiko zaizen" : {v:"財前時子"}
,"cygnet" : {v:"シグニット", m:{"azur lane" : "シグニット(HMS Cygnet)"}}
,"gin tachibana" : {v:"立花・誾"}
,"hijiri mochizuki" : {v:"望月聖"}
,"mana tatsumiya" : {v:"龍宮真名"}
,"miyako izumo" : {v:"出雲宮子"}
,"nagara" : {v:"長良", m:{"azur lane" : "長良(IJN Nagara)"}}
,"natori" : {v:"名取", m:{"azur lane" : "名取(IJN Natori)"}}
,"bulbasaur" : {v:"フシギダネ"}
,"eve santaclaus" : {v:"イヴ・サンタクロース"}
,"hop" : {v:"ホップ"}
,"ikoma" : {v:"生駒"}
,"intrepid" : {v:"イントレピッド", m:{"kantai collection" : "Intrepid(イントレピッド)", "azur lane" : "イントレピッド(USS Intrepid)"}}
,"julia" : {v:"ジュリア", m:{"pokemon" : "フミコ"}}
,"kaori kyan" : {v:"喜屋武香織"}
,"kinu" : {v:"キヌ", m:{"kantai collection" : "鬼怒", "azur lane" : "鬼怒(IJN Kinu)"}}
,"luxray" : {v:"レントラー"}
,"mawile" : {v:"クチート"}
,"mizuho" : {v:"瑞穂"}
,"mudsdale" : {v:"バンバドロ"}
,"pa-san" : {v:"PAさん"}
,"sora hasegawa" : {v:"長谷川空"}
,"unzen" : {v:"雲仙", m:{"azur lane" : "雲仙(IJN Unzen)"}}
,"vittorio veneto" : {v:"ヴィットリオ・ヴェネト", m:{"azur lane" : "ヴィットリオ・ヴェネト(RN Vittorio Veneto)"}}
,"achilles" : {v:"アキリーズ", m:{"azur lane" : "アキリーズ(HMS Achilles)"}}
,"admiral hipper" : {v:"アドミラル・ヒッパー", m:{"azur lane" : "アドミラル・ヒッパー(KMS Admiral Hipper)"}}
,"ayame hamaguchi" : {v:"浜口あやめ"}
,"ayame yomogawa" : {v:"四方川菖蒲"}
,"cure flamingo" : {v:"滝沢あすか(キュアフラミンゴ)"}
,"honey" : {v:"ハニー", m:{"pokemon" : "ミツバ"}}
,"izumi ohishi" : {v:"大石泉"}
,"katy" : {v:"カティ", m:{"pokemon" : "カエデ"}}
,"majin buu" : {v:"魔人ブウ"}
,"manami kiba" : {v:"木場真奈美"}
,"mienshao" : {v:"コジョンド"}
,"nanami asari" : {v:"浅利七海"}
,"perth" : {v:"パース", m:{"kantai collection" : "Perth(パース)"}}
,"sims" : {v:"シムス(USS Sims)"}
,"caitlin" : {v:"ケイトリン", m:{"pokemon" : "カトレア"}}
,"emboar" : {v:"エンブオー"}
,"hamanami" : {v:"浜波"}
,"jingei" : {v:"迅鯨"}
,"kotoka saionji" : {v:"西園寺琴歌"}
,"luca ikaruga" : {v:"斑鳩ルカ"}
,"madoka kugimiya" : {v:"釘宮円"}
,"misato aikawa" : {v:"愛川美里"}
,"nemuno sakata" : {v:"坂田ネムノ"}
,"north carolina" : {v:"ノースカロライナ", m:{"azur lane" : "ノースカロライナ(USS North Carolina)"}}
,"okinami" : {v:"沖波"}
,"suzukaze" : {v:"涼風"}
,"takane miyoshi" : {v:"三善タカネ"}
,"candice" : {v:"キャンディス", m:{"pokemon" : "スズナ"}}
,"cure yum-yum" : {v:"華満らん(キュアヤムヤム)"}
,"hakuryuu" : {v:"白龍", m:{"azur lane" : "白龍(IJN Hakuryu)"}}
,"juno" : {v:"ジュノー", m:{"azur lane" : "ジュノー(HMS Juno)", "overwatch" : "ジュノ", "fire emblem the binding blade" : "ユーノ", "beastars" : "ジュノ"}}
,"makoto hanuma" : {v:"羽沼マコト"}
,"mikasa" : {v:"三笠", m:{"azur lane" : "三笠(IJN Mikasa)"}}
,"noriko shiina" : {v:"椎名法子"}
,"professor oak" : {v:"オーキド博士"}
,"ryuuhou" : {v:"龍鳳", m:{"azur lane" : "龍鳳(IJN Ryūhō)"}}
,"von lycaon" : {v:"フォン・ライカン"}
,"yuzu kitami" : {v:"喜多見柚"}
,"gambier bay" : {v:"ガンビア・ベイ", m:{"kantai collection" : "Gambier Bay(ガンビア・ベイ)"}}
,"hau" : {v:"ハウ"}
,"maestrale" : {v:"マエストラーレ", m:{"kantai collection" : "Maestrale(マエストラーレ)", "azur lane" : "マエストラーレ(RN Maestrale)"}}
,"melleau" : {v:"メルゥ"}
,"nowaki" : {v:"野分", m:{"azur lane" : "野分(IJN Nowaki)"}}
,"prinz heinrich" : {v:"プリンツ・ハインリヒ", m:{"azur lane" : "プリンツ・ハインリヒ(KMS Prinz Heinrich)"}}
,"ralts" : {v:"ラルトス"}
,"sado" : {v:"佐渡"}
,"sarina matsumoto" : {v:"松本沙理奈"}
,"silver" : {v:"シルバー"}
,"arisa matsuda" : {v:"松田亜利沙"}
,"charlotte dizoard" : {v:"シャルロット・イゾアール"}
,"diantha" : {v:"カルネ"}
,"grace" : {v:"グレース", m:{"pokemon" : "サキ"}}
,"izumi shishidou" : {v:"獅子堂イズミ"}
,"kishinami" : {v:"岸波"}
,"minazuki" : {v:"水無月", m:{"azur lane" : "水無月(IJN Minazuki)"}}
,"monarch" : {v:"モナーク", m:{"azur lane" : "モナーク(HMS Monarch)"}}
,"nagusa goryou" : {v:"御稜ナグサ"}
,"reina koseki" : {v:"小関麗奈"}
,"scylla" : {v:"シラ", m:{"azur lane" : "シラ(HMS Scylla)"}}
,"soukaku" : {v:"蒼角"}
,"takanami" : {v:"高波"}
,"weavile" : {v:"ウェービー", m:{"pokemon" : "マニューラ"}}
,"yori kazemiya" : {v:"風宮より"}
,"yuka nakano" : {v:"中野有香"}
,"ai hidaka" : {v:"日高愛"}
,"chizuru naba" : {v:"那波千鶴"}
,"chuubou sonken" : {v:"蓮華(孫権 仲謀)"}
,"dendra" : {v:"デンドラ", m:{"pokemon" : "キハダ"}}
,"ekitoku chouhi" : {v:"鈴々(張飛 翼徳)"}
,"eriol hiiragizawa" : {v:"柊沢エリオル"}
,"jack" : {v:"ジャック", m:{"pokemon" : "カネコウジ"}}
,"kazagumo" : {v:"風雲", m:{"azur lane" : "風雲(IJN Kazagumo)"}}
,"malga naruze" : {v:"マルガ・ナルゼ"}
,"margot knight" : {v:"マルゴット・ナイト"}
,"mikuma" : {v:"三隈", m:{"azur lane" : "三隈(IJN Mikuma)"}}
,"natsuki kimura" : {v:"木村夏樹"}
,"shauntal" : {v:"シキミ"}
,"sumika shiun" : {v:"紫雲清夏"}
,"suzu mukai" : {v:"向井・鈴"}
,"vyrn" : {v:"ビィ"}
,"zahlhamelina" : {v:"ザルハメリナ"}
,"akino toudou" : {v:"藤堂秋乃"}
,"clemont" : {v:"クレモント", m:{"pokemon" : "シトロン"}}
,"corin wickes" : {v:"カリン・ウィクス"}
,"drum" : {v:"ドラム", m:{"kantai collection" : "Drum(ドラム)"}}
,"fujitaka kinomoto" : {v:"木之本藤隆"}
,"gangut" : {v:"ガングート", m:{"kantai collection" : "Гангут(ガングート)", "azur lane" : "ガングート(SN Gangut)"}}
,"gene" : {v:"ジーン", m:{"pokemon" : "ゲンゾウ"}}
,"hatsushimo" : {v:"初霜", m:{"azur lane" : "初霜(IJN Hatsushimo)"}}
,"honoka ayase" : {v:"綾瀬穂乃香"}
,"kazumi asakura" : {v:"朝倉和美"}
,"korrina" : {v:"コリナ", m:{"pokemon" : "コルニ"}}
,"masazumi honda" : {v:"本多・正純"}
,"muk" : {v:"ベトベトン"}
,"oleana" : {v:"オレアナ", m:{"pokemon" : "オリーヴ"}}
,"portland" : {v:"ポートランド", m:{"azur lane" : "ポートランド(USS Portland)"}}
,"risa kamizaki" : {v:"上崎裡沙"}
,"roco handa" : {v:"伴田路子(ロコ)"}
,"tien" : {v:"エッセル"}
,"toshiyuki aoshima" : {v:"青嶋紀元"}
,"elaine" : {v:"エレイン", m:{"pokemon" : "アユミ"}}
,"primarina" : {v:"アシレーヌ"}
,"rodney" : {v:"ロドニー", m:{"kantai collection" : "Rodney(ロドニー)", "azur lane" : "ロドニー(HMS Rodney)"}}
,"serperior" : {v:"ジャローダ"}
,"south dakota" : {v:"サウスダコタ", m:{"kantai collection" : "South Dakota(サウスダコタ)", "azur lane" : "サウスダコタ(USS South Dakota)"}}
,"ulrich von hutten" : {v:"ウルリッヒ・フォン・フッテン", m:{"azur lane" : "ウルリッヒ・フォン・フッテン(KMS Ulrich von Hutten)"}}
,"yukari ayase" : {v:"綾瀬ゆかり"}
,"yume narumiya" : {v:"成宮由愛"}
,"adele balfette" : {v:"アデーレ・バルフェット"}
,"ako tsuchiya" : {v:"土屋亜子"}
,"albacore" : {v:"アルバコア", m:{"azur lane" : "アルバコア(USS Albacore)"}}
,"anchorage" : {v:"アンカレッジ", m:{"azur lane" : "アンカレッジ(USS Anchorage)"}}
,"chang chun" : {v:"長春", m:{"azur lane" : "長春(PRAN Chang Chun)"}}
,"chapayev" : {v:"チャパエフ", m:{"azur lane" : "チャパエフ(SN Chapayev)"}}
,"coco" : {v:"ココ", m:{"animal crossing" : "やよい"}}
,"cucouroux" : {v:"ククル"}
,"gardenia" : {v:"ガーデニア", m:{"pokemon" : "ナタネ"}}
,"haruna kamijou" : {v:"上条春菜"}
,"hinata kinoshita" : {v:"木下ひなた"}
,"houndoom" : {v:"ヘルガー"}
,"hydreigon" : {v:"サザンドラ"}
,"jirachi" : {v:"ジラーチ"}
,"mashiro shizuyama" : {v:"静山マシロ"}
,"mima" : {v:"魅魔"}
,"natsumi murakami" : {v:"村上夏美"}
,"otogi" : {v:"オトギ"}
,"sakurako shiina" : {v:"椎名桜子"}
,"shanghai" : {v:"上海"}
,"solana" : {v:"ソラーナ", m:{"pokemon" : "ヒナタ"}}
,"u-47" : {v:"U-47", m:{"azur lane" : "U-47(KMS U-47)"}}
,"ben bigger" : {v:"ベン・ビガー"}
,"chiaki motomiya" : {v:"元宮チアキ"}
,"chika misumi" : {v:"三角千歌"}
,"chitose karasuma" : {v:"烏丸ちとせ", m:{"girlish number" : "烏丸千歳"}}
,"cure earth" : {v:"風鈴アスミ(キュアアース)"}
,"flannery" : {v:"フラネリ", m:{"pokemon" : "アスナ"}}
,"hatterene" : {v:"ブリムオン"}
,"hikaru nanjo" : {v:"南条光"}
,"mary cochran" : {v:"メアリー・コクラン"}
,"maya takahashi" : {v:"高橋麻耶"}
,"perseus" : {v:"パーシュース", m:{"azur lane" : "パーシュース(HMS Perseus)"}}
,"quilava" : {v:"マグマラシ"}
,"sayoko mishima" : {v:"三嶋沙夜子"}
,"uranami" : {v:"浦波", m:{"azur lane" : "浦波(IJN Uranami)"}}
,"veyle" : {v:"ヴェイル"}
,"anna hiiragi" : {v:"柊杏奈"}
,"bachou mouki" : {v:"翠(馬超 孟起)"}
,"clair" : {v:"クレア", m:{"pokemon" : "イブキ"}}
,"cure papaya" : {v:"一之瀬みのり(キュアパパイア)"}
,"fang" : {v:"ファング", m:{"arknights" : "フェン", "street fighter" : "ファン", "animal crossing" : "シベリア"}}
,"fuyutsuki" : {v:"冬月", m:{"neon genesis evangelion" : "冬月コウゾウ"}}
,"hiyou" : {v:"飛鷹", m:{"azur lane" : "飛鷹(IJN Hiyō)"}}
,"karin domyoji" : {v:"道明寺歌鈴"}
,"lind" : {v:"リンド", m:{"pokemon" : "リンキ"}}
,"nodoka amami" : {v:"天見ノドカ"}
,"rina fujimoto" : {v:"藤本里奈"}
,"russia" : {v:"ロシア"}
,"steenee" : {v:"アママイコ"}
,"yaya nanto" : {v:"南都夜々"}
,"akane nonohara" : {v:"野々原茜"}
,"cogita" : {v:"コギト"}
,"dragonite" : {v:"カイリュー"}
,"erika hatami" : {v:"旗見エリカ"}
,"essex" : {v:"エセックス", m:{"azur lane" : "エセックス(USS Essex)"}}
,"kaguya urushibara" : {v:"漆原カグヤ"}
,"kahili" : {v:"カヒリ"}
,"luigi torelli" : {v:"ルイージ・トレッリ", m:{"kantai collection" : "Luigi Torelli(ルイージ・トレッリ)"}}
,"makino yagami" : {v:"八神マキノ"}
,"misaki tamaizumi" : {v:"玉泉美咲"}
,"payila" : {v:"ハイラ"}
,"rapidash" : {v:"ギャロップ"}
,"reika shindai" : {v:"神代玲花"}
,"salazzle" : {v:"エンニュート"}
,"shinshuu maru" : {v:"神州丸"}
,"2k-tan" : {v:"2Kたん"}
,"ampharos" : {v:"デンリュウ"}
,"asakaze" : {v:"朝風"}
,"cotaro yazawa" : {v:"矢澤虎太郎"}
,"grusha" : {v:"グルーシャ"}
,"heidi" : {v:"ハイディ", m:{"alps no shoujo heidi" : "ハイジ"}}
,"hugh" : {v:"ヒュウ"}
,"janus" : {v:"ジェーナス", m:{"kantai collection" : "Janus(ジェーナス)", "azur lane" : "ジェーナス(HMS Janus)"}}
,"maria theresa" : {v:"マリア・テレサ"}
,"mei sakura" : {v:"佐倉愛衣"}
,"sakawa" : {v:"酒匂", m:{"azur lane" : "酒匂(IJN Sakawa)"}}
,"samurott" : {v:"ダイケンキ"}
,"seth lowell" : {v:"セス・ローウェル"}
,"sheffy" : {v:"シェフィ"}
,"victorious" : {v:"ヴィクトリアス", m:{"kantai collection" : "Victorious(ヴィクトリアス)", "azur lane" : "ヴィクトリアス(HMS Victorious)"}}
,"zekrom" : {v:"ゼクロム"}
,"arven" : {v:"アーベン", m:{"pokemon" : "ペパー"}}
,"decidueye" : {v:"ジュナイパー"}
,"dragon shiryu" : {v:"ドラゴン紫龍"}
,"drake" : {v:"ドレイク", m:{"pokemon" : "ゲンジ", "azur lane" : "ドレイク(HMS Drake)", "animal crossing" : "フォアグラ"}}
,"drasna" : {v:"ドラセナ"}
,"hobby" : {v:"ホビー", m:{"azur lane" : "ホビー(USS Hobby)"}}
,"koraidon" : {v:"コライドン"}
,"kuuka tomi" : {v:"遠見空花"}
,"latios" : {v:"ラティオス"}
,"london" : {v:"ロンドン", m:{"azur lane" : "ロンドン(HMS London)"}}
,"miranda" : {v:"ミランダ"}
,"momoka yuragi" : {v:"由良木モモカ"}
,"mona" : {v:"ミイム"}
,"newcastle" : {v:"ニューカッスル", m:{"azur lane" : "ニューカッスル(HMS Newcastle)"}}
,"raboot" : {v:"ラビフット"}
,"renown" : {v:"レナウン", m:{"azur lane" : "レナウン(HMS Renown)"}}
,"tama" : {v:"多摩", m:{"selector infected wixoss" : "タマ", "nyan koi" : "タマ"}}
,"tomoka wakabayashi" : {v:"若林智香"}
,"troubadour" : {v:"トルバドール", m:{"etrian odyssey" : "バード"}}
,"volga" : {v:"ヴォルガ", m:{"azur lane" : "ヴォルガ(SN Volga)"}}
,"anabel" : {v:"アナベル", m:{"pokemon" : "リラ"}}
,"audino" : {v:"タブンネ"}
,"clarice" : {v:"クラリス"}
,"hild" : {v:"ヒルド"}
,"juri ushimaki" : {v:"牛牧ジュリ"}
,"kent" : {v:"ケント", m:{"azur lane" : "ケント(HMS Kent)"}}
,"koleda belobog" : {v:"クレタ・ベロボーグ"}
,"lexington" : {v:"レキシントン", m:{"kantai collection" : "Lexington(レキシントン)", "azur lane" : "レキシントン(USS Lexington)"}}
,"lorelei" : {v:"ローレライ", m:{"pokemon" : "カンナ"}}
,"lurantis" : {v:"ラランテス"}
,"makura" : {v:"マコラ"}
,"mina konoe" : {v:"近衛ミナ"}
,"naho ebihara" : {v:"海老原菜帆"}
,"scorbunny" : {v:"ヒバニー"}
,"shinobu kamiki" : {v:"上喜しのぶ"}
,"shinobu kudo" : {v:"工藤忍"}
,"shinx" : {v:"コリンク"}
,"shun andromeda" : {v:"アンドロメダ瞬"}
,"swiftsure" : {v:"スウィフトシュア", m:{"azur lane" : "スウィフトシュア(HMS Swiftsure)"}}
,"takane d. goodman" : {v:"高音・D・グッドマン"}
,"touma amagase" : {v:"天ヶ瀬冬馬"}
,"tuscaloosa" : {v:"タスカルーサ", m:{"kantai collection" : "Tuscaloosa(タスカルーサ)"}}
,"viktoriya ivanovna serebryakov" : {v:"ヴィクトーリヤ・イヴァーノヴナ・セレブリャコーフ"}
,"arceus" : {v:"アルセウス"}
,"arisa mochida" : {v:"持田亜里沙"}
,"bond forger" : {v:"ボンド・フォージャー"}
,"cheryl" : {v:"シェリル", m:{"pokemon" : "モミ"}}
,"chiyari tenkajin" : {v:"天火人ちやり"}
,"cure majesty" : {v:"プリンセス・エル(キュアマジェスティ)"}
,"drayton" : {v:"カキツバタ"}
,"feraligatr" : {v:"オーダイル"}
,"flint" : {v:"フリント", m:{"pokemon" : "オーバ"}}
,"futari gotou" : {v:"後藤ふたり"}
,"futayo honda" : {v:"本多・二代"}
,"impidimp" : {v:"ベロバー"}
,"indianapolis" : {v:"インディアナポリス", m:{"azur lane" : "インディアナポリス(USS Indianapolis)"}}
,"kray foresight" : {v:"クレイ・フォーサイト"}
,"meowstic" : {v:"ニャオニクス"}
,"misa kakizaki" : {v:"柿崎美砂"}
,"nagisa aoi" : {v:"蒼井渚砂"}
,"nagisa kashiwagi" : {v:"柏木渚"}
,"nidoking" : {v:"ニドキング"}
,"raichu" : {v:"ライチュウ"}
,"regensburg" : {v:"レーゲンスブルク", m:{"azur lane" : "レーゲンスブルク(KMS Regensburg)"}}
,"saya yakushi" : {v:"薬子サヤ"}
,"shimushu" : {v:"占守"}
,"sunny" : {v:"サニー", m:{"pokemon" : "ニチオ"}}
,"yukari ayatsuji" : {v:"絢辻縁"}
,"ayane hojo" : {v:"北条綾音"}
,"compa" : {v:"コンパちゃん"}
,"elbe" : {v:"エルベ", m:{"azur lane" : "エルベ(KMS Elbe)"}}
,"gladion" : {v:"グラジオ"}
,"hacka doll no.2" : {v:"ハッカドール2号"}
,"i-400" : {v:"伊400"}
,"if" : {v:"アイエフちゃん"}
,"kat" : {v:"グラビティ・キトゥン"}
,"momiji akiizumi" : {v:"秋泉モミジ"}
,"moutoku sousou" : {v:"華琳(曹操 孟徳)"}
,"nidoqueen" : {v:"ニドクイン"}
,"ninetales" : {v:"キュウコン"}
,"tangrowth" : {v:"モジャンボ"}
,"umika satohama" : {v:"里浜ウミカ"}
,"yukino aihara" : {v:"相原雪乃"}
,"arthur" : {v:"アーサー", m:{"pokemon" : "モクオ"}}
,"azuki momoi" : {v:"桃井あずき"}
,"billy the kid" : {v:"ビリー・ザ・キッド", m:{"zenless zone zero" : "ビリー・キッド"}}
,"cheren" : {v:"チェレン"}
,"flygon" : {v:"フライゴン"}
,"fortune" : {v:"フォーチュン(HMS Fortune)"}
,"giratina" : {v:"ギラティナ"}
,"gneisenau" : {v:"グナイゼナウ", m:{"azur lane" : "グナイゼナウ(KMS Gneisenau)"}}
,"harper" : {v:"ハーパー", m:{"pokemon" : "ホウ"}}
,"helena" : {v:"ヘレナ", m:{"kantai collection" : "Helena(ヘレナ)", "pokemon" : "ヒマワリ", "azur lane" : "ヘレナ(USS Helena)", "dead or alive" : "エレナ・ダグラス"}}
,"houston" : {v:"ヒューストン", m:{"kantai collection" : "Houston(ヒューストン)", "azur lane" : "ヒューストン(USS Houston)"}}
,"long island" : {v:"ロング・アイランド", m:{"azur lane" : "ロング・アイランド(USS Long Island)"}}
,"marller" : {v:"マーラー"}
,"nagatsuki" : {v:"長月", m:{"azur lane" : "長月(IJN Nagatsuki)"}}
,"palina" : {v:"パウリナ", m:{"pokemon" : "ガラナ"}}
,"rosie" : {v:"ロジー", m:{"pokemon" : "ラプラ"}}
,"ruby moon" : {v:"ルビー・ムーン(秋月奈久留)"}
,"saint louis" : {v:"サン・ルイ", m:{"azur lane" : "サン・ルイ(FFNF Saint-Louis)"}}
,"satomi sakakibara" : {v:"榊原里美"}
,"sprigatito" : {v:"ニャオハ"}
,"tamami wakiyama" : {v:"脇山珠美"}
,"tirpitz" : {v:"ティルピッツ", m:{"azur lane" : "ティルピッツ(KMS Tirpitz)"}}
,"chao lingshen" : {v:"超鈴音"}
,"cherino renkawa" : {v:"連河チェリノ"}
,"chiaki kurokawa" : {v:"黒川千秋"}
,"feower" : {v:"カトル"}
,"fuka asano" : {v:"浅野風香"}
,"hirato" : {v:"平戸"}
,"hiromi seki" : {v:"関裕美"}
,"kana imai" : {v:"今井加奈"}
,"kikuzuki" : {v:"菊月"}
,"litten" : {v:"ニャビー"}
,"mii" : {v:"みい"}
,"mimlemel" : {v:"ミムルメモル"}
,"ryo matsunaga" : {v:"松永涼"}
,"soldier 11" : {v:"「11号」"}
,"takane yamashiro" : {v:"山城たかね"}
,"tepig" : {v:"ポカブ"}
,"tomoe murakami" : {v:"村上巴"}
,"urshifu" : {v:"ウーラオス"}
,"washington" : {v:"ワシントン", m:{"kantai collection" : "Washington(ワシントン)", "azur lane" : "ワシントン(USS Washington)"}}
,"bede" : {v:"ビート"}
,"chizuru matsuo" : {v:"松尾千鶴"}
,"evelyn" : {v:"ルスワール"}
,"firefox-tan" : {v:"ふぉくす子"}
,"geeta" : {v:"ギータ", m:{"pokemon" : "オモダカ"}}
,"hachijou" : {v:"八丈"}
,"jean bart" : {v:"ジャン・バール", m:{"kantai collection" : "Jean Bart(ジャン・バール)", "azur lane" : "ジャン・バール(MNF Jean Bart)"}}
,"kimura" : {v:"木村先生"}
,"kouchuu kanshou" : {v:"紫苑(黄忠 漢升)"}
,"lenora" : {v:"レノラ", m:{"pokemon" : "アロエ"}}
,"maryland" : {v:"メリーランド", m:{"kantai collection" : "Maryland(メリーランド)", "azur lane" : "メリーランド(USS Maryland)"}}
,"matsukaze" : {v:"松風", m:{"azur lane" : "松風(IJN Matsukaze)"}}
,"obstagoon" : {v:"タチフサグマ"}
,"pina asahina" : {v:"朝比奈フィーナ"}
,"ruby" : {v:"ルビー", m:{"fate kaleid liner prisma illya" : "マジカルルビー", "animal crossing" : "ルナ", "rwby" : "ルビー・ローズ", "final fantasy ix" : "ルビィ", "lunar eternal blue" : "ルビィ", "unlimited saga" : "ルビィ"}}
,"ruka tachiarai" : {v:"太刀洗流夏"}
,"shaymin" : {v:"シェイミ"}
,"tomo mikuma" : {v:"御久間智"}
,"wakaba" : {v:"若葉", m:{"azur lane" : "若葉(IJN Wakaba)", "kemurikusa" : "わかば"}}
,"barawa" : {v:"バロワ"}
,"bayleef" : {v:"ベイリーフ"}
,"charmander" : {v:"ヒトカゲ"}
,"duke of york" : {v:"デューク・オブ・ヨーク", m:{"azur lane" : "デューク・オブ・ヨーク(HMS Duke of York)"}}
,"georgia" : {v:"ジョージア", m:{"pokemon" : "ラングレー", "azur lane" : "ジョージア(USS Georgia)"}}
,"hacka doll no.1" : {v:"ハッカドール1号"}
,"hayashio" : {v:"早潮"}
,"hermione" : {v:"ハーマイオニー", m:{"azur lane" : "ハーマイオニー(HMS Hermione)"}}
,"ishigaki" : {v:"石垣"}
,"kazuno" : {v:"鹿角"}
,"kobayashi" : {v:"小林さん", m:{"knights of sidonia" : "小林"}}
,"koumei shokatsuryou" : {v:"朱里(諸葛亮 孔明)"}
,"lily black" : {v:"リリーブラック"}
,"norman" : {v:"ノーマン", m:{"pokemon" : "センリ"}}
,"raika" : {v:"ライカ"}
,"rumi wakui" : {v:"和久井留美"}
,"shinyou" : {v:"神鷹"}
,"tangela" : {v:"モンジャラ"}
,"utaha shiraishi" : {v:"白石ウタハ"}
,"wanda" : {v:"ワンダ", m:{"pokemon" : "ミチル"}}
,"ai ebihara" : {v:"海老原あい", m:{"ai mai mi" : "蛯原愛"}}
,"akemi kurihama" : {v:"栗浜アケミ"}
,"anya cocolova" : {v:"アンナ・ココロウァ"}
,"aquila" : {v:"アクィラ", m:{"kantai collection" : "Aquila(アクィラ)", "azur lane" : "アクィラ(RN Aquila)"}}
,"aya" : {v:"亜夜", m:{"pokemon" : "アヤ", "selector infected wixoss" : "あや"}}
,"bruno" : {v:"ブルーノ", m:{"pokemon" : "シバ"}}
,"chikorita" : {v:"チコリータ"}
,"fraux" : {v:"フラウ"}
,"gloucester" : {v:"グロスター", m:{"azur lane" : "グロスター(HMS Gloucester)"}}
,"helen" : {v:"ヘレン"}
,"joey" : {v:"ジョー", m:{"animal crossing" : "リチャード"}}
,"kalk" : {v:"カーク", m:{"azur lane" : "カーク(USS Kalk)"}}
,"king george v" : {v:"キング・ジョージ5世(HMS King George V)"}
,"kotaro inugami" : {v:"犬上小太郎"}
,"kunashiri" : {v:"国後"}
,"lilligant" : {v:"ドレディア"}
,"luxio" : {v:"ルクシオ"}
,"lyon" : {v:"リヨン", m:{"azur lane" : "リヨン(FFNF Lyon)", "suikoden v" : "リオン"}}
,"marguerite pistail" : {v:"マルグリット・ピステール"}
,"matt" : {v:"マット", m:{"pokemon" : "ウシオ"}}
,"mew" : {v:"ミュウ"}
,"minori yasumori" : {v:"安守ミノリ"}
,"noa takamine" : {v:"高峯のあ"}
,"rockruff" : {v:"イワンコ"}
,"san diego" : {v:"サンディエゴ", m:{"azur lane" : "サンディエゴ(USS San Diego)"}}
,"sariel" : {v:"サリエル", m:{"touhou project" : "Sariel"}}
,"shaman" : {v:"シャーマン"}
,"snorlax" : {v:"カビゴン"}
,"solgaleo" : {v:"ソルガレオ"}
,"steve" : {v:"スティーブ"}
,"tauros" : {v:"ケンタロス"}
,"tora" : {v:"トラ", m:{"ushio to tora" : "とら"}}
,"toxtricity" : {v:"ストリンダー"}
,"ukuru" : {v:"鵜来"}
,"yuki nijimura" : {v:"虹村雪"}
,"adaman" : {v:"アダマン", m:{"pokemon" : "セキ"}}
,"bill" : {v:"ビル", m:{"pokemon" : "マサキ", "animal crossing" : "ピータン"}}
,"charmeleon" : {v:"リザード"}
,"ciony regis" : {v:"シオニー・レジス"}
,"ekans" : {v:"アーボ"}
,"fukae" : {v:"福江"}
,"gordie" : {v:"ゴーディ", m:{"pokemon" : "マクワ"}}
,"gothitelle" : {v:"ゴチルゼル"}
,"hapu" : {v:"ハプウ"}
,"hinako kita" : {v:"喜多日菜子"}
,"hokuto ijuuin" : {v:"伊集院 北斗"}
,"indeedee" : {v:"イエッサン"}
,"inteleon" : {v:"インテレオン"}
,"iron valiant" : {v:"テツノブジン"}
,"kanae itou" : {v:"伊藤香苗"}
,"meowth" : {v:"ニャース"}
,"mifuyu ogami" : {v:"大神美冬"}
,"mikazuki" : {v:"三日月", m:{"azur lane" : "三日月(IJN Mikazuki)"}}
,"milotic" : {v:"ミロカロス"}
,"miyo harada" : {v:"原田美世"}
,"mizuchi miyadeguchi" : {v:"宮出口瑞霊"}
,"nekomata" : {v:"猫又", m:{"zenless zone zero" : "猫宮又奈"}}
,"ponyta" : {v:"ポニータ"}
,"poochyena" : {v:"ポチエナ"}
,"rain" : {v:"レイン"}
,"reiko takahashi" : {v:"高橋礼子"}
,"sabi" : {v:"ワサビ"}
,"sana miyoshi" : {v:"三好紗南"}
,"seira mizuki" : {v:"水木聖來"}
,"shangri-la" : {v:"シャングリラ", m:{"azur lane" : "シャングリラ(USS Shangri-La)"}}
,"tadakatsu honda" : {v:"本多・忠勝"}
,"tamaki miyasaka" : {v:"宮坂たまき"}
,"tsareena" : {v:"アマージョ"}
,"tsukasa kiryu" : {v:"桐生つかさ"}
,"yumemi okazaki" : {v:"岡崎夢美"}
,"alexa" : {v:"アレクサ", m:{"pokemon" : "パンジー"}}
,"barry" : {v:"バリー", m:{"pokemon" : "ジュン"}}
,"batai" : {v:"蒲公英(馬岱)"}
,"blucher" : {v:"ブリュッヒャー", m:{"azur lane" : "ブリュッヒャー(KMS Blücher)"}}
,"charybdis" : {v:"カリブディス", m:{"azur lane" : "カリブディス(HMS Charybdis)"}}
,"chespin" : {v:"ハリマロン"}
,"david" : {v:"デイビッド", m:{"pokemon" : "ヤスユキ"}}
,"emolga" : {v:"エモンガ"}
,"friedrich carl" : {v:"フリードリヒ・カール", m:{"azur lane" : "フリードリヒ・カール(KMS Friedrich Carl)"}}
,"hacka doll no.0" : {v:"ハッカドール0号"}
,"hanazuki" : {v:"花月", m:{"azur lane" : "花月(IJN Hanazuki)", "hanazuki full of treasures" : "Hanazüki"}}
,"hiburi" : {v:"日振"}
,"hisami yomotsu" : {v:"豫母都日狭美"}
,"kai nishijima" : {v:"西島櫂"}
,"koga" : {v:"コガ", m:{"pokemon" : "キョウ"}}
,"kurusu" : {v:"来栖華", m:{"koutetsujou no kabaneri" : "来栖"}}
,"liza" : {v:"リザ", m:{"pokemon" : "ラン"}}
,"maki shijo" : {v:"四条眞妃"}
,"massachusetts" : {v:"マサチューセッツ", m:{"kantai collection" : "Massachusetts(マサチューセッツ)", "azur lane" : "マサチューセッツ(USS Massachusetts)"}}
,"mena" : {v:"メイム"}
,"mewtwo" : {v:"ミュウツー"}
,"mimikyu" : {v:"ミミッキュ"}
,"mismagius" : {v:"ムウマージ"}
,"muneshige tachibana" : {v:"立花・宗茂"}
,"nadeshiko kinomoto" : {v:"木之本撫子"}
,"nihilego" : {v:"ウツロイド"}
,"ogerpon" : {v:"オーガポン"}
,"pichu" : {v:"ピチュー"}
,"plusle" : {v:"プラスル"}
,"rayquaza" : {v:"レックウザ"}
,"spinel" : {v:"スピネル"}
,"sumire otohana" : {v:"乙花スミレ"}
,"suzumi morizuki" : {v:"守月スズミ"}
,"tentacruel" : {v:"ドククラゲ"}
,"wattson" : {v:"ワトソン", m:{"pokemon" : "テッセン"}}
,"yao fueifuei" : {v:"楊菲菲"}
,"yoko saito" : {v:"斉藤洋子"}
,"yorktown" : {v:"ヨークタウン", m:{"azur lane" : "ヨークタウン(USS Yorktown)"}}
,"yumeko" : {v:"夢子"}
,"algerie" : {v:"アルジェリー", m:{"azur lane" : "アルジェリー(MNF Algérie)"}}
,"archie" : {v:"アーチー", m:{"pokemon" : "アオギリ"}}
,"arriet" : {v:"アンリエット"}
,"asahi" : {v:"朝日", m:{"shin megami tensei" : "アサヒ"}}
,"asanagi" : {v:"朝凪(IJN Asanagi)"}
,"beagle" : {v:"ビーグル", m:{"azur lane" : "ビーグル(HMS Beagle)"}}
,"black prince" : {v:"ブラック・プリンス", m:{"azur lane" : "ブラック・プリンス(HMS Black Prince)"}}
,"bridgette" : {v:"ブリジット", m:{"pokemon" : "アズサ"}}
,"brionne" : {v:"オシャマリ"}
,"chesnaught" : {v:"ブリガロン"}
,"chougei" : {v:"長鯨"}
,"dahlia" : {v:"ダリア"}
,"diglett" : {v:"ディグダ"}
,"dragonair" : {v:"ハクリュー"}
,"drayden" : {v:"シャガ"}
,"dusknoir" : {v:"ヨノワール"}
,"froslass" : {v:"ユキメノコ"}
,"fuka narutaki" : {v:"鳴滝風香"}
,"fumika narutaki" : {v:"鳴滝史伽"}
,"golden hind" : {v:"ゴールデン・ハインド", m:{"azur lane" : "ゴールデン・ハインド(MOT Golden Hind)"}}
,"haunter" : {v:"ゴースト"}
,"johanna" : {v:"ヨハンナ", m:{"pokemon" : "アヤコ"}}
,"kiyora yanagi" : {v:"柳清良"}
,"kizuna hida" : {v:"飛弾傷無"}
,"kronshtadt" : {v:"クロンシュタット", m:{"azur lane" : "クロンシュタット(SN Kronshtadt)"}}
,"leipzig" : {v:"ライプツィヒ", m:{"azur lane" : "ライプツィヒ(KMS Leipzig)"}}
,"makiko oriotorai" : {v:"オリオトライ・真喜子"}
,"mela" : {v:"メロコ"}
,"minneapolis" : {v:"ミネアポリス", m:{"azur lane" : "ミネアポリス(USS Minneapolis)"}}
,"miraidon" : {v:"ミライドン"}
,"mr. mime" : {v:"バリヤード"}
,"nekane springfield" : {v:"ネカネ・スプリングフィールド"}
,"nenohi" : {v:"子日"}
,"palkia" : {v:"パルキア"}
,"pignite" : {v:"チャオブー"}
,"rillaboom" : {v:"ゴリランダー"}
,"saki yoshioka" : {v:"吉岡沙紀"}
,"shelly" : {v:"シェリー", m:{"pokemon" : "イズミ"}}
,"shimiko endou" : {v:"円堂シミコ"}
,"shizuma hanazono" : {v:"花園静馬"}
,"shouta mitarai" : {v:"御手洗 翔太"}
,"siebold" : {v:"ズミ"}
,"silas" : {v:"サイラス"}
,"surcouf" : {v:"シュルクーフ", m:{"azur lane" : "シュルクーフ(FFNF Surcouf)"}}
,"tamanami" : {v:"玉波"}
,"tsubame amaya" : {v:"雨夜燕"}
,"vestal" : {v:"ヴェスタル", m:{"azur lane" : "ヴェスタル(USS Vestal)"}}
,"whimsicott" : {v:"エルフーン"}
,"aina ardebit" : {v:"アイナ・アルデビット"}
,"arbok" : {v:"アーボック"}
,"daitou" : {v:"大東"}
,"dan" : {v:"ダン", m:{"pokemon" : "ダンペイ"}}
,"drapion" : {v:"ドラピオン"}
,"emily sevensheep" : {v:"エミリィ・セブンシープ"}
,"fennel" : {v:"マコモ"}
,"flandre" : {v:"フランドル", m:{"azur lane" : "フランドル(MNF Flandre)"}}
,"floragato" : {v:"ニャローテ"}
,"i-203" : {v:"伊203"}
,"ibuki komatsu" : {v:"小松伊吹"}
,"inagi" : {v:"稲木"}
,"ivysaur" : {v:"フシギソウ"}
,"juana" : {v:"フアナ"}
,"juneau" : {v:"ジュノー", m:{"azur lane" : "ジュノー(USS Juneau)"}}
,"ken" : {v:"ケン", m:{"pokemon" : "アカバネ"}}
,"kohaku okuzora" : {v:"奥空心白"}
,"kotama otose" : {v:"音瀬コタマ"}
,"kurumi kuribayashi" : {v:"栗林くるみ"}
,"kyogre" : {v:"カイオーガ"}
,"lain iwakura" : {v:"岩倉玲音"}
,"lapras" : {v:"ラプラス"}
,"marshadow" : {v:"マーシャドー"}
,"marshal" : {v:"マーシャル", m:{"pokemon" : "レンブ", "animal crossing" : "ジュン"}}
,"mike" : {v:"ミケ", m:{"jinrou judgement" : "マイク"}}
,"morty" : {v:"マツバ"}
,"mugetsu" : {v:"夢月"}
,"odin" : {v:"オーディン", m:{"azur lane" : "オーディン(KMS Odin)"}}
,"oshawott" : {v:"ミジュマル"}
,"perrin" : {v:"サザレ"}
,"pittsburgh" : {v:"ピッツバーグ(USS Pittsburgh)"}
,"plumeria" : {v:"プルメリア", m:{"pokemon" : "プルメリ"}}
,"repulse" : {v:"レパルス", m:{"azur lane" : "レパルス(HMS Repulse)"}}
,"scharnhorst" : {v:"シャルンホルスト", m:{"azur lane" : "シャルンホルスト(KMS Scharnhorst)"}}
,"scirocco" : {v:"シロッコ", m:{"kantai collection" : "Scirocco(シロッコ)"}}
,"scolipede" : {v:"ペンドラー"}
,"seofon" : {v:"シエテ"}
,"shiho makihara" : {v:"槙原志保"}
,"sovetskaya belorussiya" : {v:"ソビエツカヤ・ベラルーシア", m:{"azur lane" : "ソビエツカヤ・ベラルーシア(SN Sovetskaya Belarusia)"}}
,"steven stone" : {v:"ツワブキダイゴ"}
,"suzuna minami" : {v:"美波鈴奈"}
,"swampert" : {v:"ラグラージ"}
,"terror" : {v:"テラー", m:{"azur lane" : "テラー(HMS Terror)"}}
,"toxicroak" : {v:"ドクロッグ"}
,"usugumo" : {v:"薄雲"}
,"uxie" : {v:"ユクシー"}
,"venus" : {v:"ヴィーナス", m:{"zenless zone zero" : "Venus"}}
,"virizion" : {v:"ビリジオン"}
,"wally" : {v:"ウォーリー", m:{"pokemon" : "ミツル"}}
,"yat sen" : {v:"逸仙", m:{"azur lane" : "逸仙(ROC Yat Sen)"}}
,"yorck" : {v:"ヨルク", m:{"azur lane" : "ヨルク(KMS Yorck)"}}
,"ai togo" : {v:"東郷あい"}
,"avrora" : {v:"アヴローラ", m:{"azur lane" : "アヴローラ(SN Avrora)"}}
,"ayumi ishibashi" : {v:"石橋あゆみ"}
,"ayumu iwabitsu" : {v:"岩櫃アユム"}
,"beatrix brehme" : {v:"ベアトリクス・ブレーメ"}
,"beatrix monroe" : {v:"ベアトリクス・モンロー"}
,"beedrill" : {v:"スピアー"}
,"blue" : {v:"ブルー", m:{"pokemon" : "グリーン"}}
,"boise" : {v:"ボイシ", m:{"azur lane" : "ボイシ(USS Boise)"}}
,"bunwa kaku" : {v:"詠(賈駆 文和)"}
,"clefairy" : {v:"ピッピ"}
,"cofagrigus" : {v:"デスカーン"}
,"cure unlovely" : {v:"アンラブリー"}
,"dewott" : {v:"フタチマル"}
,"dialga" : {v:"ディアルガ"}
,"duca degli abruzzi" : {v:"ドゥーカ・デッリ・アブルッツィ", m:{"kantai collection" : "L.d.S.D.d.Abruzzi(アブルッツィ)", "azur lane" : "ドゥーカ・デッリ・アブルッツィ(RN Duca degli Abruzzi)"}}
,"emmet" : {v:"エメット", m:{"pokemon" : "クダリ"}}
,"empoleon" : {v:"エンペルト"}
,"erma" : {v:"エルマ"}
,"gaston" : {v:"ガストン", m:{"animal crossing" : "モサキチ"}}
,"gengan" : {v:"桔梗(厳顔)"}
,"groudon" : {v:"グラードン"}
,"guam" : {v:"グアム", m:{"azur lane" : "グアム(USS Guam)"}}
,"hacka doll no.4" : {v:"ハッカドール4号"}
,"hikari konohana" : {v:"此花光莉"}
,"hwah jah" : {v:"華甲(ROC Hwah Jah)"}
,"jun shirogane" : {v:"白銀純"}
,"kaho mizuki" : {v:"観月歌帆"}
,"keiko tanaka" : {v:"田中恵子"}
,"keldeo" : {v:"ケルディオ"}
,"kiyomi saejima" : {v:"冴島清美"}
,"koyori tanemura" : {v:"種村小依"}
,"maylene" : {v:"スモモ"}
,"minun" : {v:"マイナン"}
,"misaki masaki jurai" : {v:"柾木美砂樹樹雷"}
,"nicholas" : {v:"ニコラス", m:{"pokemon" : "ソウスケ", "azur lane" : "ニコラス(USS Nicholas)"}}
,"onix" : {v:"オニキス", m:{"pokemon" : "イワーク"}}
,"otoha umeki" : {v:"梅木音葉"}
,"san jacinto" : {v:"サン・ジャシント", m:{"azur lane" : "サン・ジャシント(USS San Jacinto)"}}
,"satomi hakase" : {v:"葉加瀬聡美"}
,"scamp" : {v:"スキャンプ", m:{"kantai collection" : "Scamp(スキャンプ)"}}
,"seydlitz" : {v:"ザイドリッツ", m:{"azur lane" : "ザイドリッツ(SMS Seydlitz)"}}
,"shimanto" : {v:"四万十(IJN Shimanto)"}
,"shuuyu koukin" : {v:"冥琳(周瑜 公瑾)"}
,"sovetsky soyuz" : {v:"ソビエツキー・ソユーズ", m:{"azur lane" : "ソビエツキー・ソユーズ(SN Sovetsky Soyuz)"}}
,"ting an" : {v:"定安", m:{"azur lane" : "定安(ROC Ting An)"}}
,"trieste" : {v:"トリエステ", m:{"azur lane" : "トリエステ(RN Trieste)"}}
,"tsubomi okukawa" : {v:"奥若蕾"}
,"wartortle" : {v:"カメール"}
,"yasuha okazaki" : {v:"岡崎泰葉"}
,"zacian" : {v:"ザシアン"}
,"banette" : {v:"ジュペッタ"}
,"bellossom" : {v:"キレイハナ"}
,"bewear" : {v:"キテルグマ"}
,"chili" : {v:"チリ", m:{"pokemon" : "ポッド"}}
,"cilan" : {v:"デント"}
,"collet farandole" : {v:"コレット・ファランドール"}
,"cyllene" : {v:"シマボシ"}
,"drizzile" : {v:"ジメレオン"}
,"echo" : {v:"エコー", m:{"azur lane" : "エコー(HMS Echo)"}}
,"emden" : {v:"エムデン", m:{"azur lane" : "エムデン(SMS Emden)"}}
,"erebus" : {v:"エレバス", m:{"azur lane" : "エレバス(HMS Erebus)"}}
,"fantina" : {v:"メリッサ"}
,"foxhound" : {v:"フォックスハウンド", m:{"azur lane" : "フォックスハウンド(HMS Foxhound)"}}
,"gallade" : {v:"エルレイド"}
,"gengetsu" : {v:"幻月"}
,"giuseppe garibaldi" : {v:"ジュゼッペ・ガリバルディ", m:{"kantai collection" : "G.Garibaldi(ガリバルディ)", "azur lane" : "ジュゼッペ・ガリバルディ(RN Giuseppe Garibaldi)"}}
,"hitomi niwa" : {v:"丹羽仁美"}
,"howe" : {v:"ハウ", m:{"azur lane" : "ハウ(HMS Howe)"}}
,"icarus" : {v:"イカルス", m:{"azur lane" : "イカルス(HMS Icarus)"}}
,"ilima" : {v:"イリマ"}
,"infernape" : {v:"ゴウカザル"}
,"joel" : {v:"ジョウ"}
,"keika kiyotaki" : {v:"清滝桂香"}
,"machop" : {v:"ワンリキー"}
,"makoto takiya" : {v:"滝谷真"}
,"marblehead" : {v:"マーブルヘッド", m:{"azur lane" : "マーブルヘッド(USS Marblehead)"}}
,"megumi natsume" : {v:"夏目萌"}
,"meiko namiki" : {v:"並木芽衣子"}
,"meru himeki" : {v:"姫木メル"}
,"michael" : {v:"ミカエル"}
,"misora kasuga" : {v:"春日美空"}
,"misumaru tamatsukuri" : {v:"玉造魅須丸"}
,"monica" : {v:"モニカ", m:{"pokemon" : "ツキコ"}}
,"mutsumi ujiie" : {v:"氏家むつみ"}
,"myousai kakouen" : {v:"秋蘭(夏侯淵 妙才)"}
,"nanaka tanno" : {v:"丹野七々香"}
,"noivern" : {v:"オンバーン"}
,"nurnberg" : {v:"ニュルンベルク", m:{"azur lane" : "ニュルンベルク(KMS Nürnberg)"}}
,"nuzleaf" : {v:"コノハナ"}
,"pancham" : {v:"ヤンチャム"}
,"pangoro" : {v:"ゴロンダ"}
,"professor turo" : {v:"フトゥー博士"}
,"purrloin" : {v:"チョロネコ"}
,"rena hyodo" : {v:"兵藤レナ"}
,"reuniclus" : {v:"ランクルス"}
,"salandit" : {v:"ヤトウモリ"}
,"saori okuyama" : {v:"奥山沙織"}
,"sneasel" : {v:"ニューラ"}
,"spinda" : {v:"パッチール"}
,"takashi yamazaki" : {v:"山崎貴史"}
,"tomo fujii" : {v:"藤居朋"}
,"tulip" : {v:"チューリップ", m:{"pokemon" : "リップ"}}
,"tyranitar" : {v:"バンギラス"}
,"valerie" : {v:"バレリー", m:{"pokemon" : "マーシュ"}}
,"york" : {v:"ヨーク(HMS York)"}
,"z20" : {v:"Z20", m:{"azur lane" : "Z20(KMS Karl Galster)"}}
,"zanmu nippaku" : {v:"日白残無"}
,"akiho shinomoto" : {v:"詩之本秋穂"}
,"akishimo" : {v:"秋霜"}
,"aoi shuto" : {v:"首藤葵"}
,"arfoire" : {v:"マジェコンヌ"}
,"ariake" : {v:"有明", m:{"azur lane" : "有明(IJN Ariake)"}}
,"ayumu maihama" : {v:"舞浜歩"}
,"blastoise" : {v:"カメックス"}
,"blitzle" : {v:"シママ"}
,"chikaru minamoto" : {v:"源千華留"}
,"chiyuri kitashirakawa" : {v:"北白河ちゆり"}
,"comet" : {v:"コメット", m:{"azur lane" : "コメット(HMS Comet)"}}
,"cyndaquil" : {v:"ヒノアラシ"}
,"dexter" : {v:"デクスター"}
,"diancie" : {v:"ディアンシー"}
,"dustox" : {v:"ドクケイル"}
,"ed" : {v:"エド", m:{"animal crossing" : "キザノホマレ"}}
,"froakie" : {v:"ケロマツ"}
,"gabite" : {v:"ガバイト"}
,"gholdengo" : {v:"サーフゴー"}
,"grapploct" : {v:"オトスパス"}
,"haine" : {v:"ハイネ"}
,"heian maru" : {v:"平安丸"}
,"janine" : {v:"アンズ"}
,"kana anaberal" : {v:"カナ・アナベラル"}
,"kanna ariura" : {v:"有浦柑奈"}
,"kanon konomori" : {v:"小之森夏音"}
,"kuzunoha" : {v:"クズノハ"}
,"le triomphant" : {v:"ル・トリオンファン", m:{"azur lane" : "ル・トリオンファン(FFNF Le Triomphant)"}}
,"louisville" : {v:"ルイビル", m:{"azur lane" : "ルイビル(USS Louisville)"}}
,"lt. surge" : {v:"マチス"}
,"manaphy" : {v:"マナフィ"}
,"mark" : {v:"マーク", m:{"pokemon" : "パーク"}}
,"mars" : {v:"マーズ"}
,"medicham" : {v:"チャーレム"}
,"mesprit" : {v:"エムリット"}
,"midori mizuno" : {v:"水野翠"}
,"mike goutokuji" : {v:"豪徳寺ミケ"}
,"miltank" : {v:"ミルタンク"}
,"mira" : {v:"ミラ", m:{"pokemon" : "ミル", "animal crossing" : "ミラコ"}}
,"misaki etou" : {v:"衛藤美紗希"}
,"miyuki yanase" : {v:"柳瀬美由紀"}
,"nate" : {v:"ネイト", m:{"pokemon" : "キョウヘイ"}}
,"nevada" : {v:"ネバダ", m:{"kantai collection" : "Nevada(ネヴァダ)", "azur lane" : "ネバダ(USS Nevada)"}}
,"ninon joubert" : {v:"ニノン・ジュベール"}
,"olympia" : {v:"オリンピア", m:{"pokemon" : "ゴジカ", "etrian odyssey" : "オランピア"}}
,"ortega" : {v:"オルティガ"}
,"professor sada" : {v:"オーリム博士"}
,"sakura muramatsu" : {v:"村松さくら"}
,"sandslash" : {v:"サンドパン"}
,"sannyo komakusa" : {v:"駒草山如"}
,"satsuki yotsuba" : {v:"四葉五月"}
,"sayo aisaka" : {v:"相坂さよ"}
,"sceptile" : {v:"ジュカイン"}
,"scrafty" : {v:"ズルズキン"}
,"seika suzumiya" : {v:"涼宮星花"}
,"seviper" : {v:"ハブネーク"}
,"shaoren" : {v:"小蓮(孫尚香)"}
,"shinon kawaru" : {v:"川流シノン"}
,"slaking" : {v:"ケッキング"}
,"spectrier" : {v:"レイスポス"}
,"tai yuan" : {v:"太原", m:{"azur lane" : "太原(PRAN Tai Yuan)"}}
,"tennessee" : {v:"テネシー", m:{"azur lane" : "テネシー(USS Tennessee)"}}
,"tinkaton" : {v:"デカヌチャン"}
,"tosa" : {v:"土佐", m:{"azur lane" : "土佐(IJN Tosa)"}}
,"ursaring" : {v:"リングマ"}
,"utai shinomiya" : {v:"四埜宮謡(アーダー・メイデン)"}
,"walrein" : {v:"トドゼルガ"}
,"yoizuki" : {v:"宵月", m:{"azur lane" : "宵月(IJN Yoizuki)"}}
,"z35" : {v:"Z35"}
,"98-tan" : {v:"98たん"}
,"archerfish" : {v:"アーチャーフィッシュ", m:{"azur lane" : "アーチャーフィッシュ(USS Archerfish)"}}
,"beatrix amerhauser" : {v:"ベアトリクス・アメルハウザー"}
,"bell" : {v:"ベル", m:{"azur lane" : "ベル(USS Bell)"}}
,"bellona" : {v:"ベローナ", m:{"azur lane" : "ベローナ(HMS Bellona)"}}
,"celesteela" : {v:"テッカグヤ"}
,"chachazero" : {v:"チャチャゼロ"}
,"cocoro yazawa" : {v:"矢澤こころ"}
,"columbia" : {v:"コロンビア", m:{"azur lane" : "コロンビア(USS Columbia)"}}
,"cress" : {v:"クレス", m:{"pokemon" : "コーン"}}
,"cubone" : {v:"カラカラ"}
,"darkrai" : {v:"ダークライ"}
,"electabuzz" : {v:"エレブー"}
,"erika akanishi" : {v:"赤西瑛梨華"}
,"ferrothorn" : {v:"ナットレイ"}
,"fujinami" : {v:"藤波"}
,"galatea" : {v:"ガラティア", m:{"azur lane" : "ガラティア(HMS Galatea)"}}
,"gliscor" : {v:"グライオン"}
,"glorious" : {v:"グロリアス", m:{"azur lane" : "グロリアス(HMS Glorious)"}}
,"growlithe" : {v:"ガーディ"}
,"heliolisk" : {v:"エレザード"}
,"ho-oh" : {v:"ホウオウ"}
,"joseph" : {v:"ヨセフ", m:{"pokemon" : "ソウタ"}}
,"kate" : {v:"ケイト"}
,"kid cat" : {v:"1ごう"}
,"kiev" : {v:"キエフ", m:{"azur lane" : "キエフ(SN Kiev)"}}
,"kii" : {v:"紀伊", m:{"azur lane" : "紀伊(IJN Kii)"}}
,"layla prismriver" : {v:"レイラ・プリズムリバー"}
,"lechonk" : {v:"グルトン"}
,"linoone" : {v:"マッスグマ"}
,"mable" : {v:"モミジ"}
,"meganium" : {v:"メガニウム"}
,"me-tan" : {v:"Meたん"}
,"mikura" : {v:"御蔵"}
,"milo" : {v:"ヤロー"}
,"misdreavus" : {v:"ムウマ"}
,"miu yaguchi" : {v:"矢口美羽"}
,"mudbray" : {v:"ドロバンコ"}
,"mudkip" : {v:"ミズゴロウ"}
,"natsumi soma" : {v:"相馬夏美"}
,"pansage" : {v:"ヤナップ"}
,"pensacola" : {v:"ペンサコーラ", m:{"azur lane" : "ペンサコーラ(USS Pensacola)"}}
,"quaquaval" : {v:"ウェーニバル"}
,"rattata" : {v:"コラッタ"}
,"rin morichika" : {v:"森近鈴"}
,"rin satsuki" : {v:"冴月麟"}
,"roserade" : {v:"ロズレイド"}
,"royal fortune" : {v:"ロイヤル・フォーチュン", m:{"azur lane" : "ロイヤル・フォーチュン(MOT Royal Fortune)"}}
,"shino hiiragi" : {v:"柊志乃"}
,"sigel" : {v:"シーグル"}
,"slowpoke" : {v:"ヤドン"}
,"sneasler" : {v:"オオニューラ"}
,"souya" : {v:"宗谷"}
,"sovetskaya rossiya" : {v:"ソビエツカヤ・ロシア(SN Sovetskaya Rossiya)"}
,"squirtle" : {v:"ゼニガメ"}
,"suffolk" : {v:"サフォーク", m:{"azur lane" : "サフォーク(HMS Suffolk)"}}
,"tierno" : {v:"ティエルノ"}
,"toedscruel" : {v:"リククラゲ"}
,"torricelli" : {v:"トリチェリ", m:{"azur lane" : "トリチェリ(RN Torricelli)"}}
,"trevor" : {v:"トロバ"}
,"tsubame koyasu" : {v:"子安つばめ"}
,"wakaba kusakabe" : {v:"日下部若葉"}
,"abercrombie" : {v:"アバークロンビー", m:{"azur lane" : "アバークロンビー(HMS Abercrombie)"}}
,"adam" : {v:"アダム"}
,"akira himi" : {v:"氷見あきら(アクア・カレント)"}
,"alabama" : {v:"アラバマ", m:{"azur lane" : "アラバマ(USS Alabama)"}}
,"amagiri" : {v:"天霧"}
,"annihilape" : {v:"コノヨザル"}
,"ariados" : {v:"アリアドス"}
,"armarouge" : {v:"グレンアルマ"}
,"articuno" : {v:"フリーザー"}
,"azelf" : {v:"アグノム"}
,"bellsprout" : {v:"マダツボミ"}
,"bisharp" : {v:"キリキザン"}
,"buneary" : {v:"ミミロル"}
,"casablanca" : {v:"カサブランカ", m:{"azur lane" : "カサブランカ(USS Casablanca)"}}
,"ceruledge" : {v:"ソウブレイズ"}
,"chase" : {v:"チェイス", m:{"pokemon" : "カケル"}}
,"chiyo-chichi" : {v:"ちよ父"}
,"chuukou kyocho" : {v:"季衣(許緒 仲康)"}
,"cobalion" : {v:"コバルオン"}
,"commandant teste" : {v:"Commandant Teste(コマンダン・テスト)"}
,"cooper" : {v:"クーパー", m:{"azur lane" : "クーパー(USS Cooper)"}}
,"crispin" : {v:"アカマツ"}
,"cure flower" : {v:"花咲薫子"}
,"cyrus" : {v:"サイラス", m:{"pokemon" : "アカギ"}}
,"electivire" : {v:"エレキブル"}
,"emi namba" : {v:"難波笑美"}
,"espathra" : {v:"クエスパトラ"}
,"fiji" : {v:"フィジー", m:{"azur lane" : "フィジー(HMS Fiji)"}}
,"genjii" : {v:"玄爺"}
,"genjyo sanzo" : {v:"玄奘三蔵"}
,"glacia" : {v:"プリム"}
,"greta" : {v:"コゴミ"}
,"grimer" : {v:"ベトベター"}
,"gurdurr" : {v:"ドテッコツ"}
,"hawlucha" : {v:"ルチャブル"}
,"hayanami" : {v:"早波"}
,"heywood l.e." : {v:"Heywood L.E.(ヘイウッド)"}
,"houndour" : {v:"デルビル"}
,"hyouga cygnus" : {v:"キグナス氷河"}
,"i-47" : {v:"伊47"}
,"itsuki manabe" : {v:"真鍋いつき"}
,"jamaica" : {v:"ジャマイカ", m:{"azur lane" : "ジャマイカ(HMS Jamaica)"}}
,"joe" : {v:"ジョー"}
,"kogitsune" : {v:"子狐"}
,"kommo-o" : {v:"ジャラランガ"}
,"kursk" : {v:"クルスク", m:{"azur lane" : "クルスク(SN Kursk)"}}
,"leander" : {v:"リアンダー", m:{"azur lane" : "リアンダー(HMS Leander)"}}
,"leavanny" : {v:"ハハコモリ"}
,"liepard" : {v:"レパルダス"}
,"lucian" : {v:"ルシアン", m:{"pokemon" : "ゴヨウ"}}
,"lutzow" : {v:"リュッツォウ", m:{"azur lane" : "リュッツォウ(SMS Lützow)"}}
,"lysandre" : {v:"フラダリ"}
,"mahiro kitagawa" : {v:"北川真尋"}
,"manchester" : {v:"マンチェスター", m:{"azur lane" : "マンチェスター(HMS Manchester)"}}
,"mareanie" : {v:"ヒドイデ"}
,"marina sawada" : {v:"沢田麻理菜"}
,"marseillaise" : {v:"マルセイエーズ", m:{"azur lane" : "マルセイエーズ(MNF Marseillaise)"}}
,"maury" : {v:"モーリー", m:{"azur lane" : "モーリー(USS Maury)"}}
,"meloetta" : {v:"メロエッタ"}
,"meteon" : {v:"ミュオン"}
,"michiru ohara" : {v:"大原みちる"}
,"mitsuki yoigahama" : {v:"宵ヶ浜深月"}
,"miyako anzai" : {v:"安斎都"}
,"morgan lefay" : {v:"モルガン・ル・フェ"}
,"morpeko" : {v:"モルペコ"}
,"moukaku" : {v:"美以(孟獲)"}
,"naomasa" : {v:"直政"}
,"nubian" : {v:"ヌビアン", m:{"azur lane" : "ヌビアン(HMS Nubian)"}}
,"okidogi" : {v:"イイネイヌ"}
,"pachirisu" : {v:"パチリス"}
,"pansear" : {v:"バオップ"}
,"passimian" : {v:"ナゲツケサル"}
,"percy" : {v:"パーシー", m:{"pokemon" : "ホンプ"}}
,"pidgeotto" : {v:"ピジョン"}
,"piers" : {v:"ピアーズ", m:{"pokemon" : "ネズ"}}
,"poliwrath" : {v:"ニョロボン"}
,"popplio" : {v:"アシマリ"}
,"regigigas" : {v:"レジギガス"}
,"rei nomasa" : {v:"野正レイ"}
,"rhydon" : {v:"サイドン"}
,"roaring moon" : {v:"トドロクツキ"}
,"roselia" : {v:"ロゼリア"}
,"rotom" : {v:"ロトム"}
,"san francisco" : {v:"サンフランシスコ", m:{"azur lane" : "サンフランシスコ(USS San Francisco)"}}
,"seismitoad" : {v:"ガマゲロゲ"}
,"shizuna minamoto" : {v:"源しずな"}
,"shounan" : {v:"昭南"}
,"shropshire" : {v:"シュロップシャー", m:{"azur lane" : "シュロップシャー(HMS Shropshire)"}}
,"smeargle" : {v:"ドーブル"}
,"soliera" : {v:"ミリン"}
,"sophocles" : {v:"マーマネ"}
,"sora nonomura" : {v:"野々村そら"}
,"suicune" : {v:"スイクン"}
,"takumu mayuzumi" : {v:"黛拓武(シアン・パイル)"}
,"toko hattori" : {v:"服部瞳子"}
,"torchic" : {v:"アチャモ"}
,"torracat" : {v:"ニャヒート"}
,"u-556" : {v:"U-556", m:{"azur lane" : "U-556(KMS U-556)"}}
,"victreebel" : {v:"ウツボット"}
,"volkner" : {v:"デンジ"}
,"voroshilov" : {v:"ヴォロシーロフ(SN Voroshilov)"}
,"wasp" : {v:"ワスプ", m:{"azur lane" : "ワスプ(USS Wasp)"}}
,"weepinbell" : {v:"ウツドン"}
,"will" : {v:"ウィル", m:{"pokemon" : "イツキ"}}
,"yamask" : {v:"デスマス"}
,"yancy" : {v:"ルリ"}
,"ying swei" : {v:"応瑞", m:{"azur lane" : "応瑞(ROC Ying Swei)"}}
,"yoriko furusawa" : {v:"古澤頼子"}
,"z18" : {v:"Z18(KMS Hans Lüdemann)"}
,"zamazenta" : {v:"ザマゼンタ"}
,"zombina" : {v:"ゾンビーナ"}
,"zossie" : {v:"アマモ"}
,"aggron" : {v:"ボスゴドラ"}
,"alcremie" : {v:"マホイップ"}
,"amanda" : {v:"アマンダ", m:{"pokemon" : "メグミ"}}
,"archen" : {v:"アーケン"}
,"astoria" : {v:"アストリア", m:{"azur lane" : "アストリア(USS Astoria)"}}
,"aurorus" : {v:"アマルルガ"}
,"avery" : {v:"セイボリー"}
,"ayuna hamakawa" : {v:"浜川愛結奈"}
,"baltoy" : {v:"ヤジロン"}
,"bellibolt" : {v:"ハラバリー"}
,"billy" : {v:"ビリー", m:{"pokemon" : "ヤライ"}}
,"brunhilde" : {v:"ブリュンヒルデ", m:{"azur lane" : "ブリュンヒルデ(KMS Brünhilde)"}}
,"bugsy" : {v:"ツクシ"}
,"bulldog" : {v:"ブルドッグ", m:{"azur lane" : "ブルドッグ(HMS Bulldog)"}}
,"bunnelby" : {v:"ホルビー"}
,"buzzwole" : {v:"マッシブーン"}
,"caim" : {v:"カイム"}
,"cathy graham" : {v:"キャシー・グラハム"}
,"celebi" : {v:"セレビィ"}
,"champagne" : {v:"シャンパーニュ", m:{"azur lane" : "シャンパーニュ(FFNF Champagne)"}}
,"chieko honda" : {v:"本田智恵子"}
,"chimchar" : {v:"ヒコザル"}
,"chinatsu aikawa" : {v:"相川千夏"}
,"chuuei toutaku" : {v:"月(董卓 仲頴)"}
,"cinccino" : {v:"チラチーノ"}
,"cocone fatima rosa" : {v:"ココネ・ファティマ・ロザ"}
,"colress" : {v:"アクロマ"}
,"cresselia" : {v:"クレセリア"}
,"croagunk" : {v:"グレッグル"}
,"croconaw" : {v:"アリゲイツ"}
,"daisy oak" : {v:"ナナミ"}
,"deerling" : {v:"シキジカ"}
,"deino" : {v:"モノズ"}
,"delcatty" : {v:"エネコロロ"}
,"drifblim" : {v:"フワライド"}
,"edinburgh" : {v:"エジンバラ", m:{"azur lane" : "エディンバラ(HMS Edinburgh)"}}
,"elis" : {v:"Elis"}
,"ema senzaki" : {v:"仙崎恵磨"}
,"entei" : {v:"エンテイ"}
,"fei yuen" : {v:"飛雲", m:{"azur lane" : "飛雲(ROC Fei Yuen)"}}
,"flutter mane" : {v:"ハバタクカミ"}
,"frogadier" : {v:"ゲコガシラ"}
,"furfrou" : {v:"トリミアン"}
,"gascogne" : {v:"ガスコーニュ", m:{"azur lane" : "ガスコーニュ(MNF Gascogne)"}}
,"gastly" : {v:"ゴース"}
,"gastrodon" : {v:"トリトドン"}
,"gogoat" : {v:"ゴーゴート"}
,"grovyle" : {v:"ジュプトル"}
,"grumpig" : {v:"ブーピッグ"}
,"hariyama" : {v:"ハリテヤマ"}
,"hasumi nagatomi" : {v:"長富蓮実"}
,"honami nishikawa" : {v:"西川保奈美"}
,"i-201" : {v:"伊201"}
,"iron thorns" : {v:"テツノイバラ"}
,"jennifer" : {v:"ジェニファー", m:{"pokemon" : "ユカ"}}
,"kakei mihaya" : {v:"掛居美早(ブラッド・レパード)"}
,"kangaskhan" : {v:"ガルーラ"}
,"langley" : {v:"ラングレー", m:{"kantai collection" : "Langley(ラングレー)", "azur lane" : "ラングレー(USS Langley)"}}
,"magdeburg" : {v:"マクデブルク(KMS Magdeburg)"}
,"magikarp" : {v:"コイキング"}
,"mainz" : {v:"マインツ(KMS Mainz)"}
,"marco polo" : {v:"マルコ・ポーロ", m:{"azur lane" : "マルコ・ポーロ(RN Marco Polo)"}}
,"marilyn catto" : {v:"マリリン・キャット"}
,"marley" : {v:"マーレイ", m:{"pokemon" : "マイ"}}
,"marowak" : {v:"ガラガラ"}
,"melli" : {v:"ツバキ"}
,"minccino" : {v:"チラーミィ"}
,"monferno" : {v:"モウカザル"}
,"musharna" : {v:"ムシャーナ"}
,"naganadel" : {v:"アーゴヨン"}
,"nagisa aino" : {v:"愛野渚"}
,"nene kurihara" : {v:"栗原ネネ"}
,"nickit" : {v:"クスネ"}
,"nikki" : {v:"クニミ"}
,"nita" : {v:"ラニュイ"}
,"norfolk" : {v:"ノーフォーク", m:{"azur lane" : "ノーフォーク(HMS Norfolk)"}}
,"noriko kurosawa" : {v:"黒沢典子"}
,"octillery" : {v:"オクタン"}
,"oinkologne" : {v:"パフュートン"}
,"olaf" : {v:"オラフ", m:{"animal crossing" : "アントニオ"}}
,"otto von alvensleben" : {v:"オットー・フォン・アルフェンスレーベン(KMS Otto von Alvensleben)"}
,"pawmi" : {v:"パモ"}
,"pecharunt" : {v:"モモワロウ"}
,"pennsylvania" : {v:"ペンシルベニア", m:{"azur lane" : "ペンシルベニア(USS Pennsylvania)"}}
,"peonia" : {v:"シャクヤ"}
,"persian" : {v:"ペルシアン"}
,"phoenix" : {v:"フェニックス"}
,"plymouth" : {v:"プリマス(HMS Plymouth)"}
,"politoed" : {v:"ニョロトノ"}
,"psyduck" : {v:"コダック"}
,"quilladin" : {v:"ハリボーグ"}
,"quincy" : {v:"クインシー", m:{"azur lane" : "クインシー(USS Quincy)"}}
,"raifort" : {v:"レホール"}
,"rei onodera" : {v:"小野寺麗"}
,"riley" : {v:"ゲン"}
,"ryan" : {v:"ライアン", m:{"pokemon" : "ノリオ"}}
,"sableye" : {v:"ヤミラミ"}
,"sam" : {v:"サム", m:{"pokemon" : "ミカサ"}}
,"samuel b. roberts" : {v:"Samuel B.Roberts(サミュエル・Ｂ・ロバーツ)"}
,"sawk" : {v:"ダゲキ"}
,"scizor" : {v:"ハッサム"}
,"scream tail" : {v:"サケブシッポ"}
,"scyther" : {v:"ストライク"}
,"servine" : {v:"ジャノビー"}
,"shiho sakakibara" : {v:"榊原志保"}
,"sina" : {v:"ジーナ"}
,"slither wing" : {v:"チヲハウハネ"}
,"slowking" : {v:"ヤドキング"}
,"stanly" : {v:"スタンリー(USS Stanly)"}
,"swadloon" : {v:"クルマユ"}
,"swirlix" : {v:"ペロッパフ"}
,"tartu" : {v:"タルテュ(MNF Tartu)"}
,"tate" : {v:"フウ"}
,"t-bone" : {v:"ティー・ボーン", m:{"animal crossing" : "ボルシチ", "swat kats" : "Chance Furlong(T-Bone)"}}
,"ticonderoga" : {v:"タイコンデロガ", m:{"azur lane" : "タイコンデロガ(USS Ticonderoga)"}}
,"toedscool" : {v:"ノノクラゲ"}
,"togepi" : {v:"トゲピー"}
,"trevenant" : {v:"オーロット"}
,"tsumugi shiina" : {v:"椎名ツムギ"}
,"tyrantrum" : {v:"ガチゴラス"}
,"ume" : {v:"梅"}
,"umi sugisaka" : {v:"杉坂海"}
,"unzan" : {v:"雲山"}
,"ursaluna" : {v:"ガチグマ"}
,"venusaur" : {v:"フシギバナ"}
,"victini" : {v:"ビクティニ"}
,"walking wake" : {v:"ウネルミナモ"}
,"wiglett" : {v:"ウミディグダ"}
,"windows 95-tan" : {v:"Windows95たん"}
,"winona" : {v:"ウィノナ", m:{"pokemon" : "ナギ"}}
,"yuriko ohnishi" : {v:"大西由里子"}
,"yuugure" : {v:"夕暮"}
,"z21" : {v:"Z21(KMS Wilhelm Heidkamp)"}
,"z28" : {v:"Z28(KMS Z28)"}
,"zazie rainyday" : {v:"ザジ・レイニーデイ"}
,"zygarde" : {v:"ジガルデ"}
,"abomasnow" : {v:"ユキノオー"}
,"abra" : {v:"ケーシィ"}
,"arata" : {v:"アラタ"}
,"ardent" : {v:"アーデント(HMS Ardent)"}
,"aya kirino" : {v:"桐野アヤ"}
,"ayaka kishibe" : {v:"岸部彩華"}
,"basculegion" : {v:"イダイトウ"}
,"bogue" : {v:"ボーグ(USS Bogue)"}
,"boltund" : {v:"パルスワン"}
,"brawly" : {v:"ブロウリー", m:{"pokemon" : "トウキ"}}
,"breloom" : {v:"キノガッサ"}
,"bunker hill" : {v:"バンカー・ヒル", m:{"azur lane" : "バンカー・ヒル(USS Bunker Hill)"}}
,"calico briggs" : {v:"Calico Briggs"}
,"california" : {v:"カリフォルニア", m:{"azur lane" : "カリフォルニア(USS California)"}}
,"casey" : {v:"メディ"}
,"centaur" : {v:"セントー(HMS Centaur)"}
,"chansey" : {v:"ラッキー"}
,"chicago" : {v:"シカゴ(USS Chicago)"}
,"chinami komuro" : {v:"小室千奈美"}
,"clavell" : {v:"クラベル"}
,"combee" : {v:"ミツハニー"}
,"concord" : {v:"コンコード(USS Concord)"}
,"corviknight" : {v:"アーマーガア"}
,"crawdaunt" : {v:"シザリガー"}
,"denver" : {v:"デンバー(USS Denver)"}
,"dewgong" : {v:"ジュゴン"}
,"dondozo" : {v:"ヘイラッシャ"}
,"downes" : {v:"ダウンズ(USS Downes)"}
,"drednaw" : {v:"カジリガメ"}
,"druddigon" : {v:"クリムガン"}
,"dusty" : {v:"ルイン"}
,"eelektross" : {v:"シビルドン"}
,"enamorus" : {v:"ラブトロス"}
,"espurr" : {v:"ニャスパー"}
,"eusine" : {v:"ミナキ"}
,"eve neuschwanstein" : {v:"イヴ・ノイシュヴァンシュタイン"}
,"farigiraf" : {v:"リキキリン"}
,"fletchling" : {v:"ヤヤコマ"}
,"floette" : {v:"フラエッテ"}
,"florges" : {v:"フラージェス"}
,"foch" : {v:"フォッシュ(MNF Foch)"}
,"foote" : {v:"フート(USS Foote)"}
,"frillish" : {v:"プルリル"}
,"fu shun" : {v:"撫順(PRAN Fu shun)"}
,"furret" : {v:"オオタチ"}
,"gabby" : {v:"マリ"}
,"garbodor" : {v:"ダストダス"}
,"girafarig" : {v:"キリンリキ"}
,"giulio cesare" : {v:"ジュリオ・チェザーレ(RN Giulio Cesare)"}
,"golduck" : {v:"ゴルダック"}
,"golem" : {v:"ゴローニャ"}
,"golisopod" : {v:"グソクムシャ"}
,"golurk" : {v:"ゴルーグ"}
,"gorizia" : {v:"ゴリツィア(RN Gorizia)"}
,"gothorita" : {v:"ゴチミル"}
,"gourgeist" : {v:"パンプジン"}
,"granbull" : {v:"グランブル"}
,"gridley" : {v:"グリッドレイ(USS Gridley)"}
,"grimmsnarl" : {v:"オーロンゲ"}
,"grozny" : {v:"グロズヌイ(SN Grozny)"}
,"guichen" : {v:"ギシャン(FFNF Guichen)"}
,"hala" : {v:"ハラ"}
,"halsey powell" : {v:"ハルゼー・パウエル(USS Halsey Powell)"}
,"hourai" : {v:"蓬莱"}
,"iron moth" : {v:"テツノドクガ"}
,"ishihara" : {v:"Mr.イシハラ"}
,"italia" : {v:"イタリア"}
,"jigglypuff" : {v:"プリン"}
,"jynx" : {v:"ルージュラ"}
,"kajika" : {v:"鰍"}
,"kecleon" : {v:"カクレオン"}
,"kingdra" : {v:"キングドラ"}
,"kiri" : {v:"キリ"}
,"kitakaze" : {v:"北風(IJN Kitakaze)"}
,"kobachi osaragi" : {v:"大仏こばち"}
,"koffing" : {v:"ドガース"}
,"kumiko matsuyama" : {v:"松山久美子"}
,"kuybyshev" : {v:"クイビシェフ(SN Kuybyshev)"}
,"lombre" : {v:"ハスブレロ"}
,"lunala" : {v:"ルナアーラ"}
,"magmar" : {v:"ブーバー"}
,"magnezone" : {v:"ジバコイル"}
,"manami okamoto" : {v:"岡本まなみ"}
,"megumi ijuin" : {v:"伊集院惠"}
,"memphis" : {v:"メンフィス(USS Memphis)"}
,"minsk" : {v:"ミンスク(SN Minsk)"}
,"misato manaka" : {v:"間中美里"}
,"miyabi tsukimiya" : {v:"月宮雅"}
,"morphe" : {v:"モルフェ"}
,"nanu" : {v:"クチナシ"}
,"nidorina" : {v:"ニドリーナ"}
,"nidorino" : {v:"ニドリーノ"}
,"northampton" : {v:"Northampton(ノーザンプトン)", m:{"azur lane" : "ノーザンプトン(USS Northampton)"}}
,"numel" : {v:"ドンメル"}
,"opal" : {v:"ポプラ"}
,"panpour" : {v:"ヒヤップ"}
,"penelope" : {v:"ペネロピ(HMS Penelope)"}
,"piplup" : {v:"ポッチャマ"}
,"poipole" : {v:"ベベノム"}
,"prinz adalbert" : {v:"プリンツ・アーダルベルト(KMS Prinz Adalbert)"}
,"pumpkaboo" : {v:"バケッチャ"}
,"purugly" : {v:"ブニャット"}
,"pyroar" : {v:"カエンジシ"}
,"rei shinohara" : {v:"篠原礼"}
,"reiko ozaki" : {v:"尾崎玲子"}
,"ruriko yuzuki" : {v:"夕月琉璃子"}
,"saya matsubara" : {v:"松原早耶"}
,"seattle" : {v:"シアトル(USS Seattle)"}
,"setsuna imura" : {v:"井村雪菜"}
,"shamu" : {v:"シャム"}
,"sharpedo" : {v:"サメハダー"}
,"shika" : {v:"詩花"}
,"shiori sena" : {v:"瀬名詩織"}
,"skitty" : {v:"エネコ"}
,"skuntank" : {v:"スカタンク"}
,"sliggoo" : {v:"ヌメイル"}
,"slowbro" : {v:"ヤドラン"}
,"smalley" : {v:"スモーリー(USS Smalley)"}
,"spheal" : {v:"タマザラシ"}
,"spinarak" : {v:"イトマル"}
,"starmie" : {v:"スターミー"}
,"swanna" : {v:"スワンナ"}
,"takamichi t. takahata" : {v:"タカミチ・T・高畑"}
,"tapu fini" : {v:"カプ・レヒレ"}
,"tapu lele" : {v:"カプ・テテフ"}
,"tatsugiri" : {v:"シャリタツ"}
,"terapagos" : {v:"テラパゴス"}
,"theseus" : {v:"シーシュース(HMS Theseus)"}
,"thievul" : {v:"フォクスライ"}
,"totodile" : {v:"ワニノコ"}
,"toutaku chuuei" : {v:"月(董卓 仲頴)"}
,"tsubaki egami" : {v:"江上椿"}
,"u-81" : {v:"U-81(KMS U-81)"}
,"u-96" : {v:"U-96(KMS U-96)"}
,"vanguard" : {v:"ヴァンガード(HMS Vanguard)"}
,"vauquelin" : {v:"ヴォークラン(MNF Vauquelin)"}
,"vespiquen" : {v:"ビークイン"}
,"vista-tan" : {v:"Vistaたん"}
,"volcanion" : {v:"ボルケニオン"}
,"wallace" : {v:"ウォーレス", m:{"pokemon" : "ミクリ"}}
,"watchog" : {v:"ミルホッグ"}
,"weedle" : {v:"ビードル"}
,"wichita" : {v:"ウィチタ(USS Wichita)"}
,"wobbuffet" : {v:"ソーナンス"}
,"wugtrio" : {v:"ウミトリオ"}
,"wulfric" : {v:"ウルップ"}
,"wyrdeer" : {v:"アヤシシ"}
,"yakumo aramaki" : {v:"荒槇ヤクモ"}
,"yamper" : {v:"ワンパチ"}
,"yuu ohta" : {v:"太田優"}
,"yveltal" : {v:"イベルタル"}
,"z19" : {v:"Z19(KMS Hermann Künne)"}
,"z24" : {v:"Z24(KMS Z24)"}
,"z36" : {v:"Z36(KMS Z36)"}
,"zweilous" : {v:"ジヘッド"}
,"arizona" : {v:"アリゾナ(USS Arizona)"}
};
window.TranslateDics.artists = artist_ejdic;
window.TranslateDics.groups = group_ejdic;
window.TranslateDics.series = series_ejdic;
window.TranslateDics.tags = tags_ejdic;
window.TranslateDics.chars = chars_ejdic;
