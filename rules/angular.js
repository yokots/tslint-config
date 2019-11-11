module.exports = {
  "extends": ["codelyzer"],
  "rules": {
    "component-max-inline-declarations": true,
    "use-component-selector": true,
    "use-component-view-encapsulation": true,
    "component-class-suffix": [true, "Component"],
    "directive-class-suffix": [true, "Directive"],

    "contextual-lifecycle": true,
    "use-lifecycle-interface": true,
    "no-conflicting-lifecycle": true,
    "no-lifecycle-call": true,

    "contextual-decorator": true,
    "prefer-inline-decorator": true,
    "no-attribute-decorator": true,

    "no-input-prefix": [true, "can", "is", "should"],
    "no-output-on-prefix": true,
    "no-input-rename": true,
    "no-output-rename": true,
    "no-output-native": true,
    "prefer-output-readonly": true,

    "no-inputs-metadata-property": true,
    "no-outputs-metadata-property": true,
    "no-host-metadata-property": true,
    "no-queries-metadata-property": true,

    "template-banana-in-box": true,
    "template-no-any": true,
    "template-no-negated-async": true,
    "template-no-call-expression": true,
    "template-conditional-complexity": [true, 4],
    "template-cyclomatic-complexity": [true, 5],
    "template-i18n": [true, "check-id", "check-text"],
    "template-use-track-by-function": true,
    "template-no-autofocus": false,
    "template-no-distracting-elements": false,
    "template-click-events-have-key-events": false,
    "template-mouse-events-have-key-events": false,
    "template-accessibility-alt-text": false,
    "template-accessibility-elements-content": false,
    "template-accessibility-table-scope": false,
    "template-accessibility-valid-aria": false,

    "pipe-prefix": false,
    "no-pipe-impure": true,
    "use-pipe-decorator": true,
    "use-pipe-transform-interface": true,

    "no-forward-ref": true,
    "prefer-on-push-component-change-detection": false,

    "angular-whitespace": [true, "check-interpolation", "check-pipe", "check-semicolon"],
    "no-unused-css": true,
    "relative-url-prefix": true,
    "import-destructuring-spacing": true
  }
}
