export class SimpleFile {

  private _fileAsBytes: ArrayBuffer;
  private _fileName: string;

  constructor(fileAsBytes: ArrayBuffer, fileName: string) {
    this._fileAsBytes = fileAsBytes;
    this._fileName = fileName;
  }

  get fileAsBytes(): ArrayBuffer {
    return this._fileAsBytes;
  }


  set fileAsBytes(value: ArrayBuffer) {
    this._fileAsBytes = value;
  }

  get fileName(): string {
    return this._fileName;
  }

  public clearBytes(): void {
    this.fileAsBytes = null;
  }

}
