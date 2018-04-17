module.exports = {
  rules: {
    // 禁止 import 不在 package.json 中的 dependencies
    "no-implicit-dependencies": {
      "options": [true, "dev"],
      "severity": "off"
    },
    // 禁止使用默认导出
    "no-default-export": {
      "options": [true],
      "severity": "off"
    },
    // 禁止从子模块导入
    "no-submodule-imports": {
      "options": [true, "@angular", "zone.js", "rxjs", "ngx-color", "brace"],
      "severity": "off"
    },
    // 引入命名的默认导出时名字要和导出的名字一致
    "match-default-export-name": true, // type-check
    // import 排序
    "ordered-imports": {
      "options": [true, {
        "named-imports-order": "any",
        "grouped-imports": true,
        "import-sources-order": "any",
        "module-source-path": "full",
      }],
      "severity": "off"
    },
    // 禁止重复引入
    "no-duplicate-imports": true,

    // 不要使用 commonjs 的导入方法和 ts 的 var 导入方法
    "no-var-requires": true,
    "no-require-imports": true,

    // 使用 namespace 替代废弃的 module，但 namespace 也不建议使用
    "no-internal-module": true,
    // 禁止命名空间
    "no-namespace": true,
    // 在同一个文件内禁止可以合并的 namespace
    "no-mergeable-namespace": true,
    // https://palantir.github.io/tslint/rules/no-unnecessary-qualifier/
    "no-unnecessary-qualifier": true, // type-check
    // 禁止三斜线命令
    "no-reference": true,
    "no-reference-import": true,

    // 禁止有副作用的导入
    "no-import-side-effect": {
      "options": [true],
      "severity": "off"
    },
  }
};
