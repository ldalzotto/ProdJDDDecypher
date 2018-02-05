import {FileBO} from './FileBO';

export class ArrayBufferSlicer {

  NB_BUF_MAX: number = 5000000;
  private fileToSclice: FileBO;

  constructor(fileToSclice: FileBO) {
    this.fileToSclice = fileToSclice;
  }

  public slice(): Array<FileBO> {
    const initialArrayBuffer: ArrayBuffer = this.fileToSclice.fileAsBytes;
    const returnArray: Array<FileBO> = new Array<FileBO>();
    if (initialArrayBuffer.byteLength > this.NB_BUF_MAX) {
      // number of times

      const numberOfScliceNeeded: number = Math.ceil(initialArrayBuffer.byteLength / this.NB_BUF_MAX);
      for (let i = 0; i < numberOfScliceNeeded; i++) {
        const currentFile: FileBO = new FileBO(initialArrayBuffer.slice(i * this.NB_BUF_MAX, (i + 1) * this.NB_BUF_MAX),
          this.fileToSclice.fileName, i);
        returnArray.push(currentFile);
      }

    } else {
      this.fileToSclice.part = 0;
      returnArray.push(this.fileToSclice);
    }

    return returnArray;
  }
}
