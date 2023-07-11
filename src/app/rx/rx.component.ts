import { Component, OnInit } from '@angular/core';
import { of, from, Subject, fromEvent } from 'rxjs';
import { tap, map, filter, reduce, flatMap, max, groupBy, find, scan, concatAll, mapTo, mergeMap } from 'rxjs/operators';
import { title } from 'process';
import { flatten } from '@angular/compiler';
import { error } from 'protractor';

@Component({
  selector: 'app-rx',
  templateUrl: './rx.component.html',
  styleUrls: ['./rx.component.css']
})
export class RxComponent implements OnInit {

  constructor() { }



  ngOnInit() {
    //this.useForEach();
    //this.projectFromArray();
    //this.flattenments();
    //this.arrayLists();
    //this.subjectExplore();
    //this.concatMapEx();
    //this.combineLists();

    let btnClicks = fromEvent(document.getElementById('btn'), 'click');

    btnClicks
      .pipe(
        tap(x => {
          console.log(x);
        })
      )
      .subscribe();


  }
  combineLists() {
    var lists = [
      {
        "id": 5434364,
        "name": "New Releases"
      },
      {
        "id": 65456475,
        name: "Thrillers"
      }
    ],
      videos = [
        {
          "listId": 5434364,
          "id": 65432445,
          "title": "The Chamber"
        },
        {
          "listId": 5434364,
          "id": 675465,
          "title": "Fracture"
        },
        {
          "listId": 65456475,
          "id": 70111470,
          "title": "Die Hard"
        },
        {
          "listId": 65456475,
          "id": 654356453,
          "title": "Bad Boys"
        }
      ];

    let s = [];
    s = lists.map(x => [{
      name: x.name,
      vid: videos
        .filter(y => y.listId === x.id)
        .map(vid => [{
          id: vid.id,
          title: vid.title
        }])
    }]);

    console.log(s);

    s = lists.map(x => [{ id: x.id, name: x.name }]);
    // from(lists).pipe(
    //   map(x => [{ dd: x.id, nm: x.name }])
    // );





    console.log(s);
    console.log(lists);
  }
  concatMapEx() {
    var movieLists = [
      {
        name: "Instant Queue",
        videos: [
          {
            "id": 70111470,
            "title": "Die Hard",
            "boxarts": [
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 654356453,
            "title": "Bad Boys",
            "boxarts": [
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      },
      {
        name: "New Releases",
        videos: [
          {
            "id": 65432445,
            "title": "The Chamber",
            "boxarts": [
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 675465,
            "title": "Fracture",
            "boxarts": [
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
              { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      }
    ];

    //let reducedArray = [];

    let reducedArray = from(movieLists)
      .pipe(
        map(x => [x.videos])
        //,map(x => flatten(x))
      )
      .pipe(map(x => flatten(x)));
    console.log(reducedArray.subscribe((x: any) => console.log(x)));

  }
  subjectExplore() {
    const subject = new Subject();
    //scan example building an object over time
    const example = subject.pipe(
      scan((acc, curr) => Object.assign({}, acc, curr), {})
    );
    //log accumulated values
    const subscribe = example.subscribe(val =>
      console.log('Accumulated object:', val)
    );
    //next values into subject, adding properties to object
    // {name: 'Joe'}
    subject.next({ name: 'Joe' });
    // {name: 'Joe', age: 30}
    subject.next({ age: 30 });
    // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
    subject.next({ favoriteLanguage: 'JavaScript' });


    //subject ends

    const arraySource = from([1, 2, 3, 4, 5]);
    const array1Source = of([1, 2, 3, 4, 5]);
    let str = 'aliabbas';

    arraySource.subscribe(x => console.log(x));
    array1Source.subscribe(x => console.log(x));
    from(str).subscribe(x => console.log(x));
    of(str).subscribe(x => console.log(x));
  }
  arrayLists() {
    var movieLists = [
      {
        name: "Instant Queue",
        videos: [
          {
            "id": 70111470,
            "title": "Die Hard",
            "boxarts": [
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 654356453,
            "title": "Bad Boys",
            "boxarts": [
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      },
      {
        name: "New Releases",
        videos: [
          {
            "id": 65432445,
            "title": "The Chamber",
            "boxarts": [
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 675465,
            "title": "Fracture",
            "boxarts": [
              { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
              { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
              { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
            ],
            "url": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id: 432534, time: 65876586 }]
          }
        ]
      }
    ];

    let results = [];

    movieLists.forEach(element => {
      var nm = element.name;
      element.videos.forEach(el => {
        results
          .push([nm, el.id,
            el.boxarts.filter(x => x.width === 150 && x.height === 200)
              .map(x => x.url)]);
      });
    });

    console.log(results);


    var boxarts = [
      { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
      { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
      { width: 425, height: 150, url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ],
      currentSize,
      maxSize = -1,
      largestBoxart;


    //boxarts.filter(x => find(x.width * x.height))
    console.log(Math.max.apply(Math, boxarts.map(x => x.height * x.width)));

    console.log(boxarts.filter(x => x.width * x.height === Math.max.apply(Math, boxarts.map(x => x.height * x.width))));
  }
  flattenments() {
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
            "id": 675111,
            "title": "Debacle",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.5,
            "bookmark": [{ id: 2352, time: 235235325 }]
          }
        ]
      }
    ],
      allVideoIdsInMovieLists = [];

    movieLists.forEach(x => {
      x.videos.forEach(vid => {
        allVideoIdsInMovieLists.push(vid);
      });
    });
    console.log(allVideoIdsInMovieLists);

    let s$ = from(movieLists).pipe(filter(x => x.name === 'Dramas'));
    s$.subscribe(x => console.log(x));

    let p$ = from(movieLists)
      .pipe(
        flatMap(x => x.videos)
      ).pipe(
        map(x => x.id)
      );

    p$.subscribe(x => console.log(x));
  }

  useForEach() {
    let names = ["Ben", "Jafar", "Matt", "Priya", "Brian"], counter;

    //plain method
    for (counter = 0; counter < names.length; counter++) {
      console.log(names[counter]);
    }

    //foreach short
    names.forEach(x => {
      console.log(x);
    });

    //foreach log
    names.forEach(function (name) {
      return name;
    })
    console.log('of follows');

    of(names)
      //.pipe(tap(x => console.log(x)))
      .subscribe(x => console.log(x));

  }

  projectFromArray() {
    var newReleases = [
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
    ],
      videoAndTitlePairs = [];

    newReleases.forEach(x => {
      videoAndTitlePairs.push({ id: x.id, title: x.title });
    });
    console.log(videoAndTitlePairs);
    //console.log(newReleases);
    videoAndTitlePairs = [];
    newReleases.forEach(x => {
      if (x.rating === 5) {
        videoAndTitlePairs.push(x);
      }
    });
    console.log(videoAndTitlePairs);


    videoAndTitlePairs = [];
    console.log(newReleases.filter(x => x.rating === 5).map(x => x.id));

    // let s = newReleases.map(x => {id: x.id });
    // console.log(s);
  }
}
