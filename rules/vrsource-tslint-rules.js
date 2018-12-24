module.exports = {
  "rulesDirectory": ["vrsource-tslint-rules/rules"],
  "rules": {
    /** style */
    // https://github.com/vrsource/vrsource-tslint-rules/blob/master/test/rules/multiline-arrow/default/test.ts.lint
    // "multiline-arrow": [true, "require-parens", "require-block"],

    /** best practices */

    // Flags locations where code calls "new Object()", "new Array()", "new Function()""
    "prefer-literal": [true, "object", "function", "array"],

    // 条件表达式要加括号
    // "conditional-expression-parens": true,

    // 最多有3个参数，当参数过多时，考虑传递对象或数组
    "max-params": [true, 3],
  }
}
