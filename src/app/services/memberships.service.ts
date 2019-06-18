import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Membership } from '@models/memberships';

@Injectable({
  providedIn: 'root',
})
export class MembershipsService {
  private url: string = `${environment.api}/memberships`;

  constructor(private http: HttpClient) {}

  getMemberships() {
    return this.http.get<Membership[]>(`${this.url}`);
  }

  getMembershipById(membershipId: number) {
    return this.http.get<Membership>(`${this.url}/${membershipId}`);
  }

  createMembership(membership: Membership) {
    return this.http.post(`${this.url}`, membership);
  }

  updateMembership(membershipId: number, membership: Membership) {
    return this.http.put(`${this.url}/${membershipId}`, membership);
  }

  deleteMembership(membershipId: number) {
    return this.http.delete(`${this.url}/${membershipId}`);
  }
}
