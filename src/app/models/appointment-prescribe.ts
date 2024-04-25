import { Appointment } from "./appointment";

export class AppointmentPrescribe {
  appointmentID!: number;
  symptoms: string = '';

  medication!: string;
  dosgae?: string;
  instructions?: string;
  followupDate: Date = new Date();

  followupNotes?: string;
  appointment!: Appointment;
}
