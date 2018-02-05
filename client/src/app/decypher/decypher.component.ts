import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FilePicker} from './objects/FilePicker';
import {DecypherFileApiService} from './api/DecypherFileApiService';


@Component({
  selector: 'app-decypher',
  templateUrl: './decypher.component.html',
  styleUrls: ['./decypher.component.css']
})
export class DecypherComponent implements OnInit {

  @ViewChild('inputfile') file: ElementRef;
  private filePicker: FilePicker;

  private readAllFilesPromise: Promise<boolean>;

  constructor(private decyperApiService: DecypherFileApiService) {
  }

  ngOnInit() {
    this.filePicker = new FilePicker(this.file);
  }

  public activateFileInput(): void {
    this.filePicker.simulateClick();
    return null;
  }

  public saveFiles(): void {
    this.readFiles();
    console.log('Saving files');
    this.readAllFilesPromise.then((onFulfilled: boolean) => {
      this.decyperApiService.saveFiles(this.filePicker.allFilesAsString);
      this.filePicker.clearFile();
    });
  }

  private readFiles(): void {
    console.log('Reading files');
    this.readAllFilesPromise = this.filePicker.readAllFiles();
  }

  public decypherFiles(): void {
    const fileNames: Array<string> = this.filePicker.getAllFileNames();
    for (const fileName of fileNames) {
      this.decyperApiService.decypherFile(fileName);
    }
  }

}
