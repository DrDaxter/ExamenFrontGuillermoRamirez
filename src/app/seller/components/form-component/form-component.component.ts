import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InformationInterface } from '../../interfaces/Information.interface';

export interface FormComponentProps{
  option: 'edit'|'insert',
  data?: InformationInterface
}

@Component({
  selector: 'form-component',
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent implements OnInit{
  @Output() InformationHandler: EventEmitter<InformationInterface> = new EventEmitter()
  @Input() MetaData: FormComponentProps = {option: 'insert'}
  btnText:string = "Guardar"
  infoForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder,
  ){
    this.formValidators()
  }

  ngOnInit() {
    if(this.MetaData.option === 'edit' && this.MetaData.data){
      this.setFormData(this.MetaData.data)
      this.btnText = "Guardar Cambios"
    }
    console.log(this.MetaData)
  }

  dataHandler(data:InformationInterface){
    if(this.MetaData.option === 'edit'){
      const uid = this.MetaData.data!.uid
      data = {
        ...data,
        uid
      }
    }
      
    this.InformationHandler.emit(data)
    this.infoForm.reset()
  }

  formValidators(){
    this.infoForm = this.formBuilder.group({
      country: new FormControl("", Validators.compose([
        Validators.required
      ])),
      costumerId: new FormControl("", Validators.compose([
        Validators.required
      ])),
      firstName: new FormControl("", Validators.compose([
        Validators.required
      ])),
      lastName: new FormControl("", Validators.compose([
        Validators.required
      ])),
      birthday: new FormControl("", Validators.compose([
        Validators.required
      ])),
      gender: new FormControl("", Validators.compose([
        Validators.required
      ])),
      cellPhone: new FormControl("", Validators.compose([
        Validators.required
      ])),
      homePhone: new FormControl("", Validators.compose([
        Validators.required
      ])),
      addressHome: new FormControl("", Validators.compose([
        Validators.required
      ])),
      profession: new FormControl("", Validators.compose([
        Validators.required
      ])),
      incomes: new FormControl("", Validators.compose([
        Validators.required
      ])),
    })
  }

  setFormData(data:InformationInterface){
    this.infoForm.get('country')?.setValue(data.country)
    this.infoForm.get('costumerId')?.setValue(data.costumerId)
    this.infoForm.get('firstName')?.setValue(data.firstName)
    this.infoForm.get('lastName')?.setValue(data.lastName)
    this.infoForm.get('birthday')?.setValue(data.birthday)
    this.infoForm.get('gender')?.setValue(data.gender)
    this.infoForm.get('cellPhone')?.setValue(data.cellPhone)
    this.infoForm.get('homePhone')?.setValue(data.homePhone)
    this.infoForm.get('addressHome')?.setValue(data.addressHome)
    this.infoForm.get('profession')?.setValue(data.profession)
    this.infoForm.get('incomes')?.setValue(data.incomes)
  }
}
