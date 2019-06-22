import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class OpenDataService {
  private url: string =
    'https://public.opendatasoft.com/api/records/1.0/search';

  constructor(private http: HttpClient) {}

  getStates() {
    return this.http
      .get<any[]>(
        `${this.url}/?dataset=estados-de-mexico&facet=codigo&facet=estado`
      )
      .pipe(
        map((records) =>
          records.map((record) => record.fields.estado.toUpperCase())
        )
      );
  }

  getCities(state: string) {
    return this.http
      .get<any[]>(
        `${
          this.url
        }/?dataset=ciudades-de-mexico&facet=name_1&facet=name_2&refine.name_1=${state}`
      )
      .pipe(
        map((records) =>
          records.map((record) => record.fields.name_2.toUpperCase())
        )
      );
  }
}
