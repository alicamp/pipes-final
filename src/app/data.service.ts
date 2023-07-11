import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Product } from './product';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiURL = 'http://localhost:3000/products';
  public first: string = "";
  public prev: string = "";
  public next: string = "";
  public last: string = "";
  constructor(private http: HttpClient) {

  }

  public sendGetRequestToUrl(url: string) { 
    return this.http
      .get<Product[]>(url, { observe: "response" })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap(res => {
          console.log(res.headers.get('Link'));
          this.parseLinkHeader(res.headers.get('Link'));
        }));
  }

  public SendGetRequest() {
    const options = { params: new HttpParams({ fromString: "_page=1&_limit=20" }), observe: "response" };
    const abcdefg = { params: new HttpParams({ fromString: "_page=1&_limit=20" }), observe: "response" };


    // let s = this.http
    // .get<Product[]>(this.apiURL, { params: new HttpParams({ fromString: "_page=1&_limit=20" }), observe: "response" })
    // .subscribe( 
    //   res => {
          
    //   },
    //   error => {

    //   } 
    //   );


    return this.http
      .get<Product[]>(this.apiURL, { params: new HttpParams({ fromString: "_page=1&_limit=20" }), observe: "response" })
      .pipe(
        retry(3),
        catchError(this.handleError),
        tap(res => {
          console.log(res.headers.get('Link'));
          this.parseLinkHeader(res.headers.get('Link'));
        }));
  }

  parseLinkHeader(header) {
    if (header.length == 0) {
      return;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach(p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });

    this.first = links["first"];
    this.last = links["last"];
    this.prev = links["prev"];
    this.next = links["next"];
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error'
    if (error.error instanceof (ErrorEvent)) {
      //client side error
      errorMessage = error.error.message;
    } else {
      //server side error
      errorMessage = `error code ${error.status}\n Message ${error.message} `;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
