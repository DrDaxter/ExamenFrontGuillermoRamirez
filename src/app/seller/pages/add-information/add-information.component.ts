import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InformationInterface } from '../../interfaces/Information.interface';
import { InformationService } from '../../services/information/information.service';

@Component({
  selector: 'app-add-information',
  templateUrl: './add-information.component.html',
  styleUrl: './add-information.component.css'
})
export class AddInformationComponent{
  constructor(
    private infoService: InformationService
  ){
    
  }

  dataHandler(data:InformationInterface){
    this.infoService.setInfoSubj(data)
  }

}
