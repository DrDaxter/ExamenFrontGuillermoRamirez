import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InformationInterface } from '../../interfaces/Information.interface';
import { InformationService } from '../../services/information/information.service';
import { NavigationExtras, Router } from '@angular/router';
import { FormComponentProps } from '../../components/form-component/form-component.component';

@Component({
  selector: 'app-list-information',
  templateUrl: './list-information.component.html',
  styleUrl: './list-information.component.css'
})
export class ListInformationComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['country','costumerId','firstName','lastName','birthday','gender',
  'cellPhone','homePhone','addressHome','profession','incomes']

  dataSource!: MatTableDataSource<InformationInterface>
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private informationService: InformationService,
    private router: Router
  ){
    
  }

  ngOnInit() {
    this.getInformation()
  }  

  getInformation(){
    const data = this.informationService.getInfoSubj()
    this.dataSource = new MatTableDataSource<InformationInterface>(data)
  }

  editInformation(data:any){
    console.log(data)
    const params:NavigationExtras = {queryParams: {special: JSON.stringify(data)}}
    this.router.navigate(['/seller/edit-information'], params)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
