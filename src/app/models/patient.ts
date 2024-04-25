import { BloodType } from "./blood-type";

export class Patient {
  patientId!: number;
  name!: string;
  dob?: Date = new Date();
  gender!: string;
  age?: number;
  contactNo!: string;
  email?: string;
  address?: string;
  status!: string;
  insuranceInformation!: string;

 
  bloodTypeID?: number;
  bloodType!: BloodType;;
}
