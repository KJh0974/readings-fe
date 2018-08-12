import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-meters',
  templateUrl: './meters.component.html',
  styleUrls: ['./meters.component.scss']
})
export class MetersComponent implements OnInit {

  readings$: Object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getReadings().subscribe(
      data => this.readings$ = data
    );
  }

}
