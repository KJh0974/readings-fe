import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  objects$: Object;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getObjects().subscribe(
      data => this.objects$ = data
    );
  }

}
