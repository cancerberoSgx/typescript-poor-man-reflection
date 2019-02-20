import Project from 'ts-simple-ast';
import { replaceFileFunctionCall } from './replaceFileFunctionCall';
import { Config, Replacement } from './types';
import { mkdir, cp } from 'shelljs';
import { dirname, join } from 'path';
import { writeFileSync } from 'fs';
/**
 * Executes the tool on a given TypeScript project in filesystem. See `Config` documentation.
 */
export function replaceProjectFunctionCall(tsConfigFilePath: string, config: Config, replacements: (Replacement | undefined)[] = []) {
  const project = new Project({
    tsConfigFilePath,
    addFilesFromTsConfig: true,
  });
  project
    .getSourceFiles()
    .filter(f => !f.isFromExternalLibrary() && !f.isDeclarationFile())
    .forEach(f => {
      replacements.push(...replaceFileFunctionCall(f, config));
    });
  if (config.out) {
    mkdir('-p', config.out);
    const base = project.createSourceFile('__test.ts', '');
    project.getSourceFiles().forEach(f => {
      if (f !== base) {
        const path = base.getRelativePathTo(f);
        mkdir('-p', join(config.out!, dirname(path)));
        writeFileSync(join(config.out!, path), f.getFullText());
      }
    });
    cp(tsConfigFilePath, join(config.out!, 'tsconfig.json'));
  }
  else {
    project.saveSync();
  }
  return replacements;
}
