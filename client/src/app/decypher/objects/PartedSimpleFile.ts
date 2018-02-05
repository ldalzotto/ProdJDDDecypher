import {SimpleFile} from "./SimpleFile";

export class PartedSimpleFile{

  private _simpleFile:SimpleFile;
  private _part: number;

  constructor(simpleFile: SimpleFile, part: number) {
    this._simpleFile = simpleFile;
    this._part = part;
  }

  public getFilename():string{
    if(this.simpleFile){
      return this.simpleFile.fileName;
    }
  }

  public getArrayBuffer():ArrayBuffer{
    if(this.simpleFile){
      return this.simpleFile.fileAsBytes;
    }
  }

  public clearBytes():void{
    this.simpleFile.clearBytes();
  }


  get simpleFile(): SimpleFile {
    return this._simpleFile;
  }

  set simpleFile(value: SimpleFile) {
    this._simpleFile = value;
  }

  get part(): number {
    return this._part;
  }

  set part(value: number) {
    this._part = value;
  }
}
