import { Component } from '@angular/core';
import { Doctor } from '../../../models/doctor';
import { DoctorService } from '../../../services/doctor.service';
import { FilterSettingsModel, PageSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export class DoctorListComponent {
  public doctor: Doctor[] = [];

  public pageSettings: PageSettingsModel = { pageSize: 5 };
  public filterSettings: FilterSettingsModel = { type: 'FilterBar' };

  public toolbarOptions?: ToolbarItems[] = ['Search',
    //'Print',
    'ColumnChooser',
    //'Add', 'Edit', 'Delete', 'Update', 'Cancel',
    //'PdfExport',
    //'ExcelExport',
    //'CsvExport'
  ];
  constructor(private doctorService: DoctorService) {

  }
  ngOnInit(): void {
    this.LoadData();
  }

  LoadData() {
    this.doctorService.getAllDoctors().subscribe((response: Doctor[]) => {
      this.doctor = response;
      console.log(response);
    },
      (error) => {
        console.log('Observable emitted an error:' + error);

      });
  }

  deleteDoctor(doctor: Doctor) {
    let confirmDelete: boolean = confirm(`Delete: ${doctor.name}?`);

    if (confirmDelete) {

      this.doctorService.deleteDoctor(doctor.doctorId).subscribe(() => {
        alert('test');
        this.LoadData();
      },
        (error) => {
          console.log('Observable emitted an error:' + error);
        });
    }

  }
}
