import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  apiKey= '3caf67cc2493e681023afce64c568e56';
  url='https://api.openweathermap.org/data/2.5/weather?appid=';
  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any>{
    const URL = this.url + this.apiKey + '&q=' + ciudad;
    return this.http.get(URL);
  }
}
