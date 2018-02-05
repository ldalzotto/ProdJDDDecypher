export interface IFileElementRef {

  nativeElement: IFileNativeElement;
}

export interface IFileNativeElement {

  files: FileList;

  click(): void;

}
