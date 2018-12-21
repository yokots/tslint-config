
## [Style Guide](https://github.com/yokots/typescript-style-guide)

## Usage:

  - ```npm install tslint typescript @yoko/tslint-config -D```

  - 在项目目录下新建 tslint.json
  ```json
    {
      "extends": ["@yoko/tslint-config"],
      "rules": {
        // 覆盖默认规则
      },
      "linterOptions": {
        "exclude": [
          "src/**/*.spec.ts",
          "**/test/**.ts",
          "**/*.d.ts"
        ]
      }
    }
  ```

  - ```npx tslint src/**/*.ts -p . -t stylish``` (适用于 npm v5.2 以上, 错误较少可使用 -t codeFrame)

# 强烈建议

  > 每个人在自己的工程中配置 pre-commit 钩子，在提交代码之前进行检查

  * [husky](https://github.com/typicode/husky) 用 node 配置钩子
  * [lint-staged](https://github.com/okonet/lint-staged) 只检查将要提交的代码
  * [commitlint](https://github.com/marionebl/commitlint) 检查 commit 规范

  配置完后类似于以下这个样子

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -e $GIT_PARAMS"
  }
},
"commitlint": {
  "extends": ["@commitlint/config-conventional"]
},
"lint-staged": {
  "*.{ts,tsx}": [
    "tslint -p . --fix",
    "git add"
  ]
},
```
