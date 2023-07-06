import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as OAuth from 'oauth-1.0a';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  makeOuathApiCall(url) {
    //const apiUrl = 'https://cdetsng.cisco.com/wsapi/latest/api/bug/CSCwf44641';
    //const apiUrl = "https://cdetsng.cisco.com/wsapi/latest/api/search?criteria=([Submitted-on] >= '01/01/2010') &fields=Severity,Status&count=10&start=99990";
    //const apiUrl = "https://cdetsng.cisco.com/wsapi/latest/api/search?criteria=([Submitted-on]%20%3E%3D%20%2701%2F01%2F2010%27)%20&fields=Severity%2CStatus&count=10&start=99990";
    //const apiUrl = "https://cdetsng.cisco.com/wsapi/latest/api/search";

    const criteria = "([Submitted-on] >= '06/30/2021')";
    const fields = "Severity,Status";
    const count = "10";
    const start = "99990";
    // Build the URL with the query parameters
    const apiUrl = new URL('https://cdetsng.cisco.com/wsapi/latest/api/search');
    apiUrl.searchParams.append("criteria", encodeURIComponent(criteria));
    apiUrl.searchParams.append("fields", encodeURIComponent(fields));
    apiUrl.searchParams.append("count", encodeURIComponent(count));
    apiUrl.searchParams.append("start", encodeURIComponent(start));
    const oauth = new OAuth({
      consumer: {
        key: '0fe2485c-46e0-431c-b3ea-7e6ee41e83d7',
        secret: 'qXwi66sBwIfBQWPm1fh51YZNlG9wbP7i'
      },
      signature_method: 'HMAC-SHA1',
      hash_function(base_string, key) {
        return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
      },
      version: '1.0'
    });

    const request_data = {
      url: apiUrl.toString(),
      method: 'GET',

    };
    const headers = oauth.toHeader(oauth.authorize(request_data));
    const authorizationHeader = headers['Authorization'];

    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: authorizationHeader,
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(apiUrl.toString(), requestOptions);
  }
  constructor(private http: HttpClient) { }
}
