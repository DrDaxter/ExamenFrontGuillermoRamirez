import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInformationComponent } from './list-information.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListInformationComponent', () => {
  let component: ListInformationComponent;
  let fixture: ComponentFixture<ListInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatPaginatorModule,
        MatTableModule,
        BrowserAnimationsModule
      ],
      declarations: [ListInformationComponent],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
