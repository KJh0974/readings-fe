import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-periods',
  templateUrl: './periods.component.html',
  styleUrls: ['./periods.component.scss']
})
export class PeriodsComponent implements OnInit {

  periods$: Object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getPeriods().subscribe(
      data => this.periods$ = data
    );
  }

}
