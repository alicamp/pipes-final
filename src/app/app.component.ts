import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showLoadingIndicator = true;
  constructor(private _router: Router) {
    this._router.events.subscribe((routerEvent: RouterEvent) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
        console.log(`showLoadingIndicator changed to ${this.showLoadingIndicator}`);
      }

      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.showLoadingIndicator = false;
      }
    });
  }


  // appStatus = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('stable');
  //   }, 2000);
  // });
  // servers = [
  //   {
  //     instanceType: 'medium',
  //     name: 'Production',
  //     status: 'stable',
  //     started: new Date(15, 1, 2017)
  //   },
  //   {
  //     instanceType: 'large',
  //     name: 'User Database',
  //     status: 'stable',
  //     started: new Date(15, 1, 2017)
  //   },
  //   {
  //     instanceType: 'small',
  //     name: 'Development Server',
  //     status: 'offline',
  //     started: new Date(15, 1, 2017)
  //   },
  //   {
  //     instanceType: 'small',
  //     name: 'Testing Environment Server',
  //     status: 'stable',
  //     started: new Date(15, 1, 2017)
  //   }
  // ];
  // filteredStatus = '';
  // getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
  //   return {
  //     'list-group-item-success': server.status === 'stable',
  //     'list-group-item-warning': server.status === 'offline',
  //     'list-group-item-danger': server.status === 'critical'
  //   };
  // }
  // onAddServer() {
  //   this.servers.push({
  //     instanceType: 'small',
  //     name: 'New Server',
  //     status: 'stable',
  //     started: new Date(15, 1, 2017)
  //   });
  // }
}
