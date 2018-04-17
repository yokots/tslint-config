module.exports = {
  "extends": ["tslint-eslint-rules"],
  "rules": {

    /** comment */

    // 强制使用有效的 jsdoc，(from ter) http://eslint.cn/docs/rules/valid-jsdoc
    "valid-jsdoc": true,

    /** style */

    // 不要混用 tab 和 space
    "ter-no-mixed-spaces-and-tabs": true,
    // 禁止多余的分号 (from ter)
    "no-extra-semi": true,
    // 变量声明之后加一个空行
    "ter-newline-after-var": [true, "always"],
    // 使用两个空格缩进 (from ter)
    "ter-indent": [true, 2, {
      "SwitchCase": 1,
      "MemberExpression": 1,
      "FunctionDeclaration": {
        "parameters": 1,
        "body": 1
      },
      "FunctionExpression": {
        "parameters": 1,
        "body": 1
      },
      "callExpression": {
        "arguments": 1
      }
    }],
    // 计算属性没有空格
    "ter-computed-property-spacing": [true, "never"],
    // 函数调用没有空格
    "ter-func-call-spacing": [true, "never"],
    // 禁止多余的空白 (from ter)
    "no-multi-spaces": true,
    // 禁止在数组的方括号内留有空格 (from ter)
    "array-bracket-spacing": [true, "never"],  // 征求意见
    // 对象里的大括号内留有空格 (from ter)
    "object-curly-spacing": [true, "always"],  // 征求意见
    // 在单行代码块中使用空格 (from ter)
    "block-spacing": [true, "always"],
    // 一行代码最多140个字符 (from ter)
    "ter-max-len": [true, {
      "code": 140,
      "tabWidth": 2,
      "ignoreUrls": true,
      "ignoreString": true,
      "ignoreTemplateLiterals": true,
      "ignoreComments": false,
      "ignoreTrailingComments": true
    }],
    // 大括号风格要求 (from ter)
    "brace-style": [true, "1tbs", {
      "allowSingleLine": true
    }],
    // 箭头函数参数括号，一个参数时省略 (from ter) http://eslint.cn/docs/rules/arrow-parens
    "ter-arrow-parens": [true, "as-needed", {
      "requireForBlockBody": true
    }],
    // 箭头函数函数体风格 (from ter) http://eslint.cn/docs/rules/arrow-body-style
    "ter-arrow-body-style": [true, "as-needed", {
      "requireReturnForObjectLiteral": false
    }],

    /** best practices */

    // 禁止不必要的布尔类型转换 (from ter)  Boolean(true)
    "no-extra-boolean-cast": true,
    // 禁止在条件中使用常量表达式 (from ter) if (false) while(true)
    "no-constant-condition": true,
    // 不要对 catch 子句中的异常重新赋值 (from ter)
    "no-ex-assign": true,
    // 正则表达式中不要有多个空格 (from ter) https://eslint.org/docs/rules/no-regex-spaces
    "no-regex-spaces": true,
    // 禁止在正则表达式中使用控制字符 (from ter) http://eslint.cn/docs/rules/no-control-regex
    "no-control-regex": true,
    // 禁止在正则表达式中出现空字符集 (from ter) http://eslint.cn/docs/rules/no-empty-character-class
    "no-empty-character-class": true,
    // from ter
    "ter-prefer-arrow-callback": [true, {
      "allowNamedFunction": false,
      "allowUnboundThis": true
    }],
  }
}
