export interface UsersFilterPayload {
  code: string;
  name: string;
  firstSurname: string;
  secondSurname: string;
  birthdate: Date;
  email: string;
  curp: string;
}

export interface UserPayload {
  photo: UserPhoto;
  info: UserInfo;
  address: UserAddress;
}

export interface UserInfo {
  name: string;
  firstSurname: string;
  secondSurname: string;
  birthdate: Date;
  gender: string;
  curp: string;
  phone: string;
  email: string;
  membershipId: number;
}

export interface UserAddress {
  street: string;
  external_number: string;
  internal_number: string;
  postal_code: number;
  district: string;
  municipality: string;
  state: string;
}

export interface UserMedicalInfo {
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

export interface UserPhoto {
  photo: string;
}
