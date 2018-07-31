import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.scss']
})
export class ReadingsComponent implements OnInit {

  readings$: Object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getReadings().subscribe(
      data => this.readings$ = data
    );
  }

}
