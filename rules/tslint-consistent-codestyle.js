module.exports = {
  "extends": ["tslint-consistent-codestyle"],
  "rules": {
    /** naming */

    // 全局常量用大写蛇形，类和接口用帕斯卡，其余的用驼峰，特殊情况可有下划线，还有$
    "naming-convention": [
      true,
      {
        "type": "default",
        "format": ["camelCase"],
        "leadingUnderscore": "forbid",
        "trailingUnderscore": "forbid",
      },
      {
        "type": "variable",
        "modifiers": ["local"],
        "format": ["camelCase"],
        "leadingUnderscore": "allow",
        "final": true,
      },
      {
        "type": "variable",
        "modifiers": ["global", "const"],
        "format": ["UPPER_CASE"]
      },
      {
        "type": "variable",
        "modifiers": ["export", "const"],
        "format": ["UPPER_CASE"]
      },
      {
        "type": "functionVariable",
        "format": ["camelCase"]
      },
      {
        "type": "parameter",
        "format": ["camelCase"]
      },
      {
        "type": "parameter",
        "modifiers": ["unused"],
        "format": ["camelCase"],
        "leadingUnderscore": "allow"
      },
      {
        "type": "type",
        "format": ["PascalCase"]
      },
      {
        "type": "enum",
        "format": ["PascalCase"]
      },
      {
        "type": "enumMember",
        "format": ["UPPER_CASE"]
      },
    ],


    /** best practices */
    // https://github.com/ajafff/tslint-consistent-codestyle/blob/master/docs/no-unused.md
    // "no-unused": true,

    "no-var-before-return": [true, "allow-destructuring"],

    // https://github.com/ajafff/tslint-consistent-codestyle/blob/master/docs/early-exit.md
    "early-exit": [true, {"max-length": 5}],
    // https://github.com/ajafff/tslint-consistent-codestyle/blob/master/docs/no-accessor-recursion.md
    "no-accessor-recursion": true,
    // 禁止可合并的条件判断
    "no-collapsible-if": true,
    // 对象字面量缩写属性靠前
    "object-shorthand-properties-first": true,
    // 参数属性
    "parameter-properties": [true, "leading", "member-access"],
    // 使用常量枚举
    "prefer-const-enum": true,
  }
}
