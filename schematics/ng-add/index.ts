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
