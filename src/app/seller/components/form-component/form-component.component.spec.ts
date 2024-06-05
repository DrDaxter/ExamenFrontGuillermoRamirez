import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentComponent } from './form-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { importProvidersFrom } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormComponentComponent', () => {
  let component: FormComponentComponent;
  let fixture: ComponentFixture<FormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatLabel,
        MatSelectModule,
        MatRadioModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [FormComponentComponent],
      providers: [importProvidersFrom(MatNativeDateModule)]
    }).compileComponents();
    
    fixture = TestBed.createComponent(FormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form val good values', () => {
    component.infoForm.get('firstName')?.setValue("Guillermo");
    component.infoForm.get('lastName')?.setValue("Ramirez");
    component.infoForm.get('country')?.setValue("guatemala");
    component.infoForm.get('costumerId')?.setValue("0000000");
    component.infoForm.get('birthday')?.setValue(new Date());
    component.infoForm.get('gender')?.setValue("Masculino");
    component.infoForm.get('cellPhone')?.setValue("0000000");
    component.infoForm.get('homePhone')?.setValue("00000000");
    component.infoForm.get('addressHome')?.setValue("casa");
    component.infoForm.get('profession')?.setValue("ingeniero");
    component.infoForm.get('incomes')?.setValue(200);

    expect(component.infoForm.invalid).toBeFalse();
  });

  it('form val wrong values', () => {
    component.infoForm.get('firstName')?.setValue(undefined);
    component.infoForm.get('lastName')?.setValue("Ramirez");
    component.infoForm.get('country')?.setValue("pais x");
    component.infoForm.get('costumerId')?.setValue("0000000");
    component.infoForm.get('birthday')?.setValue('23/2/2024');
    component.infoForm.get('gender')?.setValue(233);
    component.infoForm.get('cellPhone')?.setValue('');
    component.infoForm.get('homePhone')?.setValue("00000000");
    component.infoForm.get('addressHome')?.setValue("casa");
    component.infoForm.get('profession')?.setValue("ingeniero");
    component.infoForm.get('incomes')?.setValue('asasas');
    
    expect(component.infoForm.invalid).toBeTrue();
  })
});
