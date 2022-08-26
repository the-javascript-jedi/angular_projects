import {Component, Input} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {catchError, finalize} from 'rxjs/operators';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator} from '@angular/forms';
import {noop, of} from 'rxjs';


@Component({
  selector: 'file-upload',
  templateUrl: "file-upload.component.html",
  styleUrls: ["file-upload.component.scss"]
})
export class FileUploadComponent {
  @Input() requiredFileType:string;
  fileName:string="";
  fileUploadError:boolean=false;
  uploadProgress:number;

  constructor(private http:HttpClient){

  }

  onFileSelected(event){
    // only choose the first file
    const file:File=event.target.files[0];
    this.fileName=file.name;
    console.log("this.fileName",this.fileName);
    // send the file as a payload using FormData
    const formData=new FormData();
    // name of file is thumbnail
    formData.append('thumbnail',file);
    this.fileUploadError=false;
    // add a configuration to get the progress number when uploading
    this.http.post("/api/thumbnail-upload",formData,{
      reportProgress:true,
      // values emitted by http post will be events so we can catch these events in subscribe
      // so we will not receive the values from backend
      observe:'events'
    })
      .pipe(
        catchError(error=>{
          this.fileUploadError=true;
          // create new error observable to pass to next function
          return of(error);
        }),finalize(()=>{
          // perform an action if observable completes or errors out
          this.uploadProgress=null;
        })
      )
      .subscribe(event=>{
        // catch the event type upload progress
        if(event.type==HttpEventType.UploadProgress){
          this.uploadProgress=Math.round(100*(event.loaded/event.total));
        }
      })
  }
}
