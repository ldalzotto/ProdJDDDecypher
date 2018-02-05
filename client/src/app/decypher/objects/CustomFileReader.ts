import {FileBO} from './FileBO';

export class CustomFileReader {

  private fileReader: FileReader;
  private fileToRead: File;

  constructor(fileToRead: File) {
    this.fileToRead = fileToRead;
    this.fileReader = new FileReader();
  }

  public readFile(): Promise<FileBO> {
    const self: CustomFileReader = this;

    return new Promise<FileBO>((resolve, reject) => {
      const fileReader: FileReader = new FileReader();
      fileReader.onload = function (e: Event) {
        const stringToStoreFile: ArrayBuffer = fileReader.result;
        const file: FileBO = new FileBO(stringToStoreFile, self.fileToRead.name);
        resolve(file);
      };
      fileReader.readAsArrayBuffer(self.fileToRead);
    });
  }

}
