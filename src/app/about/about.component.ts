import { Component, OnInit, HostListener, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';
import { FormControl } from '@angular/forms';
import { combineLatest, Observable, of, merge, fromEvent } from 'rxjs';
import { startWith, map, tap, mapTo, filter } from 'rxjs/operators';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1
          })
        ]))
      ]),
      transition('* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ])
    ]),
  ]
})
export class AboutComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    //this.test();
  }
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];
  inputValue = '';
  disableButtonAddItem: boolean = true;
  users = [
    { name: 'John', id: 1 },
    { name: 'Andrew', id: 2 },
    { name: 'Anna', id: 3 },
    { name: 'Iris', id: 4 },
  ];

  blackListedUsers = new FormControl([]);
  selectedUserId = new FormControl(null);
  allowBlackListedUsers = new FormControl(false);

  /* search code starts */

  /* old implementation
  
  query = '';
   isSearchInputVisible = false;
 
   showSearchInput(event: MouseEvent) {
     event.stopPropagation();
     this.isSearchInputVisible = true;
   }
 
   @HostListener('document:click')
   hideSearchInput() {
     if (this.query === '') {
       this.isSearchInputVisible = false;
     }
   }
 */
  @ViewChild('btn', { static: true }) buttonRef: ElementRef<HTMLButtonElement>;
  query = '';
  isSearchInputVisible$: Observable<boolean> = of(false);


  ngAfterViewInit() {
    this.isSearchInputVisible$ = merge(
      fromEvent(this.buttonRef.nativeElement, 'click')
        .pipe(
          tap(e => e.stopPropagation()), mapTo(true)
        ),
      fromEvent(document.body, 'click')
        .pipe(
          filter(() => this.query === ''), mapTo(false)
        )
    )
      .pipe(
        startWith(false)
      );
  }
  /* search code ends */

  isDisabled$ = combineLatest([
    this.allowBlackListedUsers.valueChanges.pipe(startWith(false)),
    this.blackListedUsers.valueChanges.pipe(startWith([])),
    this.selectedUserId.valueChanges.pipe(startWith(null), map(id => +id)),
  ]).pipe(
    map(
      ([allowBlackListed, blackList, selected]) => !allowBlackListed && blackList.includes(selected),
    ),
  );

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onAdd(item) {
    this.list.push(item);
    this.inputValue = ''
  }

  inputValid(): void {
    if (this.inputValue === '') {
      console.log('button set to true');
      this.disableButtonAddItem = true;
    }
    else {
      console.log('button set to false');
      this.disableButtonAddItem = false;
    }
  }

  onDelete(item) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  animationStarted(event) {
    console.log(event);
  }

  animationEnded(event) {
    console.log(event);
  }

  test() {
    console.log('test called');
    
    let object = [{ a: 1, b: 2 }];
    let arr = [1, 2, 3, 4, 5];

    Array.prototype.map = function (projectionFunction) {
      let r = [];
      this.forEach(element => {
        r.push(projectionFunction(element, this.length - 1, this))
      });
      return r;
    }

    arr.map(x => x + 2);
    console.log(arr);
    
    Array.prototype.concat = function () {
      var results = [];
      this.forEach(function (subArray) {
        results.push.apply(results, subArray);
      });

      return results;
    };


    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element);
      }
    }
  }


}
