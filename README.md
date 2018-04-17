
## TODO
* [ ] 整理文档
* [ ] 自定义 tslint rules

# Style Guide

## 参考

1. [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
2. [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
3. [JavaScript Standard Style](https://standardjs.com/index.html)
4. [Microsoft TypeScript Coding Guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
5. [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)
6. [Angular Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
7. [TSLint Rules](https://palantir.github.io/tslint/rules/)
8. [ESLint Rules](http://eslint.org/docs/rules/)
9. [JSDoc](http://usejsdoc.org/)

    **`请务必先阅读上述文档`**

## Usage:

  - npm install tslint typescript @gago/tslint-config

  - 在项目目录下新建 tslint.json
  ```json
    {
      "extends": ["@gago/tslint-config"],
      "linterOptions": {
        "exclude": [
          "src/**/*.spec.ts",
          "**/test/**.ts",
          "**/*.d.ts"
        ]
      }
    }
  ```

  - npx tslint src/**/*.ts -p . -t stylish (适用于 npm v5.2 以上, 错误较少可使用 -t codeFrame)

# **`以下可以先不阅读`**

---

## 1. 单一功能原则

对所用组件、服务应用**单一功能原则**（[`single responsibility principle`](https://zh.wikipedia.org/wiki/%E5%8D%95%E4%B8%80%E5%8A%9F%E8%83%BD%E5%8E%9F%E5%88%99)）。这有助于使代码更简洁，更容易阅读、维护和测试。

1. 一个文件只定义一件事情。考虑每个文件的代码限制在400行以内。
2. 定义简单的函数/方法。考虑每个函数/方法的代码不要超过75行。
3. 单行代码不要超过100个字符。

---

## 2. 命名

### 目录和文件的命名

1. 所有的**文件夹命**名全部使用**小写**。使用 `"-"` 来分隔描述性单词。例如 `react-dom` 。
2. **`React`** 组件以 `.tsx` 结尾。其余文件以 `.ts` 结尾。
3. 使用**大驼峰命名法**来命名**React组件、类**，所有的组件放在 `**/components` 文件夹下。例如 `ReservationCard.tsx, User.ts` 。
4. 使用**小驼峰命名法**来命名**函数，常量**等。例如 `someFunction.ts` 。
5. **单元测试**文件名添加 `.spec` 后缀。例如 `app.spec.ts` 。
6. **端到端测试**文件添加 `.e2e-spec` 后缀。 例如 `app.e2e-spec.ts` 。
7. 其余**非模块文件和没有 export 的模块**命名全部使用**小写**，使用 `"-"` 来分隔描述性单词。 例如 `main-hot.ts` 。

    *文件夹命名与 `node_modules` 里的 `package` 一致。 模块文件的 `filename` 和 `export name` 一致。*

### 编程命名

1. 命名尽量使用单词的全拼，单词过长时也可以部分简写和使用首字母大写，但应加注释。
2. 使用**大驼峰命名法**来命名类、枚举、接口、命名空间（不建议使用）。
3. 使用**小驼峰命名法**来命名函数/方法，变量，属性，参数等。
4. 全局的常量和模块顶层的常量使用**大写蛇形命名法**，代码块内的常量使用**小驼峰命名法**。
5. 避免为私有属性和方法添加前缀下划线。
6. 接口不要添加 `I` 前缀。

---

## 3. 缩进和空白

1. 在文件末尾保留一个空行。
2. 不允许有连续多行空行。
3. 块语句不以空行开始和结束。
4. 禁止空的代码块。
5. 禁止行尾的空格。
6. 禁止水平对齐。
6. 使用**两个空格**缩进。不要混用空格和制表符缩进。
7. 算术运算符( `+, -, *, /, %, **` )，关系运算符( `in, instanceof, <, >, <=, >=` )，相等操作符( `==, !=, ===, !===` )，逻辑运算符( `&&, ||` )，三元运算符( `?, :` )，赋值运算符( `=, +=, -=, *=, /=, %=, **=` )**前后**保留一个空格。
8. `关键字`之后保留一个空格。
9. `{` 花（大）括号的左括号前保留一个空格。当函数的第一个参数是一个字面量对象。`fun({a: 1})`。
10. 字面量对象的`:`后保留一个空格。
11. 逗号，分号之后保留一个空格，他们之前禁止保留空格。

---

## 4. 分号

1. 每条`表达式语句`，`import/export` 语句必须使用分号终止。块语句（带{}的）不需要分号，变量声明语句需要分号（变量声明时建议立即赋值）。
