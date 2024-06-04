import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InformationInterface } from '../../interfaces/Information.interface';
import { FormComponentProps } from '../../components/form-component/form-component.component';
import { InformationService } from '../../services/information/information.service';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html',
  styleUrl: './edit-information.component.css'
})
export class EditInformationComponent{
  formParams: FormComponentProps = {option: 'insert'}
  
  constructor(
    private activateRoutes: ActivatedRoute,
    private infoService: InformationService,
    private router: Router
  ){
    this.activateRoutes.queryParams.subscribe((params:any) => {
      if(params && params.special){
        this.formParams = {
          option: 'edit',
          data: JSON.parse(params.special)
        }
      }
    })
  }


  dataHandler(data:InformationInterface){
    console.log(data)
    this.infoService.updateSubj(data)
    this.router.navigate(['/seller/list-information'])
  }
}
