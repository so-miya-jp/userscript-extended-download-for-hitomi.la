// ==UserScript==
// @name		 downloading devided zip file for hitomi.la
// @namespace	 test
// @version		 0.1
// @description	 hitomi.laのZIPダウンロード機能の改造。hitomi.la上の一部項目を翻訳辞書を通して変換して表示する。
// @author		 You
// @match		 https://hitomi.la/*
// @icon		 https://www.google.com/s2/favicons?domain=hitomi.la
// @grant		 none
// ==/UserScript==

//機能一覧
//・hitomi.laのZIPダウンロードで分割ダウンロードを実施する。
//・プログレスバー表示を詳細化。
//・ダウンロードに失敗しても続行。
//・ダウンロードファイル名を事前に入力可能とする。
//・ダウンロードファイル名に:区切りで画像番号を追加すると一部だけダウンロード可能。
//・hitomi.la上のArtist, Group, Series, Characters, Tagsを翻訳辞書を通して変換して表示する。

var count_of_file=0;	//作成したZIPファイルの数
var count_of_error=0;	//エラーの数
var size_of_zipfile=0;	//作成中のZIPファイルのファイルサイズ
if (typeof image_downloaded != 'undefined') {
	//関数image_downloadedが存在している場合だけ動作する。

	// 小数点第2位までの文字列に変換する
	var ceil00 = function(f) {
		var r = '' + Math.ceil(f * 100) / 100;
		var p = r.lastIndexOf('.');
		if (p < 0) {
			r += ".00";
		} else if (r.length - p == 2) {
			r += "0";
		}

		return r;
	};

	//ファイルサイズをサマリする
	var summariseByte = function(len) {
		if ( len < 1024 ) {
			//1KB未満の場合、バイト単位で出力する。
			return '' + len + ' bytes';

		} else if ( len < 1024 * 1024 ) {
			//1MB未満の場合、キロバイト単位で出力する。
			return ceil00(len / 1024) + ' KB';

		} else if ( len < 1024 * 1024 * 1024 ) {
			//1GB未満の場合、メガバイト単位で出力する。
			return ceil00(len / (1024 * 1024)) + ' MB';
		}
		//それ以外の場合、ギガバイト単位で出力する。
		return ceil00(len / (1024 * 1024 * 1024)) + ' GB';
	};

	//idxAryを元に次の取得インデックスを決定する。
	var nextUrlIndex = function(idxAry, curIndex) {
		//例1
		// idxAry = ["10-20", "30-"]のとき、
		// if ( curIndex < 10 - 1 ) return 10 - 1;
		// else if ( curIndex >= 10 - 1 && curIndex < 20 - 1 ) return curIndex + 1;
		// else if ( curIndex >= 20 - 1 && curIndex < 30 - 1 ) return 30 - 1;
		// else if ( curIndex >= 30 - 1 ) return curIndex + 1;
		//とする。
		//例2
		// idxAry = ["-30"]のとき、
		// if ( curIndex < 30 - 1 ) return curIndex + 1;
		// else if ( curIndex >= 30 - 1 ) return urls_to_download.length;
		//とする。
		//例3
		// idxAry = ["10", "20"]のとき、
		// if ( curIndex < 10 - 1 ) return 10 - 1;
		// else if ( curIndex >= 10 - 1 && curIndex < 20 - 1 ) return 20 - 1;
		// else if ( curIndex >= 20 - 1 ) return urls_to_download.length;
		//とする。

		if ( idxAry.length == 0 ) {
			return curIndex + 1;
		}

		var endFlg = false;

		for(var idx in idxAry) {
			var ar = idxAry[idx].split('-');
			endFlg = false;

			//単独数値または'-'の左側数値の判定
			if ( ar[0] != "" ) {
				if ( curIndex < ar[0] - 1 ) {
					return ar[0] - 1;

				} else if ( ar.length == 1 ) {
					endFlg = true;
				}
			}

			//'-'の右側数値の判定
			if ( ar.length == 2 && ( ar[0] != "" || ar[1] != "" ) ) {
				if ( ar[1] == "" || curIndex < ar[1] - 1 ) {
					return curIndex + 1;

				} else {
					endFlg = true;
				}
			}
		}

		if ( endFlg ) {
			return urls_to_download.length;
		}

		return curIndex + 1;
	};

	//プログレスバーラベルのリサイズ処理
	var resizeProgressLabel = function() {
		var progressbar = $("#progressbar");
		var progressLabel = $('#progressbar_label');

		var x = progressbar.offset().left + (progressbar.width() - progressLabel.width()) / 2;
		var y = progressbar.offset().top + (progressbar.height() - progressLabel.height()) / 2;
		progressLabel.offset({left:x, top:y});
	};

	//プログレスバーに情報表示領域を追加する。
	$(document).ready(function(){
		$("#progressbar").append("<span id='progressbar_label' style='position:absolute;font-size:12px;'></span>");

		//ウィンドウのリサイズに追従する
		$(window).resize(resizeProgressLabel);
	});

	//関数image_downloadedを上書きする。
	image_downloaded = function(imgData, err) {
		//プログレスバー
		var progressbar = $("#progressbar");
		var progressLabel = $('#progressbar_label');

		//ファイル名に:が含まれている場合、:以降を取得インデックス情報とする。
		//ファイル名:1-10:21-だった場合、
		//	zip_filename = "ファイル名"
		//	idxAry = ["1-10", "21-"];
		//とする。
		var idxAry = galleryname_to_download.split(':');
		var zip_filename = idxAry[0];

		if (idxAry.length == 1 ) {
			idxAry = [];

		} else {
			idxAry = idxAry.slice(1).map((x) => x.trim());
			zip_filename += "(" + idxAry.join(',') + ")";
		}

		//ダウンロードするファイル名
		var filename = image_names_to_download[currently_downloading_url_index];
		var zipOptions = {type:"blob", compression: 'DEFLATE', compressionOptions:{level:9}};

		//プログレスバーのグラフを更新する
		progressbar.progressbar( "value", (currently_downloading_url_index+1)/urls_to_download.length * 100);

		if (imgData) {
			//ファイルダウンロードしたファイルをZIPに追加する。
			zip.file(filename, imgData, {base64: true});

		} else if (err) {
			//エラー情報をZIPに追加する。
			filename += ".err";
			zip.file(filename, err);
			count_of_error++;

		} else {
			return;
		}

		//ZIPに追加したファイルの圧縮後バイトサイズを取得する。
		zip.file(filename).async("ArrayBuffer").then(function(data) {
			//圧縮後バイトサイズをZIPバイトサイズに追加する。
			size_of_zipfile += data.byteLength;
			//console.log(filename, data.byteLength, "bytes / ", size_of_zipfile, "bytes");

			//プログレスバーラベルの表示を更新する。
			var progressText = '' + (currently_downloading_url_index+1)
			if ( count_of_error > 0 ) {
				progressText += "(⚠️" + count_of_error + ")"
			}
			progressText += ' / ' + urls_to_download.length;
			progressText += '  (' + summariseByte(size_of_zipfile) + ')';
			if ( count_of_file > 0 ) {
				progressText += " (" + (count_of_file+1) + ")"
			}
			progressLabel.text(progressText);

			//プログレスバーラベルの位置を修正。
			resizeProgressLabel();
		});

		//取得インデックス情報を元に次に取得するインデックスを決定する。
		currently_downloading_url_index = nextUrlIndex(idxAry, currently_downloading_url_index);

		if (currently_downloading_url_index >= urls_to_download.length) {
			//全ファイルをダウンロードした場合

			//ZIPファイルを生成する。
			zip.generateAsync(zipOptions).then(function(content) {
				var zipname;
				if ( count_of_file > 0 ) {
					//生成ZIPファイルが0超過の場合
					//生成ZIPファイル名に連番を追加したもので保存する。
					var numText = ('000' + count_of_file).slice(-3);
					zipname = zip_filename + numText;

				} else {
					//生成ZIPファイル名で保存する。
					zipname = zip_filename;
				}
				if ( count_of_error > 0 ) {
					zipname += "(error)";
				}
				saveAs(content, zipname + ".zip");
				count_of_file = 0;
				count_of_error = 0;
				size_of_zipfile = 0;
			});
			progressbar.hide();
			$("#dl-button").show();

		} else {

			if ( size_of_zipfile > 1536 * 1024 * 1024 ) {
				// ZIPファイルのサイズが1.5GBを超過した場合

				//ZIPファイルを生成する。
				zip.generateAsync(zipOptions).then(function(content) {
					var zipname;
					var numText = ('000' + count_of_file).slice(-3);
					zipname = zip_filename + numText;
					if ( count_of_error > 0 ) {
						zipname += "(エラー有)";
					}
					saveAs(content, zipname + ".zip");
					count_of_file++;
				});

				//ZIPファイルの中身をクリアする
				zip.forEach(function(relativePath, file) {
					zip.remove(relativePath);
				});
				count_of_error = 0;
				size_of_zipfile = 0;
			}

			//次の画像ファイルをダウンロードする
			download_next_image();
		}
	};
}
if (typeof download_next_image != 'undefined') {
	//エラーでも続行
	var image_downloaded_error = function(err) {
		console.error(err);
		image_downloaded(null, err.name + ' : ' + err.message);
	}

	//download_next_imageを上書きしてエラー処理catchを追加
	download_next_image = function() {
		throttle(function() {
			//ajax_download_blob(urls_to_download[currently_downloading_url_index]).then(image_downloaded);
			ajax_download_blob(urls_to_download[currently_downloading_url_index])
				.then(image_downloaded)
				.catch(image_downloaded_error);
		});
	};
}
if (typeof ajax_download_blob != 'undefined') {
	//ajax_download_blobを上書きしてエラー処理を変更
	ajax_download_blob = function(url) {
		return new Promise((resolve, reject) => {
			retry(() => {
				return new Promise((resolve, reject) => {
					var xhr = new XMLHttpRequest();
					xhr.onreadystatechange = function() {
						if (this.readyState === 4) {
							if (this.status === 200) {
								resolve(this.response);
							} else {
								//reject(new Error(`ajax_download_blob(${url}) failed, xhr.status: ${xhr.status}`));
								reject(new Error(`Download failed. URL=${url}, Status=${this.statusText}(${this.status})`));
							}
						}
					};
					xhr.open('GET', url);
					xhr.responseType = 'arraybuffer';
					xhr.send();
				});
			//}).then(resolve).catch(console.error);
			}).then(resolve).catch(reject);
		});
	};
}

