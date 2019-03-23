import Minimatch from 'minimatch';
import Project, { CallExpression, SourceFile, Node } from 'ts-simple-ast';
import { ExtractorGetter, ExtractorResult, FileVariableAccessor, ReplaceProjectFunctionCallOptions, ExtractorOptions } from '../../types';
import { AbstractExtractor } from '../abstractExtractor';
import { unquote } from '../../util';

export interface AbstractRefactorExtractorOptions extends ExtractorOptions {
  /**
   * Files on which to perform the action. If undefined, it will be applied on current file.
   */
  path?: string
}



export abstract class AbstractRefactorExtractor extends AbstractExtractor {
  extract(n: CallExpression, index: number, getter: ExtractorGetter, options: Required<ReplaceProjectFunctionCallOptions>, variableAccessor: FileVariableAccessor): ExtractorResult {
    const config = this.getOptionsFromFistArg<AbstractRefactorExtractorOptions>(n) || {};
    return this.buildExtractorResult(n, `undefined`, getter, index, options, config);
  }
  // we need to execute after the job is done (afterWriteExtractorData not on extract) since we will make the nodes invalid
  afterWriteExtractorData(n: CallExpression, index: number, options: Required<ReplaceProjectFunctionCallOptions>) {
    const config = this.getOptionsFromFistArg<AbstractRefactorExtractorOptions>(n) || {};
    if (options.project) {
      let files: SourceFile[] = [];
      if (config.path) {
        files = options.project.getSourceFiles().filter(f => Minimatch(f.getFilePath(), config.path!));
      }
      else {
        files = [options.project.getSourceFile(n.getSourceFile().getFilePath())!];
      }
      files.forEach(f => {
        this.preformRefactor(options.project, options.project.getSourceFile(f.getFilePath())!);
      });
    }
  }
  protected parseOptionValue(name: string, value: Node | undefined): any {
    if (value && ['path'].includes(name)) {
      return unquote(value.getText());
    }
    else {
      return super.parseOptionValue(name, value);
    }
  }
  getConfig() {
    return {
      freeArgumentNumber: 1,
      unusedArgumentDefaultValue: '{}'
    };
  }
  protected abstract preformRefactor(project:  Project, f: SourceFile): void;
}
