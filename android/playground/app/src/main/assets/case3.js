define('@weex-component/f8f376189b6e8c57843d8e728ef7949f', function(require, exports, module) {

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
                    a: 0,
                    b: 0,
                    c: 0,
                    d: 0,
                    e: 0,
                    f: 0,
                    g: 0,
                    h: 0,
                    i: 0,
                    j: 0,
                    k: 0
                })
            }
            // console.log('list = ', this.list)
        },
        methods: {
            _add: function() {
                for (var i = 0; i < this.list.length; i++) {
                    for (var j in this.list[i]) {
                        this.list[i][j]++
                    }
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
                        return this.$index + ' | a ' + this.v.a
                    }
                }
            }, {
                "type": "text",
                "attr": {
                    "value": function() {
                        return this.$index + ' | b ' + this.v.b
                    }
                }
            }, {
                "type": "text",
                "attr": {
                    "value": function() {
                        return this.$index + ' | c ' + this.v.c
                    }
                }
            }, {
                "type": "text",
                "attr": {
                    "value": function() {
                        return this.$index + ' | d ' + this.v.d
                    }
                }
            }, {
                "type": "text",
                "attr": {
                    "value": function() {
                        return this.$index + ' | e ' + this.v.e
                    }
                }
            }, {
                "type": "text",
                "attr": {
                    "value": function() {
                        return this.$index + ' | f ' + this.v.f
                    }
                }
            }, {
                "type": "text",
                "attr": {
                    "value": function() {
                        return this.$index + ' | g ' + this.v.g
                    }
                }
            }, {
                "type": "text",
                "attr": {
                    "value": function() {
                        return this.$index + ' | h ' + this.v.h
                    }
                }
            }, {
                "type": "text",
                "attr": {
                    "value": function() {
                        return this.$index + ' | i ' + this.v.i
                    }
                }
            }, {
                "type": "text",
                "attr": {
                    "value": function() {
                        return this.$index + ' | j ' + this.v.j
                    }
                }
            }, {
                "type": "text",
                "attr": {
                    "value": function() {
                        return this.$index + ' | k ' + this.v.k
                    }
                }
            }]
        }]
    }

    ;
})

// require module
bootstrap('@weex-component/f8f376189b6e8c57843d8e728ef7949f', {
    "transformerVersion": "0.3.1"
})
