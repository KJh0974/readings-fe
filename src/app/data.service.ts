import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  // getReadings() {
  //   return this.http.get('http://localhost:8080/readings');
  // }
  //
  // addReading(inputValue, periodId, meterId) {
  //   return this.http.post('http://localhost:8080/readings', {
  //     'value': inputValue,
  //     'periodId': periodId,
  //     'meterId': meterId
  //   });
  // }

  getObjects() {
    return this.http.get('http://localhost:8080/objects');
  }
}
