import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {SimpleFile} from '../objects/SimpleFile';
import {FileCypherDTO} from './FileCypherDTO';
import {PartedSimpleFileToDTO} from '../converter/FileBOtoDTO';
import {PartedSimpleFile} from "../objects/PartedSimpleFile";

@Injectable()
export class DecypherFileApiService {

  API_URL: string = 'http://localhost:8080/';
  SAVE_API: string = 'files/file-name/{file-name}/part/{part}';
  DECYPHER_API: string = 'files/file-name/{file-name}';

  constructor(private http: HttpClient) {

  }

  public saveFiles(filesString: Array<PartedSimpleFile>): void {
    if (filesString) {

      let chainedPromise: Promise<void>;

      for (const fileBo of filesString) {
        const fileCypherDTO: FileCypherDTO = PartedSimpleFileToDTO.convert(fileBo);
        console.log(fileCypherDTO);
        console.log('BEFORE PROMISE');
        if (filesString.indexOf(fileBo) === 0) {
          chainedPromise =
            this.delayRequest(fileCypherDTO)
              .then(fileCypherDTO => this.makePostFileNameDecypherRequest(fileCypherDTO))
        } else {
          chainedPromise = chainedPromise
            .then(value => this.delayRequest(fileCypherDTO))
            .then(fileCypherDTO => {
            this.makePostFileNameDecypherRequest(fileCypherDTO);
          });
        }
        console.log('AFTER PROMISE');
      }

    } else {
      console.error('File not defined.');
    }
  }

  public decypherFile(fileName: string): void {
    const callUrl: string = (this.API_URL + this.DECYPHER_API).replace('{file-name}', fileName);
    this.http.get(callUrl).toPromise().then(value => {
      console.log("BOOM");
    });
  }

  private delayRequest(fileCypherDTO: FileCypherDTO): Promise<FileCypherDTO> {
    return new Promise<FileCypherDTO>((resolve, reject) => {
      setTimeout(()=>{
        resolve(fileCypherDTO);
      }, 1000);
    })
  }

  private makePostFileNameDecypherRequest(fileCypherDTO: FileCypherDTO): Promise<void> {

    return new Promise<void>((resolve, reject) => {

        const callUrl: string = (this.API_URL + this.SAVE_API).replace('{file-name}', fileCypherDTO.fileName)
          .replace('{part}', `${fileCypherDTO.part}`);
        this.http.post(callUrl, fileCypherDTO.fileContent).toPromise()
          .then(value => {
            resolve();
            console.log('END_REQUEST');
          });


    });

  }

}
