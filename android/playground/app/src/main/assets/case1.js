

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

define('@weex-component/fed1e8c19c115c5f04ea6be0ffa548b8', function(require, exports, module) {
    module.exports = {
        data: function() {
            var limit = 1000
            var obj = {}
            for (var i = 0; i < limit; i++) {
                obj['a' + i] = 0
            }
            // console.log(JSON.stringify(obj, null, 2))
            return obj
        },
        created: function() {
            // console.log('this = ', this)
        },
        methods: {
            _go: function() {
//                var callNative = 'createInstance("temp","",{bundleUrl:"temp.js"});var instance=instanceMap.temp,env=instance.env;!function(e,t,n,r,i,s,a){var c=e,o=t;c("@weex-component/76006caf11b42c04466012e4a5b7d0b8",function(e,t,n){n.exports={data:function(){return{list:[]}},created:function(){for(var e=300,t=0;e>t;t++)this.list.push({text:0})},methods:{_add:function(){for(var e=0;e<this.list.length;e++)this.list[e].text++}}},n.exports.style={},n.exports.template={type:"scroller",children:[{type:"div",events:{click:"_add"},repeat:{expression:function(){return this.list},value:"v"},children:[{type:"text",attr:{value:function(){return this.$index+" | "+this.v.text}}}]}]}}),o("@weex-component/76006caf11b42c04466012e4a5b7d0b8",{transformerVersion:"0.3.1"})}(env.bundleDefine,env.bundleBootstrap,env.bundleDocument,env.setTimeout,env.clearTimeout,env.setInterval,env.clearInterval);'

//                var module = require('@weex-module/myModule')
                // console.error('module = ', module.evil)
//                module.eval('')
            }
        }
    }
    module.exports.style = {}
    module.exports.template = {
        "type": "div",
        "children": [{
            "type": "text",
            "attr": {
                "value": "data binding"
            }
        }],
        "events": {
            "click": "_go"
        }
    }
})

// require module
bootstrap('@weex-component/fed1e8c19c115c5f04ea6be0ffa548b8', {
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
