module.exports = {
  rules: {
    // 禁止逗号操作符
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Comma_Operator
    "ban-comma-operator": true,
    // 禁止使用 arguments.callee
    "no-arg": true,
    // 禁止位运算
    "no-bitwise": true,
    // 禁止使用 debugger 语句
    "no-debugger": true,
    // 禁止使用 eval 语句
    "no-eval": true,

    // 禁止非空断言 foo!.bar
    "no-non-null-assertion": true,
    // https://github.com/palantir/tslint/blob/master/test/rules/no-inferred-empty-object-type/test.ts.lint
    "no-inferred-empty-object-type": {
      "options": [true],
      "severity": "off",
    }, // type-check

    // 禁止 void 表达式
    "no-void-expression": [true, "ignore-arrow-function-shorthand"],
    // 禁止带有计算表达式的 delete 操作符
    "no-dynamic-delete": true,
    // 使用 parseInt 时指定进制
    "radix": true,
    // 严格等
    "triple-equals": true,
    // 禁止出现没有明确含义的数字，最好由常量代替
    "no-magic-numbers": {
      "options": [true, -1, 0, 1, 2, 10, 100],
      "severity": "off",
    },
    // 加号两边只能同是数字或字符串
    "restrict-plus-operands": true, // type-check
    // true === flag 'red' === colorfalse
    "binary-expression-operand-order": true,
    // 使用 isNaN()
    "use-isnan": true,
    // 禁止在条件语句中赋值
    "no-conditional-assignment": true,
    // 禁止不合法的 this https://github.com/palantir/tslint/blob/master/test/rules/no-invalid-this/enabled/test.ts.lint
    "no-invalid-this": true,
    // 禁止把 this 赋值给变量
    "no-this-assignment": [true, {"allow-destructuring": true}],
    // 不要使用未绑定 this 的 method
    "no-unbound-method": [true, "ignore-static"],
    // 不要使用空的 class 和只有 constructor 的 class
    "no-unnecessary-class": [true, "allow-static-only"],
    // 在普通字符串时使用 ${} 时警告
    "no-invalid-template-strings": true,
    // 禁止抛出字符串
    "no-string-throw": true,
    // 禁止与字面量布尔值比较 x === true
    "no-boolean-literal-compare": true, // type-check
    // 严格的布尔表达式 const str = '', if (str) // bad if (str === '') // good
    "strict-boolean-expressions": [true, "allow-null-union", "allow-undefined-union"], // type-check

    // https://github.com/palantir/tslint/blob/master/test/rules/no-unsafe-any/test.ts.lint
    // "no-unsafe-any": true, // 好像有 bug

    // https://palantir.github.io/tslint/rules/no-unsafe-finally/
    "no-unsafe-finally": true,
    // 禁止未使用的变量
    "no-unused-variable": true,
    // 禁止未使用的表达式
    "no-unused-expression": [true, "allow-new", "allow-fast-null-checks"],
    // 使用条件表达式 (strict)
    "prefer-conditional-expression": {
      "options": [true],
      "severity": "off"
    },
    // 使用对象扩展运算符而不是 Object.assign()
    "prefer-object-spread": false,
    // 使用模板字符串
    "prefer-template": [true, "allow-single-concat"],
    // https://palantir.github.io/tslint/rules/prefer-while/
    "prefer-while": true,

    // disallow obj["property"] , should be obj.property
    "no-string-literal": true,
    // https://palantir.github.io/tslint/rules/only-arrow-functions/
    "only-arrow-functions": [true, "allow-declarations", "allow-named-functions"],

    // 禁止对参数重新赋值
    "no-parameter-reassignment": true,
    // 在返回 void 的函数里使用 return; 而不是 return undefined; 在明确指定返回值的函数中返回对应类型的值
    "return-undefined": true, // type-check
    // 在 if，for，do，while 语句中使用大括号
    "curly": [true, "ignore-same-line"],
    // 在能使用 label 的地方使用 label，但建议从不使用
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/label
    "label-position": true,
    // 遍历数组值时建议使用 for-of 循环而不是 for 循环，但更建议使用 map，foreach 等方法
    "prefer-for-of": true,
    // forin 循环中判断 obj.hasOwnProperty(key)
    "forin": true,
    // 不要用 for-in 循环对数组迭代
    "no-for-in-array": true, // type-check

    // 每个 case 语句都要 break
    "no-switch-case-fall-through": true,
    "switch-final-break": true,
    // switch 语句要有 default
    "switch-default": true,
    // https://palantir.github.io/tslint/rules/prefer-switch/
    "prefer-switch": {
      "options": [true],
      "severity": "off"
    },

    "no-unnecessary-callback-wrapper": true,

    // 限制圈复杂度 https://palantir.github.io/tslint/rules/cyclomatic-complexity/
    "cyclomatic-complexity": [true, 10],

    // 禁止返回 await 语句
    "no-return-await": true,
    // 返回 promise 的函数明确用 async 标记
    "promise-function-async": [
      true,
      "check-function-declaration",
      "check-function-expression",
      "check-method-declaration"
    ], // type-check
    // await 语句后只等待 Promise
    "await-promise": true, // type-check
    // 返回 promise 的函数必须得到处理
    "no-floating-promises": true, // type-check
  }
};
