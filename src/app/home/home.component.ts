import { Component } from '@angular/core';

export interface Product{
  name: string,
  description?: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
