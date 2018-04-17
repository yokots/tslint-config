module.exports = {
  "rules": {

    // 如果变量值不变，使用 const
    "prefer-const": true,
    // 声明之前禁止使用
    "no-use-before-declare": true, // type-check
    // 禁止使用 var 声明变量
    "no-var-keyword": true,
    // 一个变量一个声明语句
    "one-variable-per-declaration": true,
    // 禁止变量声明覆盖外层作用域变量
    "no-shadowed-variable": true,
    // 禁止在同一块级作用域内重复声明变量
    "no-duplicate-variable": true,

    // class 和 interface 使用大驼峰命名法
    "class-name": true,
    // 接口不需要前缀
    "interface-name": [true, "never-prefix"],

    // 对 number，string，boolean 禁止使用包装对象
    "no-construct": true,
    // 即使构造函数不需要传参，在声明一个实例时也加上括号。
    "new-parens": true,
    // 不要有稀疏数组。 [1, , 3];
    "no-sparse-arrays": true,
    // 对象内使用属性的简洁写法
    "object-literal-shorthand": true,
    // 在属性需要加引号时再加引号
    "object-literal-key-quotes": [true, "as-needed"],
    // 小数的格式 .5 0.50 prefer 0.5
    "number-literal-format": true,
    // 不要解构 undefined 的值
    "no-unnecessary-initializer": true,
    // 禁止重复的 case 语句
    "no-duplicate-switch-case": true,
    // 禁止重复的 super()
    "no-duplicate-super": true,

    // 可推断的简单类型不需要类型声明
    "no-inferrable-types": [true, "ignore-params"],
    // 声明数组的方式 number[] not Array<number>
    "array-type": [true, "array-simple"], // immutable
    // 简写为函数类型 https://github.com/palantir/tslint/blob/master/test/rules/callable-types/test.ts.lint
    "callable-types": true,
    // prefer foo(): void over foo: () => void
    "prefer-method-signature": true,
    // 函数重载签名连续放置
    "adjacent-overload-signatures": true,
    // 合并可以合并的函数签名
    "unified-signatures": true,
    // 默认类型不用再声明类型 fn<T = number>() {} fn<number>()
    "use-default-type-parameter": true,
    // https://palantir.github.io/tslint/rules/interface-over-type-literal/
    "interface-over-type-literal": true, // immutable

    // 使用 as 断言 (x as string).length not (<string>x).length
    "no-angle-bracket-type-assertion": true,
    // 禁止不必要的类型断言
    "no-unnecessary-type-assertion": true,
    // https://github.com/palantir/tslint/blob/master/test/rules/no-object-literal-type-assertion/test.ts.lint
    "no-object-literal-type-assertion": true,

    // 使用正确的 type
    "ban-types": [true,
      ["Object", "Avoid using the `Object` type. Did you mean `object`?"],
      ["Function", "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."],
      ["Boolean", "Avoid using the `Boolean` type. Did you mean `boolean`?"],
      ["Number", "Avoid using the `Number` type. Did you mean `number`?"],
      ["String", "Avoid using the `String` type. Did you mean `string`?"],
      ["Symbol", "Avoid using the `Symbol` type. Did you mean `symbol`?"]
    ],

    // https://github.com/palantir/tslint/blob/master/test/rules/member-ordering/instance-sandwich/test.ts.lint
    "member-ordering": [true, "instance-sandwich"],
    // 对象字面量排序
    "object-literal-sort-keys": {
      "options": [
        true,
        "ignore-case",
        "match-delcaration-order",
        "shorthand-first",
      ],
      "severity": "off"
    },

    // 使用废弃的方法时警告
    "deprecation": {
      "options": [true],
      "severity": "off"
    }, // type-check,
  }
}
