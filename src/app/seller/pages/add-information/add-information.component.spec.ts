import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInformationComponent } from './add-information.component';
import { FormComponentComponent } from '../../components/form-component/form-component.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { importProvidersFrom } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddInformationComponent', () => {
  let component: AddInformationComponent;
  let fixture: ComponentFixture<AddInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatFormFieldModule,
        MatLabel,
        MatDatepickerModule,
        MatSelectModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [AddInformationComponent, FormComponentComponent],
      providers:[importProvidersFrom(MatNativeDateModule)]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
