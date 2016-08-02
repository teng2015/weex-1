define('@weex-component/fed1e8c19c115c5f04ea6be0ffa548b8', function(require, exports, module) {

    ;
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
                var callNative = 'callNative( ' + JSON.stringify('[{"module":"dom","method":"updateFinish","args":[]}]') + ');'
                var module = require('@weex-module/myModule')
                // console.error('module = ', module.evil)
                module.eval(callNative)
            }
        }
    }


    ;
    module.exports.style = {}

    ;
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

    ;
})

// require module
bootstrap('@weex-component/fed1e8c19c115c5f04ea6be0ffa548b8', {
    "transformerVersion": "0.3.1"
})
