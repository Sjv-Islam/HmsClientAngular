import { Component, OnInit } from '@angular/core';
import { Patient } from '../../../models/patient';
import { PatientsService } from '../../../services/patients.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit {

  public patients: Patient[] = [];

  constructor(private service: PatientsService) {  }

  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.service.GetPatients().subscribe((response: Patient[]) => {
      this.patients = response;
      console.log(response);
    }, (error) => {
      console.log('Observable emitted an error: ' + error);
    });
  }

  DeletePatient(patient: Patient) {
    let confirmDelete: boolean = confirm(`Delete ${patient.name}?`);
    if (confirmDelete) {
      this.service.DeletePatient(patient.patientId).subscribe(() => {
        this.LoadData();
      }, (error) => {
        console.log('Observable emitted an error: ' + error);
      });
    }
  }
}
