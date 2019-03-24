// import { TypeGuards , Node, SourceFile, SyntaxKind, ts} from 'ts-simple-ast';

// class SSourceFile implements SourceFile {
//   getFilePath(): string {
//     return undefined as any
//   }  getBaseName(): string {
//     return undefined as any
//   }
//   getBaseNameWithoutExtension(): string {
//     return undefined as any
//   }
//   getExtension(): string {
//     return undefined as any
//   }
//   getDirectory(): import("ts-simple-ast").Directory {
//     return undefined as any
//   }
//   getDirectoryPath(): string {
//     return undefined as any
//   }
//   getFullText(): string {
//     return undefined as any
//   }
//   getLineNumberAtPos(pos: number): number {
//     return undefined as any
//   }
//   getLengthFromLineStartAtPos(pos: number): number {
//     return undefined as any
//   }
//   copyToDirectory(dirPathOrDirectory: string | import("ts-simple-ast").Directory, options?: import("ts-simple-ast").SourceFileCopyOptions | undefined): SourceFile {
//     return undefined as any
//   }
//   copy(filePath: string, options?: import("ts-simple-ast").SourceFileCopyOptions | undefined): SourceFile {
//     return undefined as any
//   }
//   copyImmediately(filePath: string, options?: import("ts-simple-ast").SourceFileCopyOptions | undefined): Promise<SourceFile> {
//     return undefined as any
//   }
//   copyImmediatelySync(filePath: string, options?: import("ts-simple-ast").SourceFileCopyOptions | undefined): SourceFile {
//     return undefined as any
//   }
//   moveToDirectory(dirPathOrDirectory: string | import("ts-simple-ast").Directory, options?: import("ts-simple-ast").SourceFileMoveOptions | undefined): SourceFile {
//     return undefined as any
//   }
//   move(filePath: string, options?: import("ts-simple-ast").SourceFileMoveOptions | undefined): SourceFile {
//     return undefined as any
//   }
//   moveImmediately(filePath: string, options?: import("ts-simple-ast").SourceFileMoveOptions | undefined): Promise<SourceFile> {
//     return undefined as any
//   }
//   moveImmediatelySync(filePath: string, options?: import("ts-simple-ast").SourceFileMoveOptions | undefined): SourceFile {
//     return undefined as any
//   }
//   delete(): void {
//     return undefined as any
//   }
//   deleteImmediately(): Promise<void> {
//     return undefined as any
//   }
//   deleteImmediatelySync(): void {
//     return undefined as any
//   }
//   save(): Promise<void> {
//     return undefined as any
//   }
//   saveSync(): void {
//     return undefined as any
//   }
//   getReferencedFiles(): SourceFile[] {
//     return undefined as any
//   }
//   getTypeReferenceDirectives(): SourceFile[] {
//     return undefined as any
//   }
//   getReferencingSourceFiles(): SourceFile[] {
//     return undefined as any
//   }
//   getReferencingNodesInOtherSourceFiles(): import("ts-simple-ast").SourceFileReferencingNodes[] {
//     return undefined as any
//   }
//   getReferencingLiteralsInOtherSourceFiles(): import("ts-simple-ast").StringLiteral[] {
//     return undefined as any
//   }
//   getImportStringLiterals(): import("ts-simple-ast").StringLiteral[] {
//     return undefined as any
//   }
//   getLanguageVersion(): import("typescript").ScriptTarget {
//     return undefined as any
//   }
//   getLanguageVariant(): import("typescript").LanguageVariant {
//     return undefined as any
//   }
//   isDeclarationFile(): boolean {
//     return undefined as any
//   }
//   isFromExternalLibrary(): boolean {
//     return undefined as any
//   }
//   isInNodeModules(): boolean {
//     return undefined as any
//   }
//   isSaved(): boolean {
//     return undefined as any
//   }
//   getPreEmitDiagnostics(): import("ts-simple-ast").Diagnostic<import("typescript").Diagnostic>[] {
//     return undefined as any
//   }
//   // unindent(pos: number, times?: number | undefined): this;
//   // unindent(positionRange: [number, number], times?: number | undefined): this;
//   unindent(positionRange: any, times?: any) {
//     return undefined as any
//   }
//   // indent(pos: number, times?: number | undefined): this;
//   // indent(positionRange: [number, number], times?: number | undefined): this;
//   indent(positionRange: any, times?: any) {
//     return undefined as any
//   }
//   emit(options?: import("ts-simple-ast").SourceFileEmitOptions | undefined): import("ts-simple-ast").EmitResult {
//     return undefined as any
//   }
//   getEmitOutput(options?: { emitOnlyDtsFiles?: boolean | undefined; } | undefined): import("ts-simple-ast").EmitOutput {
//     return undefined as any
//   }
//   formatText(settings?: import("ts-simple-ast").FormatCodeSettings | undefined): void {
//     return undefined as any
//   }
//   refreshFromFileSystem(): Promise<import("ts-simple-ast").FileSystemRefreshResult> {
//     return undefined as any
//   }
//   refreshFromFileSystemSync(): import("ts-simple-ast").FileSystemRefreshResult {
//     return undefined as any
//   }
//   // getRelativePathTo(sourceFile: SourceFile): string;
//   // getRelativePathTo(directory: import("ts-simple-ast").Directory): string;
//   getRelativePathTo(directory: any) {
//     return undefined as any
//   }
//   // getRelativePathAsModuleSpecifierTo(sourceFile: SourceFile): string;
//   // getRelativePathAsModuleSpecifierTo(directory: import("ts-simple-ast").Directory): string;
//   getRelativePathAsModuleSpecifierTo(directory: any) {
//     return undefined as any
//   }
//   onModified(subscription: (sender: SourceFile) => void, subscribe?: boolean | undefined): this {
//     return undefined as any
//   }
//   organizeImports(formatSettings?: import("ts-simple-ast").FormatCodeSettings | undefined, userPreferences?: import("ts-simple-ast").UserPreferences | undefined): this {
//     return undefined as any
//   }
//   fixMissingImports(formatSettings?: import("ts-simple-ast").FormatCodeSettings | undefined, userPreferences?: import("ts-simple-ast").UserPreferences | undefined): this {
//     return undefined as any
//   }
//   applyTextChanges(textChanges: ReadonlyArray<import("ts-simple-ast").TextChange>): this {
//     return undefined as any
//   }
//   set(structure: Partial<import("ts-simple-ast").SourceFileStructure>): this {
//     return undefined as any
//   }
//   getStructure(): import("ts-simple-ast").SourceFileStructure {
//     return undefined as any
//   }
//   addImportDeclaration(structure: import("ts-simple-ast").ImportDeclarationStructure): import("ts-simple-ast").ImportDeclaration {
//     return undefined as any
//   }
//   addImportDeclarations(structures: ReadonlyArray<import("ts-simple-ast").ImportDeclarationStructure>): import("ts-simple-ast").ImportDeclaration[] {
//     return undefined as any
//   }
//   insertImportDeclaration(index: number, structure: import("ts-simple-ast").ImportDeclarationStructure): import("ts-simple-ast").ImportDeclaration {
//     return undefined as any
//   }
//   insertImportDeclarations(index: number, structures: ReadonlyArray<import("ts-simple-ast").ImportDeclarationStructure>): import("ts-simple-ast").ImportDeclaration[] {
//     return undefined as any
//   }
//   getImportDeclaration(condition: (importDeclaration: import("ts-simple-ast").ImportDeclaration) => boolean): import("ts-simple-ast").ImportDeclaration | undefined;
//   getImportDeclaration(moduleSpecifier: string): import("ts-simple-ast").ImportDeclaration | undefined;
//   getImportDeclaration(moduleSpecifier: any) {
//     return undefined as any
//   }
//   getImportDeclarationOrThrow(condition: (importDeclaration: import("ts-simple-ast").ImportDeclaration) => boolean): import("ts-simple-ast").ImportDeclaration;
//   getImportDeclarationOrThrow(moduleSpecifier: string): import("ts-simple-ast").ImportDeclaration;
//   getImportDeclarationOrThrow(moduleSpecifier: any) {
//     return undefined as any
//   }
//   getImportDeclarations(): import("ts-simple-ast").ImportDeclaration[] {
//     return undefined as any
//   }
//   addExportDeclaration(structure: import("ts-simple-ast").ExportDeclarationStructure): import("ts-simple-ast").ExportDeclaration {
//     return undefined as any
//   }
//   addExportDeclarations(structures: ReadonlyArray<import("ts-simple-ast").ExportDeclarationStructure>): import("ts-simple-ast").ExportDeclaration[] {
//     return undefined as any
//   }
//   insertExportDeclaration(index: number, structure: import("ts-simple-ast").ExportDeclarationStructure): import("ts-simple-ast").ExportDeclaration {
//     return undefined as any
//   }
//   insertExportDeclarations(index: number, structures: ReadonlyArray<import("ts-simple-ast").ExportDeclarationStructure>): import("ts-simple-ast").ExportDeclaration[] {
//     return undefined as any
//   }
//   // getExportDeclaration(condition: (exportDeclaration: import("ts-simple-ast").ExportDeclaration) => boolean): import("ts-simple-ast").ExportDeclaration | undefined;
//   // getExportDeclaration(moduleSpecifier: string): import("ts-simple-ast").ExportDeclaration | undefined;
//   getExportDeclaration(moduleSpecifier: any) {
//     return undefined as any
//   }
//   // getExportDeclarationOrThrow(condition: (exportDeclaration: import("ts-simple-ast").ExportDeclaration) => boolean): import("ts-simple-ast").ExportDeclaration;
//   // getExportDeclarationOrThrow(moduleSpecifier: string): import("ts-simple-ast").ExportDeclaration;
//   getExportDeclarationOrThrow(moduleSpecifier: any) {
//     return undefined as any
//   }
//   getExportDeclarations(): import("ts-simple-ast").ExportDeclaration[] {
//     return undefined as any
//   }
//   addExportAssignment(structure: import("ts-simple-ast").ExportAssignmentStructure): import("ts-simple-ast").ExportAssignment {
//     return undefined as any
//   }
//   addExportAssignments(structures: ReadonlyArray<import("ts-simple-ast").ExportAssignmentStructure>): import("ts-simple-ast").ExportAssignment[] {
//     return undefined as any
//   }
//   insertExportAssignment(index: number, structure: import("ts-simple-ast").ExportAssignmentStructure): import("ts-simple-ast").ExportAssignment {
//     return undefined as any
//   }
//   insertExportAssignments(index: number, structures: ReadonlyArray<import("ts-simple-ast").ExportAssignmentStructure>): import("ts-simple-ast").ExportAssignment[] {
//     return undefined as any
//   }
//   getExportAssignment(condition: (exportAssignment: import("ts-simple-ast").ExportAssignment) => boolean): import("ts-simple-ast").ExportAssignment | undefined {
//     return undefined as any
//   }
//   getExportAssignmentOrThrow(condition: (exportAssignment: import("ts-simple-ast").ExportAssignment) => boolean): import("ts-simple-ast").ExportAssignment {
//     return undefined as any
//   }
//   getExportAssignments(): import("ts-simple-ast").ExportAssignment[] {
//     return undefined as any
//   }
//   getDefaultExportSymbol(): import("ts-simple-ast").Symbol | undefined {
//     return undefined as any
//   }
//   getDefaultExportSymbolOrThrow(): import("ts-simple-ast").Symbol {
//     return undefined as any
//   }
//   getExportSymbols(): import("ts-simple-ast").Symbol[] {
//     return undefined as any
//   }
//   getExportedDeclarations(): Node<import("typescript").Node>[] {
//     return undefined as any
//   }
//   removeDefaultExport(defaultExportSymbol?: import("ts-simple-ast").Symbol | undefined): this {
//     return undefined as any
//   }
//   getStatements(): import("ts-simple-ast").Statement<import("typescript").Statement>[] {
//     return undefined as any
//   }
//   getStatement(findFunction: (statement: Node<import("typescript").Node>) => boolean): import("ts-simple-ast").Statement<import("typescript").Statement> | undefined {
//     return undefined as any
//   }
//   getStatementOrThrow(findFunction: (statement: Node<import("typescript").Node>) => boolean): import("ts-simple-ast").Statement<import("typescript").Statement> {
//     return undefined as any
//   }
//   getStatementByKind<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] | undefined {
//     return undefined as any
//   }
//   getStatementByKindOrThrow<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] {
//     return undefined as any
//   }
//   addStatements(textOrWriterFunction: string | import("ts-simple-ast").WriterFunction): import("ts-simple-ast").Statement<import("typescript").Statement>[] {
//     return undefined as any
//   }
//   insertStatements(index: number, textOrWriterFunction: string | import("ts-simple-ast").WriterFunction): import("ts-simple-ast").Statement<import("typescript").Statement>[] {
//     return undefined as any
//   }
//   removeStatement(index: number): this {
//     return undefined as any
//   }
//   removeStatements(indexRange: [number, number]): this {
//     return undefined as any
//   }
//   addClass(structure: import("ts-simple-ast").ClassDeclarationStructure): import("ts-simple-ast").ClassDeclaration {
//     return undefined as any
//   }
//   addClasses(structures: ReadonlyArray<import("ts-simple-ast").ClassDeclarationStructure>): import("ts-simple-ast").ClassDeclaration[] {
//     return undefined as any
//   }
//   insertClass(index: number, structure: import("ts-simple-ast").ClassDeclarationStructure): import("ts-simple-ast").ClassDeclaration {
//     return undefined as any
//   }
//   insertClasses(index: number, structures: ReadonlyArray<import("ts-simple-ast").ClassDeclarationStructure>): import("ts-simple-ast").ClassDeclaration[] {
//     return undefined as any
//   }
//   getClasses(): import("ts-simple-ast").ClassDeclaration[] {
//     return undefined as any
//   }
//   getClass(name: string): import("ts-simple-ast").ClassDeclaration | undefined;
//   getClass(findFunction: (declaration: import("ts-simple-ast").ClassDeclaration) => boolean): import("ts-simple-ast").ClassDeclaration | undefined;
//   getClass(findFunction: any) {
//     return undefined as any
//   }
//   getClassOrThrow(name: string): import("ts-simple-ast").ClassDeclaration;
//   getClassOrThrow(findFunction: (declaration: import("ts-simple-ast").ClassDeclaration) => boolean): import("ts-simple-ast").ClassDeclaration;
//   getClassOrThrow(findFunction: any) {
//     return undefined as any
//   }
//   addEnum(structure: import("ts-simple-ast").EnumDeclarationStructure): import("ts-simple-ast").EnumDeclaration {
//     return undefined as any
//   }
//   addEnums(structures: ReadonlyArray<import("ts-simple-ast").EnumDeclarationStructure>): import("ts-simple-ast").EnumDeclaration[] {
//     return undefined as any
//   }
//   insertEnum(index: number, structure: import("ts-simple-ast").EnumDeclarationStructure): import("ts-simple-ast").EnumDeclaration {
//     return undefined as any
//   }
//   insertEnums(index: number, structures: ReadonlyArray<import("ts-simple-ast").EnumDeclarationStructure>): import("ts-simple-ast").EnumDeclaration[] {
//     return undefined as any
//   }
//   getEnums(): import("ts-simple-ast").EnumDeclaration[] {
//     return undefined as any
//   }
//   getEnum(name: string): import("ts-simple-ast").EnumDeclaration | undefined;
//   getEnum(findFunction: (declaration: import("ts-simple-ast").EnumDeclaration) => boolean): import("ts-simple-ast").EnumDeclaration | undefined;
//   getEnum(findFunction: any) {
//     return undefined as any
//   }
//   getEnumOrThrow(name: string): import("ts-simple-ast").EnumDeclaration;
//   getEnumOrThrow(findFunction: (declaration: import("ts-simple-ast").EnumDeclaration) => boolean): import("ts-simple-ast").EnumDeclaration;
//   getEnumOrThrow(findFunction: any) {
//     return undefined as any
//   }
//   addFunction(structure: import("ts-simple-ast").FunctionDeclarationStructure): import("ts-simple-ast").FunctionDeclaration {
//     return undefined as any
//   }
//   addFunctions(structures: ReadonlyArray<import("ts-simple-ast").FunctionDeclarationStructure>): import("ts-simple-ast").FunctionDeclaration[] {
//     return undefined as any
//   }
//   insertFunction(index: number, structure: import("ts-simple-ast").FunctionDeclarationStructure): import("ts-simple-ast").FunctionDeclaration {
//     return undefined as any
//   }
//   insertFunctions(index: number, structures: ReadonlyArray<import("ts-simple-ast").FunctionDeclarationStructure>): import("ts-simple-ast").FunctionDeclaration[] {
//     return undefined as any
//   }
//   getFunctions(): import("ts-simple-ast").FunctionDeclaration[] {
//     return undefined as any
//   }
//   getFunction(name: string): import("ts-simple-ast").FunctionDeclaration | undefined;
//   getFunction(findFunction: (declaration: import("ts-simple-ast").FunctionDeclaration) => boolean): import("ts-simple-ast").FunctionDeclaration | undefined;
//   getFunction(findFunction: any) {
//     return undefined as any
//   }
//   getFunctionOrThrow(name: string): import("ts-simple-ast").FunctionDeclaration;
//   getFunctionOrThrow(findFunction: (declaration: import("ts-simple-ast").FunctionDeclaration) => boolean): import("ts-simple-ast").FunctionDeclaration;
//   getFunctionOrThrow(findFunction: any) {
//     return undefined as any
//   }
//   addInterface(structure: import("ts-simple-ast").InterfaceDeclarationStructure): import("ts-simple-ast").InterfaceDeclaration {
//     return undefined as any
//   }
//   addInterfaces(structures: ReadonlyArray<import("ts-simple-ast").InterfaceDeclarationStructure>): import("ts-simple-ast").InterfaceDeclaration[] {
//     return undefined as any
//   }
//   insertInterface(index: number, structure: import("ts-simple-ast").InterfaceDeclarationStructure): import("ts-simple-ast").InterfaceDeclaration {
//     return undefined as any
//   }
//   insertInterfaces(index: number, structures: ReadonlyArray<import("ts-simple-ast").InterfaceDeclarationStructure>): import("ts-simple-ast").InterfaceDeclaration[] {
//     return undefined as any
//   }
//   getInterfaces(): import("ts-simple-ast").InterfaceDeclaration[] {
//     return undefined as any
//   }
//   getInterface(name: string): import("ts-simple-ast").InterfaceDeclaration | undefined;
//   getInterface(findFunction: (declaration: import("ts-simple-ast").InterfaceDeclaration) => boolean): import("ts-simple-ast").InterfaceDeclaration | undefined;
//   getInterface(findFunction: any) {
//     return undefined as any
//   }
//   getInterfaceOrThrow(name: string): import("ts-simple-ast").InterfaceDeclaration;
//   getInterfaceOrThrow(findFunction: (declaration: import("ts-simple-ast").InterfaceDeclaration) => boolean): import("ts-simple-ast").InterfaceDeclaration;
//   getInterfaceOrThrow(findFunction: any) {
//     return undefined as any
//   }
//   addNamespace(structure: import("ts-simple-ast").NamespaceDeclarationStructure): import("ts-simple-ast").NamespaceDeclaration {
//     return undefined as any
//   }
//   addNamespaces(structures: ReadonlyArray<import("ts-simple-ast").NamespaceDeclarationStructure>): import("ts-simple-ast").NamespaceDeclaration[] {
//     return undefined as any
//   }
//   insertNamespace(index: number, structure: import("ts-simple-ast").NamespaceDeclarationStructure): import("ts-simple-ast").NamespaceDeclaration {
//     return undefined as any
//   }
//   insertNamespaces(index: number, structures: ReadonlyArray<import("ts-simple-ast").NamespaceDeclarationStructure>): import("ts-simple-ast").NamespaceDeclaration[] {
//     return undefined as any
//   }
//   getNamespaces(): import("ts-simple-ast").NamespaceDeclaration[] {
//     return undefined as any
//   }
//   getNamespace(name: string): import("ts-simple-ast").NamespaceDeclaration | undefined;
//   getNamespace(findFunction: (declaration: import("ts-simple-ast").NamespaceDeclaration) => boolean): import("ts-simple-ast").NamespaceDeclaration | undefined;
//   getNamespace(findFunction: any) {
//     return undefined as any
//   }
//   getNamespaceOrThrow(name: string): import("ts-simple-ast").NamespaceDeclaration;
//   getNamespaceOrThrow(findFunction: (declaration: import("ts-simple-ast").NamespaceDeclaration) => boolean): import("ts-simple-ast").NamespaceDeclaration;
//   getNamespaceOrThrow(findFunction: any) {
//     return undefined as any
//   }
//   addTypeAlias(structure: import("ts-simple-ast").TypeAliasDeclarationStructure): import("ts-simple-ast").TypeAliasDeclaration {
//     return undefined as any
//   }
//   addTypeAliases(structures: ReadonlyArray<import("ts-simple-ast").TypeAliasDeclarationStructure>): import("ts-simple-ast").TypeAliasDeclaration[] {
//     return undefined as any
//   }
//   insertTypeAlias(index: number, structure: import("ts-simple-ast").TypeAliasDeclarationStructure): import("ts-simple-ast").TypeAliasDeclaration {
//     return undefined as any
//   }
//   insertTypeAliases(index: number, structures: ReadonlyArray<import("ts-simple-ast").TypeAliasDeclarationStructure>): import("ts-simple-ast").TypeAliasDeclaration[] {
//     return undefined as any
//   }
//   getTypeAliases(): import("ts-simple-ast").TypeAliasDeclaration[] {
//     return undefined as any
//   }
//   getTypeAlias(name: string): import("ts-simple-ast").TypeAliasDeclaration | undefined;
//   getTypeAlias(findFunction: (declaration: import("ts-simple-ast").TypeAliasDeclaration) => boolean): import("ts-simple-ast").TypeAliasDeclaration | undefined;
//   getTypeAlias(findFunction: any) {
//     return undefined as any
//   }
//   getTypeAliasOrThrow(name: string): import("ts-simple-ast").TypeAliasDeclaration;
//   getTypeAliasOrThrow(findFunction: (declaration: import("ts-simple-ast").TypeAliasDeclaration) => boolean): import("ts-simple-ast").TypeAliasDeclaration;
//   getTypeAliasOrThrow(findFunction: any) {
//     return undefined as any
//   }
//   addVariableStatement(structure: import("ts-simple-ast").VariableStatementStructure): import("ts-simple-ast").VariableStatement {
//     return undefined as any
//   }
//   addVariableStatements(structures: ReadonlyArray<import("ts-simple-ast").VariableStatementStructure>): import("ts-simple-ast").VariableStatement[] {
//     return undefined as any
//   }
//   insertVariableStatement(index: number, structure: import("ts-simple-ast").VariableStatementStructure): import("ts-simple-ast").VariableStatement {
//     return undefined as any
//   }
//   insertVariableStatements(index: number, structures: ReadonlyArray<import("ts-simple-ast").VariableStatementStructure>): import("ts-simple-ast").VariableStatement[] {
//     return undefined as any
//   }
//   getVariableStatements(): import("ts-simple-ast").VariableStatement[] {
//     return undefined as any
//   }
//   getVariableStatement(name: string): import("ts-simple-ast").VariableStatement | undefined;
//   getVariableStatement(findFunction: (declaration: import("ts-simple-ast").VariableStatement) => boolean): import("ts-simple-ast").VariableStatement | undefined;
//   getVariableStatement(findFunction: any) {
//     return undefined as any
//   }
//   getVariableStatementOrThrow(name: string): import("ts-simple-ast").VariableStatement;
//   getVariableStatementOrThrow(findFunction: (declaration: import("ts-simple-ast").VariableStatement) => boolean): import("ts-simple-ast").VariableStatement;
//   getVariableStatementOrThrow(findFunction: any) {
//     return undefined as any
//   }
//   getVariableDeclarations(): import("ts-simple-ast").VariableDeclaration[] {
//     return undefined as any
//   }
//   getVariableDeclaration(name: string): import("ts-simple-ast").VariableDeclaration | undefined;
//   getVariableDeclaration(findFunction: (declaration: import("ts-simple-ast").VariableDeclaration) => boolean): import("ts-simple-ast").VariableDeclaration | undefined;
//   getVariableDeclaration(findFunction: any) {
//     return undefined as any
//   }
//   getVariableDeclarationOrThrow(name: string): import("ts-simple-ast").VariableDeclaration;
//   getVariableDeclarationOrThrow(findFunction: (declaration: import("ts-simple-ast").VariableDeclaration) => boolean): import("ts-simple-ast").VariableDeclaration;
//   getVariableDeclarationOrThrow(findFunction: any) {
//     return undefined as any
//   }
//   insertText(pos: number, textOrWriterFunction: string | import("ts-simple-ast").WriterFunction): this {
//     return undefined as any
//   }
//   replaceText(range: [number, number], textOrWriterFunction: string | import("ts-simple-ast").WriterFunction): this {
//     return undefined as any
//   }
//   removeText(): this;
//   removeText(pos: number, end: number): this;
//   removeText(pos?: any, end?: any) {
//     return undefined as any
//   }
//   compilerNode: ts.SourceFile = null as any as ts.SourceFile
//   forget(): void {
//     return undefined as any
//   }
//   forgetDescendants(): this {
//     return undefined as any
//   }
//   wasForgotten(): boolean {
//     return undefined as any
//   }
//   getKind(): SyntaxKind {
//     return undefined as any
//   }
//   getKindName(): string {
//     return undefined as any
//   }
//   print(options?: import("ts-simple-ast").PrintNodeOptions | undefined): string {
//     return undefined as any
//   }
//   getSymbolOrThrow(): import("ts-simple-ast").Symbol {
//     return undefined as any
//   }
//   getSymbol(): import("ts-simple-ast").Symbol | undefined {
//     return undefined as any
//   }
//   getType(): import("ts-simple-ast").Type<import("typescript").Type> {
//     return undefined as any
//   }
//   containsRange(pos: number, end: number): boolean {
//     return undefined as any
//   }
//   isInStringAtPos(pos: number): boolean {
//     return undefined as any
//   }
//   getFirstChildOrThrow<T extends Node<import("typescript").Node>>(condition?: ((node: Node<import("typescript").Node>) => node is T) | undefined): T;
//   getFirstChildOrThrow(condition?: ((node: Node<import("typescript").Node>) => boolean) | undefined): Node<import("typescript").Node>;
//   getFirstChildOrThrow(condition?: any) {
//     return undefined as any
//   }
//   getFirstChild<T extends Node<import("typescript").Node>>(condition?: ((node: Node<import("typescript").Node>) => node is T) | undefined): T | undefined;
//   getFirstChild(condition?: ((node: Node<import("typescript").Node>) => boolean) | undefined): Node<import("typescript").Node> | undefined;
//   getFirstChild(condition?: any) {
//     return undefined as any
//   }
//   getLastChildOrThrow<T extends Node<import("typescript").Node>>(condition?: ((node: Node<import("typescript").Node>) => node is T) | undefined): T;
//   getLastChildOrThrow(condition?: ((node: Node<import("typescript").Node>) => boolean) | undefined): Node<import("typescript").Node>;
//   getLastChildOrThrow(condition?: any) {
//     return undefined as any
//   }
//   getLastChild<T extends Node<import("typescript").Node>>(condition?: ((node: Node<import("typescript").Node>) => node is T) | undefined): T | undefined;
//   getLastChild(condition?: ((node: Node<import("typescript").Node>) => boolean) | undefined): Node<import("typescript").Node> | undefined;
//   getLastChild(condition?: any) {
//     return undefined as any
//   }
//   getFirstDescendantOrThrow<T extends Node<import("typescript").Node>>(condition?: ((node: Node<import("typescript").Node>) => node is T) | undefined): T;
//   getFirstDescendantOrThrow(condition?: ((node: Node<import("typescript").Node>) => boolean) | undefined): Node<import("typescript").Node>;
//   getFirstDescendantOrThrow(condition?: any) {
//     return undefined as any
//   }
//   getFirstDescendant<T extends Node<import("typescript").Node>>(condition?: ((node: Node<import("typescript").Node>) => node is T) | undefined): T | undefined;
//   getFirstDescendant(condition?: ((node: Node<import("typescript").Node>) => boolean) | undefined): Node<import("typescript").Node> | undefined;
//   getFirstDescendant(condition?: any) {
//     return undefined as any
//   }
//   getPreviousSiblingOrThrow<T extends Node<import("typescript").Node>>(condition?: ((node: Node<import("typescript").Node>) => node is T) | undefined): T;
//   getPreviousSiblingOrThrow(condition?: ((node: Node<import("typescript").Node>) => boolean) | undefined): Node<import("typescript").Node>;
//   getPreviousSiblingOrThrow(condition?: any) {
//     return undefined as any
//   }
//   getPreviousSibling<T extends Node<import("typescript").Node>>(condition?: ((node: Node<import("typescript").Node>) => node is T) | undefined): T | undefined;
//   getPreviousSibling(condition?: ((node: Node<import("typescript").Node>) => boolean) | undefined): Node<import("typescript").Node> | undefined;
//   getPreviousSibling(condition?: any) {
//     return undefined as any
//   }
//   getNextSiblingOrThrow<T extends Node<import("typescript").Node>>(condition?: ((node: Node<import("typescript").Node>) => node is T) | undefined): T;
//   getNextSiblingOrThrow(condition?: ((node: Node<import("typescript").Node>) => boolean) | undefined): Node<import("typescript").Node>;
//   getNextSiblingOrThrow(condition?: any) {
//     return undefined as any
//   }
//   getNextSibling<T extends Node<import("typescript").Node>>(condition?: ((node: Node<import("typescript").Node>) => node is T) | undefined): T | undefined;
//   getNextSibling(condition?: ((node: Node<import("typescript").Node>) => boolean) | undefined): Node<import("typescript").Node> | undefined;
//   getNextSibling(condition?: any) {
//     return undefined as any
//   }
//   getPreviousSiblings(): Node<import("typescript").Node>[] {
//     return undefined as any
//   }
//   getNextSiblings(): Node<import("typescript").Node>[] {
//     return undefined as any
//   }
//   getChildren(): Node<import("typescript").Node>[] {
//     return undefined as any
//   }
//   getChildAtIndex(index: number): Node<import("typescript").Node> {
//     return undefined as any
//   }
//   getChildSyntaxListOrThrow(): import("ts-simple-ast").SyntaxList {
//     return undefined as any
//   }
//   getChildSyntaxList(): import("ts-simple-ast").SyntaxList | undefined {
//     return undefined as any
//   }
//   forEachChild(cbNode: (node: Node<import("typescript").Node>, traversal: import("ts-simple-ast").ForEachChildTraversalControl) => void, cbNodeArray?: ((nodes: Node<import("typescript").Node>[], traversal: import("ts-simple-ast").ForEachChildTraversalControl) => void) | undefined): void {
//     return undefined as any
//   }
//   forEachDescendant(cbNode: (node: Node<import("typescript").Node>, traversal: import("ts-simple-ast").ForEachDescendantTraversalControl) => void, cbNodeArray?: ((nodes: Node<import("typescript").Node>[], traversal: import("ts-simple-ast").ForEachDescendantTraversalControl) => void) | undefined): void {
//     return undefined as any
//   }
//   getDescendants(): Node<import("typescript").Node>[] {
//     return undefined as any
//   }
//   getDescendantStatements(): import("ts-simple-ast").Statement<import("typescript").Statement>[] {
//     return undefined as any
//   }
//   getChildCount(): number {
//     return undefined as any
//   }
//   getChildAtPos(pos: number): Node<import("typescript").Node> | undefined {
//     return undefined as any
//   }
//   getDescendantAtPos(pos: number): Node<import("typescript").Node> | undefined {
//     return undefined as any
//   }
//   getDescendantAtStartWithWidth(start: number, width: number): Node<import("typescript").Node> | undefined {
//     return undefined as any
//   }
//   getPos(): number {
//     return undefined as any
//   }
//   getEnd(): number {
//     return undefined as any
//   }
//   getStart(includeJsDocComment?: boolean | undefined): number {
//     return undefined as any
//   }
//   getFullStart(): number {
//     return undefined as any
//   }
//   getNonWhitespaceStart(): number {
//     return undefined as any
//   }
//   getWidth(): number {
//     return undefined as any
//   }
//   getFullWidth(): number {
//     return undefined as any
//   }
//   getLeadingTriviaWidth(): number {
//     return undefined as any
//   }
//   getTrailingTriviaWidth(): number {
//     return undefined as any
//   }
//   getTrailingTriviaEnd(): number {
//     return undefined as any
//   }
//   getText(includeJsDocComment?: boolean | undefined): string {
//     return undefined as any
//   }
//   getCombinedModifierFlags(): import("typescript").ModifierFlags {
//     return undefined as any
//   }
//   getSourceFile(): SourceFile {
//     return undefined as any
//   }
//   getNodeProperty<KeyType extends keyof LocalNodeType, LocalNodeType extends import("typescript").Node = import("typescript").SourceFile>(propertyName: KeyType): import("ts-simple-ast").NodePropertyToWrappedType<LocalNodeType, KeyType, NonNullable<LocalNodeType[KeyType]>> {
//     return undefined as any
//   }
//   getAncestors(): Node<import("typescript").Node>[] {
//     return undefined as any
//   }
//   getParent<T extends Node<import("typescript").Node> | undefined = Node<import("typescript").Node> | undefined>(): T {
//     return undefined as any
//   }
//   getParentOrThrow<T extends Node<import("typescript").Node> | undefined = Node<import("typescript").Node> | undefined>(): NonNullable<T> {
//     return undefined as any
//   }
//   getParentWhileOrThrow<T extends Node<import("typescript").Node>>(condition: (node: Node<import("typescript").Node>) => node is T): T;
//   getParentWhileOrThrow(condition: (node: Node<import("typescript").Node>) => boolean): Node<import("typescript").Node>;
//   getParentWhileOrThrow(condition: any) {
//     return undefined as any
//   }
//   getParentWhile<T extends Node<import("typescript").Node>>(condition: (node: Node<import("typescript").Node>) => node is T): T | undefined;
//   getParentWhile(condition: (node: Node<import("typescript").Node>) => boolean): Node<import("typescript").Node> | undefined;
//   getParentWhile(condition: any) {
//     return undefined as any
//   }
//   getParentWhileKindOrThrow<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] {
//     return undefined as any
//   }
//   getParentWhileKind<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] | undefined {
//     return undefined as any
//   }
//   getLastToken(): Node<import("typescript").Node> {
//     return undefined as any
//   }
//   isInSyntaxList(): boolean {
//     return undefined as any
//   }
//   getParentSyntaxListOrThrow(): import("ts-simple-ast").SyntaxList {
//     return undefined as any
//   }
//   getParentSyntaxList(): import("ts-simple-ast").SyntaxList | undefined {
//     return undefined as any
//   }
//   getChildIndex(): number {
//     return undefined as any
//   }
//   getIndentationLevel(): number {
//     return undefined as any
//   }
//   getChildIndentationLevel(): number {
//     return undefined as any
//   }
//   getIndentationText(offset?: number | undefined): string {
//     return undefined as any
//   }
//   getChildIndentationText(offset?: number | undefined): string {
//     return undefined as any
//   }
//   getStartLinePos(includeJsDocComment?: boolean | undefined): number {
//     return undefined as any
//   }
//   getStartLineNumber(includeJsDocComment?: boolean | undefined): number {
//     return undefined as any
//   }
//   getEndLineNumber(): number {
//     return undefined as any
//   }
//   isFirstNodeOnLine(): boolean {
//     return undefined as any
//   }
//   replaceWithText(textOrWriterFunction: string | import("ts-simple-ast").WriterFunction): Node<import("typescript").Node> {
//     return undefined as any
//   }
//   prependWhitespace(textOrWriterFunction: string | import("ts-simple-ast").WriterFunction): void {
//     return undefined as any
//   }
//   appendWhitespace(textOrWriterFunction: string | import("ts-simple-ast").WriterFunction): void {
//     return undefined as any
//   }
//   transform(visitNode: (traversal: import("ts-simple-ast").TransformTraversalControl) => import("typescript").Node): this {
//     return undefined as any
//   }
//   getLeadingCommentRanges(): import("ts-simple-ast").CommentRange[] {
//     return undefined as any
//   }
//   getTrailingCommentRanges(): import("ts-simple-ast").CommentRange[] {
//     return undefined as any
//   }
//   getChildrenOfKind<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind][] {
//     return undefined as any
//   }
//   getFirstChildByKindOrThrow<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] {
//     return undefined as any
//   }
//   getFirstChildByKind<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] | undefined {
//     return undefined as any
//   }
//   getFirstChildIfKindOrThrow<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] {
//     return undefined as any
//   }
//   getFirstChildIfKind<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] | undefined {
//     return undefined as any
//   }
//   getLastChildByKindOrThrow<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] {
//     return undefined as any
//   }
//   getLastChildByKind<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] | undefined {
//     return undefined as any
//   }
//   getLastChildIfKindOrThrow<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] {
//     return undefined as any
//   }
//   getLastChildIfKind<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] | undefined {
//     return undefined as any
//   }
//   getChildAtIndexIfKindOrThrow<TKind extends SyntaxKind>(index: number, kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] {
//     return undefined as any
//   }
//   getChildAtIndexIfKind<TKind extends SyntaxKind>(index: number, kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] | undefined {
//     return undefined as any
//   }
//   getPreviousSiblingIfKindOrThrow<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] {
//     return undefined as any
//   }
//   getNextSiblingIfKindOrThrow<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] {
//     return undefined as any
//   }
//   getPreviousSiblingIfKind<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] | undefined {
//     return undefined as any
//   }
//   getNextSiblingIfKind<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] | undefined {
//     return undefined as any
//   }
//   getParentIfKind<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] | undefined {
//     return undefined as any
//   }
//   getParentIfKindOrThrow<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] {
//     return undefined as any
//   }
//   getFirstAncestorByKindOrThrow<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] {
//     return undefined as any
//   }
//   getFirstAncestorByKind<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] | undefined {
//     return undefined as any
//   }
//   getFirstAncestorOrThrow<T extends Node<import("typescript").Node>>(condition?: ((node: Node<import("typescript").Node>) => node is T) | undefined): T;
//   getFirstAncestorOrThrow(condition?: ((node: Node<import("typescript").Node>) => boolean) | undefined): Node<import("typescript").Node>;
//   getFirstAncestorOrThrow(condition?: any) {
//     return undefined as any
//   }
//   getFirstAncestor<T extends Node<import("typescript").Node>>(condition?: ((node: Node<import("typescript").Node>) => node is T) | undefined): T | undefined;
//   getFirstAncestor(condition?: ((node: Node<import("typescript").Node>) => boolean) | undefined): Node<import("typescript").Node> | undefined;
//   getFirstAncestor(condition?: any) {
//     return undefined as any
//   }
//   getDescendantsOfKind<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind][] {
//     return undefined as any
//   }
//   getFirstDescendantByKindOrThrow<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] {
//     return undefined as any
//   }
//   getFirstDescendantByKind<TKind extends SyntaxKind>(kind: TKind): import("ts-simple-ast").KindToNodeMappings[TKind] | undefined {
//     return undefined as any
//   }


// }
// applyMixins(SourceFile, [SourceFile]);
// function applyMixins(derivedCtor: any, baseCtors: any[]) {
//   baseCtors.forEach(baseCtor => {
//       Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
//           derivedCtor.prototype[name] = baseCtor.prototype[name];
//       });
//   });
// }

