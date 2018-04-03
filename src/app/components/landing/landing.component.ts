import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }
  title = 'Landing page';

  ngOnInit() {
      this.route.queryParams.subscribe(params => {
          if(params.title) {
              this.title = params.title;
          }
          console.log(params);
      });
      if(this.route.snapshot.routeConfig.path === '404') {
          this.title = '404 unknown link';
      }
  }

}
