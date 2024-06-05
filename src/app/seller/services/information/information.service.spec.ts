import { TestBed } from '@angular/core/testing';

import { InformationService } from './information.service';
import { InformationInterface } from '../../interfaces/Information.interface';

describe('InformationService', () => {
  let service: InformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('adding data to array test', () => {
    const dataExample: InformationInterface[] = [{
      country: "el salvador",
      costumerId: "059769156",
      firstName: "Guillermo",
      lastName: "Ramirez",
      birthday: new Date("2024-06-06T06:00:00.000Z"),
      gender: "Masculino",
      cellPhone: "76676036",
      homePhone: "76676036",
      addressHome: "san salvador",
      profession: "ingeniero",
      incomes: 20,
      uid: "278f0f8a-1b40-4196-b10c-132453edad55"
    }]

    service.setInfoSubj(dataExample[0]);

    expect(service.getInfoSubj()).toEqual(dataExample);
  });

  it('update data in array test', () => {
    const dataExample: InformationInterface[] = [{
      country: "el salvador",
      costumerId: "059769156",
      firstName: "Guillermo",
      lastName: "Ramirez",
      birthday: new Date("2024-06-06T06:00:00.000Z"),
      gender: "Masculino",
      cellPhone: "76676036",
      homePhone: "76676036",
      addressHome: "san salvador",
      profession: "ingeniero",
      incomes: 20,
      uid: "278f0f8a-1b40-4196-b10c-132453edad55"
    }]

    service.setInfoSubj(dataExample[0]);

    const dataExampleUpdate: InformationInterface[] = [{
      ... service.getInfoSubj()[0],
      incomes: 300
    }]

    service.updateSubj(dataExampleUpdate[0]);

    expect(service.getInfoSubj()).toEqual(dataExampleUpdate)
  });
});
