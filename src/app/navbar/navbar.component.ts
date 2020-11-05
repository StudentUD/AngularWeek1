import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   brandName:string; 
  constructor() {
    this.brandName = "Mi empresa"; 
   }

  ngOnInit(): void {
  }

}
