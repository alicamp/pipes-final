import { Component, OnInit } from '@angular/core';
import { FormsDataService } from '../forms-data.service';
import { countries, states, cities } from '../country';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { fromEvent, observable, Observable, of, interval, from, merge, concat } from 'rxjs'
import { throttleTime, scan, map, sample, groupBy, mergeMap, reduce, filter, debounceTime, distinct, concatAll, take, tap, delay, every, mergeAll, flatMap } from 'rxjs/operators';
import { promise, error } from 'protractor';
import { nextTick } from 'process';
import { isNumber } from 'util';
import { group } from 'console';
import { analyzeAndValidateNgModules, flatten } from '@angular/compiler';


@Component({
  selector: 'app-cascade-dropdowns',
  templateUrl: './cascade-dropdowns.component.html',
  styleUrls: ['./cascade-dropdowns.component.css']
})
export class CascadeDropdownsComponent implements OnInit {
  SelectedCountryId: string = "0";
  SelectedStateId: string = "0";
  SelectedCityId: string = "0";
  CountryList: countries[];
  StateList: states[];
  CityList: cities[];
  FormStudent: FormGroup;
  count: number = 0;

  private getNumber(x: any): number {
    return (isNumber(x) ? x : 0);
  }

  constructor(private fb: FormBuilder, private formService: FormsDataService) {




    /*debugger;
    const seconds = interval(1000);
    const clicks = fromEvent(document, 'click');
    const result = seconds.pipe(sample(clicks));

    const x = clicks.pipe(
      map(y => (y as MouseEvent).clientX)
    );
    x.subscribe(emitter => console.log(emitter));
    result.subscribe(x => console.log(x));


    const v = from([1, { a: 2 }, [22, 2], '3']);
    v.subscribe(x => console.log(`${x} is a type of ${typeof (x)}`));

    let source = of([1, 2, 3, 45, 56, 7, 7])
      .pipe(
        filter((x) => Number(x) % 2 == 0)
      );
    var s = of(
      { id: 1, name: 'ali1' },
      { id: 2, name: 'ali2' },
      { id: 2, name: 'ali2.1' },
      { id: 2, name: 'ali2.2' },
      { id: 3, name: 'ali3.1' },
      { id: 3, name: 'ali3.2' }
    )
      .pipe(
        groupBy(p => p.id), mergeMap((group$) => 
          group$)); 
    console.log(s.subscribe(x=>console.log(x))); */
    /*
        of(
          { id: 1, name: 'ali1' },
          { id: 2, name: 'ali2' },
          { id: 2, name: 'ali2.1' },
          { id: 2, name: 'ali2.2' },
          { id: 3, name: 'ali3.1' },
          { id: 3, name: 'ali3.2' }
        )
          .pipe(
            groupBy(p => p.id),
            mergeMap(group$ =>
              group$
                .pipe(
                  reduce((acc, cur) => {
                    return [...acc, cur];
                  }, []))
            ),
          ).subscribe(p => console.log(p));
          */
    /* map(x => this.getNumber(x) * this.getNumber(x))
       (of(1, 2, 3))
       .subscribe((v) => console.log(`value from map: ${v}`));
 
 
     const obs = new Observable(subscriber => {
       try {
         subscriber.next(1);
         subscriber.next(2);
         subscriber.next(3);
         setTimeout(() => {
           subscriber.next(4);
           subscriber.complete();
         }, 1000);
       } catch (error) {
         subscriber.next(error);
       }
     });
 
 
     setTimeout(() => {
       console.log('just before using subscriber');
       obs
         .pipe(
           map(x => x),
           scan(x => this.getNumber(x) + 2, 0)
         )
         .subscribe({
           next(x) {
             console.log(`value of x ${x}`);
           },
           error(x) {
             console.log(`error ${x}`);
           }
           , complete() {
             console.log('all done');
           }
         });
       console.log('just after using subscriber');
 
     }, 1000);
 
 */
    /* another subscribe function */
    /*
        const foo = new Observable(subscriber => {
          console.log('Hello in foo');
          subscriber.next(42);
          subscriber.next('another value aliabbas')
          subscriber.complete();
        });
    
        foo.subscribe({
          next(x) {
            console.log(x);
          },
          error(x) {
            console.log(`this error in foo ${x}`);
          },
          complete() {
            console.log('foo complete');
          }
        });
    
        var s = foo.subscribe(y => {
          console.log('s should be called');
          console.log(y);
        });
    
        s.unsubscribe();
    
        //foo.unsubscribe();
    
    
    
    
        //let count = 0;
        fromEvent(document, 'click')
          .pipe(
            throttleTime(1000),
            map(event => event),        
            // scan(x => 
            //   { this.count = this.count + 1 }
            //   ),
            //scan(this.count => this.count + 1, 0)
          )
          .subscribe(count => {
            console.log(`${event.srcElement} Clicked ${count} times`)
          });
          */



    const obj1 = { id: 3, name: 'name 1' };
    const obj2 = { id: 4, name: 'name 2' };
    const obj3 = { id: 3, name: 'name 3' };
    const vals = [obj1, obj2, obj3];

    from(vals)
      .pipe(distinct(e => e.id))
      .subscribe(console.log);


    const datasource = of(1, 2, 3, 4, 5, 1, 2, 4, 5, 8, 6);
    const subscribtion = datasource
      .pipe(
        //debounceTime(100),
        distinct(),
        map(x => x + 1),
        filter(x => x % 2 === 0)
        //map should be inside pipe
      )
      .subscribe(x => console.log(x));
  }

