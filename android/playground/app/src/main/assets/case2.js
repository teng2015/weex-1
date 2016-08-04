var _instanceId = 'temp' + new Date().getTime()
createInstance(_instanceId, '', { bundleUrl: 'temp.js'});
var instance = instanceMap[_instanceId]
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


define('@weex-component/76006caf11b42c04466012e4a5b7d0b8', function(require, exports, module) {

    ;
    module.exports = {
        data: function() {
            return {
                list: []
            }
        },
        created: function() {
            var limit = 300
            for (var i = 0; i < limit; i++) {
                this.list.push({
                    text: 0
                })
            }
            // console.log('list = ', this.list)
        },
        methods: {
            _add: function() {
                for (var i = 0; i < this.list.length; i++) {
                    this.list[i].text++
                }
            }
        }
    }


    ;
    module.exports.style = {}

    ;
    module.exports.template = {
        "type": "scroller",
        "children": [{
            "type": "div",
            "events": {
                "click": "_add"
            },
            "repeat": {
                "expression": function() {
                    return this.list
                },
                "value": "v"
            },
            "children": [{
                "type": "text",
                "attr": {
                    "value": function() {
                        return this.$index + ' | ' + this.v.text
                    }
                }
            }]
        }]
    }

    ;
})

// require module
bootstrap('@weex-component/76006caf11b42c04466012e4a5b7d0b8', {
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
