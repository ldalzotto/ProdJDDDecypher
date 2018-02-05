export class FileBO {

  private _fileAsBytes: ArrayBuffer;
  private _fileName: string;
  private _part: number;


  constructor(fileAsBytes: ArrayBuffer, fileName: string, part: number) {
    this._fileAsBytes = fileAsBytes;
    this._fileName = fileName;
    this._part = part;
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

  get part(): number {
    return this._part;
  }

  set part(value: number) {
    this._part = value;
  }

  public clearBytes(): void {
    this.fileAsBytes = null;
  }

}
