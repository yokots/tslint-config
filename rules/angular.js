module.exports = {
  "extends": ["codelyzer"],
  "rules": {
    "max-inline-declarations": true,
    "banana-in-box": true,
    "no-forward-ref": true,
    "templates-no-negated-async": true,
    "trackBy-function": true,
    "use-view-encapsulation": true,

    "decorator-not-allowed": true,
    "no-attribute-parameter-decorator": true,
    "no-queries-parameter": true,
    "use-host-property-decorator": true,
    "prefer-inline-decorator": true,

    "use-input-property-decorator": true,
    "use-output-property-decorator": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "no-output-on-prefix": true,
    "no-output-named-after-standard-event": true,
    "prefer-output-readonly": true,
    "no-conflicting-life-cycle-hooks": true,

    "contextual-life-cycle": true,
    "use-life-cycle-interface": true,

    "pipe-naming": [true, "camelCase"],
    "use-pipe-decorator": true,
    "use-pipe-transform-interface": true,

    "import-destructuring-spacing": true,
    "angular-whitespace": [true, "check-interpolation", "check-pipe", "check-semicolon"],

    "enforce-component-selector": true,
    "component-class-suffix": true,
    "directive-class-suffix": true,
  }
}
