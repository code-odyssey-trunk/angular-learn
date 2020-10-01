import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.scss']
})
export class List1Component implements OnInit {

  brews: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    })
  }

}
