import { flat } from 'misc-utils-of-mine-generic'
import { notUndefined } from 'misc-utils-of-mine-typescript'
import Project, {
  FileTextChanges,
  FormatCodeSettings,
  LanguageService,
  SourceFile,
  ts,
  UserPreferences
} from 'ts-simple-ast'

export function applyCodeFixes(project: Project, f: SourceFile, d: CodeFixActionExtended[]) {
  const p = f.getFilePath()
  d.forEach(d => {
    d.changes
      .filter(c => c.getFilePath() === p)
      .forEach(c => {
        project.getSourceFile(p)!.applyTextChanges(c.getTextChanges())
      })
  })
}

export function removeAllUnused(
  project: Project,
  f: SourceFile,
  formatOptions: FormatCodeSettings = {},
  preferences: UserPreferences = {}
) {
  const d = getAllUnusedCodeFixes(project.getLanguageService(), f, formatOptions, preferences)
  applyCodeFixes(project, f, d)
}

export function getAllUnusedCodeFixes(
  languageService: LanguageService,
  sourceFile: SourceFile,
  formatOptions: FormatCodeSettings = {},
  preferences: UserPreferences = {}
): CodeFixActionExtended[] {
  return getAllSupportedCodeFixes(
    languageService,
    sourceFile,
    0,
    sourceFile.getText().length,
    unusedCodes,
    formatOptions,
    preferences
  )
}

const unusedCodes = [6133, 6138] //    "6133 '{0}' is declared but its value is never read.", "6138 Property '{0}' is declared but its value is never read.", "6196 '{0}' is declared but never used.",, "6199 All variables are unused."   "6198 All destructured elements are unused."   "6196 '{0}' is declared but never used.",  , 6205]90012 6134-Report errors on unused locals. 6135 eport errors on unused parameters. 6198 6199 6192 7028 95024 "95053 Remove unused label","95054 Remove all unused labels",

export function getUnusedCodeFixes(
  languageService: LanguageService,
  sourceFile: SourceFile,
  pos: number = 0,
  end: number = sourceFile.getText().length - 1,
  formatOptions: FormatCodeSettings = {},
  preferences: UserPreferences = {}
): CodeFixActionExtended[] {
  return getAllSupportedCodeFixes(languageService, sourceFile, pos, end, unusedCodes, formatOptions, preferences)
}

export function getAllSupportedCodeFixes(
  languageService: LanguageService,
  sourceFile: SourceFile,
  pos: number = 0,
  end: number = sourceFile.getText().length - 1,
  errorCodes?: number[],
  formatOptions: FormatCodeSettings = {},
  preferences: UserPreferences = {}
): CodeFixActionExtended[] {
  const filePtah = sourceFile.getFilePath()
  const all = (errorCodes
    ? getAllSupportedCodeFixeDefinitions().filter(e => errorCodes.includes(e.code))
    : getAllSupportedCodeFixeDefinitions()
  ).map(c => {
    try {
      return languageService
        .getCodeFixesAtPosition(filePtah, pos, end, [c.code], formatOptions, preferences)
        .map(tsc => ({ ...tsc.compilerObject, diagnostic: c, changes: tsc.getChanges() }))
    } catch (error) {}
  })
  return flat(all.filter(notUndefined)).filter(
    c => c.changes.find(c => c.getFilePath() === filePtah) && (c.fixName || c.fixAllDescription)
  )
}

let supportedCodeFixes: TsDiagnostic[]
function getAllSupportedCodeFixeDefinitions() {
  if (!supportedCodeFixes) {
    const supported = getAllSupportedCodeFixCodes()
    const tsDiagnostics = getTsDiagnostics()
    supportedCodeFixes = tsDiagnostics.filter(d => supported.includes(d.code))
  }
  return supportedCodeFixes
}

let allSupportedCodeFixCodes: number[]
function getAllSupportedCodeFixCodes() {
  if (!allSupportedCodeFixCodes) {
    allSupportedCodeFixCodes = ts.getSupportedCodeFixes().map(s => parseInt(s, 10))
  }
  return allSupportedCodeFixCodes
}

// function getAllSupportedCodeFixes(languageService: ts.LanguageService, fileName: string, positionOrRange: number | ts.TextRange, formatOptions: ts.FormatCodeSettings = {}, preferences: ts.UserPreferences = {}): ReadonlyArray<ts.CodeFixAction> {
//   const range: ts.TextRange = typeof (positionOrRange) === 'number' ? { pos: positionOrRange, end: positionOrRange } : positionOrRange
//   const codeFixes = languageService.getCodeFixesAtPosition(fileName, range.pos, range.end, getAllSupportedCodeFixCodes(), formatOptions, preferences);
//   return codeFixes
// }

interface CodeFixActionExtended {
  diagnostic: TsDiagnostic
  changes: FileTextChanges[]
  /** Short name to identify the fix, for use by telemetry. */
  fixName: string
  /**
   * If present, one may call 'getCombinedCodeFix' with this fixId.
   * This may be omitted to indicate that the code fix can't be applied in a group.
   */
  fixId?: {}
  fixAllDescription?: string
  /** Description of the code action to display in the UI of the editor */
  description: string
  // /** Text changes to apply to each file as part of the code action */
  // // changes: FileTextChanges[];
  // /**
  //  * If the user accepts the code fix, the editor should send the action back in a `applyAction` request.
  //  * This allows the language service to have side effects (e.g. installing dependencies) upon a code fix.
  //  */
  // commands?: CodeActionCommand[];
}

interface TsDiagnostic {
  code: number
  category: number
  key: string
  message: string
  reportsUnneccesary: any
}
function getTsDiagnostics(): TsDiagnostic[] {
  return Object.values((ts as any).Diagnostics)
}
function getAllCodeFixesErrorCodes() {
  return getTsDiagnostics()
    .map(d => d.code)
    .filter(d => d)
}
