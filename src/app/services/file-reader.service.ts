import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileReaderService {
  private fileReader: FileReader;

  constructor() {
    this.fileReader = new FileReader();
  }

  toBase64(file: File) {
    return from(
      new Promise<string | ArrayBuffer>((resolve, reject) => {
        this.fileReader.readAsDataURL(file);
        this.fileReader.onloadend = () => {
          resolve(this.fileReader.result);
        };
        this.fileReader.onerror = reject;
      })
    );
  }
}
