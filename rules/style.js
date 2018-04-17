module.exports = {
  "rules": {
    // enforces utf-8 file encoding
    "encoding": true,
    // 换行符
    "linebreak-style": [true, "LF"],

    // 一个文件一个类
    "max-classes-per-file": [true, 1], // 讨论
    // 一个文件控制在400行代码之内
    "max-file-line-count": [true, 400], // 讨论

    // 需要分号
    "semicolon": [true, "always"],
    // 数组，对象需要尾逗号，单行除外
    "trailing-comma": [true, {
      "multiline": "always",
      "singleline": "never"
    }],
    // 字符串使用单引号，在 jsx 中使用双引号
    "quotemark": [true, "single", "jsx-double"],
    // 接口定义使用分号分隔
    "type-literal-delimiter": true,

    // 禁止空的代码块
    "no-empty": true,
    // 文件末尾以空行结束
    "eofline": true,
    // 不要有连续的空行
    "no-consecutive-blank-lines": true,
    // 禁止行尾空格
    "no-trailing-whitespace": true,
    // 禁止不规则的空白 http://eslint.cn/docs/rules/no-irregular-whitespace
    "no-irregular-whitespace": true,
    // 下列几处地方都需要一个空格
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-module",
      "check-operator",
      "check-separator",
      "check-type",
      "check-typecast",
      "check-type-operator",
      "check-preblock"
    ],
    // 指定 type 时，冒号前不要空格，冒号需要一个空格
    "typedef-whitespace": [true, {
      "call-signature": "nospace",
      "index-signature": "nospace",
      "parameter": "nospace",
      "property-declaration": "nospace",
      "variable-declaration": "nospace"
    }, {
      "call-signature": "onespace",
      "index-signature": "onespace",
      "parameter": "onespace",
      "property-declaration": "onespace",
      "variable-declaration": "onespace"
    }],
    // 函数名和小括号之间不要空格
    "space-before-function-paren": [true, {
      anonymous: "never",
      asyncArrow: "always",
      constructor: "never",
      method: "never",
      named: "never",
    }],
    // 检查 import 语句的空格
    "import-spacing": true,
    // 小括号之内没有空格
    "space-within-parens": [true, 0],
    // 在 return 语句前加一个空行
    // "newline-before-return": true,
    // "newline-per-chained-call": true,

    // 垂直对齐
    "align": [
      true,
      "statements",
      "members",
      "elements"
    ],
    // 左大括号在下列几处地方保持在一行内
    "one-line": [
      true,
      "check-catch",
      "check-else",
      "check-finally",
      "check-open-brace",
      "check-whitespace"
    ],
  }
}
