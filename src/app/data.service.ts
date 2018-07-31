import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getReadings() {
    return this.http.get('http://192.168.99.100:8080/readings');
  }

  getPeriods() {
    return this.http.get('http://192.168.99.100:8080/periods');
  }
}
