// Rule to enforce a maximum number of parameters for functions and methods.
// "max-parameters": [true, 5]} // default is 3

import * as Lint from 'tslint';
import * as ts from 'typescript';

class MaxParamsRuleWalker extends Lint.RuleWalker {
  public maxCount = 3;
  public failureString = '';

  constructor(sourceFile: ts.SourceFile, options: Lint.IOptions) {
    super(sourceFile, options);

    if (options.ruleArguments.length > 0) {
      this.maxCount = options.ruleArguments[0];
    }
    this.failureString = `More than max-parameters: ${this.maxCount}`;
  }

  private checkParams(params: ts.NodeArray<ts.ParameterDeclaration>) {
    if (params.length > this.maxCount) {
      const firstParam = params[0];
      const lastParam = params[params.length - 1];
      const width = lastParam.getEnd() - firstParam.getStart();

      this.addFailureAt(firstParam.getStart(), width, this.failureString);
    }
  }

  protected visitMethodDeclaration(node: ts.MethodDeclaration) {
    this.checkParams(node.parameters);
    super.visitMethodDeclaration(node);
  }

  protected visitFunctionDeclaration(node: ts.FunctionDeclaration) {
    this.checkParams(node.parameters);
    super.visitFunctionDeclaration(node);
  }

  protected visitFunctionExpression(node: ts.FunctionExpression) {
    this.checkParams(node.parameters);
    super.visitFunctionExpression(node);
  }

  protected visitArrowFunction(node: ts.ArrowFunction) {
    this.checkParams(node.parameters);
    super.visitArrowFunction(node);
  }
}

export class Rule extends Lint.Rules.AbstractRule {
  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new MaxParamsRuleWalker(sourceFile, this.getOptions()));
  }
}