  get g() {
    return this.FormStudent;
  }

  get f() {
    return this.FormStudent.controls;
  }

  ngOnInit() {
    this.FormStudent = this.fb.group({
      StudentName: ['', Validators.required],
      Country: ["", Validators.required],
      State: ["", Validators.required],
      City: ["", Validators.required]
    });
    this.CountryList = this.formService.GetCountries();

    var observable = Observable.create((observer: any) => {
      observer.next('hi ya');
    });

    var observable2 = Observable.create((observer: any) => {
      observer.next('how ya doing ?');
    });

    //.mergeMap((x: any) => String(x).toUpperCase())
    Observable.create((observer: any) => {
      observer.next('lets use map');
    })
      .pipe(
        map((val: any) => String(val).toUpperCase())
      )
      .subscribe({
        next: (x: any) => this.addItem(x),
        error: (error) => console.log(error),
        complete: console.log('event complete')
      });

    var newObs = merge(observable, observable2);

    newObs.subscribe((x: any) => {
      this.addItem(x);
    });

    let btn = document.getElementById('mybtn');

    const obseravable = fromEvent(btn, 'click');
    obseravable.subscribe(x => console.log((x as MouseEvent).clientX));


    let searchInput = document.getElementById('search');
    const keyup$ = fromEvent(searchInput, 'keyup');

    keyup$
      .pipe(
        map((i: any) => i.currentTarget.value),
        debounceTime(1000)
      ).subscribe((x: any) => console.log(x));


    const obs1 = interval(300).pipe(take(3));
    const obs2 = interval(3000).pipe(take(6));
    const obs3 = interval(1000).pipe(take(2));
    const source = of(obs1, obs2, obs3);
    const example = source.pipe(
      //map(x => of(x + 10)),
      concatAll()
    );
    example
      .subscribe(x => console.log(`example with basic observable ${x}`));

    const log = console.log;

    const returnCode = request => (Number.isInteger(request) ? 200 : 400);

    const fakeRequest = request => of({ code: returnCode(request) })
      .pipe(
        tap(_ => log(`request ${request} and code ${returnCode(request)}`)),
        delay(1000)
      );

    const apiCalls$ = concat(
      fakeRequest(1),
      //fakeRequest('bad request'),
      fakeRequest(2)
    )
      .pipe(
        every(x => x.code === 200),
        tap(e => log(`all request successfull ${e}`))
      );

    apiCalls$.subscribe();


    let newReleases = [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      },
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
      }
    ];
    // newReleases
    // .filter(function (video) {
    //   return video.rating === 5.0;
    // })
    //   .map(function (video) {
    //     return video.id;
    //   });

    //   log(newReleases);

    let s = newReleases.filter(x => x.rating === 5).map(x => x.id);
    log(s);
    var movieLists = [
      {
        name: "New Releases",
        videos: [
          {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      },
      {
        name: "Dramas",
        videos: [
          {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          },
          {
            "id": 675423,
            "title": "Fracture2",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 2.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      }
    ];

    // let allVideoIdsInMovieLists = movieLists.map(x => x.videos);

    let allVideoIdsInMovieLists =
      of(movieLists.map(x => x.videos/*.map(y => y.id)*/))
        .pipe(
          //tap(x => log(x))
          //, 
          mergeAll()

        ).pipe(
          mergeAll()
        );

    allVideoIdsInMovieLists.subscribe(x => log(x));
  }

  addItem(val: any) {
    let node = document.createElement('li');
    let textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
  }
  CountryChanged() {
    this.StateList = this.formService.GetStates(this.f.Country.value);
  }

  StateChanged() {
    this.CityList = this.formService.GetCities(this.f.State.value);
  }

  submit() {
    console.log(this.FormStudent.value);
  }

}
