module.exports = {
  rules: {
    // 单行注释双斜杠之后要保留一个空格。
    "comment-format": [true, "check-space", {
      "ignore-words": [
        "TODO"
      ]
    }],
    // 完整的注释 // type-check
    "completed-docs": {
      "options": [true, {
        "classes": {
          "visibilities": "exported"
        },
        "function": {
          "visibilities": "exported"
        },
        "interface": {
          "visibilities": "exported"
        },
        "variables": {
          "visibilities": "exported"
        },
        "methods": {
          "privacies": ["public", "protected"],
          "location": "all"
        },
        "properties": {
          "privacies": ["public", "protected"],
          "location": "all"
        }
      }],
      "severity": "off"
    },
    "file-header": {
      "options": [true, "copyright", "/** @copyright (c)2018-present, Gago, Inc. */"],
      "severity": "off"
    },
    // ts 中多余的文档
    // "no-redundata-jsdoc": true,
    // 检查 jsdoc 的格式 https://palantir.github.io/tslint/rules/jsdoc-format/
    "jsdoc-format": {
      "options": [true, "check-multiline-start"],
      "severity": "off"
    }
  }
};
