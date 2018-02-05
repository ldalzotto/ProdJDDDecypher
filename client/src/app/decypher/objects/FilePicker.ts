import {ElementRef} from '@angular/core';
import {IFileElementRef} from './IFileElementRef';
import {CustomFileReader} from './CustomFileReader';
import {SimpleFile} from './SimpleFile';
import {ArrayBufferSlicer} from './ArrayBufferSlicer';
import {PartedSimpleFile} from "./PartedSimpleFile";

export class FilePicker {

  private htmlFileComponent: IFileElementRef;
  private _partedFiles: Array<PartedSimpleFile>;

  constructor(htmlFileComponent: ElementRef) {
    this.htmlFileComponent = htmlFileComponent;
    this._partedFiles = new Array<PartedSimpleFile>();
  }

  public simulateClick(): void {
    console.log('Simulate click');
    this.htmlFileComponent.nativeElement.click();
  }

  public readAllFiles(): Promise<boolean> {

    this.partedFiles = new Array<PartedSimpleFile>();
    const self: FilePicker = this;

    return new Promise<boolean>((resolve, reject) => {
      const filesAsString: Array<string> = new Array<string>();
      const fileList: FileList = this.htmlFileComponent.nativeElement.files;
      const fileNumber = fileList.length;

      const readPromiseList: Array<Promise<SimpleFile>> = new Array<Promise<SimpleFile>>();
      for (let i = 0; i < fileNumber; i++) {
        const currentFile: File = fileList.item(i);
        const customFileReader: CustomFileReader = new CustomFileReader(currentFile);
        const readPromise: Promise<SimpleFile> = customFileReader.readFile();
        readPromiseList.push(readPromise);
      }

      Promise.all(readPromiseList)
        .then((value: SimpleFile[]) => {
          for (const fileString of value) {
            console.log(fileString);
            const arrayBufferSclicer: ArrayBufferSlicer = new ArrayBufferSlicer(fileString);

            const splittedFiles: Array<PartedSimpleFile> = arrayBufferSclicer.slice();
            for (const file of splittedFiles) {
              self.partedFiles.push(file);
            }
          }
          resolve(true);
        });
    });

  }

  public clearFile(): void {
    for (const file of this.partedFiles) {
      file.clearBytes();
    }
  }

  public getAllFileNames(): Array<string> {
    const returnArray: Array<string> = new Array<string>();
    for (const partedFile of this.partedFiles) {
      returnArray.push(partedFile.getFilename());
    }
    return returnArray;
  }

  get partedFiles(): Array<PartedSimpleFile> {
    return this._partedFiles;
  }

  set partedFiles(value: Array<PartedSimpleFile>) {
    this._partedFiles = value;
  }
}
