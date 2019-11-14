import { experimental } from '@angular-devkit/core';
import {
  Rule, SchematicContext, Tree, SchematicsException,
  apply, branchAndMerge, mergeWith, template, renameTemplateFiles, url,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { Schema as Options } from './schema';
import { name, version } from '../../package.json';

interface Dependencies {
  [key: string]: string;
}

function sortObjectByKeys(obj: Dependencies) {
  return Object.keys(obj).sort()
    .reduce<Dependencies>((result, key) => {
      result[key] = obj[key];
      return result;
    }, {});
}

export default function ({ prefix }: Options): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const workspaceConfig = tree.read('/angular.json');
    if (!workspaceConfig) {
      throw new SchematicsException('Could not find Angular workspace configuration');
    }

    const workspace: experimental.workspace.WorkspaceSchema = JSON.parse(workspaceConfig.toString());
    Object.values(workspace.projects).forEach(project => {
      const options = project.architect!['lint'].options;
      project.architect!['lint'].options = Object.assign(options || {}, {
        fix: true,
        format: 'stylish',
        typeCheck: true,
      });
    });
    tree.overwrite('/angular.json', JSON.stringify(workspace, null, 2));

    if (tree.exists('/tslint.json')) {
      tree.delete('/tslint.json');
    }

    const pkg = JSON.parse(tree.read('/package.json')!.toString());
    pkg.devDependencies[name] = `^${version}`;
    pkg.devDependencies = sortObjectByKeys(pkg.devDependencies);
    Reflect.deleteProperty(pkg.dependencies, name);
    tree.overwrite('/package.json', JSON.stringify(pkg, null, 2));

    const templateSource = apply(url('./files'), [
      template({ prefix: JSON.stringify(prefix.split(' ')) }),
      renameTemplateFiles(),
    ]);

    context.addTask(new NodePackageInstallTask());
    return branchAndMerge(mergeWith(templateSource));
  };
}
