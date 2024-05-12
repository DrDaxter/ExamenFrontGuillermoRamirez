import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InformationInterface } from '../../interfaces/Information.interface';
import {v4 as uuid} from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class InformationService {
  private informationObj: InformationInterface[] = []
  constructor() { }

  setInfoSubj(information:InformationInterface){
    information.uid = uuid()
    this.informationObj.push(information)
  }
  
  updateSubj(information:InformationInterface){
    this.informationObj = this.informationObj.map(item => {
      if(item.uid === information.uid){
        console.log("FIND")
        item = {
          ...information
        }
        return item
      }else{
        return item
      }
    })
    console.log(this.informationObj)
  }

  getInfoSubj(){
    console.log(this.informationObj)
    return this.informationObj
  }
}
