// Prefer use of literals instead of calling new on Object, Array, and Function.
// "prefer-literal": true

import * as Lint from 'tslint';
import * as ts from 'typescript';

function getFailureString(type: 'object' | 'function' | 'array') {
  return `Prefer literal ${type} creation`;
}

class PreferLiteralWalker extends Lint.RuleWalker {
  protected visitNewExpression(node: ts.NewExpression): void {
    const functionName = node.expression.getText();

    if (functionName === 'Object') {
      this.addFailureAt(node.getStart(), node.getWidth(), getFailureString('object'));
    }
    if (functionName === 'Function') {
      this.addFailureAt(node.getStart(), node.getWidth(), getFailureString('function'));
    }
    if (functionName === 'Array') {
      this.addFailureAt(node.getStart(), node.getWidth(), getFailureString('array'));
    }
    super.visitNewExpression(node);
  }
}

export class Rule extends Lint.Rules.AbstractRule {
  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new PreferLiteralWalker(sourceFile, this.getOptions()));
  }
}
