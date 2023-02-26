import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable, timer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  downloadUrl = '';

  constructor(private storage: AngularFireStorage) { }

  uploadFile(file: File) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const fileNameArray = (file.name).split('.')
    const fileName = `blog-thumbnail/${fileNameArray[0]}${uniqueSuffix}.${fileNameArray[1]}`;
    console.log(fileName)
    const fileRef = this.storage.ref(fileName);
    const task = this.storage.upload(fileName, file);
  
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.downloadUrl = url; // You can get the download URL of the file here
        });
      })
    ).subscribe();
  }
  
}
