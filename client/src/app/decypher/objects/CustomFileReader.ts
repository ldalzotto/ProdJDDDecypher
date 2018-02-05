import {SimpleFile} from './SimpleFile';

export class CustomFileReader {

  private fileReader: FileReader;
  private fileToRead: File;

  constructor(fileToRead: File) {
    this.fileToRead = fileToRead;
    this.fileReader = new FileReader();
  }

  public readFile(): Promise<SimpleFile> {
    const self: CustomFileReader = this;

    return new Promise<SimpleFile>((resolve, reject) => {
      const fileReader: FileReader = new FileReader();
      fileReader.onload = function (e: Event) {
        const stringToStoreFile: ArrayBuffer = fileReader.result;
        const file: SimpleFile = new SimpleFile(stringToStoreFile, self.fileToRead.name);
        resolve(file);
      };
      fileReader.readAsArrayBuffer(self.fileToRead);
    });
  }

}
