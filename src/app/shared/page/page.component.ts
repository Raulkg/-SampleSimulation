import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  goToPage(routename: string) {
    this.router.navigateByUrl(`/${routename}`);
  }

}
