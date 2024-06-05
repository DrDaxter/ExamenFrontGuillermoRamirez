import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInformationComponent } from './pages/add-information/add-information.component';
import { ListInformationComponent } from './pages/list-information/list-information.component';
import { SellerRoutingModule } from './seller-routing.module';
import { EditInformationComponent } from './pages/edit-information/edit-information.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
//angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AddInformationComponent,
    ListInformationComponent,
    EditInformationComponent,
    FormComponentComponent,
  ],
  imports: [
    CommonModule,
    SellerRoutingModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class SellerModule { }
