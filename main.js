var myapp = new Vue({
    // マウントする要素
    el: '#myapp',
    
    // アプリケーションで使用するデータ
    data: {
        message: "あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。 またそのなかでいっしょになったたくさんのひとたち、ファゼーロとロザーロ、羊飼のミーロや、顔の赤いこどもたち、地主のテーモ、山猫博士のボーガント・デストゥパーゴなど、いまこの暗い巨きな石の建物のなかで考えていると、みんなむかし風のなつかしい青い幻燈のように思われます。では、わたくしはいつかの小さなみだしをつけながら、しずかにあの年のイーハトーヴォの五月から十月までを書きつけましょう。",
        sizeRange: 18,
        weightRange: 450,
        colorVal: '#444444',
        fontStyle: {
            whiteSpace: 'pre-line',
        },
        fonts: [
            {id: 1, family: {fontFamily: "'M PLUS 1p'"}, flag: true},
            {id: 2, family: {fontFamily: "'M PLUS Rounded 1c'"}, flag: true},
            {id: 3, family: {fontFamily: "'Hannari'"}, flag: true},
            {id: 4, family: {fontFamily: "'Kokoro'"}, flag: true},
            {id: 5, family: {fontFamily: "'Sawarabi Mincho'"}, flag: true},
            {id: 6, family: {fontFamily: "'Sawarabi Gothic'"}, flag: true},
            {id: 7, family: {fontFamily: "'Nikukyu'"}, flag: true},
            {id: 8, family: {fontFamily: "'Nico Moji'"}, flag: true},
            {id: 9, family: {fontFamily: "'Noto Sans JP'"}, flag: true},
        ],
    },
    
    // プロパティの変更を監視
    watch: {
        sizeRange: {
            handler: function(myNewVal, myOldVal) {
                this.fontStyle.fontSize = myNewVal+'px'
            },
            immediate: true,
        },
        weightRange: {
            handler: function(myNewVal, myOldVal) {
                this.fontStyle.fontWeight = myNewVal
            },
            immediate: true,
        },
        colorVal: {
            handler: function(myNewVal, myOldVal) {
                this.fontStyle.color = myNewVal
            },
            immediate: true,
        },
    },
})