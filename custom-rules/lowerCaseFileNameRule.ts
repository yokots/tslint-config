// file name should be lower case with dashes
// "lower-case-file-name": true

import * as Lint from 'tslint';
import * as ts from 'typescript';
import { isAbsolute, relative } from 'path';

function getFailureString(path: string) {
  return `File name must be lower case with dashes: ${path}`;
}

class LowerCaseFileNameRuleWalker extends Lint.RuleWalker {
  public visitSourceFile(node: ts.SourceFile) {
    const path = node.fileName;
    const fileName = isAbsolute(path) ? relative(process.cwd(), path) : path;
    const paths = fileName.replace(/\./g, '').split('/');

    paths.forEach((item) => {
      if (!/^[a-z]+(-[a-z]+)*$/g.test(item)) {
        this.addFailureAt(node.getStart(), node.getWidth(), getFailureString(item));
      }
      super.visitSourceFile(node);
    });
  }
}

export class Rule extends Lint.Rules.AbstractRule {
  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new LowerCaseFileNameRuleWalker(sourceFile, this.getOptions()));
  }
}
