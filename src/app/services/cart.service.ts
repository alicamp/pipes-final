import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {

  }

  getProducts() {
    this.http.get('url')
      // .map((res: Response) => {
      //   res.json();
      // })
      ;
  }
}

