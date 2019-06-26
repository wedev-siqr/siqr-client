import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientsFilterPayload, ClientInfo } from '@models/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private url: string = `${environment.api}/clients`;

  constructor(private http: HttpClient) {}

  getClients(filters: ClientsFilterPayload = null) {
    if (!filters) return this.http.get<ClientInfo[]>(this.url);

    const activeFilters = Object.keys(filters).reduce(
      (o, k) => (!!filters[k] ? { [k]: filters[k], ...o } : o),
      {}
    );

    const params = new HttpParams({
      fromObject: activeFilters,
    });

    return this.http.get<ClientInfo[]>(this.url, { params });
  }

  getClientById(clientId: number) {
    return this.http.get<ClientInfo>(`${this.url}/${clientId}`);
  }

  createClient(client: ClientInfo) {
    return this.http.post(this.url, client);
  }

  updateClient(clientId: number, client: ClientInfo) {
    return this.http.put(`${this.url}/${clientId}`, client);
  }

  deleteClient(clientId: number) {
    return this.http.delete(`${this.url}/${clientId}`);
  }

  getQRCode(clientId: number) {
    return this.http.get(`${this.url}/${clientId}/code`);
  }

  getClientByCode(code: any) {
    const params = new HttpParams().append('code', code);
    return this.http.get(`${this.url}/code`, { params });
  }

  accessWithCode(code: any) {
    return this.http.post(`${environment.api}/access`, code);
  }
}
