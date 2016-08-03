createInstance('temp' + new Date().getTime(), '', { bundleUrl: 'temp.js'});
var instance = instanceMap['temp']
var env = instance.env


;(function (
  __weex_define__,
  __weex_bootstrap__,
  __weex_document__,
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval
) {
var define = __weex_define__
var bootstrap = __weex_bootstrap__

define('@weex-component/2e4d833855a7e1ad26afda31728453f4', function(require, exports, module) {

    ;
    module.exports = {
        data: function() {
            return {
                list: []
            }
        },
        created: function() {
            var limit = 200
            var imgUrl = 'https://img.alicdn.com/bao/uploaded/i3/1060831536/TB2sUmMjFXXXXckXXXXXXXXXXXX_!!1060831536.jpg_400x400q60.jpg'
            for (var i = 0; i < limit; i++) {
                this.list.push({
                    img: imgUrl,
                    text: 'item' + i
                })
            }
        }
    }


    ;
    module.exports.style = {
        "item-wrap": {
            "flexWrap": "wrap",
            "flexDirection": "row"
        },
        "item": {
            "width": 350,
            "height": 480,
            "justifyContent": "center",
            "alignItems": "center"
        },
        "img": {
            "width": 350,
            "height": 350
        }
    }

    ;
    module.exports.template = {
        "type": "scroller",
        "children": [{
            "type": "div",
            "classList": [
                "item-wrap"
            ],
            "children": [{
                "type": "div",
                "classList": [
                    "item"
                ],
                "repeat": {
                    "expression": function() {
                        return this.list
                    },
                    "value": "v"
                },
                "children": [{
                    "type": "image",
                    "classList": [
                        "img"
                    ],
                    "attr": {
                        "src": function() {
                            return this.v.img
                        }
                    }
                }, {
                    "type": "text",
                    "attr": {
                        "value": function() {
                            return this.v.text
                        }
                    }
                }]
            }]
        }]
    }

    ;
})

// require module
bootstrap('@weex-component/2e4d833855a7e1ad26afda31728453f4', {
    "transformerVersion": "0.3.1"
})


})(
  env.bundleDefine,
  env.bundleBootstrap,
  env.bundleDocument,
  env.setTimeout,
  env.clearTimeout,
  env.setInterval,
  env.clearInterval
)
