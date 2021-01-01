import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from '../hotel/hotel.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { MaterialModule } from '../../material-module';
import { HotelService } from './hotel.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './delete/delete.component';
 

@NgModule({
  declarations: [HotelComponent, CreateComponent, DeleteComponent],
  imports: [
    CommonModule,
    HotelRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HotelService],
  entryComponents: [
    CreateComponent, DeleteComponent
  ],
})
export class HotelModule { }
