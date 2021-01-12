import { Component, OnInit } from '@angular/core';
import { AssignmentService } from './assignment.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  constructor(private assignmentService: AssignmentService) { }
  floors = [
    { id: 'Tầng 1-0', name: 'Tầng 1' },
    { id: 'Tầng 2-1', name: 'Tầng 2' },
    { id: 'Tầng 3-2', name: 'Tầng 3' }
  ];
  rooms: any;
  publicAreas: any;

  ngOnInit(): void {


    // get rooms
    this.assignmentService.getRoom().subscribe((res: any) => {
      this.rooms = res.data;
      console.log(this.rooms)
    })

    this.assignmentService.getPublicArea().subscribe((res: any) => {
      this.publicAreas = res.data;
    })

    // get floors 
    this.assignmentService.getFloors().subscribe((res: any) => {
      this.floors = res.data;
    })
  }

}