//ダウンロード名の入力補助
window.TranslateDics = {};
window.TranslateDics.artists = {};
window.TranslateDics.groups = {};
window.TranslateDics.series = {};
window.TranslateDics.tags = {};
window.TranslateDics.chars = {};
if (typeof download_gallery != 'undefined') {
	var original_download_gallery = download_gallery;
	download_gallery = function(galleryname) {
		//辞書をもとに置換を行う。
		var convertWord = function(dic, word) {
			if (word in dic) {
				return dic[word];
			}
			return word;
		};
		//配列arにvalueを追加する。
		//valueが配列の場合は個々に追加する。
		//重複した値は追加しない。
		var pushUniq = function(ar, value) {
			if (Array.isArray(value)) {
				for(var idx=0; idx < value.length; idx++) {
					pushUniq(ar, value[idx]);
				}
			} else if ( ar.indexOf(value) < 0 ) {
				ar.push(value);
			}
		};
		//置換対象文字
		var letterDic = {};
		var pushLetterDic = function(keys, vals) {
			for(var idx=0; idx < keys.length; idx++) {
				letterDic[keys.charCodeAt(idx)] = vals.charAt(idx);
			}
		};
		//Windowsに使用可能なファイル名に変換する。
		var convertFilename = function(name) {
			var result = "";
			for(var idx=0; idx < name.length; idx++) {
				var code = name.charCodeAt(idx);
				if (code in letterDic) {
					//置換対象文字
					result += letterDic[code];

				} else if ( (code >= 0x2700 && code <= 0x27BF)
						 || (code >= 0xE000 && code <= 0xF8FF)
						 || (code >= 0x2011 && code <= 0x26FF) ) {
					//記号
					result += name.charAt(idx);

				} else if ( idx + 1 == name.length ) {
					//最終文字なのでサロゲートチェックしない
					result += name.charAt(idx);

				} else {
					//サロゲートチェック
					if (code >= 0xD83C && code <= 0xD83D) {
						code = name.charCodeAt(idx + 1);
						if (code >= 0xDC00 && code <= 0xDFFF) {
							//サロゲート絵文字
							idx++;

						} else {
							result += name.charAt(idx);
						}

					} else if (code == 0xD83E) {
						code = name.charCodeAt(idx + 1);
						if (code >= 0xDD10 && code <= 0xDDFF) {
							//サロゲート絵文字
							idx++;

						} else {
							result += name.charAt(idx);
						}

					} else {
						result += name.charAt(idx);
					}
				}
			}
			return result;
		};

		//置換対象文字の辞書作成
		pushLetterDic("/\\:*?\"><|", "／￥：＊？”＞＜｜");
		letterDic[0x301C] = '～';	// Shift-JIS → MS932
		letterDic[0x2212] = '－';	// Shift-JIS → MS932
		letterDic[0x00A2] = '￠';	// Shift-JIS → MS932
		letterDic[0x00A3] = '￡';	// Shift-JIS → MS932
		letterDic[0x00AC] = '￢';	// Shift-JIS → MS932
		letterDic[0x2014] = '―';	// Shift-JIS → MS932
		letterDic[0x2016] = '∥';	// Shift-JIS → MS932
		letterDic[0x2661] = '▽';	// 白抜きハートマーク
		letterDic[0x2665] = '▼';	// ハートマーク
		letterDic[0x2764] = '▼';	// ハートマーク

		//タイトル
		var title = $("div.gallery>h1>a").text().trim();

		//アーティスト
		var artists = [];
		$("h2#artists>ul>li>a").each(function() {
			var id = $(this).attr("original_node");
			if (!id) id = $(this).text().trim();
			var result = convertWord(window.TranslateDics.artists, id);
			pushUniq(artists, result);
		});

		//サークル名/会社名
		var groups = [];
		$("div.gallery-info td:contains('Group') ~ td>ul>li>a").each(function() {
			var id = $(this).attr("original_node");
			if (!id) id = $(this).text().trim();
			var result = convertWord(window.TranslateDics.groups, id);
			pushUniq(groups, result);
		});

		//タイプ(manga, doujinshi, game CG, artist CG・・・)
		var type = $("div.gallery-info td:contains('Type') ~ td").text().trim();

		//言語 ※現時点では未使用
		var lang = $("div.gallery-info td:contains('Language') ~ td>a").text().trim();

		//シリーズ
		var series = [];
		$("div.gallery-info td:contains('Series') ~ td>ul>li>a").each(function() {
			var id = $(this).attr("original_node");
			if (!id) id = $(this).text().trim();
			var result = convertWord(window.TranslateDics.series, id);
			pushUniq(series, result);
		});

		//タグ
		var tags = {};
		$("div.gallery-info td:contains('Tags') ~ td>ul>li>a").each(function() {
			var sex = "none";
			var n = $(this).attr("original_node");
			var t = $(this).text().trim();
			if (n) {
				if (n.startsWith("female:")) {
					sex = "female";
					n = n.substring(7);

				} else if (n.startsWith("male:")) {
					sex = "male";
					n = n.substring(5);

				} else if (n.startsWith("none:")) {
					sex = "none";
					n = n.substring(5);
				}

			} else {
				if (t.endsWith("♀")) {
					sex = "female";
					n = t.slice(0, -1).trimEnd();

				} else if (t.endsWith("♂")) {
					sex = "male";
					n = t.slice(0, -1).trimEnd();

				} else {
					n = t;
				}
			}

			var v = {};
			if ( n in tags ) v = tags[n];
			v[sex] = t;
			tags[n] = v;
		});
		//タグに含まれているかを検索する
		var getTagWord = function(cond) {
			var ar = cond.split(':');
			var sex, name;

			if (ar.length == 1) {
				name = cond;

				if ( name in tags ) {
					if ( 'none' in tags[name] ) return tags[name].none;
					if ( 'female' in tags[name] ) return tags[name].female;
					if ( 'male' in tags[name] ) return tags[name].male;
				}

			} else {
				sex = ar[0];
				name = ar[1];

				if ( name in tags ) {
					if ( sex in tags[name] ) return tags[name][sex];
				}
			}

			return '';
		};
		var selectArray = function(ar, title) {
			var result = [];
			if ( ar.length > 1 ) {
				for(let item of ar) {
					if(confirm("「" + item + "」を" + title + "として使用する。")) {
						result.push(item);
					}
				}
			} else {
				result = ar;
			}
			return result;
		};

		var filename = '';
		var t;

		switch(type) {
		case 'doujinshi':
		case 'artist CG':
			if ( groups.length > 0 ) {
				filename += "[" + selectArray(groups, "group").join("、") + "]";
			}
			if ( artists.length > 0 ) {
				filename += "(" + selectArray(artists, "artist").join("、") + ")";
			}
			if ( filename.length > 0 ) {
				filename += " ";
			}
			filename += title;
			if ( series.length > 0 ) {
				filename += "(" + series.join("、") + ")";
			}
			break;

		case 'manga':
			t = getTagWord('anthology');
			if ( t ) {
				//filename += "[" + t + "]";

			} else if ( artists.length > 0 ) {
				//filename += "[" + artists.join("、") + "]";
				filename += "[" + selectArray(artists, "artist").join("、") + "]";

			} else if ( groups.length > 0 ) {
				filename += "[" + selectArray(groups, "group").join("、") + "]";
			}
			if ( filename.length > 0 ) {
				filename += " ";
			}
			filename += title;
			if ( series.length > 0 ) {
				filename += "(" + series.join("、") + ")";
			}
			break;

		case 'game CG':
			if ( groups.length > 0 ) {
				filename += "[" + groups.join("、") + "]";
			}
			if ( filename.length > 0 ) {
				filename += " ";
			}
			filename += title;

			t = getTagWord('nudity only');
			if ( t ) {
				filename += "(" + t + ")";
			}
			break;
		}

		t = getTagWord('incomplete');
		if ( t ) {
			filename += "(" + t + ")";
		}
		t = getTagWord('uncensored');
		if ( t ) {
			filename += "(" + t + ")";
		}

		//ファイル名に使用できない文字の置換
		filename = convertFilename(filename);

		filename = prompt("download filename", filename);
		if ( filename ) {
			original_download_gallery(filename);
		}
	};
}

