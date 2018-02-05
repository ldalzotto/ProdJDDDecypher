import {PartedSimpleFile} from "../objects/PartedSimpleFile";

export class FileCypherDTO {

  private _fileContent: ArrayBuffer;
  private _fileName: string;
  private _part: number;

  constructor(fileContent: ArrayBuffer, fileName: string, part: number) {
    this._fileContent = fileContent;
    this._fileName = fileName;
    this._part = part;
  }

  get fileContent(): ArrayBuffer {
    return this._fileContent;
  }


  get part(): number {
    return this._part;
  }

  get fileName(): string {
    return this._fileName;
  }
}
