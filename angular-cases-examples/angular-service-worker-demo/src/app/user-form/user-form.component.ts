import { Component, OnInit } from '@angular/core';
import { BackgroundSyncManager } from '../BackgroundSyncManager';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('offline-worker.js');
    }
  }

  // registerUser() {
  //   // Submit the form when the user comes back online
  //   if (navigator.onLine) {
  //     const formData = new FormData();
  //     formData.append('name', this.name);
  //     formData.append('email', this.email);
  //     formData.append('password', this.password);
  //     fetch('/submit-form', {
  //       method: 'POST',
  //       body: formData,
  //     });
  //   } else {
  //     // store the form in browser cache
  //     navigator.serviceWorker.ready.then((registration) => {
  //       // Cast the registration object to include the sync property
  //       const syncRegistration = registration as ServiceWorkerRegistration & {
  //         sync: BackgroundSyncManager;
  //       };
  //       // Use the sync event to submit form data
  //       syncRegistration.sync.register('submit-forms');
  //     });
  //   }
  // }

  // registerUser - chatgpt
  registerUser(){
    const formData = new FormData();
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('password', this.password);
    if (!navigator.onLine) {
      this.saveRequestOffline(formData);
    } else {
      this.submitForm(formData);
    }
    
  }
   submitForm(formData: FormData) {
    this.http.post('/api/submit-form', formData).subscribe(response => {
      console.log('Form submitted successfully', response);
    }, error => {
      console.log('Form submission failed', error);
    });
  }

   saveRequestOffline(formData: FormData) {
    // Save the form request to IndexedDB or local storage
    console.log('Form submission saved offline');
  }
}