//一部翻訳
if (typeof limitLists !== 'undefined') {
	var original_limitLists = limitLists;

	var add_tags_title_base = function(obj) {
		var tag = obj.text().trim();
		var sex = "none";

		if (tag.endsWith("♀")) {
			sex = "female";
			tag = tag.slice(0, -1).trimEnd();

		} else if (tag.endsWith("♂")) {
			sex = "male";
			tag = tag.slice(0, -1).trimEnd();
		}

		if (tag in window.TranslateDics.tags) {
			var item = window.TranslateDics.tags[tag];
			var text;

			if (sex == "female") {
				if (item.f) {
					text =	item.f + "♀";
				} else {
					text = ((item.n) ? item.n : item.m) + "♀";
				}

			} else if (sex == "male") {
				if (item.m) {
					text =	item.m + "♂";
				} else {
					text = ((item.n) ? item.n : item.f) + "♂";
				}

			} else {
				text = (item.n) ? item.n : (item.f) ? item.f : item.m;
			}

			obj.attr("original_node", sex + ":" + tag);
			obj.attr("title", sex + ":" + tag);
			obj.text(text);
		}
	}

	var add_title_base = function(obj, dic) {
		var id = obj.text().trim();

		if (id in dic) {
			var text;
			var value = dic[id];

			if (Array.isArray(value)) {
				text = "(" + value.join("、") + ")";
			} else {
				text = value;
			}

			obj.attr("original_node", id);
			obj.attr("title", id);
			obj.text(text);
		}
	}

	var add_tags_title = function() {
		add_tags_title_base($(this));
	}

	var add_artists_title = function() {
		add_title_base($(this), window.TranslateDics.artists);
	}

	var add_groups_title = function() {
		add_title_base($(this), window.TranslateDics.groups);
	}

	var add_series_title = function() {
		add_title_base($(this), window.TranslateDics.series);
	}

	var add_chars_title = function () {
		var id = $(this).text().trim();

		if (id in window.TranslateDics.chars) {
			var text;
			var texts = [];
			var value = window.TranslateDics.chars[id];

			if ( value.m ) {
				var seriesIdArray = [];

				$(".gallery-info td#series li a").each(function() {
					var origNode = $(this).attr("original_node");
					if ( origNode ) {
						seriesIdArray.push(origNode);
					} else {
						seriesIdArray.push($(this).text().trim());
					}
				});

				if ( seriesIdArray.length > 0 ) {
					seriesIdArray.forEach(item => {
						if ( item in value.m ) {
							texts.push(value.m[item]);
						}
					});
				}
			}

			switch( texts.length ) {
			case 0:
				text = value.v;
				break;

			case 1:
				text = texts[0];
				break;

			default:
				text = "(" + texts.join("、") + ")";
				break;
			}

			$(this).attr("original_node", id);
			$(this).attr("title", id);
			$(this).text(text);
		}
	}

	var add_list_title = function() {
		var folders = location.pathname.split('/');
		switch(folders[1]) {
			case 'tag':
				add_tags_title_base($(this));
				break;

			case 'artist':
				add_title_base($(this), window.TranslateDics.artists);
				break;

			case 'group':
				add_title_base($(this), window.TranslateDics.groups);
				break;

			case 'series':
				add_title_base($(this), window.TranslateDics.series);
				break;
		}
	}

	var replace_node = function() {
		//検索一覧
		$(".relatedtags li a").each(add_tags_title);
		$(".artist-list li a").each(add_artists_title);
		$(".dj-desc td:contains('Series') ~ td li a").each(add_series_title);
		$(".list-title h3#artistname").each(add_list_title);

		//個別
		$("#artists li a").each(add_artists_title);
		$("#tags li a").each(add_tags_title);
		$("#characters li a").each(add_chars_title);
		$(".gallery-info td#groups li a").each(add_groups_title);
		$(".gallery-info td#series li a").each(add_series_title);

		//個別下一覧
		$(".relatedtags li a").each(add_tags_title);
		$(".artist-list li a").each(add_artists_title);
		$(".dj-desc td:contains('Series') ~ td li a").each(add_series_title);
	}

	limitLists = function() {
		original_limitLists();
		replace_node();
	};

	$(document).ready(function(){
		replace_node();
		setTimeout(replace_node, 200);
	});
}
