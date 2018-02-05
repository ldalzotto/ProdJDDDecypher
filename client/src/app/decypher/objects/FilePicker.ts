import {ElementRef} from '@angular/core';
import {IFileElementRef} from './IFileElementRef';
import {CustomFileReader} from './CustomFileReader';
import {FileBO} from './FileBO';
import {ArrayBufferSlicer} from './ArrayBufferSlicer';

export class FilePicker {

  private htmlFileComponent: IFileElementRef;
  private _allFilesAsString: Array<FileBO>;

  constructor(htmlFileComponent: ElementRef) {
    this.htmlFileComponent = htmlFileComponent;
    this._allFilesAsString = new Array<FileBO>();
  }

  public simulateClick(): void {
    console.log('Simulate click');
    this.htmlFileComponent.nativeElement.click();
  }

  public readAllFiles(): Promise<boolean> {

    this.allFilesAsString = new Array<FileBO>();
    const self: FilePicker = this;

    return new Promise<boolean>((resolve, reject) => {
      const filesAsString: Array<string> = new Array<string>();
      const fileList: FileList = this.htmlFileComponent.nativeElement.files;
      const fileNumber = fileList.length;

      const readPromiseList: Array<Promise<FileBO>> = new Array<Promise<FileBO>>();
      for (let i = 0; i < fileNumber; i++) {
        const currentFile: File = fileList.item(i);
        const customFileReader: CustomFileReader = new CustomFileReader(currentFile);
        const readPromise: Promise<FileBO> = customFileReader.readFile();
        readPromiseList.push(readPromise);
      }

      Promise.all(readPromiseList)
        .then((value: FileBO[]) => {
          for (const fileString of value) {
            console.log(fileString);
            const arrayBufferSclicer: ArrayBufferSlicer = new ArrayBufferSlicer(fileString);

            const splittedFiles: Array<FileBO> = arrayBufferSclicer.slice();
            for (const file of splittedFiles) {
              self.allFilesAsString.push(file);
            }
          }
          resolve(true);
        });
    });

  }

  public clearFile(): void {
    for (const file of this.allFilesAsString) {
      file.clearBytes();
    }
  }

  public getAllFileNames(): Array<string> {
    const returnArray: Array<string> = new Array<string>();
    for (const fileBO of this.allFilesAsString) {
      returnArray.push(fileBO.fileName);
    }
    return returnArray;
  }

  get allFilesAsString(): Array<FileBO> {
    return this._allFilesAsString;
  }

  set allFilesAsString(value: Array<FileBO>) {
    this._allFilesAsString = value;
  }
}
