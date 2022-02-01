import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wss-data-output',
  templateUrl: './wss-data-output.component.html',
  styleUrls: ['./wss-data-output.component.scss']
})
export class WssDataOutputComponent implements OnInit {

  @Input()
  anyinput!: string;
  
  @Input()
  ipv4!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
