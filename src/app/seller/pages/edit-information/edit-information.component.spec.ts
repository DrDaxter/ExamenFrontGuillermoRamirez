import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInformationComponent } from './edit-information.component';
import { provideRouter } from '@angular/router';
import { FormComponentComponent } from '../../components/form-component/form-component.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { importProvidersFrom } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('EditInformationComponent', () => {
  let component: EditInformationComponent;
  let fixture: ComponentFixture<EditInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [EditInformationComponent,FormComponentComponent],
      providers: [provideRouter([]), importProvidersFrom(MatNativeDateModule)],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
