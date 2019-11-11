// tslint:disable
import * as Lint from 'tslint';
import * as ts from 'typescript';
import { isAbsolute, relative } from 'path';

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = 'File name must be lower case with dashes';

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new LowerCaseFileNameRuleWalker(sourceFile, this.getOptions()));
  }
}

class LowerCaseFileNameRuleWalker extends Lint.RuleWalker {
  public visitSourceFile(node: ts.SourceFile) {
    const path = node.fileName;
    const fileName = isAbsolute(path) ? relative(process.cwd(), path) : path;
    const paths = fileName.replace('.', '').split('/');

    paths.forEach((path) => {
      if (/^[a-z]+(-[a-z]+)*$/g.test(path)) {
        return;
      }
      this.addFailure(this.createFailure(node.getStart(), node.getWidth(), `${Rule.FAILURE_STRING}: ${path}`));
    });
  }
}
