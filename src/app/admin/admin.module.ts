import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCheckListTemplateComponent } from './check-list-template/create/create.component';
import { DeleteCheckListTemplateComponent } from './check-list-template/delete/delete.component';
import { CheckListTemplateComponent } from './check-list-template/check-list-template.component';
import { CheckListTemplateService } from './check-list-template/check-list-template.service';
import { HttpClientModule } from '@angular/common/http';
import { CheckStatusComponent } from './check-status/check-status.component';
import { CreateCheckStatusComponent } from './check-status/create/create.component';
import { DeleteCheckStatusComponent } from './check-status/delete/delete.component';
import { CheckStatusService } from './check-status/check-status.service';
import { DeleteCleanStatusComponent } from './clean-status/delete/delete.component';
import { CleanStatusComponent } from './clean-status/clean-status.component';
import { CreateCleanStatusComponent } from './clean-status/create/create.component';
import { CleanStatusService } from './clean-status/clean-status.service';
import { RoomStatusComponent } from './room-status/room-status.component';
import { CreateRoomStatusComponent } from './room-status/create/create.component';
import { DeleteRoomStatusComponent } from './room-status/delete/delete.component';
import { RoomStatusService } from './room-status/room-status.service';
import { RoomTypeComponent } from './room-type/room-type.component';
import { CreateRoomTypeComponent } from './room-type/create/create.component';
import { DeleteRoomTypeComponent } from './room-type/delete/delete.component';
import { RoomTypeService } from './room-type/room-type.service';
import { CreateRoomComponent } from './room/create/create.component';
import { RoomComponent } from './room/room.component';
import { DeleteRoomComponent } from './room/delete/delete.component';
import { RoomService } from './room/room.service';
import { FloorsComponent } from './floors/floors.component';
import { CreateFloorsComponent } from './floors/create/create.component';
import { DeleteFloorsComponent } from './floors/delete/delete.component';
import { FloorsService } from './floors/floors.service';
import { DeleteHotelComponent } from './hotel/delete/delete.component';
import { CreateHotelComponent } from './hotel/create/create.component';
import { HotelComponent } from './hotel/hotel.component';
import { HotelService } from './hotel/hotel.service';
import { PublicAreaComponent } from './public-area/public-area.component';
import { CreatePublicAreaComponent } from './public-area/create/create.component';
import { DeletePublicAreaComponent } from './public-area/delete/delete.component';
import { CleanComponent } from './clean/clean.component';
import { CreateCleanComponent } from './clean/create/create.component';
import { DeleteCleanComponent } from './clean/delete/delete.component';
import { CleanService } from './clean/clean.service';
import { CustomerService } from './customer/customer.service';
import { DeleteCustomerComponent } from './customer/delete/delete.component';
import { CreateCustomerComponent } from './customer/create/create.component';
import { CustomerComponent } from './customer/customer.component';
import { PublicAreaService } from './public-area/public-area.service';

@NgModule({
  declarations: [
    AdminComponent,
    CheckListTemplateComponent,
    CreateCheckListTemplateComponent,
    DeleteCheckListTemplateComponent,

    CheckStatusComponent,
    CreateCheckStatusComponent,
    DeleteCheckStatusComponent,

    CleanStatusComponent,
    CreateCleanStatusComponent,
    DeleteCleanStatusComponent,

    RoomStatusComponent,
    CreateRoomStatusComponent,
    DeleteRoomStatusComponent,

    RoomTypeComponent,
    CreateRoomTypeComponent,
    DeleteRoomTypeComponent,

    RoomComponent,
    CreateRoomComponent,
    DeleteRoomComponent,

    FloorsComponent,
    CreateFloorsComponent,
    DeleteFloorsComponent,

    HotelComponent,
    CreateHotelComponent,
    DeleteHotelComponent,

    PublicAreaComponent,
    CreatePublicAreaComponent,
    DeletePublicAreaComponent,

    CleanComponent,
    CreateCleanComponent,
    DeleteCleanComponent,
    
    CustomerComponent,
    CreateCustomerComponent,
    DeleteCustomerComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CheckListTemplateService,
    CheckStatusService,
    CleanStatusService,
    RoomStatusService,
    RoomTypeService,
    RoomService,
    FloorsService,
    HotelService,
    CleanService,
    CustomerService,
    PublicAreaService
  ]
})
export class AdminModule { }
