import {Component, Input} from '@angular/core';
import {HttpClient, HttpEventType} from '@angular/common/http';
import {catchError, finalize} from 'rxjs/operators';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator} from '@angular/forms';
import {noop, of} from 'rxjs';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';


@Component({
  selector: 'file-upload',
  templateUrl: "file-upload.component.html",
  styleUrls: ["file-upload.component.scss"],
  providers:[
   {
     provide:NG_VALUE_ACCESSOR,
     multi:true,
     useExisting:FileUploadComponent
   },
   {
     provide:NG_VALIDATORS,
     multi:true,
     useExisting:FileUploadComponent
   }
  ]
})
export class FileUploadComponent implements ControlValueAccessor,Validator{
  @Input() requiredFileType:string;
  fileName:string="";
  fileUploadError:boolean=false;
  fileUploadSuccess:boolean=false;
  uploadProgress:number;
  // initialize as an empty function so that we dont get error
  onChange=(fileName:string)=>{};
  onTouched=()=>{}; 
  onValidatorChange=()=>{}; 
  disabled:boolean=false;

  constructor(private http:HttpClient){  
  }
  onClick(fileUpload:HTMLInputElement){
    this.onTouched();
    fileUpload.click();
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
          this.fileUploadSuccess=true;
        }
        // file upload is complete
        else if(event.type==HttpEventType.Response){
          this.onChange(this.fileName);
          this.onValidatorChange();
        }
      })
  }
  // ControlValueAccessor method manually implemented
  // we will receive the form value for form property linked to our file upload component
  writeValue(value:any){
    // receive the data using ControlValueAccessor from form
    this.fileName=value;
  }
  // registerOnChange - this is a callback function to communicate new changes back to the parent form
  // we call the callback as onChange
  //this will be called automaticaly by the parent form
  registerOnChange(onChange: any): void {
    this.onChange=onChange;
  }
  // registerOnTouched - report back to parent that form has been touched
  // we receive a callback and we call it untouched
  registerOnTouched(onTouched: any): void {
    // we call this function to specify our form element as touched
    this.onTouched=onTouched;
  }
  // contol is enabled or disabled
  setDisabledState(disabled: boolean): void {
    this.disabled=disabled;
  }
  registerOnValidatorChange(onValidatorChange: () => void) {
      this.onValidatorChange=onValidatorChange;
  }
  // validate
  validate(control: AbstractControl<any, any>): ValidationErrors|null {
      if(this.fileUploadSuccess){
        return null;
      }
      let errors:any={
          requiredFileType:this.requiredFileType
      };
      if(this.fileUploadError){
        errors.uploadFaile=true;
      }
      // return error object
      return errors;
  }
}
