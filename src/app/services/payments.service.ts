import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentsService {
  private url: string = `${environment.api}/payments`;

  constructor(private http: HttpClient) {}

  getPayments(filters: any) {
    const params = new HttpParams().append('code', filters.code);
    return this.http.get<any[]>(this.url, { params });
  }

  registerPayment(clientId: number, payment: any) {
    return this.http.post(`${this.url}/${clientId}`, payment);
  }
}
