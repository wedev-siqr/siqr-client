import { Membership } from './memberships';

export interface ClientsFilterPayload {
  code: string;
  name: string;
  firstSurname: string;
  secondSurname: string;
  birthdate: Date;
  email: string;
  curp: string;
}
export interface ClientPayload {
  direction: ClientAddress;
  medicalInfo: ClientMedicalInfo;
  membership: Membership;
  client: ClientInfo;
  emergencyContact?: EmergencyContact;
}

export interface ClientInfo {
  name: string;
  firstSurname: string;
  secondSurname: string;
  birthdate: Date;
  gender: string;
  curp: string;
  phone: string;
  email: string;
  membership_id: number;
  registerDate: Date;
  code: string;
  photoUrl: string;
}

export interface ClientAddress {
  street: string;
  external_number: string;
  internal_number: string;
  postal_code: number;
  district: string;
  municipality: string;
  state: string;
}

export interface ClientMedicalInfo {
  affiliation: string;
  bloodType: string;
  rh: string;
  alergies: string;
  diseases: string;
  emergencyContact: EmergencyContact;
}

export interface EmergencyContact {
  name: string;
  firstSurname: string;
  secondSurname: string;
  phone: string;
}

export interface ClientPhoto {
  photoUrl: string;
}
