import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subject, from } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { Product } from '../product';
//import { Product } from 'src/app/product'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataservice
      .SendGetRequest()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (data: HttpResponse<Product[]>) => {
          this.products = data.body;
        },
        error => {
          console.log(error);
        }
      );
  }

  public firstPage() {
    this.products = [];
    this.dataservice.sendGetRequestToUrl(this.dataservice.first).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.products = res.body;
    })
  }
  public previousPage() {

    if (this.dataservice.prev !== undefined && this.dataservice.prev !== '') {
      this.products = [];
      this.dataservice.sendGetRequestToUrl(this.dataservice.prev).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }

  }
  public nextPage() {
    if (this.dataservice.next !== undefined && this.dataservice.next !== '') {
      this.products = [];
      this.dataservice.sendGetRequestToUrl(this.dataservice.next).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }
  }
  public lastPage() {
    this.products = [];
    this.dataservice.sendGetRequestToUrl(this.dataservice.last).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.products = res.body;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
