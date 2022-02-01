import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/comm/data-service.service';
import { Router } from '@angular/router';
import {PageComponent} from './../../shared/page/page.component';
@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.scss']
})
export class ResultPageComponent  extends PageComponent implements OnInit {
  anyinput!: string;
  ipv4!: string;
  constructor(   
    public override router: Router,
    private dataServiceService:DataServiceService) {
    super(router);
   }

  override ngOnInit(): void {
    let that = this;
    this.dataServiceService.dataObsevable.subscribe((data)=>{
      if(data) {
      that.anyinput = data.input1;
      that.ipv4 = data.ipv4;
      } else {
        this.goToPage('landing');
      }
    });
  }

}
