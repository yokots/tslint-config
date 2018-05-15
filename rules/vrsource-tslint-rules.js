var path = require('path');
var vrRules = path.join(process.cwd(), 'node_modules/vrsource-tslint-rules/rules');

module.exports = {
  "rulesDirectory": [vrRules],
  "rules": {
    /** style */
    // https://github.com/vrsource/vrsource-tslint-rules/blob/master/test/rules/multiline-arrow/default/test.ts.lint
    // "multiline-arrow": [true, "require-parens", "require-block"],

    /** best practices */

    // Flags locations where code calls "new Object()", "new Array()", "new Function()"" (from vr)
    "prefer-literal": [true, "object", "function", "array"],

    // 条件表达式要加括号 (from vr)
    // "conditional-expression-parens": true,

    // 最多有3个参数，当参数过多时，考虑传递对象或数组 (from vr)
    "max-params": [true, 5],
  }
}
