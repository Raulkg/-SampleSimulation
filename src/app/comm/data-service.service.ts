import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  public dataObsevable: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }
  setData(data: any) {
    this.dataObsevable.next(data);
  }
}
