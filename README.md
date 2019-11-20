
## [Style Guide](https://github.com/yokots/typescript-style-guide)

## Usage:

  - ```npm i typescript @yokots/tslint-config -D```

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
