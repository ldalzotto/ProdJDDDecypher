import {SimpleFile} from './SimpleFile';
import {PartedSimpleFile} from "./PartedSimpleFile";

export class ArrayBufferSlicer {

  NB_BUF_MAX: number = 5000000;
  private fileToSclice: SimpleFile;

  constructor(fileToSclice: SimpleFile) {
    this.fileToSclice = fileToSclice;
  }

  public slice(): Array<PartedSimpleFile> {
    const initialArrayBuffer: ArrayBuffer = this.fileToSclice.fileAsBytes;
    const returnArray: Array<PartedSimpleFile> = new Array<PartedSimpleFile>();
    if (initialArrayBuffer.byteLength > this.NB_BUF_MAX) {
      // number of times

      const numberOfScliceNeeded: number = Math.ceil(initialArrayBuffer.byteLength / this.NB_BUF_MAX);
      for (let i = 0; i < numberOfScliceNeeded; i++) {
        const currentPartedFile: PartedSimpleFile = new PartedSimpleFile(
          new SimpleFile(initialArrayBuffer.slice(i * this.NB_BUF_MAX, (i + 1) * this.NB_BUF_MAX),
            this.fileToSclice.fileName), i);

        returnArray.push(currentPartedFile);
      }

    } else {
      const currentPartedFile: PartedSimpleFile = new PartedSimpleFile(this.fileToSclice, 0);
      returnArray.push(currentPartedFile);
    }

    return returnArray;
  }
}
